let surpriseRevealed = false;

// Custom non-blocking message function (replaces alert())
function showMessage(message, isError = true) {
    const box = document.getElementById("notification-box");
    box.textContent = message;

    // Ensure the element is visible and styled before showing
    box.classList.remove("hidden");

    // Use different background colors based on success/error
    box.style.backgroundColor = isError ? 'rgba(255, 240, 245, 0.8)' : 'rgba(230, 255, 230, 0.8)';

    // Hide the message after 3 seconds
    setTimeout(() => {
        box.classList.add("hidden");
    }, 3000);
}

// Attach event listeners when the entire page is loaded
document.addEventListener('DOMContentLoaded', () => {
    const gifts = document.querySelectorAll(".gift");

    gifts.forEach(clickedGift => {
        clickedGift.addEventListener('click', () => {
            // Debugging line: ensure this line appears in the console when you click
            console.log("Gift clicked (via listener), ID:", clickedGift.dataset.giftId);

            if (surpriseRevealed) {
                showMessage("The real gift has already been revealed!", false);
                return;
            }

            // Gift 2 is set as the correct answer (data-gift-id="2")
            const isCorrect = clickedGift.dataset.giftId === "2";

            if (isCorrect) {
                const realGift = document.getElementById("real-gift");
                const giftGrid = document.querySelector(".gift-grid");

                // Hide the gift selection and show the real prize
                giftGrid.style.opacity = "0";
                setTimeout(() => {
                    giftGrid.classList.add("hidden");
                    realGift.classList.remove("hidden");
                    surpriseRevealed = true;
                }, 500);

            } else {
                // Incorrect guess
                showMessage("OOPS! Wrong one, select another gift 🎁");

                // Add a little shake/pulse animation on the wrong gift
                clickedGift.style.transform = "scale(0.9) rotate(-5deg)";
                setTimeout(() => {
                    clickedGift.style.transform = ""; // Reset transformation
                }, 300);
            }
        });
    });
});
