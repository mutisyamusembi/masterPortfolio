/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Brian's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ashutosh Hathidara Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Brian Mutisya",
  logo_name: "Brian Mutisya",
  subTitle:
    "Hello world! I'm Brian Mutisya, a versatile digital creator passionate about transforming ideas into compelling digital experiences.",
  resumeLink:
    "https://drive.google.com/file/d/1FL_wydnPF2SWCdw2goYAgZ1KKBx8TpcD/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/ashutosh1919",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/mutisyamusembi",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mutisya-musembi/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:mutismusembi@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Creating application backends in Node, Django & Flask",
        "⚡ Customizing and creating wordpress/CMS based applications",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "skill-icons:django",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "skill-icons:wordpress",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "skill-icons:git",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Technical Writing Maestro 🖊️",
      fileName: "DataScienceImg",
      skills: [
        "Navigating the complex digital landscape can be daunting. That's where my expertise in technical writing comes in. I simplify intricate concepts, making technology accessible and engaging. From tutorials to documentation, I bridge the gap between complexity and clarity.",
      ],
      softwareSkills: [
        {
          skillName: "Devto",
          fontAwesomeClassname: "skill-icons:devto-light",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Stack Overflow",
          fontAwesomeClassname: "skill-icons:stackoverflow-light",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "🌐 Digital Alchemist",
      fileName: "DesignImg",
      skills: [
        "Small and medium-sized enterprises (SMEs) are the backbone of innovation. I specialize in enhancing the digital presence of SMEs, tailoring solutions to amplify your brand's voice. From impactful content creation to strategic web development, I'm here to propel your business into the digital spotlight.",
      ],
      softwareSkills: [
        {
          skillName: "Meta Ads",
          fontAwesomeClassname: "logos:meta-icon",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Google Search",
          fontAwesomeClassname: "devicon:google",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Google Digital Skills",
      iconifyClassname: "flat-color-icons:google",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Linkedin",
      iconifyClassname: "skill-icons:linkedin",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Nairobi",
      subtitle: "B.Sc in Computer Science",
      logo_path: "uon2.png",
      alt_name: "UON",
      descriptions: [
        "⚡ Mastery of programming languages such as Python, Javascript & Understanding of data structures and algorithms.",
        "⚡ Knowledge of software development methodologies and ability to design, develop, and maintain software applications",
        "⚡ Effective communication skills for working in teams and presenting technical information involving complex issues.",
      ],
      website_link: "https://uonbi.ac.ke/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Project Management",
      subtitle: "Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.credly.com/badges/f0c8132e-7b1a-424b-8504-82b6282023a1/public_url",
      alt_name: "Google Project Management",
      color_code: "#8C151599",
    },
    {
      title: "Digital Marketing",
      subtitle: "Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://grow.google/intl/ssa-en/certificate-validation/",
      alt_name: "Google Digital Marketing",
      color_code: "#00000099",
    },
    {
      title: "Business Analysis Overview",
      subtitle: "Skillsoft",
      logo_path: "skillsoft.png",
      certificate_link:
        "https://skillsoft.digitalbadges-eu.skillsoft.com/2771f01f-26cd-487f-906c-da9fd393c5a0#gs.2utv4o",
      alt_name: "Skillsoft",
      color_code: "#0C9D5899",
    },
    {
      title: "REST API",
      subtitle: "Hacker Rank",
      logo_path: "hack.webp",
      certificate_link: "https://www.hackerrank.com/certificates/63b54e040163",
      alt_name: "Hackerrank REST",
      color_code: "#1F70C199",
    },
    {
      title: "SQL",
      subtitle: "Hacker Rank",
      logo_path: "hack.webp",
      certificate_link: "https://www.hackerrank.com/certificates/cb73bfc180c1",
      alt_name: "Hackerrank SQl",
      color_code: "#D83B0199",
    },
    {
      title: "Problem Solving",
      subtitle: "Hacker Rank",
      logo_path: "hack.webp",
      certificate_link: "https://www.hackerrank.com/certificates/0f3884c9fa2b",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Python",
      subtitle: "Hacker Rank",
      logo_path: "hack.webp",
      certificate_link: "https://www.hackerrank.com/certificates/803fec41dbfe",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have worked in various roles within the technology space speaking to my ability to adapt & understanding of the capabilities of tech in different contexts",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Business Analyst",
          company: "KCB BANK",
          company_url: "https://ke.kcbgroup.com/",
          logo_path: "kcb.jpeg",
          location: "Upperhill, Nairobi, Kenya",
          description:
            "Complete business requirements discovery process by gathering, sorting, evaluating, and recording business requirements in accordance with the standards established by the bank. This involves producing high-level solution designs in line with the enterprise architecture of the bank to satisfy business needs.",
          color: "#0879bf",
        },
        {
          title: "Backend Developer",
          company: "Savannah Informatics",
          company_url: "https://www.savannahinformatics.com/",
          logo_path: "sav.jpeg",
          location: "Kilimani, Nairobi, Kenya",
          description:
            "I worked on a team to develop and maintain Slade360 Electronic Data Interchange, a piece of software that links payers and healthcare providers. Responsibilities included integration of new sytems, maintaining codebase, client engagement & comprehensive testing.",
          color: "#9b1578",
        },
        {
          title: "Digital Marketing Specialist",
          company: "Smartduka Ltd",
          company_url: "http://smartduka.com/",
          logo_path: "duka.jpeg",
          location: "Riverside, Nairobi, Kenya",
          description:
            "Worked as an Intern in an ecommerce startup taking roles in various departments spanning from customer service, marketing and Tech support. I developed and executed marketing campaigns, trained and offered technical support to vendors & mainatained existing codebase",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Backend Systems Intern",
          company: "Savannah Informatics",
          company_url: "https://www.savannahinformatics.com/",
          logo_path: "sav.jpeg",
          location: "Kilimani, Nairobi, Kenya",
          description:
            "I worked on a team to develop and maintain Slade360 Electronic Data Interchange, a piece of software that links payers and healthcare providers.  Responsibilities included integration of new sytems, maintaining codebase, client engagement & comprehensive testing.",
          color: "#000000",
        },
        {
          title: "Data Researcher",
          company: "KNBS",
          company_url: "https://www.knbs.or.ke/",
          logo_path: "knbs.webp",
          location: "Machakos, Kenya",
          description:
            "I inititated a campaign that involved data-driven strategies that lead to informed and successful decision-making within the organization & Introducing innovative data solutions or tools that enhance the organization's ability to collect, process, and analyze data efficiently.",
          color: "#ee3c26",
        },
        {
          title: "Data Researcher",
          company: "Nielsen",
          company_url: "https://www.nielsen.com/",
          logo_path: "niel.jpeg",
          location: "Nairobi, Kenya",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "photo.jpeg",
    description:
      "I am a curious mind who is constantly looking to learn. If you want to talk about software development, coding or anything else, drop me a line.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "Coming soon...",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Juja, Nairobi",
    locality: "Kanodar",
    country: "KE",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "0797578553",
  },
  emailSection: {
    title: "Email",
    subtitle: "mutismusembi@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
