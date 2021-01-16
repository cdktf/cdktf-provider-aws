// https://www.terraform.io/docs/providers/aws/r/lex_intent.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LexIntentConfig extends TerraformMetaArguments {
  readonly createVersion?: boolean;
  readonly description?: string;
  readonly name: string;
  readonly parentIntentSignature?: string;
  readonly sampleUtterances?: string[];
  /** conclusion_statement block */
  readonly conclusionStatement?: LexIntentConclusionStatement[];
  /** confirmation_prompt block */
  readonly confirmationPrompt?: LexIntentConfirmationPrompt[];
  /** dialog_code_hook block */
  readonly dialogCodeHook?: LexIntentDialogCodeHook[];
  /** follow_up_prompt block */
  readonly followUpPrompt?: LexIntentFollowUpPrompt[];
  /** fulfillment_activity block */
  readonly fulfillmentActivity: LexIntentFulfillmentActivity[];
  /** rejection_statement block */
  readonly rejectionStatement?: LexIntentRejectionStatement[];
  /** slot block */
  readonly slot?: LexIntentSlot[];
  /** timeouts block */
  readonly timeouts?: LexIntentTimeouts;
}
export interface LexIntentConclusionStatementMessage {
  readonly content: string;
  readonly contentType: string;
  readonly groupNumber?: number;
}
export interface LexIntentConclusionStatement {
  readonly responseCard?: string;
  /** message block */
  readonly message: LexIntentConclusionStatementMessage[];
}
export interface LexIntentConfirmationPromptMessage {
  readonly content: string;
  readonly contentType: string;
  readonly groupNumber?: number;
}
export interface LexIntentConfirmationPrompt {
  readonly maxAttempts: number;
  readonly responseCard?: string;
  /** message block */
  readonly message: LexIntentConfirmationPromptMessage[];
}
export interface LexIntentDialogCodeHook {
  readonly messageVersion: string;
  readonly uri: string;
}
export interface LexIntentFollowUpPromptPromptMessage {
  readonly content: string;
  readonly contentType: string;
  readonly groupNumber?: number;
}
export interface LexIntentFollowUpPromptPrompt {
  readonly maxAttempts: number;
  readonly responseCard?: string;
  /** message block */
  readonly message: LexIntentFollowUpPromptPromptMessage[];
}
export interface LexIntentFollowUpPromptRejectionStatementMessage {
  readonly content: string;
  readonly contentType: string;
  readonly groupNumber?: number;
}
export interface LexIntentFollowUpPromptRejectionStatement {
  readonly responseCard?: string;
  /** message block */
  readonly message: LexIntentFollowUpPromptRejectionStatementMessage[];
}
export interface LexIntentFollowUpPrompt {
  /** prompt block */
  readonly prompt: LexIntentFollowUpPromptPrompt[];
  /** rejection_statement block */
  readonly rejectionStatement: LexIntentFollowUpPromptRejectionStatement[];
}
export interface LexIntentFulfillmentActivityCodeHook {
  readonly messageVersion: string;
  readonly uri: string;
}
export interface LexIntentFulfillmentActivity {
  readonly type: string;
  /** code_hook block */
  readonly codeHook?: LexIntentFulfillmentActivityCodeHook[];
}
export interface LexIntentRejectionStatementMessage {
  readonly content: string;
  readonly contentType: string;
  readonly groupNumber?: number;
}
export interface LexIntentRejectionStatement {
  readonly responseCard?: string;
  /** message block */
  readonly message: LexIntentRejectionStatementMessage[];
}
export interface LexIntentSlotValueElicitationPromptMessage {
  readonly content: string;
  readonly contentType: string;
  readonly groupNumber?: number;
}
export interface LexIntentSlotValueElicitationPrompt {
  readonly maxAttempts: number;
  readonly responseCard?: string;
  /** message block */
  readonly message: LexIntentSlotValueElicitationPromptMessage[];
}
export interface LexIntentSlot {
  readonly description?: string;
  readonly name: string;
  readonly priority?: number;
  readonly responseCard?: string;
  readonly sampleUtterances?: string[];
  readonly slotConstraint: string;
  readonly slotType: string;
  readonly slotTypeVersion?: string;
  /** value_elicitation_prompt block */
  readonly valueElicitationPrompt?: LexIntentSlotValueElicitationPrompt[];
}
export interface LexIntentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class LexIntent extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // checksum - computed: true, optional: false, required: true
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // create_version - computed: false, optional: true, required: false
  private _createVersion?: boolean;
  public get createVersion() {
    return this._createVersion;
  }
  public set createVersion(value: boolean | undefined) {
    this._createVersion = value;
  }

  // created_date - computed: true, optional: false, required: true
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_updated_date - computed: true, optional: false, required: true
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // parent_intent_signature - computed: false, optional: true, required: false
  private _parentIntentSignature?: string;
  public get parentIntentSignature() {
    return this._parentIntentSignature;
  }
  public set parentIntentSignature(value: string | undefined) {
    this._parentIntentSignature = value;
  }

  // sample_utterances - computed: false, optional: true, required: false
  private _sampleUtterances?: string[];
  public get sampleUtterances() {
    return this._sampleUtterances;
  }
  public set sampleUtterances(value: string[] | undefined) {
    this._sampleUtterances = value;
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // conclusion_statement - computed: false, optional: true, required: false
  private _conclusionStatement?: LexIntentConclusionStatement[];
  public get conclusionStatement() {
    return this._conclusionStatement;
  }
  public set conclusionStatement(value: LexIntentConclusionStatement[] | undefined) {
    this._conclusionStatement = value;
  }

  // confirmation_prompt - computed: false, optional: true, required: false
  private _confirmationPrompt?: LexIntentConfirmationPrompt[];
  public get confirmationPrompt() {
    return this._confirmationPrompt;
  }
  public set confirmationPrompt(value: LexIntentConfirmationPrompt[] | undefined) {
    this._confirmationPrompt = value;
  }

  // dialog_code_hook - computed: false, optional: true, required: false
  private _dialogCodeHook?: LexIntentDialogCodeHook[];
  public get dialogCodeHook() {
    return this._dialogCodeHook;
  }
  public set dialogCodeHook(value: LexIntentDialogCodeHook[] | undefined) {
    this._dialogCodeHook = value;
  }

  // follow_up_prompt - computed: false, optional: true, required: false
  private _followUpPrompt?: LexIntentFollowUpPrompt[];
  public get followUpPrompt() {
    return this._followUpPrompt;
  }
  public set followUpPrompt(value: LexIntentFollowUpPrompt[] | undefined) {
    this._followUpPrompt = value;
  }

  // fulfillment_activity - computed: false, optional: false, required: true
  private _fulfillmentActivity: LexIntentFulfillmentActivity[];
  public get fulfillmentActivity() {
    return this._fulfillmentActivity;
  }
  public set fulfillmentActivity(value: LexIntentFulfillmentActivity[]) {
    this._fulfillmentActivity = value;
  }

  // rejection_statement - computed: false, optional: true, required: false
  private _rejectionStatement?: LexIntentRejectionStatement[];
  public get rejectionStatement() {
    return this._rejectionStatement;
  }
  public set rejectionStatement(value: LexIntentRejectionStatement[] | undefined) {
    this._rejectionStatement = value;
  }

  // slot - computed: false, optional: true, required: false
  private _slot?: LexIntentSlot[];
  public get slot() {
    return this._slot;
  }
  public set slot(value: LexIntentSlot[] | undefined) {
    this._slot = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LexIntentTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LexIntentTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_version: this._createVersion,
      description: this._description,
      name: this._name,
      parent_intent_signature: this._parentIntentSignature,
      sample_utterances: this._sampleUtterances,
      conclusion_statement: this._conclusionStatement,
      confirmation_prompt: this._confirmationPrompt,
      dialog_code_hook: this._dialogCodeHook,
      follow_up_prompt: this._followUpPrompt,
      fulfillment_activity: this._fulfillmentActivity,
      rejection_statement: this._rejectionStatement,
      slot: this._slot,
      timeouts: this._timeouts,
    };
  }
}
