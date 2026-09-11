// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/papers/";
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
          section: "News",},{id: "news-new-paper-out-quantifying-black-carbon-mixing-state-heterogeneity-using-a-machine-learning-model-is-online-in-jgr-atmospheres",
          title: 'New paper out! “Quantifying Black Carbon Mixing State Heterogeneity Using a Machine Learning...',
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
            },},];
