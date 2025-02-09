import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik'
import React from 'react'
import { loginValidationSchema } from './utils.js';
import InputBox from '../../components/InputBox';
import CustomBtn from '../../components/CustomBtn';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const navigation = useNavigation()

    const loginInitialValue = {
        username: '',
        password: ''
    }

    const handleLogin = (values) => {
        console.log("Login Data:", values);
    }

    return (
        <View style={styles.loginContainer}>
            <View style={styles.logoContainer}>
                <Image style={styles.logoSize} source={require('../../../assets/logoInsta.png')} />
                <Formik
                    initialValues={loginInitialValue}
                    validationSchema={loginValidationSchema}
                    onSubmit={handleLogin}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
                        <View style={styles.formContainer}>
                            <InputBox
                                placeholder="Username, email address or mobile number"
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                                touched={touched.username}
                                errors={errors.username}
                            />

                            <InputBox
                                placeholder="Password"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                touched={touched.password}
                                errors={errors.password}
                                secureTextEntry={true}
                            />
                            <CustomBtn btnTitle="Login" onPress={handleSubmit} disabled={!isValid} />
                        </View>
                    )}
                </Formik>
                <TouchableOpacity style={styles.forgot}>
                    <Text style={{ fontSize: 15 }}>Forgotten Password?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.txtCon}>
                <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                    <Text>Create new account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent:'center'
    },

    logoSize: {
        width: 130,
        height: 120,
        resizeMode: "contain"
    },

    logoContainer: {
        flex: 0.8,
        justifyContent: "center"
    },

    txtCon: {
        flex: 0.2,
        justifyContent:'flex-end',
        marginBottom:15
    },

    forgot: {
        alignSelf: 'center',
        marginTop: 20
    }
})
