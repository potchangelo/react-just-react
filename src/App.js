import './App.css';

function App() {
    return (
        <section className="app-section">
            <div className="app-container">
                <h2>Farm Dashboard</h2>
                <div className="box">
                    <h3>ออเดอร์ต่อวัน</h3>
                    <ul>
                        <li>3 กันยายน - 1,582 ออเดอร์</li>
                        <li>2 กันยายน - 1,649 ออเดอร์</li>
                        <li>1 กันยายน - 1,755 ออเดอร์</li>
                    </ul>
                </div>
                <div className="box">
                    <h3>ยอดขายสินค้ายอดนิยม</h3>
                    <p>หมายเหตุ : เป็นราคาโดยประมาณเท่านั้น</p>
                    <ol>
                        <li>แครอท ~ 200,000 บาท</li>
                        <li>มะเขือเทศ ~ 120,000 บาท</li>
                        <li>แตงกวา ~ 105,000 บาท</li>
                    </ol>
                </div>
                <div className="box">
                    <h4>Tips of the day</h4>
                    <p>บัญชีของคุณยังไม่ได้ยืนยันอีเมลล์ กรุณาตรวจสอบเพื่อความเนียนกริ๊บในการใช้ระบบ</p>
                </div>
            </div>
        </section>
    );
}

export default App;