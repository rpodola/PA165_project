package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.dto.RecordDTO;
import com.muni.fi.pa165project.dto.RecordDetailDTO;
import com.muni.fi.pa165project.dto.filters.RecordTimeFilterDTO;
import com.muni.fi.pa165project.entity.Activity;
import com.muni.fi.pa165project.entity.Record;
import com.muni.fi.pa165project.entity.User;
import com.muni.fi.pa165project.facade.TrackingFacade;
import com.muni.fi.pa165project.service.ActivityService;
import com.muni.fi.pa165project.service.BurnedCaloriesService;
import com.muni.fi.pa165project.service.RecordService;
import com.muni.fi.pa165project.service.UserService;
import com.muni.fi.pa165project.service.MappingService;
import com.muni.fi.pa165project.structures.LoginDetails;
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
import static org.mockito.Mockito.*;

/**
 *
 * @author Radim Podola
 * @author Peter Krasnan
 *
 */
@RunWith(MockitoJUnitRunner.class)
public class TrackingFacadeImplTest {
    
    @Mock
    private RecordService recordService;

    @Mock
    private ActivityService activityService;

    @Mock
    private BurnedCaloriesService burnedCaloriesService;

    @Mock
    private UserService userService;

    @Mock
    private MappingService mapper;

    @InjectMocks
    private TrackingFacade trackingFacade = new TrackingFacadeImpl();


    private Record record;
    private User user;
    private Activity activity;

    @Before
    public void init(){
        record = new Record();
        record.setId(1L);

        user = new User();
        user.setWeight(50);
        LoginDetails loginDetails = new LoginDetails();
        loginDetails.setUsername("Peter");
        loginDetails.setEmail("peter@gmail.com");
        loginDetails.setPassword("PA165asda");

        user.setLoginDetails(loginDetails);
        user.setId(1L);
        record.setUser(user);

        Record oldRecord = new Record();
        oldRecord.setId(2L);
        activity = new Activity();
        activity.setId(1L);
        activity.setName("cycling");

        RecordDTO recordDTO = new RecordDTO();
        recordDTO.setId(1L);
        recordDTO.setAtTime(LocalDateTime.now());
        recordDTO.setActivityId(activity.getId());
        recordDTO.setUserId(user.getId());

        record.setAtTime(recordDTO.getAtTime());
        record.setActivity(activity);
    }

    @Test
    @Transactional
    @Rollback()
    public void createRecord() {
        RecordDetailDTO recordDetailDTO = mock(RecordDetailDTO.class);
        when(mapper.map(recordDetailDTO, Record.class)).thenReturn(record);
        when(recordDetailDTO.getActivityId()).thenReturn(1L);
        when(recordDetailDTO.getUserId()).thenReturn(1L);
        when(burnedCaloriesService.calculateAmountOfCalories(any(Long.class), any(Double.class), any(Double.class))).thenReturn(500.0);
        when(activityService.findById(any(Long.class))).thenReturn(activity);
        when(userService.findById(any(Long.class))).thenReturn(user);
        trackingFacade.createRecord(recordDetailDTO);
        verify(recordService).create(record);
    }

    @Test
    @Transactional
    @Rollback
    public void updateRecordTest() {
        RecordDetailDTO recordDetailDTO = mock(RecordDetailDTO.class);
        when(recordService.getRecord(any(Long.class))).thenReturn(record);
        when(recordDetailDTO.getActivityId()).thenReturn(1L);
        when(recordDetailDTO.getDuration()).thenReturn(record.getDistance());
        when(recordDetailDTO.getWeight()).thenReturn(record.getWeight());

        when(mapper.map(recordDetailDTO, Record.class)).thenReturn(record);
        trackingFacade.editRecord(recordDetailDTO);
        verify(recordService).update(record);
    }

    @Test
    @Transactional
    @Rollback
    public void removeRecordTest() {
        trackingFacade.removeRecord(record.getId());
        verify(recordService).remove(record.getId());
    }

    @Test
    @Transactional
    @Rollback
    public void getRecordTest() {
        RecordDetailDTO recordDetailDTO = mock(RecordDetailDTO.class);
        when(recordService.getRecord(record.getId())).thenReturn(record);
        when(mapper.map(record, RecordDetailDTO.class)).thenReturn(recordDetailDTO);
        trackingFacade.getRecord(record.getId());
        verify(recordService).getRecord(record.getId());
    }

    @Test
    @Transactional
    @Rollback
    public void getAllRecordsTest() {
        List<Record> records = new ArrayList<>();
        when(recordService.getAllRecordsOfUser(any(Long.class))).thenReturn(records);
        trackingFacade.getAllRecords(user.getId());
        verify(mapper).mapToList(records, RecordDTO.class);
    }

    @Test
    @Transactional
    @Rollback
    public void getLastNRecordsTest() {
        trackingFacade.getLastNRecords(user.getId(), 10);
        verify(recordService).getLastNRecordsOfUser(user.getId(), 10);
    }

    @Test
    @Transactional
    @Rollback
    public void getFilteredRecordsTest() {
        RecordTimeFilterDTO timeFilterDTO = mock(RecordTimeFilterDTO.class);
        when(timeFilterDTO.getUserId()).thenReturn(1L);
        when(timeFilterDTO.getFrom()).thenReturn(LocalDateTime.now());
        when(timeFilterDTO.getTo()).thenReturn(LocalDateTime.now());
        List<Record> filteredRecords = new ArrayList<>();
        when(recordService.getFilteredRecords(any(Long.class), any(LocalDateTime.class), any(LocalDateTime.class))).thenReturn(filteredRecords);

        trackingFacade.getFilteredRecords(timeFilterDTO);

        verify(recordService).getFilteredRecords(any(Long.class), any(LocalDateTime.class), any(LocalDateTime.class));
    }

    @Test
    @Transactional
    @Rollback
    public void getWeekProgressOfBurnedCaloriesTest() {
        trackingFacade.getWeekProgressOfBurnedCalories(user.getId());
        verify(userService).getProgressOfWeeklyCaloriesGoal(user.getId());
    }
}
