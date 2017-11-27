package com.muni.fi.pa165project.service;

import com.muni.fi.pa165project.entity.BurnedCalories;

/**
 *
 * @author Radoslav Karlik
 */
public interface BurnedCaloriesService {
	
	/**
	 * Update weight range(burned calories) in its activity
	 * @param burnedCalories 
	 */
	void updateBurnedCalories(BurnedCalories burnedCalories);
	
	/**
	 * Returns amount of burned calories per hour from activity
	 * based on bodyweight
	 * @param activityId
	 * @param bodyweight
	 * @return 
	 */
	int getBurnedCaloriesPerHour(long activityId, double bodyweight);
	
	/**
	 * Calculate amount of burned calories from activity done for duration at bodyweight
	 * @param activityId
	 * @param duration
	 * @param bodyweight
	 * @return 
	 */
	double calculateAmountOfCalories(long activityId, double duration, double bodyweight);
	
}
