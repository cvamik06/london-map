export const clusterProfiles = {
  "C0": {
    "name": "Low Harm Stable Residential",
    "harmPer1000": 49538.26,
    "forecast": "Stable. Minor baseline risk of localized interpersonal incidents. Maintain standard patrol.",
    "alertLevel": "low",
    "crimes": [
      { "name": "Violence/Sexual", "harm": 80.3, "volume": 45.0 },
      { "name": "Burglary", "harm": 7.6, "volume": 12.0 },
      { "name": "Drug Offences", "harm": 2.7, "volume": 5.0 },
      { "name": "Arson/Damage", "harm": 2.6, "volume": 15.0 },
      { "name": "Robbery", "harm": 2.5, "volume": 3.0 }
    ],
    "imd": [
      { "name": "IMD Score", "value": 14.88 },
      { "name": "Education", "value": 10.18 }
    ]
  },
  "C1": {
    "name": "Deprived Health / Drug Hotspots",
    "harmPer1000": 93174.95,
    "forecast": "ELEVATED RISK. Predictive models indicate a 12% short-term increase in weapon possession linked to recent narcotics distribution patterns.",
    "alertLevel": "high",
    "crimes": [
      { "name": "Violence/Sexual", "harm": 72.0, "volume": 38.0 },
      { "name": "Burglary", "harm": 7.9, "volume": 8.0 },
      { "name": "Robbery", "harm": 6.2, "volume": 5.0 },
      { "name": "Drug Offences", "harm": 4.6, "volume": 25.0 },
      { "name": "Theft", "harm": 3.2, "volume": 18.0 }
    ],
    "imd": [
      { "name": "IMD Score", "value": 24.93 },
      { "name": "Education", "value": 13.39 }
    ]
  },
  "C2": {
    "name": "Wealthy Targeted",
    "harmPer1000": 32949.79,
    "forecast": "SEASONAL SPIKE ALERT. High probability of organized residential burglaries and vehicle theft over the upcoming holiday weekend.",
    "alertLevel": "medium",
    "crimes": [
      { "name": "Violence/Sexual", "harm": 67.9, "volume": 30.0 },
      { "name": "Burglary", "harm": 16.0, "volume": 28.0 },
      { "name": "Robbery", "harm": 4.2, "volume": 6.0 },
      { "name": "Arson/Damage", "harm": 3.4, "volume": 12.0 },
      { "name": "Drug Offences", "harm": 2.9, "volume": 4.0 }
    ],
    "imd": [
      { "name": "IMD Score", "value": 8.60 },
      { "name": "Education", "value": 3.49 }
    ]
  },
  "C3": {
    "name": "Urban Nightlife & Commercial",
    "harmPer1000": 182733.88,
    "forecast": "SURGE WARNING. Anticipated 25% spike in public order offenses and petty theft between 10 PM and 3 AM on Friday/Saturday.",
    "alertLevel": "high",
    "crimes": [
      { "name": "Violence/Sexual", "harm": 63.1, "volume": 35.0 },
      { "name": "Robbery", "harm": 10.0, "volume": 8.0 },
      { "name": "Burglary", "harm": 9.1, "volume": 10.0 },
      { "name": "Theft", "harm": 9.1, "volume": 38.0 },
      { "name": "Drug Offences", "harm": 3.0, "volume": 5.0 }
    ],
    "imd": [
      { "name": "IMD Score", "value": 17.82 },
      { "name": "Education", "value": 8.21 }
    ]
  },
  "C4": {
    "name": "Deprived Residential (High Disturbance)",
    "harmPer1000": 85715.21,
    "forecast": "CRITICAL WARNING. Escalating upward trend (+4.5%) in violent offenses detected. Immediate multi-agency intervention recommended.",
    "alertLevel": "critical",
    "crimes": [
      { "name": "Violence/Sexual", "harm": 80.8, "volume": 50.0 },
      { "name": "Burglary", "harm": 5.4, "volume": 8.0 },
      { "name": "Drug Offences", "harm": 3.5, "volume": 12.0 },
      { "name": "Robbery", "harm": 3.4, "volume": 5.0 },
      { "name": "Arson/Damage", "harm": 2.3, "volume": 18.0 }
    ],
    "imd": [
      { "name": "IMD Score", "value": 35.32 },
      { "name": "Education", "value": 27.57 }
    ]
  }
};