package com.demo.service;

import com.demo.entity.Teacher;
import com.demo.mapper.TeacherMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherServiceImpl implements ITeacherService {

    @Autowired
    private TeacherMapper teacherMapper;
    @Override
    public int add(Teacher teacher) {
        return teacherMapper.insert(teacher);
    }

    @Override
    public List<Teacher> show() {
        return teacherMapper.getAll();
    }

    @Override
    public Teacher find(Long id) {
        return teacherMapper.getById(id);
    }

    @Override
    public int update(Teacher teacher) {
        return teacherMapper.update(teacher);
    }

    @Override
    public int delete(Long id) {
        return teacherMapper.delete(id);
    }


}
