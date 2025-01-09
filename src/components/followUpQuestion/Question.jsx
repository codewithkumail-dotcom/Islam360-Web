import React from "react";

function FollowUpQuestions() {
  const questions = [
    "اگر ایک شخص اپنی بیوی کو تین طلاقیں دے دے تو کیا ہوتا ہے؟",
    "حج کن حالات میں فرض ہوتا ہے؟",
    "والدین کے ساتھ بدسلوکی کا انجام کیا ہے؟",
    "نماز چھوڑنے والے اسلامی تعلیمات کیا ہیں؟",
    "روزے رکھنے کے جسمانی فوائد کیا ہیں؟",
    "حضورﷺ پر درود بھیجنے کا انعام کیا ہے؟",
    "حج کی فرضیت کے لیے کن سے شرائط ضروری ہیں؟",
    "اگر ایک شخص اپنی بیوی کو تین طلاقیں دے دے تو کیا ہوتا ہے؟",
  ];

  return (
    <div className="p-6 bg-black rounded-lg shadow-lg bg">
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        فالو اپ سوال
      </h2>
      <div>
        {questions.map((question, index) => (
          <button
            key={index}
            className="bg-[rgba(251,248,239,1)] text-gray-800 p-2 rounded mb-2 w-full text-left"
>
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FollowUpQuestions;
