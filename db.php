<?php
/**
 * StatNexus — Database Connection (XAMPP / MySQL)
 * Smart India Hackathon 2026 | Problem Statement ID: SIH26101
 * 
 * Configured for standard XAMPP environment:
 * Host: localhost
 * User: root
 * Password: (empty)
 * Database: statnexus
 */

$host = 'localhost';
$db   = 'statnexus';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    // Graceful fallback for local development without active MySQL service
    $pdo = null;
}

function getDatabaseConnection() {
    global $pdo;
    return $pdo;
}
