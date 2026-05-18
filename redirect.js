browser.spacesToolbar.addButton('GoogleGemini', {
    title: "Google Gemini",
    defaultIcons: "skin/google_gemini_icon.svg",
    url: "https://gemini.google.com/"
});

browser.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    for (let header of details.requestHeaders) {
      if (header.name.toLowerCase() === "user-agent") {
        header.value = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:147.0) Gecko/20100101 Firefox/147.0";
        break;
      }
    }
    return { requestHeaders: details.requestHeaders };
  },
  { urls: ["https://gemini.google.com/*", "https://*.google.com/*"] },
  ["blocking", "requestHeaders"]
);

// Create the context menu item
browser.menus.create({
  id: "send-to-gemini",
  title: "Send to Gemini: \"%s\"",
  contexts: ["selection"]
});

// Add a listener for when the menu item is clicked
browser.menus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "send-to-gemini" && info.selectionText) {
    // Encode the selected text
    const query = encodeURIComponent(info.selectionText);
    
    // Open Gemini with our custom URL parameter
    const geminiUrl = `https://gemini.google.com/app?prompt=${query}`;
    browser.tabs.create({ url: geminiUrl });
  }
});
