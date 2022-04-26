import Footer from '../components/Footer/Footer';
import NewFooter from '../components/Footer/NewFooter';
import Navbar from '../components/Navbar/Navbar';
import GoldenText from '../components/Typhography/GoldenText';

const Disclaimer = () => {
  return (
    <div className='bg-[#14141F]'>
      <div className='lg:bg-[url("resources/images/disclaimer/disclaimerBack.png")] lg:bg-cover lg:bg-no-repeat w-screen mt-[78px] lg:mt-[80px] px-[35px] md:px-[80px] lg:px-[100px] xl:px-[150px] 2xl:px-[250px] pt-[30px] md:pt-[40px] lg:pt-[50px] xl:pt-[80px] 2xl:pt-[110px]'>
        <div className='text-[24px] leading-[34px] md:text-[28px] lg:text-[30px] xl:text-[36px] md:leading-[45px] lg:leading-[50px] xl:leading-[68px] font-bold pb-[10px] md:pb-[2px] lg:pb-[5px]'>
          <GoldenText>免責聲明</GoldenText>
        </div>
        <hr className='bg-[#8A8AA0] opacity-50 mb-[15px] lg:mb-[20px]' />
        <div className='text-[16px] md:text-[17px] leading-[23px] xl:text-[18px] xl:leading-[26px] text-white flex flex-col gap-[18px] md:gap-[15px] xl:gap-[20px] pb-[40px] md:pb-[100px] lg:pb-[150px] xl:pb-[200px] 2xl:pb-[300px]'>
          <p>
            歡迎您光臨「空頭夢想家」(以下簡稱本網站)，任何瀏覽網站的人士，須自行承擔一切風險，本網站不會負責任何因瀏覽或使用本網站而引致之損失。本網站不會作出任何默示的擔保。
          </p>
          <p>
            1.本網站承諾力求網站內容之準確性及完整性，但內容如有錯誤或遺漏，本網站不會承擔任何賠償責任，所有本網站內容，將會隨時更改，而不作另行通知。
          </p>
          <p>2.本網站可隨時停止或變更網頁資料及有關條款而毋須事前通知用戶。</p>
          <p>
            3.本網站不會對使用或連結本網頁而引致任何損害(包括但不限於電腦病毒、系統固障、資料損失)、誹謗、侵犯版權或知識產權所造成的損失，包括但不限於利潤、商譽、使用、資料損失或其他無形損失，本網站不承擔任何直接、間接、附帶、特別、衍生性或懲罰性賠償。
          </p>
          <p>
            4.本公司可能會連接至其他機構所提供的網頁，本公司不會對這些網頁內容作出任何保證或承擔任何責任。使用者如瀏覽這些網頁，將要自己承擔後果。是否使用本網站之服務下載或取得任何資料應由用戶自行考慮且自負風險，因前開任何資料之下載而導致用戶電腦系統之任何損壞或資料流失，本網站不承擔任何責任。
          </p>
          <p>
            5.本網站提供的任何資訊都不構成投資建議、財務諮詢、交易諮詢或任何其他建議，請您務必不要將網站提供的資訊視為上述任何建議。本網站並不會推薦您購買、出售或持有任何NFT。在做出任何購買前，請做好各種適當之研究及調查並諮詢您的財務顧問。
          </p>
          <p>
            6.購買者應了解區塊鏈商品或加密貨幣商品，其市場價格具有極高之波動性及不確定性。本網站提供之商品並非金融商品或任何投資理財型商品，商品之設計目的並非作為投資之用，無論購入或出售本商品，為購買者自行決定且自行負責之行為，本公司就商品未來的價格變化無法預測或控制，如有任何價格波動，皆與本公司無關，本公司對任何人因買賣或交易本商品所造成之獲利或虧損，無任何的法律或財務上之責任。
          </p>
          <p>
            7.本網站不擔保區塊鏈理財之投入與回收。區塊鏈理財並非存款，具有風險，並可能使本金發生虧損。因不同時間進場，將有不同之投入與回收，過去績效亦不代表末來績效之保證。任何方案均受限於平台、遊戲、交易所等官方規範與公告，而可能改變末來的投入與回收。
          </p>
          <p>
            8.區塊鏈理財所應用之虛擬代幣，其價格並非固定，與法幣間之匯價波動非本網站所能掌握，本網站亦不對任何匯價波動負責。
          </p>
          <p>
            9.本聲明與本網站末經任何獨立公正第三者審閱。即使如此
            •本網站仍盡力確保本聲明的正確性、完整性與精準度
            •但本團隊不保證所有資料皆準確無誤，且因區塊鏈理財變動迅速，本團隊亦不承据即時修改内容之義務。
          </p>
          <p>
            10.即便本團隊已盡量不使用預測性詞語，本聲明與本網站仍可能包含前瞪、預測性陳述。任何非歷史資料或末來展望，都可能因法規變化、區塊鏈技術革新、遊戲或平台競爭、總體經濟情勢等而改變，均可能導致與過去情況不同，本團隊均不對此負責。
          </p>
          <p>
            11.本團隊無論過失或其他原因，均不對使用本網站從事區塊鏈理財或其他損失負擔任何責任
            。 當您投入本網站之區塊鏈理財計畫，視為您已知悉並同意上述事項。
          </p>
        </div>
      </div>
      <Navbar />
      <NewFooter />
    </div>
  );
};

export default Disclaimer;
