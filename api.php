<?php
header("Content-Type: application/json; charset=UTF-8");

$data = array(
    "net_income" => 12345.67,
    "future_report" => "3 upcoming bills, 5 overdue invoices."
);

echo json_encode($data);
?>
