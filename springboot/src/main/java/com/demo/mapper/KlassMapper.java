package com.demo.mapper;

import com.demo.entity.Klass;

import java.util.List;

public interface KlassMapper {


    List<Klass> getAll();
    int insert(String name, int tid);

    Klass getByName(String name);

    int update(int id, String name, int tid);


}
