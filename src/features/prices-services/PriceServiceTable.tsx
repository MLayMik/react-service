// import Paper from '@mui/material/Paper'
// import { styled } from '@mui/material/styles'
// import Table from '@mui/material/Table'
// import TableBody from '@mui/material/TableBody'
// import TableCell, { tableCellClasses } from '@mui/material/TableCell'
// import TableContainer from '@mui/material/TableContainer'
// import TableHead from '@mui/material/TableHead'
// import TableRow from '@mui/material/TableRow'

// // const StyledTableCell = styled(TableCell)(({ theme }) => ({
// //   [`&.${tableCellClasses.head}`]: {
// //     backgroundColor: theme.palette.common.black,
// //     color: theme.palette.common.white,
// //   },
// //   [`&.${tableCellClasses.body}`]: {
// //     fontSize: 14,
// //   },
// // }))

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }))
// interface Duration {
//   min: number | null
//   max: number | null
// }
// interface Price {
//   name: string
//   price: number
//   duration: Duration
// }
// interface PriceServiceTableProps {
//   price: Price[]
// }

// // export function PriceServiceTable({ price }: PriceServiceTableProps) {
// //   return (
// //     <TableContainer component={Paper}>
// //       <Table aria-label="customized table" className="mb-4 w-full rounded-2xl border border-slate-300 bg-white p-2 [filter:_drop-shadow(0px_4px_8px_rgba(0,_0,_0,_0.06))_drop-shadow(0px_0px_4px_rgba(0,_0,_0,_0.04))] md:mb-5">
// //         <TableHead>
// //           <TableRow className="flex rounded-t-2xl bg-[#EAEDF2] text-sm  tracking-[0.28px]  font-jakarta text-big font-bold leading-extra-height text-gray-900">
// //             <TableCell>Ціни на послуги</TableCell>
// //             <TableCell align="right">Calories</TableCell>
// //           </TableRow>
// //         </TableHead>
// //         <TableBody>
// //           {price.map(priceItem => (
// //             <StyledTableRow key={priceItem.name}>
// //               <TableCell
// //                 component="th"
// //                 scope="row"
// //                 sx={{
// //                   py: 2, // padding y - py-2
// //                   letterSpacing: '0.32px', // tracking-[0.32px]
// //                   color: 'text.primary', // text-gray-900
// //                   display: { xs: 'block', md: 'flex' }, // md:flex для адаптивности
// //                 }}
// //               >
// //                 {priceItem.name}
// //               </TableCell>
// //               <TableCell align="right">{priceItem.price}</TableCell>
// //             </StyledTableRow>
// //           ))}
// //         </TableBody>
// //       </Table>
// //     </TableContainer>
// //   )
// // }
// export function PriceServiceTable({ price }: PriceServiceTableProps) {
//   return (
//     <TableContainer component={Paper}>
//       <Table
//         aria-label="customized table"
//         sx={{
//           'marginBottom': '1rem', // mb-4
//           'width': '100%', // w-full
//           'borderRadius': '16px', // rounded-2xl
//           'border': '1px solid #e2e8f0', // border-slate-300
//           'backgroundColor': 'white', // bg-white
//           'padding': '0.375rem', // p-1.5 (0.375rem = 6px)
//           'filter': 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.06)) drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.04))', // фильтр для теней
//           '@media (min-width: 768px)': {
//             marginBottom: '1.25rem', // md:mb-5 для экранов среднего размера и выше
//           },
//         }}
//       >
//         <TableHead>
//           <TableRow
//             sx={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               width: '100%',
//               borderRadius: '16px', // rounded-t-2xl
//               backgroundColor: '#EAEDF2', // bg-[#EAEDF2]
//               fontSize: '0.875rem', // text-sm
//               fontWeight: '500', // font-medium
//               letterSpacing: '0.28px', // tracking-[0.28px]
//               color: '#1F2937', // text-gray-900
//             }}
//           >
//             <TableCell
//               sx={{
//                 display: { xs: 'block', md: 'none' }, // Показывать только на маленьких экранах (xs) и скрывать на md+
//                 width: '100%',
//                 maxWidth: '710px',
//                 padding: '0.75rem', // p-3
//               }}
//             >
//               Ціни на послуги
//             </TableCell>
//             <TableCell
//               sx={{
//                 justifyContent: 'space-between', // Распределение по краям

//                 display: { xs: 'none', md: 'flex' }, // Показывать только на экранах md и выше
//                 width: '100%',
//                 maxWidth: '710px',
//                 padding: '0.75rem', // p-3
//               }}
//             >
//               Назва послуги
//             </TableCell>
//             <TableCell
//               align="right"
//               sx={{
//                 display: { xs: 'none', md: 'block' }, // скрыть на малых экранах, показывать на md и выше
//                 width: '100%',
//                 maxWidth: '152px',
//                 padding: '0.75rem', // p-3
//               }}
//             >
//               Вартість
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {price.map(priceItem => (
//             <StyledTableRow key={priceItem.name}>
//               <TableCell
//                 component="th"
//                 scope="row"
//                 sx={{
//                   py: 2, // padding y - py-2
//                   letterSpacing: '0.32px', // tracking-[0.32px]
//                   color: 'text.primary', // text-gray-900
//                   display: { xs: 'block', md: 'flex' }, // md:flex для адаптивности
//                 }}
//               >
//                 {priceItem.name}
//               </TableCell>
//               <TableCell align="right">{priceItem.price}</TableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   )
// }
// <div>

//   <div
//     className="flex rounded-t-2xl bg-[#EAEDF2] text-sm font-medium tracking-[0.28px] text-gray-900"
//   >
//     <p className="block w-full max-w-[710px] p-3 md:hidden">
//       Ціни на послуги
//     </p>

//     <p className="hidden w-full max-w-[710px] p-3 md:block">Назва послуги</p>
//     <div className="flex w-full max-w-[418px]">
//       <p className="hidden w-full max-w-[152px] p-3 md:block">Вартість</p>
//     </div>
//   </div>

//   {/* {{>ServiceListItem}} {{>ServiceListItemGray}} {{>ServiceListItem}} */}
//   {/* {{>ServiceListItemGray}} {{>ServiceListItem}} */}
//   <div className="overflow-hidden rounded-b-2xl">
//     {/* {{>ServiceListItemGray}} */}
//   </div>
// </div>

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

interface Duration {
  min: number | null
  max: number | null
}

interface Price {
  name: string
  price: number
  duration: Duration
}

interface PriceServiceTableProps {
  price: Price[]
}

export function PriceServiceTable({ price }: PriceServiceTableProps) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        'marginBottom': '1rem',
        'width': '100%',
        'borderRadius': '16px',
        'border': '1px solid #e2e8f0',
        'backgroundColor': 'white',
        'padding': '1em',
        'filter': 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.06)) drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.04))',
        '@media (min-width: 768px)': {
          marginBottom: '1.25rem',
        },
      }}
    >
      <Table
        aria-label="customized table"
      >
        <TableHead>
          <TableRow
            sx={{
              borderRadius: '16px',
              width: '100%',
              backgroundColor: '#EAEDF2',
              fontSize: '0.875rem',
              fontWeight: '500',
              letterSpacing: '0.28px',
              color: '#1F2937',
            }}
          >
            <TableCell
              sx={{
                width: '100%',
                maxWidth: '710px',
                padding: '0.75rem',
              }}
            >
              Назва послуги
            </TableCell>

            <TableCell
              align="right"
              sx={{
                width: '100%',
                maxWidth: '152px',
                padding: '0.75rem',
              }}
            >
              Вартість
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {price.map(priceItem => (
            <TableRow key={priceItem.name}>
              <TableCell
                sx={{
                  py: 2,
                  letterSpacing: '0.32px',
                  color: 'text.primary',
                  display: { xs: 'block', md: 'flex' },
                }}
              >
                {priceItem.name}
              </TableCell>
              <TableCell align="right">{priceItem.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

// PriceServiceTable
