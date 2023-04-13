package com.demo.service;

import com.demo.entity.Teacher;

import java.util.List;

public interface ITeacherService {

    int add(Teacher teacher);
    List<Teacher> show();

    Teacher find(int id);

    int update(Teacher teacher);

    int delete(int id);
}
