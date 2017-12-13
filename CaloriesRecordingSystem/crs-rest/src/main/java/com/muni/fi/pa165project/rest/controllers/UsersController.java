package com.muni.fi.pa165project.rest.controllers;


import java.util.List;

import javax.inject.Inject;
import com.muni.fi.pa165project.rest.ApiUris;
import com.muni.fi.pa165project.rest.exceptions.ResourceNotFoundException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.muni.fi.pa165project.dto.UserDTO;
import com.muni.fi.pa165project.facade.UserFacade;

/**
 * REST Controller for Users
 *
 * @author Lukáš Císar
 */

@RestController
@RequestMapping(ApiUris.ROOT_URI_USERS)
public class UsersController {

	final static Logger logger = LoggerFactory.getLogger(UsersController.class);

	@Inject
	private UserFacade userFacade;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public final UserDTO getUser(@PathVariable("user_id") long userId) {

		logger.debug("rest getUser({})", userId);
		UserDTO user = userFacade.getUser(userId); 

		return user;
	}
	
	

	@RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public final UserDTO createUser(@RequestBody UserDTO  userDTO){
        logger.debug("rest createUser()");

        try {
            long id = userFacade.createUser(userDTO);
            return userFacade.getUser(id);
        } catch (Exception ex) {
            throw new ResourceNotFoundException();
        }
        
	}

}
