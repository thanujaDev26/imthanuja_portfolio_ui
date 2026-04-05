import React from "react";
import { motion } from "framer-motion";


const experiences = [
  {
    company: "Codimite",
    logo: "/codimite.png",
    roles: [
      {
        title: "Associate Software Engineer",
        start: "2026-02-06",
        end: "Present",
        stack: ["Python", "Javascript", "Golang", "GCP", "Docker", "Github Actions"],
      }
    ],
  },
  {
    company: "NVISION",
    logo: "/nvision.png",
    roles: [
      {
        title: "DevSecOps Engineer Intern",
        start: "2025-05-26",
        end: "2025-11-26",
        stack: ["Linux/RHEL 9", "AWS", "VA/MBSS", "Bitbucket Pipelines", "Jenkins"],
      },
    ],
  },
];


const calculateDuration = (start, end) => {
  const startDate = new Date(start);
  const endDate = end === "Present" ? new Date() : new Date(end);

  let months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  let result = "";
  if (years > 0) result += `${years} yr `;
  if (remainingMonths > 0) result += `${remainingMonths} mos`;

  return result.trim();
};

const Experience = () => {
  return (
    <section className="bg-black py-32 px-6" id="experiences">
      <div className="max-w-4xl mx-auto relative">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-20 text-center"
        >
          Work Experience
        </motion.h2>

        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gray-800" />

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12"
            >
            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-neon-cyan shadow-[0_0_10px_#00ffff]" />

            <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 hover:scale-[1.02] transition">

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                <img
                src={exp.logo}
                alt={exp.company}
                className="w-16 h-16 object-contain rounded-md"
                />
                <h3 className="text-xl font-bold text-white">{exp.company}</h3>
            </div>

      
            <div className="space-y-6 border-l border-gray-700 pl-4">
                {exp.roles.map((role, i) => (
                <div key={i} className="relative">

                    <h4 className="text-white font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                    {role.title}
                    </h4>

                    <p className="text-gray-500 text-sm">
                    {role.start} - {role.end} ·{" "}
                    {calculateDuration(role.start, role.end)}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                    {role.stack.map((tech, idx) => (
                        <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>

                </div>
                ))}
            </div>
    </div>
  </motion.div>
))}
        </div>
      </div>
    </section>
  );
};

export default Experience;