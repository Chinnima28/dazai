
chrome.action.onClicked.addListener((tab) => {
    const googleTranslateUrl = `https://translate.google.com/translate?hl=ta&sl=auto&tl=ta&u=${encodeURIComponent(tab.url)}`;
    chrome.tabs.update(tab.id, { url: googleTranslateUrl });
});
