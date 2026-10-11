const articleImages = {
  cover: "/images/Blog_post1.jpeg",
  preparation: "/images/Blog_Post2.jpeg",
  competition: "/images/Blog_Post4.jpeg",
  students: "/images/Blog_Post5.jpeg",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top navigation */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-4 sm:py-5">
          <a
            href="#top"
            className="text-xs sm:text-sm font-bold tracking-widest text-white no-underline"
          >
            THE OBSERVER
          </a>

          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500">
            Society · India
          </span>
        </div>
      </nav>

      <article
        id="top"
        className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-20"
      >
        {/* Article header */}
        <header>
          <p className="mb-4 sm:mb-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Society &amp; Education
          </p>

          <h1 className="max-w-3xl text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
            The Rush for Government Jobs in India
          </h1>

          <p className="mt-5 sm:mt-7 max-w-2xl text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-gray-400">
            Millions of young Indians compete for a limited number of
            government positions. What makes these jobs so desirable,
            and what does this pursuit reveal about our society?
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-white/10 py-4 sm:py-5 text-xs sm:text-sm text-gray-500">
            <span>By Ashish Sen</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-10-12">October 12, 2026</time>
            <span aria-hidden="true">·</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* Featured image */}
        <figure className="my-8 sm:my-14">
          <img
            src={articleImages.cover}
            alt="The pursuit of government employment in India"
            className="aspect-[16/9] w-full rounded-xl object-cover"
          />

          <figcaption className="mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-500">
            Behind every examination is a personal story of ambition,
            uncertainty, and the hope for a secure future.
          </figcaption>
        </figure>

        {/* Article body */}
        <div className="mx-auto max-w-3xl space-y-6 sm:space-y-7 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
          <p>
            Every year, across cities, towns, and villages in India,
            countless young people sit with textbooks, handwritten notes,
            and practice papers, preparing for competitive government
            examinations. Some study in crowded coaching centres;
            others prepare alone in small rooms, often with limited
            resources and enormous expectations.
          </p>

          <p>
            For many, the goal is not simply to secure employment.
            It is to find stability in an uncertain world, to support
            their families, and to build a life that feels financially
            and socially secure. Yet, when so many people pursue the
            same narrow path, an important question emerges: how did
            a government job become such a powerful aspiration?
          </p>

          <h2 className="pt-6 sm:pt-8 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
            1. The Promise of Security
          </h2>

          <p>
            A regular salary, predictable service conditions, and
            employment benefits can make government work attractive
            to people who are worried about uncertainty in the private
            sector. For families with limited financial savings, a
            stable income can mean much more than a monthly paycheque.
          </p>

          <p>
            It can mean being able to contribute to household expenses,
            help parents, plan for the future, and avoid the anxiety
            that comes with unstable employment. The appeal is therefore
            not difficult to understand. For many aspirants, security
            is not a luxury; it is a practical priority.
          </p>

          <h2 className="pt-6 sm:pt-8 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
            2. A Competition That Begins Early
          </h2>

          <figure className="my-8 sm:my-10">
            <img
              src={articleImages.preparation}
              alt="Books and study materials used for competitive examinations"
              loading="lazy"
              className="aspect-[16/9] w-full rounded-xl object-cover"
            />
            <figcaption className="mt-3 text-xs sm:text-sm text-gray-500">
              Preparation can become a defining part of an aspirant's
              daily life.
            </figcaption>
          </figure>

          <p>
            For some students, preparation begins years before they
            apply for their first examination. School results, coaching
            decisions, graduation choices, and family discussions can
            all become part of a long journey toward a government post.
          </p>

          <p>
            Repeated attempts may bring hope, but they can also bring
            pressure. Candidates must balance limited vacancies,
            examination schedules, changing recruitment timelines,
            and the possibility that years of preparation may not
            result in an appointment.
          </p>

          <h2 className="pt-6 sm:pt-8 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
            3. The Cost of the Race
          </h2>

          <figure className="my-8 sm:my-10">
            <img
              src={articleImages.competition}
              alt="Candidates gathered around a competitive examination centre"
              loading="lazy"
              className="aspect-[16/9] w-full rounded-xl object-cover"
            />
            <figcaption className="mt-3 text-xs sm:text-sm text-gray-500">
              High demand for limited vacancies creates intense
              competition among candidates.
            </figcaption>
          </figure>

          <p>
            The cost of preparation is not measured only in coaching
            fees, books, or examination charges. There is also the
            opportunity cost of time: years spent preparing may mean
            postponing other careers, earning opportunities, or
            independent financial decisions.
          </p>

          <p>
            For families supporting an aspirant, the waiting period
            can create financial and emotional strain. For the candidate,
            every unsuccessful attempt may require a difficult decision:
            prepare again, pursue another opportunity, or change direction.
          </p>

          <blockquote className="my-8 sm:my-12 border-l-2 border-blue-400 pl-4 sm:pl-6 text-xl sm:text-2xl lg:text-3xl italic leading-relaxed text-white">
            The dream of a secure future can be powerful, but the road
            toward it should not require someone to put their entire
            life on hold.
          </blockquote>

          <h2 className="pt-6 sm:pt-8 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
            4. Rethinking Success
          </h2>

          <figure className="my-8 sm:my-10">
            <img
              src={articleImages.students}
              alt="Students studying and working toward their future"
              loading="lazy"
              className="aspect-[16/9] w-full rounded-xl object-cover"
            />
            <figcaption className="mt-3 text-xs sm:text-sm text-gray-500">
              Education can open many paths, not just one.
            </figcaption>
          </figure>

          <p>
            Government employment is a legitimate and valuable career
            choice. The problem is not the ambition itself, but the
            possibility that society begins to treat one kind of job
            as the only respectable measure of success.
          </p>

          <p>
            A healthier approach would make room for different ambitions.
            Private employment, skilled trades, research, teaching,
            entrepreneurship, and other professions can also provide
            meaningful work. Their value depends on the opportunities,
            working conditions, compensation, and dignity they offer.
          </p>

          <p>
            Better career guidance, more transparent recruitment,
            accessible skill development, and a wider range of
            dependable employment opportunities could help young
            people make decisions based on their interests and
            circumstances rather than fear alone.
          </p>

          <h2 className="pt-6 sm:pt-8 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
            Conclusion: More Than an Examination
          </h2>

          <p>
            The rush for government jobs in India reflects several
            overlapping realities: the desire for financial security,
            family expectations, social recognition, and concerns
            about the availability of suitable work.
          </p>

          <p>
            We should understand these aspirations without dismissing
            the people who hold them. Young Indians are often making
            the best decisions they can with the opportunities they
            see around them.
          </p>

          <p>
            Ultimately, the goal should not be to discourage government
            employment, but to build a society in which a secure and
            dignified future does not feel possible through only one
            narrow doorway.
          </p>
        </div>

        {/* Article ending */}
        <footer className="mt-12 sm:mt-16 border-t border-white/10 pt-6 sm:pt-8">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500">
            End of article
          </p>

          <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-400">
            Written by Sumit Patidar · Exploring work, ambition, and
            society in India.
          </p>

          <a
            href="#top"
            className="mt-5 sm:mt-6 inline-block text-xs sm:text-sm font-medium text-blue-400 no-underline hover:text-blue-300"
          >
            Back to top ↑
          </a>
        </footer>
      </article>
    </main>
  );
}