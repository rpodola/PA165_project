package com.muni.fi.pa165project.dto;

/**
 * @author Radim Podola
 *
 * DTO object used for Record editation
 */
public class RecordUpdateDTO extends RecordCreateDTO {

    private Long id;

    private double weight;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }
}
