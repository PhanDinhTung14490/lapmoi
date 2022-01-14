const Header = {
    runder() {
        return /* html */ `
        <div class="bg-black py-8 ">
        <a href="#">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1a4f4e27073123.5635f8e9214d4.jpg"
                alt="" width="150px" class="mx-auto">
        </a>
    </div>
    <nav class="flex justify-between p-3 bg-orange-400 items-center ">
            <div class="menu text-white">
            <ul class="flex inset-4 font-semibold text-white" id="menu" >
                <li class="">
                    <a href="/"  class="menu-item__link mr-10 text-Slate-50">Trang Chủ</a>
                </li>
                <li class="">
                    <a href="/signup" class=" mr-10 hover:text-pink-900">Tuyển Sinh</a>
                </li>
                <li class="">
                    <a href="/signin" class=" mr-10 hover:text-pink-900">Góc Sinh viên</a>
                </li>
                <li class="">
                    <a href="/signup" class=" mr-10 hover:text-pink-900">Trương Trình Đào tạo</a>
                </li>
                <li class="">
                    <a href="/admin/dashboard" class=" mr-10 hover:text-pink-900">Tuyển Dụng</a>
                </li>
               
            </ul>
            </div>
            <div class="search">
            <input type="text" class="p-0.2" />
            <button class="bg-blue-500 active:bg-blue-600 ...">
              Tìm Kiếm
            </button>
        </div>
        </nav>
    </nav>
        `;
    },
};
export default Header;