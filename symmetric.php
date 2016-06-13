<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Тест: Симметричное шифрование</title>
		<link rel="stylesheet" type="text/css" href="style.css">
		<script src="js/jquery-1.11.3.min.js"></script>
		<script src="js/inputmask.js"></script>
		<script src="js/inputmask.regex.extensions.js"></script>
		<script src="js/jquery.inputmask.js"></script>
		<script>

			$(document).ready(function(){
				$('.answer').inputmask('Regex', { regex: "[a-fA-F0-9 ]+" });							// маска в поле ответа
				$('#name').inputmask('Regex', { regex: "[a-zA-Zа-яёА-ЯЁ0-9\-,.)(_ ]+" });		// маска в поле имени
				$('#name').focus();			// устанавливаем фокус на поле с именем
			});

			function submit(chosenQuestions) {			// отправляет ответы на сервер, chosenQuestions – массив с номерами выбранных вопросов
				if (document.getElementById('name').value == "") {					// если имя не введено
					if (document.getElementById("introduce").style.color == "red") {	 // если юзер всё равно не понял,
						alert("Пожалуйства, введите имя.");											// то выводим сообщение
					}
					document.getElementById("introduce").style.color = "red";	// приглашение выделяем красным
					window.location.hash = "#introduce";											// и перепрыгиваем к нему
				} else {
					document.getElementById("introduce").style.color = "black";	// устанавливаем чёрным цвет приглашения
					questionsInTest = 5;		// количество вопросов в этом тесте
					testName = "symmetric";	// имя теста
					test = [];							// то, что передаём серверу
					test[0] = document.getElementById('name').value;		// имя пользователя
					test[1] = chosenQuestions;													// список отобранных вопросов
					test[2] = testName;																	// имя теста

					for (var i = 0; i < questionsInTest; i++) {
						test[i + 3] = document.getElementById('answer' + i).value;	// введённые ответы
					}

					correct = 0;					// количество правильных ответов
	
					$.post(
						"submit.php",
						'test=' + encodeURIComponent(JSON.stringify(test)),
						function(data) {
							$("input").prop("disabled", true);			// блокируем все поля ввода
							data = JSON.parse(data);
	
							for (var i = 0; i < questionsInTest; i++) {			// отмечаем и подсчитываем правильные ответы
								if (data[i] == "1") {
									document.getElementById(i).style.color = "green";		// отмечаем вопрос зелёным, если ответ правильный
									correct++;
								} else {
									document.getElementById(i).style.color = "red";			// и красным, если нет
								}
							}
	
							document.getElementById("submit").remove();											// удаляем кнопку и вместо неё
							$('#result').html("<b>Результат: " + correct + "/" + questionsInTest + "</b>");				// показываем результат
							$('#links').html("<a href=\"results.php\" target=\"_blank\">Просмотреть все результаты</a><br>" + $('#links').html());	// дописываем ссылку на результаты
						}
					);
				}
			}
		</script>
	</head>
	<body>
		<noscript>
			<pre> Включите javascript, без него ничего не получится.</pre>
		</noscript>
		<div id="page">
			<div id="testsbox">
				<h2><center>Тест: Симметричное шифрование</center></h2>
        <center><p id="introduce" style="margin-bottom: 23px;"><b>Представьтесь, пожалуйста: </b><input type="text" id="name" style="width: 370px;" maxlength="41"></p></center>
				<center><img src="images/hint0.svg"></center>
				<?php 
//				показываем ошибки:
//				ini_set('display_errors', 1);
//				ini_set('display_startup_errors', 1);
//				error_reporting(E_ALL);

					$questionsInTest = 5;							// количество вопросов в этом тесте
					$chosenQuestions = array();				// массив выбранных вопросов. наример, [3,2,8] означает, что выбран
																						// четвёртый вопрос из нулевого файла, третий вопрос из первого и девятый вопрос из второго
					for ($i = 0; $i < $questionsInTest; $i++) {      // в этом цикле загружаем вопросы
						$myFile = "./tests/symmetric/questions_" . $i . ".txt";
						$questions = file($myFile);			// загружаем файл в массив
						$lines = count($questions) - 1;	// подсчитываем количество возможных вопросов
						$question = rand(0, $lines);		// выбираем случайный из них
						echo '<p id="' . $i . '">' . $questions[$question] . '</p>';	// выводим его
						echo '<p>Ответ: <input type="text" class="answer" id="answer' . $i . '" style="width: 370px;" maxlength="47"></p><br>';	// и поле для ответа
            array_push($chosenQuestions, $question);	// записываем номер выбранного вопроса
					}

				echo '<input type="submit" id="submit" value="Отправить" onclick="submit(' . json_encode($chosenQuestions) . ')"><span id="result"></span><br><br>';
				echo '<span id="links"><a href=".." target="_blank">На главную</a></span>';
				?>
			</div>
		</div>
	</body>
</html>
