package com.muni.fi.pa165project.enums;

/**
 * @author Radim Podola
 */
public enum Category {
    
    CYCLING("Cycling"),
    RUNNING("Running"),
    WALKING("Walking"),
    SWIMMING("Swimming"),
    AEROBICS("Aerobics"),
    DANCING("Dancing"),
    EXERCISE("Exercise"),
    WORK("Work"),
    HOBBY("Hobby");
    
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
