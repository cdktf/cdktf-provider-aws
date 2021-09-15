// https://www.terraform.io/docs/providers/aws/r/lex_bot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LexBotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#child_directed LexBot#child_directed}
  */
  readonly childDirected: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#create_version LexBot#create_version}
  */
  readonly createVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#description LexBot#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#detect_sentiment LexBot#detect_sentiment}
  */
  readonly detectSentiment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#enable_model_improvements LexBot#enable_model_improvements}
  */
  readonly enableModelImprovements?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#idle_session_ttl_in_seconds LexBot#idle_session_ttl_in_seconds}
  */
  readonly idleSessionTtlInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#locale LexBot#locale}
  */
  readonly locale?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#name LexBot#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#nlu_intent_confidence_threshold LexBot#nlu_intent_confidence_threshold}
  */
  readonly nluIntentConfidenceThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#process_behavior LexBot#process_behavior}
  */
  readonly processBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#voice_id LexBot#voice_id}
  */
  readonly voiceId?: string;
  /**
  * abort_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#abort_statement LexBot#abort_statement}
  */
  readonly abortStatement: LexBotAbortStatement[];
  /**
  * clarification_prompt block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#clarification_prompt LexBot#clarification_prompt}
  */
  readonly clarificationPrompt?: LexBotClarificationPrompt[];
  /**
  * intent block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#intent LexBot#intent}
  */
  readonly intent: LexBotIntent[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#timeouts LexBot#timeouts}
  */
  readonly timeouts?: LexBotTimeouts;
}
export interface LexBotAbortStatementMessage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#content LexBot#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#content_type LexBot#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#group_number LexBot#group_number}
  */
  readonly groupNumber?: number;
}

function lexBotAbortStatementMessageToTerraform(struct?: LexBotAbortStatementMessage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    group_number: cdktf.numberToTerraform(struct!.groupNumber),
  }
}

export interface LexBotAbortStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#response_card LexBot#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#message LexBot#message}
  */
  readonly message: LexBotAbortStatementMessage[];
}

function lexBotAbortStatementToTerraform(struct?: LexBotAbortStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    response_card: cdktf.stringToTerraform(struct!.responseCard),
    message: cdktf.listMapper(lexBotAbortStatementMessageToTerraform)(struct!.message),
  }
}

export interface LexBotClarificationPromptMessage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#content LexBot#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#content_type LexBot#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#group_number LexBot#group_number}
  */
  readonly groupNumber?: number;
}

function lexBotClarificationPromptMessageToTerraform(struct?: LexBotClarificationPromptMessage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    group_number: cdktf.numberToTerraform(struct!.groupNumber),
  }
}

export interface LexBotClarificationPrompt {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#max_attempts LexBot#max_attempts}
  */
  readonly maxAttempts: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#response_card LexBot#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#message LexBot#message}
  */
  readonly message: LexBotClarificationPromptMessage[];
}

function lexBotClarificationPromptToTerraform(struct?: LexBotClarificationPrompt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    response_card: cdktf.stringToTerraform(struct!.responseCard),
    message: cdktf.listMapper(lexBotClarificationPromptMessageToTerraform)(struct!.message),
  }
}

export interface LexBotIntent {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#intent_name LexBot#intent_name}
  */
  readonly intentName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#intent_version LexBot#intent_version}
  */
  readonly intentVersion: string;
}

function lexBotIntentToTerraform(struct?: LexBotIntent): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    intent_name: cdktf.stringToTerraform(struct!.intentName),
    intent_version: cdktf.stringToTerraform(struct!.intentVersion),
  }
}

export interface LexBotTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#create LexBot#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#delete LexBot#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#update LexBot#update}
  */
  readonly update?: string;
}

function lexBotTimeoutsToTerraform(struct?: LexBotTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html aws_lex_bot}
*/
export class LexBot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lex_bot";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html aws_lex_bot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LexBotConfig
  */
  public constructor(scope: Construct, id: string, config: LexBotConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lex_bot',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._childDirected = config.childDirected;
    this._createVersion = config.createVersion;
    this._description = config.description;
    this._detectSentiment = config.detectSentiment;
    this._enableModelImprovements = config.enableModelImprovements;
    this._idleSessionTtlInSeconds = config.idleSessionTtlInSeconds;
    this._locale = config.locale;
    this._name = config.name;
    this._nluIntentConfidenceThreshold = config.nluIntentConfidenceThreshold;
    this._processBehavior = config.processBehavior;
    this._voiceId = config.voiceId;
    this._abortStatement = config.abortStatement;
    this._clarificationPrompt = config.clarificationPrompt;
    this._intent = config.intent;
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

  // child_directed - computed: false, optional: false, required: true
  private _childDirected: boolean | cdktf.IResolvable;
  public get childDirected() {
    return this.getBooleanAttribute('child_directed');
  }
  public set childDirected(value: boolean | cdktf.IResolvable) {
    this._childDirected = value;
  }
  // Temporarily expose input value. Use with caution.
  public get childDirectedInput() {
    return this._childDirected
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

  // detect_sentiment - computed: false, optional: true, required: false
  private _detectSentiment?: boolean | cdktf.IResolvable;
  public get detectSentiment() {
    return this.getBooleanAttribute('detect_sentiment');
  }
  public set detectSentiment(value: boolean | cdktf.IResolvable ) {
    this._detectSentiment = value;
  }
  public resetDetectSentiment() {
    this._detectSentiment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectSentimentInput() {
    return this._detectSentiment
  }

  // enable_model_improvements - computed: false, optional: true, required: false
  private _enableModelImprovements?: boolean | cdktf.IResolvable;
  public get enableModelImprovements() {
    return this.getBooleanAttribute('enable_model_improvements');
  }
  public set enableModelImprovements(value: boolean | cdktf.IResolvable ) {
    this._enableModelImprovements = value;
  }
  public resetEnableModelImprovements() {
    this._enableModelImprovements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableModelImprovementsInput() {
    return this._enableModelImprovements
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_session_ttl_in_seconds - computed: false, optional: true, required: false
  private _idleSessionTtlInSeconds?: number;
  public get idleSessionTtlInSeconds() {
    return this.getNumberAttribute('idle_session_ttl_in_seconds');
  }
  public set idleSessionTtlInSeconds(value: number ) {
    this._idleSessionTtlInSeconds = value;
  }
  public resetIdleSessionTtlInSeconds() {
    this._idleSessionTtlInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleSessionTtlInSecondsInput() {
    return this._idleSessionTtlInSeconds
  }

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // locale - computed: false, optional: true, required: false
  private _locale?: string;
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string ) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale
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

  // nlu_intent_confidence_threshold - computed: false, optional: true, required: false
  private _nluIntentConfidenceThreshold?: number;
  public get nluIntentConfidenceThreshold() {
    return this.getNumberAttribute('nlu_intent_confidence_threshold');
  }
  public set nluIntentConfidenceThreshold(value: number ) {
    this._nluIntentConfidenceThreshold = value;
  }
  public resetNluIntentConfidenceThreshold() {
    this._nluIntentConfidenceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nluIntentConfidenceThresholdInput() {
    return this._nluIntentConfidenceThreshold
  }

  // process_behavior - computed: false, optional: true, required: false
  private _processBehavior?: string;
  public get processBehavior() {
    return this.getStringAttribute('process_behavior');
  }
  public set processBehavior(value: string ) {
    this._processBehavior = value;
  }
  public resetProcessBehavior() {
    this._processBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processBehaviorInput() {
    return this._processBehavior
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // voice_id - computed: true, optional: true, required: false
  private _voiceId?: string;
  public get voiceId() {
    return this.getStringAttribute('voice_id');
  }
  public set voiceId(value: string) {
    this._voiceId = value;
  }
  public resetVoiceId() {
    this._voiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceIdInput() {
    return this._voiceId
  }

  // abort_statement - computed: false, optional: false, required: true
  private _abortStatement: LexBotAbortStatement[];
  public get abortStatement() {
    return this.interpolationForAttribute('abort_statement') as any;
  }
  public set abortStatement(value: LexBotAbortStatement[]) {
    this._abortStatement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get abortStatementInput() {
    return this._abortStatement
  }

  // clarification_prompt - computed: false, optional: true, required: false
  private _clarificationPrompt?: LexBotClarificationPrompt[];
  public get clarificationPrompt() {
    return this.interpolationForAttribute('clarification_prompt') as any;
  }
  public set clarificationPrompt(value: LexBotClarificationPrompt[] ) {
    this._clarificationPrompt = value;
  }
  public resetClarificationPrompt() {
    this._clarificationPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clarificationPromptInput() {
    return this._clarificationPrompt
  }

  // intent - computed: false, optional: false, required: true
  private _intent: LexBotIntent[];
  public get intent() {
    return this.interpolationForAttribute('intent') as any;
  }
  public set intent(value: LexBotIntent[]) {
    this._intent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intentInput() {
    return this._intent
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LexBotTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LexBotTimeouts ) {
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
      child_directed: cdktf.booleanToTerraform(this._childDirected),
      create_version: cdktf.booleanToTerraform(this._createVersion),
      description: cdktf.stringToTerraform(this._description),
      detect_sentiment: cdktf.booleanToTerraform(this._detectSentiment),
      enable_model_improvements: cdktf.booleanToTerraform(this._enableModelImprovements),
      idle_session_ttl_in_seconds: cdktf.numberToTerraform(this._idleSessionTtlInSeconds),
      locale: cdktf.stringToTerraform(this._locale),
      name: cdktf.stringToTerraform(this._name),
      nlu_intent_confidence_threshold: cdktf.numberToTerraform(this._nluIntentConfidenceThreshold),
      process_behavior: cdktf.stringToTerraform(this._processBehavior),
      voice_id: cdktf.stringToTerraform(this._voiceId),
      abort_statement: cdktf.listMapper(lexBotAbortStatementToTerraform)(this._abortStatement),
      clarification_prompt: cdktf.listMapper(lexBotClarificationPromptToTerraform)(this._clarificationPrompt),
      intent: cdktf.listMapper(lexBotIntentToTerraform)(this._intent),
      timeouts: lexBotTimeoutsToTerraform(this._timeouts),
    };
  }
}
