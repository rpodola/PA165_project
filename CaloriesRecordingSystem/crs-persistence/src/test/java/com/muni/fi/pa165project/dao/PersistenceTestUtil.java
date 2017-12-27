package com.muni.fi.pa165project.dao;

import com.muni.fi.pa165project.entity.Activity;
import com.muni.fi.pa165project.entity.Record;
import com.muni.fi.pa165project.entity.User;
import com.muni.fi.pa165project.enums.Category;
import com.muni.fi.pa165project.structures.LoginDetails;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class PersistenceTestUtil {

    static public User initUser() {
        User user = new User();
        user.setBirthDate(LocalDate.now());
        user.setIsMale(true);
        user.setName("Lukas");
        user.setHeight(180);
        user.setWeight(77);
        user.setIsAdmin(true);

        LoginDetails login = new LoginDetails();
        login.setUsername("ciso112");
        login.setPassword("abcdefgh");
        login.setEmail("ciso112@protonmail.com");
        login.setSalt("RANDOM");
        user.setLoginDetails(login);

        return user;
    }

    static public Activity initActivity() {
        Activity act = new Activity();
        act.setName("Run");
        act.setDescription("running by feet");
        act.setCategory(Category.RUNNING);

        return act;
    }

    static public Activity initActivity(String name, Category cat) {
        Activity act = new Activity();
        act.setName(name);
        act.setDescription("running by feet");
        act.setCategory(cat);

        return act;
    }

    static public Record initRecord(User us, Activity ac) {
        Record record = new Record();
        record.setAtTime(LocalDateTime.now());
        record.setActivity(ac);
        record.setUser(us);
        record.setDistance(100);
        record.setWeight(us.getWeight());

        return record;
    }
}
