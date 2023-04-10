package com.demo.controller;


import com.demo.entity.Teacher;
import com.demo.service.ITeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;




@RestController
@RequestMapping("teacher")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TeacherController {

    @Autowired
    private ITeacherService teacherService;


    @RequestMapping("")
    @CrossOrigin("*")
    public List<Teacher> show() {
        return teacherService.show();
    }

    @PostMapping
    @CrossOrigin("*")
    public void save(@RequestBody Teacher teacher) {
        System.out.println("触发保存方法");
        teacherService.add(teacher);
    }

    @GetMapping("{id}")
    @CrossOrigin("*")
    public Teacher getById(@PathVariable Long id) {

        return teacherService.find(id);
    }

    @PutMapping("{id}")
    @CrossOrigin("*")
    public void update(@PathVariable Long id, @RequestBody Teacher teacher) {
        teacherService.update(teacher);
    }

    @DeleteMapping("{id}")
    @CrossOrigin("*")
    public void delete(@PathVariable Long id) {
        teacherService.delete(id);
    }



}
