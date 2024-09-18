package com.paytm_basic.pay_tm_bck.accounts.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BankDetails {


    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID bnk_id;
    private String email;
    private Long balance;
    private Date lastTransactionDateTime;

}
