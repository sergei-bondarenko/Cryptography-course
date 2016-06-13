var asymmetric = function () {
  initialize();                 // загружаем в body все div'ы, создаём холст, задаём его параметры, загружаем меню, объявляем переменные
  loadMenu(asymmetricSlide);    // загрузить меню с иконками "вперёд", "назад", "домой" и "повторить"
  n = 0;                        // номер слайда
  asymmetricSlide(n, s);        // запускаем начальный слайд
};

var asymmetricSlide = function (n, s) {     // загрузить слайд №n на холст s
  $("#drawbox").off();              // убираем событие click с drawbox
  switch(n) {
//====================== слайд 1 ======================
    case 0:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      var packetClone;                  // клон пакета для злоумышленника
      Snap.load("images/asymmetric/0.svg", function (f) {
        s.append(f);
        // прячем сообщение Алисы:
        s.selectAll("g[id='message']").attr({"transform": "scale(0, 0, 0, 0)"});
        // прячем пакет:
        s.selectAll("g[id='packet']").attr({"opacity": "0"});
        // прячем сообщение злоумышленника:
        s.selectAll("g[id='message2']").attr({"transform": "scale(0, 0, 0, 0)"});
      });

      // показываем сообщение Алисы:
      timeOuts.push(setTimeout(function(){ s.selectAll("g[id='message']").animate({"transform": "scale(1, 1, 0, 0)"}, 300); }, 1500));

      timeOuts.push(setTimeout(function(){ 
        clickToContinue();                 // показываем мигающую мышь
        $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
          switch(subslide) {
            case 0:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              $("#drawbox").off();              // убираем событие click с drawbox

              // прячем сообщение Алисы:
              s.selectAll("g[id='message']").animate({"transform": "scale(0, 0, 0, 0)"}, 300);
              // показываем пакет:
              s.selectAll("g[id='packet']").animate({"opacity": "1"}, 300);

              // перемещаем пакетик:
              timeOuts.push(setTimeout(function(){
                s.selectAll("g[id='packet']").animate({"transform": "translate(40,70)"}, 300);
              } , 1000));

              timeOuts.push(setTimeout(function(){
                s.selectAll("g[id='packet']").animate({"transform": "translate(140,130)"}, 300);
              } , 1300));

              timeOuts.push(setTimeout(function(){
                s.selectAll("g[id='packet']").animate({"transform": "translate(290,160)"}, 300);
              } , 1600));

              timeOuts.push(setTimeout(function(){
                s.selectAll("g[id='packet']").animate({"transform": "translate(450,130)"}, 300);
                // клонируем пакетик для злоумышленника:
                packetClone = s.selectAll("g[id='packet']").clone();
                packetClone.animate({"transform": "translate(328,210)"}, 300);
              } , 1900));

              timeOuts.push(setTimeout(function(){
                s.selectAll("g[id='packet']").animate({"transform": "translate(550,70)"}, 300);
              } , 2200));

              timeOuts.push(setTimeout(function(){
                s.selectAll("g[id='packet']").animate({"transform": "translate(660,10)"}, 300);
              } , 2500));

              timeOuts.push(setTimeout(function(){
                // прячем пакет злоумышленника:
                packetClone.animate({"opacity": "0"}, 300);
                // показываем его сообщение:
                s.selectAll("g[id='message2']").animate({"transform": "scale(1, 1, 0, 0)"}, 300);
              } , 3000));

              subslide++;
              break;
          }
        });
      } , 2000));

      $("#textbox").html("<p>Симметричное шифрование имеет свои недостатки. Один из главнейших – это проблема передачи ключа.</p><p>Алиса должна передать ключ Бобу, но так, чтобы он не попал в руки злоумышленников. Конечно, это можно сделать при личной встрече, но что если Боб находится на другом континенте?</p><p>Было бы удобно передать ключ через Интернет, но структура сети такова, что пакеты проходят на своём пути через десятки узлов, каждый из которых может полностью прочитать содержимое пакета и воспользоваться этим со злым умыслом. Прочие виды телекоммуникаций (телефон, факс, почта, телеграф, радио и т.д.) также могут быть прослушаны, взломаны и перехвачены.</p>");
      break;

//====================== слайд 2 ======================
    case 1:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      Snap.load("images/asymmetric/1.svg", function (f) {
        s.append(f);
        // прячем конверт:
        s.selectAll("g[id='packet1']").attr({"opacity": "0"});
        // прячем закрытый замок:
        s.selectAll("path[id='lock1']").attr({"opacity": "0"});
        // прячем сообщение Алисы:
        s.selectAll("g[id='message']").attr({"opacity": "0"});
        // прячем вопросики у злоумышленника:
        s.selectAll("text[id='text5']").attr({"opacity": "0"});
        s.selectAll("text[id='text6']").attr({"opacity": "0"});
        // скрываем пояснения:
        s.selectAll("g[id='explanation']").attr({"opacity": "0"});
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
              } , 500));

              // показываем сообщение Алисы:
              s.selectAll("g[id='message']").animate({"opacity": "1"}, 300);

              $("#textbox").html("<p>Алиса запрашивает у Боба его замок. Замок защёлкивающийся, то есть кто угодно может его закрыть, а открыть может только владелец ключа – Боб.</p>");

              subslide++;
              break;

            case 1:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 3200));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("g[id='message']").attr({"opacity": "1"});

              // прячем сообщение Алисы:
              s.selectAll("g[id='message']").animate({"opacity": "0"}, 300);
              // показываем конверт:
              s.selectAll("g[id='packet1']").animate({"opacity": "1"}, 300);

              timeOuts.push(setTimeout(function(){
                // перемещаем пакетик:
                s.selectAll("g[id='packet1']").animate({"transform": "translate(655,0)"}, 600);
              } , 1000));

              timeOuts.push(setTimeout(function(){
                // прячем конверт:
                s.selectAll("g[id='packet1']").animate({"opacity": "0"}, 300);
              } , 1600));

              timeOuts.push(setTimeout(function(){
                // прячем надпись "замок":
                s.selectAll("text[id='text3']").animate({"opacity": "0"}, 300);
                // перемещаем открытый замок:
                s.selectAll("g[id='lock0']").animate({"transform": "translate(580,5)"}, 200);
              } , 1900));

              timeOuts.push(setTimeout(function(){
                // перемещаем открытый замок:
                s.selectAll("g[id='lock0']").animate({"transform": "translate(240,5)"}, 300);
              } , 2100));

              timeOuts.push(setTimeout(function(){
                // показываем вопросик у злоумышленника:
                s.selectAll("text[id='text6']").animate({"opacity": "1"}, 200);
              } , 2500));

              timeOuts.push(setTimeout(function(){
                // перемещаем открытый замок:
                s.selectAll("g[id='lock0']").animate({"transform": "translate(-100,5)"}, 300);
              } , 2900));

              $("#textbox").html("<p>Боб отправляет замок Алисе.</p><p>Злоумышленник не может восстановить ключ, даже если изучит замок.</p>");

              subslide++;
              break;

            case 2:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 500));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("g[id='message']").attr({"opacity": "0"});
              s.selectAll("g[id='packet1']").attr({"opacity": "1"});
              s.selectAll("g[id='packet1']").attr({"transform": "translate(655,0)"});
              s.selectAll("g[id='packet1']").attr({"opacity": "0"});
              s.selectAll("text[id='text3']").attr({"opacity": "0"});
              s.selectAll("text[id='text6']").attr({"opacity": "1"});
              s.selectAll("g[id='lock0']").attr({"transform": "translate(580,5)"});
              s.selectAll("g[id='lock0']").attr({"transform": "translate(-100,5)"});

              // прячем надпись "секретное сообщение":
              s.selectAll("text[id='text1']").animate({"opacity": "0"}, 300);
              // кладём секретное сообщение в контейнер:
              s.selectAll("g[id='packet0']").animate({"transform": "translate(-150,19)"}, 200);             

              timeOuts.push(setTimeout(function(){
                // перемещаем открытый замок:
                s.selectAll("g[id='lock0']").animate({"transform": "translate(-170,62)"}, 200);
              } , 200));

              timeOuts.push(setTimeout(function(){
                // защёлкиваем замок:
                s.selectAll("g[id='lock0']").attr({"opacity": "0"});
                s.selectAll("path[id='lock1']").attr({"opacity": "1"});
              } , 400));

              $("#textbox").html("<p>Алиса кладёт письмо в прочный контейнер, закрывая его замком Боба.</p>");

              subslide++;
              break;

            case 3:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 900));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("text[id='text1']").attr({"opacity": "0"});
              s.selectAll("g[id='packet0']").attr({"transform": "translate(-150,19)"});             
              s.selectAll("g[id='lock0']").attr({"transform": "translate(-170,62)"});
              s.selectAll("g[id='lock0']").attr({"opacity": "0"});
              s.selectAll("path[id='lock1']").attr({"opacity": "1"});

              // перемещаем защищённое письмо:
              s.selectAll("g[id='protected']").animate({"transform": "translate(70,-55)"}, 200);
              // прячем надпись "контейнер":
              s.selectAll("text[id='text2']").animate({"opacity": "0"}, 300);

              timeOuts.push(setTimeout(function(){
                // перемещаем защищённое письмо:
                s.selectAll("g[id='protected']").animate({"transform": "translate(412,-55)"}, 300);
              } , 200));

              timeOuts.push(setTimeout(function(){
                // показываем вопросики у злоумышленника:
                s.selectAll("text[id='text5']").animate({"opacity": "1"}, 200);
                s.selectAll("text[id='text6']").attr({"opacity": "0"});
              } , 700));

              $("#textbox").html("<p>Злоумышленник не может вскрыть контейнер без ключа.</p>");

              subslide++;
              break;

            case 4:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 1300));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("g[id='protected']").attr({"transform": "translate(70,-55)"});
              s.selectAll("text[id='text1']").attr({"opacity": "0"});
              s.selectAll("text[id='text2']").attr({"opacity": "0"});
              s.selectAll("g[id='protected']").attr({"transform": "translate(412,-55)"});
              s.selectAll("text[id='text5']").attr({"opacity": "1"});
              s.selectAll("text[id='text6']").attr({"opacity": "0"});

              // перемещаем защищённое письмо:
              s.selectAll("g[id='protected']").animate({"transform": "translate(730,-55)"}, 300);

              timeOuts.push(setTimeout(function(){
                // перемещаем защищённое письмо:
                s.selectAll("g[id='protected']").animate({"transform": "translate(800,0)"}, 200);
              } , 300));

              timeOuts.push(setTimeout(function(){
                // увеличиваем и скрываем ключик Боба:
                s.selectAll("path[id='key']").animate({"transform": "scale(2, 2, 0, 0)"}, 300);
                s.selectAll("path[id='key']").animate({"opacity": "0"}, 300);
                // скрываем надпись "ключ":
                s.selectAll("text[id='text4']").animate({"opacity": "0"}, 300);
                // прячем контейнер и замок:
                s.selectAll("rect[id='container']").animate({"opacity": "0"}, 300);
                s.selectAll("path[id='lock1']").animate({"opacity": "0"}, 300);
              } , 1000));

              $("#textbox").html("<p>Боб открывает замок своим ключом и извлекает секретное сообщение.</p>");

              subslide++;
              break;

            case 5:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              $("#drawbox").off();              // убираем событие click с drawbox

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("g[id='protected']").attr({"transform": "translate(730,-55)"});
              s.selectAll("g[id='protected']").attr({"transform": "translate(800,0)"});
              s.selectAll("path[id='key']").attr({"transform": "scale(2, 2, 0, 0)"});
              s.selectAll("path[id='key']").attr({"opacity": "0"});
              s.selectAll("text[id='text4']").attr({"opacity": "0"});
              s.selectAll("rect[id='container']").attr({"opacity": "0"});
              s.selectAll("path[id='lock1']").attr({"opacity": "0"});

              // показываем пояснения:
              s.selectAll("g[id='explanation']").animate({"opacity": "1"}, 300);

              $("#textbox").html("<p>Перейдём от этой аналогии к <b>асимметричным шифрам</b>. Они так называются, потому что для зашифрования и расшифрования используются два различных ключа: для зашифрования Алиса использует открытый ключ Боба, для расшифрования Боб использует свой закрытый ключ.</p><p>Открытый и закрытый ключ представляют собой большие числа, они являются взаимосвязанными и генерируются парой на компьютере Боба. По открытому ключу восстановить закрытый невозможно. Поэтому Боб может отправлять свой открытый ключ кому угодно или даже опубликовать в открытом доступе, например, на своём сайте.</p><p>Любой, кто захочет написать Бобу секретное сообщение, использует его открытый ключ для зашифрования сообщения, расшифровать которое сможет только владелец закрытого ключа – Боб. Поэтому он должен хранить свой закрытый ключ в строгой тайне. Закрытый ключ никогда не передаётся по сети.</p>");

              subslide++;
              break;
          }
        });
      } , 2000));

      $("#textbox").html("<p>Неужели нельзя обеспечить конфиденциальную связь, если доступны только небезопасные каналы связи?</p><p>Оказывается, можно. Покажем, как это осуществить, на примере обычной, невиртуальной почты.</p><p>Представим, что Алисе необходимо отправить некую особо ценную информацию Бобу, но к несчатью, она живёт в стране, где почтовая система настолько аморальна, что почтальоны вскрывают и изучают (но не подменяют!) все отправления, до которых только могут добраться.</p>");
      break;

//====================== слайд 3 ======================
    case 2:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      Snap.load("images/asymmetric/2.svg", function (f) {
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
              // показываем лазейку:
              s.selectAll("g[id='g0']").animate({"opacity": "1"}, 300);
              $("#textbox").html("<p>Некоторые односторонние функции имеют <b>лазейку</b> (англ. trapdoor function), т.е. это определённая информация, которая существенно облегчает выполнение односторонней функции в обратном направлении.</p><p>Для данного примера такой лазейкой является инструкция по сборке.</p><p>Обладая этой информацией, задача из почти невозможной превращается в тривиальную – британец Грэм Парк принципиально не использовал инструкцию и собирал кубик Рубика в течение целых 26 лет! С другой стороны, даже новичок, ни разу не державший кубик в руках, может решить эту задачу за один вечер, если у него будет инструкция.</p>");
              break;
          }
        });
      } , 1500));

      $("#textbox").html("<p>Такой защёлкивающийся замок в криптографии реализуется с помощью <b>односторонних функций</b>.</p><p>Такую функцию легко выполнить в одном направлении, но сложно в обратном. Например, кубик Рубика легко перемешать, но сложно вернуть в исходное состояние.</p>");
      break;

//====================== слайд 4 ======================
    case 3:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      Snap.load("images/asymmetric/3.svg", function (f) {
        s.append(f);
        // прячем конверт:
        s.selectAll("g[id='packet1']").attr({"opacity": "0"});
        // прячем закрытый замок:
        s.selectAll("path[id='lock2']").attr({"opacity": "0"});
        // прячем сообщение Алисы:
        s.selectAll("g[id='message']").attr({"opacity": "0"});
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
              } , 500));

              // показываем сообщение Алисы:
              s.selectAll("g[id='message']").animate({"opacity": "1"}, 300);

              $("#textbox").html("<p>Алиса, как и в прошлый раз, запрашивает у Боба его открытый ключ.</p>");

              subslide++;
              break;

            case 1:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 1300));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("g[id='message']").attr({"opacity": "1"});

              // прячем сообщение Алисы:
              s.selectAll("g[id='message']").animate({"opacity": "0"}, 300);
              // показываем конверт:
              s.selectAll("g[id='packet1']").animate({"opacity": "1"}, 300);

              timeOuts.push(setTimeout(function(){
                // перемещаем пакетик:
                s.selectAll("g[id='packet1']").animate({"transform": "translate(290,145)"}, 300);
              } , 1000));

              $("#textbox").html("<p>Злоумышленник читает запрос Алисы и перенаправляет его Бобу.</p>");

              subslide++;
              break;

            case 2:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 1300));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("g[id='message']").attr({"opacity": "0"});
              s.selectAll("g[id='packet1']").attr({"opacity": "1"});
              s.selectAll("g[id='packet1']").attr({"transform": "translate(290,145)"});

              // перемещаем пакетик:
              s.selectAll("g[id='packet1']").animate({"transform": "translate(380,145)"}, 100);

              timeOuts.push(setTimeout(function(){
                // перемещаем пакетик:
                s.selectAll("g[id='packet1']").animate({"transform": "translate(700,10)"}, 300);
              } , 100));

              timeOuts.push(setTimeout(function(){
                // перемещаем красный замок:
                s.selectAll("g[id='lock1']").animate({"transform": "translate(200,155)"}, 300);
                // прячем текст "Открытый ключ":
                s.selectAll("text[id='text6']").animate({"opacity": "0"}, 100);
              } , 600));

              timeOuts.push(setTimeout(function(){
                // перемещаем красный замок:
                s.selectAll("g[id='lock1']").animate({"transform": "translate(-130,15)"}, 300);
              } , 700));

              $("#textbox").html("<p>Он отправляет Алисе свой открытый ключ. Сообщение доходит до Боба, который также отправляет свой открытый ключ.</p>");

              subslide++;
              break;

            case 3:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 600));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("g[id='packet1']").attr({"transform": "translate(380,145)"});
              s.selectAll("g[id='packet1']").attr({"transform": "translate(700,10)"});
              s.selectAll("g[id='lock1']").attr({"transform": "translate(200,155)"});
              s.selectAll("text[id='text6']").attr({"opacity": "0"});
              s.selectAll("g[id='lock1']").attr({"transform": "translate(-130,15)"});

              // прячем пакетик:
              s.selectAll("g[id='packet1']").animate({"opacity": "0"}, 200);
              // перемещаем зелёный замок:
              s.selectAll("g[id='lock0']").animate({"transform": "translate(610,10)"}, 150);
              // прячем текст "Открытый ключ":
              s.selectAll("text[id='text3']").animate({"opacity": "0"}, 100);

              timeOuts.push(setTimeout(function(){
                // перемещаем зелёный замок:
                s.selectAll("g[id='lock0']").animate({"transform": "translate(280,150)"}, 300);
              } , 150));

              timeOuts.push(setTimeout(function(){
                // перемещаем зелёный замок:
                s.selectAll("g[id='lock0']").animate({"transform": "translate(270,260)"}, 150);
              } , 450));

              $("#textbox").html("<p>Алиса шифрует своё секретное сообщение открытым ключом злоумышленника, думая, что это ключ Боба.</p>");

              subslide++;
              break;

            case 4:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 1400));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("g[id='packet1']").attr({"opacity": "0"});
              s.selectAll("text[id='text3']").attr({"opacity": "0"});
              s.selectAll("g[id='lock0']").attr({"transform": "translate(270,260)"});

              // перемещаем секретное сообщение:
              s.selectAll("g[id='packet0']").animate({"transform": "translate(-160,95)"}, 200);
              // прячем текст "секретное сообщение":
              s.selectAll("text[id='text1']").animate({"opacity": "0"}, 200);

              timeOuts.push(setTimeout(function(){
                // перемещаем красный замок:
                s.selectAll("g[id='lock1']").animate({"transform": "translate(-180,137)"}, 200);
              } , 500));

              timeOuts.push(setTimeout(function(){
                // защёлкиваем замок:
                s.selectAll("g[id='lock1']").attr({"opacity": "0"});
                s.selectAll("path[id='lock2']").attr({"opacity": "1"});
              } , 700));

              timeOuts.push(setTimeout(function(){
                // перемещаем контейнер:
                s.selectAll("g[id='protected']").animate({"transform": "translate(30,-130)"}, 200);
                // прячем текст "Контейнер":
                s.selectAll("text[id='text2']").animate({"opacity": "0"}, 200);
              } , 800));

              timeOuts.push(setTimeout(function(){
                // перемещаем контейнер:
                s.selectAll("g[id='protected']").animate({"transform": "translate(390,15)"}, 300);
              } , 1000));

              timeOuts.push(setTimeout(function(){
                // перемещаем контейнер:
                s.selectAll("g[id='protected']").animate({"transform": "translate(420,-10)"}, 100);
              } , 1300));

              $("#textbox").html("<p>Злоумышленник расшифровывает своим закрытым ключом шифротекст и получает содержание секретного сообщения.</p>");

              subslide++;
              break;

            case 5:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              timeOuts.push(setTimeout(function(){
                clickToContinue();                 // показываем мигающую мышь
              } , 200));

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("g[id='packet0']").attr({"transform": "translate(-160,95)"});
              s.selectAll("text[id='text1']").attr({"opacity": "0"});
              s.selectAll("g[id='lock1']").attr({"transform": "translate(-180,137)"});
              s.selectAll("g[id='lock1']").attr({"opacity": "0"});
              s.selectAll("path[id='lock2']").attr({"opacity": "1"});
              s.selectAll("text[id='text2']").attr({"opacity": "0"});
              s.selectAll("g[id='protected']").attr({"transform": "translate(420,-10)"});

              // увеличиваем и скрываем красный ключик:
              s.selectAll("path[id='key1']").animate({"transform": "scale(2, 2, 0, 0)"}, 300);
              s.selectAll("path[id='key1']").animate({"opacity": "0"}, 300);
              // скрываем надпись "Закрытый ключ":
              s.selectAll("text[id='text5']").animate({"opacity": "0"}, 300);

              // прячем замок и контейнер:
              s.selectAll("path[id='lock2']").animate({"opacity": "0"}, 300);
              s.selectAll("rect[id='container']").animate({"opacity": "0"}, 300);

              $("#textbox").html("<p>Шифрует это сообщение открытым ключом Боба и отправляет ему.</p>");

              subslide++;
              break;

            case 6:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              $("#drawbox").off();              // убираем событие click с drawbox

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              stopAllAnimations();
              s.selectAll("path[id='lock2']").attr({"opacity": "0"});
              s.selectAll("rect[id='container']").attr({"opacity": "0"});

              // красим зелёным защёлкнутый на контейнере замок:
              s.selectAll("path[id='lock2']").attr({"fill": "#00ff00"});
              // перемещаем зелёный замок:
              s.selectAll("g[id='lock0']").animate({"transform": "translate(239,127)"}, 200);
              // показываем контейнер:
              s.selectAll("rect[id='container']").animate({"opacity": "1"}, 200);

              timeOuts.push(setTimeout(function(){
                // защёлкиваем замок:
                s.selectAll("g[id='lock0']").attr({"opacity": "0"});
                s.selectAll("path[id='lock2']").attr({"opacity": "1"});
              } , 200));

              timeOuts.push(setTimeout(function(){
                // перемещаем контейнер:
                s.selectAll("g[id='protected']").animate({"transform": "translate(450,15)"}, 100);
              } , 500));

              timeOuts.push(setTimeout(function(){
                // перемещаем контейнер:
                s.selectAll("g[id='protected']").animate({"transform": "translate(800,-125)"}, 300);
              } , 600));

              timeOuts.push(setTimeout(function(){
                // увеличиваем и скрываем зелёный ключик:
                s.selectAll("path[id='key0']").animate({"transform": "scale(2, 2, 0, 0)"}, 300);
                s.selectAll("path[id='key0']").animate({"opacity": "0"}, 300);
                // скрываем надпись "Закрытый ключ":
                s.selectAll("text[id='text3']").animate({"opacity": "0"}, 300);
                // прячем замок и контейнер:
                s.selectAll("path[id='lock2']").animate({"opacity": "0"}, 300);
                s.selectAll("rect[id='container']").animate({"opacity": "0"}, 300);
              } , 900));

              $("#textbox").html("<p>Боб получает сообщение, которое зашифровано его открытым ключом. Для него оно выглядит точно так же, как если бы не подвергалось манипуляциям злоумышленника.</p><p>Таким образом, злоумышленник прочитал секретное сообщение, а Алиса и Боб даже не поняли этого.</p>");

              subslide++;
              break;
          }
        });
      } , 2000));

      $("#textbox").html("<p>Предыдущая схема отлично решает задачу передачи секретной информации, если злоумышленник может только пассивно просматривать передаваемые пакеты. Но что, если он может активно вмешиваться в канал связи: перехватывать и подменять пакеты? Такой случай в криптографии назвается атакой <b>\"человек посередине\"</b> (Man in the middle).</p><p>Покажем, как в этом случае злоумышленник может прочитать секретное сообщение Алисы, причем так, что ни Алиса, ни Боб могут даже об этом не знать.</p>");
      break;

//====================== слайд 5 ======================
    case 4:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/asymmetric/4.svg", function (f) {
        s.append(f);
      });

      $("#textbox").html("<p>Одновременное использование нескольких каналов связи для передачи открытого ключа снижает вероятность успешной атаки \"человек посередине\".</p><p>Алиса получает несколько копий ключа Боба через разные каналы и сверяет их между собой. Если они все одинаковы, то она может быть почти полностью уверена в том, что это ключ Боба, а не злоумышленника.</p><p>Некоторые другие способы решения проблемы передачи открытого ключа будут рассмотрены в третьем разделе.</p>");
      break;

//====================== слайд 6 ======================
    case 5:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      var subslide = 0;                 // номер подслайда в этом слайде, переключается по щелчку мышью
      Snap.load("images/asymmetric/5.svg", function (f) {
        s.append(f);
        // прячем всё, что потом будем показывать:
        s.selectAll("g[id='0']").attr({"opacity": "0"});
        s.selectAll("g[id='1']").attr({"opacity": "0"});
        s.selectAll("g[id='2']").attr({"opacity": "0"});
        s.selectAll("g[id='3']").attr({"opacity": "0"});
        s.selectAll("g[id='4']").attr({"opacity": "0"});
        s.selectAll("g[id='5']").attr({"opacity": "0"});
        s.selectAll("g[id='layer2']").attr({"opacity": "0"});
      });

      timeOuts.push(setTimeout(function(){ 
        clickToContinue();                 // показываем мигающую мышь
        $("#drawbox").click(function() {   // по щелчку на блоке с рисунком
          switch(subslide) {
            case 0:
              // показываем сессионный ключ:
              s.selectAll("g[id='0']").animate({"opacity": "1"}, 300);
              $("#textbox").html("<p>Сперва с помощью генератора случайных чисел выбирается сессионный симметричный ключ.</p>");
              subslide++;
              break;

            case 1:
              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              s.selectAll("g[id='0']").attr({"opacity": "1"});
              // показываем симметричное шифрование:
              s.selectAll("g[id='1']").animate({"opacity": "1"}, 300);
              $("#textbox").html("<p>С его помощью симметричный алгоритм зашифровывает открытый текст.</p>");
              subslide++;
              break;

            case 2:
              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              s.selectAll("g[id='1']").attr({"opacity": "1"});
              // показываем асимметричное шифрование:
              s.selectAll("g[id='2']").animate({"opacity": "1"}, 300);
              $("#textbox").html("<p>Симметричный ключ зашифровывается открытым ключом Боба.</p>");
              subslide++;
              break;

            case 3:
              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              s.selectAll("g[id='2']").attr({"opacity": "1"});
              // показываем то, что передаётся Бобу:
              s.selectAll("g[id='3']").animate({"opacity": "1"}, 300);
              $("#textbox").html("<p>Зашифрованный симметричный ключ и шифротекст передаются Бобу.</p>");
              subslide++;
              break;

            case 4:
              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              s.selectAll("g[id='3']").attr({"opacity": "1"});
              // прячем первый слой:
              s.selectAll("g[id='layer1']").attr({"opacity": "0"});
              // показываем второй:
              s.selectAll("g[id='layer2']").animate({"opacity": "1"}, 300);
              $("#textbox").html("<p>Боб получает зашифрованный симметричный ключ и шифротекст.</p>");
              subslide++;
              break;

            case 5:
              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              s.selectAll("g[id='layer2']").attr({"opacity": "1"});
              // показываем асимметричное шифрование:
              s.selectAll("g[id='4']").animate({"opacity": "1"}, 300);
              $("#textbox").html("<p>Расшифровывает симметричный ключ.</p>");
              subslide++;
              break;

            case 6:
              // останавливаем все таймеры и убираем мигающую мышь до окончания субслайда: 
              stopAllTimers();
              s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "none"});  // прячем мышь

              $("#drawbox").off();              // убираем событие click с drawbox

              // завершаем все анимации предыдущего субслайда (если клик был преждевременным):
              s.selectAll("g[id='4']").attr({"opacity": "1"});
              // показываем симметричное шифрование:
              s.selectAll("g[id='5']").animate({"opacity": "1"}, 300);
              $("#textbox").html("<p>Расшифровывает сообщение.</p><p>Выигрыш в скорости получается за счёт того, что медленный асимметричный алгоритм зашифровывает только короткий ключ (длиной всего лишь порядка сотни бит), а не всё сообщение, которое может составлять гигабайты информации.</p><p>Все описанные здесь операции часто выполняются незаметно для пользователя, ему даже не обязательно знать о том, какой сессионный ключ был выбран.</p>");
              break;
          }
        });
      } , 1500));

      $("#textbox").html("<p>Асимметричное шифрование работает на несколько порядков медленнее симметричного. Поэтому чаще всего на практике применяется гибридная схема шифрования, объединяющая преимущества обоих методов.</p><p>Симметричный алгоритм используется для зашифрования данных, а асимметричный для зашифрования самого симметричного ключа.</p><p>Рассмотрим принцип работы гибридной схемы.</p><p>На входе схемы имеем открытый ключ Боба и открытый текст, который нужно зашифровать.</p>");
      break;

    case -1:                                // если нажали "назад" до первого слайда
    case 6:                                 // если нажали "вперёд" после последнего слайда
      s.clear();
      stopAllTimers();                      // останавливаем все запущенные таймауты и интервалы
      contents();                           // переходим на главную, к содержанию курса
      break;

  }
};
