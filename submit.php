<?php
	// показываем ошибки:
	//ini_set('display_errors', 1);
	//ini_set('display_startup_errors', 1);
	//error_reporting(E_ALL);

	$test = json_decode($_POST["test"]);
	// $test[0] – имя пользователя
	// $test[1] – список отобранных вопросов
	// $test[2] – имя теста
	// $test[3..] – ответы пользователя

	mb_internal_encoding('utf-8');	// для того, чтобы работала mb_substr

	$test[0] = preg_replace("/[^a-zA-Zа-яёА-ЯЁ0-9\-,.)(_ ]/u", "", $test[0]);		// убираем все нежелательные символы
	$test[0] = mb_substr($test[0], 0, 41);		// обрезаем строку до 41 символов (корректно обрабатывает кириллицу)
	$testName = $test[2];									// имя теста

	if ($test[0] == "") {									// если имя пустое
		$test[0] = "Аноним";
	}

	if (!($testName == "symmetric" || $testName == "asymmetric" || $testName == "signature")) {
		exit();		// если выбран тест, которого нет, выходим
	}

	$fi = new FilesystemIterator("./tests/" . $testName, FilesystemIterator::SKIP_DOTS);	// количество файлов в папке с этим тестом
	$questionsInTest = iterator_count($fi) / 2;		// количество вопросов в этом тесте (количество файлов делённое на два)

	$result = array_fill(0, $questionsInTest, "0");			// создаём массив, размером равным количеству вопросов
																											// "1" – ответил правильно на вопрос, "0" – нет
	$score = 0;											// количество правильных ответов

	for ($i = 0; $i < $questionsInTest; $i++) {      // в этом цикле проверяем ответы
		$myFile = "./tests/" . $testName . "/answers_" . $i . ".txt";
		$answers = file($myFile);				// загружаем файл в массив
		$correctAnswer = $test[1][$i];	// номер правильного ответа
		$answer = $test[$i + 3];				// введённый ответ, который проверяем на правильность
		$answer = preg_replace("/[^a-fA-F0-9]/", "", $answer);	// убираем пробелы и все лишние символы
		$answer = strtolower($answer);													// переводим строку в нижний регистр
		if ($answer == substr($answers[$correctAnswer], 0, -1)) {	// если введён правильный ответ
			$result[$i] = "1";				// с помощью substr убираем последний символ, так как это "/n"
			$score++;
		}
	}

	echo json_encode($result);

	$record = array (
    'userName' => $test[0], 
    'testName' => $testName, 
    'chosenQuestions' => $test[1],
		'timeStamp' => time(),
		'questionsInTest' => $questionsInTest,
		'score' => $score);

	prepend(serialize($record), 'rawresults.txt');	// записываем результат в файл

	function prepend($string, $filename) {			// дописывает строку $string в начало файла $filename
		$context = stream_context_create();
		$fp = fopen($filename, 'r', 1, $context);
		$tmpname = md5($string);
		file_put_contents($tmpname, $string . "\n");		// с новой строки
		file_put_contents($tmpname, $fp, FILE_APPEND);
		fclose($fp);
		unlink($filename);
		rename($tmpname, $filename);
	}
?>
