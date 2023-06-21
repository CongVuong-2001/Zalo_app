import React, { useState, useEffect } from 'react'
import { Page, Button, useNavigate, Text, Input, useSnackbar, Select } from 'zmp-ui'
import axios from "axios"
import Country from '../../service/selectCountry'
import { postGroup } from '../../service/api'

const FormCreateGroupPage: React.FunctionComponent = (props) => {

  const navigate = useNavigate()
  const snackbar = useSnackbar()
  const { Option } = Select

  const [data, setData] = useState({
    name: '', type: '', mst: '', address: '', level: '', email: '',
    phone: '', username: '', productID: '', productName: '', acreage: '', amount: '', group: '' ,region:''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/groups', data)
      .then(res => {
        navigate('/formGroup')
      })
      .catch(err => console.log(err))
  }
  const handleChangeGroup = (e) => {
    setData({ ...data, group: e.target.value })

  }

  const [fruit, setFruit] = useState();
  return (
    <>
    
      <Page>
        <form onSubmit={handleSubmit} method='POST' action="">
          <div className="form form-info">
            <h3> 1.Thông tin</h3>
            <Text>Tên tổ chức</Text>
            <Input onChange={(e) => setData({ ...data, name: e.target.value })} name='name' ></Input>

            <Text>Loại hình</Text>
            <select name='type' value={data.type} onChange={(e) => setData({ ...data, type: e.target.value })}>
              <option value='HTX'  >HTX</option>
              <option value='Chế biến'>Chế Biến</option>
              <option value='Khác' >Khác</option>
            </select>
            <Text>MST</Text>
            <Input onChange={(e) => setData({ ...data, mst: e.target.value })} name='mst' ></Input>

            <Text>Địa chỉ</Text>
            <Input onChange={(e) => setData({ ...data, address: e.target.value })} name='address' />

            <Country /* required */></Country>


          </div>


          <div className="form form-contact">
            <h3> 2.Liên Hệ</h3>
            <h6>Thông tin liên hệ </h6>


            <Text>Chức vụ</Text>
            <Input name='level' onChange={(e) => setData({ ...data, level: e.target.value })} />
            <Text> Họ tên</Text>
            <Input name='username' onChange={(e) => setData({ ...data, username: e.target.value })} type='text' />
            <Text >Điện thoại</Text>
            <Input name='phone' onChange={(e) => setData({ ...data, phone: e.target.value })} type='number' />
            <Text >Email</Text>
            <Input name='email' onChange={(e) => setData({ ...data, email: e.target.value })} type='email' />


            <h6>Sản Phẩm</h6>

            <Text>Mã sản phẩm</Text>
            <Input name='productID' onChange={(e) => setData({ ...data, productID: e.target.value })} type='text' />
            <Text>Tên sản phẩm</Text>
            <Input name='productName' onChange={(e) => setData({ ...data, productName: e.target.value })} type='text' />
            <Text >Nhóm sản phẩm</Text>
            <select name='group'  onChange={(e) => setData({ ...data, group: e.target.value })}>
              <option value='Trái Cây'>Trái Cây</option>
              <option value='Thực Phẩm Tươi' >Thực Phẩm Tươi</option>
              <option value='Thực Phẩm Đông Lạnh' >Thực Phẩm Đông Lạnh</option>
            </select>
            <Text  >Sản lượng(tấn)</Text>
            <Input name='amount' onChange={(e) => setData({ ...data, amount: e.target.value })} type='text' />
            <Text >Diện tích(ha)</Text>
            <Input name='acreage' onChange={(e) => setData({ ...data, acreage: e.target.value })} type='text' />
          </div>

          <div>
          </div>

          <button type='submit' className="btn-submit" >Lưu</button>

        </form>
        <Button
          variant='secondary'
          className="btn-back"
          fullWidth
          onClick={() => navigate(-1)}
        >
          Hủy
        </Button>
      </Page>
    </>
  );
};

export default FormCreateGroupPage
