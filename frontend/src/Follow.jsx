import React from "react";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './styles.css'


const theme = createTheme();


function Follow() {
    const [status, setStatus] = React.useState("Follow");
    function alterState() {
        if (status === "Follow") {
            setStatus("Unfollow")
        } else {
            setStatus("Follow")
        }
    }

const ButtonStyle = {
    background : status === "Follow" ? 'blue' :'gray',
    color : status === "Follow" ? 'white' :'black',
}

    return (
        <div style={{
            textAlign: 'center',
        }} >
            <ThemeProvider theme={theme}>
                <Button 
                    sx={{ '&.MuiButton-root': ButtonStyle }} 
                    variant="text" 
                    onClick={alterState}>
                        {status}
                </Button>
          </ThemeProvider>
        </div>
    )
}


export default Follow


// import React from "react";
// import Button from '@mui/material/Button';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//     components: {
//         MuiButton: {
//             variants: [
//                 {
//                     props: { variant: 'condicional' },
//                     style: {
//                         color: 'red',
//                         fontStyle: 'italic',
//                     },
//                 },
//                 {
//                     props: { variant: 'condicionalAtivo' },
//                     style: {
//                         color: 'blue',
//                         fontWeight: 'bold',
//                     },
//                 },
//             ],
//         },
//     },
// });

// function Follow(props) {
//     const [status, setStatus] = React.useState("Follow");

//     function alterState() {
//         if (status === "Follow") {
//             setStatus("Unfollow")
//         } else {
//             setStatus("Follow")
//         }
//     }

//     const condicao = status === "Follow";

//     return (
//         <div style={{
//             textAlign: 'center',
//         }}>
//             <ThemeProvider theme={theme}>
//                 <Button
//                     sx={{ variant: condicao ? 'condicionalAtivo' : 'condicional' }}
//                     variant="text"
//                     onClick={alterState}
//                 >
//                     {status}
//                 </Button>
//             </ThemeProvider>
//         </div>
//     );
// }

// export default Follow;
