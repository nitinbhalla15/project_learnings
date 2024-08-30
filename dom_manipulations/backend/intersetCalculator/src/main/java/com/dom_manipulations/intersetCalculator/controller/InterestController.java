package com.dom_manipulations.intersetCalculator.controller;

import com.dom_manipulations.intersetCalculator.dto.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/calculate")
public class InterestController {

    @GetMapping(value = "/interest/{p}/{r}/{t}")
    public ResponseEntity<Response> calculateInterest(@PathVariable("p") int p ,
                                                      @PathVariable("r") int r ,
                                                      @PathVariable("t") int t){
        return ResponseEntity.ok(new Response((p*r*t)/100));
    }

}
