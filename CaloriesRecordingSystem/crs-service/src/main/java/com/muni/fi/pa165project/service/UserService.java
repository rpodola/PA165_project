package com.muni.fi.pa165project.service;

import com.muni.fi.pa165project.entity.User;

/**
 *
 * @author Radoslav Karlik
 * @author Lukáš Císar
 * @author Radim Podola
 */
public interface UserService {
	
	/**
	 * Returns user with given id
	 * @param userId
	 * @return 
	 */
	User findById(long userId);
	
	/**
	 * Returns user with given email
	 * @param email
	 * @return 
	 */
	User findByEmail(String email);
	
	/**
	 * Creates user
	 * @param user 
	 */
	void createUser(User user);
	
	/**
	 * Deletes user
	 * @param userId 
	 */
	void deleteUser(long userId);
	
	/**
	 * Updates user
	 * @param user 
	 */
	void updateUser(User user);
    
	/**
	 * Get weekly calorie progress of User
	 * @param userId
	 * @return 
	 */
	int getProgressOfweeklyCaloriesGoal(long userId);
}
