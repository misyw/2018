import React, {Component} from 'react'
import { Layout, Menu,Tabs,} from 'antd';
import { routeConfig } from '../../utils/config.js';
const { Header, Content, Sider } = Layout;
const TabPane = Tabs.TabPane;

class Home extends  Component{
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
          { title: 'workplace', content: routeConfig['workplace'], key: 'workplace' , closable: false},
        ];
        this.state = {
          activeKey: 'workplace',
          menuKey:'workplace',
          panes,
        };
      }
    
      selectMenu = (items)=>{
        const  { item,key,keyPath } = items;
        console.log(item,key,keyPath )
        
        const panes = this.state.panes;
        const activeKey = key;
        let toggle = true;
        panes.forEach((item)=>{//如果点击菜单的时候有重复的菜单。则跳回tab选项
           if(item.key===key) {
            this.setState({ activeKey ,menuKey:activeKey});
            toggle =false
           }
        })
        if(toggle){
            panes.push({ title: item.props.children, content: routeConfig[key], key: key });
            this.setState({ panes, activeKey ,menuKey:activeKey});
        }
        
      }
      
      onChange = (activeKey) => {
        this.setState({ activeKey ,menuKey:activeKey});
        console.log(activeKey)
      }
      onEdit = (targetKey, action) => {
        this[action](targetKey);
      }
      remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
          activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey ,menuKey:activeKey });
      }
    render(){
        return(
            <Layout>
            <Header className="header">
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
              >

                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Layout>
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={[this.state.menuKey]}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                  onClick={this.selectMenu}
                  selectedKeys={[this.state.menuKey]}
                >
                  
                    <Menu.Item key="workplace">workplace</Menu.Item>
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                    <div>
                    <Tabs
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {this.state.panes.map(pane => 
                            <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                                    {pane.content}
                                </Content>
                            </TabPane>
                        )}
                    </Tabs>
                    </div>
              </Layout>
            </Layout>
          </Layout>
        )
    }
}

export default Home;