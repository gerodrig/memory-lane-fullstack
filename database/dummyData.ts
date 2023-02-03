import { ResourcesData, BlogPost, TeamMember } from 'interfaces';

export const teamData: TeamMember[] = [
    {
    image: '/assets/images/board-members/mona.jpg',
    name: 'Mona Lancaster',
    jobTitle: 'President',
    description: `BA, B Comm. Founding member of Memory Lane Home Living. Mona has a background in Psychology/Sociology and the mental health field. Banking experience followed. While in university she worked as a Nurse's Aide in a Long-Term Care facility. Mona is currently completing a Geriatric Certificate from McMaster University. She has completed the Dementia Montessori Course.  Mona has also completed  the Dementia Care Matters Course, to guide and implement important aspects of the "Butterfly Model of Care “into Memory Lane Home Living Inc.  In 2020 Mona was appointed to the Steering Committee as an Older Adult Representative for Caregivers with the Provincial Geriatric Leadership Office (PGLO).   In December of 2021 Mona Lancaster was awarded an Outstanding Canadian Award for her perseverance and compassion in making a difference for a new way of living in community with dementia. In October2022 Mona was also awarded the  Queen's Platinum Jubilee Community Hero Award.`
    },
    {
      image: '/assets/images/board-members/mina.jpg',
      name: 'Mina Shirvani',
      jobTitle: 'Board Member',
      description: `Mina has extensive working experience in the domestic and international banking industry. Over 30 years working in financial institutions has equipped her with broad knowledge of banking , financial planning and budgeting. She has been awarded numerous times for her performance and community involvement, such as being honoured to be one of the Canadian Winter Olympic Games’ torch bearers in 2010. Mina received her bachelor’s in finance and master’s degree in Economics from Central Missouri State University. She migrated to Canada in 1997 and completed her CSC (Canadian Security Course) and PFP ( Personal Financial Planning ) with honour. Mina is an executive member (Treasurer) of Golden Gavel Toastmaster Club, Richmond Hill. She also acted as the President and Vice President of Public Relation of the club. Mina has been recognized as President Distinguished and received the Toastmaster of the year and President’s Choice Awards.
      Mina believes in the motto ‘we rise by lifting others.’`
    },
    {
      image: '/assets/images/board-members/chloe.jpg',
      name: 'Chloe Tam',
      jobTitle: 'Board Member',
      description: `Chloe has  a background in Public Health from the University of Waterloo and a Post Graduate Certificate in Non-Profit and Social Sector Management. Chloe brings a wealth of knowledge in the areas of public health and the not-for-profit sector. Chloe is currently working in a not-for-profit organization creating community engagement and fundraising activities. She hopes that members of the community can create valuable relationships amongst themselves and better the quality of lives for all residents. Chloe has lived experience in dementia with her grandmother.`
    },
    {
      image: '/assets/images/board-members/jennifer.jpg',
      name: 'Jennifer Tran',
      jobTitle: 'Board Member',
      description: `Jennifer has a Bachelor of Applied Social Science degree from University of Guelph. Jennifer majored in Adult Development and minored in Family and Child Studies. She is currently a Program Assistant for senior services serving the community of North York. Jennifer has a background in Social Gerontology and has worked with the vulnerable population in the non-profit sector for many years. She continues to work with adults from all walks of life and is passionate about the efforts being put in place for women to live well with dementia.`
    },
    {
      image: '/assets/images/board-members/yipin.jpg',
      name: 'Yipin Guo',
      jobTitle: 'Board Member',
      description: `Ms. Guo completed a  bachelor’s degree in Economics from the University of Manitoba. She is a Rotman MBA Candidate from the University of Toronto. Prior to Rotman, she spent three years at a federally chartered non-profit organization, helping healthcare professionals across Canada and internationally. Her passion in business is refining processes to make operations more efficient;  Ms Guo  has strong analytical skills to uncover insights from data to support decision-making. She is passionate about alternative care, senior care, digital health, project management, client relationship management, strategic planning and operations improvement. She is the Vice President of Rotman Women in Management Association and Rotman Healthcare Management Association. She is the Social Impact Consultant at Collaboration Partners.`
    },
];

export const blogData: BlogPost[] = [
  {
    id:'1',
    title:`Early-Onset Alzheimer's Disease`,
    author:'External Author',
    date:'Jan 07, 2023',
    category:'Person Center Care',
    tags: ['Alzheimer', 'Dementia', 'Caregiver'],
    credits:'hopkinsmedicine',
    articleAuthor:'hopkinsmedicine.org',
    originalDate:'Jan 07, 2023',
    originalUrl:'https://www.hopkinsmedicine.org/health/conditions-and-diseases/alzheimers-disease/earlyonset-alzheimer-disease#:~:text=Although%20Alzheimer%20disea',
  },
  {
    id:'2',
    title:`Frontotemporal Dementia`,
    author:'External Author',
    date:'Jan 07, 2023',
    category:'Person Center Care',
    tags: ['Alzheimer', 'Dementia', 'Caregiver'],
    credits:'Mayo Clinic',
    articleAuthor:'Mayo Clinic Staff',
    originalDate:'Nov 16, 2021',
    originalUrl:'https://www.mayoclinic.org/diseases-conditions/frontotemporal-dementia/symptoms-causes/syc-20354737'
  },
  {
    id:'3',
    title:`New study investigates
    which activities are tied to
    a lower dementia risk.`,
    author:'External Author',
    date:'Jan 07, 2023',
    category:'Person Center Care',
    tags: ['Dementia', 'Caregiver'],
    credits:'The Globe and Mail',
    articleAuthor:'Annie Lennon',
    originalDate:'August 02, 2022',
    originalUrl:'https://www.theglobeandmail.com/canada/article-canada-alzheimer-2030-projection/#:~:text=Nearly%20one%20million%20people%20in,the%20Alzheimer%20Society%20of%20Canada.'
  },
  {
    id:'4',
    title:`Nearly one million Canadians projected to have
    dementia by 2030, new report says`,
    author:'External Author',
    date:'Dec 23, 2022',
    category:'Person Center Care',
    tags: ['Dementia', 'Caregiver'],
    credits:'Medical News Today',
    articleAuthor:'Wency Leung',
    originalDate:'Sept 06, 2022',
    originalUrl:'https://www.medicalnewstoday.com/articles/new-study-investigates-which-activities-are-tied-to-a-lower-dementia-risk'
  },
];

export const resourcesData: ResourcesData[]= [
  {
      title: 'Dementia Dialogue',
      description: 'David Harvey, founder of Dementia Dialogue & Canadian has created podcasts that relate to the Canadian Healthcare system.',
      url: 'https://www.dementiadialogue.ca/season-2-part-1',
  },
  {
      title: 'Dementia Advocacy Canada',
      description: 'Dementia Advocacy Canada (DAC) works with partners and community organizations, to connect patients and caregivers with the education and support they require',
      url: 'https://www.dementiacanada.com/',
  },
  {
      title: 'Dementia Alliance International',
      description: 'Dementia Alliance International is a registered non-profit organisation whose membership is exclusively for people with a medically confirmed diagnosis of any type of a dementia from all around the world.',
      url: 'https://www.dementiaallianceinternational.org/',
  },
  {
      title: 'Toronto Memory Program',
      description: 'Toronto Memory Program is a multidisciplinary, community based medical facility specializing in the diagnosis and treatment of Alzheimer’s disease and related disorders.',
      url: 'https://www.torontomemoryprogram.com/',
  },
  {
      title: 'Canadian Association for Mental Health - Memory Clinic',
      description: 'This clinic offers assessments and follow-up services for clients over the age of 50 with concerns regarding memory or other areas of cognition.',
      url: 'https://www.camh.ca/en/your-care/programs-and-services/memory-clinic',
  },
]