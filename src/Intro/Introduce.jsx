import intro from './intro.module.css'

function Introduce(){
    
    return(
        <>
        <div className={intro.mother}>
        <h1 className={intro.spacial}>Halo Semuanya</h1>
        <h3 className={intro.spacial2}>Perkenalkan Nama Aku Alfin</h3>
        <div className={intro.text}>
        <p>Aku Adalah Seorang Pelajar yang menekuni pembelajaran IT, Salam Kenal Semuanya. Kurang lebih aku sudah selama 3 tahun menekuni ini</p>
        </div>
        <div className={intro.text}>
        <p>Di Website ini adalah bagian media apa saja yang kugunakan seperti youtube , tiktok , facebook , instagram dll</p>
        </div>
        <div className={intro.text}>
        <p>Aku Akan terus menggali ilmu yang telah ku peroleh ini!</p>
        </div>
        </div>
       
        </>
    );
}

export default Introduce