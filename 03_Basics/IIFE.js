// Immediataly Invoked Function Expression.


(() => {
    console.log(`DB Connected`);
    
})();


((name) => {
    console.log(`${name} DB Connected again`);
    
})('Avi')
