<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Number pattern</title>
</head>
<body>
    <?php
        for($i = 1; $i <= 10; $i += 1){
            for($j = 10; $j >= $i; $j -= 1){
                echo "$j";
            }
        echo "<br>";
        }     
        echo "<br>";
        echo "<br>";

        for($i = 0; $i <= 10; $i += 1){
            for($j = 0; $j <= $i; $j += 1){
                echo "$j";
            }
            echo "<br>";
        }
    ?>
</body>
</html>
