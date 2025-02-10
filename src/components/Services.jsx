import Grid from "./BentoGrid/Grid"
const Services = () => {
  return (
    <section id="services" className="w-full bg-[#202020] px-60 py-32">
        <div className="flex justify-between items-center">
          <div className="border border-white w-52 rounded-full py-2 text-white font-light text-center">
            SERVICES
          </div>
          <p className="text-slate-200 w-1/2 text-justify">
            Explore our expertise in Finance, Health, and Cloud Software areas.
            We deliver designs tailored to each industry’s unique demands
            driving digital excellence for businesses like yours.
          </p>
        </div>
        <Grid />
      </section>
  )
}

export default Services