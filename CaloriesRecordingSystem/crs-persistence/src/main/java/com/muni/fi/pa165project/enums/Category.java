package com.muni.fi.pa165project.enums;

/**
 * @author Radim Podola
 */
public enum Category {
    
    CYCLING("Cycling", "Riding bicycle"),
    RUNNING("Running", "Running feet"),
    WALKING("Walking", "Regular walking"),
    SWIMMING("Swimming", "Swimming in the pool"),
    AEROBICS("Aerobics", "Exercise aerobics techniques"),
    DANCE("Dance", "Dancing"),
    EXERCISE("Exercise", "Exercising"),
    WORK("Work", "Working"),
    HOBBY("Hobby", "Running a hobby"),
    SPORT("Sport", "Playing sport games");
    
    private final String name;
    
    private final String description;
    
    Category(String name, String description) {
        this.name = name;
        this.description = description;
    }
    
    Category(String name) {
        this(name, "");
    }

    public int getId() {
        return this.ordinal();
    }
    
    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }
    
}