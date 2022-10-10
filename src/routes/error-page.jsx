import {useRouteError} from "react-router-dom"
import {React} from 'react'
import { createStyles, Stack, Title,Text } from '@mantine/core'


export default function ErrorPage(){
    const error = useRouteError();
    console.error(error);

 const useStyles = createStyles({
    main:{
        width: "100vw",
        height:"100vh"
    }
 });

 const {classes} = useStyles(); 

    return(
        <Stack  className={classes.main} align="center" dir="column" spacing="xl" p={8} m={8}>
            <Title order={1}>Oops</Title>
            <Text>Sorry, An unexpected error occured.</Text>
            <Text italic color="dimmed">{error.statusText || error.message}</Text>
                    
        </Stack>
    );
}