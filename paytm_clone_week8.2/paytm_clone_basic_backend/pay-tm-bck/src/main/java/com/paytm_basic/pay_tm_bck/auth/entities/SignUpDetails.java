package com.paytm_basic.pay_tm_bck.auth.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.paytm_basic.pay_tm_bck.accounts.entity.BankDetails;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "user_info")
public class SignUpDetails implements  UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID user_id;
    private String firstName;
    private String lastName;
    private String emailId;
    private String password;
    @OneToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinColumn(name = "bnkId",referencedColumnName = "bnk_id")
    private BankDetails bnkDetails;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getUsername() {
        return getEmailId();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
