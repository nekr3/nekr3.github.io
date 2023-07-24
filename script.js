document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("me").addEventListener("click", () => toggle("me"));
    document.getElementById("work").addEventListener("click", () => toggle("work"));
    document.getElementById("classes").addEventListener("click", () => toggle("classes"));
    document.getElementById("resume").addEventListener("click", openResume);
  });

/**
 * Toggle showing content when associated button is clicked.
 * 
 * @param name the class name of elements to toggle
 */
async function toggle(name) {
    //check if it's already selected
    const texts = document.getElementsByClassName(name);
    let deselect = false;
    for (const text of texts) {
        if (text.style.display === "block") deselect = true;
    }

    //deselect everything
    const allTexts = document.getElementsByClassName("text");
    for (const text of allTexts) {
        text.style.display = "none";
    }

    const button = document.getElementById(name);
    const buttons = document.getElementsByClassName("option");
    for (const otherButton of buttons) {
        if (otherButton !== button) {
            otherButton.classList.remove('active');
        }
    }

    if (!deselect) {
        //activate this one
        for (const text of texts) {
            text.style.display = "block";
        }
        const boxes = document.getElementsByClassName("box");
        for (const box of boxes) {
            box.style.display = "flex";
        }
        button.classList.add('active');
    }

    else {
        //get rid of the box
        const boxes = document.getElementsByClassName("box");
        for (const box of boxes) {
            box.style.display = "none";
        }
        button.classList.remove('active');
    }
}

/**
 * Opens resume in a new tab.
 */
async function openResume() {
    window.open("resume.pdf", '_blank').focus()
}