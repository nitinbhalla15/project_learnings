package com.paytm_basic.pay_tm_bck.accounts.service;


import com.paytm_basic.pay_tm_bck.accounts.entity.BankDetails;
import com.paytm_basic.pay_tm_bck.accounts.entity.FriendsPojo;
import com.paytm_basic.pay_tm_bck.accounts.entity.UpdatedUserDetails;
import com.paytm_basic.pay_tm_bck.accounts.exceptions.CustomException;
import com.paytm_basic.pay_tm_bck.auth.entities.SignUpDetails;
import com.paytm_basic.pay_tm_bck.auth.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@Slf4j
public class UserService {

    @Autowired
    private UserRepository usrRepo;

    @Autowired
    private PasswordEncoder encoder;

    public String updateUserDetails(UUID user_id,UpdatedUserDetails usrDetails){
        String response ;
        try{
            log.info("Updating user details...");
            SignUpDetails usrFromDb = usrRepo.findById(user_id).get();
            if(usrFromDb!=null){
                if(usrDetails.getFirstName()!=null && !usrDetails.getFirstName().equals(usrFromDb.getFirstName())){
                    usrFromDb.setFirstName(usrDetails.getFirstName());
                }
                if(usrDetails.getLastName()!=null && !usrDetails.getLastName().equals(usrFromDb.getLastName())){
                    usrFromDb.setLastName(usrDetails.getLastName());
                }
                String newPassword = encoder.encode(usrDetails.getPassword());
                if(usrDetails.getPassword()!=null && newPassword!=usrFromDb.getPassword()){
                    usrFromDb.setPassword(newPassword);
                }
            }
            usrRepo.save(usrFromDb);
            response="User details have been updated successfully";
        }catch (Exception e){
            log.error("Error while updating user details");
            response = "Not able to update the userDetails";
        }
        return response;
    }


    public Map<String,String> fetchBalanceDetails(UUID userId){
        Map<String,String> responseMap = new HashMap<>();
        Long accBalance ;
            SignUpDetails userDetails = usrRepo.findById(userId).get();
            if(userDetails!=null){
                accBalance=userDetails.getBnkDetails().getBalance();
                responseMap.put("balance",accBalance.toString());
                responseMap.put("userName",userDetails.getFirstName()+" "+userDetails.getLastName());
            }else{
                throw new CustomException("User not found", HttpStatus.NOT_FOUND);
            }
        return responseMap;
    }

    public List<FriendsPojo> serachUsers(String keyword){
        List<FriendsPojo> allUserList = new ArrayList<>();
        try{
            List<SignUpDetails> userList = usrRepo.findUsersWithName(keyword);
            userList.forEach((item)->{
                allUserList.add(new FriendsPojo(item.getEmailId(),item.getFirstName()+" "+item.getLastName()));
            });
        }catch (Exception e){
            log.error("Error while fetching the users");
        }
        return allUserList;
    }

    @Transactional
    public String transfeMoney(String fromEmail,String toEmail,Long amount){
        SignUpDetails fromUser = usrRepo.findUserBySubject(fromEmail).orElse(null);
        SignUpDetails toUser = usrRepo.findUserBySubject(toEmail).orElse(null);
        if(fromUser!=null && toUser!=null){
            if(fromUser.getBnkDetails().getBalance()>=amount){
                BankDetails fromBankDetails = fromUser.getBnkDetails();
                fromBankDetails.setBalance(fromBankDetails.getBalance()-amount);
                fromUser.setBnkDetails(fromBankDetails);
                BankDetails toBankDetails = toUser.getBnkDetails();
                toBankDetails.setBalance(toBankDetails.getBalance()+amount);
                toUser.setBnkDetails(toBankDetails);
                usrRepo.save(fromUser);
                usrRepo.save(toUser);
            }else{
                throw new CustomException("Not Enough Balance :(",HttpStatus.OK);
            }
        }else{
            throw new CustomException("User Does not exist",HttpStatus.NOT_FOUND);
        }
        return "Money Transfered !";
    }


}
