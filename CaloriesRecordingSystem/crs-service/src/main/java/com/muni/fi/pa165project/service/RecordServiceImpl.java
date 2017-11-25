package com.muni.fi.pa165project.service;

import com.muni.fi.pa165project.dao.RecordDao;
import com.muni.fi.pa165project.entity.Record;
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

    @Override
    public void create(Record record) {    
        this.recordDao.create(record);
    }

    @Override
    public void update(Record record) {
        this.recordDao.update(record);
    }

    @Override
    public void remove(long id) {
        this.recordDao.delete(id);
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
	public List<Record> getLastNRecordsOfUser(long userId, int count) {
		return this.getAllRecordsOfUser(userId).subList(0, count);
	}

    @Override
    public List<Record> getFilteredRecords(long userId, LocalDateTime from, LocalDateTime to) {
        return this.recordDao.findByTime(userId, from, to);
    }
}
