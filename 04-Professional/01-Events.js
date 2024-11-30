document.getElementById("btn").addEventListener(
  "click",
  function (e) {
    console.log("Button clicked");
    console.log("Event Type:", e.type); // Type of the event
    console.log("Timestamp:", e.timeStamp); // Time at which the event was created
    console.log("Target Element:", e.target); // The target element of the event
    console.log("value:", e.target.value); // Output " " | The value of event
    console.log("id", e.target.id); // Output "btn" | The id of the target element
    console.log("Class Name:", e.target.className); // The class name of the target element
    console.log("Tag Name:", e.target.tagName); // The tag name of the target element
    console.log("Parent Node:", e.target.parentNode); // The parent node of the target element
    console.log("Type:", e.target.type); // The type of the target element

    console.log("Client Coordinates:", e.clientX, e.clientY); // Coordinates relative to the viewport
    console.log("Screen Coordinates:", e.screenX, e.screenY); // Coordinates relative to the screen
    // console.log("Alt Key Pressed:", e.altKey); // Whether the Alt key was pressed
    // console.log("Ctrl Key Pressed:", e.ctrlKey); // Whether the Ctrl key was pressed
    // console.log("Shift Key Pressed:", e.shiftKey); // Whether the Shift key was pressed
    // console.log("Meta Key Pressed:", e.metaKey); // Whether the Meta key was pressed (Windows key or Command key)
    // console.log("Event Phase:", e.eventPhase); // The current phase of the event flow
    // console.log("Is Trusted:", e.isTrusted); // Whether the event is trusted
    // console.log("Button:", e.button); // Which mouse button was pressed (if applicable)
    // console.log("Related Target:", e.relatedTarget); // The secondary target for the event (if applicable)
    // console.log("Offset Coordinates:", e.offsetX, e.offsetY); // Coordinates relative to the target element
    // console.log("Page Coordinates:", e.pageX, e.pageY); // Coordinates relative to the document
    // console.log("Movement Coordinates:", e.movementX, e.movementY); // Coordinates of the mouse movement
  },
  false // false: bubbling, true: capturing
  // to stop the event from bubbling up to the parent element, use e.stopPropagation()
  // to prevent the default behavior of the event, use e.preventDefault()
);
