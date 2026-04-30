export const qurbaniTipsData = [
    {
        id: 1,
        title: "Pre-Qurbani Preparation",
        description: "Proper preparation before Qurbani ensures a smooth and blessed sacrifice experience.",
        icon: "🕌",
        tips: [
            "Choose a healthy animal with no physical defects (blindness, lameness, or illness)",
            "Ensure the animal meets the minimum age requirement (1 year for goats/sheep, 2 years for cows)",
            "Arrange for a clean and appropriate slaughter place beforehand",
            "Keep your intentions pure and remember the spiritual significance of Qurbani"
        ]
    },
    {
        id: 2,
        title: "During Qurbani - Best Practices",
        description: "Follow these essential practices while performing the sacrifice for maximum reward.",
        icon: "🔪",
        tips: [
            "Use a sharp knife for a swift and humane slaughter",
            "Face the animal towards Qibla before sacrifice",
            "Recite 'Bismillah, Allahu Akbar' before slaughtering",
            "Ensure the knife is hidden from the animal until the moment of slaughter"
        ]
    },
    {
        id: 3,
        title: "Meat Distribution Guidelines",
        description: "Proper distribution of Qurbani meat following Islamic principles.",
        icon: "🍖",
        tips: [
            "Divide meat into three equal parts: for yourself, relatives/friends, and the poor/needy",
            "Distribute fresh meat as soon as possible after slaughter",
            "Don't sell the Qurbani meat for money - it must be given as charity",
            "Store meat properly by freezing portions for later use"
        ]
    }
];

export const getAllTips = () => {
    return qurbaniTipsData;
};
