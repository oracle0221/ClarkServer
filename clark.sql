/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50703
Source Host           : localhost:3306
Source Database       : clark

Target Server Type    : MYSQL
Target Server Version : 50703
File Encoding         : 65001

Date: 2017-02-12 21:24:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin_table
-- ----------------------------
DROP TABLE IF EXISTS `admin_table`;
CREATE TABLE `admin_table` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for person_table
-- ----------------------------
DROP TABLE IF EXISTS `person_table`;
CREATE TABLE `person_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `year` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `pos_id` int(11) NOT NULL,
  `pos` varchar(32) NOT NULL,
  `subpos_id` int(11) NOT NULL,
  `subpos` varchar(32) NOT NULL,
  `province` varchar(32) NOT NULL,
  `province_id` int(11) NOT NULL,
  `city_id` int(11) NOT NULL,
  `city` varchar(32) NOT NULL,
  `remark` varchar(64) DEFAULT NULL,
  `href` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for position_table
-- ----------------------------
DROP TABLE IF EXISTS `position_table`;
CREATE TABLE `position_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `client` varchar(64) NOT NULL,
  `position` varchar(255) NOT NULL,
  `pos_id` int(11) NOT NULL,
  `pos` varchar(64) NOT NULL,
  `subpos_id` int(11) NOT NULL,
  `subpos` varchar(64) NOT NULL,
  `salary_min` varchar(32) NOT NULL,
  `salary_max` varchar(32) NOT NULL,
  `salary_info` varchar(64) DEFAULT NULL,
  `province_id` int(11) NOT NULL,
  `province` varchar(32) NOT NULL,
  `city_id` int(11) NOT NULL,
  `city` varchar(32) NOT NULL,
  `report` varchar(64) DEFAULT NULL,
  `detail_pos` varchar(255) NOT NULL,
  `age_min` int(11) DEFAULT NULL,
  `age_max` int(11) DEFAULT NULL,
  `gender` int(11) NOT NULL,
  `graduation` int(11) NOT NULL,
  `other_info` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
