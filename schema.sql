CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    name TEXT NOT NULL,
    interests TEXT[]
);

CREATE TABLE clubs (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    interests TEXT[]
);

CREATE TABLE discussions (
    id SERIAL PRIMARY KEY,
    club_id INTEGER REFERENCES clubs(id),
    user_id INTEGER REFERENCES students(id),
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
