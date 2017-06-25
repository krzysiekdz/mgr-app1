Mgr-App1 
===============

[powrót](https://github.com/krzysiekdz/mgr-main)

Aplikacja napisana w javascript (platforma nodejs). Odpowiada za "wyklikiwanie" testów. 
- Program komunikuje się ze sterownikiem - [selenium-webdriver](http://seleniumhq.github.io/selenium/docs/api/javascript/index.html) (wersja dla chrome), by za jego pomocą wydawać polecenia wykonywania okreslonych akcji w przegladarce (np wpisanie w pole tekstowe ciągu "1000", po czym kliknięcie przycisku "add" - dodanie elementów). 
- Komunikacja ze sterownikiem przebiega asynchronicznie - wykorzystuję w tym celu mechanizm obietnic ([promises](http://exploringjs.com/es6/ch_promises.html)).
- W odpowiedzi sterownik selenium-webdriver przesyła logi (wykresy czasowe trwania operacji), uzyskiwane poprzez aktywowanie w sterowniku mechanizmu logowania ([chrome-tracing](https://www.chromium.org/developers/how-tos/trace-event-profiling-tool)).
- Rezultaty - logi (wykresy) zapisuję w folderze "traces" dla każdego frameworka i dla każdej operacji jako oddzielny plik. Każdorazowe uruchomienie programu powoduje dopisanie logów do już istniejących (kilka uruchomień daje wiarygodniejsze rezultaty).

Konfiguracja: <br>
- W pliku "names/names.js" podajemy nazwy testowanych operacji oraz frameworki. 
- Plik util.js zawiera obiekt util.config:
	- TEST_COUNT - liczba próbek dla kazdego rodzaju testu (domylsnie 4)
	- TIMEOUT - maksymalny czas trwania pojedynczej operacji testowej - po tym czasie testy są przerywane (coś poszło nie tak); domyslnie 5 sekund
	- WARMUP_ITERATIONS - liczba powtórek przed zebraniem własciwej próbki badawczej ("rozgrzewanie" silnika javascript)

Uruchamianie: <br>
Program uruchamiac bedac w katalgou nadrzędnym poleceniem : <br>
node app1/benchmark-runner.js
Przy czym musi działać serwer na porcie 8080, przez który program ma dostęp do aplikacji testowych.

