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

  for(let member of team){
      const div = document.createElement('div')
      container.append(div)

      console.log(div)
      for (let key in member){
        const div_2 = document.createElement('div')
        const img = document.createElement('img')
        if(key === 'image'){
            img.setAttribute('src', `./img/${member[key]}`);
            img.append(member[key])
            div.append(img)
        }
        else{
            div_2.append(member[key])
            div.append(div_2)

        }
      }
  }

