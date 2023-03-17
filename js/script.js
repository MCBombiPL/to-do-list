{
    const tasks = [];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `<li class="newTasks__listItem"><button class="newTasks__checkboxButton"></button>
    <span class="newTasks__content">${task.content}</span><button class="newTasks__removingButton"></button>
    </li>`
        }
        document.querySelector(".js-newTasks").innerHTML = htmlString;
    };

    const init = () => {

        document.querySelector(".js-form").addEventListener("submit", (event) => {
            event.preventDefault();

            if (document.querySelector(".js-input").value === "") {
                return;
            }

            tasks.push({
                content: document.querySelector(".js-input").value.trim(),
                done: false,
            });
            render();
            
        })

        render();
    };

    init();
}