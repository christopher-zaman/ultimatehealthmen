import { Link } from "react-router-dom";

const content = {
  trt: {
    eyebrow: "Not sure if low testosterone is the cause?",
    text:
      "Symptoms like fatigue, low libido, weight gain, reduced strength, and low motivation can have several possible causes. Start with a comprehensive men’s hormone and health evaluation before assuming testosterone therapy is the answer.",
  },

  primaryCare: {
    eyebrow: "Feeling off but not sure why?",
    text:
      "Fatigue, weight changes, low energy, libido changes, and other symptoms may be related to hormones, metabolic health, sleep, or other medical concerns. Our men’s hormone and health evaluation is designed to help identify what may be contributing.",
  },

  weightManagement: {
    eyebrow: "Could something else be affecting your weight?",
    text:
      "Difficulty losing weight can sometimes overlap with hormonal, metabolic, sleep, and other health concerns. A comprehensive men’s hormone and health evaluation can help provide a clearer picture before deciding on treatment.",
  },
};

function HormoneEvaluationCallout({ variant }) {
  const item = content[variant];

  if (!item) {
    return null;
  }

  return (
    <section className="px-6 py-10">
      <div className="mx-auto max-w-5xl rounded-3xl border border-black/5 bg-white p-7 shadow-sm sm:p-9">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#94c742]">
          Men’s Hormone & Health Evaluation
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0f1740] sm:text-3xl">
          {item.eyebrow}
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-[#5f6368]">
          {item.text}
        </p>

        <Link
          to="/mens-hormone-testing-winter-haven"
          className="mt-6 inline-flex font-semibold text-[#0f1740] underline decoration-[#94c742] decoration-2 underline-offset-4"
        >
          Learn about men’s hormone testing in Winter Haven
        </Link>
      </div>
    </section>
  );
}

export default HormoneEvaluationCallout;