from fastapi.testclient import TestClient
from backend.server import app

client = TestClient(app)


def test_health_root():
    response = client.get("/api/")
    assert response.status_code == 200
    assert response.json().get("message") == "Hello World"


def test_create_status():
    response = client.post("/api/status", json={"client_name": "Tester"})
    assert response.status_code == 200
    body = response.json()
    assert body.get("client_name") == "Tester"
    assert "id" in body
    assert "timestamp" in body


def test_get_status_list():
    response = client.get("/api/status")
    assert response.status_code == 200
    assert isinstance(response.json(), list)


def test_contact_form():
    response = client.post(
        "/api/contact",
        json={
            "name": "Alice",
            "email": "alice@example.com",
            "company": None,
            "phone": None,
            "message": "Hallo",
        },
    )
    assert response.status_code == 200
    assert response.json().get("status") == "success"
