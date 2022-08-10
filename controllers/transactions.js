const createTransaction = (req,res)=>{
    res.send('transaction will be created')
}

const getTransactions = (req,res)=>{
    res.send('all transaction will be there')
}

const getTransaction = (req,res)=>{
    res.send(`a transaction will be there with an id of ${req.params.id}`)
}
const updateTransaction = (req,res)=>{
    res.send(`a transaction will be updated with an id of ${req.params.id}`)
}
const deleteTransaction = (req,res)=>{
    res.send(` a transaction will be deleted with an id of ${req.params.id}`)
}

export {
    createTransaction,
    getTransaction,
    getTransactions,
    updateTransaction,
    deleteTransaction
}