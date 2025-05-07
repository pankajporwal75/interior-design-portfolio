import Marquee from "react-fast-marquee";

export default function CompanySection() {
  return (
    <div className="w-full bg-white py-20">
      <Marquee
        speed={50}
        gradient={true}
        pauseOnHover={true}
        className="text-gray-800 text-5xl font-normal uppercase tracking-widest"
      >
        Interior Designing &nbsp;|&nbsp; Elevation Planning &nbsp;|&nbsp; 2D Floor Plan &nbsp;|&nbsp;&nbsp;
      </Marquee>
    </div>
  );
}
