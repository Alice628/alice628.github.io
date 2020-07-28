let moduleList = [
    "Air Filtering Unit",
    "Bitcoin farm",
    "Booze generator",
    "Generator",
    "Heating",
    "Illumination",
    "Intelligence Center",
    "Lavatory",
    "Library",
    "Medstation",
    "Nutrition unit",
    "Rest Space",
    "Scav case",
    "Security",
    "Shooting range",
    "Solar power",
    "Stash",
    "Vents",
    "Water collector",
    "Workbench",
    "Christmas tree"
];

let materialList = [
    "Dollars",
    "CPU Fan",
    "Power supply unit",
    "Powercord",
    "Electric drill",
    "Printed circuit board",
    "Phase control relay",
    "Silicone tube",
    "Electric motor",
    "Pressure gauge",
    "Analog thermometer",
    "Corrugated hose",
    "Roubles",
    "Wires",
    "Spark plug",
    "Radiator helix",
    "Light bulb",
    "Capacitors",
    "Folder with intelligence",
    "Secure Flash drive",
    "Damaged hard drive",
    "Military COFDM wireless Signal Transmitter",
    "VPX Flash Storage Module",
    "Gas analyzer",
    "Military cable",
    "A pack of screws",
    "A set of tools",
    "Xenomorph sealing foam",
    "Medical bloodset",
    "Saline solution",
    "LEDX Skin Transilluminator",
    "Ophthalmoscopy",
    "Wrench",
    "Heat-exchange alkali surface washer",
    "Coffee Majaica",
    "Sodium bicarbonate",
    "Bronze lion",
    "Gold skull ring",
    "Golden neck chain",
    "Roler submariner gold wrist watch",
    "Working LCD",
    "NIXXOR lens",
    "SSD drive",
    "A pack of nails",
    "Screw nut",
    "Bolts",
    "Duct tape",
    "Euros",
    "Phased array element",
    "Military power filter",
    "Hand drill",
    "WD-40 100ml",
    "Car battery",
    "Pliers Elite",
    "Shustrilo sealing foam",
    "Leatherman Multitool",
    "FireKlean gun lube",
    "Christmas tree decoration ball (red)",
    "Christmas tree decoration ball (silver)",
    "Christmas tree decoration ball (violet)"
];

let totalRequirement = {
    "Dollars": 13000,
    "CPU Fan": 50,
    "Power supply unit": 15,
    "Powercord": 13,
    "Electric drill": 6,
    "Printed circuit board": 10,
    "Phase control relay": 16,
    "Silicone tube": 14,
    "Electric motor": 12,
    "Pressure gauge": 8,
    "Analog thermometer": 2,
    "Corrugated hose": 17 + 9,
    "Roubles": 13477000,
    "Wires": 53,
    "Spark plug": 5,
    "Radiator helix": 8,
    "Light bulb": 14,
    "Capacitors": 12,
    "Folder with intelligence": 4,
    "Secure Flash drive": 3,
    "Damaged hard drive": 4,
    "Military COFDM wireless Signal Transmitter": 2,
    "VPX Flash Storage Module": 2,
    "Gas analyzer": 3,
    "Military cable": 8,
    "A pack of screws": 20,
    "A set of tools": 6,
    "Xenomorph sealing foam": 3,
    "Medical bloodset": 2,
    "Saline solution": 7,
    "LEDX Skin Transilluminator": 1,
    "Ophthalmoscopy": 1,
    "Wrench": 4,
    "Heat-exchange alkali surface washer": 2,
    "Coffee Majaica": 3,
    "Sodium bicarbonate": 3,
    "Bronze lion": 4,
    "Gold skull ring": 6,
    "Golden neck chain": 8,
    "Roler submariner gold wrist watch": 4,
    "Working LCD": 2,
    "NIXXOR lens": 8,
    "SSD drive": 1,
    "A pack of nails": 4,
    "Screw nut": 12,
    "Bolts": 18,
    "Duct tape": 6,
    "Euros": 165000,
    "Phased array element": 2,
    "Military power filter": 4,
    "Hand drill": 1,
    "WD-40 100ml": 4,
    "Car battery": 5,
    "Pliers Elite": 4,
    "Shustrilo sealing foam": 5,
    "Leatherman Multitool": 1,
    "FireKlean gun lube": 1,
    "Christmas tree decoration ball (red)": 1,
    "Christmas tree decoration ball (silver)": 1,
    "Christmas tree decoration ball (violet)": 1
};

let materialMap = {
    "Air Filtering Unit": { "1": { "Dollars": 10000 } },
    "Bitcoin farm": {
        "1": {
            "CPU Fan": 10,
            "Power supply unit": 5,
            "Powercord": 5,
            "Electric drill": 1
        },
        "2": {
            "CPU Fan": 15,
            "Power supply unit": 5,
            "Printed circuit board": 5,
            "Phase control relay": 2
        },
        "3": {
            "CPU Fan": 25,
            "Silicone tube": 10,
            "Electric motor": 2,
            "Pressure gauge": 4
        }
    },
    "Booze generator": {
        "1": {
            "Silicone tube": 4,
            "Analog thermometer": 2,
            "Pressure gauge": 2,
            "Corrugated hose": 5
        }
    },
    "Generator": {
        "1": { "Roubles": 100000 },
        "2": {
            "Phase control relay": 5,
            "Electric motor": 1,
            "Wires": 15
        },
        "3": {
            "Phase control relay": 6,
            "Electric motor": 2,
            "Spark plug": 5,
            "Power supply unit": 5
        }
    },
    "Heating": {
        "1": { "Roubles": 25000 },
        "2": { "Roubles": 50000 },
        "3": {
            "Radiator helix": 8,
            "Wires": 8
        }
    },
    "Illumination": {
        "1": { "Roubles": 10000 },
        "2": {
            "Light bulb": 14,
            "Wires": 5
        },
        "3": {
            "Roubles": 50000,
            "Capacitors": 7
        }
    },
    "Intelligence Center": {
        "1": { "Folder with intelligence": 1 },
        "2": {
            "Folder with intelligence": 3,
            "Secure Flash drive": 3,
            "Powercord": 4,
            "Damaged hard drive": 4
        },
        "3": {
            "Military COFDM wireless Signal Transmitter": 2,
            "VPX Flash Storage Module": 2,
            "Gas analyzer": 3,
            "Military cable": 4
        }
    },
    "Lavatory": {
        "1": { "Roubles": 2000 },
        "2": {
            "Corrugated hose": 3,
            "A pack of screws": 5,
            "Electric drill": 1
        },
        "3": {
            "Corrugated hose": 6,
            "Pressure gauge": 2,
            "A set of tools": 1,
            "Xenomorph sealing foam": 3
        }
    },
    "Library": { "1": { "Roubles": 400000 } },
    "Medstation": {
        "1": { "Roubles": 25000 },
        "2": {
            "Roubles": 50000,
            "Medical bloodset": 2,
            "Saline solution": 3
        },
        "3": {
            "Roubles": 150000,
            "Saline solution": 4,
            "LEDX Skin Transilluminator": 1,
            "Ophthalmoscopy": 1
        }
    },
    "Nutrition unit": {
        "1": {
            "Roubles": 25000,
            "Phase control relay": 2
        },
        "2": {
            "Wrench": 4,
            "Corrugated hose": 2,
            "Heat-exchange alkali surface washer": 2,
            "Phase control relay": 1
        },
        "3": {
            "Roubles": 125000,
            "Coffee Majaica": 3,
            "Sodium bicarbonate": 3
        }
    },
    "Rest Space": {
        "1": { "Roubles": 10000 },
        "2": { "Roubles": 35000 },
        "3": {
            "Dollars": 3000,
            "Powercord": 4,
            "Capacitors": 5,
            "Wires": 7
        }
    },
    "Scav case": {
        "1": {
            "Bronze lion": 4,
            "Gold skull ring": 6,
            "Golden neck chain": 8,
            "Roler submariner gold wrist watch": 4
        }
    },
    "Security": {
        "1": { "Roubles": 20000 },
        "2": { "Roubles": 45000 },
        "3": {
            "Working LCD": 2,
            "Wires": 4,
            "NIXXOR lens": 8,
            "SSD drive": 1
        }
    },
    "Shooting range": {
        "1": {
            "A pack of nails": 4,
            "Screw nut": 5,
            "Bolts": 5,
            "Duct tape": 3
        }
    },
    "Solar power": {
        "1": {
            "Euros": 15000,
            "Military cable": 4,
            "Phased array element": 2,
            "Military power filter": 4
        }
    },
    "Stash": {
        "1": {},
        "2": {
            "Roubles": 3500000,
            "Hand drill": 1,
            "A pack of screws": 7,
            "WD-40 100ml": 4
        },
        "3": {
            "Roubles": 8500000,
            "Electric drill": 2,
            "A pack of screws": 8
        },
        "4": { "Euros": 150000 }
    },
    "Vents": {
        "1": { "Roubles": 25000 },
        "2": {
            "Electric motor": 1,
            "Car battery": 1
        },
        "3": {
            "Electric motor": 4,
            "Wires": 14,
            "Printed circuit board": 5,
            "Car battery": 4
        }
    },
    "Water collector": {
        "1": {
            "Corrugated hose": 4,
            "Bolts": 5,
            "Screw nut": 5,
            "Duct tape": 3
        },
        "2": {
            "Corrugated hose": 6,
            "Electric motor": 2,
            "A set of tools": 2
        },
        "3": {
            "Roubles": 125000,
            "Pliers Elite": 2,
            "Shustrilo sealing foam": 5
        }
    },
    "Workbench": {
        "1": {
            "Screw nut": 2,
            "Bolts": 2,
            "Leatherman Multitool": 1
        },
        "2": {
            "A set of tools": 3,
            "Electric drill": 2,
            "Bolts": 6
        },
        "3": {
            "Roubles": 195000,
            "Pliers Elite": 2,
            "FireKlean gun lube": 1
        }
    },
    "Christmas tree": {
        "1": {
            "Roubles": 10000,
            "Christmas tree decoration ball (red)": 1,
            "Christmas tree decoration ball (silver)": 1,
            "Christmas tree decoration ball (violet)": 1
        }
    }
};