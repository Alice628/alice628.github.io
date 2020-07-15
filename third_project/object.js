let dealer = ["Prapor", "Therapist", "Fence", "Skier", "Peacekeeper", "Mechanic", "Ragman", "Jaeger"];
let questMap = {
    "Prapor": {
        "Ice cream cones ": {
            "60-round mags for AK": 6
        },
        "The Punisher - Part 2 ": {
            "lower half-mask": 7
        },
        "The Punisher - Part 4 ": {
            "knives Bars A-2607": 5
        },
        "The Punisher - Part 5 ": {
            "AK-74N": 3,
            "M4A1 assault rifle": 3,
            "PM pistol": 5
        },
        "The Punisher - Part 6 ": {
            "PMC USEC dogtag": 7,
            "PMC BEAR dogtag": 7
        },
        "No offence ": {
            "M67 grenades": 10
        },
        "Regulated materials ": {
            "military battery": 1,
            "30-mil. shells for BMP cannon": 10
        }
    },
    "Therapist": {
        "Shortage ": {
            "Salewa kit": 5
        },
        "Sanitary Standards - Part 1 ": {
            "gas analyzer": 1
        },
        "Sanitary Standards - Part 2 ": {
            "gas analyzer": 2
        },
        "Painkiller ": {
            "Morphine injector": 4
        },
        "General wares ": {
            "cans of meat": 15
        },
        "Car repair ": {
            "car battery": 4,
            "spark plug": 8
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
            "USB flash drive": 2
        },
        "Friend from the West - Part 1 ": {
            "PMC USEC dogtags": 7
        },
        "\"Vitamins\" - Part 2 ": {
            "Medical bloodset": 3,
            "Respirator": 4
        }
    },
    "Peacekeeper": {
        "Humanitarian Supplies ": {
            "MRE ration packs": 5
        },
        "Spa Tour - Part 3 ": {
            "WD-40 100ml": 1,
            "Clin wiper": 2,
            "Corrugated hose": 2,
            "Ox bleach": 2
        },
        "Spa Tour - Part 5 ": {
            "the key from the locked resort rooms": 1
        },
        "Spa Tour - Part 7 ": {
            "Morphine injector": 4,
            "Heat-exchange alkali surface washer": 2,
            "Corrugated hose": 2,
            "5L propane tank": 2
        },
        "Cargo X - Part 1 ": {
            "the cargo record in the computer room": 1
        },
        "Lend lease - Part 2 ": {
            "Military COFDM wireless Signal Transmitter": 1,
            "Virtex programmable processors": 2
        },
        "Wet Job - Part 3 ": {
            "Artyom's car": 0
        },
        "Wet Job - Part 4 ": {
            "a list of resort tenants": 0
        },
        "Wet Job - Part 5 ": {
            "info on Artyom's work": 0
        }
    },
    "Mechanic": {
        "Farming - Part 2 ": {
            "Powercord, 2 pcs": 0,
            "T-Shaped Plug, 4 pcs": 0,
            "Printed circuit board, 2 pcs": 0
        },
        "Farming - Part 3 ": {
            "a warehouse of confiscate": 0
        },
        "Farming - Part 4 ": {
            "Graphics card, 3 pcs": 0,
            "CPU Fan, 8 pcs": 0
        },
        "Signal - Part 1 ": {
            "the first signal source": 0,
            "the second signal source": 0
        },
        "Signal - Part 2 ": {
            "3 PC CPU": 0,
            "3 Rechargeable battery": 0,
            "3 Printed circuit board": 0,
            "3 Broken GPhone": 0
        },
        "Bad habit ": {
            "Malboro cigarettes, 5 pcs": 0,
            "Strike cigarettes, 5 pcs": 0,
            "Wilston cigarettes, 5 pcs": 0
        },
        "Scout ": {
            "a way out of the factory 1": 0,
            "a way out of the factory 2": 0,
            "a way out of the factory 3": 0
        },
        "Import ": {
            "UHF RFID Reader": 0,
            "VPX Flash Storage Module": 0
        },
        "Fertilizers ": {
            "5 Wires": 0,
            "5 Capacitors": 0
        },
        "Introduction ": {
            "Jaeger's camp": 0,
            "Jaeger's message": 0
        }
    },
    "Ragman": {
        "Gratitude ": {
            "the secret spot": 0
        },
        "Sew it good - Part 1 ": {
            "Ski hat with holes for eyes": 0,
            "Pilgrim tourist backpack": 0
        },
        "Sew it good - Part 4 ": {
            "2 Wartech (TV-109, TV-106)": 0,
            "2 BlackRock chest rig": 0
        },
        "The Blood of War - Part 2 ": {
            "Fuel conditioner, 4 pcs": 0
        },
        "The Blood of War - Part 3 ": {
            "and mark first fuel stash": 0,
            "and mark second fuel stash": 0,
            "and mark third fuel stash": 0
        },
        "Living high is not a crime - Part 1 ": {
            "Bronze lion, 2 pcs": 0,
            "Horse figurine, 2 pcs": 0,
            "Cat figurine": 0,
            "Roler submariner gold wrist watch": 0
        },
        "Living high is not a crime - Part 2 ": {
            "3 antique teapots": 0,
            "2 antique vases": 0
        }
    },
    "Jaeger": {
        "Huntsman path - The trophy ": {
            "the golden TT": 0
        },
        "Huntsman path - Sell-out ": {
            "In Raid Killa's helmet": 0
        },
        "Huntsman path - Woods keeper ": {
            "Shturman's key": 0
        },
        "Huntsman path - Eraser - Part 1 ": {
            "and eliminate Glukhar": 0
        },
        "Ambulance ": {
            "portable defibrillator": 0,
            "2 CMS surgery kits": 0
        },
        "Shady business ": {
            "3 flash drives": 0
        },
        "Nostalgia ": {
            "a room with the view of a bay, where Jaeger was staying": 0,
            "Jaegers' photo album": 0
        },
        "Fishing place ": {
            "3 TerraGroup Labs access keycards": 0
        },
        "Courtesy visit ": {
            "priest house": 0,
            "fisherman house": 0,
            "chairman house": 0
        },
        "Reserv ": {
            "the food storage": 0
        }
    },
    "Fence": {
        "Collector ": {
            "an Old firesteel": 0,
            "an Antique axe": 0,
            "a Battered antique Book": 0,
            "a FireKlean gun lube": 0,
            "a Golden rooster": 0,
            "a Silver Badge": 0,
            "a Deadlyslob's beard oil": 0,
            "a Golden 1GPhone": 0,
            "a Jar of DevilDog mayo": 0,
            "a Can of sprats": 0,
            "a Fake mustache": 0,
            "a Kotton beanie": 0,
            "a Can of Dr. Lupo's coffee beans": 0,
            "a Pestily plague mask": 0,
            "a Raven figurine": 0,
            "a Shroud half-mask": 0
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