package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.dto.ActivityDTO;
import com.muni.fi.pa165project.dto.ActivityDetailExportDTO;
import com.muni.fi.pa165project.dto.BurnedCaloriesDTO;
import com.muni.fi.pa165project.dto.CategoryDTO;
import com.muni.fi.pa165project.dto.RecordDetailDTO;
import com.muni.fi.pa165project.dto.UserDTO;
import com.muni.fi.pa165project.dto.UserRegisterDTO;
import com.muni.fi.pa165project.enums.Category;
import com.muni.fi.pa165project.enums.GenderEnum;
import com.muni.fi.pa165project.enums.UserEnum;
import com.muni.fi.pa165project.structures.CategoryObject;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;
import java.time.format.DateTimeFormatter;

/**
 * @author Radim Podola
 * @author Lukáš Císar
 */
public class FacadeTestHelper {

    public static UserRegisterDTO initUserRegister() {
        UserRegisterDTO user = new UserRegisterDTO();
        user.setBirthDate(LocalDate.of(2017, Month.DECEMBER, 15).format(DateTimeFormatter.BASIC_ISO_DATE));
        user.setIsMale(true);
        user.setName("Lukas");
        user.setUsername("ciso112");
        user.setPassword("abcdefgh");
        user.setEmail("ciso112@protonmail.com");
        return user;
    }
    
    public static UserDTO initUser() {
        UserDTO user = new UserDTO();
        user.setBirthDate(LocalDate.now());
        user.setIsMale(true);
        user.setName("Lukas");
        user.setHeight(180);
        user.setWeight(77);
        user.setIsAdmin(false);
        user.setUsername("ciso112");
        user.setPassword("abcdefgh");
        user.setEmail("ciso112@protonmail.com");
        return user;
    }

    public static ActivityDetailExportDTO initActivityDetail() {
        ActivityDetailExportDTO activity = new ActivityDetailExportDTO();
        activity.setName("Running as hell");
        activity.setDescription("Some dummy description");
        CategoryObject category = CategoryObject.from(Category.RUNNING);
        activity.setCategory(new CategoryDTO(category.getId(), category.getName(), category.getDescription()));
        return activity;
    }
    
    public static ActivityDTO initActivity() {
        ActivityDTO activity = new ActivityDTO();
        activity.setName("Running as hell");
        activity.setDescription("Some dummy description");
        activity.setCategory(Category.RUNNING.getId());
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
