import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';

const Chat = () => {
  // 初始化状态变量
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  // 处理用户发送消息
  const handleSendMessage = async (event) => {
    event.preventDefault();

    // 设置请求头参数
    const headers = {
      Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJhdXRoX3R5cGUiOiIwIiwidXNlcl9pZCI6MTIxMjIsInVzZXJfa2V5IjoiODQxNWQzZWQ5MzE5NGFiNDkxY2Y5MjQyMzU2ZjM2NmEiLCJ1c2VybmFtZSI6Ilp6cmUifQ.pMNOqueFVN3VVpl70eD1MDtygYANwTaDlMG74pP5FkQ4LzQYb8Z68aRuSkvpP_65lpocvLblj9HChbTBvW3XPw',
      'Content-Type': 'application/json; charset=utf-8',
    };

    // 设置请求体参数
    const data = {
      appUserId: '123',
      content: message,
      roleId: 1741,
    };

    // 发送POST请求并获取响应结果
    const response = await axios.post(
      'https://open.ai-topia.com/apis/chat/sendChat',
      data,
      { headers }
    );

    // 将用户的消息添加到聊天记录中
    setChatLog((chatLog) => [...chatLog, { user: 'user', message }]);

    // 等待1秒后，将聊天机器人的回复信息添加到聊天记录中
    setTimeout(() => {
      setChatLog((chatLog) => [
        ...chatLog,
        { user: 'bot', message: response.data.data.content },
      ]);
    }, 1000);

    // 清空输入框
    setMessage('');
  };

  // 处理用户输入的消息内容
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <Box py={8}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          和虚拟女友聊天
        </Typography>

        <Grid container spacing={2} direction="column" alignItems="stretch">
          {chatLog.map((entry, index) => (
            <Grid item key={index} xs={12}>
              <Box
                py={1}
                px={2}
                borderRadius={4}
                bgcolor={entry.user === 'user' ? '#f5f5f5' : '#e3f2fd'}
                alignSelf={entry.user === 'user' ? 'flex-end' : 'flex-start'}
              >
                <Typography variant="body1">{entry.message}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <form onSubmit={handleSendMessage}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={10}>
              <TextField
                fullWidth
                variant="outlined"
                value={message}
                onChange={handleInputChange}
                label="输入你要发送的消息"
              />
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" color="primary" type="submit">
                发送消息
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default Chat;
