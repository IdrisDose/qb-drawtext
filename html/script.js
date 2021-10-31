let direction = null;
let key = "";

const drawText = (textData) => {
    const text = document.getElementById("qb-text");
    document.getElementById("container").style.display = "block";

    if (textData.actionKey) {
        actionKey = key;
    }

    switch (textData.position) {
        case "left":
            text.classList.add("left");
            direction = "left";
            break;
        case "top":
            text.classList.add("top");
            direction = "top";
            break;
        case "right":
            text.classList.add("right");
            direction = "right";
            break;
        default:
            text.classList.add("left");
            direction = "left";
            break;
    }
    text.innerHTML = textData.text;

    setTimeout(() => {
        text.classList.add("show");
    }, 100);
};

const hideText = () => {
    const text = document.getElementById("qb-text");
    text.classList.remove("show");
    text.classList.add("hide");

    setTimeout(() => {
        text.classList.remove("left");
        text.classList.remove("right");
        text.classList.remove("top");
        text.classList.remove("bottom");
        text.classList.remove("hide");
        text.classList.remove("pressed");
        document.getElementById("container").style.display = "none";
    }, 1000);
};

const keyPressed = () => {
    const text = document.getElementById("qb-text");
    text.classList.add("pressed");
}

window.addEventListener("message", (event) => {
    const data = event.data;
    const action = data.action;
    const textData = data.data;
    switch (action) {
        case "DRAW_TEXT":
            return drawText(textData);
        case "HIDE_TEXT":
            return hideText();
        case "KEY_PRESSED":
            return keyPressed();
        default:
            return;
    }
});
