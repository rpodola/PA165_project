package com.muni.fi.pa165project.rest;

/**
 * Represents the entry points for the API
 * this list can be increased so that it contains all the
 * other URIs also for the sub-resources so that it can
 * reused globally from all the controllers
 *
 * @author Lukáš Císar
 */
public abstract class ApiUris {
    public static final String ROOT_URI_ACTIVITIES = "/activities";
    public static final String ROOT_URI_USERS = "/users";
    public static final String ROOT_URI_RECORDS = "/records";
	public static final String ROOT_URI_CATEGORIES = "/categories";
    public static final String ROOT_URI_AUTHENTICATION = "/auth";
}