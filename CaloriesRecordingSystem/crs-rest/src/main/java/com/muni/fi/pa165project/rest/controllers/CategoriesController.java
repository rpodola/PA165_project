package com.muni.fi.pa165project.rest.controllers;

import java.util.List;

import javax.inject.Inject;
import com.muni.fi.pa165project.rest.ApiUris;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.muni.fi.pa165project.dto.CategoryDTO;
import com.muni.fi.pa165project.dto.UserDTO;
import com.muni.fi.pa165project.enums.Category;
import com.muni.fi.pa165project.facade.CategoryFacade;

/**
 * REST Controller for Users
 *
 * @author Lukáš Císar
 */


public class CategoriesController {
	
	final static Logger logger = LoggerFactory.getLogger(CategoryController.class);
	
	@Inject
	private CategoryFacade catFacade;
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public final CategoryDTO getCategory(@PathVariable("cat_id") long catId) {

		logger.debug("rest getCategory({})", catId);
		UserDTO cat = catFacade.getCategory(catId); 

		return cat;
	}
	
	@RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public final List<CategoryDTO> getAllCategories() {
        logger.debug("rest getAllCategories()");

        List<CategoryDTO> catList = catFacade.getAllCategories();
        if (catList != null && !catList.isEmpty()) {
            return catList;
        } else {
            throw new ResourceNotFoundException();
        }
    }
	
	



}
