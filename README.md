# README Generator Project

![Demo Img](/preview/img1.png)

## 🚀 Project Overview

Welcome to the README Generator project! This innovative tool is designed to streamline the process of creating README files for software projects. By leveraging the power of generative AI, it allows users to input a brief description of their project, including its purpose, features, and technical details, and generates a well-structured and informative README.md file following best practices.

## 🌟 Features

- **User-friendly Interface**: The web interface provides an intuitive way to input project details and generate README files effortlessly.
- **Dynamic File Input**: Users can add multiple files with custom names and code snippets, enabling comprehensive documentation of project components.
- **Dynamic README Generation**: Automatically generate README files based on user input.
- **Generative AI Integration**: Utilizes the Generative AI model to generate README files based on user input, ensuring accuracy and relevancy.
- **Customizable Configuration**: Users can configure generation settings such as temperature, top p, top k, and safety settings to tailor the output according to their preferences.
- **AI-Powered Content**: Utilizes generative AI to create engaging and informative content.
- **Customizable**: Allows users to customize the README file according to their project's needs.
- **Emoji Support**: Enhances the README with emojis for a more engaging user experience.

## 🛠️ Technical Details

The README Generator project is built with a combination of Flask for the backend and Express.js for the frontend. It uses the Google Generative AI model to generate the README content, ensuring high-quality and relevant output.

### Backend (`app.py`)
The backend is responsible for handling the generation of the README content. It receives user input, processes it, and communicates with the generative AI model to generate the README.

### Frontend (`public/app.js`)
The frontend provides an interactive user interface for users to input their project details and generate the README. It communicates with the backend to send the user input and receive the generated README.

## 🚀 Getting Started

To run the README GPT 🤖 locally, follow these steps:

1. Clone the repository: `git clone https://github.com/chiragjoshi12/readme-generator.git`
2. Navigate to the project directory: `cd readme-generator`
3. Install dependencies:
   - For Flask backend:
     ```
     cd backend
     pip install -r requirements.txt
     ```
   - For Node.js frontend:
     ```
     cd public
     npm install
     ```
4. Set up environment variables:
   - Create a `.env` file in the `backend` directory and add your Generative AI API key:
     ```
     GENERATIVE_AI_API_KEY=your_api_key_here
     ```
5. Start the Flask server:
    ```python app.py```
6. Start the Node.js server for the frontend:


## 📝 Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Click on "Add File" to input your project details.
3. Fill in the file name and code sections.
4. Click on "Generate README" to generate your README file.

## 🤝 Contributing

Feel free to contribute and improve this project! 🚀

## 📧 Contact

If you have any questions or suggestions, feel free to reach out to Chirag Joshi at chirag.edutorai@gmail.com.

---

Made with ❤️ by [Chirag Joshi](https://github.com/chiragjoshi12)

Thank you for using the README GPT 🤖!
