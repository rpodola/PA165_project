package com.muni.fi.pa165project.service;

import com.muni.fi.pa165project.dao.RecordDao;
import com.muni.fi.pa165project.entity.Record;
import com.muni.fi.pa165project.entity.User;
import com.muni.fi.pa165project.structures.LoginDetails;
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

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 * @author Peter Krasnan.
 */

@RunWith(MockitoJUnitRunner.class)
public class RecordServiceImplTest {

    @Mock
    private RecordDao recordDao;

    @InjectMocks
    private RecordService recordService = new RecordServiceImpl();

    private Record record;


    @Before
    public void init() {
        record = new Record();
        record.setId(1L);
        record.setAtTime(LocalDateTime.now());

        User user = new User();
        user.setId(1L);

        LoginDetails loginDetails = new LoginDetails();
        loginDetails.setPassword("123456789");
        loginDetails.setEmail("peter@gmail.com");
        loginDetails.setUsername("Peter");

        user.setLoginDetails(loginDetails);
        user.addRecord(record);
        record.setUser(user);
    }

    @Test
    @Transactional
    @Rollback
    public void createTest() {
        recordService.create(record);
        verify(recordDao).create(record);
    }

    @Test
    @Transactional
    @Rollback
    public void updateTest() {
        recordService.update(record);
        verify(recordDao).update(record);
    }

    @Test
    @Transactional
    @Rollback
    public void removeTest() {
        recordService.remove(record.getId());
        verify(recordDao).delete(record.getId());
    }

    @Test
    @Transactional
    @Rollback
    public void getRecordTest() {
        when(recordDao.findById(record.getId())).thenReturn(record);
        Record result = recordService.getRecord(record.getId());
        Assert.assertEquals(record, result);
    }

    @Test
    @Transactional
    @Rollback
    public void getAllRecordsOfUser() {
        List<Record> expected = new ArrayList<>();
        expected.add(record);
        when(recordDao.getAllRecordsOfUserSortedFromNewest(record.getUser().getId())).thenReturn(expected);
        List<Record> result = recordService.getAllRecordsOfUser(record.getUser().getId());
        Assert.assertEquals(expected, result);
    }

    @Test
    @Transactional
    @Rollback
    public void getLastNRecordsOfUser() {
        List<Record> expected = new ArrayList<>();
        expected.add(record);
        when(recordDao.getAllRecordsOfUserSortedFromNewest(record.getUser().getId())).thenReturn(expected);
        List<Record> result = recordService.getLastNRecordsOfUser(record.getUser().getId(), 1);

        Assert.assertEquals(expected, result);
    }


    @Test
    @Transactional
    @Rollback
    public void getFilteredRecords() {
        LocalDateTime from = LocalDateTime.of(1990, 5, 5, 12, 0);
        LocalDateTime to = LocalDateTime.now();

        List<Record> expected = new ArrayList<>();
        expected.add(record);
        expected.add(new Record() {{
            setAtTime(from);
        }});


        when(recordDao.findByTime(record.getUser().getId(), from, to)).thenReturn(expected);

        List<Record> result = recordService.getFilteredRecords(record.getUser().getId(),  from, to);

        Assert.assertEquals(expected, result);
    }
}
