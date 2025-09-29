let globalData = " This is global data";

const parentFn = () => {
    let parentData = "This is parent data";
    return () => {
        let childData = "This is child data";
        console.log(childData);
        console.log(parentData);
        console.log(globalData);
    }
}
childFn = parentFn();
childFn();