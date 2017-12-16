package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.dto.ActivityDTO;
import com.muni.fi.pa165project.dto.ActivityDetailExportDTO;
import com.muni.fi.pa165project.dto.ActivityExportDTO;
import com.muni.fi.pa165project.dto.BurnedCaloriesDTO;
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

    private ActivityDTO activity;
    private ActivityDetailExportDTO activityDetail;

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
        ActivityDetailExportDTO found = acFac.getActivityDetail(activityId);
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
        //activity id is needed for update
        activity.setId(acFac.createActivity(activity));
        //lets change name
        activity.setName(newName);
        ActivityDetailExportDTO edited = acFac.editActivity(activity);
        Assert.assertEquals(edited.getName(), newName);
        //lets get activity with changed name
        ActivityDetailExportDTO found = this.acFac.getActivityDetail(activity.getId());
        ActivityDetailExportDTO expected = new ActivityDetailExportDTO();
        expected.setId(activity.getId());
        expected.setName(activity.getName());
        
        Assert.assertEquals(found, expected);
        Assert.assertEquals(activity.getName(), newName);
    }

    @Test
    @Transactional
    @Rollback()
    public void testRemoveActivity() {
        activity.setId(acFac.createActivity(activity));
        acFac.removeActivity(activity.getId());
        ActivityDetailExportDTO found = this.acFac.getActivityDetail(activity.getId());
        Assert.assertNull(found);
    }

    @Test
    @Transactional
    @Rollback()
    public void testGetActivityDetail() {
        activity.setId(acFac.createActivity(activity));
        ActivityDetailExportDTO found = this.acFac.getActivityDetail(activity.getId());
        
        ActivityDetailExportDTO expected = new ActivityDetailExportDTO();
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
        List<ActivityExportDTO> found = this.acFac.getAllActivities();
        
        ActivityDetailExportDTO expected = new ActivityDetailExportDTO();
        expected.setId(activity.getId());
        expected.setName(activity.getName());
        
        Assert.assertEquals(found.size(), 1);
        Assert.assertEquals(found.get(0), expected);

        ActivityDTO newAc = new ActivityDTO();
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

        ActivityDetailExportDTO expected = new ActivityDetailExportDTO();
        expected.setId(activity.getId());
        expected.setName(activity.getName());
        
        categories.add(Category.RUNNING.getId());
        List<ActivityExportDTO> found = this.acFac.getActivities(filter);
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

        ActivityDetailExportDTO found = this.acFac.getActivityDetail(activity.getId());
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
        ActivityDetailExportDTO found = acFac.getActivityDetail(activity.getId());
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

        ActivityDetailExportDTO found = acFac.getActivityDetail(activity.getId());
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
