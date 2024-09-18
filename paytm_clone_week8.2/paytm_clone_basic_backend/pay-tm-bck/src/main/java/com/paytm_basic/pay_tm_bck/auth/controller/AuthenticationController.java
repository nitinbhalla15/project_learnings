package com.paytm_basic.pay_tm_bck.auth.controller;


import com.paytm_basic.pay_tm_bck.auth.entities.BckResponse;
import com.paytm_basic.pay_tm_bck.auth.entities.SignInDetails;
import com.paytm_basic.pay_tm_bck.auth.entities.SignUpDetails;
import com.paytm_basic.pay_tm_bck.auth.repository.UserRepository;
import com.paytm_basic.pay_tm_bck.auth.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/auth")
public class AuthenticationController {


    @Autowired
    private AuthenticationService authService;

    @PostMapping(value = "/signup" )
    public ResponseEntity<BckResponse> signUpUser(@RequestBody SignUpDetails signupDetails) {
        return ResponseEntity.ok(new BckResponse(200,authService.createAccount(signupDetails)));
    }

    @PostMapping(value = "/login")
    public ResponseEntity<BckResponse> signInUser(@RequestBody SignInDetails signInDetails){
        return ResponseEntity.ok(new BckResponse(200,authService.loginUser(signInDetails)));
    }

}
