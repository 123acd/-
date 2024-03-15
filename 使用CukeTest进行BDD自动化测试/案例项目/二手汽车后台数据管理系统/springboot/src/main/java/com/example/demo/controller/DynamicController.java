package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.common.Result;
import com.example.demo.entity.Dynamic;
import com.example.demo.mapper.DynamicMapper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Date;

@RestController
@RequestMapping("/news")
public class DynamicController extends BaseController {

    @Resource
    DynamicMapper dynamicMapper;

    @PostMapping
    public Result<?> save(@RequestBody Dynamic dynamic) {
        dynamic.setTime(new Date());
        dynamicMapper.insert(dynamic);
        return Result.success();
    }

    @PutMapping
    public Result<?> update(@RequestBody Dynamic dynamic) {
        dynamicMapper.updateById(dynamic);
        return Result.success();
    }

    @DeleteMapping("/{id}")
    public Result<?> update(@PathVariable Long id) {
        dynamicMapper.deleteById(id);
        return Result.success();
    }

    @GetMapping("/{id}")
    public Result<?> getById(@PathVariable Long id) {
        return Result.success(dynamicMapper.selectById(id));
    }

    @GetMapping
    public Result<?> findPage(@RequestParam(defaultValue = "1") Integer pageNum,
                              @RequestParam(defaultValue = "10") Integer pageSize,
                              @RequestParam(defaultValue = "") String search) {
        LambdaQueryWrapper<Dynamic> wrapper = Wrappers.<Dynamic>lambdaQuery();
        if (StrUtil.isNotBlank(search)) {
            wrapper.like(Dynamic::getTitle, search);
        }
        Page<Dynamic> newsPage = dynamicMapper.selectPage(new Page<>(pageNum, pageSize), wrapper);
        return Result.success(newsPage);
    }
}
