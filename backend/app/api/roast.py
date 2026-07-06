from fastapi import APIRouter, UploadFile, File

from app.models.roast_models import RoastRequest, RoastResponse
from app.services.roast_service import RoastService
from app.services.pdf_service import extract_pdf_text

router = APIRouter()
roast_service = RoastService()


# TEXT ROAST
@router.post("/roast", response_model=RoastResponse)
def roast_resume(request: RoastRequest):
    roast = roast_service.generate_roast(request.resume_text)
    return RoastResponse(roast=roast)


# PDF ROAST
@router.post("/roast-pdf")
async def roast_pdf(file: UploadFile = File(...)):
    pdf_text = extract_pdf_text(file.file)
    roast = roast_service.generate_roast(pdf_text)

    return {"roast": roast}