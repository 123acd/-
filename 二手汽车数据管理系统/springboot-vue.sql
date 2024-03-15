/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50527
Source Host           : localhost:3306
Source Database       : springboot-vue

Target Server Type    : MYSQL
Target Server Version : 50527
File Encoding         : 65001

Date: 2022-08-24 15:04:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '名称',
  `pid` int(11) DEFAULT NULL COMMENT '父节点id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', 'SUV', null);
INSERT INTO `category` VALUES ('2', '小型SUV', '1');
INSERT INTO `category` VALUES ('3', '紧凑型SUV', '1');
INSERT INTO `category` VALUES ('4', '中型车', null);
INSERT INTO `category` VALUES ('5', 'MPV', null);

-- ----------------------------
-- Table structure for dynamic
-- ----------------------------
DROP TABLE IF EXISTS `dynamic`;
CREATE TABLE `dynamic` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '标题',
  `content` text COLLATE utf8mb4_unicode_ci COMMENT '内容',
  `author` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '作者',
  `time` datetime DEFAULT NULL COMMENT '发布时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of dynamic
-- ----------------------------
INSERT INTO `dynamic` VALUES ('4', '4444', '<p>444444</p><p><br/></p><p>44444</p><p><br/></p><p><br/></p><p>555555<img src=\"https://img1.baidu.com/it/u=4110196045,3829597861&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg\" contenteditable=\"false\" style=\"font-size: 14px; max-width: 100%;\"/></p>', '管理员', '2021-07-17 18:55:27');
INSERT INTO `dynamic` VALUES ('5', '77777', '<p>7777</p><p><br/></p><p><img src=\"http://localhost:9090/files/c536f6f2f0e94983951240d73d740601\" style=\"max-width:100%;\" contenteditable=\"false\" width=\"388\" height=\"388\"/><br/></p><p>8888</p><p><br/></p><p><img src=\"http://localhost:9090/files/b344314319f047cf9192ce64ca454674\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '管理员', '2021-07-17 19:14:14');
INSERT INTO `dynamic` VALUES ('6', '123213', '<p>dasdawdad</p>', '李雪', '2022-08-22 17:52:39');
INSERT INTO `dynamic` VALUES ('7', '3213', '<p>wqeadwa</p>', '李雪', '2022-08-22 18:42:32');
INSERT INTO `dynamic` VALUES ('8', '123', '<p>wqdwad</p>', '周', '2022-08-24 11:06:57');
INSERT INTO `dynamic` VALUES ('9', '213213', '<p>wqdwad</p>', '周', '2022-08-24 11:07:02');
INSERT INTO `dynamic` VALUES ('10', '飒飒大', '<p>阿斯顿撒旦阿松大</p>', '管理员', '2022-08-24 14:16:31');

-- ----------------------------
-- Table structure for usedcar
-- ----------------------------
DROP TABLE IF EXISTS `usedcar`;
CREATE TABLE `usedcar` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '名称',
  `price` decimal(10,2) DEFAULT NULL COMMENT '价格',
  `author` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '作者',
  `create_time` datetime DEFAULT NULL COMMENT '出版日期',
  `cover` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '封面地址',
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of usedcar
-- ----------------------------
INSERT INTO `usedcar` VALUES ('24', '奔驰', '213000.00', '<p>此车购买七年</p>', '2022-08-24 00:00:00', null, '1');
INSERT INTO `usedcar` VALUES ('25', '标志', '225000.00', '<p>此车购买五年</p>', '2022-08-24 10:30:26', null, '13');
INSERT INTO `usedcar` VALUES ('26', '长安', '223000.00', '<p>此车购买二年</p>', '2022-08-24 10:31:53', null, '15');
INSERT INTO `usedcar` VALUES ('27', '大众', '179000.00', '<p>此车购买四年</p>', '2022-08-24 10:32:22', null, '14');
INSERT INTO `usedcar` VALUES ('28', '大众', '145000.00', '<p>此车购买三年</p>', '2022-08-24 10:33:26', null, '19');
INSERT INTO `usedcar` VALUES ('29', '东风', '148000.00', '<p>此车购买三年</p>', '2022-08-24 10:33:51', null, '14');
INSERT INTO `usedcar` VALUES ('30', '丰田', '194000.00', '<p>此车购买六年</p>', '2022-08-24 10:34:16', null, '16');
INSERT INTO `usedcar` VALUES ('31', '广汽', '179000.00', '<p>此车购买四年</p>', '2022-08-24 10:34:34', null, '15');
INSERT INTO `usedcar` VALUES ('32', '华泰', '238500.00', '<p>此车购买五年</p>', '2022-08-24 10:35:27', null, '13');
INSERT INTO `usedcar` VALUES ('33', '吉利', '157570.00', '<p>此车购买七年</p>', '2022-08-24 10:36:13', null, '21');
INSERT INTO `usedcar` VALUES ('34', 'Jeep', '227000.00', '<p>此车购买三年</p>', '2022-08-24 10:36:33', null, '19');
INSERT INTO `usedcar` VALUES ('35', '江淮', '139000.00', '<p>此车购买三年</p>', '2022-08-24 10:36:58', null, '20');
INSERT INTO `usedcar` VALUES ('36', '捷豹', '151000.00', '<p>此车购买五年</p>', '2022-08-24 10:37:18', null, '22');
INSERT INTO `usedcar` VALUES ('37', '长安', '179000.00', '<p>此车购买四年</p>', '2022-08-24 14:05:48', null, '1');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `username` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '密码',
  `nick_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '昵称',
  `age` int(11) DEFAULT NULL COMMENT '年龄',
  `sex` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '性别',
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '地址',
  `role` int(11) DEFAULT NULL COMMENT '角色，1：管理员，2：普通用户',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='用户信息表';

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', 'admin', '管理员', '32', '男', '湖北省', '1');
INSERT INTO `user` VALUES ('13', 'zhang', '123', '张三', '20', '男', '湖南省', '2');
INSERT INTO `user` VALUES ('14', 'wang', '123', '王梦晨', '24', '女', '江苏省', '2');
INSERT INTO `user` VALUES ('15', 'li', '123', '李雪', '22', '女', '云南省', '2');
INSERT INTO `user` VALUES ('16', 'qian', '123', '钱江', '22', '男', '四川省', '2');
INSERT INTO `user` VALUES ('18', 'zhong', '123456', '钟', '18', '女', '江西省', '1');
INSERT INTO `user` VALUES ('19', 'deng', '123456', '邓', '16', '女', '湖南省', '1');
INSERT INTO `user` VALUES ('20', 'chen', '123456', '陈', '18', '女', '河南省', '1');
INSERT INTO `user` VALUES ('21', 'yang', '123456', '杨', '18', '女', '山西省', '1');
INSERT INTO `user` VALUES ('22', 'zhou', '123456', '周', '18', '男', '陕西省', '1');
