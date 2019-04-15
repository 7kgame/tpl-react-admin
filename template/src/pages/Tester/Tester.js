import React from 'react';
import { Button } from 'antd';
import { connect } from 'dva'
// eslint-disable-next-line react/prefer-stateless-function
@connect(({num}) => {
        num: num
})
class Tester extends React.Component{
        onClick = () =>{
                const { dispatch } = this.props;
                dispatch({
                        type: 'add'
                })
        }
 
        render(){
                return(
                  <Button type='primary' onClick={this.onClick}>{this.props.num}</Button>
                )
        }
}

export default Tester;