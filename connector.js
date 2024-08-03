const button = document.getElementById('post-btn');

button.addEventListener('click', async _ => {
  const inputBox = document.getElementById('input-box');
  const prompt = inputBox.value; // Get the value from the text box

  try {     
    const response = await fetch('https://replit.com/@PrestonCheng1/Generative-Text-AI-Cohere#main.py', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: prompt // Send the prompt to the backend
      })
    });
    const data = await response.json();
    console.log('Completed!', data);
  } catch(err) {
    console.error(`Error: ${err}`);
  }
});
