export type Course = {
  slug: string;
  shortName: string;
  name: string;
  eyebrow: string;
  description: string;
  description2: string;
  description3: string;
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
    slug: 'direito-penal-processual-tribunal-juri',
    shortName: 'Direito Penal e Tribunal do Júri',
    name: 'Pós-Graduação em Direito Penal e Direito Processual Penal com Ênfase em Tribunal do Júri',
    eyebrow: 'Conhecimento jurídico que encontra a prática forense',
    description:
      'Vá além da formação generalista e aprofunde conhecimentos essenciais para sua atuação em Direito Penal.',
    description2:
'A graduação constrói fundamentos essenciais. A atuação criminal exige aprofundar a relação entre Direito Penal, Processo Penal, prova, estratégia e tomada de decisão.',
    description3:
      'A Pós-Graduação da FANESE foi estruturada para percorrer esse caminho de forma integrada, dos fundamentos jurídicos às situações que antecedem e compõem o Tribunal do Júri. O curso aprofunda análise jurídica, atuação processual, construção de estratégias, elaboração de peças e técnicas de argumentação aplicadas à área criminal. ',
    image: '/images/courses/direito-penal.jpg',
    heroImage: '/images/courses/hero.jpg',
    accent: 'red',
    area: 'Direito',
    modality: 'Presencial',
    workload: '360 horas',
    modules: '30 disciplinas',
    frequency: 'Encontros quinzenais',
    start: '13 de novembro de 2026',
    tcc: 'Facultativo',
    audience:
      'Para bacharéis em Direito e profissionais que atuam ou desejam aprofundar conhecimentos na área criminal.',
    audienceProfiles: [
      'A formação também contempla profissionais ligados ao sistema de Justiça, como advogados, membros do Ministério Público, Defensoria Pública, Magistratura, servidores do Poder Judiciário e profissionais de segurança pública, observados os requisitos institucionais de ingresso. ',
    ],
    generalObjective:
      'Aprofundar conhecimentos teóricos, técnicos e práticos em Direito Penal e Processual Penal, desenvolvendo maior capacidade de análise jurídica, atuação processual e tomada de decisões estratégicas na área criminal e ao Tribunal do Júri.',
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
      'Formação conectada ao percurso do caso: Da investigação e produção da prova às estratégias que chegam ao plenário.',
      'Defesa e acusação: A formação trabalha as duas perspectivas, ampliando a compreensão das decisões e argumentos envolvidos no processo.',
      'Prática integrada à formação: Oficinas, análise estratégica de casos, elaboração de peças e atividades de simulação.',
      'Comunicação jurídica: Oratória, retórica, argumentação e persuasão conectadas à técnica e à leitura do caso.',
    ],
  },

];
