package com.muni.fi.pa165project.dto;

/**
 * @author Radoslav Karlik
 *  @author Lukáš Císar
 */
public class TrackingSettingsDTO {

    private long userId;

    private int weeklyCaloriesGoal;

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public int getWeeklyCaloriesGoal() {
        return weeklyCaloriesGoal;
    }

    public void setWeeklyCaloriesGoal(int weeklyCaloriesGoal) {
        this.weeklyCaloriesGoal = weeklyCaloriesGoal;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (!(obj instanceof TrackingSettingsDTO)) {
            return false;
        }
        final TrackingSettingsDTO other = (TrackingSettingsDTO) obj;
        if (this.weeklyCaloriesGoal != other.getWeeklyCaloriesGoal()) {
            return false;
        }
        return true;
    }
    
    public String toString() {
    	return "userId <" + userId + "> weekly categories goal <" + weeklyCaloriesGoal + ">";
    }
}
