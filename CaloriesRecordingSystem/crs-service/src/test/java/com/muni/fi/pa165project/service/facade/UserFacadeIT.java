//package com.muni.fi.pa165project.service.facade;
//
//import com.muni.fi.pa165project.dto.*;
//import com.muni.fi.pa165project.facade.UserFacade;
//import com.muni.fi.pa165project.service.config.ServiceConfiguration;
//import org.junit.Assert;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.dao.DataAccessException;
//import org.springframework.test.annotation.Rollback;
//import org.springframework.test.context.ContextConfiguration;
//import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
//import org.springframework.transaction.annotation.Transactional;
//
//
///**
// * @author Radim Podola
// */
//@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration(classes = ServiceConfiguration.class)
//public class UserFacadeIT {
//
//    @Autowired
//    private UserFacade userFac;
//
//    private UserRegisterDTO userRegisterDto;
//
//    @Before
//    public void setup() {
//        this.userRegisterDto = FacadeTestHelper.initUserRegister();
//    }
//
//    @Test
//    @Transactional
//    @Rollback()
//    public void testCreateUser() {
//        Long userId = userFac.createUser(userRegisterDto);
//        UserDetailDTO foundUser = this.userFac.getUser(userId);
//        Assert.assertTrue(userRegisterDto.getUsername().equals(foundUser.getUsername()));
//    }
//
//    @Test
//    @Transactional
//    @Rollback()
//    public void testEditUser() {
//        final String newName = "Martin";
//        Long userId = userFac.createUser(userRegisterDto);
//        //user id is needed for update
//        UserUpdateDTO updateUserDto = new UserUpdateDTO();
//        updateUserDto.setId(userId);
//        //lets change name
//        updateUserDto.setName(newName);
//        updateUserDto.setEmail(userRegisterDto.getEmail());
//        updateUserDto.setHeight(50);
//        updateUserDto.setWeight(50);
//        updateUserDto.setPassword(updateUserDto.getPassword());
//        userFac.editUser(updateUserDto);
//        //lets get user with changed name
//        UserDetailDTO foundUser = this.userFac.getUser(userId);
//
//        Assert.assertEquals(foundUser.getId(), updateUserDto.getId());
//        Assert.assertEquals(updateUserDto.getName(), newName);
//    }
//
//    @Test
//    @Transactional
//    @Rollback()
//    public void testRemoveUser() {
//        Long userId = userFac.createUser(userRegisterDto);
//        userFac.removeUser(userId);
//        UserDetailDTO foundUser = this.userFac.getUser(userId);
//        Assert.assertNull(foundUser);
//    }
//
//    @Test(expected = DataAccessException.class)
//    @Transactional
//    @Rollback()
//    public void testGetUserById() {
//        Long userId = userFac.createUser(userRegisterDto);
//        UserDetailDTO foundUser = this.userFac.getUser(userId);
//        Assert.assertEquals(userId, foundUser.getId());
//        //lets try to find nobody
//        Assert.assertNull(this.userFac.getUser("asdasd"));
//    }
//
//    @Test(expected = DataAccessException.class)
//    @Transactional
//    @Rollback()
//    public void testCreateUserFail() {
//        userRegisterDto.setUsername(null);
//        userFac.createUser(userRegisterDto);
//    }
//
//    @Test
//    @Transactional
//    @Rollback()
//    public void testGetUserByEmail() {
//        userFac.createUser(userRegisterDto);
//        UserDetailDTO foundUser = this.userFac.getUser(userRegisterDto.getEmail());
//        Assert.assertEquals(userRegisterDto.getUsername(), foundUser.getUsername());
//    }
//
//    @Test
//    @Transactional
//    @Rollback()
//    public void testGetSetTrackingSettings() {
//        Long userId = userFac.createUser(userRegisterDto);
//
//        TrackingSettingsDTO settings = new TrackingSettingsDTO();
//        settings.setUserId(userId);
//        settings.setWeeklyCaloriesGoal(100);
//
//        userFac.setTrackingSettings(settings);
//        TrackingSettingsUpdateDTO settingsFound = userFac.getTrackingSettings(userId);
//        Assert.assertEquals(settings.getWeeklyCaloriesGoal(), settingsFound.getWeeklyCaloriesGoal());
//        Assert.assertNull(userFac.getTrackingSettings(58));
//    }
//}
