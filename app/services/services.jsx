import Image from "next/image";

export default function Services() {
  return (
    <div className="services__area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 lg-mb-30">
            <div className="services__area-item">
              <div className="services__area-item-icon flex justify-center items-center">
                <Image src="/cleaning.png" alt="" width={50} height={50} />
              </div>
              <div className="services__area-item-content">
                <h5>
                  Room Cleaning
                </h5>
                <p>
                Our housekeeping team ensures your room stays spotless and fresh every day
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 sm-mb-30">
            <div className="services__area-item">
              <div className="services__area-item-icon flex justify-center items-center">
                <Image src="/wifi.png" alt="" width={50} height={50} />
              </div>
              <div className="services__area-item-content">
                <h5>
                  Room Wifi
                </h5>
                <p>
                Enjoy complimentary high-speed WiFi for uninterrupted connectivity throughout your stay.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="services__area-item">
              <div className="services__area-item-icon flex justify-center items-center">
                <Image src="/location.png" alt="" width={50} height={50} />
              </div>
              <div className="services__area-item-content">
                <h5>
                  Pickup & Drop
                </h5>
                <p>
                We offer reliable pick-up and drop-off services for a smooth and stress-free journey."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
