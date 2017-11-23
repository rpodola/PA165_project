package com.muni.fi.pa165project.service;

import com.muni.fi.pa165project.entity.User;

/**
 *
 * @author Radoslav Karlik
 * @author Lukáš Císar
 * @author Radim Podola
 */
public interface UserService {
	
	User findById(long userId);
	
	User findByEmail(String email);
	
	void createUser(User user);
	
	void deleteUser(long userId);
	
	void updateUser(User user);
        
        int getProgressOfweeklyCaloriesGoal(long userId);
}
