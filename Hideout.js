let moduleList = [
    "AirFilteringUnit",
    "Bitcoinfarm",
    "Boozegenerator",
    "Generator",
    "Heating",
    "Illumination",
    "IntelligenceCenter",
    "Lavatory",
    "Library",
    "Medstation",
    "Nutritionunit",
    "RestSpace",
    "Scavcase",
    "Security",
    "Shootingrange",
    "Solarpower",
    "Stash",
    "Vents",
    "Watercollector",
    "Workbench",
    "Christmastree"
];
let materialList = [
    "Dollars",
    "CPUFan",
    "Powersupplyunit",
    "Powercord",
    "Electricdrill",
    "Printedcircuitboard",
    "Phasecontrolrelay",
    "Siliconetubes",
    "Electricmotor",
    "Pressuregauges",
    "Analogthermometers",
    "Corrugatedhose",
    "Roubles",
    "Phasecontrolrelays",
    "Wires",
    "Sparkplug",
    "Radiatorhelix",
    "Lightbulb",
    "Capacitors",
    "Folderwithintelligence",
    "SecureFlashdrive",
    "Damagedharddrive",
    "MilitaryCOFDMwirelessSignalTransmitters",
    "VPXFlashStorageModules",
    "Gasanalyzers",
    "Militarycable",
    "Corrugatedhoses",
    "Apackofscrews",
    "Asetoftools",
    "Xenomorphsealingfoam",
    "Medicalbloodset",
    "Salinesolution",
    "LEDXSkinTransilluminator",
    "Opthalmoscope",
    "Wrench",
    "Heat-exchangealkalisurfacewasher",
    "CoffeeMajaica",
    "Sodiumbicarbonate",
    "Bronzelion",
    "Goldskullring",
    "Goldenneckchain",
    "Rolersubmarinergoldwristwatch",
    "WorkingLCD",
    "NIXXORlens",
    "SSDdrive",
    "Apackofnails",
    "Screwnut",
    "Bolts",
    "Ducttape",
    "Euros",
    "Phasedarrayelement",
    "Militarypowerfilter",
    "Handdrill",
    "WD-40100ml",
    "Carbattery",
    "PliersElite",
    "Shustrilosealingfoam",
    "Screwnuts",
    "LeathermanMultitool",
    "FireKleangunlube",
    "Christmastreedecorationball(red)",
    "Christmastreedecorationball(silver)",
    "Christmastreedecorationball(violet)"
]
let totalRequirement = {
    "Dollars": 13000,
    "CPUFan": 50,
    "Powersupplyunit": 15,
    "Powercord": 13,
    "Electricdrill": 6,
    "Printedcircuitboard": 10,
    "Phasecontrolrelay": 5,
    "Siliconetubes": 14,
    "Electricmotor": 12,
    "Pressuregauges": 8,
    "Analogthermometers": 2,
    "Corrugatedhose": 17,
    "Roubles": 13477000,
    "Phasecontrolrelays": 11,
    "Wires": 53,
    "Sparkplug": 5,
    "Radiatorhelix": 8,
    "Lightbulb": 14,
    "Capacitors": 12,
    "Folderwithintelligence": 4,
    "SecureFlashdrive": 3,
    "Damagedharddrive": 4,
    "MilitaryCOFDMwirelessSignalTransmitters": 2,
    "VPXFlashStorageModules": 2,
    "Gasanalyzers": 3,
    "Militarycable": 8,
    "Corrugatedhoses": 9,
    "Apackofscrews": 20,
    "Asetoftools": 6,
    "Xenomorphsealingfoam": 3,
    "Medicalbloodset": 2,
    "Salinesolution": 7,
    "LEDXSkinTransilluminator": 1,
    "Opthalmoscope": 1,
    "Wrench": 4,
    "Heat-exchangealkalisurfacewasher": 2,
    "CoffeeMajaica": 3,
    "Sodiumbicarbonate": 3,
    "Bronzelion": 4,
    "Goldskullring": 6,
    "Goldenneckchain": 8,
    "Rolersubmarinergoldwristwatch": 4,
    "WorkingLCD": 2,
    "NIXXORlens": 8,
    "SSDdrive": 1,
    "Apackofnails": 4,
    "Screwnut": 10,
    "Bolts": 18,
    "Ducttape": 6,
    "Euros": 165000,
    "Phasedarrayelement": 2,
    "Militarypowerfilter": 4,
    "Handdrill": 1,
    "WD-40100ml": 4,
    "Carbattery": 5,
    "PliersElite": 4,
    "Shustrilosealingfoam": 5,
    "Screwnuts": 2,
    "LeathermanMultitool": 1,
    "FireKleangunlube": 1,
    "Christmastreedecorationball(red)": 1,
    "Christmastreedecorationball(silver)": 1,
    "Christmastreedecorationball(violet)": 1
}
let materialMap = {
    "AirFilteringUnit": { "1": { "Dollars": 10000 } },
    "Bitcoinfarm": {
        "1": {
            "CPUFan": 10,
            "Powersupplyunit": 5,
            "Powercord": 5,
            "Electricdrill": 1
        },
        "2": {
            "CPUFan": 15,
            "Powersupplyunit": 5,
            "Printedcircuitboard": 5,
            "Phasecontrolrelay": 2
        },
        "3": {
            "CPUFan": 25,
            "Siliconetubes": 10,
            "Electricmotor": 2,
            "Pressuregauges": 4
        }
    },
    "Boozegenerator": {
        "1": {
            "Siliconetubes": 4,
            "Analogthermometers": 2,
            "Pressuregauges": 2,
            "Corrugatedhose": 5
        }
    },
    "Generator": {
        "1": { "Roubles": 100000 },
        "2": {
            "Phasecontrolrelays": 5,
            "Electricmotor": 1,
            "Wires": 15
        },
        "3": {
            "Phasecontrolrelays": 6,
            "Electricmotor": 2,
            "Sparkplug": 5,
            "Powersupplyunit": 5
        }
    },
    "Heating": {
        "1": { "Roubles": 25000 },
        "2": { "Roubles": 50000 },
        "3": {
            "Radiatorhelix": 8,
            "Wires": 8
        }
    },
    "Illumination": {
        "1": { "Roubles": 10000 },
        "2": {
            "Lightbulb": 14,
            "Wires": 5
        },
        "3": {
            "Roubles": 50000,
            "Capacitors": 7
        }
    },
    "IntelligenceCenter": {
        "1": { "Folderwithintelligence": 1 },
        "2": {
            "Folderwithintelligence": 3,
            "SecureFlashdrive": 3,
            "Powercord": 4,
            "Damagedharddrive": 4
        },
        "3": {
            "MilitaryCOFDMwirelessSignalTransmitters": 2,
            "VPXFlashStorageModules": 2,
            "Gasanalyzers": 3,
            "Militarycable": 4
        }
    },
    "Lavatory": {
        "1": { "Roubles": 2000 },
        "2": {
            "Corrugatedhoses": 3,
            "Apackofscrews": 5,
            "Electricdrill": 1
        },
        "3": {
            "Corrugatedhoses": 6,
            "Pressuregauges": 2,
            "Asetoftools": 1,
            "Xenomorphsealingfoam": 3
        }
    },
    "Library": { "1": { "Roubles": 400000 } },
    "Medstation": {
        "1": { "Roubles": 25000 },
        "2": {
            "Roubles": 50000,
            "Medicalbloodset": 2,
            "Salinesolution": 3
        },
        "3": {
            "Roubles": 150000,
            "Salinesolution": 4,
            "LEDXSkinTransilluminator": 1,
            "Opthalmoscope": 1
        }
    },
    "Nutritionunit": {
        "1": {
            "Roubles": 25000,
            "Phasecontrolrelay": 2
        },
        "2": {
            "Wrench": 4,
            "Corrugatedhose": 2,
            "Heat-exchangealkalisurfacewasher": 2,
            "Phasecontrolrelay": 1
        },
        "3": {
            "Roubles": 125000,
            "CoffeeMajaica": 3,
            "Sodiumbicarbonate": 3
        }
    },
    "RestSpace": {
        "1": { "Roubles": 10000 },
        "2": { "Roubles": 35000 },
        "3": {
            "Dollars": 3000,
            "Powercord": 4,
            "Capacitors": 5,
            "Wires": 7
        }
    },
    "Scavcase": {
        "1": {
            "Bronzelion": 4,
            "Goldskullring": 6,
            "Goldenneckchain": 8,
            "Rolersubmarinergoldwristwatch": 4
        }
    },
    "Security": {
        "1": { "Roubles": 20000 },
        "2": { "Roubles": 45000 },
        "3": {
            "WorkingLCD": 2,
            "Wires": 4,
            "NIXXORlens": 8,
            "SSDdrive": 1
        }
    },
    "Shootingrange": {
        "1": {
            "Apackofnails": 4,
            "Screwnut": 5,
            "Bolts": 5,
            "Ducttape": 3
        }
    },
    "Solarpower": {
        "1": {
            "Euros": 15000,
            "Militarycable": 4,
            "Phasedarrayelement": 2,
            "Militarypowerfilter": 4
        }
    },
    "Stash": {
        "1": {},
        "2": {
            "Roubles": 3500000,
            "Handdrill": 1,
            "Apackofscrews": 7,
            "WD-40100ml": 4
        },
        "3": {
            "Roubles": 8500000,
            "Electricdrill": 2,
            "Apackofscrews": 8
        },
        "4": { "Euros": 150000 }
    },
    "Vents": {
        "1": { "Roubles": 25000 },
        "2": {
            "Electricmotor": 1,
            "Carbattery": 1
        },
        "3": {
            "Electricmotor": 4,
            "Wires": 14,
            "Printedcircuitboard": 5,
            "Carbattery": 4
        }
    },
    "Watercollector": {
        "1": {
            "Corrugatedhose": 4,
            "Bolts": 5,
            "Screwnut": 5,
            "Ducttape": 3
        },
        "2": {
            "Corrugatedhose": 6,
            "Electricmotor": 2,
            "Asetoftools": 2
        },
        "3": {
            "Roubles": 125000,
            "PliersElite": 2,
            "Shustrilosealingfoam": 5
        }
    },
    "Workbench": {
        "1": {
            "Screwnuts": 2,
            "Bolts": 2,
            "LeathermanMultitool": 1
        },
        "2": {
            "Asetoftools": 3,
            "Electricdrill": 2,
            "Bolts": 6
        },
        "3": {
            "Roubles": 195000,
            "PliersElite": 2,
            "FireKleangunlube": 1
        }
    },
    "Christmastree": {
        "1": {
            "Roubles": 10000,
            "Christmastreedecorationball(red)": 1,
            "Christmastreedecorationball(silver)": 1,
            "Christmastreedecorationball(violet)": 1
        }
    }
}