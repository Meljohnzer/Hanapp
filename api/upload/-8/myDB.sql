SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

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
  gcontactno int(12) NOT NULL,
  gaddress varchar(64) NOT NULL,
  PRIMARY KEY (userID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS post (
  postID int(11) NOT NULL AUTO_INCREMENT,
  userID int(11) NOT NULL,
  lookingfor varchar(64) NOT NULL,
  jobdesc varchar(2500) NOT NULL,
  jobtype varchar(64) NOT NULL,
  startdate date NOT NULL,
  enddate date NOT NULL,
  street varchar(50) NOT NULL,
  city varchar(50) NOT NULL,
  province varchar(50) NOT NULL,
  zipcode int(12) NOT NULL,
  status tinyint(1) NOT NULL DEFAULT '1',
  createdat timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
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
  contactno int(11) NOT NULL,
  PRIMARY KEY (userID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
