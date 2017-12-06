package com.muni.fi.pa165project.service;

import com.muni.fi.pa165project.entity.Activity;
import com.muni.fi.pa165project.enums.Category;

import java.util.Collection;
import java.util.List;
import java.util.function.Function;

/**
 * @author Radoslav Karlik
 * @author Radim Podola
 */
public interface ActivityService {

    /**
     * Creates activity
     *
     * @param activity activity entity
     */
    void create(Activity activity);

    /**
     * Return activity with given id
     *
     * @param id activity id
     * @return activity entity
     */
    Activity findById(long id);

    /**
     * Updates activity
     *
     * @param activity activity entity
     */
    void update(Activity activity);

    /**
     * Return all activities
     *
     * @return list of activity entities
     */
    List<Activity> getAllActivities();

    /**
     * Remove activity
     *
     * @param id activity id
     */
    void remove(long id);

    /**
     * Return all activities from given categories
     *
     * @param categories list of categories
     * @return list of activity entities
     */
    List<Activity> getFilteredActivities(Collection<Category> categories);

    /**
     * Returns activities sorted by the amount of burned calories per one hour
     *
     * @param getBurnedCaloriesByActivityId function which returns burned calories per hour after input argument activity id
     * @return list of activity entities
     */
    List<Activity> getActivitiesSortedByBurnedCalories(Function<Long, Integer> getBurnedCaloriesByActivityId);
}
