const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function buildtree (elements, parentNode) {
  let fileList = document.createElement('ul');

  for (let element of elements) {
    let listItem = document.createElement('li');
    let titleParagraph = document.createElement('p');
    let nodeText = document.createTextNode(element.title);
    let materialIcon = document.createElement('i');

    materialIcon.classList.add('material-icons')
    titleParagraph.classList.add('element');
    titleParagraph.appendChild(materialIcon);
    titleParagraph.appendChild(nodeText);
    listItem.appendChild(titleParagraph);
    fileList.appendChild(listItem);
    parentNode.appendChild(fileList);
    
    if (element.folder) {
      listItem.classList.add('folder');
      materialIcon.appendChild(document.createTextNode('folder'));
      materialIcon.classList.add('icon-folder');

      if (element.children) {
        buildtree(element.children, listItem);
      } else {
        let emptyFolderParagraph = document.createElement('p');
        let emptyTextNode = document.createTextNode('Folder is empty');

        emptyFolderParagraph.classList.add('empty-folder');
        emptyFolderParagraph.appendChild(emptyTextNode);
        listItem.appendChild(emptyFolderParagraph);
      }

      titleParagraph.addEventListener('click', function(e) {
        e.target.parentNode.classList.toggle('remove');

        if (!e.target.parentNode.classList.contains('remove')) {
          e.target.children[0].textContent = 'folder';
        } else {
          e.target.children[0].textContent = 'folder_open';
        }
      })
        
    } else {
      materialIcon.appendChild(document.createTextNode('insert_drive_file'));
      materialIcon.classList.add('icon-file');
    }
  }
}

buildtree(structure, rootNode);