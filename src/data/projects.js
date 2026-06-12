import helpdesk from '../assets/HelpDeskPrint1.png'


export const projects = [
  {
    slug: 'helpdesk-system',
    title: 'Help Desk Nexus',
    role: 'Fullstack',
    year: '2026',
    tags: ['Next.js', 'Prisma', 'Supabase'],
    preview: helpdesk,
    previewPosition: 'object-top',
    githubURL: '',
    liveURL: '',
    summary:
      'Sistema full-stack de help desk para gerenciamento de chamados internos, usuários e fluxo de atendimento, com autenticação real, controle de acesso por perfil e deploy online.',
    description:
      'Desenvolvido como projeto acadêmico, o Help Desk Nexus passou por uma migração completa de uma arquitetura legada em PHP + MySQL para uma stack moderna com Next.js, Prisma e Supabase. O sistema permite autenticação com sessão real via cookie HTTP-only, gerenciamento de usuários e chamados, histórico de alterações, dashboard com gráficos reais e upload de foto de perfil com Supabase Storage, mantendo uma interface moderna e preparada para deploy na Vercel.',
    details: [
      { label: 'Tipo', value: 'Sistema Web' },
      { label: 'Stack', value: 'Next.js, Prisma, Supabase, TypeScript' },
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
