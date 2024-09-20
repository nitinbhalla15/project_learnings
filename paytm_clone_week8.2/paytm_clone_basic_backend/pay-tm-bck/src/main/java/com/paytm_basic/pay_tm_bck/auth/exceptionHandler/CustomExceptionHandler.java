package com.paytm_basic.pay_tm_bck.auth.exceptionHandler;

import com.paytm_basic.pay_tm_bck.accounts.exceptions.CustomException;
import com.paytm_basic.pay_tm_bck.accounts.service.UserService;
import com.paytm_basic.pay_tm_bck.auth.entities.ErrorResonse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.HandlerAdapter;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE)
@Slf4j
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<?> handleAuthException(AuthenticationException exception){
        ErrorResonse errResponse = ErrorResonse.builder().errorMessage(exception.getMessage()).http_status_code(403).build();
        return new ResponseEntity<>(errResponse, HttpStatus.UNAUTHORIZED);
    }

    @Override
    public ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatusCode status, WebRequest request){
        Map<String,String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach((err)->{
            errors.put(err.getField(), err.getDefaultMessage());
        });
        return new ResponseEntity<>(errors,HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(CustomException.class)
    public ResponseEntity<?> handleUserNotFound(CustomException exception){
        ErrorResonse err = ErrorResonse.builder().errorMessage(exception.getErrorMessage()).http_status_code(404).build();
        return new ResponseEntity<>(err,HttpStatus.NOT_FOUND);
    }
}
