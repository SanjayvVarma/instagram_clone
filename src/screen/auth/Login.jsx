import { StyleSheet, Image, View, Text } from 'react-native';
import { Formik } from 'formik'
import React from 'react'
import loginValidationSchema from './utils.js';
import InputBox from '../../components/InputBox';
import CustomBtn from '../../components/CustomBtn';

const Login = () => {

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
                    {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
                        <View style={styles.formContainer}>
                            <InputBox
                                placeholder="Username"
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

                            <CustomBtn btnTitle="Login" onPress={handleSubmit} />
                        </View>
                    )}
                </Formik>
            </View>
            <View style={styles.txtCon}>
                <Text>Sign Up</Text>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        alignItems: "center"
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
        marginBottom: 20
    }
})
