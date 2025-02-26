package com.mcclelland.rebekahsrecipes.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // ✅ Disable CSRF for API requests
                .cors(cors -> cors.disable()) // ✅ Disable CORS restrictions
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/**").permitAll() // ✅ Allow all public API requests
                        .anyRequest().permitAll() // ✅ Allow everything else (for now)
                )
                .formLogin(login -> login.disable()) // ✅ Disable login page
                .httpBasic(basic -> basic.disable()); // ✅ Disable Basic Auth

        return http.build();
    }
}