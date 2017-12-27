package com.muni.fi.pa165project.dto.filters;

/**
 * @author Radim Podola
 */
public class RecordTimeFilterDTO {

    private long userId;

    private String from;

    private String to;

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    @Override
    public String toString() {
        return "userId <" + userId + "> from <" + from + "> to <" + to + ">";
    }
}
