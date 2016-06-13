// Введение в симметричное шифрование

var symmetric = function () {
  initialize();              // загружаем в body все div'ы, создаём холст, задаём его параметры, загружаем меню, объявляем переменные
  loadMenu(symmetricSlide);  // загрузить меню с иконками "вперёд", "назад", "домой" и "повторить"
  n = 0;                     // номер слайда
  symmetricSlide(n, s);      // запускаем начальный слайд
};

var symmetricSlide = function (n, s) {     // загрузить слайд №n на холст s
  switch(n) {
//====================== слайд 1 ======================
    case 0:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/symmetric/0.svg", function (f) {
        s.append(f);
        s.selectAll("image").attr({"transform": "scale(0, 0, 0, 0)"});   // уменьшаем до нуля все значки программ
      });

      timeOuts.push(setTimeout(function(){
        s.selectAll("image")[0].animate({"transform": "scale(1, 1, 0, 0)"}, 400);  // включаем анимацию - увеличение значка до 100%-ного размера относительно его центра
        s.selectAll("image")[0].append(Snap.parse('<title>Skype использует 256-битный AES для шифрования звонков, файлов и сообщений, RC4 для обфускации пакетов.</title>'));  // добавляем высплывающее окошко
      }, 400));
      timeOuts.push(setTimeout(function(){
        s.selectAll("image")[5].animate({"transform": "scale(1, 1, 0, 0)"}, 400);
        s.selectAll("image")[5].append(Snap.parse('<title>Мобильные сети используют потоковые симметричные алгоритмы А5/1, А5/2, А5/3(KASUMI), A5/4(SNOW 3G) для шифрования речи и GEA/1, GEA/2, GEA/3, GEA/4 для шифрования данных.</title>'));  // добавляем высплывающее окошко
      }, 600));
      timeOuts.push(setTimeout(function(){
        s.selectAll("image")[3].animate({"transform": "scale(1, 1, 0, 0)"}, 400);
        s.selectAll("image")[3].append(Snap.parse('<title>Bitcoin-клиент шифрует файл wallet.dat ("кошелёк") с помощью 256-битного AES.</title>'));  // добавляем высплывающее окошко
      }, 800));
      timeOuts.push(setTimeout(function(){
        s.selectAll("image")[1].animate({"transform": "scale(1, 1, 0, 0)"}, 400);
        s.selectAll("image")[1].append(Snap.parse('<title>В протоколе TLS/SSL могут применяться симметричные алгоритмы шифрования ChaCha20-Poly1305, AES, Camellia и 3DES.</title>'));  // добавляем высплывающее окошко
      }, 1000));
      timeOuts.push(setTimeout(function(){
        s.selectAll("image")[7].animate({"transform": "scale(1, 1, 0, 0)"}, 400);
        s.selectAll("image")[7].append(Snap.parse('<title>Банковские магнитные карточки используют алгоритм шифрования 3DES.</title>'));  // добавляем высплывающее окошко
      }, 1200));
      timeOuts.push(setTimeout(function(){
        s.selectAll("image")[11].animate({"transform": "scale(1, 1, 0, 0)"}, 400);
        s.selectAll("image")[11].append(Snap.parse('<title>SSH использует 3DES, AES, RC4, Blowfish, CAST5 и ChaCha20-Poly1305.</title>'));  // добавляем высплывающее окошко
      }, 1400));
      timeOuts.push(setTimeout(function(){
        s.selectAll("image")[9].animate({"transform": "scale(1, 1, 0, 0)"}, 400);
        s.selectAll("image")[9].append(Snap.parse('<title>В сети i2p применяется 256-битный алгоритм AES для шифрования данных, передаваемых из конца в конец (end-to-end), и для шифрования запросов к floodfill роутерам.</title>'));  // добавляем высплывающее окошко
      }, 1600));
      timeOuts.push(setTimeout(function(){
        s.selectAll("image")[12].animate({"transform": "scale(1, 1, 0, 0)"}, 400);
        s.selectAll("image")[12].append(Snap.parse('<title>Мессенджер Hangouts использует 128-битное шифрование AES.</title>'));  // добавляем высплывающее окошко
      }, 1800));
      timeOuts.push(setTimeout(function(){
        s.selectAll("image")[2].animate({"transform": "scale(1, 1, 0, 0)"}, 400);
        s.selectAll("image")[2].append(Snap.parse('<title>Протокол шифрования мессенджера Telegram включает в себя 256-битный AES.</title>'));  // добавляем высплывающее окошко
      }, 2000));
      timeOuts.push(setTimeout(function(){
        s.selectAll("image")[4].animate({"transform": "scale(1, 1, 0, 0)"}, 400);
        s.selectAll("image")[4].append(Snap.parse('<title>В сети TOR могут использоваться 128- и 256-битный AES, 3DES или 128-битный RC4.</title>'));  // добавляем высплывающее окошко
      }, 2200));
      timeOuts.push(setTimeout(function(){
        s.selectAll("image")[6].animate({"transform": "scale(1, 1, 0, 0)"}, 400);
        s.selectAll("image")[6].append(Snap.parse('<title>Данные, передаваемые по WiFi шифруются с помощью алгоритма AES.</title>'));  // добавляем высплывающее окошко
      }, 2400));
      timeOuts.push(setTimeout(function(){
        s.selectAll("image")[8].animate({"transform": "scale(1, 1, 0, 0)"}, 400);
        s.selectAll("image")[8].append(Snap.parse('<title>iMessage использует 128-битный AES.</title>'));  // добавляем высплывающее окошко
      }, 2600));
      timeOuts.push(setTimeout(function(){
        s.selectAll("image")[10].animate({"transform": "scale(1, 1, 0, 0)"}, 400);
        s.selectAll("image")[10].append(Snap.parse('<title>OpenVPN может использовать любой из следующих алгоритмов: DES, RC2, 3DES, DESX, Blowfish, CAST5, AES.</title>'));  // добавляем высплывающее окошко
      }, 2800));

      $("#textbox").html("<p>Шифрование необходимо для защиты информации от посторонних лиц.</p><p>Мы запираем квартиры и машины на ключ, прячем деньги и шифруем информацию, которую бы не хотели увидеть в руках преступников.</p><p>Мы делаем это каждый день, порой даже не задумываясь. Например, если вы пользуетесь мобильной связью, банковскими карточками, подключаетесь к Интернету с помощью Wi-Fi или заходите на сайты, адреса которых начинаются с \"https://\", то знайте, что алгоритмы шифрования без устали трудятся на благо вашей безопасности.</p><p>Наведите курсор на любой из логотипов, чтобы узнать, какие алгоритмы симметричного шифрования там используются.</p>");
      break;

//====================== слайд 2 ======================

    case 1:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/symmetric/1.svg", function (f) {
        s.append(f);
      });
      $("#textbox").html("<p>При симметричном шифровании отправитель (пусть это будет Алиса – сторона А) и получатель (например, Боб, – сторона Б) для зашифрования и расшифрования используют один и тот же ключ, который <b>известен только им обоим</b>. Ключ представляет собой двоичное число, обычно длиной 128, 192 или 256 разрядов.</p><p>Не зная ключ, расшифровать сообщение невозможно. Если злоумышленник не знает ключ шифрования и имеет доступ только к каналу связи, по которому передаются зашифрованные сообщения, то прочитать сообщения он не сможет.</p><p>Хорошие алгоритмы шифрования не обязательно держать в тайне. Надёжность криптографической системы должна определяться сокрытием секретных ключей, а не сокрытием используемых алгоритмов (принцип Керкгоффса).</p>");
      break;

//====================== слайд 3 ======================

    case 2:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/symmetric/2.svg", function (f) {
        s.append(f);
      });
      $("#textbox").html("<p>Алиса может использовать симметричную криптосистему только для себя, например, для хранения файлов на жёстком диске или другом носителе информации в защищённом виде. Ключ при этом она хранит в секрете и никому не сообщает (см. рисунок).</p><p>Как можно заметить, в криптографии открытым текстом называются не только собственно тексты, но и нетекстовая информация (например, изображение, звук, видео). Алгоритм работает с байтами информации, и ему всё равно, что они означают. Шифротекст – это результат операции зашифрования.</p>");
      break;

//====================== слайд 4 ======================

    case 3:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/symmetric/3.svg", function (f) {
        s.append(f);
      });
      $("#textbox").html("<p>Симметричные шифры делятся на блочные и потоковые. Далее мы рассмотрим их подробнее.</p>");
      break;

//====================== слайд 5 ======================

    case 4:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/symmetric/4.svg", function (f) {
        s.append(f);
      });
      timeOuts.push(setTimeout(function(){
        s.selectAll("g[inkscape\\:label='Layer2']").animate({"opacity": 0}, 200);      // скрываем общий блок с сообщением
        s.selectAll("g[inkscape\\:label='Layer3']").animate({"opacity": 1}, 200);      // показываем отдельные блоки текста с сеткой
        s.selectAll("g[inkscape\\:label='Layer4']").animate({"opacity": 1}, 200);
        s.selectAll("g[inkscape\\:label='Layer5']").animate({"opacity": 1}, 200);
        s.selectAll("g[inkscape\\:label='Layer6']").animate({"opacity": 1}, 200);
        s.selectAll("g[inkscape\\:label='Layer7']").animate({"opacity": 1}, 200);
        s.selectAll("g[inkscape\\:label='Layer8']").animate({"opacity": 1}, 200);
      }, 1500));

      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer3']").animate({"transform": "t -315, 135"}, 500); }, 2500)); // перемещаем 1-ый блок сообщения
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer3']").animate({"opacity": 0}, 500); }, 3000));  // скрываем его
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[id='rect3045']").animate({"stroke": "#FF0000"}, 400); }, 3000));    //// здесь
      timeOuts.push(setTimeout(function(){ s.selectAll("text[id='text3815']").animate({"fill": "#FF0000"}, 400); }, 3000));      //// мигает
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[id='rect3045']").animate({"stroke": "#000000"}, 400); }, 3400));    //// блок с
      timeOuts.push(setTimeout(function(){ s.selectAll("text[id='text3815']").animate({"fill": "#000000"}, 400); }, 3400));      //// алгоритмом
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer10']").animate({"opacity": 1}, 500); }, 3400)); // показываем блок с шифротекстом
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer10']").animate({"transform": "t 317.02, 80.95"}, 500); }, 3900));

      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer6']").animate({"transform": "t -440, 135"}, 500); }, 4400)); // 2-ой блок
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer6']").animate({"opacity": 0}, 500); }, 4900)); 
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[id='rect3045']").animate({"stroke": "#FF0000"}, 400); }, 4900));
      timeOuts.push(setTimeout(function(){ s.selectAll("text[id='text3815']").animate({"fill": "#FF0000"}, 400); }, 4900));
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[id='rect3045']").animate({"stroke": "#000000"}, 400); }, 5300));
      timeOuts.push(setTimeout(function(){ s.selectAll("text[id='text3815']").animate({"fill": "#000000"}, 400); }, 5300));
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer11']").animate({"opacity": 1}, 500); }, 5300));
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer11']").animate({"transform": "t 440.11, 80.59"}, 500); }, 5800));

      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer4']").animate({"transform": "t -317, 106"}, 300); }, 6300)); // 3-ий блок 
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer4']").animate({"opacity": 0}, 300); }, 6600));
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[id='rect3045']").animate({"stroke": "#FF0000"}, 250); }, 6600));
      timeOuts.push(setTimeout(function(){ s.selectAll("text[id='text3815']").animate({"fill": "#FF0000"}, 250); }, 6600));
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[id='rect3045']").animate({"stroke": "#000000"}, 250); }, 6850));
      timeOuts.push(setTimeout(function(){ s.selectAll("text[id='text3815']").animate({"fill": "#000000"}, 250); }, 6850));
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer12']").animate({"opacity": 1}, 300); }, 6850));
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer12']").animate({"transform": "t 317.03, 107.14"}, 300); }, 7150));

      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer7']").animate({"transform": "t -440, 106"}, 300); }, 7450)); // 4-ый блок
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer7']").animate({"opacity": 0}, 300); }, 7750));
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[id='rect3045']").animate({"stroke": "#FF0000"}, 250); }, 7750));
      timeOuts.push(setTimeout(function(){ s.selectAll("text[id='text3815']").animate({"fill": "#FF0000"}, 250); }, 7750));
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[id='rect3045']").animate({"stroke": "#000000"}, 250); }, 8000));
      timeOuts.push(setTimeout(function(){ s.selectAll("text[id='text3815']").animate({"fill": "#000000"}, 250); }, 8000));
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer13']").animate({"opacity": 1}, 300); }, 8000));
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer13']").animate({"transform": "t 440.11, 107.14"}, 300); }, 8300));

      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer5']").animate({"transform": "t -317, 80"}, 300); }, 8600)); // 5-ый блок
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer5']").animate({"opacity": 0}, 300); }, 8900));
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[id='rect3045']").animate({"stroke": "#FF0000"}, 250); }, 8900));
      timeOuts.push(setTimeout(function(){ s.selectAll("text[id='text3815']").animate({"fill": "#FF0000"}, 250); }, 8900));
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[id='rect3045']").animate({"stroke": "#000000"}, 250); }, 9150));
      timeOuts.push(setTimeout(function(){ s.selectAll("text[id='text3815']").animate({"fill": "#000000"}, 250); }, 9150));
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer14']").animate({"opacity": 1}, 300); }, 9150));
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer14']").animate({"transform": "t 317.02, 132.09"}, 300); }, 9450));

      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer8']").animate({"transform": "t -440, 80"}, 300); }, 9450)); // 6-ый последний блок
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer8']").animate({"opacity": 0}, 300); }, 9750));
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[id='rect3045']").animate({"stroke": "#FF0000"}, 250); }, 9750));
      timeOuts.push(setTimeout(function(){ s.selectAll("text[id='text3815']").animate({"fill": "#FF0000"}, 250); }, 9750));
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[id='rect3045']").animate({"stroke": "#000000"}, 250); }, 10000));
      timeOuts.push(setTimeout(function(){ s.selectAll("text[id='text3815']").animate({"fill": "#000000"}, 250); }, 10000));
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer15']").animate({"opacity": 1}, 300); }, 10000));
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer15']").animate({"transform": "t 440.01, 132.09"}, 300); }, 10300));

      $("#textbox").html("<p>При блочном шифровании сообщение разбивается на небольшие блоки, обычно по 64 или 128 бит, которые поступают на вход алгоритма.<p>Алгоритм с помощью подстановок и перестановок битов входного блока и битов ключа шифрования получает блок с шифротекстом такого же размера, как и входной.</p>");
      break;

//====================== слайд 6 ======================

    case 5:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/symmetric/5.svg", function (f) {
        s.append(f);
      });
      tiker("text.txt", s);
      $("#textbox").html("<p>Поточное шифрование проводится над каждым битом либо байтом открытого текста по мере их поступления.</p>");
      break;

//====================== слайд 7 ======================

    case 6:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/symmetric/6.svg", function (f) {
        s.append(f);
      });
      timeOuts.push(setTimeout(function(){ s.selectAll("text[id='text3296']").animate({"opacity": 0}, 200); }, 1500)); // убираем надпись "открытый текст"
      // далее перемещаем все четыре блока ко входам алгоритмов 
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer2']").animate({"transform": "t -120, 116"}, 500); }, 2000));
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer3']").animate({"transform": "t -38, 116"}, 500); }, 2000));
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer4']").animate({"transform": "t 41, 116"}, 500); }, 2000));
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer5']").animate({"transform": "t 120, 116"}, 500); }, 2000));

      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer8']").animate({"opacity": 1}, 300); }, 3000)); // надпись "одинаковые блоки"
      timeOuts.push(setTimeout(function(){ s.selectAll("text[inkscape\\:label='text2']").attr({"opacity": 0}); }, 3500));  /// мигаем
      timeOuts.push(setTimeout(function(){ s.selectAll("text[inkscape\\:label='text2']").attr({"opacity": 1}); }, 3700));  /// этими
      timeOuts.push(setTimeout(function(){ s.selectAll("text[inkscape\\:label='text2']").attr({"opacity": 0}); }, 3900));  /// блоками
      timeOuts.push(setTimeout(function(){ s.selectAll("text[inkscape\\:label='text2']").attr({"opacity": 1}); }, 4100));  ///
      timeOuts.push(setTimeout(function(){ s.selectAll("text[inkscape\\:label='text2']").attr({"fill": "#FF0000"}); }, 4100));

      timeOuts.push(setTimeout(function(){ s.selectAll("rect[inkscape\\:label='rect']").animate({"stroke": "#FF0000"}, 150); }, 5000)); // мигают
      timeOuts.push(setTimeout(function(){ s.selectAll("text[inkscape\\:label='text']").animate({"fill": "#FF0000"}, 150); }, 5000));   // блоки
      timeOuts.push(setTimeout(function(){ s.selectAll("rect[inkscape\\:label='rect']").animate({"stroke": "#000000"}, 150); }, 5400)); // с
      timeOuts.push(setTimeout(function(){ s.selectAll("text[inkscape\\:label='text']").animate({"fill": "#000000"}, 150); }, 5400));   // алгоритмами
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer6']").animate({"opacity": 1}, 300); }, 5400)); // показываем выходной шифротекст
      timeOuts.push(setTimeout(function(){ s.selectAll("g[inkscape\\:label='Layer9']").animate({"opacity": 1}, 300); }, 5700)); // показываем надпись "одинаковые блоки"
      timeOuts.push(setTimeout(function(){ s.selectAll("text[inkscape\\:label='text3']").attr({"opacity": 0}); }, 6000));  /// мигаем
      timeOuts.push(setTimeout(function(){ s.selectAll("text[inkscape\\:label='text3']").attr({"opacity": 1}); }, 6200));  /// одинаковыми
      timeOuts.push(setTimeout(function(){ s.selectAll("text[inkscape\\:label='text3']").attr({"opacity": 0}); }, 6400));  /// блоками
      timeOuts.push(setTimeout(function(){ s.selectAll("text[inkscape\\:label='text3']").attr({"opacity": 1}); }, 6600));  ///
      timeOuts.push(setTimeout(function(){ s.selectAll("text[inkscape\\:label='text3']").attr({"fill": "#00AA00"}); }, 6600));
      $("#textbox").html("<p>Режим шифрования отвечает на вопрос: \"как шифровать сообщение, которое длиннее, чем один блок?\" Первое, что приходит на ум – шифровать каждый блок в отдельности. Такой режим шифрования называется <b>режимом электронной кодовой книги</b> или сокращённо <b>ECB</b> (Electronic code book).</p><p>Для наглядности был выбран размер блока в 8 бит.</p>");
      break;

//====================== слайд 8 ======================

    case 7:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/symmetric/7.svg", function (f) {
        s.append(f);
      });
      $("#textbox").html("<p>Как можно было заметить, в режиме EBC одинаковые блоки открытого текста дают на выходе одинаковые блоки шифротекста. Из-за этого в шифротексте можно выявить структуру исходного сообщения, если оно содержит повторяющиеся элементы. Это хорошо видно на приведённых изображениях. Чтобы не допустить этого, были разработаны другие режимы шифрования.</p>");
      break;

//====================== слайд 9 ======================
    
    case 8:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      $("#textbox").html("<p>В <b>режиме сцепления блоков шифротекста</b> (Cipher block chaining – сокр. <b>CBC</b>) каждый блок открытого текста перед зашифрованием побитово складывается по модулю 2 с предыдущим зашифрованным блоком.</p><p>Первый блок складывается с так называемым вектором инициализации, длина которого равна длине блока. Это случайное двоичное число, известное Алисе и Бобу. Его не обязательно держать в секрете и допускается передавать в открытом виде вместе с первым блоком шифротекста.</p><p>Попробуйте выполнить сложение самостоятельно и ввести результат в мигающее окошко.</p>");
      Snap.load("images/symmetric/8.svg", function (f) {
        s.append(f);
      });
      timeOuts.push( setTimeout(function(){ 
        opentext1clone = s.selectAll("g[inkscape\\:label='m1']").clone(); // скопировать и переместить первый блок сообщения
        opentext1clone.animate({"transform": "t -207, 163"}, 500);
        opentext2clone = s.selectAll("g[inkscape\\:label='m2']").clone();    // скопировать и переместить второй блок сообщения
        opentext2clone.animate({"transform": "t 5, 163"}, 500);
        opentext3clone = s.selectAll("g[inkscape\\:label='m3']").clone();  // скопировать и переместить третий блок сообщения
        opentext3clone.animate({"transform": "t 216, 163"}, 500);
      }, 1500) );

      //////// первый блок
      timeOuts.push( setTimeout(function(){ 
        s.selectAll("g[inkscape\\:label='iv']").clone().animate({"transform": "t 124, 0"}, 500); // скопировать и переместить вектор инициализации
        s.selectAll("g[inkscape\\:label='xor1']").animate({"opacity": "1"}, 500);                // показать сумматор
      }, 2500) );
      timeOuts.push( setTimeout(function(){ 
        s.selectAll("path[inkscape\\:label='line1']").animate({"opacity": "1"}, 500);            // показать линию от вектора инициализации
      }, 3000) );
      timeOuts.push( setTimeout(function(){ 
        s.selectAll("g[inkscape\\:label='eq1']").animate({"opacity": "1"}, 500);     // показать символ равно
        s.selectAll("g[inkscape\\:label='input1']").animate({"opacity": "1"}, 500);  // показать вход алгоритма
        s.selectAll("g[inkscape\\:label='in1']").animate({"opacity": "1"}, 500);     // показать стрелку на входе
      }, 3500) );
      timeOuts.push( setTimeout(function(){
        s.selectAll("g[inkscape\\:label='out1']").animate({"opacity": "1"}, 500);     // показать стрелку на выходе
        s.selectAll("g[inkscape\\:label='output1']").animate({"opacity": "1"}, 500);  // показать выход алгоритма
      }, 4500) );
      timeOuts.push( setTimeout(function(){
        var line = s.select("path[inkscape\\:label='line2']");                             // траектория движения выходного блока
        output1clone = s.select("g[inkscape\\:label='output1']").clone();                    // клон выходного блока
        output1clone.drawAtPath(line, 2000, {drawpath: 1, startingTransform: "t 0,390.36218"});  // начать двигать блок вдоль пути,
                                                                        // прорисовывая траекторию и стартуя с начальной трансформации
      }, 5500) );

      //////// второй блок
      timeOuts.push( setTimeout(function(){ 
        s.selectAll("g[inkscape\\:label='xor2']").animate({"opacity": "1"}, 500);    // показать сумматор
      }, 8000) );
      timeOuts.push( setTimeout(function(){ 
        s.selectAll("g[inkscape\\:label='eq2']").animate({"opacity": "1"}, 500);     // показать символ равно
        s.selectAll("g[inkscape\\:label='input2']").animate({"opacity": "1"}, 500);  // показать вход алгоритма
        s.selectAll("g[inkscape\\:label='in2']").animate({"opacity": "1"}, 500);     // показать стрелку на входе
      }, 9000) );
      timeOuts.push( setTimeout(function(){
        s.selectAll("g[inkscape\\:label='out2']").animate({"opacity": "1"}, 500);     // показать стрелку на выходе
        s.selectAll("g[inkscape\\:label='output2']").animate({"opacity": "1"}, 500);  // показать выход алгоритма
      }, 10000) );
      timeOuts.push( setTimeout(function(){
        var line = s.select("path[inkscape\\:label='line3']");                             // траектория движения выходного блока
        output2clone = s.select("g[inkscape\\:label='output2']").clone();                    // клон выходного блока
        output2clone.drawAtPath(line, 2000, {drawpath: 1, startingTransform: "t 307.32236,-9.2624988e-4"});  // начать двигать блок вдоль пути,
                                                                        // прорисовывая траекторию и стартуя с начальной трансформации
      }, 11000) );

      //////// третий блок
      timeOuts.push( setTimeout(function(){ 
        s.selectAll("g[inkscape\\:label='xor3']").animate({"opacity": "1"}, 500);    // показать сумматор
      }, 13000) );
      timeOuts.push( setTimeout(function(){ 
        s.selectAll("g[inkscape\\:label='eq3']").animate({"opacity": "1"}, 500);     // показать символ равно
      }, 13500) );

      /////////////////// начало кода для блока ввода ///////////////
      /// создать поле для ввода (с помощью функции input) через 14 с после наала слайда
      /// правильный ответ "10111001"
      /// все символы, кроме /[^0-1]/g будут удаляться
      /// максимальная количество символов в поле ввода = 8, ширина поля = 95 пикселей
      /// идентификатор мигающего ореола = "g[inkscape\\:label='glow']"
      /// рамка вокруг поля ввода = "rect[id='border']"
      /// задаём координаты блока ввода = "translate(772 360)"
      /// затем передаётся текст, выводимый в боковое окошко, при установке фокуса на поле ввода
      /// и, наконец, callback-функция, которая вызывается после ввода верного ответа
      timeOuts.push( setTimeout(input, 14000, "10111001", /[^0-1]/g, 8, "95px", "g[inkscape\\:label='glow']", "rect[id='border']", "translate(772 360)", "<p><b>Сложение по модулю 2</b> является одной из важнейший операций в криптографии. Её также называют <b>исключающим \"ИЛИ\"</b> или <b>XOR</b>. При сложении двух бит возможны четыре случая:</p><p>0 ⊕ 0 = 0<br>0 ⊕ 1 = 1<br>1 ⊕ 0 = 1<br>1 ⊕ 1 = 0</p>", 
        function (){
          var line = s.select("path[inkscape\\:label='OK']");
          line.draw(200);                                             // рисуем галочку
          s.selectAll("g[inkscape\\:label='in3']").animate({"opacity": "1"}, 500);     // показать стрелку на входе
          timeOuts.push( setTimeout(function(){
            s.selectAll("g[inkscape\\:label='out3']").animate({"opacity": "1"}, 500);     // показать стрелку на выходе
            s.selectAll("g[inkscape\\:label='output3']").animate({"opacity": "1"}, 500);  // показать выход алгоритма
          }, 500) );
          timeOuts.push( setTimeout(function(){
            output1clone.animate({"opacity": "0"}, 500);   // скрываем первый склонированный выходной блок
            output2clone.animate({"opacity": "0"}, 500);   // скрываем второй склонированный выходной блок
            opentext1clone.animate({"opacity": "0"}, 500); //// скрываем склонированные
            opentext2clone.animate({"opacity": "0"}, 500); //// блоки открытого текста
            opentext3clone.animate({"opacity": "0"}, 500); ////
            $("#textdiv").remove();                        // удаляем блок ввода
            s.selectAll("g[inkscape\\:label='toHide']").animate({"opacity": "0"}, 500); // скрываем всё остальное
          }, 2000) );
          timeOuts.push( setTimeout(function(){
            s.selectAll("g[inkscape\\:label='output1']").animate({"transform": "t 211.5, 0"}, 500);   // перемещаем первый блок шифротекста
            s.selectAll("g[inkscape\\:label='output3']").animate({"transform": "t -211.5, 0"}, 500);  // перемещаем последний блок шифротекста
          }, 3000) );
          timeOuts.push( setTimeout(function(){
            s.selectAll("g[inkscape\\:label='toShow']").animate({"opacity": "1"}, 500);        // показываем надпись "шифротекст" и три стрелки
            $("#textbox").html("<p>Обратите внимание на первый и последний блоки: несмотря на то, что открытые тексты в них одинаковы (00011100), результат шифрования получается совершенно разным (11110001 и 00010111 соотвественно).</p>");
          }, 3500) );    
        }
      ) );
      /////////////////// конец кода для блока ввода ///////////////

      break;

//====================== слайд 10 ======================

    case 9:
      s.clear();
      stopAllTimers();                   // останавливаем все запущенные таймауты и интервалы
      s.attr({"opacity": 0}).animate({"opacity": 1}, 1000);
      Snap.load("images/symmetric/9.svg", function (f) {
        s.append(f);
      });
      $("#textbox").html("<p>Благодаря сцеплению блоков шифротекста, выделить какие-либо структурные особенности открытого текста невозможно.</p><p>Существуют и другие режимы шифрования, но их рассмотрение не является целью данного курса.</p>");
      break;

    case -1:                                // если нажали "назад" до первого слайда
    case 10:                                // если нажали "вперёд" после последнего слайда
      s.clear();
      stopAllTimers();                      // останавливаем все запущенные таймауты и интервалы
      contents();                           // переходим на главную, к содержанию курса
      break;

  }
};



///////////// генерирует бегущую строку для потокового шифра из файла /////////////
var tiker = function (file, s) {                
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if(rawFile.readyState === 4) {
      if(rawFile.status === 200 || rawFile.status == 0) {  // получили файл
        allText = rawFile.responseText;                    // содержимое файла
        allText = allText.replace(/(?:\r\n|\r|\n)/g, " "); // заменяем все переносы строк на пробелы
        allText = allText.replace(/ +(?= )/g, "");         // убираем несколько пробелов подряд
        var openText = "                         ";        // открытый текст
        var cipherText = "";                               // шифротекст
        intervals.push(setInterval(function(){             // дописывает один символ в openText и cipherText
          $("#tspan3369").text(openText);                  // выводим на экран открытый текст
          $("#tspan3369-6").text(cipherText);              // выводим на экран шифротекст
          openText = openText.substring(1) + allText[0];   // сдвигаем влево строку с открытым текстом и дописываем один символ из allText
          allText = allText.substring(1);                  // обрезаем самый левый символ у allText
          if (cipherText.length < 25) {                    // если в шифротексте ещё не набралось 25 символов
            cipherText += " ";                             // добавляем пробел
          } else {                                         // иначе
            cipherText = cipherText.substring(1) + randChar("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+=~?,.<>;:{}[] ", 1);   // сдвигаем влево строку с шифротекстом и дописываем один случайный символ из предложенных
          }
        }, 150));
      }
    }
  }
  rawFile.send(null);
}
