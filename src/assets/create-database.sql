IF db_id('NEWSPACE') IS NULL 
    CREATE DATABASE NEWSPACE

GO

use NEWSPACE

create table NEWSPACE.dbo.Users(
    UserId VARCHAR NOT NULL PRIMARY KEY,
    UserName VARCHAR,
    LastName VARCHAR,
    Email VARCHAR,
    Avatar VARCHAR
);

create table NEWSPACE.dbo.Addresses(
    AddressId INT NOT NULL IDENTITY PRIMARY KEY,
    UserID VARCHAR,
    StreetName VARCHAR,
    City VARCHAR,
    County VARCHAR,
    AddressState VARCHAR,
    Country VARCHAR

    FOREIGN KEY (UserId) REFERENCES Users(UserId)
);

create table NEWSPACE.dbo.Finances(
    FinanceId INT NOT NULL IDENTITY PRIMARY KEY,
    UserID VARCHAR,
    Account VARCHAR,
    AccountName VARCHAR,
    Amount VARCHAR,
    CreditCardNumber VARCHAR,
    CreditCardCVV VARCHAR,
    BitcoinAddress VARCHAR

    FOREIGN KEY (UserId) REFERENCES Users(UserId)
);