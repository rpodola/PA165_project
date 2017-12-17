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
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * @author Radoslav Karlik
 */
@Service
@Transactional
public class ActivityFacadeImpl implements ActivityFacade {

    final static Logger log = LoggerFactory.getLogger(ActivityFacadeImpl.class);

    @Autowired
    private MappingService mapper;

    @Autowired
    private ActivityService activityService;

    @Autowired
    private BurnedCaloriesService burnedCaloriesService;

    @Autowired
    private UserService userService;

    @Override
    public Long createActivity(ActivityCreateDTO activityCreateDTO) {
        log.debug("Creating activity with name <{}>", activityCreateDTO.getName());

        Activity activity = mapper.map(activityCreateDTO, Activity.class);
        this.activityService.create(activity);
        return activity.getId();
    }

    @Override
    public ActivityDetailDTO editActivity(ActivityUpdateDTO activityUpdateDTO) {
        log.debug("Editing activity with id <{}>", activityUpdateDTO.getId());

        Activity activity = mapper.map(activityUpdateDTO, Activity.class);
        this.activityService.update(activity);
        return getActivityDetail(activity.getId());
    }

    @Override
    public void removeActivity(long id) {
        log.debug("Removing activity with id <{}>", id);

        this.activityService.remove(id);
    }

    @Override
    public ActivityDetailDTO getActivityDetail(long id) {
        log.debug("Getting activity detail with id <{}>", id);

        Activity activity = this.activityService.findById(id);
        ActivityDetailDTO activityDTO = mapper.map(activity, ActivityDetailDTO.class);
        if (activityDTO != null
                && activityDTO.getBurnedCalories() != null
                && !activityDTO.getBurnedCalories().isEmpty())
            for (BurnedCaloriesDTO b : activityDTO.getBurnedCalories()) {
                b.setActivityId(id);
            }
        return activityDTO;
    }

    @Override
    public List<ActivityDTO> getAllActivities() {
        log.debug("Calling getAllActivities()");

        List<Activity> activities = this.activityService.getAllActivities();
        return mapper.mapToList(activities, ActivityDTO.class);
    }

    @Override
    public List<ActivityDTO> getActivities(ActivityFilterDTO activityFilter) {
        log.debug("Calling getActivities(): {}", activityFilter.toString());

        Collection<Integer> categoryIds = activityFilter.getCategories();
        Collection<Category> categories = categoryIds
                .stream()
                .map(catId -> Category.values()[catId])
                .collect(Collectors.toSet());
        List<Activity> filteredActivities = this.activityService.getFilteredActivities(categories);
        return mapper.mapToList(filteredActivities, ActivityDTO.class);
    }

    @Override
    public void addBurnedCalorie(BurnedCaloriesDTO burnedCaloriesDTO) {
        BurnedCalories bc = mapper.map(burnedCaloriesDTO, BurnedCalories.class);
        long activityId = burnedCaloriesDTO.getActivityId();

        log.debug("Adding Burned Calories to activity with id <{}>", activityId);

        Activity activity = this.activityService.findById(activityId);
        activity.addBurnedCaloriesItem(bc);
        this.activityService.update(activity);
    }

    @Override
    public void editBurnedCalorie(BurnedCaloriesDTO burnedCaloriesDTO) {
        log.debug("Editing Burned Calories with id <{}>", burnedCaloriesDTO.getId());

        BurnedCalories bc = mapper.map(burnedCaloriesDTO, BurnedCalories.class);
        this.burnedCaloriesService.updateBurnedCalories(bc);
    }

    @Override
    public void removeBurnedCalorie(BurnedCaloriesDTO burnedCaloriesDTO) {
        log.debug("Removing Burned Calories with id <{}> from activity with id <{}>",
                burnedCaloriesDTO.getId(), burnedCaloriesDTO.getActivityId());

        Activity activity = this.activityService.findById(burnedCaloriesDTO.getActivityId());
        activity.getBurnedCalories().removeIf(bc -> Objects.equals(bc.getId(), burnedCaloriesDTO.getId()));
        this.activityService.update(activity);
    }

    @Override
    public List<ActivityDTO> getActivitiesSortedByBurnedCalories(long userId) {
        log.trace("Calling getActivitiesSortedByBurnedCalories for user with id <{}>", userId);

        User user = this.userService.findById(userId);
        double weight = user.getWeight();

        Function<Long, Integer> fn = (activityId) -> this.burnedCaloriesService.getBurnedCaloriesPerHour(activityId, weight);

        List<Activity> sortedActivities = this.activityService.getActivitiesSortedByBurnedCalories(fn);

        return mapper.mapToList(sortedActivities, ActivityDTO.class);
    }
}
