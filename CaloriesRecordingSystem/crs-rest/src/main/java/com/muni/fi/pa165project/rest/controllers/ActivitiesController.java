package com.muni.fi.pa165project.rest.controllers;

import com.muni.fi.pa165project.dto.ActivityDTO;
import com.muni.fi.pa165project.dto.ActivityExportDTO;
import com.muni.fi.pa165project.facade.ActivityFacade;
import com.muni.fi.pa165project.rest.ApiUris;
import com.muni.fi.pa165project.rest.exceptions.AlreadyExistsException;
import com.muni.fi.pa165project.rest.exceptions.ResourceNotFoundException;
import com.muni.fi.pa165project.rest.security.ApplyAuthorizeFilter;
import com.muni.fi.pa165project.rest.security.SecurityLevel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.util.List;

/**
 * REST Controller for Activities
 *
 * @author Radim Podola
 */
@RestController
@RequestMapping(ApiUris.ROOT_URI_ACTIVITIES)
public class ActivitiesController {

    final static Logger logger = LoggerFactory.getLogger(ActivitiesController.class);

    @Inject
    private ActivityFacade acFacade;
    
    /**
     * Get Activity detail by identifier id
     *
     * @param id identifier for a activity
     * @return Activity detail Data Transfer Object
     * @throws ResourceNotFoundException
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public final ActivityExportDTO getActivityDetail(@PathVariable("act_id") long id) {
        logger.debug("rest getActivityDetail({})", id);

        ActivityExportDTO ac = acFacade.getActivityDetail(id);
        if (ac != null) {
            return ac;
        } else {
            throw new ResourceNotFoundException();
        }
    }

    /**
     * Get list of Activities
     *
     * @return List of Data Transfer Objects
     * @throws ResourceNotFoundException
     */
    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public final List<ActivityExportDTO> getAllActivities() {
        logger.debug("rest getAllActivities()");

        List<ActivityExportDTO> acList = acFacade.getAllActivities();
        if (acList != null && !acList.isEmpty()) {
            return acList;
        } else {
            throw new ResourceNotFoundException();
        }
    }
   
    /**
     * Delete Activity by id
     *
     * @throws ResourceNotFoundException
     */
    @ApplyAuthorizeFilter(securityLevel = SecurityLevel.ADMIN)
    @RequestMapping(value = "/delete", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public final void deleteActivity(@RequestBody long id) {
        logger.debug("rest deleteActivity({})", id);

        try {
            acFacade.removeActivity(id);
        } catch (Exception ex) {
            throw new ResourceNotFoundException();
        }
    }

    /**
     * Create a new Activity by POST method
     *
     * @param activity ActivityDTO with required fields for creation
    */
    @ApplyAuthorizeFilter(securityLevel = SecurityLevel.ADMIN)
    @RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public final void createActivity(@RequestBody ActivityDTO activity){
        logger.debug("rest createActivity()");

        try {
            acFacade.createActivity(activity);
        } catch (Exception ex) {
            throw new AlreadyExistsException();
        }
    }

    /**
     * Edit the Activity by POST method
     *
     * @param activity ActivityDTO with required fields for edit
     */
    @ApplyAuthorizeFilter(securityLevel = SecurityLevel.ADMIN)
    @RequestMapping(value = "/edit", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public final void editActivity(@RequestBody ActivityDTO activity){
        logger.debug("rest editActivity()");

        try {
            acFacade.editActivity(activity);
        } catch (Exception ex) {
            throw new ResourceNotFoundException();
        }
    }
}
