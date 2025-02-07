import mentors from "../assets/mentors.png";

function Coaches() {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen">
      <div className="bg-blue-900 text-white p-8 w-full md:w-1/2 flex flex-col justify-center border border-black">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Tap into expert "boss-level" experience in just a few clicks
        </h1>
        <h2 className="mb-6 text-xl md:text-3xl py-4">
          Master the skills, get your questions answered, and build your toolbox
          to the crucial challenges you need to dominate your work. No complex
          training required.
        </h2>
        <div className="py-4">
          <button className="bg-slate-900 text-white py-4 md:py-6 px-8 md:px-16 rounded-lg shadow-lg hover:bg-slate-800 transition duration-300 text-lg md:text-2xl">
            Accelerate Career
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center p-0 py-12 md:ml-24">
        <img
          src={mentors}
          alt="Placeholder"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Coaches;
