import Image from "next/image";
import React from "react";

const feedbacks = [
  {
    id: 1,
    name: "Kristin Watson",
    image: "https://i.ibb.co/9nWQPgJ/Image-10.png",
    title: "Duis at ullamcorper nulla, eu dictum eros.",
    time: "2 min ago",
  },
  {
    id: 2,
    name: "Kristin Watson",
    image: "https://i.ibb.co/4W0s1GM/Group.png",
    title:
      "Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to go to seed; in long periods of heat some kind of shade may be helpful. Watch out for snails as they will harm the plants.",
    time: "2 min ago",
  },
  {
    id: 3,
    name: "Kristin Watson",
    image: "https://i.ibb.co/Y78djP6/Image-11.png",
    title:
      "Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.",
    time: "30 Apr, 2021",
  },
  {
    id: 4,
    name: "Kristin Watson",
    image: "https://i.ibb.co/ByXdm61/Image-13.png",
    title:
      "Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.",
    time: "30 Apr, 2021",
  },
];

const CustomerFeedback = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Customer Feedback</h1>
      <div className="space-y-6">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="flex items-start bg-white shadow-md rounded-lg p-4 space-x-4"
          >
            {/* Image Section */}
            <div className="flex-shrink-0 w-20 h-20">
              <Image
                src={feedback.image}
                alt={feedback.name}
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>

            {/* Content Section */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{feedback.name}</h2>
              <p className="text-gray-600 mt-2">{feedback.title}</p>
            </div>

            {/* Time Section */}
            <div className="text-sm text-gray-500 self-start">
              {feedback.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
