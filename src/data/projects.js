import helpdesk from '../assets/HelpDeskPrint1.png'


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
      'Autenticação real com JWT em cookie HTTP-only e controle de acesso por perfis de usuário',
      'Upload de foto de perfil com Supabase Storage e aplicação preparada para deploy na Vercel',
      'Logins - Caso queira explorar a aplicação online:',
      'Usuário comum: E-mail - user-comum@gmail.com | Senha - UserCom.123',
      'Usuário de suporte: E-mail - user-suporte@gmail.com | Senha - UserSup.123',
    ],
  },
  
]
