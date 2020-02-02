let setArray = [];

const root = document.getElementById('root');
const mainPage = document.querySelector('.main-page')
const addPage = document.querySelector('.add-set-page');
const modifyPage = document.querySelector('.modify-set-page');
const setList = document.querySelector('.set-list');
const termList = document.querySelector('.term-list');
const editList = document.querySelector('.term-list-edit');
const addNewSetButton = document.querySelector('.add-set-button');
const addNewTermButton = document.querySelector('.add-term-button');
const saveButton = document.querySelector('.save-button');
const cancelButton = document.querySelector('.cancel-button');
const saveEditButton = document.querySelector('.save-edit-button');
const cancelEditButton = document.querySelector('.cancel-edit-button');

const setNameInput = document.querySelector('.set-name-input');
const setEditNameInput = document.querySelector('.set-edit-input');

const FIRST_ELEMENT = 0;

class TermSet {
    constructor(name) {
        this.name = name;
        this.studied = false;
        this.terms = [];
    }
    addTerm(term) {
        this.terms.push(term);
    }
    static createSetNode(set) {
        let listItem = document.createElement('li');
        let studiedCheck = document.createElement('input');
        let setNameParagraph = document.createElement('p');
        let editSet = document.createElement('button');
        let removeSet = document.createElement('button');

        listItem.classList.add('set-item');
        studiedCheck.setAttribute('type', 'checkbox');
        studiedCheck.classList.add('studied');
        studiedCheck.checked = set.studied;
        setNameParagraph.classList.add('set-name');
        editSet.classList.add('edit-set');
        editSet.textContent = 'Edit';
        removeSet.classList.add('remove-set');
        removeSet.textContent = 'Remove';

        setNameParagraph.textContent = set.name;

        studiedCheck.addEventListener('change', function(event) {
            let setIndex = setArray.indexOf(set);

            if (event.target.checked) {
                set.studied = true;
                let cutSet = setArray.splice(setIndex, 1);
                setArray.push(cutSet[FIRST_ELEMENT]);
            } else {
                set.studied = false

                let studiedSets = setArray.filter( setItem => setItem.studied );
                let unstudiedSets = setArray.filter( setItem => !setItem.studied )

                setArray = unstudiedSets.concat(studiedSets);
            }
            saveToLocalStorage(setArray);
            fillSetList();
            event.stopPropagation();
        });

        removeSet.addEventListener('click', function() {
            listItem.remove();
            setArray.pop();
            saveToLocalStorage(setArray);
        });

        editSet.addEventListener('click', function() {
            openModifyPage();
            setEditNameInput.value = set.name;
            fillEditList(set);
        });

        listItem.append(studiedCheck);
        listItem.append(setNameParagraph);
        listItem.append(editSet);
        listItem.append(removeSet);

        return listItem;
    }
    
}

class Term {
    constructor(name, definition) {
        this.name = name;
        this.definition = definition;
    }
    static createTermNode() {
        let listItem = document.createElement('li');
        let nameInput = document.createElement('input');
        let definitionInput = document.createElement('input');
        let removeTerm = document.createElement('button');

        listItem.classList.add('term-item');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('placeholder', 'Term');
        nameInput.classList.add('term-name-input');
        definitionInput.setAttribute('type', 'text');
        definitionInput.setAttribute('placeholder', 'Definition');
        definitionInput.classList.add('definition-input');
        removeTerm.classList.add('remove-term');
        removeTerm.textContent = 'Remove';

        removeTerm.addEventListener('click', function() {
            listItem.remove();
        });

        listItem.append(nameInput);
        listItem.append(definitionInput);
        listItem.append(removeTerm);

        return listItem;
    }
    static createModifyTermNode(term) {
        let listItem = document.createElement('li');
        let nameInput = document.createElement('input');
        let definitionInput = document.createElement('input');

        listItem.classList.add('term-item');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('placeholder', 'Term');
        nameInput.classList.add('term-name-input');
        definitionInput.setAttribute('type', 'text');
        definitionInput.setAttribute('placeholder', 'Definition');
        definitionInput.classList.add('definition-input');

        nameInput.value = term.name;
        definitionInput.value = term.definition;

        listItem.append(nameInput);
        listItem.append(definitionInput);

        return listItem;
    } 
}

function getSets() {
    if (this.localStorage.getItem('termSet')) {
        setArray = JSON.parse(localStorage.getItem('termSet'));
    }
}

function saveToLocalStorage(item) {
    let itemString = JSON.stringify(item);
    localStorage.setItem('termSet', itemString);
}

function openAddPage() {
    window.location.hash = '/add';
    hidePages(addPage);
}

function openModifyPage() {
    window.location.hash = '/modify';
    hidePages(modifyPage);

}

function openMainPage() {
    window.location.hash = '';
    fillSetList();
    hidePages(mainPage);
}

function hidePages (node) {
    let exception = node.getAttribute('class');
    
    node.style.display = 'block';

    for (let child of root.children) {
        if (!child.classList.contains(exception)) {
            child.style.display = 'none';
        }
    }
}

function fillSetList() {
    setList.innerHTML = '';

    for (let set of setArray) {
        let setNode = TermSet.createSetNode(set);

        setList.append(setNode);
    }
}

function fillEditList(set) {
    editList.innerHTML = '';

    for (let term of set.terms) {
        let termItem = Term.createModifyTermNode(term);

        editList.append(termItem);
    }

    saveEditButton.addEventListener('click', function() {
        if (setEditNameInput.value) {
            let termName = document.querySelector('.term-name-input');
            let termDefinition = document.querySelector('.definition-input');

            set.name = setEditNameInput.value;

            for (let term of set.terms) {
                term.name = termName.value;
                term.definition = termDefinition.value;
            }      
            
            saveToLocalStorage(setArray);
            openMainPage();
            editList.innerHTML = '';
            setEditNameInput.value = '';
        } else {
            alert('Please, enter name first');
        }
    })
}

window.addEventListener('load', function() {
    window.location.hash = '';
    hidePages(mainPage);
    getSets();
    fillSetList();
});

addNewSetButton.addEventListener('click', function() {
    openAddPage();
});

cancelButton.addEventListener('click', function() {
    termList.innerHTML = '';
    setNameInput.value = '';
    openMainPage();
})

addNewTermButton.addEventListener('click', function() {
    let termNode = Term.createTermNode();
    termList.append(termNode);
});

saveButton.addEventListener('click', function() {
    if (setNameInput.value) {
        let newSet = new TermSet(setNameInput.value);
        
        for (let currentTerm of termList.children) {
            let termName = currentTerm.children[FIRST_ELEMENT].value;
            let termDefinition = currentTerm.children[1].value;

            let newTerm = new Term(termName, termDefinition);

            newSet.addTerm(newTerm);
        }

        setArray.push(newSet);
        saveToLocalStorage(setArray);

        openMainPage();
        termList.innerHTML = '';
        setNameInput.value = '';
    } else {
        alert('Please, enter name first');
    }
})

cancelEditButton.addEventListener('click', function() {
    editList.innerHTML = '';
    setEditNameInput.value = '';
    openMainPage();
});