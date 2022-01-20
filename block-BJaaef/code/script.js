/*<li class="card center">
              <img src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg" alt="">
              <h2>Eddard "Ned" Stark</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum blanditiis facilis libero eum quisquam eligendi, enim in repu veniam dicta atque temporibus. Voluptatibus, accusamus.
              </p>
              <button>Learn More!</button>
            </li>
*/

got.houses.forEach((house)=>{
    let li=document.createElement('li');
    li.classList.add('card');
    let img=document.createElement('img');
    img.src=house.people.forEach((person)=> person.image);
    img.alt=house.people.forEach((person)=>person.wikiLink)
    let h2=document.createElement('h2');
    h2.innerText=house.people.forEach((person)=>person.name);
    let p=document.createElement('p');
    p.innerText=house.people.forEach((person)=>person.description);
    let button=document.createElement('button');
    button.classList.add('btn');
    li.append(img,h2,p,button);
})