package com.demo.mapper;

import com.demo.entity.Klass;
import com.demo.entity.Teacher;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@SpringBootTest
@RunWith(SpringRunner.class)
public class KlassMapperTests {

    @Autowired
    KlassMapper klassMapper;

    @Test
    public void findAll() {
        List<Klass> list = klassMapper.getAll();
        list.forEach(System.out::println);
    }



}
