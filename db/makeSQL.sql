-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.6.5-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for todolist
CREATE DATABASE IF NOT EXISTS `todolist` /*!40100 DEFAULT CHARACTER SET utf8mb3 */;
USE `todolist`;

-- Dumping structure for table todolist.ownership
CREATE TABLE IF NOT EXISTS `ownership` (
  `ownershipId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `taskId` int(11) NOT NULL,
  PRIMARY KEY (`ownershipId`) USING BTREE,
  KEY `userId` (`userId`),
  KEY `taskId` (`taskId`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table todolist.ownership: ~22 rows (approximately)
/*!40000 ALTER TABLE `ownership` DISABLE KEYS */;
INSERT INTO `ownership` (`ownershipId`, `userId`, `taskId`) VALUES
	(1, 1, 1),
	(2, 2, 1),
	(3, 2, 2),
	(4, 2, 3),
	(5, 2, 4),
	(6, 2, 5),
	(7, 2, 6),
	(8, 2, 7),
	(9, 2, 14),
	(10, 2, 15),
	(11, 2, 19),
	(12, 2, 20),
	(13, 2, 21),
	(14, 2, 22),
	(15, 2, 23),
	(16, 2, 24),
	(17, 2, 25),
	(18, 2, 26),
	(19, 2, 27),
	(20, 2, 28),
	(21, 3, 29),
	(22, 3, 30);
/*!40000 ALTER TABLE `ownership` ENABLE KEYS */;

-- Dumping structure for table todolist.tasks
CREATE TABLE IF NOT EXISTS `tasks` (
  `taskId` int(11) NOT NULL AUTO_INCREMENT,
  `taskName` tinytext NOT NULL,
  `description` text NOT NULL,
  `dueDate` date NOT NULL,
  `taskStatus` enum('Y','N') NOT NULL DEFAULT 'N',
  PRIMARY KEY (`taskId`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table todolist.tasks: ~20 rows (approximately)
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` (`taskId`, `taskName`, `description`, `dueDate`, `taskStatus`) VALUES
	(1, 'Create Database', 'Create the database based on the ER diagram', '2022-06-02', 'N'),
	(2, 'Setup the flask', 'Setup the flask to run', '2022-06-07', 'N'),
	(3, 'Install CORS', 'Setup flask to use CORS', '2022-06-07', 'N'),
	(4, 'Setup reactjs', 'Setup reactjs to run', '2022-06-07', 'N'),
	(5, 'Setup the css', 'Setup the css for the display', '2022-06-07', 'N'),
	(6, 'Check progress', 'checking the progress', '2022-06-07', 'N'),
	(7, 'Post endpoint', 'Create post endpoint in flask', '2022-06-08', 'N'),
	(14, 'postman test', 'description 123', '2022-06-08', 'N'),
	(15, 'postman test', 'description 456', '2022-06-08', 'N'),
	(16, 'react', 'post', '2022-06-08', 'N'),
	(17, 'react', 'post 2', '2022-06-08', 'N'),
	(18, 'react', 'post 2', '2022-06-08', 'N'),
	(19, 'clean code', 'clean up the codes', '2022-06-10', 'N'),
	(21, 'add example', 'add some example', '2022-06-17', 'N'),
	(22, 'abc', '123', '2022-06-11', 'N'),
	(23, 'abc', '1233', '2022-06-11', 'N'),
	(24, 'abc', '1233', '2022-06-23', 'N'),
	(25, 'hook', '', '2022-06-10', 'N'),
	(26, 'hook', '', '2022-06-10', 'N'),
	(28, '', '', '2022-06-10', 'N');
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;

-- Dumping structure for table todolist.users
CREATE TABLE IF NOT EXISTS `users` (
  `userId` int(4) NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) NOT NULL,
  `password` varchar(500) NOT NULL,
  PRIMARY KEY (`userId`),
  KEY `userName` (`userName`),
  KEY `password` (`password`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table todolist.users: ~3 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`userId`, `userName`, `password`) VALUES
	(1, 'admin', '$5$rounds=535000$xmiDgl1K1/UYIqvg$keAwIh5/ZjDf3GEoRr/qMq2LWC/j7BCKeI8sD115ct5'),
	(2, 'user1', '$5$rounds=535000$g0VIy1ofTdO2Zpqo$7il9yqwUgTGzn5NX0KGV3jci/34VE/Hyoj8samV8an2'),
	(3, 'user2', '$5$rounds=535000$T/qKsQpIpSU0OTiA$CC/d23f4y9LK2xnohWP/GR0KLxRWic/2h6Kvgho4rBD');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
