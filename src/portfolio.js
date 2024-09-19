/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jérémy's Portfolio",
  description: "//TODO",
  og: {
    title: "Jeremy Martin Portfolio",
    type: "website",
    url: "https://martin-jeremy.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Jérémy Martin",
  logo_name: "Jeremy Martin",
  nickname: "martin-jeremy",
  subTitle: "//TODO",
  resumeLink: "//TODO",
  portfolio_repository: "https://github.com/martin-jeremy/martin-jeremy",
  githubProfile: "https://github.com/martin-jeremy",
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
    link: "https://github.com/martin-jeremy",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/martin-jeremy/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:jeremy.delpech.martin@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "//TODO",
      fileName: "DataScienceImg",
      skills: ["⚡ //TODO"],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
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
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "//TODO",
      fileName: "FullStackImg",
      skills: ["⚡ //TODO"],
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
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "//TODO",
      fileName: "CloudInfraImg",
      skills: ["⚡ //TODO"],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
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
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "//TODO",
      fileName: "DesignImg",
      skills: ["⚡ //TODO"],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
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
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
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
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
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
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "//TODO School",
      subtitle: "//TODO Diploma",
      logo_path: "iiitk_logo.png",
      alt_name: "//TODO",
      duration: "//TODO",
      descriptions: ["⚡ //TODO"],
      website_link: "//TODO",
    },
    {
      title: "//TODO School",
      subtitle: "//TODO Diploma",
      logo_path: "iiitk_logo.png",
      alt_name: "//TODO",
      duration: "//TODO",
      descriptions: ["⚡ //TODO"],
      website_link: "//TODO",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "//TODO",
      subtitle: "//TODO Organism",
      logo_path: "stanford_logo.png",
      certificate_link: "//TODO",
      alt_name: "//TODO Organism",
      color_code: "#8C151599",
    },
    {
      title: "//TODO",
      subtitle: "//TODO",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "//TODO",
      alt_name: "//TODO",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "//TODO",
  description: "//TODO",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "//TODO",
          company: "//TODO.",
          company_url: "//TODO",
          logo_path: "tiktok_logo.png",
          duration: "//TODO",
          location: "//TODO",
          description: "//TODO",
          color: "#000000",
        },
        {
          title: "//TODO",
          company: "//TODO.",
          company_url: "//TODO",
          logo_path: "tiktok_logo.png",
          duration: "//TODO",
          location: "//TODO",
          description: "//TODO",
          color: "#000000",
        },
        {
          title: "//TODO",
          company: "//TODO.",
          company_url: "//TODO",
          logo_path: "tiktok_logo.png",
          duration: "//TODO",
          location: "//TODO",
          description: "//TODO",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "//TODO",
          company: "//TODO.",
          company_url: "//TODO",
          logo_path: "tiktok_logo.png",
          duration: "//TODO",
          location: "//TODO",
          description: "//TODO",
          color: "#000000",
        },
        {
          title: "//TODO",
          company: "//TODO.",
          company_url: "//TODO",
          logo_path: "tiktok_logo.png",
          duration: "//TODO",
          location: "//TODO",
          description: "//TODO",
          color: "#000000",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "//TODO",
    //       company: "//TODO.",
    //       company_url: "//TODO",
    //       logo_path: "tiktok_logo.png",
    //       duration: "//TODO",
    //       location: "//TODO",
    //       description:
    //         "//TODO",
    //       color: "#000000",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "//TODO",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "//TODO",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "//TODO",
      name: "//TODO",
      createdAt: "//TODO",
      description: "//TODO",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "//TODO",
      name: "//TODO",
      createdAt: "//TODO",
      description: "//TODO",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "//TODO",
      name: "//TODO",
      createdAt: "//TODO",
      description: "//TODO",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "//TODO",
      name: "//TODO",
      createdAt: "//TODO",
      description: "//TODO",
      url: "https://arxiv.org/abs/2307.00653",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description: "//TODO",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "//TODO",
    link: "//TODO",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "//TODO",
    locality: "//TODO",
    country: "//TODO",
    region: "//TODO",
    postalCode: "//TODO",
    streetAddress: "//TODO",
    avatar_image_path: "address_image.svg",
    location_map_link: "//TODO",
  },
  phoneSection: {
    title: "",
    subtitle: "",
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
