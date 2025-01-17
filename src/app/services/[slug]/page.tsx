"use client";

import { motion } from "framer-motion";
import { GlitchText } from "@/components/glitch-text";
import { HologramCard } from "@/components/hologram-card";
import { NeonGlow } from "@/components/neon-glow";
import { Code2, Globe, LineChart, Smartphone, Check, ArrowRight, Clock, Wrench, Users, Zap } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect } from "react";

const SplineViewer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-full min-h-[500px]">
      <spline-viewer url="https://prod.spline.design/mCVMdi7JYV9dhk80/scene.splinecode" />
    </div>
  );
};

const services = {
  "software-development": {
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs. From web applications to enterprise systems.",
    icon: Code2,
    color: "text-blue-500",
    hero: {
      title: "Transform Your Business with Custom Software",
      description: "We build scalable, secure, and efficient software solutions that drive business growth and innovation.",
      image: "/services/software-dev-hero.jpg"
    },
    benefits: [
      {
        title: "Increased Efficiency",
        description: "Streamline your operations with automated workflows and integrated systems.",
        icon: Zap
      },
      {
        title: "Scalable Solutions",
        description: "Future-proof your business with software that grows with you.",
        icon: ArrowRight
      },
      {
        title: "Custom Integration",
        description: "Seamlessly connect with your existing tools and systems.",
        icon: Wrench
      },
      {
        title: "Expert Support",
        description: "24/7 technical support and maintenance from our dedicated team.",
        icon: Users
      }
    ],
    process: [
      {
        title: "Discovery & Planning",
        description: "We analyze your requirements and create a detailed project roadmap.",
        duration: "1-2 weeks"
      },
      {
        title: "Design & Architecture",
        description: "Our team designs the system architecture and user interfaces.",
        duration: "2-3 weeks"
      },
      {
        title: "Development",
        description: "We build your solution using modern technologies and best practices.",
        duration: "8-12 weeks"
      },
      {
        title: "Testing & QA",
        description: "Rigorous testing ensures your software is bug-free and reliable.",
        duration: "2-3 weeks"
      },
      {
        title: "Deployment",
        description: "We deploy your solution and provide comprehensive training.",
        duration: "1-2 weeks"
      },
      {
        title: "Maintenance & Support",
        description: "Ongoing support and updates to keep your software running smoothly.",
        duration: "Ongoing"
      }
    ],
    technologies: [
      {
        category: "Frontend",
        items: ["React", "Next.js", "Vue.js", "Angular", "TypeScript"]
      },
      {
        category: "Backend",
        items: ["Node.js", "Python", "Java", "Go", ".NET"]
      },
      {
        category: "Database",
        items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
      },
      {
        category: "Cloud",
        items: ["AWS", "Azure", "Google Cloud", "Digital Ocean"]
      }
    ],
    faqs: [
      {
        question: "How long does it take to develop custom software?",
        answer: "The development timeline varies based on the project complexity. Typically, a medium-sized project takes 3-6 months from planning to deployment."
      },
      {
        question: "What is your development methodology?",
        answer: "We follow an Agile methodology with regular sprints and client feedback sessions to ensure the project stays on track and meets your requirements."
      },
      {
        question: "Do you provide ongoing maintenance?",
        answer: "Yes, we offer comprehensive maintenance packages including bug fixes, security updates, and feature enhancements."
      },
      {
        question: "Can you integrate with existing systems?",
        answer: "Absolutely! We specialize in creating custom integrations with your existing software and third-party services."
      }
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to boost your online presence and drive growth.",
    icon: LineChart,
    color: "text-green-500",
    hero: {
      title: "Grow Your Online Presence",
      description: "Strategic digital marketing solutions that deliver measurable results and ROI.",
      image: "/services/digital-marketing-hero.jpg"
    },
    benefits: [
      {
        title: "Increased Visibility",
        description: "Improve your search rankings and online visibility.",
        icon: Globe
      },
      {
        title: "Higher Conversion",
        description: "Convert more visitors into customers with optimized campaigns.",
        icon: ArrowRight
      },
      {
        title: "Data Analytics",
        description: "Make informed decisions with comprehensive analytics.",
        icon: LineChart
      },
      {
        title: "Brand Growth",
        description: "Build and strengthen your brand presence online.",
        icon: Users
      }
    ],
    process: [
      {
        title: "Strategy Development",
        description: "We create a customized marketing strategy based on your goals.",
        duration: "1-2 weeks"
      },
      {
        title: "Campaign Setup",
        description: "Setting up and optimizing marketing campaigns across channels.",
        duration: "1-2 weeks"
      },
      {
        title: "Content Creation",
        description: "Creating engaging content that resonates with your audience.",
        duration: "Ongoing"
      },
      {
        title: "Campaign Management",
        description: "Active management and optimization of your campaigns.",
        duration: "Ongoing"
      },
      {
        title: "Performance Analysis",
        description: "Regular reporting and analysis of campaign performance.",
        duration: "Monthly"
      }
    ],
    technologies: [
      {
        category: "Analytics",
        items: ["Google Analytics", "SEMrush", "Ahrefs", "Mixpanel"]
      },
      {
        category: "Advertising",
        items: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Twitter Ads"]
      },
      {
        category: "SEO",
        items: ["Moz", "Yoast", "Screaming Frog", "Google Search Console"]
      },
      {
        category: "Social Media",
        items: ["Buffer", "Hootsuite", "Sprout Social", "Later"]
      }
    ],
    faqs: [
      {
        question: "How long until I see results?",
        answer: "Initial results can be seen within 1-3 months, with significant improvements typically visible after 6 months of consistent effort."
      },
      {
        question: "What channels do you focus on?",
        answer: "We create a multi-channel strategy including SEO, PPC, social media, and content marketing, tailored to where your audience is most active."
      },
      {
        question: "How do you measure success?",
        answer: "We track key metrics including traffic, conversions, engagement rates, and ROI, providing regular reports on campaign performance."
      },
      {
        question: "Do you create content?",
        answer: "Yes, we offer comprehensive content creation services including blog posts, social media content, videos, and infographics."
      }
    ]
  },
  "web-development": {
    title: "Web Development",
    description: "Beautiful, responsive websites built with the latest technologies and best practices.",
    icon: Globe,
    color: "text-purple-500",
    hero: {
      title: "Create Your Digital Presence",
      description: "Modern, fast, and responsive websites that engage your audience and drive results.",
      image: "/services/web-dev-hero.jpg"
    },
    benefits: [
      {
        title: "Modern Design",
        description: "Beautiful, user-friendly interfaces that engage visitors.",
        icon: Globe
      },
      {
        title: "Mobile-First",
        description: "Responsive design that works perfectly on all devices.",
        icon: Smartphone
      },
      {
        title: "Performance",
        description: "Lightning-fast loading speeds and optimal performance.",
        icon: Zap
      },
      {
        title: "SEO-Ready",
        description: "Built-in SEO best practices for better visibility.",
        icon: LineChart
      }
    ],
    process: [
      {
        title: "Requirements Gathering",
        description: "Understanding your needs and project goals.",
        duration: "1 week"
      },
      {
        title: "Design Phase",
        description: "Creating wireframes and visual designs.",
        duration: "2-3 weeks"
      },
      {
        title: "Development",
        description: "Building your website with modern technologies.",
        duration: "4-8 weeks"
      },
      {
        title: "Content Integration",
        description: "Adding your content and optimizing for launch.",
        duration: "1-2 weeks"
      },
      {
        title: "Testing",
        description: "Ensuring everything works perfectly.",
        duration: "1 week"
      },
      {
        title: "Launch",
        description: "Deploying your website and monitoring performance.",
        duration: "1 week"
      }
    ],
    technologies: [
      {
        category: "Frontend",
        items: ["React", "Next.js", "TailwindCSS", "TypeScript"]
      },
      {
        category: "CMS",
        items: ["WordPress", "Strapi", "Contentful", "Sanity"]
      },
      {
        category: "Performance",
        items: ["Vercel", "Cloudflare", "AWS", "Google Cloud"]
      },
      {
        category: "Analytics",
        items: ["Google Analytics", "Plausible", "Hotjar", "Mixpanel"]
      }
    ],
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer: "A typical website takes 8-12 weeks from start to finish, depending on complexity and requirements."
      },
      {
        question: "Do you provide hosting?",
        answer: "Yes, we offer reliable hosting solutions with 99.9% uptime guarantee and regular maintenance."
      },
      {
        question: "Can I update the website myself?",
        answer: "Yes, we build websites with user-friendly content management systems that make updates easy."
      },
      {
        question: "Is the website mobile-friendly?",
        answer: "Absolutely! All our websites are built with a mobile-first approach and are fully responsive."
      }
    ]
  },
  "mobile-development": {
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    icon: Smartphone,
    color: "text-orange-500",
    hero: {
      title: "Build Your Mobile App",
      description: "Innovative mobile solutions that engage users and drive business growth.",
      image: "/services/mobile-dev-hero.jpg"
    },
    benefits: [
      {
        title: "Native Performance",
        description: "Fast and smooth app performance on all devices.",
        icon: Zap
      },
      {
        title: "Cross-Platform",
        description: "Reach users on both iOS and Android platforms.",
        icon: Globe
      },
      {
        title: "User Experience",
        description: "Intuitive interfaces that users love.",
        icon: Users
      },
      {
        title: "Scalability",
        description: "Built to grow with your user base.",
        icon: ArrowRight
      }
    ],
    process: [
      {
        title: "Strategy & Planning",
        description: "Defining app features and technical requirements.",
        duration: "1-2 weeks"
      },
      {
        title: "UI/UX Design",
        description: "Creating intuitive and engaging user interfaces.",
        duration: "2-3 weeks"
      },
      {
        title: "Development",
        description: "Building your app with modern frameworks.",
        duration: "8-12 weeks"
      },
      {
        title: "Testing",
        description: "Comprehensive testing on multiple devices.",
        duration: "2-3 weeks"
      },
      {
        title: "App Store Launch",
        description: "Submitting and launching your app.",
        duration: "1-2 weeks"
      },
      {
        title: "Maintenance",
        description: "Regular updates and performance monitoring.",
        duration: "Ongoing"
      }
    ],
    technologies: [
      {
        category: "Native",
        items: ["Swift", "Kotlin", "Java", "Objective-C"]
      },
      {
        category: "Cross-Platform",
        items: ["React Native", "Flutter", "Ionic", "Xamarin"]
      },
      {
        category: "Backend",
        items: ["Firebase", "AWS Amplify", "Node.js", "Python"]
      },
      {
        category: "Analytics",
        items: ["Firebase Analytics", "Mixpanel", "AppsFlyer", "Amplitude"]
      }
    ],
    faqs: [
      {
        question: "Native or cross-platform?",
        answer: "We recommend the best approach based on your requirements, budget, and timeline. Cross-platform solutions can be more cost-effective while native apps offer the best performance."
      },
      {
        question: "How long does it take to build an app?",
        answer: "A typical mobile app takes 3-6 months to develop, depending on complexity and features."
      },
      {
        question: "Do you provide app store optimization?",
        answer: "Yes, we help optimize your app listing for better visibility and downloads in the app stores."
      },
      {
        question: "What about app maintenance?",
        answer: "We offer ongoing maintenance packages to keep your app updated, secure, and running smoothly."
      }
    ]
  }
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`${service.color} w-16 h-16 rounded-2xl bg-background/80 flex items-center justify-center mb-8`}>
                <service.icon className="w-8 h-8" />
              </div>
              <GlitchText
                text={service.hero.title}
                className="text-5xl font-bold mb-6"
              />
              <p className="text-xl text-muted-foreground mb-8">
                {service.hero.description}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full h-full min-h-[500px]"
            >
              <SplineViewer />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-muted/10">
        <div className="container">
          <div className="text-center mb-12">
            <GlitchText
              text="Key Benefits"
              className="text-3xl font-bold mb-4"
            />
            <p className="text-muted-foreground">
              Why choose our {service.title.toLowerCase()} services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <HologramCard>
                  <div className="p-6">
                    <div className={`${service.color} w-12 h-12 rounded-lg bg-background/80 flex items-center justify-center mb-4`}>
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </HologramCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <GlitchText
              text="Our Process"
              className="text-3xl font-bold mb-4"
            />
            <p className="text-muted-foreground">
              How we deliver exceptional {service.title.toLowerCase()} solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <HologramCard>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`${service.color} w-10 h-10 rounded-full bg-background/80 flex items-center justify-center`}>
                        <span className="font-bold">{index + 1}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{step.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </HologramCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-muted/10">
        <div className="container">
          <div className="text-center mb-12">
            <GlitchText
              text="Technologies"
              className="text-3xl font-bold mb-4"
            />
            <p className="text-muted-foreground">
              Tools and technologies we use
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <HologramCard>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">{tech.category}</h3>
                    <div className="space-y-2">
                      {tech.items.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </HologramCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <GlitchText
              text="Frequently Asked Questions"
              className="text-3xl font-bold mb-4"
            />
            <p className="text-muted-foreground">
              Common questions about our {service.title.toLowerCase()} services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {service.faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <HologramCard>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </HologramCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <NeonGlow>
            <div className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our {service.title.toLowerCase()} services can help transform your business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </NeonGlow>
        </div>
      </section>
    </main>
  );
}