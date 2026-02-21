package com.carehug.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

/**
 * Mood entity - represents a mood log entry for a user on a given date.
 * Tracks mood type and optional notes.
 */
@Entity
@Table(name = "moods", indexes = {
    @Index(name = "idx_mood_user_id", columnList = "user_id"),
    @Index(name = "idx_mood_date", columnList = "date")
})
public class Mood {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @NotNull
    @Column(nullable = false)
    private LocalDate date;

    /**
     * Mood type: e.g. HAPPY, SAD, ANXIOUS, CALM, ENERGETIC, etc.
     */
    @Column(nullable = false, length = 50)
    private String moodType;

    @Column(length = 1000)
    private String notes;

    public Mood() {
    }

    public Mood(User user, LocalDate date, String moodType, String notes) {
        this.user = user;
        this.date = date;
        this.moodType = moodType;
        this.notes = notes;
    }

    // --- Getters and Setters ---

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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
