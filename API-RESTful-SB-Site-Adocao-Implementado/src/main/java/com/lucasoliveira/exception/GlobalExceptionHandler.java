package com.lucasoliveira.exception;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import org.hibernate.StaleObjectStateException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

//    @ExceptionHandler(EntidadeNaoEncontradaException.class)
//    public ResponseEntity<String> handleEntidadeNaoEncontrada(
//            EntidadeNaoEncontradaException e) {
//        return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
//    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<ErrorResponse> handleConstraintViolation(
            ConstraintViolationException e, HttpServletRequest request) {

        Map<String, String> map = new HashMap<>();
        for (ConstraintViolation<?> cv : e.getConstraintViolations()) {
            map.put(cv.getPropertyPath().toString(), cv.getMessage());
        }
        ErrorResponse errorResponse = new ErrorResponse(
                LocalDateTime.now(),
                HttpStatus.UNPROCESSABLE_ENTITY.value(),
                HttpStatus.UNPROCESSABLE_ENTITY.name(),
                request.getMethod(),
                request.getRequestURI(),
                map,
                e.getMessage());

        return new ResponseEntity<>(errorResponse, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    @ExceptionHandler(EntidadeNaoEncontradaException.class)
    public ResponseEntity<ErrorResponse> handleEntidadeNaoEncontrada(
            EntidadeNaoEncontradaException e, HttpServletRequest request) {
        ErrorResponse errorResponse = new ErrorResponse(
                LocalDateTime.now(),
                HttpStatus.NOT_FOUND.value(),
                HttpStatus.NOT_FOUND.name(),
                request.getMethod(),
                request.getRequestURI(),
                null,
                e.getMessage());

        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(StaleObjectStateException.class)
    public ResponseEntity<ErrorResponse> handleStaleObjectState(
            StaleObjectStateException e, HttpServletRequest request) {
        ErrorResponse errorResponse = new ErrorResponse(
                LocalDateTime.now(),
                HttpStatus.PRECONDITION_FAILED.value(),
                HttpStatus.PRECONDITION_FAILED.name(),
                request.getMethod(),
                request.getRequestURI(),
                null,
                e.getMessage());

        return new ResponseEntity<>(errorResponse, HttpStatus.PRECONDITION_FAILED);
    }
}
