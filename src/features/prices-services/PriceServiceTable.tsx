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
