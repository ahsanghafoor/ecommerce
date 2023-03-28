import Carousel from "react-bootstrap/Carousel";

function Slider({ margin }) {
  return (
    <Carousel style={{ margin }}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="/images/iPhone-14-pro-Image.jpeg"
          alt="Iphone-14-Slider"
        />
        <Carousel.Caption>
          <h3 className="text-white">Exclusive Brand New IPhone</h3>
          <p>
            6.1" iOS Phone, 6 GB RAM, 128 GB Storage, Single SIM, 5G, Triple
            Camera: 48 MP+12 MP+12 MP, Selfie: 12 MP, 0.454 g
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="/images/airpods-slider.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="text-white">Airpods Pro</h3>
          <p>Magic like you have never heard.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Playstation-slider.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="text-white">PlayStation 5</h3>
          <p>
            A solid-state drive customized for high-speed data streaming to
            enable significant improvements in storage performance
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
