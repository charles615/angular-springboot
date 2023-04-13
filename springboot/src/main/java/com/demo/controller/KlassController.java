package com.demo.controller;

import com.demo.entity.Klass;
import com.demo.mapper.KlassMapper;
import com.demo.repository.KlassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.persistence.PostRemove;
import java.util.List;

@RestController
@RequestMapping("Klass")
public class KlassController {

    @Autowired
    private KlassMapper klassMapper;

    @Autowired
    private KlassRepository klassRepository;


    @GetMapping
    public List<Klass> getAll(@RequestParam String name) {
        return this.klassRepository.findAllByNameContains(name);
//        return  klassMapper.getAllByName(name);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody Klass klass) {
        klassRepository.save(klass);
    }

}
