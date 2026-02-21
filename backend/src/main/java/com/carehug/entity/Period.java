package com.carehug.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

/**
 * Period entity - represents a single period cycle record for a user.
 * Tracks start/end dates, flow type, and optional symptoms.
 */
@Entity
@Table(name = "periods", indexes = {
    @Index(name = "idx_period_user_id", columnList = "user_id"),
    @Index(name = "idx_period_start_date", columnList = "start_date")
})
public class Period {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @NotNull
    @Column(nullable = false)
    private LocalDate startDate;

    @NotNull
    @Column(nullable = false)
    private LocalDate endDate;

    /**
     * Flow intensity: e.g. LIGHT, MEDIUM, HEAVY
     */
    @Column(length = 50)
    private String flowType;

    /**
     * Optional comma-separated or JSON symptoms
     */
    @Column(length = 500)
    private String symptoms;

    public Period() {
    }

    public Period(User user, LocalDate startDate, LocalDate endDate, String flowType, String symptoms) {
        this.user = user;
        this.startDate = startDate;
        this.endDate = endDate;
        this.flowType = flowType;
        this.symptoms = symptoms;
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

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public String getFlowType() {
        return flowType;
    }

    public void setFlowType(String flowType) {
        this.flowType = flowType;
    }

    public String getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(String symptoms) {
        this.symptoms = symptoms;
    }
}
