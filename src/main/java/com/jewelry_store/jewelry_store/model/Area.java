package com.jewelry_store.jewelry_store.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Area {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    private User Staff;

    private String name;

    private String desciption;

    @Embedded
    private ContactInformation contactInformation;

    @OneToMany(mappedBy = "Area" ,  cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Order> orders = new ArrayList<>();
    
    private boolean open;
    @JsonIgnore
    @OneToMany(mappedBy = "Area" ,  cascade = CascadeType.ALL)
    private List<Jewelry> jewelry = new ArrayList<>();
}
