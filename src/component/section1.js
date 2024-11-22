const Title =()=>  <h1>หัวกระดาษ</h1>
const Description =()=> <p>ย่อหน้า</p>

const Transaction =()=> {
    const name ='ห้องที่ 1'
    const price = "200"
    return (
    <ul>
        <li>{name} <span> = {price} </span></li>
        <li>ข้อย่อย 2 <span>จัดกลุ่มข้อความในบรรทัดเดียว 2</span></li>
        <li>ข้อย่อย 3 <span>จัดกลุ่มข้อความในบรรทัดเดียว 3</span></li>
    </ul>


    );
}






function Section1(){
    return(
    <div>
        <Title/>
        <Description/>
        <Transaction/>
    </div>
    );
}

export default Section1