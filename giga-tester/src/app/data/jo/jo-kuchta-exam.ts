import {OpenQuestion} from "../../questions/open-question.model";
import {ClosedQuestion} from "../../questions/closed-question.model";

export class JoKuchtaExam {
  public static closedQuestions: ClosedQuestion[] = [
    new ClosedQuestion(`
Czego uczą nas wypadki z Therac-25 w latach 1980 w USA i Kanadzie?
`,
      [`
Przyczyną awarii jest często splot wielu nieprzewidywalnych czynników.
`, `
Dobre szkolenie personelu może zapobiec awariom systemu.
`, `
Dla zapewnienia bezawaryjnej pracy trzeba dokładnie testować oprogramowanie w środowisku docelowym.
`, `
Przyczyną każdej usterki w oprogramowaniu jest błąd programisty.
`], 0),
    new ClosedQuestion(`
Metoda Saaty'ego najlepiej się sprawdza:
`,
      [`
tam, gdzie nie mamy jednego wzorca jakości.
`, `
tam, gdzie liczba ocenianych rozwiązań jest duża.
`, `
tam, gdzie musimy zastosować miary obiektowe.
`, `
tam, gdzie liczba ocenianych cech jest duża.
`], 0),
    new ClosedQuestion(`
We wzorze na poprawność implementacji Pi=1-A/B liczba w mianowniku (B) oznacza:
`,
      [`
liczbę zaimplementowanych wymagań
`, `
liczbę poprawnie zaimplementowanych wymagań.
`, `
liczbę wszystkich wymagań.
`, `
liczbę niepoprawnie zaimplementowanych wymagań.
`], 0),
    new ClosedQuestion(`
Czym różni się konfigurowalność od modyfikacji systemu oprogramowania?
`,
      [`
konfigurowalność określa łatwość zmiany funkcjonalności systemu, a modyfikowalność łatwość zmiany wyglądu systemu
`, `
wszystkim, konfigurowalność i modyfikowalność to dwa zupełnie różne pojęcia.
`, `
modyfikowalność określa łatwośćzmiany funkcjonalności systemu, a konfigurowalność łatwość zmiany wyglądu systemu.
`, `
niczym, konfigurowalność i modyfikowalność to właściwie to samo.
`], 0),
    new ClosedQuestion(`
Wykrywanie i usuwanie błędów we wcześniejszych fazach wytwarzania oprogramowania jest bardziej opłacalne przede wszystkim ze względu na:
`,
      [`
zmniejszenie liczby błędów wywoływanych w kolejnych fazach.
`, `
zmniejszenie współczynnika wzmocnienia liczby błędów.
`, `
niższy koszt.
`, `
konieczność zapewnienia łatwości utrzymania oprogramowania.
`], 0),
    new ClosedQuestion(`
Poziom dojrzałości w CMM, dla którego standard jakości jest optymalizowany, to poziom:
`,
      [`
5
`, `
4
`, `
2
`, `
3
`], 0),
    new ClosedQuestion(`
System jakości ISO 9001 zapewnia przede wszystkim:
`,
      [`
zwiększenie zaufania klientów do produktów lub usług przedsiębiorstwa.
`, `
zauważalne podniesienie jakości produktów lub usług przedsiębiorstwa.
`, `
zwiększenie udziału przedsiębiorstwa w rynku.
`, `
poprawę organizacji pracy w przedsiębiorstwie.
`], 0)

  ];

  public static openQuestions: OpenQuestion[] = [
    new OpenQuestion(`
Co mierzą punkty funkcyjne i czym się różnią od punktów funkcjonalnych?
`, `
Punkty funkcyjne służą do pomiaru złożoności fukcjonalności oprogramowania. Brane pod uwagę są m.in. liczba wejść/wyjść od użytkownika czy liczba plików i interfejsów zewnętrznych. Punkty funkcjonalne to nowsza wersja, w której m.in. dodana jest jeszcze liczba algorytmów.
`),
    new OpenQuestion(`
Dany jest internetowy system udostępniania zdjęć z wakacji oraz model jakości składający się z: funkcjonalności, wydajności, wiarygodności, elastyczności i użyteczności. Jaka cecha jakościowa powinna mieć najwyższą wagę? Odpowiedź uzasadnij.
`, `
Najważniejsza w tym przypadku jest wiarygodność. Posiada ona takie cechy jak ochrona, która jest istotna w przypadku danych osobowych/wrażliwych.
`),
    new OpenQuestion(`
Jaka jest główna aktywność SQA i kto ją przeprowadza?
`, `
Głównym celem SQA jest zapewnienie jakości oprogramowania poprzez aktywności, z których można wyróżnić przeprowadzanie formalnych przeglądów technicznych. SQA jest przeprowadzane przez grupę SQA złożoną z pracowników, kierowników, klientów itp.
`),
    new OpenQuestion(`
Jaka jest przewaga GQM nad tradycyjnymi metodami oceny jakości? Uzasadnij odpowiedź.
`, `
W procesie inspekcji można znaleźć więcej błędów, bo więcej czasu się na niego poświęca. Można też wyróżnić zaoszczędzony koszt i czas czy wzrost satysfakcji klientów.
`),
    new OpenQuestion(`
Na czym polega subiektywność oceny jakości? Wymień pięc czynników, w których ocena podlega subiektywności osób oceniających.
`, `
Subiektywność oceny jakości polega na ocenie danego czynnika na podstawie własnych kryteriów, przemyśleń, odczuć, jak i na stosowaniu metod które nie dają metryki, która umożliwiałaby porównywanie w skali globalnej.
Czynniki subiektywne:
-łatwość śledzenia
-odporność na błędy
-efektywność wykonania
-łatwość nauki
-prostota
`),
    new OpenQuestion(`
Jakie praktyki w metodykach zwinnych powinno się stosować do zapewnienia jakości oprogramowania? Wymień pięć praktyk i wyjaśnij ich wpływ na jakość.
`, `
-refaktoryzacja
-kontrola jakości, przeglądy
-kultura DevOps - ciągła integracja, testy automatyczne, szybka dostawa do klienta
-kontakt z klientem - klient w zasadzie jest wręcz częściązespołu, komunikacja jest stała codzienna, zespół jest gotowy (mindsetowo i technicznie) na szybkie zmiany ze strony klienta
-atmosfera w zespole i środowisko organizacyjne powinno wspierać pozytywne nastawienie zespołu
-proces zarządzania projektami
`)
  ];

  public static customClosedQuestions: ClosedQuestion[] = [
    new ClosedQuestion(`
Czego uczy nas wypadek sondy marsjańskiej Mars Orbiter?
`,
      [`
Przyczyną awarii jest często splot wielu nieprzewidywalnych czynników.
`, `
Rzeczy oczywiste nie zawsze są tym samym pomiędzy stronami.
`, `
Dla zapewnienia bezawaryjnej pracy trzeba dokładnie testować oprogramowanie w środowisku docelowym.
`, `
Przyczyną każdej usterki w oprogramowaniu jest błąd programisty.
`], 1),
    new ClosedQuestion(`
Jaka jest różnica między atrybutami a metrykami?
`,[`
Atrybuty są cechami jakościowymi produktu, świadczą o jego wartości dla użytkownika, a metryki są cechami ilościowymi produktu, określają sposób oceny poszczególnych.
`, `
Metryki są cechami jakościowymi produktu, świadczą o jego wartości dla użytkownika, a atrybuty są cechami ilościowymi produktu, określają sposób oceny poszczególnych.
`, `
Metryki i atrybuty to w zasadzie to samo.
`, `
Metryki i atrybuty nie są ze sobą powiązane.
`], 0),
    /**
     --------------------------------------------------------------------------------
     */
    new ClosedQuestion(`
Który z poniższych NIE jest metryką jakości?
`,[`
Ochrona
`, `
Łatwość nauki
`, `
Elaastyczność
`, `
Spójność
`], 2),new ClosedQuestion(`
Do jakiego atrybutu należą metryki stabilność i skalowalność?
`,[`
Wydajność
`, `
Funkcjonalność
`, `
Wiarygodność
`, `
Satysfakcja
`], 0),new ClosedQuestion(`
Wskazać właściwą kolejność faz realizacji projektu.
`,[`
Planowanie, projektowanie, implementacja, testowanie, pielęgnacja
`, `
Planowanie, projektowanie, Implementacja, pielęgnacja, testowanie
`, `
Projektowanie, planowanie, testowanie, implementacja, pielęgnacja
`, `
Planowanie, projektowanie, testowanie, pielęgnacja, implementacja
`], 0),new ClosedQuestion(`
Która z poniższych nie jest polityką jakościową?
`,[`
QC - Quality Control
`, `
DQM - Dynamic Quality Management
`, `
SQA - Software Quality Assurance
`, `
TQM - Total Quality Management
`], 1),new ClosedQuestion(`
Co jest prawdą o  QC (Quality Control)?
`,[`
Niespełnienie wymagania jakościowego jest wykrywane na ostatnim etapie procesu
`, `
Projektowanie występuje zamiennie z analizą
`, `
Podejście QM uważa się za jedno z najbardziej efektywnych.
`, `
Artefakty projektowe kontroluje się po każdym etapie prac.
`], 3),new ClosedQuestion(`
Co NIE jest prawdą o SQA (Software Quality Assurance)?
`,[`
Działania SQA są kosztowne.
`, `
W każdej aktywności projektowej stosuje się odpowiednie procedury postępowania.
`, `
Działania nie są dokumentowane.
`, `
Jakość artefaktów zapewnia się również na wczesnych etapach.
`], 2),new ClosedQuestion(`
Kto NIE wchodzi w skład grupy SQA?
`,[`
Kierownicy
`, `
Klienci
`, `
Wszystkie odpowiedzi inne są niepoprawne
`, `
Inżynierowie
`], 2),new ClosedQuestion(`
Co NIE jest celem FTR (Formal Technical Review)?
`,[`
Sprawienie, by projekty były łatwiejsze w utrzymaniu.
`, `
Uzyskanie oprogramowania opracowanego w jednolity sposób.
`, `
Sprawdzenie zgodności przeglądanego oprogramowania z wymaganiami.
`, `
Ocena i rozliczenie wykonawców projektu pod kątem przeoczonych problemów.
`], 3),new ClosedQuestion(`
Która zasada należy do głównych zasad TQM?
`,[`
Ludzie, a nie procesy stanowią problem.
`, `
Poprawa jakości musi być zmienna.
`, `
Jakość może i musi być zarządzana.
`, `
Tylko kierownictwo jest odpowiedzialne za jakość.
`], 2),new ClosedQuestion(`
Wskazać zdanie prawdziwe dotyczące TQM:
`,[`
W fazie utrzymania przeprowadza się szkolenia i stale doskonali procesy projektowe i relacje z klientami.
`, `
W fazie implementacji konieczne jest przeglądanie projektów przez użytkowników.
`, `
W fazie testowania konieczne jest określenie potrzeb wszystkich użytkowników.
`, `
W fazie analizy konieczna jest ocena dokumentacji.
`], 0),new ClosedQuestion(`
Która odpowiedź zawiera jedynie kryteria jakości według modelu McCalla?
`,[`
Łatwość śledzenia, kompletność, spójność, dokładność
`, `
Odporność na błędy, prostota, modularność, poprawność
`, `
Łatwość współdziałania, łatwość nauki, samoopisowość
`, `
Zwartość, instrumentacja, ogólność, testowalność
`], 0),new ClosedQuestion(`
Który nie jest kategorią metryki w inżynierii oprogramowania?
`,[`
Metryki techniczne
`, `
Metryki jakości
`, `
Metryki produktywności
`, `
Metryki analityczne
`], 3),new ClosedQuestion(`
Jednostka KLOC dotyczy:
`,[`
Rozmiaru dokumentacji
`, `
Rozmiaru kodu
`, `
Rozmiaru listy defektów
`, `
Rozmiaru raportu dotyczącego defektów
`], 1),new ClosedQuestion(`
Która z metryk pośrednich dla metryk w IO zorientowanych na funkcje jest poprawna?
`,[`
produktywność = Punkt funkcyjny / pracochłonność
`, `
awaryjność = koszt / Punkt funkcyjny
`, `
kosztowność = Punkt funkcyjny / koszt
`, `
udokumentowanie = liczba defektów / Punkt funkcyjny
`], 0),new ClosedQuestion(`
Która z metryk jest metryką złożoności i jest metryką cyklometryczną?
`,[`
Metryka McCabe’a
`, `
Metryka Halsteada
`, `
Metryka Toldera
`, `
Metryka Barentsa
`], 0),new ClosedQuestion(`
Długość słownika w metryce Halsteada określa się jako:
`,[`
Sumę liczby różnych operatorów w programie oraz liczby różnych operandów w programie.
`, `
Całkowitą liczbę operatorów.
`, `
Sumę całkowitej liczby operatorów i operandów.
`, `
Iloczyn liczby różnych operatorów i całkowitej liczby operatorów.
`], 2),new ClosedQuestion(`
Wskazać odpowiednie połączenie metryki i jej roli/znaczenia.
`,[`
Metryka typu A/B - łatwość uczenia się funkcji
`, `
Metryka typu 1-A/B - łatwość uczenia się funkcji
`, `
Metryka typu A/T - łatwość uczenia się funkcji
`, `
Metryka typu A/T - dokładność oczekiwana
`], 3),new ClosedQuestion(`
Co oznacza T w przypadku metryki typu A/T?
`,[`
Czas badania.
`, `
Liczba przypadków, w których wyniki różniły się od oczekiwanych w stopniu nieakceptowalnym.
`, `
Wszystkie przypadki, bez względu na różnice od oczekiwanych.
`, `
Średni czas, jaki zajmuje użytkownikowi nauczenie się korzystania z funkcji programu.
`], 0),new ClosedQuestion(`
Który rodzaj metryki nie jest metryką jakości według ISO 9126?
`,[`
Metryka wewnętrzna
`, `
Metryka zewnętrzna
`, `
Metryka pośrednia
`, `
Metryka użycia
`], 2),new ClosedQuestion(`
Jakość użytkowa wg ISO 9126 jest rozpatrywana z punktu widzenia:
`,[`
Eksperta
`, `
Użytkownika
`, `
Kierownictwa
`, `
Programisty
`], 1),new ClosedQuestion(`
Co jest wadą ISO 9126?
`,[`
Reprezentuje różne punkty widzenia
`, `
Dzieli jakość na trzy poziomy
`, `
Definiuje konkretne miary
`, `
Wiele z miar jest trudnych do zebrania
`], 3),new ClosedQuestion(`
Wskazać poziomy dojrzałości w CMM:
`,[`
Inicjalny, powtarzalny, zdefiniowany, zarządzany, optymalizowany
`, `
Inicjalny, wykonywany, zarządzany, zdefiniowany, zarządzany ilościowo, optymalizowany
`, `
Inicjalny, zarządzany, zdefiniowany, zarządzany ilościowo, optymalizacyjny
`, `
Inicjalny, pośredni, zarządzany czasowo, zdefiniowany, optymalizowany
`], 0),new ClosedQuestion(`
Do którego poziomu dojrzałości w CMM należy obszar zarządzania wymaganiami i planowania projektu?
`,[`
2 (powtarzalny)
`, `
3 (zdefiniowany)
`, `
4 (zarządzany)
`, `
5 (optymalizowany)
`], 0),new ClosedQuestion(`
Która z reprezentacji występuje w CMMI?
`,[`
Stopniowa
`, `
Jednolita
`, `
Przerywana
`, `
Funkcjonalna
`], 0),new ClosedQuestion(`
Pojęcie wektora ważności dotyczy metody:
`,[`
GQM
`, `
Saaty’ego
`, `
Agile
`, `
Halsteada
`], 1),new ClosedQuestion(`
Które z poniższych stwierdzeń jest prawdą o metodzie Saaty’ego?
`,[`
Zaletą tej metody jest jest to, że łatwiej porównywać alternatywy parami.
`, `
Stosuje się ją głównie przy pomiarach, gdzie można zastosować skalę bezwzględną.
`, `
Relacja porównania jest przechodnia.
`, `
Skala ocen zawsze odpowiada skali intuicyjnej.
`], 0),new ClosedQuestion(`
Wskaż założenie, które NIE dotyczy Agile Programming.
`,[`
Najwyższym priorytetem jest zadowolenie klienta, które można zapewnić poprzez szybkie i ciągłe dostarczanie działającego oprogramowania.
`, `
Dopuszcza się zmiany wymagań nawet w późnym stadium projektu.
`, `
Potrzebna jest jak najczęstsza współpraca między przedstawicielami klienta i zespołem projektowym.
`, `
Poszukiwanie błędów i zwracanie uwagi na problemy następuje dopiero na końcowym etapie projektu.
`], 3),new ClosedQuestion(`
Warunkiem zapewnienia jakości w Agile Programming NIE jest:
`,[`
Codzienna współpraca z klientami.
`, `
Poddawanie wydań testom akceptacyjnym użytkowników.
`, `
Pisanie testów jedynie do kodu, który już istnieje.
`, `
Stosowanie odpowiednich standardów pracy inżynierskiej.
`], 2),new ClosedQuestion(`
Agile programming stosuje się najlepiej do:
`,[`
Projektów o wysokim poziomie ryzyka.
`, `
Złożonych projektów wymagających bardzo dużej precyzji.
`, `
Prostych aplikacji.
`, `
Wielomodułowych systemów krytycznych o bardzo złożonej strukturze działania.
`], 2)
    /**
     * --------------------------------------------------------------------------------
    * */
    ,new ClosedQuestion(`
 Poziom dojrzałości w CMM dla którego standard jakości jest inicjalny to poziom:
`,[`
1
`, `
2
`, `
3
`, `
4
`], 0),new ClosedQuestion(`
 Poziom dojrzałości w CMM dla którego standard jakości jest powtarzalny to poziom:
`,[`
1
`, `
2
`, `
3
`, `
4
`], 1),new ClosedQuestion(`
 Poziom dojrzałości w CMM dla którego standard jakości jest zdefiniowany to poziom:
`,[`
1
`, `
2
`, `
3
`, `
4
`], 2),new ClosedQuestion(`
 Poziom dojrzałości w CMM dla którego standard jakości jest zarządzany to poziom:
`,[`
1
`, `
2
`, `
3
`, `
4
`], 3)
  ];

  public static customOpenQuestions: OpenQuestion[] = [
    new OpenQuestion(`
 Co można powiedzieć o skali kosztów błędów?
`, `
⅓ błędów można by z łatwością uniknąć stosując odpowiednie normy jakości, 80% kosztów opracowania jest przeznaczonych na wykrywanie i usuwanie błędów a nie na samo tworzenie systemu. Stoi za tym złożoność oprogramowania (wpizdu kodu, rzędu 10^6 linii).
`),
    new OpenQuestion(`
Wymień 2 możliwe rozumowania pojęcia jakości i powiedz na czym polega różnica między nimi.
    `,`
-> Stopień w jakim system/komponent/proces/obiekt spełnia wyspecyfikowane wymagania;
-> Stopień w jakim system/komponent/proces/obiekt spełnia oczekiwania klienta lub użytkownika;
Różnica jest taka, że w pierwszej definicji mówimy o udokumentowanych wymaganiach. W drugiej natomiast, myślymy również o wymaganiach, które nie są udokumentowane, gdyż np.: były one dla klienta oczywiste. Bądź klientem nie był użytkownik systemu, tylko np.: dyrektor organizacji.
    `),
    new OpenQuestion(`
Wymień problemy związane z oceną jakości:
    `,`
Problemy z oceną jakości:
-> jakość jest pojęciem złożonym;
-> pomiar jest często subiektywny;
-> często brak punktu odniesienia;
-> problem z normalizacją wyniku pomiaru;
-> wagi mogą być arbitralnie ustalone;
-> problem z oceną wyniku;
    `),
    new OpenQuestion(`
O czym mówi zasada 1:10 i z czego wynika?
    `,`
Koszt wprowadzenia zmian w systemie rośnie 10x z każdą kolejną fazą rozwoju. Wynika to z tego że w każdej kolejnej fazie musimy wykonać o wiele więcej czynności. Przykładowo w fazie definiowania dokonujemy zmiany w jednym miejscu. W kolejnej fazie musimy uwzględnić tą zmianę jeszcze w innych miejscach, przykładowo: we wszystkich funkcjach odnoszących się do danego elementu uległego zmianie. W fazie utrzymywania dochodzą również koszty zaprzestania działania systemu w trakcie maintenance break (wyłączenie systemu w celu wprowadzenia jego nowej wersji).
    `),
    new OpenQuestion(`
Co to jest SQA? Wymień 5 aktywności SQA.
    `,`
SQA (Software Quality Assurance) - planowy i usystematyzowany zbiór akcji wymaganych dla zapewnienia jakości w oprogramowaniu.
Aktywności SQA: stosowanie metod technicznych; przeprowadzanie formalnych przeglądów technicznych (FTR); testowanie oprogramowania; wymuszanie standardów; kontrolowanie zmian; wykonywanie pomiarów; zapisywanie i raportowanie;
    `),
    new OpenQuestion(`
Co to jest FTR? Wymień jego cele i rodzaje.
    `,`
    FTR - Formal Technical Review, formalny przegląd techniczny;
Cele FTR:
- wykrycie błędów w funkcjach, logice lub implementacji oprogramowania;
- sprawdzenie czy przeglądane oprogramowanie jest zgodne z wymaganiami;
- upewnienie się, że reprezentacja oprogramowania jest zgodna z wcześniej zdefiniowanymi standardami;
- uzyskanie oprogramowania opracowanego w jednolity sposób;
- sprawienie by projekty były łatwiejsze w utrzymaniu;
Rodzaje FTR:
- przegląd (walkthrough) - przejrzenie treści dokumentu zgodnie z jego logicznym uporządkowaniem (np.: odczytanie dokumentu);
- inspekcje - przejrzenie dokumentu zgodnie z listą kontrolną;
    `),
    new OpenQuestion(`
Co to jest TQM? Wymień 5 zasad TQM.
    `,`
TQM - Total Quality Management - zbiór działań sprawiających, że każdy osobnik w firmie od dyrektora do sprzątaczki rozumie jakie są oczekiwania klientów tej organizacji i dąży do spełnienia tych oczekiwań;
Naczelne zasady TQM:
- jakość może i musi być zarządzana;
- każdy ma swojego klienta i swojego dostawcę;
- procesy, a nie ludzie stanowią problem;
- każdy pracownik jest odpowiedzialny za jakość;
- problemom trzeba zapobiegać, a nie tylko rozwiązywać;
- jakość musi być mierzona;
- poprawa jakości musi być stała;
- standard jakości jest wolny od defektów;
- cele są oparte o wymagania, a nie negocjowane;
- koszty są ukryte w całym cyklu życia, a nie tylko w wytwarzaniu;
- kierownictwo musi być zaangażowane i musi przewodzić;
- działania na rzecz poprawy jakości muszą być planowane i organizowane;
    `),/**
     ------------------------------------------------------------------------------------
     **/
    new OpenQuestion(`
Wymienić podstawowe atrybuty jakości.
    `,`
Funkcjonalność, wydajność, wiarygodność, satysfakcja, elastyczność.
    `), new OpenQuestion(`
Czym jest adekwatność i jakiego atrybutu dotyczy?
    `,`
Adekwatność to stopień dopasowania wykonywanych funkcji do ich specyfikacji. Dotyczy atrybutu funkcjonalności.
    `), new OpenQuestion(`
Podać różnicę pomiędzy metryką a miarą.
    `,`
Metryka to to, co się mierzy, a miara to sposób, w jaki się to mierzy.
    `), new OpenQuestion(`
Co jest lepsze pod względem kosztów wytwarzania i redukcji błędów: kontrola jakości przy testowaniu, czy kontrola jakości w całym procesie? Uzasadnij.
    `,`
Zdecydowanie lepsza jest kontrola jakości w całym procesie, ponieważ pozwala na redukcję błędów już na etapie analizy wymagań, projektowania i implementacji, dzięki czemu jest ich zdecydowanie mniej w trakcie testów.
    `), new OpenQuestion(`
Wymienić rodzaje formalnych przeglądów technicznych i wyjaśnić, czym się różnią.
    `,`
Przegląd - przejrzenie treści dokumentu zgodnie z jego logicznym uporządkowaniem
Inspekcja - przejrzenie dokumentu zgodnie z listą kontrolną
    `), new OpenQuestion(`
Co to jest TQM (Total Quality Management)?
    `,`
TQM to zbiór działań sprawiających, że członek organizacji rozumie, jakie są oczekiwania klientów tej organizacji i dąży do spełnienia ich oczekiwań. Procesy zarządzania jakością są zintegrowane z procesami zarządzania całą organizacją.
    `), new OpenQuestion(`
Wymienić pięć czynników jakości według modelu McCalla.
    `,`
Poprawność, wiarygodność, wydajność, integralność, użyteczność (dodatkowo łatwość pielęgnacji, elastyczność, testowalność, przenośność, możliwość powtórnego wykorzystania, łatwość współdziałania).
    `), new OpenQuestion(`
Wyjaśnić różnice między dokładnością, a kompletnością w modelu McCalla.
    `,`
Dokładność to zapewniona wymagana precyzja obliczeń i wyników, a kompletność to pełna implementacja wymaganych funkcji.
    `), new OpenQuestion(`
Wymienić zalety i wady metryk zorientowanych na rozmiar.
    `,`
+ Rozmiar kodu może być łatwo policzony;
+ Rozmiar kodu jest używany w wielu modelach szacowania oprogramowania;
+ Wpływ rozmiaru kodu na inne czynniki jest dobrze udokumentowany;
- rozmiar kodu jest zależny od języka programowania;
- zwięzłe, krótsze programy mają gorsze wskaźniki;
- nie nadają się do języków proceduralnych;
- szacowanie rozmiaru kodu jest konieczne przed rozpoczęciem kodowania;
    `), new OpenQuestion(`
Wymienić zalety i wady punktów funkcyjnych/funkcjonalnych.
    `,`
+ są niezależne od języka programowania;
+ nadają się zarówno dla języków proceduralnych, jak i nie proceduralnych;
+ mogą być stosowane we wczesnych fazach planowania;
- obliczenia mają charakter częściowo subiektywny,;
- dane są trudne do zebrania, trudniejsze niż rozmiar kodu,;
- nie mają bezpośredniego znaczenia fizycznego;
    `), new OpenQuestion(`
Podać podstawowy podział modelu jakości wewnętrznej i zewnętrznej wg ISO 9126.
    `,`
Funkcjonalność, wiarygodność, użyteczność, atrakcyjność, efektywność, utrzymywalność, przenośność.
    `), new OpenQuestion(`
Podać podstawowy podział modelu jakości użytkowej wg ISO 9126.
    `,`
Efektywność, produktywność, bezpieczeństwo, satysfakcja.
    `), new OpenQuestion(`
Wymienić fazy GQM.
    `,`
Planowanie, definicja, zbieranie danych i interpretacja.
    `),
    /**
     * --------------------------------------------------------------------------------
     * */
    new OpenQuestion(`
Wymień 2 reprezentacje standardu CMMI. Czym różni się ten standard od SW-CMM?
    `, `
-> reprezentacja stopniowana (staged): jak w CMM wymagania dojrzałości na każdym poziomie muszą być spełnione w całości;
-> reprezentacja ciągła (continuous): organizacja sama określa jaki poziom dojrzałości chce osiągnąć w określonej dziedzinie zastosowania;
różnice:
- dodano nowe obszary procesowe;
- dodano najlepsze, współczesne praktyki;
- dodano cel ogólny (implementacyjny) do każdego obszaru procesowego;
- do reprezentacji stopniowanej dodano ciągłą;
- zmieniono niektóre kluczowe obszary procesowe;
    `),new OpenQuestion(`
Na czym polega metoda Saaty’ego? Wymień jej wady i zalety.
    `, `
Metoda Saaty’ego polega na podejmowaniu decyzji poprzez porównanie kilku alternatyw.
Zalety:
- skala subiektywna - łatwiejsza w ocenie;
- łatwiej porównywać parami niż wszystko naraz;
Wady:
- skala ocen może nie odpowiadać skali intuicyjnej;
- relacja porównania nie jest przechodnia;
    `), new OpenQuestion(`
Dlaczego ankietowanie nie jest dobrym pomysłem jeżeli chodzi o ocenę jakości?
    `,`
-> brak metryk obiektywnych;
-> można wymusić obiektywność jedynie poprzez pytania typu: tak/nie;
-> często bardzo duża liczba pytań;
-> brak pewności rzetelności odpowiedzi;
-> odpowiedzi dawane na odpierdol bye by skończyć ankietę;
    `), new OpenQuestion(`
Czym est metryka złożoności cyklometrycznej McCabe'a i kiedy ją stosujemy?
    `,`
Metryka złożoności cyklometrycznej McCabe'a stosowana jest gdy mamy do czynienia z algorytmem/strukturą, która może być opisana w formie grafu. Polega ona na policzeniu wszystkich obszarów zamkniętych i dodaniu +1 żeby nie było 0;
    `), new OpenQuestion(`
    Kiedy stosujemy metrykę Halsteada?
    `,`
    Metrykę Halsteada stosujemy, kiedy mamy program wyrażony w postaci kodu źródłowego i chcemy policzyć złożoność na podstawie operatorów i operandów.
    `)
  ];

}
