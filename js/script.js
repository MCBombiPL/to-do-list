{
    const tasks = [];

    const addNewTask = (inputContent) => {
        tasks.push({
            content: inputContent,
            done: false,
        });

        document.querySelector(".js-input").value = "";
        document.querySelector(".js-input").focus();

        render();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const inputContent = document.querySelector(".js-input").value.trim();

        if (inputContent === "") {
            return;
        }

        addNewTask(inputContent);

    };

    const removeTask = (removingButtonIndex) => {
        tasks.splice(removingButtonIndex, 1);
        render();
    };

    const toggleDoneTask = (checkboxButtonIndex) => {
        tasks[checkboxButtonIndex].done = !tasks[checkboxButtonIndex].done;
        render();
    };

    const buttonEvents = () => {
        const removingButtons = document.querySelectorAll(".newTasks__removingButton");

        removingButtons.forEach((removingButton, removingButtonIndex) => {
            removingButton.addEventListener("click", () => {
                removeTask(removingButtonIndex);
            });
        });

        const checkboxButtons = document.querySelectorAll(".newTasks__checkboxButton");

        checkboxButtons.forEach((checkboxButton, checkboxButtonIndex) => {
            checkboxButton.addEventListener("click", () => {
                toggleDoneTask(checkboxButtonIndex);
            });
        });
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `<li class="newTasks__listItem"><button class="newTasks__checkboxButton">${task.done ? "✔" : ""}</button>
    <span class="newTasks__content  ${task.done ? "newTasks__checkboxButton--checked" : ""}">${task.content}</span><button class="newTasks__removingButton">🗑</button>
    </li>`
        }
        document.querySelector(".js-newTasks").innerHTML = htmlString;

        buttonEvents();
    };

    const init = () => {

        document.querySelector(".js-form").addEventListener("submit", onFormSubmit)

        render();
    };

    init();
}