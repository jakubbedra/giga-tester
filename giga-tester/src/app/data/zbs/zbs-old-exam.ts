import {OpenQuestion} from "../../questions/open-question.model";
import {ClosedQuestion} from "../../questions/closed-question.model";

export class ZbsOldExam {
  public static closedQuestions: ClosedQuestion[] = [
    new ClosedQuestion(`
Zaznacz pole, jakiego nie zawiera certyfikat X.509 w wersji 1:
`,
      [`
czasu ważności certyfikatu
`, `
opisu podmiotu w postaci np. nazwy FQDN
`, `
klucza publicznego podmiotu
`, `
rozszerzeń v3
`], 3),
    new ClosedQuestion(`
Do podpisania wiadomości e-mail zostanie wykorzystany:
`,
      [`
certyfikat urzędu certyfikacji
`, `
certyfikat nadawcy, a konkretnie klucz publiczny nadawcy
`, `
certyfikat nadawcy, a konkretnie klucz prywatny nadawcy
`, `
certyfikat odbiorcy, a konkretnie klucz publiczny odbiorcy
`], 2),
    new ClosedQuestion(`
W celu detekcji incydentu bezpieczeństwa na podstawie korelacji zdarzaeń z różnych systemów skorzystam z rozwiązania:
`,
      [`
Data leak prevention (DLP)
`, `
Security Information and Event Management (SIEM)
`, `
firewalla aplikacyjnego
`, `
Identity Management
`], 1),
    new ClosedQuestion(`
Do dobrych praktyk obrony przed atakami DDoS można zaliczyć:
`,
      [`
wymuszenie zaszyfrowanej komunikacji z aplikacją webową
`, `
wymuszenie jawnej (bez szyfrowania) komunikacji z aplikacją webową
`, `
skrócenie czasu życia rekordów DNS
`, `
wydłużenie czasu życia rekordów DNS
`], 2),
    new ClosedQuestion(`
Algorytm Diffiego-Hellmana posiada następująca cechę:
`,
      [`
pozwala ustalić tożsamość stron
`, `
pozwala uzgodnić klucze asymetryczne pomiędzy stronami
`, `
jest samodzielnym mechanizmem uwierzytelnienia
`, `
pozwala uzgodnić klucz symetryczny pomiędzy stronami
`], 3),
    new ClosedQuestion(`
Integralność jest mechanizmem, który:
`,
      [`
pozwala potwierdzić tożsamość komunikujących się stron
`, `
zapewnia brak możliwości odtajnienia przekazu
`, `
zapewnia możliwość zapobiegania przekłamaniu informacji
`, `
odpowiada za sygnalizację zmanipulowania przekazu
`], 3),
    new ClosedQuestion(`
Szyfrowanie wiadomości e-mail do wielu odbiorców zakłada:
`,
      [`
szyfrowanie treści kluczem symetrycznym
`, `
szyfrowanie treści kluczem prywatnym
`, `
szyfrowanie treści kluczem publicznym
`], 0),
    new ClosedQuestion(`
Otwarty model bezpieczeństwa z normą ISO 27000:
`,
      [`
zabrania wszystkiego, poza tym co zostało dozwolone
`, `
najczęściej dotyczy ruchu przychodzącego z sieci Internet w urządzeniach firewall
`, `
jest bardziej restrykcyjny niż model zamknięty
`, `
zezwala na wszystko poza tym, co zostało zabronione
`], 3),
    new ClosedQuestion(`
Atak niecelowany z użyciem malware charakteryzuje się:
`,
      [`
długą fazą rozpoznania
`, `
małym ponownym wykorzystaniem kodu malware
`, `
wykorzystaniem popularnych zachowań użytkowników
`, `
małym zakresem liczby atakowanych środowisk
`], 2),
    new ClosedQuestion(`
Zaznacz zdanie nieprawdziwe w kontekście ataków DoS/DDoS
`,
      [`
ataki DDos angażują rozproszone geograficznie miejsca, z których prowadzony jest atak
`, `
ataki DoS i DDoS godzą bardziej klientów systemu, niż w atakowany system
`, `
ataki DoS i DDoS skutkują odmową świadczenia usług/usługi
`, `
ataki DoS i DDoS  wymagają kompromitacji haseł użytkowników
`], 3),
    new ClosedQuestion(`
Hasła współdzielone między różnymi systemami są zagrożeniem ponieważ:
`,
      [`
wpływają bezpośrednio na dostępność systemów IT
`, `
kompromitacja jednego systemu powoduje skompromitowanie pozostałych
`, `
ktoś iny może mieć takie samo hasło
`, `
powodują wyższą podatność na atak brute-force (siłowy)
`], 1),
    new ClosedQuestion(`
Autentyczność, w rozumieniu funkcji bezpieczeństwa pozwala na:
`,
      [`
zapobieganie możliwości sfałszowania danych
`, `
przypisanie autorstwa przekazu
`, `
zapewnienie pufności komunikujących się stron
`, `
wykrywanie nie większej niż dopuszczalna modyfikacja przekazu
`], 1),
    new ClosedQuestion(`
Porównanie architektur PKI i PGP prowadzi do wniosku:
`,
      [`
żadna odpowiedź nie jest prawidłowa
`, `
PGP jest strukturą bardziej elastyczną w kształtowaniu relacji zaufania
`, `
PKI jest strukturą bardziej elastyczną w kształtowaniu relacji zaufania
`, `
PKI ma większe zastosowanie
`], 1),
    new ClosedQuestion(`
Dostępność, w rozumieniu funkcji bezpieczeństwa, może być osiągana poprzez:
`,
      [`
uwierzytelnienie użytkownika portalu za pomocą hasła
`, `
wykupienie szybszego łącza do Internetu
`, `
zaszyfrowanie informacji podczas transmisji
`, `
zaszyfrowanie informacji w postaci statycznych danych
`], 1),
    new ClosedQuestion(`
Zaznacz, co nie jest typowo weryfikowane podczas uwierzytelnienia użytkownika certyfikatem:
`,
      [`
integralność przedstawianych informacji
`, `
algorytm szyfrowania symetrycznego
`, `
przeznaczenie certyfikatu
`, `
czas jego ważności
`], 1),
    new ClosedQuestion(`
Które z poniższych zdań najlepiej opisuje atak personalny?
`,
      [`
nieautoryzowane wykrywanie usług sieciowych
`, `
włamanie do sieci w celu podniesienia uprawnień użytkownika
`, `
wyłączenie usług dla uprawnionych użytkowników
`, `
zniszczenie informacji użytkownika
`], 3),
    new ClosedQuestion(`
Skrót CERT oznacza:
`,
      [`
urząd certyfikacji podpisów cyfrowych
`, `
centrum badań telekomunikacyjnych
`, `
stowarzyszenie nadawców radiowo-telewizyjnych
`, `
centrum ostrzegania przed naruszeniami bezpieczeństwa
`], 3),
    new ClosedQuestion(`
Na jakiej płaszczyźnie nie występuje wojna informatyczna?
`,
      [`
globalnej
`, `
osiedlowej
`, `
korporacyjnej
`, `
persolnalnej
`], 1),
    new ClosedQuestion(`
Które z poniższych określeń nie należy do schematu "AAA"?
`,
      [`
szyfrowanie
`, `
uwierzytelnianie
`, `
autoryzacja
`, `
audyt
`], 0),
    new ClosedQuestion(`
Które z poniższych zdań opisuje klasy zagrożeń ze strony Internetu?
`,
      [`
uzyskanie dostępu do danych przez osoby niepowołane
`, `
uzyskanie dostępu do mocy obliczeniowej przez osoby niepowołane
`, `
utrata danych na skutek złośliwej ingerencji
`, `
wszystkie wymienione
`], 3),
    new ClosedQuestion(`
Skojarz terminy z definicjami: 1. robaki, 2. wirusy, 3. konie trojańskie, 4. bomby logiczne, 5.
realizują ukryte funkcje szpiegowskie, 6. powielają się bez ograniczeń i dezorganizują pracę
systemu, 7. modyfikują programy-nosicieli i atakują system, 8. niszczą system po spełnieniu
odpowiednich warunków:
`,
      [`
(1-8), (2-6), (3-7), (4-5)
`, `
(1-7), (2-6), (3-8), (4-5)
`, `
(1-6), (2-7), (3-5), (4-8)
`, `
(1-5), (2-8), (3-6), (4-7)
`], 2),
    new ClosedQuestion(`
Do jakich działań naruszających bezpieczeństwo jest wykorzystywany sniffing?
`,
      [`
analiza jednostek danych protokołów
`, `
nadzorowanie zdarzeń
`, `
maskarada
`, `
szpiegowanie
`], 3),
    new ClosedQuestion(`
Metoda słownikowa jest używana w:
`,
      [`
blokadzie usług
`, `
inżynierii socjalnej
`, `
szpiegostwie przemysłowym
`, `
szpiegostwie
`], 3),
    new ClosedQuestion(`
Wojna informatyczna to:
`,
      [`
niszczenie informacji
`, `
niszczenie urządzeń telekomunikacyjnych
`, `
fałszowanie danych
`, `
wszystkie wymienione
`], 3),
    new ClosedQuestion(`
Która kategoria włamywaczy jest najmniej niebezpieczna dla firmy?
`,
      [`
szpiedzy
`, `
turyści
`, `
wandale
`, `
zdobywcy
`], 1),
    new ClosedQuestion(`
System firewall służy do ochrony przed:
`,
      [`
atakiem z sieci publicznej
`, `
wirusami
`, `
spamami
`, `
naruszeniem poufności danych
`], 0),
    new ClosedQuestion(`
W której warstwie architektury TCP/IP działa brama połączeniowa?
`,
      [`
dostępu do podsieci
`, `
sieciowej
`, `
transportowej
`, `
aplikacji
`], 2),
    new ClosedQuestion(`
Inżynieria socjalna służy do:
`,
      [`
rozsyłania wirusów
`, `
uzyskania dostępu do sieci
`, `
przenoszenia koni trojańskich
`, `
fałszowania danych
`], 1),
    new ClosedQuestion(`
Funkcja skrótu pozwala na weryfikację:
`,
      [`
zastosowanych kluczy
`, `
poufności danych
`, `
pochodzenia danych
`, `
integralności danych
`], 3),
    new ClosedQuestion(`
Token, który generuje hasło jednokrotne w ustalonym przedziale czasu jest:
`,
      [`
asynchronicznym tokenem dynamicznym
`, `
tokenem wrażliwym na czas
`, `
synchronicznym tokenem dynamicznym
`, `
tokenem hasło-odzew
`], 2),
    new ClosedQuestion(`
Który z poniższych atrybutów informacji służy do jej klasyfikacji z punktu widzenia
bezpieczeństwa?
`,
      [`
wartość
`, `
wiek
`, `
rozmiar
`, `
postać
`], 0),
    new ClosedQuestion(`
Które z poniższych określeń nie opisuje celu zapewnienia integralności danych?
`,
      [`
zapobieganie celowej modyfikacji informacji przez osoby nieuprawnione
`, `
zapobieganie nieumyślnej modyfikacji informacji przez osoby uprawnione
`, `
zachowanie spójności informacji
`, `
zaufanie pracownikowi
`], 3),
    new ClosedQuestion(`
Hasła dynamiczne służą do:
`,
      [`
autoryzacji
`, `
uwierzytelniania
`, `
certyfikacji
`, `
szyfrowania
`], 1),
    new ClosedQuestion(`
Identyfikacja użytkownika polega na:
`,
      [`
przedstawieniu identyfikatora
`, `
przedstawieniu hasła
`, `
przedstawieniu tajnej informacji
`, `
uwierzytelnieniu
`], 3),
    new ClosedQuestion(`
Który rodzaj złośliwych programów nie wymaga nosicieli?
`,
      [`
bomby logiczne
`, `
konie trojańskie
`, `
robaki
`, `
wirusy
`], 2),
    new ClosedQuestion(`
Które z poniższych określeń najlepiej opisuje zagrożenie bezpieczeństwa?
`,
      [`
słaby punkt, który może być wykorzystany
`, `
zasób, który może być utracony
`, `
strata poniesiona na skutek ataku
`, `
potencjalny incydent
`], 0),
    new ClosedQuestion(`
Jaki jest poziom zagrożenia bezpieczeństwa przez przechwycenie sygnału w medium?
`,
      [`
zerowy
`, `
mały
`, `
średni
`, `
duży
`], 3),
    new ClosedQuestion(`
Jaki jest cel ataku typu DoS?
`,
      [`
zainfekowanie systemu operacyjnego
`, `
nieautoryzowany dostęp do sieci
`, `
próba złamania szyfru
`, `
blokada usług
`], 3),
    new ClosedQuestion(`
Które z poniższych określeń najlepiej opisuje uwierzytelnianie?
`,
      [`
środki za pomocą których użytkownik prezentuje swoją obecność
`, `
potwierdzenie dowodu tożsamości użytkownika
`, `
zdolność systemu do określenia zachowań użytkownika
`, `
prawa użytkownika dostępu do zasobów
`], 1),
    new ClosedQuestion(`
„Dziury” w systemie można łatać:
`,
      [`
za pomocą poprawek
`, `
za pomocą szyfrowania
`, `
za pomocą ścian ogniowych
`, `
rozbudowując sprzęt
`], 0),
    new ClosedQuestion(`
Strefa DMZ jest charakterystyczna dla konfiguracji:
`,
      [`
screening router
`, `
dual home gateway
`, `
screened host gateway
`, `
screened subnet
`], 3),
    new ClosedQuestion(`
Która z wymienionych niżej grup przyczynia się najczęściej do utraty istotnych informacji w
firmie?
`,
      [`
crackers
`, `
hackers
`, `
pracownicy
`, `
sabotażyści
`], 2),
    new ClosedQuestion(`
IP source routing jest jednym z narzędzi:
`,
      [`
maskarady
`, `
podsłuchiwania
`, `
przekazywania
`, `
przechwytywania połączeń
`], 0),
    new ClosedQuestion(`
Która kategoria włamywaczy jest najbardziej niebezpieczna dla firmy?
`,
      [`
szpiedzy
`, `
turyści
`, `
wandale
`, `
zdobywcy
`], 0),
    new ClosedQuestion(`
Do czego służy biometria?
`,
      [`
badań lekarskich
`, `
kontroli obecności
`, `
rozliczania
`, `
uwierzytelniania
`], 3),
    new ClosedQuestion(`
Wadą filtrowania pakietów jest:
`,
      [`
ograniczona liczba reguł
`, `
przeźroczystość dla użytkownika
`, `
możliwość fałszowania adresów IP
`, `
utrata informacji przez użytkownika
`], 2),
    new ClosedQuestion(`
Które z poniższych określeń najlepiej opisuje hasło identyczne przy każdym logowaniu?
`,
      [`
hasło dynamiczne
`, `
hasło statyczne
`, `
klucz jednorazowy
`, `
umówione zdanie
`], 1),
    new ClosedQuestion(`
Co to jest bastion host?
`,
      [`
zapora ogniowa firmy Milky Way
`, `
ostatnia linia obrony sieci
`, `
druga linia obrony sieci
`, `
pierwsza linia obrony sieci
`], 3),
    new ClosedQuestion(`
Kto używa skanerów?
`,
      [`
dostawcy aplikacji
`, `
dostawcy usług internetowych
`, `
intruzi
`, `
użytkownicy
`], 2),
    new ClosedQuestion(`
Co oznacza skrót „DMZ”?
`,
      [`
Demounted Zone
`, `
Demilitarization Zone
`, `
Domain Main Zone
`, `
Domain Martime Zone
`], 1)
  ];

  public static openQuestions: OpenQuestion[] = [
    new OpenQuestion(`
      question1
    `, `
      answer1
    `)
  ];

}
