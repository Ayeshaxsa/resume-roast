from pypdf import PdfReader
import io

def extract_pdf_text(file) -> str:
    reader = PdfReader(file)

    text_parts = []

    for page in reader.pages:
        text = page.extract_text()
        if text:
            text_parts.append(text)

    return "\n\n".join(text_parts)