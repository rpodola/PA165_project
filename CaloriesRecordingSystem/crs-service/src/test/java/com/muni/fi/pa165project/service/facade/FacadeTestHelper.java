package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.dto.ActivityDetailDTO;
import com.muni.fi.pa165project.dto.BurnedCaloriesDTO;
import com.muni.fi.pa165project.dto.RecordDetailDTO;
import com.muni.fi.pa165project.dto.UserDTO;
import com.muni.fi.pa165project.enums.Category;
import com.muni.fi.pa165project.enums.GenderEnum;
import com.muni.fi.pa165project.enums.UserEnum;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * @author Radim Podola
 */
public class FacadeTestHelper {

    public static UserDTO initUser() {
        UserDTO user = new UserDTO();
        user.setBirthDate(LocalDate.now());
        user.setGender(GenderEnum.MALE);
        user.setName("Lukas");
        user.setHeight(180);
        user.setWeight(77);
        user.setUserRole(UserEnum.ADMINISTRATOR);
        user.setUsername("ciso112");
        user.setPassword("abcdefgh");
        user.setEmail("ciso112@protonmail.com");
        return user;
    }

    public static ActivityDetailDTO initActivity() {
        ActivityDetailDTO activity = new ActivityDetailDTO();
        activity.setName("Running as hell");
        activity.setDescription("Some dummy description");
        activity.setCategory(Category.RUNNING);
        return activity;
    }

    public static BurnedCaloriesDTO initBurnedCalories(Long activityId) {
        BurnedCaloriesDTO bc = new BurnedCaloriesDTO();
        bc.setActivityId(activityId);
        bc.setUpperWeightBoundary(200);
        bc.setAmount(50);
        return bc;
    }

    public static RecordDetailDTO initRecord(Long userId, Long activityId) {
        RecordDetailDTO record = new RecordDetailDTO();
        record.setUserId(userId);
        record.setDistance(100);
        record.setDuration(1);
        record.setActivityId(activityId);
        record.setAtTime(LocalDateTime.now());
        return record;
    }
}
