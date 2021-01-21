<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>File I/O</title>
</head>
<body>
    <?php
        echo "Opening files... <br>";
        // open the files I want to read and write from
        $file = fopen("myvalues.txt", "r") or die("File not found.");
        $newFile = fopen("calculations.txt", "a") or die("File not found.");
        
        echo "Reading values and calculating... <br>";
        // parse through each line of the file
        while(!feof($file)){ 
            $temp = fgets($file); // get the value of each line
            $numbers = explode(", ", $temp); // creat an array of the numbers
            
            $avg = array_sum($numbers) / count($numbers); // find the average value of each line
            $min = min($numbers); // find the minimum value of each line
            $max = max($numbers); // find the maximum value of each line
            }

        // set the string I want to append in the new file
        $toWrite = "Average value: "."$avg\n".
                    "Minimum value: "."$min\n".
                    "Maximum value: "."$max\n";
        
        echo "Writing to the new file... <br>";
        fwrite($newFile, $toWrite); // write to the new file 
        
        echo "Closing the files... <br>";
        // close the resources
        fclose($file);  
        fclose($newFile);
    ?>
</body>
</html>