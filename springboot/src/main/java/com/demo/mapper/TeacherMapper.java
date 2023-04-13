package com.demo.mapper;

import com.demo.entity.Teacher;

import java.util.List;

public interface TeacherMapper {


    List<Teacher> getAll();
    int insert(Teacher teacher);

    Teacher getById(int id);

    int update(Teacher teacher);
    int delete(int id);

}
