    package com.muni.fi.pa165project.rest.controllers;

import com.muni.fi.pa165project.dto.UserDetailDTO;
import com.muni.fi.pa165project.dto.UserUpdateDTO;
import com.muni.fi.pa165project.facade.UserFacade;
import com.muni.fi.pa165project.rest.ApiUris;
import com.muni.fi.pa165project.rest.exceptions.InternalException;
import com.muni.fi.pa165project.rest.exceptions.ResourceNotFoundException;
import com.muni.fi.pa165project.rest.exceptions.UnprocessableEntityException;
import com.muni.fi.pa165project.rest.security.ApplyAuthorizeFilter;
import com.muni.fi.pa165project.rest.security.SecurityLevel;
import org.hibernate.exception.ConstraintViolationException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

/**
 * REST Controller for Activities
 *
 * @author Radim Podola
 */
@RestController
@RequestMapping(ApiUris.ROOT_URI_SETTINGS)
public class SettingsController {

    final static Logger logger = LoggerFactory.getLogger(SettingsController.class);

    @Inject
    private UserFacade usFacade;

    /**
     * Get a User's settings detail by identifier.
     * Identifier is taken from login information.
     * <p>
     * TEST: curl -X GET -i  http://localhost:8080/pa165/rest/settings/details/users
     *
     * @param userId identifier for a user
     * @return User detail Data Transfer Object
     * @throws ResourceNotFoundException if resource is not found
     */
    @ApplyAuthorizeFilter(securityLevel = SecurityLevel.MEMBER)
    @RequestMapping(value = "/details/users", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public final UserDetailDTO getUserSettingsDetail(@RequestAttribute("userId") long userId) {
        logger.debug("rest getUserSettingsDetail({})", userId);

        UserDetailDTO user = usFacade.getUser(userId);
        if (user != null) {
            return user;
        } else {
            throw new ResourceNotFoundException();
        }
    }

    /**
     * Edit a User's settings detail.
     * Identifier is taken from login information.
     * <p>
     * TEST: curl -X PUT -i -H "Content-Type: application/json"
     * --data '{"name": "Radek", "description": "new description"}' TODO
     * http://localhost:8080/pa165/rest/settings/details/users
     *
     * @param userId identifier for a user
     * @return User detail Data Transfer Object
     * @throws UnprocessableEntityException if resource contains wrong attributes
     * @throws InternalException            in case of any other error
     */
    @ApplyAuthorizeFilter(securityLevel = SecurityLevel.MEMBER)
    @RequestMapping(value = "/details/users", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public final UserDetailDTO editUserSettingsDetail(@RequestAttribute("userId") long userId,
                                                      @RequestBody UserUpdateDTO user) {
        logger.debug("rest updateUserSettingsDetail({})", userId);

        try {
            user.setId(userId);
            return usFacade.editUser(user);
        } catch (ConstraintViolationException ex) {
            throw new UnprocessableEntityException();
        } catch (Exception ex) {
            throw new InternalException();
        }
    }
}
