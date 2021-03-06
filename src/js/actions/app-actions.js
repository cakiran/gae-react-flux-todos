/** @jsx React.DOM */
var AppDispatcher = require('../dispatcher/app-dispatcher');
var AppConstants = require('../constants/app-constants');

var AppActions = {
  loadComponentData: function(){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.LOAD_COMPONENT_DATA,
      data: null
    })
  },
  submitTodoForm: function(todo){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.SUBMIT_TODO_FORM,
      data: todo
    })
  },
  deleteTodo: function(todo){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.DELETE_TODO,
      data: todo
    })
  },
  updateTodo: function(todo){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.UPDATE_TODO,
      data: todo
    })
  }
}

module.exports = AppActions
