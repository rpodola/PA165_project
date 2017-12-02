package com.muni.fi.pa165project.service;

import com.muni.fi.pa165project.config.AppConfig;
import com.muni.fi.pa165project.dto.*;
import com.muni.fi.pa165project.enums.Category;
import com.muni.fi.pa165project.enums.GenderEnum;
import com.muni.fi.pa165project.enums.UserEnum;
import com.muni.fi.pa165project.facade.ActivityFacade;
import com.muni.fi.pa165project.facade.TrackingFacade;
import com.muni.fi.pa165project.facade.UserFacade;
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
import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * @author Radim Podola
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = AppConfig.class)
public class TrackingFacadeIT {

    @Autowired
    private TrackingFacade trFac;

    @Autowired
    private UserFacade usFac;

    @Autowired
    private ActivityFacade acFac;

    private UserDTO user;
    private RecordDetailDTO record;
    private ActivityDetailDTO activity;

    @Before
    public void setup() {
        createUser();
        createActivity();
        initRecord();
    }

    private void createUser() {
        user = new UserDTO();
        user.setBirthDate(LocalDate.now());
        user.setGender(GenderEnum.MALE);
        user.setName("Lukas");
        user.setHeight(180);
        user.setWeight(77);
        user.setUserRole(UserEnum.ADMINISTRATOR);
        user.setUsername("ciso112");
        user.setPassword("abcdefgh");
        user.setEmail("ciso112@protonmail.com");
        //persist user
        user.setId(usFac.createUser(user));
    }

    private void createActivity() {
        activity = new ActivityDetailDTO();
        activity.setName("Running as hell");
        activity.setDescription("Some dummy description");
        activity.setCategory(Category.RUNNING);
        //persist activity
        activity.setId(acFac.createActivity(activity));

        BurnedCaloriesDTO bc = new BurnedCaloriesDTO();
        bc.setActivityId(activity.getId());
        bc.setUpperWeightBoundary(200);
        bc.setAmount(50);
        acFac.addBurnedCalorie(bc);

    }

    private void initRecord() {
        record = new RecordDetailDTO();
        record.setUserId(user.getId());
        record.setDistance(100);
        record.setDuration(2);
        record.setActivityId(activity.getId());
        record.setAtTime(LocalDateTime.now());
    }

    @Test
    @Transactional
    @Rollback()
    public void testCreateRecord() {
        Long recordId = trFac.createRecord(record);
        Assert.assertNotNull(recordId);
        RecordDetailDTO recordFound = trFac.getRecord(recordId);
        Assert.assertEquals(record, recordFound);
    }
}
