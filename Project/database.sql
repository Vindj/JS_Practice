CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
);
CREATE TABLE meetups(
    meet_id SERIAL PRIMARY KEY,
    subject VARCHAR(255),
    description VARCHAR(255),
    tags VARCHAR(150),
    time TIME,
    date DATE,
    place VARCHAR(20),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);
    -- "subject":"Google Meet UP", 
    -- "description":"First Modsen meet up with new students", 
    -- "tags":"#introduction#MEETUP#GoogleMeetUp", 
    -- "time":"10:00:00", 
    -- "date": "1/8/1999", 
    -- "place": "Offline", 
    -- "user_id":1

