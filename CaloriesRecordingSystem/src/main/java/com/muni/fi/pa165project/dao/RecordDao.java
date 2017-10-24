package com.muni.fi.pa165project.dao;

import java.time.LocalDate;
import java.util.List;

import com.muni.fi.pa165project.entity.Record;
import com.muni.fi.pa165project.enums.Difficulty;

/**
*
* @author Lukáš Císar
*/

public interface RecordDao {

	/**
	 * Finds record by id
	 * @param id
	 * @return 
	 */
	Record findById(long id);
	
	/**
	 * Insert record into database
	 * @param record 
	 */
	void create(Record record);
	
	/**
	 * Update record in database
	 * @param record 
	 */
	void update(Record record);
	
	/**
	 * Delete record from database
	 * @param record 
	 */
	void delete(Record record);
	
	/**
	 * Returns all records
	 * @return 
	 */
	List<Record> findAll();
	
	List<Record> findByTime(LocalDate time);
		
	List<Record> findByDistance(int distance);
	
	List<Record> findByDifficulty(Difficulty difficulty);
	
	List<Record> findByBurnedCalories(int burnedCalories);
	
	
	
}
