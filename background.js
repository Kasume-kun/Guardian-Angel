async function checkUrlWithVirusTotal(url, tabId) {
  const { apiKey } = await chrome.storage.sync.get('apiKey');

  if (!apiKey) {
    console.log("VirusTotal API key is not set.");
    return; 
  }

  const encodedUrl = btoa(url).replace(/=/g, '');
  const apiUrl = `https://www.virustotal.com/api/v3/urls/${encodedUrl}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'x-apikey': apiKey
      }
    });

    if (response.status === 404) {
      console.log(`URL not found in VirusTotal database: ${url}. Assuming it's safe.`);
      return; 
    }

    const data = await response.json();
    const stats = data.data.attributes.last_analysis_stats;

    console.log(`VirusTotal stats for ${url}:`, stats);

    if (stats.malicious > 0 || stats.suspicious > 0) {
      console.log(`Blocking malicious URL: ${url}`);
      chrome.tabs.update(tabId, { url: chrome.runtime.getURL('blocked.html') });
    }

  } catch (error) {
    console.error("Error checking URL with VirusTotal:", error);
  }
}

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (details.frameId === 0 && (details.url.startsWith('http:') || details.url.startsWith('https:'))) {
    checkUrlWithVirusTotal(details.url, details.tabId);
  }
});