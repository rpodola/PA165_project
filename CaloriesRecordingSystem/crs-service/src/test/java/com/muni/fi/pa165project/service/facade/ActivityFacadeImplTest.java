/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.muni.fi.pa165project.service.facade;

import com.muni.fi.pa165project.dto.ActivityDTO;
import com.muni.fi.pa165project.entity.Activity;
import com.muni.fi.pa165project.entity.BurnedCalories;
import com.muni.fi.pa165project.entity.User;
import com.muni.fi.pa165project.facade.ActivityFacade;
import com.muni.fi.pa165project.service.ActivityService;
import com.muni.fi.pa165project.service.BurnedCaloriesService;
import com.muni.fi.pa165project.service.UserService;
import com.muni.fi.pa165project.service.utils.DozerHelper;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import static org.mockito.Matchers.*;
import org.mockito.Mock;
import static org.mockito.Mockito.*;
import org.mockito.runners.MockitoJUnitRunner;


/**
 *
 * @author Radoslav Karlik
 */
@RunWith(MockitoJUnitRunner.class)
public class ActivityFacadeImplTest {
	
	@Mock
	private ActivityService activityService;
	
	@Mock
	private BurnedCaloriesService burnedCaloriesService;
	
	@Mock
	private UserService userService;
	
	@Mock
	private DozerHelper dozerHelper;
	
	@InjectMocks
	private final ActivityFacade activityFacade = new ActivityFacadeImpl();
	
	@Test
	public void testGetActivitiesSortedByBurnedCalories() {
		User mockedUser = new User();
		mockedUser.setWeight(75);
		
		List<Activity> mockedActivities = new ArrayList<>();
		mockedActivities.add(new Activity() {{
			setId(0l);	
			setBurnedCalories(new HashSet<>(Arrays.asList(
					new BurnedCalories(),
					new BurnedCalories()
			)));
		}});
		
		int mockedBurnedCaloriesPerActivity = 555;

		when(this.userService.findById(any(long.class)))
				.thenReturn(mockedUser);
				
		when(this.activityService.getAllActivities())
				.thenReturn(mockedActivities);
		
		when(this.burnedCaloriesService.getBurnedCaloriesPerHour(any(Integer.class), any(double.class)))
				.thenReturn(mockedBurnedCaloriesPerActivity);
		
		List<ActivityDTO> expected = new ArrayList<>();
		
		when(this.dozerHelper.mapToList(mockedActivities, ActivityDTO.class))
				.thenReturn(expected);
				
		
		List<ActivityDTO> result = this.activityFacade.getActivitiesSortedByBurnedCalories(0);
		
		Assert.assertSame(expected, result);
		
	}	
	
}
