package com.muni.fi.pa165project.rest.controllers;


import javax.inject.Inject;
import com.muni.fi.pa165project.rest.ApiUris;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.muni.fi.pa165project.dto.UserDetailDTO;
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
	public final UserDetailDTO getUser(@PathVariable("id") long userId) {

		logger.debug("rest getUser({})", userId);
		UserDetailDTO user = userFacade.getUser(userId);

		return user;
	}

}
