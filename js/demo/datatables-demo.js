<!-- Add this in the head section -->
<style>
    #dataTable tbody tr {
        cursor: pointer;
    }
    #dataTable tbody tr:hover {
        background-color: rgba(0,0,0,.075);
    }
</style>

// Call the dataTables jQuery plugin
$(document).ready(function() {
    var table = $('#dataTable').DataTable();
    
    $('#dataTable tbody').on('click', 'tr', function() {
        var data = table.row(this).data();
        
        // Populate the modal with the row data
        $('#emp-name').text(data[0]);
        $('#emp-position').text(data[1]);
        $('#emp-office').text(data[2]);
        $('#emp-age').text(data[3]);
        $('#emp-start-date').text(data[4]);
        $('#emp-salary').text(data[5]);
        
        // Show the modal
        $('#employeeModal').modal('show');
    });
});
