SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


CREATE TABLE IF NOT EXISTS `advertisements` (
  'comp' INT NOT NULL,
  `id` int AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `titre` varchar(30) NOT NULL,
  `descshort` varchar(255) NOT NULL,
  `desclong` TEXT NOT NULL,
  `salary` float(10) NOT NULL,
  `place` varchar(255) NOT NULL,
  `workingTime` TEXT NOT NULL,
  `contrat` ENUM ('CDI','CDD','ALTERNANCE')
);
CREATE TABLE IF NOT EXISTS `companies` (
  `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `name` varchar(40) NOT NULL,
  `siret` varchar(25) NOT NULL,
  `nbEmploye` int NOT NULL,
  `desc` TEXT NOT NULL,
  `salary` float(10) NOT NULL,
  `link` TEXT NOT NULL,
  `logo` TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS `user` (
  `id` int AUTO_INCREMENT=3 NOT NULL PRIMARY KEY,
  `name` varchar(50) NOT NULL,
  `cv` TEXT NOT NULL,
  `mail` TEXT NOT NULL,
  `phone` int(10) NOT NULL,
  `ltmotiv` TEXT NOT NULL,
  `formation` TEXT NOT NULL,
  `contrat` ENUM ('CDI','CDD','ALTERNANCE')
);


ALTER TABLE `advertisements`
  ADD FOREIGN KEY (`id`);
