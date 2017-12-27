package com.muni.fi.pa165project.structures;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

/**
 * @author Radoslav Karlik
 */
@Embeddable
public class LoginDetails implements Serializable {

    @Column(nullable = false, unique = true)
    @Length(min = 3, max = 63)
    private String username;

    @Column(nullable = false)
    @Length(min = 5, max = 100)
    private String password;

    @Column(nullable = false)
    private String salt;

    @Email
    @Column(nullable = false, unique = true)
    private String email;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }
}
