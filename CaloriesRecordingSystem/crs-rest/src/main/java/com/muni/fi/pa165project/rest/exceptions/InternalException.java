package com.muni.fi.pa165project.rest.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception for internal error: 500 Internal Server Error
 *
 * @author Radim Podola
 */
@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR, reason = "Server run into internal error")
public class InternalException extends RuntimeException {

}