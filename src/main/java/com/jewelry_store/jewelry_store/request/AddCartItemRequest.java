package com.jewelry_store.jewelry_store.request;

import java.util.List;

import lombok.Data;

@Data
public class AddCartItemRequest {

    private Long JewelrId;

    private int quanity;

    private List<String> components;
}
