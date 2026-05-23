import { useNavigation } from "react-router-dom"

const SubmitBtn = ({text}) => {
    const navigation = useNavigation();
const isSubmitting = navigation.state === 'submitting';
  return <section>
    <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
       {isSubmitting? <>
       <span className="loading loading-spinner">Sending...</span>
       </> : text || 'Submit'}
        </button>

  </section>
}
export default SubmitBtn