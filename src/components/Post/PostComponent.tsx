import { Text, View, Image } from "react-native";
// import profilePicture from '../../screens/Feed/profile.png';

export function PostComponent(props:any){
    return(
        <View style={{flexDirection: 'column', width: 358}}>
          <View style={{flexDirection: 'column', width: '100%', padding:15, height: 126, justifyContent: 'space-between', borderWidth: 1, borderColor:'rgba(0, 0, 0, 0.20)', borderTopEndRadius:8,borderTopStartRadius:8}}>
            <View style={{flexDirection: 'row', alignItems:'center', gap: 10}}>
              <Image source={require('../../screens/Feed/profile.png')} style={{width:40, height: 40, borderRadius: 200}} />
              <Text style={{fontSize: 16}}>@{props.nickname}</Text>
            </View>
              <Text style={{fontSize:16, color: '#30323D'}}>{props.content}</Text>
              <View style={{width: '100%', flexDirection: 'row'}}>
                {
                    props.tags.map((tag:any, index: number) => (
                        <Text key={index} style={{fontSize:12, color: 'rgba(136, 136, 136, 1)'}}>{tag}</Text>
                    ))
                }
              </View>
          </View>
        <View style={{width: '100%', height: 36, backgroundColor: '#5C80BC', borderBottomEndRadius:8,borderBottomStartRadius:8, borderWidth: 1, borderColor:'rgba(0, 0, 0, 0.20)'}}>
          <Text>Curtir</Text>
        </View>
        </View>
    )
}