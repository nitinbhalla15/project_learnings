package com.paytm_basic.pay_tm_bck.auth.service;


import com.paytm_basic.pay_tm_bck.accounts.entity.BankDetails;
import com.paytm_basic.pay_tm_bck.auth.entities.SignInDetails;
import com.paytm_basic.pay_tm_bck.auth.entities.SignUpDetails;
import com.paytm_basic.pay_tm_bck.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.UUID;

@Service
public class AuthenticationService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private PasswordEncoder passEncoder;

    @Autowired
    private JWTService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;


    public String createAccount(SignUpDetails userDetails){
        SignUpDetails newUser = SignUpDetails.builder()
                .user_id(UUID.randomUUID())
                .emailId(userDetails.getEmailId())
                .firstName(userDetails.getFirstName())
                .lastName(userDetails.getLastName())
                .password(passEncoder.encode(userDetails.getPassword())).build();
        BankDetails bnkDetails = BankDetails.builder().bnk_id(UUID.randomUUID())
                .email(newUser.getEmailId())
                        .balance((long) Math.random())
                                .lastTransactionDateTime(new Date()).build();
        newUser.setBnkDetails(bnkDetails);
        // Need to add bank Account logic on sign up
        userRepo.save(newUser);
        String jwtToken = jwtService.generateToken(userDetails.getEmailId());
        return jwtToken;
    }

    public String loginUser(SignInDetails loginDetails){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDetails.getEmail(),loginDetails.getPassword())
        );
        SignUpDetails userDetails = userRepo.findUserBySubject(loginDetails.getEmail()).orElse(null);
        String jwtToken = jwtService.generateToken(userDetails.getEmailId());
        return jwtToken;
    }


}
