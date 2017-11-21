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
	
	private int weeklyCalorieGoal;

	public int getWeeklyCalorieGoal() {
		return weeklyCalorieGoal;
	}

	public void setWeeklyCalorieGoal(int weeklyCalorieGoal) {
		this.weeklyCalorieGoal = weeklyCalorieGoal;
	}
	
}
