package com.muni.fi.pa165project.dto;

/**
 * @author Radim Podola
 */
public class RecordDetailDTO extends RecordDTO {

    private int distance;

    private int duration;

    private double weight;

    public int getDistance() {
        return distance;
    }

    public void setDistance(int distance) {
        this.distance = distance;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }
}
