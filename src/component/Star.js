import React, { Component } from 'react'

export default class Star extends Component {
    render() {
        const arr = []
        const { changeRate = () => { } } = this.props
        for (let i = 0; i < 5; i++) {
            if (i < this.props.count)
                arr.push(<span onClick={() => changeRate(i + 1)} className='star-yellow'>★</span>)
            else
                arr.push(<span onClick={() => changeRate(i + 1)} className='star-white'>☆</span>)
        }
        return (
            <div>
                {arr}
            </div>
        )
    }
}