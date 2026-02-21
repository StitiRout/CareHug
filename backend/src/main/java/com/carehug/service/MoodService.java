package com.carehug.service;

import com.carehug.dto.mood.MoodRequest;
import com.carehug.dto.mood.MoodResponse;
import com.carehug.entity.Mood;
import com.carehug.entity.User;
import com.carehug.exception.ResourceNotFoundException;
import com.carehug.repository.MoodRepository;
import com.carehug.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Business logic for mood tracking: create mood entry and fetch history by user.
 */
@Service
public class MoodService {

    private final MoodRepository moodRepository;
    private final UserRepository userRepository;

    public MoodService(MoodRepository moodRepository, UserRepository userRepository) {
        this.moodRepository = moodRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public MoodResponse save(Long userId, MoodRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
        Mood mood = new Mood(
                user,
                request.getDate(),
                request.getMoodType(),
                request.getNotes()
        );
        mood = moodRepository.save(mood);
        return toResponse(mood);
    }

    public List<MoodResponse> getHistory(Long userId) {
        return moodRepository.findByUserIdOrderByDateDesc(userId).stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    private MoodResponse toResponse(Mood mood) {
        return new MoodResponse(
                mood.getId(),
                mood.getUser().getId(),
                mood.getDate(),
                mood.getMoodType(),
                mood.getNotes()
        );
    }
}
