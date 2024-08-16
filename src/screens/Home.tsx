/* eslint-disable react-native/no-inline-styles */
// @ts-nocheck
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { Component } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  carouselData1,
  carouselData2,
  data,
  data1,
  flatlistData,
  fonts,
  stepperData,
} from '../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StarRating from 'react-native-star-rating-widget';
import Swiper from 'react-native-swiper';

export class Home extends Component {
  renderLogoAndSearchbar = () => {
    return (
      <View
        style={{
          backgroundColor: '#422B62',
          borderBottomRightRadius: responsiveFontSize(3),
          borderBottomLeftRadius: responsiveFontSize(3),
          paddingTop: responsiveHeight(1),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: responsiveWidth(3),
            marginRight: responsiveWidth(6.5),
          }}>
          <Image
            resizeMode={'stretch'}
            source={require('../assets/logo.png')}
            style={{ height: responsiveHeight(5.6), width: responsiveWidth(37) }}
          />
          <View>
            <TouchableOpacity onPress={() => { }}>
              <Image source={require('../assets/cartIcon.png')} style={{}} />
            </TouchableOpacity>
            <View
              style={{
                height: responsiveWidth(4.1),
                width: responsiveWidth(4.1),
                backgroundColor: '#C35F16',
                borderRadius: responsiveWidth(4),
                position: 'absolute',
                right: responsiveWidth(-1.2),
                top: responsiveHeight(-0.2),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: responsiveFontSize(1.2),
                  fontFamily: fonts.poppinsRegular,
                  includeFontPadding: false,
                }}>
                2
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#2F1B4B',
            marginHorizontal: responsiveWidth(3),
            borderRadius: responsiveFontSize(7),
            height: responsiveHeight(6),
            paddingHorizontal: responsiveWidth(4),
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: responsiveHeight(1.6),
            marginBottom: responsiveHeight(1.6),
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '98%',
            }}>
            <Image
              source={require('../assets/searchIcon.png')}
              style={{
                height: responsiveHeight(2.4),

                justifyContent: 'center',
                alignItems: 'center',
                marginTop: responsiveHeight(0.3),
              }}
            />
          </View>

          <TextInput
            editable={true}
            placeholder="Search for any item"
            style={{
              height: '98%',
              fontSize: responsiveFontSize(1.8),
              paddingLeft: responsiveWidth(3),
              flex: 1,
              color: '#FFFFFF',
            }}
            onChangeText={() => { }}
            placeholderTextColor={'#8F7AAC'}
          />
        </View>
      </View>
    );
  };

  renderDeliveryAddressContainer = () => {
    return (
      <View style={styles.container3}>
        <View style={styles.deliverAndChangeBtnContainer}>
          <Text style={styles.deliveryText}>DELIVER TO</Text>
          <TouchableOpacity style={styles.changeBtn}>
            <Text style={styles.changeText}>CHANGE</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/workIcon2.png')}
            style={{
              height: responsiveFontSize(5),
              width: responsiveFontSize(5),
              borderRadius: responsiveFontSize(6),
            }}
          />
          <View style={{ marginLeft: responsiveWidth(2) }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.workText1}>Work</Text>
              <AntDesign
                name={'down'}
                color={'#B4923A'}
                size={responsiveFontSize(1.8)}
                style={{ marginLeft: responsiveWidth(0.5) }}
                onPress={() => { }}
              />
            </View>
            <Text style={styles.workText2}>
              Noor Inc., Banjara Hills, 500032, Hyderabad
            </Text>
          </View>
        </View>
      </View>
    );
  };

  renderShopByCategory = () => {
    return (
      <View
        style={{
          paddingLeft: responsiveWidth(3),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginRight: responsiveWidth(3),
            marginBottom: responsiveHeight(1.6),
          }}>
          <Text style={styles.freshText}>Shop By Category</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={flatlistData}
          renderItem={this.renderFlatlistData}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  renderBestSeller = () => {
    return (
      <View
        style={{
          marginHorizontal: responsiveWidth(3),
          marginTop: responsiveHeight(3.5),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.freshText}>Best Seller</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: responsiveHeight(1.6),
          }}>
          {this.renderFirstCard(data1[2])}
          {this.renderFirstCard(data1[3])}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: responsiveHeight(2),
          }}>
          <TouchableOpacity
            style={{
              height: responsiveFontSize(4),
              width: responsiveFontSize(4),
              borderRadius: responsiveFontSize(5),
              backgroundColor: '#EFE3CF',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign
              name="left"
              size={responsiveFontSize(1.8)}
              color={'black'}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: responsiveWidth(3),
            }}>
            <Text
              style={{
                color: '#27292C',
                fontFamily: fonts.poppinsRegular,
                fontSize: responsiveFontSize(1.5),
                includeFontPadding: false,
              }}>
              1
            </Text>
            <Text
              style={{
                color: '#27292C',
                fontFamily: fonts.poppinsRegular,
                fontSize: responsiveFontSize(1.4),
                includeFontPadding: false,
                marginHorizontal: responsiveWidth(0.5),
              }}>
              /
            </Text>
            <Text
              style={{
                color: '#27292C',
                fontFamily: fonts.poppinsRegular,
                fontSize: responsiveFontSize(1.5),
                includeFontPadding: false,
              }}>
              2
            </Text>
          </View>
          <TouchableOpacity
            style={{
              height: responsiveFontSize(4),
              width: responsiveFontSize(4),
              borderRadius: responsiveFontSize(5),
              backgroundColor: '#6D4F03',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign
              name="right"
              size={responsiveFontSize(1.8)}
              color={'#FFFFFF'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderAuthenticRecipes = () => {
    return (
      <View
        style={{
          backgroundColor: '#342052',
          marginHorizontal: responsiveWidth(3),
          alignItems: 'center',
          paddingHorizontal: responsiveFontSize(2),
          paddingVertical: responsiveFontSize(2),
          borderRadius: responsiveFontSize(2),
        }}>
        <FlatList
          data={data}
          renderItem={each => this.renderItem(each)}
          numColumns={2}
        />
      </View>
    );
  };

  renderFreshFromOurBakery = () => {
    return (
      <View
        style={{
          marginHorizontal: responsiveWidth(3),
          marginTop: responsiveHeight(4),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.freshText}>Fresh From Our Bakery</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: responsiveHeight(1.6),
          }}>
          {this.renderFirstCard(data1[0])}
          {this.renderFirstCard(data1[1])}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: responsiveHeight(2),
          }}>
          <View
            style={{
              height: responsiveFontSize(4),
              width: responsiveFontSize(4),
              borderRadius: responsiveFontSize(5),
              backgroundColor: '#BCA98F',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign
              name="left"
              size={responsiveFontSize(1.8)}
              color={'black'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: responsiveWidth(2),
            }}>
            <Text
              style={{
                color: '#27292C',
                fontFamily: fonts.poppinsRegular,
                fontSize: responsiveFontSize(1.5),
                includeFontPadding: false,
              }}>
              1
            </Text>
            <Text
              style={{
                color: '#27292C',
                fontFamily: fonts.poppinsRegular,
                fontSize: responsiveFontSize(1.4),
                includeFontPadding: false,
                marginHorizontal: responsiveWidth(1),
              }}>
              /
            </Text>
            <Text
              style={{
                color: '#27292C',
                fontFamily: fonts.poppinsRegular,
                fontSize: responsiveFontSize(1.5),
                includeFontPadding: false,
              }}>
              2
            </Text>
          </View>
          <View
            style={{
              height: responsiveFontSize(4),
              width: responsiveFontSize(4),
              borderRadius: responsiveFontSize(5),
              backgroundColor: '#6D4F03',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign
              name="right"
              size={responsiveFontSize(1.8)}
              color={'#FFFFFF'}
            />
          </View>
        </View>
      </View>
    );
  };

  renderLegacyOfPistaHouse = () => {
    return (
      <View
        style={{
          marginTop: responsiveHeight(3.5),
          backgroundColor: '#422669',
          paddingTop: responsiveHeight(4),
          paddingBottom: responsiveHeight(3),
          paddingHorizontal: responsiveWidth(3),
        }}>
        <Image
          resizeMode='stretch'
          style={{ width: '100%' }}
          source={require('../assets/pistaHouse1.png')}
        />
        <Text
          style={{
            marginTop: responsiveHeight(1.4),
            color: '#FFFFFF',
            fontFamily: fonts.playfairSemiBold,
            fontSize: responsiveFontSize(2.2),
            includeFontPadding: false,
          }}>
          A Legacy of Over{' '}
          <Text
            style={{
              color: '#BC9247',
              fontFamily: fonts.playfairSemiBold,
              fontSize: responsiveFontSize(2.2),
              includeFontPadding: false,
              fontWeight: '700',
            }}>
            25 Years
          </Text>
        </Text>

        <Text
          style={{
            marginTop: responsiveHeight(1.6),
            color: '#FFFFFF',
            fontFamily: fonts.poppinsLight,
            fontSize: responsiveFontSize(1.8),
            includeFontPadding: false,
            marginRight: responsiveWidth(3),
          }}>
          For over twenty years, we've honoured the{' '}
          <Text style={{ fontWeight: 'bold' }}>essence of tradition,</Text>
          infusing each dish with our passion and{' '}
          <Text style={{ fontWeight: '900' }}>
            authentic flavours since 1997.
          </Text>{' '}
        </Text>
        <Text
          style={{
            marginTop: responsiveHeight(1.6),
            color: '#FFFFFF',
            fontFamily: fonts.poppinsLight,
            fontSize: responsiveFontSize(1.8),
            marginRight: responsiveWidth(3),
            includeFontPadding: false,
          }}>
          What began as a humble endeavour has evolved into a culinary
          institution, renowned for our commitment to{' '}
          <Text style={{ fontWeight: 'bold' }}>
            preserving the essence of Hyderabadi cuisine.
          </Text>
        </Text>
        <TouchableOpacity style={styles.readMoreBtn}>
          <Text style={styles.ReadMoreText}>Read More</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderStores = () => {
    return (
      <View
        style={{
          backgroundColor: '#FFFAED',
          borderColor: '#E3DBC6',
          borderWidth: 1,
          marginHorizontal: responsiveWidth(3),
          paddingHorizontal: responsiveWidth(5),
          paddingVertical: responsiveHeight(3),
          flexDirection: 'row',
          borderRadius: responsiveFontSize(3),
          marginTop: responsiveHeight(2.2),
          justifyContent: 'space-between',
        }}>
        <View style={{ width: '43%' }}>
          <View>
            <Text style={styles.countriesNumber}>5</Text>
            <Text style={styles.countriesText}>Countries</Text>
          </View>
          <View style={{ marginTop: responsiveHeight(3) }}>
            <Text style={styles.countriesNumber}>80</Text>
            <Text style={styles.countriesText}>Awards Won</Text>
          </View>
        </View>
        <View style={{ width: '50%' }}>
          <View>
            <Text style={styles.countriesNumber}>50+</Text>
            <Text style={styles.countriesText}>Stores Worldwide</Text>
          </View>
          <View style={{ marginTop: responsiveHeight(3) }}>
            <Text style={styles.countriesNumber}>25M+</Text>
            <Text style={styles.countriesText}>Happy Customers</Text>
          </View>
        </View>
      </View>
    );
  };

  renderStepperItem = ({ item, index }: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={[
            {
              height: responsiveHeight(12),
              backgroundColor: '#E3BE80',
              justifyContent: 'center',
              alignItems: 'center',
              width: responsiveWidth(4),
            },
            index == 0 && {
              borderTopLeftRadius: responsiveFontSize(3),
              borderTopRightRadius: responsiveHeight(3),
            },
            index == 5 && {
              borderBottomLeftRadius: responsiveFontSize(3),
              borderBottomRightRadius: responsiveHeight(3),
            },
          ]}>
          <View
            style={{
              height: responsiveFontSize(0.8),
              width: responsiveFontSize(0.8),
              borderRadius: responsiveFontSize(2),
              backgroundColor: '#9A7629',
            }}>
            {index !== 5 && (
              <View
                style={{
                  height: responsiveHeight(7),
                  borderWidth: 0.8,
                  borderColor: '#B78C44',
                  backgroundColor: '#B78C44',
                  position: 'absolute',
                  zIndex: 999,
                  top: responsiveHeight(1.5),
                  left: responsiveWidth(0.6),
                }}
              />
            )}

            {index !== 0 && (
              <View
                style={{
                  height: responsiveHeight(7),
                  borderWidth: 0.8,
                  borderColor: '#B78C44',
                  backgroundColor: '#B78C44',
                  position: 'absolute',
                  zIndex: 999,
                  bottom: responsiveHeight(1.5),
                  left: responsiveWidth(0.6),
                }}
              />
            )}
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderStyle: 'dashed',
            borderColor: '#835B1D',
            width: responsiveWidth(6),
            marginHorizontal: responsiveWidth(1),
          }}
        />

        <View
          style={{
            height: responsiveFontSize(6.5),
            width: responsiveFontSize(6.5),
            borderRadius: responsiveFontSize(6),
            backgroundColor: '#BC9247',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#3C1306',
              fontFamily: fonts.poppinsSemiBold,
              fontSize: responsiveFontSize(1.8),
              includeFontPadding: false,
            }}>
            {item.year}
          </Text>
          {index == 0 && (
            <Text
              style={{
                color: '#8B6D2A',
                fontFamily: fonts.poppinsSemiBold,
                fontSize: responsiveFontSize(1.6),
                includeFontPadding: false,
                position: 'absolute',
                top: -responsiveHeight(3.5),
                left: responsiveWidth(2),
                zIndex: 999,
                letterSpacing: 1,
              }}>
              Year
            </Text>
          )}
        </View>
        <Text
          style={{
            flex: 1,
            color: '#3C1306',
            fontFamily: fonts.poppinsRegular,
            fontSize: responsiveFontSize(1.8),
            includeFontPadding: false,
            marginRight: responsiveWidth(6),
            marginLeft: responsiveWidth(4),
          }}>
          {item.title}
        </Text>
      </View>
    );
  };

  renderOurJourney = () => {
    return (
      <View
        style={{
          backgroundColor: '#F4DEB6',
          marginTop: responsiveHeight(3.5),
          paddingTop: responsiveHeight(3),
          paddingBottom: responsiveHeight(4),
        }}>
        <Text
          style={{
            color: '#6E4F03',
            fontFamily: fonts.playfairMedium,
            fontSize: responsiveFontSize(3),
            includeFontPadding: false,
            marginLeft: responsiveWidth(3),
          }}>
          Our Journey So Far
        </Text>
        <View
          style={{
            paddingLeft: responsiveWidth(5),
            marginTop: responsiveHeight(3.5),
          }}>
          <FlatList data={stepperData} renderItem={this.renderStepperItem} />
        </View>
      </View>
    );
  };

  renderTestimonials = () => {
    return (
      <View
        style={{
          marginTop: responsiveHeight(5),
          marginHorizontal: responsiveWidth(3),
          marginBottom: responsiveHeight(17),
        }}>
        <Text style={styles.testimonialText}>Testimonials</Text>
        <View
          style={{
            backgroundColor: '#F5E8D1',
            paddingLeft: responsiveWidth(3),
            paddingRight: responsiveScreenWidth(4),
            paddingTop: responsiveHeight(3),
            paddingBottom: responsiveHeight(4),
            borderRadius: responsiveFontSize(2),
            marginTop: responsiveHeight(1.8),
          }}>
          <View style={{ alignItems: 'center' }}>
            <Image
              resizeMode="contain"
              source={require('../assets/salmon.png')}
            />
            <Text
              style={{
                color: '#1E3819',
                fontFamily: fonts.playfairSemiBold,
                fontWeight: 'bold',
                fontSize: responsiveFontSize(3),
                includeFontPadding: false,
                marginTop: responsiveHeight(1),
              }}>
              Salman Khan
            </Text>
            <Text
              style={{
                color: '#748570',
                fontFamily: fonts.poppinsMedium,
                fontSize: responsiveFontSize(1.8),
                includeFontPadding: false,
                marginBottom: responsiveHeight(0.7),
              }}>
              Bollywood Actor
            </Text>
            <StarRating
              rating={5}
              onChange={() => { }}
              starSize={responsiveFontSize(2.5)}
              color="#CCAB51"
              starStyle={{ marginHorizontal: responsiveWidth(0.5) }}
            />
          </View>
          <Text
            style={{
              color: '#1E3819',
              fontFamily: fonts.poppinsRegular,
              fontSize: responsiveFontSize(1.8),
              includeFontPadding: false,
              textAlign: 'center',
              marginTop: responsiveHeight(2),
            }}>
            I really loved the Pista House Haleem as I never tasted before!
            Excellent service all the way around from start to finish. Keep up
            the GREAT work! The service and personal attention are
            extraordinary. I wanted to send a compliment towards the staff
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: responsiveHeight(2),
          }}>
          <View
            style={{
              height: responsiveFontSize(4),
              width: responsiveFontSize(4),
              borderRadius: responsiveFontSize(5),
              backgroundColor: '#EFE3CF',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign
              name="left"
              size={responsiveFontSize(1.8)}
              color={'black'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: responsiveWidth(3),
            }}>
            <Text
              style={{
                color: '#27292C',
                fontFamily: fonts.poppinsRegular,
                fontSize: responsiveFontSize(1.5),
                includeFontPadding: false,
              }}>
              1
            </Text>
            <Text
              style={{
                color: '#27292C',
                fontFamily: fonts.poppinsRegular,
                fontSize: responsiveFontSize(1.4),
                includeFontPadding: false,
                marginHorizontal: responsiveWidth(0.5),
              }}>
              /
            </Text>
            <Text
              style={{
                color: '#27292C',
                fontFamily: fonts.poppinsRegular,
                fontSize: responsiveFontSize(1.5),
                includeFontPadding: false,
              }}>
              2
            </Text>
          </View>
          <View
            style={{
              height: responsiveFontSize(4),
              width: responsiveFontSize(4),
              borderRadius: responsiveFontSize(5),
              backgroundColor: '#6D4F03',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign
              name="right"
              size={responsiveFontSize(1.8)}
              color={'#FFFFFF'}
            />
          </View>
        </View>
      </View>
    );
  };

  renderCarousel1 = (each: any) => {
    return (
      <View
        style={{
          height: responsiveHeight(28),
          paddingLeft: responsiveWidth(5),
          paddingTop: responsiveHeight(3),
          borderRadius: responsiveFontSize(2),
          backgroundColor: 'white',
          zIndex: 999,
        }}>
        <Image
          source={each.img}
          style={{
            position: 'absolute',
            right: 0,
            zIndex: -1,
            borderRadius: responsiveFontSize(1),
            height: responsiveHeight(20),
            width: responsiveWidth(40),
            bottom: responsiveHeight(3),
            backgroundColor: 'white',
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#EAE0D5BC',
            width: responsiveWidth(34),
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: responsiveHeight(0.3),
            borderRadius: responsiveFontSize(1),
            borderWidth: 0.5,
            borderColor: '#BCA98F',
          }}>
          <Text
            style={{
              color: '#6E4F03',
              fontFamily: fonts.poppinsMedium,
              fontSize: responsiveFontSize(1.2),
              includeFontPadding: false,
              letterSpacing: 2,
              zIndex: 999,
            }}>
            Pista Date Roll
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            color: '#6E4F03',
            fontFamily: fonts.poppinsMedium,
            fontSize: responsiveFontSize(3.4),
            includeFontPadding: false,
            lineHeight: responsiveHeight(4),
            marginTop: responsiveHeight(1),
            zIndex: 999,
          }}>
          Perfect For
        </Text>
        <Text
          style={{
            color: '#6E4F03',
            fontFamily: fonts.poppinsMedium,
            fontSize: responsiveFontSize(3.4),
            includeFontPadding: false,
            lineHeight: responsiveHeight(4),
            zIndex: 999,
          }}>
          Every Occasion
        </Text>
        <Text
          style={{
            color: '#4D1E10',
            fontFamily: fonts.poppinsMedium,
            fontSize: responsiveFontSize(1.5),
            includeFontPadding: false,
            zIndex: 999,
          }}>
          Indulge in Deliciousness with
        </Text>
        <Text
          style={{
            color: '#4D1E10',
            fontFamily: fonts.poppinsMedium,
            fontSize: responsiveFontSize(1.5),
            includeFontPadding: false,
          }}>
          every Bite
        </Text>
        <TouchableOpacity style={styles.shopNowBtn}>
          <Text style={styles.shopNowText}>Shop Now</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderCarouselFirst = (carouselData: any) => {
    return (
      <Swiper
        style={{
          height: responsiveHeight(34),
        }}
        containerStyle={{
          marginTop: responsiveHeight(1.8),
          marginHorizontal: responsiveWidth(3),
        }}
        loop={false}
        autoplay={true}
        activeDotStyle={{
          height: responsiveHeight(0.8),
          width: responsiveWidth(6),
          backgroundColor: '#9A7629',
        }}
        activeDotColor="#9A7629"
        dotColor="#E3BE80"
        showsButtons={false}>
        {this.renderCarousel1(carouselData[0])}
        {this.renderCarousel1(carouselData[1])}
        {this.renderCarousel1(carouselData[2])}
      </Swiper>
    );
  };

  renderItem = (each: any) => {
    return (
      <View
        style={{
          width: '50%',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom:
            each.item.id == 1 || each.item.id == 2 ? responsiveHeight(3) : 0,
        }}>
        <Image source={each.item.img} />
        <View style={{ marginLeft: responsiveWidth(2) }}>
          <Text style={styles.authenticText}>{each.item.title1}</Text>
          <Text style={styles.authenticText}>{each.item.title2}</Text>
        </View>
      </View>
    );
  };

  renderCarousel2 = (each: any) => {
    return (
      <ImageBackground
        source={each.img}
        resizeMode="stretch"
        style={{
          height: responsiveHeight(44),
          borderRadius: responsiveFontSize(2),
          paddingLeft: responsiveWidth(3),
          paddingTop: responsiveHeight(2),
        }}>
        <Text style={styles.pistaHouseText1}>Pista House's</Text>
        <Text style={[styles.pistaHouseText1, styles.pistaHouseText2]}>
          Sweets
        </Text>
        <Text style={styles.pistaHouseText3}>Explore Delightful Flavours!</Text>
        <TouchableOpacity style={styles.shopNowBtn}>
          <Text style={styles.shopNowText}>Shop Now</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  };

  renderCarouselSecond = (carouselData: any) => {
    return (
      <Swiper
        style={{
          height: responsiveHeight(50),
        }}
        containerStyle={{
          marginTop: responsiveHeight(3),
          paddingBottom: 0,
          marginHorizontal: responsiveWidth(3),
        }}
        loop={false}
        autoplay={true}
        activeDotStyle={{
          height: responsiveHeight(0.8),
          width: responsiveWidth(6),
          backgroundColor: '#9A7629',
        }}
        activeDotColor="#9A7629"
        dotColor="#E3BE80"
        showsButtons={false}>
        {this.renderCarousel2(carouselData[0])}
        {this.renderCarousel2(carouselData[1])}
        {this.renderCarousel2(carouselData[2])}
      </Swiper>
    );
  };

  renderFlatlistData = ({ item }: any) => {
    return (
      <Image source={item.img} style={{ marginRight: responsiveWidth(3) }} />
    );
  };

  renderFirstCard = (item: any) => {
    return (
      <View style={{ width: '48%' }}>
        <View>
          <Image
            resizeMode="stretch"
            source={item.img}
            style={{ height: responsiveHeight(15), width: '100%' }}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: responsiveWidth(3),
              top: responsiveHeight(1),
            }}>
            <AntDesign
              name={'hearto'}
              color="#FFFFFF"
              size={responsiveFontSize(2.5)}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingTop: responsiveHeight(1.6),
            borderWidth: 1,
            borderTopWidth: 0,
            borderColor: '#E8D6BB',
            paddingHorizontal: responsiveWidth(1.5),
            borderBottomLeftRadius: responsiveFontSize(1.5),
            borderBottomRightRadius: responsiveFontSize(1.5),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  color: '#6D4F03',
                  fontFamily: fonts.playfairMedium,
                  fontSize: responsiveFontSize(2),
                  includeFontPadding: false,
                }}>
                {item.title1}
              </Text>
              <Text
                style={{
                  color: '#6D4F03',
                  fontFamily: fonts.playfairMedium,
                  fontSize: responsiveFontSize(2),
                  includeFontPadding: false,
                }}>
                {item.title2}
              </Text>
            </View>

            {item.img2 && (
              <Image
                source={item.img2}
                style={{
                  marginRight: responsiveWidth(1),
                  marginTop: responsiveHeight(0.5),
                }}
              />
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: responsiveHeight(0.9),
            }}>
            <Text
              style={{
                color: '#27292C',
                fontFamily: fonts.poppinsMedium,
                fontSize: responsiveFontSize(1.1),
                includeFontPadding: false,
                marginBottom: responsiveHeight(0.3),
              }}>
              ₹
            </Text>
            <Text
              style={{
                color: '#27292C',
                fontFamily: fonts.poppinsMedium,
                fontSize: responsiveFontSize(2),
                includeFontPadding: false,
              }}>
              {item.price}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: responsiveHeight(0.8),
            }}>
            <StarRating
              rating={5}
              onChange={() => { }}
              starSize={responsiveFontSize(1.8)}
              color="#CCAB51"
              starStyle={{ marginHorizontal: responsiveWidth(0.5) }}
            />
            <Text
              style={{
                color: '#27292C',
                fontFamily: fonts.poppinsRegular,
                fontSize: responsiveFontSize(1.2),
                includeFontPadding: false,
                marginTop: responsiveHeight(0.2),
              }}>{`(${item.rating})`}</Text>
          </View>
          <TouchableOpacity style={styles.addToCartBtn}>
            <Text
              style={{
                color: '#6D4F03',
                fontFamily: fonts.poppinsSemiBold,
                fontSize: responsiveFontSize(1.5),
                includeFontPadding: false,
              }}>
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView
        style={styles.mainContainer}>
        <StatusBar
          hidden={false}
          barStyle={'light-content'}
          backgroundColor={'#422B62'}
        />
        <ScrollView style={{}} bounces={false}>
          {this.renderLogoAndSearchbar()}
          {this.renderDeliveryAddressContainer()}
          {this.renderCarouselFirst(carouselData1)}
          {this.renderShopByCategory()}
          {this.renderBestSeller()}
          {this.renderCarouselSecond(carouselData2)}
          {this.renderAuthenticRecipes()}
          {this.renderFreshFromOurBakery()}
          {this.renderLegacyOfPistaHouse()}
          {this.renderStores()}
          {this.renderOurJourney()}
          {this.renderTestimonials()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F7EFDF',
  },
  container3: {
    marginTop: responsiveHeight(1.6),
    backgroundColor: '#FFFBF5',
    marginLeft: responsiveWidth(3),
    marginRight: responsiveWidth(3),
    paddingHorizontal: responsiveFontSize(2),
    paddingVertical: responsiveFontSize(1),
    borderRadius: responsiveFontSize(2),
    borderWidth: 1,
    borderColor: '#EFE3CF',
  },
  deliverAndChangeBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deliveryText: {
    color: '#AA8E5E',
    fontFamily: fonts.poppinsMedium,
    letterSpacing: responsiveWidth(0.5),
    fontSize: responsiveFontSize(1.2),
  },
  changeBtn: {
    backgroundColor: '#F2C574',
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveWidth(0.3),
    borderRadius: responsiveFontSize(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeText: {
    color: '#3C1306',
    fontFamily: fonts.poppinsMedium,
    fontSize: responsiveFontSize(1.2),
    opacity: 0.6,
    marginTop: responsiveHeight(0.1),
    letterSpacing: responsiveWidth(0.6),
  },
  workContainer: {},

  workText1: {
    color: '#91711D',
    fontFamily: fonts.poppinsSemiBold,
    fontSize: responsiveFontSize(1.8),
    lineHeight: responsiveHeight(2.2),
    paddingVertical: 0,
    marginVertical: 0,
    includeFontPadding: false,
  },
  workText2: {
    color: '#B4923A',
    fontFamily: fonts.poppinsRegular,
    fontSize: responsiveFontSize(1.4),
    includeFontPadding: false,
  },
  pistaHouseText1: {
    color: '#FFFFFF',
    fontFamily: fonts.playfairSemiBold,
    fontSize: responsiveFontSize(4),
    includeFontPadding: false,
  },
  pistaHouseText2: {
    marginTop: responsiveHeight(0.2),
  },
  pistaHouseText3: {
    color: '#FFFAED',
    fontFamily: fonts.poppinsRegular,
    fontSize: responsiveFontSize(1.7),
    includeFontPadding: false,
    marginTop: responsiveHeight(0.5),
  },
  shopNowBtn: {
    backgroundColor: '#1E3819',
    paddingVertical: responsiveHeight(0.8),
    borderRadius: responsiveFontSize(2),
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidth(27),
    marginTop: responsiveHeight(1.5),
  },
  shopNowText: {
    color: '#FFFFFF',
    fontFamily: fonts.poppinsSemiBold,
    fontSize: responsiveFontSize(1.6),
    includeFontPadding: false,
  },
  authenticText: {
    color: '#CCAB51',
    fontFamily: fonts.poppinsMedium,
    fontSize: responsiveFontSize(1.6),
    includeFontPadding: false,
  },

  freshText: {
    color: '#27292C',
    fontFamily: fonts.playfairMedium,
    fontSize: responsiveFontSize(2.2),
    includeFontPadding: false,
  },
  viewAll: {
    color: '#3C7C22',
    fontFamily: fonts.poppinsSemiBold,
    fontSize: responsiveFontSize(1.5),
    includeFontPadding: false,
    marginRight: responsiveWidth(1),
  },
  addToCartBtn: {
    backgroundColor: '#F5E8D1',
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveWidth(2.5),
    borderRadius: responsiveFontSize(2),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8D6BB',
    marginHorizontal: responsiveWidth(1),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1.2),
  },
  readMoreBtn: {
    backgroundColor: '#F2C574',
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveWidth(1.8),
    borderRadius: responsiveFontSize(2),
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidth(33),
    marginTop: responsiveHeight(2.2),
  },
  ReadMoreText: {
    color: '#7E6115',
    fontFamily: fonts.poppinsSemiBold,
    fontSize: responsiveFontSize(1.5),
    marginTop: responsiveHeight(0.2),
    includeFontPadding: false,
  },
  countriesNumber: {
    color: '#7E6115',
    fontFamily: fonts.poppinsSemiBold,
    fontSize: responsiveFontSize(4),
    includeFontPadding: false,
    textAlign: 'center',
  },
  countriesText: {
    color: '#7E6115',
    fontFamily: fonts.poppinsRegular,
    fontSize: responsiveFontSize(1.9),
    includeFontPadding: false,
    textAlign: 'center',
    marginTop: responsiveHeight(0.6),
  },
  testimonialText: {
    color: '#6E4F03',
    fontFamily: fonts.playfairMedium,
    fontSize: responsiveFontSize(2.2),
    includeFontPadding: false,
  },
});
