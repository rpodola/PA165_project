package com.muni.fi.pa165project.service.utils;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static java.time.DayOfWeek.MONDAY;
import static java.time.temporal.TemporalAdjusters.previousOrSame;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;
import javax.validation.constraints.AssertFalse;

import org.hibernate.type.LocalDateType;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.test.annotation.Rollback;

import com.muni.fi.pa165project.dao.RecordDao;
import com.muni.fi.pa165project.dao.UserDao;
import com.muni.fi.pa165project.entity.Activity;
import com.muni.fi.pa165project.entity.Record;
import com.muni.fi.pa165project.entity.User;
import com.muni.fi.pa165project.service.UserService;
import com.muni.fi.pa165project.service.UserServiceImpl;
import com.muni.fi.pa165project.structures.LoginDetails;
import com.muni.fi.pa165project.structures.TrackingSettings;
/**
*
* @author Lukáš Císar
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
    
    private Activity testActivity;
    
    List<Record> records = new ArrayList<>();
    
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
    	//testUser.set
    	
    	
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
    	when(userService.findById(testUser.getId())).thenReturn(testUser);
    	
    	testActivity = new Activity();
    	testActivity.setId(6l);
    	testActivity.setName("aktivita");
    	testRecord = new Record();
        testRecord.setId(2l);
        testRecord.setBurnedCalories(20);
        testRecord.setDuration(1);
        testRecord.setAtTime(LocalDateTime.now());
        testRecord.setUser(testUser);
        testRecord.setActivity(testActivity);
        records.add(testRecord);
        
    	LocalDateTime from = LocalDateTime.now();
    	LocalDateTime to = from.plusWeeks(1).minusSeconds(1);
        when(recordDao.findByTime(testUser.getId(), from, to)).thenReturn(records);
        int skuska = records.get(0).getBurnedCalories();
        
        int progress =  userService.getProgressOfweeklyCaloriesGoal(testUser.getId());
        int expected = 0;
		
//		AssertFalse(progress, userService.getProgressOfweeklyCaloriesGoal(testUser.getId()));
        Assert.assertSame(expected, progress);

//		verify(progress,userService.getProgressOfweeklyCaloriesGoal(testUser.getId()));
	}
	

	

}
