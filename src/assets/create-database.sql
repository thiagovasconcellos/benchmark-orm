IF db_id('NEWSPACE') IS NULL 
    CREATE DATABASE NEWSPACE

GO

use NEWSPACE

create table NEWSPACE.dbo.Users(
    UserId VARCHAR(50) NOT NULL PRIMARY KEY,
    UserName VARCHAR(255),
    LastName VARCHAR(255),
    Email VARCHAR(255),
    Avatar VARCHAR(255),
);

create table NEWSPACE.dbo.Addresses(
    AddressId INT NOT NULL IDENTITY PRIMARY KEY,
    UserID VARCHAR(50),
    StreetName VARCHAR(255),
    City VARCHAR(255),
    County VARCHAR(255),
    AddressState VARCHAR(255),
    Country VARCHAR(255)

    FOREIGN KEY (UserId) REFERENCES Users(UserId)
);

create table NEWSPACE.dbo.Finances(
    FinanceId INT NOT NULL IDENTITY PRIMARY KEY,
    UserID VARCHAR(50),
    Account VARCHAR(255),
    AccountName VARCHAR(255),
    Amount VARCHAR(255),
    CreditCardNumber VARCHAR(255),
    CreditCardCVV VARCHAR(255),
    BitcoinAddress VARCHAR(255)

    FOREIGN KEY (UserId) REFERENCES Users(UserId)
);