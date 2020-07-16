let dealer = ["Prapor", "Therapist", "Skier", "Peacekeeper", "Mechanic", "Ragman", "Jaeger", "Fence"];
let questMap = {
    "Prapor": {
        "Ice cream cones": {
            "60-round mags for AK": 6
        },
        "The Punisher - Part 2": {
            "(In raid)lower half-mask": 7
        },
        "The Punisher - Part 4": {
            "(In raid)knives Bars A-2607": 5
        },
        "The Punisher - Part 5": {
            "AK-74N": 3,
            "M4A1 assault rifle": 3,
            "PM pistol": 5
        },
        "The Punisher - Part 6": {
            "PMC USEC dogtag": 7,
            "PMC BEAR dogtag": 7
        },
        "No offence": {
            "M67 grenade": 10
        },
        "Regulated materials": {
            "(In raid)military battery": 1,
            "(In raid)30-mil. shells for BMP cannon": 10
        }
    },
    "Therapist": {
        "Shortage": {
            "Salewa kit": 5
        },
        "Sanitary Standards - Part 1": {
            "gas analyzer": 0
        },
        "Sanitary Standards - Part 2": {
            "(In raid)gas analyzer": 2
        },
        "Operation Aquarius - Part 1": {
            "hidden water in the dorm": 0
        },
        "Painkiller": {
            "(In raid)Morphine injector": 4
        },
        "Pharmacist": {
            "case with the device": 1
        },
        "General wares": {
            "(In raid)cans of meat": 15
        },
        "Car repair": {
            "(In raid)car battery": 4,
            "(In raid)spark plug": 8
        },
        "Trust regain": {
            "303 dorm room key": 1,
            "ZB-014 key": 1,
            "the customs military checkpoint key": 1,
            "gas station closet key": 1
        }
    },
    "Skier": {
        "What's on the flash drive?": {
            "(In raid)Secure Flash drive": 2
        },
        "Golden swag": {
            "Gilded Zibbo lighter": 1
        },
        "Chemical - Part 1": {
            "items that can help the investigation": 0
        },
        "Chemical - Part 3": {
            "Syringe with a chemical in the Factory": 1
        },
        "Friend from the West - Part 1": {
            "PMC USEC dogtag": 7
        },
        "\"Vitamins\" - Part 2": {
            "(In raid)Medical bloodset": 3,
            "(In raid)Respirator": 4
        },
        "Bullshit": {
            "False flash drive": 0
        }
    },
    "Peacekeeper": {
        "Eagle Eye": {
            "SAS disk from the first crashed drone": 0,
            "SAS disk from the second crashed drone": 0
        },
        "Humanitarian Supplies": {
            "MRE ration pack": 5
        },
        "Spa Tour - Part 3": {
            "(In raid)WD-40 100ml": 1,
            "(In raid)Clin wiper": 2,
            "(In raid)Corrugated hose": 2,
            "(In raid)Ox bleach": 2
        },
        "Spa Tour - Part 5": {
            "the key from the locked resort rooms": 1
        },
        "Spa Tour - Part 7": {
            "(In raid)Morphine injector": 4,
            "(In raid)Heat-exchange alkali surface washer": 2,
            "(In raid)Corrugated hose": 2,
            "(In raid)5L propane tank": 2
        },
        "Cargo X - Part 3": {
            "hidden Terragroup cargo": 0
        },
        "Lend lease - Part 2": {
            "(In raid)Military COFDM wireless Signal Transmitter": 0,
            "(In raid)Virtex programmable processor": 2
        },
        "Wet Job - Part 3": {
            "Artyom's car": 0
        },
        "Wet Job - Part 5": {
            "info on Artyom's work": 0
        }
    },
    "Mechanic": {
        "Farming - Part 2": {
            "(In raid)Powercord": 2,
            "(In raid)T-Shaped Plug": 4,
            "(In raid)Printed circuit board": 2
        },
        "Farming - Part 3": {
            "warehouse of confiscate": 1
        },
        "Farming - Part 4": {
            "(In raid)Graphics card": 3,
            "(In raid)CPU Fan": 8
        },
        "Signal - Part 2": {
            "(In raid)PC CPU": 3,
            "(In raid)Rechargeable battery": 3,
            "(In raid)Printed circuit board": 3,
            "(In raid)Broken GPhone": 3
        },
        "Bad habit": {
            "(In raid)Malboro cigarette": 5,
            "(In raid)Strike cigarette": 5,
            "(In raid)Wilston cigarette": 5
        },
        "Scout": {
            "way out of the factory 1": 1,
            "way out of the factory 2": 1,
            "way out of the factory 3": 1
        },
        "Import": {
            "(In raid)UHF RFID Reader": 1,
            "(In raid)VPX Flash Storage Module": 1
        },
        "Fertilizers": {
            "(In raid)Wires": 5,
            "(In raid)Capacitors": 5
        }
    },
    "Ragman": {
        "Sew it good - Part 1": {
            "(In raid)Ski hat with holes for eyes": 1,
            "(In raid)Pilgrim tourist backpack": 1
        },
        "Sew it good - Part 4": {
            "(In raid)Wartech (TV-109, TV-106)": 2,
            "(In raid)BlackRock chest rig": 2
        },
        "The Blood of War - Part 2": {
            "(In raid)Fuel conditioner": 4
        },
        "Living high is not a crime - Part 1": {
            "(In raid)Bronze lion": 2,
            "(In raid)Horse figurine": 2,
            "(In raid)Cat figurine": 1,
            "(In raid)Roler submariner gold wrist watch": 1
        },
        "Living high is not a crime - Part 2": {
            "(In raid)Antique teapot": 3,
            "(In raid)Antique vase": 2
        },
        "Textile - Part 1": {
            "Aramid fabric": 5,
            "Ripstop fabric": 10,
            "Paracord": 3,
        },
        "Textile - Part 2": {
            "Fleece fabric": 5,
            "Polyaramide cordura fabric": 10,
            "KEKtape": 5
        }
    },
    "Jaeger": {
        "Huntsman path - The trophy": {
            "(In raid)Golden TT": 1
        },
        "Huntsman path - Sell-out": {
            "(In raid)Killa's helmet": 1
        },
        "Huntsman path - Woods keeper": {
            "(In raid)Shturman's key": 1
        },
        "Ambulance": {
            "(In raid)portable defibrillator": 2,
            "(In raid)CMS surgery kit": 2
        },
        "Shady business": {
            "(In raid)flash drive": 3
        },
        "Fishing place": {
            "(In raid)TerraGroup Labs access keycard": 3
        }
    },
    "Fence": {
        "Collector": {
            "(In raid)Old firesteel": 1,
            "(In raid)Antique axe": 1,
            "(In raid)Battered antique Book": 1,
            "(In raid)FireKlean gun lube": 1,
            "(In raid)Golden rooster": 1,
            "(In raid)Silver Badge": 1,
            "(In raid)Deadlyslob's beard oil": 1,
            "(In raid)Golden 1GPhone": 1,
            "(In raid)Jar of DevilDog mayo": 1,
            "(In raid)Can of sprats": 1,
            "(In raid)Fake mustache": 1,
            "(In raid)Kotton beanie": 1,
            "(In raid)Can of Dr. Lupo's coffee beans": 1,
            "(In raid)Pestily plague mask": 1,
            "(In raid)Raven figurine": 1,
            "(In raid)Shroud half-mask": 1
        }
    }
}
let questMapInRaid = {
    "Prapor": {
        "The Punisher - Part 2": {
            "(In raid)lower half-mask": 7
        },
        "The Punisher - Part 4": {
            "(In raid)knives Bars A-2607": 5
        },
        "Regulated materials": {
            "(In raid)military battery": 1,
            "(In raid)30-mil. shells for BMP cannon": 10
        }
    },
    "Therapist": {
        "Sanitary standards part - 2": {
            "Gas analyzer": 2
        },
        "Painkiller": {
            "Morphine injector": 4
        },
        "General wares": {
            "(In raid)cans of meat": 15
        },
        "Car repair": {
            "Car battery": 4,
            "Spark plug": 8
        }
    },
    "Skier": {
        "What's on the flash drive?": {
            "Secure Flash drive": 2
        },
        "\"Vitamins\" - Part 2": {
            "(In raid)Medical bloodset": 3,
            "(In raid)Respirator": 4
        }
    },
    "Peacekeeper": {
        "Spa tour - Part 3": {
            "WD-40 100ml": 1,
            "Clin wiper": 2,
            "Corrugated hose": 2,
            "Ox bleach": 2
        },
        "Spa tour - Part 7": {
            "Morphine injector": 4,
            "Heat-exchange alkali surface washer": 2,
            "Corrugated hose": 2,
            "5L propane tank": 2
        },
        "Lend lease - Part 2": {
            "(In raid)Military COFDM wireless Signal Transmitter": 0,
            "(In raid)Virtex programmable processor": 2
        },
    },
    "Mechanic": {
        "Farming - Part 2": {
            "Powercord": 2,
            "T-Shaped Plug": 4,
            "Printed circuit board": 2
        },
        "Farming - Part 4": {
            "Graphics card": 3,
            "CPU Fan": 8
        },
        "Signal - Part 2": {
            "PC CPU": 3,
            "Rechargeable battery": 3,
            "Printed circuit board": 3,
            "Broken GPhone": 3
        },
        "Bad habit": {
            "(In raid)Malboro cigarette": 5,
            "(In raid)Strike cigarette": 5,
            "(In raid)Wilston cigarette": 5
        },
        "Import": {
            "(In raid)UHF RFID Reader": 1,
            "(In raid)VPX Flash Storage Module": 1
        },
        "Fertilizer": {
            "Wires": 5,
            "Capacitors": 5
        }
    },
    "Ragman": {
        "Sew it good - Part 1": {
            "(In raid)Ski hat with holes for eyes": 1,
            "(In raid)Pilgrim tourist backpack": 1
        },
        "Sew it good - Part 4": {
            "Wartech (TV-109, TV-106)": 2,
            "BlackRock chest rig": 2
        },
        "The Blood of war - Part 2": {
            "Fuel conditioner": 4
        },
        "Living high is not a crime - Part 1": {
            "Bronze lion": 2,
            "Horse figurine": 2,
            "Cat figurine": 1,
            "Roler submariner gold wrist watch": 1
        },
        "Living high is not a crime - Part 2": {
            "Antique teapot": 3,
            "Antique vase": 2
        },
        "Textile - Part 1": {
            "Aramid fabric": 5,
            "Ripstop fabric": 10,
            "Paracord": 3,
        },
        "Textile - Part 2": {
            "Fleece fabric": 5,
            "Polyaramide cordura fabric": 10,
            "KEKtape": 5
        }
    },
    "Jaeger": {
        "Huntsman path - The trophy": {
            "Golden TT": 1
        },
        "Huntsman path - Sell-out": {
            "Killa's helmet": 1
        },
        "Huntsman path - Woods keeper": {
            "Shturman's key": 1
        },
        "Ambulance": {
            "Portable defibrillator": 2,
            "CMS surgery kit": 2
        },
        "Shady business": {
            "Flash drive": 3
        },
        "Fishing place": {
            "TerraGroup Labs access keycard": 3
        }
    },
    "Fence": {
        "Collector": {
            "Old firesteel": 1,
            "Antique axe": 1,
            "Battered antique Book": 1,
            "FireKlean gun lube": 1,
            "Golden rooster": 1,
            "Silver Badge": 1,
            "Deadlyslob's beard oil": 1,
            "Golden 1GPhone": 1,
            "Jar of DevilDog mayo": 1,
            "Can of sprats": 1,
            "Fake mustache": 1,
            "Kotton beanie": 1,
            "Can of Dr. Lupo's coffee beans": 1,
            "Pestily plague mask": 1,
            "Raven figurine": 1,
            "Shroud harf-mask": 1
        }
    },
}