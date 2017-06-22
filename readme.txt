App1 
Aplikacja napisana w java script (nodejs). Odpowiada za "wyklikiwanie" test�w.
Testy mo�na by przeprowadzi� r�cznie, ale aplikacja uczyni to szybciej i precyzyjniej.
W aplikacji komunikuje si� ze sterownikiem - selenium-webdriver , by za jego pomoc� wydawa� 
polecenia wykonywania okreslonych akcji w przegladarce (np wpisanie w pole tekstowe ci�gu "1000"
po czym klikniecie przycisku add, potem clear, add, clear itd). Dodatkowo korzystam z mechanizmu
obietnic (promises), gdy� komunikacja ze sterownikiem przebiega w sposob asynchroniczny. 
Rezultaty w postaci log�w zapisuj� do plik�w w folderze traces (dzi�ki narz�dziu  chrome://tracing )

*uruchamianie:
program nalezy uruchamiac bedac w katalgou nadrz�dnym (przy czym musi dzia�a� serwer 
na porcie 8080 poprzez ktory jest dostep do aplikacji testwoych)
node app1/benchmark-runner.js

*konfiguracja:
w pliku names/names.js uprzednio podajemy nazwy testowanych operacji oraz frameworki 
do badania; mozna testowac calo�� lub wybi�rczo

plik util.js zawiera obiekt util.config:
	TEST_COUNT - tzn ile pr�bek dla kazdego rodzaju testu zebrac, domylsnie 4 
	TIMEOUT - ile czasu maksymalnie moze trwac pojedyncza operacja testowa - po tym czasie 
	testy zostaja przerwane (co� posz�o nie tak) - domyslnie 5 sekund; 
	WARMUP_ITERATIONS - ile powt�rek danego testu nalezy zrobic aby pobrac wlasciw� pr�bk� 
	(bez uprzednioego 'rozgrzania' silnika jsavascript, wyniki s� s�absze); domyslnie 4

rezultat dzialania: 
w katalogu nadrz�dnycm w folderze 'traces' zapisywane s� wykresy czasowe dla poszczegolnych 
operacji. Wykresy (czyli logi) s� dopisywane do juz isnitejaych, tak wiec wyniki mozna zebrac 
w przeciagu kilku dni aby osiagnac dokladniejsze pomiary (st�d domyslnie tak niska wartosc TEST_COUNT).