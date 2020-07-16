import React from 'react';

const ReplyContainer = (props) => {
    return (
        <div>
            <form>
                <label>
                    Description:
                    <input type="text" name="description"/>
                </label>
                <label>
                    Office Hours:
                    <input type="text" name="office_hours"/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ReplyContainer;