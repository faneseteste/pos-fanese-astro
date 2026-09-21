export type Course = {
  slug: string;
  shortName: string;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
  heroImage: string;
  accent: string;
  area: string;
  modality: string;
  workload: string;
  modules: string;
  frequency: string;
  start: string;
  tcc: string;
  audience: string;
  audienceProfiles?: string[];
  generalObjective: string;
  specificObjectives: string[];
  expectedResultsIntro: string;
  expectedResults: string[];
  differentials: string[];
};

export const courses: Course[] = [
  {
    slug: 'gestao-de-pessoas-lideranca-desenvolvimento-humano',
    shortName: 'Gestão de Pessoas e Liderança',
    name: 'Pós-Graduação em Gestão de Pessoas, Liderança e Desenvolvimento Humano',
    eyebrow: 'Liderança que transforma organizações',
    description:
      'Formação estratégica para liderar pessoas, desenvolver talentos e conectar decisões de RH aos objetivos do negócio.',
    image: '/images/courses/gestao-pessoas.jpg',
    heroImage: '/images/courses/hero.jpg',
    accent: 'cyan',
    area: 'Gestão de Pessoas',
    modality: 'Presencial',
    workload: '360 horas',
    modules: '30 módulos',
    frequency: 'Encontros quinzenais',
    start: '13 de novembro de 2026',
    tcc: 'Facultativo',
    audience:
      'O curso destina-se a profissionais graduados em Administração, Recursos Humanos, Psicologia, Ciências Contábeis, Direito, Engenharia, Tecnologia e demais áreas do conhecimento que atuem ou tenham interesse em atuar na área de Gestão de Pessoas e em funções relacionadas à gestão organizacional. Também se destina a gestores, líderes, analistas, consultores, profissionais da área de Gestão de Pessoas e demais profissionais que busquem aperfeiçoamento e especialização em práticas estratégicas e contemporâneas de gestão de pessoas, liderança e desenvolvimento humano.',
    generalObjective:
      'Formar profissionais especializados em Gestão de Pessoas, Liderança e Desenvolvimento Humano, capazes de atuar de forma estratégica na gestão de pessoas, no desenvolvimento de lideranças e na promoção do desenvolvimento humano, integrando conhecimentos, práticas e tecnologias às necessidades e objetivos das organizações.',
    specificObjectives: [
      'Aprofundar conhecimentos relacionados aos fundamentos e às práticas contemporâneas de Gestão de Pessoas.',
      'Desenvolver competências para atuação em liderança, desenvolvimento e gestão de talentos.',
      'Capacitar para a análise e aplicação de estratégias de gestão de pessoas alinhadas aos objetivos organizacionais.',
      'Desenvolver conhecimentos relacionados à utilização de indicadores, dados e ferramentas de análise na tomada de decisão em Gestão de Pessoas.',
      'Preparar profissionais para lidar com transformações organizacionais, tecnológicas e sociais que impactam a gestão de pessoas.',
      'Estimular a aplicação prática dos conhecimentos adquiridos na análise e solução de situações relacionadas à gestão de pessoas.',
    ],
    expectedResultsIntro:
      'O egresso deverá estar preparado para atuar de forma estratégica, ética e integrada nos diferentes processos relacionados à gestão de pessoas, à liderança e ao desenvolvimento humano nas organizações.',
    expectedResults: [
      'Analisar cenários organizacionais, identificar necessidades relacionadas às pessoas e propor soluções alinhadas aos objetivos institucionais, considerando aspectos humanos, culturais, estratégicos e tecnológicos.',
      'Atuar em processos de liderança, atração e seleção, desenvolvimento, gestão de desempenho, carreira, remuneração, experiência do colaborador e gestão de mudanças.',
      'Compreender o uso de indicadores e dados como apoio à tomada de decisão e reconhecer os impactos da transformação digital e da inteligência artificial sobre a gestão de pessoas.',
    ],
    differentials: [
      'People Analytics e Inteligência Artificial aplicada ao RH',
      'Formação para atuação como HR Business Partner',
      'Laboratório de práticas, cases e soluções reais',
    ],
  },

  {
    slug: 'direito-penal-processual-tribunal-juri',
    shortName: 'Direito Penal e Tribunal do Júri',
    name: 'Pós-Graduação em Direito Penal e Direito Processual Penal com Ênfase em Tribunal do Júri',
    eyebrow: 'Conhecimento jurídico que encontra a prática forense',
    description:
      'Formação técnica e imersiva para desenvolver estratégias de atuação criminal, argumentação e prática no Tribunal do Júri.',
    image: '/images/courses/direito-penal.jpg',
    heroImage: '/images/courses/hero.jpg',
    accent: 'red',
    area: 'Direito',
    modality: 'Presencial',
    workload: '360 horas',
    modules: '30 módulos',
    frequency: 'Encontros quinzenais',
    start: '13 de novembro de 2026',
    tcc: 'Facultativo',
    audience:
      'O curso destina-se, prioritariamente, a bacharéis em Direito e profissionais com atuação ou interesse na área criminal, observados os requisitos legais e institucionais para ingresso em curso de pós-graduação lato sensu.',
    audienceProfiles: [
      'Bacharéis em Direito e advogados.',
      'Membros do Ministério Público, Defensoria Pública e Magistratura.',
      'Servidores do Poder Judiciário e demais órgãos relacionados à Justiça.',
      'Profissionais de segurança pública e áreas correlatas.',
      'Demais profissionais que atendam aos requisitos institucionais de ingresso.',
    ],
    generalObjective:
      'Aprofundar conhecimentos teóricos, técnicos e práticos em Direito Penal e Direito Processual Penal com Ênfase em Tribunal do Júri, desenvolvendo competências para análise jurídica, atuação processual e tomada de decisões estratégicas na área criminal.',
    specificObjectives: [
      'Aprofundar os fundamentos e institutos do Direito Penal e do Direito Processual Penal.',
      'Desenvolver competências para análise de casos e situações jurídicas na área criminal.',
      'Aprimorar a compreensão das fases, procedimentos e estratégias do Tribunal do Júri.',
      'Desenvolver habilidades práticas relacionadas à elaboração e análise de peças processuais.',
      'Aperfeiçoar técnicas de argumentação, oratória, persuasão e atuação profissional.',
      'Integrar conhecimentos teóricos e práticos na resolução de casos criminais.',
    ],
    expectedResultsIntro:
      'Ao final do curso, espera-se que o egresso seja capaz de analisar criticamente situações jurídicas criminais, interpretar legislação e jurisprudência, formular estratégias de atuação, compreender a dinâmica do processo penal e atuar de forma técnica e ética em atividades relacionadas ao Tribunal do Júri.',
    expectedResults: [
      'Analisar institutos de Direito Penal e Processo Penal de forma sistemática.',
      'Interpretar legislação, doutrina e jurisprudência aplicáveis à matéria criminal.',
      'Construir estratégias defensivas e acusatórias adequadas aos casos concretos.',
      'Elaborar e analisar peças processuais e manifestações jurídicas.',
      'Atuar com maior segurança técnica em procedimentos do Tribunal do Júri.',
      'Utilizar técnicas de comunicação, argumentação e persuasão jurídica.',
      'Adotar postura profissional compatível com a ética e as responsabilidades da atuação jurídica.',
    ],
    differentials: [
      'Oficinas práticas com análise estratégica de casos criminais',
      'Estratégias de defesa e acusação no Tribunal do Júri',
      'Oratória, persuasão jurídica e dois módulos de júri simulado',
    ],
  },
];
