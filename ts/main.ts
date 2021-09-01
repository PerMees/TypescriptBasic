class SinhVien {
  maSV = "";
  tenSV = "";
  constructor() {}
  // public render() {
  //   console.log(this._maSV, this._tenSV);
  // }
}

let sv = new SinhVien();
// sv.render();

//? Kieu du lieu

let num: number = 1;
let tittle: string = "";
let flag: boolean = true;
let arr: Array<string> = ["a", "b", "c"];
let arr1: number[] = [0, 1, 2];
let arrSinhVien: SinhVien[] = [sv, { maSV: "123", tenSV: "abc" }];

let sinhVien: [number, string] = [1, "Phuc"];
let useState: [number, any] = [
  1,
  function () {
    console.log(3);
  },
];

// ? OOP

class HocVien {
  maSinhVien: string = "";
  tenSinhVien: string = "";
  diemToan: number = 0;
  diemLy: number = 0;
  diemHoa: number = 0;
  private diemTrungBinh: number = 0;
  // ! có thể tạo get hoặc set để truy xuất hoặc thay đổi giá trị của private
  // * đổi với lớp protected có thể kế thừa từ lớp con

  // * static dùng cho những hàm không cần new đối tượng tuy nhiên có liên quan đến đối tượng này thì dùng, không thể dùng this trong hàm static, không nên lạm dụng

  static renderMaHocVien(): string {
    let numberRandom = Math.floor(Math.random() * 1000);
    return numberRandom.toString();
  }
  constructor() {}
  tinhDiemTrungBinh() {
    this.diemTrungBinh = (this.diemToan + this.diemHoa + this.diemLy) / 3;
    return this.diemTrungBinh;
  }
}

class HocVienA extends HocVien {
  constructor() {
    super();
  }
}

let hv: HocVien = new HocVien();
hv.diemHoa = 6;
hv.diemToan = 7;
hv.diemLy = 10;

console.log(hv.tinhDiemTrungBinh());

interface IHocVien {
  name: string;
  age: number;
  render(): any;
}

class HV implements IHocVien {
  name = "abc";
  age = 18;
  render() {
    console.log(this.name);
  }
}
interface ISanPham {
  ma: string;
  ten: string;
  gia: number;
}
