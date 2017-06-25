Mgr-App1 
===============

[powrót](https://github.com/krzysiekdz/mgr-main)

## 1.
Aplikacja napisana w javascript (platforma nodejs). Odpowiada za "wyklikiwanie" testów. 
- Program komunikuje się ze sterownikiem - [selenium-webdriver](http://seleniumhq.github.io/selenium/docs/api/javascript/index.html) (wersja dla chrome), by za jego pomocą wydawać polecenia wykonywania okreslonych akcji w przegladarce (np wpisanie w pole tekstowe ciągu "1000", po czym kliknięcie przycisku "add" - dodanie elementów). 
- Komunikacja ze sterownikiem przebiega asynchronicznie - wykorzystuję w tym celu mechanizm obietnic ([promises] (http://exploringjs.com/es6/ch_promises.html)).
- W odpowiedzi sterownik selenium-webdriver przesyła logi (wykresy czasowe trwania operacji), uzyskiwane poprzez aktywację w sterowniku mechanizmu logowania ([chrome-tracing](https://www.chromium.org/developers/how-tos/trace-event-profiling-tool))
- Rezultaty w postaci wykresów  zapisuję w folderze "traces". 

*uruchamianie:
program nalezy uruchamiac bedac w katalgou nadrzêdnym (przy czym musi dzia³aæ serwer 
na porcie 8080 poprzez ktory jest dostep do aplikacji testwoych)
node app1/benchmark-runner.js

*konfiguracja:
w pliku names/names.js uprzednio podajemy nazwy testowanych operacji oraz frameworki 
do badania; mozna testowac caloœæ lub wybiórczo

plik util.js zawiera obiekt util.config:
	TEST_COUNT - tzn ile próbek dla kazdego rodzaju testu zebrac, domylsnie 4 
	TIMEOUT - ile czasu maksymalnie moze trwac pojedyncza operacja testowa - po tym czasie 
	testy zostaja przerwane (coœ posz³o nie tak) - domyslnie 5 sekund; 
	WARMUP_ITERATIONS - ile powtórek danego testu nalezy zrobic aby pobrac wlasciw¹ próbkê 
	(bez uprzednioego 'rozgrzania' silnika jsavascript, wyniki s¹ s³absze); domyslnie 4

rezultat dzialania: 
w katalogu nadrzêdnycm w folderze 'traces' zapisywane s¹ wykresy czasowe dla poszczegolnych 
operacji. Wykresy (czyli logi) s¹ dopisywane do juz isnitejaych, tak wiec wyniki mozna zebrac 
w przeciagu kilku dni aby osiagnac dokladniejsze pomiary (st¹d domyslnie tak niska wartosc TEST_COUNT).