package com.muni.fi.pa165project.rest.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception for authorization problems: 401 Unauthorized
 *
 * @author Radim Podola
 */
@ResponseStatus(value = HttpStatus.UNAUTHORIZED, reason = "Authorization refused")
public class UnauthorizedException extends RuntimeException {

}