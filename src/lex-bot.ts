// https://www.terraform.io/docs/providers/aws/r/lex_bot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LexBotConfig extends TerraformMetaArguments {
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
export interface LexBotAbortStatement {
  readonly responseCard?: string;
  /** message block */
  readonly message: LexBotAbortStatementMessage[];
}
export interface LexBotClarificationPromptMessage {
  readonly content: string;
  readonly contentType: string;
  readonly groupNumber?: number;
}
export interface LexBotClarificationPrompt {
  readonly maxAttempts: number;
  readonly responseCard?: string;
  /** message block */
  readonly message: LexBotClarificationPromptMessage[];
}
export interface LexBotIntent {
  readonly intentName: string;
  readonly intentVersion: string;
}
export interface LexBotTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class LexBot extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // checksum - computed: true, optional: false, required: true
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // child_directed - computed: false, optional: false, required: true
  private _childDirected: boolean;
  public get childDirected() {
    return this._childDirected;
  }
  public set childDirected(value: boolean) {
    this._childDirected = value;
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

  // detect_sentiment - computed: false, optional: true, required: false
  private _detectSentiment?: boolean;
  public get detectSentiment() {
    return this._detectSentiment;
  }
  public set detectSentiment(value: boolean | undefined) {
    this._detectSentiment = value;
  }

  // enable_model_improvements - computed: false, optional: true, required: false
  private _enableModelImprovements?: boolean;
  public get enableModelImprovements() {
    return this._enableModelImprovements;
  }
  public set enableModelImprovements(value: boolean | undefined) {
    this._enableModelImprovements = value;
  }

  // failure_reason - computed: true, optional: false, required: true
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // idle_session_ttl_in_seconds - computed: false, optional: true, required: false
  private _idleSessionTtlInSeconds?: number;
  public get idleSessionTtlInSeconds() {
    return this._idleSessionTtlInSeconds;
  }
  public set idleSessionTtlInSeconds(value: number | undefined) {
    this._idleSessionTtlInSeconds = value;
  }

  // last_updated_date - computed: true, optional: false, required: true
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // locale - computed: false, optional: true, required: false
  private _locale?: string;
  public get locale() {
    return this._locale;
  }
  public set locale(value: string | undefined) {
    this._locale = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // nlu_intent_confidence_threshold - computed: false, optional: true, required: false
  private _nluIntentConfidenceThreshold?: number;
  public get nluIntentConfidenceThreshold() {
    return this._nluIntentConfidenceThreshold;
  }
  public set nluIntentConfidenceThreshold(value: number | undefined) {
    this._nluIntentConfidenceThreshold = value;
  }

  // process_behavior - computed: false, optional: true, required: false
  private _processBehavior?: string;
  public get processBehavior() {
    return this._processBehavior;
  }
  public set processBehavior(value: string | undefined) {
    this._processBehavior = value;
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // voice_id - computed: true, optional: true, required: false
  private _voiceId?: string;
  public get voiceId() {
    return this._voiceId ?? this.getStringAttribute('voice_id');
  }
  public set voiceId(value: string | undefined) {
    this._voiceId = value;
  }

  // abort_statement - computed: false, optional: false, required: true
  private _abortStatement: LexBotAbortStatement[];
  public get abortStatement() {
    return this._abortStatement;
  }
  public set abortStatement(value: LexBotAbortStatement[]) {
    this._abortStatement = value;
  }

  // clarification_prompt - computed: false, optional: true, required: false
  private _clarificationPrompt?: LexBotClarificationPrompt[];
  public get clarificationPrompt() {
    return this._clarificationPrompt;
  }
  public set clarificationPrompt(value: LexBotClarificationPrompt[] | undefined) {
    this._clarificationPrompt = value;
  }

  // intent - computed: false, optional: false, required: true
  private _intent: LexBotIntent[];
  public get intent() {
    return this._intent;
  }
  public set intent(value: LexBotIntent[]) {
    this._intent = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LexBotTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LexBotTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      child_directed: this._childDirected,
      create_version: this._createVersion,
      description: this._description,
      detect_sentiment: this._detectSentiment,
      enable_model_improvements: this._enableModelImprovements,
      idle_session_ttl_in_seconds: this._idleSessionTtlInSeconds,
      locale: this._locale,
      name: this._name,
      nlu_intent_confidence_threshold: this._nluIntentConfidenceThreshold,
      process_behavior: this._processBehavior,
      voice_id: this._voiceId,
      abort_statement: this._abortStatement,
      clarification_prompt: this._clarificationPrompt,
      intent: this._intent,
      timeouts: this._timeouts,
    };
  }
}
