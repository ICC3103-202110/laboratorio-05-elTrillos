
function update(input1,input2, model){
    const Tip = ((Number(input1)*Number(input2)/100))
    const Total = (Number(input1)+(Number(input1)*Number(input2)/100))
    return {
        ...model,
        Price: Number(input1),Tipp: Number(input2),Tip: Tip,Total: Total
    }
}

module.exports = {
    update
}