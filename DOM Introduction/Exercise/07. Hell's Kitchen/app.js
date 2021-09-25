function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      for (let i = 0; i < input.length; i++) {
         let [restaurant, ...workers] = input[i].split(' - ');
         let splittedWorkers = workers[0].split(', ');
         for (let j = 0; j < splittedWorkers.length; j++) {
            let [worker, salary] = splittedWorkers[j].split(' ')
         }

         //
      }

   }
}



//["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Joe 780, Jane 660"];
