package com.muni.fi.pa165project.entity;

import com.muni.fi.pa165project.enums.Difficulty;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

/**
 *
 * @author Radim Podola
 */
@Entity
public class BurnedCalories implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Enumerated(EnumType.STRING)
    private Difficulty difficulty;
    
    @NotNull
    @ManyToOne(optional=false)
    private Activity activity;
    
    @NotNull
    private int weightRange;
    
    @NotNull
    private int amount;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
        
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

    public float getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
    
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + Math.round(amount);
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
        if (!(obj instanceof BurnedCalories))
            return false;
        
        final BurnedCalories other = (BurnedCalories) obj;
        
        if (activity == null) {
            return false;
        } else if (!activity.equals(other.activity))
            return false;
        
        if (weightRange != other.weightRange)
            return false;
        
        if (amount != other.amount)
            return false;
        
        if (difficulty == null) {
            return false;
        } else if (!difficulty.equals(other.difficulty))
            return false;
        
        return true;
    }
}
