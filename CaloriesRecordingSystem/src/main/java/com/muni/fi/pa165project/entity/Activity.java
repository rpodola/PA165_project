package com.muni.fi.pa165project.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
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
}
