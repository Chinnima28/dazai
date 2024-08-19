# Google Translate Webpage Extension

This Chrome extension translates entire webpages to Tamil using Google Translate. The extension provides a convenient way to quickly translate any webpage by redirecting to Google Translate with the current page URL.

## Files

- `manifest.json`: Configuration file for the Chrome extension. Defines the extension's metadata, permissions, and background script.
- `background.js`: JavaScript file that handles the logic for redirecting the user to Google Translate with the current page URL.

## Tools and Technologies Used

- **Google Translate**: Utilized Google Translate's web interface to translate webpages.
- **Chrome Extensions API**:
  - **Manifest V3**: Used for defining the extension’s configuration and permissions.
  - **Background Scripts**: Handles user interactions and performs URL redirection.
- **JavaScript**: Implemented in the background script to manage the extension's functionality.
- **HTML**: 
  - **`manifest.json`**: Defines the extension's metadata and configuration.

## Installation

1. Open Google Chrome and navigate to `chrome://extensions/`.
2. Enable "Developer mode" by toggling the switch in the top right corner.
3. Click on "Load unpacked" and select the project directory containing `manifest.json` and `background.js`.

## Usage

- Click the extension icon in the Chrome toolbar to translate the current webpage into Tamil using Google Translate.


