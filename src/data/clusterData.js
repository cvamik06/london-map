// AUTO-GENERATED DASHBOARD DATA

export const clusterProfiles = {
  "London": {
    "kmeans": {
      "C0": {
        "name": "Low-Risk Residential",
        "alertLevel": "low",
        "forecast": "Stable environment. Focus on community engagement.",
        "harmPer1000": 40040,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 8.3,
            "harm": 12.8
          },
          {
            "name": "Drug Offences",
            "volume": 2.8,
            "harm": 2.6
          },
          {
            "name": "Robbery",
            "volume": 2.2,
            "harm": 3.8
          },
          {
            "name": "Theft",
            "volume": 17.5,
            "harm": 2.4
          },
          {
            "name": "Vehicle Offences",
            "volume": 17.7,
            "harm": 0.5
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 19.2,
            "harm": 68.5
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 8.7
          },
          {
            "name": "Income",
            "value": 10.5
          },
          {
            "name": "Employment",
            "value": 6.1
          },
          {
            "name": "Health",
            "value": 12.0
          }
        ]
      },
      "C1": {
        "name": "Standard Urban Mix",
        "alertLevel": "low",
        "forecast": "Average relative risk. Maintain standard patrol visibility.",
        "harmPer1000": 60014,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 5.3,
            "harm": 5.9
          },
          {
            "name": "Drug Offences",
            "volume": 3.5,
            "harm": 2.3
          },
          {
            "name": "Robbery",
            "volume": 1.7,
            "harm": 2.3
          },
          {
            "name": "Theft",
            "volume": 13.4,
            "harm": 1.3
          },
          {
            "name": "Vehicle Offences",
            "volume": 11.4,
            "harm": 0.3
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 30.6,
            "harm": 80.3
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 15.8
          },
          {
            "name": "Income",
            "value": 20.6
          },
          {
            "name": "Employment",
            "value": 10.1
          },
          {
            "name": "Health",
            "value": 5.1
          }
        ]
      },
      "C2": {
        "name": "Property & Retail Focus",
        "alertLevel": "medium",
        "forecast": "Elevated volume. Increase targeted patrols.",
        "harmPer1000": 98771,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 4.1,
            "harm": 4.6
          },
          {
            "name": "Drug Offences",
            "volume": 4.6,
            "harm": 3.1
          },
          {
            "name": "Robbery",
            "volume": 2.5,
            "harm": 3.3
          },
          {
            "name": "Theft",
            "volume": 14.9,
            "harm": 1.5
          },
          {
            "name": "Vehicle Offences",
            "volume": 8.6,
            "harm": 0.2
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 29.9,
            "harm": 79.1
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 36.1
          },
          {
            "name": "Income",
            "value": 44.3
          },
          {
            "name": "Employment",
            "value": 19.6
          },
          {
            "name": "Health",
            "value": 3.6
          }
        ]
      },
      "C3": {
        "name": "High-Volume Hub",
        "alertLevel": "medium",
        "forecast": "Dense activity area. Monitor for emerging trends.",
        "harmPer1000": 99347,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 4.7,
            "harm": 6.7
          },
          {
            "name": "Drug Offences",
            "volume": 4.7,
            "harm": 4.0
          },
          {
            "name": "Robbery",
            "volume": 3.2,
            "harm": 5.3
          },
          {
            "name": "Theft",
            "volume": 22.4,
            "harm": 2.8
          },
          {
            "name": "Vehicle Offences",
            "volume": 7.0,
            "harm": 0.2
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 21.7,
            "harm": 71.2
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 25.6
          },
          {
            "name": "Income",
            "value": 30.8
          },
          {
            "name": "Employment",
            "value": 14.2
          },
          {
            "name": "Health",
            "value": 0.7
          }
        ]
      },
      "C4": {
        "name": "Severe Deprivation/Violence",
        "alertLevel": "critical",
        "forecast": "Critical risk. Requires multi-agency intervention.",
        "harmPer1000": 221460,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 3.0,
            "harm": 5.9
          },
          {
            "name": "Drug Offences",
            "volume": 2.8,
            "harm": 3.3
          },
          {
            "name": "Robbery",
            "volume": 3.8,
            "harm": 8.6
          },
          {
            "name": "Theft",
            "volume": 50.2,
            "harm": 8.7
          },
          {
            "name": "Vehicle Offences",
            "volume": 3.7,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 14.4,
            "harm": 65.0
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 19.0
          },
          {
            "name": "Income",
            "value": 19.7
          },
          {
            "name": "Employment",
            "value": 9.5
          },
          {
            "name": "Health",
            "value": 3.7
          }
        ]
      }
    },
    "dbscan": {
      "summary": "The algorithm isolated 13 hyper-dense Taskforce Zones distinct from standard urban noise.",
      "noiseCount": 2262,
      "zones": [
        {
          "id": "C0",
          "name": "Primary Core",
          "count": 2653,
          "color": "#1f77b4"
        },
        {
          "id": "C3",
          "name": "Micro-Cluster",
          "count": 22,
          "color": "#ff7f0e"
        },
        {
          "id": "C6",
          "name": "Retail Node",
          "count": 6,
          "color": "#2ca02c"
        },
        {
          "id": "C4",
          "name": "Transit Hub",
          "count": 5,
          "color": "#9467bd"
        },
        {
          "id": "C5",
          "name": "Nightlife Focus",
          "count": 5,
          "color": "#8c564b"
        },
        {
          "id": "C9",
          "name": "Estate Hotspot",
          "count": 5,
          "color": "#e377c2"
        },
        {
          "id": "C12",
          "name": "Primary Core",
          "count": 5,
          "color": "#1f77b4"
        },
        {
          "id": "C7",
          "name": "Micro-Cluster",
          "count": 4,
          "color": "#ff7f0e"
        },
        {
          "id": "C1",
          "name": "Retail Node",
          "count": 3,
          "color": "#2ca02c"
        },
        {
          "id": "C2",
          "name": "Transit Hub",
          "count": 3,
          "color": "#9467bd"
        },
        {
          "id": "C8",
          "name": "Nightlife Focus",
          "count": 3,
          "color": "#8c564b"
        },
        {
          "id": "C10",
          "name": "Estate Hotspot",
          "count": 3,
          "color": "#e377c2"
        },
        {
          "id": "C11",
          "name": "Primary Core",
          "count": 2,
          "color": "#1f77b4"
        }
      ]
    }
  },
  "Manchester": {
    "kmeans": {
      "C0": {
        "name": "Low-Risk Residential",
        "alertLevel": "low",
        "forecast": "Stable environment. Focus on community engagement.",
        "harmPer1000": 21,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 0.0,
            "harm": 0.0
          },
          {
            "name": "Drug Offences",
            "volume": 0.0,
            "harm": 0.0
          },
          {
            "name": "Robbery",
            "volume": 0.0,
            "harm": 0.0
          },
          {
            "name": "Theft",
            "volume": 100.0,
            "harm": 100.0
          },
          {
            "name": "Vehicle Offences",
            "volume": 0.0,
            "harm": 0.0
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 0.0,
            "harm": 0.0
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 41.7
          },
          {
            "name": "Income",
            "value": 40.2
          },
          {
            "name": "Employment",
            "value": 21.1
          },
          {
            "name": "Health",
            "value": 11.6
          }
        ]
      },
      "C1": {
        "name": "Standard Urban Mix",
        "alertLevel": "low",
        "forecast": "Average relative risk. Maintain standard patrol visibility.",
        "harmPer1000": 23,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 0.0,
            "harm": 0.0
          },
          {
            "name": "Drug Offences",
            "volume": 0.0,
            "harm": 0.0
          },
          {
            "name": "Robbery",
            "volume": 0.0,
            "harm": 0.0
          },
          {
            "name": "Theft",
            "volume": 0.0,
            "harm": 0.0
          },
          {
            "name": "Vehicle Offences",
            "volume": 0.0,
            "harm": 0.0
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 0.0,
            "harm": 0.0
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 48.4
          },
          {
            "name": "Income",
            "value": 47.7
          },
          {
            "name": "Employment",
            "value": 27.6
          },
          {
            "name": "Health",
            "value": 15.2
          }
        ]
      },
      "C2": {
        "name": "Property & Retail Focus",
        "alertLevel": "medium",
        "forecast": "Elevated volume. Increase targeted patrols.",
        "harmPer1000": 252,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 0.0,
            "harm": 0.0
          },
          {
            "name": "Drug Offences",
            "volume": 37.5,
            "harm": 40.9
          },
          {
            "name": "Robbery",
            "volume": 25.0,
            "harm": 53.1
          },
          {
            "name": "Theft",
            "volume": 37.5,
            "harm": 6.1
          },
          {
            "name": "Vehicle Offences",
            "volume": 0.0,
            "harm": 0.0
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 0.0,
            "harm": 0.0
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 40.5
          },
          {
            "name": "Income",
            "value": 40.8
          },
          {
            "name": "Employment",
            "value": 22.1
          },
          {
            "name": "Health",
            "value": 13.7
          }
        ]
      },
      "C3": {
        "name": "High-Volume Hub",
        "alertLevel": "medium",
        "forecast": "Dense activity area. Monitor for emerging trends.",
        "harmPer1000": 601,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 0.6,
            "harm": 0.4
          },
          {
            "name": "Drug Offences",
            "volume": 8.4,
            "harm": 3.0
          },
          {
            "name": "Robbery",
            "volume": 0.0,
            "harm": 0.0
          },
          {
            "name": "Theft",
            "volume": 4.5,
            "harm": 0.2
          },
          {
            "name": "Vehicle Offences",
            "volume": 4.5,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 67.1,
            "harm": 93.6
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 53.0
          },
          {
            "name": "Income",
            "value": 52.5
          },
          {
            "name": "Employment",
            "value": 27.0
          },
          {
            "name": "Health",
            "value": 14.2
          }
        ]
      },
      "C4": {
        "name": "Severe Deprivation/Violence",
        "alertLevel": "critical",
        "forecast": "Critical risk. Requires multi-agency intervention.",
        "harmPer1000": 1684,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 1.4,
            "harm": 1.3
          },
          {
            "name": "Drug Offences",
            "volume": 6.3,
            "harm": 3.6
          },
          {
            "name": "Robbery",
            "volume": 3.3,
            "harm": 3.7
          },
          {
            "name": "Theft",
            "volume": 28.6,
            "harm": 2.4
          },
          {
            "name": "Vehicle Offences",
            "volume": 2.4,
            "harm": 0.0
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 34.7,
            "harm": 77.7
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 22.2
          },
          {
            "name": "Income",
            "value": 17.9
          },
          {
            "name": "Employment",
            "value": 10.1
          },
          {
            "name": "Health",
            "value": 7.1
          }
        ]
      }
    },
    "dbscan": {
      "summary": "The algorithm isolated 2 hyper-dense Taskforce Zones distinct from standard urban noise.",
      "noiseCount": 26,
      "zones": [
        {
          "id": "C0",
          "name": "Primary Core",
          "count": 113,
          "color": "#1f77b4"
        },
        {
          "id": "C1",
          "name": "Micro-Cluster",
          "count": 10,
          "color": "#ff7f0e"
        }
      ]
    }
  },
  "Liverpool": {
    "kmeans": {
      "C0": {
        "name": "Low-Risk Residential",
        "alertLevel": "low",
        "forecast": "Stable environment. Focus on community engagement.",
        "harmPer1000": 52076,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 4.8,
            "harm": 5.0
          },
          {
            "name": "Drug Offences",
            "volume": 4.5,
            "harm": 2.8
          },
          {
            "name": "Robbery",
            "volume": 0.8,
            "harm": 0.9
          },
          {
            "name": "Theft",
            "volume": 11.9,
            "harm": 1.1
          },
          {
            "name": "Vehicle Offences",
            "volume": 8.5,
            "harm": 0.2
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 34.5,
            "harm": 82.1
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 12.1
          },
          {
            "name": "Income",
            "value": 11.3
          },
          {
            "name": "Employment",
            "value": 8.9
          },
          {
            "name": "Health",
            "value": 2.4
          }
        ]
      },
      "C1": {
        "name": "Standard Urban Mix",
        "alertLevel": "low",
        "forecast": "Average relative risk. Maintain standard patrol visibility.",
        "harmPer1000": 86064,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.7,
            "harm": 2.2
          },
          {
            "name": "Drug Offences",
            "volume": 5.1,
            "harm": 2.5
          },
          {
            "name": "Robbery",
            "volume": 0.6,
            "harm": 0.5
          },
          {
            "name": "Theft",
            "volume": 7.2,
            "harm": 0.5
          },
          {
            "name": "Vehicle Offences",
            "volume": 5.5,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 47.6,
            "harm": 88.4
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 27.4
          },
          {
            "name": "Income",
            "value": 25.6
          },
          {
            "name": "Employment",
            "value": 18.1
          },
          {
            "name": "Health",
            "value": 9.7
          }
        ]
      },
      "C2": {
        "name": "Property & Retail Focus",
        "alertLevel": "medium",
        "forecast": "Elevated volume. Increase targeted patrols.",
        "harmPer1000": 152376,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.8,
            "harm": 3.1
          },
          {
            "name": "Drug Offences",
            "volume": 7.7,
            "harm": 5.1
          },
          {
            "name": "Robbery",
            "volume": 1.0,
            "harm": 1.2
          },
          {
            "name": "Theft",
            "volume": 16.6,
            "harm": 1.6
          },
          {
            "name": "Vehicle Offences",
            "volume": 4.2,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 30.9,
            "harm": 79.5
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 46.4
          },
          {
            "name": "Income",
            "value": 42.5
          },
          {
            "name": "Employment",
            "value": 28.1
          },
          {
            "name": "Health",
            "value": 16.9
          }
        ]
      },
      "C3": {
        "name": "High-Volume Hub",
        "alertLevel": "medium",
        "forecast": "Dense activity area. Monitor for emerging trends.",
        "harmPer1000": 153235,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 3.3,
            "harm": 2.7
          },
          {
            "name": "Drug Offences",
            "volume": 9.1,
            "harm": 4.5
          },
          {
            "name": "Robbery",
            "volume": 0.9,
            "harm": 0.9
          },
          {
            "name": "Theft",
            "volume": 8.4,
            "harm": 0.6
          },
          {
            "name": "Vehicle Offences",
            "volume": 4.2,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 44.0,
            "harm": 84.6
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 56.8
          },
          {
            "name": "Income",
            "value": 53.3
          },
          {
            "name": "Employment",
            "value": 33.2
          },
          {
            "name": "Health",
            "value": 18.9
          }
        ]
      },
      "C4": {
        "name": "Severe Deprivation/Violence",
        "alertLevel": "critical",
        "forecast": "Critical risk. Requires multi-agency intervention.",
        "harmPer1000": 320026,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.5,
            "harm": 2.8
          },
          {
            "name": "Drug Offences",
            "volume": 15.0,
            "harm": 10.2
          },
          {
            "name": "Robbery",
            "volume": 1.4,
            "harm": 1.8
          },
          {
            "name": "Theft",
            "volume": 24.5,
            "harm": 2.5
          },
          {
            "name": "Vehicle Offences",
            "volume": 2.5,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 28.6,
            "harm": 75.3
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 25.0
          },
          {
            "name": "Income",
            "value": 19.2
          },
          {
            "name": "Employment",
            "value": 10.8
          },
          {
            "name": "Health",
            "value": 11.0
          }
        ]
      }
    },
    "dbscan": {
      "summary": "The algorithm isolated 3 hyper-dense Taskforce Zones distinct from standard urban noise.",
      "noiseCount": 287,
      "zones": [
        {
          "id": "C1",
          "name": "Primary Core",
          "count": 5,
          "color": "#1f77b4"
        },
        {
          "id": "C0",
          "name": "Micro-Cluster",
          "count": 5,
          "color": "#ff7f0e"
        },
        {
          "id": "C2",
          "name": "Retail Node",
          "count": 5,
          "color": "#2ca02c"
        }
      ]
    }
  },
  "Sheffield": {
    "kmeans": {
      "C0": {
        "name": "Low-Risk Residential",
        "alertLevel": "low",
        "forecast": "Stable environment. Focus on community engagement.",
        "harmPer1000": 29221,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 16.4,
            "harm": 19.1
          },
          {
            "name": "Drug Offences",
            "volume": 2.2,
            "harm": 1.5
          },
          {
            "name": "Robbery",
            "volume": 0.5,
            "harm": 0.7
          },
          {
            "name": "Theft",
            "volume": 9.2,
            "harm": 0.9
          },
          {
            "name": "Vehicle Offences",
            "volume": 13.6,
            "harm": 0.3
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 25.4,
            "harm": 68.8
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 6.4
          },
          {
            "name": "Income",
            "value": 7.1
          },
          {
            "name": "Employment",
            "value": 5.8
          },
          {
            "name": "Health",
            "value": 5.8
          }
        ]
      },
      "C1": {
        "name": "Standard Urban Mix",
        "alertLevel": "low",
        "forecast": "Average relative risk. Maintain standard patrol visibility.",
        "harmPer1000": 65773,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 7.2,
            "harm": 7.6
          },
          {
            "name": "Drug Offences",
            "volume": 2.6,
            "harm": 1.6
          },
          {
            "name": "Robbery",
            "volume": 0.8,
            "harm": 1.0
          },
          {
            "name": "Theft",
            "volume": 10.2,
            "harm": 1.0
          },
          {
            "name": "Vehicle Offences",
            "volume": 8.9,
            "harm": 0.2
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 32.3,
            "harm": 79.2
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 16.1
          },
          {
            "name": "Income",
            "value": 16.4
          },
          {
            "name": "Employment",
            "value": 10.5
          },
          {
            "name": "Health",
            "value": 1.9
          }
        ]
      },
      "C2": {
        "name": "Property & Retail Focus",
        "alertLevel": "medium",
        "forecast": "Elevated volume. Increase targeted patrols.",
        "harmPer1000": 75579,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 5.8,
            "harm": 9.6
          },
          {
            "name": "Drug Offences",
            "volume": 1.8,
            "harm": 1.7
          },
          {
            "name": "Robbery",
            "volume": 1.2,
            "harm": 2.4
          },
          {
            "name": "Theft",
            "volume": 34.2,
            "harm": 5.0
          },
          {
            "name": "Vehicle Offences",
            "volume": 6.6,
            "harm": 0.2
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 18.3,
            "harm": 69.6
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 13.3
          },
          {
            "name": "Income",
            "value": 11.8
          },
          {
            "name": "Employment",
            "value": 7.8
          },
          {
            "name": "Health",
            "value": 0.2
          }
        ]
      },
      "C3": {
        "name": "High-Volume Hub",
        "alertLevel": "medium",
        "forecast": "Dense activity area. Monitor for emerging trends.",
        "harmPer1000": 141100,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 4.7,
            "harm": 4.4
          },
          {
            "name": "Drug Offences",
            "volume": 3.1,
            "harm": 1.7
          },
          {
            "name": "Robbery",
            "volume": 1.1,
            "harm": 1.2
          },
          {
            "name": "Theft",
            "volume": 9.9,
            "harm": 0.8
          },
          {
            "name": "Vehicle Offences",
            "volume": 5.7,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 38.1,
            "harm": 82.5
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 49.2
          },
          {
            "name": "Income",
            "value": 50.1
          },
          {
            "name": "Employment",
            "value": 29.0
          },
          {
            "name": "Health",
            "value": 13.4
          }
        ]
      },
      "C4": {
        "name": "Severe Deprivation/Violence",
        "alertLevel": "critical",
        "forecast": "Critical risk. Requires multi-agency intervention.",
        "harmPer1000": 281406,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.9,
            "harm": 3.7
          },
          {
            "name": "Drug Offences",
            "volume": 5.8,
            "harm": 4.4
          },
          {
            "name": "Robbery",
            "volume": 1.6,
            "harm": 2.4
          },
          {
            "name": "Theft",
            "volume": 27.1,
            "harm": 3.0
          },
          {
            "name": "Vehicle Offences",
            "volume": 5.0,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 25.7,
            "harm": 75.4
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 36.6
          },
          {
            "name": "Income",
            "value": 35.1
          },
          {
            "name": "Employment",
            "value": 17.0
          },
          {
            "name": "Health",
            "value": 10.5
          }
        ]
      }
    },
    "dbscan": {
      "summary": "The algorithm isolated 2 hyper-dense Taskforce Zones distinct from standard urban noise.",
      "noiseCount": 140,
      "zones": [
        {
          "id": "C0",
          "name": "Primary Core",
          "count": 198,
          "color": "#1f77b4"
        },
        {
          "id": "C1",
          "name": "Micro-Cluster",
          "count": 5,
          "color": "#ff7f0e"
        }
      ]
    }
  },
  "Newcastle upon Tyne": {
    "kmeans": {
      "C0": {
        "name": "Low-Risk Residential",
        "alertLevel": "low",
        "forecast": "Stable environment. Focus on community engagement.",
        "harmPer1000": 35115,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 6.6,
            "harm": 10.1
          },
          {
            "name": "Drug Offences",
            "volume": 1.6,
            "harm": 1.5
          },
          {
            "name": "Robbery",
            "volume": 0.5,
            "harm": 1.0
          },
          {
            "name": "Theft",
            "volume": 10.7,
            "harm": 1.5
          },
          {
            "name": "Vehicle Offences",
            "volume": 14.5,
            "harm": 0.4
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 20.1,
            "harm": 71.2
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 7.0
          },
          {
            "name": "Income",
            "value": 6.7
          },
          {
            "name": "Employment",
            "value": 4.9
          },
          {
            "name": "Health",
            "value": 5.3
          }
        ]
      },
      "C1": {
        "name": "Standard Urban Mix",
        "alertLevel": "low",
        "forecast": "Average relative risk. Maintain standard patrol visibility.",
        "harmPer1000": 66897,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 4.6,
            "harm": 4.9
          },
          {
            "name": "Drug Offences",
            "volume": 2.4,
            "harm": 1.5
          },
          {
            "name": "Robbery",
            "volume": 0.8,
            "harm": 1.0
          },
          {
            "name": "Theft",
            "volume": 12.9,
            "harm": 1.2
          },
          {
            "name": "Vehicle Offences",
            "volume": 7.1,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 33.5,
            "harm": 82.2
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 14.5
          },
          {
            "name": "Income",
            "value": 15.2
          },
          {
            "name": "Employment",
            "value": 10.2
          },
          {
            "name": "Health",
            "value": 1.7
          }
        ]
      },
      "C2": {
        "name": "Property & Retail Focus",
        "alertLevel": "medium",
        "forecast": "Elevated volume. Increase targeted patrols.",
        "harmPer1000": 100122,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.9,
            "harm": 4.7
          },
          {
            "name": "Drug Offences",
            "volume": 2.5,
            "harm": 2.4
          },
          {
            "name": "Robbery",
            "volume": 1.5,
            "harm": 2.8
          },
          {
            "name": "Theft",
            "volume": 34.7,
            "harm": 5.0
          },
          {
            "name": "Vehicle Offences",
            "volume": 3.7,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 19.4,
            "harm": 72.9
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 16.8
          },
          {
            "name": "Income",
            "value": 14.6
          },
          {
            "name": "Employment",
            "value": 9.5
          },
          {
            "name": "Health",
            "value": 4.2
          }
        ]
      },
      "C3": {
        "name": "High-Volume Hub",
        "alertLevel": "medium",
        "forecast": "Dense activity area. Monitor for emerging trends.",
        "harmPer1000": 142690,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 3.4,
            "harm": 3.6
          },
          {
            "name": "Drug Offences",
            "volume": 3.0,
            "harm": 1.9
          },
          {
            "name": "Robbery",
            "volume": 1.1,
            "harm": 1.3
          },
          {
            "name": "Theft",
            "volume": 13.7,
            "harm": 1.3
          },
          {
            "name": "Vehicle Offences",
            "volume": 4.5,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 33.3,
            "harm": 81.7
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 51.2
          },
          {
            "name": "Income",
            "value": 50.1
          },
          {
            "name": "Employment",
            "value": 29.5
          },
          {
            "name": "Health",
            "value": 14.4
          }
        ]
      },
      "C4": {
        "name": "Severe Deprivation/Violence",
        "alertLevel": "critical",
        "forecast": "Critical risk. Requires multi-agency intervention.",
        "harmPer1000": 1414759,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 1.7,
            "harm": 1.7
          },
          {
            "name": "Drug Offences",
            "volume": 4.6,
            "harm": 2.8
          },
          {
            "name": "Robbery",
            "volume": 1.4,
            "harm": 1.7
          },
          {
            "name": "Theft",
            "volume": 18.6,
            "harm": 1.7
          },
          {
            "name": "Vehicle Offences",
            "volume": 0.9,
            "harm": 0.0
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 36.0,
            "harm": 84.2
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 21.7
          },
          {
            "name": "Income",
            "value": 7.5
          },
          {
            "name": "Employment",
            "value": 4.2
          },
          {
            "name": "Health",
            "value": 6.0
          }
        ]
      }
    },
    "dbscan": {
      "summary": "The algorithm isolated 3 hyper-dense Taskforce Zones distinct from standard urban noise.",
      "noiseCount": 163,
      "zones": [
        {
          "id": "C1",
          "name": "Primary Core",
          "count": 6,
          "color": "#1f77b4"
        },
        {
          "id": "C2",
          "name": "Micro-Cluster",
          "count": 6,
          "color": "#ff7f0e"
        },
        {
          "id": "C0",
          "name": "Retail Node",
          "count": 5,
          "color": "#2ca02c"
        }
      ]
    }
  },
  "Birmingham": {
    "kmeans": {
      "C0": {
        "name": "Low-Risk Residential",
        "alertLevel": "low",
        "forecast": "Stable environment. Focus on community engagement.",
        "harmPer1000": 87593,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 6.8,
            "harm": 5.6
          },
          {
            "name": "Drug Offences",
            "volume": 2.0,
            "harm": 1.0
          },
          {
            "name": "Robbery",
            "volume": 1.9,
            "harm": 1.8
          },
          {
            "name": "Theft",
            "volume": 11.2,
            "harm": 0.8
          },
          {
            "name": "Vehicle Offences",
            "volume": 11.5,
            "harm": 0.2
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 43.6,
            "harm": 83.9
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 19.6
          },
          {
            "name": "Income",
            "value": 23.1
          },
          {
            "name": "Employment",
            "value": 13.4
          },
          {
            "name": "Health",
            "value": 2.5
          }
        ]
      },
      "C1": {
        "name": "Standard Urban Mix",
        "alertLevel": "low",
        "forecast": "Average relative risk. Maintain standard patrol visibility.",
        "harmPer1000": 96367,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 6.3,
            "harm": 7.6
          },
          {
            "name": "Drug Offences",
            "volume": 1.9,
            "harm": 1.4
          },
          {
            "name": "Robbery",
            "volume": 3.1,
            "harm": 4.4
          },
          {
            "name": "Theft",
            "volume": 29.4,
            "harm": 3.2
          },
          {
            "name": "Vehicle Offences",
            "volume": 10.6,
            "harm": 0.3
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 26.1,
            "harm": 73.5
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 14.6
          },
          {
            "name": "Income",
            "value": 15.0
          },
          {
            "name": "Employment",
            "value": 9.3
          },
          {
            "name": "Health",
            "value": 0.2
          }
        ]
      },
      "C2": {
        "name": "Property & Retail Focus",
        "alertLevel": "medium",
        "forecast": "Elevated volume. Increase targeted patrols.",
        "harmPer1000": 146064,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 4.7,
            "harm": 3.5
          },
          {
            "name": "Drug Offences",
            "volume": 2.3,
            "harm": 1.0
          },
          {
            "name": "Robbery",
            "volume": 2.0,
            "harm": 1.8
          },
          {
            "name": "Theft",
            "volume": 7.9,
            "harm": 0.5
          },
          {
            "name": "Vehicle Offences",
            "volume": 7.6,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 50.1,
            "harm": 85.9
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 52.8
          },
          {
            "name": "Income",
            "value": 57.0
          },
          {
            "name": "Employment",
            "value": 29.3
          },
          {
            "name": "Health",
            "value": 11.4
          }
        ]
      },
      "C3": {
        "name": "High-Volume Hub",
        "alertLevel": "medium",
        "forecast": "Dense activity area. Monitor for emerging trends.",
        "harmPer1000": 224344,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 4.2,
            "harm": 3.9
          },
          {
            "name": "Drug Offences",
            "volume": 3.8,
            "harm": 2.1
          },
          {
            "name": "Robbery",
            "volume": 3.4,
            "harm": 3.7
          },
          {
            "name": "Theft",
            "volume": 18.8,
            "harm": 1.5
          },
          {
            "name": "Vehicle Offences",
            "volume": 7.9,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 37.1,
            "harm": 79.2
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 49.2
          },
          {
            "name": "Income",
            "value": 53.6
          },
          {
            "name": "Employment",
            "value": 26.8
          },
          {
            "name": "Health",
            "value": 10.2
          }
        ]
      },
      "C4": {
        "name": "Severe Deprivation/Violence",
        "alertLevel": "critical",
        "forecast": "Critical risk. Requires multi-agency intervention.",
        "harmPer1000": 4097089,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.3,
            "harm": 2.5
          },
          {
            "name": "Drug Offences",
            "volume": 4.0,
            "harm": 2.6
          },
          {
            "name": "Robbery",
            "volume": 3.8,
            "harm": 4.8
          },
          {
            "name": "Theft",
            "volume": 36.7,
            "harm": 3.5
          },
          {
            "name": "Vehicle Offences",
            "volume": 1.7,
            "harm": 0.0
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 31.0,
            "harm": 78.1
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 28.6
          },
          {
            "name": "Income",
            "value": 16.2
          },
          {
            "name": "Employment",
            "value": 15.6
          },
          {
            "name": "Health",
            "value": 17.3
          }
        ]
      }
    },
    "dbscan": {
      "summary": "The algorithm isolated 3 hyper-dense Taskforce Zones distinct from standard urban noise.",
      "noiseCount": 522,
      "zones": [
        {
          "id": "C0",
          "name": "Primary Core",
          "count": 129,
          "color": "#1f77b4"
        },
        {
          "id": "C1",
          "name": "Micro-Cluster",
          "count": 6,
          "color": "#ff7f0e"
        },
        {
          "id": "C2",
          "name": "Retail Node",
          "count": 2,
          "color": "#2ca02c"
        }
      ]
    }
  },
  "Coventry": {
    "kmeans": {
      "C0": {
        "name": "Low-Risk Residential",
        "alertLevel": "low",
        "forecast": "Stable environment. Focus on community engagement.",
        "harmPer1000": 56160,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 6.4,
            "harm": 5.3
          },
          {
            "name": "Drug Offences",
            "volume": 1.4,
            "harm": 0.7
          },
          {
            "name": "Robbery",
            "volume": 1.1,
            "harm": 1.0
          },
          {
            "name": "Theft",
            "volume": 10.4,
            "harm": 0.8
          },
          {
            "name": "Vehicle Offences",
            "volume": 14.0,
            "harm": 0.2
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 45.0,
            "harm": 86.4
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 12.6
          },
          {
            "name": "Income",
            "value": 15.2
          },
          {
            "name": "Employment",
            "value": 9.0
          },
          {
            "name": "Health",
            "value": 0.3
          }
        ]
      },
      "C1": {
        "name": "Standard Urban Mix",
        "alertLevel": "low",
        "forecast": "Average relative risk. Maintain standard patrol visibility.",
        "harmPer1000": 58295,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 7.4,
            "harm": 10.4
          },
          {
            "name": "Drug Offences",
            "volume": 1.2,
            "harm": 1.0
          },
          {
            "name": "Robbery",
            "volume": 1.7,
            "harm": 2.7
          },
          {
            "name": "Theft",
            "volume": 32.9,
            "harm": 4.1
          },
          {
            "name": "Vehicle Offences",
            "volume": 15.7,
            "harm": 0.4
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 22.3,
            "harm": 73.0
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 11.4
          },
          {
            "name": "Income",
            "value": 12.4
          },
          {
            "name": "Employment",
            "value": 8.1
          },
          {
            "name": "Health",
            "value": 1.3
          }
        ]
      },
      "C2": {
        "name": "Property & Retail Focus",
        "alertLevel": "medium",
        "forecast": "Elevated volume. Increase targeted patrols.",
        "harmPer1000": 86555,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 6.2,
            "harm": 5.9
          },
          {
            "name": "Drug Offences",
            "volume": 2.1,
            "harm": 1.2
          },
          {
            "name": "Robbery",
            "volume": 1.5,
            "harm": 1.6
          },
          {
            "name": "Theft",
            "volume": 16.2,
            "harm": 1.4
          },
          {
            "name": "Vehicle Offences",
            "volume": 12.2,
            "harm": 0.2
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 36.9,
            "harm": 81.4
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 21.1
          },
          {
            "name": "Income",
            "value": 23.6
          },
          {
            "name": "Employment",
            "value": 13.0
          },
          {
            "name": "Health",
            "value": 4.3
          }
        ]
      },
      "C3": {
        "name": "High-Volume Hub",
        "alertLevel": "medium",
        "forecast": "Dense activity area. Monitor for emerging trends.",
        "harmPer1000": 132192,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 5.0,
            "harm": 4.1
          },
          {
            "name": "Drug Offences",
            "volume": 2.3,
            "harm": 1.1
          },
          {
            "name": "Robbery",
            "volume": 1.5,
            "harm": 1.4
          },
          {
            "name": "Theft",
            "volume": 10.7,
            "harm": 0.8
          },
          {
            "name": "Vehicle Offences",
            "volume": 8.2,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 45.3,
            "harm": 85.2
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 45.8
          },
          {
            "name": "Income",
            "value": 47.9
          },
          {
            "name": "Employment",
            "value": 26.0
          },
          {
            "name": "Health",
            "value": 12.6
          }
        ]
      },
      "C4": {
        "name": "Severe Deprivation/Violence",
        "alertLevel": "critical",
        "forecast": "Critical risk. Requires multi-agency intervention.",
        "harmPer1000": 268726,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 3.6,
            "harm": 3.4
          },
          {
            "name": "Drug Offences",
            "volume": 4.1,
            "harm": 2.3
          },
          {
            "name": "Robbery",
            "volume": 3.0,
            "harm": 3.2
          },
          {
            "name": "Theft",
            "volume": 21.8,
            "harm": 1.8
          },
          {
            "name": "Vehicle Offences",
            "volume": 5.8,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 36.9,
            "harm": 80.5
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 43.9
          },
          {
            "name": "Income",
            "value": 42.5
          },
          {
            "name": "Employment",
            "value": 20.8
          },
          {
            "name": "Health",
            "value": 12.4
          }
        ]
      }
    },
    "dbscan": {
      "summary": "The algorithm isolated 3 hyper-dense Taskforce Zones distinct from standard urban noise.",
      "noiseCount": 187,
      "zones": [
        {
          "id": "C0",
          "name": "Primary Core",
          "count": 6,
          "color": "#1f77b4"
        },
        {
          "id": "C1",
          "name": "Micro-Cluster",
          "count": 5,
          "color": "#ff7f0e"
        },
        {
          "id": "C2",
          "name": "Retail Node",
          "count": 5,
          "color": "#2ca02c"
        }
      ]
    }
  },
  "Wolverhampton": {
    "kmeans": {
      "C0": {
        "name": "Low-Risk Residential",
        "alertLevel": "low",
        "forecast": "Stable environment. Focus on community engagement.",
        "harmPer1000": 63672,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 5.7,
            "harm": 4.7
          },
          {
            "name": "Drug Offences",
            "volume": 1.7,
            "harm": 0.8
          },
          {
            "name": "Robbery",
            "volume": 1.1,
            "harm": 1.0
          },
          {
            "name": "Theft",
            "volume": 11.9,
            "harm": 0.9
          },
          {
            "name": "Vehicle Offences",
            "volume": 11.7,
            "harm": 0.2
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 45.5,
            "harm": 86.5
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 14.4
          },
          {
            "name": "Income",
            "value": 16.5
          },
          {
            "name": "Employment",
            "value": 11.2
          },
          {
            "name": "Health",
            "value": 0.1
          }
        ]
      },
      "C1": {
        "name": "Standard Urban Mix",
        "alertLevel": "low",
        "forecast": "Average relative risk. Maintain standard patrol visibility.",
        "harmPer1000": 70409,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 3.8,
            "harm": 6.3
          },
          {
            "name": "Drug Offences",
            "volume": 0.7,
            "harm": 0.7
          },
          {
            "name": "Robbery",
            "volume": 1.5,
            "harm": 2.8
          },
          {
            "name": "Theft",
            "volume": 54.0,
            "harm": 7.9
          },
          {
            "name": "Vehicle Offences",
            "volume": 7.1,
            "harm": 0.2
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 19.8,
            "harm": 75.8
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 14.4
          },
          {
            "name": "Income",
            "value": 16.3
          },
          {
            "name": "Employment",
            "value": 10.5
          },
          {
            "name": "Health",
            "value": 0.1
          }
        ]
      },
      "C2": {
        "name": "Property & Retail Focus",
        "alertLevel": "medium",
        "forecast": "Elevated volume. Increase targeted patrols.",
        "harmPer1000": 120475,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 3.9,
            "harm": 3.0
          },
          {
            "name": "Drug Offences",
            "volume": 1.8,
            "harm": 0.8
          },
          {
            "name": "Robbery",
            "volume": 1.1,
            "harm": 1.0
          },
          {
            "name": "Theft",
            "volume": 10.5,
            "harm": 0.7
          },
          {
            "name": "Vehicle Offences",
            "volume": 7.7,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 49.4,
            "harm": 87.6
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 40.1
          },
          {
            "name": "Income",
            "value": 44.3
          },
          {
            "name": "Employment",
            "value": 24.9
          },
          {
            "name": "Health",
            "value": 9.1
          }
        ]
      },
      "C3": {
        "name": "High-Volume Hub",
        "alertLevel": "medium",
        "forecast": "Dense activity area. Monitor for emerging trends.",
        "harmPer1000": 193669,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 3.7,
            "harm": 3.5
          },
          {
            "name": "Drug Offences",
            "volume": 2.3,
            "harm": 1.3
          },
          {
            "name": "Robbery",
            "volume": 2.1,
            "harm": 2.3
          },
          {
            "name": "Theft",
            "volume": 20.3,
            "harm": 1.7
          },
          {
            "name": "Vehicle Offences",
            "volume": 8.6,
            "harm": 0.2
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 37.4,
            "harm": 82.1
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 45.7
          },
          {
            "name": "Income",
            "value": 48.3
          },
          {
            "name": "Employment",
            "value": 26.5
          },
          {
            "name": "Health",
            "value": 10.3
          }
        ]
      },
      "C4": {
        "name": "Severe Deprivation/Violence",
        "alertLevel": "critical",
        "forecast": "Critical risk. Requires multi-agency intervention.",
        "harmPer1000": 1179892,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.2,
            "harm": 2.3
          },
          {
            "name": "Drug Offences",
            "volume": 7.0,
            "harm": 4.3
          },
          {
            "name": "Robbery",
            "volume": 2.0,
            "harm": 2.4
          },
          {
            "name": "Theft",
            "volume": 25.5,
            "harm": 2.3
          },
          {
            "name": "Vehicle Offences",
            "volume": 4.4,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 32.5,
            "harm": 78.0
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 39.5
          },
          {
            "name": "Income",
            "value": 34.3
          },
          {
            "name": "Employment",
            "value": 21.3
          },
          {
            "name": "Health",
            "value": 14.4
          }
        ]
      }
    },
    "dbscan": {
      "summary": "The algorithm isolated 3 hyper-dense Taskforce Zones distinct from standard urban noise.",
      "noiseCount": 80,
      "zones": [
        {
          "id": "C0",
          "name": "Primary Core",
          "count": 67,
          "color": "#1f77b4"
        },
        {
          "id": "C1",
          "name": "Micro-Cluster",
          "count": 7,
          "color": "#ff7f0e"
        },
        {
          "id": "C2",
          "name": "Retail Node",
          "count": 7,
          "color": "#2ca02c"
        }
      ]
    }
  },
  "Leeds": {
    "kmeans": {
      "C0": {
        "name": "Low-Risk Residential",
        "alertLevel": "low",
        "forecast": "Stable environment. Focus on community engagement.",
        "harmPer1000": 57829,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 12.0,
            "harm": 12.7
          },
          {
            "name": "Drug Offences",
            "volume": 2.0,
            "harm": 1.3
          },
          {
            "name": "Robbery",
            "volume": 1.0,
            "harm": 1.3
          },
          {
            "name": "Theft",
            "volume": 12.5,
            "harm": 1.2
          },
          {
            "name": "Vehicle Offences",
            "volume": 13.6,
            "harm": 0.3
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 31.0,
            "harm": 76.5
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 8.1
          },
          {
            "name": "Income",
            "value": 8.2
          },
          {
            "name": "Employment",
            "value": 5.7
          },
          {
            "name": "Health",
            "value": 5.8
          }
        ]
      },
      "C1": {
        "name": "Standard Urban Mix",
        "alertLevel": "low",
        "forecast": "Average relative risk. Maintain standard patrol visibility.",
        "harmPer1000": 80827,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 7.2,
            "harm": 5.9
          },
          {
            "name": "Drug Offences",
            "volume": 2.1,
            "harm": 1.0
          },
          {
            "name": "Robbery",
            "volume": 0.7,
            "harm": 0.7
          },
          {
            "name": "Theft",
            "volume": 9.0,
            "harm": 0.7
          },
          {
            "name": "Vehicle Offences",
            "volume": 6.8,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 45.4,
            "harm": 86.3
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 12.5
          },
          {
            "name": "Income",
            "value": 14.0
          },
          {
            "name": "Employment",
            "value": 9.2
          },
          {
            "name": "Health",
            "value": 2.7
          }
        ]
      },
      "C2": {
        "name": "Property & Retail Focus",
        "alertLevel": "medium",
        "forecast": "Elevated volume. Increase targeted patrols.",
        "harmPer1000": 142271,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 5.5,
            "harm": 6.6
          },
          {
            "name": "Drug Offences",
            "volume": 2.2,
            "harm": 1.6
          },
          {
            "name": "Robbery",
            "volume": 1.8,
            "harm": 2.6
          },
          {
            "name": "Theft",
            "volume": 29.5,
            "harm": 3.2
          },
          {
            "name": "Vehicle Offences",
            "volume": 6.4,
            "harm": 0.2
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 27.9,
            "harm": 78.4
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 19.4
          },
          {
            "name": "Income",
            "value": 18.8
          },
          {
            "name": "Employment",
            "value": 10.9
          },
          {
            "name": "Health",
            "value": 1.8
          }
        ]
      },
      "C3": {
        "name": "High-Volume Hub",
        "alertLevel": "medium",
        "forecast": "Dense activity area. Monitor for emerging trends.",
        "harmPer1000": 202166,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 4.7,
            "harm": 3.9
          },
          {
            "name": "Drug Offences",
            "volume": 3.2,
            "harm": 1.6
          },
          {
            "name": "Robbery",
            "volume": 1.5,
            "harm": 1.4
          },
          {
            "name": "Theft",
            "volume": 12.1,
            "harm": 0.9
          },
          {
            "name": "Vehicle Offences",
            "volume": 5.2,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 44.7,
            "harm": 85.6
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 47.2
          },
          {
            "name": "Income",
            "value": 47.6
          },
          {
            "name": "Employment",
            "value": 25.5
          },
          {
            "name": "Health",
            "value": 9.5
          }
        ]
      },
      "C4": {
        "name": "Severe Deprivation/Violence",
        "alertLevel": "critical",
        "forecast": "Critical risk. Requires multi-agency intervention.",
        "harmPer1000": 1050557,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 3.2,
            "harm": 3.9
          },
          {
            "name": "Drug Offences",
            "volume": 5.3,
            "harm": 3.9
          },
          {
            "name": "Robbery",
            "volume": 2.7,
            "harm": 3.9
          },
          {
            "name": "Theft",
            "volume": 37.1,
            "harm": 4.1
          },
          {
            "name": "Vehicle Offences",
            "volume": 2.1,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 26.7,
            "harm": 76.8
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 21.1
          },
          {
            "name": "Income",
            "value": 11.0
          },
          {
            "name": "Employment",
            "value": 6.9
          },
          {
            "name": "Health",
            "value": 7.2
          }
        ]
      }
    },
    "dbscan": {
      "summary": "The algorithm isolated 9 hyper-dense Taskforce Zones distinct from standard urban noise.",
      "noiseCount": 388,
      "zones": [
        {
          "id": "C2",
          "name": "Primary Core",
          "count": 30,
          "color": "#1f77b4"
        },
        {
          "id": "C1",
          "name": "Micro-Cluster",
          "count": 19,
          "color": "#ff7f0e"
        },
        {
          "id": "C0",
          "name": "Retail Node",
          "count": 10,
          "color": "#2ca02c"
        },
        {
          "id": "C4",
          "name": "Transit Hub",
          "count": 10,
          "color": "#9467bd"
        },
        {
          "id": "C8",
          "name": "Nightlife Focus",
          "count": 8,
          "color": "#8c564b"
        },
        {
          "id": "C7",
          "name": "Estate Hotspot",
          "count": 7,
          "color": "#e377c2"
        },
        {
          "id": "C6",
          "name": "Primary Core",
          "count": 7,
          "color": "#1f77b4"
        },
        {
          "id": "C5",
          "name": "Micro-Cluster",
          "count": 5,
          "color": "#ff7f0e"
        },
        {
          "id": "C3",
          "name": "Retail Node",
          "count": 4,
          "color": "#2ca02c"
        }
      ]
    }
  },
  "Derby": {
    "kmeans": {
      "C0": {
        "name": "Low-Risk Residential",
        "alertLevel": "low",
        "forecast": "Stable environment. Focus on community engagement.",
        "harmPer1000": 57140,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 4.4,
            "harm": 4.7
          },
          {
            "name": "Drug Offences",
            "volume": 1.6,
            "harm": 1.0
          },
          {
            "name": "Robbery",
            "volume": 0.9,
            "harm": 1.1
          },
          {
            "name": "Theft",
            "volume": 15.9,
            "harm": 1.5
          },
          {
            "name": "Vehicle Offences",
            "volume": 6.7,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 34.1,
            "harm": 83.0
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 8.7
          },
          {
            "name": "Income",
            "value": 10.3
          },
          {
            "name": "Employment",
            "value": 7.7
          },
          {
            "name": "Health",
            "value": 2.5
          }
        ]
      },
      "C1": {
        "name": "Standard Urban Mix",
        "alertLevel": "low",
        "forecast": "Average relative risk. Maintain standard patrol visibility.",
        "harmPer1000": 89071,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.5,
            "harm": 2.0
          },
          {
            "name": "Drug Offences",
            "volume": 2.3,
            "harm": 1.1
          },
          {
            "name": "Robbery",
            "volume": 0.5,
            "harm": 0.5
          },
          {
            "name": "Theft",
            "volume": 8.8,
            "harm": 0.6
          },
          {
            "name": "Vehicle Offences",
            "volume": 4.8,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 48.5,
            "harm": 89.7
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 15.8
          },
          {
            "name": "Income",
            "value": 19.3
          },
          {
            "name": "Employment",
            "value": 11.5
          },
          {
            "name": "Health",
            "value": 1.1
          }
        ]
      },
      "C2": {
        "name": "Property & Retail Focus",
        "alertLevel": "medium",
        "forecast": "Elevated volume. Increase targeted patrols.",
        "harmPer1000": 150550,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 3.9,
            "harm": 4.1
          },
          {
            "name": "Drug Offences",
            "volume": 3.0,
            "harm": 1.9
          },
          {
            "name": "Robbery",
            "volume": 0.9,
            "harm": 1.1
          },
          {
            "name": "Theft",
            "volume": 21.6,
            "harm": 2.0
          },
          {
            "name": "Vehicle Offences",
            "volume": 4.6,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 33.9,
            "harm": 82.7
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 29.1
          },
          {
            "name": "Income",
            "value": 29.5
          },
          {
            "name": "Employment",
            "value": 17.1
          },
          {
            "name": "Health",
            "value": 7.4
          }
        ]
      },
      "C3": {
        "name": "High-Volume Hub",
        "alertLevel": "medium",
        "forecast": "Dense activity area. Monitor for emerging trends.",
        "harmPer1000": 173618,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.8,
            "harm": 2.4
          },
          {
            "name": "Drug Offences",
            "volume": 3.2,
            "harm": 1.7
          },
          {
            "name": "Robbery",
            "volume": 1.0,
            "harm": 1.0
          },
          {
            "name": "Theft",
            "volume": 12.5,
            "harm": 1.0
          },
          {
            "name": "Vehicle Offences",
            "volume": 3.6,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 43.3,
            "harm": 86.7
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 48.0
          },
          {
            "name": "Income",
            "value": 48.9
          },
          {
            "name": "Employment",
            "value": 26.1
          },
          {
            "name": "Health",
            "value": 11.0
          }
        ]
      },
      "C4": {
        "name": "Severe Deprivation/Violence",
        "alertLevel": "critical",
        "forecast": "Critical risk. Requires multi-agency intervention.",
        "harmPer1000": 665905,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 1.9,
            "harm": 2.0
          },
          {
            "name": "Drug Offences",
            "volume": 7.7,
            "harm": 5.0
          },
          {
            "name": "Robbery",
            "volume": 1.7,
            "harm": 2.2
          },
          {
            "name": "Theft",
            "volume": 20.3,
            "harm": 2.0
          },
          {
            "name": "Vehicle Offences",
            "volume": 1.9,
            "harm": 0.0
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 31.1,
            "harm": 78.9
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 56.0
          },
          {
            "name": "Income",
            "value": 48.8
          },
          {
            "name": "Employment",
            "value": 29.9
          },
          {
            "name": "Health",
            "value": 15.9
          }
        ]
      }
    },
    "dbscan": {
      "summary": "The algorithm isolated 3 hyper-dense Taskforce Zones distinct from standard urban noise.",
      "noiseCount": 131,
      "zones": [
        {
          "id": "C0",
          "name": "Primary Core",
          "count": 9,
          "color": "#1f77b4"
        },
        {
          "id": "C1",
          "name": "Micro-Cluster",
          "count": 7,
          "color": "#ff7f0e"
        },
        {
          "id": "C2",
          "name": "Retail Node",
          "count": 5,
          "color": "#2ca02c"
        }
      ]
    }
  },
  "Leicester": {
    "kmeans": {
      "C0": {
        "name": "Low-Risk Residential",
        "alertLevel": "low",
        "forecast": "Stable environment. Focus on community engagement.",
        "harmPer1000": 63385,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 7.2,
            "harm": 7.9
          },
          {
            "name": "Drug Offences",
            "volume": 3.5,
            "harm": 2.3
          },
          {
            "name": "Robbery",
            "volume": 0.9,
            "harm": 1.2
          },
          {
            "name": "Theft",
            "volume": 16.4,
            "harm": 1.6
          },
          {
            "name": "Vehicle Offences",
            "volume": 10.1,
            "harm": 0.2
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 30.3,
            "harm": 78.0
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 15.4
          },
          {
            "name": "Income",
            "value": 16.0
          },
          {
            "name": "Employment",
            "value": 8.4
          },
          {
            "name": "Health",
            "value": 3.5
          }
        ]
      },
      "C1": {
        "name": "Standard Urban Mix",
        "alertLevel": "low",
        "forecast": "Average relative risk. Maintain standard patrol visibility.",
        "harmPer1000": 78567,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 4.3,
            "harm": 3.6
          },
          {
            "name": "Drug Offences",
            "volume": 3.2,
            "harm": 1.6
          },
          {
            "name": "Robbery",
            "volume": 0.8,
            "harm": 0.8
          },
          {
            "name": "Theft",
            "volume": 8.9,
            "harm": 0.7
          },
          {
            "name": "Vehicle Offences",
            "volume": 6.4,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 44.5,
            "harm": 86.9
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 26.0
          },
          {
            "name": "Income",
            "value": 28.4
          },
          {
            "name": "Employment",
            "value": 12.5
          },
          {
            "name": "Health",
            "value": 0.3
          }
        ]
      },
      "C2": {
        "name": "Property & Retail Focus",
        "alertLevel": "medium",
        "forecast": "Elevated volume. Increase targeted patrols.",
        "harmPer1000": 109225,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 4.5,
            "harm": 4.8
          },
          {
            "name": "Drug Offences",
            "volume": 5.4,
            "harm": 3.4
          },
          {
            "name": "Robbery",
            "volume": 1.7,
            "harm": 2.1
          },
          {
            "name": "Theft",
            "volume": 13.7,
            "harm": 1.3
          },
          {
            "name": "Vehicle Offences",
            "volume": 7.0,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 31.7,
            "harm": 78.2
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 30.5
          },
          {
            "name": "Income",
            "value": 29.2
          },
          {
            "name": "Employment",
            "value": 12.1
          },
          {
            "name": "Health",
            "value": 0.6
          }
        ]
      },
      "C3": {
        "name": "High-Volume Hub",
        "alertLevel": "medium",
        "forecast": "Dense activity area. Monitor for emerging trends.",
        "harmPer1000": 134097,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 3.3,
            "harm": 2.9
          },
          {
            "name": "Drug Offences",
            "volume": 3.4,
            "harm": 1.8
          },
          {
            "name": "Robbery",
            "volume": 0.9,
            "harm": 0.9
          },
          {
            "name": "Theft",
            "volume": 10.5,
            "harm": 0.8
          },
          {
            "name": "Vehicle Offences",
            "volume": 4.4,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 42.0,
            "harm": 85.6
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 48.9
          },
          {
            "name": "Income",
            "value": 49.1
          },
          {
            "name": "Employment",
            "value": 24.4
          },
          {
            "name": "Health",
            "value": 9.3
          }
        ]
      },
      "C4": {
        "name": "Severe Deprivation/Violence",
        "alertLevel": "critical",
        "forecast": "Critical risk. Requires multi-agency intervention.",
        "harmPer1000": 325554,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.7,
            "harm": 3.1
          },
          {
            "name": "Drug Offences",
            "volume": 4.2,
            "harm": 3.0
          },
          {
            "name": "Robbery",
            "volume": 1.6,
            "harm": 2.2
          },
          {
            "name": "Theft",
            "volume": 26.5,
            "harm": 2.8
          },
          {
            "name": "Vehicle Offences",
            "volume": 4.3,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 28.9,
            "harm": 79.3
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 29.8
          },
          {
            "name": "Income",
            "value": 23.3
          },
          {
            "name": "Employment",
            "value": 11.7
          },
          {
            "name": "Health",
            "value": 6.8
          }
        ]
      }
    },
    "dbscan": {
      "summary": "The algorithm isolated 3 hyper-dense Taskforce Zones distinct from standard urban noise.",
      "noiseCount": 171,
      "zones": [
        {
          "id": "C1",
          "name": "Primary Core",
          "count": 13,
          "color": "#1f77b4"
        },
        {
          "id": "C0",
          "name": "Micro-Cluster",
          "count": 8,
          "color": "#ff7f0e"
        },
        {
          "id": "C2",
          "name": "Retail Node",
          "count": 8,
          "color": "#2ca02c"
        }
      ]
    }
  },
  "Nottingham": {
    "kmeans": {
      "C0": {
        "name": "Low-Risk Residential",
        "alertLevel": "low",
        "forecast": "Stable environment. Focus on community engagement.",
        "harmPer1000": 65977,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 4.4,
            "harm": 6.6
          },
          {
            "name": "Drug Offences",
            "volume": 3.5,
            "harm": 3.2
          },
          {
            "name": "Robbery",
            "volume": 1.5,
            "harm": 2.6
          },
          {
            "name": "Theft",
            "volume": 28.0,
            "harm": 3.7
          },
          {
            "name": "Vehicle Offences",
            "volume": 7.3,
            "harm": 0.2
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 20.1,
            "harm": 70.1
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 13.5
          },
          {
            "name": "Income",
            "value": 11.7
          },
          {
            "name": "Employment",
            "value": 7.1
          },
          {
            "name": "Health",
            "value": 0.7
          }
        ]
      },
      "C1": {
        "name": "Standard Urban Mix",
        "alertLevel": "low",
        "forecast": "Average relative risk. Maintain standard patrol visibility.",
        "harmPer1000": 76281,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 3.9,
            "harm": 3.9
          },
          {
            "name": "Drug Offences",
            "volume": 3.2,
            "harm": 1.9
          },
          {
            "name": "Robbery",
            "volume": 1.2,
            "harm": 1.4
          },
          {
            "name": "Theft",
            "volume": 17.2,
            "harm": 1.5
          },
          {
            "name": "Vehicle Offences",
            "volume": 5.3,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 35.7,
            "harm": 82.7
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 17.6
          },
          {
            "name": "Income",
            "value": 18.2
          },
          {
            "name": "Employment",
            "value": 11.3
          },
          {
            "name": "Health",
            "value": 2.6
          }
        ]
      },
      "C2": {
        "name": "Property & Retail Focus",
        "alertLevel": "medium",
        "forecast": "Elevated volume. Increase targeted patrols.",
        "harmPer1000": 121767,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.9,
            "harm": 2.8
          },
          {
            "name": "Drug Offences",
            "volume": 4.0,
            "harm": 2.3
          },
          {
            "name": "Robbery",
            "volume": 0.8,
            "harm": 0.9
          },
          {
            "name": "Theft",
            "volume": 9.1,
            "harm": 0.8
          },
          {
            "name": "Vehicle Offences",
            "volume": 4.3,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 37.1,
            "harm": 82.3
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 46.1
          },
          {
            "name": "Income",
            "value": 47.8
          },
          {
            "name": "Employment",
            "value": 27.4
          },
          {
            "name": "Health",
            "value": 12.4
          }
        ]
      },
      "C3": {
        "name": "High-Volume Hub",
        "alertLevel": "medium",
        "forecast": "Dense activity area. Monitor for emerging trends.",
        "harmPer1000": 187032,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.6,
            "harm": 3.4
          },
          {
            "name": "Drug Offences",
            "volume": 4.2,
            "harm": 3.3
          },
          {
            "name": "Robbery",
            "volume": 1.7,
            "harm": 2.5
          },
          {
            "name": "Theft",
            "volume": 26.2,
            "harm": 3.1
          },
          {
            "name": "Vehicle Offences",
            "volume": 3.3,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 24.5,
            "harm": 74.9
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 41.4
          },
          {
            "name": "Income",
            "value": 38.2
          },
          {
            "name": "Employment",
            "value": 21.6
          },
          {
            "name": "Health",
            "value": 12.8
          }
        ]
      },
      "C4": {
        "name": "Severe Deprivation/Violence",
        "alertLevel": "critical",
        "forecast": "Critical risk. Requires multi-agency intervention.",
        "harmPer1000": 865178,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.1,
            "harm": 2.8
          },
          {
            "name": "Drug Offences",
            "volume": 4.7,
            "harm": 3.9
          },
          {
            "name": "Robbery",
            "volume": 2.3,
            "harm": 3.7
          },
          {
            "name": "Theft",
            "volume": 30.6,
            "harm": 3.7
          },
          {
            "name": "Vehicle Offences",
            "volume": 1.4,
            "harm": 0.0
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 23.4,
            "harm": 74.3
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 24.9
          },
          {
            "name": "Income",
            "value": 17.3
          },
          {
            "name": "Employment",
            "value": 7.8
          },
          {
            "name": "Health",
            "value": 7.5
          }
        ]
      }
    },
    "dbscan": {
      "summary": "The algorithm isolated 2 hyper-dense Taskforce Zones distinct from standard urban noise.",
      "noiseCount": 71,
      "zones": [
        {
          "id": "C0",
          "name": "Primary Core",
          "count": 103,
          "color": "#1f77b4"
        },
        {
          "id": "C1",
          "name": "Micro-Cluster",
          "count": 5,
          "color": "#ff7f0e"
        }
      ]
    }
  },
  "Stoke-on-Trent": {
    "kmeans": {
      "C0": {
        "name": "Low-Risk Residential",
        "alertLevel": "low",
        "forecast": "Stable environment. Focus on community engagement.",
        "harmPer1000": 47546,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 6.8,
            "harm": 7.3
          },
          {
            "name": "Drug Offences",
            "volume": 1.0,
            "harm": 0.7
          },
          {
            "name": "Robbery",
            "volume": 1.1,
            "harm": 1.3
          },
          {
            "name": "Theft",
            "volume": 17.7,
            "harm": 1.7
          },
          {
            "name": "Vehicle Offences",
            "volume": 5.8,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 32.7,
            "harm": 81.0
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 9.7
          },
          {
            "name": "Income",
            "value": 9.5
          },
          {
            "name": "Employment",
            "value": 7.9
          },
          {
            "name": "Health",
            "value": 1.2
          }
        ]
      },
      "C1": {
        "name": "Standard Urban Mix",
        "alertLevel": "low",
        "forecast": "Average relative risk. Maintain standard patrol visibility.",
        "harmPer1000": 74331,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 4.8,
            "harm": 4.1
          },
          {
            "name": "Drug Offences",
            "volume": 1.6,
            "harm": 0.8
          },
          {
            "name": "Robbery",
            "volume": 0.7,
            "harm": 0.7
          },
          {
            "name": "Theft",
            "volume": 10.9,
            "harm": 0.8
          },
          {
            "name": "Vehicle Offences",
            "volume": 4.4,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 43.6,
            "harm": 86.4
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 16.6
          },
          {
            "name": "Income",
            "value": 16.6
          },
          {
            "name": "Employment",
            "value": 11.2
          },
          {
            "name": "Health",
            "value": 4.2
          }
        ]
      },
      "C2": {
        "name": "Property & Retail Focus",
        "alertLevel": "medium",
        "forecast": "Elevated volume. Increase targeted patrols.",
        "harmPer1000": 151396,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 3.6,
            "harm": 2.9
          },
          {
            "name": "Drug Offences",
            "volume": 2.1,
            "harm": 1.0
          },
          {
            "name": "Robbery",
            "volume": 1.0,
            "harm": 0.9
          },
          {
            "name": "Theft",
            "volume": 7.4,
            "harm": 0.5
          },
          {
            "name": "Vehicle Offences",
            "volume": 3.9,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 45.9,
            "harm": 87.1
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 47.4
          },
          {
            "name": "Income",
            "value": 47.4
          },
          {
            "name": "Employment",
            "value": 27.0
          },
          {
            "name": "Health",
            "value": 14.1
          }
        ]
      },
      "C3": {
        "name": "High-Volume Hub",
        "alertLevel": "medium",
        "forecast": "Dense activity area. Monitor for emerging trends.",
        "harmPer1000": 176268,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 5.8,
            "harm": 5.8
          },
          {
            "name": "Drug Offences",
            "volume": 2.8,
            "harm": 1.7
          },
          {
            "name": "Robbery",
            "volume": 1.4,
            "harm": 1.7
          },
          {
            "name": "Theft",
            "volume": 14.7,
            "harm": 1.3
          },
          {
            "name": "Vehicle Offences",
            "volume": 4.9,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 34.1,
            "harm": 79.5
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 41.8
          },
          {
            "name": "Income",
            "value": 39.7
          },
          {
            "name": "Employment",
            "value": 22.6
          },
          {
            "name": "Health",
            "value": 12.1
          }
        ]
      },
      "C4": {
        "name": "Severe Deprivation/Violence",
        "alertLevel": "critical",
        "forecast": "Critical risk. Requires multi-agency intervention.",
        "harmPer1000": 433925,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 3.9,
            "harm": 5.0
          },
          {
            "name": "Drug Offences",
            "volume": 2.6,
            "harm": 2.0
          },
          {
            "name": "Robbery",
            "volume": 1.6,
            "harm": 2.4
          },
          {
            "name": "Theft",
            "volume": 25.9,
            "harm": 3.0
          },
          {
            "name": "Vehicle Offences",
            "volume": 2.6,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 25.2,
            "harm": 75.2
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 44.1
          },
          {
            "name": "Income",
            "value": 38.2
          },
          {
            "name": "Employment",
            "value": 23.6
          },
          {
            "name": "Health",
            "value": 12.3
          }
        ]
      }
    },
    "dbscan": {
      "summary": "The algorithm isolated 5 hyper-dense Taskforce Zones distinct from standard urban noise.",
      "noiseCount": 95,
      "zones": [
        {
          "id": "C1",
          "name": "Primary Core",
          "count": 23,
          "color": "#1f77b4"
        },
        {
          "id": "C0",
          "name": "Micro-Cluster",
          "count": 19,
          "color": "#ff7f0e"
        },
        {
          "id": "C2",
          "name": "Retail Node",
          "count": 16,
          "color": "#2ca02c"
        },
        {
          "id": "C3",
          "name": "Transit Hub",
          "count": 6,
          "color": "#9467bd"
        },
        {
          "id": "C4",
          "name": "Nightlife Focus",
          "count": 4,
          "color": "#8c564b"
        }
      ]
    }
  },
  "Bristol, City of": {
    "kmeans": {
      "C0": {
        "name": "Low-Risk Residential",
        "alertLevel": "low",
        "forecast": "Stable environment. Focus on community engagement.",
        "harmPer1000": 41869,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 7.5,
            "harm": 9.8
          },
          {
            "name": "Drug Offences",
            "volume": 1.3,
            "harm": 1.0
          },
          {
            "name": "Robbery",
            "volume": 1.3,
            "harm": 2.0
          },
          {
            "name": "Theft",
            "volume": 18.3,
            "harm": 2.1
          },
          {
            "name": "Vehicle Offences",
            "volume": 16.3,
            "harm": 0.4
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 24.9,
            "harm": 76.0
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 6.3
          },
          {
            "name": "Income",
            "value": 5.6
          },
          {
            "name": "Employment",
            "value": 4.3
          },
          {
            "name": "Health",
            "value": 8.9
          }
        ]
      },
      "C1": {
        "name": "Standard Urban Mix",
        "alertLevel": "low",
        "forecast": "Average relative risk. Maintain standard patrol visibility.",
        "harmPer1000": 54209,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.6,
            "harm": 12.0
          },
          {
            "name": "Drug Offences",
            "volume": 0.0,
            "harm": 0.0
          },
          {
            "name": "Robbery",
            "volume": 0.9,
            "harm": 4.8
          },
          {
            "name": "Theft",
            "volume": 80.6,
            "harm": 33.3
          },
          {
            "name": "Vehicle Offences",
            "volume": 4.2,
            "harm": 0.4
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 4.0,
            "harm": 42.8
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 6.4
          },
          {
            "name": "Income",
            "value": 6.2
          },
          {
            "name": "Employment",
            "value": 5.4
          },
          {
            "name": "Health",
            "value": 7.8
          }
        ]
      },
      "C2": {
        "name": "Property & Retail Focus",
        "alertLevel": "medium",
        "forecast": "Elevated volume. Increase targeted patrols.",
        "harmPer1000": 92452,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 4.1,
            "harm": 3.7
          },
          {
            "name": "Drug Offences",
            "volume": 1.6,
            "harm": 0.9
          },
          {
            "name": "Robbery",
            "volume": 1.2,
            "harm": 1.2
          },
          {
            "name": "Theft",
            "volume": 11.2,
            "harm": 0.9
          },
          {
            "name": "Vehicle Offences",
            "volume": 8.6,
            "harm": 0.2
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 40.5,
            "harm": 86.6
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 15.5
          },
          {
            "name": "Income",
            "value": 15.8
          },
          {
            "name": "Employment",
            "value": 9.8
          },
          {
            "name": "Health",
            "value": 0.2
          }
        ]
      },
      "C3": {
        "name": "High-Volume Hub",
        "alertLevel": "medium",
        "forecast": "Dense activity area. Monitor for emerging trends.",
        "harmPer1000": 175126,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 3.0,
            "harm": 2.8
          },
          {
            "name": "Drug Offences",
            "volume": 2.0,
            "harm": 1.1
          },
          {
            "name": "Robbery",
            "volume": 1.4,
            "harm": 1.5
          },
          {
            "name": "Theft",
            "volume": 13.7,
            "harm": 1.1
          },
          {
            "name": "Vehicle Offences",
            "volume": 5.0,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 40.5,
            "harm": 86.3
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 43.7
          },
          {
            "name": "Income",
            "value": 43.0
          },
          {
            "name": "Employment",
            "value": 24.5
          },
          {
            "name": "Health",
            "value": 10.7
          }
        ]
      },
      "C4": {
        "name": "Severe Deprivation/Violence",
        "alertLevel": "critical",
        "forecast": "Critical risk. Requires multi-agency intervention.",
        "harmPer1000": 195827,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 3.6,
            "harm": 4.4
          },
          {
            "name": "Drug Offences",
            "volume": 1.8,
            "harm": 1.3
          },
          {
            "name": "Robbery",
            "volume": 2.8,
            "harm": 3.9
          },
          {
            "name": "Theft",
            "volume": 25.7,
            "harm": 2.8
          },
          {
            "name": "Vehicle Offences",
            "volume": 4.8,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 27.4,
            "harm": 78.7
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 20.5
          },
          {
            "name": "Income",
            "value": 17.7
          },
          {
            "name": "Employment",
            "value": 10.5
          },
          {
            "name": "Health",
            "value": 3.7
          }
        ]
      }
    },
    "dbscan": {
      "summary": "The algorithm isolated 2 hyper-dense Taskforce Zones distinct from standard urban noise.",
      "noiseCount": 118,
      "zones": [
        {
          "id": "C0",
          "name": "Primary Core",
          "count": 142,
          "color": "#1f77b4"
        },
        {
          "id": "C1",
          "name": "Micro-Cluster",
          "count": 8,
          "color": "#ff7f0e"
        }
      ]
    }
  },
  "Plymouth": {
    "kmeans": {
      "C0": {
        "name": "Low-Risk Residential",
        "alertLevel": "low",
        "forecast": "Stable environment. Focus on community engagement.",
        "harmPer1000": 47620,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.9,
            "harm": 2.9
          },
          {
            "name": "Drug Offences",
            "volume": 2.4,
            "harm": 1.4
          },
          {
            "name": "Robbery",
            "volume": 0.3,
            "harm": 0.4
          },
          {
            "name": "Theft",
            "volume": 14.4,
            "harm": 1.3
          },
          {
            "name": "Vehicle Offences",
            "volume": 4.4,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 36.9,
            "harm": 84.6
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 10.1
          },
          {
            "name": "Income",
            "value": 11.3
          },
          {
            "name": "Employment",
            "value": 8.7
          },
          {
            "name": "Health",
            "value": 2.3
          }
        ]
      },
      "C1": {
        "name": "Standard Urban Mix",
        "alertLevel": "low",
        "forecast": "Average relative risk. Maintain standard patrol visibility.",
        "harmPer1000": 58134,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 1.8,
            "harm": 1.4
          },
          {
            "name": "Drug Offences",
            "volume": 2.6,
            "harm": 1.2
          },
          {
            "name": "Robbery",
            "volume": 0.2,
            "harm": 0.2
          },
          {
            "name": "Theft",
            "volume": 8.0,
            "harm": 0.5
          },
          {
            "name": "Vehicle Offences",
            "volume": 2.9,
            "harm": 0.0
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 50.4,
            "harm": 90.1
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 14.0
          },
          {
            "name": "Income",
            "value": 16.1
          },
          {
            "name": "Employment",
            "value": 11.0
          },
          {
            "name": "Health",
            "value": 0.0
          }
        ]
      },
      "C2": {
        "name": "Property & Retail Focus",
        "alertLevel": "medium",
        "forecast": "Elevated volume. Increase targeted patrols.",
        "harmPer1000": 123012,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 1.6,
            "harm": 1.3
          },
          {
            "name": "Drug Offences",
            "volume": 3.5,
            "harm": 1.6
          },
          {
            "name": "Robbery",
            "volume": 0.4,
            "harm": 0.4
          },
          {
            "name": "Theft",
            "volume": 8.6,
            "harm": 0.6
          },
          {
            "name": "Vehicle Offences",
            "volume": 2.6,
            "harm": 0.0
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 47.5,
            "harm": 88.1
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 40.2
          },
          {
            "name": "Income",
            "value": 41.9
          },
          {
            "name": "Employment",
            "value": 25.2
          },
          {
            "name": "Health",
            "value": 10.5
          }
        ]
      },
      "C3": {
        "name": "High-Volume Hub",
        "alertLevel": "medium",
        "forecast": "Dense activity area. Monitor for emerging trends.",
        "harmPer1000": 123759,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.3,
            "harm": 2.3
          },
          {
            "name": "Drug Offences",
            "volume": 4.4,
            "harm": 2.7
          },
          {
            "name": "Robbery",
            "volume": 0.7,
            "harm": 0.9
          },
          {
            "name": "Theft",
            "volume": 20.4,
            "harm": 1.9
          },
          {
            "name": "Vehicle Offences",
            "volume": 3.8,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 34.8,
            "harm": 82.8
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 26.8
          },
          {
            "name": "Income",
            "value": 23.5
          },
          {
            "name": "Employment",
            "value": 16.2
          },
          {
            "name": "Health",
            "value": 7.5
          }
        ]
      },
      "C4": {
        "name": "Severe Deprivation/Violence",
        "alertLevel": "critical",
        "forecast": "Critical risk. Requires multi-agency intervention.",
        "harmPer1000": 355596,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 1.7,
            "harm": 1.6
          },
          {
            "name": "Drug Offences",
            "volume": 4.7,
            "harm": 2.7
          },
          {
            "name": "Robbery",
            "volume": 0.9,
            "harm": 1.0
          },
          {
            "name": "Theft",
            "volume": 15.2,
            "harm": 1.3
          },
          {
            "name": "Vehicle Offences",
            "volume": 1.7,
            "harm": 0.0
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 37.4,
            "harm": 83.1
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 49.5
          },
          {
            "name": "Income",
            "value": 45.1
          },
          {
            "name": "Employment",
            "value": 28.5
          },
          {
            "name": "Health",
            "value": 14.7
          }
        ]
      }
    },
    "dbscan": {
      "summary": "The algorithm isolated 4 hyper-dense Taskforce Zones distinct from standard urban noise.",
      "noiseCount": 133,
      "zones": [
        {
          "id": "C2",
          "name": "Primary Core",
          "count": 13,
          "color": "#1f77b4"
        },
        {
          "id": "C1",
          "name": "Micro-Cluster",
          "count": 8,
          "color": "#ff7f0e"
        },
        {
          "id": "C0",
          "name": "Retail Node",
          "count": 5,
          "color": "#2ca02c"
        },
        {
          "id": "C3",
          "name": "Transit Hub",
          "count": 5,
          "color": "#9467bd"
        }
      ]
    }
  },
  "Reading": {
    "kmeans": {
      "C0": {
        "name": "Low-Risk Residential",
        "alertLevel": "low",
        "forecast": "Stable environment. Focus on community engagement.",
        "harmPer1000": 35931,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 4.2,
            "harm": 4.2
          },
          {
            "name": "Drug Offences",
            "volume": 1.4,
            "harm": 0.9
          },
          {
            "name": "Robbery",
            "volume": 0.6,
            "harm": 0.7
          },
          {
            "name": "Theft",
            "volume": 23.1,
            "harm": 2.1
          },
          {
            "name": "Vehicle Offences",
            "volume": 9.6,
            "harm": 0.2
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 37.0,
            "harm": 86.9
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 5.4
          },
          {
            "name": "Income",
            "value": 7.7
          },
          {
            "name": "Employment",
            "value": 5.1
          },
          {
            "name": "Health",
            "value": 9.8
          }
        ]
      },
      "C1": {
        "name": "Standard Urban Mix",
        "alertLevel": "low",
        "forecast": "Average relative risk. Maintain standard patrol visibility.",
        "harmPer1000": 63610,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 5.7,
            "harm": 6.9
          },
          {
            "name": "Drug Offences",
            "volume": 4.0,
            "harm": 2.9
          },
          {
            "name": "Robbery",
            "volume": 1.4,
            "harm": 1.9
          },
          {
            "name": "Theft",
            "volume": 26.7,
            "harm": 2.9
          },
          {
            "name": "Vehicle Offences",
            "volume": 8.3,
            "harm": 0.2
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 27.3,
            "harm": 77.2
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 9.0
          },
          {
            "name": "Income",
            "value": 10.4
          },
          {
            "name": "Employment",
            "value": 5.6
          },
          {
            "name": "Health",
            "value": 6.4
          }
        ]
      },
      "C2": {
        "name": "Property & Retail Focus",
        "alertLevel": "medium",
        "forecast": "Elevated volume. Increase targeted patrols.",
        "harmPer1000": 106474,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 3.7,
            "harm": 3.4
          },
          {
            "name": "Drug Offences",
            "volume": 2.3,
            "harm": 1.3
          },
          {
            "name": "Robbery",
            "volume": 1.2,
            "harm": 1.3
          },
          {
            "name": "Theft",
            "volume": 16.6,
            "harm": 1.4
          },
          {
            "name": "Vehicle Offences",
            "volume": 7.1,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 39.6,
            "harm": 85.8
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 19.4
          },
          {
            "name": "Income",
            "value": 22.2
          },
          {
            "name": "Employment",
            "value": 10.3
          },
          {
            "name": "Health",
            "value": 0.5
          }
        ]
      },
      "C3": {
        "name": "High-Volume Hub",
        "alertLevel": "medium",
        "forecast": "Dense activity area. Monitor for emerging trends.",
        "harmPer1000": 109144,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 3.7,
            "harm": 3.3
          },
          {
            "name": "Drug Offences",
            "volume": 3.2,
            "harm": 1.7
          },
          {
            "name": "Robbery",
            "volume": 1.0,
            "harm": 1.0
          },
          {
            "name": "Theft",
            "volume": 14.1,
            "harm": 1.1
          },
          {
            "name": "Vehicle Offences",
            "volume": 5.5,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 42.5,
            "harm": 86.2
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 35.8
          },
          {
            "name": "Income",
            "value": 39.5
          },
          {
            "name": "Employment",
            "value": 19.4
          },
          {
            "name": "Health",
            "value": 5.5
          }
        ]
      },
      "C4": {
        "name": "Severe Deprivation/Violence",
        "alertLevel": "critical",
        "forecast": "Critical risk. Requires multi-agency intervention.",
        "harmPer1000": 211970,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.5,
            "harm": 3.2
          },
          {
            "name": "Drug Offences",
            "volume": 1.9,
            "harm": 1.4
          },
          {
            "name": "Robbery",
            "volume": 1.9,
            "harm": 2.8
          },
          {
            "name": "Theft",
            "volume": 42.0,
            "harm": 4.7
          },
          {
            "name": "Vehicle Offences",
            "volume": 2.7,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 27.9,
            "harm": 81.7
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 20.0
          },
          {
            "name": "Income",
            "value": 20.1
          },
          {
            "name": "Employment",
            "value": 10.5
          },
          {
            "name": "Health",
            "value": 0.5
          }
        ]
      }
    },
    "dbscan": {
      "summary": "The algorithm isolated 2 hyper-dense Taskforce Zones distinct from standard urban noise.",
      "noiseCount": 81,
      "zones": [
        {
          "id": "C0",
          "name": "Primary Core",
          "count": 15,
          "color": "#1f77b4"
        },
        {
          "id": "C1",
          "name": "Micro-Cluster",
          "count": 4,
          "color": "#ff7f0e"
        }
      ]
    }
  },
  "Brighton and Hove": {
    "kmeans": {
      "C0": {
        "name": "Low-Risk Residential",
        "alertLevel": "low",
        "forecast": "Stable environment. Focus on community engagement.",
        "harmPer1000": 46881,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 4.8,
            "harm": 6.0
          },
          {
            "name": "Drug Offences",
            "volume": 4.2,
            "harm": 3.1
          },
          {
            "name": "Robbery",
            "volume": 0.9,
            "harm": 1.2
          },
          {
            "name": "Theft",
            "volume": 19.6,
            "harm": 2.2
          },
          {
            "name": "Vehicle Offences",
            "volume": 6.1,
            "harm": 0.2
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 25.7,
            "harm": 74.9
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 11.0
          },
          {
            "name": "Income",
            "value": 12.9
          },
          {
            "name": "Employment",
            "value": 8.1
          },
          {
            "name": "Health",
            "value": 5.1
          }
        ]
      },
      "C1": {
        "name": "Standard Urban Mix",
        "alertLevel": "low",
        "forecast": "Average relative risk. Maintain standard patrol visibility.",
        "harmPer1000": 55235,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 3.4,
            "harm": 3.3
          },
          {
            "name": "Drug Offences",
            "volume": 3.5,
            "harm": 2.0
          },
          {
            "name": "Robbery",
            "volume": 0.6,
            "harm": 0.7
          },
          {
            "name": "Theft",
            "volume": 13.1,
            "harm": 1.1
          },
          {
            "name": "Vehicle Offences",
            "volume": 4.9,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 37.0,
            "harm": 83.7
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 13.1
          },
          {
            "name": "Income",
            "value": 15.4
          },
          {
            "name": "Employment",
            "value": 9.7
          },
          {
            "name": "Health",
            "value": 2.9
          }
        ]
      },
      "C2": {
        "name": "Property & Retail Focus",
        "alertLevel": "medium",
        "forecast": "Elevated volume. Increase targeted patrols.",
        "harmPer1000": 120174,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.7,
            "harm": 2.4
          },
          {
            "name": "Drug Offences",
            "volume": 3.5,
            "harm": 1.9
          },
          {
            "name": "Robbery",
            "volume": 0.5,
            "harm": 0.6
          },
          {
            "name": "Theft",
            "volume": 12.2,
            "harm": 1.0
          },
          {
            "name": "Vehicle Offences",
            "volume": 3.3,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 40.1,
            "harm": 84.9
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 43.2
          },
          {
            "name": "Income",
            "value": 44.1
          },
          {
            "name": "Employment",
            "value": 25.9
          },
          {
            "name": "Health",
            "value": 11.0
          }
        ]
      },
      "C3": {
        "name": "High-Volume Hub",
        "alertLevel": "medium",
        "forecast": "Dense activity area. Monitor for emerging trends.",
        "harmPer1000": 189835,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.3,
            "harm": 3.0
          },
          {
            "name": "Drug Offences",
            "volume": 4.3,
            "harm": 3.3
          },
          {
            "name": "Robbery",
            "volume": 1.4,
            "harm": 2.1
          },
          {
            "name": "Theft",
            "volume": 30.3,
            "harm": 3.5
          },
          {
            "name": "Vehicle Offences",
            "volume": 2.6,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 25.4,
            "harm": 77.2
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 25.1
          },
          {
            "name": "Income",
            "value": 23.8
          },
          {
            "name": "Employment",
            "value": 14.6
          },
          {
            "name": "Health",
            "value": 4.1
          }
        ]
      },
      "C4": {
        "name": "Severe Deprivation/Violence",
        "alertLevel": "critical",
        "forecast": "Critical risk. Requires multi-agency intervention.",
        "harmPer1000": 1837106,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.2,
            "harm": 2.7
          },
          {
            "name": "Drug Offences",
            "volume": 3.2,
            "harm": 2.4
          },
          {
            "name": "Robbery",
            "volume": 1.7,
            "harm": 2.4
          },
          {
            "name": "Theft",
            "volume": 36.2,
            "harm": 4.0
          },
          {
            "name": "Vehicle Offences",
            "volume": 1.8,
            "harm": 0.0
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 27.9,
            "harm": 80.3
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 29.2
          },
          {
            "name": "Income",
            "value": 17.7
          },
          {
            "name": "Employment",
            "value": 13.2
          },
          {
            "name": "Health",
            "value": 6.7
          }
        ]
      }
    },
    "dbscan": {
      "summary": "The algorithm isolated 3 hyper-dense Taskforce Zones distinct from standard urban noise.",
      "noiseCount": 73,
      "zones": [
        {
          "id": "C0",
          "name": "Primary Core",
          "count": 83,
          "color": "#1f77b4"
        },
        {
          "id": "C1",
          "name": "Micro-Cluster",
          "count": 5,
          "color": "#ff7f0e"
        },
        {
          "id": "C2",
          "name": "Retail Node",
          "count": 4,
          "color": "#2ca02c"
        }
      ]
    }
  },
  "Portsmouth": {
    "kmeans": {
      "C0": {
        "name": "Low-Risk Residential",
        "alertLevel": "low",
        "forecast": "Stable environment. Focus on community engagement.",
        "harmPer1000": 55719,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 3.9,
            "harm": 3.7
          },
          {
            "name": "Drug Offences",
            "volume": 2.3,
            "harm": 1.3
          },
          {
            "name": "Robbery",
            "volume": 0.6,
            "harm": 0.6
          },
          {
            "name": "Theft",
            "volume": 14.5,
            "harm": 1.2
          },
          {
            "name": "Vehicle Offences",
            "volume": 8.8,
            "harm": 0.2
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 39.4,
            "harm": 86.1
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 11.3
          },
          {
            "name": "Income",
            "value": 12.4
          },
          {
            "name": "Employment",
            "value": 7.8
          },
          {
            "name": "Health",
            "value": 3.9
          }
        ]
      },
      "C1": {
        "name": "Standard Urban Mix",
        "alertLevel": "low",
        "forecast": "Average relative risk. Maintain standard patrol visibility.",
        "harmPer1000": 91294,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 3.0,
            "harm": 2.2
          },
          {
            "name": "Drug Offences",
            "volume": 2.6,
            "harm": 1.1
          },
          {
            "name": "Robbery",
            "volume": 0.5,
            "harm": 0.5
          },
          {
            "name": "Theft",
            "volume": 8.7,
            "harm": 0.6
          },
          {
            "name": "Vehicle Offences",
            "volume": 6.2,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 53.2,
            "harm": 90.2
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 22.4
          },
          {
            "name": "Income",
            "value": 23.5
          },
          {
            "name": "Employment",
            "value": 13.1
          },
          {
            "name": "Health",
            "value": 1.8
          }
        ]
      },
      "C2": {
        "name": "Property & Retail Focus",
        "alertLevel": "medium",
        "forecast": "Elevated volume. Increase targeted patrols.",
        "harmPer1000": 120727,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 1.8,
            "harm": 2.2
          },
          {
            "name": "Drug Offences",
            "volume": 2.4,
            "harm": 1.7
          },
          {
            "name": "Robbery",
            "volume": 1.4,
            "harm": 2.0
          },
          {
            "name": "Theft",
            "volume": 36.2,
            "harm": 3.9
          },
          {
            "name": "Vehicle Offences",
            "volume": 3.9,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 28.8,
            "harm": 81.9
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 18.4
          },
          {
            "name": "Income",
            "value": 19.1
          },
          {
            "name": "Employment",
            "value": 10.0
          },
          {
            "name": "Health",
            "value": 1.0
          }
        ]
      },
      "C3": {
        "name": "High-Volume Hub",
        "alertLevel": "medium",
        "forecast": "Dense activity area. Monitor for emerging trends.",
        "harmPer1000": 130913,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.8,
            "harm": 2.5
          },
          {
            "name": "Drug Offences",
            "volume": 4.4,
            "harm": 2.4
          },
          {
            "name": "Robbery",
            "volume": 1.0,
            "harm": 1.0
          },
          {
            "name": "Theft",
            "volume": 14.3,
            "harm": 1.1
          },
          {
            "name": "Vehicle Offences",
            "volume": 5.4,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 40.4,
            "harm": 84.3
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 22.7
          },
          {
            "name": "Income",
            "value": 21.5
          },
          {
            "name": "Employment",
            "value": 11.8
          },
          {
            "name": "Health",
            "value": 1.8
          }
        ]
      },
      "C4": {
        "name": "Severe Deprivation/Violence",
        "alertLevel": "critical",
        "forecast": "Critical risk. Requires multi-agency intervention.",
        "harmPer1000": 254582,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.3,
            "harm": 2.0
          },
          {
            "name": "Drug Offences",
            "volume": 3.8,
            "harm": 2.0
          },
          {
            "name": "Robbery",
            "volume": 1.2,
            "harm": 1.2
          },
          {
            "name": "Theft",
            "volume": 17.4,
            "harm": 1.3
          },
          {
            "name": "Vehicle Offences",
            "volume": 3.5,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 41.8,
            "harm": 85.0
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 53.9
          },
          {
            "name": "Income",
            "value": 51.7
          },
          {
            "name": "Employment",
            "value": 27.8
          },
          {
            "name": "Health",
            "value": 13.3
          }
        ]
      }
    },
    "dbscan": {
      "summary": "The algorithm isolated 3 hyper-dense Taskforce Zones distinct from standard urban noise.",
      "noiseCount": 105,
      "zones": [
        {
          "id": "C1",
          "name": "Primary Core",
          "count": 10,
          "color": "#1f77b4"
        },
        {
          "id": "C0",
          "name": "Micro-Cluster",
          "count": 5,
          "color": "#ff7f0e"
        },
        {
          "id": "C2",
          "name": "Retail Node",
          "count": 5,
          "color": "#2ca02c"
        }
      ]
    }
  },
  "Southampton": {
    "kmeans": {
      "C0": {
        "name": "Low-Risk Residential",
        "alertLevel": "low",
        "forecast": "Stable environment. Focus on community engagement.",
        "harmPer1000": 58461,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 7.2,
            "harm": 6.5
          },
          {
            "name": "Drug Offences",
            "volume": 2.7,
            "harm": 1.4
          },
          {
            "name": "Robbery",
            "volume": 0.5,
            "harm": 0.5
          },
          {
            "name": "Theft",
            "volume": 11.9,
            "harm": 1.0
          },
          {
            "name": "Vehicle Offences",
            "volume": 11.4,
            "harm": 0.2
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 39.4,
            "harm": 83.2
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 10.7
          },
          {
            "name": "Income",
            "value": 12.6
          },
          {
            "name": "Employment",
            "value": 7.1
          },
          {
            "name": "Health",
            "value": 1.8
          }
        ]
      },
      "C1": {
        "name": "Standard Urban Mix",
        "alertLevel": "low",
        "forecast": "Average relative risk. Maintain standard patrol visibility.",
        "harmPer1000": 120292,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 4.3,
            "harm": 3.4
          },
          {
            "name": "Drug Offences",
            "volume": 2.5,
            "harm": 1.2
          },
          {
            "name": "Robbery",
            "volume": 0.6,
            "harm": 0.6
          },
          {
            "name": "Theft",
            "volume": 11.4,
            "harm": 0.8
          },
          {
            "name": "Vehicle Offences",
            "volume": 6.5,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 46.5,
            "harm": 86.9
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 24.0
          },
          {
            "name": "Income",
            "value": 24.9
          },
          {
            "name": "Employment",
            "value": 13.9
          },
          {
            "name": "Health",
            "value": 6.2
          }
        ]
      },
      "C2": {
        "name": "Property & Retail Focus",
        "alertLevel": "medium",
        "forecast": "Elevated volume. Increase targeted patrols.",
        "harmPer1000": 134338,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 4.1,
            "harm": 4.3
          },
          {
            "name": "Drug Offences",
            "volume": 3.1,
            "harm": 1.9
          },
          {
            "name": "Robbery",
            "volume": 1.4,
            "harm": 1.7
          },
          {
            "name": "Theft",
            "volume": 24.2,
            "harm": 2.2
          },
          {
            "name": "Vehicle Offences",
            "volume": 6.4,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 33.3,
            "harm": 80.9
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 19.3
          },
          {
            "name": "Income",
            "value": 19.6
          },
          {
            "name": "Employment",
            "value": 10.8
          },
          {
            "name": "Health",
            "value": 3.7
          }
        ]
      },
      "C3": {
        "name": "High-Volume Hub",
        "alertLevel": "medium",
        "forecast": "Dense activity area. Monitor for emerging trends.",
        "harmPer1000": 177334,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 3.2,
            "harm": 2.6
          },
          {
            "name": "Drug Offences",
            "volume": 3.4,
            "harm": 1.6
          },
          {
            "name": "Robbery",
            "volume": 0.9,
            "harm": 0.9
          },
          {
            "name": "Theft",
            "volume": 12.3,
            "harm": 0.9
          },
          {
            "name": "Vehicle Offences",
            "volume": 4.7,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 46.0,
            "harm": 86.5
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 48.2
          },
          {
            "name": "Income",
            "value": 46.9
          },
          {
            "name": "Employment",
            "value": 26.1
          },
          {
            "name": "Health",
            "value": 12.9
          }
        ]
      },
      "C4": {
        "name": "Severe Deprivation/Violence",
        "alertLevel": "critical",
        "forecast": "Critical risk. Requires multi-agency intervention.",
        "harmPer1000": 563714,
        "crimes": [
          {
            "name": "Burglary",
            "volume": 2.4,
            "harm": 2.6
          },
          {
            "name": "Drug Offences",
            "volume": 6.7,
            "harm": 4.1
          },
          {
            "name": "Robbery",
            "volume": 1.6,
            "harm": 2.0
          },
          {
            "name": "Theft",
            "volume": 28.1,
            "harm": 2.6
          },
          {
            "name": "Vehicle Offences",
            "volume": 2.5,
            "harm": 0.1
          },
          {
            "name": "Violence & Sexual Offences",
            "volume": 33.2,
            "harm": 80.4
          }
        ],
        "imd": [
          {
            "name": "Overall IMD",
            "value": 28.5
          },
          {
            "name": "Income",
            "value": 24.7
          },
          {
            "name": "Employment",
            "value": 11.4
          },
          {
            "name": "Health",
            "value": 8.8
          }
        ]
      }
    },
    "dbscan": {
      "summary": "The algorithm isolated 2 hyper-dense Taskforce Zones distinct from standard urban noise.",
      "noiseCount": 21,
      "zones": [
        {
          "id": "C0",
          "name": "Primary Core",
          "count": 127,
          "color": "#1f77b4"
        },
        {
          "id": "C1",
          "name": "Micro-Cluster",
          "count": 4,
          "color": "#ff7f0e"
        }
      ]
    }
  }
};
