package com.muni.fi.pa165project.dao;

import com.muni.fi.pa165project.entity.Activity;
import com.muni.fi.pa165project.enums.Category;

import java.util.Collection;
import java.util.List;

/**
 * @author Radoslav Karlik
 */
public interface ActivityDao {
    /**
     * Finds activity by id
     *
     * @param id activity id
     * @return Activity object
     */
    Activity findById(long id);

    /**
     * Insert activity into database
     *
     * @param activity activity object
     */
    void create(Activity activity);

    /**
     * Update activity in database
     *
     * @param activity activity object
     */
    void update(Activity activity);

    /**
     * Delete activity from database
     *
     * @param activity activity object
     */
    void delete(Activity activity);

    /**
     * Delete activity from database
     *
     * @param id activity id
     */
    void delete(long id);

    /**
     * Returns all activities
     *
     * @return list of activities
     */
    List<Activity> findAll();

    /**
     * Finds all activities containing text
     *
     * @param text searched text
     * @return list of activities
     */
    List<Activity> findByName(String text);

    /**
     * Finds all activities from category
     *
     * @param category concrete category
     * @return list of activities
     */
    List<Activity> findByCategory(Category category);

    /**
     * Finds all activities from given categories
     *
     * @param categories list of categories
     * @return list of activities
     */
    List<Activity> findByCategories(Collection<Category> categories);
}
