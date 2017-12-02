package com.muni.fi.pa165project.service;

import com.muni.fi.pa165project.dao.RecordDao;
import com.muni.fi.pa165project.dao.UserDao;
import com.muni.fi.pa165project.entity.Record;
import com.muni.fi.pa165project.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

import static java.time.DayOfWeek.MONDAY;
import static java.time.temporal.TemporalAdjusters.previousOrSame;
/**
 *
 * @author Radoslav Karlik
 * @author Lukáš Císar
 */
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
        
        @Autowired
        private RecordDao recordDao;
	
	@Override
	public User findById(long userId) {
		return this.userDao.findById(userId);
	}
	
	@Override
	public User findByEmail(String email){
		return this.userDao.findByEmail(email);
	}
	
	@Override
	public void createUser(User user){
		this.userDao.create(user);
	}
	
	@Override
	public void deleteUser(long userId){
		this.userDao.delete(userId);
	}

	@Override
	public void updateUser(User user) {
		this.userDao.update(user);
	}

    @Override
    public int getProgressOfWeeklyCaloriesGoal(long userId) {
        double sum = 0;
        User user = this.findById(userId);
        double goal = user.getTrackingSettings().getWeeklyCaloriesGoal();
        
        if (goal <= 0)
            return 100;

        LocalDate monday = LocalDate.now().with(previousOrSame(MONDAY));
        LocalDateTime start = LocalDateTime.of(monday, LocalTime.MIDNIGHT);
        LocalDateTime end = start.plusWeeks(1).minusSeconds(1);
        
        //already sorted from earliest
        List<Record> lastWeekRecords = this.recordDao.findByTime(userId, start, end);
        
        for (Record r : lastWeekRecords){
            sum += r.getBurnedCalories();
        }
        
        return (int) ((sum / goal) * 100);
    }
}
