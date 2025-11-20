-- 002_seed_languages.sql
INSERT INTO languages (code, name) VALUES
('ru','Русский'),
('en','English')
ON DUPLICATE KEY UPDATE name = VALUES(name);
