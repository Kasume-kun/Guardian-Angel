# Guardian Angel 🛡️

Guardian Angel is a simple but powerful browser extension designed to protect you and your family from malicious links. It automatically checks any link you click against the VirusTotal API and blocks access if the destination is found to be malicious or suspicious.

## Key Features

-   **Automatic Link Checking**: Runs in the background to check every navigation.
-   **VirusTotal Integration**: Leverages the comprehensive VirusTotal database of malicious URLs.
-   **Real-time Blocking**: Prevents the browser from loading a page if it's flagged as unsafe.
-   **Simple Configuration**: Easy one-time setup with your personal API key.
-   **Custom Block Page**: Displays a user-friendly warning page when a site is blocked.

## How It Works

The extension uses the `chrome.webNavigation.onBeforeNavigate` event to intercept navigation requests just before the browser loads a new page. It then performs the following steps:

1.  The destination URL is sent to the **VirusTotal API** for analysis.
2.  The extension analyzes the API response, looking for "malicious" or "suspicious" flags.
3.  If the URL is deemed unsafe, the navigation is cancelled, and the user is redirected to a local "Access Denied" page.
4.  If the URL is safe, the navigation proceeds as normal.

## Setup & Installation

Follow these steps to get Guardian Angel up and running in your Chrome browser.

### 1. Get a VirusTotal API Key

-   Sign up for a free account at [VirusTotal.com](https://www.virustotal.com/gui/join-us).
-   Once logged in, click your user icon in the top-right corner and select **API key**.
-   Copy your personal API key.

### 2. Download the Project Files

-   Download all the project files (`manifest.json`, `background.js`, etc.) and place them together in a single folder on your computer.

### 3. Load the Extension in Chrome

-   Open Google Chrome and navigate to `chrome://extensions`.
-   Enable **"Developer mode"** using the toggle switch in the top-right corner.
-   Click the **"Load unpacked"** button.
-   Select the folder where you saved the project files.

### 4. Configure the Extension

-   The Guardian Angel icon (a wing and shield) will now appear in your browser's toolbar.
-   Click the icon to open the options page.
-   Paste your **VirusTotal API key** into the input field and click **"Save"**.

The extension is now active and protecting your Browse!

## Testing Your Setup

To verify that the extension is working correctly, you can use these standard, harmless test links that are designed to be flagged by security software:

-   **EICAR Test File**: `http://www.eicar.org/download/eicar.com.txt`
-   **AMTSO Phishing Test**: `http://phishing.test-my-security.com/`

When you try to visit these links, the extension should block them and show the "Access Denied" page.

## Project Files