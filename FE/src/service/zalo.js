import { setStorage ,login ,getPhoneNumber} from "zmp-sdk/apis";
import {useNavigate} from 'zmp-ui'


import { chooseImage } from "zmp-sdk/apis";

export const handleChooseImage = () => {
  chooseImage({
    count: 1 ,
    sourceType: [ "camera"],
    cameraType: "back",
    success: ({  tempFiles }) => {
      console.log(tempFiles);
      
    
      // xử lý khi gọi api thành công
    },
    fail: (error) => {
      // xử lý khi gọi api thất bại
      console.log(error);
    },
  });
};

const setDataToStorage = () => {
  setStorage({
    data: {
      key1: "string",
      key2: {
        boolean: true,
      },
      key3: 1,
    },
    success: (data) => {
      // xử lý khi gọi api thành công
      const { errorKeys } = data;
    },
    fail: (error) => {
      // xử lý khi gọi api thất bại
      console.log(error);
    },
  });
};

export const handleLogin = () => {
  login({
    success: () => {
      // login thành công
      console.log("lay Phone thanh cong")
    },
    fail: (error) => {
      // login thất bại
      console.log(error);
    },
  });
};

const getPhoneNumberByToken = async (token) => {
  // gọi API Server của bạn để truy xuất thông tin từ token và user access token
};

export const getUserPhoneNumber = () => {
  getPhoneNumber({
    success: async (data) => {
      // xử lý khi gọi api thành công
      let { token, number } = data;
      // xử lý cho trường hợp sử dụng phiên bản Zalo mới (phiên bản lớn hơn 23.02.01)
      if (token) {
        number = await getPhoneNumberByToken(token);
      }
    },
    fail: (error) => {
      // xử lý khi gọi api thất bại
      console.log(error);
    }
  });
};


import {openChat} from 'zmp-sdk/apis';

export const openChatScreen =()=> {
openChat({
  type: 'user',
  id: 'user-id',
  message: 'Xin Chào',
  success: () => {console.log("open Chat success")} ,
  fail: (err) => {}
});
}