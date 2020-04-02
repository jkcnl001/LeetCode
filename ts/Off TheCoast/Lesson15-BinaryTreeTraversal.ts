export class Node<T>{
    data: T;
    lChild: Node<T> | undefined = undefined;
    rChild: Node<T> | undefined = undefined;
    constructor(data: T) {
        this.data = data
    }
}
export default [
    function <T>(rootNode: Node<T>) {
        function traverl(node: Node<T> | undefined) {
            if (node) {
                console.log(node.data)
                traverl(node.lChild)
                traverl(node.rChild)
            }
        }
    },
    /**
     * 前序遍历
     * @param rootNode 
     */
    function <T>(rootNode: Node<T>) {
        const arr = [rootNode]
        arr.push(rootNode)
        while (arr.length !== 0) {
            let node = arr.pop() as Node<T>
            console.log(node.data)
            if (node.rChild) arr.push(node.rChild)
            if (node.lChild) arr.push(node.lChild)
        }
    },
    function <T>(rootNode: Node<T>) {
        const arr: Node<T>[] = []
        function visitAlongLeftBranch(node: Node<T>) {
            while (node) {
                console.log(node.data)
                if (node.rChild) arr.push(node.rChild)
                node = node.lChild as Node<T>
            }
        }
        arr.push(rootNode)
        while (arr.length !== 0) {
            const node = arr.pop() as Node<T>
            visitAlongLeftBranch(node)
        }
    },
    /**
     * 中序
     */
    function <T>(rootNode: Node<T>) {
        const arr: Node<T>[] = []
        function visitAlongLeftBranch(node: Node<T>) {
            while (node) {
                if (node.rChild) arr.push(node.rChild)
                node = node.lChild as Node<T>
            }
        }
        let node = rootNode
        while (true) {
            visitAlongLeftBranch(node)
            if (arr.length === 0) {
                break
            }
            node = arr.pop() as Node<T>
            console.log(node.data)
            node = node.rChild as Node<T>
        }
    },
    /**
     * 层次遍历
     */
    function <T>(rootNode: Node<T>) {
        let list: Node<T>[] = []
        list.push(rootNode)
        while (list.length !== 0) {
            const node = list.shift() as Node<T>
            console.log(node.data)
            if (node.lChild) list.push(node.lChild)
            if (node.rChild) list.push(node.rChild)
        }
    }
]