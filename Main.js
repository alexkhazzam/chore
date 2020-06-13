const choreName = document.querySelector(".chore-name");
const choreTime = document.querySelector(".chore-time-determination");
const addToListBtn = document.querySelector(".add-to-list");
const choreSection = document.querySelector(".create-chore");
const listOfChores = document.querySelector(".list-of-chores");

let chores = [];

class Chore {
  constructor(chore, time, choreId) {
    this.chore = chore;
    this.time = time;
    this.choreId = choreId;
  }
}

class VerifyUserInputs {
  verify() {
    if (choreName.value.trim() === "" || choreTime.value.trim() === "") {
      alert("Enter valid inputs.");
      this.reset();
      return;
    }
    this.chore = choreName.value;
    this.choreTime = choreTime.value;
    this.choreId = Math.random();
    choreName.value = "";
    choreTime.value = "";
    const renderChore = new RenderChore();
    renderChore.renderChoreElement(this.chore, this.choreTime, this.choreId);
  }

  reset() {
    choreName.value = "";
    choreTime.value = "";
    choreName.style.borderBottom = "2px solid red";
    choreTime.style.borderBottom = "2px solid red";
    choreSection.style.border = "2px solid red";

    setTimeout(() => {
      choreName.style.borderBottom = "2px solid black";
      choreTime.style.borderBottom = "2px solid black";
      choreSection.style.border = "2px solid black";
    }, 1000);
  }
}

class RenderChore {
  renderChoreElement(choreName, choreTime, choreId) {
    const newChore = new Chore(choreName, choreTime, choreId);
    this.appendToDOM(choreName, choreTime, choreId);
  }

  appendToDOM(choreName, choreTime, choreId) {
    const text = `${choreName} | ${choreTime} Minute(s)`;
    const listItem = document.createElement("li");
    listItem.textContent = text;
    listItem.id = choreId;
    listItem.setAttribute("draggable", true);
    chores.push(listItem);
    listOfChores.append(listItem);

    listItem.addEventListener("click", (event) => {
      listOfChores.removeChild(event.target)
      let index = chores.indexOf(event.target);
      chores.splice(index, 1);

      const dragHandler = new DragHandler();
      dragHandler.renderDrag();
    });
  }
}

class DragHandler {
  renderDrag() {
    const li = document.querySelectorAll("li");
    console.log(li);
    li.forEach((listItem) => {
      console.log(listItems);
      console.log("hi")
      listItem.addEventListener("dragstart", event => {
        console.log("hi")
        console.log(event.target);
      });
    });
  }
}
class TimerTracker {}

const verifyUserInputs = new VerifyUserInputs();
addToListBtn.addEventListener(
  "click",
  verifyUserInputs.verify.bind(verifyUserInputs)
);




// https://www.wix.com/website-template/view/html/1995?siteId=a51d32ee-c2eb-494c-86b9-0d1c722f9f85&metaSiteId=16dcad0e-953b-4c09-ae4a-2abc30d21d17&originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fmost-popular


