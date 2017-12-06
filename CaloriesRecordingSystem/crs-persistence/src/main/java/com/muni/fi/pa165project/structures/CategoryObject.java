/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.muni.fi.pa165project.structures;

import com.muni.fi.pa165project.enums.Category;
import java.util.Objects;

/**
 *
 * @author Radoslav Karlik
 */
public class CategoryObject {
    
    private int id;
    
    private String name;
    
    private String description;

    public static CategoryObject from(Category category) {
        CategoryObject catObject = new CategoryObject();
        catObject.id = category.getId();
        catObject.name = category.getName();
        catObject.description = category.getDescription();
        return catObject;
    }
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
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
        int hash = 5;
        hash = 97 * hash + Objects.hashCode(this.name);
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
        if (!(obj instanceof CategoryObject)) {
            return false;
        }
        final CategoryObject other = (CategoryObject) obj;
        if (!Objects.equals(this.name, other.name)) {
            return false;
        }
        return true;
    }
    
}
