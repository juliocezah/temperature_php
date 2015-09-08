<?php
require 'TEMPService.class.php';

$celsius = $_GET['celsius'];
$tempIndex = 0.0;

if(is_numeric($celsius)) {
    $tempIndex = TEMPService::calculate($celsius);
}

echo $tempIndex;
?>