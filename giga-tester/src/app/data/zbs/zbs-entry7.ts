import {OpenQuestion} from "../../questions/open-question.model";

export class ZbsEntry7 {
  public static questions: OpenQuestion[] = [
    new OpenQuestion(`
Które z adresów należą do sieci IPv6 oznaczonej prefiksem: 3ffe:8010::/64:
-3ffe:8010:0:0:5ae2::1;
-3ffe:8010::ffff;
-2000::1;
-3ffe:8010:7:1754::ffe1;
`, `
-3ffe:8010:0:0:5ae2::1
-3ffe:8010::ffff
`),
    new OpenQuestion(`
Aby przesłać informacje protokołem IPv6 przez tunel typu 6in4 (SIT) potrzeba:
`, `
-Komunikacji IPv4 między punktami docelowymi tunelu
-co najmniej 2 adresów IPv6
-co najmniej 2 adresów IPv4
`),
    new OpenQuestion(`
Polecenie setkey -f nazwa_pliku :
`, `
Wczytuje plik o podanej nazwie i wykorzystuje go do przeprowadzenia konfiguracji mechanizmów IPSec.
`),
    new OpenQuestion(`
Prefiks adresu IPv6 2001:4070:11:0680::12ff/56 to:
`, `
2001:4070:11:600::/56
`),
    new OpenQuestion(`
Prefiks adresu IPv6 2001:7432:3274:fe3a::3211/40 to:
`, `
2001:7432:3200::/40
`)
  ];
}
