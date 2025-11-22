import { motion } from "framer-motion";
import { Fuel, Gauge, Settings, Heart, Eye } from "lucide-react";
import { useState } from "react";
import toyotaFortuner from "../assets/images/toyota-fortuner.png";
import innovaCrysta from "../assets/images/innova-crysta.png";
import marutiSwift from "../assets/images/maruti-swift.png";
import hyundaiI20 from "../assets/images/hyundai-i20.png";
import marutiBaleno from "../assets/images/maruti-baleno.png";
import mahindraXuv from "../assets/images/mahindra-xuv.png";

interface Car {
  id: number;
  name: string;
  brand: string;
  year: number;
  mileage: string;
  fuelType: string;
  transmission: string;
  image: string;
  featured: boolean;
}

const FeaturedCars = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const cars: Car[] = [
    {
      id: 1,
      name: "Fortuner",
      brand: "Toyota",
      year: 2024,
      mileage: "15,000 km",
      fuelType: "Diesel",
      transmission: "Automatic",
      image: toyotaFortuner,
      featured: true,
    },
    {
      id: 2,
      name: "Innova Crysta",
      brand: "Toyota",
      year: 2023,
      mileage: "25,000 km",
      fuelType: "Diesel",
      transmission: "Manual",
      image: innovaCrysta,
      featured: true,
    },
    {
      id: 3,
      name: "Swift",
      brand: "Maruti Suzuki",
      year: 2024,
      mileage: "8,000 km",
      fuelType: "Petrol",
      transmission: "Manual",
      image: marutiSwift,
      featured: false,
    },
    {
      id: 4,
      name: "i20",
      brand: "Hyundai",
      year: 2024,
      mileage: "12,000 km",
      fuelType: "Petrol",
      transmission: "Automatic",
      image: hyundaiI20,
      featured: true,
    },
    {
      id: 5,
      name: "Baleno",
      brand: "Maruti Suzuki",
      year: 2023,
      mileage: "18,000 km",
      fuelType: "Petrol",
      transmission: "Automatic",
      image: marutiBaleno,
      featured: false,
    },
    {
      id: 6,
      name: "XUV700",
      brand: "Mahindra",
      year: 2024,
      mileage: "10,000 km",
      fuelType: "Diesel",
      transmission: "Automatic",
      image: mahindraXuv,
      featured: true,
    },
  ];

  const filters = ["all", "luxury", "suv", "sports", "electric"];

  return (
    <section
      id="inventory"
      className="section-padding bg-dark-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full filter blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm md:text-base uppercase tracking-wider">
            Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            Featured <span className="gradient-text">Vehicles</span>
          </h2>
          <p className="text-dark-300 text-base md:text-lg max-w-2xl mx-auto">
            Explore our handpicked selection of premium vehicles from the
            world's finest manufacturers
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-medium capitalize transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/30"
                  : "bg-dark-800 text-dark-300 hover:bg-dark-700 border border-dark-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Cars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card overflow-hidden h-full flex flex-col">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                  {/* Car Image */}
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.name}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                      <Eye size={20} />
                    </button>
                    <button className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                      <Heart size={20} />
                    </button>
                  </div>

                  {/* Featured Badge */}
                  {car.featured && (
                    <div className="absolute top-3 right-3 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                {/* Car Details */}
                <div className="flex-1 flex flex-col">
                  <div className="mb-3">
                    <div className="text-sm text-primary-400 font-semibold mb-1">
                      {car.brand}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {car.name}
                    </h3>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                    <div className="flex items-center gap-1 text-dark-400">
                      <Gauge size={14} className="text-primary-500" />
                      <span>{car.mileage}</span>
                    </div>
                    <div className="flex items-center gap-1 text-dark-400">
                      <Fuel size={14} className="text-primary-500" />
                      <span>{car.fuelType}</span>
                    </div>
                    <div className="flex items-center gap-1 text-dark-400">
                      <Settings size={14} className="text-primary-500" />
                      <span>{car.transmission.slice(0, 4)}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-4 border-t border-dark-700">
                    <a
                      href="tel:+919063582078"
                      className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full block text-center"
                    >
                      Inquire Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="tel:+919063582078" className="btn-primary">
            Call for More Vehicles
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCars;
