const TAB = `    `;
const DEFAULT_OPTIONS = {
    swapDollar: false,
    flipY: false,
    width: 120,
    height: 180
}

function tab(n) {
    let res = ``;
    for (let i = 0; i < n; i++) {
        res = res.concat(TAB);
    }
    return res;
}

function clone(x) {
    if (Array.isArray(x)) {
        let arr = [];
        for (const item of x) {
            arr.push(clone(item));
        }
        return arr;
    }
    if (typeof (x) != 'object') {
        return x;
    }
    let res = {};
    for (p in x) {
        res[p] = clone(x[p]);
    }
    return res;
}

function scale(st, width, height) {
    let states = [];
    // clone the objects
    for (const state of st) {
        states.push(clone(state));
    }
    // shift all states on x axes so most left is on x=0
    let minX = null;
    for (const s of states) {
        if (!minX) {
            minX = s;
            continue;
        }
        if (s.x < minX.x) {
            minX = s;
        }
    }
    let val = minX.x;
    for (let s of states) {
        s.x += val * -1;
    }
    // shift all states on y axes so most bottom ist on y = 0
    let minY = null;
    for (const s of states) {
        if (!minY) {
            minY = s;
            continue;
        }
        if (s.y < minY.y) {
            minY = s;
        }
    }
    val = minY.y;
    for (let s of states) {
        s.y += val * -1;
    }
    // find max X value
    let maxX = null;
    for (const s of states) {
        if (!maxX) {
            maxX = s;
            continue;
        }
        if (s.x > maxX.x) {
            maxX = s;
        }
    }
    // find max Y value
    let maxY = null;
    for (const s of states) {
        if (!maxY) {
            maxY = s;
            continue;
        }
        if (s.y > maxY.y) {
            maxY = s;
        }
    }

    let xratio = (maxX.x - width) / width;
    let yratio = (maxY.y - height) / height;

    if (xratio > 0 || yratio > 0) {
        if (xratio >= yratio) {
            let scaler = maxX.x;
            for (const s of states) {
                let p = (s.x * 100) / scaler;
                s.x = Math.round(((width * p) / 100) * 1000) / 1000;
                p = (s.y * 100) / scaler;
                s.y = Math.round(((width * p) / 100) * 1000) / 1000;
            }
        } else {
            let scaler = maxY.y;
            for (const s of states) {
                let p = (s.x * 100) / scaler;
                s.x = Math.round(((height * p) / 100) * 1000) / 1000;
                p = (s.y * 100) / scaler;
                s.y = Math.round(((height * p) / 100) * 1000) / 1000;
            }
        }
    }
    return states;
}

function flipYValues(st) {
    let states = [];
    // clone the objects
    for (const state of st) {
        states.push(clone(state));
    }
    for (const s of states) {
        s.y *= -1;
    }
    return states;
}

function getTypeOfState(state) {
    if (state.Final && state.Start) {
        return '[sf]';
    }
    if (state.Final) {
        return '[f]';
    }
    if (state.Start) {
        return '[s]';
    }
    return '';
}

function deaneaLabelProcessing(swapDollar, labels) {
    let res = '';
    let l = labels.slice(0);
    let first = l.shift();
    let one = checkForTokenWithDifferentMeaningInLaTeX(swapDollar, first);
    res = res.concat(`${one}`);
    for (const label of l) {
        one = checkForTokenWithDifferentMeaningInLaTeX(swapDollar, label);
        res = res.concat(`;${one}`);
    }
    return res;
}

function dkankatmLabelProcessing(swapDollar, labels) {
    let res = ``;
    let l = labels.slice(0);
    let first = l.shift();
    let one = checkForTokenWithDifferentMeaningInLaTeX(swapDollar, first[0]);
    let two = checkForTokenWithDifferentMeaningInLaTeX(swapDollar, first[1]);
    let three = checkForTokenWithDifferentMeaningInLaTeX(swapDollar, first[2]);
    res = res.concat(`${one},${two},${three}`);
    for (const label of l) {
        one = checkForTokenWithDifferentMeaningInLaTeX(swapDollar, label[0]);
        two = checkForTokenWithDifferentMeaningInLaTeX(swapDollar, label[1]);
        three = checkForTokenWithDifferentMeaningInLaTeX(swapDollar, label[2]);
        res = res.concat(`;${one},${two},${three}`);
    }
    return res;
}

function checkForTokenWithDifferentMeaningInLaTeX(swapDollar, label) {
    if (Array.isArray(label)) {
        let res = ``;
        for (const l of label) {
            if (l == '$') {
                if (swapDollar) {
                    res = res.concat('\\&');
                } else {
                    res = res.concat('\\$');
                }
            } else if (l == '|') {
                res = res.concat('$\\mid$');
            } else if (l == '-') {
                res = res.concat('$\\relbar$');
            } else {
                res = res.concat(l);
            }
        }
        return res;
    } else {
        if (label == '$') {
            if (swapDollar) {
                return '\\&';
            } else {
                return '\\$';
            }
        } else if (label == '|') {
            return '$\\mid$';
        } else if (label == '-') {
            return '$\\relbar$';
        } else {
            return label;
        }
    }
}

function getAutomatonType(type) {
    switch (type) {
        case 'DEA':
        case 'NEA': return '[fa]';
        case 'DKA':
        case 'NKA': return '[pa]';
        case 'TM': return '[tm]';
        default: return '[fa]';
    }
}

function compile(graph, options) {
    let o = {
        ...DEFAULT_OPTIONS,
        ...options
    }
    let states = scale(graph.automaton.States, o.width, o.height);
    if (o.flipY) {
        states = flipYValues(states);
    }
    let stateIDCollection = {};
    for (let i = 0; i < states.length; i++) {
        stateIDCollection[states[i].ID] = states[i];
    }

    let code = `\\begin{figure}\n${tab(1)}\\centering\n${tab(1)}\\begin{transitiongraph}${getAutomatonType(graph.type)}`;
    for (const s of states) {
        code = code.concat(`\n${tab(2)}`);
        code = code.concat(`\\state${getTypeOfState(s)}{${s.Name}}{${s.x}}{${s.y}}`);
    }
    let bendTransitions = [];
    for (const s of states) {
        for (const t of s.Transitions) {
            if (s.Name != stateIDCollection[t.Target].Name) {
                let found = false;
                for (const bend of bendTransitions) {
                    if ((bend[0] == s.Name && bend[1] == stateIDCollection[t.Target].Name) || (bend[1] == s.Name && bend[0] == stateIDCollection[t.Target].Name)) {
                        bend[2] = true;
                    }
                }
                if (!found) {
                    bendTransitions.push([s.Name, stateIDCollection[t.Target].Name, false]);
                }
            }

        }
    }
    for (const s of states) {
        for (const t of s.Transitions) {
            let labels = ``;
            switch (graph.type.toLocaleLowerCase()) {
                case 'dea':
                case 'nea': labels = deaneaLabelProcessing(o.swapDollar, t.Labels); break;
                case 'dka':
                case 'nka':
                case 'tm': labels = dkankatmLabelProcessing(o.swapDollar, t.Labels); break;
                default: console.error('An unexpected error occured. Please make sure your automaton type is properly named.'); break;
            }
            let bending = ``;
            for (const bend of bendTransitions) {
                if (bend[2] && ((bend[0] == s.Name && bend[1] == stateIDCollection[t.Target].Name) || (bend[1] == s.Name && bend[0] == stateIDCollection[t.Target].Name))) {
                    bending = `[line=left]`;
                }
            }
            code = code.concat(`\n${tab(2)}`);
            code = code.concat(`\\transition${bending}{${s.Name}}{${stateIDCollection[t.Target].Name}}{${labels}}`);
        }
    }
    code = code.concat(`\n${tab(1)}\\end{transitiongraph}\n${tab(1)}\\caption{${graph.name}}\n${tab(1)}\\label{graph:${graph.name.replace(/\s/g, '_')}}\n\\end{figure}`);
    return code;
}

module.exports = compile;