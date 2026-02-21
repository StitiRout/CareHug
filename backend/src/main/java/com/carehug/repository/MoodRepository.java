package com.carehug.repository;

import com.carehug.entity.Mood;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * JPA repository for Mood entity. Fetches moods by user id, ordered by date.
 */
@Repository
public interface MoodRepository extends JpaRepository<Mood, Long> {

    List<Mood> findByUserIdOrderByDateDesc(Long userId);
}
