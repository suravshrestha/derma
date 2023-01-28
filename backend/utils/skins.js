const skins = [
  {
    skinType: "Atopic dermatitis (Eczema)",
    symptoms: [
      "Dry, cracked skin",
      "Itchiness",
      "Rash on swollen skin that varies in color depending on your skin color",
      "Small, raised bumps, on brown or Black skin",
      "Oozing and crusting",
      "Thickened skin",
      "Darkening of the skin around the eyes",
      "Raw, sensitive skin from scratching",
    ],
    howCommon:
      "Most common skin disease in children, affecting approximately 15% to 20% of children and 1% to 3% of adults",
    treatments: [
      "Avoid scratching the rash or skin",
      "Relieve the itch by using a moisturizer or topical steroids. Take antihistamines to reduce severe itching",
      "Keep your fingernails cut short. Consider light gloves if nighttime scratching is a problem",
      "Lubricate or moisturize the skin two to three times a day using ointments such as petroleum jelly. Moisturizers should be free of alcohol, scents, dyes, fragrances, and other skin-irritating chemicals. A humidifier in the home also can help",
    ],
    duration: "Lifelong",
  },
  {
    skinType: "Basal cell carcinoma",
    symptoms: [
      "A brown, black or blue lesion — or a lesion with dark spots — with a slightly raised, translucent border",
      "A flat, scaly patch with a raised edge. Over time, these patches can grow quite large",
      "A white, waxy, scar-like lesion without a clearly defined border",
    ],
    howCommon: "Quite common",
    treatments: [
      "Surgery to remove all of the cancer and some of the healthy tissue around it",
    ],
    duration: "Average of 5 years",
  },
  {
    skinType: "Benign Keratosis",
    symptoms: [
      "A round or oval-shaped waxy or rough bump, typically on the face, chest, a shoulder or the back",
      "A flat growth or a slightly raised bump with a scaly surface, with a characteristic 'pasted on' look",
      "Varied size, from very small to more than 1 inch (2.5 centimeters) across",
      "Varied number, ranging from a single growth to multiple growths",
      "Very small growths clustered around the eyes or elsewhere on the face, sometimes called flesh moles or dermatosis papulosa nigra, common on Black or brown skin",
      "Varied in color, ranging from light tan to brown or black",
      "Itchiness",
    ],
    howCommon: "Most commong benign skin tumor",
    treatments: [
      "Cryotherapy",
      "Laser Therapy",
      "Prescription Hydrogen Peroxide",
    ],
    duration: "About a month",
  },
  {
    skinType: "Healthy skin",
  },
  {
    skinType: "Eczema",
    symptoms: [
      "Dry, cracked skin",
      "Itchiness",
      "Rash on swollen skin that varies in color depending on your skin color",
      "Small, raised bumps, on brown or Black skin",
      "Oozing and crusting",
      "Thickened skin",
      "Darkening of the skin around the eyes",
      "Raw, sensitive skin from scratching",
    ],
    howCommon:
      "Most common skin disease in children, affecting approximately 15% to 20% of children and 1% to 3% of adults",
    treatments: [
      "Avoid scratching the rash or skin",
      "Relieve the itch by using a moisturizer or topical steroids. Take antihistamines to reduce severe itching",
      "Keep your fingernails cut short. Consider light gloves if nighttime scratching is a problem",
      "Lubricate or moisturize the skin two to three times a day using ointments such as petroleum jelly. Moisturizers should be free of alcohol, scents, dyes, fragrances, and other skin-irritating chemicals. A humidifier in the home also can help",
    ],
    duration: "Lifelong",
  },
  {
    skinType: "Lichen planus",
    symptoms: [
      "Purplish, flat bumps, most often on the inner forearm, wrist or ankle, and sometimes the genitals",
      "Itching",
      "Blisters that break to form scabs or crusts",
      "Lacy white patches in the mouth or on the lips or tongue",
      "Painful sores in the mouth or vagina",
      "Hair loss",
      "Change in scalp color",
      "Nail damage or loss",
    ],
    howCommon:
      "Affects 1-2% of the worldwide population. It's more common in adults over the age of 40",
    treatments: ["Prescription corticosteroid cream or ointment"],
    duration: "6 to 9 months",
  },
  {
    skinType: "Melanocytic nevus",
    symptoms: [
      "Change in color",
      "Change in shape",
      "Rapid increase in size",
      "Itching or pain",
      "Bleeding or crusting",
      "New raised or bumpy areas",
    ],
    howCommon: "Most common benign neoplasms of the skin",
    treatments: ["Simple surgical excision"],
    duration: "Lifelong",
  },
  {
    skinType: "Melanoma",
    symptoms: [
      "Colour - a mole may change in colour, have different colour shades or become blotchy",
      "Size - a mole may appear to get bigger",
      "Shape - a mole may have an irregular shape, may increase in height or not be symmetrical",
      "Elevation - the mole may develop a raised area",
      "Itching or bleeding",
    ],
    howCommon:
      "They most often develop in areas that have had exposure to the sun, such as your back, legs, arms and face",
    treatments: ["Surgery to remove the tumor"],
    duration: "Average of 5 years",
  },
  {
    skinType: "Seborrheic keratoses",
    symptoms: [
      "A round or oval-shaped waxy or rough bump, typically on the face, chest, a shoulder or the back",
      "A flat growth or a slightly raised bump with a scaly surface, with a characteristic 'pasted on' look",
      "Varied size, from very small to more than 1 inch (2.5 centimeters) across",
    ],
    howCommon: "Common non-cancerous (benign) skin growth",
    treatments: [
      "No treatment required. You might want to have it removed if it becomes itchy or irritated or you don’t like the look of it. Your healthcare provider can remove it for you in the office using one of several common methods",
    ],
    duration: "About a month",
  },
  {
    skinType: "Tinea ringworm candidiasis or other fungal infections",
    symptoms: [
      "Itchy skin",
      "Ring-shaped rash",
      "Red, scaly, cracked skin",
      "Hair loss",
    ],
    howCommon: "Very common",
    treatments: [
      "Non-prescription antifungal creams, lotions, or powders applied to the skin for 2 to 4 weeks",
    ],
    duration: "6 to 12 weeks",
  },
  {
    skinType: "Warts molluscum or other viral infections",
    symptoms: [
      "Raised, round, skin-colored bumps",
      "Small bumps — typically under about 1/4 inch (smaller than 6 millimeters) in diameter",
      "Bumps with a small dent or dot at the top near the center",
      "Itchy, pink bumps",
      "Bumps on the face, trunk, arms or legs of children",
      "Bumps on the genitals, lower abdomen or inner thighs of adults if the infection was sexually transmitted",
    ],
    howCommon: "Very common",
    treatments: [
      "Cryotherapy (freezing the lesion with liquid nitrogen), curettage (the piercing of the core and scraping of caseous or cheesy material), and laser therapy",
    ],
    duration: "As long as 4 years",
  },
];

module.exports = { skins };
