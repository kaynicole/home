<?php

	$connection = mysql_connect('host_server','mysql_username','mysql_password');
	if(!$connection){ die('Not connected to MySQL:'.mysql_error()); }

	$database=mysql_select_db('database_name',$connection);
	if(!$database){ die('Not connected to a database:'.mysql_error()); }

	if ($connection && $database) {
		echo "<h1 style='color:green;'>SUCCESS!</h1><p>You have successfully connected to MySQL.</p>";
	} else {
		echo "<h1 style='color:red;'>BLIMEY!</h1><p>Something's wrong, your connection isn't working.  MySQL says: ".mysql_error()."</p>";
	}


?>