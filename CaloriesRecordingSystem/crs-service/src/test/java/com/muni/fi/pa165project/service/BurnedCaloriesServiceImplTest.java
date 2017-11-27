package com.muni.fi.pa165project.service;

import com.muni.fi.pa165project.dao.BurnedCaloriesDao;
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

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 * @author Peter Krasnan.
 */

@RunWith(MockitoJUnitRunner.class)
public class BurnedCaloriesServiceImplTest {

    @Mock
    private BurnedCaloriesDao burnedCaloriesDao;

    @InjectMocks
    private BurnedCaloriesService burnedCaloriesService = new BurnedCaloriesServiceImpl();

    private BurnedCalories burnedCalories;
    private Activity activity;

    @Before
    public void init() {
        activity = new Activity();
        activity.setId(1L);
        activity.setCategory(Category.DANCING);
        activity.setName("Dance");

        burnedCalories = new BurnedCalories();
        burnedCalories.setAmount(500);
        burnedCalories.setId(1L);
        burnedCalories.setUpperWeightBoundary(80);
        activity.addBurnedCaloriesItem(burnedCalories);
    }

    @Test
    @Transactional
    @Rollback
    public void updateBurnedCaloriesTest() {
        burnedCaloriesService.updateBurnedCalories(burnedCalories);
        verify(burnedCaloriesDao).update(burnedCalories);
    }

    @Test
    @Transactional
    @Rollback
    public void getBurnedCaloriesPerHourTest() {
        double bodyweight = 85;

        when(burnedCaloriesDao.getWeightRange(activity.getId(), bodyweight)).thenReturn(burnedCalories);

        int result = burnedCaloriesService.getBurnedCaloriesPerHour(activity.getId(), bodyweight);

        Assert.assertEquals(burnedCalories.getAmount(), result);
    }

    @Test
    @Transactional
    @Rollback
    public void getBurnedCaloriesPerHourTestNullValue() {
        double bodyweight = 85;

        when(burnedCaloriesDao.getWeightRange(activity.getId(), bodyweight)).thenReturn(null);

        int result = burnedCaloriesService.getBurnedCaloriesPerHour(activity.getId(), bodyweight);

        Assert.assertEquals(0, result);
    }

    @Test
    @Transactional
    @Rollback
    public void calculateAmountOfCaloriesTest() {
        double duration = 100;
        double bodyweight = 85;
        double expected = burnedCalories.getAmount() * duration;

        when(burnedCaloriesDao.getWeightRange(activity.getId(), bodyweight)).thenReturn(burnedCalories);

        double result = burnedCaloriesService.calculateAmountOfCalories(activity.getId(), duration, bodyweight);

        Assert.assertEquals(expected, result, 0.001);
    }

    @Test
    @Transactional
    @Rollback
    public void calculateAmountOfCaloriesTestNullValue() {
        double duration = 100;
        double bodyweight = 85;
        double expected = 0;

        when(burnedCaloriesDao.getWeightRange(activity.getId(), bodyweight)).thenReturn(null);

        double result = burnedCaloriesService.calculateAmountOfCalories(activity.getId(), duration, bodyweight);

        Assert.assertEquals(expected, result, 0.001);
    }
}
