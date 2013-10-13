<?php

$email_address = '';

// If email address isn't provided, exit
if ( !$email_address ) {
	header( 'HTTP/1.0 403 Forbidden' );
	echo 'Error: Email address not provided.';
	exit;
}

// Require database configuration file
require_once('./db-config.php');

// If database details are missing, exit
if (
	!defined('DB_HOST') || 
	!defined('DB_NAME') || 
	!defined('DB_USER') || 
	!defined('DB_PASS') || 
	!defined('TABLE_NAME') ) {
	echo 'Error: Database information not provided.';
	exit;
}

try {
	// Open connection 
	// $connection = new PDO('mysql:host=localhost;dbname=test', $user, $pass);
	$connection = new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME.'', DB_USER, DB_PASS);

  // Insert email address into table
  if( $connection->exec(' INSERT INTO '.DB_NAME.'.'.TABLE_NAME.' ( id, address , timestamp ) VALUES ( null, "'.$email_address.'", CURRENT_TIMESTAMP ) ') ) {
  	echo 'Email successfully added!';
  }

  // Close connection
  $connection = null;
}
catch (PDOException $e) {
	// If there was an error, display it
  print "Error: " . $e->getMessage();
  exit;
}

?>