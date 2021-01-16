// https://www.terraform.io/docs/providers/aws/r/lex_bot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LexBotConfig extends cdktf.TerraformMetaArguments {
  readonly childDirected: boolean;
  readonly createVersion?: boolean;
  readonly description?: string;
  readonly detectSentiment?: boolean;
  readonly enableModelImprovements?: boolean;
  readonly idleSessionTtlInSeconds?: number;
  readonly locale?: string;
  readonly name: string;
  readonly nluIntentConfidenceThreshold?: number;
  readonly processBehavior?: string;
  readonly voiceId?: string;
  /** abort_statement block */
  readonly abortStatement: LexBotAbortStatement[];
  /** clarification_prompt block */
  readonly clarificationPrompt?: LexBotClarificationPrompt[];
  /** intent block */
  readonly intent: LexBotIntent[];
  /** timeouts block */
  readonly timeouts?: LexBotTimeouts;
}
export interface LexBotAbortStatementMessage {
  readonly content: string;
  readonly contentType: string;
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
  readonly responseCard?: string;
  /** message block */
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
  readonly content: string;
  readonly contentType: string;
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
  readonly maxAttempts: number;
  readonly responseCard?: string;
  /** message block */
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
  readonly intentName: string;
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
  readonly create?: string;
  readonly delete?: string;
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


// Resource

export class LexBot extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _childDirected: boolean;
  public get childDirected() {
    return this.getBooleanAttribute('child_directed');
  }
  public set childDirected(value: boolean) {
    this._childDirected = value;
  }
  // Temporarily expose input value. Use with caution.
  public get childDirectedInput() {
    return this._childDirected
  }

  // create_version - computed: false, optional: true, required: false
  private _createVersion?: boolean;
  public get createVersion() {
    return this.getBooleanAttribute('create_version');
  }
  public set createVersion(value: boolean ) {
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
  private _detectSentiment?: boolean;
  public get detectSentiment() {
    return this.getBooleanAttribute('detect_sentiment');
  }
  public set detectSentiment(value: boolean ) {
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
  private _enableModelImprovements?: boolean;
  public get enableModelImprovements() {
    return this.getBooleanAttribute('enable_model_improvements');
  }
  public set enableModelImprovements(value: boolean ) {
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
