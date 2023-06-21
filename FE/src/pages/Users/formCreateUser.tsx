import React, { useState, useEffect } from 'react';
import { Text, Input, Page, useSnackbar, useNavigate, Button } from 'zmp-ui';
import { regexPhone, regexId, regexUserName } from '../../service/regexEX';
import Country from '../../service/selectCountry'
import {postUser} from '../../service/api'
import { RegionDropdown } from 'react-country-region-selector';

const formUser = (props) => {
  const snackbar = useSnackbar()
  const navigate = useNavigate()

  const [data, setData] = useState({ name: '',cccd:'', acreage: '', email: '', phone: '' , address:'', region:'' , startDate:'' , endDate:''})

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (data.startDate > data.endDate) {
      alert("Bạn nhập ngày kết thúc sai rồi")
    }
    postUser(data)
      .then(res => {
        snackbar.openSnackbar({ duration: 3000, text: 'Tạo Thành Công', type: 'success' })
        navigate('/formUser')
      }).catch(err => console.log(err))
  };
  

  //#region input
  /* const initialValues = {}; */
  const [formValues, setFormValues] = useState(data);
  const [formErrors, setFormErrors] = useState({});
  const [inputTypeNumber, setInputTypeNumber] = useState('')


  const handleChangeNumber = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    const result = e.target.value.replace(/\D/g, '');
    setInputTypeNumber(result);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }


  if (inputTypeNumber !== '') {
    const num = Number(inputTypeNumber);
  }
  useEffect(() => {
    console.log(formErrors);
  }, [formErrors]);
  
  const validate = (values) => {
    type errorType = {
      number?: string;
      id?: string;
      name?: string;
    };

    const errors: errorType = {};

    if (!values.number) {
      errors.number = "LỖI!! số điện thoại không đúng! vui lòng kiểm tra lại";
    } else if (!regexPhone.test(values.number)) {
      errors.number = "Số điện thoại không đúng! Vui lòng kiểm tra lại";
    }
    if (!regexId.test(values.id)) {
      errors.id = "CCCD phải đủ 12 số"
    }
    if (!regexUserName.test(values.name)) {
      errors.name = "Tên bạn nhập không đúng"
    }
    return errors;
  };
  //#endregion


  const handleChangeDatePicker = (e) => {
    const { name, value } = e.target;
    setData({...data, [name]: value });
  }

  //#endregion

  return (
    <>
      <Page>
        <form onSubmit={handleSubmit} method='POST' action="">

          <div className="form form-info">
            <h3> 1.Thông tin</h3>
            <Text>Họ tên</Text>
            <Input  required onChange={(e) => setData({ ...data, name: e.target.value })} name='name' ></Input>


            <Text> CCCD</Text>
            <Input className='ipt-type ' required onChange={(e) => setData({...data , cccd: e.target.value})} name='id' />
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
            <Input  onChange={(e) => setData({ ...data, phone: e.target.value })} type="number" name='phone' placeholder='Nhập số điện thoại!' />
            {/* <p className ="p-error">{formErrors.number}</p>  */}

            <Text> Email</Text>
            <Input  onChange={(e) => setData({ ...data, email: e.target.value })} type='email' name='email' placeholder='Nhập gmail' />

            <Text>Địa chỉ</Text>
            <Input  name='address' onChange={(e) => setData({...data , address: e.target.value})} />

            <Country name='region' onChang={(e) => setData({...data , region: e.target.value})}></Country>


            <Text> Diện tích (ha)</Text>
            <Input  name='acreage'  onChange={(e) => setData({ ...data, acreage: e.target.value })} />


            <Text >Từ ngày</Text>
            <Input className='ipt-type ipt-Date' name='startDate' min={new Date().toISOString().split("T")[0]}
              type='date' onChange={handleChangeDatePicker} />
            <h3>{data.startDate}</h3>
            <Text>Đến ngày</Text>
            <Input className='ipt-type ipt-Date'
              type='date' name='endDate' min={data.startDate ? new Date(data.startDate).toISOString().split("T")[0] : ""}
              disabled={data.startDate === "" ? true : false} onChange={handleChangeDatePicker} />
            <Text>Tổ Chức</Text>
            <Input value="HTX A" disabled/>
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

export default formUser;