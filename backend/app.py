from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
import google.generativeai as genai

app = Flask(__name__)

# Load API key from .env file
load_dotenv()
API_KEY = os.getenv("GENERATIVE_AI_API_KEY")

# Initialize the generative AI model
genai.configure(api_key=API_KEY)

generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 0,
  "max_output_tokens": 8192,
}

safety_settings = [
  {
    "category": "HARM_CATEGORY_HARASSMENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_HATE_SPEECH",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
]

system_instruction = "You are an expert at generating README.md files for software projects. Given a brief description of a project, including its purpose, features, and technical details, you will produce a well-structured and informative README.md file following best practices. Use emoji if need"

model = genai.GenerativeModel(model_name="gemini-1.5-pro-latest",
                              generation_config=generation_config,
                              system_instruction=system_instruction,
                              safety_settings=safety_settings)

@app.route('/generate-readme', methods=['POST'])
def generate_readme():
    # Get input prompt from request
    user_input = request.json['files']  # Assuming 'files' is a list of dictionaries containing file name and code
    
    # Constructing prompt from user input
    prompt_template = "\n".join([f"{file['name']}:\n{file['code']}\n" for file in user_input])
    
    # Start chat with the model
    convo = model.start_chat(history=[{"role": "user", "parts": [prompt_template + "Generate one readme.md file"]}])
    
    # Generate README.md
    convo.send_message(prompt_template)
    generated_readme = convo.last.text
    
    return jsonify({'readme': generated_readme})

if __name__ == '__main__':
    app.run(debug=True)
