create database superHeroiDB;
use superHeroiDB;
create table tb_super_heroi(
id_super_heroi int primary key auto_increment,
nm_super_heroi varchar(100),
ds_super_poder varchar(200),
bt_fogo boolean
);
create table tb_Herois(
id_super_heroi int primary key auto_increment,
id_Heroi int,
nm_super_heroi varchar(100),
ds_super_poder varchar(200),
bt_fogo boolean
)