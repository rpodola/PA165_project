package com.muni.fi.pa165project.dto;

import java.time.LocalDateTime;
import java.util.Objects;

/**
 *
 * @author Radoslav Karlik
 */
public class RecordDTO {
	
	private long Id;
	
	private long activityId;
	
	private long userId;
	
	private LocalDateTime atTime;

    private int burnedCalories;

	public long getId() {
		return Id;
	}

	public void setId(long Id) {
		this.Id = Id;
	}

	public long getActivityId() {
		return activityId;
	}

	public void setActivityId(long activityId) {
		this.activityId = activityId;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public LocalDateTime getAtTime() {
		return atTime;
	}

	public void setAtTime(LocalDateTime atTime) {
		this.atTime = atTime;
	}

	public int getBurnedCalories() {
		return burnedCalories;
	}

	public void setBurnedCalories(int burnedCalories) {
		this.burnedCalories = burnedCalories;
	}

	@Override
	public int hashCode() {
		int hash = 7;
		hash = 17 * hash + (int) (this.userId ^ (this.userId >>> 32));
		hash = 17 * hash + Objects.hashCode(this.atTime);
		return hash;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null) {
			return false;
		}
		if (!(obj instanceof RecordDTO)) {
			return false;
		}
		final RecordDTO other = (RecordDTO) obj;
		if (this.userId != other.userId) {
			return false;
		}
		if (!Objects.equals(this.atTime, other.atTime)) {
			return false;
		}
		return true;
	}
	
}
