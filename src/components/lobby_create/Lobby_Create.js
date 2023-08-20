import React, { useRef, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import "./lobby_create.css";



const TagsInput = props => {
	const [tags, setTags] = useState(props.tags || NaN);
    const inputTag = useRef();
	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};
	const addTags = () => {
		if (inputTag.current.value !== "") {
			setTags([...tags, inputTag.current.value]);
			props.selectedTags([...tags, inputTag.current.value]);
			inputTag.current.value = "";
		}
	};
	return (
		<div className="tags-input">
			<ul id="tags">
				{tags?.map((tag, index) => (
					<li key={index} className="tag">
						<span className='tag-title'>#{tag}</span>
						<span className='tag-close-icon'
							onClick={() => removeTags(index)}
						>
							x
						</span>
					</li>
				))}
			</ul>
			<input
				type="text"
				placeholder="Add tags..."
                ref={inputTag}
			/>
            <button onClick={addTags}>Add</button>
		</div>
	);
};

const Lobby_Create = () => {
    const selectedTags = tags => {
		console.log(tags);
    };
  return (
    <div id="room-lobby-container1">
      <div className="lobby-top-buttons-container1">
        <div className="return-home-button-container1 responsive-home-button1">
            <a href="/">
            <div className="return-home-button ">
                <ArrowBackIcon style={{ marginRight: "7px" }} />
                Home
            </div>
            </a>
          <div className="return-home-shadow1">e</div>
        </div>
        <div className="alternate-return-home-button-container1 responsive-alternate-home1">
            <a href="/">
            <div className="alernate-return-home-button1">
                <HomeOutlinedIcon />
            </div>
            </a>
          <div className="alternate-return-home-button-shadow1">e</div>
        </div>
        <div className="create-room-button-container1">
            <a href="/joinroom">
            <div className="create-room-button1">
                <AddCircleOutlineIcon style={{ marginRight: "7px" }} />
                Join Room
            </div>
            </a>
          <div className="create-room-button-shadow1">e</div>
        </div>
      </div>
      <div className="lobby-form-container-contain1">
        <img
          className="lobby-background1"
          src={require("../../assets/lobby/background.jpeg")}
          alt=""
        />
        <div id="lobby-form-container1">
          <div className="inside-lobby-form-container1">
            <div id="form-container-header1">
              <p>👋 Create Room</p>
              <div className="dots-container1">
                <div className="form-container-header-dots1"></div>
                <div className="form-container-header-dots2"></div>
                <div className="form-container-header-dots3"></div>
              </div>
            </div>

            <form id="lobby__form1">
              <div className="form__field__wrapper1">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your display name..."
                />
              </div>

              <div className="form__field__wrapper1">
                <label>Room Name</label>
                <input
                  type="text"
                  name="room"
                  required
                  placeholder="Enter room name..."
                />
              </div>

              <div className="form__field__wrapper1" >
                <label>Tags</label>
                <TagsInput selectedTags={selectedTags} tags={[]} />
              </div>

              <div className="form__field__wrapper1">
                <button type="submit">
                  Go to Room
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className="form-container-shadow-1">e</div>
          <div className="form-container-shadow-2">e</div>
        </div>
      </div>
    </div>
  );
};

export default Lobby_Create;
