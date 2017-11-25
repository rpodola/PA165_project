package com.muni.fi.pa165project.service;

import com.muni.fi.pa165project.entity.Activity;
import com.muni.fi.pa165project.enums.Category;
import java.util.Collection;
import java.util.List;

/**
 *
 * @author Radoslav Karlik
 * @author Radim Podola
 */
public interface ActivityService {

	/**
	 * Creates activity
	 * @param activity 
	 */
    void create(Activity activity);

	/**
	 * Return activity with given id
	 * @param id
	 * @return 
	 */
    Activity findById(long id);

	/**
	 * Updates activity
	 * @param activity 
	 */
    void update(Activity activity);

	/**
	 * Return all activities
	 * @return 
	 */
    List<Activity> getAllActivities();

	/**
	 * Remove activity
	 * @param id 
	 */
    void remove(long id);

	/**
	 * Return all activities from given categories
	 * @param categories
	 * @return 
	 */
    List<Activity> getFilteredActivities(Collection<Category> categories);
	
}
