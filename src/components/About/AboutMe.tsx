import { ProgrammingLanguages } from './ProgrammingLanguages'
import { ProjectCard } from './ProjectCard'
import { SkillTree } from './SkillTree'

export default function AboutMe() {
  return (
    <section className='text-white px-6'>
      <h2 className="text-3xl font-bold border-b-4 border-red-300 mb-6 pb-2 max-w-fit">About Me</h2>

      {/* Personal snippet */}
      <p className="mb-8 text-lg leading-relaxed">
        Pan&apos;s a business-oriented data analyst with a track record of transforming teams into analytical powerhouses.
        Graduated from USC with an honor bachelor in Business Administration and a master&apos;s in Applied Data Science, he&apos;s exploring roles where creativity meets analytics.
      </p>

      {/* Notable achievements:
      <ul className="mb-8 text-lg leading-relaxed">
        <li>Introduced Business Intelligence Pipeline to a leading industrial park in Vietnam, resulting in a 30% reduction in processing time.</li>
        <li>Recommended and tested cloud-based ERP systems for 3 Fortune 1000 clients at a $2.5B global consulting firm.</li>
        <li>Optimized and automated the email campaign for a growing B2B startup, resulting in 70%+ response rate.</li>
        <li>Conducting research to help 50 small businesses in Indonesia grow their revenue by 15% on average.</li>
        <li>Graduated USC with an honor 3.9 GPA for Bachelor and 3.3 GPA for Master. </li>
      </ul> */}


      {/* Programming Languages */}
      <ProgrammingLanguages />

      {/* Portfolio section */}
      <h2 className="text-3xl font-bold border-b-4 border-red-300 my-6 pb-2 max-w-fit">Portfolio Project</h2>

      <div className="border mb-8">
        <ProjectCard
          title="Walmart E-commerce Simulation"
          description="Developed and implemented a data pipeline for a Walmart simulation using Agent-based modeling."
          technologies={["Python", "Power BI", "PostgreSQL", "Docker", "Airflow", "DBT"]}
          imageUrl="/img/Walmart_portfolio_mainpage.png"
          projectUrl="https://github.com/PannawatChauychoo/E_commerce_data_pipeline"
        />
      </div>

      {/* Skill tree*/}
      <h2 className="text-3xl font-bold border-b-4 border-red-300 my-6 pb-2 max-w-fit">Skill tree</h2>

      <div className="mb-12">
        <SkillTree />
      </div>

    </section>
  )
}
