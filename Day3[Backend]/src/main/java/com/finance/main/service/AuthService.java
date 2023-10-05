package com.finance.main.service;

import com.finance.main.dto.request.AuthenticationRequest;
import com.finance.main.dto.request.RegisterRequest;
import com.finance.main.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);

}
