import { TITLE, SECTION_TITLE, SECTION_TEXT, CARD } from "@/components/ui/format_tags.tsx";
import Liczby1Vector from "@/assets/liczby1.svg";
import Liczby2Vector from "@/assets/liczby2.svg";


export default function Paradoks_liczby() {
    return (
        <CARD>
            <TITLE>Paradoks liczb naturalnych i liczb rzeczywistych od zera do jeden </TITLE>

            <SECTION_TITLE>Gdzie jest więcej?</SECTION_TITLE>
            <SECTION_TEXT>
                Na pierwszy rzut oka wydawałoby się, że w obu zbiorach jest tyle samo liczb —
                w końcu zarówno liczb naturalnych, jak i rzeczywistych jest nieskończenie wiele.
                Skoro w obu zbiorach są nieskończoności liczb w obu zbiorach jest ich tyle samo?
                Okazuje się, że nie.
            </SECTION_TEXT>

            <SECTION_TITLE>Przypisywanie liczb</SECTION_TITLE>
            <SECTION_TEXT>
                Najczęstszą metodą sprawdzania, czy dwa zbiory mają taki sam rozmiar,
                jest przypisanie każdemu elementowi jednego zbioru dokładnie jednego
                elementu drugiego zbioru.<br />

                Spróbujmy więc przypisać kolejne liczby naturalne kolejnym liczbom rzeczywistym:
                <img className="w-[50%]" style={{ display: "block", margin: "0 auto" }} src={Liczby1Vector} alt="Kolejno przypisane liczby całkowite do rzeczywistych" />
                <br />
                Wydawało by się, że możemy przypisać wszystkie liczby,
                natomiast zawsze znajdziemy niezapisaną liczbę zmieniając po jednej cyfrze w rozwinięciach dziesiętnych liczb z listy.
                <img className="w-[50%]" style={{ display: "block", margin: "0 auto" }} src={Liczby2Vector} alt="Kolejno przypisane liczby całkowite do rzeczywistych + oznaczenie" />
                Tak powstała liczba różni się od każdej zapisanej co najmniej jedną cyfrą,
                więc nie znajduje się na liście.
                Oznacza to, że nie da się wypisać wszystkich liczb rzeczywistych w ten sposób..
            </SECTION_TEXT>
            <SECTION_TITLE>Matematyczne wytłumaczenie</SECTION_TITLE>
            <SECTION_TEXT>
                Liczby rzeczywiste tworzą zbiór nieskończony niepoliczalny,
                czyli taki, którego elementów nie da się ponumerować.
                Zbiór liczb naturalnych jest natomiast nieskończony policzalny,
                jego elementy można wypisywać kolejno bez pomijania żadnego.
            </SECTION_TEXT>
        </CARD>
    )
}