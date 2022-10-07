const ventas = [
  { total: 1 },
  { total: 2 },
  { total: 3 },
]

const persona = {
  name: 'Pame',
  edad: 1
}

const resultado = ventas.map((venta) => {
  return { doble: venta.total * 2, total: venta.total, tax: venta.total * .15 }
})

console.log(resultado) // [{ total: 1, doble: 2, tax: .15 }, ...]