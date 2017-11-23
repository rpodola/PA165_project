package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.dto.RecordDTO;
import com.muni.fi.pa165project.dto.RecordDetailDTO;
import com.muni.fi.pa165project.dto.filters.RecordTimeFilterDTO;
import com.muni.fi.pa165project.entity.Activity;
import com.muni.fi.pa165project.entity.Record;
import com.muni.fi.pa165project.entity.User;
import com.muni.fi.pa165project.facade.TrackingFacade;
import com.muni.fi.pa165project.service.ActivityService;
import com.muni.fi.pa165project.service.RecordService;
import com.muni.fi.pa165project.service.UserService;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Radoslav Karlik
 * @author Radim Podola
 * @author Lukáš Císar
 */
@Service
@Transactional
public class TrackingFacadeImpl extends FacadeBase implements TrackingFacade {

    @Autowired
    private RecordService recordService;

    @Autowired
    private ActivityService activityService;

    @Autowired
    private UserService userService;

    @Override
    public void createRecord(RecordDetailDTO recordDetailDto) {
        Record record = super.map(recordDetailDto, Record.class);

        Activity activity = this.activityService.findById(recordDetailDto.getActivityId());
        User user = this.userService.findById(recordDetailDto.getUserId());

        record.setWeight(user.getWeight());
        record.setActivity(activity);
        record.setUser(user);        

        this.recordService.create(record);
    }

    @Override
    public void editRecord(RecordDetailDTO recordDetailDto) {
        Record record = super.map(recordDetailDto, Record.class);
        
        this.recordService.update(record);
    }

    @Override
    public void removeRecord(long id) {
        
        this.recordService.remove(id);
    }

    @Override
    public RecordDetailDTO getRecord(long id) {
        
        RecordDetailDTO recordDetailDto = super.map(
                this.recordService.getRecord(id), RecordDetailDTO.class);
        
        return recordDetailDto;
    }

    @Override
    public  List<RecordDTO> getAllRecords(long userId) {
		List<Record> records = this.recordService.getAllRecordsOfUser(userId);
		List<RecordDTO> recordsDTO = super.mapToList(records,RecordDTO.class);
		
		return recordsDTO;
	}

    @Override
    public List<RecordDTO> getLastNRecords(long userId, int count) {
        List<RecordDTO> records = this.getAllRecords(userId);
        
		return records.subList(0, count);
    }

    @Override
    public List<RecordDTO> getFilteredRecords(RecordTimeFilterDTO timeFilter) {
		long userId = timeFilter.getUserId();
		List<Record> filteredRecords = this.recordService.getFilteredRecords(userId, timeFilter.getFrom(), timeFilter.getTo());
		List<RecordDTO> filteredRecordsDTO = super.mapToList(filteredRecords, RecordDTO.class);
    	return filteredRecordsDTO;
    }

    @Override
    public int getWeekProgressOfBurnedCalories(long userId) {
        return userService.getProgressOfweeklyCaloriesGoal(userId);
    }
}
