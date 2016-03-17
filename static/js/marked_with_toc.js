function markedWithToc(content) {
    var catalogOl = document.createElement("ol");
    catalogOl.style.position = "fixed";
    catalogOl.style.left = "0px";
    catalogOl.style.top = "0px";
    catalogOl.style.lineHeight = "30px";
    catalogOl.style.fontSize = "24px";
    document.body.appendChild(catalogOl);
    var contentDiv = document.createElement("div");
    contentDiv.style.marginLeft = "120px";
    contentDiv.innerHTML = marked(content);
    document.body.appendChild(contentDiv);
    
    var item = contentDiv.firstElementChild;
    var h1Count = 0;
    var h2Count = 0;
    var secondCatalogOl;
    while(true) {
        item = item.nextElementSibling;
        if (!item) break;
        
        if (item.tagName == 'H1') {
            h1Count++;
            h2Count = 0;
            var id = h1Count;
            
            var catalogA = document.createElement("a");
            catalogA.textContent = item.textContent;
            catalogA.href = '#' + id;
            secondCatalogOl = document.createElement("ol");
            var catalogLi = document.createElement("li");
            catalogLi.style.marginBottom = "16px";
            catalogLi.appendChild(catalogA);
            catalogLi.appendChild(secondCatalogOl);
            catalogOl.appendChild(catalogLi);
            
            item.innerHTML = '<a name = "' + id + '"></a>' + id + '. ' + item.textContent;
        }
        else if (item.tagName == 'H2') {
            if (!secondCatalogOl) continue;
            
            h2Count++;
            var id = h1Count + '.' + h2Count;
            
            var catalogA = document.createElement("a");
            catalogA.textContent = item.textContent;
            catalogA.href = '#' + id;
            var catalogLi = document.createElement("li");
            catalogLi.appendChild(catalogA);
            secondCatalogOl.appendChild(catalogLi);
            
            item.innerHTML = '<a name = "' + id + '"></a>' + id + ' ' + item.textContent;
        }
    };
};