
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

  const highlights = [
    "Overview",
    "Computer Vision",
    "LLM + RAG Workflows",
    "Speech Generation",
    "ML Engineering",
    "Software Engineering",
  ];

  let selectedSection = $state("");
  let selectedColor = $state("");

  type Project = {
    title: string;
    blurb: string;
    stack: string[];
    href?: string;
  };

  const projects: Project[] = [
    {
      title: "CoverMe — Insurtech Wallet",
      blurb: "Extras cover optimiser with claims analytics and modern UX.",
      stack: ["SvelteKit", "Supabase", "LLM", "Stripe"],
      href: "https://coverme.com.co"
    },
    {
      title: "LLM-Ops Platform",
      blurb: "Eval & tracing for RAG pipelines with Qdrant + LlamaIndex.",
      stack: ["Python", "Qdrant", "LlamaIndex", "Docker"]
    },
    {
      title: "CV Pose Estimation",
      blurb: "Ground vehicle pose from monocular video; real-time inference.",
      stack: ["TensorFlow", "OpenCV", "CUDA"]
    }
  ];

  const experience = [
    {
      role: "Machine Learning Engineer",
      org: "Swordfish Computing",
      time: "Aug 2023 — Present",
      points: [
        "Designed & deployed CV/LLM systems for defence use-cases.",
        "LLM RAG with hybrid search; evals, tracing, prompt tooling.",
        "Microservices on containers; CI/CD; GPU-aware workloads."
      ]
    }
  ];
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
            <Button href="#projects" size="sm">View projects</Button>
            <Button href={links.resume} color="light" size="sm" class="border">
              View CV
            </Button>
            <div class="flex gap-4 text-sm">
              <a href={links.github} class="hover:opacity-80" aria-label="GitHub">GitHub</a>
              <a href={links.linkedin} class="hover:opacity-80" aria-label="LinkedIn">LinkedIn</a>
              <a href={links.email} class="hover:opacity-80" aria-label="Email">Email</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Highlights -->
      <ul class="mt-8 flex flex-wrap gap-2">
        {#each highlights as h}
          <GradientButton onclick={() => selectedSection = h} color={selectedSection === h ? "purpleToBlue" : "purple"}>{h}</GradientButton>
        {/each}
      </ul>
    </section>


    <!-- Projects -->
    <section id="projects" class="py-8 sm:py-10">
      <h2 class="text-xl sm:text-2xl font-semibold mb-4">{selectedSection}</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {#each projects as p}
          <Card class="hover:translate-y-[-2px] transition-transform">
            <div class="space-y-2">
              <h3 class="text-base font-semibold">{p.title}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">{p.blurb}</p>
              <div class="flex flex-wrap gap-1.5">
                {#each p.stack as tag}
                  <span class="text-[11px] px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-100/60 dark:border-indigo-900/50">{tag}</span>
                {/each}
              </div>
              {#if p.href}
                <a href={p.href} class="text-sm underline decoration-dotted hover:opacity-80">Visit</a>
              {/if}
            </div>
          </Card>
        {/each}
      </div>
    </section>

    <!-- Experience -->
    <section id="experience" class="py-8 sm:py-10">
      <h2 class="text-xl sm:text-2xl font-semibold mb-4">Experience</h2>
      <div class="space-y-4">
        {#each experience as e}
          <Card>
            <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 class="text-base font-semibold">{e.role} · <span class="font-normal text-gray-600 dark:text-gray-300">{e.org}</span></h3>
              <p class="text-xs text-gray-500">{e.time}</p>
            </div>
            <ul class="mt-3 list-disc list-inside text-sm space-y-1.5">
              {#each e.points as pt}
                <li>{pt}</li>
              {/each}
            </ul>
          </Card>
        {/each}
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-10 sm:py-12">
      <Card class="text-center">
        <h2 class="text-xl sm:text-2xl font-semibold mb-2">Let’s build something great</h2>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Open to roles in ML/AI, LLM-Ops, and platform engineering. Say hello!
        </p>
        <div class="flex gap-3 justify-center">
          <Button href={links.email}>Email me</Button>
          <Button href={links.linkedin} color="light" class="border">Connect on LinkedIn</Button>
        </div>
      </Card>
    </section>
  </main>

  <!-- Footer -->
  <footer class="py-8 text-center text-xs text-gray-500">
    © {new Date().getFullYear()} Sharath. Built with SvelteKit + Tailwind + Flowbite.
  </footer>
</div>



