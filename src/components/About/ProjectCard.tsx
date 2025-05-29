import Image from 'next/image'

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
}

export function ProjectCard({ title, description, technologies, imageUrl, projectUrl }: ProjectCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-xl bg-[#2b2b2b] border border-gray-800">
      {/* Image Container */}
      <div className="relative h-96 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Overlay with Project Info */}
      <div className="absolute inset-0 bg-black/80 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-red-300/20 text-red-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project Button */}
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-center px-4 py-2 bg-red-100 text-black rounded-lg hover:bg-red-700 hover:text-white transition-colors duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
}