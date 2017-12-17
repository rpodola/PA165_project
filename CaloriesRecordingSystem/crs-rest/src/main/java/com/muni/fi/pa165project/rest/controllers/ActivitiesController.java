package com.muni.fi.pa165project.rest.controllers;

import com.muni.fi.pa165project.dto.*;
import com.muni.fi.pa165project.dto.filters.ActivityFilterDTO;
import com.muni.fi.pa165project.facade.ActivityFacade;
import com.muni.fi.pa165project.rest.ApiUris;
import com.muni.fi.pa165project.rest.exceptions.AlreadyExistsException;
import com.muni.fi.pa165project.rest.exceptions.InternalException;
import com.muni.fi.pa165project.rest.exceptions.ResourceNotFoundException;
import com.muni.fi.pa165project.rest.exceptions.UnprocessableEntityException;
import com.muni.fi.pa165project.rest.security.ApplyAuthorizeFilter;
import com.muni.fi.pa165project.rest.security.SecurityLevel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.validation.ConstraintViolationException;
import java.util.ArrayList;
import java.util.HashSet;
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
     * Get list of Activities.
     * <p>
     * TEST: curl -X GET -i http://localhost:8080/pa165/rest/activities
     *
     * @return List of ActivityDTO
     */
    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public final List<ActivityDTO> getAllActivities() {
        logger.debug("rest getAllActivities()");

        return acFacade.getAllActivities();
    }

    /**
     * Get list of filtered Activities by categories.
     * Categories are sent in HTTP body as JSON array by POST method.
     * <p>
     * TEST: curl -X POST -i -H "Content-Type: application/json"
     * --data '[1, 8]' http://localhost:8080/pa165/rest/activities
     *
     * @return List of Data Transfer Objects
     */
    @RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public final List<ActivityDTO> getActivities(@RequestBody ArrayList<Integer> categories) {
        logger.debug("rest getActivities() by categories <{}>", categories.toString());

        ActivityFilterDTO filter = new ActivityFilterDTO();
        filter.setCategories(new HashSet<>(categories));
        return acFacade.getActivities(filter);
    }

    /**
     * Get a Activity detail by identifier.
     * Identifier is taken from the URL path.
     * <p>
     * TEST: curl -X GET -i  http://localhost:8080/pa165/rest/activities/1
     *
     * @param id identifier for a activity
     * @return Activity detail Data Transfer Object
     * @throws ResourceNotFoundException if resource is not found
     */
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
     * Create a new Activity.
     * Activity's data are sent in HTTP BODY by POST method.
     * <p>
     * TEST: curl -X POST -i -H "Content-Type: application/json"
     * --data '{"name": "Running", "description": "Running as hell", "category": 2}'
     * http://localhost:8080/pa165/rest/activities/create
     *
     * @param activity ActivityCreateDTO with required fields for creation
     * @throws AlreadyExistsException       if resource already exists
     * @throws UnprocessableEntityException if resource contains wrong attributes
     * @throws InternalException            in case of any other error
     */
    @ApplyAuthorizeFilter(securityLevel = SecurityLevel.ADMIN)
    @RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public final Long createActivity(@RequestBody ActivityCreateDTO activity) {
        logger.debug("rest createActivity()");
        Long id;
        try {
            id = acFacade.createActivity(activity);
        } catch (DataIntegrityViolationException ex) {
            throw new AlreadyExistsException();
        } catch (ConstraintViolationException ex) {
            throw new UnprocessableEntityException();
        } catch (Exception ex) {
            throw new InternalException();
        }
        return id;
    }

    /**
     * Edit the Activity referred by identifier.
     * Identifier is taken from the URL path.
     * New data are sent in HTTP BODY by PUT method.
     * Name must match the Activity which is referred by ID in URL path.
     * <p>
     * TEST: curl -X PUT -i -H "Content-Type: application/json"
     * --data '{"name": "Running", "description": "new description"}'
     * http://localhost:8080/pa165/rest/activities/1
     *
     * @param activity ActivityUpdateDTO with required fields for edit
     * @throws UnprocessableEntityException if resource contains wrong attributes
     * @throws InternalException            in case of any other error
     */
    @ApplyAuthorizeFilter(securityLevel = SecurityLevel.ADMIN)
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public final ActivityDetailDTO editActivity(@PathVariable("id") long id, @RequestBody ActivityUpdateDTO activity) {
        logger.debug("rest editActivity()");
        ActivityDetailDTO a;
        try {
            activity.setId(id);
            a = acFacade.editActivity(activity);
        } catch (ConstraintViolationException ex) {
            throw new UnprocessableEntityException();
        } catch (Exception ex) {
            throw new InternalException();
        }
        return a;
    }

    /**
     * Delete Activity by identifier.
     * Identifier is taken from the URL path.
     * <p>
     * TEST: curl -X DELETE -i http://localhost:8080/pa165/rest/activities/1
     *
     * @throws ResourceNotFoundException if resource is not found
     */
    @ApplyAuthorizeFilter(securityLevel = SecurityLevel.ADMIN)
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public final void deleteActivity(@PathVariable("id") long id) {
        logger.debug("rest deleteActivity({})", id);

        try {
            acFacade.removeActivity(id);
        } catch (Exception ex) {
            throw new ResourceNotFoundException();
        }
    }

    /**
     * Get list of Categories.
     * <p>
     * TEST: curl -X GET -i http://localhost:8080/pa165/rest/activities/categories
     *
     * @return List of ActivityDTO
     */
    @RequestMapping(value = "/categories", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public final List<CategoryDTO> getCategories() {
        logger.debug("rest getCategories()");

        return acFacade.getAllCategories();
    }
}
