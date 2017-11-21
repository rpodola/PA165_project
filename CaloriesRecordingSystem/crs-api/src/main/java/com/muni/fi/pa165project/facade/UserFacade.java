package com.muni.fi.pa165project.facade;

import java.util.List;

import com.muni.fi.pa165project.dto.RecordDTO;
import com.muni.fi.pa165project.dto.TrackingSettingsDTO;
import com.muni.fi.pa165project.dto.filters.RecordTimeFilterDTO;
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
     */
    void createUser(UserDTO userDto);

    /**
     * Update User
     * @param userDto user object
     */
    void updateUser(UserDTO userDto);

    /**
     * Remove User
     * @param id user id
     */
	void removeUser(long id);
	
	/**
	 * Set tracking settings for user (goals)
	 * @param calories 
	 */
	void setTrackingSettings(TrackingSettingsDTO trackingSettings);
	
	/**
	 * Get tracking settings
	 * @param userId
	 * @return 
	 */
	TrackingSettingsDTO getTrackingSettings(long userId);
}
