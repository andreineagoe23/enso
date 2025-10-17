import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Palette,
  Code,
  Search,
  Settings,
  Smartphone,
  Zap,
  Shield,
  BarChart3,
} from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Palette,
      title: "Web Design",
      description:
        "Beautiful, user-centered designs that reflect your brand and engage your audience.",
      features: [
        "UI/UX Design",
        "Brand Identity",
        "Responsive Design",
        "Prototyping",
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Code,
      title: "Development",
      description:
        "Modern, scalable web applications built with the latest technologies and best practices.",
      features: [
        "React/Next.js",
        "Node.js",
        "Database Design",
        "API Integration",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive more organic traffic to your website.",
      features: [
        "Technical SEO",
        "Content Strategy",
        "Keyword Research",
        "Analytics Setup",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Settings,
      title: "Maintenance",
      description:
        "Keep your website running smoothly with regular updates, backups, and security monitoring.",
      features: [
        "Regular Updates",
        "Security Monitoring",
        "Performance Optimization",
        "Backup Management",
      ],
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Responsive mobile experiences and progressive web apps that work seamlessly across devices.",
      features: [
        "Responsive Design",
        "PWA Development",
        "Mobile Optimization",
        "Cross-platform Testing",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Lightning-fast websites that load quickly and provide an exceptional user experience.",
      features: [
        "Speed Optimization",
        "Core Web Vitals",
        "Image Optimization",
        "CDN Setup",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Security",
      description:
        "Protect your website and user data with enterprise-grade security measures.",
      features: [
        "SSL Certificates",
        "Security Audits",
        "Firewall Setup",
        "Data Protection",
      ],
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description:
        "Track your website performance and user behavior with comprehensive analytics.",
      features: [
        "Google Analytics",
        "Custom Dashboards",
        "Conversion Tracking",
        "Reporting",
      ],
      color: "from-teal-500 to-green-500",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
            >
              Our <span className="gradient-text">Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              From design to deployment, we offer comprehensive web solutions to
              help your business succeed online.
            </motion.p>
          </div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={
                            isInView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -10 }
                          }
                          transition={{
                            delay: 1.0 + index * 0.1 + featureIndex * 0.05,
                            duration: 0.4,
                          }}
                          className="flex items-center space-x-2"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}
                          />
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="text-center space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Our <span className="gradient-text">Process</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Discovery",
                    description: "Understanding your needs and goals",
                  },
                  {
                    step: "02",
                    title: "Design",
                    description: "Creating beautiful, user-centered designs",
                  },
                  {
                    step: "03",
                    title: "Development",
                    description: "Building with modern technologies",
                  },
                  {
                    step: "04",
                    title: "Launch",
                    description: "Deploying and optimizing your site",
                  },
                ].map((process, index) => (
                  <motion.div
                    key={process.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 1.8 + index * 0.1, duration: 0.6 }}
                    className="text-center space-y-3"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto">
                      {process.step}
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {process.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {process.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
