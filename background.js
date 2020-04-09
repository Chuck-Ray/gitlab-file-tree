// current tab.
function openSupport(tab) {
    window.open("https://chrome.google.com/webstore/detail/gitlab-file-tree/" + chrome.runtime.id + "/support");
}

// When the browser action is clicked, call the
chrome.browserAction.onClicked.addListener(openSupport);