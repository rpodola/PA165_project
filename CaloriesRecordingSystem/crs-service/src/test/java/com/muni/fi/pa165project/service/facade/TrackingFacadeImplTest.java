package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.dto.RecordDTO;
import com.muni.fi.pa165project.dto.RecordDetailDTO;
import com.muni.fi.pa165project.dto.filters.RecordTimeFilterDTO;
import com.muni.fi.pa165project.entity.Activity;
import com.muni.fi.pa165project.entity.Record;
import com.muni.fi.pa165project.entity.User;
import com.muni.fi.pa165project.facade.TrackingFacade;
import com.muni.fi.pa165project.service.ActivityService;
import com.muni.fi.pa165project.service.RecordService;
import com.muni.fi.pa165project.service.UserService;
import com.muni.fi.pa165project.service.utils.DozerHelper;
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
    private UserService userService;

    @Mock
    private DozerHelper dozerHelper;

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
        loginDetails.setEmail("aasdf@gmail.com");
        loginDetails.setPassword("asdfghjjkki");

        user.setLoginDetails(loginDetails);
        user.setId(1L);
        record.setUser(user);

        Record oldRecord = new Record();
        oldRecord.setId(2L);
        activity = new Activity();
        activity.setId(1L);

        RecordDTO recordDTO = new RecordDTO();
        recordDTO.setId(1L);
        recordDTO.setAtTime(LocalDateTime.now());
        recordDTO.setActivityId(1L);
        recordDTO.setUserId(user.getId());

        record.setAtTime(recordDTO.getAtTime());
    }

    @Test
    @Transactional
    @Rollback()
    public void createRecord() {
        RecordDetailDTO recordDetailDTO = mock(RecordDetailDTO.class);
        when(dozerHelper.map(recordDetailDTO, Record.class)).thenReturn(record);
        when(recordDetailDTO.getActivityId()).thenReturn(1L);
        when(recordDetailDTO.getUserId()).thenReturn(1L);
        when(activityService.findById(any(Integer.class))).thenReturn(activity);
        when(userService.findById(any(Integer.class))).thenReturn(user);
        trackingFacade.createRecord(recordDetailDTO);
        verify(recordService).create(record);
    }

    @Test
    @Transactional
    @Rollback
    public void updateRecordTest() {
        RecordDetailDTO recordDetailDTO = mock(RecordDetailDTO.class);
        when(dozerHelper.map(recordDetailDTO, Record.class)).thenReturn(record);
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
        when(recordService.getRecord(record.getId())).thenReturn(record);
        trackingFacade.getRecord(record.getId());
        verify(recordService).getRecord(record.getId());
    }

    @Test
    @Transactional
    @Rollback
    public void getAllRecordsTest() {
        List<Record> records = new ArrayList<>();
        when(recordService.getAllRecordsOfUser(any(Integer.class))).thenReturn(records);
        trackingFacade.getAllRecords(user.getId());
        verify(dozerHelper).mapToList(records, RecordDTO.class);
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
        when(recordService.getFilteredRecords(any(Integer.class), any(LocalDateTime.class), any(LocalDateTime.class))).thenReturn(filteredRecords);

        trackingFacade.getFilteredRecords(timeFilterDTO);

        verify(recordService).getFilteredRecords(any(Integer.class), any(LocalDateTime.class), any(LocalDateTime.class));
    }

    @Test
    @Transactional
    @Rollback
    public void getWeekProgressOfBurnedCaloriesTest() {
        trackingFacade.getWeekProgressOfBurnedCalories(user.getId());
        verify(userService).getProgressOfweeklyCaloriesGoal(user.getId());
    }

}
