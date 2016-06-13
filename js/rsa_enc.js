var rsa_enc = function () {
  initialize();                 // загружаем в body все div'ы, создаём холст, задаём его параметры, загружаем меню, объявляем переменные
  loadMenu(rsaEncSlide);        // загрузить меню с иконками "вперёд", "назад", "домой" и "повторить"
  n = 0;                        // номер слайда
  rsaEncSlide(n, s);            // запускаем начальный слайд
};

var rsaEncSlide = function (n, s) {     // загрузить слайд №n на холст s
  $("#drawbox").off();              // убираем событие click с drawbox
  switch(n) {
//====================== слайд 1 ======================
    case 0:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/rsa_enc/0.svg", function (f) {
        s.append(f);
      });

      $("#textbox").html("<p>Алгоритм RSA создан тремя учеными из MIT в 1977 году и назван так по первым буквам их фамилий.</p><p>Перед тем, как перейти к его непосредственному изучению, необходимо рассмотреть такие понятия как взаимно простые числа и функция Эйлера.</p>");
      break;

//====================== слайд 2 ======================
    case 1:
      s.clear();
      stopAllTimers();                // останавливаем все запущенные таймауты и интервалы

      var primes = [2, 3, 5, 7, 11, 13, 17, 19]; // простые числа, меньшие 20-и
      var coprimes = [];         // шесть чисел, которые будем сравнивать на взаимную простоту

      for (var i = 0; i < 6; i++) {    // генерируем шесть чисел
        coprimes.push({
          factorsNumb: Math.floor(Math.random() * 5) + 1 // количество множителей в числе (от 1 до 5)
        });
        do {
          var retry = false;             // если == true, то сгенерировать новое число
          coprimes[i].number = 1;      // само число
          coprimes[i].factors = [];    // массив множителей этого числа
          for (var j = 0; j < coprimes[i].factorsNumb; j++) { // выбираем множители
            var primeIndex = Math.floor(Math.random() * 8);   // номер случайного числа из primes (от 0 до 7)
            coprimes[i].number *= primes[primeIndex];         // умножаем на это простое число
            coprimes[i].factors.push(primes[primeIndex]);     // дописываем его к множителям
          }
          for (var j = 0; j < i; j++) {
            if (coprimes[j].number == coprimes[i].number) {  // выбираем по-новой, если такое число уже было
              retry = true;
            }
          }
          if (coprimes[i].number > 99) {  // выбираем по-новой, если получилось число больше 99 
            retry = true;
          }
        } while (retry);
      }

      var answers = [];  // индексы правильных ответов: с 0 по 4
      var checkbox = [false, false, false, false, false]; // состояние чекбоксов      

      for (var i = 0; i < 5; i++) {
        if ( testCoprimes(coprimes[0].factors, coprimes[i + 1].factors) ) {
          // если взаимно простые числа:
          answers.push(i);
        }
      }

      if (answers.length == 0) {  // если нет ни одного верного ответа
        var index = Math.floor(Math.random() * 5) + 1; // выбираем любой вариант ответа (от 1 до 5), который будем менять на правильный
        coprimes[index].factorsNumb = 1;
        var primeIndex = 0;
        while ( !testCoprimes(coprimes[0].factors, coprimes[index].factors) ) { // выбираем новый ответ, если не взаимно простые
          coprimes[index].number = primes[primeIndex];      // простое число из списка
          coprimes[index].factors = [ primes[primeIndex] ];    // оно же
          primeIndex++;
        }
        answers.push(index - 1);
      }

      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/rsa_enc/1.svg", function (f) {
        s.append(f);
        // выводим сгенерированные числа:
        $("#puzzle").text("Определите, какие из предложенных чисел взаимно простые с числом " + coprimes[0].number + ":");
        for (var i = 0; i < 5; i++) {
          $("#answer" + i).text(coprimes[i + 1].number);
        }
      });

      clickToContinue();                 // показываем мигающую мышь
      $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
        // останавливаем все таймеры и убираем мигающую мышь: 
        stopAllTimers();
        s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь
        $("#drawbox").off();              // убираем событие click с drawbox

        // показываем следующий слой:
        s.selectAll("g[inkscape\\:label='Layer 1']").attr({"display": "none"});
        s.selectAll("g[inkscape\\:label='Layer 2']").attr({"display": "inline"});

        ////// не знаю, как можно было бы сделать эти проверки в цикле, поэтому пока такой вот индусский код ///////
        $("#chkbox0").click(function () {   // по клику на чекбоксе
          if (!checkbox[0]) {       // если он не отмечен
            checkbox[0] = true;     // отмечаем
            s.select("path[id='checkbox0']").attr({"opacity": "1"});
          } else {                  // иначе убираем отметку
            checkbox[0] = false;
            s.select("path[id='checkbox0']").attr({"opacity": "0"});
          }
        });
        $("#chkbox1").click(function () {
          if (!checkbox[1]) {
            checkbox[1] = true;
            s.select("path[id='checkbox1']").attr({"opacity": "1"});
          } else {
            checkbox[1] = false;
            s.select("path[id='checkbox1']").attr({"opacity": "0"});
          }
        });
        $("#chkbox2").click(function () {
          if (!checkbox[2]) {
            checkbox[2] = true;
            s.select("path[id='checkbox2']").attr({"opacity": "1"});
          } else {
            checkbox[2] = false;
            s.select("path[id='checkbox2']").attr({"opacity": "0"});
          }
        });
        $("#chkbox3").click(function () {
          if (!checkbox[3]) {
            checkbox[3] = true;
            s.select("path[id='checkbox3']").attr({"opacity": "1"});
          } else {
            checkbox[3] = false;
            s.select("path[id='checkbox3']").attr({"opacity": "0"});
          }
        });
        $("#chkbox4").click(function () {
          if (!checkbox[4]) {
            checkbox[4] = true;
            s.select("path[id='checkbox4']").attr({"opacity": "1"});
          } else {
            checkbox[4] = false;
            s.select("path[id='checkbox4']").attr({"opacity": "0"});
          }
        });
        //////////////////////////////////

        $("#drawbox").click(function() {  // по каждому клику по рисунку проверяем, не отмечены ли все правильные ответы
          var correct = true;
          for (var i = 0; i < 5; i++) {
            if (checkbox[i]) {
              if (answers.indexOf(i) == -1) {
                // если вариант ответа отмечен, но в правильных ответах его нет:
                correct = false;
              }
            }
          }
          for (var i = 0; i < answers.length; i++) {
            if (!checkbox[answers[i]]) {
              // если правильнй вариант ответа не отмечен
              correct = false;
            }
          }
          if (correct) { // если отмечено всё верно
            for (var i = 0; i < 5; i++) {
              $("#chkbox" + i).off();              // убираем событие click с чекбоксов
            }
            var s = "<b>" + coprimes[0].number + " = " + factorsToString(coprimes[0].factors) + "</b><br>";
            for (var i = 1; i < coprimes.length; i++) {   // показываем разложение на множители
              s += coprimes[i].number + " = " + factorsToString(coprimes[i].factors) + "<br>";
            }
            $("#textbox").html("<p>Верно.</p><p>Разложение на простые множители:<br>" + s + "</p>");
          }
        });

        $("#textbox").html("<p>Для того чтобы определить, являются ли два числа взаимно простыми, необходимо разложить каждое из них на простые множители и посмотреть, не содержат ли они одинаковых множителей. Если нет, то они взаимно простые.</p><p>Для облегчения разложения на множители, ниже перечислены простые числа, меньшие 20:<br>2, 3, 5, 7, 11, 13, 17, 19.</p>");
      });

      $("#textbox").html("<p><b>Взаимно простые</b> числа не имеют общих простых делителей, кроме единицы.</p>");
      break;

//====================== слайд 3 ======================
    case 2:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/rsa_enc/2.svg", function (f) {
        s.append(f);
      });

      clickToContinue();                 // показываем мигающую мышь
      $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
        switch(subslide) {
          case 0:
            // показываем следующий слой:
            s.selectAll("g[inkscape\\:label='Layer 1']").attr({"display": "none"});
            s.selectAll("g[inkscape\\:label='Layer 2']").attr({"display": "inline"});

            $("#textbox").html("<p></p>");
            subslide++;
            break;

          case 1:
            // останавливаем все таймеры и убираем мигающую мышь: 
            stopAllTimers();
            s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь
            $("#drawbox").off();              // убираем событие click с drawbox

            // показываем следующий слой:
            s.selectAll("g[inkscape\\:label='Layer 2']").attr({"display": "none"});
            s.selectAll("g[inkscape\\:label='Layer 3']").attr({"display": "inline"});

            $("#textbox").html("<p><i>Первое свойство</i>. Функция Эйлера от простого числа равна этому простому числу минус единица.</p><p>В самом деле, если <i>p</i> – простое число, то все натуральные числа, меньшие <i>p</i> будут взаимно просты с ним. Это <i>p</i> - 1 чисел, следовательно,  <i>φ</i>(<i>p</i>) = <i>p</i> - 1.</p><p><i>Второе свойство</i> называется свойством <b>мультипликативности</b>: функция Эйлера от произведения равна произведению функций Эйлера от каждого из множителей.</p>");
            subslide++;
            break;
        }
      });

      $("#textbox").html("<p></p>");
      break;

//====================== слайд 4 ======================
    case 3:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/rsa_enc/3.svg", function (f) {
        s.append(f);
      });

      clickToContinue();                 // показываем мигающую мышь
      $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
        // останавливаем все таймеры и убираем мигающую мышь: 
        stopAllTimers();
        s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь
        $("#drawbox").off();              // убираем событие click с drawbox

        // показываем следующий слой:
        s.selectAll("g[inkscape\\:label='Layer 1']").attr({"display": "none"});
        s.selectAll("g[inkscape\\:label='Layer 2']").attr({"display": "inline"});

        $("#textbox").html("<p>Обратная операция – разложение числа на можители – не имеет эффективного решения.</p><p>Если последовательно пробовать делить данное число на простые множители: 3, 5, 7, 11, ..., 691 – то придётся проверить 125 простых чисел, прежде чем будет найден один из множителей.</p><p>Существуют более быстрые алгоритмы, чем простой перебор, но они всё равно <i>очень</i> медленны по сравнению с прямой функцией – умножением.</p>");
      });

      $("#textbox").html("<p>В качестве односторонней функции в алгоритме RSA используется задача <b>факторизации</b> больших чисел, т.е. разложения их на простые множители.</p><p>Прямая функция – это обычное перемножение двух больших простых чисел (намного больших, чем эти).</p>");
      break;

//====================== слайд 5 ======================
    case 4:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/rsa_enc/4.svg", function (f) {
        s.append(f);
      });

      clickToContinue();                 // показываем мигающую мышь
      $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
        switch(subslide) {
          case 0:
            // перемещаем текст к Бобу:
            s.selectAll("text[id='text0']").animate({"transform": "translate(-380 -135)"}, 300);
            timeOuts.push(setTimeout(function(){
              // показываем следующий текст:
              s.selectAll("text[id='text1']").animate({"opacity": "1"}, 300);
            } , 300));
            $("#textbox").html("<p>Далее вычисляется их произведение <i>n</i>, называемое <b>модулем</b>.</p>");
            subslide++;
            break;

          case 1:
            // завершаем предыдущие анимации:
            stopAllTimers();
            stopAllAnimations();
            s.selectAll("text[id='text0']").attr({"transform": "translate(-380 -135)"});
            s.selectAll("text[id='text1']").attr({"opacity": "1"});
            // запускаем мигающую мышь:
            clickToContinue();
            // показываем следующий текст:
            s.selectAll("text[id='text1']").animate({"opacity": "0"}, 300);
            s.selectAll("text[id='text2']").animate({"opacity": "1"}, 300);
            timeOuts.push(setTimeout(function(){
              // перемещаем текст к Бобу:
              s.selectAll("text[id='text2']").animate({"transform": "translate(-380 -100)"}, 300);
            } , 500));
            subslide++;
            break;

          case 2:
            // завершаем предыдущие анимации:
            stopAllTimers();
            stopAllAnimations();
            s.selectAll("text[id='text1']").attr({"opacity": "0"});
            s.selectAll("text[id='text2']").attr({"opacity": "1"});
            s.selectAll("text[id='text2']").attr({"transform": "translate(-380 -100)"});
            // запускаем мигающую мышь:
            clickToContinue();
            // показываем следующий текст:
            s.selectAll("text[id='text3']").animate({"opacity": "1"}, 300);
            $("#textbox").html("<p>Вычисляется значение функции Эйлера от числа <i>n</i>. При этом используются два ранее рассмотренных свойства: мультипликативности и быстрого вычисления функции Эйлера от простого числа.</p>");
            subslide++;
            break;

          case 3:
            // завершаем предыдущие анимации:
            stopAllTimers();
            stopAllAnimations();
            s.selectAll("text[id='text3']").attr({"opacity": "1"});
            // запускаем мигающую мышь:
            clickToContinue();
            // показываем следующий текст:
            s.selectAll("text[id='text3']").animate({"opacity": "0"}, 300);
            s.selectAll("text[id='text4']").animate({"opacity": "1"}, 300);
            timeOuts.push(setTimeout(function(){
              // перемещаем текст к Бобу:
              s.selectAll("text[id='text4']").animate({"transform": "translate(-380 -75)"}, 300);
            } , 500));
            subslide++;
            break;

          case 4:
            // завершаем предыдущие анимации:
            stopAllTimers();
            stopAllAnimations();
            s.selectAll("text[id='text3']").attr({"opacity": "0"});
            s.selectAll("text[id='text4']").attr({"opacity": "1"});
            s.selectAll("text[id='text4']").attr({"transform": "translate(-380 -75)"});
            // запускаем мигающую мышь:
            clickToContinue();
            // показываем следующий текст:
            s.selectAll("text[id='text5']").animate({"opacity": "1"}, 300);
            $("#textbox").html("<p>Выбирается число <i>e</i>, взаимно простое со значением функции Эйлера <i>φ</i>(<i>n</i>). Число <i>e</i> назвается <b>открытой экспонентой</b>. Оно необязательно должно быть большим. Обычно это простые числа с небольшим количеством единиц в двоичной форме записи: 17, 257 или 65537 – это экономит время, необходимое для шифрования.</p>");
            subslide++;
            break;

          case 5:
            // завершаем предыдущие анимации:
            stopAllTimers();
            stopAllAnimations();
            s.selectAll("text[id='text5']").attr({"opacity": "1"});
            // запускаем мигающую мышь:
            clickToContinue();
            // перемещаем текст к Бобу:
            s.selectAll("text[id='text5']").animate({"transform": "translate(-380 -55)"}, 300);
            timeOuts.push(setTimeout(function(){
              // показываем следующий текст:
              s.selectAll("text[id='text6']").animate({"opacity": "1"}, 300);
            } , 300));
            $("#textbox").html("<p>Вычисляется <b>секретная экспонента</b> <i>d</i>, являющаяся решением уравнения, приведённого на слайде слева.</p>");
            subslide++;
            break;

          case 6:
            // завершаем предыдущие анимации:
            stopAllTimers();
            stopAllAnimations();
            s.selectAll("text[id='text5']").attr({"transform": "translate(-380 -55)"});
            s.selectAll("text[id='text6']").attr({"opacity": "1"});
            // запускаем мигающую мышь:
            clickToContinue();
            // показываем следующий текст:
            s.selectAll("text[id='text7']").animate({"opacity": "1"}, 300);
            s.selectAll("text[id='text8']").animate({"opacity": "1"}, 300);
            $("#textbox").html("<p>Подставляем в уравнение известные числовые величины.</p><p>Поиск подходящего <i>d</i> легко выполняется с помощью расширенного алгоритма Евклида.</p>");
            subslide++;
            break;

          case 7:
            // завершаем предыдущие анимации:
            stopAllTimers();
            stopAllAnimations();
            s.selectAll("text[id='text7']").attr({"opacity": "1"});
            s.selectAll("text[id='text8']").attr({"opacity": "1"});
            // запускаем мигающую мышь:
            clickToContinue();
            // скрываем пояснения:
            s.selectAll("text[id='text6']").animate({"opacity": "0"}, 300);
            s.selectAll("text[id='text7']").animate({"opacity": "0"}, 300);
            // перемещаем текст к Бобу:
            s.selectAll("text[id='text8']").animate({"transform": "translate(-380 -70)"}, 300);
            subslide++;
            break;

          case 8:
            // завершаем предыдущие анимации:
            stopAllTimers();
            stopAllAnimations();
            s.selectAll("text[id='text6']").attr({"opacity": "0"});
            s.selectAll("text[id='text7']").attr({"opacity": "0"});
            s.selectAll("text[id='text8']").attr({"transform": "translate(-380 -70)"});
            // запускаем мигающую мышь:
            clickToContinue();
            // скрываем ненужные надписи:
            s.selectAll("text[id='text0']").animate({"opacity": "0"}, 300);
            s.selectAll("text[id='text4']").animate({"opacity": "0"}, 300);
            timeOuts.push(setTimeout(function(){
              // пододвигаем оставшийся текст под Боба:
              s.selectAll("text[id='text2']").animate({"transform": "translate(-380 -150)"}, 300);
              s.selectAll("text[id='text5']").animate({"transform": "translate(-380 -125)"}, 300);
              s.selectAll("text[id='text8']").animate({"transform": "translate(-380 -137)"}, 300);
            } , 300));
            $("#textbox").html("<p>Для генерации ключей необходимы только числа <i>n</i>, <i>e</i> и <i>d</i>.</p>");
            subslide++;
            break;

          case 9:
            // завершаем предыдущие анимации:
            stopAllTimers();
            stopAllAnimations();
            s.selectAll("text[id='text0']").attr({"opacity": "0"});
            s.selectAll("text[id='text4']").attr({"opacity": "0"});
            s.selectAll("text[id='text2']").attr({"transform": "translate(-380 -150)"});
            s.selectAll("text[id='text5']").attr({"transform": "translate(-380 -125)"});
            s.selectAll("text[id='text8']").attr({"transform": "translate(-380 -137)"});
            // убираем мигающую мышь: 
            s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});
            $("#drawbox").off();              // убираем событие click с drawbox
            // показываем открытый и закрытый ключи:
            s.selectAll("g[id='g0']").animate({"opacity": "1"}, 300);
            // скрываем параметры d, e, n:
            s.selectAll("text[id='text2']").animate({"opacity": "0"}, 300);
            s.selectAll("text[id='text5']").animate({"opacity": "0"}, 300);
            s.selectAll("text[id='text8']").animate({"opacity": "0"}, 300);
            $("#textbox").html("<p><i>d</i> и <i>n</i> представляют собой закрытый ключ, <i>e</i> и <i>n</i> – открытый ключ.</p>");
            subslide++;
            break;
        }
      });

      $("#textbox").html("<p>Самой сложной частью алгоритма RSA является создание пары ключей: открытого и закрытого.</p><p>Так как во всех наших примерах Алиса должна отправить секретное сообщение Бобу, то ключи должен сгенерировать Боб.</p><p>Итак, на первом этапе выбираются два больших случайных простых числа <i>p</i> и <i>q</i>. В реальности они гораздо больше, чем в данном примере.</p><p>Большие случайные простые числа получают так: выбирается случайное число заданной длины, а затем с помощью так назваемого теста Миллера-Рабина, проверяют, простое ли оно. Если нет, то берётся следующее за ним число и опять проверяется на простоту. Так продолжается до тех пор, пока простое число не будет найдено.</p>");
      break;

//====================== слайд 6 ======================
    case 5:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/rsa_enc/5.svg", function (f) {
        s.append(f);
      });

      clickToContinue();                 // показываем мигающую мышь
      $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
        switch(subslide) {
          case 0:
            // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
            stopAllTimers();
            s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

            timeOuts.push(setTimeout(function(){
              clickToContinue();                 // показываем мигающую мышь
            } , 1300));

            // помещаем открытый ключ в пакет:
            s.selectAll("g[id='g0']").animate({"opacity": "1"}, 300);
            s.selectAll("text[id='text0']").animate({"opacity": "0"}, 300);

            timeOuts.push(setTimeout(function(){
              // перемещаем пакет к Алисе:
              s.selectAll("g[id='g0']").animate({"transform": "translate(-630 0)"}, 600);
            } , 700));

            $("#textbox").html("<p>Он отправляет открытый ключ Алисе.</p>");
            subslide++;
            break;

          case 1:
            // завершаем предыдущие анимации:
            stopAllTimers();
            stopAllAnimations();
            s.selectAll("g[id='g0']").attr({"opacity": "1"});
            s.selectAll("text[id='text0']").attr({"opacity": "0"});
            s.selectAll("g[id='g0']").attr({"transform": "translate(-630 0)"});
            // запускаем мигающую мышь:
            clickToContinue();
            // показываем открытый текст Алисы:
            s.selectAll("text[id='text1']").animate({"opacity": "1"}, 300);
            $("#textbox").html("<p>Секретное сообщение Алисы представлено числом 12345678. Как известно, любой файл в цифровой технике представляется в виде большого числа.</p><p>Для успешного расшифрования, число <i>m</i> должно быть меньше <i>n</i> и взаимно простым с ним (то есть не делиться нацело на <i>p</i> или <i>q</i>). Если сообщение оказывается больше <i>n</i>, то его разбивают на блоки и каждый блок шифруют отдельно (блочное шифрование). Либо чаще всего в таком случае используют гибридную схему шифрования, описанную во введении – в этом случае число <i>m</i>, представляющее симметричный ключ шифрования, точно будет меньше <i>n</i>.</p>");
            subslide++;
            break;

          case 2:
            // завершаем предыдущие анимации:
            stopAllTimers();
            stopAllAnimations();
            s.selectAll("text[id='text1']").attr({"opacity": "1"});
            // запускаем мигающую мышь:
            clickToContinue();
            // показваем расчёт шифротекста:
            s.selectAll("g[id='text2']").animate({"opacity": "1"}, 300);
            // скрываем пакет с открытым ключом:
            s.selectAll("g[id='g0']").animate({"opacity": "0"}, 300);
            $("#textbox").html("<p>С помощью открытого ключа (числа <i>e</i> и <i>n</i>) и открытого текста <i>m</i> рассчитывается шифротекст <i>c</i>.</p>");
            subslide++;
            break;

          case 3:
            // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
            stopAllTimers();
            s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

            timeOuts.push(setTimeout(function(){
              clickToContinue();                 // показываем мигающую мышь
            } , 1300));

            // завершаем предыдущие анимации:
            stopAllAnimations();
            s.selectAll("g[id='text2']").attr({"opacity": "1"});
            s.selectAll("g[id='g0']").attr({"opacity": "0"});

            // прячем расчёт шифротекста:
            s.selectAll("g[id='text2']").animate({"opacity": "0"}, 300);
            // показываем пакет с шифротекстом:
            s.selectAll("g[id='g1']").animate({"opacity": "1"}, 300);

            timeOuts.push(setTimeout(function(){
              // перемещаем пакет к Бобу:
              s.selectAll("g[id='g1']").animate({"transform": "translate(0 0)"}, 600);
            } , 700));
            $("#textbox").html("<p>Алиса отправляет шифротекст Бобу.</p>");
            subslide++;
            break;

          case 4:
            // завершаем предыдущие анимации:
            stopAllTimers();
            stopAllAnimations();
            s.selectAll("g[id='text2']").attr({"opacity": "0"});
            s.selectAll("g[id='g1']").attr({"opacity": "1"});
            s.selectAll("g[id='g1']").attr({"transform": "translate(0 0)"});
            // запускаем мигающую мышь:
            clickToContinue();
            // показываем расшифровку:
            s.selectAll("g[id='text3']").animate({"opacity": "1"}, 300);
            $("#textbox").html("<p>С помощью своего закрытого ключа (числа <i>d</i> и <i>n</i>) Боб получает из шифротекста <i>c</i> секретное сообщение Алисы <i>m</i>.</p>");
            subslide++;
            break;

          case 5:
            // завершаем предыдущие анимации:
            stopAllTimers();
            stopAllAnimations();
            s.selectAll("g[id='text3']").attr({"opacity": "1"});
            // запускаем мигающую мышь:
            clickToContinue();
            // прячем расшифровку:
            s.selectAll("g[id='text3']").animate({"opacity": "0"}, 300);
            // прячем пакет с шифротекстом:
            s.selectAll("g[id='g1']").animate({"opacity": "0"}, 300);
            // прячем закрытый ключ:
            s.selectAll("text[id='text5']").animate({"opacity": "0"}, 300);
            // показываем открытый текст:
            s.selectAll("text[id='text4']").animate({"opacity": "1"}, 300);
            $("#textbox").html("<p>Как видно, секретное сообщение Боба получилось таким же, как и у Алисы.</p>");
            subslide++;
            break;

          case 6:
            // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
            stopAllTimers();
            s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь
            $("#drawbox").off();              // убираем событие click с drawbox
            // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
            stopAllAnimations();
            s.selectAll("g[id='text3']").attr({"opacity": "0"});
            s.selectAll("g[id='g1']").attr({"opacity": "0"});
            s.selectAll("text[id='text5']").attr({"opacity": "0"});
            s.selectAll("text[id='text4']").attr({"opacity": "1"});

            // показываем что знает и не знает злоумышленник:
            s.selectAll("g[id='g2']").animate({"opacity": "1"}, 300);

            $("#textbox").html("<p>Если злоумышленник прослушивает линию связи, то ему известны числа, которые по ней передавались: <i>n</i>, <i>e</i> и <i>c</i>.</p><p>Для того, чтобы злоумышленнику расшифровать сообщение, ему необходимо знать секретную экспоненту <i>d</i>.</p><p>Чтобы получить <i>d</i> из уравнения (<i>d</i> · <i>e</i>) mod <i>φ</i>(<i>n</i>) = 1, необходимо знать, чему равна функция Эйлера <i>φ</i>(<i>n</i>).</p><p>Чтобы вычислить функцию Эйлера от числа <i>n</i>, необходимо знать его простые множители <i>p</i> и <i>q</i>, так как <i>φ</i>(<i>n</i>) = (<i>p</i> - 1) · (<i>q</i> - 1). Если число <i>n</i> достаточно большое, то разложить его на множители за разумное время не получится даже с использованием всех компьютеров планеты.</p><p>На 2016-ый год, такая достаточная длина числа <i>n</i> составляет 2048 бит и более.</p>");
            subslide++;
            break;
        }
      });

      $("#textbox").html("<p>Итак, Боб создал закрытый и отрытый ключ.</p>");
      break;

    case -1:                                // если нажали "назад" до первого слайда
    case 6:                                 // если нажали "вперёд" после последнего слайда
      s.clear();
      stopAllTimers();                      // останавливаем все запущенные таймауты и интервалы
      contents();                           // переходим на главную, к содержанию курса
      break;

  }
};



////// определяет, взаимно ли просты два числа, представленные в виде массивов множителей ////////
var testCoprimes = function(a, b){    // на ход получает два массива: можители первого числа и множители второго
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      if (a[i] == b[j]) { 
        // если нашли повторяющийся множитель, то не взаимно простые:
        return false;
      }
    }
  }
  return true;
}



///// выводит массив множителей в строку //////
var factorsToString = function (factors) {          // получает на вход массив множителей, возвращает строку
  factors.sort(function(a, b) { return a - b } );   // сортируем массив в порядке возрастания
  var s = "";                                       // результат 
  for (var i = 0; i < factors.length - 1; i++) {
    s += factors[i] + " · ";
  }
  s += factors[factors.length - 1];
  return s;
}
