export default (content) => {
    //console.log(content);
    const lines = content.split('\n').slice(1);

    const creatureCount = lines.length;
    console.log(`Count: ${creatureCount}`);

      //  #2
     const castlesSet = new Set(
       lines.map(line => {
         const castleName = line.split(' ')[1];
         return castleName.charAt(0).toUpperCase() + castleName.slice(1).toLowerCase();
       })
     );
      // #2.1
     const castlesSet1 = [];
 
     for (const line of lines) {
      // line = "1 ОПЛОТ кентавр 2-3 8 6 70"
       let castleName = line.split(' ')[1];
      //  line.split(' ') = [1, 'ОПЛОТ', 'кентавр', '2-3', '8', '6', '70']
      // line.split(' ')[1] = 'ОПЛОТ'

      castleName = castleName.slice(0, 1).toUpperCase() + castleName.slice(1).toLowerCase(); //ОПЛОТ -> Оплот

      if (!castlesSet1.includes(castleName)) {
        castlesSet1.push(castleName);
      }
     }

     const sortedCastles = [...castlesSet].sort();
     console.log(`Castles: ${sortedCastles.join(', ')}`);

    //  #3
     let maxHp = 0;
     let creatureWithMaxHp = '';
  
     lines.forEach(line => {
      // values = [1, 'ОПЛОТ', 'кентавр', '2-3', '8', '6', '70']
       const values = line.split(' ');
      //  values[3] = "8"
      // parseInt(123hello) = 123
      // parseInt('hello123') = NaN

      //  const hp = parseInt(values[3]);
       const hp = +values[4]; // "8" !== 8
       if (hp > maxHp) {
         maxHp = hp;
         creatureWithMaxHp = values[2];
       }
     });
  
     console.log(`Largest hp: ${creatureWithMaxHp}`);

    //  #4

    // Average damage: кентавр: 2.5, копейщик: 2, лучник: 2.5, грифон: 4.5, 
    // рыцарь: 7.5, единорог: 20, дракон: 47.5, монах: 11, кавалерист: 20, ангел: 50

    let resultForAverageDamage = "";
    lines.forEach(line => {
        // values = [1, 'ОПЛОТ', 'кентавр', '2-3', '8', '6', '70']
        const values = line.split(' ');

        const name = values[2];
        const damage = values[3].split("-"); // "2-3" -> ["2", "3"]
        const averageDamage = damage.reduce((accumulator, element) => +accumulator + +element, 0) / damage.length;

        resultForAverageDamage += `${name}: ${averageDamage}, `;
     });

     console.log(`Average damage: ${resultForAverageDamage.slice(0, -2)}`);

    // #5
     const sevenLevelsCreatures = lines.filter(line => line.split(' ')[0] === '7');
     let firstDamage = sevenLevelsCreatures[0].split(" ")[3].split("-");
     firstDamage = firstDamage.reduce((accumulator, element) => +accumulator + +element, 0) / firstDamage.length;

     let secondDamage = sevenLevelsCreatures[1].split(" ")[3].split("-");
     secondDamage = secondDamage.reduce((accumulator, element) => +accumulator + +element, 0) / secondDamage.length;

     let firstHealth = sevenLevelsCreatures[0].split(" ")[4];

     let secondHealth = sevenLevelsCreatures[1].split(" ")[4];

     const firstAttac = Math.ceil(secondHealth / firstDamage);
     const secondAttac = Math.ceil(firstHealth / secondDamage);

     let strongestName = '';
     if(firstAttac < secondAttac) {
        strongestName = sevenLevelsCreatures[0].split(" ")[2];
     } else {
        strongestName = sevenLevelsCreatures[1].split(" ")[2];
     }

     console.log(`Strongest creature: ${strongestName}`);
};