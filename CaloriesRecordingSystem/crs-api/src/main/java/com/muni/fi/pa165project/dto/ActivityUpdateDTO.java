package com.muni.fi.pa165project.dto;

import java.util.HashSet;
import java.util.Set;

/**
 * @author Radim Podola
 *
 * DTO object used for Activity editation
 */
public class ActivityUpdateDTO extends ActivityCreateDTO {

    private Set<BurnedCaloriesDTO> burnedCalories = new HashSet<>();

    private Long id;

    public Set<BurnedCaloriesDTO> getBurnedCalories() {
        return burnedCalories;
    }

    public void setBurnedCalories(Set<BurnedCaloriesDTO> burnedCalories) {
        this.burnedCalories = burnedCalories;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
