package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.dto.ActivityDTO;
import com.muni.fi.pa165project.dto.ActivityDetailExportDTO;
import com.muni.fi.pa165project.dto.ActivityExportDTO;
import com.muni.fi.pa165project.dto.BurnedCaloriesDTO;
import com.muni.fi.pa165project.dto.filters.ActivityFilterDTO;
import com.muni.fi.pa165project.entity.Activity;
import com.muni.fi.pa165project.entity.BurnedCalories;
import com.muni.fi.pa165project.entity.User;
import com.muni.fi.pa165project.enums.Category;
import com.muni.fi.pa165project.facade.ActivityFacade;
import com.muni.fi.pa165project.service.ActivityService;
import com.muni.fi.pa165project.service.BurnedCaloriesService;
import com.muni.fi.pa165project.service.MappingService;
import com.muni.fi.pa165project.service.UserService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

import static org.mockito.Matchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 * @author Peter Krasnan
 * @author Radoslav Karlik
 */
@RunWith(MockitoJUnitRunner.class)
public class ActivityFacadeImplTest {

    @InjectMocks
    private final ActivityFacade activityFacade = new ActivityFacadeImpl();
    @Mock
    private ActivityService activityService;
    @Mock
    private BurnedCaloriesService burnedCaloriesService;
    @Mock
    private UserService userService;
    @Mock
    private MappingService mapper;
    private Activity activity;
    private ActivityDTO activityDTO;
    private ActivityExportDTO activityExportDTO;


    @Before
    public void init() {
        activity = new Activity();
        activity.setId(1L);
        activity.setBurnedCalories(new HashSet<>());
        activity.setCategory(Category.AEROBICS);

        activityDTO = new ActivityDTO();
        activityExportDTO = new ActivityExportDTO();
    }

    @Rollback
    @Transactional
    @Test
    public void createActivityTest() {
        when(mapper.map(activityDTO, Activity.class)).thenReturn(activity);
        activityFacade.createActivity(activityDTO);
        verify(activityService).create(activity);
    }

    @Rollback
    @Transactional
    @Test
    public void addBurnedCaloriesTest() {
        BurnedCalories burnedCalories = new BurnedCalories();
        BurnedCaloriesDTO burnedCaloriesDTO = new BurnedCaloriesDTO();
        burnedCaloriesDTO.setId(1L);
        burnedCaloriesDTO.setActivityId(activity.getId());
        when(mapper.map(burnedCaloriesDTO, BurnedCalories.class)).thenReturn(burnedCalories);
        when(activityService.findById(activity.getId())).thenReturn(activity);
        activityFacade.addBurnedCalorie(burnedCaloriesDTO);

        Assert.assertTrue(activity.getBurnedCalories().contains(burnedCalories));
        verify(activityService).update(activity);
    }

    @Rollback
    @Transactional
    @Test
    public void getAllActivitiesTest() {
        List<Activity> activities = new ArrayList<>();
        activities.add(activity);

        List<ActivityExportDTO> activitiesExportDTOs = new ArrayList<>();
        activitiesExportDTOs.add(activityExportDTO);

        when(mapper.mapToList(activities, ActivityExportDTO.class)).thenReturn(activitiesExportDTOs);
        when(activityService.getAllActivities()).thenReturn(activities);
        List<ActivityExportDTO> result = activityFacade.getAllActivities();

        Assert.assertEquals(activitiesExportDTOs, result);
    }

    @Rollback
    @Transactional
    @Test
    public void removeBurnedCaloriesTest() {
        BurnedCaloriesDTO burnedCaloriesDTO = new BurnedCaloriesDTO();
        burnedCaloriesDTO.setId(1L);
        burnedCaloriesDTO.setActivityId(activity.getId());

        when(activityService.findById(activity.getId())).thenReturn(activity);
        activityFacade.removeBurnedCalorie(burnedCaloriesDTO);
        verify(activityService).update(activity);
    }

    @Rollback
    @Transactional
    @Test
    public void removeActivityTest() {
        activityFacade.removeActivity(activity.getId());
        verify(activityService).remove(activity.getId());
    }

    @Rollback
    @Transactional
    @Test
    public void getActivitiesTest() {
        ActivityFilterDTO activityFilterDTO = new ActivityFilterDTO();
        activityFilterDTO.setCategories(new HashSet<Integer>() {{
            add(Category.AEROBICS.getId());
        }});

        List<Activity> activities = new ArrayList<Activity>() {{
            add(activity);
        }};

        List<ActivityExportDTO> expected = new ArrayList<ActivityExportDTO>() {{
            add(activityExportDTO);
        }};
        
        Collection<Category> categories = activityFilterDTO
            .getCategories()
            .stream()
            .map(cat -> Category.values()[cat])
            .collect(Collectors.toSet());
        when(activityService.getFilteredActivities(categories)).thenReturn(activities);

        when(mapper.mapToList(activities, ActivityExportDTO.class)).thenReturn(expected);

        List<ActivityExportDTO> result = activityFacade.getActivities(activityFilterDTO);

        Assert.assertEquals(expected, result);
    }

    @Rollback
    @Transactional
    @Test
    public void editActivityTest() {
        when(mapper.map(activityDTO, Activity.class)).thenReturn(activity);
        activityFacade.editActivity(activityDTO);
        verify(activityService).update(activity);
    }

    @Rollback
    @Transactional
    @Test
    public void editBurnedCaloriesTest() {
        BurnedCaloriesDTO burnedCaloriesDTO = new BurnedCaloriesDTO();
        burnedCaloriesDTO.setId(1L);
        burnedCaloriesDTO.setActivityId(activity.getId());
        BurnedCalories burnedCalories = new BurnedCalories();
        when(mapper.map(burnedCaloriesDTO, BurnedCalories.class)).thenReturn(burnedCalories);
        activityFacade.editBurnedCalorie(burnedCaloriesDTO);
        verify(burnedCaloriesService).updateBurnedCalories(burnedCalories);
    }

    @Rollback
    @Transactional
    @Test
    public void getActivityDetailTest() {
        ActivityDetailExportDTO expected = new ActivityDetailExportDTO();
        when(activityService.findById(activity.getId())).thenReturn(activity);
        when(mapper.map(activity, ActivityDetailExportDTO.class)).thenReturn(expected);
        ActivityDetailExportDTO result = activityFacade.getActivityDetail(activity.getId());

        Assert.assertEquals(expected, result);
    }

    @Rollback
    @Transactional
    @Test
    public void getActivitiesSortedByBurnedCaloriesTest() {
        long userId = 1L;
        User user = new User();
        user.setWeight(90);

        List<Activity> activities = new ArrayList<>();
        activities.add(activity);
        List<ActivityExportDTO> expected = new ArrayList<>();
        expected.add(activityExportDTO);

        when(userService.findById(userId)).thenReturn(user);
        when(burnedCaloriesService.getBurnedCaloriesPerHour(activity.getId(), user.getWeight())).thenReturn(500);
        when(activityService.getActivitiesSortedByBurnedCalories(any(Function.class))).thenReturn(activities);

        when(mapper.mapToList(activities, ActivityExportDTO.class)).thenReturn(expected);

        List<ActivityExportDTO> result = activityFacade.getActivitiesSortedByBurnedCalories(userId);

        Assert.assertEquals(expected, result);
    }
}
