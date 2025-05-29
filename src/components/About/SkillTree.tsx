"use client";

import React from 'react';

// Define the skill data structure
interface Skill {
  name: string;
  isUnlocked: boolean; // Whether the skill is unlocked or locked
  description?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Hexagon component
const Hexagon: React.FC<{
  skill: Skill;
}> = ({ skill }) => {
  const getStyles = () => {
    if (!skill.isUnlocked) {
      return {
        fill: 'black',
        stroke: 'white',
        textColor: 'text-gray-300'
      };
    }
    return {
      fill: '#FF474C',
      stroke: '#ffb09c',
      textColor: 'text-white'
    };
  };

  const styles = getStyles();

  return (
    <div className="relative flex flex-col items-center justify-center my-2">
      {/* Hexagon Shape */ }
      <div className='w-19 h-19'>
        <svg viewBox="0 0 100 100" className="w-full h-full flex items-center justify-center z-10">
          <polygon
            points="50,0 95,25 95,75 50,100 5,75 5,25"
            fill={styles.fill}
            stroke={styles.stroke}
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Hexagon Text */}
      <div className="absolute inset-0 flex items-center justify-center ">
        <span className={`text-center text-sm px-1 ${styles.textColor}`}>{skill.name}</span>
      </div>

      {/* Locked Overlay */}
      {!skill.isUnlocked && (
      <div className='flex justify-center absolute opacity-0 hover:opacity-100'>
        <svg viewBox="0 0 100 100" className="w-19 h-19 flex items-center justify-center z-10 opacity-50 shadow-lg">
          <polygon
            points="50,0 95,25 95,75 50,100 5,75 5,25"
            fill={styles.fill}
            stroke={styles.stroke}
            strokeWidth="2"
          />
        </svg>
        <span className="absolute text-xl pt-5">🔒</span>
      </div>
      )}
    </div>
  );
};

// Chain of Hexagons Component
export function HexagonChain({ skills }: { skills: Skill[] }) {

  return (
    <div className="relative flex flex-col items-center justify-around bg-[#2b2b2b] px-2 rounded-lg">
      {/* SVG connecting lines */}

      <svg className="absolute w-full h-full pointer-events-none">
        {skills.slice(0, -1).map((_, index) => {
        const current = skills[index];
        const next = skills[index + 1];
        
        const isBothUnlocked = current.isUnlocked && next.isUnlocked;
        
        return (
          <line
            key={index}
            x1="50%"
            y1={`${(12.5 + index * (75 / (skills.length - 1)))}%`}
            x2="50%"
            y2={`${(37.5 + index * (75 / (skills.length - 1)))}%`}
            stroke={isBothUnlocked ? "#ffb09c":"white"}
            strokeWidth="2"
          />
        );
})}
      </svg>

      {/* Hexagons */}
      {skills.map((skill, index) => (
        <Hexagon key={index} skill={skill} />
      ))}
    </div>
  );
}

// Skill Category (grid layout of hexagons)
const SkillCategory: React.FC<{ category: SkillCategory }> = ({ category }) => {
  return (
    <div className="flex flex-col items-center bg-[#2b2b2b] rounded-xl pt-6 border border-gray-800 relative">
      <h3 className="text-xl font-semibold text-white py-1 mb-2 border-b-2 border-red-300 max-w-fit">{category.title}</h3>

      <div className="grid grid-cols-3 gap-4 p-4 w-full h-[450px]">
        {splitIntoColumns(category.skills,3).map((columnSkills, idx) => (
          <HexagonChain key={idx} skills={columnSkills} />
        ))}
      </div>
    </div>
  );
};

function splitIntoColumns<T>(items: T[], columns: number): T[][] {
  const result: T[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, index) => {
    result[index % columns].push(item);
  });
  return result;
}


export function SkillTree() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Data Engineering",
      skills: [
        // Row 1
        { name: "SQL", isUnlocked: true },
        { name: "OTAP", isUnlocked: true },
        { name: "Backend", isUnlocked: true },

        // Row 2
        { name: "Data Modeling", isUnlocked: true },
        { name: "OLAP", isUnlocked: true },
        { name: "APIs", isUnlocked: true },

        // Row 3
        { name: "ETL", isUnlocked: false },
        { name: "Cloud", isUnlocked: true },
        { name: "Deploy", isUnlocked: true },

        // Row 4
        { name: "Airflow", isUnlocked: false },
        { name: "HTAP", isUnlocked: false },
        { name: "Security", isUnlocked: false }
      ]
    },
    {
      title: "Data Science",
      skills: [
        // Row 1
        { name: "Math", isUnlocked: true },
        { name: "Statistics", isUnlocked: true },
        { name: "Research", isUnlocked: true },

        // Row 2
        { name: "ML", isUnlocked: true },
        { name: "EDA", isUnlocked: true },
        { name: "Exp design", isUnlocked: true },

        // Row 3
        { name: "DL", isUnlocked: true },
        { name: "Forecast", isUnlocked: true },
        { name: "A/B test", isUnlocked: true },

        // Row 4
        { name: "LLM/AI", isUnlocked: false },
        { name: "Data Mining", isUnlocked: true },
        { name: "Casual Research", isUnlocked: false }
      ]
    },
    {
      title: "Business Analysis",
      skills: [
        // Row 1
        { name: "Business Metrics", isUnlocked: true },
        { name: "Excel", isUnlocked: true },
        { name: "Ad-hoc", isUnlocked: true },

        // Row 2
        { name: "Dash board", isUnlocked: true },
        { name: "Pivot table", isUnlocked: true },
        { name: "Reporting", isUnlocked: true },
        
        // Row 3
        { name: "BI Design", isUnlocked: true },
        { name: "VBA", isUnlocked: false },
        { name: "Public speaking", isUnlocked: true },
        
        // Row 4
        { name: "Domain Expertise", isUnlocked: false },
        { name: "Power Query", isUnlocked: false },
        { name: "Strategy Dev", isUnlocked: true }
      ]
    }
  ];

  return (
    <div className="w-full">
      <div className="mb-6 p-4 bg-[#2b2b2b] rounded-xl border border-gray-800">
        <p className="text-gray-300 text-sm">
          This skill tree represents my progression path in data-related fields. Skills are organized by category and
          color-coded to show which ones I&apos;ve unlocked (red) and which ones I&apos;m still working on (black).
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {skillCategories.map(category => (
          <SkillCategory key={category.title} category={category} />
        ))}
      </div>

      <div className="text-center text-gray-400 mt-6 text-sm flex items-center justify-center space-x-6">
        <p>🔴 Unlocked skills</p>
        <p>⚫ Locked skills</p>
      </div>
    </div>
  );
}
