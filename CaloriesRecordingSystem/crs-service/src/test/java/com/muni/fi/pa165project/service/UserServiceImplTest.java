package com.muni.fi.pa165project.service;

import com.muni.fi.pa165project.dao.RecordDao;
import com.muni.fi.pa165project.dao.UserDao;
import com.muni.fi.pa165project.entity.Record;
import com.muni.fi.pa165project.entity.User;
import com.muni.fi.pa165project.structures.LoginDetails;
import com.muni.fi.pa165project.structures.TrackingSettings;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.test.annotation.Rollback;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.mockito.Matchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
/**
*
* @author Lukáš Císar
* @author Radim Podola
*/

@RunWith(MockitoJUnitRunner.class)
public class UserServiceImplTest {
	
	@Mock
	private UserDao userDao;
	
	@Mock
	private RecordDao recordDao;
	
    @InjectMocks
	private UserService userService = new UserServiceImpl();
    
    private User testUser;
    
    private Record testRecord;
    
    @Before
    public void prepareData(){
    	testUser =  new User();
    	testUser.setId(3l);
    	
    	LoginDetails loginDetails = new LoginDetails();
    	loginDetails.setEmail("ciso@gmail.com");
    	loginDetails.setPassword("abcd");
    	loginDetails.setUsername("ciso");
    	testUser.setLoginDetails(loginDetails);

    	TrackingSettings trackingSettings = new TrackingSettings();
    	trackingSettings.setWeeklyCaloriesGoal(200);
    	testUser.setTrackingSettings(trackingSettings);
    }
    
    @Test
    @Transactional
    @Rollback
	public void testFindById(){
    	when(userDao.findById(testUser.getId())).thenReturn(testUser);
		User us = userService.findById(testUser.getId());
		Assert.assertEquals(us, testUser);
    }
		
    @Test
    @Transactional
    @Rollback
	public void testFindByEmail(){
    	when(userDao.findByEmail(testUser.getLoginDetails().getEmail())).thenReturn(testUser);
		User us = userService.findByEmail(testUser.getLoginDetails().getEmail());
		Assert.assertEquals(us, testUser);
	}
    
    @Test
    @Transactional
    @Rollback
	public void testCreateUser(){
    	userService.createUser(testUser);
		verify(userDao).create(testUser);
	}
	
    @Test
    @Transactional
    @Rollback
	public void testDeleteUser(){
		userService.deleteUser(testUser.getId());
		verify(userDao).delete(testUser.getId());
	}

    @Test
    @Transactional
    @Rollback
	public void testUpdateUser() {
    	userService.updateUser(testUser);
		verify(userDao).update(testUser);
	}
    
    @Test
    @Transactional
    @Rollback
    public void testGetProgressOfweeklyCaloriesGoal(){    	
        List<Record> records = new ArrayList<>();

    	testRecord = new Record();
        testRecord.setBurnedCalories(20);

        when(userService.findById(any(Long.class))).thenReturn(testUser);
        when(recordDao.findByTime(any(Long.class), any(LocalDateTime.class), any(LocalDateTime.class))).thenReturn(records);

        //lets have 0% progress, no records so far
        Assert.assertEquals(0, userService.getProgressOfWeeklyCaloriesGoal(testUser.getId()));
        
        //add 1 record with 20 burned calories, should be 10% progress 
        records.add(testRecord);
        Assert.assertEquals(10, userService.getProgressOfWeeklyCaloriesGoal(testUser.getId()));

        //lets add another record and have 50% progress
        testRecord = new Record();
        testRecord.setBurnedCalories(80);
        records.add(testRecord);
        Assert.assertEquals(50, userService.getProgressOfWeeklyCaloriesGoal(testUser.getId()));
        
        //lets add another record and have 200% progress
        testRecord = new Record();
        testRecord.setBurnedCalories(300);
        records.add(testRecord);
        Assert.assertEquals(200, userService.getProgressOfWeeklyCaloriesGoal(testUser.getId()));
        
        //lets set goal to 0 and progress should be always accomplished
        testUser.getTrackingSettings().setWeeklyCaloriesGoal(0);
        Assert.assertEquals(100, userService.getProgressOfWeeklyCaloriesGoal(testUser.getId()));
	}
}
