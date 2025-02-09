import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik'
import React from 'react'
import InputBox from '../../components/InputBox';
import CustomBtn from '../../components/CustomBtn';
import { signupValidationSchema } from './utils.js';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {

    const navigation = useNavigation()

    const loginInitialValue = {
        number: '',
    }

    const handleSign = (values) => {
        console.log("sign Data:", values);
    }

    return (
        <View style={styles.loginContainer}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoSize}>What's your mobile number</Text>
                <Formik
                    initialValues={loginInitialValue}
                    validationSchema={signupValidationSchema}
                    onSubmit={handleSign}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
                        <View style={styles.formContainer}>
                            <InputBox
                                placeholder="Mobile Number"
                                onChangeText={handleChange('number')}
                                onBlur={handleBlur('number')}
                                value={values.number}
                                touched={touched.number}
                                errors={errors.number}
                                maxLength={10}
                                keyboardType={'numeric'}
                            />

                            <CustomBtn btnTitle="Sign Up" onPress={handleSubmit} disabled={!isValid} />
                        </View>
                    )}
                </Formik>
                <TouchableOpacity style={styles.email}>
                    <Text style={{ fontSize: 15 }}>Sign up with email</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.txtCon}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        alignItems: "center"
    },

    logoSize: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 20
    },

    logoContainer: {
        flex: 0.8,
        marginTop: 100
    },

    txtCon: {
        flex: 0.2,
        justifyContent: 'flex-end',
        marginBottom: 15

    },

    email: {
        alignSelf: 'center',
        marginTop: 20
    }
})
