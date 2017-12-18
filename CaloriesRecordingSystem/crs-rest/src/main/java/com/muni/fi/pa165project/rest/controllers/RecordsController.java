package com.muni.fi.pa165project.rest.controllers;

import com.muni.fi.pa165project.dto.RecordCreateDTO;
import com.muni.fi.pa165project.dto.RecordDTO;
import com.muni.fi.pa165project.dto.RecordDetailDTO;
import com.muni.fi.pa165project.dto.RecordUpdateDTO;
import com.muni.fi.pa165project.facade.TrackingFacade;
import com.muni.fi.pa165project.rest.ApiUris;
import com.muni.fi.pa165project.rest.exceptions.AlreadyExistsException;
import com.muni.fi.pa165project.rest.exceptions.InternalException;
import com.muni.fi.pa165project.rest.exceptions.ResourceNotFoundException;
import com.muni.fi.pa165project.rest.exceptions.UnprocessableEntityException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.validation.ConstraintViolationException;
import java.util.List;

/**
 * REST Controller for Records
 *
 * @author Peter Krasnan.
 */
@RestController
@RequestMapping(ApiUris.ROOT_URI_RECORDS)
public class RecordsController {

    final static Logger logger = LoggerFactory.getLogger(RecordsController.class);

    @Inject
    private TrackingFacade trackingFacade;

    @RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public final Long createRecord(@RequestBody RecordCreateDTO recordDTO) {
        logger.debug("rest createRecord");
        Long id;
        //todo get userId from token
        recordDTO.setUserId(1);
        try {
            id = trackingFacade.createRecord(recordDTO);
        } catch (DataIntegrityViolationException ex) {
            throw new AlreadyExistsException();
        } catch (ConstraintViolationException ex) {
            throw new UnprocessableEntityException();
        } catch (Exception ex) {
            throw new InternalException();
        }
        return id;
    }

    /**
     * Get list of Records.
     * <p>
     * TEST: curl -X GET -i http://localhost:8080/pa165/rest/records
     *
     * @return List of RecordDTO
     */
    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public final List<RecordDTO> getAllRecords() {
        logger.debug("rest getAllRecords()");
        //TODO GET USER ID FROM TOKEN
        long userId = 1L;
        return trackingFacade.getAllRecords(userId);
    }

    /**
     * Create a new Record
     * <p>
     * TEST: curl -X POST -i -H "Content-Type: application/json"
     *
     * @param recordDTO RecordCreateDTO with required fields for creation
     * @throws AlreadyExistsException       if resource already exists
     * @throws UnprocessableEntityException if resource contains wrong attributes
     * @throws InternalException            in case of any other error
     */


    /**
     * Delete Record by identifier.
     * Identifier is taken from the URL path.
     * <p>
     * TEST: curl -X DELETE -i http://localhost:8080/pa165/rest/records/1
     *
     * @throws ResourceNotFoundException if resource is not found
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public final void deleteRecord(@PathVariable("id") long id) {
        logger.debug("rest deleteRecord({})", id);

        try {
            trackingFacade.removeRecord(id);
        } catch (Exception ex) {
            throw new ResourceNotFoundException();
        }
    }

    /**
     * Edit the Record referred by identifier.
     * Identifier is taken from the URL path.
     * New data are sent in HTTP BODY by PUT method.
     * Name must match the Record which is referred by ID in URL path.
     * <p>
     * TEST: curl -X PUT -i -H "Content-Type: application/json"
     * --data '{
     "activityId": 1,
     "userId": 1,
     "atTime": {
     "month": "DECEMBER",
     "year": 2017,
     "dayOfMonth": 18,
     "dayOfWeek": "MONDAY",
     "dayOfYear": 352,
     "monthValue": 12,
     "hour": 5,
     "minute": 41,
     "nano": 83000000,
     "second": 30,
     "chronology": {
     "id": "ISO",
     "calendarType": "iso8601"
     }
     },
     "distance": 100,
     "duration": 50,
     "weight": 60,
     "id": 1
     }'
     * http://localhost:8080/pa165/rest/records/1
     *
     * @param recordUpdateDTO RecordUpdateDTO with required fields for edit
     * @throws UnprocessableEntityException if resource contains wrong attributes
     * @throws InternalException            in case of any other error
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public final RecordDetailDTO editRecord(@PathVariable("id") long id, @RequestBody RecordUpdateDTO recordUpdateDTO) {
        logger.debug("rest editRecord()");
        RecordDetailDTO recordDetailDTO;
        try {
            recordUpdateDTO.setId(id);
            recordDetailDTO = trackingFacade.editRecord(recordUpdateDTO);
        } catch (ConstraintViolationException ex) {
            throw new UnprocessableEntityException();
        } catch (Exception ex) {
            throw new InternalException();
        }
        return recordDetailDTO;
    }

    /**
     * Get a Record detail by identifier.
     * Identifier is taken from the URL path.
     * <p>
     * TEST: curl -X GET -i  http://localhost:8080/pa165/rest/records/1
     *
     * @param id identifier for a record
     * @return Record detail Data Transfer Object
     * @throws ResourceNotFoundException if resource is not found
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public final RecordDetailDTO getRecord(@PathVariable("id") long id) {
        logger.debug("rest getRecord({})", id);

        RecordDetailDTO record = trackingFacade.getRecord(id);
        if (record != null) {
            return record;
        } else {
            throw new ResourceNotFoundException();
        }
    }
}
