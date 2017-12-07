package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.dto.TrackingSettingsDTO;
import com.muni.fi.pa165project.dto.UserDTO;
import com.muni.fi.pa165project.facade.UserFacade;
import com.muni.fi.pa165project.service.config.ServiceConfiguration;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.transaction.Transactional;

/**
 * @author Radim Podola
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = ServiceConfiguration.class)
public class UserFacadeIT {

    @Autowired
    private UserFacade userFac;

    private UserDTO user;

    @Before
    public void setup() {
        this.user = FacadeTestHelper.initUser();
    }

    @Test
    @Transactional
    @Rollback()
    public void testCreateUser() {
        Long userId = userFac.createUser(user);
        UserDTO foundUser = this.userFac.getUser(userId);
        Assert.assertTrue(user.equals(foundUser));
    }

    @Test
    @Transactional
    @Rollback()
    public void testEditUser() {
        final String newName = "Martin";
        Long userId = userFac.createUser(user);
        //user id is needed for update
        user.setId(userId);
        //lets change name
        user.setName(newName);
        userFac.editUser(user);
        //lets get user with changed name
        UserDTO foundUser = this.userFac.getUser(userId);

        Assert.assertEquals(foundUser, user);
        Assert.assertEquals(user.getName(), newName);
    }

    @Test
    @Transactional
    @Rollback()
    public void testRemoveUser() {
        Long userId = userFac.createUser(user);
        userFac.removeUser(userId);
        UserDTO foundUser = this.userFac.getUser(userId);
        Assert.assertNull(foundUser);
    }

    @Test(expected = DataAccessException.class)
    @Transactional
    @Rollback()
    public void testGetUserById() {
        Long userId = userFac.createUser(user);
        UserDTO foundUser = this.userFac.getUser(userId);
        Assert.assertEquals(userId, foundUser.getId());
        //lets try to find nobody
        Assert.assertNull(this.userFac.getUser("asdasd"));
    }

    @Test(expected = DataAccessException.class)
    @Transactional
    @Rollback()
    public void testCreateUserFail() {
        user.setUsername(null);
        userFac.createUser(user);
    }

    @Test
    @Transactional
    @Rollback()
    public void testGetUserByEmail() {
        userFac.createUser(user);
        UserDTO foundUser = this.userFac.getUser(user.getEmail());
        Assert.assertEquals(user, foundUser);
    }

    @Test
    @Transactional
    @Rollback()
    public void testGetSetTrackingSettings() {
        Long userId = userFac.createUser(user);

        TrackingSettingsDTO settings = new TrackingSettingsDTO();
        settings.setUserId(userId);
        settings.setWeeklyCaloriesGoal(100);

        userFac.setTrackingSettings(settings);
        TrackingSettingsDTO settingsFound = userFac.getTrackingSettings(userId);
        Assert.assertEquals(settings, settingsFound);
        Assert.assertNull(userFac.getTrackingSettings(58));
    }
}
