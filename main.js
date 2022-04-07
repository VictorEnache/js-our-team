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


const container = document.querySelector('.container')

const button_add = document.getElementById('button')
const name_1 = document.getElementById('name')
const role = document.getElementById('role')
const img = document.getElementById('img')

button_add.addEventListener('click', () =>{
    if(name_1.value !== '' && role.value !== '' && img.value !== ''){
        const new_member = {name: name_1.value, role: role.value, image: img.value }
        team.push(new_member)
        const div = document.createElement('div')
        const div_1 = document.createElement('div')
        const div_2 = document.createElement('div')
        const img_element = document.createElement('img')
        div_1.append(name_1.value)
        div_2.append(role.value)
        img_element.setAttribute('src', `./img/${img.value}`);
        div.append(div_1)
        div.append(div_2)
        div.append(img_element)
        container.append(div)

    }

})






  for(let member of team){
      const div = document.createElement('div')
      container.append(div)

      console.log(div)
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

