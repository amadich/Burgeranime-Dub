import { useCookies } from "react-cookie";

function Profile_setting() {
   const [cookie,setCookie] = useCookies(["acc_tokens"]);
   return ( 
      <>
            <div className="border w-full h-96 inline-flex float-right m-40 ">
                  
                  <div className="mt-5 ml-5">
                        <label className="m-10 w-1/2 font-bold text-gray-100 font-mono ">Change Your Avatar : <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" />
                        <button className="btn btn-outline btn-success ml-5">Success</button>
                        </label>
                        <hr className="mt-5"/>
                  </div>
            </div>
      </>
    );
}

export default Profile_setting;