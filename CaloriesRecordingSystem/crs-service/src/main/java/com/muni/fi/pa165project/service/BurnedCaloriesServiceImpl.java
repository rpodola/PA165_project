package com.muni.fi.pa165project.service;

import com.muni.fi.pa165project.dao.BurnedCaloriesDao;
import com.muni.fi.pa165project.entity.BurnedCalories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Radoslav Karlik
 */
@Service
public class BurnedCaloriesServiceImpl implements BurnedCaloriesService {

	@Autowired
	private BurnedCaloriesDao burnedCaloriesDao;
	
	@Override
	public void updateBurnedCalories(BurnedCalories burnedCalories) {
		this.burnedCaloriesDao.update(burnedCalories);
	}
	
}
