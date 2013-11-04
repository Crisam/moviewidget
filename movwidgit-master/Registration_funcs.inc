/*
	

It has no meaning, it is just a file extension. It is some people's convention to name files with a .inc extension if that file is designed to be included by other PHP files, but it is only convention.

It does have a possible disadvantage which is that servers normally are not configured to parse .inc files as php, so if the file sits in your web root and your server is configured in the default way, a user could view your php source code in the .inc file by visiting the URL directly.

Its only possible advantage is that it is easy to identify which files are used as includes. Although simply giving them a .php extension and placing them in an includes folder has the same effect without the disadvantage mentioned above.



*/

<?php
 	// Afile with the database host, user , password, and 
	// selected database
	include_once('db_vars.inc');   

	// A string used for md5 encryption. You  could move it 
	//to a ffile outside the web tree for more security.
	$supersecret_hash_padding = ' A string that is used to ad out short strings for md5encryption.';
	

	function user_register() {
		
		// This function will only work with superglobal arrays, 
		//because I'm not passing in any values or delcaring gloabls global $supersecret_hash_padding:
		
		
		if (stlen($_POST['user_name']) <= 25 && strlen($_POST['password1']) <=25 && ($_POST['password1'] ==
		$_POST['password2']) && strlen($_POST['email']) <= 50 && validate_email ($_POST['email'])) {
			// validate username and password
			if (account_namevalid ($_POST['user_name']) || strlen($_POST['password'] >= 6 )) {
				
				$user_name =  strtolower($_POST['user_name']);
				$user_name =  trim($user_name);
				// Don't need to escape, because single quotes
				// aren't allowed
				$email = $_POST['email'];
				// Dont't  allow  dulicate usernames or emails 
				$query = "SELECT user_id
						  FROM user
						  WHERE user_name = '$user_name'
						  AND email = '$email'";
				$result =  mysql_query($query);
				if ($result && mysql_num_rows(result) > 0) {
				$feedback = 'ERROR -- Username or email already exist';
				return $feedback;
				} else {
					$first_name = $_POST['first_name'];
					$last_name  = $_POST['last_name'];
					$password = md5($_POST['password1']);
					$user_ip = $_SERVER['REMOTE_ADDR'];
					
								
				?>