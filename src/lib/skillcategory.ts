export type SkillCategory =
  | "Frontend"
  | "State Management"
  | "UI & Styling"
  | "APIs & Performance"
  | "Testing & Tools";

export type Skills = Record<SkillCategory, string[]>;

export const skills: Skills = {
  Frontend: [
    "React.js",
    "Next.js",
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
  ],
  "State Management": ["Redux", "Redux Toolkit", "React Hooks"],
  "UI & Styling": [
    "Ant Design (Antd)",
    "Material UI",
    "Tailwind CSS",
    "Component-driven Architecture",
    "Responsive Design",
  ],
  "APIs & Performance": [
    "REST API Integration",
    "Performance Optimization",
    "Lazy Loading",
    "Code Splitting",
  ],
  "Testing & Tools": [
    "Jest",
    "Browser DevTools",
    "Debugging",
    "Git",
    "Agile (Jira)",
  ],
};
