<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Результаты тестирования</title>
		<style>
			h2 {
				font-family: Tahoma, Geneva, sans-serif;
				margin-bottom: 0.5em;
				margin-top: 0.5em;
			}

			a {     /* ссылки */
			  margin-top: 0;
			  margin-bottom: 0;
			  cursor: pointer;
			  color: #000099;
				font-family: "Courier New", Courier, monospace;
				text-decoration: none;	/* убираем подчёркивание */
			}

			a:hover {      /* ссылки меняют цвет при наведении курсора */
			  color: #66CCFF;
			}
		</style>
  </head>
  <body>
<?php
	// показываем ошибки:
	//ini_set('display_errors', 1);
	//ini_set('display_startup_errors', 1);
	//error_reporting(E_ALL);

	date_default_timezone_set("Europe/Moscow");		// устанавливаем московское время

	$records = file('rawresults.txt');							// загружаем файл с сырыми результатами тестов в массив

	$str = "+-------------------------------------------+--------------------------+-----------+-----------------------------+\n" .
				 "|                    Имя                    |           Тест           | Результат |            Сдан*            |\n" .
				 "+-------------------------------------------+--------------------------+-----------+-----------------------------+\n";												// строка, которую будем записывать в файл "results.txt"

	foreach ($records as $record) {		// каждую запись преобразуем в человеческий вид и помещаем в файл "results.txt"
		$record = unserialize($record);	// преобразуем запись в массив
		$str .= "| ";
		$str .= utf_8_sprintf("%-41s", $record['userName']);	// выравниваем имя до ширины в 41 символ пробелами
		$str .= " | ";
    switch ($record['testName']) {
			case "symmetric":
				$str .= "Симметричное шифрование ";
				break;
			case "asymmetric":
				$str .= "Асимметричное шифрование";
				break;
			case "signature":
				$str .= "Электронная подпись     ";
				break;
		}
		$str .= " | ";
		$str .= str_pad($record['score'] . "/" . $record['questionsInTest'], 9, " ", STR_PAD_BOTH);	// выравниваем результат по центру до ширины в 9 символ пробелами
		$str .= " | ";
		$str .= utf_8_sprintf("%-27s", readableDate($record['timeStamp']));	// выравниваем время до ширины в 27 символ пробелами
		$str .= " |\n";
	}

	$str .= "+-------------------------------------------+--------------------------+-----------+-----------------------------+\n";
	$str .= "  * Время минское/московское (UTC+3:00)                                                                           ";

	echo '<center><h2>Результаты тестирования</h2><pre>' . $str . '</pre><a href="..">На главную</a></center>';			// записываем всё в файл

	function readableDate($unixTime) {	// дата и время сдачи в удобочитаемом виде. На вход подаётся unix-время
		$arr = getdate($unixTime);
		$str = $arr['mday'];							// число

    switch ($arr['mon']) {						// месяц
			case "1":
				$str .= " января ";
				break;
			case "2":
				$str .= " февраля ";
				break;
			case "3":
				$str .= " марта ";
				break;
			case "4":
				$str .= " апреля ";
				break;
			case "5":
				$str .= " мая ";
				break;
			case "6":
				$str .= " июня ";
				break;
			case "7":
				$str .= " июля ";
				break;
			case "8":
				$str .= " августа ";
				break;
			case "9":
				$str .= " сентября ";
				break;
			case "10":
				$str .= " октября ";
				break;
			case "11":
				$str .= " ноября ";
				break;
			case "12":
				$str .= " декабря ";
				break;
		}

		$str .= $arr['year'] . " г. в ";			// год

    if (strlen($arr['hours']) < 2) { 
			$str .= "0" . $arr['hours'] . ":";	// если час однозначный, то добавляем начальный нолик
		} else {
			$str .= $arr['hours'] . ":";				// иначе записываем как есть
		}

    if (strlen($arr['minutes']) < 2) { 
			$str .= "0" . $arr['minutes'];			// то же с минутами
		} else {
			$str .= $arr['minutes'];
		}

		return $str;
	}

	function utf_8_sprintf($format) {		// sprintf, который корректно работает с кириллицей
		$args = func_get_args();
		for ($i = 1; $i < count($args); $i++) {
			$args [$i] = iconv('UTF-8', 'ISO-8859-5', $args [$i]);
		}
		return iconv('ISO-8859-5', 'UTF-8', call_user_func_array('sprintf', $args));
 }
?>
  </body>
</html>
