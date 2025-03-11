const nameCorrections = {
    "naruto": "Uzumaki Naruto",
    "sakura": "Haruno Sakura",
    "sasuke": "Uchiha Sasuke",
    "kiba": "Inuzuka Kiba",
    "shino": "Aburame Shino",
    "hinata": "Hyuuga Hinata",
    "shikamaru": "Nara Shikamaru",
    "chouji": "Akimichi Chouji",
    "ino": "Yamanaka Ino",
    "lee": "Rock Lee",
    "neji": "Hyuuga Neji",
    "dosu": "Kinuta Dosu",
    "kin": "Tsuchi Kin",
    "zaku": "Abumi Zaku",
    "yk": "Young Kakashi",
    "obito": "Uchiha Obito",
    "rin": "Nohara Rin",
    "hanabi": "Hyuuga Hanabi",
    "yoroi": "Akadou Yoroi",
    "misumi": "Tsurugi Misumi",
    "iruka": "Umino Iruka",
    "anko": "Mitarashi Anko",
    "Hayate": "Gekko Hayate",
    "kakashi": "Hatake Kakashi",
    "kurenai": "Yuhi Kurenai",
    "asuma": "Sarutobi Asuma",
    "gai": "Maito Gai",
    "kushina": "Uzumaki Kushina",
    "minato": "Namikaze Minato",
    "kabuto": "Yakushi Kabuto",
    "oro": "Orochimaru",
    "et hashirama": "ET Senju Hashirama",
    "et tobirama": "ET Senju Tobirama",
    "hiruzen": "Sarutobi Hiruzen",
    "db": "Demon Brothers",
    "zabuza": "Momochi Zabuza",
    "css": "Cursed Seal Sasuke",
    "kisame": "Hoshigaki Kisame",
    "itachi": "Uchiha Itachi",
    "naruto s": "Uzumaki Naruto (S)",
    "konohamaru": "Sarutobi Konohamaru",
    "sakura s": "Haruno Sakura (S)",
    "sai": "Sai (S)",
    "kiba s": "Inuzuka Kiba (S)",
    "shino s": "Aburame Shino (S)",
    "hinata s": "Hyuuga Hinata (S)",
    "shikamaru s": "Nara Shikamaru (S)",
    "chouji s": "Akimichi Chouji (S)",
    "ino s": "Yamanaka Ino (S)",
    "lee s": "Rock Lee (S)",
    "tenten s": "Tenten (S)",
    "neji s": "Hyuuga Neji (S)",
    "kakashi s": "Hatake Kakashi (S)",
    "gai s": "Maito Gai (S)",
    "asuma s": "Sarutobi Asuma (S)",
    "I&K": "Izumo and Kotetsu",
    "aoba": "Yamashiro Aoba",
    "tsume": "Inuzuka Tsume",
    "chouza": "Akimichi Chouza (S)",
    "shikaku": "Nara Shikaku",
    "inoichi": "Yamanaka Inoichi",
    "hiashi": "Hyuuga Hiashi",
    "torune": "Aburame Torune",
    "fu": "Yamanaka Fu",
    "danzo": "Shimura Danzo",
    "chiyo s": "Chiyo (S)",
    "maki s": "Maki (S)",
    "gaara s": "Kazekage Gaara (S)",
    "kank s": "Kankuro (S)",
    "temari s": "Temari (S)",
    "nii": "Nii Yugito (S)",
    "utakata": "Utakata (S)",
    "4 tails": "Four Tail Kyuubi Naruto (S)",
    "Hachibi": "Hachibi Bee (S)",
    "kitsuchi s": "Kitsuchi (S)",
    "kurotsuchi s": "Kurotsuchi (S)",
    "shee s": "Shee (S)",
    "dodai": "Dodai (S)",
    "jiraiya s": "Sennin Jiraiya (S)",
    "suigetsu": "Hozuki Suigetsu (S)",
    "karin": "Karin (S)",
    "csj": "Cursed Seal Juugo (S)",
    "mangekyou sasuke": "Mangekyou Sasuke (S)",
    "kabuto s": "Yakushi Kabuto (S)",
    "oro S": "Orochimaru (S)",
    "frogs": "Fukasaku and Shima (S)",
    "deidara": "Deidara (S)",
    "sasori": "Sasori (S)",
    "kakuzu": "Kakuzu (S)",
    "konan": "Konan (S)",
    "naraka path pein": "Naraka Path Pein (S)",
    "human path pein": "Human Path Pein (S)",
    "white zetsu": "White Zetsu (S)",
    "tobi": "Tobi (S)",
    "et chiyo": "Edo Tensei Chiyo (S)",
    "et kinkaku": "Edo Tensei Kinkaku (S)",
    "et nagato": "Edo Tensei Nagato (S)",
    "et deidata": "Edo Tensei Deidara (S)",
    "et sasori": "Edo Tensei Sasori (S)",
    "fukai": "Edo Tensei Fukai (S)",
    "toroi": "Edo Tensei Toroi (S)",
    "kisame s": "Hoshigaki Kisame (S)",
    "preta path pein": "Preta Path Pein (S)",
    "et zabuza": "Edo Tensei Zabuza (S)",
    "et hizashi": "Edo Tensei Hizashi (S)",
    "hizashi": "Edo Tensei Hizashi (S)",
    "et ginkaku": "Edo Tensei Ginkaku (S)",
    "tsunade s": "Tsunade (S)",
    "hiruko": "Hiruko Sasori (S)",
    "puppet sasori": "Puppet Sasori (S)",
    "hidan": "Hidan (S)",
    "itachi s": "Uchiha Itachi (S)",
    "susanoo itachi": "Susanoo Itachi (S)",
    "animal path pein": "Animal Path Pein (S)",
    "Female Animal Path Pein": "Female Animal Path Pein (S)",
    "Asura Path Pein": "Asura Path Pein (S)",
    "Deva Path Pein": "Deva Path Pein (S)",
    "Konan of the Rain": "Konan of the Rain (S)",
    "Nagato": "Nagato (S)",
    "Black Zetsu": "Black Zetsu (S)",
    "Edo Tensei Jinin": "Edo Tensei Jinin (S)",
    "Edo Tensei Ameyuri": "Edo Tensei Ameyuri (S)",
    "Edo Tensei Kuriarare": "Edo Tensei Kuriarare (S)",
    "Edo Tensei Jinpachi": "Edo Tensei Jinpachi (S)",
    "Edo Tensei Fuguki": "Edo Tensei Fuguki (S)",
    "Edo Tensei Haku": "Edo Tensei Haku (S)",
    "Darui": "Darui (S)",
    "Juugo": "Juugo (S)",
    "Ohnoki": "Ohnoki (S)",
    "Killer Bee": "Killer Bee (S)",
    "sasuke s": "Uchiha Sasuke (S)",
    "Cursed Seal Sasuke S": "Cursed Seal Sasuke (S)",
    "Akatsuki Sasuke s": "Akatsuki Sasuke (S)",
    "shika": "Shikamaru",
    "IBD": "Itachi Body Double",
    "KBD": "Kisame Body Double",
    "shika S": "Shikamaru (S)",
    "kimi": "Kimimaro",
    "hachibee": "hachibi",
    "i&k": "Izumo & Koketsu",
    "fpp": "Female Path Pein",
    "hpp": "Human Path Pein",
    "MS": "Mangekyou Sasuke",
    "Human": "Human Path Pein",
    "Female": "Female Path Pein"
};

const compoundNames = [
    'Human Path Pein',
    'Human Path Pain',
    'Female Path Pein',
    'Female Path Pain'
];

function correctName(name) {
    // First check if this part contains any compound names
    for (const compound of compoundNames) {
        if (name.toLowerCase().includes(compound.toLowerCase())) {
            return name; // Keep the original casing if it contains a compound name
        }
    }

    // If no compound name is found, proceed with normal correction
    const lowerName = name.toLowerCase();
    for (let key in nameCorrections) {
        if (lowerName === key.toLowerCase()) {
            return nameCorrections[key];
        }
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
}

let showLineNumbers = true;
let hideErrorLogging = false;

function toggleLineNumbers() {
    showLineNumbers = !showLineNumbers;
    const button = document.querySelector('.output-section .material-button');
    button.textContent = showLineNumbers ? 'Remove Listing Numbers' : 'Add Listing Numbers';
    
    const correctedTextDiv = document.getElementById('correctedText');
    const textContent = correctedTextDiv.innerHTML;
    
    // Extract the corrected lines and warnings
    const [correctedSection, warningsSection] = textContent.split('<h3>Main Character Warnings:</h3>');
    const lines = correctedSection.replace('<h3>Corrected Text:</h3>', '').trim().split('\n');
    
    // Toggle numbers and rebuild the content
    const formattedLines = lines.map((line, index) => {
        const lineContent = line.replace(/^\d+\.\s*/, '');
        return showLineNumbers ? `${index + 1}. ${lineContent}` : lineContent;
    }).join('\n');
    
    correctedTextDiv.innerHTML = '<h3>Corrected Text:</h3>\n' + formattedLines + 
        (warningsSection ? '<h3>Main Character Warnings:</h3>' + warningsSection : '');
}

function toggleErrors() {
    hideErrorLogging = document.getElementById('hideErrors').checked;
    const resultsDiv = document.getElementById('results');
    resultsDiv.style.display = hideErrorLogging ? 'none' : 'block';
}

function checkFormat() {
    const inputText = document.getElementById('inputText').value;
    const lines = inputText.split('\n');
    let issues = [];
    let correctedLines = [];
    let mainCharacterWarnings = [];

    lines.forEach((line, index) => {
        if (line.trim() === '') return;

        let correctedLine = line.split(/([+/,&])/).map(part => {
            const trimmedPart = part.trim();
            if (trimmedPart.match(/^[+/,&]$/)) {
                return part;
            }
            // Check the entire part for compound names before splitting
            if (compoundNames.some(compound => 
                trimmedPart.toLowerCase().includes(compound.toLowerCase()))) {
                return trimmedPart;
            }
            return part.split(' ').map(word => {
                if (word === '(S)' || !word.trim()) return word;
                return correctName(word);
            }).join(' ');
        }).join('');

        const incorrectSMatches = correctedLine.match(/\w+\s*S(?!\()/g);
        if (incorrectSMatches) {
            incorrectSMatches.forEach(match => {
                issues.push(`Line ${index + 1}: "${match}" should be formatted as "${match.replace(/\s*S$/, ' (S)')}"`);
            });
        }

        if (correctedLine.match(/\S\/|\S\+|\+\S|\/\S|\S&|&\S|\S,|,\S/)) {
            issues.push(`Line ${index + 1}: "${line}" has incorrect spacing around "/", "+", "&", or ","`);
        }

        correctedLine = correctedLine
            .replace(/(\w+)\s*S\b/g, '$1 (S)')
            .trim();

        if (correctedLine.match(/\w+\s+S\b/) || correctedLine.match(/\w+S\b/)) {
            issues.push(`Line ${index + 1}: "${line}" contains "Character S" format. Should be "Character (S)"`);
        }

        const mainCharacterMatch = correctedLine.match(/^([^+]+)/);
        if (mainCharacterMatch) {
            const mainChar = mainCharacterMatch[1].trim();
            const mainCharBase = mainChar.replace(/\s*\(S\)\s*$/, '');
            const lowerMainChar = mainCharBase.toLowerCase();
            
            for (let i = 0; i < correctedLines.length; i++) {
                const prevMainChar = correctedLines[i].split('+')[0].trim();
                const prevMainCharBase = prevMainChar.replace(/\s*\(S\)\s*$/, '');
                if (prevMainCharBase.toLowerCase() === lowerMainChar) {
                    mainCharacterWarnings.push(`Warning: "${mainCharBase}" appears as main character in both line ${i + 1} (as "${prevMainChar}") and line ${index + 1} (as "${mainChar}")`);
                }
            }
        }

        correctedLine = correctedLine
            .replace(/\s*\/\s*/g, ' / ')
            .replace(/\s*\+\s*/g, ' + ')
            .replace(/\s*&\s*/g, ' & ')
            .replace(/\s*,\s*/g, ' , ')
            .replace(/\s+/g, ' ')
            .trim();

        const parts = correctedLine.split(/([+/,&])/);
        const seenNames = new Map();
        const filteredParts = parts.filter((part, idx) => {
            if (part.match(/^[+/,&]$/)) return true;
            
            const trimmedPart = part.trim();
            if (!trimmedPart) return true;

            const nameWithoutS = trimmedPart.replace(/\s*\(S\)\s*$/, '').toLowerCase();
            const hasS = trimmedPart.endsWith('(S)');
            
            if (!nameWithoutS) return true;
            
            if (seenNames.has(nameWithoutS)) {
                const previousHasS = seenNames.get(nameWithoutS);
                if (previousHasS === hasS) {
                    issues.push(`Line ${index + 1}: Removed duplicate "${trimmedPart}"`);
                    return false;
                }
                return true;
            }
            
            seenNames.set(nameWithoutS, hasS);
            return true;
        });
        correctedLine = filteredParts.join('');

        correctedLines.push(correctedLine);
    });

    const resultsDiv = document.getElementById('results');
    const correctedTextDiv = document.getElementById('correctedText');

    if (issues.length > 0) {
        resultsDiv.innerHTML = '<h3>Issues Found:</h3>' + 
            issues.map(issue => `<p>${issue}</p>`).join('');
        resultsDiv.style.display = hideErrorLogging ? 'none' : 'block';
    } else {
        resultsDiv.innerHTML = '<p>No formatting issues found!</p>';
        resultsDiv.style.display = hideErrorLogging ? 'none' : 'block';
    }

    correctedTextDiv.innerHTML = '<h3>Corrected Text:</h3>' + 
        correctedLines.map((line, index) => showLineNumbers ? `${index + 1}. ${line}` : line).join('\n') + 
        (mainCharacterWarnings.length > 0 ? 
            '\n\n<h3>Main Character Warnings:</h3>' + 
            mainCharacterWarnings.map(warning => `<p style="color: red;">${warning}</p>`).join('\n')
            : '');
}