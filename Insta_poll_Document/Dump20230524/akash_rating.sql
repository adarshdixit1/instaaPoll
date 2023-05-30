CREATE DATABASE  IF NOT EXISTS `akash` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `akash`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: akash
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rating` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Participant` varchar(50) NOT NULL,
  `RatingPoint` int DEFAULT NULL,
  `CreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
INSERT INTO `rating` VALUES (1,'1',2,'2023-05-22 07:07:02'),(2,'2',3,'2023-05-22 07:07:02'),(3,'3',5,'2023-05-22 07:07:02'),(4,'1',NULL,'2023-05-22 10:05:45'),(5,'2',NULL,'2023-05-22 10:05:45'),(6,'3',NULL,'2023-05-22 10:05:45'),(7,'4',4,'2023-05-22 10:05:45'),(8,'5',3,'2023-05-22 13:29:40'),(9,'6',3,'2023-05-22 13:29:40'),(10,'7',3,'2023-05-22 13:29:40'),(11,'8',4,'2023-05-22 13:29:40'),(12,'1',4,'2023-05-23 04:57:26'),(13,'2',5,'2023-05-23 04:57:26'),(14,'3',4,'2023-05-23 04:57:26'),(15,'4',4,'2023-05-23 04:57:26'),(16,'9',5,'2023-05-23 04:57:26'),(17,'10',2,'2023-05-23 05:00:46'),(18,'11',4,'2023-05-23 05:00:46'),(19,'12',4,'2023-05-23 05:00:46'),(20,'13',3,'2023-05-23 05:00:46'),(21,'1',5,'2023-05-23 05:07:46'),(22,'2',4,'2023-05-23 05:07:46'),(23,'3',5,'2023-05-23 05:07:46'),(24,'4',3,'2023-05-23 05:07:46'),(25,'9',5,'2023-05-23 05:07:46'),(26,'1',5,'2023-05-23 05:10:05'),(27,'2',4,'2023-05-23 05:10:05'),(28,'3',5,'2023-05-23 05:10:05'),(29,'4',4,'2023-05-23 05:10:05'),(30,'9',5,'2023-05-23 05:10:05'),(31,'1',5,'2023-05-23 05:15:48'),(32,'2',4,'2023-05-23 05:15:48'),(33,'3',5,'2023-05-23 05:15:48'),(34,'4',2,'2023-05-23 05:15:48'),(35,'9',4,'2023-05-23 05:15:48'),(36,'1',5,'2023-05-23 05:16:36'),(37,'2',4,'2023-05-23 05:16:36'),(38,'3',5,'2023-05-23 05:16:36'),(39,'4',2,'2023-05-23 05:16:36'),(40,'9',4,'2023-05-23 05:16:36'),(41,'1',5,'2023-05-23 05:24:33'),(42,'2',4,'2023-05-23 05:24:34'),(43,'3',4,'2023-05-23 05:24:34'),(44,'4',4,'2023-05-23 05:24:34'),(45,'9',5,'2023-05-23 05:24:34'),(46,'1',3,'2023-05-23 05:32:27'),(47,'2',4,'2023-05-23 05:32:27'),(48,'3',3,'2023-05-23 05:32:27'),(49,'4',4,'2023-05-23 05:32:27'),(50,'9',4,'2023-05-23 05:32:27'),(51,'1',5,'2023-05-23 05:37:31'),(52,'2',4,'2023-05-23 05:37:31'),(53,'3',3,'2023-05-23 05:37:31'),(54,'4',2,'2023-05-23 05:37:31'),(55,'9',1,'2023-05-23 05:37:31'),(56,'14',5,'2023-05-23 05:37:31'),(57,'5',5,'2023-05-23 11:14:12'),(58,'6',5,'2023-05-23 11:14:12'),(59,'7',3,'2023-05-23 11:14:12'),(60,'8',5,'2023-05-23 11:14:12');
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-24  9:43:23