package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.config.AppConfig;
import com.muni.fi.pa165project.dto.ActivityDTO;
import com.muni.fi.pa165project.dto.ActivityDetailDTO;
import com.muni.fi.pa165project.dto.BurnedCaloriesDTO;
import com.muni.fi.pa165project.dto.filters.ActivityFilterDTO;
import com.muni.fi.pa165project.enums.Category;
import com.muni.fi.pa165project.facade.ActivityFacade;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

/**
 * @author Radim Podola
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = AppConfig.class)
public class ActivityFacadeIT {

    @Autowired
    private ActivityFacade acFac;

    private ActivityDetailDTO activity;

    @Before
    public void setup() {
        activity = FacadeTestHelper.initActivity();
    }

    @Test
    @Transactional
    @Rollback()
    public void testCreateActivity() {
        //persist activity
        Long activityId = acFac.createActivity(activity);
        Assert.assertNotNull(activityId);
        ActivityDetailDTO found = acFac.getActivityDetail(activityId);
        Assert.assertEquals(activity, found);
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
        activity.setName(newName);
        acFac.editActivity(activity);
        //lets get user with changed name
        ActivityDetailDTO found = this.acFac.getActivityDetail(activity.getId());

        Assert.assertEquals(found, activity);
        Assert.assertEquals(activity.getName(), newName);
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
        Assert.assertEquals(found, activity);
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
        Assert.assertEquals(found.size(), 1);
        Assert.assertEquals(found.get(0), activity);

        ActivityDetailDTO newAc = new ActivityDetailDTO();
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

        HashSet<Category> categories = new HashSet<>();
        ActivityFilterDTO filter = new ActivityFilterDTO();
        filter.setCategories(categories);
        Assert.assertTrue(this.acFac.getActivities(filter).isEmpty());

        categories.add(Category.AEROBICS);
        filter.setCategories(categories);
        Assert.assertTrue(this.acFac.getActivities(filter).isEmpty());

        categories.add(Category.RUNNING);
        List<ActivityDTO> found = this.acFac.getActivities(filter);
        Assert.assertEquals(found.size(), 1);
        Assert.assertEquals(found.get(0), activity);
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
