const messContainer = document.getElementById('messageContainer');
const defaultUrl = window.location.origin;
const hash = window.location.hash.substring(1);

if (hash) {
    const messageDecoded = atob(hash);
    messContainer.innerHTML = `
            <p class="message">${messageDecoded}</p>
            <a href="${defaultUrl}">Create your own message</a>
    `;
}

messContainer.addEventListener('submit', function (event) {
    event.preventDefault();
    const message = document.getElementById('message').value
    const messageCoded = btoa(message);
    const url = `${defaultUrl}#` + messageCoded;

    messContainer.innerHTML = `
        <p>Share this link</p>
        <p id="url">${url}</p><button id="copy">Copy</button>
        <a href="${defaultUrl}">Create new message</a>
    `;

    const copy = document.getElementById("copy");
    copy.addEventListener("click", function () {
        const urlText = document.getElementById("url").innerText;
        navigator.clipboard.writeText(urlText)
        copy.innerText = "Copied !";
    });
})