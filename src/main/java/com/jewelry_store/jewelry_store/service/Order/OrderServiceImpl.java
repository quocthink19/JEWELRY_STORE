package com.jewelry_store.jewelry_store.service.Order;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jewelry_store.jewelry_store.model.Area;
import com.jewelry_store.jewelry_store.model.Cart;
import com.jewelry_store.jewelry_store.model.CartItem;
import com.jewelry_store.jewelry_store.model.OrderItem;
import com.jewelry_store.jewelry_store.model.Orderr;
import com.jewelry_store.jewelry_store.model.User;
import com.jewelry_store.jewelry_store.repository.AreaRepository;
import com.jewelry_store.jewelry_store.repository.OrderItemRepository;
import com.jewelry_store.jewelry_store.repository.OrderReposity;
import com.jewelry_store.jewelry_store.repository.UserRepository;
import com.jewelry_store.jewelry_store.request.OrderRequest;
import com.jewelry_store.jewelry_store.service.Area.AreaService;
import com.jewelry_store.jewelry_store.service.Cart.CartService;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderReposity orderReposity;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AreaService areaService;
    @Autowired
    private CartService cartService;

    @Override
    public Orderr createOrder(OrderRequest order, User user) throws Exception {
        
        Area area = areaService.findAreabyId(order.getAreaId());

        Orderr createOrder = new Orderr();

        createOrder.setStaff(user);
        createOrder.setCreatedAt(new Date());
        createOrder.setOrderStatus("PENDING");
        createOrder.setArea(area);

        Cart cart = cartService.findCartByUserId(user.getId());

        List<OrderItem> orderItems = new ArrayList<>();

        for(CartItem cartItem : cart.getItems()){
            OrderItem orderItem = new OrderItem();
            orderItem.setJewelry(cartItem.getJewelry());
            orderItem.setComponents(cartItem.getComponents());
            orderItem.setQuantity(cartItem.getQuantity());
            orderItem.setTotalPrice(cartItem.getTotalPrice());

            OrderItem saveOrderItem = orderItemRepository.save(orderItem);
            orderItems.add(saveOrderItem);
        }

        double totalPrice = cartService.calculateCartTotals(cart);
        
        createOrder.setItems(orderItems);
        createOrder.setTotalPrice(totalPrice);

        Orderr saveOder = orderReposity.save(createOrder);
        area.getOrders().add(saveOder);
          
        return createOrder;
    }

    @Override
    public Orderr updatOrder(Long orderId, String orderStatus) throws Exception {
        Orderr order = findOrderById(orderId);
        if(orderStatus.equals("COMPLETE")
        || orderStatus.equals("PENDING")){
            order.setOrderStatus(orderStatus);
            return orderReposity.save(order);
        }
        throw new Exception("Please select a valid order status");
    }

    @Override
    public void cancelOder(Long orderId) throws Exception {
        Orderr order = findOrderById(orderId);
        orderReposity.deleteById(orderId);        
    }

    @Override
    public List<Orderr> getUserOrder(Long userId) throws Exception {
        return orderReposity.findByAreaId(userId);
    }

    @Override
    public List<Orderr> getAreaOrder(Long areaId, String orderStatus) throws Exception {
        List<Orderr> orders = orderReposity.findByAreaId(areaId);
        if(orderStatus!=null){
            orders = orders.stream().filter(order->
                order.getOrderStatus().equals(orderStatus)).collect(Collectors.toList());
        }
        return orders;
    }

    @Override
    public Orderr findOrderById(Long orderId) throws Exception {
        Optional<Orderr> optionalOrder = orderReposity.findById(orderId);
        if(optionalOrder.isEmpty()){
            throw new Exception("order not found");
        }
        return optionalOrder.get();
    }
}
