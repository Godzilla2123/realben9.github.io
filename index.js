var query = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
for (let i = 0; i < query.length; i++) {
	if (query[i] == "key=123456b420f928b7690d8f3eae31bfadbfeea5f4d39ab10f") {
		window.addEventListener('load', function () {
			var element;
			element = document.getElementById("key");
			if (element) {
				element.innerHTML = "</keything><h1> You found it! </h1><p> <a href='ccsc/meme/v42069'>Cookie Clicker Meme v4.2069</a> </p><p> (This is a reference to <i>Welcome to the Game</i>) </p><p> [v1.0.1-2 | Last Updated 16-05-2022] </p><p style='text-align:right'> <a href='key2.html'>6 - 101000111011001011000001</a> </p><keything>";
			}
		})
	}
}