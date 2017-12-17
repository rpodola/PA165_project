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
        activity.setId(acFac.createActivity(activity));
        //lets change name
        ActivityDetailDTO detail = acFac.getActivityDetail(activity.getId());
        ActivityUpdateDTO changed = new ActivityUpdateDTO();
        changed.setName(newName);
        changed.setId(detail.getId());
        changed.setBurnedCalories(detail.getBurnedCalories());
        changed.setDescription(detail.getDescription());
        changed.setCategory(activity.getCategory());
        acFac.editActivity(changed);
        //lets get user with changed name
        ActivityDetailDTO found = this.acFac.getActivityDetail(activity.getId());
        
        Assert.assertEquals(found.getId(), changed.getId());
        Assert.assertEquals(found.getName(), newName);
    }

    @Test
    @Transactional
    @Rollback()
    public void testRemoveActivity() {
        activity.setId(acFac.createActivity(activity));
        acFac.removeActivity(activity.getId());
        ActivityDetailDTO found = this.acFac.getActivityDetail(activity.getId());
        Assert.assertNull(found);
    }

    @Test
    @Transactional
    @Rollback()
    public void testGetActivityDetail() {
        activity.setId(acFac.createActivity(activity));
        ActivityDetailDTO found = this.acFac.getActivityDetail(activity.getId());

        ActivityDetailDTO expected = new ActivityDetailDTO();
        expected.setId(activity.getId());
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

        activity.setId(acFac.createActivity(activity));
        List<ActivityDTO> found = this.acFac.getAllActivities();

        ActivityDetailDTO expected = new ActivityDetailDTO();
        expected.setId(activity.getId());
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
        activity.setId(acFac.createActivity(activity));

        HashSet<Integer> categories = new HashSet<>();
        ActivityFilterDTO filter = new ActivityFilterDTO();
        filter.setCategories(categories);
        Assert.assertTrue(this.acFac.getActivities(filter).isEmpty());

        categories.add(Category.AEROBICS.getId());
        filter.setCategories(categories);
        Assert.assertTrue(this.acFac.getActivities(filter).isEmpty());

        ActivityDetailDTO expected = new ActivityDetailDTO();
        expected.setId(activity.getId());
        expected.setName(activity.getName());
        
        categories.add(Category.RUNNING.getId());
        List<ActivityDTO> found = this.acFac.getActivities(filter);
        Assert.assertEquals(found.size(), 1);
        Assert.assertEquals(found.get(0), expected);
    }

    @Test
    @Transactional
    @Rollback()
    public void testAddBurnedCalorie() {
        activity.setId(acFac.createActivity(activity));

        BurnedCaloriesDTO bc = FacadeTestHelper.initBurnedCalories(activity.getId());
        acFac.addBurnedCalorie(bc);

        ActivityDetailDTO found = this.acFac.getActivityDetail(activity.getId());
        Assert.assertEquals(found.getBurnedCalories().size(), 1);
        Assert.assertTrue(found.getBurnedCalories().contains(bc));
    }

    @Test
    @Transactional
    @Rollback()
    public void testEditBurnedCalorie() {
        activity.setId(acFac.createActivity(activity));

        BurnedCaloriesDTO bc = FacadeTestHelper.initBurnedCalories(activity.getId());
        //lets persist burned calories
        acFac.addBurnedCalorie(bc);
        //lets get burned calories
        ActivityDetailDTO found = acFac.getActivityDetail(activity.getId());
        List<BurnedCaloriesDTO> listBC = new ArrayList<>();
        listBC.addAll(found.getBurnedCalories());
        bc.setId(listBC.get(0).getId());
        //lets change property
        bc.setAmount(100);
        Assert.assertFalse(found.getBurnedCalories().contains(bc));
        acFac.editBurnedCalorie(bc);
        found = acFac.getActivityDetail(activity.getId());
        Assert.assertEquals(found.getBurnedCalories().size(), 1);
        Assert.assertTrue(found.getBurnedCalories().contains(bc));
    }

    @Test
    @Transactional
    @Rollback()
    public void testRemoveBurnedCalorie() {
        activity.setId(acFac.createActivity(activity));

        BurnedCaloriesDTO bc = FacadeTestHelper.initBurnedCalories(activity.getId());
        acFac.addBurnedCalorie(bc);

        ActivityDetailDTO found = acFac.getActivityDetail(activity.getId());
        Assert.assertEquals(found.getBurnedCalories().size(), 1);

        //lets get burned calories and set id
        List<BurnedCaloriesDTO> listBC = new ArrayList<>();
        listBC.addAll(found.getBurnedCalories());
        bc.setId(listBC.get(0).getId());
        //lets remove burned calories
        acFac.removeBurnedCalorie(bc);
        found = acFac.getActivityDetail(activity.getId());
        Assert.assertEquals(found.getBurnedCalories().size(), 0);
    }
}
