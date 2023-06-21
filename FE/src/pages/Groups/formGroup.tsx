import React, { useState, useEffect } from 'react'
import { Page, Button, useNavigate, Text, Input, Box } from 'zmp-ui'
import { getGroup } from '../../service/api'


const FormGroupPage: React.FunctionComponent = () => {

  const navigate = useNavigate()
  const [columns, setColumns] = useState<any[]>([])
  const [records, setRecords] = useState<any[]>([])

  const [search, setSearch] = useState('')

  useEffect(() => {
    getGroup()
      .then(res => {
        setColumns(Object.keys(res.data[0]))
        setRecords(res.data)
      })

  }, [])
  return (
    <>
      <Page>
        <Text className='txt-header'><b>Danh Sách Tổ Chức</b></Text>
        <div className='btn-search'>
          <Input className='ipt-search' onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search'></Input>
          <button className='btn-create' onClick={() => navigate('/formCreateGroup')}>Tạo</button>
        </div>
      <Box>
        {records.filter((i) => {
      return search.toLowerCase() === '' ? i : i.name.toLowerCase().includes(search)
    }).map((d , i) => (
      <div className="card-group card" >
          <div className="card-body">
            <h5 className="card-title"><div onClick={() => navigate(`/groups/update/${d.id}`)}>{d.name}</div></h5>
            <p className="card-text">{d.state}</p>
            <p className="card-text">Thành Viên: {d.members}</p>
            <p className="card-text">Diện Tích(ha): {d.acreage}</p>
          </div>
        </div>
        ))}
      </Box>
      
    </Page >
    </>
  )
}

export default FormGroupPage


/* 
<table>
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
                  <td>{d.name}</td>
                  <td>{d.state}</td>
                  <td>{d.members}</td>
                  <td>{d.acreage}</td>
                </tr>
              ))
            }

          </tbody>
        </table>
         */