import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class Status extends Component {
    render() {
        return (
            <>
                <View style={styles.viewContainer}>
                    <Image style={styles.image} source={{ uri: "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" }} />
                    <View style={{ elevation: 10 }}>
                        <Text style={styles.status}>My Status</Text>
                        <Text style={styles.msg}>Tap to add status update</Text>
                    </View>

                </View>
                <Image style={styles.plus} source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxARERETEREQEBAREREQEREXFhARFhERFhYXFxYWGBYZHioiGR4nHhYYIzMjJystMDAwGCE2OzYvOiowMC0BCwsLDw4PHBERGy8nIiEvLy8vMS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAOkA2AMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAAAQYHBQIDCAT/xABHEAACAQIDAwUKDQIGAgMAAAAAAQIDEQQSIQUGMQcTQVGRFBYiNWFxgYOhsyMyQlJTVGJykpOxwdI00WNzorLC8BfhFTND/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAMEBQYCAf/EADERAAICAAIIBAUEAwAAAAAAAAABAgMEEQUSITFBUXGREzNSYRUygcHRFCKx8ELh8f/aAAwDAQACEQMRAD8A3EAAAAAAAAAAAAAAAEXFwCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACACQRc4W8O9OGwatUlnqtXjSjrJ+V/NXlZ5lJRWbew8znGC1pPJHdZxtrbz4PDXVWrHMvkRvOXYuBlu3t9sXibxUnQpv5FN6tfanxfmVislCzHpbIL6sy7tJpbK19X+DScfyodFDD3Xz6krf6Ir9yv4vf8A2hUvapGmvsQjp6XdlVBTlirZb5FCeMvnvl22fwdervLjp/GxNbtt+h8f/nMX9Yq/jl/c5wIvElxb7kPiz9T7s69LeXHR+Liay87Uv1Onhd/sfTtepCouqcIu/pViqg9K6xbpM9Rvtjuk+5pOz+VDgq+Ha+3Tlf8A0SX7lw2TvRg8TZUqscz+RK8Jdj4mDHpliGOsXzbS1XpK2PzZP+T9HkmKbB31xeGtFzdakvkVHql9mfFeZmm7u71YbGK1OWSqleVKWkl5V0SXlRoVYmuzYtjNWjGV3bFsfJ/3ad8EXJLBaAAAAAAAAAAAAABABJ5Yk0tXol0mUb975Ou5UMPJqgm41Ki41H1J/N/UiuujVHNkF98aY60v+nQ3w3+tmpYOSuvBnX4pdah1/e7DOKspSblJuUpO8pNttvrbZ5IMS26Vrzkc9diJ3Szl25AAERAACUAQC6bq7hzxMY1q8nSoy1hFLw5rr1+Kvay3/wDjrZ+W2Wrf53OVLlqGDsms93Uu14C6cdbd1McBdN6tw54aMqtCUqtJayi14cF16fGXtKYQ2VSreUkV7aZ1S1ZrIgEkEZESe4VJRkpRbjKLvGSbTT600fMA+ml7n7/Xy0sZJJ/FhX4J9SqdC+92mjRd9ejoPzeXncTfF0HGhiJXoPwadR8aT6m/m/oaWGxf+M+5rYTH7dS19H+fyayDyuGmt9b9Z6NM2AAAAAAAAAAQyTgb4bdWDw8pqzqztClHrm+nzJanmUlFZvcjzOahFyluRVuUjelrNhKMtWrV5roTt8Gn5enyaGa3PVSpKUpSk3KUm5Sb4tt3bPBg3WuyWszmcRdK6es/p7EkAERAAAADrbr4BYjF0KUleMp3kuuMU5New5JZOTzxjh/W+7kSVJOcU+aJaEnbFPmjbIQSSSVklZLqR6sCToTqjxKCaaeqas15DBt6cAsPi69KOkY1E4rqjJKSXtN8MQ5Q/GOI9V7uJQx6Won7mbpNLw0/crhABkmEAAAAAAaXyb703y4StLVK1Cb6Ur+A35uHmsaOj84U6ji1KLcZRalGS4prVM3Hc/bqxmHjN2VWHwdWPVNdPma1NbBXuS1Jb1uNzR+Jc14ct63e6/0d8EEl80wAAAAACDFN/wDbXdOLkou9Oi3Sh1Nr48u3T0Gpb27T7mwlWonaeVQh9+Wi/UwdGdj7MkoL6mTpO7JKtcdr+xAAMsxgAAAAAAWTk88Y4f1vu5FbLJyd+McN633ciWnzI9UTYfzY9UbcSQSdAdSDEOUTxjiPVe7ibeYhyieMcR6r3cSjj/LXUztJ+UupWwAZBggAAAAAAs+4G2u5sVBSdqVZqlPqTfxJdunpKwSe4TcJKS4Elc3XNSXA/SKJOLujtPunCUqrd5Zck/vx0Z2joYtNJridTGSklJcQAD6egAADNuV3G/09BPjzlafotGH6y7DNS1cpWJ5zH1FfSnCFNeSyu/bIqphYqWtbI5rGT175P6dgASVyqQDp7O3fxddXo0KtSPzvBjF+aUmkz+7vJ2n9Vn+PD/zParm90X2JVTY1movsyvAsPeTtP6rP8eH/AJjvK2n9Vn+PD/zPvhWel9j74FvpfZleLJyd+McN633cjx3k7T+qz/Hh/wCZ2tzN18dQxtGrVoSp0485mk50Xa8JJaKTfFklNU1ZHOL3rgS0U2K2LcXvXBmrkkEm6dIDEOUTxjiPVe7ibeZRvpuxjq+NrVaWHlUpz5vLLNRV7QinpKSfFFPGxcq0kuJQ0jCUqkorPaUMFh7ytp/VZ/jw/wDMd5O0/qs/x4f+ZleDZ6X2MXwLfS+zK8Cw95O0/qs/x4f+Y7ydp/VZ/jw/8x4VnpfYeBb6X2ZXgdTaO7+LoK9ahVpx6ZaSivPKLaRyzw4uLyaI5RcXlJZAkgk+Hk0jkix39RQb4Za0PTdT/SPaaUYtybYrJj6avpUhOm/LdXXtSNpNrBSzqS5HRaPnrUJctgABbLoAABge9VXPjcS/8Zrssv2OQdHeD+qxH+bU/wBzOcc7Z8z6s5Sz55dX/ILpyd7txxNSVasr0aTUYx6KlTjr5Fp52ylmy8mGXuCFuPOVc3nzsnwcFOzbw2lnAVxsu/dw2lqhBJJJJJKyS0SR7CJNs6IgEgAgWJABCJAABFiQAQCQAQCQAfOcU000mmrNPW5kfKJu3HCzjWoxy0asmpR6KdS19PI1fsNfKjynpdwTvx5yll8+ZFfFVqVbz4bSrjK4zpefDajGyQEYRzR1t1KmXG4Z9VZLt0/c3w/Pm7/9Vh/82n/uR+gzW0f8kl7m5ovy5dfsAAXzTBBIAMC3qp5cbiV/jN9qv+5yS08pGH5vH1X0VIwqL0xs/amVY565ZWSXuctfHVtkvdgu/JvvHDDylQrSUaVSScJPRQqcGm+hPT0rylIJFVjrlrIU2yqmpxP0imSYNszejG4eKjSrSUFwhLLNLzX4H9/f/tH6aP5dM01j68tqZrrSdWW1M2oGK9/+0fpo/lwHf/tH6aP5cD7+vq9z78Tp5M2oGK9/+0fpo/lwOzuhvdjcTjKNKrUjKnPPmShFXtCTWvnR6jja5NJZ7T3DSFU5KKz2moghElsvAAy7fDe/G4fGVqVKpGNOGTKnCMuMIt6vysittjUs5EN98aY60jUQYr3/AG0fpYfl0x3/AO0fpo/lwK/6+r3KnxOnkzagYr3/AO0fpo/lwHf/ALR+mj+XTH6+r3HxOnkzaNEZLykbyQxE4UKMlKlTk3OS1UqvBJPpS19L8hwtp70Y3Epxq1p5Ho4RywTXltxOKVsRjNeOrFbCpi8f4kdSCyT3gAkoGYdXdWnmxmGj11k+zX9jfTFOTfDc5j6XVTjUqP0Ky9rRtZr4COVbfNm7oyOVTfNgAF40gAADNOV3A64esl86jN9kof8ALtM3N33x2Z3Tg61NK81FTh9+Oq/QwlGPjq9WzPmYGkq9W7W9RBJAKRngAAAAAAsnJ54xw3rfdyK2WTk88Y4b1vu5EtPmR6omw/mx6o24kgk6A6kGIconjHE+q93E28xDlE8Y4j1Xu4lHH+WupnaT8pdSuEAGQYIAAAAAAJIJYBpHJDgv6iu18yjB9sp/8Ow0o4e5+zO5sHRptWm455/fk7te2x3Dfw8NStROowtfh1Ri/wC5gAExOAAAQzEd+tjdy4qVlanVbq0+pa+FH0P2NG3Fd312D3ZhpRivhqfwlF/aXGPma07CtiqvEhs3raVMZR41eS3rajECD3KLi2pJxkm00+Ka4pngwznAAAfAAAAWTk78Y4b1vu5FbLJyd+McN633ciWnzI9UTYfzY9UbcSQSdAdSDEOUTxjiPVe7ibeYhyh+McR6r3cSjj/LXUztJ+UupWwAZBggAAAAAElj3E2L3Vio5lenSaq1Op2fgx9L9iZXYxbaSTcm0klq23wSNu3M2CsHh4xklz1T4Ss/tPhHzJadvWWsLT4k9u5F3BYfxbM3uW1/gsRJBJtnRAAAAAAAhkgAzPlK3Xs5YuitH/8AfBdH+Iv37eszk/R84JpppNNWaeqaMj343OlhpOtQi5YeTvKK1dJ+b5v6GZi8NlnZH6/kx8fhHm7YfVff8lLBJBmmQAAADsbqY6OHxlCrJ2jGplk+qMk4t+044PUZOLTXA9Qk4yUlwP0infzEmT7qb+yoQjRxMZ1KcdIVI2c4x6E18pLt85b/APyBs21+fl93mq9/9ptwxNclnnkdHXjKZx1tZLqWjgYLvZjliMZXqR1jKpli+uMUop+wse9m/wBKvCVHDRnSpS0nUlaM5R6Ul8lPt8xRSjjL4zyjEzdIYqNmUIbUuIABQMwAAAAF03G3OeJkq+IjbDrWMXo6r83zf1JK65WS1YktVUrZasTpcm2613HF1lw1oQfS+mo/27eo0xHmEEkkkkkrJLRJLoPZu1VKqOqjpKKY0w1YgAEhMAAAAAAAAAD5zgmmmk01Zp63R9AAZjvhuC45q2Di2tZSocWut0/J9ns6jPJJq6aaadmndNPqaP0hYre8m6GGxl5Nc3WtpVild/eXyjPvwSl+6vfyMvE6PUv3VbHy5mIgsO3N0MXhbuUOch9LT1VvKuMSvJmbOEoPKSyZjzrlB5SWTABJ4PBBJBIBABIBAJAPoJs20ldtuySu22+hJHf2Huhi8U04w5um/wD9al0reRcZGnbtbo4fB2klzla2tWSV115V8ktU4Wdm3cuZcw+Cst27lzf2KrufuC3lrYyLS0lChwb6ucfV9nt6jS6cFFJJJJKyS0SR6sSa1VUallE3KaIUx1YgAEpMAAAAAAAAAAAAAAACCQAQ0V7a252CxDcpUlCb41Kd6cm+t20l6UWIHmUIyWTWZ5lCM1lJZmX7R5MJq7oVoyXRGorP8Uf7Fexe5G0ad74dzXXCVKd/Re/sNxBVlgqnuzRTno6mW7NdD8+VdjYqHxsPiI+eE/7Hx7gr/RVPwVP7H6JBH8Pjwk+xB8Kj632R+e6WxcVP4uHxEvNCX9jqYXcjaM7Ww7guucqcLei9/YbgD6tHwW9s9R0XWt8mZhs7kwqOzr14xXTGmm/9Uv7Fu2VufgcO1KFJTmuFSbc2n1q+i9CLCCzDD1w3It14Smv5Y/cgEgmLAAAAAAAAAAAAAAAAAAAAAAB/LLGQVWNK/hzhOa6rQcU9evw0e8RiYU45pyUY3Sv5W1Fe1pAH3B8KWJhLNlknklkl5JWTt7T6511oA9A+FLEwnmyyTyycJeSS4o84vFwp5c1/DqQpq2vhTdo38lwD+kHnN2dYzrrQB6BCkj44nEwpQlOpJQhBOUpPgkgD7g58tq0lPI3NSUOck+arZYRtfw55csNE9JNM/nlvHhFHM6rSTaacKylGyUnKUMuaMbNPM1azTvZgHYBynt3DKU484rwTb8GdpWaTUJWtUackmo3abXWRHeDCvL8JrN21jUWR5slql4/BPN4Np210AOsDl0tt4eUak1UShSjnnJqcEqevhrMlmjo7SjdOx/fRqxnGMou8ZxUovri1dMA+oAAAAAAAAAAAAAAB4qK6a600ewAU6G6k3TySjh4xhRxFOjBXnzcpqmqcnNwTk1kk8zV1dcXqea+7Faccku55xp89Knmc3zsqleFbw04NQXguN1m438hch1gFOxu6s558tPDqLrc9zanOiqilScHGUo07rI3eLs73fxXqfbE7sycarhChKrOuqsJzcvBiqUacXK8XzlmpPK9HfinqWr/v6E/+gCo4rdqo+dy0sJNSrVqmWWaKqc7G2aaUHaUG3bje71ieZbq1XB03OnrUpTeLTlHETUXBuL8HS2XTwne/RxdvZKAK/itlVZ0qEHTw0lQcJOi5TVKtaEotNZHlSbUlpLVek59bdarOevMKOaUpTWdyrxlOEubmsukYqLS1lfT4ut7ev+9pKAK/sTYLw9WU1zajJYhNRum4zxEqlFcOEKbUfJay0PvtfZLnRpUqdpqnUhU5upUqRVXLdpSqpSkrO0r2esUdkMArFHYuIhKk06bnTinOq6la9ZqEoqlODTWW7Xhtt2jwvqfKjsbGJyqNYbuipCrSqydSrUjJTUfDXwUbZcqSp8GvlX1LYGAVrD7NxcJt5cNJUqap4dupV8GCy3UqapaSnl1nmdtLJ2d/5sNu1XhGpC9HJiMvOxbnPmYRqSnlptxvVupWvLLrr5C3MAFZpbr8W6tSm1Nc3CLjVhClTvzUHzsXezefgrOyXxU32tkYaVKhRpzlnlTpQpylpq4xSb0S/Q/sEQCQAAAAAAAAf//Z' }} />
                <View style={styles.updates}>
                    <Text style={{ fontWeight: 'bold', paddingHorizontal: 20, marginTop: 10 }}>Recent updates</Text>
                </View>

                <View style={styles.story}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10,marginTop:8,marginBottom:9 }}>
                        <Image style={[styles.image, { borderColor: '#93D9CC', borderWidth: 4, margin: 3 }]} source={{ uri: "https://i.pinimg.com/474x/4c/8c/bc/4c8cbcc2aa3d9b5c155a5dcf78c27434.jpg" }} />
                        <View style={{ borderBottomWidth: 0.3, borderBottomColor: "grey", flexDirection: 'row', flex: 1 }}>
                            <View style={{ flexDirection: 'column', padding: 9, marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Padose wale chachi</Text>
                                <Text style={{ color: "grey" }}>12 minutes ago</Text>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={styles.story}>
                    <View style={{ flexDirection: 'row',paddingHorizontal:10 }}>
                        <Image style={[styles.image, { borderColor: '#93D9CC', borderWidth: 4, margin: 3 }]} source={{ uri: "https://www.whatsappimages.in/wp-content/uploads/2021/01/1080p-Hindi-Love-Status-Wallpaper-Download-2.jpg" }} />
                        <View style={{ borderBottomWidth: 0.1, borderBottomColor: "grey", flexDirection: 'row', flex: 1 }}>
                            <View style={{ flexDirection: 'column', padding: 9, marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Chotu Bagal Wala</Text>
                                <Text style={{ color: "grey" }}>20 min ago</Text>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={styles.story}>
                    <View style={{ flexDirection: 'row',paddingHorizontal:10 }}>
                        <Image style={[styles.image, { borderColor: '#93D9CC', borderWidth: 4, margin: 3 }]} source={{ uri: "https://funkylife.in/wp-content/uploads/2021/02/hindi-attitude-status-images-funkylife-13-910x1024.jpg" }} />
                        <View style={{ borderBottomWidth: 0.3, borderBottomColor: "grey", flexDirection: 'row', flex: 1 }}>
                            <View style={{ flexDirection: 'column', padding: 9, marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Dukhi Atma</Text>
                                <Text style={{ color: "grey" }}>1 Hour ago</Text>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={styles.story}>
                    <View style={{ flexDirection: 'row',paddingHorizontal:10 }}>
                        <Image style={[styles.image, { borderColor: '#93D9CC', borderWidth: 4, margin: 3 }]} source={{ uri: "http://www.status.desi/images/sad%20status%20New.jpg" }} />
                        <View style={{ borderBottomWidth: 0.3, borderBottomColor: "grey", flexDirection: 'row', flex: 1 }}>
                            <View style={{ flexDirection: 'column', padding: 9, marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Panwadi wale Bhaiya</Text>
                                <Text style={{ color: "grey" }}>2 Hour ago</Text>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={styles.story}>
                    <View style={{ flexDirection: 'row',paddingHorizontal:10 }}>
                        <Image style={[styles.image, { borderColor: '#93D9CC', borderWidth: 4, margin: 3 }]} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Sgwd-OHukxJfCNx8J8B0up-rA5usxKd8yw&usqp=CAU" }} />
                        <View style={{ borderBottomWidth: 0.3, borderBottomColor: "grey", flexDirection: 'row', flex: 1 }}>
                            <View style={{ flexDirection: 'column', padding: 9, marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Home 2nd </Text>
                                <Text style={{ color: "grey" }}>4 Hour ago</Text>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={styles.story}>
                    <View style={{ flexDirection: 'row',paddingHorizontal:10 }}>
                        <Image style={[styles.image, { borderColor: '#93D9CC', borderWidth: 4, margin: 3 }]} source={{ uri: "https://i.pinimg.com/736x/9f/6c/f6/9f6cf61836a3217f0f0091286d7b40ef.jpg" }} />
                        <View style={{ borderBottomWidth: 0.3, borderBottomColor: "grey", flexDirection: 'row', flex: 1 }}>
                            <View style={{ flexDirection: 'column', padding: 9, marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Bhaiyyya </Text>
                                <Text style={{ color: "grey" }}>10 Hour ago</Text>
                            </View>
                        </View>

                    </View>
                </View>


                <Image style={styles.cam} source={{ uri: "https://i.gadgets360cdn.com/large/whatsappcameralogo_small_1573635549607.jpg" }} />

            </>
        )
    }
}


const styles = StyleSheet.create({
    viewContainer: {
        padding: 10,
        justifyContent: "flex-start",
        alignItems: 'center',
        flexDirection: "row",
        backgroundColor: '#FEFEFE'
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    plus: {
        height: 25,
        width: 25,
        position: 'absolute',
        borderRadius: 18,
        margin: 51
    },
    story: {
        backgroundColor: "#FEFEFE",
        // flex:1,
        // padding:15
    },
    updates: {
        height: 40,
        backgroundColor: "#F4F4F4",
    },
    msg: {
        fontSize: 15,
        marginLeft: 10
    },
    cam: {
        height: 70,
        width: 70,
        position: "absolute",
        bottom: 0,
        right: 0,
        margin: 15,
        borderRadius: 45
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 60,
    },
    status: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
        marginTop: -5
    }
})