package com.paytm_basic.pay_tm_bck.auth.entities;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FriendsPojo {


    private String emailId;
    private String friendName;
}
