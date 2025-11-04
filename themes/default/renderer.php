<?php
class renderer
{
    function wa_header()
    {
        // This function is called by the application's display() function.
        // We will use it to render the HTML shell.
        echo '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Akaunting UI Redesign</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="themes/default/style.css">
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
</head>
<body>
    <div id="app">
        <sidebar></sidebar>
        <div class="main-content">
            <top-header></top-header>
            <div class="content-area">
                <dashboard></dashboard>
            </div>
        </div>
    </div>
    <script src="themes/default/components/Sidebar.js"></script>
    <script src="themes/default/components/TopHeader.js"></script>
    <script src="themes/default/components/Dashboard.js"></script>
    <script src="themes/default/main.js"></script>
</body>
</html>';
    }

    function wa_footer()
    {
        // This function is called by the application's display() function.
        // We don't need to do anything here for now.
    }

    function display_applications(&$app)
    {
        // This function is called by the application's display() function.
        // We don't need to do anything here for now.
    }
}
?>
