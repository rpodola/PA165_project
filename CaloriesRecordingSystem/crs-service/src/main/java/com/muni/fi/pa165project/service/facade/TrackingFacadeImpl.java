package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.dto.*;
import com.muni.fi.pa165project.dto.filters.RecordTimeFilterDTO;
import com.muni.fi.pa165project.entity.Activity;
import com.muni.fi.pa165project.entity.Record;
import com.muni.fi.pa165project.entity.User;
import com.muni.fi.pa165project.facade.TrackingFacade;
import com.muni.fi.pa165project.service.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataRetrievalFailureException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

/**
 * @author Radoslav Karlik
 * @author Radim Podola
 * @author Lukáš Císar
 */
@Service
@Transactional
public class TrackingFacadeImpl implements TrackingFacade {

    final static Logger log = LoggerFactory.getLogger(TrackingFacadeImpl.class);

    @Autowired
    private MappingService mapper;

    @Autowired
    private RecordService recordService;

    @Autowired
    private ActivityService activityService;

    @Autowired
    private UserService userService;

    @Autowired
    private BurnedCaloriesService burnedCaloriesService;

    @Override
    public Long createRecord(RecordCreateDTO recordCreateDto) {
        log.debug("Creating Record for user with id <{}>",
                recordCreateDto.getUserId());

        Record record = mapper.map(recordCreateDto, Record.class);

        User user = this.userService.findById(recordCreateDto.getUserId());
        Activity activity = this.activityService.findById(recordCreateDto.getActivityId());
        if (user == null || activity == null) {
            throw new DataRetrievalFailureException("Activity or User ID not valid");
        }

        record.setWeight(user.getWeight());
        record.setActivity(activity);
        record.setBurnedCalories(
                (int) this.burnedCaloriesService.calculateAmountOfCalories(
                        record.getActivity().getId(),
                        record.getDuration(),
                        record.getWeight()
                )
        );
        user.addRecord(record);
        recordService.create(record);
		return record.getId();
    }

    @Override
    public RecordDetailDTO editRecord(RecordUpdateDTO recordUpdateDto) {
        log.debug("Editing Record with id <{}>", recordUpdateDto.getId());

        Record record = this.recordService.getRecord(recordUpdateDto.getId());
        
        mapper.map(recordUpdateDto, record);
        
        record.setBurnedCalories(
                (int) this.burnedCaloriesService.calculateAmountOfCalories(
                        recordUpdateDto.getActivityId(),
                        recordUpdateDto.getDuration(),
                        recordUpdateDto.getWeight()
                )
        );
        if (record.getActivity().getId() != recordUpdateDto.getActivityId()) {
            Activity activity = this.activityService.findById(recordUpdateDto.getActivityId());
            record.setActivity(activity);
        }
        Record updatedRecord = this.recordService.update(record);
        
        return mapper.map(updatedRecord, RecordDetailDTO.class);
    }

    @Override
    public void removeRecord(long id) {
        log.debug("Removing Record with id <{}>", id);

        this.recordService.remove(id);
    }

    @Override
    public RecordDetailDTO getRecord(long id) {
        log.debug("Getting Record with id <{}>", id);

        Record record = this.recordService.getRecord(id);
        if (record == null)
            throw new DataRetrievalFailureException("Record not found");

        RecordDetailDTO recordDetailDto = mapper.map(record, RecordDetailDTO.class);

        return recordDetailDto;
    }

    @Override
    public RecordGetUpdateDTO getRecordGetUpdateDTO(long id) {
        log.debug("Getting RecordGetUpdateDTO with id <{}>", id);

        Record record = this.recordService.getRecord(id);
        if (record == null)
            throw new DataRetrievalFailureException("Record not found");

        RecordGetUpdateDTO recordDetailDto = mapper.map(record, RecordGetUpdateDTO.class);
        return recordDetailDto;
    }

    @Override
    public List<RecordDTO> getAllRecords(long userId) {
        log.debug("Getting all Records for user with id <{}>", userId);

        List<Record> records = this.recordService.getAllRecordsOfUser(userId);
        return mapper.mapToList(records, RecordDTO.class);
    }

    @Override
    public List<RecordDTO> getLastNRecords(long userId, int count) {
        log.debug("Getting last <{}> Records for user with id <{}>", count, userId);

        List<Record> records = this.recordService.getLastNRecordsOfUser(userId, count);
        return mapper.mapToList(records, RecordDTO.class);
    }

    @Override
    public List<RecordDTO> getFilteredRecords(RecordTimeFilterDTO timeFilter) {
        log.debug("Getting filtered Records by: {}", timeFilter.toString());

        long userId = timeFilter.getUserId();
        List<Record> filteredRecords = this.recordService.
                getFilteredRecords(userId, timeFilter.getFrom(), timeFilter.getTo());

        return mapper.mapToList(filteredRecords, RecordDTO.class);
    }

    @Override
    public int getWeekProgressOfBurnedCalories(long userId) {
        log.debug("Getting week progress of burned calories for user with id <{}>", userId);

        return userService.getProgressOfWeeklyCaloriesGoal(userId);
    }
}
