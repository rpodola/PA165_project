package com.muni.fi.pa165project.dao;

import com.muni.fi.pa165project.entity.Record;
import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Radoslav Karlik
 */
@Repository
public class RecordDaoImpl implements RecordDao {
	
	@PersistenceContext
	private EntityManager em;
	
    @Override
	public Record findById(long id) {
		return this.em.find(Record.class, id);

	}
	
	@Override
	public void create(Record record) {
		this.em.persist(record);
	}
	
	@Override
	public void update(Record record) {
		this.em.merge(record);
	}

	@Override
	public void delete(Record record) {
		boolean isManaged = this.em.contains(record);
		
		if (isManaged) {
			this.em.remove(record);
		} else {
			this.delete(record.getId());
		}
	}
	
	@Override
	public void delete(long id) {
		Record record = this.findById(id);

		if (record != null) {
			this.em.remove(record);
		}	
	}
	
	@Override
	public List<Record> findAll() {
		return this.em.createQuery("SELECT r FROM Record r", 
				Record.class)
				.getResultList();
	}
	
	@Override
	public List<Record> findByTime(long userId, LocalDateTime from, LocalDateTime to) {
		return this.em.createQuery("SELECT r FROM Record r WHERE r.user.id=:userId AND r.atTime BETWEEN :from AND :to ORDER BY r.atTime ASC",
				Record.class)
				.setParameter("userId", userId)
				.setParameter("from", from)
				.setParameter("to", to)
				.getResultList();
	}
	
	@Override
	public List<Record> getAllRecordsOfUserSortedFromNewest(long userId) {
		return this.em.createQuery("SELECT r FROM Record r WHERE r.user.id=:userId ORDER BY r.atTime DESC",
				Record.class)
				.setParameter("userId", userId)
				.getResultList();
	}
	
}
