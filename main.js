const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

//creo una variabile per il contenitore delle card
const container = document.querySelector('.container')
//creo una variabile per il bottone aggiungi
const button_add = document.getElementById('button')
//creo una variabile per l'imput name
const name_1 = document.getElementById('name')
//creo una variabile per l'imput role
const role = document.getElementById('role')
//creo una variabile per l'imput del url per l'immagine
const url = document.getElementById('url')

//al bottone aggiunngo un Event listener al click
button_add.addEventListener('click', () =>{
    //Se tutti e tre gli imput hanno un contenuto testuale allora puo essere eseguito il codice sotto
    if(name_1.value !== '' && role.value !== '' && url.value !== ''){
        //creio un oggetto che ha come proprietà i valori inseriti nell'imput
        const new_member = {name: name_1.value, role: role.value, image: url.value }
        //inserisco l'oggetto nel array team
        team.push(new_member)
        //creo un elemento della dom che sarà la card
        const div = document.createElement('div')
        //creo tre elementi della DOM che saranno figli diretti della card
        const div_1 = document.createElement('div')
        const div_2 = document.createElement('div')
        const img_element = document.createElement('img')
        //ai tre figli diretti di cart appendo i rispettivi valori che vengono inseriti nel form
        div_1.append(name_1.value)
        div_2.append(role.value)
        img_element.setAttribute('src', `./img/${url.value}`);
        //appendo i tre figli diretti della card alla card
        div.append(div_1)
        div.append(div_2)
        div.append(img_element)
        //appendo la crd al container
        container.append(div)
        //pulisco il form
        name_1.value = ''
        role.value = ''
        url.value = ''
        //loggo a console l'array team per verificare che il nuovo oggetto sia stato aggiunto 
        console.log(team)
    }

})





    //questo ciclo viene eseguito per ogni item dell'array
  for(let member of team){
      const div = document.createElement('div')
      container.append(div)

      //questo ciclo viene eseguito per ogni chiave/proprietà del oggetto
      for (let key in member){
        const div_2 = document.createElement('div')
        const img = document.createElement('img')
        if(key === 'image'){
            img.setAttribute('src', `./img/${member[key]}`);
            
            div.append(img)
        }
        else{
            div_2.append(member[key])
            div.append(div_2)

        }
      }
  }

  
