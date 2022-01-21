/*<li class="card center">
              <img src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg" alt="">
              <h2>Eddard "Ned" Stark</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum blanditiis facilis libero eum quisquam eligendi, enim in repu veniam dicta atque temporibus. Voluptatibus, accusamus.
              </p>
              <button>Learn More!</button>
            </li>
*/


let allPeople=got.houses.reduce((acc,cv)=>{
      acc=acc.concat(cv.people);
      return acc;
},[]);

let rootElement=document.querySelector('ul');

allPeople.forEach((person)=>{
  let li=document.createElement('li');
  li.classList.add('flex-30','card');

  
  let img=document.createElement('img');
  img.src=person.image;
  img.alt=person.name;

  let h2=document.createElement('h2');
  h2.innerText=person.name;
  let p=document.createElement('p');
  p.innerText=person.description;
  let button=document.createElement('a');
  button.href=person.wikiLink;
  button.innerText='Learn More!';

  let head=document.createElement('div');
  head.classList.add('center');
  head.append(img,h2);

  let footer=document.createElement('div');
  footer.classList.add('text-center');
  footer.append(button);

  li.append(head,p,footer);
  rootElement.append(li);


});