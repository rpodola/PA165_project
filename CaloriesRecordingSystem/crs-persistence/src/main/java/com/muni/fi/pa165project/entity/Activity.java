package com.muni.fi.pa165project.entity;

import com.muni.fi.pa165project.enums.Category;
import com.muni.fi.pa165project.structures.CategoryObject;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * @author Lukáš Císar
 */
@Entity
public class Activity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    private String description;

    @Enumerated(EnumType.STRING)
    private Category category;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "activity", orphanRemoval = true)
    private Set<BurnedCalories> burnedCalories = new HashSet<>();

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

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Set<BurnedCalories> getBurnedCalories() {
        return burnedCalories;
    }

    public void setBurnedCalories(Set<BurnedCalories> burnedCalories) {
        this.burnedCalories = burnedCalories;
    }

    public void addBurnedCaloriesItem(BurnedCalories burnedCaloriesItem) {
        burnedCaloriesItem.setActivity(this);
        this.burnedCalories.add(burnedCaloriesItem);
    }

    public CategoryObject getCategoryObject() {
        return CategoryObject.from(this.category);
    }
    
    @Override
    public int hashCode() {
        int result = 17;
        result = 31 * result + ((name == null) ? 0 : name.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {

        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (!(obj instanceof Activity))
            return false;

        final Activity other = (Activity) obj;

        if (name == null) {
            return false;
        } else if (!name.equals(other.name))
            return false;

        return true;
    }
}
