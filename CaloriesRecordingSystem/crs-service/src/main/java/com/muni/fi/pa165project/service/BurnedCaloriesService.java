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
	public void updateBurnedCalories(BurnedCalories burnedCalories);
	
	/**
	 * Returns amount of burned calories per hour from activity
	 * based on bodyweight
	 * @param activityId
	 * @param bodyweight
	 * @return 
	 */
	public int getBurnedCaloriesPerHour(long activityId, double bodyweight);
	
}
