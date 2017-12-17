package com.muni.fi.pa165project.rest.controllers;

import com.muni.fi.pa165project.dto.ActivityCreateDTO;
import com.muni.fi.pa165project.dto.ActivityDetailDTO;
import com.muni.fi.pa165project.dto.ActivityUpdateDTO;
import com.muni.fi.pa165project.dto.ActivityDTO;
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
    //@ApplyAuthorizeFilter(securityLevel = SecurityLevel.MEMBER)
    @RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public final ActivityDetailDTO getActivityDetail(@PathVariable("id") long id) {
        logger.debug("rest getActivityDetail({})", id);

        ActivityDetailDTO ac = acFacade.getActivityDetail(id);
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
     */
    //@ApplyAuthorizeFilter(securityLevel = SecurityLevel.MEMBER)
    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public final List<ActivityDTO> getAllActivities() {
        logger.debug("rest getAllActivities()");

        return acFacade.getAllActivities();
    }
   
    /**
     * Delete Activity by id
     *
     * @throws ResourceNotFoundException
     */
    @ApplyAuthorizeFilter(securityLevel = SecurityLevel.ADMIN)
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public final void deleteActivity(@PathVariable("id") long id) {
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
     * @param activity ActivityCreateDTO with required fields for creation
    */
    @ApplyAuthorizeFilter(securityLevel = SecurityLevel.ADMIN)
    @RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public final Long createActivity(@RequestBody ActivityCreateDTO activity){
        logger.debug("rest createActivity()");
        Long id;
        try {
            id = acFacade.createActivity(activity);
        } catch (Exception ex) {
            throw new AlreadyExistsException();
        }
        return id;
    }

    /**
     * Edit the Activity by PUT method
     *
     * @param activity ActivityCreateDTO with required fields for edit
     */
    @ApplyAuthorizeFilter(securityLevel = SecurityLevel.ADMIN)
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public final ActivityDetailDTO editActivity(@PathVariable("id") long id, @RequestBody ActivityUpdateDTO activity){
        logger.debug("rest editActivity()");
        ActivityDetailDTO a;
        try {
            activity.setId(id);
            a = acFacade.editActivity(activity);
        } catch (Exception ex) {
            throw new ResourceNotFoundException();
        }
        return a;
    }
}
