import {TITLE, SECTION_TITLE, SECTION_TEXT, CARD} from "@/components/ui/format_tags.tsx";
import GalileoVector from "@/assets/galileo.svg";


export default function Paradoks_galileo() {
    return (
        <CARD>
            <TITLE>Paradoks Galileusza </TITLE>

            <SECTION_TITLE>Autor i czas:</SECTION_TITLE>
            <SECTION_TEXT>
                Paradoks został opisany przez Galileusza Galileiego w jego dziele “Rozmowy i dowodzenia matematyczne dotyczące dwóch nowych nauk” z 1638 roku. Był to okres, gdy Galileusz, już w podeszłym wieku i w konflikcie z Kościołem, podsumowywał swoje najważniejsze odkrycia naukowe.
            </SECTION_TEXT>

            <SECTION_TITLE>Na czym polega paradoks:</SECTION_TITLE>
            <SECTION_TEXT>
                Galileusz zauważył bardzo niezwykłą własność liczb naturalnych i liczb będących ich kwadratami (1, 4, 9, 16…).<br />
                Z jednej strony:<br />
                Liczb naturalnych jest „oczywiście” więcej, bo kwadraty pojawiają się rzadko:<br />
                np. do 100 jest 100 liczb, ale tylko 10 kwadratów.<br /><br />

                Intuicyjnie więc oczekujemy, że kwadratów jest mniej.<br />
                Z drugiej strony:<br />

                Galileusz wskazał, że możemy stworzyć doskonałą parę:<br />
                każdej liczbie naturalnej odpowiada dokładnie jeden jej kwadrat:<br />
                <img className="w-[50%]" style={{ display: "block", margin: "0 auto" }} src={GalileoVector} alt="Odwzorowanie 1:1 liczb i ich kwadratów" />

                Jeśli między dwoma zbiorami da się stworzyć taką jednoznaczną parę (odpowiedniość 1:1), to w pewnym sensie mają tyle samo elementów.<br /><br />

                To prowadzi do pozornie sprzecznego wniosku:<br />
                O ile popatrzymy na liczby skończone, kwadratów jest mniej;<br />
                ale w nieskończoności — jest ich tyle samo co liczb naturalnych.<br />
            </SECTION_TEXT>

            <SECTION_TITLE>Co to ujawniło o nieskończoności: </SECTION_TITLE>
            <SECTION_TEXT>Galileusz jako jeden z pierwszych zauważył, że nieskończone zbiory nie zachowują się tak jak zbiory skończone. Paradoks ten zasygnalizował, że intuicje z liczb skończonych zawodzą i że do badania nieskończoności potrzebne są nowe pojęcia i narzędzia matematyczne. Dopiero 250 lat później Georg Cantor stworzył pełną teorię mocy zbiorów, która wyjaśniła takie zjawiska. </SECTION_TEXT>
        </CARD>
    )
}