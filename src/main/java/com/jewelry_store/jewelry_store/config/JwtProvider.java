package com.jewelry_store.jewelry_store.config;

import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.crypto.SecretKey;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtProvider {
        
    private SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());

    public String generateToken(Authentication auth){
    Collection<? extends GrantedAuthority> authorities = auth.getAuthorities();
    String roles = populateAuthorities(authorities);
    String jwt = Jwts.builder().setIssuedAt(new Date())
    .setExpiration((new Date(new Date().getTime()+86400000)))
    .claim("username", auth.getName())
    .claim("authorities", roles)
    .signWith(key)
    .compact();

        return jwt;
    }
    public String getUserFromJwtToken(String jwt){
        jwt = jwt.substring(7);
       
        Claims claims = Jwts.parser().setSigningKey(key).build().parseClaimsJws(jwt).getBody();

        String username = String.valueOf(claims.get("username"));
        return username;
    }

    private String populateAuthorities(Collection<? extends GrantedAuthority> authorities) {
    Set<String> auths = new HashSet<>();

    for(GrantedAuthority authority : authorities){
        auths.add(authority.getAuthority());
    }
    return String.join(",", auths);
    }
}
