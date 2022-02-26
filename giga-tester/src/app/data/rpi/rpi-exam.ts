import {ClosedQuestion} from "../../questions/closed-question.model";

export class RpiExam {
  public static closedQuestions: ClosedQuestion[] = [
    new ClosedQuestion(`
Zgodnie z manifestem zwinnego tworzenia oprogramowania bardziej cenione jest
reagowanie na zmiany ponad:
`, [`
jakosc produktu
`, `
podążanie za planem
`, `
obszerną dokumentację
`, `
koszt projektu
`], 1),
    new ClosedQuestion(`
Angielski odpowiednik pojecia "scenariusz" stosowanego w zwinnym
specyfikowaniu wymagan to:
`, [`
user story
`, `
scenario
`, `
epic
`, `
use case
`], 2),
    new ClosedQuestion(`
Plan iteracji w metodyce RUP jest opracowywany w fazie:
`, [`
construction
`, `
transition
`, `
kazdej
`, `
inception
`, `
elaboration
`], 2),
    new ClosedQuestion(`
Analiza sprintu pod kątem możliwosci poprawy procesu, technik i narzędzi to zdarzenie Scrum:
`, [`
planowanie sprintu
`, `
przeglad sprintu
`, `
codzienny Scrum
`, `
retrospekcja sprintu
`], 3),
    new ClosedQuestion(`
W metodyce RUP produkt dostarczany jest do uzytkownika w fazie:
`, [`
construction
`, `
kazdej
`, `
transition
`, `
elaboration
`], 2),
    new ClosedQuestion(`
Za prowadzenie Rejestru Produktu odpowiada:
`, [`
zespol Scrum
`, `
mistrz Scrum
`, `
zespol deweloperski
`, `
wlasciciel produktu
`], 3),
    new ClosedQuestion(`
Kierownik projektu w metodyce RUP odpowiada za:
`, [`
model przypadkow uzycia
`, `
analizę zagrożeń i rejestr ryzyka
`, `
pozyskiwanie wymagan
`, `
wdrozenie produktu
`], 1),
    new ClosedQuestion(`
Pojemnosc zespolu (ang. team capacity) w metodyce Scrum definiuje sie jako:
`, [`
łączna liczba godzin zespolu dostepna w sprincie
`, `
łączna liczba osob dostepna w sprincie
`, `
liczba story points zaimplementowana w sprincie
`, `
łączna liczba story points cech produktu
`], 0),
    new ClosedQuestion(`
Faza metodyki RUP najbardziej podobna do procesu w metodyce Scrum to:
`, [`
elaboration
`, `
transition
`, `
inception
`, `
construction
`], 3),
    new ClosedQuestion(`
Postułatem ruchu zwinnego (ang. agile movement) jest:
`, [`
ludzie ponad procesy i narzedzia
`, `
nalezy trzymac sie scisle planow
`, `
wymagania powinny byc niezmienione
`, `
modele sa nieprzydatne
`], 0),
    new ClosedQuestion(`
Klient lub uzytkownik biora udzial w projekcie w nastepujacych fazach RUP:
`, [`
tylko Inception
`, `
we wszystkich fazach
`, `
tylko Inception i Elaboration
`, `
tylko Transition
`], 1),
    new ClosedQuestion(`
Scenariusz w metodyce Scrum to:
`, [`
przypadek użycia
`, `
opis użytkowania systemu od problemu do rozwiązania
`, `
funkcja systemu
`, `
inaczej "user story"
`], 1),
    new ClosedQuestion(`
W product backlog w Scrum funkcje produktu szacowane sa w:
`, [`
godzinach
`, `
dniach
`, `
osobomiesiacach
`, `
story points
`], 3),
    new ClosedQuestion(`
Kolejnosc i sposob integracji systemu w RUP opisuje:
`, [`
model implementacyjny
`, `
plan integracji
`, `
projektowy diagram klas
`, `
plan iteracji
`], 1),
    new ClosedQuestion(`
Codzienne spotkanie Scrum powinno:
`, [`
odbywac sie na stojaco i być krótkie
`, `
slużyć rozwiazywaniu szczegółowych problemow
`, `
odbywać się zawsze na poczatku dnia pracy
`, `
angażować własciciela produktu
`], 0),
    new ClosedQuestion(`
Plan integracji w RUPie zawiera się w:
`, [`
planie wytwarzania oprogramowania
`, `
planie iteracji
`, `
planie wdrozenia
`, `
procesie wytworczym
`], 0),
    new ClosedQuestion(`
Współwłasność kodu w eXtreme Programming oznacza, że:
`, [`
nie jest istotny autor np. klasy
`, `
zmiany wprowadza jedynie autor np. klasy
`, `
zmiany wprowadza dowolny członek zespołu
`, `
zmiany muszą być zatwierdzone przez autora np. klasy
`], 2),
    new ClosedQuestion(`
Celem fazy Construction RUP jest:
`, [`
opracowanie architektury oprogramowania
`, `
ukonczenie wytwarzania wszystkich funkcji
`, `
wdrozenie produktu w srodowisku uzytkownika
`, `
akceptacja produktu przez uzytkownika
`], 1),
    new ClosedQuestion(`
Głowną pracą Programistów w fazie Transition RUP jest:
`, [`
programowanie klas
`, `
testowanie jednostkowe
`, `
poprawianie bledow
`, `
projektowanie klas
`], 2),
    new ClosedQuestion(`
Kultura pracy w metodykach sterowanych planem charakteryzuje sie:
`, [`
jasnymi zasadami i procedurami
`, `
duzym zaufaniem osob do siebie
`, `
nastrojem chaosu i rewolucji
`, `
duza swoboda tworcza
`], 0),
    new ClosedQuestion(`
Celem fazy Inception jest:
`, [`
określenie głównych scenariuszy i przypadków użycia
`, `
przygotowanie planu iteracji
`, `
opracowanie architektury oprogramowania
`, `
przygotowanie srodowiska dla iteracji
`], 0),
    new ClosedQuestion(`
Metodyki zwinne nie sa przeznaczone do stosowania w projektach:
`, [`
małych
`, `
w ktorych zespół pracuje w jednym miejscu
`, `
możliwy jest bezpośredni kontakt z użytkownikiem
`, `
zwiazanych z bezpieczenstwem
`], 3),
    new ClosedQuestion(`
Dyscypliną w RUP nie jest:
`, [`
wymagania
`, `
implementacja
`, `
zarzadzanie projektem
`, `
marketing produktu
`], 3),
    new ClosedQuestion(`
Product backlog w Scrum zawiera:
`, [`
zadania zespolu Scrum
`, `
funkcje i cechy calego produktu
`, `
harmonogram pracy w calym sprincie
`, `
funkcje i cechy czesci produktu
`], 1),
    new ClosedQuestion(`
Która kolejność podczas sprintu jest poprawna:
`, [`
planowanie nastepnego sprintu -> przeglad sprintu -> retrospektywa sprintu
`, `
planowanie nastepnego sprintu -> retrospektywa sprintu -> przeglad sprintu
`, `
przeglad sprintu -> planowanie nastepnego sprintu -> retrospektywa sprintu
`, `
przeglad sprintu -> retrospektywa sprintu -> planowanie nastepnego sprintu
`, `
retrospektywa sprintu -> planowanie nastepnego sprintu -> przeglad sprintu
`, `
retrospektywa sprintu -> przeglad sprintu -> planowanie nastepnego sprintu
`], 3),
    new ClosedQuestion(`
Statyczna strukture oprogramowania w RUP opisuje:
`, [`
diagram sekwencji
`, `
diagram wspolpracy
`, `
diagram klas
`, `
model danych
`], 2),
    new ClosedQuestion(`
Sprint w metodyce Scrum konczy sie, gdy:
`, [`
zostana wykonane zadania ze sprint backlog
`, `
zostana zaimplementowane wszystkie funkcje ze sprint backlog
`, `
tak zadecyduje Mistrz Scrum
`, `
uplynie czas przewidziany na sprint
`], 3),
    new ClosedQuestion(`
Celem refaktoryzacji w eXtreme Programming nie jest:
`, [`
uproszczenie projektu
`, `
usuniecie "złych zapachów"
`, `
rozbudowa produktu
`, `
podniesienie jakosci kodu
`], 2),
    new ClosedQuestion(`
Nowe wymagania pojawiajace sie w fazie Construction RUP:
`, [`
sa odrzucane
`, `
sa akceptowane
`, `
przechodza przez proces zarzadzania zmianami
`, `
sa przenoszone do fazy Transition
`], 2),
    new ClosedQuestion(`
Materialy wspomagajace dla uzytkownikow w fazie Transition RUP przygotowuje:
`, [`
kierownik wdrozenia
`, `
redaktor techniczny
`, `
kierownik konfiguracji
`, `
grafik
`], 1),
    new ClosedQuestion(`
Celem metodyk pelnych (sterowanych planem) jest:
`, [`
szybka reakcja na zmiany
`, `
szybkie dostarczenie wartosci klientowi
`, `
przewidywalnosc procesu
`, `
uwolnienie potencjalu tworczego zespolu
`], 2),
    new ClosedQuestion(`
Priorytety w funkcji produktu w Scrum oznaczaja:
`, [`
trudnosc w implementacji
`, `
wartosc biznesowa
`, `
kolejnosc implementacji
`, `
w ktorym sprincie funkcja bedzie implementowana
`], 1),
    new ClosedQuestion(`
Story points w metodyce Scrum to:
`, [`
miara rozmiaru kodu produktu
`, `
miara czasu wytwarzania produktu
`, `
miara ilosci funkcji produktu
`, `
miara złożoności funkcji produktu
`], 3),
    new ClosedQuestion(`
Prace projektowe w fazie Elaboration RUP prowadzone sa na podstawie:
`, [`
wszystkich przypadkow uzycia
`, `
wybranych przypadkow uzycia
`, `
przypadkow testowych
`, `
modeli biznesowych
`], 1),
    new ClosedQuestion(`
Zadania czlonkom zespolu Scrum przydziela:
`, [`
czlonek zespolu sam sobie
`, `
kierownik projektu
`, `
Mistrz Scrum
`, `
wlasciciel produktu
`], 0),
    new ClosedQuestion(`
Zadania nieimplementowane w danym sprincie Scrum:
`, [`
wracaja do product backlog
`, `
przechodza automatycznie do nastepnego sprintu
`, `
wypadaja z zakresu projektu
`, `
przechodza do ostatniego sprintu
`], 0),
    new ClosedQuestion(`
Artefaktem, ktory nie powstaje w fazie Transition RUP jest:
`, [`
pakiet produktu
`, `
model implementacyjny
`, `
informacje o wydaniu
`, `
materialy instalacyjne
`], 1),
    new ClosedQuestion(`
Metodyki lekkie znajduja zastosowanie, gdy wymagania:
`, [`
pochodza od bardzo wielu udzialowcow
`, `
sa malo podzielne
`, `
szybko sie zmieniaja
`, `
sa stabilne
`], 2),
    new ClosedQuestion(`
Priorytety w Scrumie okresla:
`, [`
wlasciciel produktu
`, `
Mistrz Scrum
`, `
kierownik projektu
`, `
inzynier procesu
`], 0),
    new ClosedQuestion(`
Przyrost:
`, [`
jest suma elementow zakonczonych podczas wszystkich sprintow (nie aktualne)
`, `
jest roznica miedzy elementami zakonczonymi z danego sprintu i poprzedniego
`, `
nie musi byc ukonczony jesli wlasciciel produktu nie zdecyduje sie go wydac
`, `
jest suma wszystkich elementow rejestru produktu
`], 0),
    new ClosedQuestion(`
Codzienny Scrum:
`, [`
ang. Everyday Scrum
`, `
kierownik projektu przedstawia jak projekt sie zmienil od poprzedniego dnia i
wyznacza zadania czlonkom grupy
`, `
kazdy sam przedstawia co zrobil i co chce zrobic danego dnia
`, `
zawsze ma miejsce na poczatku dnia
`], 2),
    new ClosedQuestion(`
Scenariusz:
`, [`
opisuje prace z systemem z punktu widzenia uzytkownika
`, `
opisuje prace nad systemem z punktu widzenia programisty
`, `
opisuje jedna funkcje systemu w zyciu codziennym
`, `
lepiej miec wiele drobnych scenariuszy, gdyz ulatwia do ich stopniowe spelnianie
`], 0),
    new ClosedQuestion(`
Rola kierownika projektu w RUP nie jest:
`, [`
przygotowanie planu iteracji
`, `
ocenianie wykonanej iteracji
`, `
zamykanie budzetu
`, `
czuwanie nad przebiegiem procesu RUP
`], 3),
    new ClosedQuestion(`
Rola kierownika wdrozenia nie jest:
`, [`
przygotowanie planu wdrozenia
`, `
opracowanie opisu zawartosci zestawu wdrozeniowego
`, `
kierowanie zestawu wdrozeniowego do produkcji
`, `
przygotowanie zestawu wdrozeniowego
`], 3),
    new ClosedQuestion(`
Ktory poziom priorytetu w Scrumie jest nieprawdziwy:
`, [`
kluczowy
`, `
przydatny
`, `
dodatkowy
`, `
calosciowy
`], 3),
    new ClosedQuestion(`
Story Points:
`, [`
wystepuja w RUPie
`, `
najczesciej szacuje sie je w skali Seigela
`, `
najczesciej szacuje sie je w skali Mohra
`, `
sa miara trudnosci jednostki produktu
`], 3),
    new ClosedQuestion(`
W Product Backlog jednostka produktu nie moze reprezentowac:
`, [`
wymagania
`, `
historyjki
`, `
zadania
`, `
bledu
`, `
testu
`], 4),
    new ClosedQuestion(`
Wpis w sprint backlog jest oszacowany w:
`, [`
godzinach
`, `
story points
`, `
dniach
`, `
tygodniach
`], 0),
    new ClosedQuestion(`
Priorytety jednostek produktu w product backlog sluża do:
`, [`
sterowania kolejnoscia wytwarzania jednostek produktu
`, `
okreslenia zlozonosci jednostek produktu
`, `
szacowania liczby sprintow projektu
`, `
podzialu zadan w Zespole Scrum
`], 0),
    new ClosedQuestion(`
Metodyka RUP stosowana jest:
`, [`
tylko w calosci
`, `
tylko w duzych projektach
`, `
zawsze przycieta do potrzeb projektu
`, `
w projektach zwinnych
`], 2),
    new ClosedQuestion(`
Szczegolowa dokumentacja produktu w metodykach zwinnych znajduje sie glownie w:
`, [`
mailach
`, `
kodzie produktu
`, `
modelach
`, `
sprint backlog
`, `
dedykowanym katalogu na dokumentacje
`], 1),
    new ClosedQuestion(`
Glowna roznica miedzy metodyka RUP a Scrum to:
`, [`
projektowanie architektury
`, `
iteracyjnosc
`, `
automatyczne testowanie
`, `
standardy pisania kodu
`], 0),
    new ClosedQuestion(`
W ktorym spotkaniu w metodyce Scrum nie uczestniczy Wlasciciel produktu:
`, [`
spotkanie planowania sprintu
`, `
spotkanie przegladu sprintu
`, `
wydanie produktu
`, `
codzienny Scrum
`, `
spotkanie retrospektywy sprintu
`], 3),
    new ClosedQuestion(`
W ktorej fazie jest przygotowanie planu integracji?
`, [`
Transition
`, `
Inception
`, `
Elaboration
`, `
Construction
`], 3),
    new ClosedQuestion(`
Kierownik projektu w RUPie opracowuje:
`, [`
harmonogram
`, `
przypadki uzycia
`, `
plan integracji
`, `
model procesu
`], 0),
    new ClosedQuestion(`
Korzyscia ze stosowania metodyk zwinnych jest:
`, [`
zwiekszenie niezawodnosci produktu
`, `
obnizenie kosztow wytwarzania produktu
`, `
obnizenie kosztow utrzymania produktu
`, `
zwiekszenie wydajnosci produktu
`], 1),
    new ClosedQuestion(`
Faza Inception RUP sluzy obnizeniu ryzyka:
`, [`
niskiej jakosci systemu
`, `
niskiej wydajnosci systemu
`, `
niewlasciwego zakresu systemu
`, `
niewydolnej architektury systemu
`], 2),
    new ClosedQuestion(`
Faza Elaboration RUP sluzy obnizeniu ryzyka:
`, [`
niskiej jakosci systemu
`, `
niskiej wydajnosci systemu
`, `
niewlasciwego zakresu systemu
`, `
niewydolnej architektury systemu
`], 3),
    new ClosedQuestion(`
Funkcjonalnosc produktu w metodyce Scrum nie jest specyfikowana przez:
`, [`
story points
`, `
scenariusze
`, `
user stories
`, `
cechy (ang. features)
`], 0)
  ];

}
