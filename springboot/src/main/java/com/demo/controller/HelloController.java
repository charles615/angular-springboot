package com.demo.controller;


import com.demo.entity.Teacher;
import com.demo.mapper.TeacherMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class HelloController {

    @Autowired
    private TeacherMapper teacherMapper;

    @RequestMapping("/hello")
    @CrossOrigin("*")
    public List<Teacher> hello() {

        return teacherMapper.getAll();

    }

}
