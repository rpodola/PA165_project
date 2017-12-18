package com.muni.fi.pa165project.dto;

/**
 *
 * @author Radoslav Karlik
 */
public class TokenDTO {
    private String token;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public TokenDTO(String token) {
        this.token = token;
    }
    
}
