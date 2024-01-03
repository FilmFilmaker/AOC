const Covid19 = () => {
    return (
      
          
          <div >
              <select id="small" className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>เลือก</option>
              <option value="Covid-1">ไม่มีประวัติสัมผัสผู้ติดเชื้อ/กลุ่มเสี่ยง และไม่ได้มาจากพื้นที่เสี่ยง</option>
              <option value="COvid-2">ผู้แจ้งเหตุไม่ทราบข้อมูล</option>
              </select>
          </div>
      
    )
  }

  export default Covid19