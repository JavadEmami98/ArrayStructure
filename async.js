function getById(id) {
    return new Promise((resolve) => {
        setTimeout(()=> {
            console.log(`Got ${id}`);
            resolve(id);
        }, 1000);
    })
}

(async function (){
    const ids = [100,200,300];
   // for (const id of ids) {
   //     await getById(id);
   // }
   ids.forEach(async (id)=> {
    await getById(id);
   });
})();