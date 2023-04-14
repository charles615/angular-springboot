package com.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Klass {

    private int id;
    private Teacher teacher;
    private String name;



    @Override
    public String toString() {
        return "Klass{" +
                "id=" + id +
                ", teacher=" + teacher +
                ", name='" + name + '\'' +
                '}';
    }
}
