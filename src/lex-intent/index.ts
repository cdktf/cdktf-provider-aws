// https://www.terraform.io/docs/providers/aws/r/lex_intent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LexIntentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create_version LexIntent#create_version}
  */
  readonly createVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#id LexIntent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#parent_intent_signature LexIntent#parent_intent_signature}
  */
  readonly parentIntentSignature?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}
  */
  readonly sampleUtterances?: string[];
  /**
  * conclusion_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#conclusion_statement LexIntent#conclusion_statement}
  */
  readonly conclusionStatement?: LexIntentConclusionStatement;
  /**
  * confirmation_prompt block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#confirmation_prompt LexIntent#confirmation_prompt}
  */
  readonly confirmationPrompt?: LexIntentConfirmationPrompt;
  /**
  * dialog_code_hook block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#dialog_code_hook LexIntent#dialog_code_hook}
  */
  readonly dialogCodeHook?: LexIntentDialogCodeHook;
  /**
  * follow_up_prompt block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#follow_up_prompt LexIntent#follow_up_prompt}
  */
  readonly followUpPrompt?: LexIntentFollowUpPrompt;
  /**
  * fulfillment_activity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#fulfillment_activity LexIntent#fulfillment_activity}
  */
  readonly fulfillmentActivity: LexIntentFulfillmentActivity;
  /**
  * rejection_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#rejection_statement LexIntent#rejection_statement}
  */
  readonly rejectionStatement?: LexIntentRejectionStatement;
  /**
  * slot block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot LexIntent#slot}
  */
  readonly slot?: LexIntentSlot[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#timeouts LexIntent#timeouts}
  */
  readonly timeouts?: LexIntentTimeouts;
}
export interface LexIntentConclusionStatementMessage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}
  */
  readonly groupNumber?: number;
}

export function lexIntentConclusionStatementMessageToTerraform(struct?: LexIntentConclusionStatementMessage | cdktf.IResolvable): any {
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

export class LexIntentConclusionStatementMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LexIntentConclusionStatementMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._groupNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNumber = this._groupNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentConclusionStatementMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._groupNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
      this._groupNumber = value.groupNumber;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // group_number - computed: false, optional: true, required: false
  private _groupNumber?: number; 
  public get groupNumber() {
    return this.getNumberAttribute('group_number');
  }
  public set groupNumber(value: number) {
    this._groupNumber = value;
  }
  public resetGroupNumber() {
    this._groupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNumberInput() {
    return this._groupNumber;
  }
}

export class LexIntentConclusionStatementMessageList extends cdktf.ComplexList {
  public internalValue? : LexIntentConclusionStatementMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LexIntentConclusionStatementMessageOutputReference {
    return new LexIntentConclusionStatementMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexIntentConclusionStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}
  */
  readonly message: LexIntentConclusionStatementMessage[] | cdktf.IResolvable;
}

export function lexIntentConclusionStatementToTerraform(struct?: LexIntentConclusionStatementOutputReference | LexIntentConclusionStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response_card: cdktf.stringToTerraform(struct!.responseCard),
    message: cdktf.listMapper(lexIntentConclusionStatementMessageToTerraform, true)(struct!.message),
  }
}

export class LexIntentConclusionStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LexIntentConclusionStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCard = this._responseCard;
    }
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentConclusionStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._responseCard = undefined;
      this._message.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._responseCard = value.responseCard;
      this._message.internalValue = value.message;
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
  private _message = new LexIntentConclusionStatementMessageList(this, "message", true);
  public get message() {
    return this._message;
  }
  public putMessage(value: LexIntentConclusionStatementMessage[] | cdktf.IResolvable) {
    this._message.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }
}
export interface LexIntentConfirmationPromptMessage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}
  */
  readonly groupNumber?: number;
}

export function lexIntentConfirmationPromptMessageToTerraform(struct?: LexIntentConfirmationPromptMessage | cdktf.IResolvable): any {
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

export class LexIntentConfirmationPromptMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LexIntentConfirmationPromptMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._groupNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNumber = this._groupNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentConfirmationPromptMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._groupNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
      this._groupNumber = value.groupNumber;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // group_number - computed: false, optional: true, required: false
  private _groupNumber?: number; 
  public get groupNumber() {
    return this.getNumberAttribute('group_number');
  }
  public set groupNumber(value: number) {
    this._groupNumber = value;
  }
  public resetGroupNumber() {
    this._groupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNumberInput() {
    return this._groupNumber;
  }
}

export class LexIntentConfirmationPromptMessageList extends cdktf.ComplexList {
  public internalValue? : LexIntentConfirmationPromptMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LexIntentConfirmationPromptMessageOutputReference {
    return new LexIntentConfirmationPromptMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexIntentConfirmationPrompt {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}
  */
  readonly maxAttempts: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}
  */
  readonly message: LexIntentConfirmationPromptMessage[] | cdktf.IResolvable;
}

export function lexIntentConfirmationPromptToTerraform(struct?: LexIntentConfirmationPromptOutputReference | LexIntentConfirmationPrompt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    response_card: cdktf.stringToTerraform(struct!.responseCard),
    message: cdktf.listMapper(lexIntentConfirmationPromptMessageToTerraform, true)(struct!.message),
  }
}

export class LexIntentConfirmationPromptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LexIntentConfirmationPrompt | undefined {
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
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentConfirmationPrompt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAttempts = undefined;
      this._responseCard = undefined;
      this._message.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAttempts = value.maxAttempts;
      this._responseCard = value.responseCard;
      this._message.internalValue = value.message;
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
  private _message = new LexIntentConfirmationPromptMessageList(this, "message", true);
  public get message() {
    return this._message;
  }
  public putMessage(value: LexIntentConfirmationPromptMessage[] | cdktf.IResolvable) {
    this._message.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }
}
export interface LexIntentDialogCodeHook {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message_version LexIntent#message_version}
  */
  readonly messageVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#uri LexIntent#uri}
  */
  readonly uri: string;
}

export function lexIntentDialogCodeHookToTerraform(struct?: LexIntentDialogCodeHookOutputReference | LexIntentDialogCodeHook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_version: cdktf.stringToTerraform(struct!.messageVersion),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export class LexIntentDialogCodeHookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LexIntentDialogCodeHook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageVersion = this._messageVersion;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentDialogCodeHook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageVersion = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}
  */
  readonly groupNumber?: number;
}

export function lexIntentFollowUpPromptPromptMessageToTerraform(struct?: LexIntentFollowUpPromptPromptMessage | cdktf.IResolvable): any {
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

export class LexIntentFollowUpPromptPromptMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LexIntentFollowUpPromptPromptMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._groupNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNumber = this._groupNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentFollowUpPromptPromptMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._groupNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
      this._groupNumber = value.groupNumber;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // group_number - computed: false, optional: true, required: false
  private _groupNumber?: number; 
  public get groupNumber() {
    return this.getNumberAttribute('group_number');
  }
  public set groupNumber(value: number) {
    this._groupNumber = value;
  }
  public resetGroupNumber() {
    this._groupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNumberInput() {
    return this._groupNumber;
  }
}

export class LexIntentFollowUpPromptPromptMessageList extends cdktf.ComplexList {
  public internalValue? : LexIntentFollowUpPromptPromptMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LexIntentFollowUpPromptPromptMessageOutputReference {
    return new LexIntentFollowUpPromptPromptMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexIntentFollowUpPromptPrompt {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}
  */
  readonly maxAttempts: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}
  */
  readonly message: LexIntentFollowUpPromptPromptMessage[] | cdktf.IResolvable;
}

export function lexIntentFollowUpPromptPromptToTerraform(struct?: LexIntentFollowUpPromptPromptOutputReference | LexIntentFollowUpPromptPrompt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    response_card: cdktf.stringToTerraform(struct!.responseCard),
    message: cdktf.listMapper(lexIntentFollowUpPromptPromptMessageToTerraform, true)(struct!.message),
  }
}

export class LexIntentFollowUpPromptPromptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LexIntentFollowUpPromptPrompt | undefined {
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
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentFollowUpPromptPrompt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAttempts = undefined;
      this._responseCard = undefined;
      this._message.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAttempts = value.maxAttempts;
      this._responseCard = value.responseCard;
      this._message.internalValue = value.message;
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
  private _message = new LexIntentFollowUpPromptPromptMessageList(this, "message", true);
  public get message() {
    return this._message;
  }
  public putMessage(value: LexIntentFollowUpPromptPromptMessage[] | cdktf.IResolvable) {
    this._message.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }
}
export interface LexIntentFollowUpPromptRejectionStatementMessage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}
  */
  readonly groupNumber?: number;
}

export function lexIntentFollowUpPromptRejectionStatementMessageToTerraform(struct?: LexIntentFollowUpPromptRejectionStatementMessage | cdktf.IResolvable): any {
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

export class LexIntentFollowUpPromptRejectionStatementMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LexIntentFollowUpPromptRejectionStatementMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._groupNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNumber = this._groupNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentFollowUpPromptRejectionStatementMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._groupNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
      this._groupNumber = value.groupNumber;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // group_number - computed: false, optional: true, required: false
  private _groupNumber?: number; 
  public get groupNumber() {
    return this.getNumberAttribute('group_number');
  }
  public set groupNumber(value: number) {
    this._groupNumber = value;
  }
  public resetGroupNumber() {
    this._groupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNumberInput() {
    return this._groupNumber;
  }
}

export class LexIntentFollowUpPromptRejectionStatementMessageList extends cdktf.ComplexList {
  public internalValue? : LexIntentFollowUpPromptRejectionStatementMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LexIntentFollowUpPromptRejectionStatementMessageOutputReference {
    return new LexIntentFollowUpPromptRejectionStatementMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexIntentFollowUpPromptRejectionStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}
  */
  readonly message: LexIntentFollowUpPromptRejectionStatementMessage[] | cdktf.IResolvable;
}

export function lexIntentFollowUpPromptRejectionStatementToTerraform(struct?: LexIntentFollowUpPromptRejectionStatementOutputReference | LexIntentFollowUpPromptRejectionStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response_card: cdktf.stringToTerraform(struct!.responseCard),
    message: cdktf.listMapper(lexIntentFollowUpPromptRejectionStatementMessageToTerraform, true)(struct!.message),
  }
}

export class LexIntentFollowUpPromptRejectionStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LexIntentFollowUpPromptRejectionStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCard = this._responseCard;
    }
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentFollowUpPromptRejectionStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._responseCard = undefined;
      this._message.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._responseCard = value.responseCard;
      this._message.internalValue = value.message;
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
  private _message = new LexIntentFollowUpPromptRejectionStatementMessageList(this, "message", true);
  public get message() {
    return this._message;
  }
  public putMessage(value: LexIntentFollowUpPromptRejectionStatementMessage[] | cdktf.IResolvable) {
    this._message.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }
}
export interface LexIntentFollowUpPrompt {
  /**
  * prompt block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#prompt LexIntent#prompt}
  */
  readonly prompt: LexIntentFollowUpPromptPrompt;
  /**
  * rejection_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#rejection_statement LexIntent#rejection_statement}
  */
  readonly rejectionStatement: LexIntentFollowUpPromptRejectionStatement;
}

export function lexIntentFollowUpPromptToTerraform(struct?: LexIntentFollowUpPromptOutputReference | LexIntentFollowUpPrompt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prompt: lexIntentFollowUpPromptPromptToTerraform(struct!.prompt),
    rejection_statement: lexIntentFollowUpPromptRejectionStatementToTerraform(struct!.rejectionStatement),
  }
}

export class LexIntentFollowUpPromptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LexIntentFollowUpPrompt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prompt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt?.internalValue;
    }
    if (this._rejectionStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectionStatement = this._rejectionStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentFollowUpPrompt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prompt.internalValue = undefined;
      this._rejectionStatement.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prompt.internalValue = value.prompt;
      this._rejectionStatement.internalValue = value.rejectionStatement;
    }
  }

  // prompt - computed: false, optional: false, required: true
  private _prompt = new LexIntentFollowUpPromptPromptOutputReference(this, "prompt");
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
  private _rejectionStatement = new LexIntentFollowUpPromptRejectionStatementOutputReference(this, "rejection_statement");
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message_version LexIntent#message_version}
  */
  readonly messageVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#uri LexIntent#uri}
  */
  readonly uri: string;
}

export function lexIntentFulfillmentActivityCodeHookToTerraform(struct?: LexIntentFulfillmentActivityCodeHookOutputReference | LexIntentFulfillmentActivityCodeHook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_version: cdktf.stringToTerraform(struct!.messageVersion),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export class LexIntentFulfillmentActivityCodeHookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LexIntentFulfillmentActivityCodeHook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageVersion = this._messageVersion;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentFulfillmentActivityCodeHook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageVersion = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#type LexIntent#type}
  */
  readonly type: string;
  /**
  * code_hook block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#code_hook LexIntent#code_hook}
  */
  readonly codeHook?: LexIntentFulfillmentActivityCodeHook;
}

export function lexIntentFulfillmentActivityToTerraform(struct?: LexIntentFulfillmentActivityOutputReference | LexIntentFulfillmentActivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    code_hook: lexIntentFulfillmentActivityCodeHookToTerraform(struct!.codeHook),
  }
}

export class LexIntentFulfillmentActivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LexIntentFulfillmentActivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._codeHook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeHook = this._codeHook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentFulfillmentActivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._codeHook.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _codeHook = new LexIntentFulfillmentActivityCodeHookOutputReference(this, "code_hook");
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}
  */
  readonly groupNumber?: number;
}

export function lexIntentRejectionStatementMessageToTerraform(struct?: LexIntentRejectionStatementMessage | cdktf.IResolvable): any {
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

export class LexIntentRejectionStatementMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LexIntentRejectionStatementMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._groupNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNumber = this._groupNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentRejectionStatementMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._groupNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
      this._groupNumber = value.groupNumber;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // group_number - computed: false, optional: true, required: false
  private _groupNumber?: number; 
  public get groupNumber() {
    return this.getNumberAttribute('group_number');
  }
  public set groupNumber(value: number) {
    this._groupNumber = value;
  }
  public resetGroupNumber() {
    this._groupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNumberInput() {
    return this._groupNumber;
  }
}

export class LexIntentRejectionStatementMessageList extends cdktf.ComplexList {
  public internalValue? : LexIntentRejectionStatementMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LexIntentRejectionStatementMessageOutputReference {
    return new LexIntentRejectionStatementMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexIntentRejectionStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}
  */
  readonly message: LexIntentRejectionStatementMessage[] | cdktf.IResolvable;
}

export function lexIntentRejectionStatementToTerraform(struct?: LexIntentRejectionStatementOutputReference | LexIntentRejectionStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response_card: cdktf.stringToTerraform(struct!.responseCard),
    message: cdktf.listMapper(lexIntentRejectionStatementMessageToTerraform, true)(struct!.message),
  }
}

export class LexIntentRejectionStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LexIntentRejectionStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCard = this._responseCard;
    }
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentRejectionStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._responseCard = undefined;
      this._message.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._responseCard = value.responseCard;
      this._message.internalValue = value.message;
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
  private _message = new LexIntentRejectionStatementMessageList(this, "message", true);
  public get message() {
    return this._message;
  }
  public putMessage(value: LexIntentRejectionStatementMessage[] | cdktf.IResolvable) {
    this._message.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }
}
export interface LexIntentSlotValueElicitationPromptMessage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}
  */
  readonly groupNumber?: number;
}

export function lexIntentSlotValueElicitationPromptMessageToTerraform(struct?: LexIntentSlotValueElicitationPromptMessage | cdktf.IResolvable): any {
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

export class LexIntentSlotValueElicitationPromptMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LexIntentSlotValueElicitationPromptMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._groupNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNumber = this._groupNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentSlotValueElicitationPromptMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._groupNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
      this._groupNumber = value.groupNumber;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // group_number - computed: false, optional: true, required: false
  private _groupNumber?: number; 
  public get groupNumber() {
    return this.getNumberAttribute('group_number');
  }
  public set groupNumber(value: number) {
    this._groupNumber = value;
  }
  public resetGroupNumber() {
    this._groupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNumberInput() {
    return this._groupNumber;
  }
}

export class LexIntentSlotValueElicitationPromptMessageList extends cdktf.ComplexList {
  public internalValue? : LexIntentSlotValueElicitationPromptMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LexIntentSlotValueElicitationPromptMessageOutputReference {
    return new LexIntentSlotValueElicitationPromptMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexIntentSlotValueElicitationPrompt {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}
  */
  readonly maxAttempts: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}
  */
  readonly message: LexIntentSlotValueElicitationPromptMessage[] | cdktf.IResolvable;
}

export function lexIntentSlotValueElicitationPromptToTerraform(struct?: LexIntentSlotValueElicitationPromptOutputReference | LexIntentSlotValueElicitationPrompt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    response_card: cdktf.stringToTerraform(struct!.responseCard),
    message: cdktf.listMapper(lexIntentSlotValueElicitationPromptMessageToTerraform, true)(struct!.message),
  }
}

export class LexIntentSlotValueElicitationPromptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LexIntentSlotValueElicitationPrompt | undefined {
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
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentSlotValueElicitationPrompt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAttempts = undefined;
      this._responseCard = undefined;
      this._message.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAttempts = value.maxAttempts;
      this._responseCard = value.responseCard;
      this._message.internalValue = value.message;
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
  private _message = new LexIntentSlotValueElicitationPromptMessageList(this, "message", true);
  public get message() {
    return this._message;
  }
  public putMessage(value: LexIntentSlotValueElicitationPromptMessage[] | cdktf.IResolvable) {
    this._message.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }
}
export interface LexIntentSlot {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#priority LexIntent#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}
  */
  readonly responseCard?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}
  */
  readonly sampleUtterances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_constraint LexIntent#slot_constraint}
  */
  readonly slotConstraint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_type LexIntent#slot_type}
  */
  readonly slotType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_type_version LexIntent#slot_type_version}
  */
  readonly slotTypeVersion?: string;
  /**
  * value_elicitation_prompt block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#value_elicitation_prompt LexIntent#value_elicitation_prompt}
  */
  readonly valueElicitationPrompt?: LexIntentSlotValueElicitationPrompt;
}

export function lexIntentSlotToTerraform(struct?: LexIntentSlot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    response_card: cdktf.stringToTerraform(struct!.responseCard),
    sample_utterances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sampleUtterances),
    slot_constraint: cdktf.stringToTerraform(struct!.slotConstraint),
    slot_type: cdktf.stringToTerraform(struct!.slotType),
    slot_type_version: cdktf.stringToTerraform(struct!.slotTypeVersion),
    value_elicitation_prompt: lexIntentSlotValueElicitationPromptToTerraform(struct!.valueElicitationPrompt),
  }
}

export class LexIntentSlotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LexIntentSlot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._responseCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCard = this._responseCard;
    }
    if (this._sampleUtterances !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleUtterances = this._sampleUtterances;
    }
    if (this._slotConstraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotConstraint = this._slotConstraint;
    }
    if (this._slotType !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotType = this._slotType;
    }
    if (this._slotTypeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotTypeVersion = this._slotTypeVersion;
    }
    if (this._valueElicitationPrompt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueElicitationPrompt = this._valueElicitationPrompt?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexIntentSlot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._responseCard = undefined;
      this._sampleUtterances = undefined;
      this._slotConstraint = undefined;
      this._slotType = undefined;
      this._slotTypeVersion = undefined;
      this._valueElicitationPrompt.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._priority = value.priority;
      this._responseCard = value.responseCard;
      this._sampleUtterances = value.sampleUtterances;
      this._slotConstraint = value.slotConstraint;
      this._slotType = value.slotType;
      this._slotTypeVersion = value.slotTypeVersion;
      this._valueElicitationPrompt.internalValue = value.valueElicitationPrompt;
    }
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // slot_constraint - computed: false, optional: false, required: true
  private _slotConstraint?: string; 
  public get slotConstraint() {
    return this.getStringAttribute('slot_constraint');
  }
  public set slotConstraint(value: string) {
    this._slotConstraint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slotConstraintInput() {
    return this._slotConstraint;
  }

  // slot_type - computed: false, optional: false, required: true
  private _slotType?: string; 
  public get slotType() {
    return this.getStringAttribute('slot_type');
  }
  public set slotType(value: string) {
    this._slotType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slotTypeInput() {
    return this._slotType;
  }

  // slot_type_version - computed: false, optional: true, required: false
  private _slotTypeVersion?: string; 
  public get slotTypeVersion() {
    return this.getStringAttribute('slot_type_version');
  }
  public set slotTypeVersion(value: string) {
    this._slotTypeVersion = value;
  }
  public resetSlotTypeVersion() {
    this._slotTypeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotTypeVersionInput() {
    return this._slotTypeVersion;
  }

  // value_elicitation_prompt - computed: false, optional: true, required: false
  private _valueElicitationPrompt = new LexIntentSlotValueElicitationPromptOutputReference(this, "value_elicitation_prompt");
  public get valueElicitationPrompt() {
    return this._valueElicitationPrompt;
  }
  public putValueElicitationPrompt(value: LexIntentSlotValueElicitationPrompt) {
    this._valueElicitationPrompt.internalValue = value;
  }
  public resetValueElicitationPrompt() {
    this._valueElicitationPrompt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueElicitationPromptInput() {
    return this._valueElicitationPrompt.internalValue;
  }
}

export class LexIntentSlotList extends cdktf.ComplexList {
  public internalValue? : LexIntentSlot[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LexIntentSlotOutputReference {
    return new LexIntentSlotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexIntentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create LexIntent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#delete LexIntent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#update LexIntent#update}
  */
  readonly update?: string;
}

export function lexIntentTimeoutsToTerraform(struct?: LexIntentTimeoutsOutputReference | LexIntentTimeouts | cdktf.IResolvable): any {
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

export class LexIntentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LexIntentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: LexIntentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_intent aws_lex_intent}
*/
export class LexIntent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lex_intent";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_intent aws_lex_intent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LexIntentConfig
  */
  public constructor(scope: Construct, id: string, config: LexIntentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lex_intent',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createVersion = config.createVersion;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._parentIntentSignature = config.parentIntentSignature;
    this._sampleUtterances = config.sampleUtterances;
    this._conclusionStatement.internalValue = config.conclusionStatement;
    this._confirmationPrompt.internalValue = config.confirmationPrompt;
    this._dialogCodeHook.internalValue = config.dialogCodeHook;
    this._followUpPrompt.internalValue = config.followUpPrompt;
    this._fulfillmentActivity.internalValue = config.fulfillmentActivity;
    this._rejectionStatement.internalValue = config.rejectionStatement;
    this._slot.internalValue = config.slot;
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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return cdktf.Fn.tolist(this.getListAttribute('sample_utterances'));
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
  private _conclusionStatement = new LexIntentConclusionStatementOutputReference(this, "conclusion_statement");
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
  private _confirmationPrompt = new LexIntentConfirmationPromptOutputReference(this, "confirmation_prompt");
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
  private _dialogCodeHook = new LexIntentDialogCodeHookOutputReference(this, "dialog_code_hook");
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
  private _followUpPrompt = new LexIntentFollowUpPromptOutputReference(this, "follow_up_prompt");
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
  private _fulfillmentActivity = new LexIntentFulfillmentActivityOutputReference(this, "fulfillment_activity");
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
  private _rejectionStatement = new LexIntentRejectionStatementOutputReference(this, "rejection_statement");
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
  private _slot = new LexIntentSlotList(this, "slot", true);
  public get slot() {
    return this._slot;
  }
  public putSlot(value: LexIntentSlot[] | cdktf.IResolvable) {
    this._slot.internalValue = value;
  }
  public resetSlot() {
    this._slot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LexIntentTimeoutsOutputReference(this, "timeouts");
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent_intent_signature: cdktf.stringToTerraform(this._parentIntentSignature),
      sample_utterances: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sampleUtterances),
      conclusion_statement: lexIntentConclusionStatementToTerraform(this._conclusionStatement.internalValue),
      confirmation_prompt: lexIntentConfirmationPromptToTerraform(this._confirmationPrompt.internalValue),
      dialog_code_hook: lexIntentDialogCodeHookToTerraform(this._dialogCodeHook.internalValue),
      follow_up_prompt: lexIntentFollowUpPromptToTerraform(this._followUpPrompt.internalValue),
      fulfillment_activity: lexIntentFulfillmentActivityToTerraform(this._fulfillmentActivity.internalValue),
      rejection_statement: lexIntentRejectionStatementToTerraform(this._rejectionStatement.internalValue),
      slot: cdktf.listMapper(lexIntentSlotToTerraform, true)(this._slot.internalValue),
      timeouts: lexIntentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
