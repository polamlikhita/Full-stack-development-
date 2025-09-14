<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Editable To-Do List</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    h2 { color: darkblue; }
    #taskInput { padding: 5px; width: 200px; }
    #addBtn { padding: 6px 12px; }
    ul { list-style: none; padding: 0; }
    li { padding: 8px; border: 1px solid #ccc; margin: 4px 0; cursor: pointer; }
    input.editBox { width: 90%; padding: 6px; }
  </style>
</head>
<body>
  <h2>To-Do List</h2>
  <input type="text" id="taskInput" placeholder="Enter task">
  <button id="addBtn">Add</button>
  <ul id="taskList"></ul>

  <script>
    $(document).ready(function() {
      // Add new task
      $("#addBtn").click(function() {
        var taskText = $("#taskInput").val().trim();
        if (taskText !== "") {
          $("#taskList").append("<li>" + taskText + "</li>");
          $("#taskInput").val("");
        }
      });

      // Make task editable on double-click
      $("#taskList").on("dblclick", "li", function() {
        var currentText = $(this).text();
        var inputBox = $("<input type='text' class='editBox'>").val(currentText);
        $(this).html(inputBox);
        inputBox.focus();

        // Save on Enter key
        inputBox.keydown(function(e) {
          if (e.key === "Enter") {
            var updatedText = $(this).val().trim();
            $(this).parent().text(updatedText || currentText);
          }
        });

        // Save on blur (click outside)
        inputBox.blur(function() {
          var updatedText = $(this).val().trim();
          $(this).parent().text(updatedText || currentText);
        });
      });
    });
  </script>
</body>
</html>
