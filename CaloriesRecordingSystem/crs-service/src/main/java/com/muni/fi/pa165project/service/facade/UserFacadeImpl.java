/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.dto.RecordDTO;
import com.muni.fi.pa165project.dto.TrackingSettingsDTO;
import com.muni.fi.pa165project.dto.UserDTO;
import com.muni.fi.pa165project.dto.filters.RecordTimeFilterDTO;
import com.muni.fi.pa165project.entity.User;
import com.muni.fi.pa165project.facade.UserFacade;
import com.muni.fi.pa165project.service.UserService;
import com.muni.fi.pa165project.structures.TrackingSettings;
import java.util.List;

/**
 *
 * @author Radoslav Karlik
 */
public class UserFacadeImpl extends FacadeBase implements UserFacade {

	private UserService userService;

	@Override
	public void createUser(UserDTO userDto) {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	@Override
	public void updateUser(UserDTO userDto) {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	@Override
	public void removeUser(long id) {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}
	
	@Override
	public void setTrackingSettings(TrackingSettingsDTO trackingSettings) {
		User user = this.userService.findById(trackingSettings.getUserId());
		user.getTrackingSettings().setWeeklyCalorieGoal(trackingSettings.getWeeklyCaloriesGoal());
		this.userService.updateUser(user);
	}

	@Override
	public TrackingSettingsDTO getTrackingSettings(long userId) {
		User user = this.userService.findById(userId);
		TrackingSettingsDTO settings = super.map(user.getTrackingSettings(), TrackingSettingsDTO.class);
		return settings;
	}

}
