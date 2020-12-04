// let tasks = [
//   {
//     userId: 1,
//     id: 1,
//     title: "make dinner",
//     completed: false
//   }
// ]; 
                // state

let state = {
  tasks: [],
  errorOccured: false,
  errorMessage: "",
  errorStatus: "",
  loading: true,
};
                // state

axios
  .get("https://jsonplaceholder.typicode.com/todosx")
  .then((res) => {
    console.log(res.data);
    state.errorOccured = false;
    state.loading = false;
    state.tasks = res.data;
    render();
  })
  .catch((err) => {
    state.errorOccured = true;
    state.loading = false;
    state.errorMessage = err.response.data.message;
    state.errorStatus = err.response.status;
    render();
  });

const getTasks = () => {
  console.log("here")
  state.loading = true;
  // render();
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      console.log("hello",res);
      state.errorOccured = false;
      state.loading = false;
      state.tasks = res.data;
      render();
    })
    .catch((err) => {
      state.errorOccured = false;
      // state.errorMessage = err.response.data.message;
      // state.errorStatus = err.response.status;
      state.loading = false;
      render();
    });
};
                          // He put a delete function here with this line of code   <div class='button' onclick='deleteTask(${task.id})'> Delete </div>
                            // between the paragraph and the end of /div
const renderTask = (task) => {
  return `<div class='card'>
           <h2>This task is to: ${task.title}</h2>
           <p>User: ${task.userId}, task ID: ${task.id}</p>
           <p>Completed: ${task.completed}</p>
           <p onclick='toggleCompleted()'>Change status of completion</p>
           </div>`;
};


const renderTasks = () => {
  const { tasks, errorOccured, errorMessage, errorStatus, loading } = state;
  if (errorOccured) {
    return `<div>
            <h1>ERROR: ${errorMessage}, failed with status ${errorStatus}</h1>
            <div onclick='getTasks()'>Try Again</div>
            </div>`;
  }
  if (loading) {
    return "Still loading";
  }
  return state.tasks.map(task => renderTask(task));
  // currently, this is where my app stops functioning. Everything ends here.

 
};

    const filterCompleted = (task) => {
      console.log("test if reaches filterCompleted")
      // const { tasks } = state;
      task.completed.filter(complete)
      // return state.tasks.filter(completed)


                      // what I'm trying here is to map it all out, grab each task, and then grab the completed key from each task. But it doesn't work
              // eachTask = state.tasks.map(task => renderTask(task)); 
              // if (eachTask.completed == true) {
              //   console.log('hello')
              // }
              //  console.log('nope')  // this is actually getting sent straight to 'nope' which means eachTask.completed is actually always returning as false.
      render();
    }
                          function complete(boolean) {
                                  return boolean === true;
                                };

   // sort by not completed

   const toggleCompleted = () => {
     console.log('the button works')
     render();
   }

   const sortByUserId = () => {
     console.log('sortByUserId ran')
     state.tasks.sort((a, b) => a.userId - b.userId);
     render();
   };

   const sortByTitle = () => {
     console.log('sortByTitle ran')
     state.tasks.sort((task1, task2) => {
       sortedTask1 = task1.title[0];
       sortedTask2 = task2.title[0];
       if (sortedTask1 < sortedTask2) {
         return -1;
       }
       if (sortedTask1 > sortedTask2) {
         return 1;
       }
         return 0;
     });
     render();
   };

const render = () => {
  let htmlString = "<div>";
  htmlString += "<h1>To-do list</h1>";
  htmlString += "<div class='button-group'>";
  // show only completed
  htmlString += "<div class='button' onclick='filterCompleted()'>See completed tasks</div>";
  htmlString += "<div class='button' onclick='sortByUserId()'>Sort by User Id</div>";
  htmlString += "<div class='button' onclick='sortByTitle()'>Sort by Title</div>";
  // htmlString += "<div class='button' onclick='SORT_FUNCTION()'>See incomplete tasks</div>";
  // button to toggle if it's done or not
  // button to sort todos by title and by id
  htmlString += "<div class='button' onclick='getTasks()'>Reset order to default</div>"; // awesome this works

  htmlString += "</div>";
  htmlString += renderTasks();
  htmlString += "</div>";
  document.getElementById("app").innerHTML = htmlString;
};

render();
console.log("index loaded");