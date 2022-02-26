import {OpenQuestion} from "../../questions/open-question.model";

export class ZbsEntry1 {
  public static questions: OpenQuestion[] = [
    new OpenQuestion(`
Masquerading jest specjalizowaną formą translacji adresów typu:
`, `
Źródłowego NAT - SNAT (NAT wiele-do-jednego)
`),
    new OpenQuestion(`
Różnica pomiędzy REJECT a DROP polega na:
`, `
DROP - wyrzuć pakiet bez żadnego komunikatu
REJECT - odrzuć i odeślij informację o błędzie do nadawcy
`),
    new OpenQuestion(`
W procesie nawiązania połączenia TCP jako pierwszy wysyłany jest pakiet IP z ustawionym bitem:
`, `
SYN i ACK
`),
    new OpenQuestion(`
Która z poniższych reguł iptables mówi o tym aby uaktywnić IP masquerading dla pakietów wychodzących przez interfejs ppp0:
`, `
iptables -t TABLICA -A ŁAŃCUCH -o ppp0 -j MASQUERADE
`),
    new OpenQuestion(`
Tabela nat zawiera łańcuchy:
`, `
PREROUTING, OUTPUT i POSTROUTING
`),
    new OpenQuestion(`
Aby ustawić domyślną politykę łańcucha INPUT w domyślnej tablicy na DROP należy dodać regułę:
`, `
iptables -P INPUT DROP
`),
    new OpenQuestion(`
Który z poniższych parametrów umożliwia dodanie reguły na konkretne miejsce w łańcuchu:
`, `
iptables -t tabela -I łańcuch numer_reguły opis_reguły
`),
    new OpenQuestion(`
Translacja portów (PAT ? Port Address Translation) polega na:
`, `
zmianie (translacji) adresów pakietó wysyłanych i odbieranych przez hosty z sieci chronionej
`),
    new OpenQuestion(`
Jaka usługa działa na porcie 53/UDP?
`, `
Domain Name System (DNS)
`),
    new OpenQuestion(`
Jaka usługa działa na porcie 22/TCP?
`, `
Secure Shell (SSH)
`),
    new OpenQuestion(`
Jaka usługa działa na porcie 23/TCP?
`, `
telnet
`),
    new OpenQuestion(`
Jaka usługa działa na porcie 3389/TCP (Windows)?
`, `
Microsoft Terminal Server (RDP)
`),
    new OpenQuestion(`
Jaka usługa działa na porcie 80/TCP?
`, `
Hypertext Transfer Protocol (HTTP)
`),
    new OpenQuestion(`
Jaka powinna być składnia TCPDump, żeby /słuchał na interfejsie eth2/pokazywał adresy MAC ramek/nie tłumaczył adresów IP na nazwy/:
`, `
tcpdump -i eth2 -n -e
`),
    new OpenQuestion(`
Translacja adresów NAT w przypadku wiele-do-jednego polega na:
`, `
wiele adresów prywatnych - jeden publiczny
`),
    new OpenQuestion(`
Z jakimi parametrami urochomić program nc (netcat), żeby działał jako serwer/połączyć się z klientem a.b.c.d na porcie 1234 TCP/UDP:
`, `
nc -l 1234
nc a.b.c.d 1234
`)
  ];
}
