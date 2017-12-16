package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.dto.LoginExistsRequestDTO;
import com.muni.fi.pa165project.dto.LoginExistsResponseDTO;
import com.muni.fi.pa165project.dto.TrackingSettingsDTO;
import com.muni.fi.pa165project.dto.UserCredentialsDTO;
import com.muni.fi.pa165project.dto.UserDTO;
import com.muni.fi.pa165project.dto.UserRegisterDTO;
import com.muni.fi.pa165project.dto.UserUpdateDTO;
import com.muni.fi.pa165project.entity.User;
import com.muni.fi.pa165project.facade.UserFacade;
import com.muni.fi.pa165project.service.MappingService;
import com.muni.fi.pa165project.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author Radoslav Karlik
 */
@Service
@Transactional
public class UserFacadeImpl implements UserFacade {

    final static Logger log = LoggerFactory.getLogger(UserFacadeImpl.class);

    @Autowired
    private MappingService mapper;

    @Autowired
    private UserService userService;

    @Override
    public Long createUser(UserRegisterDTO userDto) {
        log.debug("Creating User with username <{}>", userDto.getUsername());

        User user = mapper.map(userDto, User.class);
        this.userService.createUser(user);
        return user.getId();
    }

    @Override
    public UserDTO editUser(UserUpdateDTO userDto) {
        log.debug("Editing User with id <{}>", userDto.getId());

        User user = mapper.map(userDto, User.class);
        this.userService.updateUser(user);
        return mapper.map(user, UserDTO.class);
    }

    @Override
    public void removeUser(long userId) {
        log.debug("Removing User with id <{}>", userId);

        this.userService.deleteUser(userId);
    }

    @Override
    public UserDTO getUser(long id) {
        log.debug("Getting User with id <{}>", id);

        User user = this.userService.findById(id);
        return mapper.map(user, UserDTO.class);
    }

    @Override
    public UserDTO getUser(String email) {
        log.debug("Getting User with email <{}>", email);

        User user = this.userService.findByEmail(email);
        return mapper.map(user, UserDTO.class);
    }

    @Override
    public void setTrackingSettings(TrackingSettingsDTO trackingSettings) {
        log.debug("Setting tracking settings with goal <{}> to User with id <{}>",
                trackingSettings.getWeeklyCaloriesGoal(), trackingSettings.getUserId());

        User user = this.userService.findById(trackingSettings.getUserId());
        if (user != null) {
            user.getTrackingSettings().setWeeklyCaloriesGoal(trackingSettings.getWeeklyCaloriesGoal());
            this.userService.updateUser(user);
        }
    }

    @Override
    public TrackingSettingsDTO getTrackingSettings(long userId) {
        log.debug("Getting tracking settings for User with id <{}>", userId);

        User user = this.userService.findById(userId);
        if (user == null)
            return null;
        TrackingSettingsDTO settings = mapper.map(user.getTrackingSettings(), TrackingSettingsDTO.class);
        if (settings == null)
            return null;
        settings.setUserId(user.getId());
        return settings;
    }

    @Override
    public UserDTO findByCredentials(UserCredentialsDTO credentials) {
        String username = credentials.getUsername();
        String password = credentials.getPassword();
        
        User user = this.userService.findByCredentials(username, password);
        
        if (user == null) {
            return null;
        }
        
        return mapper.map(user, UserDTO.class);
    }

    @Override
    public LoginExistsResponseDTO loginExists(LoginExistsRequestDTO dto) {
        boolean usernameExists = this.userService.userWithUsernameExists(dto.getUsername());
        boolean emailExists = this.userService.userWithEmailExists(dto.getEmail());
        
        LoginExistsResponseDTO response = new LoginExistsResponseDTO();
        response.setEmailExists(emailExists);
        response.setUsernameExists(usernameExists);
        
        return response;
    }
}
