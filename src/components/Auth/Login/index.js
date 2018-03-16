import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Body, Button, Container, Content, Form, Header, Spinner, Text, Title } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { compose, withState } from 'recompose';

import Password from './Password';
import Username from './Username';
import container from './../container';

@compose(
  container,
  withState('username', 'onChangeName', ''),
  withState('password', 'onChangePass', ''),
  withState('isLoading', 'setLoading', false),
)
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.isDisabled = this.isDisabled.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentWillMount() {
    this.props.logout();
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  isDisabled() {
    return this.props.username.length === 0 || this.props.password.length === 0;
  }

  submit() {
    this.props.setLoading(true);

    this.props.login(this.props.username, this.props.password).then(res => {
      if (res.status !== 200) {
        Alert.alert('登入失敗', '帳號或密碼打錯囉！', [{ text: '再試一次' }]);
      }

      return this._isMounted && this.props.setLoading(false);
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>登入頁面</Title>
          </Body>
        </Header>
        <Grid>
          <Row size={4} />
          <Row size={8}>
            <Content padder>
              {this.props.isLoading ? (
                <Spinner color="blue" />
              ) : (
                <Form>
                  {/* 帳號 */}
                  <Username value={this.props.username} onChangeText={this.props.onChangeName} />

                  {/* 密碼 */}
                  <Password value={this.props.password} onChangeText={this.props.onChangePass} />

                  {/* 登入 */}
                  <Button
                    style={styles.blankLine}
                    disabled={this.isDisabled()}
                    full
                    rounded
                    info={!this.isDisabled()}
                    large
                    onPress={this.submit}
                  >
                    <Text>登入</Text>
                  </Button>
                </Form>
              )}
            </Content>
          </Row>
        </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  blankLine: { marginTop: 50 },
});

export default Login;
