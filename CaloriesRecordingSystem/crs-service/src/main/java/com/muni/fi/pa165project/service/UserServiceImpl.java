package com.muni.fi.pa165project.service;

import com.muni.fi.pa165project.dao.UserDao;
import com.muni.fi.pa165project.entity.Record;
import com.muni.fi.pa165project.entity.User;
import static java.time.DayOfWeek.MONDAY;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Set;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import static java.time.temporal.TemporalAdjusters.previousOrSame;
/**
 *
 * @author Radoslav Karlik, Lukáš Císar
 */
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	
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
		User user = this.userDao.findById(userId);
		this.userDao.delete(user);
	}

	@Override
	public void updateUser(User user) {
		this.userDao.update(user);
	}

    @Override
    public int getProgressOfweeklyCaloriesGoal(long userId) {
        User user = this.findById(userId);
        int goal = user.getTrackingSettings().getWeeklyCaloriesGoal();

        LocalDate monday = LocalDate.now().with(previousOrSame(MONDAY));
        LocalDateTime start = LocalDateTime.of(monday, LocalTime.MIDNIGHT);
        LocalDateTime end = start.plusWeeks(1).minusSeconds(1);
        
        Set<Record> lastWeekRecords = getUserRecordsByTime(userId, start, end);
        return 5;
    }

    @Override
    public Set<Record> getUserRecordsByTime(long userId, LocalDateTime from, LocalDateTime to) {
        User user = this.findById(userId);
        Set<Record> records = user.getActivityRecords();
        
        Set<Record> recordsByTime = records.stream().
                filter(r -> r.getAtTime().isAfter(from) 
                        && r.getAtTime().isBefore(to))
                .collect(Collectors.toSet());
        return recordsByTime;
    }
}
