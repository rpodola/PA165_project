package com.muni.fi.pa165project.rest.controllers;


import java.util.List;

import com.muni.fi.pa165project.rest.ApiUris;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.muni.fi.pa165project.dto.CategoryDTO;
//import com.muni.fi.pa165project.facade.CategoryFacade;

/**
 * REST Controller for Categories
 *
 * @author Lukáš Císar
 */

@RestController
@RequestMapping(ApiUris.ROOT_URI_CATEGORIES)
public class CategoriesController {
	
	final static Logger logger = LoggerFactory.getLogger(CategoriesController.class);
	
//	@Inject
//	private CategoryFacade catFacade;
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public final CategoryDTO getCategory(@PathVariable("cat_id") long catId) {

		logger.debug("rest getCategory({})", catId);
//		CategoryDTO cat = catFacade.getCategory(catId); 

//		return cat;
		
		 //docasne
		return null;
	}
	
	@RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public final List<CategoryDTO> getAllCategories() {
        logger.debug("rest getAllCategories()");

//        List<CategoryDTO> catList = catFacade.getAllCategories();
//        if (catList != null && !catList.isEmpty()) {
//            return catList;
//        } else {
//            throw new ResourceNotFoundException();
//        }
        
        //docasne
        return null;
    }
	
	



}
