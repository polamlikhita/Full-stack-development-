<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <title>To do List</title>
</head>
<body>
    <H1> To Do List </H1>
    <br><br>
    <h2>These are your tasks to complete</h2>
    <ul id="taskList">
      <li>Sample Task 1 <button id='done'>Complete</button> <button class='delete'>Delete</button></li>
      <li>Sample Task 2 <button id='done'>Complete</button> <button class='delete'>Delete</button></li>
    </ul>
    <input type="text" id="taskInput" placeholder="Enter new task">
    <button id="addTask">Add Task</button>
</body>
</html>
<script>
$(document).ready(function(){
    
    $("#addTask").click(function(){
  let task = $("#taskInput").val();
  if(task !== ""){
    $("#taskList").append(
      `<li>${task} 
        <button id='done'>Complete</button> 
        <button class='delete'>Delete</button>
      </li>`
    );
    $("#taskInput").val("");
  }
});

// Mark as complete
$("#taskList").on("click", "#done", function(){
  $(this).parent().css("background-color","yellow");
});

// Delete
$("#taskList").on("click", ".delete", function(){
  $(this).parent().remove();
});
