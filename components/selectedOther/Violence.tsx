
const Violence = () => {
    return (
          <div>
              <select id="small" className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 
              rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
               dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>เลือก</option>
              <option value="red">สีแดง (วิกฤต)</option>
              <option value="yellow">สีเหลือง (เร่งด่วน)</option>
              <option value="green">สีเขียว (ไม่รุนแรง)</option>
              <option value="white">สีขาว (ทั่วไป)</option>
              <option value="ิblack">สีดำ (รับบริการสาธารณสุขอื่นๆ)</option>
              <option value="don khnow">ผู้แจ้งเหตุไม่ทราบข้อมูลที่แน่ชัด</option>
              <option value="unnee">ไม่จำเป็น</option>
              </select>
          </div>
      
    )
  }

  export default Violence