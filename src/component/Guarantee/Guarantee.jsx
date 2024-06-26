import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Language } from '@mui/icons-material';

const Guarantee = () => {
  const [language, setLanguage] = useState('en');

  const programs = {
    en: [
      {
        type: 'Warranty Policy',
        description: 'Description for Warranty Policy including various conditions and details...'
      },
      {
        type: 'Exchange Policy',
        description: 'Description for Exchange Policy including various conditions and details...'
      },
      {
        type: 'Custom Design - Client Goods',
        description: 'Custom design products or accessories made from precious metals with or without diamonds, colored stones...'
      }
    ],
    vi: [
      {
        type: 'CHÍNH SÁCH BẢO HÀNH',
        description: 'Mô tả cho CHÍNH SÁCH BẢO HÀNH bao gồm các điều kiện và chi tiết khác nhau...'
      },
      {
        type: 'THU ĐỔI',
        description: 'Mô tả cho THU ĐỔI bao gồm các điều kiện và chi tiết khác nhau...'
      },
      {
        type: 'Hàng thiết kế riêng - Hàng khách',
        description: 'Sản phẩm trang sức hoặc phụ kiện từ kim loại quý gắn hoặc không gắn kim cương, đá màu...'
      }
    ]
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'vi' : 'en'));
  };

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<Language />}
        onClick={toggleLanguage}
        size="small"
        style={{
          marginBottom: '20px',
          marginRight: '20px', // Added margin to the right to align with table headers
          backgroundColor: language === 'en' ? 'white' : 'black',
          color: language === 'en' ? 'black' : 'white',
          fontWeight: 'bold' // Added fontWeight to match table headers
        }}
      >
        {language === 'en' ? 'to Vn' : 'to en'}
      </Button>
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{language === 'en' ? 'Policy Type' : 'Loại Chính Sách'}</TableCell>
              <TableCell>{language === 'en' ? 'Description' : 'Mô tả'}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {programs[language].map((program, index) => (
              <TableRow key={index} hover>
                <TableCell>{program.type}</TableCell>
                <TableCell>{program.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Guarantee;
