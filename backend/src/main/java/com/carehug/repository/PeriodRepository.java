package com.carehug.repository;

import com.carehug.entity.Period;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * JPA repository for Period entity. Fetches periods by user id, ordered by start date.
 */
@Repository
public interface PeriodRepository extends JpaRepository<Period, Long> {

    List<Period> findByUserIdOrderByStartDateDesc(Long userId);
}
