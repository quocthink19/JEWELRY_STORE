package com.jewelry_store.jewelry_store.service;

import com.jewelry_store.jewelry_store.model.User;

public interface UserService {

    public User findUserByJwtToken(String jwt) throws Exception;

    public User findUserbyUsername(String email) throws Exception;
}
