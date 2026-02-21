package com.carehug.dto.mood;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

/**
 * DTO for creating a mood entry. Used in POST /api/moods.
 */
public class MoodRequest {

    @NotNull(message = "Date is required")
    private LocalDate date;

    @NotBlank(message = "Mood type is required")
    private String moodType;

    private String notes;

    public MoodRequest() {
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
