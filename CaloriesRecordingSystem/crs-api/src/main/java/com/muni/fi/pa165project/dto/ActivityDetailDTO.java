package com.muni.fi.pa165project.dto;

import java.util.HashSet;
import java.util.Set;

/**
 * @author Radim Podola
 *
 * DTO object used for Activity detail
 */
public class ActivityDetailDTO extends ActivityDTO {

    private Set<BurnedCaloriesDTO> burnedCalories = new HashSet<>();

    public Set<BurnedCaloriesDTO> getBurnedCalories() {
        return burnedCalories;
    }

    public void setBurnedCalories(Set<BurnedCaloriesDTO> burnedCalories) {
        this.burnedCalories = burnedCalories;
    }
}
