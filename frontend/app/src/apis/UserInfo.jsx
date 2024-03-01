import axios from 'axios';

const getCurrentUser = async () => {
  // ローカルストレージから認証情報を取得
  const accessToken = localStorage.getItem('access-token');
  const client = localStorage.getItem('client');
  const uid = localStorage.getItem('uid');

  // ローカルストレージに認証情報が存在しない場合は処理を終了
  if (!accessToken || !client || !uid) {
    console.log('One or more required items are missing from local storage.');
    return;
  }

  try {
    const response = await axios.get(
      'http://localhost:3001/api/v1/auth/sessions',
      {
        headers: {
          'Content-Type': 'application/json',
          'access-token': accessToken,
          client: client,
          uid: uid,
        },
      }
    );
    console.log(response);
    return response.data; // 必要に応じて処理を追加
  } catch (error) {
    console.error('Error fetching current user:', error);
    throw error; // または適切なエラー処理を行う
  }
};

export default getCurrentUser;
