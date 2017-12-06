package com.muni.fi.pa165project.dto.filters;

import com.muni.fi.pa165project.enums.Category;

import java.util.Set;

/**
 * @author Radoslav Karlik
 */
public class ActivityFilterDTO {

    private Set<Category> categories;

    public Set<Category> getCategories() {
        return categories;
    }

    public void setCategories(Set<Category> categories) {
        this.categories = categories;
    }

    @Override
    public String toString() {
        return "Filtered categories: " + this.categories.toString();
    }
}
