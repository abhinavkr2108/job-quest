import { BriefcaseBusiness, FileText, NotebookPen } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <FileText />,
      title: "Resume Builder",
      desc: "Our step-by-step guided creation process helps you build a polished resume. Input your information, and our tool will organize it into a well-structured, eye-catching resume.This increases your chances of passing through applicant tracking systems (ATS) and catching the eye of recruiters.",
    },
    {
      icon: <BriefcaseBusiness />,
      title: "Datacenter security",
      desc: "Job Quest aggregates job listings from various reputable sources, providing a comprehensive database of opportunities. This ensures that job seekers have access to a wider range of job openings beyond those directly posted on the platform.",
    },
    {
      icon: <NotebookPen />,
      title: "Build on your terms",
      desc: "Job Quest makes creating and browsing job listings a breeze. Employers can quickly post jobs with detailed descriptions, requirements, and application instructions, while job seekers can filter and search listings by various criteria such as industry, location, experience level, and salary range.",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-xl space-y-3 mx-auto text-center">
          <h3 className="text-indigo-600 font-semibold">Features</h3>
          <p className="text-secondary-foreground text-3xl font-semibold sm:text-4xl">
            Do more with less complexity
          </p>
          <p className="text-secondary-foreground">
            Whether you are starting your career, seeking a new opportunity, or
            aiming for the next big step, Job Quest provides a seamless,
            user-friendly experience to discover and land your dream job.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0">
            {features.map((item, idx) => (
              <li
                key={idx}
                className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`}
              >
                <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg text-secondary-foreground font-semibold">
                  {item.title}
                </h4>
                <p className="text-md text-secondary-foreground">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
