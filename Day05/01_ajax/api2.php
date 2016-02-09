<?php


if($_SERVER['REQUEST_METHOD'] == 'POST'){

    $recivedData = $_POST;
    $valueOfTimeStamp = $recivedData['keyTimeStamp'];
    $dataDoZwrotu = date('d.m.Y H:i:s', $valueOfTimeStamp);

    $tab = [];
    $tab['przeliczonaData'] = $dataDoZwrotu;

    echo json_encode($tab);


}

?>