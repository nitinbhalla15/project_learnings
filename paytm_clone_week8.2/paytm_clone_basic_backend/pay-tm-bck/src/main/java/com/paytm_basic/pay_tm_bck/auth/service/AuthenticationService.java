package com.paytm_basic.pay_tm_bck.auth.service;


import com.paytm_basic.pay_tm_bck.accounts.entity.BankDetails;
import com.paytm_basic.pay_tm_bck.auth.entities.SignInDetails;
import com.paytm_basic.pay_tm_bck.auth.entities.SignUpDetails;
import com.paytm_basic.pay_tm_bck.auth.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
@Slf4j
public class AuthenticationService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private PasswordEncoder passEncoder;

    @Autowired
    private JWTService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;


    public Map<String,String> createAccount(SignUpDetails userDetails){
        Map<String,String> signupResponse = new HashMap<>();
        try{
            log.info("Creating user account ...");
            SignUpDetails newUser = SignUpDetails.builder()
                    .user_id(UUID.randomUUID())
                    .emailId(userDetails.getEmailId())
                    .firstName(userDetails.getFirstName())
                    .lastName(userDetails.getLastName())
                    .password(passEncoder.encode(userDetails.getPassword())).build();
            log.info("Creating bank account ...");
            BankDetails bnkDetails = BankDetails.builder().bnk_id(UUID.randomUUID())
                    .email(newUser.getEmailId())
                    .balance((long) Math.random()*10000)
                    .lastTransactionDateTime(new Date()).build();
            newUser.setBnkDetails(bnkDetails);
            userRepo.save(newUser);
            String jwtToken = jwtService.generateToken(userDetails.getEmailId());
            signupResponse.put("token",jwtToken);
            log.info("User created successfully");
            return signupResponse;
        }catch (Exception e){
            log.error("Error while creating user account...");
        }
        return signupResponse;
    }

    public Map<String,String> loginUser(SignInDetails loginDetails){
        Map<String,String> response = new HashMap<>();
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDetails.getEmail(),loginDetails.getPassword())
        );
        SignUpDetails userDetails = userRepo.findUserBySubject(loginDetails.getEmail()).orElse(null);
        String jwtToken = jwtService.generateToken(userDetails.getEmailId());
        response.put("token",jwtToken);
        return response;
    }


}
