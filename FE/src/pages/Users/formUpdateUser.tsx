import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Country from '../../service/selectCountry'
import { Page, Text, Input, useSnackbar, useNavigate, Button, Modal } from 'zmp-ui'

const updateUserPage = () => {

  const snackbar = useSnackbar()
  const navigate = useNavigate()
  const [modalVisible, setModalVisible] = useState(false)
  const { id } = useParams()
  const [data, setData] = useState({ name: '', cccd: '', acreage: '', email: '', phone: '', address: '', startDate: '', endDate: '' })

  useEffect(() => {
    axios.get('http://localhost:8080/users/' + id)
      .then(res => setData(res.data))
      .catch(err => console.log(err, "lỗi"))
  }, [])
  
  useEffect(() => {
    axios.get('http://localhost:8080/groups/' + id)
      .then(res => setData(res.data))
      .catch(err => console.log(err, "lỗi"))
  }, [])

  const handleSubmit = (e) => {
    /* setFormErrors(validate(formValues)); */
    if (data.startDate > data.endDate) {
      alert("Bạn nhập ngày kết thúc sai rồi")
    }
    e.preventDefault();
    axios.put('http://localhost:8080/users/' + id, data)
      .then(res => {
        snackbar.openSnackbar({ duration: 3000, text: 'Cập nhật thành công', type: 'success' })
        navigate('/formUser')
      }).catch(err => console.log(err))
  };

  const handleDelete = (e) => {
    axios.delete('http://localhost:8080/users/' + id)
      .then(res => {
        snackbar.openSnackbar({ duration: 3000, text: "Xóa thành công", type: 'success' })
        navigate('/formUser')
      })
      .catch(err => console.log(err))
  }
  //#region DatePicker

  const handleChangeDatePicker = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  //#endregion
  console.log()
  return (
    <Page>
      <form onSubmit={handleSubmit} >

        <div className="form form-info">
          <h3> 1.Thông tin</h3>
          <Text>Họ tên</Text>
          <Input required onChange={(e) => setData({ ...data, name: e.target.value })} value={data.name} name='name' type='text'></Input>
          <Text> CCCD</Text>
          <Input className='ipt-type ' required value={data.cccd} onChange={(e) => setData({ ...data, cccd: e.target.value })} name='cccd' type='text' />
          {/* <p>{formErrors.id}</p> */}
          {/* <Text>Xác thực khuôn mặt</Text>
          <div className="imgUpload">
            
            <input type='file' capture="environment" onChange={handleChooseImage} />
            
             <Location ></Location>
             
          </div>
           */}

        </div>


        <div className="form form-contact">
          <h3> 2.Liên Hệ</h3>
          <Text>Điện thoại</Text>
          <Input onChange={(e) => setData({ ...data, phone: e.target.value })} value={data.phone} type="text" name='phone' placeholder='input number please!' />
          {/* <p className ="p-error">{formErrors.number}</p>  */}

          <Text> Email</Text>
          <Input onChange={(e) => setData({ ...data, email: e.target.value })} value={data.email} type='email' name='email' placeholder='...@email.com' />

          <Text>Địa chỉ</Text>
          <Input name='address' value={data.address} onChange={(e) => setData({ ...data, address: e.target.value })} />

          <Country></Country>



          <Text> Diện tích (ha)</Text>
          <Input name='acreage' value={data.acreage} onChange={(e) => setData({ ...data, acreage: e.target.value })} />


          <Text >Từ ngày</Text>
          <Input className='ipt-type ipt-Date' defaultValue={data.startDate} name='startDate' min={new Date().toISOString().split("T")[0]}
            type='date' onChange={handleChangeDatePicker} />
          <h3>{data.startDate}</h3>

          <Text>Đến ngày</Text>
          <Input className='ipt-type ipt-Date'
            type='date' name='endDate' min={data.startDate ? new Date(data.startDate).toISOString().split("T")[0] : ""}
            onChange={handleChangeDatePicker} />
          <Text>Tổ Chức</Text>

          <Input value="HTX A" disabled />
        </div>

        <button type='submit' className="btn-submit" >Lưu</button>
        <Button type="danger" onClick={() => {
          setModalVisible(true);
        }} className="btn-delete" >Xóa</Button>

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
      </form>
    </Page>
  )
}

export default updateUserPage