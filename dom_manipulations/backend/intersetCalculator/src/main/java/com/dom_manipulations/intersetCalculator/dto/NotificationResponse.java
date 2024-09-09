package com.dom_manipulations.intersetCalculator.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class NotificationResponse {

    private int ntiCount;
    private int jobsCnt;
    private int msgCnt;
    private int notCnt;



}
