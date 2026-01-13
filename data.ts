import { AppData, LinkType, SocialPlatform } from './types';

export const DATA: AppData = {
  profile: {
    name: "Victor Cézar",
    role: "Fundador @ UP! Company",
    bio: "A Estratégia por trás dos resultados",
    avatarUrl: "https://static.wixstatic.com/media/1f17f3_874a478729204462bc46950bb68323d9~mv2.jpg", // Victor Cézar
    logoUrl: "https://static.wixstatic.com/media/1f17f3_1e2b54d2fd894dd997c6cbc18e940576~mv2.png", // UP! Company Logo
  },
  links: [
    {
      id: "1",
      title: "Conheça quem vai aumentar suas vendas",
      subtitle: "Acesse o site oficial da UP! Company",
      url: "https://upandco.com.br",
      iconName: "Rocket",
      type: LinkType.Hero,
      highlight: true
    },
    {
      id: "2",
      title: "Fale Conosco",
      subtitle: "WhatsApp Oficial: (27) 2180-1710",
      url: "https://wa.me/552721801710",
      iconName: "WhatsApp",
      type: LinkType.Standard
    },
    {
      id: "3",
      title: "Email para Contato",
      subtitle: "contato@upandco.com.br",
      url: "mailto:contato@upandco.com.br",
      iconName: "Mail",
      type: LinkType.Standard
    },
    {
      id: "4",
      title: "Manual de Atendimento",
      subtitle: "Alta Performance em Vendas",
      url: "https://vendas-whatsapp.upandco.com.br/",
      iconName: "BookOpen",
      type: LinkType.Standard
    }
  ],
  socials: [
    { platform: SocialPlatform.Instagram, url: "https://www.instagram.com/upandco.br/" }
  ]
};