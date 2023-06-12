<?php
//CORS headers to enable any domain to send HTTP requests
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");

require_once("./connect.php");
 
 class deleteProducts extends connect{
 
   public function __construct(){
    parent::__construct("localhost", "root", "", "testingdb");
     $con = mysqli_connect($this->host, $this->user, $this->password, $this->db);

  
     //Checks if the connection is valid, otherwise exit
     if (!$con) {
       die("Connection failed: " . mysqli_connect_error());
       }else {
        
        $contents = file_get_contents('php://input');
        $body = json_decode($contents, TRUE);
       
        $boxes = join("', '", $body); 
        $sql = "DELETE FROM PRODUCTS WHERE SKU IN ('$boxes')";
       
        //Runs query
        $result = mysqli_query($con,$sql);

        //Checks if the connection is valid, otherwise exit
        if (!$result) {
          http_response_code(404);
          die(mysqli_error($con));
        }
        echo mysqli_affected_rows($con);
        //Closes the db connection
        $con->close();

       }
    }
}

$delProducts = new deleteProducts();
