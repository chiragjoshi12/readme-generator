document.addEventListener('DOMContentLoaded', () => {
    const addFileButton = document.getElementById('add-file');
    const generateReadmeButton = document.getElementById('generate-readme');
    const fileContainer = document.getElementById('file-container');
    const generatedReadme = document.getElementById('generated-readme');

    addFileButton.addEventListener('click', () => {
        const fileInput = document.createElement('div');
        fileInput.className = 'file-input';
        fileInput.innerHTML = `
            <input type="text" placeholder="File Name" class="file-name">
            <textarea placeholder="File Code" class="file-code"></textarea>
            <button class="delete-file">Delete File</button>
        `;
        fileContainer.appendChild(fileInput);

        // Add event listener to the delete button
        fileInput.querySelector('.delete-file').addEventListener('click', () => {
            fileContainer.removeChild(fileInput);
        });
    });

    generateReadmeButton.addEventListener('click', async () => {
        const files = Array.from(fileContainer.querySelectorAll('.file-input')).map(input => ({
            name: input.querySelector('.file-name').value,
            code: input.querySelector('.file-code').value
        }));

        const response = await fetch('/generate-readme', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ files })
        });

        const data = await response.json();
        generatedReadme.textContent = data.readme;
    });
});
