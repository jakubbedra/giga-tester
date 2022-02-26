import {OpenQuestion} from "../../questions/open-question.model";

export class JoKuchtaExam {
  public static openQuestions: OpenQuestion[] = [
    new OpenQuestion(`
Czego uczą nas wypadki z Therac-25 w latach 1980 w USA i Kanadzie?
`, `
Przyczyną awarii jest często splot wielu nieprzewidywalnych czynników.
`),
    new OpenQuestion(`
Metoda Saaty'ego najlepiej się sprawdza:
`, `
tam, gdzie nie mamy jednego wzorca jakości.
`),
    new OpenQuestion(`
We wzorze na poprawność implementacji Pi=1-A/B liczba w mianowniku (B) oznacza:
`, `
liczbę zaimplementowanych wymagań
`),
    new OpenQuestion(`
Czym różni się konfigurowalność od modyfikacji systemu oprogramowania?
`, `
konfigurowalność określa łatwość zmiany funkcjonalności systemu, a modyfikowalność łatwość zmiany wyglądu systemu
`),
    new OpenQuestion(`
Wykrywanie i usuwanie błędów we wcześniejszych fazach wytwarzania oprogramowania jest bardziej opłacalne przede wszystkim ze względu na:
`, `
zmniejszenie liczby błędów wywoływanych w kolejnych fazach
`),
    new OpenQuestion(`
Poziom dojrzałości w CMM, dla którego standard jakości jest optymalizowany, to poziom:
`, `
5
`),
    new OpenQuestion(`
System jakości ISO 9001 zapewnia przede wszystkim:
`, `
zwiększenie zaufania klientów do produktów lub usług przedsiębiorstwa
`),
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
}
