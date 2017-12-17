package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.dto.*;
import com.muni.fi.pa165project.dto.filters.ActivityFilterDTO;
import com.muni.fi.pa165project.enums.Category;
import com.muni.fi.pa165project.facade.ActivityFacade;
import com.muni.fi.pa165project.service.config.ServiceConfiguration;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * @author Radim Podola
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = ServiceConfiguration.class)
public class ActivityFacadeIT {

    @Autowired
    private ActivityFacade acFac;

    private ActivityCreateDTO activity;
    private ActivityDetailDTO activityDetail;

    @Before
    public void setup() {
        activity = FacadeTestHelper.initActivity();
        activityDetail = FacadeTestHelper.initActivityDetail();
    }

    @Test
    @Transactional
    @Rollback()
    public void testCreateActivity() {
        //persist activityDetail
        Long activityId = acFac.createActivity(activity);
        Assert.assertNotNull(activityId);
        ActivityDetailDTO found = acFac.getActivityDetail(activityId);
        Assert.assertEquals(activityDetail, found);
    }

    @Test(expected = DataAccessException.class)
    @Transactional
    @Rollback()
    public void testCreateActivityNull() {
        activity.setName(null);
        acFac.createActivity(activity);
    }

    @Test
    @Transactional
    @Rollback()
    public void testEditActivity() {
        final String newName = "Different activity";
        //user id is needed for update
        Long activityId = acFac.createActivity(activity);
        //lets change name
        ActivityDetailDTO detail = acFac.getActivityDetail(activityId);
        ActivityUpdateDTO changed = new ActivityUpdateDTO();
        changed.setName(newName);
        changed.setId(detail.getId());
        changed.setBurnedCalories(detail.getBurnedCalories());
        changed.setDescription(detail.getDescription());
        changed.setCategory(activity.getCategory());
        acFac.editActivity(changed);
        //lets get user with changed name
        ActivityDetailDTO found = this.acFac.getActivityDetail(activityId);
        
        Assert.assertEquals(found.getId(), changed.getId());
        Assert.assertEquals(found.getName(), newName);
    }

    @Test
    @Transactional
    @Rollback()
    public void testRemoveActivity() {
        Long activityId = acFac.createActivity(activity);
        acFac.removeActivity(activityId);
        ActivityDetailDTO found = this.acFac.getActivityDetail(activityId);
        Assert.assertNull(found);
    }

    @Test
    @Transactional
    @Rollback()
    public void testGetActivityDetail() {
        Long activityId = acFac.createActivity(activity);
        ActivityDetailDTO found = this.acFac.getActivityDetail(activityId);

        ActivityDetailDTO expected = new ActivityDetailDTO();
        expected.setId(activityId);
        expected.setName(activity.getName());
        
        Assert.assertEquals(found, expected);
        //lets try to find nobody
        Assert.assertNull(this.acFac.getActivityDetail(new Long(100)));
    }

    @Test
    @Transactional
    @Rollback()
    public void testGetAllActivities() {
        Assert.assertTrue(this.acFac.getAllActivities().isEmpty());

        Long activityId = acFac.createActivity(activity);
        List<ActivityDTO> found = this.acFac.getAllActivities();

        ActivityDetailDTO expected = new ActivityDetailDTO();
        expected.setId(activityId);
        expected.setName(activity.getName());
        
        Assert.assertEquals(found.size(), 1);
        Assert.assertEquals(found.get(0), expected);

        ActivityCreateDTO newAc = new ActivityCreateDTO();
        newAc.setName("fail");
        acFac.createActivity(newAc);
        found = this.acFac.getAllActivities();
        Assert.assertEquals(found.size(), 2);
    }

    @Test
    @Transactional
    @Rollback()
    public void testGetActivities() {
        Long activityId = acFac.createActivity(activity);

        HashSet<Integer> categories = new HashSet<>();
        ActivityFilterDTO filter = new ActivityFilterDTO();
        filter.setCategories(categories);
        Assert.assertTrue(this.acFac.getActivities(filter).isEmpty());

        categories.add(Category.AEROBICS.getId());
        filter.setCategories(categories);
        Assert.assertTrue(this.acFac.getActivities(filter).isEmpty());

        ActivityDetailDTO expected = new ActivityDetailDTO();
        expected.setId(activityId);
        expected.setName(activity.getName());
        
        categories.add(Category.RUNNING.getId());
        List<ActivityDTO> found = this.acFac.getActivities(filter);
        Assert.assertEquals(found.size(), 1);
        Assert.assertEquals(found.get(0), expected);
    }

    @Test
    @Transactional
    @Rollback()
    public void testAddAndRemoveBurnedCalories() {
        Long activityId = acFac.createActivity(activity);
        ActivityDetailDTO found = acFac.getActivityDetail(activityId);
        Assert.assertTrue(found.getBurnedCalories().isEmpty());

        ActivityUpdateDTO activityUpdate = new ActivityUpdateDTO();
        activityUpdate.setName(activity.getName());
        activityUpdate.setDescription(activity.getDescription());
        activityUpdate.setCategory(activity.getCategory());
        activityUpdate.setId(activityId);
        Set<BurnedCaloriesDTO> bc = new HashSet<>();
        bc.add(FacadeTestHelper.initBurnedCalories());
        activityUpdate.setBurnedCalories(bc);
        acFac.editActivity(activityUpdate);
        //1 bc should be added
        found = acFac.getActivityDetail(activityId);
        Assert.assertEquals(1, found.getBurnedCalories().size());
        //new remove it
        activityUpdate.getBurnedCalories().clear();
        acFac.editActivity(activityUpdate);
        //0 bc should be at presence
        found = acFac.getActivityDetail(activityId);
        Assert.assertEquals(0, found.getBurnedCalories().size());
    }

    @Test
    @Transactional
    @Rollback()
    public void testEditBurnedCalories() {
        Long activityId = acFac.createActivity(activity);
        ActivityUpdateDTO activityUpdate = new ActivityUpdateDTO();
        activityUpdate.setName(activity.getName());
        activityUpdate.setDescription(activity.getDescription());
        activityUpdate.setCategory(activity.getCategory());
        activityUpdate.setId(activityId);
        Set<BurnedCaloriesDTO> bc = new HashSet<>();
        bc.add(FacadeTestHelper.initBurnedCalories());
        activityUpdate.setBurnedCalories(bc);
        acFac.editActivity(activityUpdate);
        //1 bc should be added
        ActivityDetailDTO found = acFac.getActivityDetail(activityId);
        Assert.assertEquals(1, found.getBurnedCalories().size());
        Assert.assertEquals(50, found.getBurnedCalories().iterator().next().getAmount());
        //lets change it
        activityUpdate.getBurnedCalories().iterator().next().setAmount(100);
        acFac.editActivity(activityUpdate);
        found = acFac.getActivityDetail(activityId);
        Assert.assertEquals(100, found.getBurnedCalories().iterator().next().getAmount());
    }
}
