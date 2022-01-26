// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Lex
*/
export interface LexBotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#child_directed LexBot#child_directed}
  */
  readonly childDirected: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#create_version LexBot#create_version}
  */
  readonly createVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#description LexBot#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#detect_sentiment LexBot#detect_sentiment}
  */
  readonly detectSentiment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#enable_model_improvements LexBot#enable_model_improvements}
  */
  readonly enableModelImprovements?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#idle_session_ttl_in_seconds LexBot#idle_session_ttl_in_seconds}
  */
  readonly idleSessionTtlInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#locale LexBot#locale}
  */
  readonly locale?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#name LexBot#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#nlu_intent_confidence_threshold LexBot#nlu_intent_confidence_threshold}
  */
  readonly nluIntentConfidenceThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#process_behavior LexBot#process_behavior}
  */
  readonly processBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#voice_id LexBot#voice_id}
  */
  readonly voiceId?: string;
  /**
  * abort_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#abort_statement LexBot#abort_statement}
  */
  readonly abortStatement: LexBotAbortStatement;
  /**
  * clarification_prompt block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#clarification_prompt LexBot#clarification_prompt}
  */
  readonly clarificationPrompt?: LexBotClarificationPrompt;
  /**
  * intent block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#intent LexBot#intent}
  */
  readonly intent: LexBotIntent[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#timeouts LexBot#timeouts}
  */
  readonly timeouts?: LexBotTimeouts;
}
export interface LexBotAbortStatementMessage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content LexBot#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content_type LexBot#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#group_number LexBot#group_number}
  */
  readonly groupNumber?: number;
}

export function lexBotAbortStatementMessageToTerraform(struct?: LexBotAbortStatementMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    group_number: cdktf.numberToTerraform(struct!.groupNumber),
  }
}

export interface LexBotAbortStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#response_card LexBot#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#message LexBot#message}
  */
  readonly message: LexBotAbortStatementMessage[] | cdktf.IResolvable;
}

export function lexBotAbortStatementToTerraform(struct?: LexBotAbortStatementOutputReference | LexBotAbortStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response_card: cdktf.stringToTerraform(struct!.responseCard),
    message: cdktf.listMapper(lexBotAbortStatementMessageToTerraform)(struct!.message),
  }
}

export class LexBotAbortStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LexBotAbortStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCard = this._responseCard;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotAbortStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._responseCard = undefined;
      this._message = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._responseCard = value.responseCard;
      this._message = value.message;
    }
  }

  // response_card - computed: false, optional: true, required: false
  private _responseCard?: string; 
  public get responseCard() {
    return this.getStringAttribute('response_card');
  }
  public set responseCard(value: string) {
    this._responseCard = value;
  }
  public resetResponseCard() {
    this._responseCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCardInput() {
    return this._responseCard;
  }

  // message - computed: false, optional: false, required: true
  private _message?: LexBotAbortStatementMessage[] | cdktf.IResolvable; 
  public get message() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('message')));
  }
  public set message(value: LexBotAbortStatementMessage[] | cdktf.IResolvable) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }
}
export interface LexBotClarificationPromptMessage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content LexBot#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content_type LexBot#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#group_number LexBot#group_number}
  */
  readonly groupNumber?: number;
}

export function lexBotClarificationPromptMessageToTerraform(struct?: LexBotClarificationPromptMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    group_number: cdktf.numberToTerraform(struct!.groupNumber),
  }
}

export interface LexBotClarificationPrompt {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#max_attempts LexBot#max_attempts}
  */
  readonly maxAttempts: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#response_card LexBot#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#message LexBot#message}
  */
  readonly message: LexBotClarificationPromptMessage[] | cdktf.IResolvable;
}

export function lexBotClarificationPromptToTerraform(struct?: LexBotClarificationPromptOutputReference | LexBotClarificationPrompt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    response_card: cdktf.stringToTerraform(struct!.responseCard),
    message: cdktf.listMapper(lexBotClarificationPromptMessageToTerraform)(struct!.message),
  }
}

export class LexBotClarificationPromptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LexBotClarificationPrompt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAttempts = this._maxAttempts;
    }
    if (this._responseCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCard = this._responseCard;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotClarificationPrompt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAttempts = undefined;
      this._responseCard = undefined;
      this._message = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAttempts = value.maxAttempts;
      this._responseCard = value.responseCard;
      this._message = value.message;
    }
  }

  // max_attempts - computed: false, optional: false, required: true
  private _maxAttempts?: number; 
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
  public set maxAttempts(value: number) {
    this._maxAttempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsInput() {
    return this._maxAttempts;
  }

  // response_card - computed: false, optional: true, required: false
  private _responseCard?: string; 
  public get responseCard() {
    return this.getStringAttribute('response_card');
  }
  public set responseCard(value: string) {
    this._responseCard = value;
  }
  public resetResponseCard() {
    this._responseCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCardInput() {
    return this._responseCard;
  }

  // message - computed: false, optional: false, required: true
  private _message?: LexBotClarificationPromptMessage[] | cdktf.IResolvable; 
  public get message() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('message')));
  }
  public set message(value: LexBotClarificationPromptMessage[] | cdktf.IResolvable) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }
}
export interface LexBotIntent {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#intent_name LexBot#intent_name}
  */
  readonly intentName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#intent_version LexBot#intent_version}
  */
  readonly intentVersion: string;
}

export function lexBotIntentToTerraform(struct?: LexBotIntent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    intent_name: cdktf.stringToTerraform(struct!.intentName),
    intent_version: cdktf.stringToTerraform(struct!.intentVersion),
  }
}

export interface LexBotTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#create LexBot#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#delete LexBot#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#update LexBot#update}
  */
  readonly update?: string;
}

export function lexBotTimeoutsToTerraform(struct?: LexBotTimeoutsOutputReference | LexBotTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class LexBotTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LexBotTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_bot aws_lex_bot}
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
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_bot aws_lex_bot} Resource
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
    this._abortStatement.internalValue = config.abortStatement;
    this._clarificationPrompt.internalValue = config.clarificationPrompt;
    this._intent = config.intent;
    this._timeouts.internalValue = config.timeouts;
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
  private _childDirected?: boolean | cdktf.IResolvable; 
  public get childDirected() {
    return this.getBooleanAttribute('child_directed');
  }
  public set childDirected(value: boolean | cdktf.IResolvable) {
    this._childDirected = value;
  }
  // Temporarily expose input value. Use with caution.
  public get childDirectedInput() {
    return this._childDirected;
  }

  // create_version - computed: false, optional: true, required: false
  private _createVersion?: boolean | cdktf.IResolvable; 
  public get createVersion() {
    return this.getBooleanAttribute('create_version');
  }
  public set createVersion(value: boolean | cdktf.IResolvable) {
    this._createVersion = value;
  }
  public resetCreateVersion() {
    this._createVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createVersionInput() {
    return this._createVersion;
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
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // detect_sentiment - computed: false, optional: true, required: false
  private _detectSentiment?: boolean | cdktf.IResolvable; 
  public get detectSentiment() {
    return this.getBooleanAttribute('detect_sentiment');
  }
  public set detectSentiment(value: boolean | cdktf.IResolvable) {
    this._detectSentiment = value;
  }
  public resetDetectSentiment() {
    this._detectSentiment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectSentimentInput() {
    return this._detectSentiment;
  }

  // enable_model_improvements - computed: false, optional: true, required: false
  private _enableModelImprovements?: boolean | cdktf.IResolvable; 
  public get enableModelImprovements() {
    return this.getBooleanAttribute('enable_model_improvements');
  }
  public set enableModelImprovements(value: boolean | cdktf.IResolvable) {
    this._enableModelImprovements = value;
  }
  public resetEnableModelImprovements() {
    this._enableModelImprovements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableModelImprovementsInput() {
    return this._enableModelImprovements;
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
  public set idleSessionTtlInSeconds(value: number) {
    this._idleSessionTtlInSeconds = value;
  }
  public resetIdleSessionTtlInSeconds() {
    this._idleSessionTtlInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleSessionTtlInSecondsInput() {
    return this._idleSessionTtlInSeconds;
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
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nlu_intent_confidence_threshold - computed: false, optional: true, required: false
  private _nluIntentConfidenceThreshold?: number; 
  public get nluIntentConfidenceThreshold() {
    return this.getNumberAttribute('nlu_intent_confidence_threshold');
  }
  public set nluIntentConfidenceThreshold(value: number) {
    this._nluIntentConfidenceThreshold = value;
  }
  public resetNluIntentConfidenceThreshold() {
    this._nluIntentConfidenceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nluIntentConfidenceThresholdInput() {
    return this._nluIntentConfidenceThreshold;
  }

  // process_behavior - computed: false, optional: true, required: false
  private _processBehavior?: string; 
  public get processBehavior() {
    return this.getStringAttribute('process_behavior');
  }
  public set processBehavior(value: string) {
    this._processBehavior = value;
  }
  public resetProcessBehavior() {
    this._processBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processBehaviorInput() {
    return this._processBehavior;
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
    return this._voiceId;
  }

  // abort_statement - computed: false, optional: false, required: true
  private _abortStatement = new LexBotAbortStatementOutputReference(this, "abort_statement", true);
  public get abortStatement() {
    return this._abortStatement;
  }
  public putAbortStatement(value: LexBotAbortStatement) {
    this._abortStatement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get abortStatementInput() {
    return this._abortStatement.internalValue;
  }

  // clarification_prompt - computed: false, optional: true, required: false
  private _clarificationPrompt = new LexBotClarificationPromptOutputReference(this, "clarification_prompt", true);
  public get clarificationPrompt() {
    return this._clarificationPrompt;
  }
  public putClarificationPrompt(value: LexBotClarificationPrompt) {
    this._clarificationPrompt.internalValue = value;
  }
  public resetClarificationPrompt() {
    this._clarificationPrompt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clarificationPromptInput() {
    return this._clarificationPrompt.internalValue;
  }

  // intent - computed: false, optional: false, required: true
  private _intent?: LexBotIntent[] | cdktf.IResolvable; 
  public get intent() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('intent')));
  }
  public set intent(value: LexBotIntent[] | cdktf.IResolvable) {
    this._intent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intentInput() {
    return this._intent;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LexBotTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LexBotTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      abort_statement: lexBotAbortStatementToTerraform(this._abortStatement.internalValue),
      clarification_prompt: lexBotClarificationPromptToTerraform(this._clarificationPrompt.internalValue),
      intent: cdktf.listMapper(lexBotIntentToTerraform)(this._intent),
      timeouts: lexBotTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
