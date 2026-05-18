const urlParams = new URLSearchParams(window.location.search);
const promptText = urlParams.get('prompt');

if (promptText) {
  // Gemini's UI takes a moment to load, so we check repeatedly for the input box
  const checkInterval = setInterval(() => {
    // Look for Gemini's rich text input area
    const inputBox = document.querySelector('.ql-editor') || document.querySelector('rich-textarea div[contenteditable="true"]');
    
    if (inputBox) {
      clearInterval(checkInterval); // Stop checking once we find it
      
      inputBox.focus();
      
      // Using execCommand properly triggers the underlying framework's input events
      document.execCommand('insertText', false, promptText);
      
      // Clean up the URL so it doesn't re-paste if you manually refresh the page later
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, 500);

  // Stop trying after 10 seconds to prevent infinite loops if the UI changes
  setTimeout(() => clearInterval(checkInterval), 10000);
}
