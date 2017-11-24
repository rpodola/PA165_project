package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.dto.ActivityDTO;
import com.muni.fi.pa165project.dto.RecordDTO;
import com.muni.fi.pa165project.dto.UserDTO;
import com.muni.fi.pa165project.entity.Activity;
import com.muni.fi.pa165project.entity.Record;
import com.muni.fi.pa165project.entity.User;
import com.muni.fi.pa165project.enums.Category;
import com.muni.fi.pa165project.enums.GenderEnum;
import com.muni.fi.pa165project.facade.TrackingFacade;
import com.muni.fi.pa165project.service.ActivityService;
import com.muni.fi.pa165project.service.UserService;
import com.muni.fi.pa165project.service.RecordService;
import com.muni.fi.pa165project.service.utils.DozerHelper;
import com.muni.fi.pa165project.structures.LoginDetails;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.transaction.Transactional;

import org.junit.Before;
import org.junit.Test;

import static junit.framework.TestCase.assertSame;
import static junit.framework.TestCase.assertTrue;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.*;

import org.junit.runner.RunWith;
import org.mockito.InOrder;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.test.annotation.Rollback;
import sun.rmi.runtime.Log;

/**
 *
 * @author Radim Podola
 */
@RunWith(MockitoJUnitRunner.class)
public class TrackingFacadeImplTest {
    
    @Mock
    private RecordService recordService;

    @Mock
    private ActivityService activityService;

    @Mock
    private UserService userService;

    @Mock
    private DozerHelper dozerHelper;

    @InjectMocks
    private TrackingFacade trackingFacade = new TrackingFacadeImpl();

    private ActivityDTO activityDTO;
    private UserDTO userDTO;
    private RecordDTO recordDTO;


    private Record record;
    private Record oldRecord;
    private User user;
    private Activity activity;

    @Before
    public void initActivityDTO() {
        this.activityDTO = new ActivityDTO();
        this.activityDTO.setName("Run");
        this.activityDTO.setDescription("running by feet");
        this.activityDTO.setCategory(Category.DANCING);
        
//        activityService.createActivity(this.act);
//        this.act = activityService.getAllActivities().get(0);
    }
    
    @Before
    public void initUserDTO() {
        this.userDTO = new UserDTO();
        this.userDTO.setName("Radim");
        this.userDTO.setGender(GenderEnum.MALE);
        this.userDTO.setBirthDate(LocalDate.now());
        LoginDetails login = new LoginDetails();
        userDTO.setHeight(123);
        userDTO.setWeight(75);
        login.setUsername("rpo");
        login.setPassword("12312345");
        login.setEmail("rp@see.com");
        //this.user.setLoginDetails(login);
        
        userDTO.setId(1L);
        //usFac.createUser(user);
    }
    
    @Before
    public void initRecord() {

    }

    @Before
    public void init(){
        record = new Record();
        record.setId(1L);

        user = new User();
        user.setWeight(50);
        LoginDetails loginDetails = new LoginDetails();
        loginDetails.setUsername("Peter");
        loginDetails.setEmail("aasdf@gmail.com");
        loginDetails.setPassword("asdfghjjkki");

        user.setLoginDetails(loginDetails);
        user.setId(1L);
        record.setUser(user);

        oldRecord = new Record();
        oldRecord.setId(2L);
        activity = new Activity();
        activity.setId(1L);

        recordDTO = new RecordDTO();
        recordDTO.setId(1L);
        recordDTO.setAtTime(LocalDateTime.now());
        recordDTO.setActivityId(1L);
        recordDTO.setUserId(user.getId());

        record.setAtTime(recordDTO.getAtTime());
    }


    /**
     * Test of createRecord method, of class TrackingFacadeImpl.
     */
    @Test
    @Transactional
    @Rollback()
    public void createRecordIntegrityTest() {

    }

    @Test
    @Transactional
    @Rollback
    public void updateRecordTest() {
//
//        record.setActivity(activity);
//        when(dozerHelper.map(recordDTO, Record.class)).thenReturn(record);
//        when(recordService.getRecord(any(Integer.class))).thenReturn(oldRecord);
//        when(activityService.getBurnedCaloriesPerHour(activity.getId(), user.getWeight())).thenReturn(500);
//
//        InOrder inOrder = inOrder(recordService, activityService);
////        trackingFacade.editRecord(recordDTO);
//
//        inOrder.verify(recordService).getRecord(record.getId());
//        inOrder.verify(activityService).getBurnedCaloriesPerHour(activity.getId(), user.getWeight());

    }

    @Test
    @Transactional
    @Rollback
    public void removeRecordTest() {
        InOrder inOrder = inOrder(recordService);

        trackingFacade.removeRecord(record.getId());

        inOrder.verify(recordService).remove(record.getId());
    }

    @Test
    @Transactional
    @Rollback
    public void getRecordTest() {

        InOrder inOrder = inOrder(dozerHelper,recordService);
        when(recordService.getRecord(record.getId())).thenReturn(record);

        trackingFacade.getRecord(record.getId());

        inOrder.verify(recordService).getRecord(record.getId());
//        inOrder.verify(dozerHelper).map(record, RecordDTO.class);
    }

    @Test
    @Transactional
    @Rollback
    public void getAllRecordsTest() {
//        when(userService.findById(any(Integer.class))).thenReturn(user);
//        Set<Record> records = new HashSet<Record>(){{
//            add(new Record());
//        }};
//
//        user.setActivityRecords(records);
//
//        verify(dozerHelper.mapToList(records, RecordDTO.class));
//
//        trackingFacade.getAllRecords(user.getId());

    }

    @Test
    public void getLastNRecordsTest() {
        
    }

    @Test
    public void getFilteredRecordsTest() {

    }

    @Test
    public void getWeekProgressOfBurnedCaloriesTest() {

    }



}
