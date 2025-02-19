import Link from "next/link";

const Accommodationstext = () => {
  return (
    <div className="col-xl-5 col-lg-6 lg-mb-50">
      <div className="accommodations__area-title">
        <span className="subtitle__one">Accommodations</span>
        <h2>Welcome To Our Hotel, Your Second Home</h2>
        <p>
        Experience unparalleled comfort and hospitality at our hotel, where every stay is designed for relaxation and luxury. From elegant rooms to top-tier amenities, we ensure a warm and memorable stay for every guest.
        </p>
        <Link className="theme-btn" href="/about">
          Read More <i className="fal fa-long-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default Accommodationstext;
