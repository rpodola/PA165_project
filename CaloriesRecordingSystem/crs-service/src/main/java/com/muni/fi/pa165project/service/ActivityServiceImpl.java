package com.muni.fi.pa165project.service;

import com.muni.fi.pa165project.dao.ActivityDao;
import com.muni.fi.pa165project.entity.Activity;
import com.muni.fi.pa165project.enums.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.function.Function;

/**
 * @author Radoslav Karlik
 * @author Radim Podola
 */
@Service
public class ActivityServiceImpl implements ActivityService {

    @Autowired
    private ActivityDao activityDao;

    @Override
    public void create(Activity activity) {
        this.activityDao.create(activity);
    }

    @Override
    public Activity findById(long id) {
        return this.activityDao.findById(id);
    }

    @Override
    public void update(Activity activity) {
        this.activityDao.update(activity);
    }

    @Override
    public List<Activity> getAllActivities() {
        return this.activityDao.findAll();
    }

    @Override
    public void remove(long id) {
        this.activityDao.delete(id);
    }

    @Override
    public List<Activity> getFilteredActivities(Collection<Category> categories) {
        if (categories == null || categories.isEmpty())
            return new ArrayList<>();
        else
            return this.activityDao.findByCategories(categories);
    }

    @Override
    public List<Activity> getActivitiesSortedByBurnedCalories(Function<Long, Integer> getBurnedCaloriesByActivityId) {
        Map<Long, Integer> burnedCaloriesPerActivity = new HashMap<>();

        List<Activity> activities = this.getAllActivities();
        activities.forEach(activity -> burnedCaloriesPerActivity.put(activity.getId(), getBurnedCaloriesByActivityId.apply(activity.getId())));

        activities.sort((Activity a1, Activity a2) -> {
            double burnedCalories1 = burnedCaloriesPerActivity.get(a1.getId());
            double burnedCalories2 = burnedCaloriesPerActivity.get(a2.getId());

            return Double.compare(burnedCalories1, burnedCalories2);
        });

        return activities;
    }

}
