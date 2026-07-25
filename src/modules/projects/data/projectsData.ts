export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  capabilities: string[];
  screenshots: string[];
  demoUrl?: string;
  botUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 'siga-ivead',
    title: 'SIGA IVEAD',
    shortDescription: 'Sistema de Gestión Administrativa para la Iglesia Vida y Esperanza de las Asambleas de Dios, que incluye asistente IA con WhatsApp.',
    fullDescription: 'SIGA IVEAD (Sistema de Gestión Administrativa de la Iglesia Vida y Esperanza de las Asambleas de Dios) es una plataforma integral que cubre un amplio entorno administrativo y organizativo. Incluye una plataforma web para la gestión de miembros, reuniones o cultos, gestión de voluntarios, asignaciones de servicio durante los cultos, gestión de eventos con control de asistencia, soporte para eventos pagos o gratuitos, así como control de ingresos, egresos y generación de reportes.\n\nComo componente innovador (Sara IVE), integra un sistema de agentes y flujos desarrollados en n8n impulsados con inteligencia artificial. Funciona como el primer punto de atención a las personas a través de WhatsApp Oficial, brindando información básica sobre la organización de manera amable. También se encarga de notificar a los miembros sobre noticias, eventos o asignaciones de servicio. Integra validación de acceso por niveles para proteger la información confidencial.',
    image: '/projectos/siga_ivead/Siga-ivead.png',
    technologies: ['React', 'Node.js', 'Express', 'Prisma', 'MariaDB', 'n8n', 'OpenAI', 'WhatsApp API', 'BullMQ'],
    capabilities: [
      'Gestión integral de miembros y voluntarios.',
      'Planificación y asignación de servicios para cultos.',
      'Control de asistencia para eventos pagos y gratuitos.',
      'Módulo financiero para control de ingresos, egresos y reportes.',
      'Asistente virtual "Sara IVE" vía WhatsApp con Inteligencia Artificial.',
      'Validación de acceso por niveles para protección de datos.',
      'Notificaciones automáticas y personalizadas.'
    ],
    screenshots: [
      '/projectos/siga_ivead/dashboard_siga.png',
      '/projectos/siga_ivead/eventos_siga.png',
      '/projectos/siga_ivead/Contenido_siga_ivead.png'
    ],
    demoUrl: 'https://ivead.org',
    botUrl: 'https://wa.me/573118533831'
  }
];
