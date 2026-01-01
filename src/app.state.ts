export interface AppState {
  //readonly tasks: Task[];


}
export const serviciosjs = [
    {
        nombre:"Asesoria para avanzar y crecer en las redes sociales",
        descripcion:"Tips y estrategias para crecer y monetizar en las redes sociales."
    },
    {
        nombre:"Instalación y configuración de servidores",
        descripcion:"Configuración de DNS, Directorio Activo, Impresión, Web, FTP."
    },
    {
        id:"fondo1",
        class:"carousel-item active",
        data_bs_interval:"2000",
        nombre:"Diseño y Desarrollo web",
        descripcion:"Diseño, desarrollo y creación de aplicaciones web.",
        alt:"des1"
    },
{
    id:"fondo2",
    class:"carousel-item",
    nombre:"Diseño de app para ventas online",
    descripcion:"Diseño, desarrollo y creación de aplicativo para ventas online, para poder vender productos por internet.",
    alt:"des2"
},
{
    id:"fondo3",
    class:"carousel-item",
    nombre:"eMarketing Digital",
    descripcion:"La publicidad por correo o email comercial, es enviar un mensaje comercial directamente utilizando como canal el correo electrónico. Envía a un cliente potencial anuncios, peticiones de negocios, solicitar ventas o donaciones publicidad.",
    alt:"des3"
},
{
    id:"fondo4",
    class:"carousel-item",
    nombre:"Posicionamiento en buscadores",
    descripcion:"Posicionamiento en buscadores, optimización en motores de búsqueda o SEO, mejorar el posicionamiento de un sitio web en la lista de resultados de Google, Bing, u otros buscadores de internet.",
    alt:"des4"
},
{
    id:"fondo5",
    class:"carousel-item",
    nombre:"SEO & SEM & SMM & Analítica",
    descripcion:"Mercadotecnia en buscadores web (SEM) promovemos el contenido digital para aumentar la visibilidad y posicionamiento en las páginas de resultados del motor de búsqueda. El posicionamiento en motores de búsqueda (SEO), móviles.",
    alt:"des5"
},
{
    id:"fondo5",
    class:"carousel-item",
    nombre:"SMM",
    descripcion:"Social Media Marqueting (SMM) mercadotecnia viral para crear una idea, posicionar una marca, incrementar la visibilidad e incluso aumentar las ventas de productos.",
    alt:"des5"
},
{
    id:"fondo6",
    class:"carousel-item",
    nombre:"Diseño Gráfico",
    descripcion:"Diseño y creación de logotipos, imagen corporativa, branding, diseño de impresión, rebranding, creamos diseño gráfico para aplicaciones web.",
    alt:"des6"
},
{
    id:"fondo7",
    class:"carousel-item",
    nombre:"Diseño y Desarrollo Aplicativos Móviles",
    descripcion:"Diseño, desarrollo y creación de aplicaciones móviles para Android.",
    alt:"des7"
},
{
    class:"carousel-item",
    nombre:"Mantenimiento y gestión de aplicaciones",
    descripcion:"Servicio, soporte y mantenimiento  de escritorio, móviles y web.",
    alt:"des8"
},
{
    class:"carousel-item",
    nombre:"Alojamiento web",
    descripcion:"Alojamiento web (hosting) para poder almacenar información, imágenes, vídeo, o cualquier contenido accesible vía web.",
    alt:"des9"
},
{
    nombre:"Diseño responsive",
    descripcion:"Adaptable a todas las pantallas: pc, laptop, tabletas y smartphone.",
},
{
    nombre:"Certificado SSL",
    descripcion:"Tus usuarios pueden navegar de manera segura.",
},
{
    nombre:"Redes sociales",
    descripcion:"Integración a redes sociales y botón de whatsapp."
},
{
    nombre:"Microservicios",
    descripcion:"Integración a arquitectura de aplicaciones microservicios actualizado."
},
{
    nombre:"Microfrontend",
    descripcion:"Integración a arquitectura de aplicaciones microfrontend actualizado."
},
];
export const cursosjs = [
    {
        target:"_self",
        class:"dropdown-item",
        href:"emprender",
        nombre:"Emprender por internet"
    }
  ];

export const ventas_madrejs = [
    {
        id:1,
        href:"https://www.instagram.com/p/CD5PPbAjfDq/",
        src:"./assets/images/michi/michi.PNG",
        alt:"First slide",
    },
    {
        id:2,
        href:"https://www.instagram.com/p/CD5OZ1sjs2-/",
        src:"./assets/images/michi/michi2.PNG",
        alt:"Second slide"
    },
    {
        id:3,
        href:"https://www.instagram.com/p/CDfLDYPDqXq/",
        src:"./assets/images/michi/michi3.PNG",
        alt:"Third slide",
    },
];

export const experiencia_luis = [
  {
      id:1,
      href:"https://www.facebook.com/SeidorPeru",
      src:"./assets/images/seidor.png" ,
      nombre:"Desarrollo de software web microfrontend",
      tecnologia:[
          {
              id:1,
              nombre:"typescript",
              porcentaje:60,
          },
          {
              id:2,
              nombre:"angular",
              porcentaje:80,
          }
      ],
  },
  {
      id:3,
      href:"https://www.facebook.com/PdvsaROriente/",
      src:"./assets/proyectos/pdvsa.svg",
      nombre:"Migración del servicio de impresión a tecnología tecnología de información libre",
      tecnologia:[
          {
              id:1,
              nombre:"bash",
              porcentaje:40,
          },
          {
              id:2,
              nombre:"samba",
              porcentaje:20,
          },
          {
              id:3,
              nombre:"cups",
              porcentaje:20,
          },
          {
              id:4,
              nombre:"Debian",
              porcentaje:20,
          },
      ],
  },
];

export const contactosjs = [
  {
      id:1,
      href:"contacto_luis",
      img:"./assets/images/Luis_Correa.webp",
      alt:"Luis",
      nombre:"Luis Correa",
      titulo:"Ingeniero en Computación",
      descripcion:"Desarrollador Semisenior Web Full Stack",
      url:"https://www.linkedin.com/in/luis13711/"
  },
/*    {
      id:2,
      href:"contacto_percy",
      img:"./assets/images/Percy_Correa.webp",
      alt:"Percy",
      nombre:"Percy Correa",
      titulo:"Ingeniero Civil",
      descripcion:"Diseño de Planos",
      url:"https://www.linkedin.com/in/percy-correa-a9a919ba/"
  },
  {
      id:3,
      href:"contacto_juan",
      img:"./assets/images/Juan Correa.webp",
      alt:"Juan",
      nombre:"Juan Correa",
      titulo:"Asesor Comercial",
      descripcion:"Vendedor automotriz",
      url:"#"
  },
  {
      id:4,
      href:"contacto_yolanda",
      img:"./assets/images/Yolanda_Yancel.webp",
      alt:"Yolanda",
      nombre:"Yolanda Yancel",
      titulo:"Contador Publico",
      descripcion:"Contador publico, asistente administrativa",
      url:"https://www.linkedin.com/in/yolanda-yancel-flores-b39817111/"
  },
  {
      id:5,
      href:"contacto_patricia",
      img:"./assets/images/Patricia Correa.webp",
      alt:"Patricia",
      nombre:"Patricia Correa",
      titulo:"Medico Cirujano",
      descripcion:"Medico Cirujano",
      url:"https://www.linkedin.com/in/yolanda-yancel-flores-b39817111/"
  },
  {
      id:6,
      href:"contacto_ana",
      img:"./assets/images/Ana Correa.webp",
      alt:"Patricia",
      nombre:"Ana Correa",
      titulo:"Ingenieria Quimica",
      descripcion:"Ingenieria Quimica",
      url:"https://www.linkedin.com/in/yolanda-yancel-flores-b39817111/"
  },
  {
    id:7,
    href:"contacto_jermany",
    img:"./assets/images/Jermany Avile.PNG",
    alt:"Jermani",
    nombre:"Jermani Avile",
    titulo:"Administración",
    descripcion:"Administración",
    url:"#"
} ,
{
  id:8,
  href:"contacto_anmary",
  img:"./assets/images/anmary.png",
  alt:"Anmary",
  nombre:"Anmary Rondon",
  titulo:"Ingeniería Mecanica",
  descripcion:"Ingeniería Mecanica",
  url:"#"
}  ,
{
  id:9,
  href:"contacto_adrian",
  img:"./assets/images/adrian.png",
  alt:"Adrian",
  nombre:"Adrian Yancel",
  titulo:"Jefe de Panaderia",
  descripcion:"Jefe de Panaderia",
  url:"#"
}  */
];

export const emprender_internetjs = [
  {
      id:1,
      target:"_blank",  
      class:"dropdown-item", 
      href:"https://www.youtube.com/watch?v=1lfbTa32MEk",
      nombre:"Crear un bot para tu página web con chatfuel",
      src:"./assets/proyectos/ricana-tours.svg" ,
  },
  {
      id:2,
      target:"_blank",  
      class:"dropdown-item", 
      href:"https://www.udemy.com/course/adp-bonao-facebook-como-herramienta-educativa/learn/lecture/13147022?start=0#overview",
      nombre:"Crea tu página en facebook",
      src:"./assets/proyectos/ricana-tours.svg" ,
  },
];

export const trabajo_grado_luis = [
  {
      id:1,
      href:"https://www.facebook.com/PdvsaROriente/",
      src:"./assets/proyectos/pdvsa.svg",
      nombre:"Migración del servicio de impresión a tecnología tecnología de información libre",
      tecnologia:[
          {
              id:1,
              nombre:"bash",
              porcentaje:40,
          },
          {
              id:2,
              nombre:"samba",
              porcentaje:20,
          },
          {
              id:3,
              nombre:"cups",
              porcentaje:20,
          },
          {
              id:4,
              nombre:"Debian",
              porcentaje:20,
          },
      ],
  },
];
export const proyectos_realizados_luis = [
    {
        id:1,
        href:"#",
        src:"./assets/proyectos/ricana-tours.svg" ,
        nombre:"Aplicación web microfrontend",
        tecnologia:[
            {
                id:2,
                nombre:"java",
                porcentaje:10,
            },
            {
                id:3,
                nombre:"javascript",
                porcentaje:10,
            },
            {
                id:4,
                nombre:"css",
                porcentaje:10,
            },
            {
                id:5,
                nombre:"bootstrap",
                porcentaje:10,
            },
            {
                id:6,
                nombre:"jquery",
                porcentaje:10,
            },
            {
                id:7,
                nombre:"primefaces",
                porcentaje:10,
            },
            {
                id:7,
                nombre:"springframework",
                porcentaje:10,
            },
            {
                id:8,
                nombre:"sqlserver",
                porcentaje:10,
            },
            {
                id:9,
                nombre:"git",
                porcentaje:20,
            }
        ],
    },
];
export const proyectos = [
    {
        nombre:"Microfrontend host",
        imagen:"./assets/proyectos/kotlinmaps.png",
        url:"https://www.instagram.com/p/DRa2ZlODE2s/"
    },
];