package com.muni.fi.pa165project.service;

import com.muni.fi.pa165project.dao.ActivityDao;
import com.muni.fi.pa165project.entity.Activity;
import com.muni.fi.pa165project.entity.BurnedCalories;
import com.muni.fi.pa165project.enums.Category;
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
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.function.Function;

import static org.mockito.Matchers.any;
import static org.mockito.Mockito.*;

/**
 * @author Peter Krasnan.
 */
@RunWith(MockitoJUnitRunner.class)
public class ActivityServiceImplTest {

    @Mock
    private ActivityDao activityDao;

    @InjectMocks
    private ActivityService activityService = new ActivityServiceImpl();

    private Activity activity;
    private Activity activity2;
    private List<Activity> activities;


    @Before
    public void init() {

        activity = new Activity();
        activity.setId(1L);
        activity.setName("Cycling");
        activity.setCategory(Category.CYCLING);
        activity.addBurnedCaloriesItem(new BurnedCalories() {{
            setAmount(5000);
            setActivity(activity);
        }});

        activity2 = new Activity();
        activity2.setId(2L);
        activity2.setName("Aerobics");
        activity2.setCategory(Category.AEROBICS);
        activity2.addBurnedCaloriesItem(new BurnedCalories() {{
            setAmount(4500);
            setActivity(activity2);
        }});


        activities = new ArrayList<>();
        activities.add(activity);
        activities.add(activity2);
    }

    @Transactional
    @Rollback
    @Test
    public void createTest() {
        activityService.create(activity);
        verify(activityDao).create(activity);
    }

    @Transactional
    @Rollback
    @Test
    public void findByIdCorrect() {
        when(activityDao.findById(activity.getId())).thenReturn(activity);
        Activity ac = activityService.findById(activity.getId());
        Assert.assertEquals(ac, activity);
    }
    
    @Transactional
    @Rollback
    @Test
    public void update() {
        activityService.update(activity);
        verify(activityDao).update(activity);
    }

    @Transactional
    @Rollback
    @Test
    public void getAllActivities() {
        when(activityDao.findAll()).thenReturn(activities);
        List<Activity> allActivities = activityService.getAllActivities();
        Assert.assertEquals(allActivities, activities);
    }

    @Transactional
    @Rollback
    @Test
    public void remove() {
        activityService.remove(activity.getId());
        verify(activityDao).delete(activity.getId());
    }

    @Transactional
    @Rollback
    @Test
    public void getFilteredActivities() {
        Collection<Category> categories = new HashSet<>();
        categories.add(Category.CYCLING);
        List<Activity> expectedResult = new ArrayList<Activity>() {{
            add(activity);
        }};
        when(activityDao.findByCategories(categories)).thenReturn(expectedResult);
        Collection<Activity> activitiesReturned = activityService.getFilteredActivities(categories);
        Assert.assertEquals(expectedResult, activitiesReturned);
    }

    @Transactional
    @Rollback
    @Test
    public void getActivitiesSortedByBurnedCalories() {
        double weight = 80.5;
        int expectedResult = 2000;
        BurnedCaloriesService burnedCaloriesService = mock(BurnedCaloriesService.class);
        when(burnedCaloriesService.getBurnedCaloriesPerHour(any(Long.class), any(Double.class))).thenReturn(expectedResult);
        Function<Long, Integer> fn = (activityId) -> burnedCaloriesService.getBurnedCaloriesPerHour(activityId, weight);
        when(activityDao.findAll()).thenReturn(activities);
        List<Activity> result = activityService.getActivitiesSortedByBurnedCalories(fn);
        List<Activity> expected = new ArrayList<>(activities);
        Assert.assertEquals(expected, result);
    }

}
