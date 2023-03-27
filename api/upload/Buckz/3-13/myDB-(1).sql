SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE DATABASE IF NOT EXISTS `myDB` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `myDB`;

CREATE TABLE `address` (
  `userID` int(11) NOT NULL,
  `street` varchar(64) NOT NULL,
  `city` varchar(64) NOT NULL,
  `province` varchar(64) NOT NULL,
  `zipcode` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `bookmark` (
  `postID` int(11) NOT NULL,
  `userID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `company` (
  `userID` int(11) NOT NULL,
  `compname` varchar(64) NOT NULL,
  `establishdate` date NOT NULL,
  `websiteurl` varchar(100) NOT NULL,
  `compdesc` varchar(2500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `educationBG` (
  `userID` int(11) NOT NULL,
  `schname` varchar(64) NOT NULL,
  `schaddress` varchar(64) NOT NULL,
  `course` varchar(64) NOT NULL,
  `yearlevel` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `guardian` (
  `userID` int(11) NOT NULL,
  `gname` varchar(64) NOT NULL,
  `gcontactno` varchar(12) NOT NULL,
  `gaddress` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `post` (
  `postID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `lookingfor` varchar(64) NOT NULL,
  `jobdesc` varchar(2500) NOT NULL,
  `jobtype` varchar(64) NOT NULL,
  `startdate` date NOT NULL,
  `enddate` date NOT NULL,
  `street` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `province` varchar(50) NOT NULL,
  `zipcode` int(12) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `createdat` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `salary` float NOT NULL,
  `rate` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `user` (
  `userID` int(11) NOT NULL,
  `email` varchar(64) NOT NULL,
  `password` varchar(12) NOT NULL,
  `usertype` varchar(11) NOT NULL,
  `created@` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `userDetails` (
  `userID` int(11) NOT NULL,
  `firstname` varchar(64) NOT NULL,
  `lastname` varchar(64) NOT NULL,
  `midname` varchar(64) NOT NULL,
  `suffname` varchar(64) NOT NULL,
  `birthday` date NOT NULL,
  `age` int(11) NOT NULL,
  `contactno` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


ALTER TABLE `address`
  ADD PRIMARY KEY (`userID`);

ALTER TABLE `company`
  ADD PRIMARY KEY (`userID`);

ALTER TABLE `educationBG`
  ADD PRIMARY KEY (`userID`);

ALTER TABLE `guardian`
  ADD PRIMARY KEY (`userID`);

ALTER TABLE `post`
  ADD PRIMARY KEY (`postID`);

ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`);

ALTER TABLE `userDetails`
  ADD PRIMARY KEY (`userID`);


ALTER TABLE `post`
  MODIFY `postID` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `user`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
