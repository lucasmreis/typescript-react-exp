import * as React from "react"
import * as ReactDOM from "react-dom"

interface Products {
  quantity: number
  amount: number
}

interface Aaa {
  type: 'AAA',
  payload: {
    url: string
  }
}

interface Bbb {
  type: 'BBB',
  payload: {
    name: 'Ggg Bbb'
  }
}

type OneAction = Aaa | Bbb

interface Ccc {
  type: 'CCC',
  payload: {
    amount: number
  }
}

interface Ddd {
  type: 'DDD',
  payload: {
    id: 123
  }
}

type OtherAction = Ccc | Ddd

type Action = OneAction | OtherAction

const update = (action: Action): string => {
  switch (action.type) {
    case 'AAA':
      return action.payload.url
    case 'BBB':
      return action.payload.name
    case 'CCC':
      return action.payload.amount.toString()
    default:
      return 'default'
  }
}

const Summary = ({ quantity, amount }: Products) => (
  <div>
    <p>Produtos:</p>
    <p>{quantity} Itens</p>
    <p>R$ {amount}</p>
  </div>
)

ReactDOM.render(
  <Summary quantity={123} amount={456.78} />,
  document.getElementById('root')
)