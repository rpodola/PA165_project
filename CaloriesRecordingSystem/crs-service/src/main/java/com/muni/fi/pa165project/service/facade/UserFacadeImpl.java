package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.dto.TrackingSettingsDTO;
import com.muni.fi.pa165project.dto.UserDTO;
import com.muni.fi.pa165project.entity.User;
import com.muni.fi.pa165project.facade.UserFacade;
import com.muni.fi.pa165project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;

/**
 *
 * @author Radoslav Karlik
 */
@Service
@Transactional
public class UserFacadeImpl extends FacadeBase implements UserFacade {

	@Autowired
	private UserService userService;

	@Override
	public Long createUser(UserDTO userDto) {
		User user = super.map(userDto, User.class);
		this.userService.createUser(user);
		return user.getId();
	}

	@Override
	public void editUser(UserDTO userDto) {
		User user = super.map(userDto, User.class);
		this.userService.updateUser(user);
	}

	@Override
	public void removeUser(long userId) {
		this.userService.deleteUser(userId);
	}
	
	@Override
	public UserDTO getUser(long id) {
	    User user = this.userService.findById(id);
	    return super.map(user, UserDTO.class);
	}

	@Override
    public UserDTO getUser(String email) {
        User user = this.userService.findByEmail(email);
        return super.map(user, UserDTO.class);
    }	

	@Override
	public void setTrackingSettings(TrackingSettingsDTO trackingSettings) {
		User user = this.userService.findById(trackingSettings.getUserId());
		if (user != null){
		    user.getTrackingSettings().setWeeklyCaloriesGoal(trackingSettings.getWeeklyCaloriesGoal());
		    this.userService.updateUser(user);		  
		}
	}

	@Override
	public TrackingSettingsDTO getTrackingSettings(long userId) {
		User user = this.userService.findById(userId);
        if (user == null)
            return null;
		TrackingSettingsDTO settings = super.map(user.getTrackingSettings(), TrackingSettingsDTO.class);
		if (settings == null)
			return null;
		settings.setUserId(user.getId());
		return settings;
	}
}
