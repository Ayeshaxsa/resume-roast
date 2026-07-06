from openai import OpenAI

from app.config.settings import OPENAI_API_KEY
from app.prompts.roast_prompt import ROAST_PROMPT

class RoastService:
    def __init__(self):
        self.client = OpenAI(api_key=OPENAI_API_KEY)

    def generate_roast(self, resume_text: str):

        prompt = ROAST_PROMPT.format(resume=resume_text)

        response = self.client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )

        return response.choices[0].message.content
# does work- call openai, generate roast, process op