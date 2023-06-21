
import React, { useState } from "react";

 import { useGeolocated } from "react-geolocated";

  const Location = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });
        console.log(isGeolocationEnabled)
    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <table>
            <tbody>
                
                    <td>Location:   </td>
                <td> {coords.latitude} , {coords.longitude}</td>
            </tbody>
        </table>
    ) : (
        <div>Đang tìm vị trí của bạn &hellip; </div>
    );
};

export default Location; 

 
/* 
import api from "zmp-sdk";
export const getUserLocationByToken = async (token) => {
  // gọi API Server của bạn để truy xuất thông tin từ token và user access token
};
api.getLocation({
  success: async (data) => {
    // xử lý khi gọi api thành công
    let { token, latitude, longitude } = data;
    // xử lý cho trường hợp sử dụng phiên bản Zalo mới
    if (token) {
      const response = await getUserLocationByToken(token);
      latitude = response.latitude;
      longitude = response.longitude;
      console.log(latitude)
    }
  },
  fail: (error) => {
    // xử lý khi gọi api thất bại
    console.log(error);
  },
}); */