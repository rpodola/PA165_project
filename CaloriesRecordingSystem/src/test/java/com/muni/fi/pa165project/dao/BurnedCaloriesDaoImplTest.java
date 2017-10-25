/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.muni.fi.pa165project.dao;

import com.muni.fi.pa165project.config.InMemoryDatabaseContext;
import com.muni.fi.pa165project.entity.BurnedCalories;
import com.muni.fi.pa165project.enums.Difficulty;
import java.util.List;
import javax.transaction.Transactional;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
/**
 *
 * @author Radoslav Karlik
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = InMemoryDatabaseContext.class)
@Transactional
public class BurnedCaloriesDaoImplTest {

       @Autowired
       private BurnedCaloriesDao bcDao;

       private BurnedCalories bc1;
       private BurnedCalories bc2;
       private BurnedCalories bc3;

       @Before
       public void init() {
               this.bc1 = new BurnedCalories();
               this.bc1.setWeightRange(100);

               this.bc2 = new BurnedCalories();
               this.bc2.setWeightRange(200);

               this.bc3 = new BurnedCalories();
               this.bc3.setWeightRange(300);

               this.bcDao.create(bc1);
               this.bcDao.create(bc2);
               this.bcDao.create(bc3);
       }

       @Test
       @Rollback(true)
       public void testCreate() {
               BurnedCalories bc = new BurnedCalories();

               bc.setWeightRange(75);
               bc.setAmount(200);
               bc.setDifficulty(Difficulty.MEDIUM);
               //bc.setActivity(ac);

               this.bcDao.create(bc);

               List<BurnedCalories> bcs = this.bcDao.findAll();
               Assert.assertTrue(bcs.size() == 1);
       }

       @Test
       @Rollback(true)
       public void testUpdate() {
               this.bc2.setWeightRange(201);
               this.bcDao.update(bc2);

               BurnedCalories bc2FromDB = this.bcDao.findById(this.bc2.getId());

               Assert.assertEquals(201, bc2FromDB.getWeightRange());
       }

       @Test
       @Rollback(true)
       public void testRemove() {
               int initialCount = this.bcDao.findAll().size();

               this.bcDao.delete(bc1);

               int finalCount = this.bcDao.findAll().size();

               Assert.assertEquals(initialCount, finalCount + 1);
       }

       @Test
       @Rollback(true)
       public void testFindAll() {
               List<BurnedCalories> bcs = this.bcDao.findAll();

               Assert.assertTrue(bcs.size() == 3);
       }

       @Test
       @Rollback(true)
       public void testFindById() {
               BurnedCalories fromDb = this.bcDao.findById(1);

               Assert.assertEquals(100, fromDb.getWeightRange());
       }

}