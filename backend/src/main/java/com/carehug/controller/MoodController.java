package com.carehug.controller;

import com.carehug.dto.mood.MoodRequest;
import com.carehug.dto.mood.MoodResponse;
import com.carehug.service.MoodService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST API for mood tracking. All endpoints require JWT; user is inferred from token.
 */
@RestController
@RequestMapping("/api/moods")
public class MoodController {

    private final MoodService moodService;

    public MoodController(MoodService moodService) {
        this.moodService = moodService;
    }

    private Long getCurrentUserId(Authentication authentication) {
        return (Long) authentication.getPrincipal();
    }

    @PostMapping
    public ResponseEntity<MoodResponse> save(@Valid @RequestBody MoodRequest request,
                                            Authentication authentication) {
        Long userId = getCurrentUserId(authentication);
        MoodResponse response = moodService.save(userId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping
    public ResponseEntity<List<MoodResponse>> getHistory(Authentication authentication) {
        Long userId = getCurrentUserId(authentication);
        List<MoodResponse> history = moodService.getHistory(userId);
        return ResponseEntity.ok(history);
    }
}
