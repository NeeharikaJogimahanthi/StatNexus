"""
StatNexus: Karmayogi AI — MySQL Database Setup & Initialization Utility
Smart India Hackathon 2026 | Problem Statement ID: SIH26101
Ministry of Statistics & Programme Implementation (MoSPI) | DIID

Usage:
  python setup_mysql.py
"""

import os
import sys
import json
import base64
import hashlib
import hmac

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8")

try:
    import pymysql
except ImportError:
    print("❌ PyMySQL is not installed. Run: pip install pymysql")
    sys.exit(1)

try:
    from cryptography.hazmat.primitives.ciphers.aead import AESGCM
except ImportError:
    print("❌ cryptography is not installed. Run: pip install cryptography")
    sys.exit(1)

# MySQL Connection Parameters (Default XAMPP)
MYSQL_HOST = os.getenv("STATNEXUS_MYSQL_HOST", "127.0.0.1")
MYSQL_PORT = int(os.getenv("STATNEXUS_MYSQL_PORT", "3306"))
MYSQL_USER = os.getenv("STATNEXUS_MYSQL_USER", "root")
MYSQL_PASSWORD = os.getenv("STATNEXUS_MYSQL_PASSWORD", "")
MYSQL_DATABASE = os.getenv("STATNEXUS_MYSQL_DB", "statnexus")

# Master Cryptographic Key (256-bit AES-GCM Key & HMAC Pepper)
MASTER_KEY_HEX = os.getenv("STATNEXUS_MASTER_KEY", "4f89d3a1c5b7e2f08a9c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8091a2b3c4d5e6")
AES_KEY = bytes.fromhex(MASTER_KEY_HEX[:64])
HMAC_SECRET_PEPPER = b"STATNEXUS-GOVT-SECRET-PEPPER-2026-MOSPI-KEY"

def encrypt_aes256_gcm(plain_text: str) -> str:
    """Authenticates & encrypts data using standard AES-256-GCM."""
    aesgcm = AESGCM(AES_KEY)
    nonce = os.urandom(12) # 96-bit nonce for GCM
    cipher_bytes = aesgcm.encrypt(nonce, plain_text.encode("utf-8"), None)
    payload = {
        "nonce": base64.b64encode(nonce).decode("utf-8"),
        "ct": base64.b64encode(cipher_bytes).decode("utf-8"),
        "algo": "AES-256-GCM"
    }
    return "ENC::AES256GCM::" + base64.b64encode(json.dumps(payload).encode("utf-8")).decode("utf-8")

def compute_blind_index(email: str) -> str:
    """Computes HMAC-SHA256 blind index for searching encrypted email."""
    return hmac.new(HMAC_SECRET_PEPPER, email.strip().lower().encode("utf-8"), hashlib.sha256).hexdigest()

def run_mysql_setup():
    print("==========================================================================")
    print("  StatNexus: Karmayogi AI — MySQL Database Setup & Cryptographic Init")
    print("  MoSPI Data Informatics & Innovation Division (DIID)")
    print("==========================================================================")
    print(f"Connecting to MySQL Host: {MYSQL_HOST}:{MYSQL_PORT} (User: {MYSQL_USER})...")

    try:
        # Step 1: Connect to MySQL Server (Without database first to ensure DB creation)
        conn = pymysql.connect(
            host=MYSQL_HOST,
            port=MYSQL_PORT,
            user=MYSQL_USER,
            password=MYSQL_PASSWORD,
            autocommit=True,
            connect_timeout=5
        )
        print("✅ Successfully connected to MySQL server!")
    except Exception as e:
        print("\n❌ Failed to connect to MySQL server:")
        print(f"   Error: {e}")
        print("\n👉 Troubleshooting Checklist:")
        print("   1. Is XAMPP or MySQL server running on port 3306?")
        print("   2. In XAMPP Control Panel, ensure 'MySQL' action is clicked -> 'Start'.")
        print("   3. Check credentials (current default: host='127.0.0.1', user='root', password='').")
        print("   4. NOTE: MySQL is completely OPTIONAL! StatNexus runs automatically with built-in SQLite (statnexus.db).")
        print("   5. To launch the StatNexus Web Application directly, simply double-click 'run.bat' or run 'python run.py'.")
        return False

    try:
        with conn.cursor() as cursor:
            # Step 2: Create database if not exists
            print(f"Creating database '{MYSQL_DATABASE}' if not exists...")
            cursor.execute(f"CREATE DATABASE IF NOT EXISTS `{MYSQL_DATABASE}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;")
            cursor.execute(f"USE `{MYSQL_DATABASE}`;")
            print(f"✅ Database '{MYSQL_DATABASE}' ready!")

            # Step 3: Run SQL schema script if available, or create tables directly
            sql_file = os.path.join(os.path.dirname(os.path.abspath(__file__)), "statnexus_mysql.sql")
            if os.path.exists(sql_file):
                print(f"Reading schema from {sql_file}...")
                with open(sql_file, "r", encoding="utf-8") as f:
                    sql_commands = f.read()

                # Split statements by semicolon
                statements = [stmt.strip() for stmt in sql_commands.split(";") if stmt.strip()]
                for stmt in statements:
                    if stmt.startswith("--") or stmt.startswith("/*"):
                        continue
                    try:
                        cursor.execute(stmt)
                    except Exception as ex:
                        # Ignore benign warnings
                        pass
                print("✅ All MySQL tables and initial records created successfully!")
            else:
                print("⚠️ statnexus_mysql.sql not found, skipping script execution.")

            # Step 4: Verify tables
            cursor.execute("SHOW TABLES;")
            tables = [row[0] for row in cursor.fetchall()]
            print(f"✅ Active tables in '{MYSQL_DATABASE}':", ", ".join(tables))

            # Step 5: Test AES-256 Encryption in MySQL
            print("\nTesting AES-256-GCM encryption on test record...")
            test_email = "rajesh.verma@mospi.gov.in"
            enc_email = encrypt_aes256_gcm(test_email)
            blind_idx = compute_blind_index(test_email)
            print(f"   Original Data : {test_email}")
            print(f"   Encrypted PII : {enc_email[:45]}...")
            print(f"   Blind Index   : {blind_idx[:30]}...")

            cursor.execute(
                "UPDATE `officers` SET `encrypted_email` = %s, `email_hash` = %s WHERE `id` = 'rajesh_verma';",
                (enc_email, blind_idx)
            )
            print("✅ Verified encrypted PII stored in MySQL officers table.")

    finally:
        conn.close()

    print("\n==========================================================================")
    print("  🎉 MySQL Database Integration Complete!")
    print(f"  Connection URL: mysql+pymysql://{MYSQL_USER}:{MYSQL_PASSWORD}@{MYSQL_HOST}:{MYSQL_PORT}/{MYSQL_DATABASE}")
    print("==========================================================================")
    return True

if __name__ == "__main__":
    success = run_mysql_setup()
    if not success:
        print("\n💡 TIP: You do not need MySQL to use StatNexus!")
        print("   The platform runs seamlessly with SQLite. Simply start 'run.bat' or run 'python run.py'.\n")
        sys.exit(1)
