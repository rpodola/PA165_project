package com.muni.fi.pa165project.dao;

import com.muni.fi.pa165project.config.AppContextConfiguration;
import com.muni.fi.pa165project.entity.Activity;
import com.muni.fi.pa165project.entity.Record;
import com.muni.fi.pa165project.entity.User;
import com.muni.fi.pa165project.enums.Category;
import com.muni.fi.pa165project.enums.GenderEnum;
import com.muni.fi.pa165project.structures.LoginDetails;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

/**
 * @author Radim Podola
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = AppContextConfiguration.class)
public class RecordDaoImplTest {

    @Autowired
    private RecordDao rcDao;

    @Autowired
    private ActivityDao acDao;

    @Autowired
    private UserDao usDao;

    private Activity act;
    private User user;
    private Record record;

    @Before
    public void initActivity() {
        this.act = new Activity();
        this.act.setName("Run");
        this.act.setDescription("running by feet");
        this.act.setCategory(Category.RUNNING);
    }

    @Before
    public void initUser() {
        this.user = new User();
        this.user.setName("Radim");
        this.user.setGender(GenderEnum.MALE);
        this.user.setBirthDate(LocalDate.now());
        LoginDetails login = new LoginDetails();
        user.setHeight(123);
        user.setWeight(75);
        login.setUsername("rpo");
        login.setPassword("12312345");
        login.setEmail("rp@see.com");
        this.user.setLoginDetails(login);
    }

    @Before
    public void initRecord() {
        this.record = new Record();
        this.record.setAtTime(LocalDateTime.now());
        this.record.setActivity(this.act);
        this.record.setUser(this.user);
        this.record.setDistance(100);
        this.record.setWeight(user.getWeight());
    }

    /**
     * Test of create method, of class RecordDaoImpl.
     */
    @Test
    @Transactional
    @Rollback(true)
    public void testCreate() {

        usDao.create(user);
        acDao.create(act);
        rcDao.create(record);

        List<Record> records = rcDao.findAll();

        Assert.assertEquals(1, records.size());
        Assert.assertEquals(this.user, records.get(0).getUser());
        Assert.assertEquals(this.act, records.get(0).getActivity());
    }

    /**
     * Test of update method, of class RecordDaoImpl.
     */
    @Test
    @Transactional
    @Rollback(true)
    public void testUpdate() {

        acDao.create(act);
        usDao.create(user);
        rcDao.create(record);

        record.setDistance(200);
        rcDao.update(record);

        Record dbRec = rcDao.findById(record.getId());
        Assert.assertEquals(200, dbRec.getDistance());
        Assert.assertEquals(this.user, dbRec.getUser());
    }

    /**
     * Test of delete method, of class RecordDaoImpl.
     */
    @Test
    @Transactional
    @Rollback(true)
    public void testDelete() {

        acDao.create(act);
        usDao.create(user);
        rcDao.create(record);

        Record dbRec = rcDao.findById(record.getId());
        Assert.assertEquals(record, dbRec);

        rcDao.delete(record);
        Assert.assertNull(rcDao.findById(record.getId()));
    }

    /**
     * Test of findById method, of class RecordDaoImpl.
     */
    @Test
    @Transactional
    @Rollback(true)
    public void testFindById() {

        acDao.create(act);
        usDao.create(user);
        rcDao.create(record);

        Assert.assertEquals(record, rcDao.findById(record.getId()));
        Assert.assertNull(rcDao.findById(8));
    }

    /**
     * Test of findAll method, of class RecordDaoImpl.
     */
    @Test
    @Transactional
    @Rollback(true)
    public void testFindAll() {

        Assert.assertTrue(rcDao.findAll().isEmpty());

        acDao.create(act);
        usDao.create(user);
        rcDao.create(record);

        List<Record> all = rcDao.findAll();
        Assert.assertEquals(record, all.get(0));

        //create another record
        Record newRec = new Record();
        newRec.setAtTime(LocalDateTime.now());
        newRec.setDistance(200);
        newRec.setActivity(this.act);
        newRec.setUser(this.user);
        newRec.setWeight(user.getWeight());
        rcDao.create(newRec);

        all = rcDao.findAll();
        Assert.assertEquals(2, all.size());
        Assert.assertEquals(newRec, all.get(1));

    }

    private LocalDateTime[] getDayTimeBoundaryFromDate(LocalDate date) {
        return new LocalDateTime[]{
                date.atStartOfDay(),
                date.atTime(23, 59, 59, 0)
        };
    }

    /**
     * Test of findByTime method, of class RecordDaoImpl.
     */
    @Test
    @Transactional
    @Rollback(true)
    public void testFindByTime_LocalDate() {

        acDao.create(act);
        usDao.create(user);
        rcDao.create(record);

        LocalDateTime[] tomorrow = this.getDayTimeBoundaryFromDate(LocalDate.now().plusDays(1));
        LocalDateTime[] yesterday = this.getDayTimeBoundaryFromDate(LocalDate.now().minusDays(1));
        LocalDateTime[] today = this.getDayTimeBoundaryFromDate(LocalDate.now());
        //any records with date of tomorrow should be in DB
        Assert.assertTrue(rcDao.findByTime(user.getId(), tomorrow[0], tomorrow[1]).isEmpty());

        List<Record> allToday = rcDao.findByTime(user.getId(), today[0], today[1]);
        Assert.assertEquals(1, allToday.size());
        Assert.assertEquals(record, allToday.get(0));

        //create another record
        Record newRec = new Record();
        newRec.setAtTime(LocalDateTime.now().minusDays(1));
        newRec.setDistance(200);
        newRec.setActivity(this.act);
        newRec.setUser(this.user);
        newRec.setWeight(user.getWeight());
        rcDao.create(newRec);

        List<Record> allY = rcDao.findByTime(user.getId(), yesterday[0], yesterday[1]);
        Assert.assertEquals(1, allY.size());
        Assert.assertEquals(newRec, allY.get(0));
    }

    /**
     * Test of findByTime method, of class RecordDaoImpl.
     */
    @Test
    @Transactional
    @Rollback(true)
    public void testFindByTime_LocalDateTime_LocalDateTime() {

        LocalDateTime tomorrow = LocalDateTime.now().plusDays(1);
        LocalDateTime yesterday = LocalDateTime.now().minusDays(1);
        LocalDateTime now = LocalDateTime.now();

        acDao.create(act);
        usDao.create(user);
        rcDao.create(record);

        //any records with date of tomorrow+ should be in DB
        Assert.assertTrue(rcDao.findByTime(user.getId(), tomorrow, tomorrow.plusDays(1)).isEmpty());

        //1 record should be in DB till now
        List<Record> allNow = rcDao.findByTime(user.getId(), yesterday, now);
        Assert.assertEquals(1, allNow.size());
        Assert.assertEquals(record, allNow.get(0));

        //create another record
        Record newRec = new Record();
        newRec.setAtTime(yesterday);
        newRec.setDistance(200);
        newRec.setActivity(this.act);
        newRec.setUser(this.user);
        newRec.setWeight(user.getWeight());
        rcDao.create(newRec);

        //1 record should be in DB till hour early
        List<Record> allBefore = rcDao.findByTime(user.getId(), yesterday, now.minusHours(1));
        Assert.assertEquals(1, allBefore.size());
        Assert.assertTrue(allBefore.contains(newRec));

        //2 record should be in DB till now
        List<Record> allTillNow = rcDao.findByTime(user.getId(), yesterday, now);
        Assert.assertEquals(2, allTillNow.size());
        Assert.assertTrue(allBefore.contains(newRec));
    }

    /**
     * Test of getAllRecordsOfUserSortedFromNewest method, of class RecordDaoImpl.
     */
    @Test
    @Transactional
    @Rollback(true)
    public void testgetAllRecordsOfUserSortedFromNewest() {
        LocalDateTime tomorrow = LocalDateTime.now().plusDays(1);
        LocalDateTime yesterday = LocalDateTime.now().minusDays(1);

        acDao.create(act);
        usDao.create(user);
        rcDao.create(record);
        //create another records
        Record newRec1 = new Record();
        newRec1.setAtTime(tomorrow);
        newRec1.setDistance(200);
        newRec1.setActivity(this.act);
        newRec1.setUser(this.user);
        newRec1.setWeight(user.getWeight());
        rcDao.create(newRec1);
        Record newRec2 = new Record();
        newRec2.setAtTime(yesterday);
        newRec2.setDistance(200);
        newRec2.setActivity(this.act);
        newRec2.setUser(this.user);
        newRec2.setWeight(user.getWeight());
        rcDao.create(newRec2);

        //3 record should be in DB till now
        List<Record> allTillNow = rcDao.getAllRecordsOfUserSortedFromNewest(user.getId());
        Assert.assertEquals(3, allTillNow.size());
        Assert.assertTrue(allTillNow.get(0).getAtTime().equals(tomorrow));
    }
}