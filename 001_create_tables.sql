-- 001_create_tables.sql
-- Создание таблиц для электронного меню кофейни (MySQL)

SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE IF NOT EXISTS languages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(10) NOT NULL UNIQUE,  -- 'ru', 'en'
  name VARCHAR(64) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name JSON NOT NULL,                 -- {"ru":"Кофе","en":"Coffee"}
  image_url VARCHAR(1000) NULL,
  thumb_url VARCHAR(1000) NULL,       -- опционально: миниатюра
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category_id INT NOT NULL,
  name JSON NOT NULL,                 -- {"ru":"Эспрессо","en":"Espresso"}
  description JSON NULL,              -- {"ru":"...","en":"..."}
  price DECIMAL(9,2) NOT NULL DEFAULT 0.00,
  image_url VARCHAR(1000) NULL,
  is_available TINYINT(1) DEFAULT 1,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Таблица для аналитики (опционально)
CREATE TABLE IF NOT EXISTS menu_events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ref VARCHAR(255) NULL, -- ref from QR e.g. table12
  action VARCHAR(64) NOT NULL, -- 'view_category','view_item'
  category_id INT NULL,
  item_id INT NULL,
  user_agent VARCHAR(1000) NULL,
  ip VARCHAR(100) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


SET FOREIGN_KEY_CHECKS = 1;


-- 002_seed_languages.sql
INSERT INTO languages (code, name) VALUES
('ru','Русский'),
('en','English')
ON DUPLICATE KEY UPDATE name = VALUES(name);
