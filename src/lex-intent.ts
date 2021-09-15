// https://www.terraform.io/docs/providers/aws/r/lex_intent.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LexIntentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#create_version LexIntent#create_version}
  */
  readonly createVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#description LexIntent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#name LexIntent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#parent_intent_signature LexIntent#parent_intent_signature}
  */
  readonly parentIntentSignature?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#sample_utterances LexIntent#sample_utterances}
  */
  readonly sampleUtterances?: string[];
  /**
  * conclusion_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#conclusion_statement LexIntent#conclusion_statement}
  */
  readonly conclusionStatement?: LexIntentConclusionStatement[];
  /**
  * confirmation_prompt block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#confirmation_prompt LexIntent#confirmation_prompt}
  */
  readonly confirmationPrompt?: LexIntentConfirmationPrompt[];
  /**
  * dialog_code_hook block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#dialog_code_hook LexIntent#dialog_code_hook}
  */
  readonly dialogCodeHook?: LexIntentDialogCodeHook[];
  /**
  * follow_up_prompt block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#follow_up_prompt LexIntent#follow_up_prompt}
  */
  readonly followUpPrompt?: LexIntentFollowUpPrompt[];
  /**
  * fulfillment_activity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#fulfillment_activity LexIntent#fulfillment_activity}
  */
  readonly fulfillmentActivity: LexIntentFulfillmentActivity[];
  /**
  * rejection_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#rejection_statement LexIntent#rejection_statement}
  */
  readonly rejectionStatement?: LexIntentRejectionStatement[];
  /**
  * slot block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#slot LexIntent#slot}
  */
  readonly slot?: LexIntentSlot[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#timeouts LexIntent#timeouts}
  */
  readonly timeouts?: LexIntentTimeouts;
}
export interface LexIntentConclusionStatementMessage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content LexIntent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content_type LexIntent#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#group_number LexIntent#group_number}
  */
  readonly groupNumber?: number;
}

function lexIntentConclusionStatementMessageToTerraform(struct?: LexIntentConclusionStatementMessage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    group_number: cdktf.numberToTerraform(struct!.groupNumber),
  }
}

export interface LexIntentConclusionStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#response_card LexIntent#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message LexIntent#message}
  */
  readonly message: LexIntentConclusionStatementMessage[];
}

function lexIntentConclusionStatementToTerraform(struct?: LexIntentConclusionStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    response_card: cdktf.stringToTerraform(struct!.responseCard),
    message: cdktf.listMapper(lexIntentConclusionStatementMessageToTerraform)(struct!.message),
  }
}

export interface LexIntentConfirmationPromptMessage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content LexIntent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content_type LexIntent#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#group_number LexIntent#group_number}
  */
  readonly groupNumber?: number;
}

function lexIntentConfirmationPromptMessageToTerraform(struct?: LexIntentConfirmationPromptMessage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    group_number: cdktf.numberToTerraform(struct!.groupNumber),
  }
}

export interface LexIntentConfirmationPrompt {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#max_attempts LexIntent#max_attempts}
  */
  readonly maxAttempts: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#response_card LexIntent#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message LexIntent#message}
  */
  readonly message: LexIntentConfirmationPromptMessage[];
}

function lexIntentConfirmationPromptToTerraform(struct?: LexIntentConfirmationPrompt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    response_card: cdktf.stringToTerraform(struct!.responseCard),
    message: cdktf.listMapper(lexIntentConfirmationPromptMessageToTerraform)(struct!.message),
  }
}

export interface LexIntentDialogCodeHook {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message_version LexIntent#message_version}
  */
  readonly messageVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#uri LexIntent#uri}
  */
  readonly uri: string;
}

function lexIntentDialogCodeHookToTerraform(struct?: LexIntentDialogCodeHook): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message_version: cdktf.stringToTerraform(struct!.messageVersion),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export interface LexIntentFollowUpPromptPromptMessage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content LexIntent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content_type LexIntent#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#group_number LexIntent#group_number}
  */
  readonly groupNumber?: number;
}

function lexIntentFollowUpPromptPromptMessageToTerraform(struct?: LexIntentFollowUpPromptPromptMessage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    group_number: cdktf.numberToTerraform(struct!.groupNumber),
  }
}

export interface LexIntentFollowUpPromptPrompt {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#max_attempts LexIntent#max_attempts}
  */
  readonly maxAttempts: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#response_card LexIntent#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message LexIntent#message}
  */
  readonly message: LexIntentFollowUpPromptPromptMessage[];
}

function lexIntentFollowUpPromptPromptToTerraform(struct?: LexIntentFollowUpPromptPrompt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    response_card: cdktf.stringToTerraform(struct!.responseCard),
    message: cdktf.listMapper(lexIntentFollowUpPromptPromptMessageToTerraform)(struct!.message),
  }
}

export interface LexIntentFollowUpPromptRejectionStatementMessage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content LexIntent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content_type LexIntent#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#group_number LexIntent#group_number}
  */
  readonly groupNumber?: number;
}

function lexIntentFollowUpPromptRejectionStatementMessageToTerraform(struct?: LexIntentFollowUpPromptRejectionStatementMessage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    group_number: cdktf.numberToTerraform(struct!.groupNumber),
  }
}

export interface LexIntentFollowUpPromptRejectionStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#response_card LexIntent#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message LexIntent#message}
  */
  readonly message: LexIntentFollowUpPromptRejectionStatementMessage[];
}

function lexIntentFollowUpPromptRejectionStatementToTerraform(struct?: LexIntentFollowUpPromptRejectionStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    response_card: cdktf.stringToTerraform(struct!.responseCard),
    message: cdktf.listMapper(lexIntentFollowUpPromptRejectionStatementMessageToTerraform)(struct!.message),
  }
}

export interface LexIntentFollowUpPrompt {
  /**
  * prompt block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#prompt LexIntent#prompt}
  */
  readonly prompt: LexIntentFollowUpPromptPrompt[];
  /**
  * rejection_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#rejection_statement LexIntent#rejection_statement}
  */
  readonly rejectionStatement: LexIntentFollowUpPromptRejectionStatement[];
}

function lexIntentFollowUpPromptToTerraform(struct?: LexIntentFollowUpPrompt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prompt: cdktf.listMapper(lexIntentFollowUpPromptPromptToTerraform)(struct!.prompt),
    rejection_statement: cdktf.listMapper(lexIntentFollowUpPromptRejectionStatementToTerraform)(struct!.rejectionStatement),
  }
}

export interface LexIntentFulfillmentActivityCodeHook {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message_version LexIntent#message_version}
  */
  readonly messageVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#uri LexIntent#uri}
  */
  readonly uri: string;
}

function lexIntentFulfillmentActivityCodeHookToTerraform(struct?: LexIntentFulfillmentActivityCodeHook): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message_version: cdktf.stringToTerraform(struct!.messageVersion),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export interface LexIntentFulfillmentActivity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#type LexIntent#type}
  */
  readonly type: string;
  /**
  * code_hook block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#code_hook LexIntent#code_hook}
  */
  readonly codeHook?: LexIntentFulfillmentActivityCodeHook[];
}

function lexIntentFulfillmentActivityToTerraform(struct?: LexIntentFulfillmentActivity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    code_hook: cdktf.listMapper(lexIntentFulfillmentActivityCodeHookToTerraform)(struct!.codeHook),
  }
}

export interface LexIntentRejectionStatementMessage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content LexIntent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content_type LexIntent#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#group_number LexIntent#group_number}
  */
  readonly groupNumber?: number;
}

function lexIntentRejectionStatementMessageToTerraform(struct?: LexIntentRejectionStatementMessage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    group_number: cdktf.numberToTerraform(struct!.groupNumber),
  }
}

export interface LexIntentRejectionStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#response_card LexIntent#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message LexIntent#message}
  */
  readonly message: LexIntentRejectionStatementMessage[];
}

function lexIntentRejectionStatementToTerraform(struct?: LexIntentRejectionStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    response_card: cdktf.stringToTerraform(struct!.responseCard),
    message: cdktf.listMapper(lexIntentRejectionStatementMessageToTerraform)(struct!.message),
  }
}

export interface LexIntentSlotValueElicitationPromptMessage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content LexIntent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content_type LexIntent#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#group_number LexIntent#group_number}
  */
  readonly groupNumber?: number;
}

function lexIntentSlotValueElicitationPromptMessageToTerraform(struct?: LexIntentSlotValueElicitationPromptMessage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    group_number: cdktf.numberToTerraform(struct!.groupNumber),
  }
}

export interface LexIntentSlotValueElicitationPrompt {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#max_attempts LexIntent#max_attempts}
  */
  readonly maxAttempts: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#response_card LexIntent#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message LexIntent#message}
  */
  readonly message: LexIntentSlotValueElicitationPromptMessage[];
}

function lexIntentSlotValueElicitationPromptToTerraform(struct?: LexIntentSlotValueElicitationPrompt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    response_card: cdktf.stringToTerraform(struct!.responseCard),
    message: cdktf.listMapper(lexIntentSlotValueElicitationPromptMessageToTerraform)(struct!.message),
  }
}

export interface LexIntentSlot {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#description LexIntent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#name LexIntent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#priority LexIntent#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#response_card LexIntent#response_card}
  */
  readonly responseCard?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#sample_utterances LexIntent#sample_utterances}
  */
  readonly sampleUtterances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#slot_constraint LexIntent#slot_constraint}
  */
  readonly slotConstraint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#slot_type LexIntent#slot_type}
  */
  readonly slotType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#slot_type_version LexIntent#slot_type_version}
  */
  readonly slotTypeVersion?: string;
  /**
  * value_elicitation_prompt block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#value_elicitation_prompt LexIntent#value_elicitation_prompt}
  */
  readonly valueElicitationPrompt?: LexIntentSlotValueElicitationPrompt[];
}

function lexIntentSlotToTerraform(struct?: LexIntentSlot): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    response_card: cdktf.stringToTerraform(struct!.responseCard),
    sample_utterances: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sampleUtterances),
    slot_constraint: cdktf.stringToTerraform(struct!.slotConstraint),
    slot_type: cdktf.stringToTerraform(struct!.slotType),
    slot_type_version: cdktf.stringToTerraform(struct!.slotTypeVersion),
    value_elicitation_prompt: cdktf.listMapper(lexIntentSlotValueElicitationPromptToTerraform)(struct!.valueElicitationPrompt),
  }
}

export interface LexIntentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#create LexIntent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#delete LexIntent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#update LexIntent#update}
  */
  readonly update?: string;
}

function lexIntentTimeoutsToTerraform(struct?: LexIntentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html aws_lex_intent}
*/
export class LexIntent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lex_intent";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html aws_lex_intent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LexIntentConfig
  */
  public constructor(scope: Construct, id: string, config: LexIntentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lex_intent',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._createVersion = config.createVersion;
    this._description = config.description;
    this._name = config.name;
    this._parentIntentSignature = config.parentIntentSignature;
    this._sampleUtterances = config.sampleUtterances;
    this._conclusionStatement = config.conclusionStatement;
    this._confirmationPrompt = config.confirmationPrompt;
    this._dialogCodeHook = config.dialogCodeHook;
    this._followUpPrompt = config.followUpPrompt;
    this._fulfillmentActivity = config.fulfillmentActivity;
    this._rejectionStatement = config.rejectionStatement;
    this._slot = config.slot;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // create_version - computed: false, optional: true, required: false
  private _createVersion?: boolean | cdktf.IResolvable;
  public get createVersion() {
    return this.getBooleanAttribute('create_version');
  }
  public set createVersion(value: boolean | cdktf.IResolvable ) {
    this._createVersion = value;
  }
  public resetCreateVersion() {
    this._createVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createVersionInput() {
    return this._createVersion
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // parent_intent_signature - computed: false, optional: true, required: false
  private _parentIntentSignature?: string;
  public get parentIntentSignature() {
    return this.getStringAttribute('parent_intent_signature');
  }
  public set parentIntentSignature(value: string ) {
    this._parentIntentSignature = value;
  }
  public resetParentIntentSignature() {
    this._parentIntentSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIntentSignatureInput() {
    return this._parentIntentSignature
  }

  // sample_utterances - computed: false, optional: true, required: false
  private _sampleUtterances?: string[];
  public get sampleUtterances() {
    return this.getListAttribute('sample_utterances');
  }
  public set sampleUtterances(value: string[] ) {
    this._sampleUtterances = value;
  }
  public resetSampleUtterances() {
    this._sampleUtterances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleUtterancesInput() {
    return this._sampleUtterances
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // conclusion_statement - computed: false, optional: true, required: false
  private _conclusionStatement?: LexIntentConclusionStatement[];
  public get conclusionStatement() {
    return this.interpolationForAttribute('conclusion_statement') as any;
  }
  public set conclusionStatement(value: LexIntentConclusionStatement[] ) {
    this._conclusionStatement = value;
  }
  public resetConclusionStatement() {
    this._conclusionStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conclusionStatementInput() {
    return this._conclusionStatement
  }

  // confirmation_prompt - computed: false, optional: true, required: false
  private _confirmationPrompt?: LexIntentConfirmationPrompt[];
  public get confirmationPrompt() {
    return this.interpolationForAttribute('confirmation_prompt') as any;
  }
  public set confirmationPrompt(value: LexIntentConfirmationPrompt[] ) {
    this._confirmationPrompt = value;
  }
  public resetConfirmationPrompt() {
    this._confirmationPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationPromptInput() {
    return this._confirmationPrompt
  }

  // dialog_code_hook - computed: false, optional: true, required: false
  private _dialogCodeHook?: LexIntentDialogCodeHook[];
  public get dialogCodeHook() {
    return this.interpolationForAttribute('dialog_code_hook') as any;
  }
  public set dialogCodeHook(value: LexIntentDialogCodeHook[] ) {
    this._dialogCodeHook = value;
  }
  public resetDialogCodeHook() {
    this._dialogCodeHook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogCodeHookInput() {
    return this._dialogCodeHook
  }

  // follow_up_prompt - computed: false, optional: true, required: false
  private _followUpPrompt?: LexIntentFollowUpPrompt[];
  public get followUpPrompt() {
    return this.interpolationForAttribute('follow_up_prompt') as any;
  }
  public set followUpPrompt(value: LexIntentFollowUpPrompt[] ) {
    this._followUpPrompt = value;
  }
  public resetFollowUpPrompt() {
    this._followUpPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followUpPromptInput() {
    return this._followUpPrompt
  }

  // fulfillment_activity - computed: false, optional: false, required: true
  private _fulfillmentActivity: LexIntentFulfillmentActivity[];
  public get fulfillmentActivity() {
    return this.interpolationForAttribute('fulfillment_activity') as any;
  }
  public set fulfillmentActivity(value: LexIntentFulfillmentActivity[]) {
    this._fulfillmentActivity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fulfillmentActivityInput() {
    return this._fulfillmentActivity
  }

  // rejection_statement - computed: false, optional: true, required: false
  private _rejectionStatement?: LexIntentRejectionStatement[];
  public get rejectionStatement() {
    return this.interpolationForAttribute('rejection_statement') as any;
  }
  public set rejectionStatement(value: LexIntentRejectionStatement[] ) {
    this._rejectionStatement = value;
  }
  public resetRejectionStatement() {
    this._rejectionStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectionStatementInput() {
    return this._rejectionStatement
  }

  // slot - computed: false, optional: true, required: false
  private _slot?: LexIntentSlot[];
  public get slot() {
    return this.interpolationForAttribute('slot') as any;
  }
  public set slot(value: LexIntentSlot[] ) {
    this._slot = value;
  }
  public resetSlot() {
    this._slot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LexIntentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LexIntentTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_version: cdktf.booleanToTerraform(this._createVersion),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      parent_intent_signature: cdktf.stringToTerraform(this._parentIntentSignature),
      sample_utterances: cdktf.listMapper(cdktf.stringToTerraform)(this._sampleUtterances),
      conclusion_statement: cdktf.listMapper(lexIntentConclusionStatementToTerraform)(this._conclusionStatement),
      confirmation_prompt: cdktf.listMapper(lexIntentConfirmationPromptToTerraform)(this._confirmationPrompt),
      dialog_code_hook: cdktf.listMapper(lexIntentDialogCodeHookToTerraform)(this._dialogCodeHook),
      follow_up_prompt: cdktf.listMapper(lexIntentFollowUpPromptToTerraform)(this._followUpPrompt),
      fulfillment_activity: cdktf.listMapper(lexIntentFulfillmentActivityToTerraform)(this._fulfillmentActivity),
      rejection_statement: cdktf.listMapper(lexIntentRejectionStatementToTerraform)(this._rejectionStatement),
      slot: cdktf.listMapper(lexIntentSlotToTerraform)(this._slot),
      timeouts: lexIntentTimeoutsToTerraform(this._timeouts),
    };
  }
}
