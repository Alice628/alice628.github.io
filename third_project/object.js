let dealer = ["Prapor", "Therapist", "Skier", "Peacekeeper", "Mechanic", "Ragman", "Jaeger", "Fence"];
let questMap = {
    "Prapor": {
        "Delivery from the past ": {
            "secure case in the Tarcone Director's Office at the Customs terminal": 1
        },
        "The bunker - Part 1 ": {
            "underground bunker": 0
        },
        "Bad rep evidence ": {
            "secure folder 0031 in a bunkhouse on Customs": 0
        },
        "Ice cream cones ": {
            "60-round mags for AK": 6
        },
        "Postman Pat - Part 1 ": {
            "letter on a messenger in the Factory": 1
        },
        "The Punisher - Part 2 ": {
            "(In raid)lower half-masks": 7
        },
        "The Punisher - Part 4 ": {
            "(In raid)knives Bars A-2607": 5
        },
        "The Punisher - Part 5 ": {
            "AK-74N": 3,
            "M4A1 assault rifles": 3,
            "PM pistols": 5
        },
        "The Punisher - Part 6 ": {
            "PMC USEC dogtags": 7,
            "PMC BEAR dogtags": 7
        },
        "Big customer ": {
            "transport with chemicals": 1
        },
        "No offence ": {
            "M67 grenades": 10
        },
        "Regulated materials ": {
            "(In raid)military battery": 0,
            "(In raid)30-mil. shells for BMP cannon": 10
        }
    },
    "Therapist": {
        "Shortage ": {
            "Salewa kits": 5
        },
        "Sanitary Standards - Part 1 ": {
            "gas analyzer": 0
        },
        "Sanitary Standards - Part 2 ": {
            "(In raid)gas analyzers": 2
        },
        "Operation Aquarius - Part 1 ": {
            "hidden water in the dorm": 0
        },
        "Painkiller ": {
            "(In raid)morphine syringes": 4
        },
        "Pharmacist ": {
            "case with the device": 1
        },
        "General wares ": {
            "(In raid)cans of meat": 15
        },
        "Car repair ": {
            "(In raid)car batteries": 4,
            "(In raid)spark plugs": 8
        },
        "Out of curiosity ": {
            "transport with chemicals": 1
        },
        "Trust regain ": {
            "303 dorm room key": 1,
            "ZB-014 key": 1,
            "the customs military checkpoint key": 1,
            "gas station closet key": 1
        }
    },
    "Skier": {
        "What's on the flash drive? ": {
            "(In raid)two USB flash drives with information": 0
        },
        "Golden swag ": {
            "Gilded Zibbo lighter": 1
        },
        "Chemical - Part 1 ": {
            "items that can help the investigation": 0
        },
        "Chemical - Part 3 ": {
            "Syringe with a chemical in the Factory": 1
        },
        "Chemical - Part 4 ": {
            "transport with chemicals": 1
        },
        "Friend from the West - Part 1 ": {
            "PMC USEC dogtags": 7
        },
        "\"Vitamins\" - Part 2 ": {
            "(In raid)Medical bloodset": 3,
            "(In raid)Respirator": 4
        },
        "Bullshit ": {
            "False flash drive": 0
        }
    },
    "Peacekeeper": {
        "Eagle Eye ": {
            "SAS disk from the first crashed drone": 0,
            "SAS disk from the second crashed drone": 0
        },
        "Humanitarian Supplies ": {
            "MRE ration packs": 5
        },
        "Spa Tour - Part 3 ": {
            "(In raid)WD-40 100ml": 0,
            "(In raid)Clin wipers, 2 pcs": 0,
            "(In raid)Corrugated hoses, 2 pcs": 0,
            "(In raid)Ox bleach, 2 pcs": 0
        },
        "Spa Tour - Part 4 ": {
            "generators in right wing": 0,
            "generators in left wing": 0
        },
        "Spa Tour - Part 5 ": {
            "the key from the locked resort rooms": 1
        },
        "Spa Tour - Part 7 ": {
            "(In raid)Morphine injector, 4 pcs": 0,
            "(In raid)Heat-exchange alkali surface washer, 2 pcs": 0,
            "(In raid)Corrugated hose, 2 pcs": 0,
            "(In raid)5L propane tank, 2 pcs": 0
        },
        "Cargo X - Part 2 ": {
            "room with reservoirs": 1
        },
        "Cargo X - Part 3 ": {
            "hidden Terragroup cargo": 0
        },
        "Lend lease - Part 2 ": {
            "(In raid)Military COFDM wireless Signal Transmitter": 0,
            "(In raid)Virtex programmable processors": 2
        },
        "Wet Job - Part 3 ": {
            "Artyom's car": 0
        },
        "Wet Job - Part 4 ": {
            "list of resort tenants": 1
        },
        "Wet Job - Part 5 ": {
            "info on Artyom's work": 0
        }
    },
    "Mechanic": {
        "Farming - Part 2 ": {
            "(In raid)Powercord, 2 pcs": 0,
            "(In raid)T-Shaped Plug, 4 pcs": 0,
            "(In raid)Printed circuit board, 2 pcs": 0
        },
        "Farming - Part 3 ": {
            "warehouse of confiscate": 1
        },
        "Farming - Part 4 ": {
            "(In raid)Graphics card, 3 pcs": 0,
            "(In raid)CPU Fan, 8 pcs": 0
        },
        "Signal - Part 2 ": {
            "(In raid)PC CPU": 3,
            "(In raid)Rechargeable battery": 3,
            "(In raid)Printed circuit board": 3,
            "(In raid)Broken GPhone": 3
        },
        "Bad habit ": {
            "(In raid)Malboro cigarettes, 5 pcs": 0,
            "(In raid)Strike cigarettes, 5 pcs": 0,
            "(In raid)Wilston cigarettes, 5 pcs": 0
        },
        "Scout ": {
            "way out of the factory 1": 1,
            "way out of the factory 2": 1,
            "way out of the factory 3": 1
        },
        "Import ": {
            "(In raid)UHF RFID Reader": 0,
            "(In raid)VPX Flash Storage Module": 0
        },
        "Fertilizers ": {
            "(In raid)Wires": 5,
            "(In raid)Capacitors": 5
        },
        "Introduction ": {
            "Jaeger's camp": 0,
            "Jaeger's message": 0
        }
    },
    "Ragman": {
        "Sew it good - Part 1 ": {
            "(In raid)Ski hat with holes for eyes": 0,
            "(In raid)Pilgrim tourist backpack": 0
        },
        "Sew it good - Part 4 ": {
            "(In raid)Wartech (TV-109, TV-106)": 2,
            "(In raid)BlackRock chest rig": 2
        },
        "The Blood of War - Part 2 ": {
            "(In raid)Fuel conditioner, 4 pcs": 0
        },
        "Living high is not a crime - Part 1 ": {
            "(In raid)Bronze lion, 2 pcs": 0,
            "(In raid)Horse figurine, 2 pcs": 0,
            "(In raid)Cat figurine": 0,
            "(In raid)Roler submariner gold wrist watch": 0
        },
        "Living high is not a crime - Part 2 ": {
            "(In raid)antique teapots": 3,
            "(In raid)antique vases": 2
        }
    },
    "Jaeger": {
        "Huntsman path - The trophy ": {
            "(In raid)the golden TT": 1
        },
        "Huntsman path - Sell-out ": {
            "(In raid)Killa's helmet": 0
        },
        "Huntsman path - Woods keeper ": {
            "(In raid)Shturman's key": 1
        },
        "Ambulance ": {
            "(In raid)portable defibrillator": 0,
            "(In raid)CMS surgery kits": 2
        },
        "Shady business ": {
            "(In raid)flash drives": 3
        },
        "Nostalgia ": {
            "room with the view of a bay, where Jaeger was staying": 1,
            "Jaegers' photo album": 0
        },
        "Fishing place ": {
            "(In raid)3 TerraGroup Labs access keycards": 1
        },
        "Courtesy visit ": {
            "priest house": 0,
            "fisherman house": 0,
            "chairman house": 0
        }
    },
    "Fence": {
        "Collector ": {
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
    "Prapor": {},
    "Therapist": {
        "Sanitary standards part - 2": {
            "Gas analyzer": 2
        },
        "Painkiller": {
            "Morphine injector": 4
        },
        "General wares": {
            "Can of beef stew": 15
        },
        "Car repair": {
            "Car battery": 4,
            "Spark plug": 8
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
    "Skier": {
        "What's on the flash drive?": {
            "Secure Flash drive": 2
        },
        "Vitamins - Part.2": {
            "Respirator": 5
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
        }
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
        "Fertilizer": {
            "Wires": 5,
            "Capacitors": 5
        }
    },
    "Ragman": {
        "The Blood of war - Part 2": {
            "Fuel conditioner": 4
        },
        "Sew it good - Part 4": {
            "Wartech": 2,
            "BlackRock chest rig": 2
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
        "Shady business": {
            "Flash drive": 3
        },
        "Ambulance": {
            "CMS surgery kit": 2,
            "Portable defibrillator": 2
        },
        "Fishing place": {
            "TerraGroup Labs access keycard": 3
        }
    },
}