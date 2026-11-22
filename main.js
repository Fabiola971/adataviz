const boxContainer = document.getElementById("box-container");
console.log("boxContainer")
const box = document.querySelector(".box");
console.log(box)
const datasContainer = document.getElementById("datas-container");
console.log(datasContainer);

const datas = document.querySelectorAll("#datas-container li");
console.log(datas)
const span = document.querySelectorAll("#datas-container li span ")
console.log(span);
const keySpans = ["Evenement: ", "Description: ", "Adresse: ", "Prix: ", "Accès: "]
console.log(keySpans);

// span.forEach(s =>{
//     console.log(s)
// })

const createItem = (element, tableau) =>{
    element.forEach((s, i) => {
        if(tableau != undefined){
            s.textContent = tableau[i]
        }
    })
    // console.log(`element[i]: ${element[i]}`)
}
createItem(span, keySpans)

        


//     datasContainer.appendChild(datas);
//     console.log(datas)
// }
// createBox()
// array.forEach(element => {
    
// });

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
    const span1 = document.createElement("span")
    li1.appendChild(span1);
    console.log(span1)
    li1.textContent = `Evenement: ${data.title}`;
    

    const li2 = document.createElement("li");
    li2.classList.add('description');
    const span2 = document.createElement("span")
    li2.appendChild(span2);
    li2.textContent = data.lead_text;

    const li3 = document.createElement("li");
    li3.classList.add('adress');
    const span3 = document.createElement("span")
    li3.appendChild(span3);
    li3.textContent = `${data.address_street} ${data.address_zipcode} ${data.address_city}`; 
    
    const li4 = document.createElement("li");
    li4.classList.add('price');    
    const span4 = document.createElement("span")
    li4.appendChild(span4);
    li4.textContent = data.price_type;


    const li5 = document.createElement("li");
    li5.classList.add('pmr');
    li5.textContent = data.pmr;
    const span5 = document.createElement("span")
    li5.appendChild(span5);
    
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);

    article.appendChild(ul)
    
    container.appendChild(article)
}

const displayBox = async (box, container)=>{
    box.forEach( b =>{
        createBox(b, container)
    })
}
