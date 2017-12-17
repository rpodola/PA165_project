package com.muni.fi.pa165project.dto;

import java.util.Objects;

/**
 * @author Radoslav Karlik
 *
 * DTO object used for list of Activities
 */
public class ActivityDTO {
    
    private Long id;
    
    private String name;
    
    private String description;
    
    private CategoryDTO category;

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

    public CategoryDTO getCategory() {
        return category;
    }

    public void setCategory(CategoryDTO category) {
        this.category = category;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 47 * hash + Objects.hashCode(this.name);
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
        if (!(obj instanceof ActivityDTO)) {
            return false;
        }
        final ActivityDTO other = (ActivityDTO) obj;
        if (!Objects.equals(this.name, other.name)) {
            return false;
        }
        return true;
    }
    
}
