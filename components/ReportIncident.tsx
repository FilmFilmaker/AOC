import React from 'react'
import { SearchBar, SearchNumberfacturer, Notifier, SymptomCBD, Covid19, Violence } from '.'




const ReportIncident = () => {
  return (
    <div className="flex flex-row flex-wrap gap-3 size-full pt-6 justify-center">
      
      <div className="item">
        <div className="item__1 pt-6">
            <h1 className="w-full">หมายเลขโทรศัพท์<br/>
            <p className="font__explain">ตัวอย่างการลงข้อมูล เช่น xxx-xxx-xxxx<br/></p>
              <div className="w-full pt-4">
              <input type="number" id="phone" className="text__box" 
              placeholder="xxx-xxx-xxxx" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
              </div>
            </h1>
            
        </div>
        <div className="item__1">
            <h1 className="mb-4">อาการนำ<br/>
            <p className="font__explain">สำหรับการคัดแยกทางโทรศัพท์ (Phon-Triage)</p><br/>
                <SymptomCBD/>
            </h1>
        </div>
        <div className="item__3">
            <h1 className="w-full">ข้อมูลเพิ่มเติม<br/>
            <p className="font__explain">ลงรายละเอียดการเจ็บป่วยให้ชัดเจน กรณีอยู่ที่ รพ.สต/คลินิก ให้ลง V/S, N/S, 
            Tx..., Rx..., LNS พร้อมลงเวลา<br/></p>
                <div className="pt-4">
                    <textarea id="OtherInformation"  className="text__area"  
                    placeholder="ระบุข้อมูลเพิ่มเติม"></textarea>
                </div>
            </h1>
        </div>
        <div className="item__2">
            <h1>เพศ<br/>
            <p className="font__explain"><br/></p>
                <div className="flex items-center mb-2">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="label__radio"/>
                    <label htmlFor="default-radio-1" className="checkbox__radiobox">ชาย</label>
                </div>
                <div className="flex items-center mb-2">
                    <input id="default-radio-2" type="radio" value="" name="default-radio" className="label__radio"/>
                    <label htmlFor="default-radio-2" className="checkbox__radiobox">หญิง</label>
                </div>
                <div className="flex items-center mb-2">
                    <input id="default-radio-3" type="radio" value="" name="default-radio" className="label__radio"/>
                    <label htmlFor="default-radio-3" className="checkbox__radiobox">ไม่ทราบ</label>
                </div>
                <div className="flex items-center mb-2">
                    <input id="default-radio-4" type="radio" value="" name="default-radio" className="label__radio"/>
                    <label htmlFor="default-radio-4" className="checkbox__radiobox">ไม่จำเป็น</label>
                </div>
                <div className="flex items-center mb-2">
                    <input id="default-radio-8" type="radio" value="" name="default-radio" className="label__radio"/>
                    <label htmlFor="default-radio-8" className="checkbox__radiobox">อื่นๆ : </label>
                    <span>
                    <input type="text" id="otherSex" className="text__box" 
                            placeholder="..."required/>
                    </span>
                </div>
            </h1>
        </div>
        <div className="item__1 pt-6">
            <h1 className="mb-4 w-full">จำนวน<br/>
            <p className="font__explain"><br/></p>
                <SearchNumberfacturer/>
              </h1>
        </div>
        <div className="item__1 pt-6">
            <h1 className="w-full mb-4">อายุ (ปี)<br/>
            <p className="font__explain"><br/></p>
              <div className="w-full pt-4">
              <input type="text" id="age" className="text__box" placeholder="ระบุอายุ" required/>
              </div>
              </h1>
        </div>
      </div>
  
      <div className="item ">
        <div className="item__2 pt-6">
            <h1>โรคประจำตัว<br/>
            <p className="font__explain"><br/></p>
            
              <div className="flex items-center mb-2">
                  <input id="default-checkbox" type="checkbox" value="" className="label__checkbox"/>
                  <label htmlFor="default-checkbox" className="checkbox__radiobox">ปฏิเสธโรคประจำตัว</label>
              </div>
              <div className="flex items-center mb-2">
                  <input id="checked-checkbox" type="checkbox" value="" className="label__checkbox"/>
                  <label htmlFor="checked-checkbox" className="checkbox__radiobox">ผู้แจ้งเหตุไม่ทราบข้อมูล</label>
              </div>
              <div className="flex items-center mb-2">
                  <input id="checked-checkbox" type="checkbox" value="" className="label__checkbox"/>
                  <label htmlFor="checked-checkbox" className="checkbox__radiobox">เบาหวาน</label>
              </div>
              <div className="flex items-center mb-2">
                  <input id="checked-checkbox" type="checkbox" value="" className="label__checkbox"/>
                  <label htmlFor="checked-checkbox" className="checkbox__radiobox">ความดันโลหิตสูง</label>
              </div>
              <div className="flex items-center mb-2">
                  <input id="checked-checkbox" type="checkbox" value="" className="label__checkbox"/>
                  <label htmlFor="checked-checkbox" className="checkbox__radiobox">หลอดเลือดสมอง</label>
              </div>
              <div className="flex items-center mb-2">
                  <input id="checked-checkbox" type="checkbox" value="" className="label__checkbox"/>
                  <label htmlFor="checked-checkbox" className="checkbox__radiobox">หอบหืด</label>
              </div>
              <div className="flex items-center mb-2">
                  <input id="checked-checkbox" type="checkbox" value="" className="label__checkbox"/>
                  <label htmlFor="checked-checkbox" className="checkbox__radiobox">หัวใจ</label>
              </div>
              <div className="flex items-center mb-2">
                  <input id="checked-checkbox" type="checkbox" value="" className="label__checkbox"/>
                  <label htmlFor="checked-checkbox" className="checkbox__radiobox">ผู้ป่วยติดเตียง</label>
              </div>
              <div className="flex items-center mb-2">
                  <input id="checked-checkbox" type="checkbox" value="" className="label__checkbox"/>
                  <label htmlFor="checked-checkbox" className="checkbox__radiobox">ไม่จำเป็น</label>
              </div>
              <div className="flex items-center mb-2">
                  <input id="checked-checkbox" type="checkbox" value="" className="label__checkbox"/>
                  <label htmlFor="checked-checkbox" className="checkbox__radiobox">อื่นๆ:</label>
                  <span>
                    <input type="text" id="otherDisease" className="text__box" 
                            placeholder="..."required/>
                    </span>
              </div>

            </h1>
            
        </div>
        <div className="item__1 pt-6">
            <h1 className="mb-4">ประวัติ COVID-19<br/>
            <p className="font__explain"><br/></p>
                <Covid19/>
              </h1>
        </div>
        <div className="item__1 pt-6">
            <h1 className="mb-4 w-full">ความรุนแรง<br/>
            <p className="font__explain"><br/></p>
                <Violence/>
              </h1>
        </div>
        <div className="item__3">
            <h1 className="w-full mb-1">ที่เกิดเหตุ<br/>
            <p className="font__explain">ลงสถานที่ให้ชัดเจน เช่น บ้านเลขที่//สถานที่ใกล้เคียง//ถนนจากบ้าน...ไปบ้าน...//ให้ถามหาบ้านใคร? (โดยใช้//เป็นตัวคั่นข้อมูล)<br/></p>
                <div className="pt-4">
                    <textarea id="message" className="text__area" 
                    placeholder="ระบุที่เกิดเหตุ"></textarea>
                </div>
            </h1>
        </div>
        <div className="item__1 pt-6">
            <h1 className="w-full mb-4">หมู่ที่<br/>
            <p className="font__explain"><br/></p>
              <div className="w-full pt-4">
              <input type="text" id="group" className="text__box" placeholder="ระบุหมู่ที่" required/>
              </div>
              </h1>
        </div>
      </div>
  
      <div className="item">
        <div className="item__1 pt-6">
            <h1 className="w-full mb-4">ตำบล<br/>
            <p className="font__explain">พิมพ์เพื่อค้นหาตำบล ในจังหวัดอุดรธานี<br/></p>
              <div className="w-full pt-4">
              <input type="text" id="district-1" className="text__box" placeholder="ระบุตำบล" required/>
              </div>
              </h1>
        </div>
        <div className="item__3 pt-6">
            <h1 className="w-full mb-4">อำเภอ<br/>
            <p className="font__explain">พิมพ์เพื่อค้นหาอำเภอ ในจังหวัดอุดรธานี<br/></p>
              <div className="w-full pt-4">
                <SearchBar/>
              </div>
              </h1>
        </div>
        <div className="item__2">
            <h1>ผู้แจ้งเหตุ<br/>
            <p className="font__explain"><br/></p>
                <div className="flex items-center mb-2">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="label__radio"/>
                    <label htmlFor="default-radio-1" className="checkbox__radiobox">ผู้ป่วย/ผู้บาดเจ็บ</label>
                </div>
                <div className="flex items-center mb-2">
                    <input id="default-radio-2" type="radio" value="" name="default-radio" className="label__radio"/>
                    <label htmlFor="default-radio-2" className="checkbox__radiobox">ญาติ/เพื่อนบ้าน</label>
                </div>
                <div className="flex items-center mb-2">
                    <input id="default-radio-3" type="radio" value="" name="default-radio" className="label__radio"/>
                    <label htmlFor="default-radio-3" className="checkbox__radiobox">พลเมืองดี</label>
                </div>
                <div className="flex items-center mb-2">
                    <input id="default-radio-4" type="radio" value="" name="default-radio" className="label__radio"/>
                    <label htmlFor="default-radio-4" className="checkbox__radiobox">จนท.กู้ชีพ</label>
                </div>
                <div className="flex items-center mb-2">
                    <input id="default-radio-5" type="radio" value="" name="default-radio" className="label__radio"/>
                    <label htmlFor="default-radio-5" className="checkbox__radiobox">จนท.รพ.สต.</label>
                </div>
                <div className="flex items-center mb-2">
                    <input id="default-radio-6" type="radio" value="" name="default-radio" className="label__radio"/>
                    <label htmlFor="default-radio-6" className="checkbox__radiobox">ตำรวจ</label>
                </div>
                <div className="flex items-center mb-2">
                    <input id="default-radio-7" type="radio" value="" name="default-radio" className="label__radio"/>
                    <label htmlFor="default-radio-7" className="checkbox__radiobox">อาสากู้ชีพ</label>
                </div>
                <div className="flex items-center mb-2">
                    <input id="default-radio-8" type="radio" value="" name="default-radio" className="label__radio"/>
                    <label htmlFor="default-radio-8" className="checkbox__radiobox">อื่นๆ :</label>
                    <span>
                    <input type="text" id="otherReporter" className="text__box" 
                            placeholder="..."required/>
                    </span>
                </div>

            </h1>
        </div>
        <div className="item__1 pt-6">
            <h1 className="w-full mb-4">หมายเหตุ<br/>
            <p className="font__explain"><br/></p>
              <div className="w-full pt-4">
              <input type="text" id="note" className="text__box" placeholder="ระบุหมายเหตุ" required/>
              </div>
              </h1>
        </div>
        <div className="item__1 pt-6">
            <h1 className="mb-4 w-full">ผู้รับแจ้ง<br/>
            <p className="font__explain"><br/></p>
                <Notifier/>
              </h1>
        </div>
        <div className="item__4 pt-6">
            <div>
            <button type="button" className="button__clean">ล้างแบบฟอร์ม</button>
            <button type="button" className="button__save">บันทึกข้อมูล</button><br/>
                 <span className="text-red-600">หมายเหตุ :</span>
                 <span className="text-gray-600"> กรุณากรอกข้อมูลให้ครบถ้วน</span>
              </div>
        </div>
      </div>
    </div>

    
  )
}

export default ReportIncident