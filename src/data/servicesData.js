import directPrimaryCareImage from "../assets/images/direct-primary-care.webp";
import ivImage from "../assets/images/iv.webp";
import erectileDysfunctionImage from "../assets/images/ed.webp";
import sexualWellnessImage from "../assets/images/sexual-wellness.webp";
import hormoneOptimizationImage from "../assets/images/hormone.webp";
import weightManagementImage from "../assets/images/weight-management.webp";
import peptideTherapyImage from "../assets/images/peptide-therapy.webp";

export const services = [
  {
    slug: "direct-primary-care",
    title: "Direct Primary Care",
    eyebrow: "Everyday healthcare, built around access.",
    image: directPrimaryCareImage,
    imageAlt:
      "Male patient having a relaxed conversation with a primary care provider",
    intro:
      "Direct Primary Care gives men a simpler, more personal way to stay on top of their health without feeling rushed, overlooked, or bounced around the system.",
    problem:
      "Many men delay care because the traditional healthcare experience can feel rushed, impersonal, or difficult to access. Direct Primary Care is designed to make routine care easier, clearer, and more personal.",
    symptoms: [
      "You want easier access to a provider",
      "You are overdue for a physical or preventive visit",
      "You want help reviewing labs or medications",
      "You want longer, more meaningful conversations",
      "You want proactive support instead of reactive care",
    ],
    benefitsTitle: "Primary care built around access, time, and trust.",
    benefits: [
      {
        title: "More direct provider access",
        description:
          "Reach your provider more easily for questions, follow-up, and ongoing guidance.",
      },
      {
        title: "Longer visits and better conversations",
        description:
          "Spend more time discussing symptoms, concerns, and health goals without feeling rushed.",
      },
      {
        title: "Routine care and preventive guidance",
        description:
          "Stay ahead of potential concerns through regular visits, screenings, and personalized prevention planning.",
      },
      {
        title: "Medication and lab review",
        description:
          "Review medications, laboratory results, and health trends with a provider who understands your history.",
      },
      {
        title: "Ongoing support for long-term health",
        description:
          "Build a consistent care relationship focused on prevention, follow-up, and your long-term health goals.",
      },
    ],
    expectations: [
      "A private consultation focused on your health goals",
      "Review of medical history, medications, and concerns",
      "Clear next steps for labs, screenings, or follow-up care",
      "A care plan built around consistency and prevention",
    ],
    whyUHM:
      "Ultimate Health Men was built for men who want healthcare that feels direct, practical, and personal. The goal is to create a relationship where concerns are taken seriously and care is easier to keep up with.",
    faqs: [
      {
        question: "Is Direct Primary Care the same as insurance?",
        answer:
          "No. Direct Primary Care is a care model focused on access, time, and relationship-based healthcare. It is not a replacement for health insurance.",
      },
      {
        question: "Can I use Direct Primary Care for routine health concerns?",
        answer:
          "Yes. It can support routine visits, preventive care, lab review, medication management, and ongoing health conversations.",
      },
      {
        question: "Is this only for men with existing health problems?",
        answer:
          "No. Many men use Direct Primary Care to stay proactive, identify concerns earlier, and maintain better long-term health.",
      },
    ],
    cta: "Start with Direct Primary Care",
  },

  {
    slug: "elective-iv-hydration",
    title: "Elective IV Hydration",
    eyebrow: "Hydration and wellness support.",
    image: ivImage,
    imageAlt:
      "Male patient receiving IV hydration in a modern wellness clinic",
    intro:
      "Elective IV Hydration is designed to support hydration, recovery, and overall wellness through carefully selected fluids and nutrients.",
    problem:
      "Dehydration, fatigue, travel, workouts, and busy schedules can leave men feeling drained. IV hydration may provide supportive wellness care when clinically appropriate.",
    symptoms: [
      "You feel depleted or run down",
      "You want hydration support after travel",
      "You are recovering from intense workouts",
      "You want wellness support for energy and recovery",
      "You want provider-guided hydration options",
    ],
    benefitsTitle: "Provider-guided hydration and recovery support.",
    benefits: [
      {
        title: "Hydration support",
        description:
          "Receive fluids directly through an IV when hydration therapy is appropriate for your health needs.",
      },
      {
        title: "Recovery support",
        description:
          "May support recovery after travel, demanding workouts, or periods of feeling depleted.",
      },
      {
        title: "Convenient wellness option",
        description:
          "Access hydration support in a comfortable clinical setting with professional oversight.",
      },
      {
        title: "Provider-reviewed treatment",
        description:
          "Your health history, medications, symptoms, and goals are reviewed before treatment.",
      },
      {
        title: "Customized approach when appropriate",
        description:
          "Fluids and nutrients may be selected according to your individual needs and wellness goals.",
      },
    ],
    expectations: [
      "Review of your health history and goals",
      "Discussion of whether IV hydration is appropriate",
      "A comfortable treatment experience",
      "Guidance on safety, hydration, and follow-up",
    ],
    whyUHM:
      "At Ultimate Health Men, IV hydration is approached as a medically reviewed wellness service, not a one-size-fits-all shortcut. Your provider helps determine whether treatment fits your health needs.",
    faqs: [
      {
        question: "Is IV hydration right for everyone?",
        answer:
          "No. Your provider will review your health history and determine whether IV hydration is appropriate for you.",
      },
      {
        question: "Can IV hydration help with fatigue?",
        answer:
          "It may support hydration and recovery in some cases, but fatigue can have many causes. A provider review helps determine the right approach.",
      },
      {
        question: "How long does treatment take?",
        answer:
          "Timing may vary depending on the treatment plan. Your provider can explain what to expect before treatment begins.",
      },
    ],
    cta: "Explore IV Hydration",
  },

  {
    slug: "erectile-dysfunction-treatment",
    title: "Erectile Dysfunction Treatment",
    eyebrow: "Confidential care for performance and confidence.",
    image: erectileDysfunctionImage,
    imageAlt:
      "Mature couple enjoying a relaxed and affectionate moment together",
    intro:
      "Erectile dysfunction is common, treatable, and often connected to broader health factors. Our approach is private, respectful, and focused on identifying the right plan for you.",
    problem:
      "ED can affect confidence, relationships, and quality of life. It may also be connected to circulation, hormones, stress, medication, or other health concerns that deserve attention.",
    symptoms: [
      "Difficulty getting or maintaining an erection",
      "Reduced confidence during intimacy",
      "Performance anxiety or stress",
      "Lower sexual satisfaction",
      "Concern that ED may be connected to health changes",
    ],
    benefitsTitle: "Private care focused on confidence and performance.",
    benefits: [
      {
        title: "Private, judgment-free consultation",
        description:
          "Discuss sensitive concerns in a confidential setting where you can speak openly and comfortably.",
      },
      {
        title: "Evaluation of possible contributing factors",
        description:
          "Explore whether circulation, hormones, medications, stress, or other health factors may be involved.",
      },
      {
        title: "Personalized treatment options",
        description:
          "Review treatment choices based on your symptoms, medical history, goals, and preferences.",
      },
      {
        title: "Support for confidence and performance",
        description:
          "Receive care intended to address both physical performance and the confidence concerns that may accompany ED.",
      },
      {
        title: "Attention to broader men’s health concerns",
        description:
          "Consider related cardiovascular, hormonal, metabolic, and lifestyle concerns as part of your evaluation.",
      },
    ],
    expectations: [
      "Confidential discussion of symptoms and goals",
      "Medical history and medication review",
      "Consideration of hormones, circulation, stress, and lifestyle",
      "A treatment plan based on your needs",
    ],
    whyUHM:
      "Ultimate Health Men provides a private setting where men can talk openly about ED without embarrassment or rushed conversations. Care is focused on both performance and overall health.",
    faqs: [
      {
        question: "Is erectile dysfunction common?",
        answer:
          "Yes. ED is common and can affect men at different ages for many reasons.",
      },
      {
        question: "Can ED be related to other health issues?",
        answer:
          "Yes. ED can sometimes be connected to cardiovascular health, hormones, stress, medications, or other factors.",
      },
      {
        question: "Is the visit confidential?",
        answer:
          "Yes. Visits are private, respectful, and focused on helping you understand your options.",
      },
    ],
    cta: "Get ED Support",
  },

  {
    slug: "sexual-wellness",
    title: "Sexual Wellness",
    eyebrow: "Support for confidence, performance, and health.",
    image: sexualWellnessImage,
    imageAlt:
      "Mature couple sharing a warm and supportive moment together",
    intro:
      "Sexual wellness care helps men address concerns that are often ignored, rushed, or difficult to talk about in traditional healthcare settings.",
    problem:
      "Sexual health is part of overall health, but many men avoid bringing up concerns. A focused visit can help identify causes, reduce uncertainty, and create a practical care plan.",
    symptoms: [
      "Low libido",
      "Performance concerns",
      "Reduced stamina or confidence",
      "Questions about sexual health",
      "Desire for preventive screening or guidance",
    ],
    benefitsTitle: "Respectful support for sexual health and confidence.",
    benefits: [
      {
        title: "Private conversation",
        description:
          "Discuss sexual health concerns in a confidential setting without embarrassment or judgment.",
      },
      {
        title: "Support for libido and performance concerns",
        description:
          "Explore possible causes of changes in desire, stamina, arousal, or sexual performance.",
      },
      {
        title: "Preventive sexual health guidance",
        description:
          "Receive personalized guidance about screening, risk factors, and maintaining long-term sexual health.",
      },
      {
        title: "Personalized treatment planning",
        description:
          "Review care options based on your symptoms, medical history, preferences, and goals.",
      },
      {
        title: "Care without judgment",
        description:
          "Ask questions openly and receive practical, respectful guidance from a provider focused on men’s health.",
      },
    ],
    expectations: [
      "A confidential consultation",
      "Review of symptoms, goals, and health history",
      "Discussion of possible contributing factors",
      "Clear recommendations based on your needs",
    ],
    whyUHM:
      "Ultimate Health Men creates space for direct, respectful conversations about sexual health. The focus is practical care, confidence, and helping men feel heard.",
    faqs: [
      {
        question: "What does sexual wellness care include?",
        answer:
          "It may include support for libido, performance, confidence, preventive screening, and sexual health questions.",
      },
      {
        question: "Do I need to have a specific diagnosis?",
        answer:
          "No. You can schedule a visit to discuss concerns, ask questions, and better understand your options.",
      },
      {
        question: "Will the appointment be private?",
        answer:
          "Yes. Sexual wellness visits are confidential and judgment-free.",
      },
    ],
    cta: "Talk About Sexual Wellness",
  },

  {
    slug: "hormone-optimization",
    title: "Hormone Optimization",
    eyebrow: "A data-informed approach to men’s vitality.",
    image: hormoneOptimizationImage,
    imageAlt:
      "Active middle-aged man enjoying an energetic outdoor lifestyle",
    intro:
      "Hormone optimization focuses on identifying whether hormone imbalance may be contributing to changes in energy, mood, strength, libido, or overall wellness.",
    problem:
      "Changes in energy, motivation, body composition, mood, and libido may be connected to hormone changes. Testing and clinical review can help determine whether treatment is appropriate.",
    symptoms: [
      "Low energy or fatigue",
      "Reduced libido",
      "Loss of strength or motivation",
      "Mood changes",
      "Weight gain or body composition changes",
    ],
    benefitsTitle: "Hormone care guided by symptoms, labs, and safety.",
    benefits: [
      {
        title: "Lab-informed evaluation",
        description:
          "Use laboratory testing alongside your symptoms and health history to better understand possible hormone concerns.",
      },
      {
        title: "Personalized hormone review",
        description:
          "Review your results with a provider who can explain what they mean in the context of your overall health.",
      },
      {
        title: "Support for energy, vitality, and wellness",
        description:
          "Address symptoms such as low energy, reduced motivation, libido changes, and declining vitality when clinically appropriate.",
      },
      {
        title: "Clear discussion of treatment options",
        description:
          "Understand available options, potential benefits, risks, and realistic expectations before making decisions.",
      },
      {
        title: "Ongoing monitoring when appropriate",
        description:
          "Receive follow-up testing and clinical monitoring when hormone treatment becomes part of your care plan.",
      },
    ],
    expectations: [
      "Review of symptoms and health history",
      "Lab testing or lab review",
      "Discussion of risks, benefits, and options",
      "Personalized plan based on results",
    ],
    whyUHM:
      "Ultimate Health Men uses a careful, data-informed approach to hormone care. Treatment decisions are based on symptoms, labs, safety, and your overall health goals.",
    faqs: [
      {
        question: "Do I need lab work?",
        answer:
          "Usually, yes. Lab testing helps your provider understand whether hormone imbalance may be contributing to your symptoms.",
      },
      {
        question: "Is hormone treatment right for every man?",
        answer:
          "No. Treatment depends on symptoms, lab results, medical history, and clinical judgment.",
      },
      {
        question: "What symptoms may be hormone-related?",
        answer:
          "Fatigue, low libido, reduced strength, weight changes, low motivation, and mood changes may be related, but they can also have other causes.",
      },
    ],
    cta: "Review Hormone Options",
  },

  {
    slug: "weight-management",
    title: "Weight Management",
    eyebrow: "Practical support for sustainable results.",
    image: weightManagementImage,
    imageAlt:
      "Middle-aged man preparing a healthy meal as part of a weight-management plan",
    intro:
      "Weight management care helps men approach weight loss with medical guidance, realistic planning, and support that fits their lifestyle.",
    problem:
      "Weight loss can be frustrating when men are trying to manage appetite, energy, hormones, stress, and busy schedules on their own. Medical guidance can make the process safer and clearer.",
    symptoms: [
      "Difficulty losing weight",
      "Weight regain after past attempts",
      "Appetite control challenges",
      "Low energy or motivation",
      "Concern about metabolic health",
    ],
    benefitsTitle: "Medical guidance for realistic, sustainable progress.",
    benefits: [
      {
        title: "Medically guided weight loss plan",
        description:
          "Build a structured plan based on your health history, goals, lifestyle, and clinical needs.",
      },
      {
        title: "Support for appetite and lifestyle change",
        description:
          "Address hunger, eating patterns, movement, sleep, and other factors that influence long-term progress.",
      },
      {
        title: "Lab review when needed",
        description:
          "Evaluate metabolic, hormonal, or other health factors that may be affecting your ability to lose weight.",
      },
      {
        title: "Clear goals and follow-up",
        description:
          "Set realistic milestones and review progress through ongoing appointments and adjustments.",
      },
      {
        title: "Personalized approach to long-term progress",
        description:
          "Use recommendations designed around your body, schedule, preferences, and individual challenges.",
      },
    ],
    expectations: [
      "Review of weight history and goals",
      "Discussion of lifestyle, appetite, and health factors",
      "Lab review or testing when appropriate",
      "A plan tailored to your body and lifestyle",
    ],
    whyUHM:
      "Ultimate Health Men helps men approach weight management with structure, medical oversight, and realistic planning instead of generic advice or crash dieting.",
    faqs: [
      {
        question: "Is this only for medication-based weight loss?",
        answer:
          "No. Weight management may include lifestyle planning, lab review, medical guidance, and treatment options when appropriate.",
      },
      {
        question: "Will I need labs?",
        answer:
          "Labs may be recommended depending on your health history, goals, and symptoms.",
      },
      {
        question: "Can this help if I have tried losing weight before?",
        answer:
          "Yes. Many patients seek support after previous attempts because a medically guided plan can provide more clarity and accountability.",
      },
    ],
    cta: "Start Weight Management",
  },

  {
    slug: "peptide-therapy",
    title: "Peptide Therapy",
    eyebrow: "Targeted wellness support.",
    image: peptideTherapyImage,
    imageAlt:
      "Active man stretching outdoors as part of a recovery and wellness routine",
    intro:
      "Peptide therapy may support specific wellness goals when clinically appropriate and supervised by a qualified provider.",
    problem:
      "Men interested in recovery, body composition, performance, or age-related wellness often encounter confusing information about peptides. Provider supervision helps determine whether therapy is appropriate and safe.",
    symptoms: [
      "Interest in recovery support",
      "Performance or wellness goals",
      "Body composition concerns",
      "Age-related health goals",
      "Desire for medically reviewed options",
    ],
    benefitsTitle: "Personalized peptide care with medical oversight.",
    benefits: [
      {
        title: "Provider-guided evaluation",
        description:
          "Review your health history, medications, symptoms, and goals before peptide therapy is considered.",
      },
      {
        title: "Personalized wellness planning",
        description:
          "Match recommendations to your specific recovery, body composition, performance, or wellness goals.",
      },
      {
        title: "Support for specific goals when appropriate",
        description:
          "Explore whether peptide therapy may complement a broader plan for recovery, vitality, or healthy aging.",
      },
      {
        title: "Safety-focused review",
        description:
          "Discuss potential risks, limitations, interactions, and realistic expectations before beginning treatment.",
      },
      {
        title: "Clear expectations before treatment",
        description:
          "Understand how treatment may be administered, monitored, and adjusted based on your response.",
      },
    ],
    expectations: [
      "Review of your health history and goals",
      "Discussion of whether peptide therapy fits your needs",
      "Clear explanation of potential risks and benefits",
      "A personalized plan only when clinically appropriate",
    ],
    whyUHM:
      "Ultimate Health Men approaches peptide therapy with medical oversight, realistic expectations, and individualized review. The goal is safe, appropriate care rather than trend-driven treatment.",
    faqs: [
      {
        question: "Is peptide therapy right for everyone?",
        answer:
          "No. Your provider will review your health history and goals to determine whether peptide therapy is appropriate.",
      },
      {
        question: "What goals can peptide therapy support?",
        answer:
          "Depending on the plan, it may be considered for recovery, wellness, body composition, performance, or age-related health goals.",
      },
      {
        question: "Will I receive treatment at the first visit?",
        answer:
          "Not always. Your provider will first determine whether treatment is safe and appropriate for you.",
      },
    ],
    cta: "Ask About Peptide Therapy",
  },
];