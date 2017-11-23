/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.muni.fi.pa165project.structures;

import java.io.Serializable;
import javax.persistence.Embeddable;

/**
 *
 * @author Radoslav Karlik
 */
@Embeddable
public class TrackingSettings implements Serializable {
	
	private int weeklyCaloriesGoal;

	public int getWeeklyCaloriesGoal() {
		return weeklyCaloriesGoal;
	}

	public void setWeeklyCaloriesGoal(int weeklyCaloriesGoal) {
		this.weeklyCaloriesGoal = weeklyCaloriesGoal;
	}
	
}
