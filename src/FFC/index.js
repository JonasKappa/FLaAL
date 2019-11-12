const fs = require('fs');
const ffc = require('./ffc.js');

let automatons = [
    {
        name: "In w kommt 00 vor",
        description: "",
        type: "DEA",
        automaton: {
            simulationInput: [
                "0",
                "1",
                "1",
                "0",
                "1",
                "1"
            ],
            Alphabet: [
                "0",
                "1"
            ],
            StackAlphabet: [
                "|"
            ],
            States: [
                {
                    ID: 1,
                    Name: "q0+q2",
                    x: 150,
                    y: 200,
                    Final: false,
                    Radius: 30,
                    Transitions: [
                        {
                            Source: 1,
                            Target: 1,
                            x: 0,
                            y: -50,
                            Labels: [
                                "1"
                            ]
                        },
                        {
                            Source: 1,
                            Target: 3,
                            x: 0,
                            y: 30,
                            Labels: [
                                "0"
                            ]
                        }
                    ],
                    Start: true
                },
                {
                    ID: 3,
                    Name: "q3+q1",
                    x: 370,
                    y: 200,
                    Final: false,
                    Radius: 30,
                    Transitions: [
                        {
                            Source: 3,
                            Target: 1,
                            x: 0,
                            y: 30,
                            Labels: [
                                "1"
                            ]
                        },
                        {
                            Source: 3,
                            Target: 4,
                            x: 0,
                            y: 0,
                            Labels: [
                                "0"
                            ]
                        }
                    ],
                    Start: false
                },
                {
                    ID: 4,
                    Name: "q4",
                    x: 550,
                    y: 200,
                    Final: true,
                    Radius: 30,
                    Transitions: [
                        {
                            Source: 4,
                            Target: 4,
                            x: 0,
                            y: -60,
                            Labels: [
                                "0",
                                "1"
                            ]
                        }
                    ],
                    Start: false
                }
            ]
        }
    },
    {
        "name": "DKAGraph",
        "description": "",
        "type": "DKA",
        "automaton": {
            "simulationInput": [
                "a",
                "a",
                "b",
                "b",
                "d"
            ],
            "Alphabet": [
                "a",
                "b",
                "c",
                "d"
            ],
            "StackAlphabet": [
                "|",
                "-"
            ],
            "States": [
                {
                    "ID": 1,
                    "Name": "q0",
                    "x": 290,
                    "y": 200,
                    "Final": false,
                    "Radius": 30,
                    "Transitions": [
                        {
                            "Source": 1,
                            "Target": 2,
                            "x": 0,
                            "y": 0,
                            "Labels": [
                                [
                                    "|",
                                    "a",
                                    [
                                        "|"
                                    ]
                                ],
                                [
                                    "|",
                                    "b",
                                    [
                                        "-"
                                    ]
                                ]
                            ]
                        },
                        {
                            "Source": 1,
                            "Target": 3,
                            "x": 0,
                            "y": 0,
                            "Labels": [
                                [
                                    "|",
                                    "c",
                                    []
                                ],
                                [
                                    "|",
                                    "d",
                                    []
                                ]
                            ]
                        }
                    ],
                    "Start": true
                },
                {
                    "ID": 2,
                    "Name": "q1",
                    "x": 450,
                    "y": 200,
                    "Final": false,
                    "Radius": 30,
                    "Transitions": [
                        {
                            "Source": 2,
                            "Target": 2,
                            "x": 0,
                            "y": -150,
                            "Labels": [
                                [
                                    "|",
                                    "a",
                                    [
                                        "|",
                                        "|"
                                    ]
                                ],
                                [
                                    "-",
                                    "a",
                                    [
                                        "|",
                                        "-"
                                    ]
                                ],
                                [
                                    "|",
                                    "b",
                                    [
                                        "-",
                                        "|"
                                    ]
                                ],
                                [
                                    "-",
                                    "b",
                                    [
                                        "-",
                                        "-"
                                    ]
                                ]
                            ]
                        },
                        {
                            "Source": 2,
                            "Target": 4,
                            "x": 0,
                            "y": 0,
                            "Labels": [
                                [
                                    "|",
                                    "c",
                                    []
                                ],
                                [
                                    "-",
                                    "d",
                                    []
                                ]
                            ]
                        }
                    ],
                    "Start": false
                },
                {
                    "ID": 3,
                    "Name": "q2",
                    "x": 300,
                    "y": 400,
                    "Final": false,
                    "Radius": 30,
                    "Transitions": [
                        {
                            "Source": 3,
                            "Target": 3,
                            "x": 110,
                            "y": 30,
                            "Labels": [
                                [
                                    "|",
                                    "a",
                                    []
                                ],
                                [
                                    "|",
                                    "b",
                                    []
                                ],
                                [
                                    "|",
                                    "c",
                                    []
                                ],
                                [
                                    "|",
                                    "d",
                                    []
                                ]
                            ]
                        }
                    ],
                    "Start": false
                },
                {
                    "ID": 4,
                    "Name": "q3",
                    "x": 600,
                    "y": 200,
                    "Final": true,
                    "Radius": 30,
                    "Transitions": [
                        {
                            "Source": 4,
                            "Target": 4,
                            "x": 0,
                            "y": -150,
                            "Labels": [
                                [
                                    "|",
                                    "c",
                                    []
                                ],
                                [
                                    "-",
                                    "d",
                                    []
                                ]
                            ]
                        },
                        {
                            "Source": 4,
                            "Target": 3,
                            "x": 0,
                            "y": 0,
                            "Labels": [
                                [
                                    "|",
                                    "a",
                                    []
                                ],
                                [
                                    "-",
                                    "a",
                                    []
                                ],
                                [
                                    "|",
                                    "b",
                                    []
                                ],
                                [
                                    "-",
                                    "b",
                                    []
                                ]
                            ]
                        }
                    ],
                    "Start": false
                }
            ]
        }
    },
    {
        "name": "NEAGraph",
        "description": "",
        "type": "NEA",
        "automaton": {
            "simulationInput": [
                "a",
                "b",
                "c"
            ],
            "Alphabet": [
                "a",
                "b",
                "c"
            ],
            "StackAlphabet": [
                "|"
            ],
            "States": [
                {
                    "ID": 1,
                    "Name": "Z1c",
                    "x": 150,
                    "y": 150,
                    "Final": true,
                    "Radius": 30,
                    "Transitions": [
                        {
                            "Source": 1,
                            "Target": 2,
                            "x": 50,
                            "y": 0,
                            "Labels": [
                                ""
                            ]
                        },
                        {
                            "Source": 1,
                            "Target": 3,
                            "x": 50,
                            "y": 0,
                            "Labels": [
                                "",
                                "a",
                                "b",
                                "c"
                            ]
                        }
                    ],
                    "Start": true
                },
                {
                    "ID": 2,
                    "Name": "Z1a",
                    "x": 150,
                    "y": 370,
                    "Final": false,
                    "Radius": 30,
                    "Transitions": [
                        {
                            "Source": 2,
                            "Target": 1,
                            "x": 50,
                            "y": 0,
                            "Labels": [
                                ""
                            ]
                        }
                    ],
                    "Start": false
                },
                {
                    "ID": 3,
                    "Name": "Z1b",
                    "x": 370,
                    "y": 150,
                    "Final": true,
                    "Radius": 30,
                    "Transitions": [
                        {
                            "Source": 3,
                            "Target": 1,
                            "x": 50,
                            "y": 0,
                            "Labels": [
                                "a",
                                "b",
                                "c"
                            ]
                        }
                    ],
                    "Start": false
                }
            ]
        }
    },
    {
        "name": "Notensprache",
        "description": "",
        "type": "NKA",
        "automaton": {
            "Alphabet": [
                "16",
                "32",
                "0",
                "E",
                "F",
                "G",
                "H",
                "A",
                "C",
                "1",
                "2",
                "3",
                "4",
                "8",
                "-",
                "D",
                "P"
            ],
            "StackAlphabet": [
                "$",
                "16",
                "32",
                "0",
                "E",
                "F",
                "G",
                "H",
                "A",
                "C",
                "1",
                "2",
                "3",
                "4",
                "8",
                "-",
                "D",
                "P",
                "Duration",
                "KeyName",
                "Octave",
                "Notes",
                "Pause",
                "Song",
                "Note",
                "Key"
            ],
            "States": [
                {
                    "ID": 1,
                    "Name": "q1",
                    "x": 290,
                    "y": 90,
                    "Radius": 30,
                    "Transitions": [
                        {
                            "Source": 1,
                            "Target": 2,
                            "x": 0,
                            "y": 0,
                            "Labels": [
                                [
                                    "$",
                                    "",
                                    [
                                        "Song",
                                        "$"
                                    ]
                                ]
                            ]
                        }
                    ],
                    "Start": true,
                    "Final": false
                },
                {
                    "ID": 3,
                    "Name": "q3",
                    "x": 720,
                    "y": 90,
                    "Radius": 30,
                    "Transitions": [],
                    "Start": false,
                    "Final": true
                },
                {
                    "ID": 2,
                    "Name": "q2",
                    "x": 500,
                    "y": 90,
                    "Radius": 30,
                    "Transitions": [
                        {
                            "Source": 2,
                            "Target": 3,
                            "x": 0,
                            "y": 0,
                            "Labels": [
                                [
                                    "$",
                                    "",
                                    []
                                ]
                            ]
                        },
                        {
                            "Source": 2,
                            "Target": 2,
                            "x": 0,
                            "y": 40,
                            "Labels": [
                                [
                                    "16",
                                    "16",
                                    []
                                ],
                                [
                                    "32",
                                    "32",
                                    []
                                ],
                                [
                                    "0",
                                    "0",
                                    []
                                ],
                                [
                                    "E",
                                    "E",
                                    []
                                ],
                                [
                                    "F",
                                    "F",
                                    []
                                ],
                                [
                                    "G",
                                    "G",
                                    []
                                ],
                                [
                                    "H",
                                    "H",
                                    []
                                ],
                                [
                                    "A",
                                    "A",
                                    []
                                ],
                                [
                                    "C",
                                    "C",
                                    []
                                ],
                                [
                                    "1",
                                    "1",
                                    []
                                ],
                                [
                                    "2",
                                    "2",
                                    []
                                ],
                                [
                                    "3",
                                    "3",
                                    []
                                ],
                                [
                                    "4",
                                    "4",
                                    []
                                ],
                                [
                                    "8",
                                    "8",
                                    []
                                ],
                                [
                                    "-",
                                    "-",
                                    []
                                ],
                                [
                                    "D",
                                    "D",
                                    []
                                ],
                                [
                                    "P",
                                    "P",
                                    []
                                ],
                                [
                                    "Song",
                                    "",
                                    [
                                        "Notes"
                                    ]
                                ],
                                [
                                    "Notes",
                                    "",
                                    [
                                        "Note"
                                    ]
                                ],
                                [
                                    "Notes",
                                    "",
                                    [
                                        "Note",
                                        "Notes"
                                    ]
                                ],
                                [
                                    "Note",
                                    "",
                                    [
                                        "Key",
                                        "-",
                                        "Duration"
                                    ]
                                ],
                                [
                                    "Note",
                                    "",
                                    [
                                        "Pause",
                                        "-",
                                        "Duration"
                                    ]
                                ],
                                [
                                    "Key",
                                    "",
                                    [
                                        "KeyName",
                                        "Octave"
                                    ]
                                ],
                                [
                                    "KeyName",
                                    "",
                                    [
                                        "C"
                                    ]
                                ],
                                [
                                    "KeyName",
                                    "",
                                    [
                                        "D"
                                    ]
                                ],
                                [
                                    "KeyName",
                                    "",
                                    [
                                        "E"
                                    ]
                                ],
                                [
                                    "KeyName",
                                    "",
                                    [
                                        "F"
                                    ]
                                ],
                                [
                                    "KeyName",
                                    "",
                                    [
                                        "G"
                                    ]
                                ],
                                [
                                    "KeyName",
                                    "",
                                    [
                                        "H"
                                    ]
                                ],
                                [
                                    "KeyName",
                                    "",
                                    [
                                        "A"
                                    ]
                                ],
                                [
                                    "Octave",
                                    "",
                                    [
                                        "0"
                                    ]
                                ],
                                [
                                    "Octave",
                                    "",
                                    [
                                        "1"
                                    ]
                                ],
                                [
                                    "Octave",
                                    "",
                                    [
                                        "2"
                                    ]
                                ],
                                [
                                    "Octave",
                                    "",
                                    [
                                        "3"
                                    ]
                                ],
                                [
                                    "Duration",
                                    "",
                                    [
                                        "1"
                                    ]
                                ],
                                [
                                    "Duration",
                                    "",
                                    [
                                        "2"
                                    ]
                                ],
                                [
                                    "Duration",
                                    "",
                                    [
                                        "4"
                                    ]
                                ],
                                [
                                    "Duration",
                                    "",
                                    [
                                        "8"
                                    ]
                                ],
                                [
                                    "Duration",
                                    "",
                                    [
                                        "16"
                                    ]
                                ],
                                [
                                    "Duration",
                                    "",
                                    [
                                        "32"
                                    ]
                                ],
                                [
                                    "Pause",
                                    "",
                                    [
                                        "P"
                                    ]
                                ]
                            ]
                        }
                    ],
                    "Start": false,
                    "Final": false
                }
            ],
            "simulationInput": [
                "C",
                "2",
                "-",
                "8"
            ]
        }
    },
    {
        "name": "TMGraph",
        "description": "",
        "type": "TM",
        "automaton": {
            "simulationInput": [
                "1",
                "1",
                "1"
            ],
            "Alphabet": [
                "1"
            ],
            "StackAlphabet": [
                "$",
                "1"
            ],
            "States": [
                {
                    "ID": 1,
                    "Name": "q0",
                    "x": 140,
                    "y": 110,
                    "Final": false,
                    "Radius": 30,
                    "Transitions": [
                        {
                            "Source": 1,
                            "Target": 2,
                            "x": 0,
                            "y": 0,
                            "Labels": [
                                [
                                    "1",
                                    "$",
                                    "R"
                                ]
                            ]
                        },
                        {
                            "Source": 1,
                            "Target": 7,
                            "x": 0,
                            "y": 0,
                            "Labels": [
                                [
                                    "$",
                                    "$",
                                    "R"
                                ]
                            ]
                        }
                    ],
                    "Start": true
                },
                {
                    "ID": 4,
                    "Name": "q3",
                    "x": 880,
                    "y": 110,
                    "Final": false,
                    "Radius": 30,
                    "Transitions": [
                        {
                            "Source": 4,
                            "Target": 5,
                            "x": 0,
                            "y": 0,
                            "Labels": [
                                [
                                    "$",
                                    "1",
                                    "L"
                                ]
                            ]
                        }
                    ],
                    "Start": false
                },
                {
                    "ID": 7,
                    "Name": "q6",
                    "x": 360,
                    "y": 270,
                    "Final": true,
                    "Radius": 30,
                    "Transitions": [],
                    "Start": false
                },
                {
                    "ID": 6,
                    "Name": "q5",
                    "x": 140,
                    "y": 410,
                    "Final": false,
                    "Radius": 30,
                    "Transitions": [
                        {
                            "Source": 6,
                            "Target": 6,
                            "x": -40,
                            "y": 0,
                            "Labels": [
                                [
                                    "1",
                                    "1",
                                    "L"
                                ]
                            ]
                        },
                        {
                            "Source": 6,
                            "Target": 1,
                            "x": 0,
                            "y": 0,
                            "Labels": [
                                [
                                    "$",
                                    "$",
                                    "R"
                                ]
                            ]
                        }
                    ],
                    "Start": false
                },
                {
                    "ID": 2,
                    "Name": "q1",
                    "x": 360,
                    "y": 110,
                    "Final": false,
                    "Radius": 30,
                    "Transitions": [
                        {
                            "Source": 2,
                            "Target": 2,
                            "x": 0,
                            "y": -40,
                            "Labels": [
                                [
                                    "1",
                                    "1",
                                    "R"
                                ]
                            ]
                        },
                        {
                            "Source": 2,
                            "Target": 3,
                            "x": 0,
                            "y": 0,
                            "Labels": [
                                [
                                    "$",
                                    "$",
                                    "R"
                                ]
                            ]
                        }
                    ],
                    "Start": false
                },
                {
                    "ID": 5,
                    "Name": "q4",
                    "x": 880,
                    "y": 400,
                    "Final": false,
                    "Radius": 30,
                    "Transitions": [
                        {
                            "Source": 5,
                            "Target": 6,
                            "x": 0,
                            "y": 0,
                            "Labels": [
                                [
                                    "$",
                                    "$",
                                    "L"
                                ]
                            ]
                        },
                        {
                            "Source": 5,
                            "Target": 5,
                            "x": 0,
                            "y": 40,
                            "Labels": [
                                [
                                    "1",
                                    "1",
                                    "L"
                                ]
                            ]
                        }
                    ],
                    "Start": false
                },
                {
                    "ID": 3,
                    "Name": "q2",
                    "x": 620,
                    "y": 110,
                    "Final": false,
                    "Radius": 30,
                    "Transitions": [
                        {
                            "Source": 3,
                            "Target": 3,
                            "x": 0,
                            "y": -40,
                            "Labels": [
                                [
                                    "1",
                                    "1",
                                    "R"
                                ]
                            ]
                        },
                        {
                            "Source": 3,
                            "Target": 4,
                            "x": 0,
                            "y": 0,
                            "Labels": [
                                [
                                    "$",
                                    "1",
                                    "R"
                                ]
                            ]
                        }
                    ],
                    "Start": false
                }
            ],
            "ID": "226"
        }
    }
];

function save(code) {
    fs.writeFileSync('graph.txt', code);
    console.log('Successfully written to file.');
}

function getFlagValue(flag) {
    let next = false;
    for (const val of process.argv) {
        if (next) {
            return val;
        } else {
            if (val == `-${flag}`) {
                next = true;
            }
        }
    }
    return null;
}

function getAutomaton() {
    let val = getFlagValue('a');
    if (!val) {
        return null;
    }
    let res = parseInt(val);
    if (!(isNaN(res)) && res >= 0 && res < automatons.length) {
        return res;
    } else {
        console.log(`${val} is not a number or the value is invalid!`);
        process.exit();
    }
}

function getAutomatonFile() {
    let val = getFlagValue('fn');
    if (!val) {
        return null;
    }
    let pattern = /\.json$/;
    if (val.match(pattern)) {
        return val;
    } else {
        console.error(`${val} is no valid file. Pease ensure, your file is a json file.`);
        process.exit();
    }
}

function getFlag(flag) {
    for (const val of process.argv) {
        if (val == `-${flag}`) {
            return true
        }
    }
    return false;
}

function runWithAutomatonFile(automatonFile, options) {
    try {
        let automaton = JSON.parse(fs.readFileSync(`./${automatonFile}`, `utf8`).replace(/^\uFEFF/, ''));
        save(ffc(automaton, options));
    } catch (err) {
        console.error(err);
        console.error(`An error occured. Make sure your name typing of the file is correct and your file is in json style.`);
        process.exit();
    }
}

function run() {

    let swapDollar = getFlag(`sd`);
    let automatonIndex = getAutomaton();
    let flipY = getFlag(`fy`);
    let automatonFile = getAutomatonFile();
    let options = {
        flipY, swapDollar
    }

    if (automatonIndex && !automatonFile) {
        save(ffc(automatons[automatonIndex], options));
    } else if (automatonFile) {
        runWithAutomatonFile(automatonFile, options);
    } else if (!automatonFile && !automatonIndex) {
        console.log(`You didnt specify any automaton, so defaulting to first build in automaton.`);
        save(ffc(automatons[0], options));
    }

}

run();

