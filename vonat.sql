-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: Nov 04, 2023 at 04:54 PM
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
  `id` int NOT NULL COMMENT 'ID',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Line name (unique)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `line_stops`
--

CREATE TABLE `line_stops` (
  `id` int NOT NULL COMMENT 'ID (key)',
  `line` int NOT NULL COMMENT 'Line ID',
  `stop` int NOT NULL COMMENT 'Stop ID',
  `stop_number` int NOT NULL COMMENT 'The number of the stop on the line (starts at 1)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stops`
--

CREATE TABLE `stops` (
  `id` int NOT NULL COMMENT 'ID',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Stop name (unique)'
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
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `email`, `password`, `firstname`, `surname`, `is_admin`, `registration_date`) VALUES
('johndoe123', 'johndoe123@example.com', 'p@ssw0rd', 'John', 'Doe', '0', '2023-01-15'),
('alice_smith', 'alice.smith@emailprovider.com', 'securePwd42', 'Alice', 'Smith', '0', '2023-02-20'),
('user007', 'user007@mailservice.org', 'secretPass!', 'James', 'Bond', '0', '2023-03-10'),
('sarah_miller', 'sarah.miller@emailhosting.com', 'securePwd123', 'Sarah', 'Miller', '0', '2023-04-05'),
('david_wilson', 'davidwilson@example.net', 'p@ss123word', 'David', 'Wilson', '0', '2023-05-12'),
('emma_jones', 'emma.jones@mailprovider.org', 'secretPass456', 'Emma', 'Jones', '0', '2023-06-20'),
('alex_jackson', 'alex.jackson@example.org', 'securePwd789', 'Alex', 'Jackson', '0', '2023-07-10'),
('olivia_davis', 'olivia.davis@emailhost.com', 'pass1234', 'Olivia', 'Davis', '0', '2023-08-15'),
('william_white', 'will.white@mailservice.net', 'securePass12', 'William', 'White', '0', '2023-09-20'),
('ava_brown', 'ava.brown@emailprovider.org', 'brownPass', 'Ava', 'Brown', '0', '2023-10-25'),
('james_johnson', 'james.johnson@example.com', 'secure123Pass', 'James', 'Johnson', '0', '2023-11-30'),
('oliver_davis', 'oliver.davis@example.net', 'davisPwd123', 'Oliver', 'Davis', '0', '2023-12-05'),
('emily_martinez', 'emily.martinez@emailhost.com', 'securePass!23', 'Emily', 'Martinez', '0', '2024-01-10'),
('emma_rodriguez', 'emma.rodriguez@mailservice.org', 'emmaPwd456', 'Emma', 'Rodriguez', '0', '2024-02-15'),
('lucas_martinez', 'lucas.martinez@example.com', 'secureLucas789', 'Lucas', 'Martinez', '0', '2024-03-20'),
('mia_martinez', 'mia.martinez@emailprovider.net', 'miaPass123', 'Mia', 'Martinez', '0', '2024-04-25'),
('michael_jones', 'michael.jones@example.org', 'secureMichael', 'Michael', 'Jones', '0', '2024-05-30'),
('ava_taylor', 'ava.taylor@emailhost.com', 'taylorPwd123', 'Ava', 'Taylor', '0', '2024-06-05'),
('alex_wilson', 'alex.wilson@mailservice.net', 'secureAlex456', 'Alex', 'Wilson', '0', '2024-07-10'),
('sophia_davis', 'sophia.davis@example.com', 'sophia123Pass', 'Sophia', 'Davis', '0', '2024-08-15'),
('olivia_anderson', 'olivia.anderson@example.org', 'securePass456', 'Olivia', 'Anderson', '0', '2024-09-20'),
('liam_thomas', 'liam.thomas@emailhost.com', 'thomas123Pwd', 'Liam', 'Thomas', '0', '2024-10-25'),
('isabella_johnson', 'isabella.johnson@mailservice.net', 'secureIsabella', 'Isabella', 'Johnson', '0', '2024-11-30'),
('noah_martin', 'noah.martin@emailprovider.org', 'martinPwd789', 'Noah', 'Martin', '0', '2024-12-05'),
('sophia_jones', 'sophia.jones@example.com', 'sophia1234Pass', 'Sophia', 'Jones', '0', '2025-01-10'),
('mia_wilson', 'mia.wilson@emailhost.com', 'wilsonPass123', 'Mia', 'Wilson', '0', '2025-03-20'),
('emma_smith', 'emma.smith@mailservice.org', 'secureEmma!23', 'Emma', 'Smith', '0', '2025-04-25'),
('mason_martin', 'mason.martin@example.com', 'secureMason456', 'Mason', 'Martin', '0', '2025-05-30'),
('ava_anderson', 'ava.anderson@emailprovider.net', 'avaAnderson123', 'Ava', 'Anderson', '0', '2025-06-05'),
('william_hall', 'william.hall@example.org', 'secureWilliam', 'William', 'Hall', '0', '2025-07-10'),
('charlotte_davis', 'charlotte.davis@emailhost.com', 'davisPwd1234', 'Charlotte', 'Davis', '0', '2025-08-15'),
('liam_jackson', 'liam.jackson@mailservice.net', 'secureLiam789', 'Liam', 'Jackson', '0', '2025-09-20'),
('sophia_johnson', 'sophia.johnson@example.com', 'sophiaPass789', 'Sophia', 'Johnson', '0', '2025-10-25');

-- --------------------------------------------------------

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
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `line_stops`
--
ALTER TABLE `line_stops`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stops`
--
ALTER TABLE `stops`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `line_names`
--
ALTER TABLE `line_names`
  MODIFY `id` int NOT NULL AUTO_INCREMENT COMMENT 'ID', AUTO_INCREMENT=232;

--
-- AUTO_INCREMENT for table `line_stops`
--
ALTER TABLE `line_stops`
  MODIFY `id` int NOT NULL AUTO_INCREMENT COMMENT 'ID (key)', AUTO_INCREMENT=3336;

--
-- AUTO_INCREMENT for table `stops`
--
ALTER TABLE `stops`
  MODIFY `id` int NOT NULL AUTO_INCREMENT COMMENT 'ID', AUTO_INCREMENT=2874;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
