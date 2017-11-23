	package com.muni.fi.pa165project.service;

import com.muni.fi.pa165project.dao.RecordDao;
import com.muni.fi.pa165project.entity.Record;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Radoslav Karlik
 * @author Radim Podola
 */
@Service
public class RecordServiceImpl implements RecordService {

    @Autowired
    private RecordDao recordDao;

    @Autowired
    private ActivityService activityService;

    @Override
    public void create(Record record) {    
        record.setBurnedCalories(calculateAmountOfCalories(record));

        this.recordDao.create(record);
    }

    @Override
    public void update(Record record) {
        Record old = this.recordDao.findById(record.getId());
        if (!record.getActivity().equals(old.getActivity())
            || record.getDuration() != old.getDuration()){
            record.setBurnedCalories(calculateAmountOfCalories(record));
        }
        this.recordDao.update(record);
    }

    @Override
    public void remove(long id) {
        Record record = this.recordDao.findById(id);
        this.recordDao.delete(record);
    }

    @Override
    public Record getRecord(long id) {
        return this.recordDao.findById(id);
    }

    @Override
    public List<Record> getAllRecordsOfUser(long userId) {
        return this.recordDao.getAllRecordsOfUserSortedFromNewest(userId);
    }

    @Override
    public List<Record> getFilteredRecords(long userId, LocalDateTime from, LocalDateTime to) {
        return this.recordDao.findByTime(userId, from, to);
    }
    
    private int calculateAmountOfCalories(Record record){
        double weight = record.getUser().getWeight();
        Long activityId = record.getActivity().getId();
        
        int amount = activityService.getBurnedCaloriesPerHour(activityId, weight);
        return (int) amount * record.getDuration();
    }
}
