package com.muni.fi.pa165project.rest.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception for wrong entity provided: 422 UNPROCESSABLE_ENTITY
 *
 * @author Radim Podola
 */
@ResponseStatus(value = HttpStatus.UNPROCESSABLE_ENTITY, reason = "The resource data is wrong")
public class UnprocessableEntityException extends RuntimeException {

}