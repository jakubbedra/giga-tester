import {OpenQuestion} from "../../questions/open-question.model";

export class ZbsEntry5 {
  public static questions: OpenQuestion[] = [
    new OpenQuestion(`
Certyfikat urzędu certyfikacji typu ROOT to:
`, `
Zawsze certyfikat typu self-signed.
`),
    new OpenQuestion(`
Algorytm DSA (Digital Signature Algorithm):
`, `
-pozwala na weryfikację podpisu cyfrowego
-pozwala na cyfrowe podpisywanie danych
`),
    new OpenQuestion(`
Jeśli, stworzony podczas sprawdzania poprawności certyfikatu, ciąg certyfikatów nie kończy się certyfikatem typu self-signed, to:
`, `
Cetyfikat nie zostanie uznany za zaufany.
`),
    new OpenQuestion(`
Możliwość użycia (key usage) Key encipherment, oznacza:
`, `
Możliwość bezpiecznego przesyłania kluczy z użyciem kryptografii asymetrycznej.
`),
    new OpenQuestion(`
Asymetryczne algorytmy kryptograficzne:
`, `
są wolniejsze od symetrycznych
`),
    new OpenQuestion(`
Co to jest identifier w certyfikacie?
`, `
Funkcja skrótu klucza prywatnego, umieszczona w certyfikacie. Służy sprawdzeniu czy dany klucz prywatny odnosi się do danego certyfikatu.
`)
  ];
}
