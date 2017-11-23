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
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;

/**
 *
 * @author Radoslav Karlik
 */
@Service
@Transactional
public class UserFacadeImpl extends FacadeBase implements UserFacade {

	private UserService userService;

	@Override
	public void createUser(UserDTO userDto) {
		User user = super.map(userDto, User.class);
		this.userService.createUser(user);
	}

	@Override
	public void updateUser(UserDTO userDto) {
		User user = super.map(userDto, User.class);
		this.userService.updateUser(user);
	}

	@Override
	public void removeUser(long userId) {	
		this.userService.deleteUser(userId);
	}
	
	@Override
	public void setTrackingSettings(TrackingSettingsDTO trackingSettings) {
		User user = this.userService.findById(trackingSettings.getUserId());
		user.getTrackingSettings().setWeeklyCaloriesGoal(trackingSettings.getWeeklyCaloriesGoal());
		this.userService.updateUser(user);
	}

	@Override
	public TrackingSettingsDTO getTrackingSettings(long userId) {
		User user = this.userService.findById(userId);
		TrackingSettingsDTO settings = super.map(user.getTrackingSettings(), TrackingSettingsDTO.class);
		return settings;
	}

}
