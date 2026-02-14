(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "oops, try again!",
    "nope",
    "i sell ur pokemon card",
    "misclicked!",
    "nah",
    "no",
    "nope",
    "oops",
    "...",
    "u hate me"
];

// Array of GIF URLs that change when "No" is clicked
const gifs = [
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWZvbmttcDN1b256cmw4cHoxdmh3eTN4ODI2ZGs1YmhlejhmdGZveCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rCxogJBzaeZuU/giphy.gif", // original
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3hvMGQ2NDJzaWRyd2phczk3Njh2aG5sYnJ2anNsYXI4Zm14MWFmZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RdHFEzoDXTDmby2Ruu/giphy.gif", // vvv
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHdjMGEzdWZ3ZXNubjIyZzF4MThzb2hqbW9jMXZzMzVvNm55bHpkZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fsmjCx7xdG4rGNEtCr/giphy.gif", // missed goal
    "https://media.giphy.com/media/6uGhT1O4sxpi8/giphy.gif", // please
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2hzZ3czbGVuZ25iY3ltanNnaDVnNWY0Zjl5c3d5b2QzaGxtMDJqMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/6nWhy3ulBL7GSCvKw6/giphy.gif", // confused pika
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW4wbDU2NGp5NXN6ZHdrNHhtZGFuOHlzNnl3Z2R0NmZldnA4ZTM4cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rABo4WiLEXcze/giphy.gif", // sad
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cmYyMnp0NWcweGFtcTIxdmJsZzBzZWsyampoeXdrMDBrYmlzNnU3MiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/6dzlXgkzbd0tR0ibBg/giphy.gif", // crying
    "https://media.giphy.com/media/ISOckXUybVfQ4/giphy.gif", // heartbroken
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjczbTI2MndreWl5anA0MTI3cDJucWE3OG5xNHB0ejNjbnRjanB4eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WKswwJgPgo4j4EoD1Y/giphy.gif", // please please
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3E0c3I0Mm4yaTl4eWJ5b245dm13NjBsNTc4a3RtOGRlenpsdmw1YSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/j31SyX3FsuKZQK0rCN/giphy.gif" // final plea
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gifImage = document.querySelector('.gif_container img');
    
    noButton.textContent = messages[messageIndex];
    
    // Change the GIF
    if (gifImage) {
        gifImage.src = gifs[messageIndex];
    }
    
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}