package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.dto.TrackingSettingsDTO;
import com.muni.fi.pa165project.dto.UserDTO;
import com.muni.fi.pa165project.entity.User;
import com.muni.fi.pa165project.facade.UserFacade;
import com.muni.fi.pa165project.service.UserService;
import com.muni.fi.pa165project.service.utils.DozerHelper;
import com.muni.fi.pa165project.structures.LoginDetails;
import com.muni.fi.pa165project.structures.TrackingSettings;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.test.annotation.Rollback;

import javax.transaction.Transactional;

import static org.mockito.Mockito.*;

/**
 * @author Peter Krasnan
 */

@RunWith(MockitoJUnitRunner.class)
public class UserFacadeImplTest {

    @Mock
    private UserService userService;

    @Mock
    private DozerHelper dozerHelper;

    @InjectMocks
    private UserFacade userFacade = new UserFacadeImpl();

    private User user;

    @Before
    public void init() {
        user = new User();
        user.setWeight(50);
        user.setId(1L);

        LoginDetails loginDetails = new LoginDetails();
        loginDetails.setUsername("Peter");
        loginDetails.setEmail("peter@gmail.com");
        loginDetails.setPassword("132456785");

        TrackingSettings trackingSettings = new TrackingSettings();
        trackingSettings.setWeeklyCaloriesGoal(2000);

        user.setTrackingSettings(trackingSettings);
        user.setLoginDetails(loginDetails);
    }

    @Test
    @Transactional
    @Rollback
    public void createUserTest() {
        UserDTO userDTO = mock(UserDTO.class);
        when(dozerHelper.map(userDTO, User.class)).thenReturn(user);
        userFacade.createUser(userDTO);
        verify(userService).createUser(user);

    }

    @Test
    @Transactional
    @Rollback
    public void editUserTest() {
        UserDTO userDTO = mock(UserDTO.class);
        when(dozerHelper.map(userDTO, User.class)).thenReturn(user);
        userFacade.editUser(userDTO);
        verify(userService).updateUser(user);
    }

    @Test
    @Transactional
    @Rollback
    public void removeUserTest() {
        userFacade.removeUser(user.getId());
        verify(userService).deleteUser(user.getId());
    }

    @Test
    @Transactional
    @Rollback
    public void setTrackingSettingsTest() {
        TrackingSettingsDTO trackingSettingsDTO = mock(TrackingSettingsDTO.class);
        when(trackingSettingsDTO.getUserId()).thenReturn(1L);
        when(trackingSettingsDTO.getWeeklyCaloriesGoal()).thenReturn(2000);
        when(userService.findById(1L)).thenReturn(user);

        userFacade.setTrackingSettings(trackingSettingsDTO);
        verify(userService).updateUser(user);

    }

    @Test
    @Transactional
    @Rollback
    public void getTrackingSettingsTest() {
        when(userService.findById(1L)).thenReturn(user);
        userFacade.getTrackingSettings(1L);
        verify(dozerHelper).map(user.getTrackingSettings(), TrackingSettingsDTO.class);
    }
}
