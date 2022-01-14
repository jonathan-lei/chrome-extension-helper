
//Block Quia Selection
chrome.webRequest.onBeforeRequest.addListener(
    function (details) { return { cancel: true }; },
    { urls: ["https://www.quia.com/static/quia/activities/quiz/disablecp.js"] },
    ["blocking"]
);