/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.muni.fi.pa165project.rest.security;

import com.muni.fi.pa165project.entity.User;
import com.muni.fi.pa165project.service.UserService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import java.security.Key;
import javax.inject.Inject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 *
 * @author Radoslav Karlik
 */
@Service
public class AuthorizationService {
    
    final static Logger logger = LoggerFactory.getLogger(AuthorizationService.class);
    
    @Inject
    private UserService userService;
    
    public boolean authorizeUser(String token, boolean shouldBeAdmin) {
        Key key = KeyManager.getKey();
        Claims claims;

        try {
            claims = Jwts.parser().setSigningKey(key).parseClaimsJws(token).getBody();
        } catch(Exception e) {
            claims = null;
        }

        if (claims != null) {
            logger.debug("claims: " + claims);

            Long userId = claims.get("userId", Long.class);
            
            if (userId != null) {
                logger.debug("trying to authorize User with id: " + userId);
                User user = this.userService.findById(userId);

                if (user != null) {
                    return shouldBeAdmin ? user.getIsAdmin() : true;
                }
            }
        }
        
        return false;
    }
    
}
