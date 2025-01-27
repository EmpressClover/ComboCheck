const nameCorrections = {
    'shika': 'Shikamaru',
    'IBD': 'Itachi Body Double',
    'KBD': 'Kisame Body Double',
    'shika S': 'Shikamaru (S)',
    'kimi': 'Kimimaro ',
    'db': 'Demon Brothers',
    'frogs': 'Fukasaku and Shima (S)',
    '4 tails': 'Four Tail Kyuubi Naruto (S)',
    'css': 'Cursed Seal Sasuke',
    'csj': 'Cursed Seal Juugo (S)',
    'oro': 'Orochimaru',
    'yk': 'Young Kakashi',
    'kank s': 'Kankuro (S)',
    'hachibee': 'hachibi',
    'i&k': 'Izumo & Koketsu',
    'fpp': 'Female Path Pein',
    'hpp': 'Human Path Pein',
    'oro S': 'Orochimaru (S)',
    'MS': 'Mangekyou Sasuke',
    'Human': 'Human Path Pein',
    'Female': 'Female Path Pein',
    'Hayate': 'Gekko Hayate',
    'Gekko': 'Gekko Hayate',
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