CREATE TABLE IF NOT EXISTS t_p30140941_sky_research_initiat.works (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  image_url TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMP DEFAULT NOW()
);