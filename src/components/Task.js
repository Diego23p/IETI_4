import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import "./task.css";

export class Task extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const bull = <span className="bullet">•</span>;
        const taskList = this.props.taskList.map((task, i) => {

            var d = task.dueDate;
            d = new Date(d - 3000000);
            var date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString());

            return (
                <Card className="root">
                    <CardContent>
                        <AssignmentRoundedIcon/>
                        <Typography variant="h5" gutterBottom>
                            {task.description}
                        </Typography>

                        <Typography className="title" component="h2">
                            User: {task.responsible.name}
                        </Typography>

                        <Typography className="pos" color="textSecondary">
                            Status:{task.status}
                        </Typography>

                        <Typography variant="body2" component="p">
                            Date: {date_format_str}
                        </Typography>
                    </CardContent>
                </Card>
            );
        });

        return (
            <div>
                {taskList}
            </div>
        );
    }

}