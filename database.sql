SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
CREATE DATABASE IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `mydb`;

CREATE TABLE `address` (
  `userID` int(11) NOT NULL,
  `street` varchar(64) NOT NULL,
  `city` varchar(64) NOT NULL,
  `province` varchar(64) NOT NULL,
  `zipcode` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `applicant` (
  `applicantID` int(11) NOT NULL,
  `applyID` int(11) NOT NULL,
  `status` varchar(24) NOT NULL,
  `date@` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `apply` (
  `applyID` int(11) NOT NULL,
  `postID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `cor` varchar(100) NOT NULL,
  `schoolid` varchar(100) NOT NULL,
  `covlet` varchar(100) NOT NULL,
  `appliedat` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
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

CREATE TABLE `educationbg` (
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
  `status` varchar(5) NOT NULL DEFAULT 'open',
  `createdat` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `salary` text NOT NULL,
  `rate` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `schedule` (
  `scheduleID` int(11) NOT NULL,
  `applicantID` int(11) NOT NULL,
  `interviewType` varchar(24) NOT NULL,
  `method` varchar(24) NOT NULL,
  `startdate` date NOT NULL,
  `enddate` date NOT NULL,
  `starttime` text NOT NULL,
  `endtime` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `user` (
  `userID` int(11) NOT NULL,
  `email` varchar(64) NOT NULL,
  `password` varchar(12) NOT NULL,
  `usertype` varchar(11) NOT NULL,
  `created@` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `userdetails` (
  `userID` int(11) DEFAULT NULL,
  `firstname` varchar(64) NOT NULL,
  `lastname` varchar(64) NOT NULL,
  `midname` varchar(64) NOT NULL,
  `suffname` varchar(64) NOT NULL,
  `birthday` date NOT NULL,
  `age` int(11) NOT NULL,
  `contactno` varchar(12) NOT NULL,
  `profile` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


ALTER TABLE `address`
  ADD KEY `userID` (`userID`);

ALTER TABLE `applicant`
  ADD PRIMARY KEY (`applicantID`),
  ADD KEY `applyID` (`applyID`);

ALTER TABLE `apply`
  ADD PRIMARY KEY (`applyID`),
  ADD KEY `userID` (`userID`),
  ADD KEY `postID` (`postID`);

ALTER TABLE `bookmark`
  ADD KEY `postID` (`postID`),
  ADD KEY `userID` (`userID`);

ALTER TABLE `company`
  ADD KEY `userID` (`userID`);

ALTER TABLE `educationbg`
  ADD KEY `userID` (`userID`);

ALTER TABLE `guardian`
  ADD KEY `userID` (`userID`);

ALTER TABLE `post`
  ADD PRIMARY KEY (`postID`),
  ADD KEY `userID` (`userID`);

ALTER TABLE `schedule`
  ADD PRIMARY KEY (`scheduleID`),
  ADD KEY `applicantID` (`applicantID`);

ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`);

ALTER TABLE `userdetails`
  ADD KEY `userID` (`userID`);


ALTER TABLE `applicant`
  MODIFY `applicantID` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `apply`
  MODIFY `applyID` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `post`
  MODIFY `postID` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `schedule`
  MODIFY `scheduleID` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `user`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT;


ALTER TABLE `address`
  ADD CONSTRAINT `address_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE CASCADE;

ALTER TABLE `applicant`
  ADD CONSTRAINT `applicant_ibfk_1` FOREIGN KEY (`applyID`) REFERENCES `apply` (`applyID`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `apply`
  ADD CONSTRAINT `apply_ibfk_1` FOREIGN KEY (`postID`) REFERENCES `post` (`postID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `apply_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `bookmark`
  ADD CONSTRAINT `bookmark_ibfk_1` FOREIGN KEY (`postID`) REFERENCES `post` (`postID`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `company`
  ADD CONSTRAINT `company_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE CASCADE;

ALTER TABLE `educationbg`
  ADD CONSTRAINT `educationbg_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE CASCADE;

ALTER TABLE `guardian`
  ADD CONSTRAINT `guardian_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE CASCADE;

ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `schedule`
  ADD CONSTRAINT `schedule_ibfk_1` FOREIGN KEY (`applicantID`) REFERENCES `applicant` (`applicantID`) ON DELETE CASCADE;

ALTER TABLE `userdetails`
  ADD CONSTRAINT `userdetails_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;
