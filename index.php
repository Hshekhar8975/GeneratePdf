<?php
require 'app/bootstrap.php';

$capture= new \Codecourse\Capture\Capture;
$view= new \Codecourse\Views\View;

echo $capture->load('invoice.php',[
  'order' => '150056',
  'amount' => 99.99,
  'name' => 'Himanshu Shekhar'
]);

$capture->respond('invoice.pdf');
