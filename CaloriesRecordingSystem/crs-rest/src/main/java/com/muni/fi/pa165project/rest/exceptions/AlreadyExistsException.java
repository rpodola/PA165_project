package com.muni.fi.pa165project.rest.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception for already existing entity: 409 CONFLICT
 *
 * @author Radim Podola
 */
@ResponseStatus(value = HttpStatus.CONFLICT, reason = "The resource already exists")
public class AlreadyExistsException extends RuntimeException {

}