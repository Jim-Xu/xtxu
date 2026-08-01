// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-papers",
              title: "Papers",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/papers/";
              },
            },{id: "dropdown-conference-presentations",
              title: "Conference Presentations",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/presentations/";
              },
            },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching-mentoring",
          title: "Teaching/Mentoring",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-substantial-changes-in-nitrogen-dioxide-and-ozone-after-excluding-meteorological-impacts-during-the-covid-19-outbreak-in-mainland-china-is-out-in-environmental-science-amp-amp-technology-letters",
          title: 'Our paper “Substantial Changes in Nitrogen Dioxide and Ozone after Excluding Meteorological Impacts...',
          description: "",
          section: "News",},{id: "news-i-am-going-to-join-the-department-of-atmospheric-science-at-university-of-illinois-urbana-champaign-as-a-ph-d-student-in-late-august",
          title: 'I am going to join the Department of Atmospheric Science at University of...',
          description: "",
          section: "News",},{id: "news-our-paper-towards-the-short-term-responses-of-air-quality-to-covid-19-in-mainland-china-was-selected-as-the-best-es-amp-amp-t-letters-papers-in-2020",
          title: 'Our paper towards the short-term responses of air quality to COVID-19 in mainland...',
          description: "",
          section: "News",},{id: "news-our-paper-modeling-the-high-mercury-wet-deposition-in-the-southeastern-us-with-wrf-gc-hg-v1-0-is-online-in-geoscientific-model-development",
          title: 'Our paper “Modeling the high-mercury wet deposition in the southeastern US with WRF-GC-Hg...',
          description: "",
          section: "News",},{id: "news-i-received-the-spring-2023-schlesinger-travel-grant-to-attend-2023-american-chemistry-society-spring-meeting-at-indianapolis-in",
          title: 'I received the Spring 2023 Schlesinger Travel Grant to attend 2023 American Chemistry...',
          description: "",
          section: "News",},{id: "news-i-received-the-fall-2023-schlesinger-travel-grant-to-attend-the-2023-international-aerosol-modeling-algorithms-conference-at-davis-ca",
          title: 'I received the Fall 2023 Schlesinger Travel Grant to attend the 2023 International...',
          description: "",
          section: "News",},{id: "news-i-received-the-graduate-college-s-conference-presentation-award-to-attend-the-106th-ams-annual-meeting-at-houston-tx",
          title: 'I received the Graduate College’s Conference Presentation Award to attend the 106th AMS...',
          description: "",
          section: "News",},{id: "news-our-paper-role-of-liquid-liquid-phase-separation-induced-surface-tension-changes-in-cloud-droplet-activation-is-online-in-aerosol-science-and-technology",
          title: 'Our paper “Role of liquid-liquid phase separation-induced surface tension changes in cloud droplet...',
          description: "",
          section: "News",},{id: "news-our-paper-compensating-biases-in-ccn-predictions-from-composition-averaging-and-neglected-surfactant-effects-is-online-in-atmospheric-chemistry-and-physics",
          title: 'Our paper “Compensating biases in CCN predictions from composition averaging and neglected surfactant...',
          description: "",
          section: "News",},{id: "projects-wrf-gc-hg-v1-0",
          title: 'WRF-GC-Hg V1.0',
          description: "high-res Hg wet deposition simulation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-surfactants",
          title: 'surfactants',
          description: "implement effective surface tension in PartMC-MOSAIC",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%78%32%34@%69%6C%6C%69%6E%6F%69%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Jim-Xu", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-9894-4883", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Xiaotian-Xu-11?ev=hdr_xprf/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=hM_FmJMAAAAJ&hl", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/jimxu95", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
