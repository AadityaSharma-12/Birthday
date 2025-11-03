// typewriter.js

// Generic helper that types text into an element by id and calls callback when done
function typeWriterToPaper(text, elementId, speed, callback) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.innerHTML = "";                // clear any previous content
  let i = 0;

  function typing() {
    if (i < text.length) {
      const ch = text.charAt(i);
      // preserve newlines by inserting <br>
      if (ch === "\n") {
        el.innerHTML += "<br>";
      } else {
        // escape HTML-sensitive characters (basic)
        const safeCh = ch
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
        el.innerHTML += safeCh;
      }
      i++;
      setTimeout(typing, speed);
    } else {
      if (typeof callback === "function") callback();
    }
  }

  typing();
}
