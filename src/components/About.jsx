import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Zap, Globe } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code,
      title: "Modern Development",
      description: "Built with React, Next.js, and cutting-edge technologies",
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Clean, minimalist interfaces that focus on user experience",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed and performance across all devices",
    },
    {
      icon: Globe,
      title: "SEO Optimized",
      description: "Search engine friendly with best practices built-in",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-16"
        >
          {/* Section Header */}
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
            >
              About <span className="gradient-text">Enso Digital</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Enso Digital is a London-based web design and development studio
              creating modern, performant websites using React, Tailwind, and
              other cutting-edge tools.
            </motion.p>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-200 dark:border-gray-700"
          >
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "3+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
