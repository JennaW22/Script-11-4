document.getElementById('addButton').addEventListener('click', function() {
    const input = document.getElementById('gratitudeInput');
    const gratitudeText = input.value.trim();

    if (gratitudeText) {
        const li = document.createElement('li');
        li.textContent = gratitudeText;
        document.getElementById('gratitudeList').appendChild(li);
        input.value = ''; 
    } else {
        alert('Please enter something you are grateful for.');
    }
});
