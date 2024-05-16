chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'makeApiCall') {
        console.log('Reschedule tasks clicked from service worker.');

        // Define the API endpoint
        const apiUrl = 'https://app.dreamtask.ca/_/api/reschedule-from-extension';
    
        // Make the API call
        fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Task rescheduled successfully');
            // You can perform any additional actions here upon successful scheduling
        })
        .catch(error => {
            console.error('Failed to reschedule task:', error);
        });
    }
});