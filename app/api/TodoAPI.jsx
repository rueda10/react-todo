var $ = require("jQuery");

module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      // checks if it is an array
      localStorage.setItem("todos", JSON.stringify(todos)); // converts array to string
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem("todos");
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos : []; 
  }
};
