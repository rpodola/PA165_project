package com.muni.fi.pa165project.rest.controllers;

import com.muni.fi.pa165project.dto.RecordDetailDTO;
import com.muni.fi.pa165project.facade.TrackingFacade;
import com.muni.fi.pa165project.rest.ApiUris;
import com.muni.fi.pa165project.rest.security.ApplyAuthorizeFilter;
import com.muni.fi.pa165project.rest.security.SecurityLevel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

/**
 * REST Controller for Records
 *
 * @author Peter Krasnan.
 */
@RestController
@RequestMapping(ApiUris.ROOT_URI_RECORDS)
public class RecordsController {

    final static Logger logger = LoggerFactory.getLogger(ActivitiesController.class);

    @Inject
    private TrackingFacade trackingFacade;

    /**
     * Create a new Record by POST method
     *
     * @param recordDTO RecordDetailDTO with required fields for creation
     */
    @ApplyAuthorizeFilter(securityLevel = SecurityLevel.MEMBER)
    @RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public final void createRecord(@RequestBody RecordDetailDTO recordDTO) {
        logger.debug("rest createRecord");
        trackingFacade.createRecord(recordDTO);
    }
}
