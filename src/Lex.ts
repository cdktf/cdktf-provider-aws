// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Lex
*/
export namespace Lex {
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
    readonly abortStatement: LexBotAbortStatement;
    /**
    * clarification_prompt block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#clarification_prompt LexBot#clarification_prompt}
    */
    readonly clarificationPrompt?: LexBotClarificationPrompt;
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

  function lexBotAbortStatementToTerraform(struct?: LexBotAbortStatementOutputReference | LexBotAbortStatement): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      response_card: cdktf.stringToTerraform(struct!.responseCard),
      message: cdktf.listMapper(lexBotAbortStatementMessageToTerraform)(struct!.message),
    }
  }

  export class LexBotAbortStatementOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // response_card - computed: false, optional: true, required: false
    private _responseCard?: string | undefined; 
    public get responseCard() {
      return this.getStringAttribute('response_card');
    }
    public set responseCard(value: string | undefined) {
      this._responseCard = value;
    }
    public resetResponseCard() {
      this._responseCard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseCardInput() {
      return this._responseCard
    }

    // message - computed: false, optional: false, required: true
    private _message?: LexBotAbortStatementMessage[]; 
    public get message() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('message') as any;
    }
    public set message(value: LexBotAbortStatementMessage[]) {
      this._message = value;
    }
    // Temporarily expose input value. Use with caution.
    public get messageInput() {
      return this._message
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

  function lexBotClarificationPromptToTerraform(struct?: LexBotClarificationPromptOutputReference | LexBotClarificationPrompt): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._maxAttempts
    }

    // response_card - computed: false, optional: true, required: false
    private _responseCard?: string | undefined; 
    public get responseCard() {
      return this.getStringAttribute('response_card');
    }
    public set responseCard(value: string | undefined) {
      this._responseCard = value;
    }
    public resetResponseCard() {
      this._responseCard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseCardInput() {
      return this._responseCard
    }

    // message - computed: false, optional: false, required: true
    private _message?: LexBotClarificationPromptMessage[]; 
    public get message() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('message') as any;
    }
    public set message(value: LexBotClarificationPromptMessage[]) {
      this._message = value;
    }
    // Temporarily expose input value. Use with caution.
    public get messageInput() {
      return this._message
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

  function lexBotTimeoutsToTerraform(struct?: LexBotTimeoutsOutputReference | LexBotTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
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
    private _childDirected?: boolean | cdktf.IResolvable; 
    public get childDirected() {
      return this.getBooleanAttribute('child_directed') as any;
    }
    public set childDirected(value: boolean | cdktf.IResolvable) {
      this._childDirected = value;
    }
    // Temporarily expose input value. Use with caution.
    public get childDirectedInput() {
      return this._childDirected
    }

    // create_version - computed: false, optional: true, required: false
    private _createVersion?: boolean | cdktf.IResolvable | undefined; 
    public get createVersion() {
      return this.getBooleanAttribute('create_version') as any;
    }
    public set createVersion(value: boolean | cdktf.IResolvable | undefined) {
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
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _detectSentiment?: boolean | cdktf.IResolvable | undefined; 
    public get detectSentiment() {
      return this.getBooleanAttribute('detect_sentiment') as any;
    }
    public set detectSentiment(value: boolean | cdktf.IResolvable | undefined) {
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
    private _enableModelImprovements?: boolean | cdktf.IResolvable | undefined; 
    public get enableModelImprovements() {
      return this.getBooleanAttribute('enable_model_improvements') as any;
    }
    public set enableModelImprovements(value: boolean | cdktf.IResolvable | undefined) {
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
    private _idleSessionTtlInSeconds?: number | undefined; 
    public get idleSessionTtlInSeconds() {
      return this.getNumberAttribute('idle_session_ttl_in_seconds');
    }
    public set idleSessionTtlInSeconds(value: number | undefined) {
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
    private _locale?: string | undefined; 
    public get locale() {
      return this.getStringAttribute('locale');
    }
    public set locale(value: string | undefined) {
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
    private _name?: string; 
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
    private _nluIntentConfidenceThreshold?: number | undefined; 
    public get nluIntentConfidenceThreshold() {
      return this.getNumberAttribute('nlu_intent_confidence_threshold');
    }
    public set nluIntentConfidenceThreshold(value: number | undefined) {
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
    private _processBehavior?: string | undefined; 
    public get processBehavior() {
      return this.getStringAttribute('process_behavior');
    }
    public set processBehavior(value: string | undefined) {
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
    private _voiceId?: string | undefined; 
    public get voiceId() {
      return this.getStringAttribute('voice_id');
    }
    public set voiceId(value: string | undefined) {
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
    private _abortStatement?: LexBotAbortStatement; 
    private __abortStatementOutput = new LexBotAbortStatementOutputReference(this as any, "abort_statement", true);
    public get abortStatement() {
      return this.__abortStatementOutput;
    }
    public putAbortStatement(value: LexBotAbortStatement) {
      this._abortStatement = value;
    }
    // Temporarily expose input value. Use with caution.
    public get abortStatementInput() {
      return this._abortStatement
    }

    // clarification_prompt - computed: false, optional: true, required: false
    private _clarificationPrompt?: LexBotClarificationPrompt | undefined; 
    private __clarificationPromptOutput = new LexBotClarificationPromptOutputReference(this as any, "clarification_prompt", true);
    public get clarificationPrompt() {
      return this.__clarificationPromptOutput;
    }
    public putClarificationPrompt(value: LexBotClarificationPrompt | undefined) {
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
    private _intent?: LexBotIntent[]; 
    public get intent() {
      // Getting the computed value is not yet implemented
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
    private _timeouts?: LexBotTimeouts | undefined; 
    private __timeoutsOutput = new LexBotTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: LexBotTimeouts | undefined) {
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
        abort_statement: lexBotAbortStatementToTerraform(this._abortStatement),
        clarification_prompt: lexBotClarificationPromptToTerraform(this._clarificationPrompt),
        intent: cdktf.listMapper(lexBotIntentToTerraform)(this._intent),
        timeouts: lexBotTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface LexBotAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#bot_name LexBotAlias#bot_name}
    */
    readonly botName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#bot_version LexBotAlias#bot_version}
    */
    readonly botVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#description LexBotAlias#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#name LexBotAlias#name}
    */
    readonly name: string;
    /**
    * conversation_logs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#conversation_logs LexBotAlias#conversation_logs}
    */
    readonly conversationLogs?: LexBotAliasConversationLogs;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#timeouts LexBotAlias#timeouts}
    */
    readonly timeouts?: LexBotAliasTimeouts;
  }
  export interface LexBotAliasConversationLogsLogSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#destination LexBotAlias#destination}
    */
    readonly destination: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#kms_key_arn LexBotAlias#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#log_type LexBotAlias#log_type}
    */
    readonly logType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#resource_arn LexBotAlias#resource_arn}
    */
    readonly resourceArn: string;
  }

  function lexBotAliasConversationLogsLogSettingsToTerraform(struct?: LexBotAliasConversationLogsLogSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      destination: cdktf.stringToTerraform(struct!.destination),
      kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
      log_type: cdktf.stringToTerraform(struct!.logType),
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    }
  }

  export interface LexBotAliasConversationLogs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#iam_role_arn LexBotAlias#iam_role_arn}
    */
    readonly iamRoleArn: string;
    /**
    * log_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#log_settings LexBotAlias#log_settings}
    */
    readonly logSettings?: LexBotAliasConversationLogsLogSettings[];
  }

  function lexBotAliasConversationLogsToTerraform(struct?: LexBotAliasConversationLogsOutputReference | LexBotAliasConversationLogs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      iam_role_arn: cdktf.stringToTerraform(struct!.iamRoleArn),
      log_settings: cdktf.listMapper(lexBotAliasConversationLogsLogSettingsToTerraform)(struct!.logSettings),
    }
  }

  export class LexBotAliasConversationLogsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // iam_role_arn - computed: false, optional: false, required: true
    private _iamRoleArn?: string; 
    public get iamRoleArn() {
      return this.getStringAttribute('iam_role_arn');
    }
    public set iamRoleArn(value: string) {
      this._iamRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRoleArnInput() {
      return this._iamRoleArn
    }

    // log_settings - computed: false, optional: true, required: false
    private _logSettings?: LexBotAliasConversationLogsLogSettings[] | undefined; 
    public get logSettings() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('log_settings') as any;
    }
    public set logSettings(value: LexBotAliasConversationLogsLogSettings[] | undefined) {
      this._logSettings = value;
    }
    public resetLogSettings() {
      this._logSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logSettingsInput() {
      return this._logSettings
    }
  }
  export interface LexBotAliasTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#create LexBotAlias#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#delete LexBotAlias#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#update LexBotAlias#update}
    */
    readonly update?: string;
  }

  function lexBotAliasTimeoutsToTerraform(struct?: LexBotAliasTimeoutsOutputReference | LexBotAliasTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class LexBotAliasTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html aws_lex_bot_alias}
  */
  export class LexBotAlias extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lex_bot_alias";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html aws_lex_bot_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LexBotAliasConfig
    */
    public constructor(scope: Construct, id: string, config: LexBotAliasConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lex_bot_alias',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._botName = config.botName;
      this._botVersion = config.botVersion;
      this._description = config.description;
      this._name = config.name;
      this._conversationLogs = config.conversationLogs;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // bot_name - computed: false, optional: false, required: true
    private _botName?: string; 
    public get botName() {
      return this.getStringAttribute('bot_name');
    }
    public set botName(value: string) {
      this._botName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get botNameInput() {
      return this._botName
    }

    // bot_version - computed: false, optional: false, required: true
    private _botVersion?: string; 
    public get botVersion() {
      return this.getStringAttribute('bot_version');
    }
    public set botVersion(value: string) {
      this._botVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get botVersionInput() {
      return this._botVersion
    }

    // checksum - computed: true, optional: false, required: false
    public get checksum() {
      return this.getStringAttribute('checksum');
    }

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _name?: string; 
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

    // conversation_logs - computed: false, optional: true, required: false
    private _conversationLogs?: LexBotAliasConversationLogs | undefined; 
    private __conversationLogsOutput = new LexBotAliasConversationLogsOutputReference(this as any, "conversation_logs", true);
    public get conversationLogs() {
      return this.__conversationLogsOutput;
    }
    public putConversationLogs(value: LexBotAliasConversationLogs | undefined) {
      this._conversationLogs = value;
    }
    public resetConversationLogs() {
      this._conversationLogs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conversationLogsInput() {
      return this._conversationLogs
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: LexBotAliasTimeouts | undefined; 
    private __timeoutsOutput = new LexBotAliasTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: LexBotAliasTimeouts | undefined) {
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
        bot_name: cdktf.stringToTerraform(this._botName),
        bot_version: cdktf.stringToTerraform(this._botVersion),
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        conversation_logs: lexBotAliasConversationLogsToTerraform(this._conversationLogs),
        timeouts: lexBotAliasTimeoutsToTerraform(this._timeouts),
      };
    }
  }
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
    readonly conclusionStatement?: LexIntentConclusionStatement;
    /**
    * confirmation_prompt block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#confirmation_prompt LexIntent#confirmation_prompt}
    */
    readonly confirmationPrompt?: LexIntentConfirmationPrompt;
    /**
    * dialog_code_hook block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#dialog_code_hook LexIntent#dialog_code_hook}
    */
    readonly dialogCodeHook?: LexIntentDialogCodeHook;
    /**
    * follow_up_prompt block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#follow_up_prompt LexIntent#follow_up_prompt}
    */
    readonly followUpPrompt?: LexIntentFollowUpPrompt;
    /**
    * fulfillment_activity block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#fulfillment_activity LexIntent#fulfillment_activity}
    */
    readonly fulfillmentActivity: LexIntentFulfillmentActivity;
    /**
    * rejection_statement block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#rejection_statement LexIntent#rejection_statement}
    */
    readonly rejectionStatement?: LexIntentRejectionStatement;
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function lexIntentConclusionStatementToTerraform(struct?: LexIntentConclusionStatementOutputReference | LexIntentConclusionStatement): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      response_card: cdktf.stringToTerraform(struct!.responseCard),
      message: cdktf.listMapper(lexIntentConclusionStatementMessageToTerraform)(struct!.message),
    }
  }

  export class LexIntentConclusionStatementOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // response_card - computed: false, optional: true, required: false
    private _responseCard?: string | undefined; 
    public get responseCard() {
      return this.getStringAttribute('response_card');
    }
    public set responseCard(value: string | undefined) {
      this._responseCard = value;
    }
    public resetResponseCard() {
      this._responseCard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseCardInput() {
      return this._responseCard
    }

    // message - computed: false, optional: false, required: true
    private _message?: LexIntentConclusionStatementMessage[]; 
    public get message() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('message') as any;
    }
    public set message(value: LexIntentConclusionStatementMessage[]) {
      this._message = value;
    }
    // Temporarily expose input value. Use with caution.
    public get messageInput() {
      return this._message
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function lexIntentConfirmationPromptToTerraform(struct?: LexIntentConfirmationPromptOutputReference | LexIntentConfirmationPrompt): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
      response_card: cdktf.stringToTerraform(struct!.responseCard),
      message: cdktf.listMapper(lexIntentConfirmationPromptMessageToTerraform)(struct!.message),
    }
  }

  export class LexIntentConfirmationPromptOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._maxAttempts
    }

    // response_card - computed: false, optional: true, required: false
    private _responseCard?: string | undefined; 
    public get responseCard() {
      return this.getStringAttribute('response_card');
    }
    public set responseCard(value: string | undefined) {
      this._responseCard = value;
    }
    public resetResponseCard() {
      this._responseCard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseCardInput() {
      return this._responseCard
    }

    // message - computed: false, optional: false, required: true
    private _message?: LexIntentConfirmationPromptMessage[]; 
    public get message() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('message') as any;
    }
    public set message(value: LexIntentConfirmationPromptMessage[]) {
      this._message = value;
    }
    // Temporarily expose input value. Use with caution.
    public get messageInput() {
      return this._message
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

  function lexIntentDialogCodeHookToTerraform(struct?: LexIntentDialogCodeHookOutputReference | LexIntentDialogCodeHook): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      message_version: cdktf.stringToTerraform(struct!.messageVersion),
      uri: cdktf.stringToTerraform(struct!.uri),
    }
  }

  export class LexIntentDialogCodeHookOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // message_version - computed: false, optional: false, required: true
    private _messageVersion?: string; 
    public get messageVersion() {
      return this.getStringAttribute('message_version');
    }
    public set messageVersion(value: string) {
      this._messageVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get messageVersionInput() {
      return this._messageVersion
    }

    // uri - computed: false, optional: false, required: true
    private _uri?: string; 
    public get uri() {
      return this.getStringAttribute('uri');
    }
    public set uri(value: string) {
      this._uri = value;
    }
    // Temporarily expose input value. Use with caution.
    public get uriInput() {
      return this._uri
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function lexIntentFollowUpPromptPromptToTerraform(struct?: LexIntentFollowUpPromptPromptOutputReference | LexIntentFollowUpPromptPrompt): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
      response_card: cdktf.stringToTerraform(struct!.responseCard),
      message: cdktf.listMapper(lexIntentFollowUpPromptPromptMessageToTerraform)(struct!.message),
    }
  }

  export class LexIntentFollowUpPromptPromptOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._maxAttempts
    }

    // response_card - computed: false, optional: true, required: false
    private _responseCard?: string | undefined; 
    public get responseCard() {
      return this.getStringAttribute('response_card');
    }
    public set responseCard(value: string | undefined) {
      this._responseCard = value;
    }
    public resetResponseCard() {
      this._responseCard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseCardInput() {
      return this._responseCard
    }

    // message - computed: false, optional: false, required: true
    private _message?: LexIntentFollowUpPromptPromptMessage[]; 
    public get message() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('message') as any;
    }
    public set message(value: LexIntentFollowUpPromptPromptMessage[]) {
      this._message = value;
    }
    // Temporarily expose input value. Use with caution.
    public get messageInput() {
      return this._message
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function lexIntentFollowUpPromptRejectionStatementToTerraform(struct?: LexIntentFollowUpPromptRejectionStatementOutputReference | LexIntentFollowUpPromptRejectionStatement): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      response_card: cdktf.stringToTerraform(struct!.responseCard),
      message: cdktf.listMapper(lexIntentFollowUpPromptRejectionStatementMessageToTerraform)(struct!.message),
    }
  }

  export class LexIntentFollowUpPromptRejectionStatementOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // response_card - computed: false, optional: true, required: false
    private _responseCard?: string | undefined; 
    public get responseCard() {
      return this.getStringAttribute('response_card');
    }
    public set responseCard(value: string | undefined) {
      this._responseCard = value;
    }
    public resetResponseCard() {
      this._responseCard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseCardInput() {
      return this._responseCard
    }

    // message - computed: false, optional: false, required: true
    private _message?: LexIntentFollowUpPromptRejectionStatementMessage[]; 
    public get message() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('message') as any;
    }
    public set message(value: LexIntentFollowUpPromptRejectionStatementMessage[]) {
      this._message = value;
    }
    // Temporarily expose input value. Use with caution.
    public get messageInput() {
      return this._message
    }
  }
  export interface LexIntentFollowUpPrompt {
    /**
    * prompt block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#prompt LexIntent#prompt}
    */
    readonly prompt: LexIntentFollowUpPromptPrompt;
    /**
    * rejection_statement block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#rejection_statement LexIntent#rejection_statement}
    */
    readonly rejectionStatement: LexIntentFollowUpPromptRejectionStatement;
  }

  function lexIntentFollowUpPromptToTerraform(struct?: LexIntentFollowUpPromptOutputReference | LexIntentFollowUpPrompt): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      prompt: lexIntentFollowUpPromptPromptToTerraform(struct!.prompt),
      rejection_statement: lexIntentFollowUpPromptRejectionStatementToTerraform(struct!.rejectionStatement),
    }
  }

  export class LexIntentFollowUpPromptOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // prompt - computed: false, optional: false, required: true
    private _prompt?: LexIntentFollowUpPromptPrompt; 
    private __promptOutput = new LexIntentFollowUpPromptPromptOutputReference(this as any, "prompt", true);
    public get prompt() {
      return this.__promptOutput;
    }
    public putPrompt(value: LexIntentFollowUpPromptPrompt) {
      this._prompt = value;
    }
    // Temporarily expose input value. Use with caution.
    public get promptInput() {
      return this._prompt
    }

    // rejection_statement - computed: false, optional: false, required: true
    private _rejectionStatement?: LexIntentFollowUpPromptRejectionStatement; 
    private __rejectionStatementOutput = new LexIntentFollowUpPromptRejectionStatementOutputReference(this as any, "rejection_statement", true);
    public get rejectionStatement() {
      return this.__rejectionStatementOutput;
    }
    public putRejectionStatement(value: LexIntentFollowUpPromptRejectionStatement) {
      this._rejectionStatement = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rejectionStatementInput() {
      return this._rejectionStatement
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

  function lexIntentFulfillmentActivityCodeHookToTerraform(struct?: LexIntentFulfillmentActivityCodeHookOutputReference | LexIntentFulfillmentActivityCodeHook): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      message_version: cdktf.stringToTerraform(struct!.messageVersion),
      uri: cdktf.stringToTerraform(struct!.uri),
    }
  }

  export class LexIntentFulfillmentActivityCodeHookOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // message_version - computed: false, optional: false, required: true
    private _messageVersion?: string; 
    public get messageVersion() {
      return this.getStringAttribute('message_version');
    }
    public set messageVersion(value: string) {
      this._messageVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get messageVersionInput() {
      return this._messageVersion
    }

    // uri - computed: false, optional: false, required: true
    private _uri?: string; 
    public get uri() {
      return this.getStringAttribute('uri');
    }
    public set uri(value: string) {
      this._uri = value;
    }
    // Temporarily expose input value. Use with caution.
    public get uriInput() {
      return this._uri
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
    readonly codeHook?: LexIntentFulfillmentActivityCodeHook;
  }

  function lexIntentFulfillmentActivityToTerraform(struct?: LexIntentFulfillmentActivityOutputReference | LexIntentFulfillmentActivity): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      type: cdktf.stringToTerraform(struct!.type),
      code_hook: lexIntentFulfillmentActivityCodeHookToTerraform(struct!.codeHook),
    }
  }

  export class LexIntentFulfillmentActivityOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // code_hook - computed: false, optional: true, required: false
    private _codeHook?: LexIntentFulfillmentActivityCodeHook | undefined; 
    private __codeHookOutput = new LexIntentFulfillmentActivityCodeHookOutputReference(this as any, "code_hook", true);
    public get codeHook() {
      return this.__codeHookOutput;
    }
    public putCodeHook(value: LexIntentFulfillmentActivityCodeHook | undefined) {
      this._codeHook = value;
    }
    public resetCodeHook() {
      this._codeHook = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeHookInput() {
      return this._codeHook
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function lexIntentRejectionStatementToTerraform(struct?: LexIntentRejectionStatementOutputReference | LexIntentRejectionStatement): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      response_card: cdktf.stringToTerraform(struct!.responseCard),
      message: cdktf.listMapper(lexIntentRejectionStatementMessageToTerraform)(struct!.message),
    }
  }

  export class LexIntentRejectionStatementOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // response_card - computed: false, optional: true, required: false
    private _responseCard?: string | undefined; 
    public get responseCard() {
      return this.getStringAttribute('response_card');
    }
    public set responseCard(value: string | undefined) {
      this._responseCard = value;
    }
    public resetResponseCard() {
      this._responseCard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseCardInput() {
      return this._responseCard
    }

    // message - computed: false, optional: false, required: true
    private _message?: LexIntentRejectionStatementMessage[]; 
    public get message() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('message') as any;
    }
    public set message(value: LexIntentRejectionStatementMessage[]) {
      this._message = value;
    }
    // Temporarily expose input value. Use with caution.
    public get messageInput() {
      return this._message
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function lexIntentSlotValueElicitationPromptToTerraform(struct?: LexIntentSlotValueElicitationPromptOutputReference | LexIntentSlotValueElicitationPrompt): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
      response_card: cdktf.stringToTerraform(struct!.responseCard),
      message: cdktf.listMapper(lexIntentSlotValueElicitationPromptMessageToTerraform)(struct!.message),
    }
  }

  export class LexIntentSlotValueElicitationPromptOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._maxAttempts
    }

    // response_card - computed: false, optional: true, required: false
    private _responseCard?: string | undefined; 
    public get responseCard() {
      return this.getStringAttribute('response_card');
    }
    public set responseCard(value: string | undefined) {
      this._responseCard = value;
    }
    public resetResponseCard() {
      this._responseCard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseCardInput() {
      return this._responseCard
    }

    // message - computed: false, optional: false, required: true
    private _message?: LexIntentSlotValueElicitationPromptMessage[]; 
    public get message() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('message') as any;
    }
    public set message(value: LexIntentSlotValueElicitationPromptMessage[]) {
      this._message = value;
    }
    // Temporarily expose input value. Use with caution.
    public get messageInput() {
      return this._message
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
    readonly valueElicitationPrompt?: LexIntentSlotValueElicitationPrompt;
  }

  function lexIntentSlotToTerraform(struct?: LexIntentSlot): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      description: cdktf.stringToTerraform(struct!.description),
      name: cdktf.stringToTerraform(struct!.name),
      priority: cdktf.numberToTerraform(struct!.priority),
      response_card: cdktf.stringToTerraform(struct!.responseCard),
      sample_utterances: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sampleUtterances),
      slot_constraint: cdktf.stringToTerraform(struct!.slotConstraint),
      slot_type: cdktf.stringToTerraform(struct!.slotType),
      slot_type_version: cdktf.stringToTerraform(struct!.slotTypeVersion),
      value_elicitation_prompt: lexIntentSlotValueElicitationPromptToTerraform(struct!.valueElicitationPrompt),
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

  function lexIntentTimeoutsToTerraform(struct?: LexIntentTimeoutsOutputReference | LexIntentTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class LexIntentTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
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
    private _createVersion?: boolean | cdktf.IResolvable | undefined; 
    public get createVersion() {
      return this.getBooleanAttribute('create_version') as any;
    }
    public set createVersion(value: boolean | cdktf.IResolvable | undefined) {
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
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _name?: string; 
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
    private _parentIntentSignature?: string | undefined; 
    public get parentIntentSignature() {
      return this.getStringAttribute('parent_intent_signature');
    }
    public set parentIntentSignature(value: string | undefined) {
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
    private _sampleUtterances?: string[] | undefined; 
    public get sampleUtterances() {
      return this.getListAttribute('sample_utterances');
    }
    public set sampleUtterances(value: string[] | undefined) {
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
    private _conclusionStatement?: LexIntentConclusionStatement | undefined; 
    private __conclusionStatementOutput = new LexIntentConclusionStatementOutputReference(this as any, "conclusion_statement", true);
    public get conclusionStatement() {
      return this.__conclusionStatementOutput;
    }
    public putConclusionStatement(value: LexIntentConclusionStatement | undefined) {
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
    private _confirmationPrompt?: LexIntentConfirmationPrompt | undefined; 
    private __confirmationPromptOutput = new LexIntentConfirmationPromptOutputReference(this as any, "confirmation_prompt", true);
    public get confirmationPrompt() {
      return this.__confirmationPromptOutput;
    }
    public putConfirmationPrompt(value: LexIntentConfirmationPrompt | undefined) {
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
    private _dialogCodeHook?: LexIntentDialogCodeHook | undefined; 
    private __dialogCodeHookOutput = new LexIntentDialogCodeHookOutputReference(this as any, "dialog_code_hook", true);
    public get dialogCodeHook() {
      return this.__dialogCodeHookOutput;
    }
    public putDialogCodeHook(value: LexIntentDialogCodeHook | undefined) {
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
    private _followUpPrompt?: LexIntentFollowUpPrompt | undefined; 
    private __followUpPromptOutput = new LexIntentFollowUpPromptOutputReference(this as any, "follow_up_prompt", true);
    public get followUpPrompt() {
      return this.__followUpPromptOutput;
    }
    public putFollowUpPrompt(value: LexIntentFollowUpPrompt | undefined) {
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
    private _fulfillmentActivity?: LexIntentFulfillmentActivity; 
    private __fulfillmentActivityOutput = new LexIntentFulfillmentActivityOutputReference(this as any, "fulfillment_activity", true);
    public get fulfillmentActivity() {
      return this.__fulfillmentActivityOutput;
    }
    public putFulfillmentActivity(value: LexIntentFulfillmentActivity) {
      this._fulfillmentActivity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fulfillmentActivityInput() {
      return this._fulfillmentActivity
    }

    // rejection_statement - computed: false, optional: true, required: false
    private _rejectionStatement?: LexIntentRejectionStatement | undefined; 
    private __rejectionStatementOutput = new LexIntentRejectionStatementOutputReference(this as any, "rejection_statement", true);
    public get rejectionStatement() {
      return this.__rejectionStatementOutput;
    }
    public putRejectionStatement(value: LexIntentRejectionStatement | undefined) {
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
    private _slot?: LexIntentSlot[] | undefined; 
    public get slot() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('slot') as any;
    }
    public set slot(value: LexIntentSlot[] | undefined) {
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
    private _timeouts?: LexIntentTimeouts | undefined; 
    private __timeoutsOutput = new LexIntentTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: LexIntentTimeouts | undefined) {
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
        conclusion_statement: lexIntentConclusionStatementToTerraform(this._conclusionStatement),
        confirmation_prompt: lexIntentConfirmationPromptToTerraform(this._confirmationPrompt),
        dialog_code_hook: lexIntentDialogCodeHookToTerraform(this._dialogCodeHook),
        follow_up_prompt: lexIntentFollowUpPromptToTerraform(this._followUpPrompt),
        fulfillment_activity: lexIntentFulfillmentActivityToTerraform(this._fulfillmentActivity),
        rejection_statement: lexIntentRejectionStatementToTerraform(this._rejectionStatement),
        slot: cdktf.listMapper(lexIntentSlotToTerraform)(this._slot),
        timeouts: lexIntentTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface LexSlotTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#create_version LexSlotType#create_version}
    */
    readonly createVersion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#description LexSlotType#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#name LexSlotType#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#value_selection_strategy LexSlotType#value_selection_strategy}
    */
    readonly valueSelectionStrategy?: string;
    /**
    * enumeration_value block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#enumeration_value LexSlotType#enumeration_value}
    */
    readonly enumerationValue: LexSlotTypeEnumerationValue[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#timeouts LexSlotType#timeouts}
    */
    readonly timeouts?: LexSlotTypeTimeouts;
  }
  export interface LexSlotTypeEnumerationValue {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#synonyms LexSlotType#synonyms}
    */
    readonly synonyms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#value LexSlotType#value}
    */
    readonly value: string;
  }

  function lexSlotTypeEnumerationValueToTerraform(struct?: LexSlotTypeEnumerationValue): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      synonyms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.synonyms),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface LexSlotTypeTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#create LexSlotType#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#delete LexSlotType#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#update LexSlotType#update}
    */
    readonly update?: string;
  }

  function lexSlotTypeTimeoutsToTerraform(struct?: LexSlotTypeTimeoutsOutputReference | LexSlotTypeTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class LexSlotTypeTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html aws_lex_slot_type}
  */
  export class LexSlotType extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lex_slot_type";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html aws_lex_slot_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LexSlotTypeConfig
    */
    public constructor(scope: Construct, id: string, config: LexSlotTypeConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lex_slot_type',
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
      this._valueSelectionStrategy = config.valueSelectionStrategy;
      this._enumerationValue = config.enumerationValue;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // checksum - computed: true, optional: false, required: false
    public get checksum() {
      return this.getStringAttribute('checksum');
    }

    // create_version - computed: false, optional: true, required: false
    private _createVersion?: boolean | cdktf.IResolvable | undefined; 
    public get createVersion() {
      return this.getBooleanAttribute('create_version') as any;
    }
    public set createVersion(value: boolean | cdktf.IResolvable | undefined) {
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
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _name?: string; 
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

    // value_selection_strategy - computed: false, optional: true, required: false
    private _valueSelectionStrategy?: string | undefined; 
    public get valueSelectionStrategy() {
      return this.getStringAttribute('value_selection_strategy');
    }
    public set valueSelectionStrategy(value: string | undefined) {
      this._valueSelectionStrategy = value;
    }
    public resetValueSelectionStrategy() {
      this._valueSelectionStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueSelectionStrategyInput() {
      return this._valueSelectionStrategy
    }

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getStringAttribute('version');
    }

    // enumeration_value - computed: false, optional: false, required: true
    private _enumerationValue?: LexSlotTypeEnumerationValue[]; 
    public get enumerationValue() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('enumeration_value') as any;
    }
    public set enumerationValue(value: LexSlotTypeEnumerationValue[]) {
      this._enumerationValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enumerationValueInput() {
      return this._enumerationValue
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: LexSlotTypeTimeouts | undefined; 
    private __timeoutsOutput = new LexSlotTypeTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: LexSlotTypeTimeouts | undefined) {
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
        value_selection_strategy: cdktf.stringToTerraform(this._valueSelectionStrategy),
        enumeration_value: cdktf.listMapper(lexSlotTypeEnumerationValueToTerraform)(this._enumerationValue),
        timeouts: lexSlotTypeTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DataAwsLexBotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lex_bot.html#name DataAwsLexBot#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lex_bot.html#version DataAwsLexBot#version}
    */
    readonly version?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lex_bot.html aws_lex_bot}
  */
  export class DataAwsLexBot extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lex_bot";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lex_bot.html aws_lex_bot} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLexBotConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsLexBotConfig) {
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
      this._name = config.name;
      this._version = config.version;
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

    // child_directed - computed: true, optional: false, required: false
    public get childDirected() {
      return this.getBooleanAttribute('child_directed') as any;
    }

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // detect_sentiment - computed: true, optional: false, required: false
    public get detectSentiment() {
      return this.getBooleanAttribute('detect_sentiment') as any;
    }

    // enable_model_improvements - computed: true, optional: false, required: false
    public get enableModelImprovements() {
      return this.getBooleanAttribute('enable_model_improvements') as any;
    }

    // failure_reason - computed: true, optional: false, required: false
    public get failureReason() {
      return this.getStringAttribute('failure_reason');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // idle_session_ttl_in_seconds - computed: true, optional: false, required: false
    public get idleSessionTtlInSeconds() {
      return this.getNumberAttribute('idle_session_ttl_in_seconds');
    }

    // last_updated_date - computed: true, optional: false, required: false
    public get lastUpdatedDate() {
      return this.getStringAttribute('last_updated_date');
    }

    // locale - computed: true, optional: false, required: false
    public get locale() {
      return this.getStringAttribute('locale');
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
      return this._name
    }

    // nlu_intent_confidence_threshold - computed: true, optional: false, required: false
    public get nluIntentConfidenceThreshold() {
      return this.getNumberAttribute('nlu_intent_confidence_threshold');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // version - computed: false, optional: true, required: false
    private _version?: string | undefined; 
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string | undefined) {
      this._version = value;
    }
    public resetVersion() {
      this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }

    // voice_id - computed: true, optional: false, required: false
    public get voiceId() {
      return this.getStringAttribute('voice_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        version: cdktf.stringToTerraform(this._version),
      };
    }
  }
  export interface DataAwsLexBotAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lex_bot_alias.html#bot_name DataAwsLexBotAlias#bot_name}
    */
    readonly botName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lex_bot_alias.html#name DataAwsLexBotAlias#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lex_bot_alias.html aws_lex_bot_alias}
  */
  export class DataAwsLexBotAlias extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lex_bot_alias";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lex_bot_alias.html aws_lex_bot_alias} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLexBotAliasConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsLexBotAliasConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lex_bot_alias',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._botName = config.botName;
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // bot_name - computed: false, optional: false, required: true
    private _botName?: string; 
    public get botName() {
      return this.getStringAttribute('bot_name');
    }
    public set botName(value: string) {
      this._botName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get botNameInput() {
      return this._botName
    }

    // bot_version - computed: true, optional: false, required: false
    public get botVersion() {
      return this.getStringAttribute('bot_version');
    }

    // checksum - computed: true, optional: false, required: false
    public get checksum() {
      return this.getStringAttribute('checksum');
    }

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
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
    private _name?: string; 
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bot_name: cdktf.stringToTerraform(this._botName),
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsLexIntentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lex_intent.html#name DataAwsLexIntent#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lex_intent.html#version DataAwsLexIntent#version}
    */
    readonly version?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lex_intent.html aws_lex_intent}
  */
  export class DataAwsLexIntent extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lex_intent";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lex_intent.html aws_lex_intent} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLexIntentConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsLexIntentConfig) {
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
      this._name = config.name;
      this._version = config.version;
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

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
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
    private _name?: string; 
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

    // parent_intent_signature - computed: true, optional: false, required: false
    public get parentIntentSignature() {
      return this.getStringAttribute('parent_intent_signature');
    }

    // version - computed: false, optional: true, required: false
    private _version?: string | undefined; 
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string | undefined) {
      this._version = value;
    }
    public resetVersion() {
      this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        version: cdktf.stringToTerraform(this._version),
      };
    }
  }
  export interface DataAwsLexSlotTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lex_slot_type.html#name DataAwsLexSlotType#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lex_slot_type.html#version DataAwsLexSlotType#version}
    */
    readonly version?: string;
  }
  export class DataAwsLexSlotTypeEnumerationValue extends cdktf.ComplexComputedList {

    // synonyms - computed: true, optional: false, required: false
    public get synonyms() {
      return this.getListAttribute('synonyms');
    }

    // value - computed: true, optional: false, required: false
    public get value() {
      return this.getStringAttribute('value');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lex_slot_type.html aws_lex_slot_type}
  */
  export class DataAwsLexSlotType extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lex_slot_type";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lex_slot_type.html aws_lex_slot_type} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLexSlotTypeConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsLexSlotTypeConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lex_slot_type',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._version = config.version;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // checksum - computed: true, optional: false, required: false
    public get checksum() {
      return this.getStringAttribute('checksum');
    }

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // enumeration_value - computed: true, optional: false, required: false
    public enumerationValue(index: string) {
      return new DataAwsLexSlotTypeEnumerationValue(this, 'enumeration_value', index);
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
    private _name?: string; 
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

    // value_selection_strategy - computed: true, optional: false, required: false
    public get valueSelectionStrategy() {
      return this.getStringAttribute('value_selection_strategy');
    }

    // version - computed: false, optional: true, required: false
    private _version?: string | undefined; 
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string | undefined) {
      this._version = value;
    }
    public resetVersion() {
      this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        version: cdktf.stringToTerraform(this._version),
      };
    }
  }
}
