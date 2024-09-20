package com.paytm_basic.pay_tm_bck.auth.exceptionHandler;

import com.paytm_basic.pay_tm_bck.auth.entities.ErrorResonse;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<?> handleAuthException(AuthenticationException exception){
        ErrorResonse errResponse = ErrorResonse.builder().errorMessage(exception.getMessage()).http_status_code(403).build();
        return new ResponseEntity<>(errResponse, HttpStatus.UNAUTHORIZED);
    }
}
