{
    const tasks = [];

    const addNewTask = (inputContent) => {
        tasks.push({
            content: inputContent,
            done: false,
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const inputContent = document.querySelector(".js-input").value.trim();

        if (inputContent === "") {
            return;
        }

        addNewTask(inputContent);

        document.querySelector(".js-input").value = "";
        document.querySelector(".js-input").focus();

        render();
    };

    const removeTask = (removeTaskButtonIndex) => {
        tasks.splice(removeTaskButtonIndex, 1);
        render();
    };

    const toggleTaskDone = (toggleTaskDoneButtonIndex) => {
        tasks[toggleTaskDoneButtonIndex].done = !tasks[toggleTaskDoneButtonIndex].done;
        render();
    };

    const bindButtonEvents = () => {
        const removeTaskButtons = document.querySelectorAll(".newTasks__removeTaskButton");

        removeTaskButtons.forEach((removeTaskButton, removeTaskButtonIndex) => {
            removeTaskButton.addEventListener("click", () => {
                removeTask(removeTaskButtonIndex);
            });
        });

        const toggleTaskDoneButtons = document.querySelectorAll(".newTasks__toggleTaskDoneButton");

        toggleTaskDoneButtons.forEach((toggleTaskDoneButton, toggleTaskDoneButtonIndex) => {
            toggleTaskDoneButton.addEventListener("click", () => {
                toggleTaskDone(toggleTaskDoneButtonIndex);
            });
        });
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="newTasks__listItem">
            <button class="newTasks__toggleTaskDoneButton">${task.done ? "✔" : ""}</button>
            <span class="newTasks__content  ${task.done ? "newTasks__toggleTaskDoneButton--checked" : ""}">${task.content}</span>
            <button class="newTasks__removeTaskButton">🗑</button>
            </li>
            `
        }
        document.querySelector(".js-newTasks").innerHTML = htmlString;

        bindButtonEvents();
    };

    const init = () => {

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit)

        render();
    };

    init();
}