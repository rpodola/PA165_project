package com.muni.fi.pa165project.dto;

import java.util.Objects;

/**
 * @author Radoslav Karlik
 *
 * DTO object used for creating activity
 */
public class ActivityCreateDTO {

    private Long id;

    private String name;

    private String description;

    private int category;

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

    public int getCategory() {
        return category;
    }

    public void setCategory(int category) {
        this.category = category;
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 13 * hash + Objects.hashCode(this.name);
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
        if (!(obj instanceof ActivityCreateDTO)) {
            return false;
        }
        final ActivityCreateDTO other = (ActivityCreateDTO) obj;
        if (!Objects.equals(this.name, other.getName())) {
            return false;
        }
        return true;
    }
}
