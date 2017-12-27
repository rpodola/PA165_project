package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.dto.*;
import com.muni.fi.pa165project.dto.filters.RecordTimeFilterDTO;
import com.muni.fi.pa165project.facade.ActivityFacade;
import com.muni.fi.pa165project.facade.TrackingFacade;
import com.muni.fi.pa165project.facade.UserFacade;
import com.muni.fi.pa165project.service.MappingService;
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
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * @author Radim Podola
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = ServiceConfiguration.class)
public class TrackingFacadeIT {

    @Autowired
    private TrackingFacade trFac;

    @Autowired
    private UserFacade usFac;

    @Autowired
    private ActivityFacade acFac;

    @Autowired
    private MappingService mapper;

    private UserRegisterDTO userRegisterDto;
    private ActivityCreateDTO activity;
    private ActivityUpdateDTO activityUpdate;
    private RecordCreateDTO record;
    private Long userId;
    private Long activityId;

    @Before
    public void setup() {
        userRegisterDto = FacadeTestHelper.initUserRegister();
        userId = usFac.createUser(userRegisterDto);
        activity = FacadeTestHelper.initActivity();
        activityId = acFac.createActivity(activity);

        activityUpdate = new ActivityUpdateDTO();
        activityUpdate.setName(activity.getName());
        activityUpdate.setDescription(activity.getDescription());
        activityUpdate.setCategory(activity.getCategory());
        activityUpdate.setId(activityId);
        Set<BurnedCaloriesDTO> bc = new HashSet<>();
        bc.add(FacadeTestHelper.initBurnedCalories());
        activityUpdate.setBurnedCalories(bc);
        acFac.editActivity(activityUpdate);
        record = FacadeTestHelper.initCreateRecord(userId, activityId);
    }

    @Test
    @Transactional
    @Rollback()
    public void testCreateRecord() {
        //lets try persist record
        Long recordId = trFac.createRecord(record);
        Assert.assertNotNull(recordId);
        //lets try to find persisted record in DB
        RecordDetailDTO recordFound = trFac.getRecord(recordId);
        Assert.assertEquals(recordId, recordFound.getId());
        Assert.assertEquals(record.getActivityId(), recordFound.getActivityId());
    }

    @Test(expected = DataAccessException.class)
    @Transactional
    @Rollback()
    public void testCreateRecordNoUser() {
        record.setUserId(0);
        trFac.createRecord(record);
    }

    @Test(expected = DataAccessException.class)
    @Transactional
    @Rollback()
    public void testCreateRecordNoActivity() {
        record.setActivityId(0);
        trFac.createRecord(record);
    }

    @Test(expected = DataAccessException.class)
    @Transactional
    @Rollback()
    public void testCreateRecordTwice() {
        trFac.createRecord(record);
        trFac.createRecord(record);
    }

    @Test
    @Transactional
    @Rollback()
    public void testEditRecord() {
        Long recordId = trFac.createRecord(record);
        //lets change duration
        RecordUpdateDTO update = mapper.map(record, RecordUpdateDTO.class);
        update.setId(recordId);
        record.setDuration(1);
        trFac.editRecord(update);
        //lets get record with changed duration
        RecordDetailDTO recordFound = trFac.getRecord(recordId);
        Assert.assertEquals(recordId, recordFound.getId());
        Assert.assertEquals(record.getActivityId(), recordFound.getActivityId());
        Assert.assertEquals(record.getDuration(), recordFound.getDuration());
    }

    @Test(expected = DataAccessException.class)
    @Transactional
    @Rollback()
    public void testRemoveRecord() {
        Long recordId = trFac.createRecord(record);
        //lets remove record
        trFac.removeRecord(recordId);
        //lets try get removed record
        trFac.getRecord(recordId);
    }

    @Test(expected = DataAccessException.class)
    @Transactional
    @Rollback()
    public void testGetRecordNotExists() {
        trFac.getRecord(0L);
    }

    @Test
    @Transactional
    @Rollback()
    public void testGetRecord() {
        //lets persist record
        Long recordId = trFac.createRecord(record);
        //lets try to find persisted record in DB
        RecordDetailDTO recordFound = trFac.getRecord(recordId);
        Assert.assertEquals(recordId, recordFound.getId());
        Assert.assertEquals(record.getActivityId(), recordFound.getActivityId());
    }

    @Test
    @Transactional
    @Rollback()
    public void testGetAllRecords() {
        //lets persist record
        Long recordId = trFac.createRecord(record);
        //lets persist another record
        RecordCreateDTO rec2 = FacadeTestHelper.initCreateRecord(userId, activityId);
        rec2.setAtTime(addMinutesToStringDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm")), 5));
        Long recordId2 = trFac.createRecord(rec2);
        //lets find all
        List<RecordDTO> recordsFound = trFac.getAllRecords(userId);
        Assert.assertEquals(recordsFound.size(), 2);
        //records should be sorted from newest
        Assert.assertEquals(recordId2, recordsFound.get(0).getId());
        Assert.assertEquals(recordId, recordsFound.get(1).getId());

        //lets try find records from different user
        Assert.assertTrue(trFac.getAllRecords(0).isEmpty());
    }

    @Test
    @Transactional
    @Rollback()
    public void testGetLastNRecords() {
        //lets persist record
        Long recordId = trFac.createRecord(record);
        //lets persist another record
        RecordCreateDTO rec2 = FacadeTestHelper.initCreateRecord(userId, activityId);
        rec2.setAtTime(addMinutesToStringDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm")), 5));
        Long recordId2 = trFac.createRecord(rec2);
        //lets find all 2 records
        List<RecordDTO> recordsFound = trFac.getLastNRecords(userId, 10);
        Assert.assertEquals(recordsFound.size(), 2);
        //records should be sorted from newest
        Assert.assertEquals(recordId2, recordsFound.get(0).getId());
        //lets find just 1 record
        recordsFound = trFac.getLastNRecords(userId, 1);
        Assert.assertEquals(recordsFound.size(), 1);
        Assert.assertEquals(recordId2, recordsFound.get(0).getId());
        //lets find 0 records
        recordsFound = trFac.getLastNRecords(userId, 0);
        Assert.assertTrue(recordsFound.isEmpty());
    }

    @Test
    @Transactional
    @Rollback()
    public void testFilteredRecords() {
        //prepare filter for all
        RecordTimeFilterDTO filter = new RecordTimeFilterDTO();
        filter.setUserId(userId);
        filter.setFrom(addDaysToStringDate(record.getAtTime(), -1));
        filter.setTo(addDaysToStringDate(record.getAtTime(), 1));
        //lets persist record
        Long recordId = trFac.createRecord(record);
        //lets persist another record
        RecordCreateDTO rec2 = FacadeTestHelper.initCreateRecord(userId, activityId);
        rec2.setAtTime(addMinutesToStringDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm")), 5));
        Long recordId2 = trFac.createRecord(rec2);
        //lets find all 2 records
        List<RecordDTO> recordsFound = trFac.getFilteredRecords(filter);
        Assert.assertEquals(recordsFound.size(), 2);
        //records should be sorted from oldest
        Assert.assertEquals(recordId, recordsFound.get(0).getId());
        //lets find just second by filter
        filter.setFrom(rec2.getAtTime());
        recordsFound = trFac.getFilteredRecords(filter);
        Assert.assertEquals(recordsFound.size(), 1);
        Assert.assertEquals(recordId2, recordsFound.get(0).getId());
        //lets find 0 records
        filter.setFrom(addMinutesToStringDate(rec2.getAtTime(), 60));
        recordsFound = trFac.getFilteredRecords(filter);
        Assert.assertTrue(recordsFound.isEmpty());
    }

    @Test
    @Transactional
    @Rollback()
    public void testGetWeekProgressOfBurnedCaloriess() {
        //lets persist record
        Long recordId = trFac.createRecord(record);
        //lets add weekly goal
        TrackingSettingsDTO settings = new TrackingSettingsDTO();
        settings.setUserId(userId);
        settings.setWeeklyCaloriesGoal(100);
        usFac.setTrackingSettings(settings);
        //record should have 50 burnedCalories, so 50% progress
        Assert.assertEquals(trFac.getWeekProgressOfBurnedCalories(userId), 50);
        //lets change goal
        settings.setWeeklyCaloriesGoal(0);
        usFac.setTrackingSettings(settings);
        //record should have 50 burnedCalories, so 100% progress
        Assert.assertEquals(trFac.getWeekProgressOfBurnedCalories(userId), 100);
    }

    @Test(expected = DataAccessException.class)
    @Transactional
    @Rollback()
    public void testGetWeekProgressOfBurnedCaloriesNoUser() {
        Assert.assertEquals(trFac.getWeekProgressOfBurnedCalories(5), 100);
    }

    private String addDaysToStringDate(String strDate, int days){
        LocalDateTime date = LocalDateTime.parse(strDate, DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm"));
        return DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm").format(date.plusDays(days));
    }

    private String addMinutesToStringDate(String strDate, int mins){
        LocalDateTime date = LocalDateTime.parse(strDate, DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm"));
        return DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm").format(date.plusMinutes(mins));
    }
}
