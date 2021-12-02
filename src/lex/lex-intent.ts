// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Lex
*/
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

export function lexIntentConclusionStatementMessageToTerraform(struct?: LexIntentConclusionStatementMessage): any {
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

export function lexIntentConclusionStatementToTerraform(struct?: LexIntentConclusionStatementOutputReference | LexIntentConclusionStatement): any {
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

  public get internalValue(): LexIntentConclusionStatement | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._responseCard) {
      hasAnyValues = true;
      internalValueResult.responseCard = this._responseCard;
    }
    if (this._message) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentConclusionStatement | undefined) {
    if (value === undefined) {
      this._responseCard = undefined;
      this._message = undefined;
    }
    else {
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
    return this._message;
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

export function lexIntentConfirmationPromptMessageToTerraform(struct?: LexIntentConfirmationPromptMessage): any {
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

export function lexIntentConfirmationPromptToTerraform(struct?: LexIntentConfirmationPromptOutputReference | LexIntentConfirmationPrompt): any {
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

  public get internalValue(): LexIntentConfirmationPrompt | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._maxAttempts) {
      hasAnyValues = true;
      internalValueResult.maxAttempts = this._maxAttempts;
    }
    if (this._responseCard) {
      hasAnyValues = true;
      internalValueResult.responseCard = this._responseCard;
    }
    if (this._message) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentConfirmationPrompt | undefined) {
    if (value === undefined) {
      this._maxAttempts = undefined;
      this._responseCard = undefined;
      this._message = undefined;
    }
    else {
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
    return this._message;
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

export function lexIntentDialogCodeHookToTerraform(struct?: LexIntentDialogCodeHookOutputReference | LexIntentDialogCodeHook): any {
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

  public get internalValue(): LexIntentDialogCodeHook | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._messageVersion) {
      hasAnyValues = true;
      internalValueResult.messageVersion = this._messageVersion;
    }
    if (this._uri) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentDialogCodeHook | undefined) {
    if (value === undefined) {
      this._messageVersion = undefined;
      this._uri = undefined;
    }
    else {
      this._messageVersion = value.messageVersion;
      this._uri = value.uri;
    }
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
    return this._messageVersion;
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
    return this._uri;
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

export function lexIntentFollowUpPromptPromptMessageToTerraform(struct?: LexIntentFollowUpPromptPromptMessage): any {
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

export function lexIntentFollowUpPromptPromptToTerraform(struct?: LexIntentFollowUpPromptPromptOutputReference | LexIntentFollowUpPromptPrompt): any {
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

  public get internalValue(): LexIntentFollowUpPromptPrompt | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._maxAttempts) {
      hasAnyValues = true;
      internalValueResult.maxAttempts = this._maxAttempts;
    }
    if (this._responseCard) {
      hasAnyValues = true;
      internalValueResult.responseCard = this._responseCard;
    }
    if (this._message) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentFollowUpPromptPrompt | undefined) {
    if (value === undefined) {
      this._maxAttempts = undefined;
      this._responseCard = undefined;
      this._message = undefined;
    }
    else {
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
    return this._message;
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

export function lexIntentFollowUpPromptRejectionStatementMessageToTerraform(struct?: LexIntentFollowUpPromptRejectionStatementMessage): any {
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

export function lexIntentFollowUpPromptRejectionStatementToTerraform(struct?: LexIntentFollowUpPromptRejectionStatementOutputReference | LexIntentFollowUpPromptRejectionStatement): any {
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

  public get internalValue(): LexIntentFollowUpPromptRejectionStatement | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._responseCard) {
      hasAnyValues = true;
      internalValueResult.responseCard = this._responseCard;
    }
    if (this._message) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentFollowUpPromptRejectionStatement | undefined) {
    if (value === undefined) {
      this._responseCard = undefined;
      this._message = undefined;
    }
    else {
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
    return this._message;
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

export function lexIntentFollowUpPromptToTerraform(struct?: LexIntentFollowUpPromptOutputReference | LexIntentFollowUpPrompt): any {
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

  public get internalValue(): LexIntentFollowUpPrompt | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._prompt) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt?.internalValue;
    }
    if (this._rejectionStatement) {
      hasAnyValues = true;
      internalValueResult.rejectionStatement = this._rejectionStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentFollowUpPrompt | undefined) {
    if (value === undefined) {
      this._prompt.internalValue = undefined;
      this._rejectionStatement.internalValue = undefined;
    }
    else {
      this._prompt.internalValue = value.prompt;
      this._rejectionStatement.internalValue = value.rejectionStatement;
    }
  }

  // prompt - computed: false, optional: false, required: true
  private _prompt = new LexIntentFollowUpPromptPromptOutputReference(this as any, "prompt", true);
  public get prompt() {
    return this._prompt;
  }
  public putPrompt(value: LexIntentFollowUpPromptPrompt) {
    this._prompt.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt.internalValue;
  }

  // rejection_statement - computed: false, optional: false, required: true
  private _rejectionStatement = new LexIntentFollowUpPromptRejectionStatementOutputReference(this as any, "rejection_statement", true);
  public get rejectionStatement() {
    return this._rejectionStatement;
  }
  public putRejectionStatement(value: LexIntentFollowUpPromptRejectionStatement) {
    this._rejectionStatement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectionStatementInput() {
    return this._rejectionStatement.internalValue;
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

export function lexIntentFulfillmentActivityCodeHookToTerraform(struct?: LexIntentFulfillmentActivityCodeHookOutputReference | LexIntentFulfillmentActivityCodeHook): any {
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

  public get internalValue(): LexIntentFulfillmentActivityCodeHook | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._messageVersion) {
      hasAnyValues = true;
      internalValueResult.messageVersion = this._messageVersion;
    }
    if (this._uri) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentFulfillmentActivityCodeHook | undefined) {
    if (value === undefined) {
      this._messageVersion = undefined;
      this._uri = undefined;
    }
    else {
      this._messageVersion = value.messageVersion;
      this._uri = value.uri;
    }
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
    return this._messageVersion;
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
    return this._uri;
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

export function lexIntentFulfillmentActivityToTerraform(struct?: LexIntentFulfillmentActivityOutputReference | LexIntentFulfillmentActivity): any {
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

  public get internalValue(): LexIntentFulfillmentActivity | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._codeHook) {
      hasAnyValues = true;
      internalValueResult.codeHook = this._codeHook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentFulfillmentActivity | undefined) {
    if (value === undefined) {
      this._type = undefined;
      this._codeHook.internalValue = undefined;
    }
    else {
      this._type = value.type;
      this._codeHook.internalValue = value.codeHook;
    }
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
    return this._type;
  }

  // code_hook - computed: false, optional: true, required: false
  private _codeHook = new LexIntentFulfillmentActivityCodeHookOutputReference(this as any, "code_hook", true);
  public get codeHook() {
    return this._codeHook;
  }
  public putCodeHook(value: LexIntentFulfillmentActivityCodeHook) {
    this._codeHook.internalValue = value;
  }
  public resetCodeHook() {
    this._codeHook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeHookInput() {
    return this._codeHook.internalValue;
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

export function lexIntentRejectionStatementMessageToTerraform(struct?: LexIntentRejectionStatementMessage): any {
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

export function lexIntentRejectionStatementToTerraform(struct?: LexIntentRejectionStatementOutputReference | LexIntentRejectionStatement): any {
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

  public get internalValue(): LexIntentRejectionStatement | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._responseCard) {
      hasAnyValues = true;
      internalValueResult.responseCard = this._responseCard;
    }
    if (this._message) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentRejectionStatement | undefined) {
    if (value === undefined) {
      this._responseCard = undefined;
      this._message = undefined;
    }
    else {
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
    return this._message;
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

export function lexIntentSlotValueElicitationPromptMessageToTerraform(struct?: LexIntentSlotValueElicitationPromptMessage): any {
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

export function lexIntentSlotValueElicitationPromptToTerraform(struct?: LexIntentSlotValueElicitationPromptOutputReference | LexIntentSlotValueElicitationPrompt): any {
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

  public get internalValue(): LexIntentSlotValueElicitationPrompt | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._maxAttempts) {
      hasAnyValues = true;
      internalValueResult.maxAttempts = this._maxAttempts;
    }
    if (this._responseCard) {
      hasAnyValues = true;
      internalValueResult.responseCard = this._responseCard;
    }
    if (this._message) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentSlotValueElicitationPrompt | undefined) {
    if (value === undefined) {
      this._maxAttempts = undefined;
      this._responseCard = undefined;
      this._message = undefined;
    }
    else {
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
    return this._message;
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

export function lexIntentSlotToTerraform(struct?: LexIntentSlot): any {
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

export function lexIntentTimeoutsToTerraform(struct?: LexIntentTimeoutsOutputReference | LexIntentTimeouts): any {
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

  public get internalValue(): LexIntentTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
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
    this._conclusionStatement.internalValue = config.conclusionStatement;
    this._confirmationPrompt.internalValue = config.confirmationPrompt;
    this._dialogCodeHook.internalValue = config.dialogCodeHook;
    this._followUpPrompt.internalValue = config.followUpPrompt;
    this._fulfillmentActivity.internalValue = config.fulfillmentActivity;
    this._rejectionStatement.internalValue = config.rejectionStatement;
    this._slot = config.slot;
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

  // create_version - computed: false, optional: true, required: false
  private _createVersion?: boolean | cdktf.IResolvable; 
  public get createVersion() {
    return this.getBooleanAttribute('create_version') as any;
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
    return this._name;
  }

  // parent_intent_signature - computed: false, optional: true, required: false
  private _parentIntentSignature?: string; 
  public get parentIntentSignature() {
    return this.getStringAttribute('parent_intent_signature');
  }
  public set parentIntentSignature(value: string) {
    this._parentIntentSignature = value;
  }
  public resetParentIntentSignature() {
    this._parentIntentSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIntentSignatureInput() {
    return this._parentIntentSignature;
  }

  // sample_utterances - computed: false, optional: true, required: false
  private _sampleUtterances?: string[]; 
  public get sampleUtterances() {
    return this.getListAttribute('sample_utterances');
  }
  public set sampleUtterances(value: string[]) {
    this._sampleUtterances = value;
  }
  public resetSampleUtterances() {
    this._sampleUtterances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleUtterancesInput() {
    return this._sampleUtterances;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // conclusion_statement - computed: false, optional: true, required: false
  private _conclusionStatement = new LexIntentConclusionStatementOutputReference(this as any, "conclusion_statement", true);
  public get conclusionStatement() {
    return this._conclusionStatement;
  }
  public putConclusionStatement(value: LexIntentConclusionStatement) {
    this._conclusionStatement.internalValue = value;
  }
  public resetConclusionStatement() {
    this._conclusionStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conclusionStatementInput() {
    return this._conclusionStatement.internalValue;
  }

  // confirmation_prompt - computed: false, optional: true, required: false
  private _confirmationPrompt = new LexIntentConfirmationPromptOutputReference(this as any, "confirmation_prompt", true);
  public get confirmationPrompt() {
    return this._confirmationPrompt;
  }
  public putConfirmationPrompt(value: LexIntentConfirmationPrompt) {
    this._confirmationPrompt.internalValue = value;
  }
  public resetConfirmationPrompt() {
    this._confirmationPrompt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationPromptInput() {
    return this._confirmationPrompt.internalValue;
  }

  // dialog_code_hook - computed: false, optional: true, required: false
  private _dialogCodeHook = new LexIntentDialogCodeHookOutputReference(this as any, "dialog_code_hook", true);
  public get dialogCodeHook() {
    return this._dialogCodeHook;
  }
  public putDialogCodeHook(value: LexIntentDialogCodeHook) {
    this._dialogCodeHook.internalValue = value;
  }
  public resetDialogCodeHook() {
    this._dialogCodeHook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogCodeHookInput() {
    return this._dialogCodeHook.internalValue;
  }

  // follow_up_prompt - computed: false, optional: true, required: false
  private _followUpPrompt = new LexIntentFollowUpPromptOutputReference(this as any, "follow_up_prompt", true);
  public get followUpPrompt() {
    return this._followUpPrompt;
  }
  public putFollowUpPrompt(value: LexIntentFollowUpPrompt) {
    this._followUpPrompt.internalValue = value;
  }
  public resetFollowUpPrompt() {
    this._followUpPrompt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followUpPromptInput() {
    return this._followUpPrompt.internalValue;
  }

  // fulfillment_activity - computed: false, optional: false, required: true
  private _fulfillmentActivity = new LexIntentFulfillmentActivityOutputReference(this as any, "fulfillment_activity", true);
  public get fulfillmentActivity() {
    return this._fulfillmentActivity;
  }
  public putFulfillmentActivity(value: LexIntentFulfillmentActivity) {
    this._fulfillmentActivity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fulfillmentActivityInput() {
    return this._fulfillmentActivity.internalValue;
  }

  // rejection_statement - computed: false, optional: true, required: false
  private _rejectionStatement = new LexIntentRejectionStatementOutputReference(this as any, "rejection_statement", true);
  public get rejectionStatement() {
    return this._rejectionStatement;
  }
  public putRejectionStatement(value: LexIntentRejectionStatement) {
    this._rejectionStatement.internalValue = value;
  }
  public resetRejectionStatement() {
    this._rejectionStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectionStatementInput() {
    return this._rejectionStatement.internalValue;
  }

  // slot - computed: false, optional: true, required: false
  private _slot?: LexIntentSlot[]; 
  public get slot() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('slot') as any;
  }
  public set slot(value: LexIntentSlot[]) {
    this._slot = value;
  }
  public resetSlot() {
    this._slot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LexIntentTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LexIntentTimeouts) {
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
      create_version: cdktf.booleanToTerraform(this._createVersion),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      parent_intent_signature: cdktf.stringToTerraform(this._parentIntentSignature),
      sample_utterances: cdktf.listMapper(cdktf.stringToTerraform)(this._sampleUtterances),
      conclusion_statement: lexIntentConclusionStatementToTerraform(this._conclusionStatement.internalValue),
      confirmation_prompt: lexIntentConfirmationPromptToTerraform(this._confirmationPrompt.internalValue),
      dialog_code_hook: lexIntentDialogCodeHookToTerraform(this._dialogCodeHook.internalValue),
      follow_up_prompt: lexIntentFollowUpPromptToTerraform(this._followUpPrompt.internalValue),
      fulfillment_activity: lexIntentFulfillmentActivityToTerraform(this._fulfillmentActivity.internalValue),
      rejection_statement: lexIntentRejectionStatementToTerraform(this._rejectionStatement.internalValue),
      slot: cdktf.listMapper(lexIntentSlotToTerraform)(this._slot),
      timeouts: lexIntentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
