package com.demo.service;

import com.demo.entity.Klass;
import com.demo.entity.Teacher;

import java.util.List;

public interface IKlassService {

    int add(String name, int id);

    List<Klass> show();

    int update(int id, String name, int tid);


}

