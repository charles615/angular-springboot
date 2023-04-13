package com.demo.controller;


import com.demo.entity.Klass;
import com.demo.entity.Teacher;
import com.demo.mapper.KlassMapper;
import com.demo.service.ITeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("klass")
public class KlassController {

    @Autowired
    private KlassMapper klassMapper;


    @RequestMapping("")
    @CrossOrigin("*")
    public List<Klass> show() {
        return klassMapper.getAll();
    }

    @PostMapping
    @CrossOrigin("*")
    public void save(@RequestBody Klass klass) {
        System.out.println("触发保存方法");
        klassMapper.insert(klass);
    }




}
