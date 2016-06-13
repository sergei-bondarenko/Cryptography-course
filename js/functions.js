// Здесь собраны функции, используемые в разных модулях
//-----------------------------------------------------


////// плагин, добавляющий анимацию движения для элемента вдоль пути ///////
Snap.plugin(function(Snap, Element, Paper, global) {                     
  Element.prototype.drawAtPath = function(path, timer, options) {
    var myObject = this, bbox = this.getBBox(1);
    var point, movePoint = {}, len = path.getTotalLength(), from = 0, to = len, drawpath = 0, easing = mina.linear, callback;
    var startingTransform = ''; 

    if(options) {
      easing = options.easing || easing;
      if(options.reverse) { from = len; to = 0; }
      if(options.drawpath) {
        drawpath = 1;
        path.attr({fill: "none", strokeDasharray: len + " " + len, strokeDashoffset: this.len});
      }
      if( options.startingTransform ) { startingTransform = options.startingTransform; }
      callback = options.callback || function() {};
    }

    Snap.animate(from, to, function(val) {
      point = path.getPointAtLength(val);
      movePoint.x = point.x - bbox.cx;
      movePoint.y = point.y - bbox.cy;
      myObject.transform( startingTransform + 't' + movePoint.x + ',' + movePoint.y);
      if(drawpath) { path.attr({ "stroke-dashoffset": len - val, opacity: "1" }); }
    }, timer, easing, callback); 
  };
});



///////// плагин, добавляющий анимацию прорисовки линии //////////
Snap.plugin(function(Snap, Element, Paper, global) {                     
  Element.prototype.draw = function(timer, options) {
    var path = this;
    var len = path.getTotalLength(), from = 0, to = len, easing = mina.linear, callback;

    if(options) {
      easing = options.easing || easing;
      if(options.reverse) { from = len; to = 0; } 
      callback = options.callback || function() {};
    }

    path.attr({fill: "none", strokeDasharray: len + " " + len, strokeDashoffset: len});

    Snap.animate(from, to, function(val) {
     path.attr({ "stroke-dashoffset": len - val, opacity: "1" });
    }, timer, easing, callback); 
  };
});



/////////// остановить все запущенные таймауты и интервалы //////////////
var stopAllTimers = function () {               
  for (var i = 0; i < timeOuts.length; i++) {
    clearTimeout(timeOuts[i]);                  // останавливаем каждый таймаут
  }
  for (var i = 0; i < intervals.length; i++) {
    clearInterval(intervals[i]);                // останавливаем каждый интервал
  }
  timeOuts = [];                                // очищаем список активных таймаутов
  intervals = [];                               // очищаем список активных интервалов
}



/////////// остановить все запущенные анимации //////////////
var stopAllAnimations = function () {               
  s.selectAll("path").forEach( function(elem){ elem.stop(); } );
  s.selectAll("rect").forEach( function(elem){ elem.stop(); } );
  s.selectAll("g").forEach( function(elem){ elem.stop(); } );
  s.selectAll("text").forEach( function(elem){ elem.stop(); } );
}



////////// возвращает n случайных символов из строки //////////
var randChar = function (chars, n) {   
  var result = "";
  for (i = 0; i < n; i++) {
    result += chars[Math.round(Math.random() * (chars.length - 1))];
  }
  return result;
}



//////// устанавливает каретку в конец содержимого div, используемого как блок ввода ////////////
function setEndOfContenteditable(contentEditableElement) 
{
  var range,selection;
  if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
  {
    range = document.createRange();//Create a range (a range is a like the selection but invisible)
    range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
    range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
    selection = window.getSelection();//get the selection object (allows you to change selection)
    selection.removeAllRanges();//remove any selections already made
    selection.addRange(range);//make the range you have just created the visible selection
  }
  else if(document.selection)//IE 8 and lower
  { 
    range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
    range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
    range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
    range.select();//Select the range (make it the visible selection
  }
}



//////////// загрузить меню с иконками "вперёд", "назад", "домой" и "повторить" ////////////////
var loadMenu = function (slide) {        //// через slide передаётся функция загрузки слайдов для
                                         //// конкретной темы: symmetricSlide, aesSlide и т.д.                                 
  menu = Snap("#menusvg");                                            // создаём холст для иконок (вперёд, назад, домой и обновить)
  menu.attr({viewBox: "0 0 397 59", width: "100%", height: "100%"});  // устанавливаем стандартный размер: 397 на 59 пикселей
                                                                      // относительно этого размера и будем рисовать, это 100% масштаб

  Snap.load("images/menu.svg", function (f) {                    // загружаем меню

    menu.append(f);

    var back = menu.select("g[inkscape\\:label='back']");             // кнопка "назад"
    var home = menu.select("g[inkscape\\:label='home']");             // кнопка "домой"
    var repeat = menu.select("g[inkscape\\:label='repeat']");         // кнопка "повторить"
    var forward = menu.select("g[inkscape\\:label='forward']");       // кнопка "вперёд"

    back.hover( function() {                //// при наведении мышью
      back.animate({"opacity": 0}, 50);     //// скрываем иконку с верхнего
    }, function() {                         //// слоя, чтобы показать
      back.animate({"opacity": 1}, 50);     //// нижележащую
    } );                                    ////

    home.hover( function() {                // то же самое
      home.animate({"opacity": 0}, 50); 
    }, function() { 
      home.animate({"opacity": 1}, 50); 
    } );          

    repeat.hover( function() {              // то же самое
      repeat.animate({"opacity": 0}, 50); 
    }, function() { 
      repeat.animate({"opacity": 1}, 50); 
    } );    

    forward.hover( function() {             // то же самое
      forward.animate({"opacity": 0}, 50); 
    }, function() { 
      forward.animate({"opacity": 1}, 50); 
    } ); 
    
    back.click( function() { slide(--n, s); } );             // предыдущий слайд
    home.click( function() { contents(); } );                // перейти к содержанию
    repeat.click( function() { slide(n, s); } );             // повторить этот слайд
    forward.click( function() { slide(++n, s); } );          // следующий слайд
  });
}



////////////// кеширует изображения ////////////////
function preloadImages(array, f) {         // на вход получает ссылки на изображения для кэширования и функцию, 
                                           // которую нужно запустить после выполнения кэширования
  $("body").empty();    // очищаем экран
  var pagecontent = "<div id=\"preloadImages\"></div>";
  $("body").append(pagecontent);
  if (!preloadImages.list) {
    preloadImages.list = [];
  }
  var list = preloadImages.list;
  for (var i = 0; i < array.length; i++) {
    var img = new Image();
    img.onload = function() {
      var index = list.indexOf(this);
      if (index !== -1) {
        // remove image from the array once it's loaded
        // for memory consumption reasons
        list.splice(index, 1);
        $("#preloadImages").html(progressBar(1 - list.length / array.length) + "<br>Кеширование изображений");
        if (list.length == 0) { f(); }
      }
    }
    list.push(img);
    img.src = array[i];
  }
}



//////// возвращает строку-прогрессбар, имеющую вид /////////
////////     [#############........]                /////////
function progressBar(position) {             // position от 0 до 1
  var hashes = Math.round(position * 21);    // количество решёток
  var dots = 21 - hashes;                    // количество точек
  var s = "[" + Array(hashes + 1).join("#") + Array(dots + 1).join(".") + "]";
  return s;
}



////////// инициализация окошек для вывода слайдов ////////
/// загружаем в body все div'ы, создаём холст, задаём /////
/// его параметры, загружаем меню, объявляем переменные ///
var initialize = function () {                                          
  $("body").empty();                      // очищаем экран
  var pagecontent = "<div id=\"page\">" +
                      "<div id=\"drawbox\">" +
                        "<svg id=\"drawsvg\"></svg>" +
                      "</div>" +
                      "<div id=\"textbox\"></div>" +
                      "<div id=\"menubox\">" +
                        "<svg id=\"menusvg\"></svg>" +
                      "</div>" +
                    "</div>";
                                                                                                   // размещаем блок для рисования и блок
  $("body").append(pagecontent);                                                                   // для текстовых пояснений
  s = Snap("#drawsvg");                    // создаём холст
  s.attr({viewBox: "0 0 941 662", width: "100%", height: "100%"});    // устанавливаем стандартный размер: 941 на 662 пикселей
                                                                      // относительно этого размера и будем рисовать, это 100% масштаб
  timeOuts = [];                           // массив с id'шками запущенных таймаутов, нужно для функции stopAllTimers, которая их все останавливает
  intervals = [];                          // массив с id'шками запущенных интервалов
  n = 0;                                   // номер текущего слайда
}



///////////////////////// создать поле для ввода ////////////////////////
/// answer - правильный ответ, строка
/// regex - регулярное выражение, все символы не подпадающие под него, будут удаляться
/// maxlength - максимальная кол-во символов в поле ввода, 
/// width - ширина поля, строка
/// glow - идентификатор мигающего ореола, строка (если glow == "", то не мигаем)
/// border - рамка для поля ввода
/// transform - задаёт координаты поля ввода
/// textOnFocus - текст, выводимый в боковое окошко, при установке фокуса на поле ввода (если textOnFocus == "", то ничего не делаем)
/// callback - функция, которая вызывается после ввода верного ответа
var input = function(answer, regex, maxlength, width, glow, border, transform, textOnFocus, callback){ 

  s.selectAll(border).attr({"opacity": "1"}); // показываем рамку

  if (glow != "") {           // если есть ореол
    intervals.push(setTimeout(function(){     //// мигаем орелом
      blink( s.selectAll(glow) );             ////
    }, 0) );                                  ////
    intervals.push(setTimeout(function(){     //// три раза
      blink( s.selectAll(glow) );             ////
    }, 600) );                                ////
    intervals.push(setTimeout(function(){     //// вокруг блока ввода
      blink( s.selectAll(glow) );             ////
    }, 1200) );                               ////
  }

  var svg = document.getElementById('drawsvg');

  var myforeign = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject'); // создаём встроенный объект
  textdiv = document.createElement("div");                  // создаём div (объявляю глобально для совместимости с firefox)
  textdiv.setAttribute("id", "textdiv");
  textdiv.setAttribute("contentEditable", "true");          // устаналиваем редактируемое содержимое
  textdiv.setAttribute("width", "auto");
  textdiv.setAttribute("style", "font-family:Liberation Mono;font-size:15.57999992px;letter-spacing:0.06em;border:0px solid;outline:0px;padding-top:1px;padding-left:4px;height:18px");

  textdiv.addEventListener("input", function() {                  // при изменении текста в поле ввода
    textdiv.innerHTML = textdiv.innerHTML.replace(regex, '');     // удалять все символы, кроме допустимых
    if ( textdiv.innerHTML.length > maxlength ) { 
      textdiv.innerHTML = textdiv.innerHTML.substring(0, maxlength);      // обрезать, если введено больше допустимого кол-ва символов
    }
    if ( textdiv.innerHTML == answer && textdiv.innerHTML != "" ) {                          // если введён правильный ответ
      callback(answer);
    }
    setEndOfContenteditable(textdiv);         // переместить каретку в конец блока ввода
  }, false);

  textdiv.addEventListener("paste", function() { event.preventDefault() }, false);  // запрещаем вставку символов (ctrl+V)
  myforeign.setAttribute("width", width);
  myforeign.setAttribute("height", "100%");
  myforeign.classList.add("foreign");
  textdiv.classList.add("insideforeign");
  myforeign.setAttributeNS(null, "transform", transform);

  var i = 0;                                          ///
  while ( $("#input" + i).length ) { i++; }           /// присваиваем элементу уникальный id
  myforeign.setAttributeNS(null, "id", "input" + i);  ///

  svg.appendChild(myforeign);
  myforeign.appendChild(textdiv);

  textdiv.addEventListener("focus", function() { // при установлении фокуса на блоке ввода
    if (glow != "") {                            // если есть ореол
      stopAllTimers();                           // останавливаем все таймеры
      s.select(glow).stop();                     // останавливаем анимацию
      s.selectAll(glow).attr({"opacity": "0"});  // и убираем ореол
    }
    if (textOnFocus != "") {                     // если есть текст для вывода при установке фокуса
      $("#textbox").html(textOnFocus);           // выводим его
    }
  });
}



//////////// многострочное поле для ввода ///////////////
// height - высота
// width - ширина
// tranform - координаты в виде строки "translate(x,y)"
var inputArea = function(height, width, transform){
  var svg = document.getElementById('drawsvg');

  var myforeign = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject'); // создаём встроенный объект
  textarea = document.createElement("div");                  // создаём div (объявляю глобально для совместимости с firefox)
  textarea.setAttribute("id", "textarea");
  textarea.setAttribute("contentEditable", "true");          // устаналиваем редактируемое содержимое
  textarea.setAttribute("width", "auto");
  textarea.setAttribute("style", "overflow:auto;word-wrap:break-word;font-family:Liberation Mono;font-size:15.57999992px;letter-spacing:0.06em;border:0px solid;outline:0px;padding-top:1px;padding-left:4px;padding-right:4px;height:" + height + "px");

  textarea.addEventListener("input", function() {            // при изменении текста в поле ввода
    var text = textarea.textContent;
    var hash = s_hash(text);                               // вычисляем и показываем хэш
    $("#hash").html(hash);
  }, false);

  myforeign.setAttribute("width", width);
  myforeign.setAttribute("height", "100%");
  myforeign.classList.add("foreign");
  textarea.classList.add("insideforeign");
  myforeign.setAttributeNS(null, "transform", transform);

  svg.appendChild(myforeign);
  myforeign.appendChild(textarea);

  $("#textarea").get(0).focus();   // устаналиваем указатель ввода на поле
}



// converts hexadecimal string to a binary string
// returns an object with key 'valid' to a boolean value, indicating
// if the string is a valid hexadecimal string.
// If 'valid' is true, the converted binary string can be obtained by
// the 'result' key of the returned object
function hexToBinary(s) {
    var i, k, part, ret = '';
    // lookup table for easier conversion. '0' characters are padded for '1' to '7'
    var lookupTable = {
        '0': '0000', '1': '0001', '2': '0010', '3': '0011', '4': '0100',
        '5': '0101', '6': '0110', '7': '0111', '8': '1000', '9': '1001',
        'a': '1010', 'b': '1011', 'c': '1100', 'd': '1101',
        'e': '1110', 'f': '1111',
        'A': '1010', 'B': '1011', 'C': '1100', 'D': '1101',
        'E': '1110', 'F': '1111'
    };
    for (i = 0; i < s.length; i += 1) {
        if (lookupTable.hasOwnProperty(s[i])) {
            ret += lookupTable[s[i]];
        } else {
            return { valid: false };
        }
    }
    return { valid: true, result: ret };
}



//////////// складывает два байта по модулю два ////////////////
var xorBytes = function (a, b) {  // a и b - строки, представляющие байты в двоичном виде
  var result = "";
  for (i = 0; i < 8; i++) {
    result += a[i] ^ b[i];
  }
  return result;
}



//////// переводит байт из двоичной в 16-ричную систему исч. ///////
var byteToHex = function (a) {  // а - один байт в двоичном виде, строка из 8 символов 
  var result = "";
  for (i = 0; i <= 1; i++) {
    switch(a.substring(i * 4, i * 4 + 4)) {
      case "0000": result += "0"; break;
      case "0001": result += "1"; break;
      case "0010": result += "2"; break;
      case "0011": result += "3"; break;
      case "0100": result += "4"; break;
      case "0101": result += "5"; break;
      case "0110": result += "6"; break;
      case "0111": result += "7"; break;
      case "1000": result += "8"; break;
      case "1001": result += "9"; break;
      case "1010": result += "a"; break;
      case "1011": result += "b"; break;
      case "1100": result += "c"; break;
      case "1101": result += "d"; break;
      case "1110": result += "e"; break;
      case "1111": result += "f"; break;
    }
  }
  return result;
}



//////// мигнуть объектом один раз /////////
// obj - объект
// color - необзательный параметр. если есть, то объект не скрываем, а меняем заливку на этот цвет
// callback - функция, взваемая после завершения, тоже необязат. параметр
var blink = function (obj, color, callback) {
  // график интенсивности от времени (один символ - 100 мс):
  //  __    
  // /  \__
  //
  // запускать функцию blink следует c периодом в 600 мс
  if (typeof color === 'undefined') {    // если цвет не указан
    obj.animate({"opacity": "1"}, 100);
    timeOuts.push( setTimeout(function(){ 
      obj.animate({"opacity": "0"}, 100);
    }, 300) );
  } else {
    obj.animate({"fill": color}, 100);        // заливка цветом
    timeOuts.push( setTimeout(function(){ 
      obj.animate({"fill": "#000000"}, 100);  // чёрная заливка
    }, 300) );
  }
   timeOuts.push( setTimeout(function(){ 
     if (typeof callback !== 'undefined') { 
       callback();    // если задана функция, вызываем её
     }  
   }, 600) );
}



//////////// показывает мигающее изображение мыши ///////////
// (изображение мышки должно уже присутствовать на холсте) //
var clickToContinue = function(){
  s.selectAll("g[inkscape\\:label='mouse']").animate({"opacity": "1"}, 300);  /// показываем мышь
  s.selectAll("g[inkscape\\:label='mouse']").attr({"display": "inline"});     ///
  blink(s.selectAll("path[inkscape\\:label='leftKey']"), "#ff0000", clickToContinue);  
}



////// поэтапно перемножает два байта в поле GF(256) ////////
var galoisMultiplication = function(byte1hex, byte2hex){

  var byte1bin = hexToBinary(byte1hex).result;   /// переводим в двоичный код
  var byte2bin = hexToBinary(byte2hex).result;   /// старшие разряды слева, младшие справа
  var product = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // произведение двух байтов: начиная с 1 и заканчивая х^14
  for (var i = 0; i <= 7; i++) {                 /// каждый разряд первого числа
    for (var j = 0; j <= 7; j++) {               /// умножаем на каждый разряд второго числа
      var degree = byte1bin[i] * (7 - i) + byte2bin[j] * (7 - j);  // вычисляем полученную степень при умножении
      if (byte1bin[i] == 1 && byte2bin[j] == 1) {   // если на данном месте есть 1 у обоих множителей
        product[degree] ^= 1;                // то меняем значение на противоположное 
      }
    }
  }

  var intermediateResult = product.slice();  // промежуточный результат (полином до деления)

  var productDegree = product.length;        // степень полинома product - номер самой правой единицы
  do
    productDegree--;
  while (product[productDegree] != 1 && productDegree != -1);       // получили степень полинома. -1, если в плиноме нет ни одной единицы

  if (productDegree <= 7) {                  // если не придётся делить
    product = product.slice(0,9);            // обрезаем лишние элементы
  }

  while (productDegree > 7) {
    var reducingPolynomial = [1,1,0,1,1,0,0,0,1];  // неприводимый полином x8⊕x4⊕x3⊕x⊕1
    var remainder = [];                            // остаток от деления
    product = product.slice(0, productDegree + 1); // обрезаем ненужные нули справа у product
    for (var i = 0; i < productDegree-8; i++) {
      reducingPolynomial.unshift(0);               // дописываем к reducingPolynomial слева нули, чтобы уравнять его степень с product
    }
    for (var i = 0; i < reducingPolynomial.length; i++) {
      remainder.push(reducingPolynomial[i] ^ product[i]);  // XOR'им неприводимый полином и произведение
    }
    product = remainder.slice();           // копируем остаток от деления в результат
    productDegree = product.length;
    do
      productDegree--;
    while (product[productDegree] != 1);   // получили степень полинома
  }
  
  product = product.slice(0,8);   // оставляем только 8 элементов
  var temp = [];                  // временный массив
  temp = product.slice();         // копируем в него product
  var productBin = "";            // сюда запишем результат в двоичной форме
  while (temp.length > 0) {       
    productBin += temp.pop();
  }

  var productHex = byteToHex(productBin);  // переводим произведение в HEX

  return { byte1bin: byte1bin, byte2bin: byte2bin, intermediateResult: intermediateResult, productPoly: product, productBin: productBin, productHex: productHex };
}



////// функция mixColumn над одним вектором ////////
var mixColumn = function(column){    // column - массив из четырёх байт
  var returnColumn = [];             // результат - так же массив из четырёх байт 
  var mds = [["02", "03", "01", "01"], ["01", "02", "03", "01"], ["01", "01", "02", "03"], ["03", "01", "01", "02"]];
  for (var i = 0; i < 4; i++) {
    var mult0hex = galoisMultiplication(mds[i][0], column[0]).productHex;    /// произведения в 16-ричн. системе
    var mult1hex = galoisMultiplication(mds[i][1], column[1]).productHex;
    var mult2hex = galoisMultiplication(mds[i][2], column[2]).productHex;
    var mult3hex = galoisMultiplication(mds[i][3], column[3]).productHex;

    var mult0bin = hexToBinary(mult0hex).result;    /// произведения в двоичной системе
    var mult1bin = hexToBinary(mult1hex).result;
    var mult2bin = hexToBinary(mult2hex).result;
    var mult3bin = hexToBinary(mult3hex).result;

    var resultbin = xorBytes( xorBytes(mult0bin, mult1bin), xorBytes(mult2bin, mult3bin) );  // XOR'им все четыре байта
    var resulthex = byteToHex(resultbin);

    returnColumn[i] = resulthex;
  }
  return returnColumn;
}



////// находит брутфорсом обратное число (multiplicative inverse) в поле GF(256) ////////
var galoisInverse = function(bytehex){   // на входе байт в виде "53", на выходе "ca". {53} * {ca} = 1
  if (bytehex == "00") { 
    return "00";              // для "00" возвращаем "00" 
  }
  var inverse = "00";   // перебираем от 00 до ff
  while (inverse != "ff") {
    if (galoisMultiplication(bytehex, inverse).productHex == "01") {
      return inverse;
    }
    inverse = addBytes(inverse, "01");  // берём следующее число
  }
  return "ff";   // остался последний вариант
}



////// складывает два байта ///////////
function addBytes(c1, c2) {  // вход "ca" и "01", выход "cb"
  var hexStr = (parseInt(c1, 16) + parseInt(c2, 16)).toString(16);
  while (hexStr.length < 2) { hexStr = '0' + hexStr; } // Zero pad.
  return hexStr;
}


////// простейшая хэш-функция ////////
var s_hash = function(s){    // строка, от которой вычисляется хэш
  var binary = "";           // строка в двоичном виде в кодировке Unicode. Один символ - 16 бит.
  var hash = "00000000";     // результат
  for (i = 0; i < s.length; i++) {
    var bin = s[i].charCodeAt(0).toString(2);          // двоичное значение символа
    bin = new Array(17 - bin.length).join('0') + bin;  // дописываем слева нули, чтобы результирующая длина была 16 бит
    binary += bin;
  }
  for (var i = 0; i < (binary.length / 8); i++) {            // XOR'им байты
    hash = xorBytes(hash, binary.substring(i * 8, (i * 8 + 8)));
  }
  return hash;
}
