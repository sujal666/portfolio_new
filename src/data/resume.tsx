import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Sujal Poojari",
  initials: "SP",
  url: "https://dillion.io",
  location: "Mumbai City, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer. I love building things and try out new stuffs.",
  summary:
    "At the start of my career, I joined early-stage startups as a Frontend Engineer, where I built production-ready products from scratch and took ownership in fast-paced environments. Over the past year, I’ve collaborated closely with backend teams and clients, shipping scalable web applications using modern stacks like MERN and Next.js. Alongside building products, I actively explored research and innovation, publishing papers, presenting at conferences, and diving deeper into AI/ML systems. What started as curiosity around intelligent applications has now turned into a focused transition toward AI-driven product development.",
  avatarUrl: "/sujal.jpeg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "poojarisujal03@gmail.com",
    tel: "+919082257669",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sujal666",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sujalpoojari/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Sujal50822932",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Bee Online",
      href: "https://www.beeonline.co.in/",
      badges: [],
      location: "Hybrid (Mumbai, India)",
      title: "React Developer",
      logoUrl: "/bee.png",
      start: "Aug 2025",
      end: "Present",
      description:
        "Built and delivered 3+ production-grade websites using React, Next.js, Vue.js, and SCSS, across e-commerce, hospitality, and mental health domains.Improved development efficiency by ~25–30% through reusable component architecture, effective state management, and clean, scalable frontend patterns.Integrated RESTful APIs with Node.js backends, enabling dynamic content, real-time updates, and seamless frontend–backend communication.",
    },
    {
      company: "Pikvita Pvt. Ltd.",
      badges: [],
      href: "https://pikvita.com/",
      location: "Remote (Bangalore, India)",
      title: "Front-End Engineer",
      logoUrl: "/pikvita.jpg",
      start: "Nov 2024",
      end: "Dec 2024",
      description:
        "Redesigned and optimized the Admin Panel and Vendor Panel, improving operational efficiency for managing users, delivery personnel, and vendors at scale. Built responsive, production-ready UIs using React.js, Next.js, and Tailwind CSS, ensuring consistency across devices and dashboards. Implemented real-time updates and notification flows to help vendors manage orders, inventory, and payments more efficiently. Developed advanced admin features including filtering, sorting, monitoring tools, and data-driven dashboards in close collaboration with backend teams",
    },
    {
      company: "QuikFlo",
      href: "https://www.linkedin.com/company/quikflo/posts/?feedView=all",
      badges: [],
      location: "Remote (Bangalore, India)",
      title: "UX/UX Designer",
      logoUrl: "/quikflo.jpg",
      start: "Feb 2024",
      end: "June 2024",
      description:
        "Designed end-to-end mobile app experiences for Quikflo’s Partner App, Delivery App, and Manufacturer App using Figma, focusing on clarity, scalability, and real-world workflows. Applied design thinking methodologies to identify user pain points, conceptualize solutions, and iterate on complex product flows. Used rapid prototyping and iterative usability testing to refine designs, improving overall user engagement, task efficiency, and product usability. Collaborated closely with product and engineering teams to translate design concepts into feasible, developer-ready solutions.",
    },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    // {
    //   school: "Buildspace",
    //   href: "https://buildspace.so",
    //   degree: "s3, s4, sf1, s5",
    //   logoUrl: "/buildspace.jpg",
    //   start: "2023",
    //   end: "2024",
    // },
    {
      school: "University of Mumbai",
      href: "https://uwaterloo.ca",
      degree: "Bachelor of Engineering in Information Technology",
      logoUrl: "/mu.jpg",
      start: "2021",
      end: "2025",
    },
    {
      school: "University of Mumbai",
      href: "https://wlu.ca",
      degree: " Honors degree in Artificial Intelligence and Machine Learning (AI&ML)",
      logoUrl: "/mu.jpg",
      start: "2021",
      end: "2025",
    },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
        {
      title: "Dataset Quality Analyzer",
      href: "https://dataset-quality-analyzer-ohxc.vercel.app/",
      dates: "AI/ML Project",
      active: true,
      description:
        "Designed and built a modality-aware dataset auditing engine that evaluates structural integrity, statistical reliability, and training-readiness of machine learning datasets before model development.",
      fullDescription:
  "• Built a modality-aware Dataset Quality Analyzer to audit machine learning datasets before training.\n\n" +
  "• Automatically detects structural issues such as missing values, schema inconsistencies, and empty text samples.\n\n" +
  "• Identifies exact duplicates and business-key duplicates for structured datasets.\n\n" +
  "• Uses transformer-based sentence embeddings for semantic near-duplicate detection in text datasets.\n\n" +
  "• Flags label imbalance, missing label columns, and potential train–test data leakage.\n\n" +
  "• Runs toxicity detection to identify unsafe or harmful text samples.\n\n" +
  "• Implements a weighted Dataset Health Score (0–100) to measure overall training readiness.\n\n" +
  "• Designed with a modular analyzer architecture and embedding caching for performance optimization.\n\n" +
  "• Generates human-readable insights and actionable recommendations for data cleanup and improvement.",

      technologies: [
        "Next.js",
        "Typescript",
        "Hugging Face transformers",
        "Hugging Face transformers",
        "TailwindCSS",
        "Sentence-Transformers (all-MiniLM-L6-v2)",
        "Python",
        "Pandas",
        "NumPy",
        "Render for hosting",
        "Vercel for hosting",
      ],
      links: [
        {
          type: "Website",
          href: "https://dataset-quality-analyzer-ohxc.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sujal666/Dataset-Quality-Analyzer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project1.png",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "AI Rental Intelligence Platform",
      href: "https://automatic.chat",
      dates: "AI/ML - Fullstack Project",
      active: true,
      description:
        "An end-to-end ML-powered rental analytics system designed to predict fair market rent, detect pricing anomalies, and provide explainable market intelligence across major Indian cities.",
 fullDescription:
  "• Built a production-grade AI Rental Intelligence Platform for rental valuation and explainable market analytics.\n\n" +
  " • Developed a LightGBM regression engine with advanced feature engineering (target encoding, categorical handling, log optimization).\n\n" +
  " • Implemented pricing anomaly detection using model residuals to flag ±15% market deviations.\n\n" +
  " • Delivered retrieval-augmented rental insights via TF-IDF vector indexing and cosine similarity search.\n\n" +
  " • Designed a scalable microservices architecture (FastAPI + Express + Next.js) with Docker-based deployment and typed REST APIs.\n\n" +
   "• Automated ML training, insight generation, and vector indexing pipelines for reproducibility.",

    technologies: [
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "Zod",
  "Axios",
  "FastAPI",
  "Python",
  "Pydantic",
  "LightGBM",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "TfidfVectorizer",
  "Joblib",
  "Uvicorn",
  "OpenAI API ",
  "Docker",
  "Docker Compose",
  "PowerShell Scripts",
  "Chroma/FAISS-ready index (TF-IDF)",
],

      links: [
        {
          type: "Website",
          href: "https://rental-intelligence.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
           {
          type: "Source",
          href: "https://github.com/sujal666/Rental-Intelligence",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rental.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
      {
      title: "Medical Diagnosis",
      href: "https://medicaldiagnosis-project.streamlit.app/",
      dates: "AI/ML",
      active: true,
      description:
        "Built end-to-end RAG pipeline: PDF ingestion → chunking → Gemini embeddings → Pinecone indexing with automatic index provisioning and dimension guardrails.",
 fullDescription:
  "• Built end-to-end RAG pipeline: PDF ingestion → chunking → Gemini embeddings → Pinecone indexing with automatic index provisioning and dimension guardrails.\n\n" +
  " • Implemented RBAC flows where patient uploads/queries are enforced server-side and doctors have read-only access to patient diagnosis histories.\n\n" +
  " • Designed resilient error handling for external providers (Gemini/Pinecone) with user-friendly HTTP errors and lazy imports to reduce startup failures.\n\n" +
  " • Persisted full audit trail: report metadata and per-question diagnosis history with sources and timestamps for later review.\n\n" +
  " • Streamlit dashboards tailored to roles, reusing a shared API URL for local/remote deployments.\n\n " +
  " • Deployed using stremlit cloud and render.",

technologies: [
"FastAPI",
"Python",
"Pydantic",
"Uvicorn",
"Streamlit",
"Requests",
"MongoDB (PyMongo)",
"Pinecone Vector DB",
"Google Generative AI Embeddings",
"Groq LLaMA 3.1 (ChatGroq)",
"LangChain (loaders, splitters, chains)",
"PyPDF / PyPDF2",
"python-dotenv",
"bcrypt (passlib)",
"HTTP Basic Auth (FastAPI Security)",
"AsyncIO",
],

      links: [
        {
          type: "Website",
          href: "https://medicaldiagnosis-project.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
           {
          type: "Source",
          href: "https://github.com/sujal666/medical-diagnosis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/md.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Naan Kabob",
      href: "https://nk.beeonline.co.in/",
      dates: "Frontend Project",
      active: true,
      description:
        "Built the complete frontend from scratch for Naan Kabob, a popular Afghan & Mediterranean restaurant brand, along with a custom admin panel.",
      fullDescription:
        "While working at BeeOnline, I built the complete frontend from scratch for Naan Kabob, along with a custom admin panel to dynamically manage website content. Naan Kabob is a popular Afghan & Mediterranean restaurant brand in Canada, known for blending traditional Afghan flavors with a modern dining experience across dine-in, catering, and online ordering. The project strengthened their digital presence through a responsive, user-focused website and an easy-to-manage content system.",
      technologies: [
        "Next.js",
        "Javascript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://nk.beeonline.co.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/nk.png",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Clear My Mind",
      href: "https://www.clearmymind.com/",
      dates: "Frontend Project",
      active: true,
      description:
        "Developed the full frontend website and therapist dashboard for an online mental health platform offering virtual counselling.",
      fullDescription:
        "I developed the full frontend website as well as a comprehensive therapist dashboard (admin/therapist side interface) to support both user engagement and internal practice management. Clear My Mind is an online mental health platform offering virtual counselling, therapy sessions, and expert support for individuals, couples, teens, and families dealing with anxiety, stress, depression, and other wellbeing challenges.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Razorpay",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.clearmymind.com/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/cmm.png",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },

  ],
  hackathons: [
    {
      title: "International Conference on Next-Gen Computing and Communication Systems ICNCS-2025 ",
      dates: "Jan 2026",
      location: "Jaipur, India",
      // description:
      //   "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [  {
          type: "Source",
          href: "https://link.springer.com/chapter/10.1007/978-3-032-12544-6_4?error=cookies_not_supported&code=d076da61-5769-426e-b1f2-a6eff6211501",
          icon: <Icons.github className="size-3" />,
        },],
    },
    {
      title: "International Conference on Emerging Trends in Engineering, Science and Technology",
      dates: "April 2025",
      location: "Mumbai, India",
      description:
        " Sandip Institute of Engineering and Management, Nashik and Belarusian National Technical University Minsk, Belarus",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [ {
          type: "Source",
          href: "https://drive.google.com/drive/folders/11oJ6F4-7GCtXIfc-u3NEnn60zAG09sVQ",
          icon: <Icons.github className="size-3" />,
        },],
    },
    {
      title: "AVISHKAR 2023-24",
      dates: "December 2023",
      location: "Vivekanand Education Society's Institute Of Technology (VESIT), Mumbai, India",
      description:
        " Cleared institute level and was qualified for University Level. Presented poster on Vegitable Disease Detection using Machine Learning.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
         {
          title: "Github",
          icon: <Icons.github className="size-3" />,
          href: "https://www.linkedin.com/posts/sujalpoojari_avishkar-avishkarcompetition-posterdesign-share-7167704611317792768-nffd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOpQW0BMdPxjI681SXo6Q0HGrrlF6R8M4I",
        },
      ],
    },
    // {
    //   title: "DeveloperWeek Hackathon",
    //   dates: "February 3rd - 4th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //   links: [
    //     {
    //       title: "Github",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/cryptotrends/cryptotrends",
    //     },
    //   ],
    // },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
    // {
    //   title: "ETH Waterloo",
    //   dates: "October 13th - 15th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //   links: [
    //     {
    //       title: "Organization",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ethdocnet",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The North",
    //   dates: "September 15th - 17th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a virtual reality application allowing users to see themselves in third person.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Streamer Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/htn2017",
    //     },
    //     {
    //       title: "Client Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/RTSPClient",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The 6ix",
    //   dates: "August 26th - 27th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ShareShip/ShareShip",
    //     },
    //     {
    //       title: "Site",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://share-ship.herokuapp.com/",
    //     },
    //   ],
    // },
    // {
    //   title: "Stupid Hack Toronto",
    //   dates: "July 23rd, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //     },
    //   ],
    // },
    // {
    //   title: "Global AI Hackathon - Toronto",
    //   dates: "June 23rd - 25th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/TinySamosas/",
    //     },
    //   ],
    // },
    // {
    //   title: "McGill AI for Social Innovation Hackathon",
    //   dates: "June 17th - 18th, 2017",
    //   location: "Montreal, Quebec",
    //   description:
    //     "Developed realtime facial microexpression analyzer using AI",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //   links: [],
    // },
    // {
    //   title: "Open Source Circular Economy Days Hackathon",
    //   dates: "June 10th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/genecis",
    //     },
    //   ],
    // },
    // {
    //   title: "Make School's Student App Competition 2017",
    //   dates: "May 19th - 21st, 2017",
    //   location: "International",
    //   description: "Improved PocketDoc and submitted to online competition",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //   win: "Top 10 Finalist | Honourable Mention",
    //   links: [
    //     {
    //       title: "Medium Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //     },
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "HackMining",
    //   dates: "May 12th - 14th, 2017",
    //   location: "Toronto, Ontario",
    //   description: "Developed neural network to optimize a mining process",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //   links: [],
    // },
    // {
    //   title: "Waterloo Equithon",
    //   dates: "May 5th - 7th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "SpaceApps Waterloo",
    //   dates: "April 28th - 30th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/earthwatch",
    //     },
    //   ],
    // },
    // {
    //   title: "MHacks 9",
    //   dates: "March 24th - 26th, 2017",
    //   location: "Ann Arbor, Michigan",
    //   description:
    //     "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/threejs-planes",
    //     },
    //   ],
    // },
    // {
    //   title: "StartHacks I",
    //   dates: "March 4th - 5th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //   win: "1st Place Winner",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-ionic",
    //     },
    //     {
    //       title: "Source (Server)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "QHacks II",
    //   dates: "February 3rd - 5th, 2017",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/human-huntr-react-native",
    //     },
    //     {
    //       title: "Source (API)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "Terrible Hacks V",
    //   dates: "November 26th, 2016",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mock of Windows 11 with interesting notifications and functionality",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //     },
    //   ],
    // },
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ],
} as const;
