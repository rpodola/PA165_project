/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.dto.ActivityDTO;
import com.muni.fi.pa165project.dto.ActivityDetailDTO;
import com.muni.fi.pa165project.dto.BurnedCaloriesDTO;
import com.muni.fi.pa165project.dto.filters.ActivityFilterDTO;
import com.muni.fi.pa165project.entity.Activity;
import com.muni.fi.pa165project.entity.BurnedCalories;
import com.muni.fi.pa165project.entity.User;
import com.muni.fi.pa165project.enums.Category;
import com.muni.fi.pa165project.facade.ActivityFacade;
import com.muni.fi.pa165project.service.ActivityService;
import com.muni.fi.pa165project.service.BurnedCaloriesService;
import com.muni.fi.pa165project.service.UserService;
import com.muni.fi.pa165project.service.utils.DozerHelper;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.test.annotation.Rollback;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.function.Function;

import static org.mockito.Matchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;


/**
 * @author Peter Krasnan, Radoslav Karlik
 */
@RunWith(MockitoJUnitRunner.class)
public class ActivityFacadeImplTest {

    @Mock
    private ActivityService activityService;

    @Mock
    private BurnedCaloriesService burnedCaloriesService;

    @Mock
    private UserService userService;

    @Mock
    private DozerHelper dozerHelper;

    @InjectMocks
    private final ActivityFacade activityFacade = new ActivityFacadeImpl();

    private Activity activity;
    private ActivityDTO activityDTO;


    @Before
    public void init() {
        activity = new Activity();
        activity.setId(1L);
        activity.setBurnedCalories(new HashSet<>());
        activity.setCategory(Category.AEROBICS);

        activityDTO = new ActivityDTO();
    }

    @Rollback
    @Transactional
    @Test
    public void createActivityTest() {
        when(dozerHelper.map(activityDTO, Activity.class)).thenReturn(activity);
        activityFacade.createActivity(activityDTO);
        verify(activityService).create(activity);
    }

    @Rollback
    @Transactional
    @Test
    public void addBurnedCaloriesTest() {
        BurnedCalories burnedCalories = new BurnedCalories();
        BurnedCaloriesDTO burnedCaloriesDTO = new BurnedCaloriesDTO();
        burnedCaloriesDTO.setId(1L);
        burnedCaloriesDTO.setActivityId(activity.getId());
        when(dozerHelper.map(burnedCaloriesDTO, BurnedCalories.class)).thenReturn(burnedCalories);
        when(activityService.findById(activity.getId())).thenReturn(activity);
        activityFacade.addBurnedCalorie(burnedCaloriesDTO);

        Assert.assertTrue(activity.getBurnedCalories().contains(burnedCalories));
        verify(activityService).update(activity);
    }

    @Rollback
    @Transactional
    @Test
    public void getAllActivitiesTest() {
        List<Activity> activities = new ArrayList<>();
        activities.add(activity);

        List<ActivityDTO> activitiesDTOs = new ArrayList<>();
        activitiesDTOs.add(activityDTO);

        when(dozerHelper.mapToList(activities, ActivityDTO.class)).thenReturn(activitiesDTOs);
        when(activityService.getAllActivities()).thenReturn(activities);
        List<ActivityDTO> result = activityFacade.getAllActivities();

        Assert.assertEquals(activitiesDTOs, result);
    }

    @Rollback
    @Transactional
    @Test
    public void removeBurnedCaloriesTest() {
        BurnedCaloriesDTO burnedCaloriesDTO = new BurnedCaloriesDTO();
        burnedCaloriesDTO.setId(1L);
        burnedCaloriesDTO.setActivityId(activity.getId());

        when(activityService.findById(activity.getId())).thenReturn(activity);
        activityFacade.removeBurnedCalorie(burnedCaloriesDTO);
        verify(activityService).update(activity);
    }

    @Rollback
    @Transactional
    @Test
    public void removeActivityTest() {
        activityFacade.removeActivity(activity.getId());
        verify(activityService).remove(activity.getId());
    }

    @Rollback
    @Transactional
    @Test
    public void getActivitiesTest() {
        ActivityFilterDTO activityFilterDTO = new ActivityFilterDTO();
        activityFilterDTO.setCategories(new HashSet<Category>() {{
            add(Category.AEROBICS);
        }});

        List<Activity> activities = new ArrayList<Activity>() {{
            add(activity);
        }};

        List<ActivityDTO> expected = new ArrayList<ActivityDTO>() {{
            add(activityDTO);
        }};
        when(activityService.getFilteredActivities(activityFilterDTO.getCategories())).thenReturn(activities);

        when(dozerHelper.mapToList(activities, ActivityDTO.class)).thenReturn(expected);

        List<ActivityDTO> result = activityFacade.getActivities(activityFilterDTO);

        Assert.assertEquals(expected, result);
    }

    @Rollback
    @Transactional
    @Test
    public void editActivityTest() {
        when(dozerHelper.map(activityDTO, Activity.class)).thenReturn(activity);
        activityFacade.editActivity(activityDTO);
        verify(activityService).update(activity);
    }

    @Rollback
    @Transactional
    @Test
    public void editBurnedCaloriesTest() {
        BurnedCaloriesDTO burnedCaloriesDTO = new BurnedCaloriesDTO();
        burnedCaloriesDTO.setId(1L);
        burnedCaloriesDTO.setActivityId(activity.getId());
        BurnedCalories burnedCalories = new BurnedCalories();
        when(dozerHelper.map(burnedCaloriesDTO, BurnedCalories.class)).thenReturn(burnedCalories);
        activityFacade.editBurnedCalorie(burnedCaloriesDTO);
        verify(burnedCaloriesService).updateBurnedCalories(burnedCalories);
    }

    @Rollback
    @Transactional
    @Test
    public void getActivityDetailTest() {
        ActivityDetailDTO expected = new ActivityDetailDTO();
        when(activityService.findById(activity.getId())).thenReturn(activity);
        when(dozerHelper.map(activity, ActivityDetailDTO.class)).thenReturn(expected);
        ActivityDetailDTO result = activityFacade.getActivityDetail(activity.getId());

        Assert.assertEquals(expected, result);
    }

    @Rollback
    @Transactional
    @Test
    public void getActivitiesSortedByBurnedCaloriesTest(){
        long userId = 1L;
        User user = new User();
        user.setWeight(90);

        List<Activity> activities = new ArrayList<>();
        activities.add(activity);
        List<ActivityDTO> expected = new ArrayList<>();
        expected.add(activityDTO);

        when(userService.findById(userId)).thenReturn(user);
        when(burnedCaloriesService.getBurnedCaloriesPerHour(activity.getId(), user.getWeight())).thenReturn(500);
        when(activityService.getActivitiesSortedByBurnedCalories(any(Function.class))).thenReturn(activities);

        when(dozerHelper.mapToList(activities, ActivityDTO.class)).thenReturn(expected);

        List<ActivityDTO> result = activityFacade.getActivitiesSortedByBurnedCalories(userId);

        Assert.assertEquals(expected, result);
    }

}
