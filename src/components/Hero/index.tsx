const Hero = () => {
  return (
    <section className="bg-gray-50 py-30 text-center px-5 md:px-20 lg:px-40">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
        Craft Your Perfect Resume with{" "}
        <span className="text-indigo-600">AI</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Build job-winning, ATS-friendly resumes in minutes — not hours.
      </p>
      <div className="mt-8">
        <a
          href="/dashboard"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
