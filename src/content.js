function injectButton() {
    const targetDiv = document.querySelector('#notion-app > div > div:nth-child(1) > div > div:nth-child(3) > header > div.notion-topbar > div > div > div.notion-topbar-action-buttons');
    if (targetDiv && !document.getElementById('rescheduleButton')) {
        const button = document.createElement('button');
        button.id = 'rescheduleButton';
        button.textContent = 'Reschedule Tasks';

        button.style.backgroundColor = '#ffffff'; // Orange-red color
        button.style.border = '1px solid grey'
        button.style.color = '#d77423'; // White text
        button.style.marginRight = '10px'; // Left margin
        button.style.borderRadius = '10px'; // Rounded corners with a radius of 8px
        button.style.cursor = 'pointer'; // Cursor to pointer when hovered
        button.style.fontSize = '14px'; // Font size

        targetDiv.prepend(button);
        
        button.addEventListener('click', rescheduleTasks);
        
    }
}

function rescheduleTasks() {
    chrome.runtime.sendMessage({ action: 'makeApiCall' });
}

const observer = new MutationObserver((mutations, obs) => {
    const targetDiv = document.querySelector('#notion-app > div > div:nth-child(1) > div > div:nth-child(3) > header > div.notion-topbar > div > div > div.notion-topbar-action-buttons');
    if (targetDiv) {
        injectButton();
        // Optionally stop observing after the button is injected
        // obs.disconnect();
    }
});

// Start observing the body for added nodes
observer.observe(document.body, {
    childList: true,
    subtree: true
});