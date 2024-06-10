package com.jewelry_store.jewelry_store.config;


import java.io.IOException;
import java.util.List;

import javax.crypto.SecretKey;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwTokenValidator extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
    throws ServletException, IOException
    {
    
        String jwt = request.getHeader(JwtConstant.JWT_HEADER);

        //Beaner token 

        if(jwt!=null){
            jwt = jwt.substring(7);
            
            try {
               SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());
               @SuppressWarnings("deprecation")
            Claims claims = Jwts.parser().setSigningKey(key).build().parseClaimsJws(jwt).getBody();

               String username = String.valueOf(claims.get("username"));
               String authorities = String.valueOf((claims.get("authorities")));

                //ROLE_STAFF, ROLE_ADMIN

               List<GrantedAuthority> auth = AuthorityUtils.commaSeparatedStringToAuthorityList(authorities);
               Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, auth);
             SecurityContextHolder.getContext().setAuthentication(authentication);
             } catch(Exception e){
                throw new BadCredentialsException("invalid token...");
            }
        }
        filterChain.doFilter(request, response);
           

}
}
