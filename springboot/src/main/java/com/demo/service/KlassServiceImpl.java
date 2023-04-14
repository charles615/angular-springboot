package com.demo.service.impl;

import com.demo.entity.Klass;
import com.demo.entity.Teacher;
import com.demo.mapper.KlassMapper;
import com.demo.mapper.TeacherMapper;
import com.demo.service.IKlassService;
import com.demo.service.ITeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KlassServiceImpl implements IKlassService {

    @Autowired
    private KlassMapper klassMapper;
    @Autowired
    private TeacherMapper teacherMapper;


    @Override
    public int add(String name, int tid) {
        if (klassMapper.getByName(name) != null) {
            return 0;
        } else {
            return klassMapper.insert(name, tid);
        }

    }

    @Override
    public List<Klass> show() {
        return klassMapper.getAll();
    }

    @Override
    public int update(int id, String name, int tid) {
        if (teacherMapper.getById(tid) == null) {
            return 0;
        } else {
            return klassMapper.update(id, name, tid);
        }

    }
}
