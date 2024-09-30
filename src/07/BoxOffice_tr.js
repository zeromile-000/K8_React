

export default function BoxOffice_tr({mv, handleTrClick}) {
    return (
        
            <tr onClick ={handleTrClick}
            className="bg-white border-b cursor-pointer hover:bg-gray-50">
                <td className="px-6 py-2 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                {`${mv.rank}`} 
                </td>
                <td className="px-6 py-2">
                {`${mv.movieNm}`}
                </td>
                <td className="px-6 py-2 text-left">
                {`${parseInt(mv.salesAmt).toLocaleString()}원`}
                </td>
                <td className="px-6 py-2 text-left">
                {`${parseInt(mv.audiCnt).toLocaleString()}명`}
                </td>
                <td className="px-6 py-2 text-center">
                    { mv.rankInten > 0 ? <span className="pr-3 text-red-600"> ▲ </span>:
                    mv.rankInten < 0? <span className= "pr-5 text-blue-600">▼</span> : "변동없음"}
                    {mv.rankInten != 0 && Math.abs(mv.rankInten)}
                </td>
            </tr>
        
    )
}
