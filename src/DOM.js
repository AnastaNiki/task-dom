/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        let elem = document.createElement(tag);
        elem.innerHTML = content;
        document.body.insertAdjacentElement('afterbegin', elem);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    function createTree(root, curLevel) {
        for (let i = 1; i < childrenCount + 1; i++) {
            let newDiv = document.createElement('div');
            root.insertAdjacentElement('beforeend', newDiv);
            newDiv.classList.add('item_' + curLevel);
            if (level > curLevel) createTree(newDiv, curLevel + 1);
        }
    }

    let root = document.createElement('div');
    root.classList.add('item_1');
    createTree(root, 2);

    return root;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let tree = generateTree(2, 3);
    const items = tree.querySelectorAll('.item_2');
    for (const element of items) {
        let section = document.createElement('SECTION');
        section.innerHTML = element.innerHTML;
        section.setAttribute('class', 'item_2');
        element.outerHTML = section.outerHTML;
    }
    return tree;
}
