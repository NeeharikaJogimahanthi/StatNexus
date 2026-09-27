-- ============================================================================
-- StatNexus: Karmayogi AI — Official MoSPI DIID Database Schema (MySQL / XAMPP)
-- Smart India Hackathon 2026 | Problem Statement ID: SIH26101 | Theme: Smart Education
-- Organization: Ministry of Statistics & Programme Implementation (MoSPI)
-- Division: Data Informatics & Innovation Division (DIID)
--
-- Security Standard: DPDP Act 2023 Compliant | AES-256-GCM Cryptographic Storage
-- Compatibility: MySQL 5.7+, MySQL 8.0+, MariaDB 10.4+ (Standard XAMPP Environment)
-- ============================================================================

CREATE DATABASE IF NOT EXISTS `statnexus`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE `statnexus`;

SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------------------------------------------------------
-- 1. TABLE: officers (Parichay Suraksha Vault with Encrypted PII)
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `officers`;
CREATE TABLE `officers` (
  `id` VARCHAR(64) NOT NULL,
  `name` VARCHAR(128) NOT NULL,
  `designation` VARCHAR(128) NOT NULL,
  `department` VARCHAR(255) DEFAULT 'MoSPI - Data Informatics & Innovation Division (DIID)',
  `current_role` VARCHAR(255) NOT NULL,
  `experience_years` INT DEFAULT 5,
  `cadre` VARCHAR(64) NOT NULL,            -- ISS, SSS, FOD, Central
  `cadre_level` INT DEFAULT 4,             -- 1 to 5
  `division` VARCHAR(128) NOT NULL,         -- FOD, DPD, SDRD, CSO, NAD
  `active_survey` VARCHAR(255) NOT NULL,    -- PLFS Round 82, ASUSE, etc.
  
  -- Cryptographic & Security Fields
  `email_plain` VARCHAR(160) DEFAULT NULL, -- Masked preview (e.g. r****a@mospi.gov.in)
  `email_hash` VARCHAR(64) DEFAULT NULL,   -- HMAC-SHA256 Blind Index for deterministic equality lookup
  `encrypted_email` TEXT DEFAULT NULL,     -- AES-256-GCM Authenticated Ciphertext
  `govt_domain` VARCHAR(64) DEFAULT NULL,  -- e.g. mospi.gov.in, nic.in
  `domain_verified` TINYINT(1) DEFAULT 1,
  `sso_id` VARCHAR(128) DEFAULT 'PARICHAY-GOV-SSO-MOSPI',
  
  `diagnostic_completed` TINYINT(1) DEFAULT 0,
  `diagnostic_score` FLOAT DEFAULT 0.0,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_officers_email_hash` (`email_hash`),
  INDEX `idx_officers_govt_domain` (`govt_domain`),
  INDEX `idx_officers_cadre` (`cadre`, `cadre_level`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- 2. TABLE: uploaded_documents (PDF, PPTX, DOCX Ingestion & Encrypted Content)
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `uploaded_documents`;
CREATE TABLE `uploaded_documents` (
  `id` VARCHAR(64) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `original_filename` VARCHAR(255) NOT NULL,
  `file_type` VARCHAR(32) NOT NULL,          -- pdf, pptx, ppt, docx, txt
  `file_size_bytes` INT NOT NULL,
  `page_or_slide_count` INT DEFAULT 1,
  `word_count` INT DEFAULT 0,
  
  -- AES-256-GCM Encrypted Storage (DPDP Act 2023 Compliance)
  `encrypted_content` LONGTEXT DEFAULT NULL, -- AES-256-GCM encrypted raw extracted text
  `encrypted_summary` TEXT DEFAULT NULL,     -- AES-256-GCM encrypted executive summary
  
  -- Document Intelligence & Taxonomy JSON Fields
  `topics_json` TEXT DEFAULT NULL,           -- Extracted core topics & statutory concepts
  `competency_scores_json` TEXT DEFAULT NULL,-- 4-Domain MoSPI mapping scores
  `blooms_distribution_json` TEXT DEFAULT NULL, -- Bloom's Cognitive percentage distribution
  `analysis_report_json` LONGTEXT DEFAULT NULL, -- Full synthesized report payload
  
  `uploader_officer_id` VARCHAR(64) DEFAULT 'rajesh_verma',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_doc_uploader` (`uploader_officer_id`),
  INDEX `idx_doc_file_type` (`file_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- 3. TABLE: document_analyses (Slide-by-Slide & Deep Topic Intelligence)
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `document_analyses`;
CREATE TABLE `document_analyses` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `document_id` VARCHAR(64) NOT NULL,
  `executive_summary` TEXT NOT NULL,
  `readability_benchmark` VARCHAR(128) DEFAULT 'Official Civil Service Standard',
  `key_findings_json` TEXT DEFAULT NULL,
  `slide_breakdown_json` LONGTEXT DEFAULT NULL,  -- Array of {slide_no, title, takeaways, concepts}
  `recommended_courses_json` TEXT DEFAULT NULL, -- iGOT course matches for document gaps
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`document_id`) REFERENCES `uploaded_documents`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- 4. TABLE: quizzes (Bloom's Taxonomy MCQs Generated from Uploaded Materials)
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `quizzes`;
CREATE TABLE `quizzes` (
  `id` VARCHAR(64) NOT NULL,
  `document_id` VARCHAR(64) DEFAULT NULL,
  `title` VARCHAR(255) NOT NULL,
  `domain_category` VARCHAR(128) DEFAULT 'Statistical Competencies',
  `difficulty_tier` VARCHAR(64) DEFAULT 'Medium',
  `questions_json` LONGTEXT NOT NULL,          -- Array of Bloom's Taxonomy questions with citations
  `total_questions` INT DEFAULT 4,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_quizzes_doc` (`document_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- 5. TABLE: competencies (Officer 4-Domain Competency Tracking)
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `competencies`;
CREATE TABLE `competencies` (
  `id` VARCHAR(64) NOT NULL,
  `officer_id` VARCHAR(64) NOT NULL,
  `name` VARCHAR(128) NOT NULL,
  `current_score` FLOAT DEFAULT 50.0,
  `benchmark_score` FLOAT DEFAULT 80.0,
  `bloom_tier` VARCHAR(64) DEFAULT 'Apply',
  `domain_category` VARCHAR(128) DEFAULT 'Statistical Competencies',
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`officer_id`) REFERENCES `officers`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- 6. TABLE: govt_audit_ledger (DPDP Act 2023 Cryptographic & Access Audit Trail)
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `govt_audit_ledger`;
CREATE TABLE `govt_audit_ledger` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `officer_id` VARCHAR(64) NOT NULL,
  `event_type` VARCHAR(64) NOT NULL,          -- REGISTRATION, AES_ENCRYPT, DOC_UPLOAD, DOC_ANALYSE, TEST_SUBMIT
  `email_domain` VARCHAR(64) NOT NULL,
  `blind_index` VARCHAR(64) NOT NULL,
  `ip_address` VARCHAR(64) DEFAULT '10.24.180.12 (Govt NICNET)',
  `verification_method` VARCHAR(64) DEFAULT 'AES256_GCM_AUTHENTICATED',
  `status` VARCHAR(32) DEFAULT 'SUCCESS',
  `details` TEXT DEFAULT NULL,
  `timestamp` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_audit_officer` (`officer_id`),
  INDEX `idx_audit_event` (`event_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;

-- ----------------------------------------------------------------------------
-- SEED INITIAL DATA: Official MoSPI Officers & Directory
-- ----------------------------------------------------------------------------
INSERT INTO `officers` (
  `id`, `name`, `designation`, `department`, `current_role`, `experience_years`,
  `cadre`, `cadre_level`, `division`, `active_survey`,
  `email_plain`, `email_hash`, `encrypted_email`, `govt_domain`, `domain_verified`, `sso_id`,
  `diagnostic_completed`, `diagnostic_score`
) VALUES 
(
  'rajesh_verma',
  'Dr. Rajesh Verma, ISS',
  'Director / Regional Operations Head',
  'Ministry of Statistics & Programme Implementation (MoSPI)',
  'Coordination of PLFS Round 82 Scrutiny & SNA 2025 Transition Framework',
  14,
  'ISS',
  4,
  'Data Informatics & Innovation Division (DIID)',
  'PLFS Round 82 & ASUSE',
  'r****a@mospi.gov.in',
  'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
  'ENC::AES256GCM::eyJub25jZSI6ICIxMkJ5dGVOb25jZTEyMyIsICJjdCI6ICJleGFtcGxlQ2lwaGVydGV4dDI1NnNlY3VyZSIgfQ==',
  'mospi.gov.in',
  1,
  'PARICHAY-SSO-MOSPI-RV-9921',
  1,
  85.0
),
(
  'priya_sharma',
  'Smt. Priya Sharma, ISS',
  'Joint Director',
  'Ministry of Statistics & Programme Implementation (MoSPI)',
  'Gross Capital Formation & Digital Asset IPP Valuation',
  11,
  'ISS',
  4,
  'National Accounts Division (NAD / CSO)',
  'Annual Estimates of GDP & GCF',
  'p****a@mospi.gov.in',
  '12a3b4c5d6e7f8091a2b3c4d5e6f708192a3b4c5d6e7f8091a2b3c4d5e6f7081',
  'ENC::AES256GCM::eyJub25jZSI6ICIxMkJ5dGVOb25jZTEyNCIsICJjdCI6ICJleGFtcGxlQ2lwaGVydGV4dDI1NnNlY3VyZTIiIH0=',
  'mospi.gov.in',
  1,
  'PARICHAY-SSO-MOSPI-PS-8842',
  0,
  0.0
);

-- Seed Initial Competencies for Officer rajesh_verma
INSERT INTO `competencies` (`id`, `officer_id`, `name`, `current_score`, `benchmark_score`, `bloom_tier`, `domain_category`) VALUES
('comp_1', 'rajesh_verma', 'Multistage Sampling & Frame Validation', 75.0, 85.0, 'Analyze', 'Statistical Competencies'),
('comp_2', 'rajesh_verma', 'SNA 2025 Intellectual Property Capitalization', 62.0, 80.0, 'Evaluate', 'Statistical Competencies'),
('comp_3', 'rajesh_verma', 'Python Automated Microdata Scrutiny', 45.0, 85.0, 'Apply', 'Technical Competencies'),
('comp_4', 'rajesh_verma', 'Digital Signatures & DPDP Act Data Privacy', 88.0, 90.0, 'Evaluate', 'Digital Governance'),
('comp_5', 'rajesh_verma', 'Field Team Leadership & Stakeholder Ethics', 82.0, 80.0, 'Apply', 'Behavioural and Managerial');

-- Seed Initial Audit Ledger Entry
INSERT INTO `govt_audit_ledger` (
  `officer_id`, `event_type`, `email_domain`, `blind_index`, `ip_address`, `verification_method`, `status`, `details`
) VALUES (
  'rajesh_verma',
  'SYSTEM_INITIALIZATION',
  'mospi.gov.in',
  'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
  '10.24.180.12 (Govt NICNET)',
  'AES256_GCM_INITIALIZED',
  'SUCCESS',
  'MySQL Database and Parichay Suraksha Vault schema initialized successfully.'
);
