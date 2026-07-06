from pydantic import BaseModel


class RoastRequest(BaseModel):
    resume_text: str


class RoastResponse(BaseModel):
    roast: str

# Validate data.