package com.muni.fi.pa165project.entity;

import java.io.Serializable;
import javax.persistence.CascadeType;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

/**
 *
 * @author Lukáš Císar
 */
@Entity
public class Activity implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
		
	private String description;
	
	
	
	@OneToMany(cascade = CascadeType.REMOVE, mappedBy = "activity")
	private List<BurnedCalories> burnedCaloriesRecords = new ArrayList<>();

	public List<BurnedCalories> getBurnedCaloriesRecords() {
		return burnedCaloriesRecords;
	}

	public void setBurnedCaloriesRecords(List<BurnedCalories> burnedCaloriesRecords) {
		this.burnedCaloriesRecords = burnedCaloriesRecords;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	@Override
	public int hashCode() {
		final int prime = 17;
		int hash = 1;
		hash = prime * hash + (this.id != null ? this.id.hashCode() : 0);
		return hash;
	}
	
	@Override
    public boolean equals(Object obj) {
            if (this == obj)
                    return true;
            if (obj == null)
                    return false;
            if (!(obj instanceof Activity))
                    return false;
            Activity other = (Activity) obj;
            if (name != other.name)
            	return false;
            if (description != other.description)
            	return false;
            return true;
            }

}
