<script lang="ts">
  import imageSrc from "$lib/assets/headshot.jpeg";
  import { Card, Button, GradientButton, Clipboard } from "flowbite-svelte";

  // Update these with your real links/data
  const links = {
    resume: "/Sharath_Kumar_Resume.pdf",
    github: "https://github.com/sharath-09",
    linkedin: "https://www.linkedin.com/in/sharath-2b91a1178/",
    email: "sharathsureshkumar@gmail.com"
  };

  let selectedSection = $state("");

  const highlights = [
    "Overview",
    "Computer Vision",
    "LLM + RAG Workflows",
    "Speech Generation",
    "ML Engineering",
    "Software Engineering",
  ];
  
  const textdesc: string= {"Overview" : `I’ve spent the past few years designing and deploying AI/ML solutions in business operations, fintech, and beyond — from computer vision systems and generative audio to large-scale LLM workflows. I thrive at the intersection of research and engineering: taking cutting-edge ideas and turning them into reliable, scalable software.
  What excites me most is where I’m headed: shaping how intelligent systems interact with people, and building platforms that are not only technically elegant but genuinely useful.`, 
              "Computer Vision" : "500", 
              "LLM + RAG Workflows" : "white",
              "Speech Generation" : "I like speech",
              "ML Engineering" : "ML Engineering",
              "Software Engineering" : "Hello",}; 


</script>

<!-- Page wrapper -->
<div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

  <main class="max-w-5xl mx-auto px-6">
    <!-- Accessible SEO title -->
    <h1 class="sr-only">Sharath — Machine Learning Engineer Portfolio</h1>

    <!-- Hero -->
    <section class="py-10 sm:py-14">
      <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
        <img
          src={imageSrc}
          alt="Portrait of Sharath"
          class="rounded-2xl w-28 h-28 sm:w-32 sm:h-32 object-cover shadow-lg ring-2 ring-indigo-500/20
                 transition-transform duration-300 hover:scale-[1.03]"
          loading="eager"
        />
        <div class="space-y-4 text-center sm:text-left">
          <p class="text-2xl sm:text-3xl font-semibold leading-snug">
            👋 Hi, I’m <span class="text-indigo-600 dark:text-indigo-400">Sharath</span>.
          </p>
          <p class="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            A <span class="text-emerald-600 dark:text-emerald-400 font-medium">Machine Learning Engineer</span> with a passion for
            <span class="text-pink-600 dark:text-pink-400 font-medium">AI/ML research</span> and building
            <span class="text-blue-600 dark:text-blue-400 font-medium">elegant, scalable software</span>.
          </p>
          <div class="flex flex-wrap items-center gap-3 justify-center sm:justify-start">
            <GradientButton color="purpleToBlue">View Projects</GradientButton>
            <div class="flex gap-4 text-sm">
              <a href={links.github} class="hover:opacity-80" aria-label="GitHub">GitHub</a>
              <a href={links.linkedin} class="hover:opacity-80" aria-label="LinkedIn">LinkedIn</a>
              <a href={links.email} class="hover:opacity-80" aria-label="Email">Email</a>
            </div>
          </div>
        </div>
      </div>

    <span class="flex items-center py-5 sm:py-7">
      <span class="h-px flex-1 bg-gray-300"></span>
      <span class="h-px flex-1 bg-gray-300"></span>
    </span>


<section class="py-16">
  <div class="text-center">
    <h2 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
      About Me
    </h2>
    <p class="mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
      I’ve spent the past few years designing and deploying AI/ML solutions in business operations, fintech, 
      and beyond — from computer vision systems and generative audio to large-scale LLM workflows. 
      I thrive at the intersection of research and engineering: taking cutting-edge ideas and turning them 
      into reliable, scalable software.
    </p>
  </div>

  <div class="text-center">
    <h2 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
      Skills
    </h2>
    <p class="mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
      I’ve spent the past few years designing and deploying AI/ML solutions in business operations, fintech, 
      and beyond — from computer vision systems and generative audio to large-scale LLM workflows. 
      I thrive at the intersection of research and engineering: taking cutting-edge ideas and turning them 
      into reliable, scalable software.
    </p>
  </div>
</section>



    </section>

  <!-- Footer -->
  <footer class="py-8 text-center text-xs text-gray-500">
    © {new Date().getFullYear()} Sharath. Built with SvelteKit + Tailwind + Flowbite.
  </footer>
</div>



