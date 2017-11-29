//package org.crs.rest.controllers;
//
//import com.muni.fi.pa165project.entity.User;
//
//import java.util.List;
//import javax.inject.Inject;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.http.MediaType;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
///**
// * REST Controller for Users
// * 
// * @author Lukáš Císar
// */
//
//@RestController
//@RequestMapping(ApiUris.ROOT_URI_ORDERS)
//
//public class UsersController {
//	 final static Logger logger = LoggerFactory.getLogger(OrdersController.class);
//
//	    @Inject
//	    private UserFacade userFacade;
//	    
////	    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
////	    public final UserDTO getUser(@RequestParam(@PathVariable("user_id") long userId)) {
////	        
////	        logger.debug("rest getOrders({},{})", lastWeek, status);
////
////	        if (status.equalsIgnoreCase("ALL")) {
////	            return userFacade.getAllOrders();
////	        }
////
//}
