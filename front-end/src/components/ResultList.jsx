import React from 'react'
import { Avatar, List, Space } from 'antd';
const data = Array.from({
    length: 23,
  }).map((_, i) => ({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

class ResultList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input: this.props.input,
        }
    }

    render(){
        console.log(this.props.input)
        return(
            <List itemLayout="vertical" size="large" 
                pagination={{ onChange: (page) => {
                    console.log(page);
                },
                    pageSize: 3,
                }}
                dataSource={data}
                renderItem={(item) => (
                <List.Item
                    key={item.title}
                    extra={
                    <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                    }
                >
                    <List.Item.Meta
                        title={<a href={item.href}>{item.title}</a>}
                        description={this.state.input}
                    />
                    {item.content}
                </List.Item>
                )}
            />
        )
    }
    
}

export default ResultList;