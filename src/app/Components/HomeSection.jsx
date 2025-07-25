import Image from "next/image";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="font-[Poppins] bg-white min-h-screen flex items-center px-6 sm:px-16 py-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Virtutix
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
            Premier Analytic and Tech Partner
          </h2>
          <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-4">
            We Are Powerful DataTech IT Company
          </h3>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            An innovative and premier DataTech Startup committed to
            revolutionizing businesses with advanced data technologies and
            dedicated to transforming businesses in Agri, retail, finance,
            manufacturing and E-Commerce Industries through proven cutting-edge
            customized software solutions that drive data quality, efficiency,
            productivity, protection, security and visual transformation.
          </p>
        </div>


        {/* ✅ IMAGE SECTION */}
        <div className="flex justify-center">
          <Image
            src="/assets/homeImage.jpg"
            alt="Virtutix technology banner"
            width={500}
            height={500}
            className="rounded-md shadow-md animate-[spin_3s_ease-in-out_1]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
