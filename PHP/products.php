<?php
 //CORS headers to enable any domain to send HTTP requests
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");

require_once("./connect.php");

class getProducts extends connect{

  protected $queryResult;

  public function __construct(){
    parent::__construct("localhost", "root", "", "testingdb");
    $con = mysqli_connect($this->host, $this->user, $this->password, $this->db);
 
    //Checks if the connection is valid, otherwise exit
    if (!$con) {
      die("Connection failed: " . mysqli_connect_error());
      }else {
    
    //selects all the products from the db
      $sql = "select * from products"; 
      $result = mysqli_query($con,$sql);
      $this->queryResult = $result;
   
      //throws mysql error if result is null
      if (!$result) {
       http_response_code(404);
        die(mysqli_error($con));
      }else {
        
      //Prints out the data in a JSON format
      echo '[';
      for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
        echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
      }
      echo ']';
      }
      //Closes the db connection
      $con->close();
      }
  }

  public function RefreshData(){
    //Prints out the data in a JSON format
      echo '[';
      for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
        echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
      }
      echo ']';
  
    }

}

$products = new getProducts();
 