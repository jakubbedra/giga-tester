import {MultipleChoiceQuestion} from "../../questions/multiple-choice-question.model";
import {OpenQuestion} from "../../questions/open-question.model";

export class BskK2 {
  public static multipleChoiceQuestions: MultipleChoiceQuestion[] = [
    new MultipleChoiceQuestion(`
Jakie jest podstawowe założenie system detekcji intruzów? (What is the basic assumption
of an intrusion detection system?)
`, [`
Możliwe jest wykrycie intruza (It is possible to discover an intruder)
`, `
System detekcji intruzów zajmuje minimalną część zasobów systemu (The IDS system
uses only a minor part of the system resources)
`, `
System detekcji intruzów jest odporny na ataki typu Denial of Service (The IDS system is
resistant to the Denial of Service attacks)
`, `
Włamania wykrywane są z prawdopodobieństwem bliskim 100% (The intruder can be
detected with a probability close to 100%)
`], [0, 2]),
    new MultipleChoiceQuestion(`
Detekcja sygnaturowa w systemach detekcji intruzów polega na: (The signature detection
in the IDS systems is based on:)
`, [`
Wykryciu anomalii w zwyczajnym działaniu systemu (Detection of anomalies in the user’s
behaviour )
`, `
Wykryciu stopniowej zmiany zachowań użytkowników (Detection of small changes in the
behaviour of the users )
`, `
Wykryciu charakterystycznych zachowań w działaniu systemu (Detection of characteristic
behaviour )
`, `
Wykryciu uruchomienia programu z innymi uprawnieniami (Detection of executing the
program with different rights )
`], [2]),
    new MultipleChoiceQuestion(`
Atak typu Man in the Middle w sieciach typu 802.11 polega na: (Man in the middle attack in
the 802.11 networks is based on:
`, [`
Tworzeniu fałszywej stacji AP i pośredniczenie w komunikacji użytkowników (Creating a
false access point and intermediating in user’s communications )
`, `
Wytworzenie fałszywej wiadomości, która będzie potraktowana jako rzeczywista
(Creating a false message that will be treated as real )
`, `
Wytworzeniu silnego sygnału zagłuszającego blokującego transmisję (Emitting a strong
jamming signal )
`, `
Wysyłaniu pakietów rozgłoszeniowych do dwóch użytkowników (Sending a broadcast
packets to two users )
`], [0]),
    new MultipleChoiceQuestion(`
Gdzie nie spotyka się systemów detekcji intruzów? (Where we cannot see the IDS
systems?) Wybierz jedną lub więcej: (wszędzie się spotyka, nic nie zaznaczamy)
`, [`
W obszarze sieci szkieletowej (In the area of the core network )
`, `
Po stronie serwerów WWW (On the side of the WWW servers )
`, `
Wewnątrz sieci lokalnych
`, `
W obrębie sieci za zaporą ogniową
`, `
Żadna z pozostałych odpowiedzi nie jest poprawna
`], [4]),
    new MultipleChoiceQuestion(`
Który z modeli kontroli dostępu umożliwia zastosowanie dodatkowego modelu kontroli
dostępu? (Which of the access control models allows the usage of an additional access
control model?)
`, [`
TE
`, `
MAC
`, `
DAC
`, `
RBAC
`], [1, 2, 3]),
    new MultipleChoiceQuestion(`
Fałszywym odrzuceniem nazywamy (What is called as false detection?)
`, [`
Anulowanie działania w przypadku zaistnienia zdarzenia o wyższym priorytecie
(Cancelling the action when a more critical threat occurs)
`, `
Zaprzestanie działań prewencyjnych w trakcie usuwania zagrożenia (Stopping the
prevention during removing the threat consequences)
`, `
Odrzucenie zdarzenia będącego zagrożeniem (Rejection of an event that is a threat)
`, `
Odrzucenie zagrożenia niebędącym krytycznym zagrożeniem (Rejection of a threat that
is not crucial)
`], [3]),
    new MultipleChoiceQuestion(`
Który ze standardów nie dotyczy sieci radiowych Wi-Fi/Bluetooth/WiMax? (Which
standard is not related to WiFi/Bluetooth or WiMax networks?)
`, [`
802.11i
`, `
802.11.ax
`, `
802.16e
`, `
802.15.2
`], [3]),
    new MultipleChoiceQuestion(`
Który z rodzajów spoofingu jest prawdziwy? (Which type of spoofing is real?)
`, [`
Spoofing APR (APR spoofing )
`, `
Spoofing TCP (TCP spoofing )
`, `
Spoofing DNS (DNS spoofing )
`, `
Spoofing SSL (SSL spoofing )
`], [0, 1, 2]),
    new MultipleChoiceQuestion(`
Jaki rodzaj ramek nie jest spotykany w sieci typu 802.11? (What kinds of frames are not
present in the 802.11 networks?)
`, [`
Ramki danych (Data frames )
`, `
Ramki organizacyjne (Organizational frames )
`, `
Ramki szyfrujące (Encryption frames )
`, `
Ramki sterujące (Control frames )
`], [0, 1, 3]),
    new MultipleChoiceQuestion(`
Który rodzaj wirusa komputerowego dopisuje swój kod za kodem zasadniczym
programu? (Which virus adds its code after the original program code?)
`, [`
Overwrite
`, `
Prepender
`, `
Appender
`, `
Apprepender
`], [2]),
    new MultipleChoiceQuestion(`
Obniżenie przepustowości sieci może być powodowane przez: (The reduction of the
network throughput can be caused by:)
`, [`
Zastosowaniu systemu detekcji intruzów pochłaniającego zasoby systemu (Using the
resource consuming IDS system )
`, `
Nieautoryzowanym zajęciu większości zasobów czasowo-częstotliwościowych sieci
(Unauthorized occupation of the network resources )
`, `
Sporadycznym przesyłaniu pakietów IP ze zmodyfikowanym nagłówkiem (Sporadic
sending of IP packets with modified header )
`, `
Celowym korzystaniu ze skomplikowanego algorytmu zabezpieczającego transmisję
(algorytmu szyfrującego) (Using complicated securing/ciphering algorithm )
`], [1]),
    new MultipleChoiceQuestion(`
Czym jest transakcja? (What is the transaction?)
`, [`
Procedura realizowana zawsze bez obecności TTP (A procedure realized always
without TTP )
`, `
Zestaw instrukcji przeznaczony do wykrywania nieautoryzowanego dostępu (A set of
instructions used to detect an intruder )
`, `
Jest to element protokołu sieciowego TCP/IP (Is an element of the TCP/IP protocol )
`, `
Unormowana procedura wykonywana przez dwie strony (Standardized procedure
realized by two subjects )
`], [3]),
    new MultipleChoiceQuestion(`
Które z protokołów używane są w procesie uwierzytelnienia w sieci 802.11? (Which
protocols are used during authentication in 802.11 networks?)
`, [`
802.1x, LEAP
`, `
Radius, PEAP
`, `
WPF, EAP-MD5
`, `
WAP, PEAP
`], [0, 1]),
    new MultipleChoiceQuestion(`
Do procesu zarządzania transakcjami należy... (During transaction management
process...)
`, [`
Przeprowadzenie jedynie certyfikacji, bez konieczności weryfikacji poprawności
transakcji (The transaction is certified, but it is not verified )
`, `
Rejestrowanie i unieważnienie transakcji (The transaction can be registering and
cancelled )
`, `
Archiwizowanie certyfikatów transakcji (Archiving the transaction certificates )
`, `
Pominięcie procesu weryfikacji zaufanych klientów (Omitting of the verification of
thrusted clients )
`], [1, 2]),
    new MultipleChoiceQuestion(`
Które z narzędzi nie jest wykorzystywane podczas realizowania transakcji internetowych?
(Which tool is not used during internet transaction?)
`, [`
Algorytmy kryptograficzne (Cryptographic algorithms )
`, `
System detekcji intruzów (Intrusion detection system )
`, `
Generatory liczb pseudolosowych (Pseudorandom generators )
`, `
Jednokierunkowe funkcje skrótu (Hash functions )
`], [1]),
    new MultipleChoiceQuestion(`
Która z akcji nie jest przypisywana działaniu wirusów typu robak? (Which action is not an
action of a worm virus?)
`, [`
Modyfikowanie programu gospodarza (Modification of the host program )
`, `
Zajęcie dostępnych zasobów systemu operacyjnego (Taking the available system
resources )
`, `
Usuwanie i niszczenie danych (Deleting and removing user data )
`, `
Wykradzenie danych użytkownika (Stealing the user’s data )
`], [3]),
    new MultipleChoiceQuestion(`
W sieciach radiowych zgodnych ze standardem Bluetooth... (In the Bluetooth radio
networks ...)
`, [`
Wprowadzany numer PIN używany jest jako identyfikator użytkownika w danej sieci (The
PIN number is used as a user identifier in the network )
`, `
Stosowana jest kryptografia symetryczna w procesie uwierzytelnienia oraz podczas
szyfrowania przesyłanych danych (A symmetric cryptography is used during
authentication and data encryption )
`, `
Możliwe jest przesyłanie danych pomiędzy dwoma użytkownikami na dystansie do 200 m
(It is possible to send data between users over a distance of 200m )
`, `
Nie stosuje się szyfrowania wzajemnego uwierzytelnienia (A mutual authentication is not
used )
`], [0, 1]),
    new MultipleChoiceQuestion(`
Które z zagrożeń/problemów nie dotyczy wektorów inicjujących? (Which threat is not
related to the initializing vectors?)
`, [`
Licznikowy tryb wytwarzania wektorów inicjujących (Counter mode during generating the
initialize vectors )
`, `
Losowość generowanych wektorów inicjujących (Randomness of generated initialize
vectors )
`, `
Kolizja wektorów inicjujących (Collision of initializing vectors ) (przecież to akurat
dotyczy, nie?)
`, `
Znany początkowy stan generatora wektorów inicjujących (Known initial state of the
initialize vector generator )
`], [1]),
    new MultipleChoiceQuestion(`
Jaka trudność występuje podczas implementacji modelu RBAC? (What is the difficulty in
the implementation of the RBAC model?)
`, [`
Trudność w administrowaniu systemu (The difficulty of the administration process )
`, `
Trudność w dopasowaniu ról do struktury organizacji (The difficulty of matching roles to
company’s structure )
`, `
Ograniczenie liczby możliwych ról (Limitation of maximum number of roles )
`, `
Brak dostępnego uniwersalnego rozwiązania. (Unavailability of a universal solution.)
`], [1, 3]),
    new MultipleChoiceQuestion(`
Która z technik umożliwia wykrycie nieznanego wirusa komputerowego? (Which
technique can be used to detect unknown virus?)
`, [`
Niemożliwe jest wykrycie nieznanych wirusów (It is not possible to detect unknown
viruses )
`, `
Kontrola spójności (Consistency control )
`, `
Skanowanie plików (File scanning )
`, `
Blokowanie aktywności w systemie operacyjnym (Blocking the activity in the operating
system )
`], [1, 3]),
    new MultipleChoiceQuestion(`
Która z cech jest niepożądana w ujęciu bezpieczeństwa poczty elektronicznej? (Which
feature is undesirable with respect to the security of e-mail?)
`, [`
Zapewnienie poufności wiadomości (Ensuring the confidentiality of the message )
`, `
Możliwość wyparcia się treści (Possibility of repudiation )
`, `
Weryfikacja tożsamości tylko nadawcy wiadomości (Verification only the sender identity )
`, `
Kontrola spójności wiadomości (Consistency of the e-mail )
`], [1, 2]),
    new MultipleChoiceQuestion(`
W jakim celu w tzw bezpiecznych stacjach roboczych stosowane jest silne ekranowanie
elektromagnetyczne? (What is the purpose of strong electromagnetic shields in the safe
workstations?)
`, [`
W celu zwiększenia niezawodności stacji roboczych (To increase the reliability of the
workstations )
`, `
W celu ochrony pracownika przed silnym polem elektromagnetycznym (To protect the
operator against the electromagnetic field )
`, `
W celu zachowania wysokiej kompatybilności elektromagnetycznej ze sprzętem
komercyjnym (To ensure the compatibility with the commercial solutions )
`, `
W celu uniemożliwienia wykrycia i przechwycenia emisji elektromagnetycznej (To make
it impossible to intercept the electromagnetic emission )
`], [0, 2]),
    new MultipleChoiceQuestion(`
W jakim celu stosowane jest tunelowanie SSL/TSL albo połączenia VPN? (Why we use the
SSL/TSL or VPN connections?) Wybierz jedną lub więcej:
`, [`
Zabezpieczenia transmisji w sieciach niezabezpieczonych (To secure the transmission in
the unprotected networks )
`, `
Wyeliminowania konieczności stosowania połączeń przewodowych (To remove the
wired connections )
`, `
W celu eliminacji konieczności szyfrowania przesyłanych danych (To eliminate the
encryption of transferred data )
`, `
W celu wyeliminowania konieczności uwierzytelnienia (In order to eliminate the
authentication )
`], [1]),
    new MultipleChoiceQuestion(`
Do jakiego umiejscowienia nie można przyporządkować zabezpieczeń serwera WWW? (To
which location the web server security cannot be assigned?)
`, [`
Zabezpieczenia po stronie serwera (Server-side security )
`, `
Zabezpieczenia po stronie aplikacji WWW (Security on the side of WWW application )
`, `
Zabezpieczenia po stronie systemu (System side security )
`, `
Zabezpieczenia po stronie dostawcy usługi sieciowej (On the side of network service
provider )
`], [3]),
    new MultipleChoiceQuestion(`
<placeholder>
`, [`
#############
`], [0])
  ];

  public static openQuestions: OpenQuestion[] = [
    new OpenQuestion(`
Na czym polega kolizja wektorów inicjujących?
`, `
To taka sytuacja, kiedy różne wiadomości mają taką samą wartość funkcji skrótu.
`)
  ];

}
