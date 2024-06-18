package com.jewelry_store.jewelry_store.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jewelry_store.jewelry_store.model.Orderr;
import com.jewelry_store.jewelry_store.model.User;
import com.jewelry_store.jewelry_store.request.OrderRequest;
import com.jewelry_store.jewelry_store.service.Order.OrderService;
import com.jewelry_store.jewelry_store.service.User.UserService;

@RestController
@RequestMapping("/api")
public class OrderController {

    @Autowired
    private OrderService orderService ;
    @Autowired
    private UserService userService;

    @PostMapping("/order")
    public ResponseEntity<Orderr> createOrder(@RequestBody OrderRequest req,
    @RequestHeader("Authorization") String jwt) throws Exception{

        User user = userService.findUserByJwtToken(jwt);
        Orderr order = orderService.createOrder(req,user);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }
    @GetMapping("/order")
    public ResponseEntity<List<Orderr>> getOrderHistory(@RequestBody OrderRequest req,
    @RequestHeader("Authorization") String jwt) throws Exception{

        User user = userService.findUserByJwtToken(jwt);
       List<Orderr> order = orderService.getUserOrder(user.getId());
        return new ResponseEntity<>(order, HttpStatus.OK);
    }
}
