CREATE DATABASE personal_profile;

CREATE TABLE files (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    content BYTEA NOT NULL,
    created_at TIMESTAMP NOT NULL
);

CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    url TEXT NOT NULL,
    group_name TEXT NOT NULL
);
