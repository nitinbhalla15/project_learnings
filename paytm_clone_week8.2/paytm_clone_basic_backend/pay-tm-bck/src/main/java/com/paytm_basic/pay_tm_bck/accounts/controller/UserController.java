package com.paytm_basic.pay_tm_bck.accounts.controller;

import com.paytm_basic.pay_tm_bck.accounts.entity.UpdatedUserDetails;
import com.paytm_basic.pay_tm_bck.accounts.service.UserService;
import com.paytm_basic.pay_tm_bck.auth.entities.BckResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping(value = "/api/v1")
public class UserController {

    @Autowired
    private UserService usrSevice;

    @PutMapping(value = "/updateInfo/{user_id}")
    public ResponseEntity<?> updateUserInfo(@PathVariable("user_id") UUID user_id, @RequestBody UpdatedUserDetails usrDetailsUpdt){
        return new ResponseEntity<>(new BckResponse(200,usrSevice.updateUserDetails(user_id,usrDetailsUpdt)), HttpStatus.OK);
    }


    @PostMapping(value = "/transferMoney/{from}/{to}/{amount}")
    public ResponseEntity<?> transferMoney(@PathVariable("from") String fromEmailId , @PathVariable("to") String toEmailId,
                                           @PathVariable("amount") Long amount){
        return new ResponseEntity<>(new BckResponse(200,usrSevice.transfeMoney(fromEmailId,toEmailId,amount)),HttpStatus.OK);
    }

    @GetMapping(value = "/checkBalance/{user_id}")
    public ResponseEntity<?> checkBalance(@PathVariable("user_id") UUID user_id){
        return new ResponseEntity<>(new BckResponse(200,usrSevice.fetchBalanceDetails(user_id)),HttpStatus.OK);
    }

    @GetMapping(value = "/searchUsers/{keyword}")
    public ResponseEntity<?> findFriends(@PathVariable("keyword") String keyword){
        return new ResponseEntity<>(new BckResponse(200,usrSevice.serachUsers(keyword)),HttpStatus.OK);
    }

}
