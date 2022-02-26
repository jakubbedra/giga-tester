import {OpenQuestion} from "../../questions/open-question.model";

export class ZbsEntry4 {
  public static questions: OpenQuestion[] = [
    new OpenQuestion(`
W przypadku protokołu SNMP hierarchiczna baza danych opisująca parametry konfiguracji urządzenia jest udostępniana poprzez struktury:
`, `
MIB
`),
    new OpenQuestion(`
W SNMP identyikator obiektów OID w bazie urządzenia jest:
`, `
ciągiem liczb odpowiadających numerom węzłów na drodze jaką trzeba pokonać poruszając się od korzenia drzewa do tego węzła
`),
    new OpenQuestion(`
ASN.1 jest:
`, `
językiem specyfikacji typów danych przesyłanych między aplikacjami
`),
    new OpenQuestion(`
Funkcjonalność ASN.1 jest zaimplementowana w warstwie:
`, `
Aplikacji
`),
    new OpenQuestion(`
Reguły kodowania BER (Basic Encoding Rules) stanowią funkcjonalność warstwy:
`, `
Prezentacji
`),
    new OpenQuestion(`
Które typy danych są zdefiniowane w ASN.1?
`, `
INTEGER, OCTET STRING, OBJECT IDENTIFIER, NULL
`),
    new OpenQuestion(`
Kompletny zestaw komend używanych do komunikacji z urządzeniem poprzez SNMP składa się z następujących poleceń:
`, `
SET, GET, GET-NEXT
`),
    new OpenQuestion(`
W przypadku urządzenia SNMP każda funkcja jest zarządzana poprzez:
`, `
Wydanie polecenia SET odpowiedniej wartości zmiennej w MIB
`),
    new OpenQuestion(`
Ramki GET-RESPONSE generowane są:
`, `
Ramka typu GET-RESPONSE produkowana jest przez zarządzane urządzenie w odpowiedzi na ramki typu: GET/GET-NEXT/SET.
`),
    new OpenQuestion(`
Ramka TRAP jest:
`, `
Ramka typu TRAP generowana jest poprzez zarządzane urządzenie i sygnalizuje stacji zarządzającej pewne zdarzenie. Jej budowa odbiega nieco od pozostałych.
`),
    new OpenQuestion(`
W przypadku której wersji SNMP dostępne jest szyfrowanie przesyłanych danych?
`, `
SNMPv3
`)
  ];
}
