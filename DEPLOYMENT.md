Deployment Leitfaden
====================

Ziele
-----
- Reproduzierbare Deployments ohne Datenbank-Abhängigkeiten
- Portabler Betrieb via Docker/Compose oder Systemd

Docker (Empfohlen)
------------------
1. `.env`-Dateien im Ordner `backend/` befüllen (siehe `.env.example`).
2. Starten:
   ```bash
   docker compose up --build -d
   ```
3. Dienste:
   - Backend: Port 8000 (FastAPI/Uvicorn)
   - Frontend (Dev): Port 3000

Produktionshinweise
-------------------
- Frontend: Erstellen Sie einen statischen Build und servieren Sie ihn über einen Webserver oder CDN.
- Backend: Setzen Sie `ENVIRONMENT=production` und führen Sie Uvicorn/Gunicorn hinter einem Reverse Proxy (z.B. Nginx) aus.
- Logging/Monitoring: Verwenden Sie zentrale Logs (stdout) und überwachen Sie Liveness/Readiness.

Ohne Docker
-----------
Backend:
```bash
python -m venv .venv
. .venv/bin/activate
pip install -r backend/requirements.txt
uvicorn server:app --host 0.0.0.0 --port 8000 --app-dir backend
```

Frontend:
```bash
cd frontend
yarn install
yarn build
```

Konfiguration
-------------
- Umgebungen via `backend/.env.{development,staging,production}`
- Sensible Daten niemals commiten – `.env` ist ignoriert
