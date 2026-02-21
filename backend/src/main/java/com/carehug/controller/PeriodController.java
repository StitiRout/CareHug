package com.carehug.controller;

import com.carehug.dto.period.PeriodRequest;
import com.carehug.dto.period.PeriodResponse;
import com.carehug.service.PeriodService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST API for period tracking. All endpoints require JWT; user is inferred from token.
 */
@RestController
@RequestMapping("/api/periods")
public class PeriodController {

    private final PeriodService periodService;

    public PeriodController(PeriodService periodService) {
        this.periodService = periodService;
    }

    private Long getCurrentUserId(Authentication authentication) {
        return (Long) authentication.getPrincipal();
    }

    @PostMapping
    public ResponseEntity<PeriodResponse> save(@Valid @RequestBody PeriodRequest request,
                                              Authentication authentication) {
        Long userId = getCurrentUserId(authentication);
        PeriodResponse response = periodService.save(userId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping
    public ResponseEntity<List<PeriodResponse>> getHistory(Authentication authentication) {
        Long userId = getCurrentUserId(authentication);
        List<PeriodResponse> history = periodService.getHistory(userId);
        return ResponseEntity.ok(history);
    }
}
