<?php

 //CORS headers to enable any domain to send HTTP requests
 header("Access-Control-Allow-Headers: *");
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: *");

 require_once("./connect.php");

class product{

    protected $type, $sku, $Name, $price, $height, $width, $length, $weight;

    public function __construct($type, $sku, $name, $price=0, $size=0, $height=0, $width=0, $length=0, $weight=0){
        $this->type = $type;
        $this->sku = $sku;
        $this->name = $name;
        $this->price = $price;
        $this->size = $size;
        $this->height = $height;
        $this->width = $width;
        $this->length = $length;
        $this->weight = $weight;
    }

    public function getType(){
        return $this->type;
    }
    public function setType($type){
         $this->type=$type;
    }
    public function getSku(){
        return $this->sku;
    }
    public function setSku($sku){
         $this->sku=$sku;
    }
    public function getName(){
        return $this->name;
    }
    public function setName($name){
         $this->name=$name;
    }
    public function getPrice(){
        return $this->$price;
    }
    public function setPrice($price){
         $this->price=$price;
    }
    public function getSize(){
        return $this->$size;
    }
    public function setSize($size){
         $this->size=$size;
    }
    public function getLength(){
        return $this->$price;
    }
    public function setLength($length){
         $this->length=$length;
    }
    public function getWidth(){
        return $this->$price;
    }
    public function setWidth($width){
         $this->width=$width;
    }
    public function getHeight(){
        return $this->$height;
    }
    public function setHeight($height){
         $this->height=$height;
    }
    public function getWeight(){
        return $this->$weight;
    }
    public function setWeight($weight){
         $this->weight=$weight;
    }

 }