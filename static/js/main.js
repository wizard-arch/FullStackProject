$(document).ready(function() {
    
    // This helper function rebuilds the action buttons on a task card
    function getButtonsForStatus(status) {
        if (status === 'todo') {
            return `
                <button class="btn btn-danger btn-sm delete-btn">Delete</button>
                <button class="btn btn-success btn-sm move-btn" data-new-status="inprogress">▶</button>
            `;
        } else if (status === 'inprogress') {
            return `
                <button class="btn btn-warning btn-sm move-btn" data-new-status="todo">◀</button>
                <button class="btn btn-danger btn-sm delete-btn">Delete</button>
                <button class="btn btn-success btn-sm move-btn" data-new-status="done">▶</button>
            `;
        } else if (status === 'done') {
            return `
                <button class="btn btn-warning btn-sm move-btn" data-new-status="inprogress">◀</button>
                <button class="btn btn-danger btn-sm delete-btn">Delete</button>
            `;
        }
    }

    // --- Move Task ---
    $('.kanban-column').on('click', '.move-btn', function() {
        const taskCard = $(this).closest('.task-card');
        const taskId = taskCard.data('task-id');
        const newStatus = $(this).data('new-status');

        $.ajax({
            url: `/move/${taskId}`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ new_status: newStatus }),
            success: function(response) {
                if (response.success) {
                    // Find the new column and the action button container
                    const targetColumn = $(`#${newStatus}-column`);
                    const actionContainer = taskCard.find('.task-actions');
                    
                    // Animate moving the card
                    taskCard.fadeOut(200, function() {
                        // 1. Rebuild the buttons for the new column
                        actionContainer.html(getButtonsForStatus(newStatus));
                        // 2. Move the card to the new column
                        targetColumn.append(taskCard);
                        // 3. Fade the card back in
                        taskCard.fadeIn(200);
                    });
                } else {
                    alert('Error moving task: ' + response.message);
                }
            }
        });
    });

    // --- Delete Task ---
    $('.kanban-column').on('click', '.delete-btn', function() {
        if (!confirm('Are you sure you want to delete this task?')) {
            return;
        }

        const taskCard = $(this).closest('.task-card');
        const taskId = taskCard.data('task-id');

        $.ajax({
            url: `/delete/${taskId}`,
            type: 'POST',
            success: function(response) {
                if (response.success) {
                    taskCard.fadeOut(300, function() { $(this).remove(); });
                } else {
                    // This is the corrected line:
                    alert('Error deleting task: ' + response.message);
                }
            }
        });
    });
    
    // --- Form Validation ---
     $('#add-task-form').submit(function(event) {
        const contentInput = $(this).find('input[name="content"]');
        if ($.trim(contentInput.val()) === '') {
            alert('Task content cannot be empty.');
            event.preventDefault();
        }
    });
});