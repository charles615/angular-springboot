package com.demo.mapper;

import com.demo.entity.Klass;

import java.util.List;

public interface KlassMapper {

    List<Klass> getAllByName(String name);
}
