## 1 шаг

Посчитайте количество существ в таблице

```bash
bin/heroes.js __fixtures__/heroes1.csv
Count: 10
```

## 2 шаг

Выведите все виды замков существ через запятую. Сделайте так, чтобы имя каждого замка начиналось с большой буквы. Отсортируйте список перед выводом.

```bash
bin/heroes.js __fixtures__/heroes1.csv
Count: 10 # Не забывайте что предыдущее решение остается работать
Castles: Замок, Оплот
```

## 3 шаг

Выведите существо с самым большим здоровьем.

```bash
bin/heroes.js __fixtures__/heroes1.csv
Count: 10
Castles: Замок, Оплот
Largest hp: ангел
```

## 4 шаг

Выведите средний арифметический урон для каждого существа в таблице. Если цифры две, то их нужно сложить и разделить на 2. Если цифра одна - просто вернуть ее.

```bash
bin/heroes.js __fixtures__/heroes1.csv
Count: 10
Castles: Замок, Оплот
Largest hp: ангел
Average damage: кентавр: 2.5, копейщик: 2, лучник: 2.5, грифон: 4.5, рыцарь: 7.5, единорог: 20, дракон: 47.5, монах: 11, кавалерист: 20, ангел: 50
```

## 5 шаг

Найдите самое сильное существо. Вам следует найти всех существ 7 уровня и выяснить, кто из них быстрее исчерпает здоровье врага своими атаками. Атаку нужно посчитать как среднее значение между мнимальным и максимальным уроном. Важно(!) - таких существ всегда 2. C технической точки зрения вам нужно посчитать у кого из существ уйдет меньше атак для того, чтобы исчерпать здоровье врага.


```bash
bin/heroes.js __fixtures__/heroes1.csv
Count: 10
Castles: Замок, Оплот
Largest hp: ангел
Average damage: кентавр: 2.5, копейщик: 2, лучник: 2.5, грифон: 4.5, рыцарь: 7.5, единорог: 20, дракон: 47.5, монах: 11, кавалерист: 20, ангел: 50
Strongest creature: ангел
```