-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 28, 2022 at 04:13 PM
-- Server version: 10.6.5-MariaDB-log
-- PHP Version: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alertapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE `activities` (
  `id` char(36) NOT NULL DEFAULT uuid(),
  `whitch_food_ate` varchar(255) NOT NULL,
  `whitch_food_drank` varchar(255) NOT NULL,
  `smoked` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `user_id` varchar(255) NOT NULL DEFAULT uuid(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `activities`
--

INSERT INTO `activities` (`id`, `whitch_food_ate`, `whitch_food_drank`, `smoked`, `description`, `user_id`, `created_at`, `updated_at`) VALUES
('29ae53db-4037-439d-8c5a-09446780a939', 'Gasolina', 'Gasolina', 'Gasolina', 'Gasolina', '13d204bf-ccb3-4cea-94c5-b53382dfe749', '2022-05-07 22:21:03', '2022-05-07 22:21:03');

-- --------------------------------------------------------

--
-- Table structure for table `body_users`
--

CREATE TABLE `body_users` (
  `id` varchar(36) NOT NULL,
  `heights` varchar(255) NOT NULL,
  `weigh` varchar(255) NOT NULL,
  `blood_type` varchar(255) NOT NULL,
  `body_pressure_min` varchar(255) NOT NULL,
  `body_pressure_max` varchar(255) NOT NULL,
  `glicemia` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `body_users`
--

INSERT INTO `body_users` (`id`, `heights`, `weigh`, `blood_type`, `body_pressure_min`, `body_pressure_max`, `glicemia`, `user_id`, `created_at`, `updated_at`) VALUES
('624816ad-e3d8-4589-b59c-9e3dd879b634', '1.23', '67.9', 'O', '12/78', '90/199', '167', '5689eb5d-ac2f-4b3d-aceb-46707351d23b', '2022-04-06 07:11:24.686406', '2022-04-06 07:11:24.686406');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` varchar(36) NOT NULL,
  `title` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `publishing_company` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` char(36) NOT NULL DEFAULT uuid(),
  `brand` varchar(255) NOT NULL,
  `vehicle_id` varchar(255) NOT NULL DEFAULT uuid(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `brand`, `vehicle_id`, `created_at`, `updated_at`) VALUES
('08d0790b-d258-4094-8d2c-9395fbdcc3da', 'Toyota', '95d36d64-5337-4c1b-b23a-4bf5fd25c256', '2022-05-07 20:43:31', '2022-05-07 20:43:31');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` varchar(36) NOT NULL,
  `country_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `country_name`) VALUES
('852bdd28-c30c-499b-b675-94deb4347f3c', 'Portugal');

-- --------------------------------------------------------

--
-- Table structure for table `deseases`
--

CREATE TABLE `deseases` (
  `id` varchar(36) NOT NULL,
  `desease_name` varchar(255) NOT NULL,
  `desease_type` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `user_id` varchar(255) NOT NULL,
  `body_user_id` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `deseases`
--

INSERT INTO `deseases` (`id`, `desease_name`, `desease_type`, `description`, `user_id`, `body_user_id`, `created_at`, `updated_at`) VALUES
('f16636a8-0a91-4e3c-94f1-0cefcb8565ce', 'Febre', 'cronica', 'sjfhkhfkxx cvxv cvxv', '5689eb5d-ac2f-4b3d-aceb-46707351d23b', '624816ad-e3d8-4589-b59c-9e3dd879b634', '2022-04-06 07:16:42.385685', '2022-04-06 07:16:42.385685');

-- --------------------------------------------------------

--
-- Table structure for table `fuels`
--

CREATE TABLE `fuels` (
  `id` char(36) NOT NULL DEFAULT uuid(),
  `fuel` varchar(255) NOT NULL,
  `vehicle_id` varchar(255) NOT NULL DEFAULT uuid(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `fuels`
--

INSERT INTO `fuels` (`id`, `fuel`, `vehicle_id`, `created_at`, `updated_at`) VALUES
('6dafc8e3-422d-4c3f-a581-83e093422d22', 'Gasolio', 'b08c55f0-51d8-4a8e-a99f-513f1744cfee', '2022-05-07 15:38:36', '2022-05-07 15:38:36'),
('724abfc4-de7a-4420-ba32-e5039f1d46c6', 'Gasoleo', '4d039e97-cfa4-438c-8cae-f3e6bb0c5d9e', '2022-05-07 20:40:59', '2022-05-07 20:40:59'),
('78a4d0ef-4bd0-403d-98e2-7aceb768f3a5', 'Gasoleo', 'ea12463f-b331-4ec7-af38-2eeaf3648532', '2022-05-07 15:44:32', '2022-05-07 15:44:32'),
('f413c659-b954-430c-af11-101627768785', 'Gasoleo', '95d36d64-5337-4c1b-b23a-4bf5fd25c256', '2022-05-07 20:43:31', '2022-05-07 20:43:31');

-- --------------------------------------------------------

--
-- Table structure for table `history_users`
--

CREATE TABLE `history_users` (
  `id` char(36) NOT NULL DEFAULT uuid(),
  `accident_before` varchar(255) NOT NULL,
  `is_taking_medicine_now` varchar(255) NOT NULL,
  `is_sick_now` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `user_id` varchar(255) NOT NULL DEFAULT uuid(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `history_users`
--

INSERT INTO `history_users` (`id`, `accident_before`, `is_taking_medicine_now`, `is_sick_now`, `description`, `user_id`, `created_at`, `updated_at`) VALUES
('e7c897b9-5ef1-4d4d-a70f-d3dd609286d9', 'Gasolina', 'Gasolina', 'Gasolina', 'Gasolina', '3ae60e92-a94a-4d7c-8a04-1950b84fe2f9', '2022-05-07 21:32:56', '2022-05-07 21:32:56');

-- --------------------------------------------------------

--
-- Table structure for table `job_users`
--

CREATE TABLE `job_users` (
  `id` varchar(36) NOT NULL,
  `occupation` varchar(255) NOT NULL,
  `start_work_time` varchar(255) NOT NULL,
  `end_work_time` varchar(255) NOT NULL,
  `period` varchar(255) NOT NULL,
  `company` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `job_users`
--

INSERT INTO `job_users` (`id`, `occupation`, `start_work_time`, `end_work_time`, `period`, `company`, `user_id`, `created_at`, `updated_at`) VALUES
('66c65a02-1f8c-48db-b4df-a24931251908', 'Educador', 'string', 'string', 'string', 'string', '5689eb5d-ac2f-4b3d-aceb-46707351d23b', '2022-04-07 09:51:32.888340', '2022-04-07 09:51:32.888340');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
(1, 1649225118258, 'RelationUserVehicle1649225118258'),
(3, 1649321612572, 'RelationUserJob1649321612572'),
(4, 1649323155628, 'RelationUserVehicle1649323155628'),
(5, 1649580648105, 'RelationVehicleUser1649580648105'),
(6, 1649590539916, 'RelationWeatherUserVehicle1649590539916'),
(7, 1649670885238, 'ModelVehicleMigration1649670885238'),
(9, 1651901587248, 'FuelMigration1651901587248'),
(10, 1651938853871, 'BrandMigration1651938853871'),
(11, 1651956965632, 'HistoryUserMigration1651956965632'),
(12, 1651959631485, 'ActivityMigration1651959631485');

-- --------------------------------------------------------

--
-- Table structure for table `sensores`
--

CREATE TABLE `sensores` (
  `id` varchar(36) NOT NULL,
  `accelerometerX` varchar(255) NOT NULL,
  `accelerometerY` varchar(255) NOT NULL,
  `accelerometerZ` varchar(255) NOT NULL,
  `gyroscopeX` varchar(255) NOT NULL,
  `gyroscopeY` varchar(255) NOT NULL,
  `gyroscopeZ` varchar(255) NOT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `altitude` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) NOT NULL,
  `vehicle_id` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `nif` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `active` tinyint(4) NOT NULL DEFAULT 1,
  `birthday` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `house_number` varchar(255) DEFAULT NULL,
  `post_code` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country_id` varchar(255) NOT NULL,
  `aboutme` text DEFAULT 'NULL',
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `nif`, `email`, `password`, `active`, `birthday`, `gender`, `phone`, `photo`, `street`, `house_number`, `post_code`, `city`, `country_id`, `aboutme`, `created_at`, `updated_at`) VALUES
('03cb0d60-5744-417d-b8c1-0b9733f506e1', 'Dias Santos', '345678', 'diassantos@gmail.com', '$2a$08$TD.h8oj6UD6RFQvqCxUh8u.C1f5jAP6n1j82H5DV.tTYjufWbKjUe', 1, '12-03-1988', 'male', '123456', 'photo', 'manuel matos 13', '123456', '123456', '123456', '852bdd28-c30c-499b-b675-94deb4347f3c', 'NULL', '2022-05-18 23:35:33.081005', '2022-05-18 23:35:33.081005'),
('13d204bf-ccb3-4cea-94c5-b53382dfe749', 'Fernando', '12345', 'fernando@mail.com', '$2a$08$GZjVQWjPRkcdhy8mOdReAeqQrLVsew6GOavy4O4PGhS4GJsDRxxBO', 1, '12-03-1958', 'male', '123456', 'photo', 'manuel matos 13', '123456', '123456', '123456', '852bdd28-c30c-499b-b675-94deb4347f3c', NULL, '2022-04-07 10:20:01.578529', '2022-04-07 10:20:01.578529'),
('3ae60e92-a94a-4d7c-8a04-1950b84fe2f9', 'pedro', '12345', 'pedro@mail.com', '$2a$08$4EXk3/pyUhIxaNBkzKyJPO00SM5XTqk.nbm854BBFhrdx4MQjnmRC', 1, '12-03-1958', 'male', '123456', 'photo', 'manuel matos 13', '123456', '123456', '123456', '852bdd28-c30c-499b-b675-94deb4347f3c', NULL, '2022-04-07 10:01:26.105089', '2022-04-07 10:01:26.105089'),
('47fc45ae-7495-44bc-8341-15e6cb8380a3', 'Fernando 5', '12345', 'fernando5@mail.com', '$2a$08$Nqz1PqJPuv/3xq1FLFuWOufz.OXamPHw/c01FaeoscyCaC.X6Q.SK', 1, '12-03-1958', 'male', '123456', 'photo', 'manuel matos 13', '123456', '123456', '123456', '852bdd28-c30c-499b-b675-94deb4347f3c', NULL, '2022-04-10 09:52:01.830740', '2022-04-10 09:52:01.830740'),
('5161df51-3f93-47ef-b2bb-d02e414d69f3', 'Fernando 4', '12345', 'fernando4@mail.com', '$2a$08$nzhah6JXLEnUCob0KlkimOCAYa/B6TWT.htpge8Mfue1lpcLCgfZm', 1, '12-03-1958', 'male', '123456', 'photo', 'manuel matos 13', '123456', '123456', '123456', '852bdd28-c30c-499b-b675-94deb4347f3c', NULL, '2022-04-07 11:13:21.819588', '2022-04-07 11:13:21.819588'),
('5689eb5d-ac2f-4b3d-aceb-46707351d23b', 'Ana Maria 2', '345678', 'ana.maria@gmail.com', '$2a$08$U2eLoqZ4hbtdn4B9y.vM7.ry4f25OzwwHhZnkJVry2n1h2y7m8oUi', 1, '15-03-1988', 'male', '123456', 'photo', 'manuel matos 13', '123456', '123456', '123456', '852bdd28-c30c-499b-b675-94deb4347f3c', 'Eu sou implacavel', '2022-04-06 07:09:00.211338', '2022-04-11 09:44:06.000000'),
('7e64b39c-88e5-4067-9393-3556876e3a8b', 'Helena', '365214856', 'helena@mail.com', '$2a$08$kHQqg23VYB8ga0waWrcebenpw9OXfGQR935kvP26dPw5dLYM1DaO2', 1, '2000-01-19T00:00:00.000Z', 'Femenino', '936524178', NULL, NULL, NULL, NULL, NULL, '852bdd28-c30c-499b-b675-94deb4347f3c', 'NULL', '2022-05-24 08:27:47.226988', '2022-05-24 08:27:47.226988'),
('827bdc71-c17f-404a-a4f5-e52edf674250', 'Ana', '12345', 'ana@mail.com', '$2a$08$IReiQzSoOPgZ7eWXpAWiDeCfqeqIf7lztRlkdTTFfMtnvj/BQRm5e', 1, '12-03-1958', 'male', '123456', 'photo', 'manuel matos 13', '123456', '123456', '123456', '852bdd28-c30c-499b-b675-94deb4347f3c', NULL, '2022-04-06 07:09:15.212320', '2022-04-06 07:09:15.212320'),
('89d3adb3-6a60-4f74-a75b-8365b9a0b22a', 'Fernando 7', '12345', 'fernando7@mail.com', '$2a$08$Tiz3v6eTeOKbZWsEbyaAFOBWO2VirxACulqx5Le53/VL5Egs6mt12', 1, '12-03-1958', 'male', '123456', 'photo', 'manuel matos 13', '123456', '123456', '123456', '852bdd28-c30c-499b-b675-94deb4347f3c', NULL, '2022-04-10 11:45:14.675943', '2022-04-10 11:45:14.675943'),
('9fbaf30f-31b0-4418-863e-32950056502a', 'Fernando 6', '12345', 'fernando6@mail.com', '$2a$08$3OPObqL9vl9GrAV9pfSpjetjIZ7oVPdAfiXSl7TF5t.bdH2tTpon.', 1, '12-03-1958', 'male', '123456', 'photo', 'manuel matos 13', '123456', '123456', '123456', '852bdd28-c30c-499b-b675-94deb4347f3c', NULL, '2022-04-10 09:52:46.665866', '2022-04-10 09:52:46.665866'),
('baa6a84f-66e4-4bf9-8e21-96be9a339630', 'Ana Maria', '345678', 'anamaria@gmail.com', '$2a$08$8tSYl2ENKQKZDm4FPvDZSe/hpGJJHXHHNmEr5yvfY/m0F4z5ol//i', 1, '12-03-1988', 'male', '123456', 'photo', 'manuel matos 13', '123456', '123456', '123456', '852bdd28-c30c-499b-b675-94deb4347f3c', 'NULL', '2022-04-10 17:24:05.210707', '2022-04-10 17:24:05.210707'),
('d3ee9ac5-a6c9-4764-b7d0-f2957c4885d9', 'Fernando 2', '12345', 'fernando2@mail.com', '$2a$08$ueYCAuM.uHzJsPmdI1fzdu/HY7scQ9hcpNWB/vqFPejHmjeS53JXu', 1, '12-03-1958', 'male', '123456', 'photo', 'manuel matos 13', '123456', '123456', '123456', '852bdd28-c30c-499b-b675-94deb4347f3c', NULL, '2022-04-07 11:07:19.831170', '2022-04-07 11:07:19.831170'),
('f891ab57-8500-4f0f-b9f3-8fb67e8b8e16', 'Fernando 3', '12345', 'fernando3@mail.com', '$2a$08$Rnyp8iOgAf9NNWhrVcAx3.XciHSProPl4iZSt5A31csLOcO76JjKS', 1, '12-03-1958', 'male', '123456', 'photo', 'manuel matos 13', '123456', '123456', '123456', '852bdd28-c30c-499b-b675-94deb4347f3c', NULL, '2022-04-07 11:08:34.754492', '2022-04-07 11:08:34.754492');

-- --------------------------------------------------------

--
-- Table structure for table `vehiclemodels`
--

CREATE TABLE `vehiclemodels` (
  `id` char(36) NOT NULL DEFAULT uuid(),
  `model` varchar(255) NOT NULL,
  `vehicle_id` varchar(255) NOT NULL DEFAULT uuid(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `vehiclemodels`
--

INSERT INTO `vehiclemodels` (`id`, `model`, `vehicle_id`, `created_at`, `updated_at`) VALUES
('22be6172-31d2-4673-8f4c-58863007da9d', 'Camary', 'ea12463f-b331-4ec7-af38-2eeaf3648532', '2022-05-07 15:44:32', '2022-05-07 15:44:32'),
('c20da374-efef-4536-a3ec-de2c15dafabb', 'Camary', '4d039e97-cfa4-438c-8cae-f3e6bb0c5d9e', '2022-05-07 20:40:59', '2022-05-07 20:40:59'),
('edcb5275-ef28-4463-a449-536148979c38', 'mazida', 'ea12463f-b331-4ec7-af38-2eeaf3648532', '2022-05-07 15:46:34', '2022-05-07 15:46:34'),
('ef10301c-21f2-47e5-a2a6-0599f19e2971', 'Camary', '95d36d64-5337-4c1b-b23a-4bf5fd25c256', '2022-05-07 20:43:31', '2022-05-07 20:43:31');

-- --------------------------------------------------------

--
-- Table structure for table `vehicles`
--

CREATE TABLE `vehicles` (
  `id` varchar(36) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `registration_number` varchar(255) NOT NULL,
  `registration_country` varchar(255) NOT NULL,
  `engine_cc` varchar(255) DEFAULT NULL,
  `year` varchar(255) NOT NULL,
  `fuel` varchar(255) NOT NULL,
  `horse_power` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `vehicles`
--

INSERT INTO `vehicles` (`id`, `brand`, `model`, `registration_number`, `registration_country`, `engine_cc`, `year`, `fuel`, `horse_power`, `created_at`, `updated_at`) VALUES
('0ef0bc67-8d49-42ed-94f5-cf3268cd9fb5', 'BWM', 'UYYY', '13-00-zz', 'Portugal', '44543pt', '1999', 'Gasolina', '56', '2022-05-07 16:25:16.000435', '2022-05-07 16:25:16.000435'),
('1f973d2d-bddf-4103-ba12-8cecbd02fef2', 'BWM', 'UYYY', '11-17-zz', 'Portugal', '44543pt', '1999', 'Gasolina', '56', '2022-05-07 14:01:22.468142', '2022-05-07 14:01:22.468142'),
('2a8a0aa3-c082-4805-9fad-f3944051b90b', 'BWM', 'UYYY', '11-77-zz', 'Portugal', '44543pt', '1999', 'Gasolina', '56', '2022-05-07 14:00:40.205169', '2022-05-07 14:00:40.205169'),
('4d039e97-cfa4-438c-8cae-f3e6bb0c5d9e', 'Toyota', 'Camary', '00-00-pt', 'Hungry', '698uu45', '2000', 'Gasoleo', 'er-hoder', '2022-05-07 21:40:59.530370', '2022-05-07 21:40:59.530370'),
('6a2d9f2f-2e3c-4b69-b0c1-37144b14e83a', 'BWM', 'UYYY', '13-17-zz', 'Portugal', '44543pt', '1999', 'Gasolina', '56', '2022-05-07 16:24:50.097797', '2022-05-07 16:24:50.097797'),
('95d36d64-5337-4c1b-b23a-4bf5fd25c256', 'Toyota', 'Camary', '00-00-00', 'Hungry', '698uu45', '2000', 'Gasoleo', 'er-hoder', '2022-05-07 21:43:31.775740', '2022-05-07 21:43:31.775740'),
('b08c55f0-51d8-4a8e-a99f-513f1744cfee', 'Hynday', '3652UF', '85-00-oo', 'Portugal', '44543pt', '1999', 'Gasolio', 'er-hoder', '2022-05-07 16:38:36.461645', '2022-05-07 16:38:36.461645'),
('ea12463f-b331-4ec7-af38-2eeaf3648532', 'Toyota', 'Camary', '56-00-pt', 'Hungry', '698uu45', '2000', 'Gasoleo', 'er-hoder', '2022-05-07 16:44:32.427803', '2022-05-07 16:44:32.427803');

-- --------------------------------------------------------

--
-- Table structure for table `vehicles_users_users`
--

CREATE TABLE `vehicles_users_users` (
  `vehiclesId` varchar(36) NOT NULL,
  `usersId` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `vehicles_users_users`
--

INSERT INTO `vehicles_users_users` (`vehiclesId`, `usersId`) VALUES
('0ef0bc67-8d49-42ed-94f5-cf3268cd9fb5', 'baa6a84f-66e4-4bf9-8e21-96be9a339630'),
('1f973d2d-bddf-4103-ba12-8cecbd02fef2', 'baa6a84f-66e4-4bf9-8e21-96be9a339630'),
('2a8a0aa3-c082-4805-9fad-f3944051b90b', 'baa6a84f-66e4-4bf9-8e21-96be9a339630'),
('4d039e97-cfa4-438c-8cae-f3e6bb0c5d9e', '47fc45ae-7495-44bc-8341-15e6cb8380a3'),
('6a2d9f2f-2e3c-4b69-b0c1-37144b14e83a', 'baa6a84f-66e4-4bf9-8e21-96be9a339630'),
('95d36d64-5337-4c1b-b23a-4bf5fd25c256', '47fc45ae-7495-44bc-8341-15e6cb8380a3'),
('b08c55f0-51d8-4a8e-a99f-513f1744cfee', '47fc45ae-7495-44bc-8341-15e6cb8380a3'),
('ea12463f-b331-4ec7-af38-2eeaf3648532', '47fc45ae-7495-44bc-8341-15e6cb8380a3');

-- --------------------------------------------------------

--
-- Table structure for table `weathers`
--

CREATE TABLE `weathers` (
  `id` varchar(36) NOT NULL,
  `road_type` varchar(255) DEFAULT NULL,
  `current_speed` varchar(255) DEFAULT NULL,
  `free_flow_speed` varchar(255) DEFAULT NULL,
  `data_confidence` varchar(255) DEFAULT NULL,
  `weather_description` text DEFAULT NULL,
  `temperature` varchar(255) NOT NULL,
  `pressure` varchar(255) NOT NULL,
  `humidity` varchar(255) NOT NULL,
  `visibility` varchar(255) NOT NULL,
  `wind_speed` varchar(255) DEFAULT NULL,
  `wind_direction` varchar(255) DEFAULT NULL,
  `cloudiness` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `vehicle_id` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `activities_to_user_fk` (`user_id`);

--
-- Indexes for table `body_users`
--
ALTER TABLE `body_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_c076ec64c006c8640ce1cf47f8` (`blood_type`),
  ADD KEY `FK_00af94d763bbae925bfb0878237` (`user_id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_d2211ba79c9312cdcda4d7d5860` (`user_id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brand_to_vehicle_fk` (`vehicle_id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `deseases`
--
ALTER TABLE `deseases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_b589a6437aed79e370ee97a4e39` (`user_id`),
  ADD KEY `FK_aab354fe6615e48fe6a3ff4d8e3` (`body_user_id`);

--
-- Indexes for table `fuels`
--
ALTER TABLE `fuels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fuel_to_vehicle_fk1` (`vehicle_id`);

--
-- Indexes for table `history_users`
--
ALTER TABLE `history_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `history_to_user_fk` (`user_id`);

--
-- Indexes for table `job_users`
--
ALTER TABLE `job_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_5ad32dccf7718a9c725ff82576` (`user_id`),
  ADD UNIQUE KEY `REL_5ad32dccf7718a9c725ff82576` (`user_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sensores`
--
ALTER TABLE `sensores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_7620c74a249e99263ba0fbcc22f` (`user_id`),
  ADD KEY `FK_cf8bfccaae2ddd93e2cb1677e3e` (`vehicle_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`),
  ADD KEY `FK_ae78dc6cb10aa14cfef96b2dd90` (`country_id`);

--
-- Indexes for table `vehiclemodels`
--
ALTER TABLE `vehiclemodels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vehiclemodels_ibfk_1` (`vehicle_id`);

--
-- Indexes for table `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_2abf18fae2b9477bc192767531` (`registration_number`);

--
-- Indexes for table `vehicles_users_users`
--
ALTER TABLE `vehicles_users_users`
  ADD PRIMARY KEY (`vehiclesId`,`usersId`),
  ADD KEY `IDX_14016662a4b7ad68f0dacab96c` (`vehiclesId`),
  ADD KEY `IDX_f951464e59ff6ee430370b9fc0` (`usersId`);

--
-- Indexes for table `weathers`
--
ALTER TABLE `weathers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_5b3c4c0667887bf0ba9e79dbbd7` (`user_id`),
  ADD KEY `FK_6be6cbdfa973439ad563b8f4914` (`vehicle_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activities`
--
ALTER TABLE `activities`
  ADD CONSTRAINT `activities_to_user_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `body_users`
--
ALTER TABLE `body_users`
  ADD CONSTRAINT `FK_00af94d763bbae925bfb0878237` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `FK_d2211ba79c9312cdcda4d7d5860` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `brands`
--
ALTER TABLE `brands`
  ADD CONSTRAINT `brand_to_vehicle_fk` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `deseases`
--
ALTER TABLE `deseases`
  ADD CONSTRAINT `FK_aab354fe6615e48fe6a3ff4d8e3` FOREIGN KEY (`body_user_id`) REFERENCES `body_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_b589a6437aed79e370ee97a4e39` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `fuels`
--
ALTER TABLE `fuels`
  ADD CONSTRAINT `fuel_to_vehicle_fk` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fuel_to_vehicle_fk1` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `history_users`
--
ALTER TABLE `history_users`
  ADD CONSTRAINT `history_to_user_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `job_users`
--
ALTER TABLE `job_users`
  ADD CONSTRAINT `FK_5ad32dccf7718a9c725ff82576c` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sensores`
--
ALTER TABLE `sensores`
  ADD CONSTRAINT `FK_7620c74a249e99263ba0fbcc22f` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_cf8bfccaae2ddd93e2cb1677e3e` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_ae78dc6cb10aa14cfef96b2dd90` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `vehiclemodels`
--
ALTER TABLE `vehiclemodels`
  ADD CONSTRAINT `model_to_vehicle_fk` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `vehiclemodels_ibfk_1` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `vehicles_users_users`
--
ALTER TABLE `vehicles_users_users`
  ADD CONSTRAINT `FK_14016662a4b7ad68f0dacab96c0` FOREIGN KEY (`vehiclesId`) REFERENCES `vehicles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_f951464e59ff6ee430370b9fc09` FOREIGN KEY (`usersId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `weathers`
--
ALTER TABLE `weathers`
  ADD CONSTRAINT `FK_5b3c4c0667887bf0ba9e79dbbd7` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_6be6cbdfa973439ad563b8f4914` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
