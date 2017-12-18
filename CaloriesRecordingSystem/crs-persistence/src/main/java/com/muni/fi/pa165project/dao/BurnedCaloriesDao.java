package com.muni.fi.pa165project.dao;

import com.muni.fi.pa165project.entity.BurnedCalories;

import java.util.List;

/**
 * @author Peter Krasnan
 */
public interface BurnedCaloriesDao {

    /**
     * Finds BurnedCalories by id
     *
     * @param id burned calories id
     * @return found Burned Calories
     */
    BurnedCalories findById(long id);

    /**
     * Returns all BurnedCalories
     *
     * @return list of all BurnedCalories
     */
    List<BurnedCalories> findAll();

    /**
     * Inserts record into database
     *
     * @param burnedCalories burned calories object
     */
    void create(BurnedCalories burnedCalories);

    /**
     * Updates record in database
     *
     * @param burnedCalories burned calories object
     * @return updated burned calories item
     */
    BurnedCalories update(BurnedCalories burnedCalories);

    /**
     * Deletes record from database
     *
     * @param burnedCalories burned calories object
     */
    void delete(BurnedCalories burnedCalories);

    /**
     * Deletes record from database
     *
     * @param id burned calories id
     */
    void delete(long id);

    /**
     * Get weight range(BurnedCalories) from Activity
     * which corresponds to given body weight
     *
     * @param activityId activity id
     * @param bodyweight body weight
     * @return burned calories object
     */
    BurnedCalories getWeightRange(long activityId, double bodyweight);
}
