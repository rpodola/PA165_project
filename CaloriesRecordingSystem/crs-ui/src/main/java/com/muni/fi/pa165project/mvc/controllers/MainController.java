/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.muni.fi.pa165project.mvc.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 *
 * @author Radoslav Karlik
 */
@Controller
@RequestMapping("/")
public class MainController {

    final static Logger log = LoggerFactory.getLogger(MainController.class);

    @RequestMapping(method = RequestMethod.GET)
    public String angularApp() {
        log.debug("angularApp");
        
        return "index.html";
    }

}
