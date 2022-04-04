import {ClosedQuestion} from "../../questions/closed-question.model";
import {MultipleChoiceQuestion} from "../../questions/multiple-choice-question.model";
import {OpenQuestion} from "../../questions/open-question.model";

export class BskExam {
  public static multipleChoiceQuestions: MultipleChoiceQuestion[] = [
    new MultipleChoiceQuestion(`
Czym jest atak ze znanym szyfrogramem? (What is an attack with a known ciphertext?)
Wybierz jedną lub więcej:
`, [`
Odtworzeniem tekstu jawnego na podstawie znajomości części klucza (Restoring of
plaintext basing on the knowledge of the part of the key )
`, `
Odtworzeniem tekstu jawnego na podstawie przechwyconego szyfrogramu (Restoring of
plaintext basing on the intercepted ciphertext )
`, `
Odtworzeniem tekstu jawnego na podstawie znajomości szyfrogramu i fragmentu tekstu
jawnego (Restoring of plaintext basing on the knowledge of the ciphertext and a part of
plaintext )
`, `
Odtworzeniem tekstu jawnego na podstawie liczby przesłanych szyfrogramów
(Restoring of plaintext basing on the number of transmitted ciphertexts )
`], [1]),
    new MultipleChoiceQuestion(`
Funkcja skrótu umożliwia (Hash function allows...) Wybierz jedną lub więcej:
`, [`
Wytworzenie tzw skrótu wiadomości o stałej długości (to create the so-called hash of
fixed length )
`, `
Zaszyfrowanie danych użytkownika (to encrypt the user data )
`, `
Wytworzenie tzw skrótu wiadomości o długości zgodnej z danymi wejściowymi (to
create the so-called a hash of a length same as the length of the input data )
`, `
Uprzypadkowienie danych podczas transmisji strumieniowej (to randomize the data
during the data streaming )
`], [0, 1]),
    new MultipleChoiceQuestion(`
Jak potocznie nazywa się kolejne cykle obliczeń wykonywanych w algorytmie Rijndael?
Wybierz jedną lub więcej:
`, [`
Serie (Series)
`, `
Iteracje (Iterations)
`, `
Rundy (Rounds)
`, `
Cykle (Cycles)
`], [2]),
    new MultipleChoiceQuestion(`
Podpis cyfrowy umożliwia (Digital signature allows to) Wybierz jedną lub więcej
`, [`
Wskazanie odbiorcy rodzaju dokumentu / pliku (Indicate the document / file type to the
recipient )
`, `
Poświadczenie autentyczności dokumentu (Certificate the authenticity of the document )
`, `
Załączenie do dokumentu jego atrybutów (Attach to the document its attributes )
`, `
Zaszyfrowanie dokumentu o dowolnej długości (To encrypting a document of any length
`], [1]),
    new MultipleChoiceQuestion(`
Wyciekiem danych nazywamy... (A data leak is a ...)
`, [`
Odtajnienie danych niejawnych (Declassification of classified data )
`, `
Ujawnienie pewnej ilości danych osobom innym niż administratorzy systemu (Disclosure
of a certain amount of data to people other than system administrators )
`, `
Niewykrywalny przepływ danych do osób nieuprawnionych (Undetectable data flow to
unauthorized persons )
`, `
Bezpieczne przekazanie danych osobom trzecim, np w postaci zaszyfrowanej (Secure
transfer of the data to third parties, e g in encrypted form )
`], [2]),
    new MultipleChoiceQuestion(`
Podczas analizy ryzyka i próbie zwiększenia bezpieczeństwa... (During the risk analysis
and an attempt to increase safety ...)
`, [`
Dąży się do minimalizacji parametru MTBF minimalizując liczbę krytycznych urządzeń
(We aim to minimize the MTBF parameter by minimizing the number of critical devices )
`, `
Poszukuje się optimum pomiędzy nakładem środków a minimalizacją ryzyka (an
optimum between effort and risk minimization is looked for )
`, `
Wybierane są rozwiązania o najniższym koszcie, aby zminimalizować koszty działalności
(The solution with lowest cost is chosen to minimize operational costs )
`, `
Podejmuje się próbę minimalizacji ryzyka za wszelką cenę (An attempt is made to
minimize the risk at all costs )
`], [1]),
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
Udzieleniem uprawnień do wykonania określonych działań nazywamy... (Granting
permissions to perform specific activities is called...)
`, [`
Zapewnienie prywatności (Privacy ensurance )
`, `
Zapewnienie poufności (Confidentiality check )
`, `
Uwierzytelnienie (Authentication )
`, `
Autoryzację (Authorization )
`], [3]),
    new MultipleChoiceQuestion(`
Który z trybów szyfrowania nie zapewnia powiązania pomiędzy blokami szyfrogramu?
(Which of the encryption modes does not provide a connection between the cipher
blocks?)
`, [`
CFB
`, `
CBC
`, `
OFB
`, `
ECB
`], [3]),
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
Jakie główne zagrożenie niesie powszechna dostępność narzędzi do przeprowadzenia
ataków penetracyjnych? (What the main threat is the availability of tools for conducting
the penetration attacks?)
`, [`
Możliwość niewykrycia wszystkich słabych punktów systemu z racji niedoskonałości
oprogramowania (Possibility of miss detection of all weak points of the system due to the
software imperfections )
`, `
Umożliwienie przeprowadzenia prostych ataków na systemy informatyczne przez prawie
każdą osobę (Allowing simple attacks on information systems by almost every person )
`, `
Możliwość testowania opracowywanych systemów informatycznych w celu sprawdzenia
ich odporności na przykładowe ataki (Possibility of testing developed IT systems to
check their resistance to sample attacks )
`, `
Długi czas testów z użyciem gotowych narzędzi (Long testing time )
`], [1, 2]),
    new MultipleChoiceQuestion(`
Do jakiej grupy szyfrów należy algorytm Rijndael/AES? (To which cipher group the
Rijndael / AES algorithm belongs to?)
`, [`
Szyfry blokowe symetryczne (Symmetrical block ciphers )
`, `
Szyfry blokowe asymetryczne (Asymmetrical block ciphers )
`, `
Szyfry strumieniowe asymetryczne (Asymmetrical stream ciphers )
`, `
Szyfry strumieniowe symetryczne (Symmetrical stream ciphers )
`], [0, 3]),
    new MultipleChoiceQuestion(`
Na czym polega jednokierunkowość funkcji skrótu? (What is the principle of operation of
the one-direction hash function?)
`, [`
Niemożność odtworzenia danych na podstawie skrótu (Disability of restoring the data
from the hash )
`, `
Niemożność wykonania skrótu z wykonanego skrótu (Disability of creating a new hash
from a hash )
`, `
Niemożność wykonania skrótu wiadomości o długości innej niż wytwarzany skrót
(Disability of making a hash with a length different from the length of the input data )
`, `
Niemożność wykonania skrótu przez osobę weryfikującą wytworzony skrót wiadomości
(Disability of creating the hash by a person verifying the hash value )
`], [0]),
    new MultipleChoiceQuestion(`
Protokół Kerberos jest... (Kerberos protocol is ...)
`, [`
Protokołem negocjacji zabezpieczeń i ustalania szybkości szyfrowania (Protocol for
negotiating the security level and determining the encryption rate )
`, `
Protokołem uwierzytelnienia symetrycznego (Symmetric authentication protocol )
`, `
Protokołem uwierzytelniania asymetrycznego (Asymmetric authentication protocol )
`, `
Protokołem stosowanym do szyfrowania transmisji danych strumieniowych (The protocol
used to encrypt a stream data transmission )
`], [1]),
    new MultipleChoiceQuestion(`
Jak nie należy chronić systemu przed atakami typu Denial of Service? (What activity is not
correct during protecting the system against the Denial of Service attacks?)
`, [`
Regularnie monitorować działanie systemu (Frequently monitor the system operation )
`, `
Implementując rozwiązania zalecanych przez instytucje standaryzujące (Implementing
the solutions pointed by the standardizing institutions )
`, `
Stosować śluzy ogniowe nieblokujące pakietów rozgłoszeniowych (Using the firewalls
that do not block the broadcast packets )
`, `
Stosować hartowanie systemu (Apply system hardening )
`], [2]),
    new MultipleChoiceQuestion(`
Które z elementów nie podlegają uwierzytelnieniu? (Which elements are not a subject of
authentication?)
`, [`
Odbiorca dokumentów (Recipient of the document )
`, `
Zawartość dokumentów (Content of the documents )
`, `
Źródło wirusów komputerowych (Source of the computer viruses )
`, `
Osoba przesyłająca dokumenty (The person sending the documents )
`], [2]),
    new MultipleChoiceQuestion(`
Wskaż cechę algorytmu RSA (Indicate the feature of the RSA algorithm )
`, [`
Nie jest używany w protokołach bezpiecznej wymiany danych (Not used in secure data
exchange protocols )
`, `
Jest on przeznaczony do szyfrowania danych strumieniowych (It is intended for
encryption of data stream )
`, `
Jest wolniejszy niż algorytm Rijndael / AES (It is slower than the Rijndael / AES
algorithm )
`, `
Można go użyć do uwierzytelniania użytkowników (It can be used to authenticate users )
`], [2, 3]),
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
Wskaż typ audytu (Point the types of audit )
`, [`
Finansowy (Financial)
`, `
Operacyjny (Operational)
`, `
Informatyczny (IT) (IT audit)
`], [0, 1, 2]),
    new MultipleChoiceQuestion(`
Protokół SESAME nie umożliwia... (SESAME protocol doesn’t allow to ...)
`, [`
Kontrolę dostępu do zasobów i usług opartych na uwierzytelnianiu (Control access to
resources and services based on authentication )
`, `
Pracę wyłącznie w rozproszonym środowisku heterogenicznym (Work only in a mesh
homogeneous environment)
`, `
Zapewnienia spójności i tajności przesyłanych danych (Ensure consistency and
confidentiality of the transferred data )
`, `
Unifikacji tylko użytkownika z punktu widzenia uprawnień (Unify user and application
from the point of view of permissions )
`], [0, 1, 3]),
    new MultipleChoiceQuestion(`
Jakie jest prawdopodobieństwo przechwycenia danych przez osobę nieuprawnioną w
przypadku użycia dowodu o wiedzy zerowej? (What is the probability of interception of
the data by an unauthorized person when a zero-knowledge proof was used?)
`, [`
Prawdopodobieństwo jest bliskie zeru (The probability is close zero )
`, `
Prawdopodobieństwo jest równe zero (The probability is equal zero )
`, `
Prawdopodobieństwo wynosi 1 (The probability is equal 1 )
`, `
Prawdopodobieństwo wynosi 0,5 (The probability is equal 0 5 )
`], [0]),
    new MultipleChoiceQuestion(`
Czym charakteryzują się klucze w kryptografii symetrycznej i asymetrycznej? (What is the
dependence between keys in symmetrical and asymmetric cryptography?)
`, [`
W każdym przypadku te same klucze używane są do szyfrowania i deszyfrowania (In
each case, the same keys are used for encryption and decryption )
`, `
Klucze są takiej samej długości (The keys are the same length )
`, `
W kryptografii asymetrycznej jeden z kluczy jest jawny (In asymmetric cryptography, one
of the keys is not confidential )
`, `
Klucze nie mogą być wytwarzane przez użytkowników (Keys can not be generated by
users )
`], [2]),
    new MultipleChoiceQuestion(`
Którą z linii przesyłowych da się podsłuchać? (Which line can be wiretapped?)
`, [`
Linię przewodową typu RS-232/RS-485 (RS-232/RS-455 lines )
`, `
Połączenie radiowe (Radio link )
`, `
Linię optyczną (Optic line )
`, `
Linię przewodową sieci Ethernet/Token Ring (Ethernet or Token Ring lines )
`], [0, 1, 2, 3]),
    new MultipleChoiceQuestion(`
Jaki rodzaj kryptografii stosowany jest w odniesieniu do kart inteligentnych? (What type
of cryptography is used in smart cards?)
`, [`
Symetryczna, np algorytm RSA (Symmetrical, e g RSA algorithm )
`, `
Asymetryczna, np algorytm RSA (Asymmetric, e g RSA algorithm )
`, `
Symetryczne klucze jednorazowe (Symmetrical single-use keys )
`, `
Symetryczne funkcje skrótu (Symmetrical hash functions )
`], [1]),
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
Atak typu sniffing polega na ... (Sniffing attack is based on...)
`, [`
Podszyciu się pod innego użytkownika (Acting a role of a different user )
`, `
Przechwytywaniu pakietów sieciowych (Intercepting network packets )
`, `
Przejęciu dostępnych zasobów sieciowych (Taking over the available network resources )
`, `
Fałszowaniu kluczy uwierzytelniających (Falsification of authentication keys )
`], [1]),
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
Atak typu Denial of Service polega na:
`, [`
Zmniejszeniu prawdopodobieństwa wykrycia ataku (Lowering the probability of detection
of an attack )
`, `
Wykradzeniu tajnych danych użytkownika (Stealing the user confidential data )
`, `
Uniemożliwieniu normalnego działania systemu (Preventing the normal operation of the
system )
`, `
Usunięciu danych użytkownika (Deleting the user data )
`], [2]),
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
W procesie zabezpieczania systemu informatycznego udział biorą... (In the process of
securing the IT system take part ...)
`, [`
Wyłącznie pracownicy firm zewnętrznych (Only employees of external companies)
`, `
Osoby na szczeblu kierowniczym (People at management level )
`, `
Osoby zarządzające oraz pracownicy firmy (Managers and employees of the company )
`, `
Osoby zarządzające, pracownicy oraz użytkownicy (Managers, employees and users )
`], [1, 2]),
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
Ocenę systemów przeprowadza się w celu... (Systems evaluation is carried out for the
purpose of...)
`, [`
Określenia czasu wystąpienia awarii systemu (Determining the exact time of system
failure )
`, `
Spełnienia wymogów prawnych producentów podzespołów bazowych serwerowni
(Fulfilling the legal requirements for manufacturers of server equipment )
`, `
Opracowania specyfikacji systemu (Developing the system specifications )
`, `
Okresowej oceny bezpieczeństwa systemu, znalezienia i poprawienia istniejących
błędów (Periodic evaluation of system security, finding and correcting existing errors )
`], [1, 3]),
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
W jaki sposób sprzętowo zwiększa się bezpieczeństwo systemu informatycznego? (How
hardware security of the IT system is increased?)
`, [`
Stosowane są dodatkowe linie zasilające oraz łącza telekomunikacyjne (Additional
power and communicational lines are used )
`, `
Minimalizując liczbę serwerów w celu zmniejszenia prawdopodobieństwa awarii
`, `
Stosując sporadyczną wymianę przepracowanych podzespołów (By sporadic
replacement of overworked components )
`, `
Stosując nadmiarowe podzespoły bazowe w serwerach (By using redundant
components in servers )
`], [0, 2, 3]),
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
Wskaż rolę sprzężenia zwrotnego w procesie ewaluacji systemu IT (Indicate the role of a
feedback in the process of IT system evaluation )
`, [`
Umożliwia zlecenie ewaluacji firmie zewnętrznej (Allows to hire an external company to
perform the evaluation )
`, `
Zapewnienie przekazania danych o audycie do użytkownika końcowego (Ensuring the
transfer of the audit results to the end user )
`, `
Zapewnia przepływ informacji pomiędzy kierownictwem a pracownikami (Provides
information flow between managers and employees )
`, `
Możliwość wyeliminowania występujących w systemie błędów (Ability to eliminate errors
in the system )
`], [3]),
    new MultipleChoiceQuestion(`
Podczas analizy ryzyka zdarzeniem krytycznym określamy... (During the risk assessment,
we determine the critical event )
`, [`
Zdarzenie o niskim prawdopodobieństwie wystąpienia i o wysokich konsekwencjach (An
event with a low probability of occurrence and with high consequences )
`, `
Zdarzenie o średnim prawdopodobieństwie i średnich konsekwencjach (An event with
medium probability and medium consequences )
`, `
Zdarzenie o wysokim prawdopodobieństwie wystąpienia i o wysokich konsekwencjach
(An event with a high probability of occurrence and with high consequences )
`, `
Zdarzenie prawie niemożliwe o niskich konsekwencjach (An almost impossible event
with low consequences)
`], [0])
  ];

  public static openQuestions: OpenQuestion[] = [
    new OpenQuestion(`
Wyjaśnij różnicę pomiędzy atakiem ze znanym szyfrogramem a atakiem ze znanym tekstem jawnym.
`, `
Atak ze znanym tekstem jawnym zakłada, że napastnik dysponuje zarówno szyfrogramami, jak i ich tekstami jawnymi. W tym drugim mamy tylko szyfrogram i próbujemy odtworzyć jak najwięcej oryginalnych wiadomości.
`),
    new OpenQuestion(`
Bezpieczeństwem systemu nazywamy...
`, `
Bezpieczeństwo to pożądany stan (atrybut) systemu danych (systemu gromadzenia, przechowywania, przetwarzania i przesyłania danych - sieciowego systemu informatycznego).
`),
    new OpenQuestion(`
Na czym polega różnica pomiędzy algorytmami kryptografii symetrycznej i asymetrycznej? (What is the difference between symmetric and asymmetric cryptography algorithms?)
`, `
W algorytmach kryptografii symetrycznej używa się tego samego klucza do szyfrowania i
odszyfrowania wiadomości W asymetrycznej używa się różnych kluczy do tych procesów
`),
    new OpenQuestion(`
Ile czasu zajmuje złamanie szyfrogramu utworzonego z użyciem algorytmu AES z kluczem o długości 128 bitów?
`, `
2^127 sekund pomnożone przez ilość operacji
`),
    new OpenQuestion(`
Na czym polega kolizja wektorów inicjujących?
`, `
To taka sytuacja, kiedy różne wiadomości mają taką samą wartość funkcji skrótu.
`),
  ];

  public static nonExamOpenQuestions: OpenQuestion[] = [
    new OpenQuestion(`
    Czym jest uwierzytelnianie?
    `, `
    Sprawdzenie wiarygodności, autentyczności dokumentu (skąd pochodzi, kiedy powstał, przez kogo utworzony, itp.) a także strony, osoby (identyfikacja) - czy jest tym za kogo się podaje.
    `),new OpenQuestion(`
    Czym jest autoryzacja?
    `, `
    Nadawanie uprawnień do wykoniania określonych działań na wskazanych obiektach lub podmiotach.
    `),new OpenQuestion(`
    Czym jest poufność?
    `, `
    Zapewnienie, że informacja jest dostępna tylko dla uprawnionych do posiadania dostępu do niej.
    `),new OpenQuestion(`
    Czym jest prywatność?
    `, `
    Prawo i/lub zdolność do ochrony danych osobistych, poszerzone o zdolność do zapobiegania wtargnięciom w osobistą przestrzeń.
    Obejmuje to nie tylko dane osobiste, takie jak przebieg leczenia, historia pracy zawodowej, lokalizację i wykonywane czynności, lecz także również towarzyszące w tym inne osoby.
    `),new OpenQuestion(`
    Co to jest spójność?
    `, `
    Zapewnienie, że informacje i dane nie uległy nieuprawnionej zmianie ani zniszczeniu, a także zostały zachowane zwięzki pomiędzy danymi.
    `),new OpenQuestion(`
    Czym jest kontrola dostępu?
    `, `
    Zdolność do ograniczania i kontroli dostępu do systemu i jego zasobów - polega na uwierzytelnieniu, a następnie kontroli uprawnień do wykonania żadanej czynności.
    `),new OpenQuestion(`
    Jaki jest związek między bezpieczeństwem a dostępnością?
    `, `
    Nie jest bezpośrednim czynnikiem bezpieczeństwa, ale ma w wielu przypadkach kluczowe znaczenie. (np.: dostępność serwisów uwierzytelniających)
    `),new OpenQuestion(`
    Czym jest niezaprzeczalność?
    `, `
    Niezdolność do zaprzeczenia komunikacji lub wykonania kreślonego działania (np.: podpisania dokumentu, transferu plików, modyfikacji kodu) wówczas, gdy dane zdarzenia miało miejsce.
    `), new OpenQuestion(`
    O czym mówi zasada najniższych uprawnień?
    `, `
    Minimalne przywileje potrzebne do normalnych obowiązków.
    `)/*,new OpenQuestion(`

    `, `

    `),new OpenQuestion(`

    `, `

    `),new OpenQuestion(`

    `, `

    `),new OpenQuestion(`

    `, `

    `),new OpenQuestion(`

    `, `

    `),new OpenQuestion(`

    `, `

    `),new OpenQuestion(`

    `, `

    `),new OpenQuestion(`

    `, `

    `),new OpenQuestion(`

    `, `

    `),new OpenQuestion(`

    `, `

    `),new OpenQuestion(`

    `, `

    `),new OpenQuestion(`

    `, `

    `),*/
  ];

}
