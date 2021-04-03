import './App.css';
import Box from './Box';
import Grid from './Grid';

function App() {
    return (
        <section className="app-section">
            <div className="app-container">
                <h2>Farm Dashboard</h2>
                <Grid columns={3}>
                    <Box>
                        <h3>ออเดอร์ต่อวัน</h3>
                        <ul>
                            <li>3 กันยายน - 1,582 ออเดอร์</li>
                            <li>2 กันยายน - 1,649 ออเดอร์</li>
                            <li>1 กันยายน - 1,755 ออเดอร์</li>
                        </ul>
                    </Box>
                    <Box>
                        <h3>ยอดขายสินค้ายอดนิยม</h3>
                        <p>หมายเหตุ : เป็นราคาโดยประมาณเท่านั้น</p>
                        <ol>
                            <li>แครอท ~ 200,000 บาท</li>
                            <li>มะเขือเทศ ~ 120,000 บาท</li>
                            <li>แตงกวา ~ 105,000 บาท</li>
                        </ol>
                    </Box>
                    <Box>
                        <h4>Quote of the day</h4>
                        <p>คนเราจะมีพรุ่งนี้ได้อีกกี่วัน ... ชีวิตยังมีพรุ่งนี้เสมอ</p>
                        <p>by พี่ตูน</p>
                    </Box>
                </Grid>
            </div>
        </section>
    );
}

export default App;