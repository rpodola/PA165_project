package com.muni.fi.pa165project.dao;

import com.muni.fi.pa165project.entity.User;
import com.muni.fi.pa165project.structures.UserSettings;
import java.util.List;

/**
 *
 * @author Radim Podola
 */
public interface UserDao {
    /**
     * Finds user by id
     * @param id
     * @return found user
     */
    User findById(long id);
    
    /**
     * Finds user by username
     * @param username
     * @return found user
     */
    User findByUserName(String username);
    
    /**
     * Insert user into database
     * @param user 
     */
    void create(User user);

    /**
     * Update user in database
     * @param user 
     */
    void update(User user);

    /**
     * Delete activity from database
     * @param user 
     */
    void delete(User user);    
    
    /**
     * Update user's setting in database
     * @param settings 
     */
    void updateSettings(UserSettings settings);
    
    /**
     * Returns all users
     * @return list of users
     */
    List<User> findAll();
}
