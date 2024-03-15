package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.Usedcar;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UsedcarMapper extends BaseMapper<Usedcar> {
    // 根据用户id查询图书信息
    List<Usedcar> findByUserId(@Param("userId") Integer userId);
}
