-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th12 28, 2022 lúc 01:21 AM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `testdb`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chuongtrinhhoc`
--

CREATE TABLE `chuongtrinhhoc` (
  `nganhhoc` varchar(50) NOT NULL,
  `khoa` varchar(50) NOT NULL,
  `hocky` int(11) NOT NULL,
  `monhoc` varchar(50) NOT NULL,
  `ghichu` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dangkyhocphan`
--

CREATE TABLE `dangkyhocphan` (
  `sophieu` varchar(10) NOT NULL,
  `mssv` varchar(10) NOT NULL,
  `ngaylap` varchar(50) NOT NULL,
  `hocky` int(11) NOT NULL,
  `namhoc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `dangkyhocphan`
--

INSERT INTO `dangkyhocphan` (`sophieu`, `mssv`, `ngaylap`, `hocky`, `namhoc`) VALUES
('1', '11111', '111', 2, 2001),
('11', '11111', '111', 2, 2001),
('111', '11111', '111', 2, 2001),
('123', '11111', '1111', 1, 2001);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhsachchuadonghocphi`
--

CREATE TABLE `danhsachchuadonghocphi` (
  `stt` int(11) NOT NULL,
  `mssv` varchar(10) NOT NULL,
  `hocky` int(11) NOT NULL,
  `namhoc` int(11) NOT NULL,
  `sotiendangky` int(11) NOT NULL,
  `sotienphaidong` int(11) NOT NULL,
  `sotienconlai` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `danhsachchuadonghocphi`
--

INSERT INTO `danhsachchuadonghocphi` (`stt`, `mssv`, `hocky`, `namhoc`, `sotiendangky`, `sotienphaidong`, `sotienconlai`) VALUES
(1, '11111', 2, 2001, 1111, 111, 11),
(2, '1', 1, 2, 1, 1, 1),
(3, '1', 2, 2001, 1111, 111, 11);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhsachmonhoc`
--

CREATE TABLE `danhsachmonhoc` (
  `mamonhoc` varchar(10) NOT NULL,
  `tenmonhoc` varchar(255) NOT NULL,
  `loaimonhoc` varchar(50) NOT NULL,
  `sotiet` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhsachmonhocmo`
--

CREATE TABLE `danhsachmonhocmo` (
  `hocky` int(11) NOT NULL,
  `namhoc` int(11) NOT NULL,
  `stt` int(11) NOT NULL,
  `monhoc` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `danhsachmonhocmo`
--

INSERT INTO `danhsachmonhocmo` (`hocky`, `namhoc`, `stt`, `monhoc`) VALUES
(2, 2001, 6, '123');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hososinhvien`
--

CREATE TABLE `hososinhvien` (
  `mssv` varchar(10) NOT NULL,
  `ngaysinh` varchar(50) NOT NULL,
  `hoten` varchar(50) NOT NULL,
  `gioitinh` varchar(10) NOT NULL,
  `quequan` varchar(100) NOT NULL,
  `doituong` varchar(50) NOT NULL,
  `nganhhoc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phieuthuhocphi`
--

CREATE TABLE `phieuthuhocphi` (
  `sophieuhocphi` varchar(10) NOT NULL,
  `mssv` varchar(10) NOT NULL,
  `ngaylap` date NOT NULL,
  `sotienthu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `chuongtrinhhoc`
--
ALTER TABLE `chuongtrinhhoc`
  ADD PRIMARY KEY (`nganhhoc`);

--
-- Chỉ mục cho bảng `dangkyhocphan`
--
ALTER TABLE `dangkyhocphan`
  ADD PRIMARY KEY (`sophieu`);

--
-- Chỉ mục cho bảng `danhsachchuadonghocphi`
--
ALTER TABLE `danhsachchuadonghocphi`
  ADD KEY `stt` (`stt`);

--
-- Chỉ mục cho bảng `danhsachmonhoc`
--
ALTER TABLE `danhsachmonhoc`
  ADD PRIMARY KEY (`mamonhoc`);

--
-- Chỉ mục cho bảng `danhsachmonhocmo`
--
ALTER TABLE `danhsachmonhocmo`
  ADD PRIMARY KEY (`stt`);

--
-- Chỉ mục cho bảng `hososinhvien`
--
ALTER TABLE `hososinhvien`
  ADD PRIMARY KEY (`mssv`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `danhsachchuadonghocphi`
--
ALTER TABLE `danhsachchuadonghocphi`
  MODIFY `stt` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `danhsachmonhocmo`
--
ALTER TABLE `danhsachmonhocmo`
  MODIFY `stt` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
