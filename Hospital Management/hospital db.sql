use hospital;

create table staff (
    staff_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    photo_url VARCHAR(255)
);

CREATE TABLE services (
    service_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20)
);

CREATE TABLE appointments (
    appointment_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    staff_id INT,
    service_id INT,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (staff_id) REFERENCES staff(staff_id),
    FOREIGN KEY (service_id) REFERENCES services(service_id)
);

insert into staff (name, email, photo_url) values 
("Charles Leclerc","charlesleclerc@email.com","https://yuzammed0.github.io/Hsopital/Hospital%20Management/image/leclerc.jpg"),
("Carlos Sainz","carlossainz@email.com","https://yuzammed0.github.io/Hsopital/Hospital%20Management/image/sainz.jpg"),
("Sebastian Vettel","sebastianvettel@email.com","https://yuzammed0.github.io/Hsopital/Hospital%20Management/image/vettel.jpg"),
("Kimi Raikkonen","theiceman@email.com","https://yuzammed0.github.io/Hsopital/Hospital%20Management/image/iceman.jpg"),
("Michael Schumacher","schumacher@email.com","https://yuzammed0.github.io/Hsopital/Hospital%20Management/image/schumacher.jpg"),
("Fernando Alonso","alonsofernando@email.com","https://yuzammed0.github.io/Hsopital/Hospital%20Management/image/alonso.jpg")
;

insert into services (name, description, price) values 
('Oral hygiene','1 hour',50),
('Periodontoloji','1 hour',20),
('Implants','1 hour 30 minutes',120),
('Ortodonti','1 hour 30 minutes',180),
('Radyology','1 hour 30 minutes',120)
;

insert into users (first_name, last_name, email, phone) values 
('Vafa', 'Habilova', 'vafakhanim@email.com', '055-555-55-55'),
('Yuzammed', 'Azizov', '100azizov@email.com', '055-550-50-50'),
('Gulnur', 'Salimova', 'sgulln@email.com', '077-777-77-77'),
('Melek', 'Haciyeva', 'angel777@email.com', '070-770-70-70'),
('Nuray', 'Muradxanli', 'greenlady@email.com', '090-999-99-99'),
('Nilay', 'Rzazade', 'wbutterfly@email.com', '090-990-90-90')
;

insert into appointments (user_id, staff_id, service_id, appointment_date, appointment_time) values 
(1, 3, 1, '2024-03-06', '09:30:00'),
(2, 4, 3, '2024-03-06', '10:00:00'),
(3, 1, 4, '2024-03-07', '14:30:00'),
(4, 5, 5, '2024-03-07', '16:00:00'),
(5, 2, 4, '2024-03-08', '09:30:00'),
(6, 6, 2, '2024-03-08', '10:00:00')
;

select*from staff;
select*from services;
select*from users;
select*from appointments;