import {OpenQuestion} from "../../questions/open-question.model";
import {ClosedQuestion} from "../../questions/closed-question.model";

export class StExam {
  public static closedQuestions: ClosedQuestion[] = [
    new ClosedQuestion(`Rdzeń światłowodu wielomodowego ma większy przekrój niż dla
jednomodowego:`, [`TAK`, `NIE`], 0),
    new ClosedQuestion(`Czy widmo sygnału z kodowaniem AMI w stosunku do kodowania HDB3 jest takie samo?`, [`TAK`, `NIE`], 0),
    new ClosedQuestion(`Czy relacja między przepływnością binarną Rb i szybkością modulacji Rm w
przypadku stosowania jako medium pary kablowej albo światłowodu jest taka sama?`, [`TAK`, `NIE`], 1),
    new ClosedQuestion(`Czy w sieci zorientowanej bezpołączeniowo kanały są tworzone od końca do
końca?:`, [`TAK`, `NIE`], 1),
    new ClosedQuestion(`Czy w klasycznej sieci telekomunikacji zorientowanej połączeniowo system
sygnalizacji na styku UNI i NNI jest taki sam?:`, [`TAK`, `NIE`], 1),
    new ClosedQuestion(`Rdzeń światłowodu jednomodowego ma większy przekrój niż dla
wielomodowego: `, [`TAK`, `NIE`], 1),
    new ClosedQuestion(`Czy prawdziwe jest zdanie “Modulację pasmową od modulacji dolnopasmowej
nazywanej też kodowaniem transmisyjnym lub kodowaniem liniowym w
sposób istotny różni obecność sygnału częstotliwości nośnej:`, [`TAK`, `NIE`], 1),
    new ClosedQuestion(`Tłumienność sygnału dla skrętki w funkcji częstotliwości sygnału jest:`, [`maleje`, `stała`, `zwiększa się`], 2),
    new ClosedQuestion(`Która z techniki odwzorowania informacji w fali elektromagnetycznej jest aktualnie
najczęściej stosowana:`, [`cyfrowa`, `analogowa`], 0),
    new ClosedQuestion(`W skład numeru abonenta dla numeracji stosowanej w klasycznej sieci TKM wchodzą:`, [`wskaźnik kraju, wskaźnik strefy`, `wskaźnik kraju, wskaźnik w strefie, numer w strefie`, `wskaźnik strefy, numer w strefie`], 1),
    new ClosedQuestion(`Rozgałęźnik zastosowany w linii długiej powoduje:`, [`poprawienie jakości sygnału`, `rozdzielenie sygnałów przemieszczających się w przeciwnych kierunkach`, `obniżenie stosunku mocy sygnału do mocy szumu`, `zwiększenie zasięgu`], 1),
    new ClosedQuestion(`System SDH STM-1 umożliwia realizację maksymalnej liczby łączy o przepływności 2Mbit/s równej:`, [`32`, `63`, `31`, `64`, `65`], 1),
    new ClosedQuestion(`Po stronie odbiorczej odbiór sygnału cyfrowego odbywa się według zegara:`, [`centralnego dla sieci`, `lokalnego strony odbierającej`, `lokalnego strony nadającej`], 2),
    new ClosedQuestion(`Czym przede wszystkim zainteresowany jest operator telekomunikacyjny:`, [`zakresem udostępnianych usług`, `kosztem usługi`, `zyskiem`, `dostępnością do usługi`, `jakością realizacji usługi`], 2),
    new ClosedQuestion(`Na sygnale przy przetwarzaniu z postaci analogowej na cyfrową realizowane są następujące
operacje:`, [`kwantowanie, kodowanie`, `próbkowanie, kwantowanie`, `próbkowanie, kwantowanie, kodowanie`, `próbkowanie, kodowanie`], 2),
    new ClosedQuestion(`Podmioty procesu telekomunikacji to:`, [`operator`, `abonent, operator`, `abonent`], 1),
    new ClosedQuestion(`Relacja między przepustowością kanału cyfrowego a szybkością strumienia binarnego
przesyłanego przez ten kanał musi być następująca:`, [`przepustowość większa od szybkości`, `przepustowość większa równa szybkości`, `przepustowość mniejsza od szybkość`], 1),
    new ClosedQuestion(`Za obsługę zgłoszenia (żądania usługi) w węźle komutacyjnym sieci zorientowanej
połączeniowo odpowiedzialny jest element:`, [`pole komutacyjne`, `Call Control`, `moduły wyposażeń`], 1),
    new ClosedQuestion(`Stwierdzenie, że SWI jest „Systemem Czasu Rzeczywistego” implikuje:`, [`natychmiastowe uzyskanie dostępu do usługi i natychmiastowe przesyłanie informacji użytkownika`, `określone górne granice czasów dla uzyskania dostępu do usługi i przesyłania informacji użytkownika`, `natychmiastowe przesyłanie informacji użytkownika`, `natychmiastowe uzyskanie dostępu do usługi`], 1),
    new ClosedQuestion(`W systemie GSM stosujemy multipleksację w dziedzinie:`, [`częstotliwości i czasu`, `częstotliwości`, `czasu`], 0),
    new ClosedQuestion(`Widmo sygnału z kodowaniem AMI w stosunku do kodowania HDB3 jest:`, [`większe`, `mniejsze`, `takie samo`], 2),
    new ClosedQuestion(`Element funkcjonalny, który separuje abonenta od rozwiązania Systemu Wymiany Informacji to:`, [`węzeł dostępowy`, `terminal (stacja końcowa)`, `łącze dostępowe`, `węzeł`], 1),
    new ClosedQuestion(`Węzeł komutacyjny pracujący w sieci zorientowanej bezpołączeniowo odróżnia się od węzła
pracującego w sieci zorientowanej połączeniowo:`, [`obecnością buforowania i brakiem sygnalizacji`, `brakiem buforowania`, `brakiem sygnalizacji`, `brakiem buforowania i obecnością sygnalizacji`, `obecnością buforowania`], 0),
    new ClosedQuestion(`Wielkości charakteryzujące kanał to:`, [`opóźnienie`, `tłumienność, opóźnienie, szumy i zakłócenia`, `tłumienność`, `szumy i zakłócenia`], 1),
    new ClosedQuestion(`Dla kanału cyfrowego wielkość BER, gdy stosunek S/N rośnie:`, [`rośnie`, `nie zmienia się`, `maleje`], 2),
    new ClosedQuestion(`Podstawowe rodzaje zasobów w sieci TKM z komutacją kanałów to:`, [`moc obliczeniowa`, `łącza, węzły`, `łącza, węzły i moc obliczeniowa`, `łącza`, `węzły`], 2),
    new ClosedQuestion(`Pojęcie protokołu dotyczy zasad komunikacji między:`, [`odpowiadającymi sobie warstwami dwóch połączonych ze sobą urządzeń`, `sąsiednimi warstwami tego samego urządzenia`, `warstwami dwóch połączonych ze sobą urządzeń`, `warstwami tego samego urządzenia`], 0),
    new ClosedQuestion(`Sieć sygnalizacyjna jest siecią:`, [`zorientowaną połączeniowo`, `zorientowaną bezpołączeniowo`], 1),
    new ClosedQuestion(`Skrót TDM(A) określa:`, [`architekturę systemu`, `rodzaj komutacji`, `rodzaj multipleksacji`], 2),
    new ClosedQuestion(`Ile poziomów ma hierarchiczna struktura sterowania w węźle komutacyjnym:`, [`2`, `4`, `3`, `5`], 1),
    new ClosedQuestion(`W sieci zorientowanej bezpołączeniowo kanały są tworzone od końca do końca:`, [`to zależy od rodzaju usługi`, `tak`, `tylko w jednym kierunku`, `nie`], 3),
    new ClosedQuestion(`W przypadku systemów transmisyjnych zrealizowanych w technice analogowej czynnikiem
ograniczającym zasięg połączenia jest:`, [`tłumienność i dyspersja linii`, `dyspersja linii`, `tłumienność linii`, `addytywność szumów`], 3),
    new ClosedQuestion(`Zmiany amplitudy napięcia wzdłuż linii długiej mają charakter:`, [`wielomianowy`, `wykładniczy`, `liniowy`, `hiperboliczny`], 1),
    new ClosedQuestion(`Telekomutacja to:`, [`transmisja`, `tworzenie i likwidacja połączeń`, `komutacja`], 1),
    new ClosedQuestion(`Ile poziomów napięcia ma sygnał z kodowaniem 2B1Q:`, [`trzy`, `dwa`, `pięć`, `cztery`], 3),
    new ClosedQuestion(`Które z wymienionych zadań realizowane są przez funkcję rutingu:`, [`określenie zbioru dróg między źródłem i odbiorcą`, `określenie zbioru dróg między źródłem i odbiorcą oraz wybranie według określonego kryterium jednej z dróg między źródłem i odbiorcą`, `wybranie według określonego kryterium jednej z dróg między źródłem i odbiorcą`, `wybranie jednej z dróg między źródłem i odbiorcą`], 1),
    new ClosedQuestion(`Które rodzaje połączeń realizuje tranzytowy węzeł komutacyjny:`, [`przychodzące - końcowe, przychodzące – tranzytowe`, `lokalne, wychodzące`, `przychodzące – tranzytowe`, `lokalne, przychodzące – tranzytowe`], 2),
    new ClosedQuestion(`Wzór na obliczenie tłumienia w decybelach to:`, [`A=20ln(P1/P2)`, `A=(1/2)ln(P1/P2)`, `A=10ln(P1/P2)`, `A=10lg(P1/P2)`], 3),
    new ClosedQuestion(`System Wymiany Informacji jest realizowany w postaci:`, [`grafu`, `węzłów`, `łączy`, `sieci`], 3),
    new ClosedQuestion(`Relacja między szerokością pasma kanału analogowego a szerokością widma sygnału
przesyłanego przez ten kanał musi być następująca:`, [`pasmo większe od widma`, `pasmo mniejsze od widma`, `pasmo większe równe widmie`], 2),
    new ClosedQuestion(`Do budowy połączenia między dwoma węzłami zastosowano system DWDM z 80
długościami fal. Na każdej z nich osadzono system SDH STM-256. Uzyskana przepływność
binarna między tymi węzłami wynosi:`, [`100Gbit/s`, `1.6Tbit/s`, `1Tbit/s`, `3.2Tbit/s`], 3),
    new ClosedQuestion(`W numeracji abonenta prefiks operatora międzymiastowego:`, [`nie należy do numeru abonenta`, `należy do numeru abonenta`, `to czy należy do numeru abonenta zależy od operatora sieci do której należy dany abonent`], 0),
    new ClosedQuestion(`Operacje (funkcje) realizowane po stronie odbiorczej między kanałem a odbiorcą informacji to:`, [`dekodowanie źródłowe`, `dekodowanie liniowe, dekodowanie źródłowe`, `dekodowanie liniowe`, `demodulacja`, `demodulacja albo dekodowanie liniowe, dekodowanie źródłowe`], 4),
    new ClosedQuestion(`W przypadku usługi czasu rzeczywistego (np. mowa), który z parametrów musi być brany
pod uwagę przy wyborze drogi połączeniowej realizowanej przez funkcję rutingu:`, [`średnie opóźnienie na drodze`, `odległość fizyczna`, `liczba węzłów w drodze`], 0),
    new ClosedQuestion(`Którą z cech musi posiadać publiczny SWI, który jest Systemem Masowej Obsług:`, [`bardzo dużą jakość usług`, `obsługiwać dużą liczbę abonentów`, `najniższą cenę usług`], 1),
    new ClosedQuestion(`Zwiększenie zysków operator uzyskuje poprzez:`, [`zwiększenie intensywności żądań usług`, `nowe technologie`, `obniżenie kosztów zasobów sieci`, `obniżenie kosztów zasobów sieci, nowe technologie, zwiększenie intensywności żądań usług`], 3),
    new ClosedQuestion(`W przypadku modulacji wielowartościowych symbol przenosi informację o wartości:`, [`n bitów, gdzie n>1`, `ośmiu bitów`, `jednego bitu`, `trzech bitów`], 0),
    new ClosedQuestion(`Który z wzorów umożliwia obliczenie tłumienia w Neperach:`, [`A=20ln(P1/P2)`, `A=(1/2)ln(P1/P2)`, `A=10lg(P1/P2)`, `A=10ln(P1/P2)`], 1),
    new ClosedQuestion(`Zasoby dla realizacji usługi są zajmowane w fazie:`, [`zgłoszenia`, `wymiany informacji`, `rozłączenia`], 0),
    new ClosedQuestion(`Płaszczyzny klasycznej hierarchicznej sieci telekomunikacyjnej to:`, [`międzymiastowa i międzynarodowa`, `miejscowa i międzynarodowa`, `miejscowa, międzymiastowa i międzynarodowa`, `miejscowa i międzymiastowa`], 2),
    new ClosedQuestion(`Multipleksacja została wprowadzona dla:`, [`zwiększenia jakości usług`, `obniżenia kosztów połączenia`, `zwiększenia zasięgu połączeń`], 1),
    new ClosedQuestion(`Dla systemu PCM częstość próbkowania sygnału mowy wynosi:`, [`4000 na sekundę`, `1000 na sekundę`, `64000 na sekundę`, `8000 na sekundę`], 3),
    new ClosedQuestion(`Pole komutacyjne węzła zdefiniowane jest przez:`, [`strukturę`, `strukturę, typ selekcji`, `sterowanie, typ selekcji`, `strukturę, sterowanie, typ selekcji`], 3),
    new ClosedQuestion(`Relacja między przepływnością binarną Rb i szybkością modulacji Rm w przypadku
stosowania jako medium pary kablowej albo światłowodu jest:`, [`taka sama`, `różna`], 1),
    new ClosedQuestion(`W stosie protokołów między CC dwóch węzłów komutacyjnych klasycznej sieci
telekomunikacyjnej abonentów stacjonarnych protokół ISUP jest umieszczony nad:`, [`MTP2`, `MTP1`, `MTP3`], 2),
    new ClosedQuestion(`Dla realizacji modulatora BFSK konieczny(e) jest albo są:`, [`jeden sygnał nośny`, `dwa sygnały nośne`, `cztery sygnały nośne`], 1),
    new ClosedQuestion(`W tworzeniu drogi połączeniowej według algorytmu „hop-by-hop”:`, [`końcowy węzeł wyznacza wszystkie węzły drogi`, `początkowy węzeł wyznacza wszystkie węzły drogi`, `kolejny węzeł począwszy od początkowego wyznacza następny węzeł drogi`], 2),
    new ClosedQuestion(`Moc obliczeniowa i pasmo to zasoby w:`, [`węzeł – moc obliczeniowa, łącze – pasmo`, `węzeł i łącze – pasmo`, `węzeł – pasmo, łącze – moc obliczeniowa`, `węzeł i łącze – moc obliczeniowa`], 0),
    new ClosedQuestion(`Impuls prostokątny po przejściu przez linię długą ma zmieniony(ą):`, [`kształt`, `fazę`, `amplitudę`, `częstotliwość`], 0),
    new ClosedQuestion(`Przesyłanie informacji sterującej (sygnalizacyjnej) i użytkownika w paśmie wymaga:`, [`wspólnych zasobów`, `oddzielnych zasobów`, `to nie ma znaczenia`], 0),
    new ClosedQuestion(`Która z wiadomości sygnalizacyjnych zawiera informację o adresie żądanego abonenta oraz
atrybuty usługi:`, [`RLC`, `ACM`, `ANM`, `IAM`, `REL`], 3),
    new ClosedQuestion(`W systemie GSM ramka czasowa ma liczbę szczelin czasowych równą:`, [`8`, `4`, `16`, `32`], 0),
    new ClosedQuestion(`System PCM30/32 umożliwia realizację maksymalnej liczby łączy o przepływności 64kbit/s równej:`, [`30`, `15`, `32`, `16`, `31`], 4),
    new ClosedQuestion(`W module wyniesionym węzła komutacyjnego stosujemy typ selekcji:`, [`T=(I,G)`, `T=(I,S)`, `T=(I,I)`], 1),
    new ClosedQuestion(`Teletransmisja to:`, [`przenoszenie na odległość informacji z portu wyjściowego węzła do portu wejściowego kolejnego węzła`, `przenoszenie informacji z portu wejściowego do portu wyjściowego węzła`, `przenoszenie informacji z portu wyjściowego węzła do portu wejściowego kolejnego węzła`], 0),
    new ClosedQuestion(`W przypadku impulsu prostokątnego po przejście przez linię długą jej dyspersja powoduje:`, [`zawężenie impulsu`, `zachowanie amplitudy`, `zachowanie kształtu`, `poszerzenie impulsu`], 3),
    new ClosedQuestion(`Podmiot(y) biorące udział w tworzeniu Systemu Wymiany Informacji to:`, [`producent`, `RD, producent i operator`, `RD`, `operator`, `producent i operator`], 1),
    new ClosedQuestion(`Sieć zorientowana połączeniowo musi mieć fazę(y):`, [`połączenia`, `zgłoszenia`, `zgłoszenia, połączenia`, `zgłoszenia, połączenia, rozłączenia`, `rozłączenia`], 3),
    new ClosedQuestion(`Które z medium jest prowadnicą zamkniętą:`, [`skrętka`, `wolna przestrzeń`, `para symetryczna`, `światłowód`], 3),
    new ClosedQuestion(`Cechą charakterystyczną węzła sieci zorientowanej połączeniowo jest:`, [`brak buforowania informacji`, `brak sygnalizacji`, `obecność sygnalizacji i brak buforowania informacji`, `obecność sygnalizacji`], 2),
    new ClosedQuestion(`Pozyskiwanie w sieci telekomunikacyjnej informacji koniecznych dla realizacji funkcji
sterowania połączeniem odbywa się w sposób:`, [`zcentralizowany`, `to zależy od rozwiązania`, `mieszany`, `lokalnie`], 1),
    new ClosedQuestion(`Tłumienność w trzecim oknie światłowodu wyrażona w dB/km wynosi około:`, [`0.8`, `1.6`, `3.2`, `0.4`, `0.2`], 4),
    new ClosedQuestion(`Wymagane w Polsce rodzaje (postacie) wymienianych informacji poprzez SWI to:`, [`mowa, dane, obraz`, `mowa, obraz, tekst`, `mowa, obraz, dokument`, `mowa, dokument, dane`], 3),
    new ClosedQuestion(`W systemach DWDM oprócz wzmacniaczy optycznych stosuje się regeneratory ponieważ:`, [`musimy odtworzyć zegar`, `są tańsze`, `mamy addytywność szumów`], 2),
    new ClosedQuestion(`Czy prawdziwe jest zdanie, że "Modulację pasmową od modulacji dolnopasmowej nazywanej też kodowaniem transmisyjnym lub kodowaniem liniowym, w sposób istotny różni obecność sygnału częstotliwości nośnej".`, [`TAK`, `NIE`], 0),
    new ClosedQuestion(`W klasycznej sieci telekomunikacyjnej zorientowanej połączeniowo systemy sygnalizacji na
styku UNI i NNI są:`, [`takie same`, `różne`], 1),
    new ClosedQuestion(`W jakich parametrach sygnału możemy umieścić informację, którą chcemy przesłać:`, [`fazie`, `amplitudzie`, `częstotliwości`, `amplitudzie i fazie`, `punkty a, b i c`], 4)
  ];

  public static openQuestions: OpenQuestion[] = [
    new OpenQuestion(`Odkrycie jakiego zjawiska fizycznego przyczyniło się do szybkiego rozwoju dla realizacji telekomunikacji:`, `elektryczności, a w konsekwencji elektromagnetyzmu. (za samo elektryczność zerował)
slajd 1`),
    new OpenQuestion(`Ile szczelin ma PCM30/32? `, `32.`),
    new OpenQuestion(`Wymień techniki odwzorowania informacji w fali elektromagnetycznej:`, `analogowa i cyfrowa.`),
    new OpenQuestion(`Technika cyfrowa pozwoliła na... `, `większy stosunek sygnałów do szumów`),
    new OpenQuestion(`Wymień podstawowe kryteria oceny usługi dostarczonej przez operatora, którymi posługuje się abonent: `, `dostępność, szybkość i koszt.`),
    new OpenQuestion(`Nowa technologia powoduje ... kosztów w przeliczeniu na usługę.`, `zmniejszenie `),
    new OpenQuestion(`Wymienić podmioty biorące udział w tworzeniu Systemu Wymiany Informacji:`, `- ośrodki Research and Development
- firmy konstrukcyjne
- operatorzy telekomunikacyjni`),
    new OpenQuestion(`Podać definicję telekomunikacji: nauka, technika i inna działalność ludzka dotycząca przekazywania na odległość wiadomości (informacji) za pośrednictwem ...`, `sygnałów.
slajd 12`),
    new OpenQuestion(`Podać definicję komutacji kanałów: `, `Jest to rodzaj komutacji, w którym zasoby dla realizacji połączenia są przydzielane na cały czas trwania tylko tego połączenia. (slajd 12)`),
    new OpenQuestion(`Podać definicję teletransmisji: `, `dział telekomunikacji dotyczący przesyłania sygnałów na odległość przy użyciu środków technicznych.
slajd 11`),
    new OpenQuestion(`Wyjaśnić stwierdzenie, że SWI jest “Systemem Masowej Obsługi”:`, `- może być wiele abonentów
- wymiana informacji jest możliwa między dowolnymi abonentami
- abonenci rozmieszczeni są na dużym obszarze
- momenty żądania są przypadkowe
- czas korzystania z usługi jest przypadkowy
- jakość usługi ma określone wymagania
slajd 13`),
    new OpenQuestion(`SWI jest realizowany w postaci:`, `sieci telekomunikacyjnej
slajd 13`),
    new OpenQuestion(`Wymień trzy składowe definiujące pole komutacji węzła:`, `<G,S,T>
slajd 17`),
    new OpenQuestion(`Multipleksacja pozwala na...`, `lepsze wykorzystanie zasobów`),
    new OpenQuestion(`Wymień dziedziny w których może być przeprowadzona multipleksacja: `, `czasu i częstotliwości
slajd 20`),
    new OpenQuestion(`Rozwinąć skrót TDM(A):`, `Time Division Multiplexing (Access)
slajd 20`),
    new OpenQuestion(`Cztery jednostki charakteryzujące linię długą: `, `- indukcyjność
- pojemność
- rezystancja
- konduktancja`),
    new OpenQuestion(`Światłowód wykorzystuje: `, `Zjawisko całkowitego odbicia.`),
    new OpenQuestion(`W którym oknie światłowodu jest najmniejsza tłumienność? `, `W trzecim (jest mniejsza od 0,2 db/km).`),
    new OpenQuestion(`Co jest prowadnicą zamkniętą?`, `Prowadnica zamknięta tzn. taka, która jest izolowana od otaczającej jej przestrzeni. Jest nią  światłowód.`),
    new OpenQuestion(`Które z medium jest prowadnicą zamkniętą:`, `światłowód
slajd 67`),
    new OpenQuestion(`Impuls prostokątny po przejściu przez linię długą ma zmienioną:`, `amplitudę i kształt. slajd 23`),
    new OpenQuestion(`Co staramy się zachować przy przenoszeniu sygnałów/informacji?`, `Kształt.`),
    new OpenQuestion(`Funkcja łączenia jest w ...`, `komutacji kanałów. `),
    new OpenQuestion(`Czym różni się WDM i DWDM?`, `WDM (Wavelength Division Multiplexing) pozwala wprowadzić do 8 długości fal, natomiast DWDM (Dense WDM, czyli gęste WDM) do 320 długości fal do jednej nitki światłowodu.`),
    new OpenQuestion(`Zależność między jednostką N a dB. `, `Neper [N] i decybel [dB] są jednostkami logarytmicznymi określającymi tłumienie. Tłumienie w neperach określa się ze wzoru A = ½ln(P2/P1) = ln(U2/U1) [N],
a w decybelach: A = 10log(P2/P1) = 20log(U2/U1) [dB].`),
    new OpenQuestion(`Podaj wzór na obliczenie tłumienia w Neperach:`, `A = ½ ln (P2/P1) = ln (U2/U1)
slajd 26`),
    new OpenQuestion(`Tłumienie sygnału dla skrętki w funkcji częstotliwości sygnału jest:`, `rosnące
slajd 27`),
    new OpenQuestion(`Działanie światłowodu jako prowadnicy sygnału oparte jest na zjawisku
fizycznym:`, `całkowitego odbicia
zdjęcie`),
    new OpenQuestion(`Podać parametry sygnału (napięcie, prąd, moc) którego poziom wynosi 0
dBm:`, `U= 775 mV, I=1,29 mA, P= 1 mW, R=600 Ohm
slajd 36`),
    new OpenQuestion(`Jakie zjawisko w przypadku systemów transmisyjnych zrealizowanych w
technice analogowej jest czynnikiem ograniczającym długość połączenia:`, `addytywność zakłóceń i szumów
slajd 40`),
    new OpenQuestion(`Dla systemu SDH długość ramki wynosi ...`, `125μs.`),
    new OpenQuestion(`Sygnał informacji o paśmie od 0 do fg w wyniku modulacji pasmowej sygnału nośnego fn zostąje przesunięty w zakres częstotliwości `, `Od fn-fg do fn+fg`),
    new OpenQuestion(`Niedopasowanie linii długiej do odbiornika powoduje:`, `straty energii
slajd 33, Patrz komentarz`),
    new OpenQuestion(`Jaki element funkcjonalny należy zastosować w linii długiej aby można było
przesłać sygnał w obie strony: `, `rozgałęźnik
slajd 40`),
    new OpenQuestion(`Wyjaśnij określenie “modulacja wielowartościowa” :`, `Jest to modulacje, gdzie na
jeden element sygnału zmodulowanego przypada N bitów sygnału modulującego.
slajd 47`),
    new OpenQuestion(`Przepływność strumienia binarnego sygnału mowy dla kodowania źródłowego
PCM wynosi:`, `64 kbit/s`),
    new OpenQuestion(`Kodowanie źródłowe PCM sygnału mowy jest:`, `nieliniowe o siedmiu segmentach liniowych
zdjęcie`),
    new OpenQuestion(`Przeprowadzić obliczenie przepływności strumienia binarnego dla systemu PCM30/32:`, `32 * 8 / 125 mikro s = 2.048 Mb/s (czy to są 32 szczeliny po 64kpbs każda?)
slajd 61`),
    new OpenQuestion(`Jaka jest szybkość modulacji dla systemu PCM30/32 z kodowaniem liniowym
HDB3:`, `2MBd (pytanie z paczki) 2 mega body ale to nie wiem o co chodzi`),
    new OpenQuestion(`Sieć sygnalizacyjna jest siecią zorientowaną ... `, `bezpołączeniowo.`),
    new OpenQuestion(`Wymień typy sieci z punktu widzenia realizacji połączenia`, `- Sieci zorientowane połączeniowo
- Sieci zorientowane bezpołączeniowo`),
    new OpenQuestion(`Wymienić operacje realizowane na sygnale przy przetwarzaniu z postaci
analogowej na cyfrową:`, `- próbkowania,
- kwantyzacji,
- kodowania.
slajd 52`),
    new OpenQuestion(`W systemie GSM ramka czasowa ma liczbę szczelin czasowych równą:`, `8 slajd 63`),
    new OpenQuestion(`Do budowy połączenia między dwoma węzłami zastosowano system DWDM z
długościami fal na których osadzonych system SDH STM-256. Obliczyć
uzyskaną przepływność binarną między tymi węzłami:`, `80 * 40 Gb/s = 3200 Gb/s = 3.2 Tb/s
slajd 60`),
    new OpenQuestion(`Która z wiadomości sygnalizacyjnych zwiera informację o adresie żądanego abonenta oraz atrybuty usługi: `, `IAM `),
    new OpenQuestion(`Jaka jest podstawowa cecha dynamicznej metody określania trasy dróg połączeniowych? `, `Branie pod uwagę aktualnego stanu sieci, a przez to maksymalizacja wykorzystania zasobów.`),
    new OpenQuestion(`Dlaczego występują małe, kontrolowane opóźnienia w dostarczaniu wiadomości?`, `Bo wykorzystywany system sygnalizacji ma charakter systemu czasu rzeczywistego.`),
    new OpenQuestion(`Jaką strukturę ma sieć TK w Polsce?`, `hierarchiczną`),
    new OpenQuestion(`System PCM30/32 umożliwia realizację maksymalnej liczby łączy o
przepływność 64kbit/s równej:`, `31 (z czego jedno jest przeznaczone na sygnalizację)
slajd 60`),
    new OpenQuestion(`System SD STM-1 umożliwia realizację maksymalnej liczby łączy o
przepływność 2Mbit/s równej: `, `63
slajd 64`),
    new OpenQuestion(`Podać relację między szerokością pasma kanału analogowego a szerokością
widma sygnału przesyłanego przez ten kanał:`, `szerokość pasma kanału analogowego musi być większa lub równa szerokości widma sygnału
przesyłanego przez ten kanał.
slajd 78`),
    new OpenQuestion(`Podać relację między przepustowością łącza, a prędkością nadawania.`, `Większa lub równa.`),
    new OpenQuestion(`Podać relację między przepustowością kanału cyfrowego a szybkością
strumienia binarnego źródła: `, `przepustowość kanału musi być większa lub
równa szybkości strumienia binarnego źródła.
slajd 78`),
    new OpenQuestion(`Stosunek sygnału do szumu wynosi 20 dB. Obliczyć moc szumu, gdy moc
sygnału wynosi 1mW.`, `20 = 10*log(1/P) => 2 = log 1/P => P=1/100 mW
slajd 26 (to dzisieć we wzorze bo decy bell a chcemy operować na bellach)`),
    new OpenQuestion(`Wymienić operacje (funkcje) realizowane po stronie nadawczej między źródłem
informacji a kanałem:`, `- kodowanie źródłowe
- koder nadmiarowy
- modulacja lub kodowanie liniowe
slajd 79 (obrazek)`),
    new OpenQuestion(`Kanał jest tworzony w fazie:`, `zgłoszenia
slajd 81`),
    new OpenQuestion(`Cechą charakterystyczną węzła sieci zorientowanej bezpołączeniowej jest:`, `buforowanie wiadomości
slajd 82`),
    new OpenQuestion(`Wymienić trzy części numeru abonenta dla numeracji stosowanej w klasycznej
sieci TKM:`, `- wskaźnik kraju
- wskaźnik międzymiastowy
- numer strefowy
slajd 92`),
    new OpenQuestion(`W poprzednio stosowanej numeracji prefiks operatora międzymiastowego:`, `nie należał do numeru abonenta
slajd 95`),
    new OpenQuestion(`Wymienić rodzaje strumieni informacji przesyłanych w sieci zorientowanej
połączeniowo:`, `- strumieni informacji użytkowej
- strumieni informacji sterującej
slajd 97`),
    new OpenQuestion(`Wymienić pięć elementów funkcjonalnych węzła komutacyjnego dla sieci
zorientowanej połączeniowo:`, `- Moduł zakończeń linii abonenckich
- Moduł zakończeń łączy międzywęzłowych
- Pole komutacyjne
- Blok sterowania
- Blok sygnalizacji międzywęzłowej
slajd 103`),
    new OpenQuestion(`Wyjaśnić zasadę “hop-by-hop” tworzenia drogi połączeniowej:`, `Sprowadza się ona do tego iż kolejny ostatnio wyznaczony węzeł będący w drodze połączeniowej
wyznacza następny węzeł, który będzie brał udział w tworzeniu połączenia.
slajd 100`),
    new OpenQuestion(`Wymienić cztery rodzaje połączeń realizowanych przez węzeł komutacyjny:`, `- lokalne - miedzy abonentami należącymi do tego samego węzła komutacyjnego,
- wychodzące - lokalny klient łączy się do innego węzła,
- przychodzące tranzytowe - łącze z i do innego węzła,
- przychodzące końcowe - łącze z innego węzła do naszego abonenta.
slajd 104`),
    new OpenQuestion(`Liczba bitów przekazywanych między CC (Call Control) dwóch węzłów w
stosunku do liczby bitów jakie są przekazywane w warstwie łącza
sygnalizacyjnego:`, `jest mniejsza`),
    new OpenQuestion(`Co to jest Γ?`, `Γ (efektywność widmowa) określa ilość informacji w bit/s jaka może zostać przesłana przez jednostkę pasma w Hz.`),
    new OpenQuestion(`Dolne ograniczenie STM to ... `, `64kbit/s`),
    new OpenQuestion(`Który z elementów funkcjonalnych jest odpowiedzialny za algorytm obsługi połączenia między węzłami: `, `CC.`),
    new OpenQuestion(`Sieć sygnalizacyjna jest siecią z komutacją:`, `wiadomości
slajd 120`),
    new OpenQuestion(`Pojęcie protokołu dotyczy zasad komunikacji między:`, `odpowiadającymi sobie warstwami dwóch połączonych ze sobą urządzeń
slajd 119`),
    new OpenQuestion(`Wymienić podmioty biorące udział w tworzeniu Systemu Wymiany Informacji: `, `- ośrodki R&D,
- firmy konstrukcyjno-produkcyjne,
- operatorzy telekomunikacyjni `),
    new OpenQuestion(`Wymienić trzy cechy, które mogą być uwzględniane przy realizacji wyboru drogi połączeniowej (wchodzić w skład metryki drogi): `, `- osiągnięcie węzła docelowego
- szerokość pasma
- opóźnienie
- liczba przeskoków
- obciążenie`),
    new OpenQuestion(`Wymienić stos protokołów między CC dwóch węzłów komutacyjnych
klasycznej sieci telekomunikacyjnej abonentów stacjonarnych:`, `- MTP1
- MTP2
- MTP3
- ISUP
slajd 124`),
    new OpenQuestion(`Co to jest kanał? `, `Łącze jednokierunkowe.`),
    new OpenQuestion(`Ile wynosi długość nagłówka w ATM? `, `5 bajtów. `),
    new OpenQuestion(`Która część komórki w ATM jest chroniona przed błędami?`, `Nagłówek.`),
    new OpenQuestion(`PCM30/32 jest na medium miedzianym i wykorzystuje ile par przewodów? `, `2`),
    new OpenQuestion(`Opisz ATM(Asynchronous Transfer Mode):`, `- Sieć zorientowana połączeniowo.
- Komórka: 53 bajty (5b nagłówka + 48b informacji)
- Nagłówek jest chroniony przed uszkodzeniem.
- Źródła ruchu: CBR (stały strumień bitów)/VBR (zmienny).
- Istotą jest dopasowanie do źródła (async. dla async. źródła, sync. dla sync. źródła).`),
    new OpenQuestion(`Wymienić trzy wielkości (parametry), które mogą wchodzić w skład opisu
metryki drogi połączeniowej:`, `- szerokość pasma
- opóźnienie ech
- liczba przeskoków
- obciążenie
(analogiczne pytanie z paczki)
slajd 134 (??)`),
    new OpenQuestion(`Która technika umożliwia przesłanie większej ilości informacji?`, `Technika analogowa.`),
    new OpenQuestion(`Wymienić dwa podstawowe zadania realizowane przez funkcje rutingu:`, `- określenie dróg, które spełniają z góry narzucone wymagania
- wybór jednej z tych dróg
slajd 130-131`),
    new OpenQuestion(`Wymienić trzy istotne cechy, które mogą być uwzględniane przy realizacji
wyboru drogi połączeniowej:`, `- dostępne zasoby (łącza, pasmo)
- obciążenie drogi
- opóźnienie na drodze
slajd 134`),
    new OpenQuestion(`Wymienić 3 rodzaje (postacie) wymienianych informacji przez SWI`, `- mowa
- rysunek
- tekst`),
    new OpenQuestion(`Wymienić podmioty procesu telekomunikacji`, `- abonent wywołujący
- abonent wywoływany
- operator`),
    new OpenQuestion(`Wymienić element funkcjonalny, który separuje abonenta od rozwiązania SWI:`, `terminal końcowy`),
    new OpenQuestion(`Wymień dwa sposoby zwiększania zysku przez operatora`, `- typowo - dołączanie nowych abonentów, realizacja żądań usług
- nietypowo - zwiększenie intensywności żądań usług`),
    new OpenQuestion(`Czym przede wszystkim zainteresowany jest Operator telekomunikacyjny?`, `zyskiem`),
    new OpenQuestion(`Wymienić dwie podstawowe funkcje, które muszą być zrealizowane w sieci
telekomunikacyjnej`, `komutacja i transmisja`),
    new OpenQuestion(`Podaj definicję telefonii:`, `usługa przenoszenia dźwięku (mowy) na odległość
(ważne, żeby napisać “mowy”)`),
    new OpenQuestion(`Podaj definicję telekomutacji:`, `Dział telekomunikacji dotyczący tworzenia i likwidowania połączeń telekomunikacyjnych`),
    new OpenQuestion(`Podaj definicję telekomunikacji:`, `Nauka, technika i inna działalność ludzka  dotycząca przekazywania na odległość wiadomości (informacji) za pośrednictwem sygnałów.`),
    new OpenQuestion(`Wyjaśnij stwierdzenie, że SWI jest “Systemem Czasu Rzeczywistego”:`, `bo wymagania na poziom usług narzucają graniczne czasy na rozpoczęcie realizacji
usługi i są tak dobrane, żeby abonent odnosił wrażenie, że jest obsługiwany na
bieżąco`),
    new OpenQuestion(`Wymienić podstawowe zasoby (rodzaje) sieci TKM:`, `- węzły komutacyjne,
- łącza międzywęzłowe,
- linie abonenckie`),
    new OpenQuestion(`Wymień trzy przykłady typu selekcji pola komutacyjnego węzła`, `- indywidualny
- swobodny
- grupowy (chyba tylko to ma sens ze slajdu 17)`),
    new OpenQuestion(`Funkcja multipleksacji została wprowadzona do sieci telekomunikacyjnej w celu:`, `minimalizacji zasobów i tym samym kosztow`),
    new OpenQuestion(`W systemie GSM stosujemy multipleksację w dziedzinie:`, `częstotliwości i czasu`),
    new OpenQuestion(`Zmiany amplitudy napięcia wzdłuż linii długiej mają charakter:`, `wykładniczy`),
    new OpenQuestion(`W przypadku impulsu prostokątnego po przejściu linię długą jej dyspersja (pytanie bonusowe)`, `brak odpowiedzi (INBF: 5 bajtów)`),
    new OpenQuestion(`Podaj rodzaje mediów transmisyjnych.`, `a) para symetryczna – dwa równoległe przewody
b) skrętka – dwa izolowane przewody skręcone w odpowiedni sposób
c) kabel współosiowy – jeden przewód dokładnie otoczony przez odizolowany drugi przewód
d) falowód – metalowa rura o różnorodnych przekrojach
e) światłowód – nić wykonana z kwarcu z odpowiednimi domieszkami
f) wolna przestrzeń – przestrzeń fal radiowych`),
    new OpenQuestion(`Wymienić dwie podstawowe wielkości (parametry) charakteryzujące
prowadnicę falową:`, `stała propagacji i impedancja charakterystyczna
W PACZCE JEST DO TEGO ZŁA ODPOWIEDŹ!
w paczce jest stała tłumienia i stała fazowa i kaczmarek za to zerowal, mówil że on
chcial dwie podstawowe wielkości a te stale zawieraja w stałej propagacji czy cos w
ten teges i on chcial jeszcze cos a JA NIE WIEM O CO CHODZI XD ale wydaje mi
sie ze chodzi o stala propagacji i impedancje charakterystyczna ale niech ktos
madrzejszy sie wypowie`),
    new OpenQuestion(`Podaj wzór na obliczenie tłumienia w decybelach`, `A=10log(P2/P1)=20log(U2/U1)[dB]`),
    new OpenQuestion(`Tłumienność w trzecim oknie światłowodu wyrażona w dB/km wynosi około:`, `0.2`),
    new OpenQuestion(`Co głównie ma wpływ na zasięg transmisji w światłowodzie?`, `dyspersja`),
    new OpenQuestion(`Odbiór sygnału cyfrowego odbywa się według zegara:`, `lokalnego strony nadającej`),
    new OpenQuestion(`Na czym polega zjawisko przeniku?`, `Przenik – zakłócenie sygnału polegające na przenikaniu energii sygnału z jego drogi przesyłowej do dróg przesyłowych innych sygnałów. Rozróżnia się przenik zbliżny i przenik zdalny. Sygnał będący wynikiem przeniku zbliżnego powoduje znaczne obniżenie zasięgu transmisji.`),
    new OpenQuestion(`Przeniki między liniami długimi powodują:`, `znaczne obniżenie zasięgu transmisji zadanie z paczki`),
    new OpenQuestion(`Wyjaśnić przeznaczenie rozgałęźnika w linii długiej:`, `Umożliwia ruch w obydwu kierunkach`),
    new OpenQuestion(`W jakich parametrach sygnału można umieścić informację:`, `częstotliwość - f, amplituda - A i fala - φ`),
    new OpenQuestion(`Wymienić trzy podstawowe pożądane cechy kodowania liniowego:`, `- w sygnale liniowym występują co najwyżej trzy symbole kodujące zero
- składowa stała jest równa zeru
- stosunek błędu (niedokładności) do sygnału pierwotnego jest duży dla małych
amplitud a mały dla dużych amplitud
slajd 62 i 53`),
    new OpenQuestion(`Proszę przypisać rodzaj zasobów do wymienionych elementów sieci
telekomunikacyjnej, które podlegają ograniczeniom:
- węzeł: ...
- łącze: ...`, `- węzeł to moc obliczeniowa/przetwarzanie
- łącze to pasmo/przepływność
zadanie z paczki`),
    new OpenQuestion(`Dla systemu PCM30/32 ramka czasowa trwa:`, `125 mikro sekund (us)`),
    new OpenQuestion(`Obliczyć czas trwania bitu w systemie SDH 155Mbit STM256.`, `1155×1061256≅25ps`),
    new OpenQuestion(`Dla systemu optycznego SDH rama czasowa trwa:`, `125 mikro sekund (us)
slajd 64`),
    new OpenQuestion(`Kodowanie 2B1Q ...`, `2B1Q mówi nam, że 2 bity binarnego sygnału x(t) jest kodowane w jeden sygnał liniowy, który ma jeden z czterech poziomów (Quaternary). Oznacza to, że kodowanie 2B1Q powiększa pasmo.`),
    new OpenQuestion(`Ile poziomów napięcia ma sygnał z kodowania 2B1Q:`, `4
slajd 49`),
    new OpenQuestion(`Dla systemu PCM częstość próbkowania wynosi 8000 na sekundę. Wyjaśnić z
czego to wynika:`, `Z twierdzenia Nyquista - częstość próbkowania powinna wynosić co najmniej
podwojoną wartość górnej częstotliwości pasma sygnału.
slajd 52`),
    new OpenQuestion(`Podaj średnicę rdzenia światłowodów (wielo i jednomodowych):`, `Wielomodowych wynosi 50, 62.5 lub 120 μm.
Jednomodowych wynosi 8-10 μm.`),
    new OpenQuestion(`Gdzie występuje echo? `, `W rozgałęźniku.`),
    new OpenQuestion(`W kodowaniu HDB3 zera w jednym ciągu mogą być przesłane w liczbie:`, `3
slajd 60`),
    new OpenQuestion(`Dlaczego w DWDM trzeba również używać regeneratorów?`, `Bo podobnie jak w przypadku WDM, głównie ze względu na występowanie dyspersji, przy przesyłaniu sygnału na dłuższe odległości występuje konieczność używania regeneratorów optycznych.`),
    new OpenQuestion(`Osiągana odległość między wzmacniaczami optycznymi dla DWDM wynosi w
granicach:`, `od 100 do 200 km
slajd 67`),
    new OpenQuestion(`W jednym zdaniu wyjaśnić dlaczego w systemie DWDM oprócz wzmacniaczy
optycznych stosuje się (?) regeneratory:`, `Bo wzmacniacz dodaje szumy, a regenerator je usuwa
slajd 68`),
    new OpenQuestion(`Dlaczego z BER zawsze podaje się SNR.`, `Ponieważ BER dotyczy zawsze konkretnego stosunku SNR.`),
    new OpenQuestion(`Wymienić trzy wielkości charakteryzujące kanał:`, `- pasmo
- przepływność
- stopa błędów BER (przekłamanych bitów)
- stosunek mocy sygnału do mocy szumu i zakłóceń S/N (SNR) slajd 76, 77`),
    new OpenQuestion(`Co to jest S/N (SNR – Signal Noise Ratio)? `, `Stosunek mocy sygnału do mocy szumu i zakłóceń. `),
    new OpenQuestion(`Wymień trzy istotne wielkości charakteryzujące otoczenie kanału:`, `- zakłócenia,
- przesłuch,
- wielotorowość,
- efekt Dopplera
slajd 75`),
    new OpenQuestion(`Napisz wzór wynikający z poznanego twierdzenia Shannon’a Hartleya i objaśnij przytoczone wielkości:`, `C = B*log2(1+S/N)
C - przepływność, B - pasmo, S - sygnał, N - szumy`),
    new OpenQuestion(`Co to jest BER?`, `BER (Bit Error Rate) – elementowa stopa błędów. Określa prawdopodobieństwo wystąpienia błędu przy określonym SNR (stosunku mocy sygnału do mocy szumu).`),
    new OpenQuestion(`Dlaczego przy charakteryzowaniu kanału cyfrowego wielkością BER podajemy
także stosunek S/N:`, `W praktyce nie unikniemy przekłamania i to przekłamanie
wyrażamy poprzez BER. Ponieważ zależne jest ono od S/N to wartość BER
podajemy dla S/N wyrażonej w dB, np. BER=10-4 przy S/N=21 dB.
slajd 78`),
    new OpenQuestion(`Wymienić operacje (funkcje realizowane po stronie odbiorczej między kanałem
a odbiorcą informacji):`, `- demodulacja lub dekodowanie liniowe
- korektor
- dekodowanie źródłowe
slajd 78`),
    new OpenQuestion(`Niech: Ł - łącze, ST - system transmisyjny.
Która relacja jest prawdziwa:`, `Ł ∈ ST (Ł zawiera się w ST). `),
    new OpenQuestion(`System Wymiany Informacji jest ...`, `siecią telekomunikacyjna. `),
    new OpenQuestion(`Sieć w której dla wymiany informacji między użytkownikami muszą mieć
miejsce fazy: zgłoszenia, połączenia i rozłączenie jest siecią: `, `zorientowaną połączeniowo
slajd 79`),
    new OpenQuestion(`Zasoby dla realizacji usługi są zajmowane w fazie:`, `zgłoszenia`),
    new OpenQuestion(`Cechą charakterystyczną węzła sieci zorientowanej połączeniowo jest:`, `konieczność wymiany informacji sterującej pola danymi`),
    new OpenQuestion(`Związek między Rb i Rm`, `Rb jest szybkością transmisji (przepływność strumienia bitów informacji), a Rm szybkością modulacji (ile elementów zmodulowanych jest nadawanych w jednostce czasu).
Rb=Rm×ilość bitów na symbol`),
    new OpenQuestion(`Wymienić w kolejności nazwy czterech poziomów hierarchicznej struktury sterowania w węźle komutacyjnym: `, `- sterowanie węzła,
- sterowanie modułów,
- sterowanie pakietów,
- procesory sygnałowe DSP, `),
    new OpenQuestion(`Dla modulatora BFSK mając zadany strumień binarny narysować sygnał po modulacji.  `, `No to proste, jak 0 na wejściu to rysujemy "rzadszą" sinusoidę, jak 1 to gęstszą`),
    new OpenQuestion(`Wymienić trzy płaszczyzny klasycznej hierarchicznej sieci telekomunikacyjnej:`, `- miejscowa
- międzymiastowa
- międzynarodowa`),
    new OpenQuestion(`Dla modulatora BFSK mając zadany strumień binarny narysować sygnał po
modulacji: `, `https://imgur.com/a/NXK6Bgm`),
    new OpenQuestion(`Dla modulatora BPSK mając zadany strumień binarny narysować sygnał po
modulacji: `, `https://imgur.com/a/TcSAmbM`)
  ];
}
