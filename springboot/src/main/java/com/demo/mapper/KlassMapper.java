package com.demo.mapper;

import com.demo.entity.Klass;
import com.demo.entity.Teacher;


import java.util.List;

public interface KlassMapper {


    List<Klass> getAll();
    int insert(Klass klass);


}
