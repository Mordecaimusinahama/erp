<?php
header("Content-Type: application/json; charset=UTF-8");

// Bootstrap FrontAccounting
$path_to_root = ".";
include_once($path_to_root . "/config.php");

// Fetch Net Income
function get_net_income() {
    $sql = "SELECT SUM(amount) AS net_income FROM " . TB_PREF . "gl_trans WHERE account IN (SELECT account_code FROM " . TB_PREF . "chart_master WHERE account_type IN ('" . CL_INCOME . "', '" . CL_COGS . "', '" . CL_EXPENSE . "'))";
    $result = db_query($sql, "could not get net income");
    $row = db_fetch($result);
    return $row['net_income'];
}

$net_income = get_net_income();

$data = array(
    "net_income" => $net_income,
    "future_report" => "3 upcoming bills, 5 overdue invoices." // This is still mock data
);

echo json_encode($data);
?>
