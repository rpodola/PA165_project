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
    	 User user = super.map(this.userService.findById(userId), User.class);
    	 Set<Record> recordsSet = user.getActivityRecords();
    	 
    	 List<RecordDTO> records = super.mapToList(recordsSet,RecordDTO.class);
    	 
    	 return records;
    	 }

    @Override
    public List<RecordDTO> getLastNRecords(long userId, int count) {
        User user = this.userService. findById(userId);
        Set<Record> recordsSet = user.getActivityRecords();
        List<RecordDTO> records = super.mapToList(recordsSet, RecordDTO.class);
        records.sort((r1, r2) -> { 
           return (r1.getAtTime().compareTo(r2.getAtTime()));
           });
        Collections.reverse(records);
        
        return records.subList(0, count);
    }

    @Override
    public List<RecordDTO> getFilteredRecords(RecordTimeFilterDTO timeFilter) {
		long userId = timeFilter.getUserId();
    	List<RecordDTO> records = new ArrayList<>();
    	List<RecordDTO> filteredRecords = new ArrayList<>();

    	if (timeFilter.getDate() != null){
    		records = 
    				super.mapToList(this.recordService.getFilteredRecords(userId, timeFilter.getDate()),
    						RecordDTO.class);
    	}

    	if (timeFilter.getFrom() != null && timeFilter.getTo() != null){
    		records = 
    				super.mapToList(this.recordService.getFilteredRecords(userId, timeFilter.getFrom(), timeFilter.getTo()),
    						RecordDTO.class);
    	}

    	return filteredRecords;
    }

    @Override
    public int getWeekProgressOfBurnedCalories(long userId) {
        return userService.getProgressOfweeklyCaloriesGoal(userId);
    }
}
