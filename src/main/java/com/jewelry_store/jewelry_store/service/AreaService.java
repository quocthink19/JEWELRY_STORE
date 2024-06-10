package com.jewelry_store.jewelry_store.service;

import java.util.List;

import com.jewelry_store.jewelry_store.model.Area;
import com.jewelry_store.jewelry_store.model.User;
import com.jewelry_store.jewelry_store.request.CreateAreaRequest;

public interface AreaService {

    public Area createArea(CreateAreaRequest req, User user);

    public Area updateArea(Long AreaId, CreateAreaRequest updateArea) throws Exception;

    public void deleteArea(Long AreaId) throws  Exception;

    public  List<Area> getAllArea();

    public List<Area> SearchArea();

    public Area findAreabyId(Long id) throws Exception;

    public Area getAreabyUserId(Long UserId) throws Exception;

    public Area updateAreaStatus(long id) throws Exception;
}
