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
Rzeczy oczywiste nie zawsze są takym samym pomiędzy stronami.
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
`], 0)
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
    `)
  ];

}
