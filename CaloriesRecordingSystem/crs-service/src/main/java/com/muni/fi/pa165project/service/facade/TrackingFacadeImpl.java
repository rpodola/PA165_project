package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.dto.RecordDTO;
import com.muni.fi.pa165project.dto.filters.RecordTimeFilterDTO;
import com.muni.fi.pa165project.entity.Activity;
import com.muni.fi.pa165project.entity.Record;
import com.muni.fi.pa165project.entity.User;
import com.muni.fi.pa165project.facade.TrackingFacade;
import com.muni.fi.pa165project.service.ActivityService;
import com.muni.fi.pa165project.service.RecordService;
import com.muni.fi.pa165project.service.UserService;

import java.util.ArrayList;
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
    public void createRecord(RecordDTO recordDto) {
        Record record = super.map(recordDto, Record.class);

        Activity activity = this.activityService.findById(recordDto.getActivityId());
        User user = this.userService.findById(recordDto.getUserId());

        record.setWeight(user.getWeight());
        record.setActivity(activity);
        record.setUser(user);        

        this.recordService.create(record);
    }

    @Override
    public void updateRecord(RecordDTO recordDto) {
        Record record = super.map(recordDto, Record.class);
        
        this.recordService.update(record);
    }

    @Override
    public void removeRecord(long id) {
        
        this.recordService.remove(id);
    }

    @Override
    public RecordDTO getRecord(long id) {
        
        RecordDTO recordDto = super.map(this.recordService.getRecord(id), RecordDTO.class);
        
        return recordDto;
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
    	 User user = super.map(this.userService.findById(userId), User.class);
    	 Set<Record> recordsSet = user.getActivityRecords();
    	 List<RecordDTO> records = super.mapToList(recordsSet,RecordDTO.class);
    	 List<RecordDTO> nRecords = new ArrayList<RecordDTO>();
    	 
    	 for (int i=0; i<count; i++){
    		 nRecords.add(i, records.get(i));
    	 }
    	 
    	 return nRecords;
    	 
    }

    @Override
    public List<RecordDTO> getFilteredRecords(RecordTimeFilterDTO timeFilter) {
		long userId = timeFilter.getUserId();
    	List<RecordDTO> records = new ArrayList<RecordDTO>();
    	List<RecordDTO> filteredRecords = new ArrayList<RecordDTO>();

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
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}
