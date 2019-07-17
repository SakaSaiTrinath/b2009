/*import React from "react";
import { Button, Grid } from "semantic-ui-react";
import { EditorState, RichUtils, AtomicBlockUtils } from "draft-js";
import Editor from "draft-js-plugins-editor";

import createHighlightPlugin from "./plugins/highlightPlugin";
import addLinkPlugin from "./plugins/addLinkPlugin";
import BlockStyleToolbar, { getBlockStyle } from "./blockStyles/BlockStyleToolbar";

const highlightPlugin = createHighlightPlugin();

class PageContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: EditorState.createEmpty()
		};

		this.plugins = [highlightPlugin, addLinkPlugin];
	} 

	handleKeyCommand = (command) => {
		const newState = RichUtils.handleKeyCommand(this.state.editorState, command);

		if(newState) {
			this.onChange(newState);
			return 'handled';
		}
		
		return 'not handled';
	};

	onChange = editorState => {
		this.setState({
			editorState
		});
	};

	onUnderlineClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
	};

	onBoldClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
	};

	onItalicClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
	};

	onStrikeThroughClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "STRIKETHROUGH"));
	};

	onHighlight = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'HIGHLIGHT'));
	};

	onAddLink = () => {
		const editorState = this.state.editorState;
		const selection = editorState.getSelection();
		const link = window.prompt("Paste the link -");
		if (!link) {
			this.onChange(RichUtils.toggleLink(editorState, selection, null));
			return "handled";
		}
		const content = editorState.getCurrentContent();
		const contentWithEntity = content.createEntity("LINK", "MUTABLE", {
			url: link
		});
		const newEditorState = EditorState.push(
			editorState,
			contentWithEntity,
			"create-entity"
		);
		const entityKey = contentWithEntity.getLastCreatedEntityKey();
		this.onChange(RichUtils.toggleLink(newEditorState, selection, entityKey));
		return "handled";
	};

	onURLChange = e => this.setState({ urlValue: e.target.value });

	focus = () => this.refs.editor.focus();

	onAddImage = e => {
		e.preventDefault();
		const editorState = this.state.editorState;
		const urlValue = window.prompt("Paste Image Link");
		const contentState = editorState.getCurrentContent();
		const contentStateWithEntity = contentState.createEntity(
			"image",
			"IMMUTABLE",
			{ src: urlValue }
		);
		const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
		const newEditorState = EditorState.set(
			editorState,
			{ currentContent: contentStateWithEntity },
			"create-entity"
		);
		this.setState(
			{
				editorState: AtomicBlockUtils.insertAtomicBlock(
					newEditorState,
					entityKey,
					" "
				)
			},
			() => {
				setTimeout(() => this.focus(), 0);
			}
		);
	};

	toggleBlockType = blockType => {
		this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
	};

 	render() {
		return (
			<div>
				<div className="editorContainer"> 
					<Grid stackable>
						<Grid.Row>
							<Grid.Column>
								<BlockStyleToolbar
									editorState={this.state.editorState}
									onToggle={this.toggleBlockType}
								/>
								&nbsp;&nbsp;&nbsp;
								<div style={{ float: "left" }}>
									<Button.Group basic>
										<Button icon="bold" onClick={this.onBoldClick} />
										<Button icon="underline" onClick={this.onUnderlineClick} />
										<Button icon="italic" onClick={this.onItalicClick} />
									</Button.Group>
									&nbsp;
									<Button.Group basic style={{ marginRight: "3px" }}>
										<Button icon="paint brush" onClick={this.onHighlight} />
										<Button icon="strikethrough" onClick={this.onStrikeThroughClick} />
										<Button icon="linkify" onClick={this.onAddLink} />
										<Button icon="image" onClick={this.onAddImage} />
									</Button.Group>
								</div>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<div className="editors">
									<Editor
										blockStyleFn={getBlockStyle}
										editorState={this.state.editorState}
										handleKeyCommand={this.handleKeyCommand}
										onChange={this.onChange}
										plugins={this.plugins}
										ref="editor"
									/>
								</div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
			</div>
		);
	}
}

export default PageContainer;*/