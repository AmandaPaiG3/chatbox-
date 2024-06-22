document.addEventListener("DOMContentLoaded", () => {
    const johnSelector = document.getElementById("john-selector");
    const janeSelector = document.getElementById("jane-selector");
    const chatHeader = document.querySelector(".chat-header");
    const chatInput = document.querySelector(".chat-input");
    const chatForm = document.querySelector(".chat-input-form");
    const chatMessages = document.querySelector(".chat-messages");
    const clearChatButton = document.querySelector(".clear-chat-button");

    let activePerson = "John";

    // Function to update chat header and input placeholder based on active person
    function updateChatHeader() {
        chatHeader.textContent = `${activePerson} chatting...`;
        chatInput.placeholder = `Type here, ${activePerson}...`;
    }

    // Event listener to switch active person to John
    johnSelector.addEventListener("click", () => {
        activePerson = "John";
        johnSelector.classList.add("active-person");
        janeSelector.classList.remove("active-person");
        updateChatHeader();
    });

    // Event listener to switch active person to Jane
    janeSelector.addEventListener("click", () => {
        activePerson = "Jane";
        johnSelector.classList.remove("active-person");
        janeSelector.classList.add("active-person");
        updateChatHeader();
    });

    // Function to add a new message to the chat
    function addMessage(sender, text) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.classList.add(sender === "John" ? "blue-bg" : "gray-bg");

        const messageSender = document.createElement("div");
        messageSender.classList.add("message-sender");
        messageSender.textContent = sender;

        const messageText = document.createElement("div");
        messageText.classList.add("message-text");
        messageText.textContent = text;

        const messageTimestamp = document.createElement("div");
        messageTimestamp.classList.add("message-timestamp");
        messageTimestamp.textContent = new Date().toLocaleTimeString();

        messageDiv.appendChild(messageSender);
        messageDiv.appendChild(messageText);
        messageDiv.appendChild(messageTimestamp);

        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Event listener to handle form submission (sending a message)
    chatForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const messageText = chatInput.value.trim();
        if (messageText) {
            addMessage(activePerson, messageText);
            chatInput.value = "";
        }
    });

    // Event listener to clear the chat
    clearChatButton.addEventListener("click", () => {
        chatMessages.innerHTML = "";
    });
});
