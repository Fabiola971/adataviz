

const boxContainer = document.getElementById("box-container");
console.log("boxContainer")
const box = document.querySelector(".box");
console.log(box)
const datasContainer = document.getElementById("datas-container");
console.log(datasContainer);

const datas = document.querySelectorAll("#datas-container li");
console.log(datas)
// const span = document.querySelectorAll("#datas-container li span ")
// console.log(span)
const keySpans = ["Evenement: ", "Description: ", "Adresse: ", "Prix: ", "Accès PMR: "]
console.log(keySpans);


const main = async () =>{

    try{
        const response = await fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=20")
        console.log(response)
            if(response.ok){
                const jsonResponse = await response.json();
                console.log(jsonResponse);
            const results = jsonResponse.results;
            console.log(results)
            return results
        }else{
            throw new Error('Erreur SERVER:' + response.status);
        }
        
    }catch(error){
        console.log(error)
    }
    
}
main()


const getData = async ()  =>{
    const results = await main();
    console.log(results)
    displayBox(results, boxContainer)
    results.forEach(res =>{
        createBox(res, box )
    })
}
getData()

const createBox = async (data, container) =>{
    const article = document.createElement("article");
    article.classList.add('box')
    const ul = document.createElement("ul");
    ul.classList.add('datas-container');
    
    const li1 = document.createElement("li");
    li1.classList.add('evenement');
    li1.textContent = data.title;
    const span1 = document.createElement("span");
    span1.textContent = keySpans[0];

    const li2 = document.createElement("li");
    li2.classList.add('description');
    li2.textContent = data.lead_text;
    const span2 = document.createElement("span");
    span2.textContent = keySpans[1];

    const li3 = document.createElement("li");
    li3.classList.add('adress');
    li3.textContent = `${data.address_street} ${data.address_zipcode} ${data.address_city}`;
    const span3 = document.createElement("span");
    span3.textContent = keySpans[2];
    
    const li4 = document.createElement("li");
    li4.classList.add('price');    
    li4.textContent = data.price_type;
    const span4 = document.createElement("span");
    span4.textContent = keySpans[3];


    const li5 = document.createElement("li");
    li5.classList.add('pmr');
    li5.textContent = data.pmr;
    if(data.pmr === null){
        li5.textContent = 0;
    }
    const span5 = document.createElement("span");
    span5.textContent = keySpans[4];

    
    li1.prepend(span1);
    li2.prepend(span2);
    li3.prepend(span3);
    li4.prepend(span4);
    li5.prepend(span5);
    
    ul.append(li1, li2, li3, li4, li5);

    article.appendChild(ul)
    
    container.appendChild(article)
}


const displayBox = async (box, container)=>{
    box.forEach( b =>{
        createBox(b, container)
    })
    console.log(box)
}


// const createItem = () =>{
//     for (let index = 0; index < 2; index++) {
        
//      let  btn = document.createElement("button");
//     btn[index].appendChild(".filter")
//     }
//     console.log(btn)
     
// }
// createItem()
