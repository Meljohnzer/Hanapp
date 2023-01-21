SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
CREATE DATABASE IF NOT EXISTS myDB DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE myDB;

CREATE TABLE IF NOT EXISTS address (
  userID int(11) NOT NULL,
  street varchar(64) NOT NULL,
  city varchar(64) NOT NULL,
  province varchar(64) NOT NULL,
  zipcode int(12) NOT NULL,
  PRIMARY KEY (userID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS applicant (
  applicantID int(11) NOT NULL AUTO_INCREMENT,
  applyID int(11) NOT NULL,
  status varchar(12) NOT NULL,
  date@ timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (applicantID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS apply (
  applyID int(11) NOT NULL AUTO_INCREMENT,
  postID int(11) NOT NULL,
  userID int(11) NOT NULL,
  cor varchar(100) NOT NULL,
  schoolid varchar(100) NOT NULL,
  covlet varchar(100) NOT NULL,
  appliedat timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (applyID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS bookmark (
  postID int(11) NOT NULL,
  userID int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS company (
  userID int(11) NOT NULL,
  compname varchar(64) NOT NULL,
  establishdate date NOT NULL,
  websiteurl varchar(100) NOT NULL,
  compdesc varchar(2500) NOT NULL,
  PRIMARY KEY (userID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS educationBG (
  userID int(11) NOT NULL,
  schname varchar(64) NOT NULL,
  schaddress varchar(64) NOT NULL,
  course varchar(64) NOT NULL,
  yearlevel varchar(64) NOT NULL,
  PRIMARY KEY (userID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS guardian (
  userID int(11) NOT NULL,
  gname varchar(64) NOT NULL,
  gcontactno varchar(12) NOT NULL,
  gaddress varchar(64) NOT NULL,
  PRIMARY KEY (userID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS post (
  postID int(11) NOT NULL AUTO_INCREMENT,
  userID int(11) NOT NULL,
  lookingfor varchar(64) NOT NULL,
  jobdesc text NOT NULL,
  jobtype varchar(64) NOT NULL,
  startdate date NOT NULL,
  enddate date NOT NULL,
  street varchar(50) NOT NULL,
  city varchar(50) NOT NULL,
  province varchar(50) NOT NULL,
  zipcode int(12) NOT NULL,
  status tinyint(1) NOT NULL DEFAULT '1',
  createdat timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  salary float NOT NULL,
  rate varchar(24) NOT NULL,
  PRIMARY KEY (postID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `user` (
  userID int(11) NOT NULL AUTO_INCREMENT,
  email varchar(64) NOT NULL,
  password varchar(12) NOT NULL,
  usertype varchar(11) NOT NULL,
  created@ timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (userID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS userDetails (
  userID int(11) NOT NULL,
  firstname varchar(64) NOT NULL,
  lastname varchar(64) NOT NULL,
  midname varchar(64) NOT NULL,
  suffname varchar(64) NOT NULL,
  birthday date NOT NULL,
  age int(11) NOT NULL,
  contactno varchar(12) NOT NULL,
  PRIMARY KEY (userID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
