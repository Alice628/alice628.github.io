let dealer = ["Prapor", "Therapist", "Fence", "Skier", "Peacekeeper", "Mechanic", "Ragman", "Jaeger"];
let questMap = {
    "Prapor": {
        "Checking ": {
            "the bronze pocket watch": 0
        },
        "Delivery from the past ": {
            "a secure case in the Tarcone Director's Office at the Customs terminal": 0
        },
        "The bunker - Part 1 ": {
            "underground bunker": 0
        },
        "Bad rep evidence ": {
            "secure folder 0031 in a bunkhouse on Customs": 0
        },
        "Ice cream cones ": {
            "6 60-round mags for AK": 0
        },
        "Postman Pat - Part 1 ": {
            "a letter on a messenger in the Factory": 0
        },
        "Shaking up teller ": {
            "something valuable in the dorm room 203": 0
        },
        "The Punisher - Part 2 ": {
            "7 lower half-masks": 0
        },
        "The Punisher - Part 4 ": {
            "5 knives Bars A-2607": 0
        },
        "The Punisher - Part 5 ": {
            "3 AK-74N": 0,
            "3 M4A1 assault rifles": 0,
            "5 PM pistols": 0
        },
        "The Punisher - Part 6 ": {
            "7 PMC USEC dogtags": 0,
            "7 PMC BEAR dogtags": 0
        },
        "Big customer ": {
            "a transport with chemicals": 0
        },
        "No offence ": {
            "10 M67 grenades": 0
        },
        "Regulated materials ": {
            "military battery": 0,
            "10 30-mil. shells for BMP cannon": 0
        }
    },
    "Therapist": {
        "Shortage ": {
            "5 Salewa kits": 0
        },
        "Sanitary Standards - Part 1 ": {
            "gas analyzer": 0
        },
        "Sanitary Standards - Part 2 ": {
            "2 gas analyzers": 0
        },
        "Operation Aquarius - Part 1 ": {
            "hidden water in the dorm": 0
        },
        "Painkiller ": {
            "4 morphine syringes": 0
        },
        "Pharmacist ": {
            "a case with the device": 0
        },
        "Supply plans ": {
            "the secure folder on the sawmill": 0
        },
        "General wares ": {
            "15 cans of meat": 0
        },
        "Car repair ": {
            "4 car batteries": 0,
            "8 spark plugs": 0
        },
        "Health Care Privacy - Part 3 ": {
            "the car that belonged to the head of the Medical Service": 0
        },
        "Out of curiosity ": {
            "a transport with chemicals": 0
        },
        "Trust regain ": {
            "303 dorm room key": 0,
            "ZB-014 key": 0,
            "the customs military checkpoint key": 0,
            "gas station closet key": 0
        }
    },
    "Skier": {
        "The Extortionist ": {
            "the hidden valuable cargo": 0
        },
        "What's on the flash drive? ": {
            "two USB flash drives with information": 0
        },
        "Golden swag ": {
            "a Gilded Zibbo lighter": 0
        },
        "Chemical - Part 1 ": {
            "some information about the Deputy Chief's past life": 0,
            "items that can help the investigation": 0
        },
        "Chemical - Part 2 ": {
            "any information that could help with the investigation": 0,
            "any evidence that could help with the investigation": 0
        },
        "Chemical - Part 3 ": {
            "a Syringe with a chemical in the Factory": 0
        },
        "Chemical - Part 4 ": {
            "a transport with chemicals": 0
        },
        "Friend from the West - Part 1 ": {
            "7 PMC USEC dogtags": 0
        },
        "\"Vitamins\" - Part 2 ": {
            "3 Medical bloodset": 0,
            "4 Respirator": 0
        },
        "Bullshit ": {
            "False flash drive": 0
        }
    },
    "Peacekeeper": {
        "Fishing Gear ": {
            "the secret spot": 0
        },
        "Eagle Eye ": {
            "the first UAV crash site": 0,
            "SAS disk from the first crashed drone": 0,
            "the second UAV crash site": 0,
            "SAS disk from the second crashed drone": 0
        },
        "Humanitarian Supplies ": {
            "5 MRE ration packs": 0
        },
        "The Cult - Part 1 ": {
            "the missing informant": 0
        },
        "Spa Tour - Part 3 ": {
            "WD-40 100ml": 0,
            "Clin wipers, 2 pcs": 0,
            "Corrugated hoses, 2 pcs": 0,
            "Ox bleach, 2 pcs": 0
        },
        "Spa Tour - Part 4 ": {
            "generators in right wing": 0,
            "generators in left wing": 0
        },
        "Spa Tour - Part 5 ": {
            "the key from the locked resort rooms": 0
        },
        "Spa Tour - Part 7 ": {
            "Morphine injector, 4 pcs": 0,
            "Heat-exchange alkali surface washer, 2 pcs": 0,
            "Corrugated hose, 2 pcs": 0,
            "5L propane tank, 2 pcs": 0
        },
        "Cargo X - Part 1 ": {
            "the cargo record in the computer room": 0
        },
        "Cargo X - Part 2 ": {
            "a room with reservoirs": 0,
            "any information on the second part of the shipment": 0
        },
        "Cargo X - Part 3 ": {
            "hidden Terragroup cargo": 0
        },
        "Lend lease - Part 2 ": {
            "Military COFDM wireless Signal Transmitter": 0,
            "2 Virtex programmable processors": 0
        },
        "Wet Job - Part 2 ": {
            "the fisher's dwelling": 0
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