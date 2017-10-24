/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.muni.fi.pa165project.entity;

import com.muni.fi.pa165project.enums.Difficulty;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 *
 * @author xpodola
 */
@Entity
public class BurnedCalories implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private Difficulty difficulty;
    
    private Activity activity;
    
    private int weightRange;
    
    private float burnedCalories;
    
    public Difficulty getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(Difficulty difficulty) {
        this.difficulty = difficulty;
    }

    public Activity getActivity() {
        return activity;
    }

    public void setActivity(Activity activity) {
        this.activity = activity;
    }

    public int getWeightRange() {
        return weightRange;
    }

    public void setWeightRange(int weightRange) {
        this.weightRange = weightRange;
    }

    public float getBurnedCalories() {
        return burnedCalories;
    }

    public void setBurnedCalories(float burnedCalories) {
        this.burnedCalories = burnedCalories;
    }
    
    
    @Override
    public int hashCode() {
            final int prime = 31;
            int result = 1;
            result = prime * result + Math.round(burnedCalories);
            result = prime * result + weightRange;
            result = prime * result + ((activity == null) ? 0 : activity.hashCode());
            result = prime * result + ((difficulty == null) ? 0 : difficulty.hashCode());
            return result;
    }
    
    @Override
    public boolean equals(Object obj) {
            if (this == obj)
                    return true;
            if (obj == null)
                    return false;
            if (getClass() != obj.getClass())
                    return false;
            BurnedCalories other = (BurnedCalories) obj;
            if (activity == null) {
                    if (other.activity != null)
                            return false;
            } else if (!activity.equals(other.activity))
                    return false;
            if (weightRange != other.weightRange)
                    return false;
            if (burnedCalories != other.burnedCalories)
                    return false;
            if (difficulty == null) {
                    if (other.difficulty != null)
                            return false;
            } else if (!difficulty.equals(other.difficulty))
                    return false;
            return true;
    }
}
