import { StyleSheet, Image, View, Text } from 'react-native';
import { Formik } from 'formik'
import React from 'react'
import InputBox from '../../components/InputBox';
import CustomBtn from '../../components/CustomBtn';
import { signupValidationSchema } from './utils.js';

const Signup = () => {

    const loginInitialValue = {
        number: '',
    }

    const handleSign = (values) => {
        console.log("sign Data:", values);
    }

    return (
        <View style={styles.loginContainer}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoSize}>Signup with your mobile number</Text>
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
            </View>
            <View style={styles.txtCon}>
                <Text>Login</Text>
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
        justifyContent: "center"
    },

    txtCon: {
        flex: 0.2,
        marginBottom: 20
    }
})
