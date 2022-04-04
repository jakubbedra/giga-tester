import {OpenQuestion} from "../../questions/open-question.model";

export class ZbsEntry3 {
  public static questions: OpenQuestion[] = [
    new OpenQuestion(`
      Isolated VLAN pozwala na:
    `, `
      stacje podłączone do host port'ów nie mogą się komunikować między sobą
    `),
    new OpenQuestion(`
      Community VLAN różni się od Isolated VLAN tym, że:
    `, `
      ruch izolowany jest nie między pojedynczymi portami, ale między grupami portów tworzących wspólnoty (community VLAN)
    `),
    new OpenQuestion(`
      Ingress filtering dotyczy ramek:
    `, `
      przychodzących, zawierających znacznik sieci wirtualnych, które nie są skonfigurowane na danym porcie
    `),
    new OpenQuestion(`
      Wyłączenie ingress filtering na danym porcie powoduje:
    `, `
      filtrowanie ramek przychodzących
    `),
    new OpenQuestion(`
      Nakładające się sieci VLAN (overlapping VLAN) występują w sytuacji:
    `, `
      odbierania ramek na danym porcie, który należy do kilku sieci wirtualnych, w których wyłączone są znaczniki
    `),
    new OpenQuestion(`
      Jaką cechę posiada native VLAN:
    `, `
      W overlapping VLANs w przypadku gdy stacja wysyła ramkę, zostanie ona rozesłana tylko w obrębie sieci wirtualnej
      oznaczonej jako natywna (native VLAN). Każdy port może mieć skonfigurowaną tylko jedną sieć natywną.
    `),
    new OpenQuestion(`
      Ramka rozgłoszeniowa odebrana na porcie promiscuous sieci isolated VLAN zostanie:
    `, `
      rozesłana do wszystkich pozostałych ramek (?)
    `),
    new OpenQuestion(`
      Ramka o znanym adresie MAC odbiorcy odebrana na porcie promiscuous sieci isolated VLAN zostanie:
    `, `
      poinfromowana o tym, że jebać sieci solidnie
    `),
    new OpenQuestion(`
      Cechy sposobu automatycznej konfiguracji VLAN z wykorzystaniem serwera RADIUS:
    `, `
      - przydzielanie numerów VLAN
      - konfiguracja sieci VLAN na porcie, do któego podłączona jest stacja dokonywana jest dopiero po jej uwierzytelnieniu
      - możliwość skonfigurowania kilku sieci wirtualnych jednocześnie z opcją wskazania, które mają mieć włączone znaczniki
    `),
    new OpenQuestion(`
      Protokół GVRP służy do:
    `, `
      automatycznej konfiguracji wirtualnych sieci lokalnych w przełączników
    `),
    new OpenQuestion(`
      W przypadku stosowania protokołu GVRP konfiguracja przełącznika musi spełniać wymagania:
    `, `
      porty prowadzące do pozostałych przełączników powinny należeć do tego samego VLANu
    `)
  ];
}
