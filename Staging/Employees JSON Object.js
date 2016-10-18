<script>
	var jsonString = '{"Employees":[{"Name":"John", "Department":"Sales"},
								    {"Name":"Jane", "Department":"Technology"}]}';
								   
	var jsonObj = jQuery.parseJSON(jsonString);
   
	var employeesObj = jsonObj.Employees;
   
	for (var i=0; i<employeesObj.length; i++) {
		var employeeObj = employeesObj[i];
		var employeeName = employeeObj.Name;
		alert(i + ": " + employeeName);
	}
</script>
