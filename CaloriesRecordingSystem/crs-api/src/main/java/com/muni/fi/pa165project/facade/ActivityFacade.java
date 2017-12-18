package com.muni.fi.pa165project.facade;

import com.muni.fi.pa165project.dto.*;
import com.muni.fi.pa165project.dto.filters.ActivityFilterDTO;

import java.util.List;

/**
 * @author Radoslav Karlik
 */
public interface ActivityFacade {

    /**
     * Create Activity object
     *
     * @param activityCreateDTO activity information
     * @return activity id or null if activity was not created
     */
    Long createActivity(ActivityCreateDTO activityCreateDTO);

    /**
     * Edit Activity object
     *
     * @param activityUpdateDTO updated activity information
     * @return edited activity detail
     */
    ActivityDetailDTO editActivity(ActivityUpdateDTO activityUpdateDTO);

    /**
     * Remove Activity object
     *
     * @param id activity id
     */
    void removeActivity(long id);

    /**
     * Get activity detail including calories table
     *
     * @param id activity id
     * @return Activity detail object
     */
    ActivityDetailDTO getActivityDetail(long id);

    /**
     * Get list of all activities
     *
     * @return list of Activity objects
     */
    List<ActivityDTO> getAllActivities();

    /**
     * Get list of filtered activities
     *
     * @param activityFilter activity filter
     * @return list of Activity objects
     */
    List<ActivityDTO> getActivities(ActivityFilterDTO activityFilter);

    /**
     * Get list of activities sorted by how much calories user would burn doing them
     *
     * @param userId user id
     * @return list of Activity objects
     */
    List<ActivityDTO> getActivitiesSortedByBurnedCalories(long userId);

    /**
     * Get list of Categories
     *
     * @return list of Category DTO
     */
    List<CategoryDTO> getAllCategories();

    /**
     * Get Category detail
     *
     * @return Category DTO
     */
    CategoryDTO getCategory(long id);
}
