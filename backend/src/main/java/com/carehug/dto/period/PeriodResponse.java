package com.carehug.dto.period;

import java.time.LocalDate;

/**
 * DTO for period record in API responses.
 */
public class PeriodResponse {

    private Long id;
    private Long userId;
    private LocalDate startDate;
    private LocalDate endDate;
    private String flowType;
    private String symptoms;

    public PeriodResponse() {
    }

    public PeriodResponse(Long id, Long userId, LocalDate startDate, LocalDate endDate, String flowType, String symptoms) {
        this.id = id;
        this.userId = userId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.flowType = flowType;
        this.symptoms = symptoms;
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
