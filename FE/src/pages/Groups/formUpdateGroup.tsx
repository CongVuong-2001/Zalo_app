import React, { useState, useEffect } from "react"
import { Page, Button, Text, Select, Input, useNavigate, useSnackbar, Modal } from 'zmp-ui'
import Country from '../../service/selectCountry'
import { useParams } from "react-router-dom"
import { deleteGroupById, getGroupById, putGroup } from "../../service/api"
import axios from "axios";

const updateGroupPage = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const snackbar = useSnackbar()
  const [modalVisible, setModalVisible] = useState(false);
  const { Option } = Select
  const [data, setData] = useState({
    name: '', email: '', mst: '', phone: '', acreage: '', productID: '', productName: ''
    , level: '', address: '', username: '', amount: '', group: '',type:''
  })

  useEffect(() => {
    axios.get('http://localhost:8080/groups/' + id)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8080/groups/' + id, data)
      .then(res => {
        snackbar.openSnackbar({ duration: 3000, text: "Cập nhật thành công", type: "success" })
        navigate('/formGroup')
      })
      .catch(err => console.log('err'))
  }
  const handleDelete = (e) => {
    axios.delete('http://localhost:8080/groups/' + id)
      .then(res => {
        snackbar.openSnackbar({ duration: 3000, text: "Xóa thành công", type: 'success' })
        navigate('/formGroup')
      })
      .catch(err => console.log(err))
  }

  return (

    <Page>
      <div className='group-header'>
        <button className='btn-user' onClick={() => navigate('/formUser')}>Xem Thành Viên</button>
        <Button className='txt-acreage' >Diện tích: {data.acreage}</Button>
      </div>
      <form onSubmit={handleSubmit} method='POST' action="">

        <div className="form form-info">
          <h3> 1.Thông tin</h3>
          <Text>Tên tổ chức</Text>
          <Input required onChange={(e) => setData({ ...data, name: e.target.value })} value={data.name} name='name' type="text" ></Input>
          <Text>Loại hình</Text>
          <select name='type' value={data.type} onChange={(e) => setData({ ...data, type: e.target.value })}>
            <option value='HTX' >HTX</option>
            <option value='Chế biến'>Chế biến</option>
            <option value='Khác' >Khác</option>
          </select>
          <Text>MST</Text>
          <Input onChange={(e) => setData({ ...data, mst: e.target.value })} value={data.mst} name='mst' ></Input>

          <Text>Địa chỉ</Text>
          <Input onChange={(e) => setData({ ...data, address: e.target.value })} value={data.address} name='address' />

          <Country required></Country>


        </div>


        <div className="form form-contact">
          <h3> 2.Liên Hệ</h3>
          <h6>Thông tin liên hệ </h6>


          <Text>Chức vụ</Text>
          <Input name='level' value={data.level} onChange={(e) => setData({ ...data, level: e.target.value })} />
          <Text> Họ tên</Text>
          <Input name='username' value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} type='text' />
          <Text >Điện thoại</Text>
          <Input name='phone' value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} type='number' />
          <Text >Email</Text>
          <Input name='email' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} type='email' />


          <h6>Sản Phẩm</h6>

          <Text>Mã sản phẩm</Text>
          <Input name='productID' value={data.productID} onChange={(e) => setData({ ...data, productID: e.target.value })} type='text' />
          <Text>Tên sản phẩm</Text>
          <Input name='productName' value={data.productName} onChange={(e) => setData({ ...data, productName: e.target.value })} type='text' />
          <Text >Nhóm sản phẩm</Text>
          <select name='group' value={data.group} onChange={(e) => setData({ ...data, group: e.target.value })}>
            <option value='Trái Cây'>Trái Cây</option>
            <option value='Thực Phẩm Tươi' >Thực Phẩm Tươi</option>
            <option value='Thực Phẩm Đông Lạnh' >Thực Phẩm Đông Lạnh</option>
          </select>
          <Text  >Sản lượng(tấn)</Text>
          <Input name='amount' value={data.amount} onChange={(e) => setData({ ...data, amount: e.target.value })} type='text' />
          <Text >Diện tích(ha)</Text>
          <Input name='acreage' value={data.acreage} onChange={(e) => setData({ ...data, acreage: e.target.value })} type='text' />
        </div>

        <button type='submit' className="btn-submit" >Cập nhật</button>
        <Button type="danger" onClick={() => {
          setModalVisible(true);
        }} className="btn-delete" >Xóa</Button>

      </form>
      <Modal
        visible={modalVisible}
        title='Bạn có chắc chắn muốn xóa?'
        onClose={() => {
          setModalVisible(false);
        }}
        actions={[
          {
            onClick: (handleDelete)
            ,
            text: 'Xóa'
          },
          {

            text: 'Hủy',
            close: true,
            highLight: true
          }
        ]}
        description='Dữ liệu về thành viên này sẽ bị mất vĩnh viễn'
      />
    </Page>
)
}
export default updateGroupPage