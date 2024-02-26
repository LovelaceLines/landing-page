// Usage: npx prisma db seed

import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const authors: Prisma.AuthorCreateInput[] = [
  {
    id: 'capivara',
    name: 'Capivara',
    slug: 'capivara',
    descriptionUI: 'Capivara é uma repórter e escritora que adora compartilhar histórias e aventuras sobre a natureza e o mundo animal. Ela é a fundadora do blog Lovelace Lines e está sempre em busca de novas descobertas e aventuras para compartilhar com seus leitores. Siga Capivara nas redes sociais para acompanhar suas últimas reportagens e artigos sobre a vida selvagem e a natureza.',
    descriptionMeta: 'Capivara é uma repórter e escritora que adora compartilhar histórias e aventuras sobre a natureza e o mundo animal. Ela é a fundadora do blog Lovelace Lines e está sempre em busca de novas descobertas e aventuras para compartilhar com seus leitores. Siga Capivara nas redes sociais para acompanhar suas últimas reportagens e artigos sobre a vida selvagem e a natureza.',
    avatarPath: '/authors/capivara/avatar.jpg',
    coverImagePath: '/authors/capivara/cover.jpg',
    occupation: 'Reporter e Escritora',
    company: 'Blog Lovelace Lines',
    email: 'capivara@email.com',
    instagram: 'https://www.instagram.com/capivara',
    twitter: 'https://twitter.com/capivara',
    linkedin: 'https://www.linkedin.com/capivara',
    github: 'https://github.com/capivara',
  },
  {
    id: 'gaviao',
    name: 'Gavião',
    slug: 'gaviao',
    descriptionUI: 'Gavião é um escritor e pesquisador apaixonado pela natureza e pela vida selvagem. Ele é colaborador do blog Lovelace Lines e adora compartilhar suas descobertas e aventuras com seus leitores. Siga Gavião nas redes sociais para acompanhar suas últimas reportagens e artigos sobre a vida selvagem e a natureza.',
    descriptionMeta: 'Gavião é um escritor e pesquisador apaixonado pela natureza e pela vida selvagem. Ele é colaborador do blog Lovelace Lines e adora compartilhar suas descobertas e aventuras com seus leitores. Siga Gavião nas redes sociais para acompanhar suas últimas reportagens e artigos sobre a vida selvagem e a natureza.',
    avatarPath: '/authors/gaviao/avatar.jpg',
    coverImagePath: '/authors/gaviao/cover.jpg',
    occupation: 'Escritor',
    company: 'Blog Lovelace Lines',
    email: 'gaviao@email.com',
    instagram: 'https://www.instagram.com/gaviao',
    twitter: 'https://twitter.com/gaviao',
    linkedin: 'https://www.linkedin.com/gaviao',
    github: 'https://github.com/gaviao',
  },
  {
    id: 'tarataruga',
    name: 'Tartaruga',
    slug: 'tartaruga',
    descriptionUI: 'Tartaruga é um escritor e pesquisador apaixonado pela natureza e pela vida selvagem. Ele é colaborador do blog Lovelace Lines e adora compartilhar suas descobertas e aventuras com seus leitores. Siga Tartaruga nas redes sociais para acompanhar suas últimas reportagens e artigos sobre a vida selvagem e a natureza.',
    descriptionMeta: 'Tartaruga é um escritor e pesquisador apaixonado pela natureza e pela vida selvagem. Ele é colaborador do blog Lovelace Lines e adora compartilhar suas descobertas e aventuras com seus leitores. Siga Tartaruga nas redes sociais para acompanhar suas últimas reportagens e artigos sobre a vida selvagem e a natureza.',
    avatarPath: '/authors/tartaruga/avatar.jfif',
    coverImagePath: '/authors/tartaruga/cover.jfif',
    occupation: 'Escritor',
    company: 'Blog Lovelace Lines',
    email: 'tartaruga@email.com',
    instagram: 'https://www.instagram.com/tartaruga',
    twitter: 'https://twitter.com/tartaruga',
    linkedin: 'https://www.linkedin.com/tartaruga',
    github: 'https://github.com/tartaruga',
  },
  {
    id: 'galo',
    name: 'Galo',
    slug: 'galo',
    descriptionUI: 'Conheça o Galo, um ex-lutador de porte graúdo que se reinventou como comentarista de lutas. Com uma carreira repleta de títulos e uma paixão inabalável pelo esporte, ele agora compartilha sua experiência e insights com os fãs, inspirando outros atletas a perseguirem seus sonhos. Junte-se a ele nessa jornada emocionante pelo mundo das artes marciais!',
    descriptionMeta: 'Conheça o Galo, um ex-lutador de porte graúdo que se reinventou como comentarista de lutas. Com uma carreira repleta de títulos e uma paixão inabalável pelo esporte, ele agora compartilha sua experiência e insights com os fãs, inspirando outros atletas a perseguirem seus sonhos. Junte-se a ele nessa jornada emocionante pelo mundo das artes marciais!',
    avatarPath: '/authors/galo/avatar.jpg',
    coverImagePath: '/authors/galo/cover.jpg',
    occupation: 'Comentarista de Lutas',
    company: 'Blog Lovelace Lines',
    email: 'galo@email.com',
    instagram: 'https://www.instagram.com/galo',
    twitter: 'https://twitter.com/galo',
    linkedin: 'https://www.linkedin.com/galo',
    github: 'https://github.com/galo',
  },
  {
    id: 'snorlax',
    name: 'Snorlax',
    slug: 'snorlax',
    descriptionUI: 'Conheça o Snorlax, o adorável Pokémon dorminhoco e comilão! Ele adora tirar uma soneca e devorar suas iguarias favoritas sempre que possível. Tranquilo e de bom coração, o Snorlax prefere passar o tempo relaxando sob a sombra de uma árvore, ouvindo música e trocando ideias com seus amigos. Se você estiver procurando por uma companhia tranquila e amorosa, o Snorlax é a escolha perfeita!',
    descriptionMeta: 'Conheça o Snorlax, o adorável Pokémon dorminhoco e comilão! Ele adora tirar uma soneca e devorar suas iguarias favoritas sempre que possível. Tranquilo e de bom coração, o Snorlax prefere passar o tempo relaxando sob a sombra de uma árvore, ouvindo música e trocando ideias com seus amigos. Se você estiver procurando por uma companhia tranquila e amorosa, o Snorlax é a escolha perfeita!',
    avatarPath: '/authors/snorlax/avatar.jpg',
    coverImagePath: '/authors/snorlax/cover.jpg',
    occupation: 'Pokémon Dorminhoco e Comilão',
    company: 'Pokémon Company / Blog Lovelace Lines',
    email: 'snorlax@email.com',
    instagram: 'https://www.instagram.com/snorlax',
    twitter: 'https://twitter.com/snorlax',
    linkedin: 'https://www.linkedin.com/snorlax',
    github: 'https://github.com/snorlax',
  },
];

const posts: Prisma.PostCreateInput[] = [
  {
    id: 'hello-world',
    title: 'Hello-World!',
    slug: 'hello-world',
    descriptionUI: 'Olá mundo! Este é o primeiro post do blog Lovelace Lines. Aqui você encontrará muitas histórias e aventuras sobre a natureza e o mundo animal. Fique ligado!',
    descriptionMeta: 'Olá mundo! Este é o primeiro post do blog Lovelace Lines. Aqui você encontrará muitas histórias e aventuras sobre a natureza e o mundo animal. Fique ligado!',
    coverImagePath: '/posts/hello-world/cover.jpeg',
    dateCreated: '2020-06-16T05:35:07.322Z',
    dateLastModified: '2020-03-16T05:35:07.322Z',
    nextPostId: 'reportagem-especial-jornada-da-harmonia-na-natureza',
    prevPostId: 'explorando-o-mundo-das-frutas-mais-saborosas',
    content: '',
    authors: {
      connect: [
        {
          id: 'capivara',
        },
        {
          id: 'gaviao',
        },
      ],
    },
  },
  {
    id: 'a-galinha-filosofa-e-o-conflito-existencial-quem-veio-primeiro-o-ovo-ou-a-galinha',
    title: '🐔 A Galinha Filósofa e o Conflito Existencial: Quem Veio Primeiro, o Ovo ou a Galinha? 🥚',
    slug: 'a-galinha-filosofa-e-o-conflito-existencial-quem-veio-primeiro-o-ovo-ou-a-galinha',
    descriptionUI: 'Uma galinha filósofa do galinheiro se vê imersa em um dilema: quem veio primeiro, o ovo ou a galinha? Enquanto suas companheiras levam suas vidas normalmente, ela reflete sobre essa questão sem resposta. Após debates infrutíferos, decide meditar sobre o assunto. Enquanto isso, o galinheiro aguarda o desfecho dessa busca existencial que desafia conceitos estabelecidos.',
    descriptionMeta: 'Uma galinha filósofa do galinheiro se vê imersa em um dilema: quem veio primeiro, o ovo ou a galinha? Enquanto suas companheiras levam suas vidas normalmente, ela reflete sobre essa questão sem resposta. Após debates infrutíferos, decide meditar sobre o assunto. Enquanto isso, o galinheiro aguarda o desfecho dessa busca existencial que desafia conceitos estabelecidos.',
    coverImagePath: '/posts/a-galinha-filosofa-e-o-conflito-existencial-quem-veio-primeiro-o-ovo-ou-a-galinha/cover.jfif',
    dateCreated: '2024-02-16T05:35:07.322Z',
    dateLastModified: '2020-03-16T05:35:07.322Z',
    content: '',
    authors: {
      connect: [
        {
          id: 'tarataruga',
        },
      ],
    },
  },
  {
    id: 'explorando-o-mundo-das-frutas-mais-saborosas',
    title: '🌿🍓 Explorando o Mundo das Frutas Mais Saborosas! 🍍🥭',
    slug: 'explorando-o-mundo-das-frutas-mais-saborosas',
    descriptionUI: 'Descubra as frutas mais saborosas nesta reportagem entusiasmada pela capivara, explorando os encantos da manga suculenta, o irresistível sabor do morango e a refrescância do abacaxi tropical. Uma jornada frutífera repleta de delícias para todos os paladares! 🍓🍍🥭 #SaboresNaturais #AventuraFrutífera #CapivaraRepórter',
    descriptionMeta: 'Descubra as frutas mais saborosas nesta reportagem entusiasmada pela capivara, explorando os encantos da manga suculenta, o irresistível sabor do morango e a refrescância do abacaxi tropical. Uma jornada frutífera repleta de delícias para todos os paladares! 🍓🍍🥭 #SaboresNaturais #AventuraFrutífera #CapivaraRepórter',
    coverImagePath: '/posts/explorando-o-mundo-das-frutas-mais-saborosas/cover.jpeg',
    dateCreated: '2024-05-02T05:35:07.322Z',
    prevPostId: 'reportagem-especial-jornada-da-harmonia-na-natureza',
    content: '',
    authors: {
      connect: [
        {
          id: 'capivara',
        },
      ],
    },
  },
  {
    id: 'extra-extra-duelo-epico-batida-entre-tartarugas-em-baixa-velocidade-sacode-a-comunidade',
    title: '🚨🐢🚨 EXTRA, EXTRA! Duelo Épico: Batida entre Tartarugas em Baixa Velocidade Sacode a Comunidade! 🚨🐢🚨',
    slug: 'extra-extra-duelo-epico-batida-entre-tartarugas-em-baixa-velocidade-sacode-a-comunidade',
    descriptionUI: 'Duas tartarugas se chocaram em uma lagoa tranquila, a uma velocidade de 0,1 km/h, surpreendendo a comunidade local. Apesar da colisão inusitada, nenhum dos animais saiu ferido. O incidente serve como lembrete de como até mesmo em ambientes pacíficos, a vida pode ser cheia de surpresas.',
    descriptionMeta: 'Duas tartarugas se chocaram em uma lagoa tranquila, a uma velocidade de 0,1 km/h, surpreendendo a comunidade local. Apesar da colisão inusitada, nenhum dos animais saiu ferido. O incidente serve como lembrete de como até mesmo em ambientes pacíficos, a vida pode ser cheia de surpresas.',
    coverImagePath: '/posts/extra-extra-duelo-epico-batida-entre-tartarugas-em-baixa-velocidade-sacode-a-comunidade/cover.jfif',
    dateCreated: '2024-02-16T05:35:07.322Z',
    dateLastModified: '2020-03-16T05:35:07.322Z',
    content: '',
    authors: {
      connect: [
        {
          id: 'tarataruga',
        },
      ],
    },
  },
  {
    id: 'misterio-felino-gato-com-dupla-vida-deixa-duas-familias-em-choque',
    title: '🐱🔍 Mistério Felino: Gato com Dupla Vida Deixa Duas Famílias em Choque! 🏠🏠',
    slug: 'misterio-felino-gato-com-dupla-vida-deixa-duas-familias-em-choque',
    descriptionUI: 'Um gato astuto é descoberto levando uma vida dupla entre duas famílias, deixando todos surpresos. As famílias lidam com a revelação, questionando sua lealdade e tentando entender seus hábitos misteriosos. Enquanto isso, compartilham as responsabilidades de cuidar do felino, enquanto seu comportamento continua a ser uma fonte de fascínio e intriga.',
    descriptionMeta: 'Um gato astuto é descoberto levando uma vida dupla entre duas famílias, deixando todos surpresos. As famílias lidam com a revelação, questionando sua lealdade e tentando entender seus hábitos misteriosos. Enquanto isso, compartilham as responsabilidades de cuidar do felino, enquanto seu comportamento continua a ser uma fonte de fascínio e intriga.',
    coverImagePath: '/posts/misterio-felino-gato-com-dupla-vida-deixa-duas-familias-em-choque/cover.jfif',
    dateCreated: '2024-02-16T10:35:07.322Z',
    dateLastModified: '2020-03-16T05:35:07.322Z',
    content: '',
    authors: {
      connect: [
        {
          id: 'tarataruga',
        },
      ],
    },
  },
  {
    id: 'reportagem-especial-descubra-os-melhores-companheiros-para-a-caca',
    title: 'Reportagem Especial: 🌟🦅 Descubra os Melhores Companheiros para a Caça! 🌟🦉',
    slug: 'reportagem-especial-descubra-os-melhores-companheiros-para-a-caca',
    descriptionUI: 'Descubra os melhores animais para a caça, desde cães de farejamento até aves de rapina. Acompanhe esta jornada emocionante pela vida selvagem e explore as habilidades únicas desses companheiros de caça. Lembre-se sempre de respeitar a natureza enquanto desfruta das maravilhas da caça! #CaçadoresNatos #NaturezaSelvagem',
    descriptionMeta: 'Descubra os melhores animais para a caça, desde cães de farejamento até aves de rapina. Acompanhe esta jornada emocionante pela vida selvagem e explore as habilidades únicas desses companheiros de caça. Lembre-se sempre de respeitar a natureza enquanto desfruta das maravilhas da caça! #CaçadoresNatos #NaturezaSelvagem',
    coverImagePath: '/posts/reportagem-especial-descubra-os-melhores-companheiros-para-a-caca/cover.jpeg',
    dateCreated: '2024-05-02T05:35:07.322Z',
    prevPostId: 'explorando-o-mundo-das-frutas-mais-saborosas',
    content: '',
    authors: {
      connect: [
        {
          id: 'gaviao',
        },
      ],
    },
  },
  {
    id: 'reportagem-especial-jornada-da-harmonia-na-natureza',
    title: '🌿🦅🌿 Reportagem Especial: "Jornada da Harmonia na Natureza" 🌳🌟🦉',
    slug: 'reportagem-especial-jornada-da-harmonia-na-natureza',
    descriptionUI: 'Nesta emocionante reportagem, a capivara e o gavião nos levam em uma jornada fascinante pela harmonia da natureza. Desde a cooperação entre herbívoros e aves de rapina até as alianças na busca por alimentos, cada aspecto revela a beleza e complexidade do ecossistema. Ao destacar a importância da preservação e respeito pela vida selvagem, eles nos lembram do papel crucial que todos desempenhamos na proteção do nosso planeta.',
    descriptionMeta: 'Nesta emocionante reportagem, a capivara e o gavião nos levam em uma jornada fascinante pela harmonia da natureza. Desde a cooperação entre herbívoros e aves de rapina até as alianças na busca por alimentos, cada aspecto revela a beleza e complexidade do ecossistema. Ao destacar a importância da preservação e respeito pela vida selvagem, eles nos lembram do papel crucial que todos desempenhamos na proteção do nosso planeta.',
    coverImagePath: '/posts/reportagem-especial-jornada-da-harmonia-na-natureza/cover.png',
    dateCreated: '2024-05-02T05:35:07.322Z',
    prevPostId: 'reportagem-especial-descubra-os-melhores-companheiros-para-a-caca',
    content: '',
    authors: {
      connect: [
        {
          id: 'capivara',
        },
        {
          id: 'gaviao',
        },
      ],
    },
  },
  {
    id: 'popo-vs-bambam-o-nocaute-em-36-segundos',
    title: '🥊💥 Popó vs. Bambam: O Nocaute em 36 Segundos! 🥊💥',
    slug: 'popo-vs-bambam-o-nocaute-em-36-segundos',
    descriptionUI: 'A luta entre Popo e BamBam foi um confronto breve, mas impactante, com Popo conseguindo um nocaute em apenas 36 segundos. Popo demonstrou sua superioridade com uma sequência rápida de golpes, deixando BamBam fora de combate e mostrando sua habilidade como um dos grandes nomes do esporte. Apesar da derrota, BamBam teve a chance de aprender e crescer como lutador, enquanto Popo celebrou sua vitória com humildade e respeito.',
    descriptionMeta: 'A luta entre Popo e BamBam foi um confronto breve, mas impactante, com Popo conseguindo um nocaute em apenas 36 segundos. Popo demonstrou sua superioridade com uma sequência rápida de golpes, deixando BamBam fora de combate e mostrando sua habilidade como um dos grandes nomes do esporte. Apesar da derrota, BamBam teve a chance de aprender e crescer como lutador, enquanto Popo celebrou sua vitória com humildade e respeito.',
    coverImagePath: '/posts/popo-vs-bambam-o-nocaute-em-36-segundos/cover.jpg',
    dateCreated: '2024-05-02T05:35:07.322Z',
    content: '',
    authors: {
      connect: [
        {
          id: 'galo',
        },
      ],
    },
  },
  {
    id: 'guia-do-sonho-perfeito-dicas-de-snorlax-para-dormir-rapidamente',
    title: 'Guia do Sonho Perfeito: Dicas de Snorlax para Dormir Rapidamente!',
    slug: 'guia-do-sonho-perfeito-dicas-de-snorlax-para-dormir-rapidamente',
    descriptionUI: 'Snorlax, o especialista em sonecas, compartilha suas melhores dicas para ajudar os leitores a adormecerem rapidamente. Desde a criação de uma rotina de sono até a prática de técnicas de relaxamento, essas dicas simples e eficazes garantem uma noite tranquila e revigorante. Prepare-se para desfrutar de um sono profundo e restaurador com o guia do sonho perfeito de Snorlax!',
    descriptionMeta: 'Snorlax, o especialista em sonecas, compartilha suas melhores dicas para ajudar os leitores a adormecerem rapidamente. Desde a criação de uma rotina de sono até a prática de técnicas de relaxamento, essas dicas simples e eficazes garantem uma noite tranquila e revigorante. Prepare-se para desfrutar de um sono profundo e restaurador com o guia do sonho perfeito de Snorlax!',
    coverImagePath: '/posts/guia-do-sonho-perfeito-dicas-de-snorlax-para-dormir-rapidamente/cover.jpg',
    dateCreated: '2024-05-02T05:35:07.322Z',
    content: '',
    authors: {
      connect: [
        {
          id: 'snorlax',
        },
      ],
    },
  },
  {
    id: 'snorlax-devora-a-competicao-vitoria-facil-em-concurso-de-comer-e-pedido-de-sobremesa',
    title: 'Snorlax Devora a Competição: Vitória Fácil em Concurso de Comer e Pedido de Sobremesa!',
    slug: 'snorlax-devora-a-competicao-vitoria-facil-em-concurso-de-comer-e-pedido-de-sobremesa',
    descriptionUI: 'Snorlax surpreende ao participar e vencer um Concurso de Comer, deixando os competidores para trás com sua habilidade impecável. Com sua técnica rápida e eficaz, o Pokémon gigante não só conquista a vitória, como também surpreende a todos ao pedir uma sobremesa para completar sua incrível refeição. Uma demonstração de apetite voraz e bom humor que deixou todos os presentes encantados com sua performance gastronômica. 🏆🍰',
    descriptionMeta: 'Snorlax surpreende ao participar e vencer um Concurso de Comer, deixando os competidores para trás com sua habilidade impecável. Com sua técnica rápida e eficaz, o Pokémon gigante não só conquista a vitória, como também surpreende a todos ao pedir uma sobremesa para completar sua incrível refeição. Uma demonstração de apetite voraz e bom humor que deixou todos os presentes encantados com sua performance gastronômica.',
    coverImagePath: '/posts/snorlax-devora-a-competicao-vitoria-facil-em-concurso-de-comer-e-pedido-de-sobremesa/cover.jpg',
    dateCreated: '2024-05-02T05:35:07.322Z',
    content: '',
    authors: {
      connect: [
        {
          id: 'snorlax',
        },
      ],
    },
  },
  {
    id: 'o-segredo-de-snorlax-revelado-treinamento-intensivo-de-comer-para-manter-a-forma',
    title: 'O Segredo de Snorlax Revelado: Treinamento Intensivo de Comer para Manter a Forma!',
    slug: 'o-segredo-de-snorlax-revelado-treinamento-intensivo-de-comer-para-manter-a-forma',
    descriptionUI: 'Snorlax revela que sua imponente forma física é resultado de um treinamento intenso de comer, que envolve desafiar seus limites alimentares diariamente. Com disciplina e uma dieta equilibrada, o Pokémon mostra que é possível manter a forma mesmo sendo um grande apreciador de comida. 🏋️‍♂️🍔',
    descriptionMeta: 'Snorlax revela que sua imponente forma física é resultado de um treinamento intenso de comer, que envolve desafiar seus limites alimentares diariamente. Com disciplina e uma dieta equilibrada, o Pokémon mostra que é possível manter a forma mesmo sendo um grande apreciador de comida.',
    coverImagePath: '/posts/o-segredo-de-snorlax-revelado-treinamento-intensivo-de-comer-para-manter-a-forma/cover.jpg',
    dateCreated: '2024-05-02T05:35:07.322Z',
    content: '',
    authors: {
      connect: [
        {
          id: 'snorlax',
        },
      ],
    },
  },
  {
    id: 'manhas-produtivas-o-segredo-do-sucesso-por-galo',
    title: '📰 Manhãs Produtivas: O Segredo do Sucesso, por Galo',
    slug: 'manhas-produtivas-o-segredo-do-sucesso-por-galo',
    descriptionUI: 'Galo destaca a importância de acordar cedo e já começar as atividades, além de ressaltar a necessidade de dormir cedo para garantir uma boa qualidade de vida. Ele enfatiza que esses hábitos simples podem trazer benefícios significativos para a saúde e a produtividade. 🌅🐓',
    descriptionMeta: 'Galo destaca a importância de acordar cedo e já começar as atividades, além de ressaltar a necessidade de dormir cedo para garantir uma boa qualidade de vida. Ele enfatiza que esses hábitos simples podem trazer benefícios significativos para a saúde e a produtividade.',
    coverImagePath: '/posts/manhas-produtivas-o-segredo-do-sucesso-por-galo/cover.jpg',
    dateCreated: '2024-05-02T05:35:07.322Z',
    content: '',
    authors: {
      connect: [
        {
          id: 'galo',
        },
      ],
    },
  }
];

const summaries: Prisma.SummaryCreateInput[] = [
  {
    id: '1',
    title: 'Título 1 no sumário',
    to: 'título-1',
    post: {
      connect: {
        id: 'hello-world',
      },
    },
  },
  {
    id: '2',
    title: 'Título 2 no sumário nome extra grande extra grande extra grande extra grande extra grande',
    to: 'título-2',
    post: {
      connect: {
        id: 'hello-world',
      },
    },
  },
  {
    id: '3',
    title: '🚨🐢🚨 EXTRA, EXTRA! Duelo Épico: Batida entre Tartarugas em Baixa Velocidade Sacode a Comunidade! 🚨🐢🚨',
    to: '-extra-extra-duelo-épico-batida-entre-tartarugas-em-baixa-velocidade-sacode-a-comunidade-',
    post: {
      connect: {
        id: 'extra-extra-duelo-epico-batida-entre-tartarugas-em-baixa-velocidade-sacode-a-comunidade',
      },
    },
  },
  {
    id: '4',
    title: '💥💥💥',
    to: 'null',
    post: {
      connect: {
        id: 'extra-extra-duelo-epico-batida-entre-tartarugas-em-baixa-velocidade-sacode-a-comunidade',
      },
    },
  },
  {
    id: '5',
    title: '🐢🥊🐢',
    to: '-1',
    post: {
      connect: {
        id: 'extra-extra-duelo-epico-batida-entre-tartarugas-em-baixa-velocidade-sacode-a-comunidade',
      },
    },
  },
  {
    id: '6',
    title: '🌊💥🌿',
    to: '-2',
    post: {
      connect: {
        id: 'extra-extra-duelo-epico-batida-entre-tartarugas-em-baixa-velocidade-sacode-a-comunidade',
      },
    },
  },
  {
    id: '7',
    title: '👀🌞🐢',
    to: '-3',
    post: {
      connect: {
        id: 'extra-extra-duelo-epico-batida-entre-tartarugas-em-baixa-velocidade-sacode-a-comunidade',
      },
    },
  },
  {
    id: '8',
    title: '📢🐢📰',
    to: '-4',
    post: {
      connect: {
        id: 'extra-extra-duelo-epico-batida-entre-tartarugas-em-baixa-velocidade-sacode-a-comunidade',
      },
    },
  }
];

const tags: Prisma.TagCreateInput[] = [
  {
    id: 'acidente',
    name: 'Acidente',
    slug: 'acidente',
    posts: {
      connect: [
        {
          id: 'extra-extra-duelo-epico-batida-entre-tartarugas-em-baixa-velocidade-sacode-a-comunidade',
        },
      ],
    },
  },
  {
    id: 'ao-vivo',
    name: 'Ao Vivo',
    slug: 'ao-vivo',
    posts: {
      connect: [
        {
          id: 'extra-extra-duelo-epico-batida-entre-tartarugas-em-baixa-velocidade-sacode-a-comunidade',
        },
      ]
    }
  },
  {
    id: 'caça',
    name: 'Caça',
    slug: 'caca',
    posts: {
      connect: [
        {
          id: 'reportagem-especial-descubra-os-melhores-companheiros-para-a-caca',
        },
      ]
    }
  },
  {
    id: 'familia',
    name: 'Família',
    slug: 'familia',
    posts: {
      connect: [
        {
          id: 'misterio-felino-gato-com-dupla-vida-deixa-duas-familias-em-choque',
        },
      ]
    }
  },
  {
    id: 'filosofia',
    name: 'Filosofia',
    slug: 'filosofia',
    posts: {
      connect: [
        {
          id: 'a-galinha-filosofa-e-o-conflito-existencial-quem-veio-primeiro-o-ovo-ou-a-galinha',
        },
      ]
    }
  },
  {
    id: 'frutas',
    name: 'Frutas',
    slug: 'frutas',
    posts: {
      connect: [
        {
          id: 'explorando-o-mundo-das-frutas-mais-saborosas',
        },
      ]
    }
  },
  {
    id: 'harmonia',
    name: 'Harmonia',
    slug: 'harmonia',
    posts: {
      connect: [
        {
          id: 'reportagem-especial-jornada-da-harmonia-na-natureza',
        },
      ]
    }
  },
  {
    id: 'hello',
    name: 'Hello',
    slug: 'hello',
    posts: {
      connect: [
        {
          id: 'hello-world',
        },
      ]
    }
  },
  {
    id: 'lorem',
    name: 'Lorem',
    slug: 'lorem',
    posts: {
      connect: [
        {
          id: 'hello-world',
        },
      ]
    }
  },
  {
    id: 'natureza',
    name: 'Natureza',
    slug: 'natureza',
    posts: {
      connect: [
        {
          id: 'explorando-o-mundo-das-frutas-mais-saborosas',
        },
        {
          id: 'reportagem-especial-descubra-os-melhores-companheiros-para-a-caca',
        },
        {
          id: 'reportagem-especial-jornada-da-harmonia-na-natureza',
        },
      ]
    }
  },
  {
    id: 'traicao',
    name: 'Traição',
    slug: 'traicao',
    posts: {
      connect: [
        {
          id: 'misterio-felino-gato-com-dupla-vida-deixa-duas-familias-em-choque',
        }
      ]
    }
  },
  {
    id: 'dormir',
    name: 'Dormir',
    slug: 'dormir',
    posts: {
      connect: [
        {
          id: 'guia-do-sonho-perfeito-dicas-de-snorlax-para-dormir-rapidamente',
        },
        {
          id: 'manhas-produtivas-o-segredo-do-sucesso-por-galo',
        }
      ]
    }
  },
  {
    id: 'comer',
    name: 'Comer',
    slug: 'comer',
    posts: {
      connect: [
        {
          id: 'o-segredo-de-snorlax-revelado-treinamento-intensivo-de-comer-para-manter-a-forma',
        },
        {
          id: 'snorlax-devora-a-competicao-vitoria-facil-em-concurso-de-comer-e-pedido-de-sobremesa',
        },
      ]
    }
  },
  {
    id: 'luta',
    name: 'Luta',
    slug: 'luta',
    posts: {
      connect: [
        {
          id: 'popo-vs-bambam-o-nocaute-em-36-segundos',
        }
      ]
    }
  },
];

async function main() {
  console.log('Start seeding ...');

  for (const data of authors) {
    const authorCreated = await prisma.author.create({ data });
    console.log(`Created author with id: ${authorCreated.id}`);
  }

  for (const data of posts) {
    const postCreated = await prisma.post.create({ data });
    console.log(`Created post with id: ${postCreated.id}`);
  }

  for (const data of summaries) {
    const summaryCreated = await prisma.summary.create({ data });
    console.log(`Created summary with id: ${summaryCreated.id}`);
  }

  for (const data of tags) {
    const tagCreated = await prisma.tag.create({ data });
    console.log(`Created tag with id: ${tagCreated.id}`);
  }

  console.log('Seeding finished.');
}

main()
  .catch(error => console.error('Error during seeding: ', error))
  .finally(async () => await prisma.$disconnect());