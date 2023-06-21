import React, { useState, useEffect } from 'react'
import { Page, Button, useNavigate, Text, Input, Box , Modal } from 'zmp-ui'
import { getUser } from '../../service/api'
import { Link } from 'react-router-dom'

const FormUserPage: React.FunctionComponent = (props) => {

  const navigate = useNavigate()
  const [modalVisible, setModalVisible] = useState(false);

  const [columns, setColumns] = useState<any[]>([])
  const [records, setRecords] = useState<any[]>([])

  const [search, setSearch] = useState('')
  
  useEffect(() => {
    getUser()
      .then(res => {
        setColumns(Object.keys(res.data[0]))
        setRecords(res.data)
      })
  }, [])

  return (
    <>
      <Page>
        <Text className='txt-header'><b>Danh Sách Thành Viên</b></Text>
        <div className='btn-search'>
          <Input className='ipt-search' onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search'></Input>
          <button className='btn-create' onClick={() => navigate('/formCreateUser')}>Tạo</button>
        </div>
                <ul className="ul-user">
                {records.filter((i) => {
      return search.toLowerCase() === '' ? i : i.name.toLowerCase().includes(search)
    }).map((d) => (
          <li className ="li-user">
            <div className="card" >
              <div className="card-body">
                <h6 className="card-title"><div onClick={() => navigate(`/users/update/${d.id}`)}>{d.name}</div></h6>
                <p className="card-text">{d.phone}</p>
                <p className="card-text">Diện tích(ha): {d.acreage}</p>
                <p className="card-text">Tổ chức: HTX A</p>
              </div>
            </div>
          </li>
                ))}
        </ul>
      </Page>
      <Modal
        visible={modalVisible}
        title='Bạn có chắc muốn xóa không?'
        onClose={() => {
          setModalVisible(false);
        }}
        actions={[
          {
            text: 'Xóa'
          },
          {
            text: 'Hủy',
            close: true,
            highLight: true
          }
        ]}
        description='Dữ liệu về thành viên này sẽ bị xóa vĩnh viễn, bạn có chắc chắn muốn xóa'
      />
    </>
  )
}

export default FormUserPage

{/* <table>
<thead>
  <tr>
    {columns.map((c, i) => (
      <th key={i}>{c}</th>
    ))}

  </tr>
</thead>
<tbody>
  {
    records.filter((i) => {
      return search.toLowerCase() === '' ? i : i.name.toLowerCase().includes(search)
    }).map((d, i) => (
      <tr key={i}>
        <td>{d.id}</td>
        <td>{d.name }</td>
        <td>{d.phone}</td>
        <td>{d.CCCD}</td>
        <td>{d.acreage}</td>
        <td>{d.group}</td>
      </tr>
    ))
  }

</tbody>
</table>
 */}