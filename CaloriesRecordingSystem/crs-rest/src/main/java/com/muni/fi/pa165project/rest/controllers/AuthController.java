/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.muni.fi.pa165project.rest.controllers;

import com.muni.fi.pa165project.dto.TokenDTO;
import com.muni.fi.pa165project.dto.UserCredentialsDTO;
import com.muni.fi.pa165project.dto.UserDTO;
import com.muni.fi.pa165project.facade.UserFacade;
import com.muni.fi.pa165project.rest.ApiUris;
import com.muni.fi.pa165project.rest.security.KeyManager;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.security.Key;
import java.sql.Date;
import java.time.LocalDate;
import javax.inject.Inject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Radoslav Karlik
 */
@RestController
@RequestMapping(ApiUris.ROOT_URI_AUTHENTICATION)
public class AuthController {
    
    final static Logger logger = LoggerFactory.getLogger(AuthController.class);
    
    @Inject
    private UserFacade userFacade;
    
    @RequestMapping(value = "/login", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public final TokenDTO authenticate(@RequestBody UserCredentialsDTO credentials) {
        logger.debug("rest authenticate()");
        Key key = KeyManager.getKey();

        UserDTO user = this.userFacade.findByCredentials(credentials);
        
        if (user == null) {
            throw new IllegalArgumentException("credentials");
        }
        
        String token = Jwts
                .builder()
                .claim("userId", user.getId())
                .setExpiration(Date.valueOf(LocalDate.now().plusDays(1)))
                .signWith(SignatureAlgorithm.HS256, key)
                .compact();
        
        logger.debug("generated Token: " + token);
        
        return new TokenDTO(token);
    }
}
