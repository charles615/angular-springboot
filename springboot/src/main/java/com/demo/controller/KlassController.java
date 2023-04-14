package com.demo.controller;

import com.demo.entity.Klass;
import com.demo.mapper.KlassMapper;
import com.demo.mapper.TeacherMapper;
import com.demo.service.IKlassService;
import com.demo.service.ITeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.persistence.PostRemove;
import java.util.List;

@RestController
@RequestMapping("Klass")
public class KlassController {

    @Autowired
    private IKlassService klassService;
    @Autowired
    private TeacherMapper teacherMapper;

    @Autowired
    private KlassRepository klassRepository;

    @RequestMapping("")
    @CrossOrigin("*")
    public List<Klass> show() {
        return klassService.show();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody Klass klass) {
        System.out.println("触发保存方法");
        System.out.println(klass.getTeacher().getId());
        int tid = klass.getTeacher().getId();
        String name = klass.getName();
        klassService.add(name, tid);
    }

    @PutMapping
    @CrossOrigin("*")
    public void update(@RequestBody Klass showKlass) {
        int tid = showKlass.getTeacher().getId();
        int id =  showKlass.getId();
        String name = showKlass.getName();
        klassService.update(id, name, tid);
    }





}
