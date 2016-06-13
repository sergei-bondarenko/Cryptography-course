var dh = function () {
  initialize();                 // загружаем в body все div'ы, создаём холст, задаём его параметры, загружаем меню, объявляем переменные
  loadMenu(dhSlide);            // загрузить меню с иконками "вперёд", "назад", "домой" и "повторить"
  n = 0;                        // номер слайда
  dhSlide(n, s);                // запускаем начальный слайд
};

var dhSlide = function (n, s) {     // загрузить слайд №n на холст s
  $("#drawbox").off();              // убираем событие click с drawbox
  switch(n) {
//====================== слайд 1 ======================
    case 0:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/dh/0.svg", function (f) {
        s.append(f);
      });

      $("#textbox").html("<p>Начало асимметричной криптографии было положено в 1976 году благодаря работам Диффи, Хеллмана и Меркла. До этого момента существовали только симметричные шифры.</p><p>Алгоритм Диффи-Хеллмана позволяет участникам протокола выработать общий секретный ключ, не обмениваясь при этом секретной информацией. Далее этот ключ используется в качестве ключа симметричного шифрования.</p>");
      break;

//====================== слайд 2 ======================
    case 1:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      var num0 = Math.floor(Math.random() * 51);      // случайное число от 0 до 50 - делимое
      var num1 = Math.floor(Math.random() * 10) + 1;  // случайное число от 1 до 10 - делитель
      var mod = num0 % num1;                          // остаток от деления
      Snap.load("images/dh/1.svg", function (f) {
        s.append(f);
        // скрываем то, что не нужно показывать:
        s.selectAll("rect[id='glow0']").attr({"opacity": "0"});
        s.selectAll("text[inkscape\\:label='answer']").attr({"opacity": "0"});
        s.selectAll("path[id='OK']").attr({"opacity": "0"});
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
            } , 3000));

            // вращаем стрелку на 810 градусов:
            s.selectAll("g[id='hand']").animate({"transform": "rotate(810,465.80357,270)"}, 3000);
            timeOuts.push(setTimeout(function(){
              $("#tspan0").text("Полных оборотов: 1");
            } , 1300));
            timeOuts.push(setTimeout(function(){
              $("#tspan0").text("Полных оборотов: 2");
            } , 2600));
            timeOuts.push(setTimeout(function(){
              $("#tspan1").text("Остаток: 3");
            } , 3000));
            $("#textbox").html("<p>За 27 часов часовая стрелка совершит два полных оборота и остановится на цифре 3.</p>");
            subslide++;
            break;

          case 1:
            // завершаем предыдущие анимации:
            stopAllTimers();
            stopAllAnimations();
            s.selectAll("g[id='hand']").attr({"transform": "rotate(810,465.80357,270)"});
            $("#tspan0").text("Полных оборотов: 2");
            $("#tspan1").text("Остаток: 3");
            // запускаем мигающую мышь:
            clickToContinue();

            // показываем ответ:
            s.selectAll("text[id='text0']").attr({"opacity": "0"});
            s.selectAll("text[id='text1']").attr({"opacity": "1"});
            $("#textbox").html("<p>Таким образом, ответ – 3.</p><p>Если бы нужно было находить остаток от деления на другое число, то циферблат был бы разделён не на 12, а на другое количество \"часов\".</p>");
            subslide++;
            break;

          case 2:
            // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
            stopAllTimers();
            s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь
            $("#drawbox").off();              // убираем событие click с drawbox

            // показываем следующий слой:
            s.selectAll("g[inkscape\\:label='Layer 1']").attr({"display": "none"});
            s.selectAll("g[inkscape\\:label='Layer 2']").attr({"display": "inline"});
            // прячем стрелку:
            s.selectAll("g[id='hand']").attr({"opacity": "0"});

            // пишем пример, который нужно решить:
            $("#puzzle").text(num0 + " mod " + num1 + " =");
      
            var bbox = s.selectAll("text[inkscape\\:label='puzzle']").getBBox(); // получаем расположение текста задания
            s.selectAll("rect[id='glow0']").attr({"x": bbox.x + bbox.width + 5});     /// выставляем ореол
            s.selectAll("rect[id='border0']").attr({"x": bbox.x + bbox.width + 7.3}); /// и контур блока ввода

            input(mod, /[^0-9]/g, 2, "30px", "rect[id='glow0']", "rect[id='border0']", "translate(" + (bbox.x + bbox.width + 7) + " 308)", "", 
              function (){
                $("#textdiv").remove();       // удаляем блок ввода
                $("#puzzle").text(num0 + " mod " + num1 + " = " + mod);       // переносим правильный ответ

                var bbox = s.selectAll("text[inkscape\\:label='puzzle']").getBBox(); // получаем расположение текста задания
                s.select("path[id='OK']").attr({"transform": "translate(" + (bbox.x + bbox.width - 545) + " 0)"}); // перемещаем галочку
                var line = s.select("path[id='OK']");
                line.draw(200);               // рисуем галочку

                s.selectAll("rect[id='border0']").attr({"opacity": "0"});     // скрываем рамку
                $("#textbox").html("<p>Верно.</p>");
              }
            );

            $("#textbox").html("<p>Попробуйте решить предложенное задание.</p>");
            subslide++;
            break;
        }
      });

      $("#textbox").html("<p>Чтобы понять алгоритм Диффи-Хеллмана, сперва необходимо усвоить некоторые понятия.</p><p><b>mod</b> (от англ. modulo) – операция взятия остатка от деления одного числа на другое.</p><p>Остаток от деления легко понять на примере с часами. Например, необходимо определить отстаток от деления 27 на 12. Это эквивалентно вопросу: куда будет указывать часовая стрелка через 27 часов?</p>");
      break;

//====================== слайд 3 ======================
    case 2:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      Snap.load("images/dh/2.svg", function (f) {
        s.append(f);
      });

      timeOuts.push(setTimeout(function(){ 
        clickToContinue();                 // показываем мигающую мышь
        $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
          switch(subslide) {
            case 0:
              // показыаем следующий слой:
              s.selectAll("g[inkscape\\:label='Layer 1']").attr({"display": "none"});
              s.selectAll("g[inkscape\\:label='Layer 2']").attr({"display": "inline"});

              $("#textbox").html("<p>Допустим, что <i>p</i> = 7. Найдём первообразные корни по этому модулю.</p><p>Для этого будем последовательно проверять все <i>g</i> от 1 до 6, удовлетворяют ли они двум ранее приведённым условиям или нет.</p><p>Как видно, <i>g</i> = 1 не удовлетворяет второму условию (выражения с показателями степеней от 1 до 5 должны не равняться единице). Следовательно, <i>g</i> = 1 не является первообразным корнем по модулю 7.</p>");
              subslide++;
              break;

            case 1:
              // показыаем следующий слой:
              s.selectAll("g[inkscape\\:label='Layer 2']").attr({"display": "none"});
              s.selectAll("g[inkscape\\:label='Layer 3']").attr({"display": "inline"});

              $("#textbox").html("<p>При <i>g</i> = 2 в одном случае нарушается второе условие. Значит, это тоже не первообразный корень.</p>");
              subslide++;
              break;

            case 2:
              // показыаем следующий слой:
              s.selectAll("g[inkscape\\:label='Layer 3']").attr({"display": "none"});
              s.selectAll("g[inkscape\\:label='Layer 4']").attr({"display": "inline"});

              $("#textbox").html("<p>При <i>g</i> = 3 выполняются все условия. Таким образом, это первый первообразный корень.</p>");
              subslide++;
              break;

            case 3:
              // показыаем следующий слой:
              s.selectAll("g[inkscape\\:label='Layer 4']").attr({"display": "none"});
              s.selectAll("g[inkscape\\:label='Layer 5']").attr({"display": "inline"});

              $("#textbox").html("<p><i>g</i> = 4 не первообразный корень.</p>");
              subslide++;
              break;

            case 4:
              // показыаем следующий слой:
              s.selectAll("g[inkscape\\:label='Layer 5']").attr({"display": "none"});
              s.selectAll("g[inkscape\\:label='Layer 6']").attr({"display": "inline"});

              $("#textbox").html("<p><i>g</i> = 5 – второй первообразный корень.</p>");
              subslide++;
              break;

            case 5:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь
              $("#drawbox").off();              // убираем событие click с drawbox
              // показыаем следующий слой:
              s.selectAll("g[inkscape\\:label='Layer 6']").attr({"display": "none"});
              s.selectAll("g[inkscape\\:label='Layer 7']").attr({"display": "inline"});

              $("#textbox").html("<p><i>g</i> = 6 не первообразный корень.</p><p>Таким образом, 3 и 5 – первообразные корни по модулю 7.</p>");
              subslide++;
              break;
          }
        });
      } , 2000));

      $("#textbox").html("<p>В алгоритме Диффи-Хеллмана используется такое понятие, как <b>первообразный корень</b>. У любого простого числа <i>p</i> есть соотвествующий ему первообразный корень <i>g</i> (или даже несколько).</p><p>Далее на примере будет показано, как определить, является ли число первообразным корнем по данному модулю или нет.</p>");
      break;

//====================== слайд 4 ======================
    case 3:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      Snap.load("images/dh/3.svg", function (f) {
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
              $("#drawbox").off();              // убираем событие click с drawbox

              // показыаем следующий слой:
              s.selectAll("g[inkscape\\:label='Layer 1']").attr({"display": "none"});
              s.selectAll("g[inkscape\\:label='Layer 2']").attr({"display": "inline"});

              $("#textbox").html("<p>Обратная операция назвается <b>дискретным логарифмированием</b> и которая не имеет эффективного алгоритма решения.</p><p>Найти <i>x</i> можно путём последовательного перебора всех возможных значений: от 1 до 910. В данном случае понадобится перебрать 420 значений, пока не будет найдено подходящее.</p><p>Cуществуют более быстрые алгоритмы, чем последовательный перебор, но всё равно они требуют <i>гораздо</i> больших вычислений, нежели прямая функция, и практически неосуществимы при достаточно больших значениях модуля и показателя степени.</p><p>Эта односторонняя функция не имеет лазеек.</p>");
              break;
          }
        });
      } , 1500));

      $("#textbox").html("<p>В качестве односторонней функции в алгоритме Диффи-Хеллмана выбрана функция возведения в степень, выполняемая по модулю.</p><p>Это относительно простая операция, которую легко выполнить на калькуляторе.</p>");
      break;

//====================== слайд 5 ======================
    case 4:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      Snap.load("images/dh/4.svg", function (f) {
        s.append(f);
      });

      timeOuts.push(setTimeout(function(){ 
        clickToContinue();                 // показываем мигающую мышь
        $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
          switch(subslide) {
            case 0:
              // показываем a:
              s.selectAll("g[id='text1']").animate({"opacity": "1"}, 300);
              $("#textbox").html("<p>Алиса выбирает случайное большое число <i>a</i>, но которое меньше <i>p</i>. Это её закрытый ключ.</p>");
              subslide++;
              break;

            case 1:
              // завершаем предыдущие анимации:
              stopAllTimers();
              stopAllAnimations();
              s.selectAll("g[id='text1']").attr({"opacity": "1"});
              // запускаем мигающую мышь:
              clickToContinue();
              // показываем А:
              s.selectAll("g[id='text2']").animate({"opacity": "1"}, 300);
              $("#textbox").html("<p>Далее Алиса вычисляет свой открытый ключ <i>A</i> по приведённой формуле.</p>");
              subslide++;
              break;

            case 2:
              // завершаем предыдущие анимации:
              stopAllTimers();
              stopAllAnimations();
              s.selectAll("g[id='text2']").attr({"opacity": "1"});
              // запускаем мигающую мышь:
              clickToContinue();
              // показываем А без вычислений:
              s.selectAll("g[id='text2']").animate({"opacity": "0"}, 300);
              s.selectAll("g[id='text3']").animate({"opacity": "1"}, 300);
              // показываем сообщение Алисы:
              s.selectAll("g[id='A']").animate({"opacity": "1"}, 300);
              $("#textbox").html("<p>Алиса отправляет открытый ключ Бобу.</p>");
              subslide++;
              break;

            case 3:
              // завершаем предыдущие анимации:
              stopAllTimers();
              stopAllAnimations();
              s.selectAll("g[id='text2']").attr({"opacity": "0"});
              s.selectAll("g[id='text3']").attr({"opacity": "1"});
              s.selectAll("g[id='A']").attr({"opacity": "1"});
              // запускаем мигающую мышь:
              clickToContinue();
              // перемещаем сообщение Алисы:
              s.selectAll("g[id='A']").animate({"transform": "translate(600 0)"}, 500);
              $("#textbox").html("<p></p>");
              subslide++;
              break;

            case 4:
              // завершаем предыдущие анимации:
              stopAllTimers();
              stopAllAnimations();
              s.selectAll("g[id='A']").attr({"transform": "translate(600 0)"});
              // запускаем мигающую мышь:
              clickToContinue();
              // показываем b:
              s.selectAll("g[id='text4']").animate({"opacity": "1"}, 300);
              $("#textbox").html("<p>Боб также выбирает случайное большое число <i>b</i>, которое меньше <i>p</i>. Это его закрытый ключ.</p>");
              subslide++;
              break;

            case 5:
              // завершаем предыдущие анимации:
              stopAllTimers();
              stopAllAnimations();
              s.selectAll("g[id='text4']").attr({"opacity": "1"});
              // запускаем мигающую мышь:
              clickToContinue();
              // показываем B:
              s.selectAll("g[id='text5']").animate({"opacity": "1"}, 300);
              $("#textbox").html("<p>Боб вычисляет свой открытый ключ <i>B</i>.</p>");
              subslide++;
              break;

            case 6:
              // завершаем предыдущие анимации:
              stopAllTimers();
              stopAllAnimations();
              s.selectAll("g[id='text5']").attr({"opacity": "1"});
              // запускаем мигающую мышь:
              clickToContinue();
              // показываем B без вычислений:
              s.selectAll("g[id='text5']").animate({"opacity": "0"}, 300);
              s.selectAll("g[id='text6']").animate({"opacity": "1"}, 300);
              $("#textbox").html("<p></p>");
              subslide++;
              break;

            case 7:
              // завершаем предыдущие анимации:
              stopAllTimers();
              stopAllAnimations();
              s.selectAll("g[id='text5']").attr({"opacity": "0"});
              s.selectAll("g[id='text6']").attr({"opacity": "1"});
              // запускаем мигающую мышь:
              clickToContinue();
              // показываем s:
              s.selectAll("g[id='text7']").animate({"opacity": "1"}, 300);
              // скрываем сообщение Алисы:
              s.selectAll("g[id='A']").animate({"opacity": "0"}, 300);
              timeOuts.push(setTimeout(function(){
                // показываем сообщение Боба:
                s.selectAll("g[id='B']").animate({"opacity": "1"}, 300);
              } , 500));
              $("#textbox").html("<p>Далее, используя открытый ключ Алисы и свой закрытый ключ, Боб вычисляет общий секретный ключ <i>s</i>, который и будет использоваться Алисой и Бобой для шифрования сообщений симметричным алгоритмом.</p>");
              subslide++;
              break;

            case 8:
              // завершаем предыдущие анимации:
              stopAllTimers();
              stopAllAnimations();
              s.selectAll("g[id='text7']").attr({"opacity": "1"});
              s.selectAll("g[id='A']").attr({"opacity": "0"});
              s.selectAll("g[id='B']").attr({"opacity": "1"});
              // запускаем мигающую мышь:
              clickToContinue();
              // перемещаем сообщение Боба:
              s.selectAll("g[id='B']").animate({"transform": "translate(-600 0)"}, 500);
              // показываем s без вычислений:
              s.selectAll("g[id='text7']").animate({"opacity": "0"}, 300);
              s.selectAll("g[id='text8']").animate({"opacity": "1"}, 300);
              $("#textbox").html("<p>Боб отправляет Алисе свой открытый ключ.</p>");
              subslide++;
              break;

            case 9:
              // завершаем предыдущие анимации:
              stopAllTimers();
              stopAllAnimations();
              s.selectAll("g[id='B']").attr({"transform": "translate(-600 0)"});
              s.selectAll("g[id='text7']").attr({"opacity": "0"});
              s.selectAll("g[id='text8']").attr({"opacity": "1"});
              // запускаем мигающую мышь:
              clickToContinue();
              // показываем s:
              s.selectAll("g[id='text9']").animate({"opacity": "1"}, 300);
              // скрываем сообщение Алисы:
              s.selectAll("g[id='B']").animate({"opacity": "0"}, 300);
              $("#textbox").html("<p>Алиса вычисляет общий секретный ключ <i>s</i>. Как и предполагалось, он оказался таким же, как и у Боба.</p>");
              subslide++;
              break;

            case 10:
              // завершаем предыдущие анимации:
              stopAllTimers();
              stopAllAnimations();
              s.selectAll("g[id='text9']").attr({"opacity": "1"});
              s.selectAll("g[id='B']").attr({"opacity": "0"});
              // запускаем мигающую мышь:
              clickToContinue();
              // показываем s без вычислений:
              s.selectAll("g[id='text9']").animate({"opacity": "0"}, 300);
              s.selectAll("g[id='text10']").animate({"opacity": "1"}, 300);
              $("#textbox").html("<p></p>");
              subslide++;
              break;

            case 11:
              // завершаем предыдущие анимации:
              stopAllTimers();
              stopAllAnimations();
              s.selectAll("g[id='text9']").attr({"opacity": "0"});
              s.selectAll("g[id='text10']").attr({"opacity": "1"});
              // запускаем мигающую мышь:
              clickToContinue();
              // показываем объяснение равенства ключей s:
              s.selectAll("g[id='g0']").animate({"opacity": "1"}, 300);
              $("#textbox").html("<p>В модульной арифметике достаточно вычислять отстаток от деления один раз – после выполнения всех действий. Поэтому в основании степени можно не писать mod.</p>");
              subslide++;
              break;

            case 12:
              // завершаем предыдущие анимации:
              stopAllTimers();
              stopAllAnimations();
              s.selectAll("g[id='g0']").attr({"opacity": "1"});
              // убираем мигающую мышь: 
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});
              $("#drawbox").off();              // убираем событие click с drawbox
              // убираем объяснение равенства ключей s:
              s.selectAll("g[id='g0']").animate({"opacity": "0"}, 300);
              $("#textbox").html("<p>Злоумышленник, который может читать все сообщения между Алисой и Бобом, не сможет узнать их общий секретный ключ <i>s</i>, так как для этого ему нужно из открытого ключа получить закрытый, то есть выполнить операцию дискретного логарифмирования, которая при достаточно больших <i>p</i>, <i>a</i>, <i>b</i> невыполнима за разумное время даже на самых быстрых суперкомпьютерах.</p><p>В 2016 году надёжная длина ключей <i>a</i> и <i>b</i> в двоичном представлении составляет порядка 256 бит, а модуля группы <i>p</i> – 2048 бит. Число <i>g</i> не обязательно должно быть большим и обычно это числа 2 или 5.</p>");
              subslide++;
              break;
          }
        });
      } , 1000));

      $("#textbox").html("<p>Перед началом работы алгоритма, Алиса и Боб договариваются о двух общих для них параметрах: <i>p</i> и <i>g</i>. Обычно их выбирает одна сторона и пересылает затем другой. Они не являются секретными: ничего страшного, если эти параметры узнает кто-либо ещё.</p><p><i>p</i> – случайное большое простое число. Кроме того, (<i>p</i> - 1) / 2 тоже должно быть простым числом.</p><p><i>g</i> – первообразный корень по модулю <i>p</i>.</p>");
      break;

    case -1:                                // если нажали "назад" до первого слайда
    case 5:                                 // если нажали "вперёд" после последнего слайда
      s.clear();
      stopAllTimers();                      // останавливаем все запущенные таймауты и интервалы
      contents();                           // переходим на главную, к содержанию курса
      break;

  }
};
