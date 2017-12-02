package com.muni.fi.pa165project.service;

import com.muni.fi.pa165project.entity.BurnedCalories;

/**
 *
 * @author Radoslav Karlik
 */
public interface BurnedCaloriesService {
	
	/**
	 * Update weight range(burned calories) in its activity
	 * @param burnedCalories burned calories entity
	 */
	void updateBurnedCalories(BurnedCalories burnedCalories);
	
	/**
	 * Returns amount of burned calories per hour from activity
	 * based on bodyweight
	 * @param activityId activity id
	 * @param bodyweight body weight
	 * @return amount of burned calories per hour
	 */
	int getBurnedCaloriesPerHour(long activityId, double bodyweight);
	
	/**
	 * Calculate amount of burned calories from activity done for duration at bodyweight
	 * @param activityId activity id
	 * @param duration duration
	 * @param bodyweight body weight
	 * @return amount of burned calories
	 */
	double calculateAmountOfCalories(long activityId, double duration, double bodyweight);
	
}
