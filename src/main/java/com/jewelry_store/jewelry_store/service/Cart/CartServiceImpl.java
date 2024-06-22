package com.jewelry_store.jewelry_store.service.Cart;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jewelry_store.jewelry_store.model.Cart;
import com.jewelry_store.jewelry_store.model.CartItem;
import com.jewelry_store.jewelry_store.model.Jewelry;
import com.jewelry_store.jewelry_store.model.User;
import com.jewelry_store.jewelry_store.repository.CartItemRepository;
import com.jewelry_store.jewelry_store.repository.CartRepository;
import com.jewelry_store.jewelry_store.request.AddCartItemRequest;
import com.jewelry_store.jewelry_store.service.Jewelry.JewelryService;
import com.jewelry_store.jewelry_store.service.User.UserService;

@Service
public class CartServiceImpl implements CartService{

@Autowired
private CartRepository cartRepository;
@Autowired
private UserService userService;
@Autowired
public CartItemRepository cartItemRepository;
@Autowired

public JewelryService jewelryService;

    @Override
    public CartItem addItemToCart(AddCartItemRequest req, String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        Jewelry jewelry = jewelryService.FindJewelryById(req.getJewelryId());

        Cart cart = cartRepository.findByStaffId(user.getId());

        for(CartItem cartItem : cart.getItems()){
            if(cartItem.getJewelry().equals(jewelry)){
                int newQuantity = cartItem.getQuantity()+ req.getQuanity();
                return updateCartItemQuantity(cartItem.getId(), newQuantity);
            }
        }
        CartItem newCartItem = new CartItem();
        newCartItem.setJewelry(jewelry);
        newCartItem.setCart(cart);
        newCartItem.setQuantity(req.getQuanity());
        newCartItem.setComponents(req.getComponents());
        newCartItem.setTotalPrice(req.getQuanity()*jewelry.getPrice());

        CartItem saveCartItem = cartItemRepository.save(newCartItem);

        cart.getItems().add(saveCartItem);

        return saveCartItem;   
    }

    @Override
    public CartItem updateCartItemQuantity(Long cartItemId, int quantity) throws Exception {
    Optional<CartItem> cartItemOptional = cartItemRepository.findById(cartItemId);    
        if(cartItemOptional.isEmpty()){
            throw new Exception("cart is not found");
        }
        CartItem item = cartItemOptional.get();
        item.setQuantity(quantity);
        item.setTotalPrice(item.getJewelry().getPrice()*quantity);

        return cartItemRepository.save(item);
    }

    @Override
    public Cart removeItemFromCart(Long cartItemId, String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        Cart cart = cartRepository.findByStaffId(user.getId());
        Optional<CartItem> cartItemOptional = cartItemRepository.findById(cartItemId);    
        if(cartItemOptional.isEmpty()){
            throw new Exception("cart is not found");
        }
            CartItem item = cartItemOptional.get();

            cart.getItems().remove(item);

            return cart;
    }

    @Override
    public double calculateCartTotals(Cart cart) throws Exception {
        double total = 0 ;
        for(CartItem cartItem : cart.getItems()){
            total += cartItem.getJewelry().getPrice()*cartItem.getQuantity();
        }
        return total;
    }
    @Override
    public Cart findCartById(Long id) throws Exception {
        Optional<Cart> optionalCart = cartRepository.findById(id);
        if(optionalCart.isEmpty()){
            throw new Exception("cart not found id" +id);
        } 
        return optionalCart.get();
    }


    @Override
    public Cart findCartByUserId(Long userId) throws Exception {
        // User user = userService.findUserByJwtToken();
           Cart cart = cartRepository.findByStaffId(userId);
           cart.setTotal(calculateCartTotals(cart));
           return cart;
    }

  

    @Override
    public Cart clearCart(Long userId) throws Exception {
        // User user = userService.findUserByJwtToken(jwt);
        Cart cart = findCartByUserId(userId);

        cart.getItems().clear();
        return cartRepository.save(cart);
    }

}
