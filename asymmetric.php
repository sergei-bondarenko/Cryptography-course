<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Тест: Асимметричное шифрование</title>
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
					questionsInTest = 9;			// количество вопросов в этом тесте
					testName = "asymmetric";	// имя теста
					test = [];								// то, что передаём серверу
					test[0] = document.getElementById('name').value;		// имя пользователя
					test[1] = chosenQuestions;													// список отобранных вопросов
					test[2] = testName;																	// имя теста

					for (var i = 0; i < questionsInTest; i++) {
						if (i == 6) {			// для вопроса с radiobuttons
							test[i + 3] = $('[name="question6"]:checked').val();				// номер выбранного ответа
						} else {					// для вопросов с полями для ввода
							test[i + 3] = document.getElementById('answer' + i).value;	// введённые ответы
						}
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
				<h2><center>Тест: Асимметричное шифрование</center></h2>
        <center><p id="introduce" style="margin-bottom: 23px;"><b>Представьтесь, пожалуйста: </b><input type="text" id="name" style="width: 370px;" maxlength="41"></p></center>
				<center><?php echo file_get_contents("./images/hint1.svg"); // загружаем подсказку ?></center>
				<?php 
//				показываем ошибки:
//				ini_set('display_errors', 1);
//				ini_set('display_startup_errors', 1);
//				error_reporting(E_ALL);

					$chosenQuestions = array();				// массив выбранных вопросов. наример, [3,2,8] означает, что выбран
																						// четвёртый вопрос из нулевого файла, третий вопрос из первого и девятый вопрос из второго
					// -- нулевой вопрос -- //
					$myFile = "./tests/asymmetric/questions_0.txt";
					$questions = file($myFile);			// загружаем файл в массив
					$lines = count($questions) - 1;	// подсчитываем количество возможных вопросов
					$question = rand(0, $lines);		// выбираем случайный из них
					echo '<p id="0">' . $questions[$question] . '</p>';	// выводим его
					echo '<p>Ответ: <input type="text" class="answer" id="answer0" style="width: 370px;" maxlength="47"></p><br>';	// и поле для ответа
          array_push($chosenQuestions, $question);	// записываем номер выбранного вопроса

					// -- первый вопрос -- //
					$myFile = "./tests/asymmetric/questions_1.txt";
					$questions = file($myFile);			// загружаем файл в массив
					$lines = count($questions) - 1;	// подсчитываем количество возможных вопросов
					$question = rand(0, $lines);		// выбираем случайный из них
					echo '<p id="1">' . $questions[$question] . '</p>';	// выводим его
					echo '<p>Ответ: <input type="text" class="answer" id="answer1" style="width: 370px;" maxlength="47"></p><br>';	// и поле для ответа
          array_push($chosenQuestions, $question);	// записываем номер выбранного вопроса

					// -- второй вопрос -- //
					// выбираем вопрос с тем же номером, что и у предыдущего
					$myFile = "./tests/asymmetric/questions_2.txt";
					$questions = file($myFile);			// загружаем файл в массив
					echo '<p id="2">' . $questions[$question] . '</p>';	// выводим его
					echo '<p>Ответ: <input type="text" class="answer" id="answer2" style="width: 370px;" maxlength="47"></p><br>';	// и поле для ответа
          array_push($chosenQuestions, $question);	// записываем номер выбранного вопроса

					// -- третий вопрос -- //
					// выбираем вопрос с тем же номером, что и у предыдущего
					$myFile = "./tests/asymmetric/questions_3.txt";
					$questions = file($myFile);			// загружаем файл в массив
					echo '<p id="3">' . $questions[$question] . '</p>';	// выводим его
					echo '<p>Ответ: <input type="text" class="answer" id="answer3" style="width: 370px;" maxlength="47"></p><br>';	// и поле для ответа
          array_push($chosenQuestions, $question);	// записываем номер выбранного вопроса

					// -- четвёртый вопрос -- //
					$myFile = "./tests/asymmetric/questions_4.txt";
					$questions = file($myFile);			// загружаем файл в массив
					$lines = count($questions) - 1;	// подсчитываем количество возможных вопросов
					$question = rand(0, $lines);		// выбираем случайный из них
					echo '<p id="4">' . $questions[$question] . '</p>';	// выводим его
					echo '<p>Ответ: <input type="text" class="answer" id="answer4" style="width: 370px;" maxlength="47"></p><br>';	// и поле для ответа
          array_push($chosenQuestions, $question);	// записываем номер выбранного вопроса

					// -- пятый вопрос -- //
					// выбираем вопрос с тем же номером, что и у предыдущего
					$myFile = "./tests/asymmetric/questions_5.txt";
					$questions = file($myFile);			// загружаем файл в массив
					echo '<p id="5">' . $questions[$question] . '</p>';	// выводим его
					echo '<p>Ответ: <input type="text" class="answer" id="answer5" style="width: 370px;" maxlength="47"></p><br>';	// и поле для ответа
          array_push($chosenQuestions, $question);	// записываем номер выбранного вопроса

					// -- шестой вопрос -- //
					// выбираем вопрос с тем же номером, что и у предыдущего
					$myFile = "./tests/asymmetric/questions_6.txt";
					$questions = file($myFile);			// загружаем файл в массив
					$options = explode(",", $questions[$question]);		// сам вопрос и варианты ответов (5 штук) для данного вопроса
					echo '<p id="6" style="margin-bottom: 8px;">' . $options[0] . '</p>';	// выводим его
					echo '<span class="mono"><input type="radio" name="question6" value="1">' . $options[1] . ';<br>';
					echo '<input type="radio" name="question6" value="2">' . $options[2] . ';<br>';
					echo '<input type="radio" name="question6" value="3">' . $options[3] . ';<br>';
					echo '<input type="radio" name="question6" value="4">' . $options[4] . ';<br>';
					echo '<input type="radio" name="question6" value="5">' . $options[5] . '</span><br>';
          array_push($chosenQuestions, $question);	// записываем номер выбранного вопроса

					// -- седьмой вопрос -- //
					// выбираем вопрос с тем же номером, что и у предыдущего
					$myFile = "./tests/asymmetric/questions_7.txt";
					$questions = file($myFile);			// загружаем файл в массив
					echo '<p id="7">' . $questions[$question] . '</p>';	// выводим его
					echo '<p>Ответ: <input type="text" class="answer" id="answer7" style="width: 370px;" maxlength="47"></p><br>';	// и поле для ответа
          array_push($chosenQuestions, $question);	// записываем номер выбранного вопроса

					// -- восьмой вопрос -- //
					// выбираем вопрос с тем же номером, что и у предыдущего
					$myFile = "./tests/asymmetric/questions_8.txt";
					$questions = file($myFile);			// загружаем файл в массив
					echo '<p id="8">' . $questions[$question] . '</p>';	// выводим его
					echo '<p>Ответ: <input type="text" class="answer" id="answer8" style="width: 370px;" maxlength="47"></p><br>';	// и поле для ответа
          array_push($chosenQuestions, $question);	// записываем номер выбранного вопроса

					echo '<input type="submit" id="submit" value="Отправить" onclick="submit(' . json_encode($chosenQuestions) . ')"><span id="result"></span><br><br>';
					echo '<span id="links"><a href=".." target="_blank">На главную</a></span>';
				?>
			</div>
		</div>
	</body>
</html>
