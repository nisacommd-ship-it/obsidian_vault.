-- Cloudflare D1: lead journal. Every request is stored here first.
CREATE TABLE IF NOT EXISTS leads (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at  TEXT NOT NULL,
  source      TEXT NOT NULL,
  lang        TEXT NOT NULL,
  name        TEXT NOT NULL,
  phone       TEXT NOT NULL,
  email       TEXT,
  payload     TEXT NOT NULL,
  ip_hash     TEXT,
  user_agent  TEXT,
  delivery    TEXT,
  attempts    INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS idx_leads_ip_time ON leads (ip_hash, created_at);
CREATE INDEX IF NOT EXISTS idx_leads_created ON leads (created_at);
