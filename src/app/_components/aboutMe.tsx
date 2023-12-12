const TECH_STACK = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next', 'AWS', 'NodeJS', 'Express', 'GIT', 'Github', 'Docker', 'SQL/NoSQL databases', 'PHP']

const AboutMe = () => {
    return (
        <section className="bg-slate-50 ">
            <div className="m-auto max-w-7xl">
                <h2>Rólam</h2>
                <p className="m-auto mb-16 max-w-5xl text-center">
                    Fedezd fel a személyes és szakmai utam! Ismerd meg mivel foglalkozom, tudj meg többet a programozói skilleimről és alkalmazott technológiáimról
                </p>
                <div className="flex flex-col gap-20 md:flex-row">
                    <div className="flex-1">
                        <h3>Ismerj meg!</h3>
                        <p className="mb-4">
                            Több mint 6 éve foglalkozom programozással és weboldalak fejlesztésével. Az online térben töltött évek alatt számos projekten dolgoztam, hogy ügyfeleim részére egyedi,
                            modern és felhasználóbarát weboldalakat alkothassak.
                        </p>
                        <p className="mb-4">
                            Jelenleg <span className="font-bold">Full Stack fejlesztőként</span> dolgozom, ez mellett szabadidőmben weboldalak, webshopok és kisebb webes alkalmazások fejlesztésével
                            foglalkozom. Fő programozási nyelvem a <span className="font-bold">JavaScript (TypeScript)</span>, amit szívesen alkalmazok mind a Frontend, mind a Backend oldalon. Közel
                            állnak hozzám a Serverless megoldások és a felhőtechnológiák, főként az AWS-el dolgozom.
                        </p>
                        <p className="mb-8">
                            Nyitott vagyok olyan <span className="font-bold">álláslehetőségekre</span>, ahol hozzátehetek a projekthez, tanulhatok és fejlődhetek. Ha olyan lehetőséget kínálsz, ami
                            illeszkedik a készségeimhez és tapasztalataimhoz, ne habozz felvenni velem a <span className="font-bold">kapcsolatot</span>.
                        </p>
                        <button>Kapcsolat</button>
                    </div>
                    <div className="flex-1">
                        <h3>Tech Stack</h3>
                        <ul className="flex flex-wrap gap-4">
                            {TECH_STACK.map((skill, i) => (
                                <li key={i} className="cursor-default rounded bg-gray-200 px-4 py-1 font-semibold transition hover:bg-primary hover:text-white">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
