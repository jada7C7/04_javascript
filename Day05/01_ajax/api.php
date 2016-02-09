<?php

$tab = [];
$tab['czas'] = '01.01.2030';
$tab['czasTimestamp'] = time();
$tab['losowaLicza'] = mt_rand(0, 100);



echo json_encode($tab);
