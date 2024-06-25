package com.jewelry_store.jewelry_store.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jewelry_store.jewelry_store.config.JwtProvider;
import com.jewelry_store.jewelry_store.model.Cart;
import com.jewelry_store.jewelry_store.model.USER_ROLE;
import com.jewelry_store.jewelry_store.model.User;
import com.jewelry_store.jewelry_store.repository.CartRepository;
import com.jewelry_store.jewelry_store.repository.UserRepository;
import com.jewelry_store.jewelry_store.request.LoginRequest;
import com.jewelry_store.jewelry_store.response.AuthResponse;
import com.jewelry_store.jewelry_store.service.User.StaffUserDetailService;

@RestController
@RequestMapping("/auth")
public class AuthController {

   @Autowired
   private UserRepository userRepository;
   @Autowired
   private PasswordEncoder passwordEncoder;
   @Autowired
   private JwtProvider jwtProvider;
   @Autowired
   private StaffUserDetailService staffUserDetailService;
   @Autowired
   private CartRepository cartRepository;

   @PostMapping("/signup")
   public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws UsernameNotFoundException {
      // Validate user input
      validateUserInput(user);

      // Validate password
      validatePassword(user.getPassword());

      User isUsernameExist = userRepository.findByUsername(user.getUsername());
      if (isUsernameExist != null) {
         throw new UsernameNotFoundException("Username is exist");
      }
      User createUser = new User();
      createUser.setFullname(user.getFullname());
      createUser.setUsername(user.getUsername());
      createUser.setPassword(passwordEncoder.encode(user.getPassword()));
      createUser.setGender(user.getGender());
      createUser.setEmail(user.getEmail());
      createUser.setRole(user.getRole());

      User saveUser = userRepository.save(createUser);

      Cart cart = new Cart();
      cart.setStaff(saveUser);
      cartRepository.save(cart);

      Authentication authentication = new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword());
      SecurityContextHolder.getContext().setAuthentication(authentication);

      String jwt = jwtProvider.generateToken(authentication);

      AuthResponse authResponse = new AuthResponse();
      authResponse.setJwt(jwt);
      authResponse.setMessage("Register success");
      authResponse.setRole(saveUser.getRole());

      return new ResponseEntity<>(authResponse, HttpStatus.CREATED);
   }

   private void validateUserInput(User user) {
      if (user.getUsername() == null || user.getUsername().trim().isEmpty()) {
         throw new IllegalArgumentException("Username cannot be empty");
      }
      if (user.getPassword() == null || user.getPassword().trim().isEmpty()) {
         throw new IllegalArgumentException("Password cannot be empty");
      }
      if (user.getEmail() == null || user.getEmail().trim().isEmpty()) {
         throw new IllegalArgumentException("Email cannot be empty");
      }
   }

   private void validatePassword(String password) {
      if (password.length() < 6) {
         throw new IllegalArgumentException("Password must have at least 6 characters");
      }
      if (password.length() > 15) {
         throw new IllegalArgumentException("Password must not exceed 15 characters");
      }
      if (!password.matches(".*[a-z].*")) {
         throw new IllegalArgumentException("Password must contain at least one lowercase letter");
      }
      if (!password.matches(".*[A-Z].*")) {
         throw new IllegalArgumentException("Password must contain at least one uppercase letter");
      }
      if (!password.matches(".*\\d.*")) {
         throw new IllegalArgumentException("Password must contain at least one digit");
      }
   }

   @PostMapping("/signin")
   public ResponseEntity<AuthResponse> signin(@RequestBody LoginRequest req) {
      String username = req.getUsername();
      String password = req.getPassword();

      Authentication authentication = authenticate(username, password);
      Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
      String role = authorities.isEmpty() ? null : authorities.iterator().next().getAuthority();

      String jwt = jwtProvider.generateToken(authentication);

      AuthResponse authResponse = new AuthResponse();
      authResponse.setJwt(jwt);
      authResponse.setMessage("Login success");
      authResponse.setRole(USER_ROLE.valueOf(role));

      return new ResponseEntity<>(authResponse, HttpStatus.OK);
   }

   private Authentication authenticate(String username, String password) {
      UserDetails userDetails = staffUserDetailService.loadUserByUsername(username);

      if (userDetails == null) {
         throw new BadCredentialsException("invalid username...");
      }
      if (!passwordEncoder.matches(password, userDetails.getPassword())) {
         throw new BadCredentialsException("invalid password....");
      }
      return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
   }
}
