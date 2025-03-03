import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet,} from 'react-native';

const App = () => {
  //Ito part na to ay para ma display ang mga information sa buong screen
  const [currentIndex, setCurrentIndex] = useState(0);

 //Ito ay para i-construct ang kabuoan ng code
  const resumeData = {
    name: 'Eric Bardelosa Atoc', 
    profileImage: 'https://www.esports.net/wp-content/uploads/2023/02/281a561e22ca9b214155f31a1635b743.jpg',
    education: 'Bachelor of Science in Information Technology',
    about: 'I am a very good listener and always look for better solution. I also draw a lot and play video games.',
    workdetails: {
      imageSrc: 'https://th.bing.com/th/id/OIP.i2yV8p6ws_cpZG1F4w8peQHaHa?rs=1&pid=ImgDetMain',
      projectLink: 'https://th.bing.com/th/id/OIP.i2yV8p6ws_cpZG1F4w8peQHaHa?rs=1&pid=ImgDetMain',
      description: 'I did not have any pictures so i place this image instead.',
    },
    contact: {
      emailaddress: 'ericatoc18@gmail.com',
      contactnumber: '09627155045',
    },
  };

 //Ito ay para magkaroon ng maayos na layout ang mga bawat page sa screen at mai-display
  const sections = [
    {
      key: 'name',
      content: (
        <>
          {/* Display the profile image and name */}
          <Image source={{ uri: resumeData.profileImage }} style={styles.profileImage} />
          <Text style={styles.name}>{resumeData.name}</Text>
        </>
      ),
    },
    {
      key: 'education',
      content: (
        <View style={styles.textContainer}>
          {/* Display education details */}
          <Text style={styles.header}>Education:</Text>
          <Text style={styles.info}>{resumeData.education}</Text>
        </View>
      ),
    },
    {
      key: 'about',
      content: (
        <View style={styles.textContainer}>
          {/* Display about me section */}
          <Text style={styles.header}>About Me:</Text>
          <Text style={styles.about}>{resumeData.about}</Text>
        </View>
      ),
    },
    {
      key: 'workdetails',
      content: (
        <View style={styles.projectsContainer}>
          {/* Display work details */}
          <Text style={styles.header}>Work Details:</Text>
          <Image source={{ uri: resumeData.workdetails.imageSrc }} style={styles.projectImage} />
          <Text style={styles.projectLink}>{resumeData.workdetails.link}</Text>
          <Text style={styles.projectDescription}>{resumeData.workdetails.description}</Text>
        </View>
      ),
    },
    {
      key: 'contact',
      content: (
        <View style={styles.contactContainer}>
          {/* Display contact information */}
          <Text style={styles.header}>Contact Me:</Text>
          <Text style={styles.info}>
            Email: {resumeData.contact.emailaddress}{'\n'}
            Contact Number: {resumeData.contact.contactnumber}
          </Text>
        </View>
      ),
    },
  ];

  //Ito ay para magkaroon ng paglilipat ng pages.
  const handlePress = () => {
    // Increment the index and wrap around using modulo (%)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/*Ito ay para maging clickable ang mga pages*/}
        <TouchableOpacity onPress={handlePress} style={styles.contentContainer}>
          {/*Ito ay para maging smooth ang pagka clickable*/}
          {sections[currentIndex].content}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

//Ito ay para magkaroon ng styles ang bawat sections ng pages
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'maroon',
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 150,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  textContainer: {
    margin: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  info: {
    fontSize: 16,
    color: 'white',
  },
  about: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  projectsContainer: {
    margin: 20,
    alignItems: 'center',
  },
  projectImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  projectLink: {
    fontSize: 16,
    color: 'blue',
  },
  projectDescription: {
    fontSize: 16,
    color: 'white',
  },
  contactContainer: {
    margin: 20,
    alignItems: 'center',
  },
});

export default App;



