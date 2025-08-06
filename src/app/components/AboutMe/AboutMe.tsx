import { Card } from "../Card/Card";

export default function AboutMe() {
  return (
    <section className="bg-gray-50 flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden" id="sobre">
      <h2 className="text-3xl mb-5 font-inter">Sobre mim</h2>
      <p className="text-xl md:text-2xl max-w-4xl text-center leading-relaxed mb-10 font-poppins">
        Olá, sou Anderson De Jesus, desenvolvedor front-end apaixonado por
        transformar ideias em interfaces modernas, funcionais e centradas no
        usuário. Sou estudante de Análise e Desenvolvimento de Sistemas, e
        atualmente atuo como desenvolvedor front-end com foco em tecnologias
        como React e Next.js, frameworks que utilizo para criar experiências
        digitais rápidas, responsivas e intuitivas. Com um olhar sempre atento
        à evolução do mercado, venho expandindo meu conhecimento para o
        desenvolvimento mobile, explorando as tecnologias Kotlin e React
        Native, com o objetivo de construir aplicações completas e
        multiplataforma. Tenho experiência com ferramentas essenciais do
        ecossistema de desenvolvimento, como Figma para design de interfaces,
        Google Cloud para soluções escaláveis e Docker para ambientes de
        desenvolvimento mais eficientes. Ao longo da minha jornada, criei
        projetos pessoais e colaborei com clientes como freelancer, sempre com
        foco na entrega de valor e inovação. Este portfólio é o reflexo da
        minha trajetória, das minhas conquistas e do meu compromisso com a
        excelência técnica e criativa. Convido você a explorar os meus
        projetos e conhecer de perto o meu trabalho. Se procura um
        profissional proativo, resiliente e em constante evolução, estou
        pronto para contribuir com a sua equipa ou dar vida ao seu projeto.
      </p>
      <div>
        <div className="flex gap-5 mt-10 flex-wrap justify-center">
          <Card
            titulo="Currículo"
            descricao="Apresento meus conhecimentos adquiridos, formações e experiências práticas."
            btn="Baixar CV"
          />
          <Card
            titulo="Certificados"
            descricao="Certificados de plataformas como Alura, FIAP, Udemy, etc."
            btn="Ver Certificados"
          />
          <Card
            titulo="Experiência"
            descricao="Experiência prática com empresas reais e soluções tecnológicas."
            btn="Ver Experiências"
          />
        </div>
      </div>
    </section>
  );
}
