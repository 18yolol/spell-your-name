(function() {
    'use strict';

    angular
      .module('spellName')
      .constant('NAME_LIST', 
      {
        'ai': 'audio/ai.wav',
        'am': 'audio/am.wav',
        'an': 'audio/an.wav',
        'anh': 'audio/anh.wav',
        'ao': 'audio/ao.wav',
        'ap': 'audio/ap.wav',
        'at': 'audio/at.wav',
        'au': 'audio/au.wav',
        'ba': 'audio/ba.wav',
        'bac': 'audio/bac.wav',
        'bach': 'audio/bach.wav',
        'bai': 'audio/bai.wav',
        'ban': 'audio/ban.wav',
        'bang': 'audio/bang.wav',
        'banh': 'audio/banh.wav',
        'bao': 'audio/bao.wav',
        'bat': 'audio/bat.wav',
        'bau': 'audio/bau.wav',
        'ben': 'audio/ben.wav',
        'bi': 'audio/bi.wav',
        'bich': 'audio/bich.wav',
        'bieu': 'audio/bieu.wav',
        'binh': 'audio/binh.wav',
        'bo': 'audio/bo.wav',
        'boc': 'audio/boc.wav',
        'boi': 'audio/boi.wav',
        'bon': 'audio/bon.wav',
        'bong': 'audio/bong.wav',
        'bot': 'audio/bot.wav',
        'bui': 'audio/bui.wav',
        'bung': 'audio/bung.wav',
        'buong': 'audio/buong.wav',
        'but': 'audio/but.wav',
        'buu': 'audio/buu.wav',
        'ca': 'audio/ca.wav',
        'cai': 'audio/cai.wav',
        'cam': 'audio/cam.wav',
        'can': 'audio/can.wav',
        'canh': 'audio/canh.wav',
        'cao': 'audio/cao.wav',
        'cat': 'audio/cat.wav',
        'cau': 'audio/cau.wav',
        'cham': 'audio/cham.wav',
        'chan': 'audio/chan.wav',
        'chanh': 'audio/chanh.wav',
        'chap': 'audio/chap.wav',
        'chat': 'audio/chat.wav',
        'chau': 'audio/chau.wav',
        'che': 'audio/che.wav',
        'chi': 'audio/chi.wav',
        'chiem': 'audio/chiem.wav',
        'chien': 'audio/chien.wav',
        'chieu': 'audio/chieu.wav',
        'chinh': 'audio/chinh.wav',
        'chu': 'audio/chu.wav',
        'chua': 'audio/chua.wav',
        'chuc': 'audio/chuc.wav',
        'chung': 'audio/chung.wav',
        'chuoc': 'audio/chuoc.wav',
        'chuong': 'audio/chuong.wav',
        'chuyen': 'audio/chuyen.wav',
        'co': 'audio/co.wav',
        'cong': 'audio/cong.wav',
        'cu': 'audio/cu.wav',
        'cuc': 'audio/cuc.wav',
        'cung': 'audio/cung.wav',
        'cuong': 'audio/cuong.wav',
        'cuu': 'audio/cuu.wav',
        'dac': 'audio/dac.wav',
        'dai': 'audio/dai.wav',
        'dam': 'audio/dam.wav',
        'dan': 'audio/dan.wav',
        'dang': 'audio/dang.wav',
        'danh': 'audio/danh.wav',
        'dao': 'audio/dao.wav',
        'dat': 'audio/dat.wav',
        'dau': 'audio/dau.wav',
        'de': 'audio/de.wav',
        'di': 'audio/di.wav',
        'diec': 'audio/diec.wav',
        'diem': 'audio/diem.wav',
        'dien': 'audio/dien.wav',
        'diep': 'audio/diep.wav',
        'dieu': 'audio/dieu.wav',
        'dinh': 'audio/dinh.wav',
        'do': 'audio/do.wav',
        'doa': 'audio/doa.wav',
        'doai': 'audio/doai.wav',
        'doan': 'audio/doan.wav',
        'doanh': 'audio/doanh.wav',
        'doc': 'audio/doc.wav',
        'doi': 'audio/doi.wav',
        'don': 'audio/don.wav',
        'dong': 'audio/dong.wav',
        'du': 'audio/du.wav',
        'duat': 'audio/duat.wav',
        'duc': 'audio/duc.wav',
        'due': 'audio/due.wav',
        'dung': 'audio/dung.wav',
        'duoc': 'audio/duoc.wav',
        'duong': 'audio/duong.wav',
        'duy': 'audio/duy.wav',
        'duyen': 'audio/duyen.wav',
        'em': 'audio/em.wav',
        'gia': 'audio/gia.wav',
        'giac': 'audio/giac.wav',
        'giam': 'audio/giam.wav',
        'gian': 'audio/gian.wav',
        'giang': 'audio/giang.wav',
        'giao': 'audio/giao.wav',
        'giap': 'audio/giap.wav',
        'giau': 'audio/giau.wav',
        'gioi': 'audio/gioi.wav',
        'giu': 'audio/giu.wav',
        'ha': 'audio/ha.wav',
        'hac': 'audio/hac.wav',
        'hach': 'audio/hach.wav',
        'hai': 'audio/hai.wav',
        'ham': 'audio/ham.wav',
        'han': 'audio/han.wav',
        'hang': 'audio/hang.wav',
        'hanh': 'audio/hanh.wav',
        'hao': 'audio/hao.wav',
        'hap': 'audio/hap.wav',
        'hat': 'audio/hat.wav',
        'hien': 'audio/hien.wav',
        'hiep': 'audio/hiep.wav',
        'hiet': 'audio/hiet.wav',
        'hieu': 'audio/hieu.wav',
        'hinh': 'audio/hinh.wav',
        'ho': 'audio/ho.wav',
        'hoa': 'audio/hoa.wav',
        'hoach': 'audio/hoach.wav',
        'hoai': 'audio/hoai.wav',
        'hoan': 'audio/hoan.wav',
        'hoang': 'audio/hoang.wav',
        'hoanh': 'audio/hoanh.wav',
        'hoat': 'audio/hoat.wav',
        'hoc': 'audio/hoc.wav',
        'hoi': 'audio/hoi.wav',
        'hong': 'audio/hong.wav',
        'hop': 'audio/hop.wav',
        'hua': 'audio/hua.wav',
        'huan': 'audio/huan.wav',
        'hue': 'audio/hue.wav',
        'hung': 'audio/hung.wav',
        'huong': 'audio/huong.wav',
        'huu': 'audio/huu.wav',
        'huy': 'audio/huy.wav',
        'huyen': 'audio/huyen.wav',
        'huynh': 'audio/huynh.wav',
        'hy': 'audio/hy.wav',
        'ich': 'audio/ich.wav',
        'ke': 'audio/ke.wav',
        'keo': 'audio/keo.wav',
        'ket': 'audio/ket.wav',
        'kha': 'audio/kha.wav',
        'khac': 'audio/khac.wav',
        'khai': 'audio/khai.wav',
        'kham': 'audio/kham.wav',
        'khan': 'audio/khan.wav',
        'khang': 'audio/khang.wav',
        'khanh': 'audio/khanh.wav',
        'khao': 'audio/khao.wav',
        'khap': 'audio/khap.wav',
        'khat': 'audio/khat.wav',
        'khau': 'audio/khau.wav',
        'khe': 'audio/khe.wav',
        'khiem': 'audio/khiem.wav',
        'khiet': 'audio/khiet.wav',
        'khieu': 'audio/khieu.wav',
        'khinh': 'audio/khinh.wav',
        'khoa': 'audio/khoa.wav',
        'khoach': 'audio/khoach.wav',
        'khoai': 'audio/khoai.wav',
        'khoat': 'audio/khoat.wav',
        'khoi': 'audio/khoi.wav',
        'khon': 'audio/khon.wav',
        'khong': 'audio/khong.wav',
        'khu': 'audio/khu.wav',
        'khuat': 'audio/khuat.wav',
        'khuc': 'audio/khuc.wav',
        'khue': 'audio/khue.wav',
        'khum': 'audio/khum.wav',
        'khuong': 'audio/khuong.wav',
        'khuu': 'audio/khuu.wav',
        'khuyen': 'audio/khuyen.wav',
        'khuyet': 'audio/khuyet.wav',
        'khuynh': 'audio/khuynh.wav',
        'kiem': 'audio/kiem.wav',
        'kien': 'audio/kien.wav',
        'kiet': 'audio/kiet.wav',
        'kieu': 'audio/kieu.wav',
        'kim': 'audio/kim.wav',
        'kinh': 'audio/kinh.wav',
        'ky': 'audio/ky.wav',
        'la': 'audio/la.wav',
        'lac': 'audio/lac.wav',
        'lai': 'audio/lai.wav',
        'lam': 'audio/lam.wav',
        'lan': 'audio/lan.wav',
        'lang': 'audio/lang.wav',
        'lanh': 'audio/lanh.wav',
        'lap': 'audio/lap.wav',
        'lau': 'audio/lau.wav',
        'le': 'audio/le.wav',
        'lich': 'audio/lich.wav',
        'liem': 'audio/liem.wav',
        'lien': 'audio/lien.wav',
        'lieu': 'audio/lieu.wav',
        'linh': 'audio/linh.wav',
        'lo': 'audio/lo.wav',
        'loan': 'audio/loan.wav',
        'loc': 'audio/loc.wav',
        'loi': 'audio/loi.wav',
        'long': 'audio/long.wav',
        'lu': 'audio/lu.wav',
        'lua': 'audio/lua.wav',
        'luan': 'audio/luan.wav',
        'luat': 'audio/luat.wav',
        'luc': 'audio/luc.wav',
        'luoc': 'audio/luoc.wav',
        'luong': 'audio/luong.wav',
        'luu': 'audio/luu.wav',
        'luy': 'audio/luy.wav',
        'luyen': 'audio/luyen.wav',
        'ly': 'audio/ly.wav',
        'mac': 'audio/mac.wav',
        'mai': 'audio/mai.wav',
        'man': 'audio/man.wav',
        'manh': 'audio/manh.wav',
        'mao': 'audio/mao.wav',
        'mau': 'audio/mau.wav',
        'may': 'audio/may.wav',
        'mich': 'audio/mich.wav',
        'minh': 'audio/minh.wav',
        'mit': 'audio/mit.wav',
        'moc': 'audio/moc.wav',
        'muu': 'audio/muu.wav',
        'nam': 'audio/nam.wav',
        'nang': 'audio/nang.wav',
        'nga': 'audio/nga.wav',
        'ngac': 'audio/ngac.wav',
        'ngai': 'audio/ngai.wav',
        'ngan': 'audio/ngan.wav',
        'nghe': 'audio/nghe.wav',
        'nghi': 'audio/nghi.wav',
        'nghia': 'audio/nghia.wav',
        'nghiem': 'audio/nghiem.wav',
        'nghien': 'audio/nghien.wav',
        'nghiep': 'audio/nghiep.wav',
        'nghinh': 'audio/nghinh.wav',
        'ngo': 'audio/ngo.wav',
        'ngoa': 'audio/ngoa.wav',
        'ngoan': 'audio/ngoan.wav',
        'ngoc': 'audio/ngoc.wav',
        'ngon': 'audio/ngon.wav',
        'ngu': 'audio/ngu.wav',
        'ngung': 'audio/ngung.wav',
        'nguong': 'audio/nguong.wav',
        'nguy': 'audio/nguy.wav',
        'nguyen': 'audio/nguyen.wav',
        'nguyet': 'audio/nguyet.wav',
        'nha': 'audio/nha.wav',
        'nhac': 'audio/nhac.wav',
        'nham': 'audio/nham.wav',
        'nhan': 'audio/nhan.wav',
        'nhat': 'audio/nhat.wav',
        'nhi': 'audio/nhi.wav',
        'nhiem': 'audio/nhiem.wav',
        'nhien': 'audio/nhien.wav',
        'nhiep': 'audio/nhiep.wav',
        'nhieu': 'audio/nhieu.wav',
        'nho': 'audio/nho.wav',
        'nhu': 'audio/nhu.wav',
        'nhuan': 'audio/nhuan.wav',
        'nhue': 'audio/nhue.wav',
        'nhung': 'audio/nhung.wav',
        'niem': 'audio/niem.wav',
        'nien': 'audio/nien.wav',
        'ninh': 'audio/ninh.wav',
        'noi': 'audio/noi.wav',
        'nong': 'audio/nong.wav',
        'nu': 'audio/nu.wav',
        'nuong': 'audio/nuong.wav',
        'oai': 'audio/oai.wav',
        'oanh': 'audio/oanh.wav',
        'on': 'audio/on.wav',
        'ong': 'audio/ong.wav',
        'pha': 'audio/pha.wav',
        'phach': 'audio/phach.wav',
        'phai': 'audio/phai.wav',
        'pham': 'audio/pham.wav',
        'phan': 'audio/phan.wav',
        'phat': 'audio/phat.wav',
        'phe': 'audio/phe.wav',
        'phi': 'audio/phi.wav',
        'phien': 'audio/phien.wav',
        'phiet': 'audio/phiet.wav',
        'phieu': 'audio/phieu.wav',
        'pho': 'audio/pho.wav',
        'phon': 'audio/phon.wav',
        'phong': 'audio/phong.wav',
        'phu': 'audio/phu.wav',
        'phuc': 'audio/phuc.wav',
        'phung': 'audio/phung.wav',
        'phuoc': 'audio/phuoc.wav',
        'phuong': 'audio/phuong.wav',
        'qua': 'audio/qua.wav',
        'quach': 'audio/quach.wav',
        'quan': 'audio/quan.wav',
        'quang': 'audio/quang.wav',
        'que': 'audio/que.wav',
        'quoc': 'audio/quoc.wav',
        'quy': 'audio/quy.wav',
        'quyen': 'audio/quyen.wav',
        'quyet': 'audio/quyet.wav',
        'quynh': 'audio/quynh.wav',
        'quyt': 'audio/quyt.wav',
        'sa': 'audio/sa.wav',
        'sac': 'audio/sac.wav',
        'sach': 'audio/sach.wav',
        'sam': 'audio/sam.wav',
        'san': 'audio/san.wav',
        'sang': 'audio/sang.wav',
        'sanh': 'audio/sanh.wav',
        'sao': 'audio/sao.wav',
        'sat': 'audio/sat.wav',
        'si': 'audio/si.wav',
        'sieu': 'audio/sieu.wav',
        'sinh': 'audio/sinh.wav',
        'so': 'audio/so.wav',
        'soan': 'audio/soan.wav',
        'son': 'audio/son.wav',
        'song': 'audio/song.wav',
        'su': 'audio/su.wav',
        'suong': 'audio/suong.wav',
        'suu': 'audio/suu.wav',
        'ta': 'audio/ta.wav',
        'tac': 'audio/tac.wav',
        'tam': 'audio/tam.wav',
        'tan': 'audio/tan.wav',
        'tang': 'audio/tang.wav',
        'tao': 'audio/tao.wav',
        'tap': 'audio/tap.wav',
        'tat': 'audio/tat.wav',
        'tay': 'audio/tay.wav',
        'te': 'audio/te.wav',
        'thach': 'audio/thach.wav',
        'thai': 'audio/thai.wav',
        'than': 'audio/than.wav',
        'thang': 'audio/thang.wav',
        'thanh': 'audio/thanh.wav',
        'thap': 'audio/thap.wav',
        'thau': 'audio/thau.wav',
        'the': 'audio/the.wav',
        'thi': 'audio/thi.wav',
        'thich': 'audio/thich.wav',
        'thien': 'audio/thien.wav',
        'thiep': 'audio/thiep.wav',
        'thiet': 'audio/thiet.wav',
        'thieu': 'audio/thieu.wav',
        'thinh': 'audio/thinh.wav',
        'tho': 'audio/tho.wav',
        'thoa': 'audio/thoa.wav',
        'thoai': 'audio/thoai.wav',
        'thoan': 'audio/thoan.wav',
        'thoi': 'audio/thoi.wav',
        'thong': 'audio/thong.wav',
        'thu': 'audio/thu.wav',
        'thua': 'audio/thua.wav',
        'thuan': 'audio/thuan.wav',
        'thuat': 'audio/thuat.wav',
        'thuc': 'audio/thuc.wav',
        'thuoc': 'audio/thuoc.wav',
        'thuong': 'audio/thuong.wav',
        'thuy': 'audio/thuy.wav',
        'thuyen': 'audio/thuyen.wav',
        'thuyet': 'audio/thuyet.wav',
        'thy': 'audio/thy.wav',
        'tich': 'audio/tich.wav',
        'tiem': 'audio/tiem.wav',
        'tien': 'audio/tien.wav',
        'tiep': 'audio/tiep.wav',
        'tiet': 'audio/tiet.wav',
        'tieu': 'audio/tieu.wav',
        'tin': 'audio/tin.wav',
        'tinh': 'audio/tinh.wav',
        'to': 'audio/to.wav',
        'toa': 'audio/toa.wav',
        'toai': 'audio/toai.wav',
        'toan': 'audio/toan.wav',
        'toat': 'audio/toat.wav',
        'ton': 'audio/ton.wav',
        'tong': 'audio/tong.wav',
        'tot': 'audio/tot.wav',
        'tra': 'audio/tra.wav',
        'trac': 'audio/trac.wav',
        'trach': 'audio/trach.wav',
        'trai': 'audio/trai.wav',
        'tram': 'audio/tram.wav',
        'tran': 'audio/tran.wav',
        'trang': 'audio/trang.wav',
        'trat': 'audio/trat.wav',
        'tri': 'audio/tri.wav',
        'trich': 'audio/trich.wav',
        'triem': 'audio/triem.wav',
        'trien': 'audio/trien.wav',
        'triet': 'audio/triet.wav',
        'trieu': 'audio/trieu.wav',
        'trinh': 'audio/trinh.wav',
        'tro': 'audio/tro.wav',
        'trong': 'audio/trong.wav',
        'tru': 'audio/tru.wav',
        'truat': 'audio/truat.wav',
        'truc': 'audio/truc.wav',
        'trung': 'audio/trung.wav',
        'truoc': 'audio/truoc.wav',
        'truyen': 'audio/truyen.wav',
        'tu': 'audio/tu.wav',
        'tuan': 'audio/tuan.wav',
        'tuc': 'audio/tuc.wav',
        'tue': 'audio/tue.wav',
        'tung': 'audio/tung.wav',
        'tuoc': 'audio/tuoc.wav',
        'tuong': 'audio/tuong.wav',
        'tuu': 'audio/tuu.wav',
        'tuy': 'audio/tuy.wav',
        'tuyen': 'audio/tuyen.wav',
        'ty': 'audio/ty.wav',
        'uan': 'audio/uan.wav',
        'uong': 'audio/uong.wav',
        'uu': 'audio/uu.wav',
        'uy': 'audio/uy.wav',
        'uyen': 'audio/uyen.wav',
        'van': 'audio/van.wav',
        'vang': 'audio/vang.wav',
        've': 'audio/ve.wav',
        'vi': 'audio/vi.wav',
        'vien': 'audio/vien.wav',
        'viet': 'audio/viet.wav',
        'vinh': 'audio/vinh.wav',
        'vo': 'audio/vo.wav',
        'vong': 'audio/vong.wav',
        'vu': 'audio/vu.wav',
        'vui': 'audio/vui.wav',
        'vuong': 'audio/vuong.wav',
        'vy': 'audio/vy.wav',
        'xa': 'audio/xa.wav',
        'xoai': 'audio/xoai.wav',
        'xuan': 'audio/xuan.wav',
        'xuong': 'audio/xuong.wav',
        'xuyen': 'audio/xuyen.wav',
        'yem': 'audio/yem.wav',
        'yen': 'audio/yen.wav'
      });
})();