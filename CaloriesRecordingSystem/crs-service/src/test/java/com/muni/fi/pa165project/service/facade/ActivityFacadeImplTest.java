package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.dto.*;
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
    private ActivityCreateDTO activityCreateDTO;
    private ActivityDTO activityDTO;
    private ActivityUpdateDTO activityUpdateDTO;


    @Before
    public void init() {
        activity = new Activity();
        activity.setId(1L);
        activity.setBurnedCalories(new HashSet<>());
        activity.setCategory(Category.AEROBICS);

        activityCreateDTO = new ActivityCreateDTO();
        activityDTO = new ActivityDTO();
        activityUpdateDTO = new ActivityUpdateDTO();
    }

    @Rollback
    @Transactional
    @Test
    public void createActivityTest() {
        when(mapper.map(activityCreateDTO, Activity.class)).thenReturn(activity);
        activityFacade.createActivity(activityCreateDTO);
        verify(activityService).create(activity);
    }

    @Rollback
    @Transactional
    @Test
    public void getAllActivitiesTest() {
        List<Activity> activities = new ArrayList<>();
        activities.add(activity);

        List<ActivityDTO> activitiesExportDTOs = new ArrayList<>();
        activitiesExportDTOs.add(activityDTO);

        when(mapper.mapToList(activities, ActivityDTO.class)).thenReturn(activitiesExportDTOs);
        when(activityService.getAllActivities()).thenReturn(activities);
        List<ActivityDTO> result = activityFacade.getAllActivities();

        Assert.assertEquals(activitiesExportDTOs, result);
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

        List<ActivityDTO> expected = new ArrayList<ActivityDTO>() {{
            add(activityDTO);
        }};

        Collection<Category> categories = activityFilterDTO
            .getCategories()
            .stream()
            .map(cat -> Category.values()[cat])
            .collect(Collectors.toSet());
        when(activityService.getFilteredActivities(categories)).thenReturn(activities);

        when(mapper.mapToList(activities, ActivityDTO.class)).thenReturn(expected);

        List<ActivityDTO> result = activityFacade.getActivities(activityFilterDTO);

        Assert.assertEquals(expected, result);
    }

    /**
     * @TODO: @PeterKrasnansky
     * Test nerefeklektuje aktualny stav fasady
    @Rollback
    @Transactional
    @Test
    public void editActivityTest() {
        when(mapper.map(activityUpdateDTO, Activity.class)).thenReturn(activity);
        activityFacade.editActivity(activityUpdateDTO);
        verify(activityService).update(activity);
    }*/

    @Rollback
    @Transactional
    @Test
    public void getActivityDetailTest() {
        ActivityDetailDTO expected = new ActivityDetailDTO();
        when(activityService.findById(activity.getId())).thenReturn(activity);
        when(mapper.map(activity, ActivityDetailDTO.class)).thenReturn(expected);
        ActivityDetailDTO result = activityFacade.getActivityDetail(activity.getId());

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
        List<ActivityDTO> expected = new ArrayList<>();
        expected.add(activityDTO);

        when(userService.findById(userId)).thenReturn(user);
        when(burnedCaloriesService.getBurnedCaloriesPerHour(activity.getId(), user.getWeight())).thenReturn(500);
        when(activityService.getActivitiesSortedByBurnedCalories(any(Function.class))).thenReturn(activities);

        when(mapper.mapToList(activities, ActivityDTO.class)).thenReturn(expected);

        List<ActivityDTO> result = activityFacade.getActivitiesSortedByBurnedCalories(userId);

        Assert.assertEquals(expected, result);
    }
}
