const apiKeyInput = document.getElementById('apiKey');
const saveButton = document.getElementById('save');
const statusDiv = document.getElementById('status');

chrome.storage.sync.get(['apiKey'], (result) => {
  if (result.apiKey) {
    apiKeyInput.value = result.apiKey;
  }
});

saveButton.addEventListener('click', () => {
  const apiKey = apiKeyInput.value;
  if (apiKey) {
    chrome.storage.sync.set({ apiKey: apiKey }, () => {
      statusDiv.textContent = 'API Key saved!';
      setTimeout(() => { statusDiv.textContent = ''; }, 2000);
    });
  }
});