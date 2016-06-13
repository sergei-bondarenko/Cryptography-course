var contents = function () {
  document.body.innerHTML = ""; // очищаем body (при возврате из какой-то темы на главную нужно убрать ненужные div'ы)
	var emailparts = ["gma", "911", "il", "&#46;", "gr", "ez", "&#64;", "<span style=\"display: none;\">notshowing</span>", "com"];		// части email'а (обфускация)
  var pagecontent = "<div id=\"page\">" +
                      "<div id=\"contentsbox\">" +
                      "<h2>Содержание</h2>" +
                      "1 Cимметричное шифрование<br>" +
                      "<a id=\"symmetric\">&nbsp;&nbsp;1.1 Введение</a><br>" +
                      "<a id=\"aes\">&nbsp;&nbsp;1.2 AES</a><br>" +
											"<a href=\"symmetric.php\" target=\"_blank\">&nbsp;&nbsp;Тест: Симметричное шифрование</a><br>" +
                      "2 Асимметричное шифрование<br>" +
                      "<a id=\"asymmetric\">&nbsp;&nbsp;2.1 Введение</a><br>" +
                      "<a id=\"dh\">&nbsp;&nbsp;2.2 Алгоритм Диффи-Хеллмана</a><br>" +
                      "<a id=\"rsa_enc\">&nbsp;&nbsp;2.3 RSA (в режиме шифрования)</a><br>" +
											"<a href=\"asymmetric.php\" target=\"_blank\">&nbsp;&nbsp;Тест: Асимметричное шифрование</a><br>" +
                      "3 Электронная подпись (ЭП)<br>" +
                      "<a id=\"signature\">&nbsp;&nbsp;3.1 Введение</a><br>" +
                      "<a id=\"rsa_sig\">&nbsp;&nbsp;3.2 RSA (в режиме ЭП)</a><br>" +
                      "<a id=\"dsa\">&nbsp;&nbsp;3.3 DSA</a><br>" +
											"<a href=\"signature.php\" target=\"_blank\">&nbsp;&nbsp;Тест: Электронная подпись</a><br><br>" +
											"<a href=\"results.php\">Все результаты тестирования</a>" +
                      "</div>" +
                    "</div>" +
										"<div style=\"text-align: right; position: fixed; bottom: 10px; right: 20px; color: #707070; font-family: tahoma,arial,verdana,sans-serif,Lucida Sans; font-size: 12px\">" +
											"По любым вопросам пишите на<br>e-mail: <a href=\"mailto:grezq911aatgmaildootcom\" id=\"email\"></a><br>vk: <a href=\"https://vk.com/id33333349\">vk.com/id33333349</a>" +
										"</div>";
  $("body").append(pagecontent);
	document.getElementById("email").innerHTML = emailparts[4] + emailparts[5] + emailparts[7] + emailparts[1] + emailparts[6] + 
																							 emailparts[0] + emailparts[2] + emailparts[3] + emailparts[8];
  $("a").click(function(){
    if ($(this).attr("id") == "symmetric") { 
      preloadImages(["images/symmetric/0.svg",
      "images/symmetric/1.svg",
      "images/symmetric/2.svg",
      "images/symmetric/3.svg",
      "images/symmetric/4.svg",
      "images/symmetric/5.svg",
      "images/symmetric/6.svg",
      "images/symmetric/7.svg",
      "images/symmetric/8.svg",
      "images/symmetric/9.svg",
      "images/menu.svg"], symmetric); }        // кешируем изображения и запускаем соответствующий раздел при клике

    if ($(this).attr("id") == "aes") { 
      preloadImages(["images/aes/0.svg",
      "images/aes/1.svg",
      "images/aes/2.svg",
      "images/aes/3.svg",
      "images/aes/4.svg",
      "images/aes/5.svg",
      "images/aes/6.svg",
      "images/aes/7.svg",
      "images/aes/8.svg",
      "images/aes/9.svg",
      "images/aes/10.svg",
      "images/aes/11.svg",
      "images/aes/12.svg",
      "images/aes/13.svg",
      "images/menu.svg"], aes); }          // кешируем изображения и запускаем соответствующий раздел при клике

    if ($(this).attr("id") == "asymmetric") { 
      preloadImages(["images/asymmetric/0.svg",
      "images/asymmetric/1.svg",
      "images/asymmetric/2.svg",
      "images/asymmetric/3.svg",
      "images/asymmetric/4.svg",
      "images/asymmetric/5.svg",
      "images/menu.svg"], asymmetric); }          // кешируем изображения и запускаем соответствующий раздел при клике

    if ($(this).attr("id") == "dh") { 
      preloadImages(["images/dh/0.svg",
      "images/dh/1.svg",
      "images/dh/2.svg",
      "images/dh/3.svg",
      "images/dh/4.svg",
      "images/menu.svg"], dh); }          // кешируем изображения и запускаем соответствующий раздел при клике

    if ($(this).attr("id") == "rsa_enc") { 
      preloadImages(["images/rsa_enc/0.svg",
      "images/rsa_enc/1.svg",
      "images/rsa_enc/2.svg",
      "images/rsa_enc/3.svg",
      "images/rsa_enc/4.svg",
      "images/rsa_enc/5.svg",
      "images/menu.svg"], rsa_enc); }

    if ($(this).attr("id") == "signature") { 
      preloadImages(["images/signature/0.svg",
      "images/signature/1.svg",
      "images/signature/2.svg",
      "images/signature/3.svg",
      "images/signature/4.svg",
      "images/signature/5.svg",
      "images/menu.svg"], signature); }

    if ($(this).attr("id") == "rsa_sig") { 
      preloadImages(["images/rsa_sig/0.svg",
      "images/rsa_sig/1.svg",
      "images/menu.svg"], rsa_sig); }

    if ($(this).attr("id") == "dsa") { 
      preloadImages(["images/dsa/0.svg",
      "images/dsa/1.svg",
      "images/dsa/2.svg",
      "images/dsa/3.svg",
      "images/menu.svg"], dsa); }

    if ($(this).attr("id") == "email") { 
      this.href=this.href.replace(/aat/,'@').replace(/doot/,'.').replace(/q/,'')}
  });
};
