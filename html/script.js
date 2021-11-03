let direction = null;

const drawText = (textData) => {
    const text = document.getElementById("text");
    document.getElementById("container").style.display = "block";

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

const changeText = async (textData) => {
    const text = document.getElementById("text");
    text.classList.remove("show");
    text.classList.add('pressed');
    text.classList.add("hide");

    await sleep(500);

    text.classList.remove("left");
    text.classList.remove("right");
    text.classList.remove("top");
    text.classList.remove("bottom");
    text.classList.remove("hide");
    text.classList.remove("pressed");


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

    await sleep(100);
    text.classList.add("show");
};

const hideText = async () => {
    const text = document.getElementById("text");
    text.classList.remove("show");
    text.classList.add("hide");

    await sleep(1000);

    text.classList.remove("left");
    text.classList.remove("right");
    text.classList.remove("top");
    text.classList.remove("bottom");
    text.classList.remove("hide");
    text.classList.remove("pressed");
    document.getElementById("container").style.display = "none";

};

const keyPressed = () => {
    const text = document.getElementById("text");
    text.classList.add("pressed");
};

window.addEventListener("message", (event) => {
    const data = event.data;
    const action = data.action;
    const textData = data.data;
    switch (action) {
        case "DRAW_TEXT":
            return drawText(textData);
        case "CHANGE_TEXT":
            return changeText(textData);
        case "HIDE_TEXT":
            return hideText();
        case "KEY_PRESSED":
            return keyPressed();
        default:
            return;
    }
});

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
