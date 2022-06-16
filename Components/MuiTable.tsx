import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material"

function MuiTable() {
  return (
    <TableContainer component={Paper} sx={{maxHeight : '300px'}}>
        <Table aria-label=" simple table" stickyHeader>
           <TableHead>
               <TableRow >
               <TableCell>Id</TableCell>
               <TableCell>First Name</TableCell>
               <TableCell>Last Name</TableCell>
               <TableCell  align="center">Email</TableCell>
               <TableCell align="center">Ip Address</TableCell>
               </TableRow>
           </TableHead>
           <TableBody>
               {
                   tableData.map(row => (
                    <TableRow key={row.id} sx={{'&:last-child td, &:last-child th' : {border : 0} }}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.first_name}</TableCell>
                        <TableCell>{row.last_name}</TableCell>
                        <TableCell  align="center">{row.email}</TableCell>
                        <TableCell align="center">{row.ip_address}</TableCell>

                    </TableRow>
                   ))
               }
           </TableBody>
        </Table>

    </TableContainer>
  )
}

export default MuiTable

const tableData = [{
    "id": 1,
    "first_name": "Sky",
    "last_name": "Tidcomb",
    "email": "stidcomb0@hugedomains.com",
    "gender": "Male",
    "ip_address": "127.16.187.88"
  }, {
    "id": 2,
    "first_name": "Hamel",
    "last_name": "Henrion",
    "email": "hhenrion1@constantcontact.com",
    "gender": "Male",
    "ip_address": "101.246.206.115"
  }, {
    "id": 3,
    "first_name": "Osbert",
    "last_name": "Crayk",
    "email": "ocrayk2@foxnews.com",
    "gender": "Male",
    "ip_address": "58.205.141.250"
  }, {
    "id": 4,
    "first_name": "Else",
    "last_name": "Archambault",
    "email": "earchambault3@theglobeandmail.com",
    "gender": "Female",
    "ip_address": "149.207.219.1"
  }, {
    "id": 5,
    "first_name": "Chelsie",
    "last_name": "Castelyn",
    "email": "ccastelyn4@msu.edu",
    "gender": "Female",
    "ip_address": "121.139.1.99"
  }, {
    "id": 6,
    "first_name": "Cairistiona",
    "last_name": "Sorrill",
    "email": "csorrill5@wordpress.com",
    "gender": "Female",
    "ip_address": "112.189.22.47"
  }, {
    "id": 7,
    "first_name": "Adham",
    "last_name": "Heino",
    "email": "aheino6@list-manage.com",
    "gender": "Male",
    "ip_address": "149.74.192.200"
  }, {
    "id": 8,
    "first_name": "Jemima",
    "last_name": "Leaves",
    "email": "jleaves7@blogspot.com",
    "gender": "Agender",
    "ip_address": "200.48.63.233"
  }, {
    "id": 9,
    "first_name": "Jill",
    "last_name": "Poller",
    "email": "jpoller8@ebay.com",
    "gender": "Female",
    "ip_address": "21.135.168.251"
  }, {
    "id": 10,
    "first_name": "Marsh",
    "last_name": "Ebbage",
    "email": "mebbage9@time.com",
    "gender": "Male",
    "ip_address": "218.249.56.29"
  }]