package com.demo.mapper;

import com.demo.entity.Teacher;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.junit.runner.RunWith;

import java.util.List;

@SpringBootTest
@RunWith(SpringRunner.class)
public class TeacherMapperTests {

    @Autowired
    TeacherMapper teacherMapper;

    @Test
    public void findAll() {
        List<Teacher> list = teacherMapper.getAll();
        list.forEach(System.out::println);
    }

    @Test
    public void findById() {
        Long id = 14L;
        Teacher t = teacherMapper.getById(id);
        System.out.println(t);
    }


}
