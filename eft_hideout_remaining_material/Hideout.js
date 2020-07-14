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
    "Apackofscrews",
    "Asetoftools",
    "Xenomorphsealingfoam",
    "Medicalbloodset",
    "Salinesolution",
    "LEDXSkinTransilluminator",
    "Ophthalmoscopy",
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
    "LeathermanMultitool",
    "FireKleangunlube",
    "Christmastreedecorationball(red)",
    "Christmastreedecorationball(silver)",
    "Christmastreedecorationball(violet)"
];

let totalRequirement = {
    "Dollars": 13000,
    "CPUFan": 50,
    "Powersupplyunit": 15,
    "Powercord": 13,
    "Electricdrill": 6,
    "Printedcircuitboard": 10,
    "Phasecontrolrelay": 16,
    "Siliconetubes": 14,
    "Electricmotor": 12,
    "Pressuregauges": 8,
    "Analogthermometers": 2,
    "Corrugatedhose": 17 + 9,
    "Roubles": 13477000,
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
    "Apackofscrews": 20,
    "Asetoftools": 6,
    "Xenomorphsealingfoam": 3,
    "Medicalbloodset": 2,
    "Salinesolution": 7,
    "LEDXSkinTransilluminator": 1,
    "Ophthalmoscopy": 1,
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
    "Screwnut": 12,
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
    "LeathermanMultitool": 1,
    "FireKleangunlube": 1,
    "Christmastreedecorationball(red)": 1,
    "Christmastreedecorationball(silver)": 1,
    "Christmastreedecorationball(violet)": 1
};

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
            "Phasecontrolrelay": 5,
            "Electricmotor": 1,
            "Wires": 15
        },
        "3": {
            "Phasecontrolrelay": 6,
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
            "Corrugatedhose": 3,
            "Apackofscrews": 5,
            "Electricdrill": 1
        },
        "3": {
            "Corrugatedhose": 6,
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
            "Ophthalmoscopy": 1
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
            "Screwnut": 2,
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
};

let iconSource = {
    "Dollars": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/c/c4/Dollarsicon.png?version=f31d6c29f5a7beec810ae9dae23efc6e',
    "CPUFan": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/a/a8/CPU_Fan_Icon.png?version=34e6413f54d8c63fa71ed212d3bd13e7',
    "Powersupplyunit": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/8/81/Psuicon.png/105px-Psuicon.png?version=346fb9cbcfd7ac23d5e3139553d71619',
    "Powercord": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/e/e1/Powercord_icon.png?version=46674cf442f8527d0fe891e7dd119742',
    "Electricdrill": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/5/54/Electric_Drill_icon.png/105px-Electric_Drill_icon.png?version=ed22f55142a333a4149f267964e9c2cb',
    "Printedcircuitboard": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/c/c5/Circuit_Icon.png?version=b7767a9f8946d4cdea1229e1965a4719',
    "Phasecontrolrelay": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/2/2c/Relay_Icon.png?version=4594b16c01c986867155b841de007a4f',
    "Siliconetubes": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/2/2e/SiliconeTubeIcon.png?version=b88335c58f93f6a45c8806224cdb692f',
    "Electricmotor": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/9/9f/Electric_motor_icon.png/105px-Electric_motor_icon.png?version=f14019b14f47855e1f89ceb62bce81d9',
    "Pressuregauges": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/e/ee/Pressure_gauge_icon.png?version=b32aab2dbc9970dd644ef2baa84f39f8',
    "Analogthermometers": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/9/92/Anal_Thermometer_Icon.png?version=cece51d082b4759acb81970fbbead049',
    "Corrugatedhose": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/b/b0/Hoseicon.png?version=51c20ce935ad10ea15ecc7fcd1740972',
    "Roubles": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/6/62/Roublesicon.png?version=1ddd57a1b36db139502eb137335569c9',
    "Wires": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/a/a4/Wiresicon.png?version=5290c686201f2318562959de42ff4987',
    "Sparkplug": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/4/46/Spark_Plug_Icon_.png?version=5d679b96f39a59d595f8bf4763197f7b',
    "Radiatorhelix": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/5/5a/RadiatorHelixIcon.png?version=40ef8108fb4ac0640418fdc32829a96c',
    "Lightbulb": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/9/97/Bulb_icon.png?version=5eeb7d03870d5807eb8646ca810e5925',
    "Capacitors": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/e/e3/Capacitorsicon.png?version=0ddb687554a65933ef7fed323b594975',
    "Folderwithintelligence": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/8/85/FolderWithIntelligence_Icon.png?version=4e8c8f0dbe5cef4bdd4d6ac97077b644',
    "SecureFlashdrive": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/b/b7/Secure_Flash_drive_Icon.png?version=dee0172505650e34c8dc4c404de6f78a',
    "Damagedharddrive": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/4/44/Damaged_Hard_Drive_Icon.png?version=c5c6a80ce88c3a9a21ea1ecba3e41ca3',
    "MilitaryCOFDMwirelessSignalTransmitters": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/3/3a/COFDM_Icon.png?version=ee091fd6b714c295a3efb78d0a40cdc6',
    "VPXFlashStorageModules": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/8/88/VPXFlashIcon.png?version=f2bb2c2668325034d17649a3035fa521',
    "Gasanalyzers": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/1/1d/Gas_Analyzer_Icon.png?version=872bbde216119a08b270d6b1357d0292',
    "Militarycable": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/8/85/MilitaryCableIcon.png?version=a2490f3a589047cef7ba966bfa452c02',
    "Apackofscrews": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/8/8f/Screwsicon.png?version=d67ff4701814b6b90809ea1f8752b3f4',
    "Asetoftools": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/3/3a/Toolsicon.png?version=c844694349fc11dc6aef7864494a184f',
    "Xenomorphsealingfoam": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/c/ce/Xenoicon.png?version=110ea42ae331671bf4ef9410063facdb',
    "Medicalbloodset": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/5/56/Medical_Bloodset_Icon.png?version=ac89775bb1d6ad64a4aa613c2ccd16ef',
    "Salinesolution": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/1/1b/Saline_Solution_icon.png?version=bfe1217bed38b994d1c9ef9e59d3ffe8',
    "LEDXSkinTransilluminator": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/4/4e/TransilluminatorIcon.png?version=b944a5fa8ba1e7ee655cbebf7e83fb11',
    "Ophthalmoscopy": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/f/f6/Ophthalmoscopeicon.png?version=babd77052efaac857a77f8f78e9224aa',
    "Wrench": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/a/a4/Wrench_Icon.png?version=db3d963c98cfdd39d7d196e06fd4619d',
    "Heat-exchangealkalisurfacewasher": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/b/b3/Heat-exchange_alkali_surface_washer_icon.png?version=cc5432636b36e6f035b6bd39a8293143',
    "CoffeeMajaica": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/1/14/Coffeicon.png?version=ecb73d49812f3183c24f7a468226294c',
    "Sodiumbicarbonate": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/8/84/Sodium_Bicarbonate_icon.png?version=72e599261ac44aff8a588690a32de5e7',
    "Bronzelion": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/c/c2/Bronze_Lion_Icon.png?version=494122a8dd8fb9eb12f6d7844d1e1a79',
    "Goldskullring": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/2/26/SkullRing_Icon.png?version=c21a70496b85eaf34d12fbac0f6b7881',
    "Goldenneckchain": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/9/9a/Golden_neck_chain_Icon.png?version=66b5fc0c5d179727dfa3ba5da24b4e44',
    "Rolersubmarinergoldwristwatch": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/e/e7/Roler_icon.png?version=3c5ff721928e60443cc4c8bc63f5f7bc',
    "WorkingLCD": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/c/ca/Working_LCD_Icon.png?version=5afda37526c4f61c83eed0ae24f08e4a',
    "NIXXORlens": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/1/17/NIXXOR_lens_icon.png?version=856e36cad8d4e706b7766edb7c169497',
    "SSDdrive": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/8/8f/Ssd_icon.png?version=48fe947e63e5aa54c3c8d376eecf4450',
    "Apackofnails": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/7/72/Nailsicon.png?version=18fe397bc927714fb2b2b5c5c4329ab7',
    "Screwnut": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/c/cd/Screwnuticon.png?version=97698ddbbcaa52348ce8209a2241ec21',
    "Bolts": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/7/70/Boltsicon.png?version=27b3299e61a7e75e8c572387b6760d3a',
    "Ducttape": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/3/38/Duct_tape_Icon.png?version=638332bc00b1bf3a1bf2bede5fae78cc',
    "Euros": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/f/f3/Eurosicon.png?version=cc9e22e64df6f3dfcbd9c508fd84c906',
    "Phasedarrayelement": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/8/81/Phased-Array-Element-icon.png?version=4f3a992fadd9af64c5f895ad5cbfe1b1',
    "Militarypowerfilter": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/4/47/Mil_Filter_Icon.png?version=f0bb500127c878a404da418de96fe7b2',
    "Handdrill": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/0/04/Handdrill_icon.png?version=3c337807b558d4adf912d4fbd6cd7b5b',
    "WD-40100ml": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/0/06/WD40_100ml_Icon.png?version=fe060e6a9776fe1185a02b85ecf3e62c',
    "Carbattery": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/a/a0/Car_Battery_Icon.png?version=d8c81e29fdfd0762ff32fdfd806504e5',
    "PliersElite": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/a/a7/PliersElite.png?version=bbcfac2b413ee11d6e33602484db58f1',
    "Shustrilosealingfoam": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/e/ea/Shusicon.png?version=a264fc7c9ec328ee2d31c33c50e1e8b5',
    "LeathermanMultitool": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/3/37/Multitoolicon.png?version=47ea2ce2f84ac69db08d57fe153ab598',
    "FireKleangunlube": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/0/09/FireKlean_icon.png?version=86053b6695380126a7ca7c5e70f28524',
    "Christmastreedecorationball(red)": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/8/82/Christmas_ornament_red_icon.png?version=e669ca27192277f331f267902784b1cf',
    "Christmastreedecorationball(silver)": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/0/00/Christmas_ornament_silver_icon.png?version=1038f82653c63bc5c3249fe13ec58cbd',
    "Christmastreedecorationball(violet)": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/4/4c/Christmas_ornament_violet_icon.png?version=19bf390be9c3db3b933eb0c30e29cbf8',
};

let materialShortNameList = {
    "Dollars": "Dollars",
    "CPUFan": "CPU Fan",
    "Powersupplyunit": "PSU",
    "Powercord": "Cord",
    "Electricdrill": "Drill",
    "Printedcircuitboard": "Circuit board",
    "Phasecontrolrelay": "Relay",
    "Siliconetubes": "Tube",
    "Electricmotor": "Motor",
    "Pressuregauges": "Gauge",
    "Analogthermometers": "Therm.",
    "Corrugatedhose": "Hose",
    "Roubles": "Roubles",
    "Wires": "Wires",
    "Sparkplug": "Plug",
    "Radiatorhelix": "Helix",
    "Lightbulb": "Bulb",
    "Capacitors": "Cap.",
    "Folderwithintelligence": "Intelligence",
    "SecureFlashdrive": "Flash drive",
    "Damagedharddrive": "HDD",
    "MilitaryCOFDMwirelessSignalTransmitters": "SG-C10",
    "VPXFlashStorageModules": "VPX",
    "Gasanalyzers": "GasAn",
    "Militarycable": "M.Cable",
    "Apackofscrews": "Screws",
    "Asetoftools": "Set",
    "Xenomorphsealingfoam": "Xeno",
    "Medicalbloodset": "Bloodset",
    "Salinesolution": "NaCl",
    "LEDXSkinTransilluminator": "LEDX",
    "Ophthalmoscopy": "Ophthalmoscopy",
    "Wrench": "Wrench",
    "Heat-exchangealkalisurfacewasher": "Alkali",
    "CoffeeMajaica": "Coffee",
    "Sodiumbicarbonate": "Sodium",
    "Bronzelion": "Lion",
    "Goldskullring": "Skull",
    "Goldenneckchain": "GoldChain",
    "Rolersubmarinergoldwristwatch": "Roler",
    "WorkingLCD": "LCD",
    "NIXXORlens": "NIXXOR",
    "SSDdrive": "SSD",
    "Apackofnails": "Nails",
    "Screwnut": "Screw nut",
    "Bolts": "Bolts",
    "Ducttape": "Duct tape",
    "Euros": "Euros",
    "Phasedarrayelement": "AESA",
    "Militarypowerfilter": "Filter",
    "Handdrill": "Hand drill",
    "WD-40100ml": "WD-40",
    "Carbattery": "Baterry",
    "PliersElite": "Pliers",
    "Shustrilosealingfoam": "Shus",
    "LeathermanMultitool": "Tool",
    "FireKleangunlube": "#FireKlean",
    "Christmastreedecorationball(red)": "R.Ball",
    "Christmastreedecorationball(silver)": "S.Ball",
    "Christmastreedecorationball(violet)": "V.Ball",
};