import React from 'react';
import { FaUsers, FaLightbulb, FaHandsHelping, FaLaptopCode } from 'react-icons/fa';
import { GiEarthAmerica } from 'react-icons/gi';
import teamImage from '../assets/team.jpg';
import { Link } from 'react-router';
import Testimonials from '../components/Testimonials';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 pt-30">
            {/* Hero Section */}
            <section className="hero min-h-[60vh] backdrop-blur-md">
                <div className="hero-content text-center">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                            About <span className="text-base-content">HobbyHub</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-base-content/80 leading-relaxed">
                            A modern React-based platform for discovering and sharing hobbies with like-minded people. 
                            Whether you're into painting, coding, hiking, or cooking – HobbyHub is your place to 
                            get inspired and connect with a passionate community.
                        </p>
                        <Link to="/groups" className="btn btn-primary btn-lg rounded-full px-8">
                            Explore Hobbies
                        </Link>
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <div className="mockup-window bg-base-300/50 backdrop-blur-sm">
                                <img 
                                    src={teamImage} 
                                    alt="Team working together" 
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2 space-y-6">
                            <h2 className="text-4xl font-bold text-base-content">
                                Our <span className="text-primary">Mission</span>
                            </h2>
                            <p className="text-lg text-base-content/80">
                                At HobbyHub, we believe everyone deserves to find their passion tribe. 
                                Our mission is to break down barriers between hobbyists and create 
                                meaningful connections through shared interests.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                                        <FaLightbulb className="text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">Spark Inspiration</h3>
                                        <p className="text-base-content/70">
                                            Discover new hobbies and creative ideas from our diverse community.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                                        <FaUsers className="text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">Build Community</h3>
                                        <p className="text-base-content/70">
                                            Connect with people who share your passions and enthusiasm.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-accent/10 text-accent">
                                        <FaHandsHelping className="text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">Share Knowledge</h3>
                                        <p className="text-base-content/70">
                                            Learn from experts and enthusiasts in your favorite hobbies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-base-200/50 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-base-content mb-4">
                            Why Choose <span className="text-primary">HobbyHub</span>?
                        </h2>
                        <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
                            We've built HobbyHub with passion and purpose to create the best experience for hobby enthusiasts.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="card bg-base-100/30 backdrop-blur-sm border border-white/10 hover:shadow-xl transition-all">
                            <div className="card-body items-center text-center">
                                <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                                    <GiEarthAmerica className="text-4xl" />
                                </div>
                                <h3 className="card-title text-xl mb-2">Diverse Communities</h3>
                                <p className="text-base-content/80">
                                    From photography to pottery, find groups for every interest imaginable.
                                </p>
                            </div>
                        </div>
                        <div className="card bg-base-100/30 backdrop-blur-sm border border-white/10 hover:shadow-xl transition-all">
                            <div className="card-body items-center text-center">
                                <div className="p-4 rounded-full bg-secondary/10 text-secondary mb-4">
                                    <FaLaptopCode className="text-4xl" />
                                </div>
                                <h3 className="card-title text-xl mb-2">Modern Platform</h3>
                                <p className="text-base-content/80">
                                    Built with React and Tailwind for a seamless, responsive experience.
                                </p>
                            </div>
                        </div>
                        <div className="card bg-base-100/30 backdrop-blur-sm border border-white/10 hover:shadow-xl transition-all">
                            <div className="card-body items-center text-center">
                                <div className="p-4 rounded-full bg-accent/10 text-accent mb-4">
                                    <FaHandsHelping className="text-4xl" />
                                </div>
                                <h3 className="card-title text-xl mb-2">Easy Collaboration</h3>
                                <p className="text-base-content/80">
                                    Organize events, share resources, and grow together with your hobby group.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-base-content mb-6">
                        Ready to Find Your <span className="text-primary">Hobby Tribe</span>?
                    </h2>
                    <p className="text-xl text-base-content/80 mb-8 max-w-3xl mx-auto">
                        Join thousands of enthusiasts who are already sharing their passions and making new connections.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/register" className="btn btn-primary btn-lg rounded-full px-8">
                            Sign Up Now
                        </Link>
                        <Link to="/groups" className="btn btn-outline btn-lg rounded-full px-8">
                            Browse Groups
                        </Link>
                    </div>
                </div>
            </section>

            <Testimonials></Testimonials>
        </div>
    );
};

export default About;