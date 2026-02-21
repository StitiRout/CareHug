package com.carehug.service;

import com.carehug.dto.period.PeriodRequest;
import com.carehug.dto.period.PeriodResponse;
import com.carehug.entity.Period;
import com.carehug.entity.User;
import com.carehug.exception.ResourceNotFoundException;
import com.carehug.repository.PeriodRepository;
import com.carehug.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Business logic for period tracking: create record and fetch history by user.
 */
@Service
public class PeriodService {

    private final PeriodRepository periodRepository;
    private final UserRepository userRepository;

    public PeriodService(PeriodRepository periodRepository, UserRepository userRepository) {
        this.periodRepository = periodRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public PeriodResponse save(Long userId, PeriodRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
        Period period = new Period(
                user,
                request.getStartDate(),
                request.getEndDate(),
                request.getFlowType(),
                request.getSymptoms()
        );
        period = periodRepository.save(period);
        return toResponse(period);
    }

    public List<PeriodResponse> getHistory(Long userId) {
        return periodRepository.findByUserIdOrderByStartDateDesc(userId).stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    private PeriodResponse toResponse(Period period) {
        return new PeriodResponse(
                period.getId(),
                period.getUser().getId(),
                period.getStartDate(),
                period.getEndDate(),
                period.getFlowType(),
                period.getSymptoms()
        );
    }
}
