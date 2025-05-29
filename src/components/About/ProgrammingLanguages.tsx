import {
  SiPython,
  SiR,
  SiMysql,
  SiPostgresql,
  SiTableau,
  SiScikitlearn,
  SiPandas
} from 'react-icons/si'
import { FaChartBar } from 'react-icons/fa'

export function ProgrammingLanguages() {
  return (
    <div className="flex justify-evenly items-center gap-8 p-4">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center hover:scale-110 transition-transform group"
        >
          <div className="bg-[#4f4f4f] p-4 rounded-lg flex justify-center items-center shadow-md">
            {tech.icon}
          </div>
        </div>
      ))}
    </div>
  )
}

const icon_size = 32

const technologies = [
  { name: 'Python', icon: <SiPython size={icon_size} className=" text-white" /> },
  { name: 'R', icon: <SiR size={icon_size} className=" text-white" /> },
  { name: 'MySQL', icon: <SiMysql size={icon_size} className=" text-white" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={icon_size} className=" text-white" /> },
  { name: 'Tableau', icon: <SiTableau size={icon_size} className=" text-white" /> },
  { name: 'Power BI', icon: <FaChartBar size={icon_size} className=" text-white" /> },
  { name: 'Scikit-learn', icon: <SiScikitlearn size={icon_size} className=" text-white" /> },
  { name: 'Pandas', icon: <SiPandas size={icon_size} className=" text-white" /> }
]