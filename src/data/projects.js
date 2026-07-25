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
      'Sistema full-stack de help desk para gerenciamento de chamados internos, usuários e fluxo de atendimento, com autenticação real, controle de acesso por perfil e deploy online.',
    description:
      'Sistema de Help Desk full-stack construído em Next.js 15 com App Router, Prisma e PostgreSQL (Neon). Nasceu como reescrita de uma versão legada em PHP + MySQL, ganhando autenticação baseada em sessão com cookie HTTP-only e JWT, autorização por papéis (admin, técnico, comum), gerenciamento completo de chamados com histórico de alterações, dashboard analítico com Recharts e upload de avatares via Supabase Storage. Deploy contínuo na Vercel.',
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
      'Site institucional completo de uma academia fitness fictícia, com busca de unidades por geolocalização, catálogo de equipamentos com tutoriais em vídeo e checkout com vouchers.',
    description:
      'Site institucional construído em Next.js 14 (App Router) com React 18 e TypeScript, estilizado com Tailwind CSS v3 e paleta escura com acentos roxos. Inclui busca de unidades por geolocalização (cálculo de distância via fórmula de Haversine), catálogo de equipamentos com vídeos tutoriais em embed do YouTube, checkout em duas etapas com cupons de desconto e order bump, formulário de contato com envio real via Nodemailer/Gmail SMTP, e chat de suporte flutuante com respostas automáticas.',
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
