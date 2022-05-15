import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import styles from './Email.module.css'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
export function Faqs() {
    const [expanded, setExpanded] = React.useState(false);
    const navigate = useNavigate()

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div>
            <div className={styles.accordians}>
                <h1 className={styles.faqsHeading}>Frequently Asked Questions</h1>
                <Accordion className={styles.accordiansChild} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel1' ? <CloseIcon sx={{ fontSize: 30, color: "white" }} /> : <AddIcon sx={{ fontSize: 30, color: "white" }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={styles.accordiansSummary}
                        sx={{
                            backgroundColor: "#303030",
                            color: "white"
                        }}

                    >
                        <Typography sx={{ fontSize: "1.5em" }} >What is Netflix?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{
                        backgroundColor: "#303030",
                        color: "white"
                    }}>
                        <Typography sx={{ fontSize: "1.5em" }}>
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

                            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={styles.accordiansChild} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel2' ? <CloseIcon sx={{ fontSize: 30, color: "white" }} /> : <AddIcon sx={{ fontSize: 30, color: "white" }} />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        className={styles.accordiansSummary}
                        sx={{
                            backgroundColor: "#303030",
                            color: "white"
                        }}
                    >
                        <Typography sx={{ fontSize: "1.5em" }}>How much does Netflix cost?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{
                        backgroundColor: "#303030",
                        color: "white"
                    }}>
                        <Typography sx={{ fontSize: "1.5em" }}>
                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={styles.accordiansChild} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel3' ? <CloseIcon sx={{ fontSize: 30, color: "white" }} /> : <AddIcon sx={{ fontSize: 30, color: "white" }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={styles.accordiansSummary}
                        sx={{
                            backgroundColor: "#303030",
                            color: "white"
                        }}
                    >
                        <Typography sx={{ fontSize: "1.5em" }}>WWhere can I watch?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{
                        backgroundColor: "#303030",
                        color: "white"
                    }}>
                        <Typography sx={{ fontSize: "1.5em" }}>
                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={styles.accordiansChild} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel4' ? <CloseIcon sx={{ fontSize: 30, color: "white" }} /> : <AddIcon sx={{ fontSize: 30, color: "white" }} />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        className={styles.accordiansSummary}
                        sx={{
                            backgroundColor: "#303030",
                            color: "white"
                        }}
                    >
                        <Typography sx={{ fontSize: "1.5em" }}>How do I cancel?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{
                        backgroundColor: "#303030",
                        color: "white"
                    }}>
                        <Typography sx={{ fontSize: "1.5em" }}>
                            Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={styles.accordiansChild} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel5' ? <CloseIcon sx={{ fontSize: 30, color: "white" }} /> : <AddIcon sx={{ fontSize: 30, color: "white" }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={styles.accordiansSummary}
                        sx={{
                            backgroundColor: "#303030",
                            color: "white"

                        }}
                    >
                        <Typography sx={{ fontSize: "1.5em" }}>What can I watch on Netflix?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{
                        backgroundColor: "#303030",
                        color: "white"
                    }}
                    >
                        <Typography sx={{ fontSize: "1.5em" }}>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={styles.accordiansChild} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel6' ? <CloseIcon sx={{ fontSize: 30, color: "white" }} /> : <AddIcon sx={{ fontSize: 30, color: "white" }} />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        className={styles.accordiansSummary}
                        sx={{
                            backgroundColor: "#303030",
                            color: "white"
                        }}
                    >
                        <Typography sx={{ fontSize: "1.5em" }}>Is Netflix good for kids?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{
                        backgroundColor: "#303030",
                        color: "white"
                    }} >
                        <Typography sx={{ fontSize: "1.5em" }}>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <h3 className={styles.faqsHeading2}>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className={styles.mailDiv}>

                <Box
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    className={styles.mail}
                >
                    <TextField id="filled-basic" label="Email Address" variant="standard" color='grey' InputProps={{ // <== adjusted this
                        disableUnderline: true, // <== added this
                    }} />
                </Box>
                <button onClick={() => navigate("/signup1")} className={styles.getStarted}>Get Started {'>'}</button>
            </div>
        </div>
    );
}
