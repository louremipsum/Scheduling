import {useRouteError} from "react-router-dom"
import {React} from 'react'
import { createStyles, Stack, Title,Text } from '@mantine/core'


export default function ErrorPage(){
    const error = useRouteError();
    console.error(error);

 const useStyles = createStyles({
    main:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    }
 });

 const {classes} = useStyles(); 

    return(
        <Stack  className={classes.main} align="center" dir="column" spacing="xl" p={8} m={128}>
            <Title order={1}>Oops</Title>
            <Text>Sorry, An unexpected error occured.</Text>
            <Text italic color="dimmed">{error.statusText || error.message}</Text>
                    
        </Stack>
    );
}