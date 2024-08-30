package com.dom_manipulations.intersetCalculator.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.security.Security;

@Configuration
@EnableWebSecurity
public class SecurityConfigurations{

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity security) throws Exception {
        security.cors(httpSecurityCorsConfigurer ->
                        httpSecurityCorsConfigurer.configurationSource((req)->{
                            CorsConfiguration cors = new CorsConfiguration();
                            cors.addAllowedOrigin("*");
                            cors.addAllowedHeader("*");
                            cors.addAllowedMethod("*");
                            return cors;
                        }))
                .authorizeHttpRequests(authorizationManagerRequestMatcherRegistry ->
                        authorizationManagerRequestMatcherRegistry.anyRequest().permitAll());
        return security.build();
    }
}
