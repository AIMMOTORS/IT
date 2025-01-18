-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: localhost    Database: laravelMultiAuth
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(65) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `admins_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'admin','admin@gmail.com','$2y$10$A6VQ9ddtktYElF4fEhrhhOfv6015pPGMpyUfkNIDiB7Oy0ckX55su','2023-04-06 22:10:24','2023-04-06 22:10:24'),(2,'Ayesha','ayesha15akhtar3a@gmail.com','$2y$10$D6VkRAr1h9ZDdfr35bBQg.b041XBIaJDgcDlrSwk3q8g0lbgD8tgG','2023-04-06 22:11:20','2023-04-06 22:11:20'),(3,'Mahnoor','mahnooratiq2@gmail.com','$2y$10$ZTyL6EWxRiPLgbRKCTEZDOLsF8x7HiEP8X/hwj/zlVUBVl/tT1W9a','2023-04-06 22:11:58','2023-04-06 22:11:58'),(4,'Talal','talal@gmail.com','$2y$10$ExzY9ewbyMyf5d7rawEdku2dfmzwX.DEnnVwzKUMxtudbI.wIWm4e','2023-04-06 22:12:28','2023-04-06 22:12:28'),(5,'Urooj','urooj@gmail.com','$2y$10$UeDqs9S4WDGbL/Lr5sXBFeADF1y51dyw91AIZW4a0ET3nBcFSoX7u','2023-04-06 22:13:19','2023-04-06 22:13:19'),(8,'abdhc','abc@gmail.com','$2y$10$1T3iymy8ufH8Qs5mf8GhiOOyCjgXaTFd4rePgq7ogNGigKCfwanr.','2023-04-19 23:05:09','2023-04-19 23:05:09');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `batterys`
--

DROP TABLE IF EXISTS `batterys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `batterys` (
  `battery_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `mac` varchar(17) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_of_sale` date NOT NULL,
  `number_of_chargings` int NOT NULL,
  `deep_cycle_limit` int NOT NULL,
  `BPI` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`battery_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batterys`
--

LOCK TABLES `batterys` WRITE;
/*!40000 ALTER TABLE `batterys` DISABLE KEYS */;
INSERT INTO `batterys` VALUES (3,'15:34:a3:ef:87:de','AbcHelloAbc12*','2020-12-01',8,10,5.80,'2023-03-14 05:10:59','2023-03-14 05:10:59'),(5,'ab:1c:de:54:64:ae','Hello1234*','2021-07-21',4,7,10.00,'2023-03-16 04:43:59','2023-03-16 04:43:59'),(6,'ab:1c:de:54:64:a1','Hello1234*','2021-06-30',4,7,10.80,'2023-03-16 04:49:28','2023-03-16 04:49:28'),(7,'3a:45:ae:23:65:a1','Hello1234*','2022-10-04',6,5,6.70,'2023-03-16 04:57:48','2023-03-16 04:57:48'),(10,'ab:1c:de:54:64:32','$2y$10$vlcW38sB.dTmWl2gWxu2puHdKJm/.s4BsvgJJfF9NXgrrgIs2vbeG','2023-04-04',6,9,7.00,'2023-04-06 23:41:05','2023-04-06 23:41:05'),(12,'ab:1c:de:54:64:a5','$2y$10$oLJK.Ym90SzYsw9ki.m/UOnn9jFz0qjs4npr30Xn4q8N6O1/otiEm','2023-03-28',2,9,6.00,'2023-04-13 02:18:39','2023-04-13 02:18:39'),(13,'ab:1c:de:54:64:a3','$2y$10$cvVb7Lu1/G0.jHTlsJ7Qle2kV50hxAVCFf32oJUFn72gynrvRdeK2','2023-04-12',9,8,9.00,'2023-04-19 23:06:15','2023-04-19 23:06:15');
/*!40000 ALTER TABLE `batterys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bikes`
--

DROP TABLE IF EXISTS `bikes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bikes` (
  `bike_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned DEFAULT NULL,
  `mac` varchar(17) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sub_model` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reg_num` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `chassis_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_year` smallint NOT NULL,
  `date_of_purchase` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`bike_id`),
  KEY `bikes_user_id_foreign` (`user_id`),
  CONSTRAINT `bikes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bikes`
--

LOCK TABLES `bikes` WRITE;
/*!40000 ALTER TABLE `bikes` DISABLE KEYS */;
INSERT INTO `bikes` VALUES (3,NULL,'34:4a:76:35:ef:e2','nyel-3.8','xyz-748','AB527763gb2627','5784cd6763AB7373',2012,'2015-10-20','2023-03-14 05:09:26','2023-03-14 05:09:26'),(4,NULL,'34:4a:76:35:8e:e2','nyel-3.8','xyz-748','AE527763g47678','5784cd6763AB7373',2021,'2022-06-20','2023-03-14 05:10:13','2023-03-30 23:37:57'),(5,NULL,'ab:1c:de:54:64:ae','nyel-3.8e','abc-172','5364-7736-6777-7771','7373-9822-ab95-6382',2020,'2021-05-04','2023-03-16 04:42:04','2023-03-16 04:42:04'),(6,NULL,'ab:cd:34:6a:12:ae','nyel-3.8e','abc-172','agdv-yhd3-7373-9822','a66f-673f-w77f-7712',2022,'2022-07-27','2023-03-16 04:48:02','2023-03-16 04:48:02'),(7,NULL,'ab:1c:de:54:64:a5','nyel-3.8e','abc-172','5364-7736-6777-7771','7373-9822-ab95-6382',2020,'2020-12-31','2023-03-16 04:51:19','2023-03-30 23:38:14'),(8,NULL,'31:53:da:43:7e:64','nyel-3.8e','abc-172','5487-4687-3764-7727','5362-7746-3862-7811',2018,'2019-05-15','2023-03-20 03:23:14','2023-03-20 03:23:14'),(11,NULL,'12:4a:76:35:8e:e2','nyel-3.8','xyz-748','AE527763g47678','5784cd6763AB7373',2021,'2022-06-20','2023-04-06 00:29:28','2023-04-06 00:29:28'),(14,NULL,'ab:1c:de:54:64:72','nyel-3.8e','abc-172','5364-7736-6777-7771','a66f-673f-w77f-7712',2018,'2023-03-28','2023-04-13 02:17:05','2023-04-13 02:17:05'),(15,NULL,'AB:CD:EF:12:34:56','nyel-3.8e','abc-172','agdv-yhd3-7373-9822','7373-9822-ab95-6382',2020,'2021-06-16','2023-04-13 02:17:47','2023-04-13 02:17:47'),(16,20,'AB:12:34:56:78:9C','nyel-3.8e','abc-172','5364-7736-6777-7771','7373-9822-ab95-6382',2019,'2023-04-20','2023-04-17 02:24:34','2023-04-17 02:24:34'),(18,NULL,'ab:1c:de:54:64:a4','nyel-3.8e','abc-172','5364-7736-6777-7771','6356-8299-8789-0128',2020,'2023-04-06','2023-04-19 23:05:39','2023-04-19 23:05:39');
/*!40000 ALTER TABLE `bikes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(6,'2023_01_25_092937_add_is_verified_to_users',2),(7,'2023_01_31_102515_add_phone_number_to_users_table',3),(8,'2023_01_31_104937_add_phonenumber_to_users_table',4),(9,'2023_02_10_055646_change_columns_in_users_table',5),(10,'2023_02_10_060347_create_bikes_table',6),(11,'2023_02_10_064028_remove_phone_number_from_users_table',7),(12,'2023_02_10_065543_add_phone_to_users_table',8),(13,'2023_02_10_071013_add_phone_to_users_table',9),(14,'2023_02_10_071445_add_phone_to_users_table',10),(16,'2023_02_10_091842_create_bikes_table',12),(52,'2023_02_10_104223_create_batterys_table',13),(54,'2023_02_14_103952_create_bikes_table',13),(55,'2023_02_14_104242_add_phone_to_users_table',13),(56,'2023_02_16_064543_change_bikes_table_model_year_column_type',13),(57,'2023_02_16_065253_change_bikes_table_date_of_purchase_column_type',13),(60,'2023_02_27_102343_create_batterys_table',16),(62,'2023_03_08_050112_add_status_to_users',18),(72,'2014_10_12_100000_create_password_resets_table',19),(73,'2019_08_19_000000_create_failed_jobs_table',19),(74,'2019_12_14_000001_create_personal_access_tokens_table',19),(75,'2023_01_25_045042_create_admins_table',19),(76,'2023_02_16_101820_drop_personal_access_token_table',20),(77,'2023_02_27_110227_create_batterys_table',20),(78,'2023_03_14_092830_create_stations_table',21),(79,'2023_03_14_094637_create_users_table',21),(80,'2023_03_14_095100_create_bikes_table',22),(81,'2023_03_14_095422_create_bikes_table',23),(82,'2023_03_14_095738_add_status_to_users_table',24),(83,'2023_03_15_073645_create_stations_table',25),(84,'2023_03_15_095151_create_stations_table',26),(85,'2023_03_16_102513_create_stations_table',27),(86,'2023_04_03_055931_add_is_verified_to_users_table',28),(87,'2023_04_06_061612_add_status_to_users_table',29),(88,'2023_04_07_030133_drop_email_verified_at_from_users_table',30),(89,'2023_04_07_030635_create_admins_table',31),(90,'2023_04_07_031724_drop_email_verified_at_from_admins_table',32),(91,'2023_04_07_031803_drop_remember_token_from_admins_table',33),(92,'2023_04_07_032117_drop_personal_access_token_table',34),(93,'2023_04_07_033944_update__users_table',35),(94,'2023_04_07_035118_update_admins_table',35),(95,'2023_04_07_035529_update_stations_table',35),(96,'2023_04_07_041651_update_bikes_table',35),(97,'2023_04_07_042815_update_batterys_table',36),(98,'2023_04_07_053228_drop_remember_token_from_users_table',37),(99,'2023_04_07_053259_add_verification_code_to_users_table',38),(100,'2023_04_07_054024_add_verification_code_to_users_table',39);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
INSERT INTO `password_resets` VALUES ('user@abc.com','JXmvd2l5WFZuI1gzcm8wdRS3E2CisZ8WstgoJt8h','2023-03-30 00:45:41');
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stations`
--

DROP TABLE IF EXISTS `stations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stations` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `s_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(65) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `latitude` decimal(15,6) DEFAULT NULL,
  `longitude` decimal(15,6) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stations`
--

LOCK TABLES `stations` WRITE;
/*!40000 ALTER TABLE `stations` DISABLE KEYS */;
INSERT INTO `stations` VALUES (1,'Gulshan-e-Iqbal','Gulshan-e-Iqbal,Karachi,Sindh,Pakistan',24.951675,67.113697,'2023-03-16 06:06:01','2023-03-16 06:06:01'),(2,'Gulistan-e-Johar','Gulistan-e-Johar,Karachi,Sindh,Pakistan',24.936018,67.135899,'2023-03-16 06:06:55','2023-03-16 06:06:55'),(3,'North Nazimabad','North Nazimabad,Karachi,Sindh,Pakistan',24.910245,67.077156,'2023-03-16 06:08:15','2023-03-16 06:08:15'),(4,'North Karachi','North Karachi,Karachi,Sindh,Pakistan',24.982650,67.050938,'2023-03-16 06:09:25','2023-03-16 06:09:25'),(5,'Defense Phase-3','Defense Phase-3,Karachi,Sindh,Pakistan',24.940419,67.106035,'2023-03-16 06:11:04','2023-03-16 06:11:04'),(6,'Airport','Airport,Karachi,Sindh,Pakistan',24.967547,67.053205,'2023-03-16 06:16:00','2023-03-16 06:16:00'),(7,'Gulistan-e-Johar Block-6','Gulistan-e-Johar Block-6, Karachi, Sindh, Pakistan',24.940410,67.106047,'2023-03-16 06:17:23','2023-03-16 06:17:23');
/*!40000 ALTER TABLE `stations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(65) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_verified` tinyint(1) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `verification_code` mediumint DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'user4','user4@gmail.com','0311-8205289','$2y$10$.jDA3GbG4c/np6ZRteSKVe2JZ9EBueb/6Lh66QhGwh8wj2Sudit9q','2023-03-14 05:07:49','2023-04-17 00:17:45',0,0,NULL),(7,'user6','user6@abc.com','0312-8205263','$2y$10$Ge74kJ8/KcdUaUERWLvQnuhJ0jy36Tm7n.xJ2SsaXtY.tIkebv17u','2023-03-14 05:08:13','2023-04-13 02:54:23',0,0,NULL),(10,'user9','user9@xyz.com','0334-8291002','$2y$10$mWAXfze8zB4qaATYDmAbFuPf39eviREQBU/W04CnVJkbQF29Xfo1y','2023-03-29 02:18:01','2023-04-17 00:13:32',0,1,NULL),(11,'user10','user10@xyz.com','0334-8291002','$2y$10$nJwM6lZ65X672hWqgZAUGe2DIM.bp.MC/5GaczgyvsHRdOLomC/Nm','2023-03-29 21:41:39','2023-03-29 21:41:39',0,1,NULL),(12,'user11','user11@xyz.com','03348291002','$2y$10$nEIKVWINqaHjwuMixpyDresLF3.0v91aayqirp24wF9hO2yMh6d.y','2023-03-29 21:46:31','2023-03-29 21:46:31',0,1,NULL),(13,'Talal Alam','talalabhatti@gmail.com','0310-2389993','$2y$10$UE3iBorP6VdsPBHVSDHdFeHfPDxIuv2dlTDOsI9UUZ9rHX5HL7dHe','2023-03-30 01:26:06','2023-03-30 01:26:06',1,1,NULL),(14,'user12','user12@xyz.com','0334-8291002','$2y$10$B496OZ3YUOFmgApBKWseZe7T9rCbZydgQZf36ThgwguOS3hVFmBTG','2023-03-30 01:55:38','2023-03-30 01:55:38',0,1,NULL),(15,'user10','user10@abc.com','0334-8291002','$2y$10$ADL88ihK3/nk4okqq2i69u7a6Sx2SAD..alvQzZ.0Rzr4RzvGCPBy','2023-03-30 23:20:36','2023-03-30 23:20:36',0,1,NULL),(16,'user12','user12@abc.com','0334-8291002','$2y$10$8zXyod2FxGT/93AFbKnnAO2GUwpDqu4kJUbf2zNElMzTQcLZN622i','2023-03-30 23:25:12','2023-03-30 23:25:12',0,1,NULL),(17,'talal','talal@gmail.com','0331-8200038','$2y$10$hYedq.Luc9rRTHuUnNy1dOKuZvStQ50WQDqpiLoLro9bMkEpO0Z8q','2023-03-30 23:35:54','2023-03-30 23:35:54',0,1,NULL),(19,'aminah','aminah30akhtar3a@gmail.com','03126472829','$2y$10$H4RsD6pcYQknb38gKLuvV.l6nfi4bDo37co9CWUzRLQ0rMGHtj78K','2023-04-07 00:42:01','2023-04-07 00:42:01',0,1,552355),(20,'Talal','talalalambhatti@gmail.com','0310-2389993','$2y$10$t/1qPugnBwC2UF7mEM/7ueM5Cq8YXoll4u8ZkP1s6TZPvU8HqRZKK','2023-04-07 01:17:12','2023-04-13 22:23:36',1,0,NULL),(21,'aliya','aliya10akhtar3a@gmail.com','03126472829','$2y$10$wC81ki1Qrcb2s9wP2/4JFudCObIuK9e2OUQCBpY4jZBlJSIOdVr7C','2023-04-07 01:50:41','2023-04-13 01:41:09',0,0,809328),(22,'Talal','talabhatti@gmail.com','0310-2389993','$2y$10$mzk0l6lu0fFw5W.754xUSOxyhI7D7Iyvvx.4awK8yfGQXn6N0vn8m','2023-04-07 01:52:29','2023-04-07 01:52:29',0,1,952674),(23,'Talal','talbhatti@gmail.com','0310-2389993','$2y$10$WUbtXmJ38Z.Qxja8i6Cwj.KiNcM9bBWUdER/D8.nJXmZpsq7qRAj2','2023-04-07 01:52:59','2023-04-07 01:52:59',0,1,595934),(24,'Talal','talfdfsbhatti@gmail.com','0310-2389993','$2y$10$UurwzPdyaove9ZRJ4pBAaeOhLyGvD/j9bVmc0InNGO7xLWNd1Smrq','2023-04-07 01:53:18','2023-04-07 01:53:18',0,1,515068),(25,'Talal','talfdb@gmail.com','0310-2389993','$2y$10$WvLxlAGNo6Pav..roSiGzO6TM.fyBtrozTeQMNzTK3TOFZMT8dK3q','2023-04-07 01:53:46','2023-04-07 01:53:46',0,1,422054),(26,'Talal','talfdbasddas@gmail.com','0310-2389993','$2y$10$IfiXKLqkmsYcYu.hhHtamuapDbK1V5/ojL9UuMJnEV3rB.0ABc1qe','2023-04-07 01:54:26','2023-04-10 01:42:33',0,1,212612),(29,'test','test@gmail.com','03126472829','$2y$10$LXqZww9VlbgBs1So37mATeHiWEZRy4/RW7NRyBNnUcAQFB/ed3NOm','2023-04-13 01:38:03','2023-04-13 01:38:03',0,1,125234),(41,'Hashir','hashir@aim-motors.com','0331-4843765','$2y$10$xRkyKtIOlzLii6lKwJpsCu1.I8EercsD8sP8N0CI2o98J6uuusAcW','2023-04-17 02:30:47','2023-04-17 02:32:57',1,1,NULL),(45,'ayesha','ayesha15akhtar3a@gmail.com','03126472829','$2y$10$dSoBPuSWt4ER46hUmfkqHeSETJigZo6.TktrTdH/jbqmDNluXuAbG','2023-04-18 00:29:17','2023-04-18 00:29:28',1,1,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-20  9:48:23
