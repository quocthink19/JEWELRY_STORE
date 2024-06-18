package com.jewelry_store.jewelry_store.service.Area;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jewelry_store.jewelry_store.model.Area;
import com.jewelry_store.jewelry_store.model.User;
import com.jewelry_store.jewelry_store.repository.AreaRepository;
import com.jewelry_store.jewelry_store.request.CreateAreaRequest;

@Service
public class AreaServiceImp implements AreaService {
    @Autowired
    private AreaRepository areaRepository;
    @Override
    public Area createArea(CreateAreaRequest req, User user) {
        Area area = new Area();
        area.setName(req.getName());
        area.setDesciption(req.getDesciption());
        area.setContactInformation(req.getContactInformation());
        area.setImages(req.getImages());
        area.setOpeningHours(req.getOpeningHours());
        area.setStaff(user);
        
        return areaRepository.save(area);
    }

    @Override
    public Area updateArea(Long AreaId, CreateAreaRequest updateArea) throws Exception {
       Area area = findAreabyId(AreaId);
       
       if(area.getDesciption()!=null){
        area.setDesciption(updateArea.getDesciption());
       }
        return areaRepository.save(area);
    }

    @Override
    public void deleteArea(Long AreaId) throws Exception {
    Area area = findAreabyId(AreaId);
    
    areaRepository.delete(area);
    
    }

    @Override
    public List<Area> getAllArea() {
       return areaRepository.findAll();
    }

    @Override
    public List<Area> SearchArea() {
            
        return null;
    }

    @Override
    public Area findAreabyId(Long id) throws Exception {
     Optional<Area>opt = areaRepository.findById(id);

    if(opt.isEmpty()){
        throw new Exception("Area not found with id" +id);
    }
    return opt.get();
    }

    @Override
    public Area getAreabyUserId(Long UserId) throws Exception {
    Area area = areaRepository.findByStaffId(UserId);
    if(area==null){
        throw new Exception("area not found with Staffid" + UserId);
    }
        return area;  
    }

    @Override
    public Area updateAreaStatus(long id) throws Exception {
        Area area = findAreabyId(id);
        area.setOpen(!area.isOpen());
        return areaRepository.save(area);
    }

}
