package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.common.Result;
import com.example.demo.entity.Usedcar;
import com.example.demo.mapper.UsedcarMapper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/book")
public class UsedcarController extends BaseController{

    @Resource
    UsedcarMapper usedcarMapper;

    @PostMapping
    public Result<?> save(@RequestBody Usedcar Usedcar) {
        Usedcar.setCreateTime(new Date());
        usedcarMapper.insert(Usedcar);
        return Result.success();
    }

    @PutMapping
    public Result<?> update(@RequestBody Usedcar Usedcar) {
        usedcarMapper.updateById(Usedcar);
        return Result.success();
    }

    @DeleteMapping("/{id}")
    public Result<?> delete(@PathVariable Integer id) {
        usedcarMapper.deleteById(id);
        return Result.success();
    }

    @PostMapping("/deleteBatch")
    public Result<?> deleteBatch(@RequestBody List<Integer> ids) {
        usedcarMapper.deleteBatchIds(ids);
        return Result.success();
    }

    @GetMapping("/{id}")
    public Result<?> getById(@PathVariable Integer id) {
        return Result.success(usedcarMapper.selectById(id));
    }

    /**
     * 注意：这个方法使用的是Mybatis sql的方式做的多表联合查询，大家可以点开，参考下怎么写多表查询
     * @param userId
     * @return
     */
    @GetMapping("/{userId}")
    public Result<?> getByUserId(@PathVariable Integer userId) {
        return Result.success(usedcarMapper.findByUserId(userId));
    }

    @GetMapping
    public Result<?> findPage(@RequestParam(defaultValue = "1") Integer pageNum,
                              @RequestParam(defaultValue = "10") Integer pageSize,
                              @RequestParam(defaultValue = "") String search) {
        LambdaQueryWrapper<Usedcar> wrapper = Wrappers.<Usedcar>lambdaQuery();
        if (StrUtil.isNotBlank(search)) {
            wrapper.like(Usedcar::getName, search);
        }
        Page<Usedcar> BookPage = usedcarMapper.selectPage(new Page<>(pageNum, pageSize), wrapper);
        return Result.success(BookPage);
    }
}
