DROP SCHEMA IF EXISTS DashboardAPI;
CREATE SCHEMA IF NOT EXISTS DashboardAPI;

CREATE TABLE DashboardAPI.Users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL,
  email TEXT NOT NULL,
  level TEXT NOT NULL,
  password TEXT NOT NULL
);


INSERT INTO
  DashboardAPI.Users (username, email, level, password)
VALUES
  ("Silva", "silva@gmail.com", "SUP", "silva123");

INSERT INTO
  DashboardAPI.Users (username, email, level, password)
VALUES
  ("Jhosy", "jhosy@gmail.com", "SUP", "jhosy123");

INSERT INTO
  DashboardAPI.Users (username, email, level, password)
VALUES
  ("Esly", "esly@gmail.com", "SUP", "esly123");
