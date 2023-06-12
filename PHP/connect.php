<?php

 //CORS headers to enable any domain to send HTTP requests
 header("Access-Control-Allow-Headers: *");
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: *");
 
abstract class connect {

    protected $host;
    protected $user;
    protected $password;
    protected $db;

    public function __construct($host, $user , $password, $db){
        $this->host=$host;
        $this->user=$user;
        $this->password=$password;
        $this->db=$db;
    }

}
 