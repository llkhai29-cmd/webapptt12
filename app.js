// IngestMed AI Platform - Application Logic

// 1. Data Store containing preloaded template mock rows
let dataStore = {
    mau01: [
        { STT: 1, MA_KHOA: 'KNOITRU', TEN_KHOA: 'Khoa Nội tổng hợp', BAN_KHAM: 3, GIUONG_PD: 2, GIUONG_TK: 10, GIUONG_HSTC: 3, GIUONG_HSCC: 5, TU_NGAY: '20260101', DEN_NGAY: '', MA_CSKCB: '01001' },
        { STT: 2, MA_KHOA: 'KNGOAI', TEN_KHOA: 'Khoa Ngoại tổng hợp', BAN_KHAM: 4, GIUONG_PD: 4, GIUONG_TK: 20, GIUONG_HSTC: 6, GIUONG_HSCC: 0, TU_NGAY: '20260101', DEN_NGAY: '', MA_CSKCB: '01001' },
        { STT: 3, MA_KHOA: 'KSAN', TEN_KHOA: 'Khoa Sản', BAN_KHAM: 5, GIUONG_PD: 6, GIUONG_TK: 30, GIUONG_HSTC: 0, GIUONG_HSCC: 0, TU_NGAY: '20260101', DEN_NGAY: '20261231', MA_CSKCB: '01001' },
        { STT: 4, MA_KHOA: 'KCC', TEN_KHOA: 'Khoa Cấp cứu', BAN_KHAM: '', GIUONG_PD: 8, GIUONG_TK: 40, GIUONG_HSTC: 0, GIUONG_HSCC: 0, TU_NGAY: '20260101', DEN_NGAY: '20261231', MA_CSKCB: '01001' },
        { STT: 5, MA_KHOA: 'KYHCT', TEN_KHOA: 'Khoa YHCT', BAN_KHAM: '', GIUONG_PD: 10, GIUONG_TK: 50, GIUONG_HSTC: 0, GIUONG_HSCC: 0, TU_NGAY: '20260101', DEN_NGAY: '20261231', MA_CSKCB: '01001' }
    ],
    mau02: [
        { STT: 1, MA_KHOA: 'KNOITRU', TEN_KHOA: 'Khoa Nội tổng hợp', HO_TEN: 'Nguyễn Văn An', GIOI_TINH: 1, SO_DINH_DANH: '001085001234', CHUCDANH_NN: 'V.08.01.01', VI_TRI: 'Bác sĩ điều trị', MACCHN: '000001/HN-CCHN', NGAYCAP_CCHN: '20200115', NOICAP_CCHN: 'Sở Y tế Hà Nội', PHAMVI_CM: 'Khám bệnh, chữa bệnh nội khoa', PHAMVI_CMBS: '', DVKT_KHAC: '', VB_PHANCONG: 'QD-001/2026', THOIGIAN_DK: 'Toàn thời gian', THOIGIAN_NGAY: 8, THOIGIAN_TUAN: 5, CSKCB_KHAC: '', CSKCB_CGKT: '', QD_CGKT: '', TU_NGAY: '20260101', DEN_NGAY: '', MA_CSKCB: '01001' },
        { STT: 2, MA_KHOA: 'KNGOAI', TEN_KHOA: 'Khoa Ngoại tổng hợp', HO_TEN: 'Trần Thị Bình', GIOI_TINH: 2, SO_DINH_DANH: '001088005678', CHUCDANH_NN: 'V.08.01.02', VI_TRI: 'Bác sĩ phẫu thuật', MACCHN: '000002/HN-CCHN', NGAYCAP_CCHN: '20200115', NOICAP_CCHN: 'Sở Y tế Hà Nội', PHAMVI_CM: 'Khám bệnh, chữa bệnh nội khoa', PHAMVI_CMBS: '', DVKT_KHAC: '', VB_PHANCONG: 'QD-002/2026', THOIGIAN_DK: 'Toàn thời gian', THOIGIAN_NGAY: 8, THOIGIAN_TUAN: 5, CSKCB_KHAC: '', CSKCB_CGKT: '', QD_CGKT: '', TU_NGAY: '20260101', DEN_NGAY: '', MA_CSKCB: '01001' },
        { STT: 3, MA_KHOA: 'KSAN', TEN_KHOA: 'Khoa Sản', HO_TEN: 'Lê Văn Cường', GIOI_TINH: 1, SO_DINH_DANH: '001090009999', CHUCDANH_NN: 'V.08.01.03', VI_TRI: 'Bác sĩ CLS', MACCHN: '000003/HN-CCHN', NGAYCAP_CCHN: '20200115', NOICAP_CCHN: 'Sở Y tế Hà Nội', PHAMVI_CM: 'Khám bệnh, chữa bệnh nội khoa', PHAMVI_CMBS: '', DVKT_KHAC: '', VB_PHANCONG: 'QD-003/2026', THOIGIAN_DK: 'Toàn thời gian', THOIGIAN_NGAY: 8, THOIGIAN_TUAN: 5, CSKCB_KHAC: '', CSKCB_CGKT: '', QD_CGKT: '', TU_NGAY: '20260101', DEN_NGAY: '20261231', MA_CSKCB: '01001' },
        { STT: 4, MA_KHOA: 'KCC', TEN_KHOA: 'Khoa Cấp cứu', HO_TEN: 'Phạm Thị Dung', GIOI_TINH: 2, SO_DINH_DANH: '001092004321', CHUCDANH_NN: 'V.08.05.11', VI_TRI: 'Điều dưỡng trưởng', MACCHN: '000004/HN-CCHN', NGAYCAP_CCHN: '20200115', NOICAP_CCHN: 'Sở Y tế Hà Nội', PHAMVI_CM: 'Khám bệnh, chữa bệnh nội khoa', PHAMVI_CMBS: '', DVKT_KHAC: '', VB_PHANCONG: 'QD-004/2026', THOIGIAN_DK: 'Toàn thời gian', THOIGIAN_NGAY: 8, THOIGIAN_TUAN: 5, CSKCB_KHAC: '', CSKCB_CGKT: '', QD_CGKT: '', TU_NGAY: '20260101', DEN_NGAY: '20261231', MA_CSKCB: '01001' },
        { STT: 5, MA_KHOA: 'KYHCT', TEN_KHOA: 'Khoa YHCT', HO_TEN: 'Hoàng Minh Đức', GIOI_TINH: 1, SO_DINH_DANH: '001094008888', CHUCDANH_NN: 'V.08.05.12', VI_TRI: 'Dược sĩ', MACCHN: '000005/HN-CCHN', NGAYCAP_CCHN: '20200115', NOICAP_CCHN: 'Sở Y tế Hà Nội', PHAMVI_CM: 'Khám bệnh, chữa bệnh nội khoa', PHAMVI_CMBS: '', DVKT_KHAC: '', VB_PHANCONG: 'QD-005/2026', THOIGIAN_DK: 'Toàn thời gian', THOIGIAN_NGAY: 8, THOIGIAN_TUAN: 5, CSKCB_KHAC: '', CSKCB_CGKT: '', QD_CGKT: '', TU_NGAY: '20260101', DEN_NGAY: '20261231', MA_CSKCB: '01001' }
    ],
    mau03: [
        { STT: 1, MA_THUOC: 'T001', TEN_HOAT_CHAT: 'Paracetamol', TEN_THUOC: 'Panadol Extra', DON_VI_TINH: 'Viên', HAM_LUONG: '500mg', DUONG_DUNG: 'Uống', MA_DUONG_DUNG: '1.01', DANG_BAO_CHE: 'Viên nén', SO_DANG_KY: 'VD-10001-18', SO_LUONG: 1000, DON_GIA: 500, DON_GIA_BH: 500, QUY_CACH: 'Hộp 10 vỉ x 10 viên', NHA_SX: 'Công ty CP Dược Hậu Giang', NUOC_SX: 'Việt Nam', NHA_THAU: 'Công ty TNHH Dược phẩm A', TT_THAU: 'GT-2026-001', TU_NGAY_HD: '20260101', DEN_NGAY_HD: '', MA_CSKCB: '01001', LOAI_THUOC: '1', LOAI_THAU: '3', HT_THAU: 'Rộng rãi', MA_DVKT: '', TCCL: 'GMP-WHO', BO_PHAN_VT: '', TEN_KHOA_HOC: '', NGUON_GOC: '', PP_CHEBIEN: '', MA_DL_NHAP: '', MA_DL_CB: '', TLHH_CB: '', TLHH_BQ: '', MA_CSKCB_THUOC: '01001', TU_NGAY: '20260101', DEN_NGAY: '' },
        { STT: 2, MA_THUOC: 'T002', TEN_HOAT_CHAT: 'Amoxicillin', TEN_THUOC: 'Amoxicillin 500mg', DON_VI_TINH: 'Viên', HAM_LUONG: '500mg', DUONG_DUNG: 'Uống', MA_DUONG_DUNG: '1.01', DANG_BAO_CHE: 'Viên nén', SO_DANG_KY: 'VD-10002-18', SO_LUONG: 2000, DON_GIA: 1500, DON_GIA_BH: 1500, QUY_CACH: 'Hộp 10 vỉ x 10 viên', NHA_SX: 'Pymepharco', NUOC_SX: 'Việt Nam', NHA_THAU: 'Công ty TNHH Dược phẩm B', TT_THAU: 'GT-2026-002', TU_NGAY_HD: '20260101', DEN_NGAY_HD: '', MA_CSKCB: '01001', LOAI_THUOC: '1', LOAI_THAU: '3', HT_THAU: 'Rộng rãi', MA_DVKT: '', TCCL: 'GMP-WHO', BO_PHAN_VT: '', TEN_KHOA_HOC: '', NGUON_GOC: '', PP_CHEBIEN: '', MA_DL_NHAP: '', MA_DL_CB: '', TLHH_CB: '', TLHH_BQ: '', MA_CSKCB_THUOC: '01001', TU_NGAY: '20260101', DEN_NGAY: '' },
        { STT: 3, MA_THUOC: 'T003', TEN_HOAT_CHAT: 'Omeprazol', TEN_THUOC: 'Omeprazol 20mg', DON_VI_TINH: 'Viên', HAM_LUONG: '20mg', DUONG_DUNG: 'Uống', MA_DUONG_DUNG: '1.01', DANG_BAO_CHE: 'Viên nén', SO_DANG_KY: 'VD-10003-18', SO_LUONG: 3000, DON_GIA: 39000, DON_GIA_BH: 39000, QUY_CACH: 'Hộp 10 vỉ x 10 viên', NHA_SX: 'Stada Việt Nam', NUOC_SX: 'Việt Nam', NHA_THAU: 'Công ty TNHH Dược phẩm C', TT_THAU: 'GT-2026-003', TU_NGAY_HD: '20260101', DEN_NGAY_HD: '20261231', MA_CSKCB: '01001', LOAI_THUOC: '1', LOAI_THAU: '3', HT_THAU: 'Rộng rãi', MA_DVKT: '', TCCL: 'GMP-WHO', BO_PHAN_VT: '', TEN_KHOA_HOC: '', NGUON_GOC: '', PP_CHEBIEN: '', MA_DL_NHAP: '', MA_DL_CB: '', TLHH_CB: '', TLHH_BQ: '', MA_CSKCB_THUOC: '01001', TU_NGAY: '20260101', DEN_NGAY: '20261231' },
        { STT: 4, MA_THUOC: 'T004', TEN_HOAT_CHAT: 'Metformin', TEN_THUOC: 'Metformin 850mg', DON_VI_TINH: 'Ống', HAM_LUONG: '850mg', DUONG_DUNG: 'Tiêm bắp', MA_DUONG_DUNG: '2.01', DANG_BAO_CHE: 'Viên nén', SO_DANG_KY: 'VD-10004-18', SO_LUONG: 4000, DON_GIA: 52000, DON_GIA_BH: 52000, QUY_CACH: 'Hộp 10 vỉ x 10 viên', NHA_SX: 'Imexpharm', NUOC_SX: 'Việt Nam', NHA_THAU: 'Công ty TNHH Dược phẩm D', TT_THAU: 'GT-2026-004', TU_NGAY_HD: '20260101', DEN_NGAY_HD: '20261231', MA_CSKCB: '01001', LOAI_THUOC: '1', LOAI_THAU: '3', HT_THAU: 'Rộng rãi', MA_DVKT: '', TCCL: 'GMP-WHO', BO_PHAN_VT: '', TEN_KHOA_HOC: '', NGUON_GOC: '', PP_CHEBIEN: '', MA_DL_NHAP: '', MA_DL_CB: '', TLHH_CB: '', TLHH_BQ: '', MA_CSKCB_THUOC: '01001', TU_NGAY: '20260101', DEN_NGAY: '20261231' },
        { STT: 5, MA_THUOC: 'T005', TEN_HOAT_CHAT: 'Atorvastatin', TEN_THUOC: 'Lipitor 20mg', DON_VI_TINH: 'Chai', HAM_LUONG: '20mg', DUONG_DUNG: 'Uống', MA_DUONG_DUNG: '1.01', DANG_BAO_CHE: 'Viên nén', SO_DANG_KY: 'VD-10005-18', SO_LUONG: 5000, DON_GIA: 110000, DON_GIA_BH: 110000, QUY_CACH: 'Hộp 10 vỉ x 10 viên', NHA_SX: 'Domesco', NUOC_SX: 'Việt Nam', NHA_THAU: 'Công ty TNHH Dược phẩm E', TT_THAU: 'GT-2026-005', TU_NGAY_HD: '20260101', DEN_NGAY_HD: '20261231', MA_CSKCB: '01001', LOAI_THUOC: '1', LOAI_THAU: '3', HT_THAU: 'Rộng rãi', MA_DVKT: '', TCCL: 'GMP-WHO', BO_PHAN_VT: '', TEN_KHOA_HOC: '', NGUON_GOC: '', PP_CHEBIEN: '', MA_DL_NHAP: '', MA_DL_CB: '', TLHH_CB: '', TLHH_BQ: '', MA_CSKCB_THUOC: '01001', TU_NGAY: '20260101', DEN_NGAY: '20261231' }
    ],
    mau04: [
        { STT: 1, MA_VAT_TU: 'VT001', NHOM_VAT_TU: 'N01', TEN_VAT_TU: 'Bơm tiêm 5ml', MA_HIEU: 'Model-001', SO_LUU_HANH: '22000001/PCBB-HN', TINHNANG_KT: 'Bơm tiêm nhựa 5ml, kim 22G', QUY_CACH: 'Hộp 10 vỉ x 10 viên', HANG_SX: 'BD', NUOC_SX: 'Việt Nam', DON_VI_TINH: 'Viên', DON_GIA: 500, DON_GIA_BH: 500, TYLE_TT_BH: 100, SO_LUONG: 1000, DINH_MUC: 1, NHA_THAU: 'Công ty TNHH Dược phẩm A', TT_THAU: 'GT-2026-001', TU_NGAY_HD: '20260101', DEN_NGAY_HD: '', MA_CSKCB: '01001', LOAI_THAU: '3', HT_THAU: 'Rộng rãi', MA_CSKCB_TBYT: '01001', TU_NGAY: '20260101', DEN_NGAY: '' },
        { STT: 2, MA_VAT_TU: 'VT002', NHOM_VAT_TU: 'N02', TEN_VAT_TU: 'Kim luồn 22G', MA_HIEU: 'Model-002', SO_LUU_HANH: '22000002/PCBB-HN', TINHNANG_KT: 'Kim luồn IV catheter 22G', QUY_CACH: 'Hộp 10 vỉ x 10 viên', HANG_SX: 'Nipro', NUOC_SX: 'Việt Nam', DON_VI_TINH: 'Viên', DON_GIA: 1500, DON_GIA_BH: 1500, TYLE_TT_BH: 100, SO_LUONG: 2000, DINH_MUC: 1, NHA_THAU: 'Công ty TNHH Dược phẩm B', TT_THAU: 'GT-2026-002', TU_NGAY_HD: '20260101', DEN_NGAY_HD: '', MA_CSKCB: '01001', LOAI_THAU: '3', HT_THAU: 'Rộng rãi', MA_CSKCB_TBYT: '01001', TU_NGAY: '20260101', DEN_NGAY: '' },
        { STT: 3, MA_VAT_TU: 'VT003', NHOM_VAT_TU: 'N03', TEN_VAT_TU: 'Gạc vô trùng 5x7cm', MA_HIEU: 'Model-003', SO_LUU_HANH: '22000003/PCBB-HN', TINHNANG_KT: 'Gạc vô trùng 5x7cm', QUY_CACH: 'Hộp 10 vỉ x 10 viên', HANG_SX: 'Vinakit', NUOC_SX: 'Việt Nam', DON_VI_TINH: 'Viên', DON_GIA: 39000, DON_GIA_BH: 39000, TYLE_TT_BH: 100, SO_LUONG: 3000, DINH_MUC: 1, NHA_THAU: 'Công ty TNHH Dược phẩm C', TT_THAU: 'GT-2026-003', TU_NGAY_HD: '20260101', DEN_NGAY_HD: '20261231', MA_CSKCB: '01001', LOAI_THAU: '3', HT_THAU: 'Rộng rãi', MA_CSKCB_TBYT: '01001', TU_NGAY: '20260101', DEN_NGAY: '20261231' },
        { STT: 4, MA_VAT_TU: 'VT004', NHOM_VAT_TU: 'N04', TEN_VAT_TU: 'Ống dẫn lưu ngực', MA_HIEU: 'Model-004', SO_LUU_HANH: '22000004/PCBB-HN', TINHNANG_KT: 'Ống dẫn lưu 28Fr', QUY_CACH: 'Hộp 10 vỉ x 10 viên', HANG_SX: 'Covidien', NUOC_SX: 'Việt Nam', DON_VI_TINH: 'Ống', DON_GIA: 52000, DON_GIA_BH: 52000, TYLE_TT_BH: 100, SO_LUONG: 4000, DINH_MUC: 1, NHA_THAU: 'Công ty TNHH Dược phẩm D', TT_THAU: 'GT-2026-004', TU_NGAY_HD: '20260101', DEN_NGAY_HD: '20261231', MA_CSKCB: '01001', LOAI_THAU: '3', HT_THAU: 'Rộng rãi', MA_CSKCB_TBYT: '01001', TU_NGAY: '20260101', DEN_NGAY: '20261231' },
        { STT: 5, MA_VAT_TU: 'VT005', NHOM_VAT_TU: 'N05', TEN_VAT_TU: 'Stent mạch vành', MA_HIEU: 'Model-005', SO_LUU_HANH: '22000005/PCBB-HN', TINHNANG_KT: 'Stent DES 3.0x18mm', QUY_CACH: 'Hộp 10 vỉ x 10 viên', HANG_SX: 'Medtronic', NUOC_SX: 'Việt Nam', DON_VI_TINH: 'Chai', DON_GIA: 110000, DON_GIA_BH: 110000, TYLE_TT_BH: 100, SO_LUONG: 5000, DINH_MUC: 1, NHA_THAU: 'Công ty TNHH Dược phẩm E', TT_THAU: 'GT-2026-005', TU_NGAY_HD: '20260101', DEN_NGAY_HD: '20261231', MA_CSKCB: '01001', LOAI_THAU: '3', HT_THAU: 'Rộng rãi', MA_CSKCB_TBYT: '01001', TU_NGAY: '20260101', DEN_NGAY: '20261231' }
    ],
    mau05: [
        { STT: 1, MA_DICH_VU: '01.0010.0100', TEN_DICH_VU: 'Khám bệnh', TEN_DVKT_GIA: 'Khám bệnh', DON_GIA: 500, QUY_TRINH: '', SO_LUONG_CGKT: '', CSKCB_CGKT: '', CSKCB_CLS: '', QD_DVKT: '', QD_PD_GIA: '', GHI_CHU: '', TU_NGAY: '20260101', DEN_NGAY: '', MA_CSKCB: '01001', GIA_THANH_TOAN: 39000 },
        { STT: 2, MA_DICH_VU: '03.1102.0100', TEN_DICH_VU: 'Giường bệnh nội khoa loại 1', TEN_DVKT_GIA: 'Ngày giường nội khoa hạng 1', DON_GIA: 1500, QUY_TRINH: '', SO_LUONG_CGKT: '', CSKCB_CGKT: '', CSKCB_CLS: '', QD_DVKT: '', QD_PD_GIA: '', GHI_CHU: '', TU_NGAY: '20260101', DEN_NGAY: '', MA_CSKCB: '01001', GIA_THANH_TOAN: 232000 },
        { STT: 3, MA_DICH_VU: '07.0020.0100', TEN_DICH_VU: 'Xét nghiệm công thức máu', TEN_DVKT_GIA: 'CTM 18 thông số', DON_GIA: 39000, QUY_TRINH: '', SO_LUONG_CGKT: '', CSKCB_CGKT: '', CSKCB_CLS: '', QD_DVKT: '', QD_PD_GIA: '', GHI_CHU: '', TU_NGAY: '20260101', DEN_NGAY: '20261231', MA_CSKCB: '01001', GIA_THANH_TOAN: 52000 },
        { STT: 4, MA_DICH_VU: '09.0001.0100', TEN_DICH_VU: 'Siêu âm ổ bụng', TEN_DVKT_GIA: 'SA ổ bụng tổng quát', DON_GIA: 52000, QUY_TRINH: '', SO_LUONG_CGKT: '', CSKCB_CGKT: '', CSKCB_CLS: '', QD_DVKT: '', QD_PD_GIA: '', GHI_CHU: '', TU_NGAY: '20260101', DEN_NGAY: '20261231', MA_CSKCB: '01001', GIA_THANH_TOAN: 110000 },
        { STT: 5, MA_DICH_VU: '12.0010.0100', TEN_DICH_VU: 'Phẫu thuật ruột thừa', TEN_DVKT_GIA: 'PT ruột thừa nội soi', DON_GIA: 110000, QUY_TRINH: '', SO_LUONG_CGKT: '', CSKCB_CGKT: '', CSKCB_CLS: '', QD_DVKT: '', QD_PD_GIA: '', GHI_CHU: '', TU_NGAY: '20260101', DEN_NGAY: '20261231', MA_CSKCB: '01001', GIA_THANH_TOAN: 3500000 }
    ],
    mau06: [
        { STT: 1, TEN_TB: 'Máy siêu âm Doppler màu', KY_HIEU: 'Voluson E10', CONGTY_SX: 'GE Healthcare', NUOC_SX: 'Việt Nam', NAM_SX: 2021, NAM_SD: 2022, MA_MAY: 'TB-001', SO_LUU_HANH: '22000001/PCBB-HN', HD_TU: '20240101', HD_DEN: '', TU_NGAY: '20260101', DEN_NGAY: '', MA_CSKCB: '01001' },
        { STT: 2, TEN_TB: 'Máy CT Scanner 128 lát', KY_HIEU: 'Aquilion ONE', CONGTY_SX: 'Canon Medical', NUOC_SX: 'Việt Nam', NAM_SX: 2022, NAM_SD: 2023, MA_MAY: 'TB-002', SO_LUU_HANH: '22000002/PCBB-HN', HD_TU: '20240101', HD_DEN: '', TU_NGAY: '20260101', DEN_NGAY: '', MA_CSKCB: '01001' },
        { STT: 3, TEN_TB: 'Máy XQ kỹ thuật số', KY_HIEU: 'DR-600', CONGTY_SX: 'Shimadzu', NUOC_SX: 'Việt Nam', NAM_SX: 2023, NAM_SD: 2024, MA_MAY: 'TB-003', SO_LUU_HANH: '22000003/PCBB-HN', HD_TU: '20240101', HD_DEN: '20261231', TU_NGAY: '20260101', DEN_NGAY: '20261231', MA_CSKCB: '01001' },
        { STT: 4, TEN_TB: 'Máy nội soi tiêu hóa', KY_HIEU: 'GIF-H190', CONGTY_SX: 'Olympus', NUOC_SX: 'Việt Nam', NAM_SX: 2024, NAM_SD: 2025, MA_MAY: 'TB-004', SO_LUU_HANH: '22000004/PCBB-HN', HD_TU: '20240101', HD_DEN: '20261231', TU_NGAY: '20260101', DEN_NGAY: '20261231', MA_CSKCB: '01001' },
        { STT: 5, TEN_TB: 'Máy gây mê kèm thở', KY_HIEU: 'Fabius GS', CONGTY_SX: 'Dräger', NUOC_SX: 'Việt Nam', NAM_SX: 2025, NAM_SD: 2026, MA_MAY: 'TB-005', SO_LUU_HANH: '22000005/PCBB-HN', HD_TU: '20240101', HD_DEN: '20261231', TU_NGAY: '20260101', DEN_NGAY: '20261231', MA_CSKCB: '01001' }
    ]
};

// XML Element Tags Definitions
const xmlTags = {
    mau01: { list: 'DANHSACH_DMBOPHANCHUYENMON', item: 'DMBOPHANCHUYENMON' },
    mau02: { list: 'DANHSACH_DMNHANLUCKBCB', item: 'DMNHANLUCKBCB' },
    mau03: { list: 'DANHSACH_DMTHUOCMAUCHEPHAMMAU', item: 'DMTHUOCMAUCHEPHAMMAU' },
    mau04: { list: 'DSACH_TBYT', item: 'DM_TBYT' },
    mau05: { list: 'DANHSACH_DMDICHVUKBCB', item: 'DMDICHVUKBCB' },
    mau06: { list: 'DSACH_TBYTTHDV', item: 'DM_TBYTTHDV' }
};

let signatureHash = '';

// 2. DOMContentLoaded Initialization
const editingRowIndices = {
    mau01: null,
    mau02: null,
    mau03: null,
    mau04: null,
    mau05: null,
    mau06: null
};

const SERVER_API_URL = '/api/datastore';
const DATASTORE_NAME = 'ingestmed_datastore';

function saveToLocalStorage() {
    try {
        localStorage.setItem(DATASTORE_NAME, JSON.stringify(dataStore));
        saveToServer();
    } catch (e) {
        console.error('Failed to save to localStorage:', e);
    }
}

async function saveToServer() {
    try {
        const payload = {
            name: DATASTORE_NAME,
            jsonData: JSON.stringify(dataStore)
        };

        const response = await fetch(SERVER_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            console.warn('[SYNC] Server save failed:', response.status, response.statusText);
            return false;
        }

        console.log('[SYNC] Saved datastore to server');
        return true;
    } catch (e) {
        console.warn('[SYNC] Server save failed:', e);
        return false;
    }
}

async function loadFromServer() {
    try {
        const response = await fetch(SERVER_API_URL);
        if (!response.ok) {
            console.warn('[SYNC] No server datastore available', response.status);
            return false;
        }

        const payload = await response.json();
        if (!payload || !payload.jsonData) {
            console.warn('[SYNC] Server response missing data');
            return false;
        }

        const parsed = JSON.parse(payload.jsonData);
        if (parsed && typeof parsed === 'object') {
            dataStore = parsed;
            localStorage.setItem(DATASTORE_NAME, JSON.stringify(dataStore));
            console.log('[SYNC] Loaded datastore from server');
            return true;
        }
    } catch (e) {
        console.warn('[SYNC] Load server datastore failed:', e);
    }
    return false;
}

const DATA_VERSION = 'v2_20260605';

document.addEventListener('DOMContentLoaded', async () => {
    // Check data version - clear stale data if version changed
    const storedVersion = localStorage.getItem('ingestmed_version');
    if (storedVersion !== DATA_VERSION) {
        console.log('[INIT] Data version mismatch. Clearing old data. Old:', storedVersion, 'New:', DATA_VERSION);
        localStorage.removeItem(DATASTORE_NAME);
        localStorage.setItem('ingestmed_version', DATA_VERSION);
    }
    
    // Try loading from server first; fallback to localStorage if unavailable
    const serverLoaded = await loadFromServer();
    if (!serverLoaded) {
        const saved = localStorage.getItem(DATASTORE_NAME);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Validate the parsed data has the expected structure
                if (parsed && typeof parsed === 'object' && parsed.mau01 && parsed.mau05) {
                    dataStore = parsed;
                    console.log('[INIT] Loaded data from localStorage');
                } else {
                    console.warn('[INIT] Invalid localStorage data structure, using defaults');
                    localStorage.removeItem(DATASTORE_NAME);
                }
            } catch (e) {
                console.error('[INIT] Error parsing localStorage:', e);
                localStorage.removeItem(DATASTORE_NAME);
            }
        } else {
            console.log('[INIT] No saved data, using defaults');
        }
    }
    
    initNavigation();
    initDragAndDrop();
    initTheme();
    renderAllTables();
    updateDashboardMetrics();
    updateXmlPreview();
    
    console.log('[INIT] App ready. deleteRow available:', typeof window.deleteRow);
});

// 3. SPA Navigation
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = item.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('sidebar');
    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('hidden');
        });
    }
}

function switchTab(tabId) {
    // Hide all tab panes
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });

    // Show target pane
    const targetPane = document.getElementById(`tab-${tabId}`);
    if (targetPane) {
        targetPane.classList.add('active');
    }

    // Update nav active style
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.getAttribute('data-tab') === tabId) {
            item.classList.add('bg-primary-container/10', 'text-primary-container', 'border-l-4', 'border-primary-container');
            item.classList.remove('text-outline');
        } else {
            item.classList.remove('bg-primary-container/10', 'text-primary-container', 'border-l-4', 'border-primary-container');
            item.classList.add('text-outline');
        }
    });

    // Close mobile menu if open
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth < 768 && sidebar) {
        sidebar.classList.add('hidden');
    }

    // Auto-update XML preview if switched to XML view
    if (tabId === 'xml-mapping') {
        updateXmlPreview();
    }
}

function switchSubTab(templateId, viewType) {
    const listTab = document.getElementById(`${templateId}-list-subtab`);
    const formTab = document.getElementById(`${templateId}-form-subtab`);
    const buttons = document.querySelectorAll(`.${templateId}-tab-btn`);

    buttons.forEach(btn => {
        if ((viewType === 'list' && btn.innerText.includes('Bảng')) || (viewType === 'form' && btn.innerText.includes('Nhập'))) {
            btn.classList.add('bg-primary-container', 'text-on-primary-container', 'active');
            btn.classList.remove('border', 'border-outline', 'text-outline');
        } else {
            btn.classList.remove('bg-primary-container', 'text-on-primary-container', 'active');
            btn.classList.add('border', 'border-outline', 'text-outline');
        }
    });

    if (viewType === 'list') {
        listTab.classList.remove('hidden');
        formTab.classList.add('hidden');
        
        // Reset edit mode when going back to list view
        editingRowIndices[templateId] = null;
        const form = document.getElementById(`${templateId}-form`);
        if (form) {
            form.reset();
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.innerText = "Lưu Bản Ghi";
            }
        }
    } else {
        listTab.classList.add('hidden');
        formTab.classList.remove('hidden');
    }
}

function initTheme() {
    const toggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlEl = document.documentElement;

    // Default configuration (Light Mode)
    htmlEl.classList.remove('dark');
    htmlEl.classList.add('light');
    themeIcon.innerText = 'dark_mode';
    document.body.style.backgroundColor = '#f4f6f8';
    document.body.style.color = '#1c2425';

    toggleBtn.addEventListener('click', () => {
        if (htmlEl.classList.contains('dark')) {
            htmlEl.classList.remove('dark');
            htmlEl.classList.add('light');
            themeIcon.innerText = 'dark_mode';
            document.body.style.backgroundColor = '#f4f6f8';
            document.body.style.color = '#1c2425';
        } else {
            htmlEl.classList.remove('light');
            htmlEl.classList.add('dark');
            themeIcon.innerText = 'light_mode';
            document.body.style.backgroundColor = '#0d1515';
            document.body.style.color = '#dce4e4';
        }
    });
}

// 5. Render Data Tables
function renderAllTables() {
    renderTableM01();
    renderTableM02();
    renderTableM03();
    renderTableM04();
    renderTableM05();
    renderTableM06();
}

function renderTableM01() {
    const tbody = document.getElementById('mau01-tbody');
    if (!tbody) return;
    tbody.innerHTML = dataStore.mau01.map((row, idx) => {
        const validation = validateRow('mau01', row);
        return `
            <tr class="table-row-glass hover:bg-white/5 transition-colors">
                <td class="p-3 text-center text-outline">${idx + 1}</td>
                <td class="p-3 font-mono font-semibold">${row.MA_KHOA}</td>
                <td class="p-3">${row.TEN_KHOA}</td>
                <td class="p-3 text-center">${row.BAN_KHAM || '-'}</td>
                <td class="p-3 text-center">${row.GIUONG_PD || '-'}</td>
                <td class="p-3 text-center">${row.GIUONG_TK || '-'}</td>
                <td class="p-3 text-center">${row.GIUONG_HSTC || '-'}</td>
                <td class="p-3 text-center">${row.GIUONG_HSCC || '-'}</td>
                <td class="p-3 font-mono">${row.TU_NGAY}</td>
                <td class="p-3 font-mono">${row.DEN_NGAY || '-'}</td>
                <td class="p-3 text-center">${validation.badge}</td>
                <td class="p-3 text-center whitespace-nowrap">
                    <button onclick="editRow('mau01', ${idx})" class="p-1 rounded text-primary hover:bg-primary/10 transition-colors mr-1" title="Sửa dòng này">
                        <span class="material-symbols-outlined text-sm">edit</span>
                    </button>
                    <button onclick="deleteRecord('mau01', ${idx})" class="p-1 rounded text-error hover:bg-error/10 transition-colors" title="Xóa dòng này">
                        <span class="material-symbols-outlined text-sm">delete</span>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function renderTableM02() {
    const tbody = document.getElementById('mau02-tbody');
    if (!tbody) return;
    tbody.innerHTML = dataStore.mau02.map((row, idx) => {
        const validation = validateRow('mau02', row);
        return `
            <tr class="table-row-glass hover:bg-white/5 transition-colors">
                <td class="p-3 text-center text-outline">${idx + 1}</td>
                <td class="p-3">
                    <div class="font-bold">${row.HO_TEN || '-'}</div>
                    <div class="text-[10px] text-outline font-mono">${row.MA_KHOA || '-'}</div>
                </td>
                <td class="p-3 text-xs">${row.CHUCDANH_NN || '-'}</td>
                <td class="p-3 font-mono text-xs">${row.MACCHN || '-'}</td>
                <td class="p-3 font-mono text-xs">${row.SO_DINH_DANH || row.SO_CCCD || '-'}</td>
                <td class="p-3 text-xs">${row.PHAMVI_CM || '-'}</td>
                <td class="p-3 font-mono text-xs">${row.TU_NGAY || '-'}</td>
                <td class="p-3 font-mono text-xs">${row.MA_CSKCB || '-'}</td>
                <td class="p-3 text-center">${validation.badge}</td>
                <td class="p-3 text-center whitespace-nowrap">
                    <button onclick="editRow('mau02', ${idx})" class="p-1 rounded text-primary hover:bg-primary/10 transition-colors mr-1" title="Sửa dòng này">
                        <span class="material-symbols-outlined text-sm">edit</span>
                    </button>
                    <button onclick="deleteRecord('mau02', ${idx})" class="p-1 rounded text-error hover:bg-error/10 transition-colors" title="Xóa dòng này">
                        <span class="material-symbols-outlined text-sm">delete</span>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function renderTableM03() {
    const tbody = document.getElementById('mau03-tbody');
    if (!tbody) return;
    tbody.innerHTML = dataStore.mau03.map((row, idx) => {
        const validation = validateRow('mau03', row);
        return `
            <tr class="table-row-glass hover:bg-white/5 transition-colors">
                <td class="p-3 text-center text-outline">${idx + 1}</td>
                <td class="p-3 font-mono text-xs">${row.MA_THUOC}</td>
                <td class="p-3 font-semibold text-primary-container">${row.TEN_HOAT_CHAT}</td>
                <td class="p-3">${row.TEN_THUOC} <span class="text-xs text-outline">(${row.HAM_LUONG})</span></td>
                <td class="p-3">${row.DON_VI_TINH}</td>
                <td class="p-3">${row.DUONG_DUNG}</td>
                <td class="p-3 text-right font-mono">${formatPrice(row.DON_GIA)}</td>
                <td class="p-3 text-right font-mono">${formatPrice(row.DON_GIA_BH)}</td>
                <td class="p-3 font-mono text-xs">${row.SO_DANG_KY}</td>
                <td class="p-3 text-xs">${row.TT_THAU}</td>
                <td class="p-3 text-center">${validation.badge}</td>
                <td class="p-3 text-center whitespace-nowrap">
                    <button onclick="editRow('mau03', ${idx})" class="p-1 rounded text-primary hover:bg-primary/10 transition-colors mr-1" title="Sửa dòng này">
                        <span class="material-symbols-outlined text-sm">edit</span>
                    </button>
                    <button onclick="deleteRecord('mau03', ${idx})" class="p-1 rounded text-error hover:bg-error/10 transition-colors" title="Xóa dòng này">
                        <span class="material-symbols-outlined text-sm">delete</span>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function renderTableM04() {
    const tbody = document.getElementById('mau04-tbody');
    if (!tbody) return;
    tbody.innerHTML = dataStore.mau04.map((row, idx) => {
        const validation = validateRow('mau04', row);
        return `
            <tr class="table-row-glass hover:bg-white/5 transition-colors">
                <td class="p-3 text-center text-outline">${idx + 1}</td>
                <td class="p-3 font-mono text-xs">${row.MA_VAT_TU}</td>
                <td class="p-3 font-semibold">${row.TEN_VAT_TU}</td>
                <td class="p-3 text-xs">${row.QUY_CACH}</td>
                <td class="p-3 text-right font-mono">${formatPrice(row.DON_GIA)}</td>
                <td class="p-3 text-right font-mono">${formatPrice(row.DON_GIA_BH)}</td>
                <td class="p-3 text-center font-mono">${row.TYLE_TT_BH}%</td>
                <td class="p-3 text-xs">${row.HANG_SX} / ${row.NUOC_SX}</td>
                <td class="p-3 text-xs">${row.NHA_THAU}</td>
                <td class="p-3 text-center">${validation.badge}</td>
                <td class="p-3 text-center whitespace-nowrap">
                    <button onclick="editRow('mau04', ${idx})" class="p-1 rounded text-primary hover:bg-primary/10 transition-colors mr-1" title="Sửa dòng này">
                        <span class="material-symbols-outlined text-sm">edit</span>
                    </button>
                    <button onclick="deleteRecord('mau04', ${idx})" class="p-1 rounded text-error hover:bg-error/10 transition-colors" title="Xóa dòng này">
                        <span class="material-symbols-outlined text-sm">delete</span>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function renderTableM05() {
    const tbody = document.getElementById('mau05-tbody');
    if (!tbody) return;
    tbody.innerHTML = dataStore.mau05.map((row, idx) => {
        const validation = validateRow('mau05', row);
        return `
            <tr class="table-row-glass hover:bg-white/5 transition-colors text-xs">
                <td class="p-3 text-center text-outline">${idx + 1}</td>
                <td class="p-3 font-mono font-semibold">${row.MA_DICH_VU || '-'}</td>
                <td class="p-3 font-semibold text-primary-container">${row.TEN_DICH_VU || '-'}</td>
                <td class="p-3">${row.TEN_DVKT_GIA || '-'}</td>
                <td class="p-3 text-right font-mono">${formatPrice(row.DON_GIA)}</td>
                <td class="p-3">${row.QUY_TRINH || '-'}</td>
                <td class="p-3 text-center">${row.SO_LUONG_CGKT || '-'}</td>
                <td class="p-3 font-mono">${row.CSKCB_CGKT || '-'}</td>
                <td class="p-3 font-mono">${row.CSKCB_CLS || '-'}</td>
                <td class="p-3">${row.QD_DVKT || '-'}</td>
                <td class="p-3">${row.QD_PD_GIA || '-'}</td>
                <td class="p-3 truncate max-w-[150px]" title="${row.GHI_CHU || ''}">${row.GHI_CHU || '-'}</td>
                <td class="p-3 font-mono">${row.TU_NGAY || '-'}</td>
                <td class="p-3 font-mono">${row.DEN_NGAY || '-'}</td>
                <td class="p-3 font-mono">${row.MA_CSKCB || '-'}</td>
                <td class="p-3 text-right font-mono">${formatPrice(row.GIA_THANH_TOAN)}</td>
                <td class="p-3 text-center">${validation.badge}</td>
                <td class="p-3 text-center whitespace-nowrap">
                    <button onclick="editRow('mau05', ${idx})" class="p-1 rounded text-primary hover:bg-primary/10 transition-colors mr-1" title="Sửa dòng này">
                        <span class="material-symbols-outlined text-sm">edit</span>
                    </button>
                    <button onclick="deleteRecord('mau05', ${idx})" class="p-1 rounded text-error hover:bg-error/10 transition-colors" title="Xóa dòng này">
                        <span class="material-symbols-outlined text-sm">delete</span>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function renderTableM06() {
    const tbody = document.getElementById('mau06-tbody');
    if (!tbody) return;
    tbody.innerHTML = dataStore.mau06.map((row, idx) => {
        const validation = validateRow('mau06', row);
        return `
            <tr class="table-row-glass hover:bg-white/5 transition-colors">
                <td class="p-3 text-center text-outline">${idx + 1}</td>
                <td class="p-3 font-semibold">${row.TEN_TB}</td>
                <td class="p-3 text-xs">${row.KY_HIEU}</td>
                <td class="p-3 font-mono text-xs">${row.MA_MAY}</td>
                <td class="p-3 font-mono text-xs">${row.SO_LUU_HANH || '-'}</td>
                <td class="p-3 text-center">${row.NAM_SX}</td>
                <td class="p-3 text-center">${row.NAM_SD}</td>
                <td class="p-3 text-xs">${row.CONGTY_SX} / ${row.NUOC_SX}</td>
                <td class="p-3 font-mono">${row.TU_NGAY}</td>
                <td class="p-3 text-center">${validation.badge}</td>
                <td class="p-3 text-center whitespace-nowrap">
                    <button onclick="editRow('mau06', ${idx})" class="p-1 rounded text-primary hover:bg-primary/10 transition-colors mr-1" title="Sửa dòng này">
                        <span class="material-symbols-outlined text-sm">edit</span>
                    </button>
                    <button onclick="deleteRecord('mau06', ${idx})" class="p-1 rounded text-error hover:bg-error/10 transition-colors" title="Xóa dòng này">
                        <span class="material-symbols-outlined text-sm">delete</span>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

// Helper: Format Price
function formatPrice(val) {
    if (!val && val !== 0) return '0';
    const num = Number(val);
    if (isNaN(num)) return '0';
    return num.toLocaleString('vi-VN');
}

// 6. Validation Logic (Circular 12/2026/TT-BTC thresholds)
function validateRow(templateId, row) {
    let status = 'valid'; // valid, warning, error
    let msg = 'Hợp lệ';

    // 6.1 Required fields validation
    if (templateId === 'mau01' && (!row.MA_KHOA || !row.TEN_KHOA || !row.TU_NGAY)) {
        status = 'error'; msg = 'Thiếu trường bắt buộc';
    } else if (templateId === 'mau02' && (!row.HO_TEN || !row.MA_KHOA || !row.GIOI_TINH || !row.SO_DINH_DANH || !row.CHUCDANH_NN || !row.VI_TRI || !row.MACCHN || !row.NGAYCAP_CCHN || !row.NOICAP_CCHN || !row.PHAMVI_CM || !row.TU_NGAY || !row.MA_CSKCB)) {
        status = 'error'; msg = 'Thiếu trường bắt buộc';
    } else if (templateId === 'mau03' && (!row.MA_THUOC || !row.TEN_HOAT_CHAT || !row.TEN_THUOC || !row.DON_VI_TINH || !row.SO_DANG_KY || !row.DON_GIA || !row.DON_GIA_BH)) {
        status = 'error'; msg = 'Thiếu trường bắt buộc';
    } else if (templateId === 'mau04' && (!row.MA_VAT_TU || !row.TEN_VAT_TU || !row.HANG_SX || !row.NUOC_SX || !row.DON_GIA || !row.DON_GIA_BH || !row.TYLE_TT_BH)) {
        status = 'error'; msg = 'Thiếu trường bắt buộc';
    } else if (templateId === 'mau05' && (!row.MA_DICH_VU || !row.TEN_DICH_VU || !row.DON_GIA || !row.GIA_THANH_TOAN)) {
        status = 'error'; msg = 'Thiếu trường bắt buộc';
    } else if (templateId === 'mau06' && (!row.TEN_TB || !row.KY_HIEU || !row.MA_MAY || !row.NAM_SX || !row.NAM_SD || !row.TU_NGAY)) {
        status = 'error'; msg = 'Thiếu trường bắt buộc';
    }

    // 6.2 Date Format check (yyyyMMdd)
    const dateRegex = /^\d{8}$/;
    if (status !== 'error') {
        if (row.TU_NGAY && !dateRegex.test(row.TU_NGAY)) {
            status = 'warning'; msg = 'Sai định dạng Từ Ngày';
        }
        if (row.DEN_NGAY && !dateRegex.test(row.DEN_NGAY)) {
            status = 'warning'; msg = 'Sai định dạng Đến Ngày';
        }
        if (row.NGAYCAP_CCHN && !dateRegex.test(row.NGAYCAP_CCHN)) {
            status = 'warning'; msg = 'Sai định dạng Ngày Cấp CCHN';
        }
        if (row.NGAY_SINH && !dateRegex.test(row.NGAY_SINH)) {
            status = 'warning'; msg = 'Sai định dạng Ngày Sinh';
        }
    }

    // 6.3 Price Discrepancy & Threshold Warning
    if (status !== 'error') {
        // Price exceeds BHYT cell threshold
        if (row.DON_GIA && row.DON_GIA_BH && Number(row.DON_GIA) > Number(row.DON_GIA_BH)) {
            status = 'warning'; msg = 'Giá thực tế vượt trần BHYT';
        }
        // Excessively high costs alert (> 1.000.000 VNĐ)
        if (row.DON_GIA && Number(row.DON_GIA) > 1000000) {
            status = 'warning'; msg = 'Giá trị cao (Cần giám định chủ động)';
        }
    }

    // Render badge html
    let badge = '';
    if (status === 'valid') {
        badge = `<span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 status-glow-high" title="${msg}"><span class="material-symbols-outlined text-sm">check</span></span>`;
    } else if (status === 'warning') {
        badge = `<span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500/20 text-yellow-400 glow-high" title="${msg}"><span class="material-symbols-outlined text-sm">warning</span></span>`;
    } else {
        badge = `<span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-400 glow-very-high" title="${msg}"><span class="material-symbols-outlined text-sm">close</span></span>`;
    }

    return { status, msg, badge };
}

// 7. Update Dashboard Metrics
function updateDashboardMetrics() {
    let total = 0;
    let warnings = 0;
    let errors = 0;

    Object.keys(dataStore).forEach(key => {
        dataStore[key].forEach(row => {
            total++;
            const validation = validateRow(key, row);
            if (validation.status === 'warning') warnings++;
            if (validation.status === 'error') errors++;
        });
    });

    const totalEl = document.getElementById('total-records-count');
    const warningEl = document.getElementById('warning-records-count');
    const errorEl = document.getElementById('error-records-count');

    if (totalEl) totalEl.innerText = total;
    if (warningEl) warningEl.innerText = warnings;
    if (errorEl) errorEl.innerText = errors;

    // Render file status table in Dashboard
    renderFileStatusTable();
}

function renderFileStatusTable() {
    const tbody = document.getElementById('file-status-tbody');
    if (!tbody) return;

    const templates = [
        { id: 'mau01', name: 'Mẫu 01 - Bộ phận chuyên môn', file: 'MAU_01_Template.xlsx' },
        { id: 'mau02', name: 'Mẫu 02 - Nhân lực y tế', file: 'MAU_02_Template.xlsx' },
        { id: 'mau03', name: 'Mẫu 03 - Thuốc, Máu', file: 'MAU_03_Template.xlsx' },
        { id: 'mau04', name: 'Mẫu 04 - Vật tư y tế', file: 'MAU_04_Template.xlsx' },
        { id: 'mau05', name: 'Mẫu 05 - Dịch vụ KCB', file: 'MAU_05_Template.xlsx' },
        { id: 'mau06', name: 'Mẫu 06 - Thiết bị y tế', file: 'MAU_06_Template.xlsx' }
    ];

    tbody.innerHTML = templates.map((tmpl, idx) => {
        const records = dataStore[tmpl.id];
        let statusBadge = `<span class="px-2.5 py-0.5 rounded-full bg-white/5 text-outline text-xs">TRỐNG</span>`;

        if (records.length > 0) {
            let hasError = false;
            let hasWarning = false;
            records.forEach(r => {
                const val = validateRow(tmpl.id, r);
                if (val.status === 'error') hasError = true;
                if (val.status === 'warning') hasWarning = true;
            });

            if (hasError) {
                statusBadge = `<span class="px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 text-xs">CÓ LỖI XML</span>`;
            } else if (hasWarning) {
                statusBadge = `<span class="px-2.5 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 text-xs">CẢNH BÁO</span>`;
            } else {
                statusBadge = `<span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold">HỢP LỆ</span>`;
            }
        }

        return `
            <tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td class="py-3 px-4 text-outline font-semibold">${idx + 1}</td>
                <td class="py-3 px-4 font-medium text-on-surface">${tmpl.name}</td>
                <td class="py-3 px-4 font-mono">${records.length} bản ghi</td>
                <td class="py-3 px-4">Admin</td>
                <td class="py-3 px-4">${statusBadge}</td>
                <td class="py-3 px-4 text-right">
                    <button onclick="switchTab('${tmpl.id}')" class="text-primary-container hover:underline text-xs font-semibold">Xem chi tiết</button>
                </td>
            </tr>
        `;
    }).join('');
}

// 8. Excel Drag and Drop / Input Processing
function initDragAndDrop() {
    const dropZone = document.getElementById('global-drag-drop');
    if (!dropZone) return;

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, e => {
            e.preventDefault();
            e.stopPropagation();
        });
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => dropZone.classList.add('drag-zone-active'));
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => dropZone.classList.remove('drag-zone-active'));
    });

    dropZone.addEventListener('drop', e => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files.length > 0) {
            processExcelUpload(files[0]);
        }
    });

    // Make drop zone clickable to select file
    dropZone.addEventListener('click', () => {
        document.getElementById('excel-file-input').click();
    });

    const fileInput = document.getElementById('excel-file-input');
    fileInput.addEventListener('change', (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            processExcelUpload(files[0]);
        }
    });
}

function processExcelUpload(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        
        // Let's parse the first sheet
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

        if (json.length === 0) {
            alert('File Excel trống!');
            return;
        }

        // Detect template type based on column keys
        const firstRowKeys = Object.keys(json[0]);
        let detectedType = '';

        if (firstRowKeys.includes('MA_KHOA') && firstRowKeys.includes('BAN_KHAM')) {
            detectedType = 'mau01';
        } else if ((firstRowKeys.includes('SO_DINH_DANH') || firstRowKeys.includes('SO_CCCD')) && firstRowKeys.includes('MACCHN')) {
            detectedType = 'mau02';
        } else if (firstRowKeys.includes('MA_THUOC') && firstRowKeys.includes('TEN_HOAT_CHAT')) {
            detectedType = 'mau03';
        } else if (firstRowKeys.includes('MA_VAT_TU') && firstRowKeys.includes('TEN_VAT_TU')) {
            detectedType = 'mau04';
        } else if (firstRowKeys.includes('MA_DICH_VU') && firstRowKeys.includes('TEN_DICH_VU')) {
            detectedType = 'mau05';
        } else if (firstRowKeys.includes('MA_MAY') && firstRowKeys.includes('NAM_SX')) {
            detectedType = 'mau06';
        }

        if (detectedType) {
            // Overwrite mock data with new Excel rows
            dataStore[detectedType] = json.map((row, index) => {
                row.STT = index + 1;
                return row;
            });

            saveToLocalStorage();
            renderAllTables();
            updateDashboardMetrics();
            updateXmlPreview();
            alert(`Nạp thành công ${json.length} bản ghi vào ${detectedType.toUpperCase()}!`);
            switchTab(detectedType);
        } else {
            alert('Không thể tự động nhận dạng mẫu file. Hãy kiểm tra xem các tiêu đề cột có trùng khớp với mẫu không.');
        }
    };
    reader.readAsArrayBuffer(file);
}

// 9. Manual Data Entry Forms
function handleFormSubmit(e, templateId) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const row = {};

    formData.forEach((value, key) => {
        row[key] = value;
    });

    const editIndex = editingRowIndices[templateId];
    if (editIndex !== null && editIndex !== undefined) {
        // Edit mode - update existing row
        const existingRow = dataStore[templateId][editIndex];
        row.STT = existingRow.STT;
        dataStore[templateId][editIndex] = { ...existingRow, ...row };
        editingRowIndices[templateId] = null;
        
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.innerText = "Lưu Bản Ghi";
        }
        alert('Cập nhật bản ghi thành công!');
    } else {
        // Add mode - add new row
        row.STT = dataStore[templateId].length + 1;
        dataStore[templateId].push(row);
        alert('Thêm bản ghi thành công!');
    }

    saveToLocalStorage();
    renderAllTables();
    updateDashboardMetrics();
    updateXmlPreview();

    form.reset();
    switchSubTab(templateId, 'list');
}

function clearData(templateId) {
    if (confirm(`Bạn chắc chắn muốn xóa toàn bộ dữ liệu của ${templateId.toUpperCase()}?`)) {
        dataStore[templateId] = [];
        saveToLocalStorage();
        renderAllTables();
        updateDashboardMetrics();
        updateXmlPreview();
    }
}

// ===== FIXED DELETE FUNCTION =====
window.deleteRecord = function(templateId, index) {
    console.log('[DELETE] Called with:', templateId, index);
    try {
        const data = dataStore[templateId];
        if (!data) {
            alert('Lỗi: Không tìm thấy mẫu ' + templateId);
            return;
        }
        if (index < 0 || index >= data.length) {
            alert('Lỗi: Chỉ số bản ghi không hợp lệ (' + index + '). Tổng: ' + data.length);
            return;
        }
        
        const rowInfo = data[index];
        let itemName = '';
        if (templateId === 'mau01') itemName = rowInfo.MA_KHOA || '';
        else if (templateId === 'mau02') itemName = rowInfo.HO_TEN || '';
        else if (templateId === 'mau03') itemName = rowInfo.TEN_THUOC || '';
        else if (templateId === 'mau04') itemName = rowInfo.TEN_VAT_TU || '';
        else if (templateId === 'mau05') itemName = rowInfo.TEN_DICH_VU || '';
        else if (templateId === 'mau06') itemName = rowInfo.TEN_TB || '';
        
        const confirmMsg = 'Xóa bản ghi STT ' + (index + 1) + (itemName ? ' (' + itemName + ')' : '') + '?';
        
        if (!confirm(confirmMsg)) {
            console.log('[DELETE] User cancelled');
            return;
        }
        
        // Remove the row
        dataStore[templateId].splice(index, 1);
        console.log('[DELETE] Removed row. Remaining:', dataStore[templateId].length);
        
        // Re-number STT for all remaining rows
        for (let i = 0; i < dataStore[templateId].length; i++) {
            dataStore[templateId][i].STT = i + 1;
        }
        
        // Persist and re-render
        saveToLocalStorage();
        renderAllTables();
        updateDashboardMetrics();
        updateXmlPreview();
        console.log('[DELETE] Done successfully');
    } catch (err) {
        console.error('[DELETE] Error:', err);
        alert('Lỗi khi xóa: ' + err.message);
    }
};

// ===== FIXED EDIT FUNCTION =====
window.editRow = function(templateId, index) {
    console.log('[EDIT] Called with:', templateId, index);
    try {
        const data = dataStore[templateId];
        if (!data) {
            alert('Lỗi: Không tìm thấy mẫu ' + templateId);
            return;
        }
        if (index < 0 || index >= data.length) {
            alert('Lỗi: Chỉ số bản ghi không hợp lệ (' + index + ')');
            return;
        }
        
        editingRowIndices[templateId] = index;
        const row = data[index];
        const form = document.getElementById(templateId + '-form');
        if (!form) {
            alert('Lỗi: Không tìm thấy form ' + templateId);
            return;
        }

        // Reset form first
        form.reset();

        // Populate all form fields
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(function(input) {
            const name = input.name;
            if (!name) return;
            
            if (row[name] !== undefined && row[name] !== null) {
                if (input.type === 'checkbox') {
                    input.checked = !!row[name];
                } else if (input.type === 'radio') {
                    input.checked = (input.value === String(row[name]));
                } else {
                    input.value = row[name];
                }
            }
        });

        // Update submit button text
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.innerText = "Cập nhật bản ghi";
        }

        // Switch to form view
        switchSubTab(templateId, 'form');
        
        // Scroll form into view
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        console.log('[EDIT] Form populated for row', index);
    } catch (err) {
        console.error('[EDIT] Error:', err);
        alert('Lỗi khi sửa: ' + err.message);
    }
};

// 10. XML Generator & digital signature mockup
function updateXmlPreview() {
    const selectEl = document.getElementById('xml-template-select');
    if (!selectEl) return;
    const templateId = selectEl.value;
    const previewEl = document.getElementById('xml-code-preview');
    if (!previewEl) return;

    const xml = generateXmlString(templateId);
    previewEl.innerText = xml;
}

function generateXmlString(templateId) {
    const rows = dataStore[templateId];
    if (rows.length === 0) {
        return `<?xml version="1.0" encoding="utf-8"?>\n<!-- Chưa có dữ liệu cho mẫu này. Nhập hoặc kéo thả file Excel để hiển thị. -->`;
    }

    const config = xmlTags[templateId];
    let xml = `<?xml version="1.0" encoding="utf-8"?>\n<HSDANHMUC>\n  <${config.list}>\n`;

    rows.forEach(row => {
        xml += `    <${config.item}>\n`;
        Object.keys(row).forEach(key => {
            if (key === 'STT') return; // STT is auto-handled by xml export
            // Escape special chars
            let val = String(row[key] === undefined || row[key] === null ? '' : row[key]);
            val = val.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
            xml += `      <${key}>${val}</${key}>\n`;
        });
        xml += `    </${config.item}>\n`;
    });

    xml += `  </${config.list}>\n`;
    
    if (signatureHash) {
        xml += `  <Signature>\n    <SignatureValue>${signatureHash}</SignatureValue>\n    <SigningTime>${new Date().toISOString()}</SigningTime>\n  </Signature>\n`;
    }
    
    xml += `</HSDANHMUC>`;
    return xml;
}

function simulatedDigitalSignature() {
    // Generate simulated SHA-256 hash
    const chars = '0123456789ABCDEF';
    let hash = '';
    for (let i = 0; i < 64; i++) {
        hash += chars[Math.floor(Math.random() * chars.length)];
    }
    signatureHash = hash;
    updateXmlPreview();
    alert(`Đã ký số điện tử thành công!\nHash Chữ Ký: ${hash.substring(0, 16)}...`);
}

function downloadActiveXml() {
    const templateId = document.getElementById('xml-template-select').value;
    const xml = generateXmlString(templateId);
    
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${templateId}_BHYT_Export.xml`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function exportExcelSingle(templateId) {
    const data = dataStore[templateId];
    if (!data || data.length === 0) {
        alert('Không có dữ liệu để xuất Excel!');
        return;
    }
    
    // Create worksheet from JSON data
    const ws = XLSX.utils.json_to_sheet(data);
    
    // Create workbook and append worksheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, templateId.toUpperCase());
    
    // Write file and trigger download
    XLSX.writeFile(wb, `${templateId.toUpperCase()}_Export.xlsx`);
}

function exportXmlSingle(templateId) {
    const xml = generateXmlString(templateId);
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${templateId}_BHYT_Export.xml`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// 11. Search Table Filter Logic
function filterTable(templateId, query) {
    const q = query.toLowerCase();
    const rows = document.querySelectorAll(`#${templateId}-tbody tr`);
    
    rows.forEach(tr => {
        const text = tr.innerText.toLowerCase();
        if (text.includes(q)) {
            tr.style.display = '';
        } else {
            tr.style.display = 'none';
        }
    });
}

// ==========================================
// VNPT SMARTCA DIGITAL SIGNATURE INTEGRATION
// ==========================================

let smartCaTimerInterval = null;
let smartCaCountdown = 120;
let activeSignResultType = null; // SUCCESS, REJECT, FAIL, TIMEOUT

// Initialize/Load configuration from LocalStorage
function getSmartCaConfig() {
    return {
        user: localStorage.getItem('smartca_user') || '',
        env: localStorage.getItem('smartca_env') || 'sandbox',
        clientId: localStorage.getItem('smartca_client_id') || '',
        clientSecret: localStorage.getItem('smartca_client_secret') || ''
    };
}

window.triggerDigitalSignature = function() {
    const modal = document.getElementById('smartca-modal');
    if (!modal) return;
    
    // Load config to UI fields
    const config = getSmartCaConfig();
    document.getElementById('smartca-user-input').value = config.user;
    document.getElementById('smartca-env-select').value = config.env;
    document.getElementById('smartca-client-id').value = config.clientId;
    document.getElementById('smartca-client-secret').value = config.clientSecret;

    // Reset Modal States
    document.getElementById('smartca-setup-state').classList.remove('hidden');
    document.getElementById('smartca-process-state').classList.add('hidden');
    document.getElementById('smartca-success-state').classList.add('hidden');
    
    switchSmartCaTab('signing');
    modal.classList.remove('hidden');
};

window.closeSmartCaModal = function() {
    const modal = document.getElementById('smartca-modal');
    if (modal) modal.classList.add('hidden');
    
    if (smartCaTimerInterval) {
        clearInterval(smartCaTimerInterval);
        smartCaTimerInterval = null;
    }
};

window.switchSmartCaTab = function(tab) {
    const signingPanel = document.getElementById('smartca-signing-panel');
    const configPanel = document.getElementById('smartca-config-panel');
    const signingBtn = document.getElementById('tab-btn-signing');
    const configBtn = document.getElementById('tab-btn-config');

    if (tab === 'signing') {
        signingPanel.classList.remove('hidden');
        configPanel.classList.add('hidden');
        signingBtn.classList.add('bg-primary-container', 'text-on-primary-container');
        signingBtn.classList.remove('text-outline');
        configBtn.classList.remove('bg-primary-container', 'text-on-primary-container');
        configBtn.classList.add('text-outline');
    } else {
        signingPanel.classList.add('hidden');
        configPanel.classList.remove('hidden');
        configBtn.classList.add('bg-primary-container', 'text-on-primary-container');
        configBtn.classList.remove('text-outline');
        signingBtn.classList.remove('bg-primary-container', 'text-on-primary-container');
        signingBtn.classList.add('text-outline');
    }
};

window.saveSmartCaConfig = function() {
    const env = document.getElementById('smartca-env-select').value;
    const clientId = document.getElementById('smartca-client-id').value;
    const clientSecret = document.getElementById('smartca-client-secret').value;
    
    localStorage.setItem('smartca_env', env);
    localStorage.setItem('smartca_client_id', clientId);
    localStorage.setItem('smartca_client_secret', clientSecret);
    
    alert('Cấu hình API SmartCA đã được lưu thành công!');
    switchSmartCaTab('signing');
};

function addSmartCaLog(message, type = 'info') {
    const consoleEl = document.getElementById('smartca-log-console');
    if (!consoleEl) return;
    
    const timeStr = new Date().toLocaleTimeString('vi-VN');
    let colorClass = 'text-emerald-400';
    if (type === 'error') colorClass = 'text-red-400';
    if (type === 'warning') colorClass = 'text-yellow-400';
    if (type === 'system') colorClass = 'text-primary-container';
    
    const logLine = document.createElement('div');
    logLine.className = `${colorClass} py-0.5`;
    logLine.innerHTML = `<span class="text-outline">[${timeStr}]</span> ${message}`;
    consoleEl.appendChild(logLine);
    consoleEl.scrollTop = consoleEl.scrollHeight;
}

window.startSmartCaSigningFlow = function() {
    const userVal = document.getElementById('smartca-user-input').value.trim();
    if (!userVal) {
        alert('Vui lòng nhập tài khoản VNPT SmartCA!');
        return;
    }
    
    // Save active user
    localStorage.setItem('smartca_user', userVal);
    
    // Get active template to hash
    const templateId = document.getElementById('xml-template-select').value;
    const xmlContent = generateXmlString(templateId);
    
    // Transition UI state
    document.getElementById('smartca-setup-state').classList.add('hidden');
    document.getElementById('smartca-process-state').classList.remove('hidden');
    
    // Clear logs
    const consoleEl = document.getElementById('smartca-log-console');
    if (consoleEl) consoleEl.innerHTML = '';
    
    // Start Log sequence
    addSmartCaLog('Khởi tạo giao dịch ký số VNPT SmartCA...', 'system');
    
    setTimeout(() => {
        const config = getSmartCaConfig();
        addSmartCaLog(`Kết nối tới Gateway VNPT SmartCA [URL: ${config.env === 'sandbox' ? 'https://sandbox-smartca-api.vnpt.vn' : 'https://smartca-api.vnpt.vn'}]...`, 'info');
    }, 400);

    setTimeout(() => {
        addSmartCaLog('Gửi thông tin Credentials xác thực ứng dụng...', 'info');
    }, 900);

    setTimeout(() => {
        addSmartCaLog('OAuth2: Nhận Access Token thành công (Expires: 3600s).', 'system');
    }, 1400);

    setTimeout(() => {
        addSmartCaLog('Đang tính toán mã băm SHA-256 cho tài liệu XML...', 'info');
    }, 1900);

    let docHash = '';
    setTimeout(() => {
        // Generate pseudo SHA-256 for the XML document
        const chars = '0123456789abcdef';
        docHash = '';
        for (let i = 0; i < 64; i++) docHash += chars[Math.floor(Math.random() * 16)];
        addSmartCaLog(`Tài liệu XML băm thành công. Hash: ${docHash.substring(0, 16)}...${docHash.substring(48)}`, 'system');
    }, 2400);

    setTimeout(() => {
        addSmartCaLog(`Gửi yêu cầu Remote Signing cho tài khoản: ${userVal}...`, 'info');
    }, 2900);

    let txnId = 'TXN_VNPT_' + Math.floor(Math.random() * 899999 + 100000);
    setTimeout(() => {
        addSmartCaLog(`Đã gửi Push Approval tới điện thoại di động thành công!`, 'system');
        addSmartCaLog(`Transaction ID: ${txnId}`, 'warning');
        addSmartCaLog('Đang chờ người dùng mở App VNPT SmartCA và duyệt ký số...', 'warning');
        
        // Start Polling Timer
        smartCaCountdown = 120;
        document.getElementById('smartca-timer').innerText = `Đang đợi phê duyệt trên App: ${smartCaCountdown}s`;
        
        smartCaTimerInterval = setInterval(() => {
            smartCaCountdown--;
            document.getElementById('smartca-timer').innerText = `Đang đợi phê duyệt trên App: ${smartCaCountdown}s`;
            
            if (smartCaCountdown <= 0) {
                simulateSmartCaResult('TIMEOUT');
            } else if (smartCaCountdown % 7 === 0) {
                addSmartCaLog('Polling: Trạng thái giao dịch: [PENDING]...', 'info');
            }
        }, 1000);
    }, 3500);
};

window.simulateSmartCaResult = function(result) {
    if (smartCaTimerInterval) {
        clearInterval(smartCaTimerInterval);
        smartCaTimerInterval = null;
    }
    
    if (result === 'SUCCESS') {
        addSmartCaLog('VNPT SmartCA callback: Trạng thái: [SIGNED] (Người dùng đã xác nhận).', 'system');
        addSmartCaLog('Đang tải chứng thư số công cộng và giải mã chữ ký...', 'info');
        
        setTimeout(() => {
            const chars = '0123456789ABCDEF';
            let hash = '';
            for (let i = 0; i < 64; i++) {
                hash += chars[Math.floor(Math.random() * chars.length)];
            }
            signatureHash = 'VNPT_SmartCA_' + hash;
            updateXmlPreview();
            
            // Populate success screen details
            const userVal = document.getElementById('smartca-user-input').value.trim();
            document.getElementById('cert-subject').innerText = `CN=${userVal.toUpperCase()}, MST=0100123456`;
            
            const tomorrow = new Date();
            tomorrow.setFullYear(tomorrow.getFullYear() + 3);
            const dateStr = tomorrow.toISOString().split('T')[0];
            document.getElementById('cert-validity').innerText = `${new Date().toISOString().split('T')[0]} đến ${dateStr}`;
            
            document.getElementById('cert-txn-id').innerText = 'TXN_SmartCA_' + Math.floor(Math.random() * 89999 + 10000);
            
            // Show Success Screen
            document.getElementById('smartca-process-state').classList.add('hidden');
            document.getElementById('smartca-success-state').classList.remove('hidden');
            
            addSmartCaLog('Ký số hoàn tất thành công!', 'system');
        }, 1000);
        
    } else if (result === 'REJECT') {
        addSmartCaLog('VNPT SmartCA callback: Trạng thái: [REJECTED] (Người dùng từ chối giao dịch).', 'error');
        addSmartCaLog('Giao dịch ký số bị hủy bỏ.', 'error');
        
        setTimeout(() => {
            alert('Yêu cầu ký số bị từ chối trên App VNPT SmartCA!');
            document.getElementById('smartca-process-state').classList.add('hidden');
            document.getElementById('smartca-setup-state').classList.remove('hidden');
        }, 1500);
        
    } else if (result === 'FAIL') {
        addSmartCaLog('Lỗi: Không thể kết nối tới máy chủ SmartCA Gateway. Vui lòng kiểm tra cấu hình mạng.', 'error');
        
        setTimeout(() => {
            alert('Lỗi kết nối API SmartCA!');
            document.getElementById('smartca-process-state').classList.add('hidden');
            document.getElementById('smartca-setup-state').classList.remove('hidden');
        }, 1500);
        
    } else if (result === 'TIMEOUT') {
        addSmartCaLog('Yêu cầu ký số đã hết hạn (Timeout 120 giây).', 'error');
        
        setTimeout(() => {
            alert('Hết hạn giao dịch ký số!');
            document.getElementById('smartca-process-state').classList.add('hidden');
            document.getElementById('smartca-setup-state').classList.remove('hidden');
        }, 1500);
    }
};

