# API Dokumentation

Basis-URL: `http://localhost:8000`

## GET /api/
- Beschreibung: Healthcheck
- Antwort: `{ "message": "Hello World" }`

## POST /api/status
- Beschreibung: Legt einen Status (Mock) an
- Request JSON:
-
```
{ "client_name": "string" }
```
- Antwort JSON:

```
{ "id": "uuid", "client_name": "string", "timestamp": "ISO-8601" }
```

## GET /api/status
- Beschreibung: Liefert eine Mock-Liste von Status-Objekten
- Antwort: Array von `StatusCheck`

## POST /api/contact
- Beschreibung: Kontaktformular; Inhalt wird geloggt
- Request JSON:

```
{ "name": "string", "email": "string", "company": "string|null", "phone": "string|null", "message": "string" }
```
- Antwort JSON:

```
{ "status": "success", "message": "Nachricht erfolgreich gesendet" }
```
