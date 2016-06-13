var rsa_sig = function () {
  initialize();                 // загружаем в body все div'ы, создаём холст, задаём его параметры, загружаем меню, объявляем переменные
  loadMenu(rsaSigSlide);        // загрузить меню с иконками "вперёд", "назад", "домой" и "повторить"
  n = 0;                        // номер слайда
  rsaSigSlide(n, s);            // запускаем начальный слайд
};

var rsaSigSlide = function (n, s) {     // загрузить слайд №n на холст s
  $("#drawbox").off();              // убираем событие click с drawbox
  switch(n) {
//====================== слайд 1 ======================
    case 0:
      s.clear();
      stopAllTimers();                // останавливаем все запущенные таймауты и интервалы
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/rsa_sig/0.svg", function (f) {
        s.append(f);
      });

      clickToContinue();                 // показываем мигающую мышь
      $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
        switch(subslide) {
          case 0:
            // показываем открытый и закрытый ключи:
            s.selectAll("g[id='g0']").animate({"opacity": "0"}, 300);
            s.selectAll("text[id='text0']").animate({"opacity": "1"}, 300);
            s.selectAll("text[id='text1']").animate({"opacity": "1"}, 300);
            $("#textbox").html("<p>Итак, Алиса создала открытый и закрытый ключ.</p>");
            subslide++;
            break;

          case 1:
            // завершаем предыдущие анимации:
            stopAllTimers();
            stopAllAnimations();
            s.selectAll("g[id='g0']").attr({"opacity": "0"});
            s.selectAll("text[id='text0']").attr({"opacity": "1"});
            s.selectAll("text[id='text1']").attr({"opacity": "1"});
            // запускаем мигающую мышь:
            clickToContinue();

            // перемещаем открытый ключ к Бобу и убираем его:
            s.selectAll("g[id='g1']").animate({"transform": "translate(200,0)"}, 300);
            s.selectAll("g[id='g1']").animate({"opacity": "0"}, 400);

            $("#textbox").html("<p>Открытый ключ каким-либо образом должен попасть к Бобу, чтобы он мог с его помощью проверить электронную подпись. Закрытый ключ Алиса будет использовать для создания подписи.</p>");
            subslide++;
            break;

          case 2:
            // завершаем предыдущие анимации:
            stopAllTimers();
            stopAllAnimations();
            s.selectAll("g[id='g1']").attr({"transform": "translate(200,0)"}, 300);
            s.selectAll("g[id='g1']").attr({"opacity": "0"}, 400);
            // запускаем мигающую мышь:
            clickToContinue();

            // перемещаем закрытый ключ и Алису вверх:
            s.selectAll("g[id='g4']").animate({"transform": "translate(0,-220)"}, 400);
            s.selectAll("g[id='g3']").animate({"transform": "translate(0,-140)"}, 400);

            // убираем надпись "к Бобу":
            s.selectAll("g[id='g2']").animate({"opacity": "0"}, 200);

            timeOuts.push(setTimeout(function(){
              // показываем следующий слой:
              s.selectAll("g[inkscape\\:label='Layer 1']").attr({"display": "none"});
              s.selectAll("g[inkscape\\:label='Layer 2']").attr({"display": "inline"});
            } , 400));

            $("#textbox").html("<p>От сообщения вычисляется хэш-функция.</p><p>В качестве иллюстрации используется простейшая хэш-функция <b>s_hash</b>, описанная во введении. Она не является криптографической и в реальных приложениях её использовать небезопасно.</p>");
            subslide++;
            break;

          case 3:
            // завершаем предыдущие анимации:
            stopAllTimers();
            stopAllAnimations();
            s.selectAll("g[inkscape\\:label='Layer 1']").attr({"display": "none"});
            s.selectAll("g[inkscape\\:label='Layer 2']").attr({"display": "inline"});
            // запускаем мигающую мышь:
            clickToContinue();
            
            // показываем расчёт подписи:
            s.selectAll("g[id='g5']").animate({"opacity": "1"}, 300);

            $("#textbox").html("<p>Используя полученный хэш <i>h</i>, и числа <i>d</i> (закрытая экспонента) и <i>n</i> (модуль), составляющие закрытый ключ, вычисляется электронная подпись <i>s</i>.</p>");
            subslide++;
            break;

          case 4:
            // останавливаем все таймеры и убираем мигающую мышь
            stopAllTimers();
            s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь
            $("#drawbox").off();              // убираем событие click с drawbox

            // завершаем предыдущие анимации:
            stopAllAnimations();
            s.selectAll("g[id='g5']").attr({"opacity": "1"});
            
            // прячем расчёт подписи и хэша:
            s.selectAll("g[id='g5']").animate({"opacity": "0"}, 200);
            s.selectAll("g[id='g8']").animate({"opacity": "0"}, 200);
            s.selectAll("g[id='g7']").animate({"opacity": "1"}, 200);

            timeOuts.push(setTimeout(function(){
              // сдвигаем подпись вверх:
              s.selectAll("g[id='g7']").animate({"transform": "translate(0,-190)"}, 400);
            } , 400));

            timeOuts.push(setTimeout(function(){
              // показываем стрелку "к Бобу":
              s.selectAll("g[id='g6']").animate({"opacity": "1"}, 300);
            } , 1000));

            $("#textbox").html("<p>Сообщение и электронная подпись отправляются Бобу.</p>");
            break;
        }
      });

      $("#textbox").html("<p>Алгоритм RSA также используется для электронной подписи.</p><p>Первоначально Алиса должна сгенерировать пару ключей: открытый и закрытый. Алгоритм их создания точно такой же, как и при шифровании, поэтому повторять его не будем.</p>");
      break;

//====================== слайд 2 ======================
    case 1:
      s.clear();
      stopAllTimers();                // останавливаем все запущенные таймауты и интервалы
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/rsa_sig/1.svg", function (f) {
        s.append(f);
      });

      clickToContinue();                 // показываем мигающую мышь
      $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
        switch(subslide) {
          case 0:
            // сдвигаем подпись вниз:
            s.selectAll("g[id='g0']").animate({"transform": "translate(0,0)"}, 400);

            timeOuts.push(setTimeout(function(){
              // показываем вычисленный хэш:
              s.selectAll("g[id='g1']").animate({"opacity": "1"}, 300);
            } , 400));

            $("#textbox").html("<p>Для этого он вычисляет хэш от сообщения.</p>");
            subslide++;
            break;

          case 1:
            // останавливаем все таймеры и убираем мигающую мышь
            stopAllTimers();
            s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь
            $("#drawbox").off();              // убираем событие click с drawbox

            // завершаем предыдущие анимации:
            stopAllAnimations();
            s.selectAll("g[id='g0']").attr({"transform": "translate(0,0)"});
            s.selectAll("g[id='g1']").attr({"opacity": "1"});

            // показываем рассчитанный хэш:
            s.selectAll("g[id='g2']").animate({"opacity": "1"}, 300);

            timeOuts.push(setTimeout(function(){
              // показываем то, что хэши равны:
              s.selectAll("g[id='g3']").animate({"opacity": "1"}, 300);
            } , 400));

            $("#textbox").html("<p>И расшифровывает хэш из электронной подписи с помощью открытого ключа Алисы по приведённой формуле.</p><p>Если оба полученных хэша совпадают, то подпись достоверна.</p>");
            subslide++;
            break;
        }
      });

      $("#textbox").html("<p>У Боба есть открытый ключ Алисы, также он получил её сообщение с электронной подписью. Теперь ему нужно удостовериться, что подпись создана Алисой.</p>");
      break;

    case -1:                                // если нажали "назад" до первого слайда
    case 2:                                 // если нажали "вперёд" после последнего слайда
      s.clear();
      stopAllTimers();                      // останавливаем все запущенные таймауты и интервалы
      contents();                           // переходим на главную, к содержанию курса
      break;

  }
};
