/*
 Navicat MySQL Data Transfer

 Source Server         : crm
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : localhost:3306
 Source Schema         : clark

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 20/12/2020 19:44:58
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_table
-- ----------------------------
DROP TABLE IF EXISTS `admin_table`;
CREATE TABLE `admin_table`  (
  `ID` int(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for client_table
-- ----------------------------
DROP TABLE IF EXISTS `client_table`;
CREATE TABLE `client_table`  (
  `ID` int(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `client` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '公司名',
  `detail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '公司介绍',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for person_table
-- ----------------------------
DROP TABLE IF EXISTS `person_table`;
CREATE TABLE `person_table`  (
  `ID` int(0) NOT NULL AUTO_INCREMENT,
  `username` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `year` int(0) NOT NULL,
  `month` int(0) NOT NULL,
  `pos_id` int(0) NOT NULL,
  `pos` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `subpos_id` int(0) NOT NULL,
  `subpos` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `province` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `province_id` int(0) NOT NULL,
  `city_id` int(0) NOT NULL,
  `city` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `remark` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `href` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for position_table
-- ----------------------------
DROP TABLE IF EXISTS `position_table`;
CREATE TABLE `position_table`  (
  `ID` int(0) NOT NULL AUTO_INCREMENT,
  `client` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `position` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pos_id` int(0) NOT NULL,
  `pos` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `subpos_id` int(0) NOT NULL,
  `subpos` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `salary_min` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `salary_max` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `salary_info` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `province_id` int(0) NOT NULL,
  `province` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `city_id` int(0) NOT NULL,
  `city` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `report` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `detail_pos` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `age_min` int(0) NULL DEFAULT NULL,
  `age_max` int(0) NULL DEFAULT NULL,
  `gender` int(0) NOT NULL,
  `graduation` int(0) NOT NULL,
  `other_info` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
