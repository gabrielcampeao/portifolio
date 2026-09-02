import helpdesk from '../assets/HelpDeskPrint1.png'
import stoneGym from '../assets/stonegym.png'

export const projects = [
  {
    slug: 'helpdesk-system',
    title: 'ST Suporte Técnico',
    role: 'Fullstack',
    year: '2026',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
    preview: helpdesk,
    previewPosition: 'object-top',
    githubURL: 'https://github.com/gabrielcampeao/Help',
    liveURL: 'https://help-sepia-ten.vercel.app/tickets',
    summary:
      'Sistema de help desk pra gerenciar chamados internos, usuários e fluxo de atendimento, com autenticação de verdade, controle de acesso por perfil e no ar em produção.',
    description:
      'Reescrevi de uma versão antiga que eu tinha feito em PHP + MySQL, migrando tudo pra Next.js 15 com App Router, Prisma e PostgreSQL (Neon). No caminho, entrou autenticação por sessão com cookie HTTP-only e JWT, permissões por papel (admin, técnico, comum), histórico de alterações nos chamados, um dashboard com Recharts e upload de avatar via Supabase Storage. Deploy contínuo na Vercel.',
    details: [
      { label: 'Tipo', value: 'Sistema Web' },
      { label: 'Stack', value: 'Next.js 15 + React 19 + TypeScript + Prisma/PostgreSQL' },
      { label: 'Escopo', value: 'CRUD completo, autenticação e controle de acesso' },
      { label: 'Ano', value: '2026' },
    ],
    highlights: [
      'Autenticação com JWT em cookie HTTP-only e controle de acesso baseado em perfis de usuário',
      'Quer testar a aplicação online? Use uma das contas de demonstração abaixo:',
    ],
  },
  {
    slug: 'stone-gym',
    title: 'Stone Gym',
    role: 'Fullstack',
    year: '2026',
    tags: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS'],
    preview: stoneGym,
    previewPosition: 'object-top',
    githubURL: 'https://github.com/gabrielcampeao/site-gym',
    liveURL: 'https://site-gym-lilac.vercel.app/',
    summary:
      'Site de uma academia fictícia, feito pra testar algumas ideias: busca de unidades por geolocalização, catálogo de equipamentos com vídeos e um checkout com cupons.',
    description:
      'Construído em Next.js 14 (App Router) com React 18 e TypeScript, com Tailwind CSS v3 numa paleta escura com detalhes roxos. Tem busca de unidades por geolocalização (distância calculada via fórmula de Haversine), catálogo de equipamentos com vídeos do YouTube incorporados, checkout em duas etapas com cupons de desconto e order bump, formulário de contato que manda e-mail de verdade via Nodemailer/Gmail SMTP, e um chat de suporte flutuante com respostas automáticas.',
    details: [
      { label: 'Tipo', value: 'Site Institucional' },
      { label: 'Stack', value: 'Next.js 14 + React 18 + TypeScript + Tailwind CSS' },
      { label: 'Escopo', value: 'Catálogo, checkout, geolocalização e envio de e-mail' },
      { label: 'Ano', value: '2026' },
    ],
    highlights: [
      'Busca de unidades por geolocalização com cálculo de distância em tempo real (Haversine)',
      'Checkout em 2 etapas com cupons de desconto, order bump e pagamento por cartão ou Pix',
    ],
  },
]
