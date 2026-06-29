import { useState } from 'react'
import '../assets/css/Team_Form.css'

const Team_Form = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        skills: '',
        education: '',
        experience: '',
        interests: '',
        resume: null
    })

    const [fileName, setFileName] = useState('')

    const positions = [
        'Frontend Developer',
        'Backend Developer',
        'Full Stack Developer',
        'UI/UX Designer',
        'AI/ML Engineer',
        'DevOps Engineer',
        'Product Manager',
        'Project Manager',
        'QA Engineer',
        'Data Analyst',
        'Other'
    ]

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png']
            if (allowedTypes.includes(file.type)) {
                setFormData(prev => ({ ...prev, resume: file }))
                setFileName(file.name)
            } else {
                alert('Please upload PDF, JPEG, or PNG files only.')
                e.target.value = ''
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form Data:', formData)
        alert('Application submitted successfully! We will review your profile and get back to you within 3-5 business days.')
        // Reset form
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            position: '',
            skills: '',
            education: '',
            experience: '',
            interests: '',
            resume: null
        })
        setFileName('')
    }

    return (
        <section id="apply-form" className="team-form">
            <div className="container">
                <div className="form-wrapper">
                    <div className="form-header">
                        <span className="form-badge">Apply Now</span>
                        <h2>Join the CodeNepal Team</h2>
                        <p>
                            Fill out the form below and let us know why you'd be a great fit. 
                            We review every application carefully.
                        </p>
                    </div>

                    <form className="application-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name *</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="e.g., John Doe"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="+977 98XXXXXXX"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="position">Position Applying For *</label>
                                <select
                                    id="position"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a position</option>
                                    {positions.map(pos => (
                                        <option key={pos} value={pos}>{pos}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="skills">Skills & Technologies *</label>
                            <textarea
                                id="skills"
                                name="skills"
                                placeholder="List your skills, technologies you're proficient with, and any relevant certifications..."
                                rows="3"
                                value={formData.skills}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="education">Education Background</label>
                            <textarea
                                id="education"
                                name="education"
                                placeholder="e.g., BSc in Computer Science, Self-taught, Bootcamp graduate..."
                                rows="2"
                                value={formData.education}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="experience">Work Experience</label>
                            <textarea
                                id="experience"
                                name="experience"
                                placeholder="Briefly describe your relevant work experience, projects, or internships..."
                                rows="3"
                                value={formData.experience}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="interests">What Interests You About CodeNepal?</label>
                            <textarea
                                id="interests"
                                name="interests"
                                placeholder="Why do you want to join our team? What excites you about our work?"
                                rows="3"
                                value={formData.interests}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Upload CV / Resume *</label>
                            <div className="file-upload-wrapper">
                                <div className="file-drop-zone">
                                    <i className="bi bi-cloud-upload"></i>
                                    <span>Drag & drop your file here, or click to browse</span>
                                    <span className="file-types">Supports: PDF, JPEG, PNG (Max 10MB)</span>
                                    <input
                                        type="file"
                                        id="resume"
                                        name="resume"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        onChange={handleFileChange}
                                        required
                                    />
                                </div>
                                {fileName && (
                                    <div className="file-selected">
                                        <i className="bi bi-file-earmark-check"></i>
                                        <span>{fileName}</span>
                                        <button 
                                            type="button" 
                                            className="file-remove"
                                            onClick={() => {
                                                setFormData(prev => ({ ...prev, resume: null }))
                                                setFileName('')
                                            }}
                                        >
                                            <i className="bi bi-x"></i>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="form-footer">
                            <button type="submit" className="submit-btn">
                                Submit Application <i className="bi bi-send"></i>
                            </button>
                            <p className="form-note">
                                <i className="bi bi-info-circle"></i>
                                We'll review your application and get back to you within 3-5 business days.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Team_Form