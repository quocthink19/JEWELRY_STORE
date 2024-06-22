package com.jewelry_store.jewelry_store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jewelry_store.jewelry_store.model.Cart;
import com.jewelry_store.jewelry_store.model.CartItem;
import com.jewelry_store.jewelry_store.model.User;
import com.jewelry_store.jewelry_store.request.AddCartItemRequest;
import com.jewelry_store.jewelry_store.request.UpdateCartItemRequest;
import com.jewelry_store.jewelry_store.service.Cart.CartService;
import com.jewelry_store.jewelry_store.service.User.UserService;

@RestController
@RequestMapping("/api")
public class Cartcontroller {

    @Autowired
    private CartService cartService;

    @Autowired
    private UserService userService;
  
    @PutMapping("/cart/add")
    public ResponseEntity<CartItem> addItemToCart(@RequestBody AddCartItemRequest req,
    @RequestHeader("Authorization") String jwt) throws Exception{
        
        User user = userService.findUserByJwtToken(jwt);

        CartItem cartItem = cartService.addItemToCart(req, jwt);
        return new ResponseEntity<>(cartItem, HttpStatus.OK);
    }

    @PutMapping("/cart-item/update")
    public ResponseEntity<CartItem> updateCartItemQuantity(@RequestBody UpdateCartItemRequest req,
    @RequestHeader("Authorization") String jwt) throws Exception{
        
        User user = userService.findUserByJwtToken(jwt);
        CartItem cartItem = cartService.updateCartItemQuantity(req.getCartItemId(), req.getQuantity());
        return new ResponseEntity<>(cartItem, HttpStatus.OK);
    }
    @DeleteMapping("/cart/{id}/remove")
    public ResponseEntity<Cart> removeCartItem(@PathVariable Long id,
    @RequestHeader("Authorization") String jwt) throws Exception{
        
        User user = userService.findUserByJwtToken(jwt);
        Cart cart = cartService.removeItemFromCart(id, jwt);
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    @PutMapping("/cart/clear")
    public ResponseEntity<Cart> clearCart(
    @RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        Cart cart = cartService.clearCart(user.getId());
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }
    @GetMapping("/cart")
    public ResponseEntity<Cart> findUserCart(
    @RequestHeader("Authorization") String jwt) throws Exception{

        User user = userService.findUserByJwtToken(jwt);
        Cart cart = cartService.findCartByUserId(user.getId());
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }
}
