var aes = function () {
  initialize();          // загружаем в body все div'ы, создаём холст, задаём его параметры, загружаем меню, объявляем переменные
  loadMenu(aesSlide);    // загрузить меню с иконками "вперёд", "назад", "домой" и "повторить"
  n = 0;                 // номер слайда
  aesSlide(n, s);        // запускаем начальный слайд
};

var aesSlide = function (n, s) {     // загрузить слайд №n на холст s
  $("#drawbox").off();              // убираем событие click с drawbox
  switch(n) {
//====================== слайд 1 ======================
    case 0:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/aes/0.svg", function (f) {
        s.append(f);
      });
      $("#textbox").html("<p>AES заменил собой алгоритм DES – первый в истории США стандарт симметричного шифрования, утверждённый в 1977.</p><p>DES использовал слишком короткие ключи шифрования длиной 56 бит, кроме того, были разработаны и продемонстрированы различные атаки на этот алгорим, позволяющие значительно сократить время взлома. В настоящее время DES признаётся ненадёжным и в своём первоначальном виде практически нигде не используется.</p>");
      break;

//====================== слайд 2 ======================
    case 1:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/aes/1.svg", function (f) {
        s.append(f);
      });
      $("#textbox").html("<p>Мы рассмотрим работу алгоритма на примере AES-128 (ключ шифрования длиной 128 бит).</p><p>По состоянию на 2016 год, лучшая описанная атака на AES-128 требует выполнения 2<sup>126</sup> операций.</p><p>Даже если взять триллион машин, каждая из которых способна обрабатывать триллион комбинаций в секунду, то на подбор ключа AES-128 с учетом представленного метода атаки потребуется 2,7 миллиона лет.</p>");
      break;

//====================== слайд 3 ======================

    case 2:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/aes/2.svg", function (f) {
        s.append(f);
      });
      /////// заменяем надписи "открытый текст" и "ключ" на клетки с байтами, показываем сообщение с соотв. hex-кодами
      timeOuts.push(setTimeout(function(){ s.selectAll("text[inkscape\\:label='openTextLabel']").animate({"opacity": "0"}, 300); }, 2500));
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='key']").animate({"opacity": "0"}, 300); }, 2500));
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='openText']").animate({"opacity": "1"}, 300); }, 2650));
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='keyCell']").animate({"opacity": "1"}, 300); }, 2650));
      timeOuts.push(setTimeout(function(){ s.selectAll("text[inkscape\\:label='message']").animate({"opacity": "1"}, 300); }, 2650));
      ///////
      for (i = 0; i <= 15; i++) { 
        // показываем открытый текст: 53 65 63 72 65 74 20 6d 65 73 73 61 67 65 2e 01    
        // и ключ: 1b 48 79 c2 82 d8 95 c1 10 a3 1d cb 0e 58 e9 57
        timeOuts.push(
          setTimeout(
            function(i){ 
              s.selectAll("text[inkscape\\:label='openText" + i + "']").attr({"opacity": "1"}); 
            }, 3500 + i * 200, i)
        );
      }
      timeOuts.push(setTimeout(function(){ s.selectAll("text[inkscape\\:label='AES']").animate({"transform": "scale(2, 2, 0, 0)"}, 200); }, 7000));
      timeOuts.push(setTimeout(function(){ s.selectAll("text[inkscape\\:label='AES']").animate({"transform": "scale(1, 1, 0, 0)"}, 200); }, 7300));
      // показываем шифротекст: bd 00 d9 df 50 c4 7f 33 fc 3c 9a 54 90 5f 6f 71
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='cipherText']").animate({"opacity": "1"}, 150); }, 7400));
      $("#textbox").html("<p>На рисунке изображён пример работы алгоритма AES-128. На вход подаётся сообщение с открытым текстом: «<i>Secret message.</i>», закодированное по таблице ASCII в шестнадцатиричных числах. Каждая клетка на изображении представляет собой один байт.</p><p>Длина данного сообщения составляет 15 байт. Так как до полного блока не хватает одного байта, то в конец открытого текста дописывается байт 01. Если бы не хватало двух байтов, дописывалось бы 02 02, трёх – 03 03 03, и т.д., причём по крайней мере один байт дополнения должен присутствовать в каждом блоке. Этот способ выравнивания блоков предложен стандартом PKCS#7. Существуют и другие варианты решения проблемы выравнивания блоков.</p><p>Ключ шифрования генерируется либо случайным образом, либо из парольной фразы с помощью хеш-функции, либо выбирается совместно участниками криптографического протокола.</p><p>Далее мы предполагаем, что нам уже дан выровненный блок и ключ шифрования.</p>");
      break;

//====================== слайд 4 ======================
    case 3:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/aes/3.svg", function (f) {
        s.append(f);
      });
      // прячем содержимое открытого текста и ключа:
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='toHide']").animate({"opacity": "0"}, 300); }, 2000));
      // уменьшаем блок с ключом:
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='keyCell']").animate({"transform": "matrix(0.25, 0, 0, 0.25, 168, 150)"}, 300); }, 2200));
      // уменьшаем блок с открытым текстом:
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='openTextCell']").animate({"transform": "matrix(0.25, 0, 0, 0.25, 506, 140)"}, 300); }, 2200));
      // показваем раундовые ключи:
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='arrow1']").animate({"opacity": "1"}, 300); }, 2700));
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[inkscape\\:label='KeyExpansion']").attr({"fill": "#a235ff"}); } , 3200));
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[inkscape\\:label='KeyExpansion']").attr({"fill": "#d8a9ff"}); } , 3400));
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='arrow2']").animate({"opacity": "1"}, 300); }, 3400));
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='expKeys']").animate({"opacity": "1"}, 300); }, 3600));
      // передвигаем ключ ко входу AddRoundKey():
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='keyCell']").animate({"transform": "matrix(0.25, 0, 0, 0.25, 500, 210)"}, 500); }, 4500));
      // передвигаем первый раундовый ключ ко входу AddRoundKey():
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='1']").animate({"transform": "translate(412,132)"}, 500);  }, 4500));
      // показываем надпись "Ключ №1" и "Исходный ключ":
      timeOuts.push(setTimeout(function(){ s.selectAll("text[inkscape\\:label='keyNo']").animate({"opacity": "1"}, 200);  }, 5000));
      timeOuts.push(setTimeout(function(){ s.selectAll("text[inkscape\\:label='initialKey']").animate({"opacity": "1"}, 200);  }, 5000));
      // начинаем двигать открытый текст:
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='openTextCell']").animate({"transform": "matrix(0.25, 0, 0, 0.25, 506, 247)"}, 400); }, 5500));
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[inkscape\\:label='AddRoundKey']").attr({"fill": "#00c800"}); } , 5700));
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[inkscape\\:label='AddRoundKey']").attr({"fill": "#a5eaa5"}); } , 5900));
      // меняем блок с открытым текстом на другой - "чистый" - без наличия предущих трансформаций:
      var roundStart = 5900;  // время, когда начинаем гонять блок State по раундам
      var oneRound = 2000;    // время одного витка (один раунд)
      var roundDelay = 0;   // задержка после каждого раунда
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='openTextCell']").attr({"opacity": "0"}); }, roundStart));
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='openTextCell2']").attr({"opacity": "1"}); }, roundStart));
      
      for (i = 0; i <= 8; i++) {  // делаем девять раундов
        // делаем один виток блоком State
        if (i == 3) {        // на четвёртом раунде ускоряем
          oneRound = 1000;   // время одного витка (один раунд)
          roundDelay = 0;    // задержка после каждого раунда
        }
        if (i == 8) {        // на девятом раунде замедляем
          oneRound = 2000;   // время одного витка (один раунд)
          roundDelay = 0;    // задержка после каждого раунда
        }
        timeOuts.push(setTimeout(function(oneRound){ 
          openTextCell2 = s.select("g[inkscape\\:label='openTextCell2']");
          var line = s.select("path[inkscape\\:label='line']");
          openTextCell2.drawAtPath(line, oneRound, {drawpath: 0, startingTransform: ""});
        }, roundStart, oneRound));
        // выводим номер текущего раунда:
        timeOuts.push(setTimeout(function(roundStart, i){ $("#tspan6775").text(i + 1); } , roundStart, roundStart, i));
        // мигаем всеми функциями по мере продвижения блока:
        timeOuts.push(setTimeout(function(roundStart, oneRound){ s.selectAll("rect[inkscape\\:label='SubBytes']").attr({"fill": "#35a7c0"}); } , roundStart + Math.round(oneRound/28.57), roundStart, oneRound));
        timeOuts.push(setTimeout(function(roundStart, oneRound){ s.selectAll("rect[inkscape\\:label='SubBytes']").attr({"fill": "#a3ddea"}); } , roundStart + Math.round(oneRound/11.76), roundStart, oneRound));
        timeOuts.push(setTimeout(function(roundStart, oneRound){ s.selectAll("rect[inkscape\\:label='ShiftRows']").attr({"fill": "#d60000"}); } , roundStart + Math.round(oneRound/8.33), roundStart, oneRound));
        timeOuts.push(setTimeout(function(roundStart, oneRound){ s.selectAll("rect[inkscape\\:label='ShiftRows']").attr({"fill": "#f0c0c0"}); } , roundStart + Math.round(oneRound/5.88), roundStart, oneRound));
        timeOuts.push(setTimeout(function(roundStart, oneRound){ s.selectAll("rect[inkscape\\:label='MixColumns']").attr({"fill": "#bfc400"}); } , roundStart + Math.round(oneRound/4.88), roundStart, oneRound));
        timeOuts.push(setTimeout(function(roundStart, oneRound){ s.selectAll("rect[inkscape\\:label='MixColumns']").attr({"fill": "#f7f9b7"}); } , roundStart + Math.round(oneRound/3.92), roundStart, oneRound));
        timeOuts.push(setTimeout(function(roundStart, oneRound){ s.selectAll("rect[inkscape\\:label='AddRoundKey2']").attr({"fill": "#00c800"}); } , roundStart + Math.round(oneRound/3.45), roundStart, oneRound));
        timeOuts.push(setTimeout(function(roundStart, oneRound){ s.selectAll("rect[inkscape\\:label='AddRoundKey2']").attr({"fill": "#a5eaa5"}); } , roundStart + Math.round(oneRound/2.94), roundStart, oneRound));
        // скрываем текущий сессионный ключ:
        timeOuts.push(setTimeout(function(roundStart, oneRound, i){ s.selectAll("g[inkscape\\:label='" + (i+1) + "']").animate({"opacity": "0"}, Math.round(oneRound/6.67)); } , roundStart + Math.round(oneRound/2.94), roundStart, oneRound, i));
        // передвигаем следующий раундовый ключ ко входу AddRoundKey():
        timeOuts.push(setTimeout(function(roundStart, oneRound, i){ s.selectAll("g[inkscape\\:label='" + (i+2) + "']").animate({"transform": "translate(412,132)"}, Math.round(oneRound/4));  }, roundStart + Math.round(oneRound/2.94), roundStart, oneRound, i));
        // выводим его номер в подпись снизу:
        timeOuts.push(setTimeout(function(i){ $("#tspan4108").text("ключ №" + (i + 2)); }, roundStart + Math.round(oneRound/2.94) + Math.round(oneRound/4), i));
        roundStart = roundStart + oneRound + roundDelay;
      }
      
      // десятый раунд - скрываем MixColumns():
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[inkscape\\:label='MixColumns']").animate({"opacity": "0"}, 300); } , 18900));
      timeOuts.push(setTimeout(function(){ s.selectAll("text[inkscape\\:label='MixColumnsLabel']").animate({"opacity": "0"}, 300); } , 18900));
      // выводим номер раунда:
      timeOuts.push(setTimeout(function(){ $("#tspan6775").text("10"); }, 18900));
      // мигаем поочерёдно всеми функциями:
      timeOuts.push(setTimeout(function(){ openTextCell2.animate({"transform": "matrix(1, 0, 0, 1, 0, 285)"}, 1000); }, 19500));
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[inkscape\\:label='SubBytes']").attr({"fill": "#35a7c0"}); }, 19570));
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[inkscape\\:label='SubBytes']").attr({"fill": "#a3ddea"}); }, 19670));
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[inkscape\\:label='ShiftRows']").attr({"fill": "#d60000"}); }, 19740));
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[inkscape\\:label='ShiftRows']").attr({"fill": "#f0c0c0"}); }, 19840));
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[inkscape\\:label='AddRoundKey2']").attr({"fill": "#00c800"}); }, 19980));
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[inkscape\\:label='AddRoundKey2']").attr({"fill": "#a5eaa5"}); }, 20180));
      // выводим надпись "шифротекст":
      timeOuts.push(setTimeout(function(){ s.selectAll("text[inkscape\\:label='cipherText']").animate({"opacity": "1"}, 300); }, 20500));
      $("#textbox").html("<p>AES состоит из пяти функций:</p><p><b>KeyExpansion()</b> – расширяет ключ шифрования, создавая на его основе 10 различных раундовых ключей по 128 бит каждый.</p><p><b>AddRoundKey()</b> – складывет две матрицы по модулю 2.</p><p><b>SubBytes()</b> – осуществляет подстановку байтов согласно таблице S-box.</p><p><b>ShiftRows()</b> – производит сдвиг байтов по строкам матрицы.</p><p><b>MixColumns()</b> – смешивает байты каждой колонки матрицы. В последнем раунде не используется.</p><p>Далее подробно рассмотрим каждую из этих функций.</p>");
      break;

//====================== слайд 5 ======================
    case 4:
      s.clear();
      stopAllTimers();                  // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      var m1 = [], m2 = [];             // две слагаемые матрицы
      Snap.load("images/aes/4.svg", function (f) {
        s.append(f);
        for (j = 0; j <= 15; j++) {     // заполняем случайными байтами две матрицы, а третью очищаем
                                        // использую j, потому что с i не работает
          m1[j] = randChar("01234567890abcdef", 2);
          m2[j] = randChar("01234567890abcdef", 2);
          $("#1_" + j).text(m1[j]);
          $("#2_" + j).text(m2[j]);
          $("#3_" + j).text("");
        }
      });

      timeOuts.push(setTimeout(function(){ 
        s.selectAll("tspan[id='1_0']").animate({"fill": "#ff0000"}, 200);             // выделяем первый байт первой матрицы
        $("#xor1").text(m1[0]);                                                       // копируем из него текст в столбик сложения
        s.selectAll("text[inkscape\\:label='xor1']").animate({"opacity": "1"}, 200);  // показываем первое слагаемое 
      } , 2000));
 
      timeOuts.push(setTimeout(function(){ 
        s.selectAll("tspan[id='2_0']").animate({"fill": "#098300"}, 200);             // выделяем первый байт второй матрицы
        $("#xor2").text(m2[0]);                                                       // копируем из него текст в столбик сложения
        s.selectAll("text[inkscape\\:label='xor2']").animate({"opacity": "1"}, 200);  // показываем первое слагаемое 
        s.selectAll("g[inkscape\\:label='xor1']").animate({"opacity": "1"}, 200);     // показываем ⊕ и черту над результатом
      } , 2500));

      timeOuts.push(setTimeout(function(){ 
        s.selectAll("g[inkscape\\:label='arrow_right']").animate({"opacity": "1"}, 200);  // показываем стрелку вправо
        $("#xor4").text( hexToBinary(m1[0]).result );     /// переводим шестнадцатиричные значения в двоичные
        $("#xor5").text( hexToBinary(m2[0]).result );     ///
        s.selectAll("text[inkscape\\:label='xor4']").animate({"opacity": "1"}, 200);  /// показываем эти значения
        s.selectAll("text[inkscape\\:label='xor5']").animate({"opacity": "1"}, 200);  ///
        s.selectAll("g[inkscape\\:label='xor2']").animate({"opacity": "1"}, 200);     // показываем ⊕ и черту над результатом
      } , 3000));
      
      timeOuts.push(setTimeout(function(){ 
        $("#xor6").text( xorBytes($("#xor4").text(), $("#xor5").text()) );           // складываем по модулю два двоичные числа       
        s.selectAll("text[inkscape\\:label='xor6']").animate({"opacity": "1"}, 200); // показываем результат
      } , 3500));
      
      timeOuts.push(setTimeout(function(){ 
        s.selectAll("g[inkscape\\:label='arrow_left']").animate({"opacity": "1"}, 200);  // показываем стрелку влево
        $("#xor3").text( byteToHex( $("#xor6").text() ) );        // переводим двоичный результат в hex
        $("#3_0").text( $("#xor3").text() );                      // копируем результат в матрицу
        s.selectAll("tspan[id='3_0']").animate({"fill": "#0000ff"}, 200);            // выделяем его синим цветом
        s.selectAll("text[inkscape\\:label='xor3']").animate({"opacity": "1"}, 200); // показываем результат
        s.selectAll("text[inkscape\\:label='3_0']").animate({"opacity": "1"}, 200);  // показываем результат в матрице
      } , 4000));
      
      timeOuts.push(setTimeout(function(){ 
        $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
          stopAllTimers();                 // останавливаем все таймеры
          $("#drawbox").off();             // при последующих кликах ничего не делать
          s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь
          s.selectAll("tspan[id='1_0']").animate({"fill": "#000000"}, 200);  //// убираем выделение цветом
          s.selectAll("tspan[id='2_0']").animate({"fill": "#000000"}, 200);  //// в матрицах
          s.selectAll("tspan[id='3_0']").animate({"fill": "#000000"}, 200);  ////
          s.selectAll("text[inkscape\\:label='xor1']").attr({"opacity": "0"});          ///
          s.selectAll("text[inkscape\\:label='xor2']").attr({"opacity": "0"});          ///
          s.selectAll("text[inkscape\\:label='xor3']").animate({"opacity": "0"}, 200);  /// скрываем предыдущие
          s.selectAll("text[inkscape\\:label='xor4']").animate({"opacity": "0"}, 200);  /// расчёты
          s.selectAll("text[inkscape\\:label='xor5']").animate({"opacity": "0"}, 200);  ///
          s.selectAll("text[inkscape\\:label='xor6']").animate({"opacity": "0"}, 200);  ///
          s.selectAll("g[inkscape\\:label='arrow_left']").animate({"opacity": "0"}, 200);  // скрываем стрелку влево
          $("#xor1").text(m1[1]);    //// выводим вторые значения из матриц для расчётов
          $("#xor2").text(m2[1]);    ////
          s.selectAll("text[inkscape\\:label='xor1']").animate({"opacity": "1"}, 200);  /// показываем
          s.selectAll("text[inkscape\\:label='xor2']").animate({"opacity": "1"}, 200);  /// их
          s.selectAll("tspan[id='1_1']").animate({"fill": "#ff0000"}, 200);  //// делаем выделение цветом
          s.selectAll("tspan[id='2_1']").animate({"fill": "#098300"}, 200);  //// в матрицах элемента №2
          s.selectAll("tspan[id='3_1']").animate({"fill": "#0000ff"}, 200);  ////
          /////////////////// начало кода для первого блока ввода ///////////////
          /// создать поле для ввода (с помощью функции input) через 1 с после клика
          /// правильный ответ: hexToBinary(m1[1]).result
          /// все символы, кроме /[^0-1]/g будут удаляться
          /// максимальная количество символов в поле ввода = 8, ширина поля = 95 пикселей
          /// идентификатор мигающего ореола = "g[inkscape\\:label='glow1']"
          /// идентификатор границы блока ввода = "rect[id='border1']"
          /// задаём координаты блока ввода = "translate(428.35 346)"
          /// затем передаётся текст, выводимый в боковое окошко, при установке фокуса на поле ввода
          /// и, наконец, callback-функция, которая вызывается после ввода верного ответа
          timeOuts.push( setTimeout(input, 1000, hexToBinary(m1[1]).result, /[^0-1]/g, 8, "95px", "g[inkscape\\:label='glow1']", "rect[id='border1']", "translate(428.35 346)", "<p>Переведите число <b>" + $("#xor1").text() + "</b> из шестнадцатиричной системы счисления в двоичную. Ниже приведена таблица перевода.</p><p>0 = 0000<br>1 = 0001<br>2 = 0010<br>3 = 0011<br>4 = 0100<br>5 = 0101<br>6 = 0110<br>7 = 0111<br>8 = 1000<br>9 = 1001<br>a = 1010<br>b = 1011<br>c = 1100<br>d = 1101<br>e = 1110<br>f = 1111</p>", 
            function (){
              var line = s.select("path[inkscape\\:label='OK1']");
              line.draw(200);               // рисуем галочку
              $("#textdiv").remove();       // удаляем блок ввода
              $("#xor4").text( hexToBinary(m1[1]).result );         // переносим правильный ответ
              s.selectAll("rect[id='border1']").attr({"opacity": "0"}); // скрываем рамку
              s.selectAll("text[inkscape\\:label='xor4']").attr({"opacity": "1"}); // показываем его
              /////////////////// начало кода для второго блока ввода ///////////////
              /// создать поле для ввода (с помощью функции input) через 500 мс после ввода правильного предыдущего ответа
              /// правильный ответ: hexToBinary(m2[1]).result
              /// идентификатор мигающего ореола = "g[inkscape\\:label='glow2']"
              /// идентификатор границы блока ввода = "rect[id='border2']"
              /// задаём координаты блока ввода = "translate(428.35 372)"
              /// остальное то же самое
              timeOuts.push( setTimeout(input, 500, hexToBinary(m2[1]).result, /[^0-1]/g, 8, "95px", "g[inkscape\\:label='glow2']", "rect[id='border2']", "translate(428.35 372)", "<p>Переведите число <b>" + $("#xor2").text() + "</b> из шестнадцатиричной системы счисления в двоичную. Ниже приведена таблица перевода.</p><p>0 = 0000<br>1 = 0001<br>2 = 0010<br>3 = 0011<br>4 = 0100<br>5 = 0101<br>6 = 0110<br>7 = 0111<br>8 = 1000<br>9 = 1001<br>a = 1010<br>b = 1011<br>c = 1100<br>d = 1101<br>e = 1110<br>f = 1111</p>", 
                function (){
                  s.selectAll("path[inkscape\\:label='OK1']").attr({"opacity": "0"}); // убираем предыдущую галочку
                  var line = s.select("path[inkscape\\:label='OK2']");
                  line.draw(200);               // рисуем галочку
                  $("#textdiv").remove();       // удаляем блок ввода
                  $("#xor5").text( hexToBinary(m2[1]).result );         // переносим правильный ответ
                  s.selectAll("rect[id='border2']").attr({"opacity": "0"}); // скрываем рамку
                  s.selectAll("text[inkscape\\:label='xor5']").attr({"opacity": "1"}); // показываем его
                  /////////////////// начало кода для третьего блока ввода ///////////////
                  /// создать поле для ввода (с помощью функции input) через 500 мс после ввода правильного предыдущего ответа
                  /// правильный ответ: xorBytes($("#xor4").text(), $("#xor5").text())
                  /// идентификатор мигающего ореола = "g[inkscape\\:label='glow3']"
                  /// идентификатор границы блока ввода = "rect[id='border3']"
                  /// задаём координаты блока ввода = "translate(428.35 400)"
                  /// остальное то же самое
                  timeOuts.push( setTimeout(input, 500, xorBytes($("#xor4").text(), $("#xor5").text()), /[^0-1]/g, 8, "95px", "g[inkscape\\:label='glow3']", "rect[id='border3']", "translate(428.35 400)", "<p>Выполните операцию XOR над каждой парой битов.</p><p>0 ⊕ 0 = 0<br>0 ⊕ 1 = 1<br>1 ⊕ 0 = 1<br>1 ⊕ 1 = 0</p>", 
                    function (){
                      s.selectAll("path[inkscape\\:label='OK2']").attr({"opacity": "0"}); // убираем предыдущую галочку
                      var line = s.select("path[inkscape\\:label='OK3']");
                      line.draw(200);               // рисуем галочку
                      $("#textdiv").remove();       // удаляем блок ввода
                      $("#xor6").text( xorBytes($("#xor4").text(), $("#xor5").text()) );      // переносим правильный ответ
                      s.selectAll("text[inkscape\\:label='xor6']").attr({"opacity": "1"});    // показываем его
                      s.selectAll("rect[id='border3']").attr({"opacity": "0"}); // скрываем рамку
                      s.selectAll("g[inkscape\\:label='arrow_left']").animate({"opacity": "1"}, 200);  // показываем стрелку влево
                      /////////////////// начало кода для четвёртого блока ввода ///////////////
                      /// создать поле для ввода (с помощью функции input) через 500 мс после ввода правильного предыдущего ответа
                      /// правильный ответ: byteToHex( $("#xor6").text() )
                      /// все символы, кроме /[^0-9a-f]/g будут удаляться
                      /// максимальная количество символов в поле ввода = 2, ширина поля = 30 пикселей
                      /// идентификатор мигающего ореола = "g[inkscape\\:label='glow4']"
                      /// идентификатор границы блока ввода = "rect[id='border4']"
                      /// задаём координаты блока ввода = "translate(269 400)"
                      /// остальное то же самое
                      timeOuts.push( setTimeout(input, 500, byteToHex( $("#xor6").text() ), /[^0-9a-f]/g, 2, "30px", "g[inkscape\\:label='glow4']", "rect[id='border4']", "translate(269 400)", "<p>Переведите результат <b>" + $("#xor6").text() + "</b> в шестнадцатиричный вид.</p><p>0 = 0000<br>1 = 0001<br>2 = 0010<br>3 = 0011<br>4 = 0100<br>5 = 0101<br>6 = 0110<br>7 = 0111<br>8 = 1000<br>9 = 1001<br>a = 1010<br>b = 1011<br>c = 1100<br>d = 1101<br>e = 1110<br>f = 1111</p>", 
                        function (){
                          s.selectAll("path[inkscape\\:label='OK3']").attr({"opacity": "0"}); // убираем предыдущую галочку
                          var line = s.select("path[inkscape\\:label='OK4']");
                          line.draw(200);               // рисуем галочку
                          $("#textdiv").remove();       // удаляем блок ввода
                          $("#xor3").text( byteToHex( $("#xor6").text() ) );         // переносим правильный ответ
                          s.selectAll("text[inkscape\\:label='xor3']").attr({"opacity": "1"}); // показываем его
                          s.selectAll("rect[id='border4']").attr({"opacity": "0"}); // скрываем рамку
                          $("#3_1").text( $("#xor3").text() );                      // копируем результат в матрицу
                          s.selectAll("text[inkscape\\:label='3_1']").animate({"opacity": "1"}, 200); // показываем результат в матрице
                          timeOuts.push(setTimeout(function(){ 
                            s.selectAll("g[inkscape\\:label='arrow_left']").animate({"opacity": "0"}, 200);   // скрываем стрелку влево
                            s.selectAll("g[inkscape\\:label='arrow_right']").animate({"opacity": "0"}, 200);  // скрываем стрелку вправо
                            s.selectAll("text[inkscape\\:label='xor4']").animate({"opacity": "0"}, 200);  /// скрываем правый столбик
                            s.selectAll("text[inkscape\\:label='xor5']").animate({"opacity": "0"}, 200);  ///
                            s.selectAll("text[inkscape\\:label='xor6']").animate({"opacity": "0"}, 200);  ///
                            s.selectAll("g[inkscape\\:label='xor2']").animate({"opacity": "0"}, 200);     ///
                            s.selectAll("path[inkscape\\:label='OK4']").animate({"opacity": "0"}, 200);   // скрываем галочку
                          } , 1000));
                          for (i = 0; i <= 13; i++) {
                            timeOuts.push(setTimeout(function(i, m1, m2){ 
                              s.selectAll("tspan[id='1_" + (i+1) + "']").attr({"fill": "#000000"});  /// устанавливаем чёрный цвет
                              s.selectAll("tspan[id='2_" + (i+1) + "']").attr({"fill": "#000000"});  /// для предыдущих клеток в матрице
                              s.selectAll("tspan[id='3_" + (i+1) + "']").attr({"fill": "#000000"});  ///
                              s.selectAll("tspan[id='1_" + (i+2) + "']").attr({"fill": "#ff0000"});  //// делаем выделение цветом
                              s.selectAll("tspan[id='2_" + (i+2) + "']").attr({"fill": "#098300"});  //// в матрицах текущего элемента
                              s.selectAll("tspan[id='3_" + (i+2) + "']").attr({"fill": "#0000ff"});  ////
                              $("#xor1").text(m1[i + 2]);    //// значения из матриц для расчётов
                              $("#xor2").text(m2[i + 2]);    //// в столбик
                              $("#xor3").text( byteToHex(xorBytes(hexToBinary(m1[i + 2]).result, hexToBinary(m2[i + 2]).result)) ); // складываем hex числа
                              s.selectAll("text[inkscape\\:label='3_" + (i+2) + "']").attr({"opacity": "1"}); // показываем результат в 3-ей матрице
                              $("#3_" + (i+2)).text( $("#xor3").text() );                      // копируем результат в матрицу
                              $("#textbox").html("<p>Все оставшиеся ячейки матрицы заполняются аналогино.</p>");
                            } , 3000 + i * 1000, i, m1, m2));
                          }
                        }
                      ) );
                      /////////////////// конец кода для четвёртого блока ввода ///////////////
                    }
                  ) );
                  /////////////////// конец кода для третьего блока ввода ///////////////
                }
              ) );
              /////////////////// конец кода для второго блока ввода ///////////////
            }
          ) );
          /////////////////// конец кода для первого блока ввода ///////////////
        });
        clickToContinue();                 // показываем мигающую мышь
      } , 5000));

      $("#textbox").html("<p><b>AddRoundKey()</b> выполняет операцию XOR над элементами двух матриц. Сложение по модулю два производится над соотвествующими ячейками сверху вниз слева направо.</p><p>Для того, чтобы выполнить сложение, необходимо перевести байты из шестнадцатиричной системы счисления в двоичную, выполнить побитовое XOR и затем результат перевести обратно в шестнадцатиричный вид для более удобного восприятия.</p><p>Кликните по картинке для продолжения.</p>");
      break;

//====================== слайд 6 ======================
    case 5:
      s.clear();
      stopAllTimers();                  // останавливаем все запущенные таймауты и интервалы
      $("#drawbox").off();              // убираем событие click с drawbox
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/aes/5.svg", function (f) {
        s.append(f);
      });
      timeOuts.push(setTimeout(function(){ 
        // выносим значение из первой клетки:
        s.selectAll("text[inkscape\\:label='1_0']").animate({"transform": "matrix(1.5, 0, 0, 1.5, -270, -172)"}, 300);
      } , 2000));
      timeOuts.push(setTimeout(function(){ 
        // выделяем строку:
        s.selectAll("g[inkscape\\:label='firstDigit']").animate({"opacity": "1"}, 300);
      } , 2500));
      timeOuts.push(setTimeout(function(){ 
        // выделяем столбец:
        s.selectAll("g[inkscape\\:label='secondDigit']").animate({"opacity": "1"}, 300);
        // выделяем число на пересечении:
        s.selectAll("tspan[id='0']").animate({"fill": "#000000"}, 300);
      } , 3000));
      timeOuts.push(setTimeout(function(){ 
        // показываем первую ячейку в таблице с результатами:
        s.selectAll("text[inkscape\\:label='2_0']").animate({"opacity": "1"}, 300);
      } , 3500));
      timeOuts.push(setTimeout(function(){ 
        clickToContinue();                 // показываем мигающую мышь
        $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
          stopAllTimers();                 // останавливаем все таймеры
          $("#drawbox").off();             // при последующих кликах ничего не делать
          s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь
          s.selectAll("g[inkscape\\:label='firstDigit']").animate({"opacity": "0"}, 300);  /// скрываем выделение строкм
          s.selectAll("g[inkscape\\:label='secondDigit']").animate({"opacity": "0"}, 300); /// и столбца
          // отправляем первую ячейку обратно:
          s.selectAll("text[inkscape\\:label='1_0']").animate({"transform": "matrix(1, 0, 0, 1, 0, 0)"}, 300);
          s.selectAll("tspan[id='0']").attr({"fill": "#545454"});    // возвращаем цвет текста на серый в S-BOX
          s.selectAll("tspan[id='2_0']").attr({"fill": "#000000"});  // убираем выделение во второй таблице
          $("#textbox").html("<p><b>SubBytes()</b> осуществляет подстановку байтов согласно таблице S-box (сокращение от \"substitution box\" – таблица подстановок).</p><p>Она имеет постоянный вид и определена в стандарте AES.</p><p>Первая цифра каждого из байтов входной матрицы отпределяет строку, а вторая – столбец в таблице S-box. Байт, полученный на их пересечении, заносится в соотвествующую ячейку выходной матрицы.</p>");
          for (i = 0; i <= 14; i++) {
            timeOuts.push(setTimeout(function(i){ 
              if (i >= 1) {  // здесь очищаем предыдущие выделения цветами
                s.selectAll("tspan[id='1_" + i + "']").attr({"fill": "#000000"});  // убираем выделение в первой таблице
                s.selectAll("tspan[id='2_" + i + "']").attr({"fill": "#000000"});  // убираем выделение во второй таблице
                s.selectAll("tspan[id='" + i + "']").attr({"fill": "#545454"});    // возвращаем цвет текста на серый в S-BOX
                s.selectAll("rect[inkscape\\:label='" + i + "']").attr({"opacity": "0"}); // убираем жёлтое выделение
              }
              s.selectAll("tspan[id='1_" + (i+1) + "']").attr({"fill": "#098300"}); // выделяем значение в первой таблице
              s.selectAll("tspan[id='" + (i+1) + "']").attr({"fill": "#000000"});   // выделяем чёрным цветом очередное значение в S-BOX
              s.selectAll("rect[inkscape\\:label='" + (i+1) + "']").attr({"opacity": "1"}); // показываем также жёлтое выделение
              s.selectAll("text[inkscape\\:label='2_" + (i+1) + "']").animate({"opacity": "1"}, 300); // показываем значение в 3-ей табл.
            } , 1000 + i * 500, i));
          }
        });
      } , 4500));
      $("#textbox").html("<p><b>SubBytes()</b> осуществляет подстановку байтов согласно таблице S-box (сокращение от \"substitution box\" – таблица подстановок).</p><p>Она имеет постоянный вид и определена в стандарте AES.</p><p>Первая цифра каждого из байтов входной матрицы отпределяет строку, а вторая – столбец в таблице S-box. Байт, полученный на их пересечении, заносится в соотвествующую ячейку выходной матрицы.</p><p>Кликните по картинке для продолжения.</p>");
      break;

//====================== слайд 7 ======================
    case 6:
      s.clear();
      stopAllTimers();                  // останавливаем все запущенные таймауты и интервалы
      $("#drawbox").off();              // убираем событие click с drawbox
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/aes/6.svg", function (f) {
        s.append(f);
      });
      timeOuts.push(setTimeout(function(){ 
        s.selectAll("g[inkscape\\:label='text']").animate({"opacity": "1"}, 200); // показываем текст "смещение на 1 байт"
      } , 1500));
      /////////// сдвиг второй строки на один байт:
      timeOuts.push(setTimeout(function(){
        s.selectAll("g[id='1']").animate({"transform": "matrix(1.5, 0, 0, 1.5, 210, -172)"}, 200);
        s.selectAll("g[id='5']").animate({"transform": "matrix(1, 0, 0, 1, 249, 120)"}, 400);
        s.selectAll("g[id='9']").animate({"transform": "matrix(1, 0, 0, 1, 281, 120)"}, 400);
        s.selectAll("g[id='13']").animate({"transform": "matrix(1, 0, 0, 1, 313, 120)"}, 400);
      } , 2000));
      timeOuts.push(setTimeout(function(){
        s.selectAll("g[id='1']").animate({"transform": "matrix(1, 0, 0, 1, 345, 120)"}, 300);
        s.selectAll("g[inkscape\\:label='text']").animate({"transform": "matrix(1, 0, 0, 1, 0, 23)"}, 300);
      } , 2200));
      timeOuts.push(setTimeout(function(){
        $("#text").text("сдвиг на 2 байта");
      } , 2300));
      /////////// сдвиг третьей строки на два байта:
      timeOuts.push(setTimeout(function(){
        s.selectAll("g[id='2']").animate({"transform": "matrix(1.5, 0, 0, 1.5, 210, -150)"}, 200);
        s.selectAll("g[id='6']").animate({"transform": "matrix(1, 0, 0, 1, 249, 143)"}, 400);
        s.selectAll("g[id='10']").animate({"transform": "matrix(1, 0, 0, 1, 281, 143)"}, 400);
        s.selectAll("g[id='14']").animate({"transform": "matrix(1, 0, 0, 1, 313, 143)"}, 400);
      } , 3000));
      timeOuts.push(setTimeout(function(){
        s.selectAll("g[id='2']").animate({"transform": "matrix(1, 0, 0, 1, 345, 143)"}, 300);
      } , 3200));
      timeOuts.push(setTimeout(function(){
        s.selectAll("g[id='6']").animate({"transform": "matrix(1.5, 0, 0, 1.5, 210, -150)"}, 200);
        s.selectAll("g[id='10']").animate({"transform": "matrix(1, 0, 0, 1, 249, 143)"}, 400);
        s.selectAll("g[id='14']").animate({"transform": "matrix(1, 0, 0, 1, 281, 143)"}, 400);
        s.selectAll("g[id='2']").animate({"transform": "matrix(1, 0, 0, 1, 313, 143)"}, 400);
      } , 3500));
      timeOuts.push(setTimeout(function(){
        s.selectAll("g[id='6']").animate({"transform": "matrix(1, 0, 0, 1, 345, 143)"}, 300);
        s.selectAll("g[inkscape\\:label='text']").animate({"transform": "matrix(1, 0, 0, 1, 0, 46)"}, 300);
      } , 3700));
      timeOuts.push(setTimeout(function(){
        $("#text").text("сдвиг на 3 байта");
      } , 3800));
      /////////// сдвиг четвёртой строки на три байта:
      timeOuts.push(setTimeout(function(){
        s.selectAll("g[id='3']").animate({"transform": "matrix(1.5, 0, 0, 1.5, 210, -127)"}, 200);
        s.selectAll("g[id='7']").animate({"transform": "matrix(1, 0, 0, 1, 249, 166)"}, 400);
        s.selectAll("g[id='11']").animate({"transform": "matrix(1, 0, 0, 1, 281, 166)"}, 400);
        s.selectAll("g[id='15']").animate({"transform": "matrix(1, 0, 0, 1, 313, 166)"}, 400);
      } , 4500));
      timeOuts.push(setTimeout(function(){
        s.selectAll("g[id='3']").animate({"transform": "matrix(1, 0, 0, 1, 345, 166)"}, 300);
      } , 4700));
      timeOuts.push(setTimeout(function(){
        s.selectAll("g[id='7']").animate({"transform": "matrix(1.5, 0, 0, 1.5, 210, -127)"}, 200);
        s.selectAll("g[id='11']").animate({"transform": "matrix(1, 0, 0, 1, 249, 166)"}, 400);
        s.selectAll("g[id='15']").animate({"transform": "matrix(1, 0, 0, 1, 281, 166)"}, 400);
        s.selectAll("g[id='3']").animate({"transform": "matrix(1, 0, 0, 1, 313, 166)"}, 400);
      } , 5000));
      timeOuts.push(setTimeout(function(){
        s.selectAll("g[id='7']").animate({"transform": "matrix(1, 0, 0, 1, 345, 166)"}, 300);
      } , 5200));
      timeOuts.push(setTimeout(function(){
        s.selectAll("g[id='11']").animate({"transform": "matrix(1.5, 0, 0, 1.5, 210, -127)"}, 200);
        s.selectAll("g[id='15']").animate({"transform": "matrix(1, 0, 0, 1, 249, 166)"}, 400);
        s.selectAll("g[id='3']").animate({"transform": "matrix(1, 0, 0, 1, 281, 166)"}, 400);
        s.selectAll("g[id='7']").animate({"transform": "matrix(1, 0, 0, 1, 313, 166)"}, 400);
      } , 5500));
      timeOuts.push(setTimeout(function(){
        s.selectAll("g[id='11']").animate({"transform": "matrix(1, 0, 0, 1, 345, 166)"}, 300);
      } , 5700));
      $("#textbox").html("<p><b>ShiftRows()</b> осуществляет циклический сдвиг влево строк матрицы:<br>вторую строку – на 1 байт;<br>третью строку – на 2 байта;<br>четвёртую строку – на 3 байта.</p><p>Первая строка не изменяется.</p>");
      break;

//====================== слайд 8 ======================
    case 7:
      s.clear();
      stopAllTimers();                  // останавливаем все запущенные таймауты и интервалы
      $("#drawbox").off();              // убираем событие click с drawbox
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/aes/7.svg", function (f) {
        s.append(f);
      });
      timeOuts.push(setTimeout(function(){ 
        clickToContinue();                 // показываем мигающую мышь
        $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
          stopAllTimers();                  // останавливаем все запущенные таймауты и интервалы
          $("#drawbox").off();              // убираем событие click с drawbox
          s.select("g[inkscape\\:label='Layer 1']").attr({"style": "display:none"});    /// скрываем текущий слой,
          s.select("g[inkscape\\:label='Layer 2']").attr({"style": "display:inline"});  /// показываем следующий
          $("#textbox").html("<p>Переводим множители из шестнадцатиричной системы счисления в двоичную.</p><p>0 = 0000<br>1 = 0001<br>2 = 0010<br>3 = 0011<br>4 = 0100<br>5 = 0101<br>6 = 0110<br>7 = 0111<br>8 = 1000<br>9 = 1001<br>a = 1010<br>b = 1011<br>c = 1100<br>d = 1101<br>e = 1110<br>f = 1111</p>");
          clickToContinue();                 // показываем мигающую мышь
          $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
            stopAllTimers();                  // останавливаем все запущенные таймауты и интервалы
            $("#drawbox").off();              // убираем событие click с drawbox
            s.select("g[inkscape\\:label='Layer 2']").attr({"style": "display:none"});
            s.select("g[inkscape\\:label='Layer 3']").attr({"style": "display:inline"});
            $("#textbox").html("<p>Далее байты записываются в полиномиальной форме по следующему правилу: каждый бит умножается на соответствующую ему степень х<sup>n</sup> и полученные произведения складываются по модулю два.</p><p>Естественно, если соотвествующий бит равен нулю, то и произведение на степень х<sup>n</sup> равно нулю, поэтому его не записываем.</p>");
            clickToContinue();                 // показываем мигающую мышь
            $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
              stopAllTimers();                  // останавливаем все запущенные таймауты и интервалы
              $("#drawbox").off();              // убираем событие click с drawbox
              s.select("g[inkscape\\:label='Layer 3']").attr({"style": "display:none"});
              s.select("g[inkscape\\:label='Layer 4']").attr({"style": "display:inline"});
              $("#textbox").html("<p>Раскрываем скобки как обычно.</p>");
              clickToContinue();                 // показываем мигающую мышь
              $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
                stopAllTimers();                  // останавливаем все запущенные таймауты и интервалы
                $("#drawbox").off();              // убираем событие click с drawbox
                s.select("g[inkscape\\:label='Layer 4']").attr({"style": "display:none"});
                s.select("g[inkscape\\:label='Layer 5']").attr({"style": "display:inline"});
                $("#textbox").html("<p>Одинаковые переменные \"уничтожаются\", так как XOR двух одинаковых чисел всегда даёт ноль.</p>");
                clickToContinue();                 // показываем мигающую мышь
                $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
                  stopAllTimers();                  // останавливаем все запущенные таймауты и интервалы
                  $("#drawbox").off();              // убираем событие click с drawbox
                  s.select("g[inkscape\\:label='Layer 5']").attr({"style": "display:none"});
                  s.select("g[inkscape\\:label='Layer 6']").attr({"style": "display:inline"});
                  $("#textbox").html("<p>Полученный результат не входит в наше поле GF(2<sup>8</sup>) – если перевести полином в двоичный вид, то он будет занимать больше одного байта. Поэтому берётся остаток от деления его на специально выбранный создателями алгоритма полином <b>x<sup>8</sup>⊕x<sup>4</sup>⊕x<sup>3</sup>⊕x⊕1</b>, называемый модулем.</p><p>Деление полинома на полином производится обычным образом, единственная особенность – это использование XOR везде вместо сложения и вычитания. Поэтому одинаковые переменные опять же \"уничтожаются\". Вспомнить, как делить полиномы можно, например, <a href=\"http://kontromat.ru/?page_id=2856\" target=\"_blank\">здесь</a>.</p>");
                  clickToContinue();                 // показываем мигающую мышь
                  $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
                    stopAllTimers();                  // останавливаем все запущенные таймауты и интервалы
                    $("#drawbox").off();              // убираем событие click с drawbox
                    s.select("g[inkscape\\:label='Layer 6']").attr({"style": "display:none"});
                    s.select("g[inkscape\\:label='Layer 7']").attr({"style": "display:inline"});
                    $("#textbox").html("<p>Полученный остаток и есть результат умножения, записанный в полиномиальной форме.</p>");
                    clickToContinue();                 // показываем мигающую мышь
                    $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
                      stopAllTimers();                  // останавливаем все запущенные таймауты и интервалы
                      $("#drawbox").off();              // убираем событие click с drawbox
                      s.select("g[inkscape\\:label='Layer 7']").attr({"style": "display:none"});
                      s.select("g[inkscape\\:label='Layer 8']").attr({"style": "display:inline"});
                      $("#textbox").html("<p>Переводим в двоичный код.</p>");
                      clickToContinue();                 // показываем мигающую мышь
                      $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
                        stopAllTimers();                  // останавливаем все запущенные таймауты и интервалы
                        $("#drawbox").off();              // убираем событие click с drawbox
                        s.select("g[inkscape\\:label='Layer 8']").attr({"style": "display:none"});
                        s.select("g[inkscape\\:label='Layer 9']").attr({"style": "display:inline"});
                        $("#textbox").html("<p>И, наконец, в шестнадцатиричную систему счисления. Получили результат перемножения двух байтов в поле Галуа GF(2<sup>8</sup>).</p>");
                        s.select("path[inkscape\\:label='leftKey']").stop();      // останавливаем мигание
                        s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь
                      });
                    });
                  });
                });
              });
            });
          });
        });
      } , 1000));
      $("#textbox").html("<p><b>MixColumns()</b> – самая сложная для понимания функция в алгоритме AES.</p><p>Она использует арифметику в поле Галуа GF(2<sup>8</sup>). GF – это сокращение от \"Galois field\", в скобках задаётся размер поля, то есть наше поле состоит из 2<sup>8</sup> = 256 элементов – это 256 возможных байтов: от 00 до ff. Сложение и умножение любых элементов поля даёт элемент из этого же поля, то есть какие бы мы байты не складывали и не перемножали, в результате всегда будет получаться один байт.</p><p>Сложение представлет собой побитовую операцию XOR, а умножение уже не так очевидно. Рассмотрим операцию умножения двух байтов в поле GF(2<sup>8</sup>).</p><p>Кликайте для продолжения.</p>");
      break;

//====================== слайд 9 ======================
    case 8:
      s.clear();
      stopAllTimers();                  // останавливаем все запущенные таймауты и интервалы
      $("#drawbox").off();              // убираем событие click с drawbox
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      var byte1hex = "0" + randChar("23", 1);      // первый множитель - 02 или 03
      var byte2hex = randChar("89abcdef", 1) + randChar("0123456789abcdef", 1);    // второй множитель - случайный байт, но такой, чтобы
                                                                     // после раскрытия скобок появилось x^8 и пришлось делить на модуль
      var byte1bin = hexToBinary(byte1hex).result;      // первый множитель в двочной форме
      var byte2bin = hexToBinary(byte2hex).result;      // второй множитель в двочной форме
      Snap.load("images/aes/8.svg", function (f) {
        s.append(f);
        $("#byte1").text(byte1hex);                   /// выводим их
        $("#byte2").text(byte2hex);                   /// на экран
      });

      timeOuts.push( setTimeout(input, 1500, byte1bin, /[^0-1]/g, 8, "95px", "g[inkscape\\:label='glow1']", "rect[inkscape\\:label='border1']", "translate(185 172)", "", 
        function (){  
          /////////// после ввода первого байта в двоичной форме
          $("#textbox").html("<p>Переведите второй множителель в двоичный вид.</p><p>0 = 0000<br>1 = 0001<br>2 = 0010<br>3 = 0011<br>4 = 0100<br>5 = 0101<br>6 = 0110<br>7 = 0111<br>8 = 1000<br>9 = 1001<br>a = 1010<br>b = 1011<br>c = 1100<br>d = 1101<br>e = 1110<br>f = 1111</p>");
          $("#text1").text(byte1bin);                       // выводим правильный результат на полотно
          s.selectAll("text[inkscape\\:label='text1']").attr({"opacity": "1"});   // показываем его
          s.selectAll("rect[inkscape\\:label='border1']").attr({"opacity": "0"}); // скрываем рамку
          $("#textdiv").remove();                                                 // удаляем блок ввода
          s.selectAll("g[inkscape\\:label='1']").attr({"opacity": "1"});          // показываем символ умножения
          input(byte2bin, /[^0-1]/g, 8, "95px", "", "rect[inkscape\\:label='border2']", "translate(299 172)", "", 
            function (){  
              /////////// после ввода второго байта в двоичной форме
              $("#textbox").html("<p>Запишите первый множителель в полиномиальной форме.</p><p>Записывайте полином в порядке убывания степеней через обычный знак сложения \"+\", степень просто указывайте рядом с переменной, например, \"x7+x5+x2+x+1\".</p>");
              $("#text2").text(byte2bin);                          // выводим правильный результат на полотно
              s.selectAll("text[inkscape\\:label='text2']").attr({"opacity": "1"});   // показываем его
              s.selectAll("rect[inkscape\\:label='border2']").attr({"opacity": "0"}); // скрываем рамку
              $("#textdiv").remove();                                        // удаляем блок ввода
              s.selectAll("g[inkscape\\:label='2']").attr({"opacity": "1"}); // показываем скобки, равно и символ умножения  
              s.selectAll("g[id='degrees1']").attr({"opacity": "1"});        // показываем степени над первым байтом
              input(binToText(byte1bin), /[^1x+]/g, 3, "40px", "", "rect[inkscape\\:label='border3']", "translate(437 172)", "", 
                function (){  
                  /////////// после ввода первого байта в полиномиальной форме
                  $("#textbox").html("<p>Запишите второй множителель в полиномиальной форме.</p><p>Записывайте полином в порядке убывания степеней через обычный знак сложения \"+\", степень просто указывайте рядом с переменной, например, \"x7+x5+x2+x+1\".</p>");
                  var text = binToText(byte1bin);
                  if (text.length == 1) { text = " " + text; }    // дописываем пробелы, чтобы текст был по центру скобок
                  $("#text3").text( text );                       // выводим правильный результат на полотно
                  s.selectAll("text[inkscape\\:label='text3']").attr({"opacity": "1"});   // показываем его
                  s.selectAll("rect[inkscape\\:label='border3']").attr({"opacity": "0"}); // скрываем рамку
                  $("#textdiv").remove();                                                 // удаляем блок ввода
                  s.selectAll("g[id='degrees1']").attr({"opacity": "0"});   // скрываем степени над первым байтом
                  s.selectAll("g[id='degrees2']").attr({"opacity": "1"});   // показываем степени над вторым байтом
                  input(binToText(byte2bin), /[^0-7x+]/g, 21, "250px", "", "rect[inkscape\\:label='border4']", "translate(516 172)", "", 
                    function (){  
                      /////////// после ввода второго байта в полиномиальной форме
                      $("#textbox").html("<p>Раскройте скобки и запишите результат после \"уничтожения\" одинаковых переменных.</p>");
                      var text = binToText(byte2bin);
                      $("#text4").text( text );                       // выводим правильный результат на полотно
                      s.selectAll("text[inkscape\\:label='text4']").attr({"opacity": "1"});   // показываем его
                      // сдвигаем влево скобку и знак равно, в зависимости от длины второго полинома:
                      var bbox = s.selectAll("text[inkscape\\:label='text4']").getBBox(); // получаем расположение текста в скобках
                      s.selectAll("tspan[id='bracket2']").attr({"x": bbox.x + bbox.width + 5});  /// выставляем скобку и равно
                      s.selectAll("tspan[id='equals1']").attr({"x": bbox.x + bbox.width + 20});   /// чуть правее полинома
                      s.selectAll("rect[inkscape\\:label='border4']").attr({"opacity": "0"}); // скрываем рамку
                      $("#textdiv").remove();                                   // удаляем блок ввода
                      s.selectAll("text[inkscape\\:label='equals1']").attr({"opacity": "1"}); // показываем равно
                      s.selectAll("g[id='degrees2']").attr({"opacity": "0"});   // скрываем степени над вторым байтом
                      s.selectAll("text[inkscape\\:label='equals2']").attr({"opacity": "1"}); // показываем равно во второй строке
                      var answer = polyToText( galoisMultiplication(byte1hex, byte2hex).intermediateResult );
                      input(answer, /[^0-8x+]/g, 24, "295px", "", "rect[inkscape\\:label='border5']", "translate(115 215)", "", 
                        function (answer){   
                          /////////// после ввода произведения байтов (до деления на модуль)
                          $("#textbox").html("<p>Найдите остаток от деления полученного полинома на <b>x<sup>8</sup>⊕x<sup>4</sup>⊕x<sup>3</sup>⊕x⊕1</b>.</p>");
                          $("#text5").text( answer );     // выводим правильный результат на полотно
                          s.selectAll("text[inkscape\\:label='text5']").attr({"opacity": "1"});   // показываем его
                          s.selectAll("rect[inkscape\\:label='border5']").attr({"opacity": "0"}); // скрываем рамку
                          $("#textdiv").remove();                                                 // удаляем блок ввода
                          var bbox = s.selectAll("text[inkscape\\:label='text5']").getBBox(); // получаем расположение текста слева
                          s.selectAll("tspan[id='equals3']").attr({"x": bbox.x + bbox.width + 10});   /// выставляем положение символа равно
                          s.selectAll("tspan[id='text6']").attr({"x": bbox.x + bbox.width + 33.908}); /// следующего текста
                          s.selectAll("rect[inkscape\\:label='border6']").attr({"x": bbox.x + bbox.width + 30.228}); /// границы блока ввода
                          s.selectAll("text[inkscape\\:label='equals3']").attr({"opacity": "1"}); // показываем равно
                          var answer = polyToText( galoisMultiplication(byte1hex, byte2hex).productPoly );
                          input(answer, /[^0-7x+]/g, 21, "278px", "", "rect[inkscape\\:label='border6']", "translate(" + (bbox.x + bbox.width + 31) + " 215)", "", 
                            function (answer){     
                              /////////// после ввода произведения байтов (после деления на модуль)
                              $("#textbox").html("<p>Запишите результат в двоичной форме.</p>");
                              $("#text6").text( answer );     // выводим правильный результат на полотно
                              s.selectAll("text[inkscape\\:label='text6']").attr({"opacity": "1"});   // показываем его
                              s.selectAll("rect[inkscape\\:label='border6']").attr({"opacity": "0"}); // скрываем рамку
                              $("#textdiv").remove();                                                 // удаляем блок ввода
                              var bbox = s.selectAll("text[inkscape\\:label='text6']").getBBox(); // получаем расположение текста слева
                              s.selectAll("tspan[id='equals4']").attr({"x": bbox.x + bbox.width + 10});   /// выставляем положение символа равно
                              s.selectAll("text[inkscape\\:label='equals4']").attr({"opacity": "1"}); // показываем равно
                              s.selectAll("text[inkscape\\:label='equals5']").attr({"opacity": "1"}); // показываем равно в третьей строке
                              s.selectAll("g[id='degrees3']").attr({"opacity": "1"});  // показываем степени над окошком ввода
                              var answer = galoisMultiplication(byte1hex, byte2hex).productBin;
                              input(answer, /[^0-1]/g, 8, "95px", "", "rect[id='border7']", "translate(112 252)", "", 
                                function (answer){     
                                  /////////// после ввода результата в двоичной форме
                                  $("#textbox").html("<p>Переведите результат в шестнадцатиричную систему счисления.</p><p>0 = 0000<br>1 = 0001<br>2 = 0010<br>3 = 0011<br>4 = 0100<br>5 = 0101<br>6 = 0110<br>7 = 0111<br>8 = 1000<br>9 = 1001<br>a = 1010<br>b = 1011<br>c = 1100<br>d = 1101<br>e = 1110<br>f = 1111</p>");
                                  $("#text7").text( answer );     // выводим правильный результат на полотно
                                  s.selectAll("text[inkscape\\:label='text7']").attr({"opacity": "1"});   // показываем его
                                  s.selectAll("rect[id='border7']").attr({"opacity": "0"}); // скрываем рамку
                                  $("#textdiv").remove();                                                 // удаляем блок ввода
                                  s.selectAll("g[id='degrees3']").attr({"opacity": "0"});  // прячем степени над окошком ввода
                                  s.selectAll("text[inkscape\\:label='equals6']").attr({"opacity": "1"}); // показываем равно
                                  var answer = galoisMultiplication(byte1hex, byte2hex).productHex;
                                  input(answer, /[^0-9a-f]/g, 2, "30px", "", "rect[id='border8']", "translate(237 252)", "", 
                                    function (answer){     
                                      /////////// после ввода результата в шестнадцатиричной форме
                                      $("#textbox").html("<p>Всё верно.</p><p>" + byte1hex + " · "+ byte2hex + " = " + answer + "</p>");
                                      $("#text8").text( answer );     // выводим правильный результат на полотно
                                      s.selectAll("text[inkscape\\:label='text8']").attr({"opacity": "1"});   // показываем его
                                      s.selectAll("rect[id='border8']").attr({"opacity": "0"}); // скрываем рамку
                                      $("#textdiv").remove();                                                 // удаляем блок ввода
                                    }
                                  );
                                  $("#textdiv").get(0).focus();   // устаналиваем указатель ввода на следующее окошко ввода
                                }
                              );
                              $("#textdiv").get(0).focus();   // устаналиваем указатель ввода на следующее окошко ввода
                            }
                          );
                          $("#textdiv").get(0).focus();   // устаналиваем указатель ввода на следующее окошко ввода
                        }
                      ); 
                      $("#textdiv").get(0).focus();   // устаналиваем указатель ввода на следующее окошко ввода  
                    }
                  );
                  $("#textdiv").get(0).focus();   // устаналиваем указатель ввода на следующее окошко ввода
                }
              );
              $("#textdiv").get(0).focus();   // устаналиваем указатель ввода на следующее окошко ввода
            }
          );
          $("#textdiv").get(0).focus();   // устаналиваем указатель ввода на следующее окошко ввода
        }
      ) );

      $("#textbox").html("<p>Попробуйте самостоятельно выполнить умножение двух байтов в поле GF(2<sup>8</sup>).</p><p>Переведите первый множителель в двоичный вид.</p><p>0 = 0000<br>1 = 0001<br>2 = 0010<br>3 = 0011<br>4 = 0100<br>5 = 0101<br>6 = 0110<br>7 = 0111<br>8 = 1000<br>9 = 1001<br>a = 1010<br>b = 1011<br>c = 1100<br>d = 1101<br>e = 1110<br>f = 1111</p>");
      break;

//====================== слайд 10 ======================
    case 9:
      s.clear();
      stopAllTimers();                  // останавливаем все запущенные таймауты и интервалы
      $("#drawbox").off();              // убираем событие click с drawbox
      var m1 = [];                      // матрица на входе
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);  // плавное проявление слайда на экране
      Snap.load("images/aes/9.svg", function (f) {
        s.append(f);
        for (var i = 0; i <= 15; i++) {     
          m1[i] = randChar("01234567890abcdef", 2);
          $("#1_" + i).text(m1[i]);     // заполняем случайными байтами матрицу на входе
          $("#2_" + i).text("");        // очищаем выходную матрицу
        } 
      });

      timeOuts.push(setTimeout(function(){  // копируем и перемещаем первый столбец к MDS-матрице
        s.selectAll("g[inkscape\\:label='column0']").clone().animate({"transform": "translate(162,164)"}, 300);
      } , 2000));

      timeOuts.push(setTimeout(function(){  // выделяем красным первую строку в MDS-матрице
        s.selectAll("g[inkscape\\:label='row0']").attr({"opacity": "0"});
        s.selectAll("g[inkscape\\:label='redrow0']").attr({"opacity": "1"});
      } , 2500));

      timeOuts.push(setTimeout(function(){  // расписываем вычисления
        $("#col0").text("·" + m1[0] + " ⊕");    /// записываем множители
        $("#col1").text("·" + m1[1] + " ⊕");
        $("#col2").text("·" + m1[2] + " ⊕");
        $("#col3").text("·" + m1[3] + " =");
        s.selectAll("g[inkscape\\:label='calc0']").attr({"opacity": "1"}); // показываем первую часть текста с вычислениями
      } , 3000));

      timeOuts.push(setTimeout(function(){ 
        clickToContinue();                 // показываем мигающую мышь
        $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
          switch(subslide) {
            case 0:
              $("#mult0").text(galoisMultiplication("02", m1[0]).productHex);    /// записываем вычисленные произведения
              $("#mult1").text(galoisMultiplication("03", m1[1]).productHex);
              $("#mult2").text(galoisMultiplication("01", m1[2]).productHex);
              $("#mult3").text(galoisMultiplication("01", m1[3]).productHex);
              s.selectAll("g[inkscape\\:label='calc1']").attr({"opacity": "1"}); // показываем вторую часть текста с вычислениями
              $("#textbox").html("<p>Сложение производится по модулю два, умножение – в поле GF(2<sup>8</sup>).</p>");
              subslide++;
              break;

            case 1:
              var mult0hex = $("#mult0").text();    /// произведения в 16-ричн. системе
              var mult1hex = $("#mult1").text();
              var mult2hex = $("#mult2").text();
              var mult3hex = $("#mult3").text();

              var mult0bin = hexToBinary(mult0hex).result;    /// произведения в двоичной системе
              var mult1bin = hexToBinary(mult1hex).result;
              var mult2bin = hexToBinary(mult2hex).result;
              var mult3bin = hexToBinary(mult3hex).result;

              var resultbin = xorBytes( xorBytes(mult0bin, mult1bin), xorBytes(mult2bin, mult3bin) );  // XOR'им все четыре байта
              var resulthex = byteToHex(resultbin);

              $("#hex0").text(mult0hex);   /// в 16-ричном виде
              $("#hex1").text(mult1hex);   /// переписываем их в столбик
              $("#hex2").text(mult2hex);
              $("#hex3").text(mult3hex);

              $("#bin0").text(mult0bin);   /// в двоичном виде
              $("#bin1").text(mult1bin);   /// записываем их в столбик для XOR
              $("#bin2").text(mult2bin);
              $("#bin3").text(mult3bin);

              $("#answerbin").text(resultbin);  /// записываем результаты
              $("#answerhex").text(resulthex);  /// в столбике сложения

              s.selectAll("g[inkscape\\:label='xor_calc']").attr({"opacity": "1"});  // показываем столбик с вычислением xor
              $("#textbox").html("<p>Для сложения четырёх байтов по модулю два, каждый из них сперва необходимо перевести в двоичный вид, выполнить побитовое XOR и полученный результат перевести в шестнадцатиричную систему счисления.</p>");
              subslide++;
              break;

            case 2:
              s.selectAll("g[inkscape\\:label='xor_calc']").attr({"opacity": "0"});  // скрываем столбик с вычислением xor
              $("#answer").text( $("#answerhex").text() );                  // копируем ответ в строку с вычислениями
              $("#2_0").text( $("#answer").text() );                        // копируем ответ в результирующий вектор
              s.selectAll("text[inkscape\\:label='answer']").attr({"opacity": "1"}); // показываем ответ
              s.selectAll("g[inkscape\\:label='newcolumn0']").attr({"opacity": "1"}); // показываем первый столбик с результатами
              $("#textbox").html("<p>Получили первый байт результата функции MixColumns().</p>");
              subslide++;
              break;

            case 3:    // получаем второй, третий и четвёртый элемент в результирующем векторе
            case 4:
            case 5:
              // записываем в вычисления соотвествующую строчку из матрицы MDS:
              if (subslide == 3) {
                $("#mds0").text("01");
                $("#mds1").text("02");
                $("#mds2").text("03");
                $("#mds3").text("01");
              }
              if (subslide == 4) {
                $("#mds0").text("01");
                $("#mds1").text("01");
                $("#mds2").text("02");
                $("#mds3").text("03");
              }
              if (subslide == 5) {
                $("#mds0").text("03");
                $("#mds1").text("01");
                $("#mds2").text("01");
                $("#mds3").text("02");
              }
              // выделяем красным следующую строку в матрице MDS, а предыдущей возвращаем чёрный цвет:
              s.selectAll("g[inkscape\\:label='row" + (subslide-3) + "']").attr({"opacity": "1"});
              s.selectAll("g[inkscape\\:label='redrow" + (subslide-3) + "']").attr({"opacity": "0"});
              s.selectAll("g[inkscape\\:label='row" + (subslide-2) + "']").attr({"opacity": "0"});
              s.selectAll("g[inkscape\\:label='redrow" + (subslide-2) + "']").attr({"opacity": "1"});
              // убираем синее выделение с предыдущего элемента в результирующем векторе:
              s.selectAll("tspan[id='2_" + (subslide-3) + "']").attr({"fill": "#000000"});

              var mult0hex = galoisMultiplication($("#mds0").text(), m1[0]).productHex;    /// произведения в 16-ричн. системе
              var mult1hex = galoisMultiplication($("#mds1").text(), m1[1]).productHex;
              var mult2hex = galoisMultiplication($("#mds2").text(), m1[2]).productHex;
              var mult3hex = galoisMultiplication($("#mds3").text(), m1[3]).productHex;

              $("#mult0").text(mult0hex);       /// записываем их в вычисления
              $("#mult1").text(mult1hex);
              $("#mult2").text(mult2hex);
              $("#mult3").text(mult3hex);

              var mult0bin = hexToBinary(mult0hex).result;    /// произведения в двоичной системе
              var mult1bin = hexToBinary(mult1hex).result;
              var mult2bin = hexToBinary(mult2hex).result;
              var mult3bin = hexToBinary(mult3hex).result;

              var resultbin = xorBytes( xorBytes(mult0bin, mult1bin), xorBytes(mult2bin, mult3bin) );  // XOR'им все четыре байта
              var resulthex = byteToHex(resultbin);

              $("#answer").text(resulthex);                  // копируем ответ в строку с вычислениями
              $("#2_" + (subslide-2)).text(resulthex);                     // копируем ответ в результирующий вектор

              $("#textbox").html("<p>Далее вычисления выполняются аналогично.</p>");
              subslide++;
              break;

            case 6:
              s.selectAll("tspan[id='2_3']").attr({"fill": "#000000"});    // убираем синее выделение в колонке с результатом
              // прячем вычисления:
              s.selectAll("g[inkscape\\:label='calc0']").attr({"opacity": "0"});
              s.selectAll("g[inkscape\\:label='calc1']").attr({"opacity": "0"});
              s.selectAll("text[inkscape\\:label='answer']").attr({"opacity": "0"});
              // возвращаем чёрный цвет последней строке в MDS-матрице:
              s.selectAll("g[inkscape\\:label='row3']").attr({"opacity": "1"});
              s.selectAll("g[inkscape\\:label='redrow3']").attr({"opacity": "0"});
              // передвигаем колонку с результатом вверх, к матрице, а старую колонку (и её копию) скрываем:
              s.selectAll("g[inkscape\\:label='newcolumn0']").animate({"transform": "translate(-76,-187)"}, 300);
              s.selectAll("g[inkscape\\:label='column0']").animate({"opacity": "0"}, 300);

              timeOuts.push(setTimeout(function(){   // копируем и перемещаем вторую колонку исходной матрицы 
                s.selectAll("g[inkscape\\:label='column1']").clone().animate({"transform": "translate(132,164)"}, 300);
              } , 700));

              subslide++;
              break;

            case 7:
              stopAllTimers();                  // останавливаем все запущенные таймауты и интервалы
              $("#drawbox").off();              // убираем событие click с drawbox
              s.select("path[inkscape\\:label='leftKey']").stop();      // останавливаем мигание

              // выполняем перемешивание и выводим результат:
              var newColumn = mixColumn([m1[4], m1[5], m1[6], m1[7]]);
              $("#2_4").text(newColumn[0]);
              $("#2_5").text(newColumn[1]);
              $("#2_6").text(newColumn[2]);
              $("#2_7").text(newColumn[3]);
              // показываем вторую колонку результата mixColumns():
              s.selectAll("g[inkscape\\:label='newcolumn1']").animate({"opacity": "1"}, 300);
              // передвигаем колонку с результатом вверх, к матрице, а старую колонку (и её копию) скрываем:
              timeOuts.push(setTimeout(function(){ 
                s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь
                s.selectAll("g[inkscape\\:label='newcolumn1']").animate({"transform": "translate(-45,-187)"}, 300);
                s.selectAll("g[inkscape\\:label='column1']").animate({"opacity": "0"}, 300);    
              } , 1000));     
              timeOuts.push(setTimeout(function(){  // копируем и перемещаем третью колонку исходной матрицы 
                s.selectAll("g[inkscape\\:label='column2']").clone().animate({"transform": "translate(100,164)"}, 300);
              } , 1500));
              timeOuts.push(setTimeout(function(){
                // выполняем перемешивание и выводим результат:
                var newColumn = mixColumn([m1[8], m1[9], m1[10], m1[11]]);
                $("#2_8").text(newColumn[0]);
                $("#2_9").text(newColumn[1]);
                $("#2_10").text(newColumn[2]);
                $("#2_11").text(newColumn[3]);
                // показываем вторую колонку результата mixColumns():
                s.selectAll("g[inkscape\\:label='newcolumn2']").animate({"opacity": "1"}, 300);
              } , 2000));
              // передвигаем колонку с результатом вверх, к матрице, а старую колонку (и её копию) скрываем:
              timeOuts.push(setTimeout(function(){ 
                s.selectAll("g[inkscape\\:label='newcolumn2']").animate({"transform": "translate(-13,-187)"}, 300);
                s.selectAll("g[inkscape\\:label='column2']").animate({"opacity": "0"}, 300);    
              } , 2500));
              timeOuts.push(setTimeout(function(){  // копируем и перемещаем третью колонку исходной матрицы 
                s.selectAll("g[inkscape\\:label='column3']").clone().animate({"transform": "translate(68,164)"}, 300);
              } , 3000));
              timeOuts.push(setTimeout(function(){
                // выполняем перемешивание и выводим результат:
                var newColumn = mixColumn([m1[12], m1[13], m1[14], m1[15]]);
                $("#2_12").text(newColumn[0]);
                $("#2_13").text(newColumn[1]);
                $("#2_14").text(newColumn[2]);
                $("#2_15").text(newColumn[3]);
                // показываем третью колонку результата mixColumns():
                s.selectAll("g[inkscape\\:label='newcolumn3']").animate({"opacity": "1"}, 300);
              } , 3500));
              // передвигаем колонку с результатом вверх, к матрице, а старую колонку (и её копию) скрываем:
              timeOuts.push(setTimeout(function(){ 
                s.selectAll("g[inkscape\\:label='newcolumn3']").animate({"transform": "translate(19,-187)"}, 300);
                s.selectAll("g[inkscape\\:label='column3']").animate({"opacity": "0"}, 300);    
              } , 4000));
              subslide++;
              break;
          }
        });
      } , 3500));

      $("#textbox").html("<p>Теперь перейдём к самой функции MixColumns().</p><p>Она выполняет перемножение двух матриц одинакового размера. Первая матрица – это MDS-матрица (Maximum Distance Separable, то есть матрица максимальной разнесённости), вторая матрица (жёлтая) – входная. MDS-матрица константна и всегда имеет такой вид, как на рисунке.</p><p>Перемножение матриц производится как обычно – строки первой матрицы на столбцы второй.</p>");
      break;


//====================== слайд 11 ======================
    case 10:
      s.clear();
      stopAllTimers();                  // останавливаем все запущенные таймауты и интервалы
      $("#drawbox").off();              // убираем событие click с drawbox
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);  // плавное проявление слайда на экране
      Snap.load("images/aes/10.svg", function (f) {
        s.append(f);
      });

      timeOuts.push(setTimeout(function(){ 
        clickToContinue();                 // показываем мигающую мышь
        $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
          switch(subslide) {
            case 0:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 1600));

              // показываем выделение столбца, который будем рассчитывать:
              s.selectAll("rect[id='selection0']").animate({"opacity": "1"}, 200);
              timeOuts.push(setTimeout(function(){
                // четвёртый столбец перемещаем вниз:
                s.selectAll("g[id='column3']").animate({"transform": "translate(0,120)"}, 300);
              } , 500));
              timeOuts.push(setTimeout(function(){
                // показываем линию:
                s.selectAll("path[id='path3']").animate({"opacity": "1"}, 100);
              } , 800));
              timeOuts.push(setTimeout(function(){
                // показываем надпись "RotWord()":
                s.selectAll("text[id='rotword0']").animate({"opacity": "1"}, 200);
              } , 1000));
              timeOuts.push(setTimeout(function(){
                // перемещаем первую клетку столбца вниз-влево:
                s.selectAll("g[id='3_0']").animate({"transform": "translate(-40,-100)"}, 150);
                // перемещаем три остальныых вверх
                s.selectAll("g[id='3_1']").animate({"transform": "translate(2.3, -141)"}, 300);
                s.selectAll("g[id='3_2']").animate({"transform": "translate(2.3, -119)"}, 300);
                s.selectAll("g[id='3_3']").animate({"transform": "translate(2.3, -98)"}, 300);
              } , 1300));
              timeOuts.push(setTimeout(function(){
                // перемещаем первую клетку столбца вниз-вправо:
                s.selectAll("g[id='3_0']").animate({"transform": "translate(2.3,-77.5)"}, 150);
              } , 1450));
              $("#textbox").html("<p>Первый столбец каждого раундового ключа получается следующим образом:</p><p>– над предыдущим столбцом в таблице выполняется циклический сдвиг на 1 байт;</p>");
              subslide++;
              break;

            case 1:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 4000));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("rect[id='selection0']").attr({"opacity": "1"});
              s.selectAll("g[id='column3']").attr({"transform": "translate(0,120)"});
              s.selectAll("path[id='path3']").attr({"opacity": "1"});
              s.selectAll("text[id='rotword0']").attr({"opacity": "1"});
              s.selectAll("g[id='3_0']").attr({"transform": "translate(2.3,-77.5)"});
              s.selectAll("g[id='3_1']").attr({"transform": "translate(2.3, -141)"});
              s.selectAll("g[id='3_2']").attr({"transform": "translate(2.3, -119)"});
              s.selectAll("g[id='3_3']").attr({"transform": "translate(2.3, -98)"});
              // скрываем надпись "RotWord()":
              s.selectAll("text[id='rotword0']").animate({"opacity": "0"}, 200);
              timeOuts.push(setTimeout(function(){
                // показываем надпись "SubBytes()":
                s.selectAll("text[id='subbytes0']").animate({"opacity": "1"}, 200);
                // показываем s-box:
                s.selectAll("g[id='s-box']").animate({"opacity": "1"}, 200);
              } , 500));
              timeOuts.push(setTimeout(function(){
                // показываем первый подстановочный байт из s-box:
                s.selectAll("g[id='subbyte0']").attr({"opacity": "1"});
                // перемещаем его на место заменяемого байта:
                s.selectAll("g[id='subbyte0']").animate({"transform": "matrix(1, 0, 0, 1, 2.3, -21)"}, 300);
              } , 1500));
              timeOuts.push(setTimeout(function(){
                // скрываем заменяемый байт:
                s.selectAll("g[id='3_1']").attr({"opacity": "0"});
                // выделяем второй подстановочный байт из s-box:
                s.selectAll("rect[id='sel1']").attr({"opacity": "1"});
                // выделяем заменяемый байт:
                s.selectAll("rect[id='3_2rect']").attr({"fill": "#efca54"});
                // меняем в нём текст:
                $("#3_2tspan").text("1e");
              } , 2500));
              timeOuts.push(setTimeout(function(){
                // убираем предудущее выделение в s-box:
                s.selectAll("rect[id='sel1']").attr({"opacity": "0"});
                // выделяем третий подстановочный байт из s-box:
                s.selectAll("rect[id='sel2']").attr({"opacity": "1"});
                // выделяем заменяемый байт:
                s.selectAll("rect[id='3_3rect']").attr({"fill": "#efca54"});
                // меняем в нём текст:
                $("#3_3tspan").text("5b");
              } , 3000));
              timeOuts.push(setTimeout(function(){
                // убираем предудущее выделение в s-box:
                s.selectAll("rect[id='sel2']").attr({"opacity": "0"});
                // выделяем четвёртый подстановочный байт из s-box:
                s.selectAll("rect[id='sel3']").attr({"opacity": "1"});
                // выделяем заменяемый байт:
                s.selectAll("rect[id='3_0rect']").attr({"fill": "#efca54"});
                // меняем в нём текст:
                $("#3_0tspan").text("ab");
              } , 3500));
              timeOuts.push(setTimeout(function(){
                // убираем предудущее выделение в s-box:
                s.selectAll("rect[id='sel3']").attr({"opacity": "0"});
              } , 4000));
              $("#textbox").html("<p>Первый столбец каждого раундового ключа получается следующим образом:</p><p>– над предыдущим столбцом в таблице выполняется циклический сдвиг на 1 байт;<br>– производится замена каждого байта согласно таблице S-box;</p>");
              subslide++;
              break;

            case 2:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 2700));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("text[id='rotword0']").attr({"opacity": "0"});
              s.selectAll("text[id='subbytes0']").attr({"opacity": "1"});
              s.selectAll("g[id='s-box']").attr({"opacity": "1"});
              s.selectAll("g[id='subbyte0']").attr({"opacity": "1"});
              s.selectAll("g[id='subbyte0']").attr({"transform": "matrix(1, 0, 0, 1, 2.3, -21)"});
              s.selectAll("g[id='3_1']").attr({"opacity": "0"});
              s.selectAll("rect[id='3_2rect']").attr({"fill": "#efca54"});
              s.selectAll("rect[id='3_3rect']").attr({"fill": "#efca54"});
              s.selectAll("rect[id='3_0rect']").attr({"fill": "#efca54"});
              s.selectAll("rect[id='sel1']").attr({"opacity": "0"});
              s.selectAll("rect[id='sel2']").attr({"opacity": "0"});
              s.selectAll("rect[id='sel3']").attr({"opacity": "0"});
              $("#3_2tspan").text("1e");
              $("#3_3tspan").text("5b");
              $("#3_0tspan").text("ab");
              // скрываем надпись "SubBytes()":
              s.selectAll("text[id='subbytes0']").animate({"opacity": "0"}, 200);
              // скрываем s-box:
              s.selectAll("g[id='s-box']").animate({"opacity": "0"}, 200);
              timeOuts.push(setTimeout(function(){
                // выносим первую колонку ключа вниз:
                s.selectAll("g[id='column0']").animate({"transform": "translate(0,120)"}, 300);
              } , 700));
              timeOuts.push(setTimeout(function(){
                // показываем линию:
                s.selectAll("path[id='path0']").animate({"opacity": "1"}, 100);
              } , 900));
              timeOuts.push(setTimeout(function(){
                // перемещаем первый столбец Rcon:
                s.selectAll("g[id='rcon0']").animate({"transform": "matrix(1.42, 0, 0, 1.42, -222, -690)"}, 300);
                // скрываем единичку под ним:
                s.selectAll("g[id='rcon0no']").animate({"opacity": "0"}, 200);
              } , 1500));
              timeOuts.push(setTimeout(function(){
                // показываем операторы сложения и равно:
                s.selectAll("g[id='operators']").animate({"opacity": "1"}, 200);
              } , 2000));
              timeOuts.push(setTimeout(function(){
                // показываем результирующий столбец:
                s.selectAll("g[id='column4']").animate({"opacity": "1"}, 200);
              } , 2500));
              $("#textbox").html("<p>Первый столбец каждого раундового ключа получается следующим образом:</p><p>– над предыдущим столбцом в таблице выполняется циклический сдвиг на 1 байт;<br>– производится замена каждого байта согласно таблице S-box;<br>– полученный столбец складывается по модулю два со столбцом, номер которого на 4 меньше, чем номер рассчитываемого столбца, и столбцом из матрицы Rcon с номером, равным номеру рассчитываемого раундового ключа. Rcon – это константная матрица, определённая стандартом.</p>");
              subslide++;
              break;

            case 3:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 800));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("text[id='subbytes0']").attr({"opacity": "0"});
              s.selectAll("g[id='s-box']").attr({"opacity": "0"});
              s.selectAll("g[id='column0']").attr({"transform": "translate(0,120)"});
              s.selectAll("path[id='path0']").attr({"opacity": "1"});
              s.selectAll("g[id='rcon0']").attr({"transform": "matrix(1.42, 0, 0, 1.42, -222, -690)"});
              s.selectAll("g[id='rcon0no']").attr({"opacity": "0"});
              s.selectAll("g[id='operators']").attr({"opacity": "1"});
              s.selectAll("g[id='column4']").attr({"opacity": "1"});
              // скрываем всё ненужное:
              s.selectAll("path[id='path0']").attr({"opacity": "0"});              
              s.selectAll("g[id='column0']").animate({"opacity": "0"}, 200);
              s.selectAll("path[id='path3']").attr({"opacity": "0"});              
              s.selectAll("g[id='column3']").animate({"opacity": "0"}, 200);
              s.selectAll("g[id='operators']").animate({"opacity": "0"}, 200);
              s.selectAll("g[id='subbyte0']").animate({"opacity": "0"}, 200);
              s.selectAll("g[id='rcon0']").animate({"opacity": "0"}, 200);
              timeOuts.push(setTimeout(function(){
                // прячем красное выделение столбца:
                s.selectAll("rect[id='selection0']").animate({"opacity": "0"}, 200);
                // перемещаем полученный столбец в таблицу:
                s.selectAll("g[id='column4']").animate({"transform": "translate(126,0)"}, 300);
              } , 500));
              subslide++;
              break;

            case 4:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 1000));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("g[id='column0']").attr({"opacity": "0"});        
              s.selectAll("g[id='column3']").attr({"opacity": "0"});
              s.selectAll("g[id='operators']").attr({"opacity": "0"});
              s.selectAll("g[id='subbyte0']").attr({"opacity": "0"});
              s.selectAll("g[id='rcon0']").attr({"opacity": "0"});
              s.selectAll("rect[id='selection0']").attr({"opacity": "0"});
              s.selectAll("g[id='column4']").attr({"transform": "translate(126,0)"});

              // перемещаем красное выделение на следующий столбец вправо:
              s.selectAll("rect[id='selection0']").attr({"transform": "translate(32,0)"});
              // показываем его:
              s.selectAll("rect[id='selection0']").animate({"opacity": "1"}, 200);
              // выносим второй столбец вниз:
              s.selectAll("g[id='column1']").animate({"transform": "translate(32,120)"}, 300);
              // выносим пятый столбец вниз:              
              s.selectAll("g[id='column4']").animate({"transform": "translate(127,120)"}, 300);
              // показываем его копию под ним:
              s.selectAll("g[id='column4back']").attr({"opacity": "1"});
              timeOuts.push(setTimeout(function(){
                // показываем линии:
                s.selectAll("path[id='path1']").animate({"opacity": "1"}, 100);
                s.selectAll("path[id='path4']").animate({"opacity": "1"}, 100);
              } , 300));
              timeOuts.push(setTimeout(function(){
                // показываем XOR и равно:
                s.selectAll("g[id='operatorsSmall']").animate({"opacity": "1"}, 200);
              } , 500));
              timeOuts.push(setTimeout(function(){
                // показываем шестой столбец:
                s.selectAll("g[id='column5']").animate({"opacity": "1"}, 200);
              } , 800));
              $("#textbox").html("<p>Столбцы со второго по четвёртый каждого раундового ключа получаются путём сложения по модулю два столбцов с номерами <i>n</i>-1 и <i>n</i>-4, где <i>n</i> – номер рассчитываемого столбца относительно начала таблицы.</p>");
              subslide++;
              break;

            case 5:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 800));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("g[id='column1']").attr({"transform": "translate(32,120)"});          
              s.selectAll("g[id='column4']").attr({"transform": "translate(127,120)"});
              s.selectAll("path[id='path1']").attr({"opacity": "1"});
              s.selectAll("path[id='path4']").attr({"opacity": "1"});
              s.selectAll("g[id='operatorsSmall']").attr({"opacity": "1"});
              s.selectAll("g[id='column5']").attr({"opacity": "1"});
              s.selectAll("rect[id='selection0']").attr({"opacity": "1"});

              // скрываем всё ненужное:
              s.selectAll("path[id='path1']").attr({"opacity": "0"});              
              s.selectAll("g[id='column1']").animate({"opacity": "0"}, 200);
              s.selectAll("path[id='path4']").attr({"opacity": "0"});              
              s.selectAll("g[id='column4']").animate({"opacity": "0"}, 200);
              s.selectAll("g[id='operatorsSmall']").animate({"opacity": "0"}, 200);

              timeOuts.push(setTimeout(function(){
                // перемещаем столбец в таблицу:
                s.selectAll("g[id='column5']").animate({"transform": "translate(157,0)"}, 300);
                // прячем красное выделение:
                s.selectAll("rect[id='selection0']").animate({"opacity": "0"}, 200);
              } , 500));
              subslide++;
              break;

            case 6:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 1000));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("g[id='column1']").attr({"opacity": "0"});        
              s.selectAll("g[id='column4']").attr({"opacity": "0"});
              s.selectAll("g[id='operatorsSmall']").attr({"opacity": "0"});
              s.selectAll("g[id='column5']").attr({"transform": "translate(157,0)"});
              s.selectAll("rect[id='selection0']").attr({"opacity": "0"});

              // перемещаем красное выделение на следующий столбец вправо:
              s.selectAll("rect[id='selection0']").attr({"transform": "translate(63,0)"});
              // показываем его:
              s.selectAll("rect[id='selection0']").animate({"opacity": "1"}, 200);
              // выносим третий столбец вниз:
              s.selectAll("g[id='column2']").animate({"transform": "translate(63,120)"}, 300);
              // выносим шестой столбец вниз:              
              s.selectAll("g[id='column5']").animate({"transform": "translate(158,120)"}, 300);
              // показываем его копию под ним:
              s.selectAll("g[id='column5back']").attr({"opacity": "1"});
              timeOuts.push(setTimeout(function(){
                // показываем линии:
                s.selectAll("path[id='path2']").animate({"opacity": "1"}, 100);
                s.selectAll("path[id='path5']").animate({"opacity": "1"}, 100);
              } , 300));
              timeOuts.push(setTimeout(function(){
                // перемещаем XOR и равно правее на один столбец:
                s.selectAll("g[id='operatorsSmall']").attr({"transform": "translate(31,0)"});
                // показываем их:
                s.selectAll("g[id='operatorsSmall']").animate({"opacity": "1"}, 200);
              } , 500));
              timeOuts.push(setTimeout(function(){
                // показываем седьмой столбец:
                s.selectAll("g[id='column6']").animate({"opacity": "1"}, 200);
              } , 800));
              subslide++;
              break;

            case 7:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 500));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("rect[id='selection0']").attr({"opacity": "1"});
              s.selectAll("g[id='column2']").attr({"transform": "translate(63,120)"});        
              s.selectAll("g[id='column5']").attr({"transform": "translate(158,120)"});
              s.selectAll("path[id='path2']").attr({"opacity": "1"});
              s.selectAll("path[id='path5']").attr({"opacity": "1"});
              s.selectAll("g[id='operatorsSmall']").attr({"transform": "translate(31,0)"});
              s.selectAll("g[id='operatorsSmall']").attr({"opacity": "1"});
              s.selectAll("g[id='column6']").attr({"opacity": "1"});

              // скрываем всё ненужное:
              s.selectAll("path[id='path2']").attr({"opacity": "0"});              
              s.selectAll("g[id='column2']").animate({"opacity": "0"}, 200);
              s.selectAll("path[id='path5']").attr({"opacity": "0"});              
              s.selectAll("g[id='column5']").animate({"opacity": "0"}, 200);
              s.selectAll("g[id='operatorsSmall']").animate({"opacity": "0"}, 200);

              timeOuts.push(setTimeout(function(){
                // перемещаем столбец в таблицу:
                s.selectAll("g[id='column6']").animate({"transform": "translate(189,0)"}, 300);
                // прячем красное выделение:
                s.selectAll("rect[id='selection0']").animate({"opacity": "0"}, 200);
              } , 300));
              subslide++;
              break;

            case 8:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 1000));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):  
              stopAllAnimations();         
              s.selectAll("g[id='column2']").attr({"opacity": "0"});           
              s.selectAll("g[id='column5']").attr({"opacity": "0"});
              s.selectAll("g[id='operatorsSmall']").attr({"opacity": "0"});
              s.selectAll("g[id='column6']").attr({"transform": "translate(189,0)"});
              s.selectAll("rect[id='selection0']").attr({"opacity": "0"});

              // перемещаем красное выделение на следующий столбец вправо:
              s.selectAll("rect[id='selection0']").attr({"transform": "translate(94,0)"});
              // показываем его:
              s.selectAll("rect[id='selection0']").animate({"opacity": "1"}, 200);
              // выносим четвёртый столбец вниз:
              s.selectAll("g[id='column3back']").animate({"transform": "translate(0,120)"}, 300);
              // выносим седьмой столбец вниз:              
              s.selectAll("g[id='column6']").animate({"transform": "translate(189,120)"}, 300);
              // показываем его копию под ним:
              s.selectAll("g[id='column6back']").attr({"opacity": "1"});
              timeOuts.push(setTimeout(function(){
                // показываем линии:
                s.selectAll("path[id='path3']").animate({"opacity": "1"}, 100);
                s.selectAll("path[id='path6']").animate({"opacity": "1"}, 100);
              } , 300));
              timeOuts.push(setTimeout(function(){
                // перемещаем XOR и равно правее на один столбец:
                s.selectAll("g[id='operatorsSmall']").attr({"transform": "translate(62,0)"});
                // показываем их:
                s.selectAll("g[id='operatorsSmall']").animate({"opacity": "1"}, 200);
              } , 500));
              timeOuts.push(setTimeout(function(){
                // показываем восьмой столбец:
                s.selectAll("g[id='column7']").animate({"opacity": "1"}, 200);
              } , 800));
              subslide++;
              break;

            case 9:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 500));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("rect[id='selection0']").attr({"opacity": "1"});
              s.selectAll("g[id='column3back']").attr({"transform": "translate(0,120)"});            
              s.selectAll("g[id='column6']").attr({"transform": "translate(189,120)"});
              s.selectAll("path[id='path3']").attr({"opacity": "1"});
              s.selectAll("path[id='path6']").attr({"opacity": "1"});
              s.selectAll("g[id='operatorsSmall']").attr({"transform": "translate(62,0)"});
              s.selectAll("g[id='operatorsSmall']").attr({"opacity": "1"});
              s.selectAll("g[id='column7']").attr({"opacity": "1"});

              // скрываем всё ненужное:
              s.selectAll("path[id='path3']").attr({"opacity": "0"});              
              s.selectAll("g[id='column3back']").animate({"opacity": "0"}, 200);
              s.selectAll("path[id='path6']").attr({"opacity": "0"});              
              s.selectAll("g[id='column6']").animate({"opacity": "0"}, 200);
              s.selectAll("g[id='operatorsSmall']").animate({"opacity": "0"}, 200);

              timeOuts.push(setTimeout(function(){
                // перемещаем столбец в таблицу:
                s.selectAll("g[id='column7']").animate({"transform": "translate(220,0)"}, 300);
                // прячем красное выделение:
                s.selectAll("rect[id='selection0']").animate({"opacity": "0"}, 200);
              } , 300));
              $("#textbox").html("<p>Остальные раундовые ключи рассчитываются аналогично.</p>");
              subslide++;
              break;

            case 10:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 1600));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):      
              stopAllAnimations();    
              s.selectAll("g[id='column3back']").attr({"opacity": "0"}, 200);             
              s.selectAll("g[id='column6']").attr({"opacity": "0"});
              s.selectAll("g[id='operatorsSmall']").attr({"opacity": "0"});
              s.selectAll("g[id='column7']").attr({"transform": "translate(220,0)"});
              s.selectAll("rect[id='selection0']").attr({"opacity": "0"});

              // перемещаем красное выделение на следующий столбец вправо:
              s.selectAll("rect[id='selection0']").attr({"transform": "translate(126,0)"});
              // показываем его:
              s.selectAll("rect[id='selection0']").animate({"opacity": "1"}, 200);
              timeOuts.push(setTimeout(function(){
                // показываем восьмой столбец:
                s.selectAll("g[id='column7back']").attr({"opacity": "1"});
                // и сдвигаем его вниз:
                s.selectAll("g[id='column7back']").animate({"transform": "translate(126,120)"}, 300);
              } , 500));
              timeOuts.push(setTimeout(function(){
                // показываем линию:
                s.selectAll("path[id='path7']").animate({"opacity": "1"}, 100);
              } , 800));
              timeOuts.push(setTimeout(function(){
                // сдвигаем вправо надпись "RotWord()":
                s.selectAll("text[id='rotword0']").attr({"transform": "translate(126,0)"});
                // показываем её
                s.selectAll("text[id='rotword0']").animate({"opacity": "1"}, 200);
              } , 1000));
              timeOuts.push(setTimeout(function(){
                // перемещаем первую клетку столбца вниз-влево:
                s.selectAll("g[id='7_0']").animate({"transform": "translate(-40,-100)"}, 150);
                // перемещаем три остальныых вверх
                s.selectAll("g[id='7_1']").animate({"transform": "translate(2.3, -141)"}, 300);
                s.selectAll("g[id='7_2']").animate({"transform": "translate(2.3, -119)"}, 300);
                s.selectAll("g[id='7_3']").animate({"transform": "translate(2.3, -98)"}, 300);
              } , 1300));
              timeOuts.push(setTimeout(function(){
                // перемещаем первую клетку столбца вниз-вправо:
                s.selectAll("g[id='7_0']").animate({"transform": "translate(2.3,-77.5)"}, 150);
              } , 1450));
              subslide++;
              break;

            case 11:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 3500));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("rect[id='selection0']").attr({"opacity": "1"});
              s.selectAll("g[id='column7back']").attr({"opacity": "1"});
              s.selectAll("g[id='column7back']").attr({"transform": "translate(126,120)"});
              s.selectAll("path[id='path7']").attr({"opacity": "1"});
              s.selectAll("text[id='rotword0']").attr({"transform": "translate(126,0)"});
              s.selectAll("text[id='rotword0']").animate({"opacity": "1"});
              s.selectAll("g[id='7_0']").attr({"transform": "translate(-40,-100)"});
              s.selectAll("g[id='7_1']").attr({"transform": "translate(2.3, -141)"});
              s.selectAll("g[id='7_2']").attr({"transform": "translate(2.3, -119)"});
              s.selectAll("g[id='7_3']").attr({"transform": "translate(2.3, -98)"});
              s.selectAll("g[id='7_0']").attr({"transform": "translate(2.3,-77.5)"});

              // скрываем надпись "RotWord()":
              s.selectAll("text[id='rotword0']").animate({"opacity": "0"}, 200);
              timeOuts.push(setTimeout(function(){
                // смещаем надпись "SubBytes()" вправо:
                s.selectAll("text[id='subbytes0']").attr({"transform": "translate(126,0)"});
                // показываем её:
                s.selectAll("text[id='subbytes0']").animate({"opacity": "1"}, 200);
                // смещаем s-box вправо:
                s.selectAll("g[id='s-box']").attr({"transform": "translate(126,0)"});
                // показываем s-box:
                s.selectAll("g[id='s-box']").animate({"opacity": "1"}, 200);
              } , 500));
              timeOuts.push(setTimeout(function(){
                // выделяем первый подстановочный байт из s-box:
                s.selectAll("rect[id='sel4']").attr({"opacity": "1"});
                // выделяем заменяемый байт:
                s.selectAll("rect[id='7_1rect']").attr({"fill": "#efca54"});
                // меняем в нём текст:
                $("#7_1tspan").text("9d");
              } , 1500));
              timeOuts.push(setTimeout(function(){
                // убираем предудущее выделение в s-box:
                s.selectAll("rect[id='sel4']").attr({"opacity": "0"});
                // выделяем второй подстановочный байт из s-box:
                s.selectAll("rect[id='sel5']").attr({"opacity": "1"});
                // выделяем заменяемый байт:
                s.selectAll("rect[id='7_2rect']").attr({"fill": "#efca54"});
                // меняем в нём текст:
                $("#7_2tspan").text("1a");
              } , 2000));
              timeOuts.push(setTimeout(function(){
                // убираем предудущее выделение в s-box:
                s.selectAll("rect[id='sel5']").attr({"opacity": "0"});
                // выделяем третий подстановочный байт из s-box:
                s.selectAll("rect[id='sel6']").attr({"opacity": "1"});
                // выделяем заменяемый байт:
                s.selectAll("rect[id='7_3rect']").attr({"fill": "#efca54"});
                // меняем в нём текст:
                $("#7_3tspan").text("18");
              } , 2500));
              timeOuts.push(setTimeout(function(){
                // убираем предудущее выделение в s-box:
                s.selectAll("rect[id='sel6']").attr({"opacity": "0"});
                // выделяем четвёртый подстановочный байт из s-box:
                s.selectAll("rect[id='sel7']").attr({"opacity": "1"});
                // выделяем заменяемый байт:
                s.selectAll("rect[id='7_0rect']").attr({"fill": "#efca54"});
                // меняем в нём текст:
                $("#7_0tspan").text("ce");
              } , 3000));
              timeOuts.push(setTimeout(function(){
                // убираем предудущее выделение в s-box:
                s.selectAll("rect[id='sel7']").attr({"opacity": "0"});
              } , 3500));
              subslide++;
              break;

            case 12:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 2700));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("text[id='rotword0']").attr({"opacity": "0"});
              s.selectAll("text[id='subbytes0']").attr({"transform": "translate(126,0)"});
              s.selectAll("text[id='subbytes0']").attr({"opacity": "1"}, 200);
              s.selectAll("g[id='s-box']").attr({"transform": "translate(126,0)"});
              s.selectAll("g[id='s-box']").attr({"opacity": "1"});
              s.selectAll("rect[id='7_1rect']").attr({"fill": "#efca54"});
              $("#7_1tspan").text("9d");
              s.selectAll("rect[id='sel4']").attr({"opacity": "0"});
              s.selectAll("rect[id='7_2rect']").attr({"fill": "#efca54"});
              $("#7_2tspan").text("1a");
              s.selectAll("rect[id='sel5']").attr({"opacity": "0"});
              s.selectAll("rect[id='7_3rect']").attr({"fill": "#efca54"});
              $("#7_3tspan").text("18");
              s.selectAll("rect[id='sel6']").attr({"opacity": "0"});
              s.selectAll("rect[id='7_0rect']").attr({"fill": "#efca54"});
              $("#7_0tspan").text("ce");
              s.selectAll("rect[id='sel7']").attr({"opacity": "0"});

              // скрываем надпись "SubBytes()":
              s.selectAll("text[id='subbytes0']").animate({"opacity": "0"}, 200);
              // скрываем s-box:
              s.selectAll("g[id='s-box']").animate({"opacity": "0"}, 200);
              timeOuts.push(setTimeout(function(){
                // показываем пятую колонку:
                s.selectAll("g[id='column4']").attr({"opacity": "1"});
                // и копию за ней:
                s.selectAll("g[id='column4backback']").attr({"opacity": "1"});
                // возвращаем колонку на место - в таблицу:
                s.selectAll("g[id='column4']").attr({"transform": "translate(126,0)"});
                // выдвигаем её вниз:
                s.selectAll("g[id='column4']").animate({"transform": "translate(127,120)"}, 300);
              } , 700));
              timeOuts.push(setTimeout(function(){
                // показываем линию:
                s.selectAll("path[id='path4']").animate({"opacity": "1"}, 100);
              } , 900));
              timeOuts.push(setTimeout(function(){
                // перемещаем второй столбец Rcon:
                s.selectAll("g[id='rcon1']").animate({"transform": "matrix(1.42, 0, 0, 1.42, -95, -690)"}, 300);
                // скрываем двоечку под ним:
                s.selectAll("g[id='rcon1no']").animate({"opacity": "0"}, 200);
              } , 1500));
              timeOuts.push(setTimeout(function(){
                // передвигаем вправо операторы сложения и равно:
                s.selectAll("g[id='operators']").attr({"transform": "translate(124,0)"});
                // показываем их:
                s.selectAll("g[id='operators']").animate({"opacity": "1"}, 200);
              } , 2000));
              timeOuts.push(setTimeout(function(){
                // показываем результирующий столбец:
                s.selectAll("g[id='column8']").animate({"opacity": "1"}, 200);
              } , 2500));
              subslide++;
              break;

            case 13:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 800));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("text[id='subbytes0']").attr({"opacity": "0"});
              s.selectAll("g[id='s-box']").attr({"opacity": "0"});
              s.selectAll("g[id='column4']").attr({"opacity": "1"});
              s.selectAll("g[id='column4']").attr({"transform": "translate(127,120)"});
              s.selectAll("path[id='path4']").attr({"opacity": "1"});
              s.selectAll("g[id='rcon1']").attr({"transform": "matrix(1.42, 0, 0, 1.42, -95, -690)"});
              s.selectAll("g[id='rcon1no']").attr({"opacity": "0"});
              s.selectAll("g[id='operators']").attr({"transform": "translate(124,0)"});
              s.selectAll("g[id='operators']").attr({"opacity": "1"});
              s.selectAll("g[id='column8']").attr({"opacity": "1"});

              // скрываем всё ненужное:
              s.selectAll("path[id='path4']").attr({"opacity": "0"});              
              s.selectAll("g[id='column4']").animate({"opacity": "0"}, 200);
              s.selectAll("path[id='path7']").attr({"opacity": "0"});              
              s.selectAll("g[id='column7back']").animate({"opacity": "0"}, 200);
              s.selectAll("g[id='operators']").animate({"opacity": "0"}, 200);
              s.selectAll("g[id='rcon1']").animate({"opacity": "0"}, 200);
              timeOuts.push(setTimeout(function(){
                // прячем красное выделение столбца:
                s.selectAll("rect[id='selection0']").animate({"opacity": "0"}, 200);
                // перемещаем полученный столбец в таблицу:
                s.selectAll("g[id='column8']").animate({"transform": "translate(252.3,0)"}, 300);
              } , 500));
              subslide++;
              break;

            case 14:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 1000));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();           
              s.selectAll("g[id='column4']").attr({"opacity": "0"});             
              s.selectAll("g[id='column7back']").attr({"opacity": "0"});
              s.selectAll("g[id='operators']").attr({"opacity": "0"});
              s.selectAll("g[id='rcon1']").attr({"opacity": "0"});
              s.selectAll("rect[id='selection0']").attr({"opacity": "0"});
              s.selectAll("g[id='column8']").attr({"transform": "translate(252.3,0)"});

              // перемещаем красное выделение на следующий столбец вправо:
              s.selectAll("rect[id='selection0']").attr({"transform": "translate(158,0)"});
              // показываем его:
              s.selectAll("rect[id='selection0']").animate({"opacity": "1"}, 200);
              // показываем шестой столбец:              
              s.selectAll("g[id='column5']").attr({"opacity": "1"});
              // устанавливаем его позицию: 
              s.selectAll("g[id='column5']").attr({"transform": "translate(158,0)"});
              // выносим его вниз:
              s.selectAll("g[id='column5']").animate({"transform": "translate(158,120)"}, 300);
              // выносим девятый столбец вниз:              
              s.selectAll("g[id='column8']").animate({"transform": "translate(252,120)"}, 300);
              // показываем его копию под ним:
              s.selectAll("g[id='column8back']").attr({"opacity": "1"});
              timeOuts.push(setTimeout(function(){
                // показываем линии:
                s.selectAll("path[id='path5']").animate({"opacity": "1"}, 100);
                s.selectAll("path[id='path8']").animate({"opacity": "1"}, 100);
              } , 300));
              timeOuts.push(setTimeout(function(){
                // перемещаем XOR и равно правее на один столбец:
                s.selectAll("g[id='operatorsSmall']").attr({"transform": "translate(126,0)"});
                // показываем их:
                s.selectAll("g[id='operatorsSmall']").animate({"opacity": "1"}, 200);
              } , 500));
              timeOuts.push(setTimeout(function(){
                // показываем десятый столбец:
                s.selectAll("g[id='column9']").animate({"opacity": "1"}, 200);
              } , 800));
              subslide++;
              break;

            case 15:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 500));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("rect[id='selection0']").attr({"opacity": "1"});
              s.selectAll("g[id='column5']").attr({"transform": "translate(158,120)"});         
              s.selectAll("g[id='column8']").attr({"transform": "translate(252,120)"});
              s.selectAll("path[id='path5']").attr({"opacity": "1"});
              s.selectAll("path[id='path8']").attr({"opacity": "1"});
              s.selectAll("g[id='operatorsSmall']").attr({"transform": "translate(126,0)"});
              s.selectAll("g[id='operatorsSmall']").attr({"opacity": "1"});
              s.selectAll("g[id='column9']").attr({"opacity": "1"});

              // скрываем всё ненужное:
              s.selectAll("path[id='path5']").attr({"opacity": "0"});              
              s.selectAll("g[id='column5']").animate({"opacity": "0"}, 200);
              s.selectAll("path[id='path8']").attr({"opacity": "0"});              
              s.selectAll("g[id='column8']").animate({"opacity": "0"}, 200);
              s.selectAll("g[id='operatorsSmall']").animate({"opacity": "0"}, 200);

              timeOuts.push(setTimeout(function(){
                // перемещаем столбец в таблицу:
                s.selectAll("g[id='column9']").animate({"transform": "translate(283.3,0)"}, 300);
                // прячем красное выделение:
                s.selectAll("rect[id='selection0']").animate({"opacity": "0"}, 200);
              } , 300));
              subslide++;
              break;

            case 16:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):  
              stopAllAnimations();                       
              s.selectAll("g[id='column5']").attr({"opacity": "0"});            
              s.selectAll("g[id='column8']").attr({"opacity": "0"});
              s.selectAll("g[id='operatorsSmall']").attr({"opacity": "0"});
              s.selectAll("g[id='column9']").attr({"transform": "translate(283.3,0)"});
              s.selectAll("rect[id='selection0']").attr({"opacity": "0"});

              // перемещаем красное выделение на следующий столбец вправо:
              s.selectAll("rect[id='selection0']").attr({"transform": "translate(189,0)"});
              // показываем его:
              s.selectAll("rect[id='selection0']").animate({"opacity": "1"}, 200);
              // показываем седьмой столбец:
              s.selectAll("g[id='column6']").attr({"opacity": "1"});
              // устанавливаем его позицию: 
              s.selectAll("g[id='column6']").attr({"transform": "translate(189,0)"});
              // перемещаем его низ:
              s.selectAll("g[id='column6']").animate({"transform": "translate(189,120)"}, 300);
              // выносим десятый столбец вниз:              
              s.selectAll("g[id='column9']").animate({"transform": "translate(284,120)"}, 300);
              // показываем его копию под ним:
              s.selectAll("g[id='column9back']").attr({"opacity": "1"});
              timeOuts.push(setTimeout(function(){
                // показываем линии:
                s.selectAll("path[id='path6']").animate({"opacity": "1"}, 100);
                s.selectAll("path[id='path9']").animate({"opacity": "1"}, 100);
              } , 300));
              timeOuts.push(setTimeout(function(){
                // перемещаем XOR и равно правее на один столбец:
                s.selectAll("g[id='operatorsSmall']").attr({"transform": "translate(155,0)"});
                // показываем их:
                s.selectAll("g[id='operatorsSmall']").animate({"opacity": "1"}, 200);
              } , 500));
              timeOuts.push(setTimeout(function(){
                // показываем одиннадцатый столбец:
                s.selectAll("g[id='column10']").animate({"opacity": "1"}, 200);
              } , 800));
              subslide++;
              break;

            case 17:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 500));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("rect[id='selection0']").attr({"opacity": "1"});
              s.selectAll("g[id='column6']").attr({"transform": "translate(189,120)"});
              s.selectAll("g[id='column9']").attr({"transform": "translate(284,120)"});
              s.selectAll("path[id='path6']").attr({"opacity": "1"});
              s.selectAll("path[id='path9']").attr({"opacity": "1"});
              s.selectAll("g[id='operatorsSmall']").attr({"transform": "translate(155,0)"});
              s.selectAll("g[id='operatorsSmall']").attr({"opacity": "1"}, 200);
              s.selectAll("g[id='column10']").attr({"opacity": "1"}, 200);

              // скрываем всё ненужное:
              s.selectAll("path[id='path6']").attr({"opacity": "0"});              
              s.selectAll("g[id='column6']").animate({"opacity": "0"}, 200);
              s.selectAll("path[id='path9']").attr({"opacity": "0"});              
              s.selectAll("g[id='column9']").animate({"opacity": "0"}, 200);
              s.selectAll("g[id='operatorsSmall']").animate({"opacity": "0"}, 200);

              timeOuts.push(setTimeout(function(){
                // перемещаем столбец в таблицу:
                s.selectAll("g[id='column10']").animate({"transform": "translate(315,0)"}, 300);
                // прячем красное выделение:
                s.selectAll("rect[id='selection0']").animate({"opacity": "0"}, 200);
              } , 300));
              subslide++;
              break;

            case 18:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();


              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 1000));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):  
              stopAllAnimations();                               
              s.selectAll("g[id='column6']").attr({"opacity": "0"});           
              s.selectAll("g[id='column9']").attr({"opacity": "0"});
              s.selectAll("g[id='operatorsSmall']").attr({"opacity": "0"});
              s.selectAll("g[id='column10']").attr({"transform": "translate(315,0)"});
              s.selectAll("rect[id='selection0']").attr({"opacity": "0"});

              // перемещаем красное выделение на следующий столбец вправо:
              s.selectAll("rect[id='selection0']").attr({"transform": "translate(220,0)"});
              // показываем его:
              s.selectAll("rect[id='selection0']").animate({"opacity": "1"}, 200);
              // перемещаем вниз восьмой столбец:
              s.selectAll("g[id='column7']").animate({"transform": "translate(220,120)"}, 300);
              // показываем его копию под ним:
              s.selectAll("g[id='column7backback']").attr({"opacity": "1"});
              // выносим одиннадцатый столбец вниз:              
              s.selectAll("g[id='column10']").animate({"transform": "translate(314,120)"}, 300);
              // показываем его копию под ним:
              s.selectAll("g[id='column10back']").attr({"opacity": "1"});
              timeOuts.push(setTimeout(function(){
                // показываем линии:
                s.selectAll("path[id='path7']").animate({"opacity": "1"}, 100);
                s.selectAll("path[id='path10']").animate({"opacity": "1"}, 100);
              } , 300));
              timeOuts.push(setTimeout(function(){
                // перемещаем XOR и равно правее на один столбец:
                s.selectAll("g[id='operatorsSmall']").attr({"transform": "translate(186,0)"});
                // показываем их:
                s.selectAll("g[id='operatorsSmall']").animate({"opacity": "1"}, 200);
              } , 500));
              timeOuts.push(setTimeout(function(){
                // показываем одиннадцатый столбец:
                s.selectAll("g[id='column11']").animate({"opacity": "1"}, 200);
              } , 800));
              subslide++;
              break;

            case 19:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 500));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("rect[id='selection0']").attr({"opacity": "1"});
              s.selectAll("g[id='column7']").attr({"transform": "translate(220,120)"});        
              s.selectAll("g[id='column10']").attr({"transform": "translate(314,120)"});
              s.selectAll("path[id='path7']").attr({"opacity": "1"});
              s.selectAll("path[id='path10']").attr({"opacity": "1"});
              s.selectAll("g[id='operatorsSmall']").attr({"transform": "translate(186,0)"});
              s.selectAll("g[id='operatorsSmall']").attr({"opacity": "1"});
              s.selectAll("g[id='column11']").attr({"opacity": "1"});

              // скрываем всё ненужное:
              s.selectAll("path[id='path7']").attr({"opacity": "0"});              
              s.selectAll("g[id='column7']").animate({"opacity": "0"}, 200);
              s.selectAll("path[id='path10']").attr({"opacity": "0"});              
              s.selectAll("g[id='column10']").animate({"opacity": "0"}, 200);
              s.selectAll("g[id='operatorsSmall']").animate({"opacity": "0"}, 200);

              timeOuts.push(setTimeout(function(){
                // перемещаем столбец в таблицу:
                s.selectAll("g[id='column11']").animate({"transform": "translate(346,0)"}, 300);
                // прячем красное выделение:
                s.selectAll("rect[id='selection0']").animate({"opacity": "0"}, 200);
              } , 300));
              subslide++;
              break;

            case 20:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              $("#drawbox").off();              // убираем событие click с drawbox

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();           
              s.selectAll("g[id='column7']").attr({"opacity": "0"});            
              s.selectAll("g[id='column10']").attr({"opacity": "0"});
              s.selectAll("g[id='operatorsSmall']").attr({"opacity": "0"});
              s.selectAll("g[id='column11']").attr({"transform": "translate(346,0)"});
              s.selectAll("rect[id='selection0']").attr({"opacity": "0"});

              // показываем третий раундовый ключ:
              s.selectAll("g[id='roundkey3']").animate({"opacity": "1"}, 200);

              for (var i = 0; i < 8; i++) {   // скрываем последовательно всё столбцы rcon
                timeOuts.push(setTimeout(function(i){
                  // скрываем колонку rcon:
                  s.selectAll("g[id='rcon" + (i+2) + "']").attr({"opacity": "0"});
                  // скрываем номер под ним:
                  s.selectAll("g[id='rcon" + (i+2) + "no']").attr({"opacity": "0"});
                } , 200 * i, i));
              }
              
              timeOuts.push(setTimeout(function(i){
                // показываем десятый раундовый ключ:
                s.selectAll("g[id='roundkey10']").animate({"opacity": "1"}, 200);
              } , 1400));

              subslide++;
              break;
          }
        });
      } , 1000));

      $("#textbox").html("<p><b>KeyExpansion()</b> – расширяет ключ шифрования. Функция получает на вход ключ шифрования длиной 128 бит и создаёт на его основе 10 различных раундовых ключей также по 128 бит каждый.</p><p>Исходный и раундовые ключи записываются последовательно в одной таблице. Каждый последующий раундовый ключ создаётся путём операций над предыдущими, уже известными столбцами таблицы.</p>");
      break;

//====================== слайд 12 ======================
    case 11:
      s.clear();
      stopAllTimers();                  // останавливаем все запущенные таймауты и интервалы
      $("#drawbox").off();              // убираем событие click с drawbox
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);  // плавное проявление слайда на экране
      Snap.load("images/aes/11.svg", function (f) {
        s.append(f);
      });

      timeOuts.push(setTimeout(function(){ 
        clickToContinue();                 // показываем мигающую мышь
        $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
          switch(subslide) {
            case 0:
              s.selectAll("rect[inkscape\\:label='KeyExpansion']").animate({"fill": "#a235ff"}, 300);
              $("#textbox").html("<p><b>KeyExpansion()</b> – точно такая же функция, как и в алгориме зашифрования: из одного 128-битного ключа создаёт 10 раундовых ключей длиной 128 бит каждый.</p>");
              subslide++;
              break;

            case 1:
              s.selectAll("rect[inkscape\\:label='KeyExpansion']").animate({"fill": "#d8a9ff"}, 300);
              s.selectAll("rect[inkscape\\:label='AddRoundKey']").animate({"fill": "#00c800"}, 300);
              $("#textbox").html("<p><b>AddRoundKey()</b> тоже не имеет никаких отличий. Складывает две 128-битных матрицы по модулю два.</p>");
              subslide++;
              break;

            case 2:
              s.selectAll("rect[inkscape\\:label='AddRoundKey']").animate({"fill": "#a5eaa5"}, 300);
              s.selectAll("rect[inkscape\\:label='ShiftRows']").animate({"fill": "#d60000"}, 300);
              $("#textbox").html("<p><b>InvShiftRows()</b> – приставка Inv (inverse) означает, что эта функция обратна функции ShiftRows(). Она также выполняет циклический сдвиг второй строки на один байт, третьей – на два байта и четвёртой – на три, но в обратном направлении – вправо.</p>");
              subslide++;            
              break;

            case 3:
              s.selectAll("rect[inkscape\\:label='ShiftRows']").animate({"fill": "#f0c0c0"}, 300);
              s.selectAll("rect[inkscape\\:label='SubBytes']").animate({"fill": "#35a7c0"}, 300);
              $("#textbox").html("<p><b>InvSubBytes()</b> также осуществляет замену каждого байта 128-битной матрицы, но в обратном направлении. Например:</p><p>SubBytes(52) = 00<br>InvSubBytes(00) = 52</p><p>Для этого определена таблица Inverse S-box, которая имеет такой же размер, что и S-box, и работа с которой аналогична.</p>");
              subslide++;            
              break;

            case 4:
              s.selectAll("rect[inkscape\\:label='SubBytes']").animate({"fill": "#a3ddea"}, 300);
              s.selectAll("rect[inkscape\\:label='AddRoundKey2']").animate({"fill": "#00c800"}, 300);
              $("#textbox").html("<p>Раундовые ключи подаются в функцию AddRoundKey() в обратном порядке, начиная с десятого и заканчивая первым.</p>");
              subslide++;            
              break;

            case 5:
              s.selectAll("rect[inkscape\\:label='AddRoundKey2']").animate({"fill": "#a5eaa5"}, 300);
              s.selectAll("rect[inkscape\\:label='MixColumns']").animate({"fill": "#bfc400"}, 300);
              $("#textbox").html("<p><b>InvMixColumns()</b> также осуществляет умножение двух 128-битных матриц в поле GF(2<sup>8</sup>), но константная матрица имеет другой вид, а именно:</p><p>0e 0b 0d 09<br>09 0e 0b 0d<br>0d 09 0e 0b<br>0b 0d 09 0e</p><p>Умножение матриц и арифметические операции в поле Галуа выполняются точно так же, как и при зашифровании.</p><p>Функция InvMixColumns() не применяется в последнем раунде.</p>");
              subslide++;            
              break;

            case 6:
              // останавливаем все таймеры и убираем мигающую мышь: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              $("#drawbox").off();              // убираем событие click с drawbox
              s.selectAll("rect[inkscape\\:label='MixColumns']").animate({"fill": "#f7f9b7"}, 300);
              $("#textbox").html("<p></p>");
              break;
          }
        });
      } , 1000));

      $("#textbox").html("<p>Кратко рассмотрим процедуру расшифрования.</p><p>На вход алгоритма подаются ключ и шифротекст, на выходе получается открытый текст. Так же, как и при зашифровании, алгоритм выполняет 10 раундов.</p><p>Рассмотрим особенности каждой функции. Кликайте для продолжения.</p>");
      break;

//====================== слайд 13 ======================
    case 12:
      s.clear();
      stopAllTimers();                  // останавливаем все запущенные таймауты и интервалы
      $("#drawbox").off();              // убираем событие click с drawbox
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);  // плавное проявление слайда на экране
      Snap.load("images/aes/12.svg", function (f) {
        s.append(f);
      });

      clickToContinue();                 // показываем мигающую мышь
      $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
        switch(subslide) {
          case 0:
            // выделяем клетку "cb" в s-box:
            s.selectAll("g[id='selection']").animate({"opacity": "1"}, 300);
            s.selectAll("tspan[id='cb']").animate({"fill": "#000000"}, 300);
            $("#textbox").html("<p>Рассмотрим, как получается одна произвольно выбранная ячейка таблицы, так как все остальные заполняются аналогично.</p><p>Как видно, байту 59<sub>16</sub> соответстует подстановка cb<sub>16</sub>.</p>");
            subslide++;
            break;

           case 1:
            s.select("g[inkscape\\:label='Layer 1']").attr({"style": "display:none"});    /// скрываем текущий слой,
            s.select("g[inkscape\\:label='Layer 2']").attr({"style": "display:inline"});  /// показываем следующий
            $("#textbox").html("<p></p>");
            subslide++;
            break;

          case 2:
            // показываем пункт 1:
            s.selectAll("g[id='g1']").attr({"opacity": "1"});
            $("#textbox").html("<p>Сперва находится обратный элемент для байта 59<sub>16</sub> в поле Галуа GF(2<sup>8</sup>).</p><p>Обратными называются такие числа, результат перемножения которых равен единице. Число 00<sub>16</sub> считается обратным самому себе. Самый простой способ найти обратный элемент – это перебрать все из 256 возможных элементов поля GF(2<sup>8</sup>). Однако существуют и более эффективные алгоритмы.</p><p>В данном случае обратным будет число 3е<sub>16</sub>, так как {59}&nbsp;⋅&nbsp;{3e}&nbsp;=&nbsp;{01}.</p>");
            subslide++;            
            break;

          case 3:
            // показываем пункт 2:
            s.selectAll("g[id='g2']").attr({"opacity": "1"});
            $("#textbox").html("<p></p>");
            subslide++;            
            break;

          case 4:
            // показываем пункт 3 и матрицу с вектором:
            s.selectAll("g[id='g3']").attr({"opacity": "1"});
            s.selectAll("g[id='g4']").attr({"opacity": "1"});
            $("#textbox").html("<p>Константная матрица всегда имеет такой вид.</p>");
            subslide++;            
            break;

          case 5:
            // показываем строку над матрицей:
            s.selectAll("g[id='g5']").attr({"opacity": "1"});
            $("#textbox").html("<p>Умножение матрицы на вектор можно выполнить так: сначала записываем вектор в строку над матрицей.</p>");
            subslide++;            
            break;

          case 6:
            // делаем тусклыми столбцы под нулями:
            s.selectAll("g[id='g7']").attr({"opacity": "0.3"});
            s.selectAll("g[id='g8']").attr({"opacity": "0.3"});
            $("#textbox").html("<p>Вычёркиваются столбцы матрицы под нулями из вектора.</p>");
            subslide++;
            break;

          case 7:
            // показываем результат умножения:
            s.selectAll("g[id='g6']").attr({"opacity": "1"});
            $("#textbox").html("<p>Оставшиеся элементы матрицы построчно складываются по модулю два.</p>");
            subslide++;
            break;

          case 8:
            // показываем пункт 4:
            s.selectAll("g[id='g9']").attr({"opacity": "1"});
            // убираем матрицу:
            s.selectAll("g[id='g4']").attr({"opacity": "0"});
            s.selectAll("g[id='g5']").attr({"opacity": "0"});
            // передвигаем результат влево:
            s.selectAll("g[id='g6']").animate({"transform": "translate(-313,0)"}, 400);

            timeOuts.push(setTimeout(function(i){
              // складываем с 0х63:
              s.selectAll("g[id='g10']").animate({"opacity": "1"}, 300);
            } , 600));

            $("#textbox").html("<p></p>");
            subslide++;
            break;

          case 9:
            // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
            stopAllTimers();
            s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

            $("#drawbox").off();              // убираем событие click с drawbox

            // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
            stopAllAnimations(); 
            s.selectAll("g[id='g6']").attr({"transform": "translate(-313,0)"});
            s.selectAll("g[id='g10']").attr({"opacity": "1"});

            // показываем пункт 5:
            s.selectAll("g[id='g11']").attr({"opacity": "1"});

            $("#textbox").html("<p>Таким образом, байту 59<sub>16</sub> соответствует подстановка cb<sub>16</sub>.</p>");
            subslide++;
            break;
        }
      });

      $("#textbox").html("<p>В качестве послесловия покажем, как получены таблицы S-box и Rcon.</p>");
      break;

//====================== слайд 14 ======================
    case 13:
      s.clear();
      stopAllTimers();                  // останавливаем все запущенные таймауты и интервалы
      $("#drawbox").off();              // убираем событие click с drawbox
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);  // плавное проявление слайда на экране
      Snap.load("images/aes/13.svg", function (f) {
        s.append(f);
      });

      clickToContinue();                 // показываем мигающую мышь
      $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
        switch(subslide) {
          case 0:
            s.select("g[inkscape\\:label='Layer 1']").attr({"style": "display:none"});    /// скрываем текущий слой,
            s.select("g[inkscape\\:label='Layer 2']").attr({"style": "display:inline"});  /// показываем следующий
            $("#textbox").html("<p>При <i>i</i> < 8, остаток от деления будет равен делимому, так степень делимого полинома меньше степени делителя.</p>");
            subslide++;
            break;

           case 1:
            s.select("g[inkscape\\:label='Layer 2']").attr({"style": "display:none"});    /// скрываем текущий слой,
            s.select("g[inkscape\\:label='Layer 3']").attr({"style": "display:inline"});  /// показываем следующий
            subslide++;
            break;

          case 2:
            s.select("g[inkscape\\:label='Layer 3']").attr({"style": "display:none"});    /// скрываем текущий слой,
            s.select("g[inkscape\\:label='Layer 4']").attr({"style": "display:inline"});  /// показываем следующий
            subslide++;            
            break;

          case 3:
            s.select("g[inkscape\\:label='Layer 4']").attr({"style": "display:none"});    /// скрываем текущий слой,
            s.select("g[inkscape\\:label='Layer 5']").attr({"style": "display:inline"});  /// показываем следующий
            subslide++;            
            break;

          case 4:
            s.select("g[inkscape\\:label='Layer 5']").attr({"style": "display:none"});    /// скрываем текущий слой,
            s.select("g[inkscape\\:label='Layer 6']").attr({"style": "display:inline"});  /// показываем следующий
            subslide++;            
            break;

          case 5:
            s.select("g[inkscape\\:label='Layer 6']").attr({"style": "display:none"});    /// скрываем текущий слой,
            s.select("g[inkscape\\:label='Layer 7']").attr({"style": "display:inline"});  /// показываем следующий
            subslide++;            
            break;

          case 6:
            s.select("g[inkscape\\:label='Layer 7']").attr({"style": "display:none"});    /// скрываем текущий слой,
            s.select("g[inkscape\\:label='Layer 8']").attr({"style": "display:inline"});  /// показываем следующий
            subslide++;
            break;

          case 7:
            s.select("g[inkscape\\:label='Layer 8']").attr({"style": "display:none"});    /// скрываем текущий слой,
            s.select("g[inkscape\\:label='Layer 9']").attr({"style": "display:inline"});  /// показываем следующий
            subslide++;
            break;

          case 8:
            s.select("g[inkscape\\:label='Layer 9']").attr({"style": "display:none"});    /// скрываем текущий слой,
            s.select("g[inkscape\\:label='Layer 10']").attr({"style": "display:inline"});  /// показываем следующий
            $("#textbox").html("<p>В данном случае частное равно единице, а остаток равен <i>x</i><sup>4</sup>&nbsp;⊕&nbsp;<i>x</i><sup>3</sup>&nbsp;⊕&nbsp;<i>x</i>&nbsp;⊕&nbsp;1. Сделаем проверку.</p><p>Делимое&nbsp;=&nbsp;Частное&nbsp;⋅&nbsp;Делитель&nbsp;⊕&nbsp;Остаток.</p><p>В самом деле, <i>x</i><sup>8</sup>&nbsp;=&nbsp;1&nbsp;⋅&nbsp;(<i>x</i><sup>8</sup>&nbsp;⊕&nbsp;<i>x</i><sup>4</sup>&nbsp;⊕&nbsp;<i>x</i><sup>3</sup>&nbsp;⊕&nbsp;<i>x</i>&nbsp;⊕&nbsp;1)&nbsp;⊕&nbsp;(<i>x</i><sup>4</sup>&nbsp;⊕&nbsp;<i>x</i><sup>3</sup>&nbsp;⊕&nbsp;<i>x</i>&nbsp;⊕&nbsp;1).</p>");
            subslide++;
            break;

          case 9:
            // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
            stopAllTimers();
            s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

            $("#drawbox").off();              // убираем событие click с drawbox

            s.select("g[inkscape\\:label='Layer 10']").attr({"style": "display:none"});    /// скрываем текущий слой,
            s.select("g[inkscape\\:label='Layer 11']").attr({"style": "display:inline"});  /// показываем следующий
            $("#textbox").html("<p>Частное равно <i>x</i>, а остаток равен <i>x</i><sup>5</sup>&nbsp;⊕&nbsp;<i>x</i><sup>4</sup>&nbsp;⊕&nbsp;<i>x</i><sup>2</sup>&nbsp;⊕&nbsp;<i>x</i>.</p><p>Проверка: <i>x</i><sup>9</sup>&nbsp;=&nbsp;<i>x</i>&nbsp;⋅&nbsp;(<i>x</i><sup>8</sup>&nbsp;⊕&nbsp;<i>x</i><sup>4</sup>&nbsp;⊕&nbsp;<i>x</i><sup>3</sup>&nbsp;⊕&nbsp;<i>x</i>&nbsp;⊕&nbsp;1)&nbsp;⊕&nbsp;(<i>x</i><sup>5</sup>&nbsp;⊕&nbsp;<i>x</i><sup>4</sup>&nbsp;⊕&nbsp;<i>x</i><sup>2</sup>&nbsp;⊕&nbsp;<i>x</i>).</p><p>Таблицу Rcon можно продолжать и далее, но в AES-128 всего 10 раундов, поэтому больше не нужно.</p>");
            subslide++;
            break;
        }
      });

      $("#textbox").html("<p>В таблице Rcon рассчитывается только первая строка, остальные ячейки заполняются нулями.</p><p>Вычисление <i>i</i>-той ячейки производится по приведённой формуле, где <i>i</i> – это номер столбца ячейки, начиная с единицы. Для этого необходимо возвести <i>x</i> в степень (<i>i</i>&nbsp;–&nbsp;1) и взять остаток от деления на многочлен <i>x</i><sup>8</sup>&nbsp;⊕&nbsp;<i>x</i><sup>4</sup>&nbsp;⊕&nbsp;<i>x</i><sup>3</sup>&nbsp;⊕&nbsp;<i>x</i>&nbsp;⊕&nbsp;1. Результат переводится из полиномиальной формы в двоичную, а затем в шестнадцатиричную систему счисления и заносится в таблицу.</p>");
      break;

    case -1:                                // если нажали "назад" до первого слайда
    case 14:                                // если нажали "вперёд" после последнего слайда
      s.clear();
      stopAllTimers();                      // останавливаем все запущенные таймауты и интервалы
      contents();                           // переходим на главную, к содержанию курса
      break;

  }
};



//////// записывает полином текстом ///////
var polyToText = function (a) {
// пример: [1,1,1,0,1,0,0,1] => "x7+x4+x2+x+1" 
  var result = "";
  var degree = a.length;

  do {
    degree--;
    if (degree < 0) { return "0"; }
  } while (a[degree] != 1);           // нашли позицию с самой старшей единицей

  if (a[degree] == "1" && degree > 1) {
    result += "x" + degree;
  }
  for (i = degree - 1; i >= 2; i--) {
    if (a[i] == "1") {
      result += "+x" + i;
    }
  }
  if (a[1] == "1") {
    if (degree > 1) { result += "+"; }
    result += "x";
  }
  if (a[0] == "1") {
    if (degree > 0) { result += "+"; }
    result += "1";
  }
  return result;
}



//////// записывает байт текстом ///////
var binToText = function (a) {
// пример: "10010111" => "x7+x4+x2+x+1" 
  var result = "";
  var degree = -1;

  do {
    degree++;
    if (degree > a.length) { return "0"; }
  } while (a[degree] != 1);           // нашли позицию с самой старшей единицей

  if (a[degree] == "1" && degree < 6) {
    result += "x" + (7-degree);
  }
  for (i = degree + 1; i <= 5; i++) {
    if (a[i] == "1") {
      result += "+x" + (7-i);
    }
  }
  if (a[6] == "1") {
    if (degree < 6) { result += "+"; }
    result += "x";
  }
  if (a[7] == "1") {
    if (degree < 7) { result += "+"; }
    result += "1";
  }
  return result;
}
