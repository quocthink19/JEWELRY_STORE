package com.jewelry_store.jewelry_store.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jewelry_store.jewelry_store.model.Area;

public interface AreaRepository extends JpaRepository<Area,Long> {
       
    Area findByStaffId(Long userId);

}
