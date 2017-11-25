package com.muni.fi.pa165project.service.facade;

import java.time.LocalDate;

import javax.transaction.Transactional;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import com.muni.fi.pa165project.config.TestConfig;
import com.muni.fi.pa165project.dto.UserDTO;
import com.muni.fi.pa165project.enums.GenderEnum;
import com.muni.fi.pa165project.enums.UserEnum;
import com.muni.fi.pa165project.facade.UserFacade;
import com.muni.fi.pa165project.structures.LoginDetails;

  /**
* @author Radim Podola
*/
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = TestConfig.class)
public class UserFacadeImplIT {

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

        LoginDetails login = new LoginDetails();
        login.setUsername("ciso112");
        login.setPassword("abcdefgh");
        login.setEmail("ciso112@protonmail.com");
        //this.user.setLoginDetails(login);
    }   

    @Test
    @Transactional
    @Rollback(true)
    public void testCreate() {
        userFac.createUser(user);
    }

    @Test
    @Transactional
    @Rollback(true)
    public void testUpdate() {
    }
}
