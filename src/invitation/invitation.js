import '././invitation.css'
export function Invitation(props){
    return (
        <div>
        
        <p>Subject: {props.subject}</p>
        <p>To: {props.email}
        
         </p>
        
        <br/>
        <p>Hi , {props.host}
        
        </p>
        <br/>
        <p>
        I am having a {props.topic} next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are
coming . you know some of them - {props.friends}.
        </p>
        <br/>
        <p>My house is behind our school , near {props.venue} .
</p>
<br/>
<p>
I hope you will come and see you soon .
</p>
<br/>
<p>from,</p>
<p>{props.host}</p>
</div>
    );

}