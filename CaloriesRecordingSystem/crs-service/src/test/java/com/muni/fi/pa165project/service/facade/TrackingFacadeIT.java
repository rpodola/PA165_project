package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.config.AppConfig;
import com.muni.fi.pa165project.dto.*;
import com.muni.fi.pa165project.dto.filters.RecordTimeFilterDTO;
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
import java.time.LocalDateTime;
import java.util.List;

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
    private ActivityDetailDTO activity;
    private RecordDetailDTO record;

    @Before
    public void setup() {
        user = FacadeTestHelper.initUser();
        user.setId(usFac.createUser(user));
        activity = FacadeTestHelper.initActivity();
        activity.setId(acFac.createActivity(activity));
        acFac.addBurnedCalorie(FacadeTestHelper.initBurnedCalories(activity.getId()));
        record = FacadeTestHelper.initRecord(user.getId(), activity.getId());
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
        Assert.assertEquals(record, recordFound);
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
        record.setId(trFac.createRecord(record));
        //lets change duration
        record.setDuration(1);
        trFac.editRecord(record);
        //lets get record with changed duration
        RecordDetailDTO recordFound = trFac.getRecord(record.getId());
        Assert.assertEquals(record, recordFound);
        Assert.assertEquals(record.getDuration(), recordFound.getDuration());
    }

    @Test(expected = DataAccessException.class)
    @Transactional
    @Rollback()
    public void testRemoveRecord() {
        record.setId(trFac.createRecord(record));
        //lets remove record
        trFac.removeRecord(record.getId());
        //lets try get removed record
        trFac.getRecord(record.getId());
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
        Assert.assertEquals(record, recordFound);
        Assert.assertEquals(record.getActivityId(), recordFound.getActivityId());
        Assert.assertEquals(record.getUserId(), recordFound.getUserId());
    }

    @Test
    @Transactional
    @Rollback()
    public void testGetAllRecords() {
        //lets persist record
        record.setId(trFac.createRecord(record));
        //lets persist another record
        RecordDetailDTO rec2 = FacadeTestHelper.initRecord(user.getId(), activity.getId());
        rec2.setAtTime(LocalDateTime.now().plusMinutes(5));
        rec2.setId(trFac.createRecord(rec2));
        //lets find all
        List<RecordDTO> recordsFound = trFac.getAllRecords(user.getId());
        Assert.assertEquals(recordsFound.size(), 2);
        //records should be sorted from newest
        Assert.assertEquals(rec2, recordsFound.get(0));
        Assert.assertEquals(record, recordsFound.get(1));

        //lets try find records from different user
        Assert.assertTrue(trFac.getAllRecords(0).isEmpty());
    }

    @Test
    @Transactional
    @Rollback()
    public void testGetLastNRecords() {
        //lets persist record
        record.setId(trFac.createRecord(record));
        //lets persist another record
        RecordDetailDTO rec2 = FacadeTestHelper.initRecord(user.getId(), activity.getId());
        rec2.setAtTime(LocalDateTime.now().plusMinutes(5));
        rec2.setId(trFac.createRecord(rec2));
        //lets find all 2 records
        List<RecordDTO> recordsFound = trFac.getLastNRecords(user.getId(), 10);
        Assert.assertEquals(recordsFound.size(), 2);
        //records should be sorted from newest
        Assert.assertEquals(rec2, recordsFound.get(0));
        //lets find just 1 record
        recordsFound = trFac.getLastNRecords(user.getId(), 1);
        Assert.assertEquals(recordsFound.size(), 1);
        Assert.assertEquals(rec2, recordsFound.get(0));
        //lets find 0 records
        recordsFound = trFac.getLastNRecords(user.getId(), 0);
        Assert.assertTrue(recordsFound.isEmpty());
    }

    @Test
    @Transactional
    @Rollback()
    public void testFilteredRecords() {
        //prepare filter for all
        RecordTimeFilterDTO filter = new RecordTimeFilterDTO();
        filter.setUserId(user.getId());
        filter.setFrom(record.getAtTime().minusDays(1));
        filter.setTo(record.getAtTime().plusDays(1));
        //lets persist record
        record.setId(trFac.createRecord(record));
        //lets persist another record
        RecordDetailDTO rec2 = FacadeTestHelper.initRecord(user.getId(), activity.getId());
        rec2.setAtTime(LocalDateTime.now().plusMinutes(5));
        rec2.setId(trFac.createRecord(rec2));
        //lets find all 2 records
        List<RecordDTO> recordsFound = trFac.getFilteredRecords(filter);
        Assert.assertEquals(recordsFound.size(), 2);
        //records should be sorted from oldest
        Assert.assertEquals(record, recordsFound.get(0));
        //lets find just second by filter
        filter.setFrom(rec2.getAtTime());
        recordsFound = trFac.getFilteredRecords(filter);
        Assert.assertEquals(recordsFound.size(), 1);
        Assert.assertEquals(rec2, recordsFound.get(0));
        //lets find 0 records
        filter.setFrom(rec2.getAtTime().plusHours(1));
        recordsFound = trFac.getFilteredRecords(filter);
        Assert.assertTrue(recordsFound.isEmpty());
    }

    @Test
    @Transactional
    @Rollback()
    public void testGetWeekProgressOfBurnedCaloriess() {
        //lets persist record
        record.setId(trFac.createRecord(record));
        //lets add weekly goal
        TrackingSettingsDTO settings = new TrackingSettingsDTO();
        settings.setUserId(user.getId());
        settings.setWeeklyCaloriesGoal(100);
        usFac.setTrackingSettings(settings);
        //record should have 50 burnedCalories, so 50% progress
        Assert.assertEquals(trFac.getWeekProgressOfBurnedCalories(user.getId()), 50);
        //lets change goal
        settings.setWeeklyCaloriesGoal(0);
        usFac.setTrackingSettings(settings);
        //record should have 50 burnedCalories, so 100% progress
        Assert.assertEquals(trFac.getWeekProgressOfBurnedCalories(user.getId()), 100);
    }

    @Test(expected = DataAccessException.class)
    @Transactional
    @Rollback()
    public void testGetWeekProgressOfBurnedCaloriesNoUser() {
        Assert.assertEquals(trFac.getWeekProgressOfBurnedCalories(5), 100);
    }
}
