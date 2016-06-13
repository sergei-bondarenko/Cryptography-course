var dsa = function () {
  initialize();                 // загружаем в body все div'ы, создаём холст, задаём его параметры, загружаем меню, объявляем переменные
  loadMenu(dsaSlide);           // загрузить меню с иконками "вперёд", "назад", "домой" и "повторить"
  n = 0;                        // номер слайда
  dsaSlide(n, s);               // запускаем начальный слайд
};

var dsaSlide = function (n, s) {    // загрузить слайд №n на холст s
  $("#drawbox").off();              // убираем событие click с drawbox
  switch(n) {
//====================== слайд 1 ======================
    case 0:
      s.clear();
      stopAllTimers();                // останавливаем все запущенные таймауты и интервалы
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/dsa/0.svg", function (f) {
        s.append(f);
      });

      $("#textbox").html("<p></p>");
      break;

//====================== слайд 2 ======================
    case 1:
      s.clear();
      stopAllTimers();                // останавливаем все запущенные таймауты и интервалы
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/dsa/1.svg", function (f) {
        s.append(f);
      });

      clickToContinue();                 // показываем мигающую мышь
      $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
        switch(subslide) {
          case 0:
            // показываем q:
            s.selectAll("g[id='g0']").attr({"opacity": "1"});
            $("#textbox").html("<p>Сперва выбирается случайное простое число <i>q</i>, длина которого в двоичном представлении равна размерности значений хэш-функции.</p><p>В качестве примера будем использовать хэш-функцию <b>s_hash</b>, рассмотренную во введении. Она производит хэш длиной 8 бит. Таким образом, длина простого числа <i>q</i> должна составлять 8 бит.</p><p>В самом деле, <i>q</i>&nbsp;=&nbsp;211<sub>10</sub>&nbsp;=&nbsp;11010011<sub>2</sub> – восемь бит.</p>");
            subslide++;
            break;

          case 1:
            // показываем р:
            s.selectAll("g[id='g1']").attr({"opacity": "1"});
            $("#textbox").html("<p>Далее производится выбор такого простого числа <i>р</i>, что (<i>р</i>&nbsp;–&nbsp;1) делится нацело на <i>q</i>.</p><p>Число <i>р</i>&nbsp;=&nbsp;2111 является простым и (<i>р</i>&nbsp;–&nbsp;1)&nbsp;=&nbsp;2111&nbsp;–&nbsp;1&nbsp;=&nbsp;2110 делится на <i>q</i>&nbsp;=&nbsp;211.</p>");
            subslide++;
            break;

          case 2:
            // показываем расчёт g:
            s.selectAll("g[id='g2']").attr({"opacity": "1"});
            $("#textbox").html("<p>Далее вычисляется число <i>g</i> по приведённой формуле. В качестве <i>h</i> берётся любое число, но такое, чтобы <i>g</i> было не равно 1.</p>");
            subslide++;
            break;

          case 3:
            // показываем расчёт g при h = 2:
            s.selectAll("g[id='g3']").attr({"opacity": "1"});
            $("#textbox").html("<p>В качестве такого числа, например, подходит <i>h</i>&nbsp;=&nbsp;2. Получаем значение <i>g</i>&nbsp;=&nbsp;1024.</p>");
            subslide++;
            break;

          case 4:
            // прячем расчёты g:
            s.selectAll("g[id='g2']").attr({"opacity": "0"});
            s.selectAll("g[id='g3']").attr({"opacity": "0"});
            // показываем g:
            s.selectAll("g[id='g4']").animate({"opacity": "1"}, 300);

            timeOuts.push(setTimeout(function(){
              // сдвигаем g вверх:
              s.selectAll("g[id='g4']").animate({"transform": "translate(0,-130)"}, 400);
            } , 400));

            $("#textbox").html("<p></p>");
            subslide++;
            break;

          case 5:
            // завершаем предыдущие анимации:
            stopAllTimers();
            stopAllAnimations();
            s.selectAll("g[id='g4']").attr({"opacity": "1"});
            s.selectAll("g[id='g4']").attr({"transform": "translate(0,-130)"});
            // запускаем мигающую мышь:
            clickToContinue();

            // показываем закрытый ключ:
            s.selectAll("g[id='g5']").attr({"opacity": "1"});
            $("#textbox").html("<p>Закрытый ключ представляет собой случайное число <i>x</i> в диапазоне 0&nbsp;<&nbsp;<i>x</i>&nbsp;<&nbsp;<i>q</i>.</p>");
            subslide++;
            break;

          case 6:
            // показываем расчёт открытого ключа:
            s.selectAll("g[id='g6']").attr({"opacity": "1"});
            $("#textbox").html("<p>Открытый ключ рассчитывается по приведённой формуле.</p><p>Для того, чтобы по открытому ключу <i>y</i> получить закрытый ключ <i>x</i>, необходимо решить задачу дискретного логарифмирования, что при больших значениях <i>p</i> и <i>q</i> неосуществимо.</p>");
            subslide++;
            break;

          case 7:
            // останавливаем все таймеры и убираем мигающую мышь
            stopAllTimers();
            s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь
            $("#drawbox").off();              // убираем событие click с drawbox

            // прячем расчёт открытого ключа:
            s.selectAll("g[id='g6']").attr({"opacity": "0"});
            // показываем открытый ключ:
            s.selectAll("g[id='g7']").animate({"opacity": "1"}, 300);
            $("#textbox").html("<p>В 2016 году безопасной считается длина числа <i>p</i> в 3072 бит и числа <i>q</i>&nbsp;– 256 бит.</p><p>Таким образом, Алиса передаёт Бобу открытый ключ <i>y</i> и параметры <i>q</i>, <i>p</i> и <i>g</i>, а закрытый ключ <i>х</i> хранит в секрете.</p>");
            break;
        }
      });

      $("#textbox").html("<p>Алиса должна сгенерировать открытый и закрытый ключ.</p><p>Для начала она совместно с Бобом должна выбрать, какую хэш-функцию они будут использовать и три открытых параметра: <i>q</i>, <i>p</i> и <i>g</i>. Эти параметры не являются секретными и могут быть общими для многих пользователей.</p>");
      break;

//====================== слайд 3 ======================
    case 2:
      s.clear();
      stopAllTimers();                // останавливаем все запущенные таймауты и интервалы
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/dsa/2.svg", function (f) {
        s.append(f);
      });

      clickToContinue();                 // показываем мигающую мышь
      $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
        switch(subslide) {
          case 0:
            // показываем сообщение и хэш-функцию:
            s.selectAll("g[id='g0']").attr({"opacity": "1"});
            $("#textbox").html("<p>Алиса вычисляет хэш <i>H</i>(<i>m</i>) от сообщения <i>m</i>.</p>");
            subslide++;
            break;

          case 1:
            // прячем сообщение и хэш-функцию:
            s.selectAll("g[id='g0']").attr({"opacity": "0"});
            // показываем хэш:
            s.selectAll("g[id='g1']").animate({"opacity": "1"}, 300);

            timeOuts.push(setTimeout(function(){
              // сдвигаем хэш вверх:
              s.selectAll("g[id='g1']").animate({"transform": "translate(0,-210)"}, 400);
            } , 400));

            $("#textbox").html("<p></p>");
            subslide++;
            break;

          case 2:
            // показываем k:
            s.selectAll("g[id='g2']").attr({"opacity": "1"});
            $("#textbox").html("<p>Выбирается случайное число <i>k</i> из диапазона 0&nbsp;<&nbsp;<i>k</i>&nbsp;<&nbsp;<i>q</i>. Для каждого следующего подписываемого сообщения <i>k</i> также выбирается случайным образом.</p>");
            subslide++;
            break;

          case 3:
            // показываем k^-1:
            s.selectAll("g[id='g3']").attr({"opacity": "1"});
            $("#textbox").html("<p>С помощью расширенного алгоритма Евклида находится число <i>k</i><sup>&nbsp;-1</sup>, обратное числу <i>k</i> по модулю <i>q</i>.</p><p>Для <i>k</i>&nbsp;=&nbsp;166 это будет число 75. То есть произведение <i>k</i> и <i>k</i><sup>&nbsp;-1</sup> по модулю <i>q</i> будет равно единице.</p><p>В самом деле, (166&nbsp;⋅&nbsp;75)&nbsp;mod&nbsp;211&nbsp;=&nbsp;1.</p>");
            subslide++;
            break;

          case 4:
            // показываем расчёт r:
            s.selectAll("g[id='g4']").attr({"opacity": "1"});
            $("#textbox").html("<p>Рассчитывается число <i>r</i>. Если <i>r</i> получается равным нулю, то вычисления нужно провести заново, выбрав другое <i>k</i>.</p>");
            subslide++;
            break;

          case 5:
            // прячем расчёт r:
            s.selectAll("g[id='g4']").attr({"opacity": "0"});
            // показываем конечный результат:
            s.selectAll("g[id='g5']").animate({"opacity": "1"}, 300);
            $("#textbox").html("<p></p>");
            subslide++;
            break;

          case 6:
            // показываем расчёт s:
            s.selectAll("g[id='g6']").attr({"opacity": "1"});
            $("#textbox").html("<p>Рассчитывается число <i>s</i>. Так же, если <i>s</i> получается равным нулю, то все вычисления проводят с начала, выбрав другое значение <i>k</i>.</p>");
            subslide++;
            break;

          case 7:
            // прячем расчёт s:
            s.selectAll("g[id='g6']").attr({"opacity": "0"});
            // показываем конечный результат:
            s.selectAll("g[id='g7']").animate({"opacity": "1"}, 300);
            $("#textbox").html("<p></p>");
            subslide++;
            break;

          case 8:
            // останавливаем все таймеры и убираем мигающую мышь
            stopAllTimers();
            s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь
            $("#drawbox").off();              // убираем событие click с drawbox

            // прячем хэш, k, k^-1, параметры и закрытый ключ:
            s.selectAll("g[id='g1']").attr({"opacity": "0"});
            s.selectAll("g[id='g2']").attr({"opacity": "0"});
            s.selectAll("g[id='g3']").attr({"opacity": "0"});
            s.selectAll("g[id='g9']").attr({"opacity": "0"});
            // показываем сообщения и надпись "к Бобу":
            s.selectAll("g[id='g8']").animate({"opacity": "1"}, 300);
            $("#textbox").html("<p>Полученные числа <i>r</i> и <i>s</i> и являются электронной подписью сообщения <i>m</i>. Каждое из чисел <i>r</i> и <i>s</i> меньше q. Поэтому максимальная длина подписи в битах равна удвоенному размеру хэша.</p>");
            break;
        }
      });

      $("#textbox").html("<p>Для создания подписи Алисе потребуется её закрытый ключ <i>x</i> и открытые параметры <i>q</i>, <i>p</i> и <i>g</i>.</p>");
      break;

//====================== слайд 4 ======================
    case 3:
      s.clear();
      stopAllTimers();                // останавливаем все запущенные таймауты и интервалы
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/dsa/3.svg", function (f) {
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
            } , 900));

            // прячем надпись "электронная подпись":
            s.selectAll("g[id='g3']").animate({"opacity": "0"}, 200);

            timeOuts.push(setTimeout(function(){
              // сдвигаем подпись влево: 
              s.selectAll("g[id='g4']").animate({"transform": "translate(-300,0)"}, 400);
            } , 200));

            timeOuts.push(setTimeout(function(){
              // показываем получение хэша:
              s.selectAll("g[id='g0']").animate({"opacity": "1"}, 300);
            } , 600));

            $("#textbox").html("<p>Первым делом вычисляется хэш <i>H</i>(<i>m</i>) от сообщения <i>m</i>.</p>");
            subslide++;
            break;

          case 1:
            // завершаем предыдущие анимации:
            stopAllTimers();
            stopAllAnimations();
            s.selectAll("g[id='g3']").attr({"opacity": "0"});
            s.selectAll("g[id='g4']").attr({"transform": "translate(-300,0)"});
            s.selectAll("g[id='g0']").attr({"opacity": "1"});
            // запускаем мигающую мышь:
            clickToContinue();

            // прячем сообщение и хэш-функцию:
            s.selectAll("g[id='g0']").animate({"opacity": "0"}, 300);
            s.selectAll("g[id='g2']").animate({"opacity": "0"}, 300);
            // показываем хэш:
            s.selectAll("g[id='g1']").animate({"opacity": "1"}, 300);

            timeOuts.push(setTimeout(function(){
              // перемещаем хэш вверх:
              s.selectAll("g[id='g1']").animate({"transform": "translate(0,-220)"}, 400);
            } , 300));

            $("#textbox").html("<p></p>");
            subslide++;
            break;

          case 2:
            // показываем w:
            s.selectAll("g[id='g5']").attr({"opacity": "1"});
            $("#textbox").html("<p>С помощью расширенного алгоритма Евклида находится число <i>w</i>, обратное числу <i>s</i> по модулю <i>q</i>. То есть такое <i>w</i>, что (<i>s</i>&nbsp;⋅&nbsp;<i>w</i>)&nbsp;mod&nbsp;<i>q</i>&nbsp;=&nbsp;1.</p><p>Действительно, (17&nbsp;⋅&nbsp;149)&nbsp;mod&nbsp;211&nbsp;=&nbsp;1.</p>");
            subslide++;
            break;

          case 3:
            // показываем расчёт u1:
            s.selectAll("g[id='g6']").attr({"opacity": "1"}); 
            $("#textbox").html("<p>Вычисляется вспомогательная переменная <i>u</i><sub>1</sub> по приведённой формуле.</p>");
            subslide++;
            break;

          case 4:
            // прячем расчёт u1:
            s.selectAll("g[id='g6']").attr({"opacity": "0"});
            // показываем конечный результат:
            s.selectAll("g[id='g7']").animate({"opacity": "1"}, 300); 
            $("#textbox").html("<p></p>");
            subslide++;
            break;

          case 5:
            // показываем расчёт u2:
            s.selectAll("g[id='g8']").attr({"opacity": "1"}); 
            $("#textbox").html("<p>Вычисляется вспомогательная переменная <i>u</i><sub>2</sub> по приведённой формуле.</p>");
            subslide++;
            break;

          case 6:
            // прячем расчёт u2:
            s.selectAll("g[id='g8']").attr({"opacity": "0"});
            // показываем конечный результат:
            s.selectAll("g[id='g9']").animate({"opacity": "1"}, 300); 
            $("#textbox").html("<p></p>");
            subslide++;
            break;

          case 7:
            // показываем расчёт v:
            s.selectAll("g[id='g10']").attr({"opacity": "1"}); 
            $("#textbox").html("<p>Вычисляется переменная <i>v</i>.</p>");
            subslide++;
            break;

          case 8:
            // прячем расчёт v:
            s.selectAll("g[id='g10']").attr({"opacity": "0"});
            // показываем конечный результат:
            s.selectAll("g[id='g11']").animate({"opacity": "1"}, 300); 
            $("#textbox").html("<p></p>");
            subslide++;
            break;

          case 9:
            // останавливаем все таймеры и убираем мигающую мышь
            stopAllTimers();
            s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь
            $("#drawbox").off();              // убираем событие click с drawbox

            // показываем, что v = r:
            s.selectAll("g[id='g12']").attr({"opacity": "1"});

            $("#textbox").html("<p>Если <i>v</i> и <i>r</i> оказались равны, значит, подпись достоверна.</p>");
            break;
        }
      });

      $("#textbox").html("<p>Боб получил сообщение, электронную подпись, параметры и открытый ключ Алисы. Теперь ему нужно проверить, действительно ли эта подпись создана Алисой для данного сообщения.</p>");
      break;

    case -1:                                // если нажали "назад" до первого слайда
    case 4:                                 // если нажали "вперёд" после последнего слайда
      s.clear();
      stopAllTimers();                      // останавливаем все запущенные таймауты и интервалы
      contents();                           // переходим на главную, к содержанию курса
      break;

  }
};
