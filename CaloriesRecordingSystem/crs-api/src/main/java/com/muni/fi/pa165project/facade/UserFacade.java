package com.muni.fi.pa165project.facade;

import com.muni.fi.pa165project.dto.TrackingSettingsDTO;
import com.muni.fi.pa165project.dto.UserDTO;

/**
 *
 * @author Radoslav Karlik
 * @author Radim Podola
 */
public interface UserFacade {

    /**
     * Create User
     * @param userDto user object
     * @return user id or null if user was not created
     */
    Long createUser(UserDTO userDto);

    /**
     * Edit User
     * @param userDto user object
     */
    void editUser(UserDTO userDto);

    /**
     * Remove User
     * @param id user id
     */
	void removeUser(long id);

    /**
     * Get information about User
     * @param id user id
     */
    UserDTO getUser(long id);

    /**
     * Get information about User by email
     * @param email users's email
     */
    UserDTO getUser(String email);

	/**
	 * Set tracking settings for user (goals)
         * @param trackingSettings
	 */
	void setTrackingSettings(TrackingSettingsDTO trackingSettings);
	
	/**
	 * Get tracking settings
	 * @param userId
	 * @return 
	 */
	TrackingSettingsDTO getTrackingSettings(long userId);
}
