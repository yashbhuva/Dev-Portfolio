const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://www.yashbhuva.dev',
  title: 'Yash B.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Yash Bhuva',
  role: 'Passionate Programmer from India',
  description:
    '',
  resume: 'https://drive.google.com/file/d/1IolsnlfiT858h9XXm4lzxQnZJUw26Ei9/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/yashbhuva',
    github: 'https://github.com/yashbhuva',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Deltacron - A Blockchain based Cryptocurrency',
    description:
      'Deltacron is Cryptocurrency, Created and stored electronically in Blockchain, using encryption techniques to control the creation of monetory units and to verify transfer of funds.',
    stack: ['Python', 'Django','Blockchain', 'React'],
    sourceCode: 'https://github.com/yashbhuva/Deltacron-A-Blockchain-based-Cryptocurrency',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C++',
  'Java',
  'Python',
  'Django',
  'Javascript',
  'React',
  'Cloud Computing',
  'Linux',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'yash.workmail09@gmail.com',
}

export { header, about, projects, skills, contact }
