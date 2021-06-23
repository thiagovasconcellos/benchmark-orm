version: "3"
services:
    db:
        image: "microsoft/mssql-server-linux"
        environment:
            SA_PASSWORD: "your_password1!"
            ACCEPT_EULA: "Y"