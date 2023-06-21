import React from "react";
import { Button, Page, Avatar, Text, useNavigate } from "zmp-ui";
import {handleLogin , getUserPhoneNumber,openChatScreen} from "../service/zalo"


const HomePage: React.FunctionComponent = () => {
    
const navigate = useNavigate()
      
      return (
          <>
              <Page className="page-farmgate">
                      <h3 className='text-center' >Welcome</h3>
                      <p>Để đăng ký nhận hỗ trợ chính thức từ nhân viên TechCoop,</p>
                      <p>bạn vui lòng thực hiện các bước sau nhé:</p>
                      <ul>
                          <li className="li-index">
                              <b>Đồng ý</b> theo dõi kênh Zalo TechCoop Affiliate
                          </li>
                          
                          <li className="li-index">
                              <b>Cho phép </b> chia sẽ thông tin(tên, ảnh đại diện , số điện thoại) của bạn với TechCoop
                          </li>
                      </ul>

                      {/* <b>*Lưu ý:</b>
                      <ul>
                          <li>
                              Bạn sẽ được tự động chuyển tiếp đến kênh Zalo để trò chuyện
                          </li>
                          <li>
                              Nội dung hội thoại sẽ được Farmgate lưu trữ nhằm hỗ trợ bạn tốt hơn
                          </li>
                      </ul> */}
                      <Button onClick={() => navigate('/formGroup')} >Truy Cập</Button>
                      <p>Mọi thắc mắc xin vui lòng liên hệ</p>
                      <Button onClick={openChatScreen}>Liên hệ</Button>
                  </Page>
          </>
      )
  }
  export default HomePage

  