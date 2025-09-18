# Projekt-Backup und Portabilitäts-Setup

Dieses Repository enthält eine plattformunabhängige Beispiel-Webanwendung mit einem React-Frontend und einem FastAPI-Backend. Der Code wurde bereinigt, entbrandet und so strukturiert, dass er leicht wartbar, portabel und ohne Datenbank betrieben werden kann.

## Inhalt
- Überblick & Ziele
- Installation & Setup
- Verwendung
- Ordnerstruktur
- Abhängigkeiten
- Konfiguration (ENV, dev/staging/prod)
- Docker & Compose
- Tests
- Sicherheit & Best Practices
- Troubleshooting
- Contribution Guidelines

## Überblick & Ziele
- Entfernte Marken/Wasserzeichen, insbesondere „made with Emergent“ (keine Vorkommen vorhanden).
- Entfernte MongoDB/DB-Anbindungen. Backend ist nun vollständig datenbankfrei (In-Memory-Mocks).
- Einheitliche Struktur, Dokumentation, Linting-Konfigurationen und Docker-Support.

## Installation & Setup

Voraussetzungen:
- Node.js >= 18 (für das Frontend)
- Python 3.11 (für das Backend)

Backend installieren:
```bash
python -m venv .venv
. .venv/bin/activate
pip install -r backend/requirements.txt
```

Frontend installieren:
```bash
cd frontend
yarn install
```

## Verwendung

Backend starten (Entwicklung):
```bash
uvicorn server:app --host 0.0.0.0 --port 8000 --reload --app-dir backend
```

Frontend starten (Entwicklung):
```bash
cd frontend
yarn start
```

Standard-Endpoints:
- GET `/api/` – Healthcheck
- POST `/api/status` – Status anlegen (Mock)
- GET `/api/status` – Statusliste (Mock)
- POST `/api/contact` – Kontaktformular (loggt E-Mail-Inhalt)

## Ordnerstruktur
```
backend/        # FastAPI App, ENV-Dateien, Dockerfile
frontend/       # React App (CRA + CRACO)
tests/          # Pytest-Tests für Backend-Endpoints
docs/           # Zusätzliche Dokumentation (API)
```

## Abhängigkeiten
- Backend: FastAPI, Uvicorn, Pydantic, python-dotenv, aiosmtplib u.a. (siehe `backend/requirements.txt`).
- Frontend: CRA/CRACO, React 19, TailwindCSS, ESLint 9 u.a. (siehe `frontend/package.json`).

Versionen sind festgepinnt bzw. mit minimalen Bounds dokumentiert.

## Konfiguration
Umgebungsvariablen werden in `backend/.env*` verwaltet.

Beispiel (`backend/.env.example`):
```
ENVIRONMENT=development
CORS_ORIGINS=*
```

Spezifische Dateien (optional):
- `backend/.env.development`
- `backend/.env.staging`
- `backend/.env.production`

Der Server lädt zunächst die spezifische Datei (falls vorhanden) und dann `.env` als Fallback.

## Docker & Compose

Backend-Image bauen und starten:
```bash
docker compose up --build
```

Dies startet:
- Backend auf Port 8000
- Frontend (Dev-Server) auf Port 3000

Siehe `DEPLOYMENT.md` für Produktionshinweise.

## Tests
```bash
pytest -q
```

## Sicherheit & Best Practices
- Keine Secrets im Repo; `.env` ist git-ignoriert. Verwenden Sie `.env.example` als Vorlage.
- Eingaben werden serverseitig validiert (Pydantic). Fehler werden protokolliert.
- Linting/Formatierung: Black, isort, Flake8, ESLint. Siehe `pyproject.toml` und `.flake8`.

## Troubleshooting
- Port bereits belegt: Passen Sie Ports in `docker-compose.yml` oder Startbefehlen an.
- CORS-Probleme: Setzen Sie `CORS_ORIGINS` in den `.env`-Dateien (z.B. `http://localhost:3000`).

## Contribution Guidelines
Siehe `CONTRIBUTING.md`.
