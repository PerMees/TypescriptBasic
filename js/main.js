"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SinhVien = /** @class */ (function () {
    function SinhVien() {
        this.maSV = "";
        this.tenSV = "";
    }
    return SinhVien;
}());
var sv = new SinhVien();
// sv.render();
//? Kieu du lieu
var num = 1;
var tittle = "";
var flag = true;
var arr = ["a", "b", "c"];
var arr1 = [0, 1, 2];
var arrSinhVien = [sv, { maSV: "123", tenSV: "abc" }];
var sinhVien = [1, "Phuc"];
var useState = [
    1,
    function () {
        console.log(3);
    },
];
// ? OOP
var HocVien = /** @class */ (function () {
    function HocVien() {
        this.maSinhVien = "";
        this.tenSinhVien = "";
        this.diemToan = 0;
        this.diemLy = 0;
        this.diemHoa = 0;
        this.diemTrungBinh = 0;
    }
    // ! có thể tạo get hoặc set để truy xuất hoặc thay đổi giá trị của private
    // * đổi với lớp protected có thể kế thừa từ lớp con
    // * static dùng cho những hàm không cần new đối tượng tuy nhiên có liên quan đến đối tượng này thì dùng, không thể dùng this trong hàm static, không nên lạm dụng
    HocVien.renderMaHocVien = function () {
        var numberRandom = Math.floor(Math.random() * 1000);
        return numberRandom.toString();
    };
    HocVien.prototype.tinhDiemTrungBinh = function () {
        this.diemTrungBinh = (this.diemToan + this.diemHoa + this.diemLy) / 3;
        return this.diemTrungBinh;
    };
    return HocVien;
}());
var HocVienA = /** @class */ (function (_super) {
    __extends(HocVienA, _super);
    function HocVienA() {
        return _super.call(this) || this;
    }
    return HocVienA;
}(HocVien));
var hv = new HocVien();
hv.diemHoa = 6;
hv.diemToan = 7;
hv.diemLy = 10;
console.log(hv.tinhDiemTrungBinh());
var HV = /** @class */ (function () {
    function HV() {
        this.name = "abc";
        this.age = 18;
    }
    HV.prototype.render = function () {
        console.log(this.name);
    };
    return HV;
}());
//# sourceMappingURL=main.js.map