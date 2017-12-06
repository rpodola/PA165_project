package com.muni.fi.pa165project.dto.filters;

import java.util.Set;

/**
 * @author Radoslav Karlik
 */
public class ActivityFilterDTO {

    private Set<Integer> categories;

    public Set<Integer> getCategories() {
        return categories;
    }

    public void setCategories(Set<Integer> categories) {
        this.categories = categories;
    }

    @Override
    public String toString() {
        return "Filtered categories: " + this.categories.toString();
    }
}
