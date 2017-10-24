/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.muni.fi.pa165project.entity;

import com.muni.fi.pa165project.enums.GenderEnum;
import com.muni.fi.pa165project.enums.UserEnum;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author Radoslav Karlik
 */
@Entity
@Table(name = "trackedUser")
public class User implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	private int age;
	
	private double weight;
	
	private GenderEnum gender;

	private UserEnum userRole;
	
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

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public GenderEnum getGender() {
		return gender;
	}

	public void setGender(GenderEnum gender) {
		this.gender = gender;
	}

	public UserEnum getUserRole() {
		return userRole;
	}

	public void setUserRole(UserEnum userRole) {
		this.userRole = userRole;
	}
	
}
