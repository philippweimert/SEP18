"""FastAPI backend application providing health/status endpoints and a contact form API.

This module is intentionally database-agnostic. It uses in-memory stubs and logging
to keep the app portable across environments. Configuration is loaded via .env files
with support for environment-specific overrides.
"""

from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime

ROOT_DIR = Path(__file__).parent
# Load environment variables with environment-aware precedence.
# If ENVIRONMENT is set (development|staging|production), load corresponding .env file first.
# Fallback to .env in the backend directory. This keeps configuration portable and explicit.
environment_name = os.environ.get('ENVIRONMENT', '').strip().lower()
if environment_name:
    env_file_candidate = ROOT_DIR / f".env.{environment_name}"
    if env_file_candidate.exists():
        load_dotenv(env_file_candidate)

# Always attempt to load base .env last so it can provide defaults without overriding specific envs
load_dotenv(ROOT_DIR / '.env')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    """Represents a simple status/heartbeat record for a client."""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    """Input model for creating a new status/heartbeat record."""
    client_name: str

class ContactForm(BaseModel):
    """Payload for contact form submissions."""
    name: str
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    message: str

# Email configuration
async def send_email(contact_data: ContactForm):
    """Send contact form data via email.

    Note: This implementation logs the message for demonstration purposes.
    In production, integrate an SMTP or transactional email provider.
    """
    try:
        # Email body
        body = f"""
Neue Kontaktanfrage über die Website:

Name: {contact_data.name}
E-Mail: {contact_data.email}
Unternehmen: {contact_data.company or 'Nicht angegeben'}
Telefon: {contact_data.phone or 'Nicht angegeben'}

Nachricht:
{contact_data.message}

---
Gesendet am: {datetime.now().strftime('%d.%m.%Y um %H:%M:%S')}
"""
        
        # Log the email content for now (in production, this would actually send)
        logger.info(f"Contact form submission: {body}")
        
        return {"status": "success", "message": "Nachricht erfolgreich gesendet"}
        
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        raise HTTPException(status_code=500, detail="Fehler beim Senden der Nachricht")

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    """Health check endpoint to verify the API is running."""
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    """Create and return a new status check object (mocked persistence)."""
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    # Mock database insertion
    logger.info(f"Mock status check created: {status_obj.dict()}")
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    """Return a list of mock status checks (no database required)."""
    # Mock database fetch
    logger.info("Mocking fetching status checks.")
    mock_checks = [
        StatusCheck(client_name="Mock Client 1"),
        StatusCheck(client_name="Mock Client 2")
    ]
    return mock_checks

@api_router.post("/contact")
async def submit_contact_form(contact_data: ContactForm):
    """Handle a contact form submission by delegating to the email helper."""
    """Handle contact form submission"""
    try:
        result = await send_email(contact_data)
        return result
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Unexpected error in contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Ein unerwarteter Fehler ist aufgetreten")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)
