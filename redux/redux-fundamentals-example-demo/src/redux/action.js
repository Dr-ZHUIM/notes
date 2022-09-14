export const todoAddedAction = {type:'todos/todoAdded',payload:todoText};
export const todoToggledAction = {type:'todos/todoToggled',payload:todoId};
export const colorSelectedAction = {type:'todos/colorSelected',payload:{todoId,color}};
export const todoDeletedAction = {type:'todos/todoDeleted',payload:todoId};
export const allCompletedAction = {type:'todos/allCompleted'};
export const completedClearedAction = {type:'todos/completedCleared'};
export const statusFilterChangedAction = {type:'filters/statusFilterChanged',payload:filterValue};
export const colorFilterChangedAction = {type:'filters/colorFilterChanged',payload:{color, changeType}};