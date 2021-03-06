let iconSource = {
    "Dollars": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/c/c4/Dollarsicon.png?version=f31d6c29f5a7beec810ae9dae23efc6e',
    "CPU Fan": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/a/a8/CPU_Fan_Icon.png?version=34e6413f54d8c63fa71ed212d3bd13e7',
    "Power supply unit": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/8/81/Psuicon.png/105px-Psuicon.png?version=346fb9cbcfd7ac23d5e3139553d71619',
    "Powercord": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/e/e1/Powercord_icon.png?version=46674cf442f8527d0fe891e7dd119742',
    "Electric drill": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/5/54/Electric_Drill_icon.png/105px-Electric_Drill_icon.png?version=ed22f55142a333a4149f267964e9c2cb',
    "Printed circuit board": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/c/c5/Circuit_Icon.png?version=b7767a9f8946d4cdea1229e1965a4719',
    "Phase control relay": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/2/2c/Relay_Icon.png?version=4594b16c01c986867155b841de007a4f',
    "Silicone tube": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/2/2e/SiliconeTubeIcon.png?version=b88335c58f93f6a45c8806224cdb692f',
    "Electric motor": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/9/9f/Electric_motor_icon.png/105px-Electric_motor_icon.png?version=f14019b14f47855e1f89ceb62bce81d9',
    "Pressure gauge": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/e/ee/Pressure_gauge_icon.png?version=b32aab2dbc9970dd644ef2baa84f39f8',
    "Analog thermometer": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/9/92/Anal_Thermometer_Icon.png?version=cece51d082b4759acb81970fbbead049',
    "Corrugated hose": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/b/b0/Hoseicon.png?version=51c20ce935ad10ea15ecc7fcd1740972',
    "Roubles": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/6/62/Roublesicon.png?version=1ddd57a1b36db139502eb137335569c9',
    "Wires": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/a/a4/Wiresicon.png?version=5290c686201f2318562959de42ff4987',
    "Spark plug": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/4/46/Spark_Plug_Icon_.png?version=5d679b96f39a59d595f8bf4763197f7b',
    "Radiator helix": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/5/5a/RadiatorHelixIcon.png?version=40ef8108fb4ac0640418fdc32829a96c',
    "Light bulb": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/9/97/Bulb_icon.png?version=5eeb7d03870d5807eb8646ca810e5925',
    "Capacitors": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/e/e3/Capacitorsicon.png?version=0ddb687554a65933ef7fed323b594975',
    "Folder with intelligence": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/8/85/FolderWithIntelligence_Icon.png?version=4e8c8f0dbe5cef4bdd4d6ac97077b644',
    "Secure Flash drive": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/b/b7/Secure_Flash_drive_Icon.png?version=dee0172505650e34c8dc4c404de6f78a',
    "Damaged hard drive": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/4/44/Damaged_Hard_Drive_Icon.png?version=c5c6a80ce88c3a9a21ea1ecba3e41ca3',
    "Military COFDM wireless Signal Transmitter": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/3/3a/COFDM_Icon.png?version=ee091fd6b714c295a3efb78d0a40cdc6',
    "VPX Flash Storage Module": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/8/88/VPXFlashIcon.png?version=f2bb2c2668325034d17649a3035fa521',
    "Gas analyzer": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/1/1d/Gas_Analyzer_Icon.png?version=872bbde216119a08b270d6b1357d0292',
    "Military cable": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/8/85/MilitaryCableIcon.png?version=a2490f3a589047cef7ba966bfa452c02',
    "A pack of screws": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/8/8f/Screwsicon.png?version=d67ff4701814b6b90809ea1f8752b3f4',
    "A set of tools": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/3/3a/Toolsicon.png?version=c844694349fc11dc6aef7864494a184f',
    "Xenomorph sealing foam": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/c/ce/Xenoicon.png?version=110ea42ae331671bf4ef9410063facdb',
    "Medical bloodset": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/5/56/Medical_Bloodset_Icon.png?version=ac89775bb1d6ad64a4aa613c2ccd16ef',
    "Saline solution": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/1/1b/Saline_Solution_icon.png?version=bfe1217bed38b994d1c9ef9e59d3ffe8',
    "LEDX Skin Transilluminator": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/4/4e/TransilluminatorIcon.png?version=b944a5fa8ba1e7ee655cbebf7e83fb11',
    "Ophthalmoscopy": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/f/f6/Ophthalmoscopeicon.png?version=babd77052efaac857a77f8f78e9224aa',
    "Wrench": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/a/a4/Wrench_Icon.png?version=db3d963c98cfdd39d7d196e06fd4619d',
    "Heat-exchange alkali surface washer": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/b/b3/Heat-exchange_alkali_surface_washer_icon.png?version=cc5432636b36e6f035b6bd39a8293143',
    "Coffee Majaica": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/1/14/Coffeicon.png?version=ecb73d49812f3183c24f7a468226294c',
    "Sodium bicarbonate": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/8/84/Sodium_Bicarbonate_icon.png?version=72e599261ac44aff8a588690a32de5e7',
    "Bronze lion": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/c/c2/Bronze_Lion_Icon.png?version=494122a8dd8fb9eb12f6d7844d1e1a79',
    "Gold skull ring": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/2/26/SkullRing_Icon.png?version=c21a70496b85eaf34d12fbac0f6b7881',
    "Golden neck chain": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/9/9a/Golden_neck_chain_Icon.png?version=66b5fc0c5d179727dfa3ba5da24b4e44',
    "Roler submariner gold wrist watch": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/e/e7/Roler_icon.png?version=3c5ff721928e60443cc4c8bc63f5f7bc',
    "Working LCD": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/c/ca/Working_LCD_Icon.png?version=5afda37526c4f61c83eed0ae24f08e4a',
    "NIXXOR lens": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/1/17/NIXXOR_lens_icon.png?version=856e36cad8d4e706b7766edb7c169497',
    "SSD drive": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/8/8f/Ssd_icon.png?version=48fe947e63e5aa54c3c8d376eecf4450',
    "A pack of nails": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/7/72/Nailsicon.png?version=18fe397bc927714fb2b2b5c5c4329ab7',
    "Screw nut": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/c/cd/Screwnuticon.png?version=97698ddbbcaa52348ce8209a2241ec21',
    "Bolts": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/7/70/Boltsicon.png?version=27b3299e61a7e75e8c572387b6760d3a',
    "Duct tape": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/3/38/Duct_tape_Icon.png?version=638332bc00b1bf3a1bf2bede5fae78cc',
    "Euros": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/f/f3/Eurosicon.png?version=cc9e22e64df6f3dfcbd9c508fd84c906',
    "Phased array element": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/8/81/Phased-Array-Element-icon.png?version=4f3a992fadd9af64c5f895ad5cbfe1b1',
    "Military power filter": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/4/47/Mil_Filter_Icon.png?version=f0bb500127c878a404da418de96fe7b2',
    "Hand drill": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/0/04/Handdrill_icon.png?version=3c337807b558d4adf912d4fbd6cd7b5b',
    "WD-40 100ml": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/0/06/WD40_100ml_Icon.png?version=fe060e6a9776fe1185a02b85ecf3e62c',
    "Car battery": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/a/a0/Car_Battery_Icon.png?version=d8c81e29fdfd0762ff32fdfd806504e5',
    "Pliers Elite": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/a/a7/PliersElite.png?version=bbcfac2b413ee11d6e33602484db58f1',
    "Shustrilo sealing foam": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/e/ea/Shusicon.png?version=a264fc7c9ec328ee2d31c33c50e1e8b5',
    "Leatherman Multitool": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/3/37/Multitoolicon.png?version=47ea2ce2f84ac69db08d57fe153ab598',
    "FireKlean gun lube": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/0/09/FireKlean_icon.png?version=86053b6695380126a7ca7c5e70f28524',
    "Christmas tree decoration ball (red)": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/8/82/Christmas_ornament_red_icon.png?version=e669ca27192277f331f267902784b1cf',
    "Christmas tree decoration ball (silver)": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/0/00/Christmas_ornament_silver_icon.png?version=1038f82653c63bc5c3249fe13ec58cbd',
    "Christmas tree decoration ball (violet)": 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/4/4c/Christmas_ornament_violet_icon.png?version=19bf390be9c3db3b933eb0c30e29cbf8',
};

let materialShortNameList = {
    "Dollars": "Dollars",
    "CPU Fan": "CPU Fan",
    "Power supply unit": "PSU",
    "Powercord": "Cord",
    "Electric drill": "Drill",
    "Printed circuit board": "Circuit board",
    "Phase control relay": "Relay",
    "Silicone tube": "Tube",
    "Electric motor": "Motor",
    "Pressure gauge": "Gauge",
    "Analog thermometer": "Therm.",
    "Corrugated hose": "Hose",
    "Roubles": "Roubles",
    "Wires": "Wires",
    "Spark plug": "Plug",
    "Radiator helix": "Helix",
    "Light bulb": "Bulb",
    "Capacitors": "Cap.",
    "Folder with intelligence": "Intelligence",
    "Secure Flash drive": "Flash drive",
    "Damaged hard drive": "HDD",
    "Military COFDM wireless Signal Transmitter": "SG-C10",
    "VPX Flash Storage Module": "VPX",
    "Gas analyzer": "GasAn",
    "Military cable": "M.Cable",
    "A pack of screws": "Screws",
    "A set of tools": "Set",
    "Xenomorph sealing foam": "Xeno",
    "Medical bloodset": "Bloodset",
    "Saline solution": "NaCl",
    "LEDX Skin Transilluminator": "LEDX",
    "Ophthalmoscopy": "Ophthalmoscopy",
    "Wrench": "Wrench",
    "Heat-exchange alkali surface washer": "Alkali",
    "Coffee Majaica": "Coffee",
    "Sodium bicarbonate": "Sodium",
    "Bronze lion": "Lion",
    "Gold skull ring": "Skull",
    "Golden neck chain": "GoldChain",
    "Roler submariner gold wrist watch": "Roler",
    "Working LCD": "LCD",
    "NIXXOR lens": "NIXXOR",
    "SSD drive": "SSD",
    "A pack of nails": "Nails",
    "Screw nut": "Screw nut",
    "Bolts": "Bolts",
    "Duct tape": "Duct tape",
    "Euros": "Euros",
    "Phased array element": "AESA",
    "Military power filter": "Filter",
    "Hand drill": "Hand drill",
    "WD-40 100ml": "WD-40",
    "Car battery": "Baterry",
    "Pliers Elite": "Pliers",
    "Shustrilo sealing foam": "Shus",
    "Leatherman Multitool": "Tool",
    "FireKlean gun lube": "#FireKlean",
    "Christmas tree decoration ball (red)": "R.Ball",
    "Christmas tree decoration ball (silver)": "S.Ball",
    "Christmas tree decoration ball (violet)": "V.Ball",
};