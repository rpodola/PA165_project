package com.muni.fi.pa165project.service;

import java.time.LocalDate;
import javax.transaction.Transactional;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import com.muni.fi.pa165project.config.TestConfig;
import com.muni.fi.pa165project.dto.UserDTO;
import com.muni.fi.pa165project.enums.GenderEnum;
import com.muni.fi.pa165project.enums.UserEnum;
import com.muni.fi.pa165project.facade.UserFacade;

  /**
* @author Radim Podola
*/
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = TestConfig.class)
public class UserFacadeIT {

    @Autowired
    private UserFacade userFac;

    private UserDTO user;

    @Before
    public void initUser() {
        this.user = new UserDTO();
        user.setBirthDate(LocalDate.now());
        user.setGender(GenderEnum.MALE);
        user.setName("Lukas");
        user.setHeight(180);
        user.setWeight(77);
        user.setUserRole(UserEnum.ADMINISTRATOR);
        user.setUsername("ciso112");
        user.setPassword("abcdefgh");
        user.setEmail("ciso112@protonmail.com");
    }   

    @Test
    @Transactional
    @Rollback(true)
    public void testCreateUser() {
        Long userId = userFac.createUser(user);
        UserDTO foundUser = this.userFac.getUser(userId);
        Assert.assertTrue(user.equals(foundUser));
    }
    
    @Test
    @Transactional
    @Rollback(true)
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
    @Rollback(true)
    public void testRemoveUser() {
        Long userId = userFac.createUser(user);
        userFac.removeUser(userId);
        UserDTO foundUser = this.userFac.getUser(userId);
        Assert.assertNull(foundUser);
    }
    
    @Test(expected = DataAccessException.class)
    @Transactional
    @Rollback(true)
    public void testGetUserById() {
        Long userId = userFac.createUser(user);
        UserDTO foundUser = this.userFac.getUser(userId);
        Assert.assertEquals(userId, foundUser.getId());
        //lets try to find nobody
        Assert.assertNull(this.userFac.getUser("asdasd"));
    }

    @Test(expected = DataAccessException.class)
    @Transactional
    @Rollback(true)
    public void testCreateUserFail() {
        user.setUsername(null);
        userFac.createUser(user);
    }

    @Test
    @Transactional
    @Rollback(true)
    public void testGetUserByEmail() {
        userFac.createUser(user);
        UserDTO foundUser = this.userFac.getUser(user.getEmail());
        Assert.assertEquals(user, foundUser);
    }
}
