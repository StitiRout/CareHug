package com.carehug.dto.mood;

import java.time.LocalDate;

/**
 * DTO for mood entry in API responses.
 */
public class MoodResponse {

    private Long id;
    private Long userId;
    private LocalDate date;
    private String moodType;
    private String notes;

    public MoodResponse() {
    }

    public MoodResponse(Long id, Long userId, LocalDate date, String moodType, String notes) {
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.moodType = moodType;
        this.notes = notes;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getMoodType() {
        return moodType;
    }

    public void setMoodType(String moodType) {
        this.moodType = moodType;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
