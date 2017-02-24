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
  },
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var todoText = todo.text.toLowerCase();
      // filter keeps item if true is returned, discards if false
      // if no seach text entered, always true
      // if search text entered, but not in todo's text, false & false
      // if search text entered, and it is in todo's text, false & true
      return searchText.length === 0 || todoText.indexOf(searchText) > -1;
    });

    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
