-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: Nov 01, 2023 at 12:37 AM
-- Server version: 8.2.0
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vonat`
--
CREATE DATABASE IF NOT EXISTS `vonat` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `vonat`;

-- --------------------------------------------------------

--
-- Table structure for table `arriving`
--

CREATE TABLE `arriving` (
  `line_stop_id` int NOT NULL COMMENT 'Line stop ID',
  `arrival` time NOT NULL COMMENT 'Time of arrival'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `leaving`
--

CREATE TABLE `leaving` (
  `line_stop_id` int NOT NULL COMMENT 'Line stop ID',
  `departure` time NOT NULL COMMENT 'Time of departure'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `line_names`
--

CREATE TABLE `line_names` (
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Line name'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `line_stops`
--

CREATE TABLE `line_stops` (
  `id` int NOT NULL COMMENT 'ID (key)',
  `line` varchar(255) NOT NULL COMMENT 'Line name',
  `stop` varchar(255) NOT NULL COMMENT 'Stop name',
  `stop_number` int NOT NULL COMMENT 'The number of the stop on the line (starts at 1)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stops`
--

CREATE TABLE `stops` (
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Stop name'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(255) NOT NULL COMMENT 'Username',
  `email` varchar(255) NOT NULL COMMENT 'Email',
  `password` varchar(255) NOT NULL COMMENT 'Password',
  `firstname` varchar(255) NOT NULL COMMENT 'First name',
  `surname` varchar(255) NOT NULL COMMENT 'Surname',
  `is_admin` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'If user is admin, value is 1, else it''s 0 (default is 0)',
  `registration_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Date and time when the user registered (auto generated)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `arriving`
--
ALTER TABLE `arriving`
  ADD PRIMARY KEY (`line_stop_id`,`arrival`);

--
-- Indexes for table `leaving`
--
ALTER TABLE `leaving`
  ADD PRIMARY KEY (`line_stop_id`,`departure`);

--
-- Indexes for table `line_names`
--
ALTER TABLE `line_names`
  ADD PRIMARY KEY (`name`);

--
-- Indexes for table `line_stops`
--
ALTER TABLE `line_stops`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stops`
--
ALTER TABLE `stops`
  ADD PRIMARY KEY (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `line_stops`
--
ALTER TABLE `line_stops`
  MODIFY `id` int NOT NULL AUTO_INCREMENT COMMENT 'ID (key)';
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
