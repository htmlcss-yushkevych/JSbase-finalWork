//    1. Прийняти від користувача імена людей для набору до команди.
//    Імена прийняти та зберегти в новому масиві.
//    Кількість імен має відповідати кількості посад.
//    Масив з посадами - ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA',
//    'Middle QA', 'Senior QA', 'Project manager'].
const occupations = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];
function getNames() {
   const newArr = [];
   for (let i = 0; i < occupations.length; i += 1) {
      let name = prompt("Введіть прізвище працівника");
      newArr.push(name);
   }
   return newArr; 
}
// // 2. Створити об'єкт team у якому зберігатимуться нові об'єкти-співробітники з параметрами name і position,
// //    дані цих властивостей додаємо з масивів.

function createTeam(workers, occupations) {
   const newArr = [];
   for (let i = 0; i < workers.length; i += 1) {
      let newObj = {};
      newObj.name = workers[i];
      newObj.position = occupations[i];
      newArr.push(newObj);
   }
   return newArr;
}

//    3. Додати працівникам зарплати (властивість salary) за допомогою методу Math.random(),
//    який видаватиме довільне число в проміжку між N1 та N2 виходячи з принципу:
//         якщо на посаді є слово "junior", сума буде від 500 до 1000;
//         якщо на посаді є слово "middle", сума буде від 1500 до 2000;
//         якщо на посаді є слово "senior", сума буде від 2500 до 3000;
//         для решти - від 4000 до 4500;
//         Для визначення того, чи є слово в імені посади використовуйте метод str.indexOf('частина рядка для пошуку'). Наприклад:

//    var name = 'Junior developer';
//    name.indexOf('Junior');
   //в даному випадку поверне 0, а якщо такий рядок відсутній поверне -1.
   //Регістр має значення, тому рядок "junior" поверне -1
   //Використайте toLowerCase()
function setSalary(team) {
   team.forEach(element => {
    let job = element.position.toLowerCase();
        if (job.indexOf('junior') === 0) { 
        element.salary = Math.round(Math.random()*(1000 - 500) + 500);
       }
        if (job.indexOf('middle') === 0) { 
        element.salary = Math.round(Math.random()*(2000 - 1500) + 1500);
       }
        if (job.indexOf('senior') === 0) { 
        element.salary = Math.round(Math.random()*(3000 - 2500) + 2500);
       } 
        if (job.indexOf('senior') !== 0 && job.indexOf('middle') !== 0 && job.indexOf('junior') !== 0) { 
        element.salary = Math.round(Math.random()*(4500 - 4000) + 4000);
        } 
   }
); 
}
//  4. Додати кожному співробітнику метод tellAboutYourSelf(),
//  який буде повідомляти інформацію про користувача (наприклад "Мене звуть John і я - Project manager. Я заробляю 4863 $.").
team.forEach(element => {
 element.tellAboutYourSelf = function(){
 console.log(`Мене звуть ${this.name} і я - ${this.position}. Я заробляю ${this.salary}$.`);
 } 
});
// 5. Додати об'єкту team метод showTeam(),
//     який виводитиме інформацію про всіх співробітників у консоль у форматі: "John - Project manager. Зарплата - 4863$."*

showTeam = function (array) {
   array.forEach(element => {
      console.log(`${element.name} - ${element.position}. Зарплата - ${element.salary}$.`)
   });
};

// Виклики: 

const workers = getNames();
const team = createTeam(workers, occupations);
setSalary(team);
console.log(team);
team[4].tellAboutYourSelf();
showTeam(team);