export default function Paradoks_galileo() {
    return (
        <section className="w-3/4 p-6 rounded-2xl shadow-xl flex flex-col items-center gap-4 border-8 border-black mx-auto mt-10 mb-10">
            <h1 className="text-5xl font-extrabold">Paradoks Galileusza </h1>

            <h2 className="text-3xl font-bold">Autor i czas:</h2>
            <h3>
                Paradoks został opisany przez Galileusza Galileiego w jego dziele “Rozmowy i dowodzenia matematyczne dotyczące dwóch nowych nauk” z 1638 roku. Był to okres, gdy Galileusz, już w podeszłym wieku i w konflikcie z Kościołem, podsumowywał swoje najważniejsze odkrycia naukowe.
            </h3>

            <h2 className="text-3xl font-bold">Na czym polega paradoks:</h2>

            <h3>
                Galileusz zauważył bardzo niezwykłą własność liczb naturalnych i liczb będących ich kwadratami (1, 4, 9, 16…).<br />
                Z jednej strony:<br />
                Liczb naturalnych jest „oczywiście” więcej, bo kwadraty pojawiają się rzadko:<br />
                np. do 100 jest 100 liczb, ale tylko 10 kwadratów.<br /><br />

                Intuicyjnie więc oczekujemy, że kwadratów jest mniej.<br />
                Z drugiej strony:<br />

                Galileusz wskazał, że możemy stworzyć doskonałą parę:<br />
                każdej liczbie naturalnej odpowiada dokładnie jeden jej kwadrat:<br />
                1 ↔ 1, 2 ↔ 4, 3 ↔ 9, 4 ↔ 16, …<br />

                Jeśli między dwoma zbiorami da się stworzyć taką jednoznaczną parę (odpowiedniość 1:1), to w pewnym sensie mają tyle samo elementów.<br /><br />

                To prowadzi do pozornie sprzecznego wniosku:<br />
                O ile popatrzymy na liczby skończone, kwadratów jest mniej;<br />
                ale w nieskończoności — jest ich tyle samo co liczb naturalnych.<br />

            </h3>
            <h2 className="text-3xl font-bold">Co to ujawniło o nieskończoności: </h2>
            <h3>Galileusz jako jeden z pierwszych zauważył, że nieskończone zbiory nie zachowują się tak jak zbiory skończone. Paradoks ten zasygnalizował, że intuicje z liczb skończonych zawodzą i że do badania nieskończoności potrzebne są nowe pojęcia i narzędzia matematyczne. Dopiero 250 lat później Georg Cantor stworzył pełną teorię mocy zbiorów, która wyjaśniła takie zjawiska. </h3>
        </section>
    )
}