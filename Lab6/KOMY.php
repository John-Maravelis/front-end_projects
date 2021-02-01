<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>KOMY Results</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
<table>
    <th>Cities</th>
    <th>Positive results</th>
<?php

include 'credentials.php'; // safely storing my credentials in another file. In order for the script to run you should provide yours.
$connection = new mysqli($host, $user, $pass, $database) or die("Connection failed..."); // establishing DB connection

// storing the file locations in an array for easy access
$fileLocations = array(
    "data/athina.csv",
    "data/AgDimitrios.csv",
    "data/alimos.csv",
    "data/argiroupoli.csv",
    "data/aspropirgos.csv",
    "data/dionysos.csv",
    "data/eleusina.csv",
    "data/ilioupoli.csv",
    "data/kallithea.csv",
    "data/kifisia.csv",
    "data/laurio.csv",
    "data/mantra.csv",
    "data/mosxato.csv",
    "data/NFaliro.csv",
    "data/PFaliro.csv",
    "data/peiraias.csv",
    "data/penteli.csv",
    "data/peristeri.csv",
    "data/rafina.csv",
    "data/sounio.csv"
);
// creating 2 parallel arrays in order to hold the cities and their corresponding positive results
$results = array();
$cities = array(); 
$csvData = array(); // create an array to hold the data
$flag = false; // in the first iteration (which will be the header) the flag will be false and thus the header won't be parsed  
$j = 0; // counter for the number of files

while(true){
    $file = fopen($fileLocations[$j], "r") or die("File not found...");
    $j++;
    $sum = 0; // sum of each KOMY positive results
    $city = ""; // the name of each city
    $rows = 0; // initializing a counter to keep track of the rows

    while(($csvData = fgetcsv($file, 101, ",")) !== false){ // iterate through the csv file and store the values in an array
        if(!$flag){
            $flag = true;
            continue;
        }
        $rows += 3;
        dataStore($csvData, $rows);
        
        $city = $csvData[2];

        if($csvData[1] === "Θ"){
            $sum++; 
        }elseif($csvData[1] === "ΤΕΛΟΣ") break;
    }
    array_push($results, $sum);
    array_push($cities, $city);
    
    $flag = false; // re-assigning the flag in order to skip the header of the next file
    fclose($file); // closing the opened file before opening the next one
    if ($j === 20) break; // if all files have been parsed break out of the loop
}

function sortData($res, $area){
    // in order for the 2 arrays to maintain parallel whenever I switch the values 
    // of 2 cells in res[] I have to change the values in the correspoding cells in area[]
    
    // implementing insertion sort
    for($i = 0; $i < count($res); $i++){
        $key = $res[$i];
        $areaKey = $area[$i];
        $j = $i - 1;
        
        while($j >= 0 && $key > $res[$j]){
            $res[$j + 1] = $res[$j];
            $area[$j + 1] = $area[$j];
            $j--;
        }
        $res[$j + 1] = $key;
        $area[$j + 1] = $areaKey;
    }

    for($k = 0; $k < count($res); $k++){
        echo "<tr>";
        echo "<td>" . $area[$k] . "</td>";
        echo "<td>" . $res[$k] . "</td>";
        echo "</tr>";
    }
}

function dataStore($data, $r){
    global $connection;
    $query = "";
    if($data[1] !== "ΤΕΛΟΣ"){
        $query = "insert into samples values('" . $data[0] ."', "
                    . "'" . $data[1] . "', "
                    . "'" . $data[2] . "'"
                    . ");" 
                ;
        if(!$connection -> query($query)) echo "Error inserting row... <br>" . $connection -> error; 
    }else{
        $query = "insert into samples values('" . $data[0] ."', "
                    . "'X', "
                    . "'" . $data[2] . "'"
                    . ");" 
                ;
        for($i = $r; $i <= 100; $i++){
            if(!$connection -> query($query)) echo "Error inserting row... <br>" . $connection -> error;
        }
    }
}

$connection -> close(); // closing DB connection
sortData($results, $cities); // sorting the 2 arrays
?>
</table>
</body>
</html>