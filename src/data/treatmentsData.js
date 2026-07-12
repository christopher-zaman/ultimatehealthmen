import trtImage from "../assets/images/treatments/trt.webp";
import semaglutideImage from "../assets/images/treatments/semaglutide.webp";
import bpcImage from "../assets/images/treatments/bpc.webp";
import weightImage from "../assets/images/treatments/weight-management.webp";
import fatImage from "../assets/images/treatments/fat-burner.webp";
import prescriptionImage from "../assets/images/treatments/prescription-weight-loss.webp";
import ptImage from "../assets/images/treatments/pt-141.webp";
import tesamorelinImage from "../assets/images/treatments/tesamorelin.webp";
import sermorelinImage from "../assets/images/treatments/sermorelin.webp";
import ipamorelinImage from "../assets/images/treatments/ipamorelin.webp";
import almaduoImage from "../assets/logos/almaduo.webp";
import pshotImage from "../assets/images/treatments/p-shot.webp";
import trimixImage from "../assets/images/treatments/trimix.webp";
import edImage from "../assets/images/treatments/erectile-dysfunction.webp";
import ivImage from "../assets/images/treatments/iv-hydration.webp";

export const treatments = [
  {
    slug: "semaglutide",
    title: "Semaglutide",
    category: "Weight Management",
    serviceSlug: "weight-management",
    intro:
      "Semaglutide is a medically supervised treatment that may support weight loss by helping regulate appetite, fullness, and blood sugar balance.",
    image: semaglutideImage,
    imageAlt:
      "Middle-aged man preparing a nutritious meal in a bright kitchen",
    price: "$100/week",
    benefitsTitle:
      "Medical support for sustainable weight-management progress.",
    benefits: [
      {
        title: "Supports weight loss",
        description:
          "May support gradual weight loss when combined with nutrition, movement, and ongoing medical supervision.",
      },
      {
        title: "Helps reduce appetite",
        description:
          "May reduce hunger signals and make it easier to follow a structured eating plan.",
      },
      {
        title: "Promotes fullness",
        description:
          "May help you feel satisfied sooner and remain full longer after meals.",
      },
      {
        title: "Supports blood sugar balance",
        description:
          "May support glucose regulation as part of a medically supervised treatment plan.",
      },
    ],
  },

  {
    slug: "tirzepatide",
    title: "Tirzepatide",
    category: "Weight Management",
    serviceSlug: "weight-management",
    intro:
      "Tirzepatide is an advanced treatment option that may support weight loss and metabolic health by targeting GLP-1 and GIP pathways.",
    image: weightImage,
    imageAlt:
      "Active middle-aged man hiking outdoors as part of a healthy lifestyle",
    price: "$150/week",
    benefitsTitle:
      "Advanced support for weight management and metabolic health.",
    benefits: [
      {
        title: "Advanced weight-loss support",
        description:
          "Targets both GLP-1 and GIP pathways to support medically supervised weight-management progress.",
      },
      {
        title: "Helps regulate appetite",
        description:
          "May reduce hunger and support greater control over portions and eating patterns.",
      },
      {
        title: "Supports glucose control",
        description:
          "May support healthy blood sugar regulation when used under medical supervision.",
      },
      {
        title: "May support long-term metabolic health",
        description:
          "Can be incorporated into a broader plan focused on nutrition, activity, weight, and metabolic wellness.",
      },
    ],
  },

  {
    slug: "lipotropic-fat-burner",
    title: "Lipotropic Fat Burner Add-On",
    category: "Weight Management",
    serviceSlug: "weight-management",
    intro:
      "Lipotropic injections combine nutrients such as B vitamins and amino acids to support energy, metabolism, liver health, and fat metabolism.",
    image: fatImage,
    imageAlt:
      "Energetic middle-aged man preparing for a morning workout",
    benefitsTitle:
      "Nutritional support for energy and fat metabolism.",
    benefits: [
      {
        title: "Supports fat metabolism",
        description:
          "Includes nutrients commonly involved in the body's normal processing and transport of fats.",
      },
      {
        title: "Supports energy and mood",
        description:
          "B vitamins may help support normal energy production and overall wellness.",
      },
      {
        title: "Supports liver health",
        description:
          "Lipotropic nutrients may support normal liver function and fat processing.",
      },
      {
        title: "May support focus and clarity",
        description:
          "Selected nutrients may complement a broader wellness plan focused on energy and daily performance.",
      },
    ],
  },

  {
    slug: "prescription-weight-loss-medications",
    title: "Prescription Weight Loss Medications",
    category: "Weight Management",
    serviceSlug: "weight-management",
    intro:
      "For patients who prefer oral medications, Ultimate Health Men offers medically supervised prescription weight loss options.",
    image: prescriptionImage,
    imageAlt:
      "Male patient discussing prescription weight-loss options with a healthcare provider",
    benefitsTitle:
      "Medically supervised oral options for weight management.",
    benefits: [
      {
        title: "Oral medication options",
        description:
          "Some patients may prefer oral prescription options rather than injectable treatment.",
      },
      {
        title: "May help reduce appetite",
        description:
          "Certain medications may help reduce hunger as part of a broader weight-management plan.",
      },
      {
        title: "May help manage cravings",
        description:
          "Treatment may help some patients gain greater control over recurring food cravings.",
      },
      {
        title: "Convenient access when appropriate",
        description:
          "Eligible medications may be dispensed directly from the office when clinically appropriate.",
      },
    ],
  },

  {
    slug: "testosterone-replacement-therapy",
    title: "Testosterone Replacement Therapy",
    category: "Hormone Optimization",
    serviceSlug: "hormone-optimization",
    intro:
      "TRT may help men experiencing symptoms related to low testosterone, including low energy, reduced drive, stubborn weight changes, and decreased vitality.",
    image: trtImage,
    imageAlt:
      "Energetic middle-aged father enjoying active time outdoors with his family",
    benefitsTitle:
      "Personalized hormone support based on symptoms and labs.",
    benefits: [
      {
        title: "Supports energy and vitality",
        description:
          "May help address low energy and reduced vitality when symptoms are connected to low testosterone.",
      },
      {
        title: "May improve strength and performance",
        description:
          "May support strength, body composition, and physical performance when clinically appropriate.",
      },
      {
        title: "Personalized using lab results",
        description:
          "Treatment decisions are guided by symptoms, laboratory results, health history, and ongoing monitoring.",
      },
      {
        title: "Multiple treatment options",
        description:
          "Depending on your needs, treatment may include pellets, topical creams, or injections.",
      },
    ],
  },

  {
    slug: "pt-141",
    title: "PT-141",
    category: "Sexual Wellness",
    serviceSlug: "sexual-wellness",
    intro:
      "PT-141, also known as Bremelanotide, supports sexual health and libido through the nervous system and arousal pathways.",
    image: ptImage,
    imageAlt:
      "Mature couple sharing a relaxed and affectionate moment together",
    benefitsTitle:
      "A different approach to libido and arousal support.",
    benefits: [
      {
        title: "Supports libido",
        description:
          "May support sexual desire for appropriate patients after medical evaluation.",
      },
      {
        title: "May help with arousal",
        description:
          "Works through nervous-system pathways involved in sexual interest and arousal.",
      },
      {
        title: "May support confidence and intimacy",
        description:
          "Addressing sexual wellness concerns may help improve confidence and connection.",
      },
      {
        title: "Works differently than traditional ED medications",
        description:
          "PT-141 acts through arousal pathways rather than relying only on increased blood flow.",
      },
    ],
  },

  {
    slug: "bpc-157",
    title: "BPC-157",
    category: "Peptide Therapy",
    serviceSlug: "peptide-therapy",
    intro:
      "BPC-157 is a peptide therapy option commonly associated with healing, recovery, inflammation support, and tissue repair.",
    image: bpcImage,
    imageAlt:
      "Active middle-aged man stretching outdoors after exercise",
    benefitsTitle:
      "Targeted support for recovery and tissue health.",
    benefits: [
      {
        title: "Supports recovery",
        description:
          "May support the body's recovery processes following physical activity or strain.",
      },
      {
        title: "May support inflammation management",
        description:
          "May complement a broader recovery plan focused on mobility, rest, and physical wellness.",
      },
      {
        title: "Supports tissue-recovery goals",
        description:
          "Is commonly discussed in relation to muscles, tendons, ligaments, and other soft tissues.",
      },
      {
        title: "May support joint or workout recovery",
        description:
          "May be considered for men managing demanding workouts or recurring recovery concerns.",
      },
    ],
  },

  {
    slug: "tesamorelin",
    title: "Tesamorelin",
    category: "Peptide Therapy",
    serviceSlug: "peptide-therapy",
    intro:
      "Tesamorelin may support natural growth hormone stimulation, fat loss, energy, sleep, and overall wellness goals.",
    image: tesamorelinImage,
    imageAlt:
      "Healthy middle-aged man starting his morning feeling refreshed",
    benefitsTitle:
      "Support for body composition, energy, and wellness goals.",
    benefits: [
      {
        title: "Supports fat-loss goals",
        description:
          "May support body-composition goals when used as part of a medically supervised plan.",
      },
      {
        title: "Stimulates growth-hormone pathways",
        description:
          "Works by encouraging the body's natural growth-hormone signaling pathways.",
      },
      {
        title: "May support sleep and energy",
        description:
          "Some patients explore treatment as part of a broader plan for sleep quality and daily energy.",
      },
      {
        title: "May support cognitive wellness",
        description:
          "May complement a wellness plan focused on healthy aging and overall quality of life.",
      },
    ],
  },

  {
    slug: "sermorelin",
    title: "Sermorelin",
    category: "Peptide Therapy",
    serviceSlug: "peptide-therapy",
    intro:
      "Sermorelin supports natural growth hormone optimization and may help with sleep, recovery, metabolism, and vitality.",
    image: sermorelinImage,
    imageAlt:
      "Middle-aged man sleeping comfortably in a calm bedroom",
    benefitsTitle:
      "Natural growth-hormone support for sleep and recovery.",
    benefits: [
      {
        title: "Supports better sleep",
        description:
          "May support sleep quality as part of a broader wellness and recovery plan.",
      },
      {
        title: "May improve recovery",
        description:
          "May help support normal recovery following exercise and everyday physical demands.",
      },
      {
        title: "Supports metabolism",
        description:
          "May complement nutrition and activity goals focused on metabolic wellness.",
      },
      {
        title: "May support vitality and healthy aging",
        description:
          "May be considered for goals involving energy, recovery, and age-related wellness.",
      },
    ],
  },

  {
    slug: "ipamorelin",
    title: "Ipamorelin",
    category: "Peptide Therapy",
    serviceSlug: "peptide-therapy",
    intro:
      "Ipamorelin may support natural growth hormone production, lean muscle, recovery, energy, and tissue repair.",
    image: ipamorelinImage,
    imageAlt:
      "Fit middle-aged man completing a controlled strength-training workout",
    benefitsTitle:
      "Recovery and performance support for active men.",
    benefits: [
      {
        title: "Supports muscle recovery",
        description:
          "May support recovery following strength training, exercise, and other physical activity.",
      },
      {
        title: "May support lean muscle goals",
        description:
          "May complement resistance training, nutrition, and medically supervised body-composition goals.",
      },
      {
        title: "Supports tissue-recovery goals",
        description:
          "May be considered as part of a broader plan focused on physical recovery and wellness.",
      },
      {
        title: "May improve energy and recovery",
        description:
          "May support overall vitality and the ability to recover between periods of activity.",
      },
    ],
  },

  {
    slug: "alma-duo-shockwave-therapy",
    title: "ALMA Duo Shockwave Therapy",
    category: "Erectile Dysfunction Treatment",
    serviceSlug: "erectile-dysfunction-treatment",
    intro:
      "ALMA Duo Shockwave Therapy is a non-invasive treatment option designed to support blood flow, performance, and confidence.",
    image: almaduoImage,
    imageAlt:
      "Modern non-invasive treatment room in a men's wellness clinic",
    benefitsTitle:
      "Non-invasive support for circulation and performance.",
    benefits: [
      {
        title: "Non-invasive treatment",
        description:
          "Treatment is performed without surgery, incisions, or injectable medication.",
      },
      {
        title: "No surgery",
        description:
          "Provides an option for appropriate patients who want to explore non-surgical ED care.",
      },
      {
        title: "Minimal downtime",
        description:
          "Patients can generally return to normal daily activities following treatment.",
      },
      {
        title: "Supports blood flow and performance",
        description:
          "Uses focused energy intended to support circulation and erectile function.",
      },
    ],
  },

  {
    slug: "p-shot",
    title: "P-Shot",
    category: "Erectile Dysfunction Treatment",
    serviceSlug: "erectile-dysfunction-treatment",
    intro:
      "The P-Shot uses the body's natural healing response to support blood flow, sensitivity, stamina, and sexual performance.",
    image: pshotImage,
    imageAlt:
      "Confident mature couple enjoying time together outdoors",
    benefitsTitle:
      "Regenerative support for performance and sensitivity.",
    benefits: [
      {
        title: "Supports blood flow",
        description:
          "Uses platelet-rich plasma as part of a treatment intended to support circulation and erectile function.",
      },
      {
        title: "May improve sensitivity",
        description:
          "May support sensitivity and responsiveness for appropriate patients.",
      },
      {
        title: "May support stamina",
        description:
          "May complement a broader plan focused on sexual performance and confidence.",
      },
      {
        title: "No surgery or major downtime",
        description:
          "Offers a minimally invasive option without a surgical procedure or lengthy recovery period.",
      },
    ],
  },

  {
    slug: "trimix-injections",
    title: "TriMix Injections",
    category: "Erectile Dysfunction Treatment",
    serviceSlug: "erectile-dysfunction-treatment",
    intro:
      "TriMix injections are a fast-acting ED treatment option designed to help men achieve stronger, more reliable results when needed.",
    image: trimixImage,
    imageAlt:
      "Mature couple enjoying a relaxed evening together at home",
    benefitsTitle:
      "Fast-acting, personalized support for erectile function.",
    benefits: [
      {
        title: "Fast acting",
        description:
          "TriMix is designed to act relatively quickly when used according to your provider's instructions.",
      },
      {
        title: "Reliable option for ED",
        description:
          "May be considered when oral medications have not provided adequate results.",
      },
      {
        title: "Personalized dosing",
        description:
          "Your provider determines an appropriate dose based on your response, health history, and treatment goals.",
      },
      {
        title: "May support stronger, longer-lasting results",
        description:
          "May help appropriate patients achieve more dependable erectile function when needed.",
      },
    ],
  },

  {
    slug: "ed-prescription-medications",
    title: "ED Prescription Medications",
    category: "Sexual Wellness",
    serviceSlug: "sexual-wellness",
    intro:
      "Ultimate Health Men provides medically supervised ED prescription options such as Sildenafil, Tadalafil, and Vardenafil when appropriate.",
    image: edImage,
    imageAlt:
      "Male patient having a private consultation with a healthcare provider",
    benefitsTitle:
      "Discreet, medically supervised prescription options.",
    benefits: [
      {
        title: "Medically supervised",
        description:
          "Your provider reviews your health history, medications, symptoms, and potential risk factors.",
      },
      {
        title: "Supports blood flow",
        description:
          "Common ED medications work by supporting the blood-flow response involved in erectile function.",
      },
      {
        title: "Flexible treatment options",
        description:
          "Different medications and dosing schedules may be considered based on your needs and preferences.",
      },
      {
        title: "Includes commonly prescribed options",
        description:
          "Available options may include sildenafil, tadalafil, or vardenafil when clinically appropriate.",
      },
    ],
  },

  {
    slug: "iv-hydration-treatment",
    title: "IV Hydration Treatment",
    category: "Elective IV Hydration",
    serviceSlug: "elective-iv-hydration",
    intro:
      "IV hydration delivers fluids, vitamins, and nutrients directly into the bloodstream for efficient hydration and wellness support.",
    image: ivImage,
    imageAlt:
      "Male patient receiving IV hydration in a modern wellness clinic",
    benefitsTitle:
      "Efficient hydration with professional oversight.",
    benefits: [
      {
        title: "Rapid hydration",
        description:
          "Delivers fluids directly into the bloodstream when IV hydration is clinically appropriate.",
      },
      {
        title: "Efficient nutrient delivery",
        description:
          "Selected nutrients may be included based on the treatment plan and your individual wellness goals.",
      },
      {
        title: "Supports energy",
        description:
          "May help support overall wellness when low energy is related to hydration or nutrient needs.",
      },
      {
        title: "May support recovery and wellness",
        description:
          "May be considered following travel, demanding activity, or periods of feeling depleted.",
      },
    ],
  },

  {
    slug: "direct-primary-care",
    title: "Direct Primary Care",
    category: "Direct Primary Care",
    serviceSlug: "direct-primary-care",
    intro:
      "Direct Primary Care gives men simple, transparent access to primary care without copays, surprise fees, or insurance friction.",
    price: "$99/month",
    benefitsTitle:
      "Simple access to relationship-based primary care.",
    benefits: [
      {
        title: "Direct access to your provider",
        description:
          "Communicate more easily with a provider who knows your history, concerns, and health goals.",
      },
      {
        title: "Unlimited office visits",
        description:
          "Schedule visits based on your health needs without paying a separate copay for each appointment.",
      },
      {
        title: "Telehealth options",
        description:
          "Use remote visits when appropriate for convenient follow-up and ongoing care.",
      },
      {
        title: "No insurance required",
        description:
          "Access the membership-based care model without billing routine visits through insurance.",
      },
    ],
  },
];