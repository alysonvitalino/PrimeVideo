import { Image, StyleSheet, TouchableOpacity } from "react-native"
import MovieTheWhell from "../../assets/movies/the_wheel_of_time.png"

export const MoviesCard = (props) => {

    return (
        <TouchableOpacity>
            <Image style={styles.img} source={props.movieURL}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img: {
        marginRight: 20,
    },
})