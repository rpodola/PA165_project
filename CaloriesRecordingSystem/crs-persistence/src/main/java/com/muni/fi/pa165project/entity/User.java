package com.muni.fi.pa165project.entity;

import com.muni.fi.pa165project.enums.GenderEnum;
import com.muni.fi.pa165project.enums.UserEnum;
import com.muni.fi.pa165project.structures.LoginDetails;
import com.muni.fi.pa165project.structures.TrackingSettings;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.Min;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

/**
 * @author Radoslav Karlik
 * @author Lukáš Císar
 */
@Entity
@Table(name = "trackedUser")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @Length(min = 3, max = 63)
    private String name;

    private LocalDate birthDate;

    @Min(1)
    private double weight;

    @Min(1)
    private double height;

    private boolean isMale;

    private boolean isAdmin;

    @OneToMany(cascade = CascadeType.REMOVE, mappedBy = "user", orphanRemoval = true)
    private Set<Record> activityRecords = new HashSet<>();

    @Valid
    @Embedded
    private LoginDetails loginDetails = new LoginDetails();

    @Embedded
    private TrackingSettings trackingSettings = new TrackingSettings();

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

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public boolean getIsMale() {
        return gender;
    }

    public void setIsMale(boolean isMale) {
        this.isMale = isMale;
    }
    
    public Boolean getIsAdmin() {
        return isAdmin;
    }

    public void setIsAdmin(Boolean isAdmin) {
        this.isAdmin = isAdmin;
    }

    public Set<Record> getActivityRecords() {
        return activityRecords;
    }

    public void setActivityRecords(Set<Record> activityRecords) {
        this.activityRecords = activityRecords;
    }

    public LoginDetails getLoginDetails() {
        return loginDetails;
    }

    public void setLoginDetails(LoginDetails loginDetails) {
        this.loginDetails = loginDetails;
    }

    public TrackingSettings getTrackingSettings() {
        return trackingSettings;
    }

    public void setTrackingSettings(TrackingSettings trackingSettings) {
        this.trackingSettings = trackingSettings;
    }

    public void addRecord(Record record) {
        this.activityRecords.add(record);
        record.setUser(this);
    }

    @Override
    public int hashCode() {
        int hash = 7;
        if (this.loginDetails.getUsername() == null)
            return hash = 97 * hash;
        hash = 97 * hash + this.loginDetails.getUsername().hashCode();
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
        if (!(obj instanceof User)) {
            return false;
        }
        final User other = (User) obj;

        return this.loginDetails.getUsername().equals(other.loginDetails.getUsername());
    }

}
