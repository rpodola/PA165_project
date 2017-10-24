package com.muni.fi.pa165project.dao;

import com.muni.fi.pa165project.entity.BurnedCalories;
import java.util.List;

/**
 *
 * @author Peter Krasnan
 */
public interface BurnedCaloriesDao {
    BurnedCalories findById(long id);
    List<BurnedCalories> findAll();
    List<BurnedCalories> findByName();
    
    void create(BurnedCalories burnedCalories);
    void update(BurnedCalories burnedCalories);
    void delete(BurnedCalories burnedCalories);
}
