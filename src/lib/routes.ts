import dynamic from "next/dynamic";

export const sections = [
  {
    name: "Hero",
    Component: dynamic(() => import("@/app/components/section/hero/Hero"), {
      ssr: false,
    }),
  },
  {
    name: "About",
    Component: dynamic(() => import("@/app/components/section/about/About"), {
      ssr: false,
    }),
  },
  {
    name: "SkillsSection",
    Component: dynamic(
      () => import("@/app/components/section/skills/SkillsSection"),
      {
        ssr: false,
      },
    ),
  },
  {
    name: "CompanyProjects",
    Component: dynamic(
      () => import("@/app/components/section/projects/CompanyProjects"),
      {
        ssr: false,
      },
    ),
  },
  {
    name: "PersonalProjects",
    Component: dynamic(
      () => import("@/app/components/section/projects/PersonalProjects"),
      {
        ssr: false,
      },
    ),
  },
  // {
  //   name: "ResumeSection",
  //   Component: dynamic(
  //     () => import("@/app/components/section/resume/ResumeSection"),
  //     {
  //       ssr: false,
  //     },
  //   ),
  // },
];
