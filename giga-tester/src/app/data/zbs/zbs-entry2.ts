import {OpenQuestion} from "../../questions/open-question.model";

export class ZbsEntry2 {
  public static questions: OpenQuestion[] = [
    new OpenQuestion(`
PKI jest definiowane następującym standardem:
`, `
X.509 (opracowany przez ITU-T)
`),
    new OpenQuestion(`
Bezpieczeństwo zapewniane przez PKI zależy od:
`, `
bezpieczeństwa przekazywania certyfikatu stosowanego urzędu certyfikacji
`),
    new OpenQuestion(`
Certyfikat zawsze zawiera
`, `
-klucz pobliczny podmiotu
-informacje o reprezentowanym podmiocie
`),
    new OpenQuestion(`
Certyfikat może zawierać
`, `
-klucze publiczne urzędów potwierdzających tożsamość
-klucz prywatny do celów archiwizacji
`),
    new OpenQuestion(`
Certyfikat konkretnego podmiotu jest podpisywany
`, `
kluczem prywatnym CA
`),
    new OpenQuestion(`
Proces elektronicznego podpisywania dokumentu polega na
`, `
podpisaniu dokumentu kluczem prywatnym (przez nadawcę)
`),
    new OpenQuestion(`
Jaką rolę w procesie weryfikowania tożsamości użytkownika pełni CA?
`, `
potwierdza tożsamość
`),
    new OpenQuestion(`
Protokół 802.1x służy do
`, `
bezpiecznego i scentralizowanego uwierzytelniania użytkowników w operatorskichsieciach dostępowych opartych o różnego rodzaju rozwiązania typu Dial-up
`),
    new OpenQuestion(`
Strony partycypujące w procesie uwierzytelniania 802.1x
`, `
-suplikant
-serwer uwierzytelniający
-NAS (np, klient RADIUS)
`),
    new OpenQuestion(`
Metody uwierzytelniania, jakie mogą być przenoszone przez protokół EAP:
`, `
-TLS
-TTLS
-PEAP
`),
    new OpenQuestion(`
Proces elektronicznego podpisywania dokumentu polega na zaszyfrowaniu:
`, `
skrótu danych kluczem prywatnym
`),
    new OpenQuestion(`
Certyfikat może zawierać (włączając pola obowiązkowe):
`, `
-klucz publiczny urzędu certyfikacji potwierdzającego tożsamość podmiotu
-klucz prywatny podmiotu certyfikowanego
-dane podmiotu
-klucz publiczny podmiotu certyfikowanego
`),
    new OpenQuestion(`
Certyfikat konkretnego podmiotu nie jest podpisywany:
`, `
-kluczem publicznym CA
-kluczem publicznym podmiotu i później CA
-kluczem publicznym podmiotu
`),
    new OpenQuestion(`
Cechą kryptografii asymetrycznej jest:
`, `
-korzystanie z dwóch kluczy
-większa złożoność obliczeniowa od kryptografii symetrycznej
`),
    new OpenQuestion(`
PKI jest zdefiniowane następującym standardem:
`, `
X.509
`)
  ];
}
