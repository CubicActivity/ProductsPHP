<?php

 //CORS headers to enable any domain to send HTTP requests
 header("Access-Control-Allow-Headers: *");
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: *");

 require_once("./connect.php");
 require_once("./productClass.php");

 class setProducts extends connect{
 
   public function __construct(){
    parent::__construct("localhost", "root", "", "testingdb");
    $con = mysqli_connect($this->host, $this->user, $this->password, $this->db);
  
     //Checks if the connection is valid, otherwise exit
     if (!$con) {
       die("Connection failed: " . mysqli_connect_error());
       }else {

        $type= filter_input(INPUT_POST, "productType", FILTER_SANITIZE_SPECIAL_CHARS);
        $sku= filter_input(INPUT_POST, "SKU", FILTER_SANITIZE_SPECIAL_CHARS);
        $name= filter_input(INPUT_POST, "Name", FILTER_SANITIZE_SPECIAL_CHARS);
        $price= filter_input(INPUT_POST, "Price", FILTER_SANITIZE_SPECIAL_CHARS);

        if(isset($_POST['size'])){
          $size= filter_input(INPUT_POST, "size", FILTER_SANITIZE_SPECIAL_CHARS);
        }
        else $size=0;
        if(isset($_POST['height'])){
          $height=filter_input(INPUT_POST, "height", FILTER_SANITIZE_SPECIAL_CHARS);
        }
        else $height=0;
        if(isset($_POST['width'])){
        $width=filter_input(INPUT_POST, "width", FILTER_SANITIZE_SPECIAL_CHARS);
        }
        else $width=0;
        if(isset($_POST['length'])){
          $length=filter_input(INPUT_POST, "length", FILTER_SANITIZE_SPECIAL_CHARS);
        }
        else $length=0;
        if(isset($_POST['weight'])){
          $weight=filter_input(INPUT_POST, "weight", FILTER_SANITIZE_SPECIAL_CHARS);
        }
        else $weight=0;     
        
        $product = new product($type,$sku,$name,$price,$size, $height, $width, $length, $weight);
  
        $sql = "SELECT COUNT(*) as count FROM Products WHERE SKU = '$sku'";
        $result = mysqli_fetch_object(mysqli_query($con,$sql))->count;
  
        
        if($result==0){
        $sql = "INSERT INTO Products(SKU,Name,Price,Size,Weight,Height,Width,Length,Type) VALUES ('$sku','$name',$price,$size,$weight,$height,$width,$length,'$type')";
        $result = mysqli_query($con,$sql);
        }
        //Redirects to products page
        ?>
        <script type="text/javascript">
        window.location = "http://199.247.20.142:3000";
        </script>
        <?php
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

$newProducts = new setProducts();
