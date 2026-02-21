package com.carehug;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * CareHug Backend Application - Main entry point.
 * Enables component scanning and auto-configuration for Spring Boot.
 */
@SpringBootApplication
public class CareHugApplication {

    public static void main(String[] args) {
        SpringApplication.run(CareHugApplication.class, args);
    }
}
