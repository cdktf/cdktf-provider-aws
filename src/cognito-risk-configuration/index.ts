// https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitoRiskConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#client_id CognitoRiskConfiguration#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#id CognitoRiskConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#user_pool_id CognitoRiskConfiguration#user_pool_id}
  */
  readonly userPoolId: string;
  /**
  * account_takeover_risk_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#account_takeover_risk_configuration CognitoRiskConfiguration#account_takeover_risk_configuration}
  */
  readonly accountTakeoverRiskConfiguration?: CognitoRiskConfigurationAccountTakeoverRiskConfiguration;
  /**
  * compromised_credentials_risk_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#compromised_credentials_risk_configuration CognitoRiskConfiguration#compromised_credentials_risk_configuration}
  */
  readonly compromisedCredentialsRiskConfiguration?: CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration;
  /**
  * risk_exception_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#risk_exception_configuration CognitoRiskConfiguration#risk_exception_configuration}
  */
  readonly riskExceptionConfiguration?: CognitoRiskConfigurationRiskExceptionConfiguration;
}
export interface CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}
  */
  readonly eventAction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}
  */
  readonly notify: boolean | cdktf.IResolvable;
}

export function cognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionToTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_action: cdktf.stringToTerraform(struct!.eventAction),
    notify: cdktf.booleanToTerraform(struct!.notify),
  }
}

export class CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventAction = this._eventAction;
    }
    if (this._notify !== undefined) {
      hasAnyValues = true;
      internalValueResult.notify = this._notify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventAction = undefined;
      this._notify = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventAction = value.eventAction;
      this._notify = value.notify;
    }
  }

  // event_action - computed: false, optional: false, required: true
  private _eventAction?: string; 
  public get eventAction() {
    return this.getStringAttribute('event_action');
  }
  public set eventAction(value: string) {
    this._eventAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventActionInput() {
    return this._eventAction;
  }

  // notify - computed: false, optional: false, required: true
  private _notify?: boolean | cdktf.IResolvable; 
  public get notify() {
    return this.getBooleanAttribute('notify');
  }
  public set notify(value: boolean | cdktf.IResolvable) {
    this._notify = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }
}
export interface CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}
  */
  readonly eventAction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}
  */
  readonly notify: boolean | cdktf.IResolvable;
}

export function cognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionToTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_action: cdktf.stringToTerraform(struct!.eventAction),
    notify: cdktf.booleanToTerraform(struct!.notify),
  }
}

export class CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventAction = this._eventAction;
    }
    if (this._notify !== undefined) {
      hasAnyValues = true;
      internalValueResult.notify = this._notify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventAction = undefined;
      this._notify = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventAction = value.eventAction;
      this._notify = value.notify;
    }
  }

  // event_action - computed: false, optional: false, required: true
  private _eventAction?: string; 
  public get eventAction() {
    return this.getStringAttribute('event_action');
  }
  public set eventAction(value: string) {
    this._eventAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventActionInput() {
    return this._eventAction;
  }

  // notify - computed: false, optional: false, required: true
  private _notify?: boolean | cdktf.IResolvable; 
  public get notify() {
    return this.getBooleanAttribute('notify');
  }
  public set notify(value: boolean | cdktf.IResolvable) {
    this._notify = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }
}
export interface CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}
  */
  readonly eventAction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}
  */
  readonly notify: boolean | cdktf.IResolvable;
}

export function cognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionToTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_action: cdktf.stringToTerraform(struct!.eventAction),
    notify: cdktf.booleanToTerraform(struct!.notify),
  }
}

export class CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventAction = this._eventAction;
    }
    if (this._notify !== undefined) {
      hasAnyValues = true;
      internalValueResult.notify = this._notify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventAction = undefined;
      this._notify = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventAction = value.eventAction;
      this._notify = value.notify;
    }
  }

  // event_action - computed: false, optional: false, required: true
  private _eventAction?: string; 
  public get eventAction() {
    return this.getStringAttribute('event_action');
  }
  public set eventAction(value: string) {
    this._eventAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventActionInput() {
    return this._eventAction;
  }

  // notify - computed: false, optional: false, required: true
  private _notify?: boolean | cdktf.IResolvable; 
  public get notify() {
    return this.getBooleanAttribute('notify');
  }
  public set notify(value: boolean | cdktf.IResolvable) {
    this._notify = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }
}
export interface CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions {
  /**
  * high_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#high_action CognitoRiskConfiguration#high_action}
  */
  readonly highAction?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction;
  /**
  * low_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#low_action CognitoRiskConfiguration#low_action}
  */
  readonly lowAction?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction;
  /**
  * medium_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#medium_action CognitoRiskConfiguration#medium_action}
  */
  readonly mediumAction?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction;
}

export function cognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsToTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_action: cognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionToTerraform(struct!.highAction),
    low_action: cognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionToTerraform(struct!.lowAction),
    medium_action: cognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionToTerraform(struct!.mediumAction),
  }
}

export class CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.highAction = this._highAction?.internalValue;
    }
    if (this._lowAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowAction = this._lowAction?.internalValue;
    }
    if (this._mediumAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumAction = this._mediumAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._highAction.internalValue = undefined;
      this._lowAction.internalValue = undefined;
      this._mediumAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._highAction.internalValue = value.highAction;
      this._lowAction.internalValue = value.lowAction;
      this._mediumAction.internalValue = value.mediumAction;
    }
  }

  // high_action - computed: false, optional: true, required: false
  private _highAction = new CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference(this, "high_action");
  public get highAction() {
    return this._highAction;
  }
  public putHighAction(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction) {
    this._highAction.internalValue = value;
  }
  public resetHighAction() {
    this._highAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highActionInput() {
    return this._highAction.internalValue;
  }

  // low_action - computed: false, optional: true, required: false
  private _lowAction = new CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference(this, "low_action");
  public get lowAction() {
    return this._lowAction;
  }
  public putLowAction(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction) {
    this._lowAction.internalValue = value;
  }
  public resetLowAction() {
    this._lowAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowActionInput() {
    return this._lowAction.internalValue;
  }

  // medium_action - computed: false, optional: true, required: false
  private _mediumAction = new CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference(this, "medium_action");
  public get mediumAction() {
    return this._mediumAction;
  }
  public putMediumAction(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction) {
    this._mediumAction.internalValue = value;
  }
  public resetMediumAction() {
    this._mediumAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumActionInput() {
    return this._mediumAction.internalValue;
  }
}
export interface CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}
  */
  readonly htmlBody: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}
  */
  readonly subject: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}
  */
  readonly textBody: string;
}

export function cognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailToTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    html_body: cdktf.stringToTerraform(struct!.htmlBody),
    subject: cdktf.stringToTerraform(struct!.subject),
    text_body: cdktf.stringToTerraform(struct!.textBody),
  }
}

export class CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._htmlBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.htmlBody = this._htmlBody;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._textBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.textBody = this._textBody;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._htmlBody = undefined;
      this._subject = undefined;
      this._textBody = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._htmlBody = value.htmlBody;
      this._subject = value.subject;
      this._textBody = value.textBody;
    }
  }

  // html_body - computed: false, optional: false, required: true
  private _htmlBody?: string; 
  public get htmlBody() {
    return this.getStringAttribute('html_body');
  }
  public set htmlBody(value: string) {
    this._htmlBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlBodyInput() {
    return this._htmlBody;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // text_body - computed: false, optional: false, required: true
  private _textBody?: string; 
  public get textBody() {
    return this.getStringAttribute('text_body');
  }
  public set textBody(value: string) {
    this._textBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textBodyInput() {
    return this._textBody;
  }
}
export interface CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}
  */
  readonly htmlBody: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}
  */
  readonly subject: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}
  */
  readonly textBody: string;
}

export function cognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailToTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    html_body: cdktf.stringToTerraform(struct!.htmlBody),
    subject: cdktf.stringToTerraform(struct!.subject),
    text_body: cdktf.stringToTerraform(struct!.textBody),
  }
}

export class CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._htmlBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.htmlBody = this._htmlBody;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._textBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.textBody = this._textBody;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._htmlBody = undefined;
      this._subject = undefined;
      this._textBody = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._htmlBody = value.htmlBody;
      this._subject = value.subject;
      this._textBody = value.textBody;
    }
  }

  // html_body - computed: false, optional: false, required: true
  private _htmlBody?: string; 
  public get htmlBody() {
    return this.getStringAttribute('html_body');
  }
  public set htmlBody(value: string) {
    this._htmlBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlBodyInput() {
    return this._htmlBody;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // text_body - computed: false, optional: false, required: true
  private _textBody?: string; 
  public get textBody() {
    return this.getStringAttribute('text_body');
  }
  public set textBody(value: string) {
    this._textBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textBodyInput() {
    return this._textBody;
  }
}
export interface CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}
  */
  readonly htmlBody: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}
  */
  readonly subject: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}
  */
  readonly textBody: string;
}

export function cognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailToTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    html_body: cdktf.stringToTerraform(struct!.htmlBody),
    subject: cdktf.stringToTerraform(struct!.subject),
    text_body: cdktf.stringToTerraform(struct!.textBody),
  }
}

export class CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._htmlBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.htmlBody = this._htmlBody;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._textBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.textBody = this._textBody;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._htmlBody = undefined;
      this._subject = undefined;
      this._textBody = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._htmlBody = value.htmlBody;
      this._subject = value.subject;
      this._textBody = value.textBody;
    }
  }

  // html_body - computed: false, optional: false, required: true
  private _htmlBody?: string; 
  public get htmlBody() {
    return this.getStringAttribute('html_body');
  }
  public set htmlBody(value: string) {
    this._htmlBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlBodyInput() {
    return this._htmlBody;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // text_body - computed: false, optional: false, required: true
  private _textBody?: string; 
  public get textBody() {
    return this.getStringAttribute('text_body');
  }
  public set textBody(value: string) {
    this._textBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textBodyInput() {
    return this._textBody;
  }
}
export interface CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#from CognitoRiskConfiguration#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#reply_to CognitoRiskConfiguration#reply_to}
  */
  readonly replyTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#source_arn CognitoRiskConfiguration#source_arn}
  */
  readonly sourceArn: string;
  /**
  * block_email block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#block_email CognitoRiskConfiguration#block_email}
  */
  readonly blockEmail?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail;
  /**
  * mfa_email block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#mfa_email CognitoRiskConfiguration#mfa_email}
  */
  readonly mfaEmail?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail;
  /**
  * no_action_email block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#no_action_email CognitoRiskConfiguration#no_action_email}
  */
  readonly noActionEmail?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail;
}

export function cognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationToTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    reply_to: cdktf.stringToTerraform(struct!.replyTo),
    source_arn: cdktf.stringToTerraform(struct!.sourceArn),
    block_email: cognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailToTerraform(struct!.blockEmail),
    mfa_email: cognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailToTerraform(struct!.mfaEmail),
    no_action_email: cognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailToTerraform(struct!.noActionEmail),
  }
}

export class CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._replyTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyTo = this._replyTo;
    }
    if (this._sourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceArn = this._sourceArn;
    }
    if (this._blockEmail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockEmail = this._blockEmail?.internalValue;
    }
    if (this._mfaEmail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfaEmail = this._mfaEmail?.internalValue;
    }
    if (this._noActionEmail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noActionEmail = this._noActionEmail?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._replyTo = undefined;
      this._sourceArn = undefined;
      this._blockEmail.internalValue = undefined;
      this._mfaEmail.internalValue = undefined;
      this._noActionEmail.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._replyTo = value.replyTo;
      this._sourceArn = value.sourceArn;
      this._blockEmail.internalValue = value.blockEmail;
      this._mfaEmail.internalValue = value.mfaEmail;
      this._noActionEmail.internalValue = value.noActionEmail;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // reply_to - computed: false, optional: true, required: false
  private _replyTo?: string; 
  public get replyTo() {
    return this.getStringAttribute('reply_to');
  }
  public set replyTo(value: string) {
    this._replyTo = value;
  }
  public resetReplyTo() {
    this._replyTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyToInput() {
    return this._replyTo;
  }

  // source_arn - computed: false, optional: false, required: true
  private _sourceArn?: string; 
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }
  public set sourceArn(value: string) {
    this._sourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArnInput() {
    return this._sourceArn;
  }

  // block_email - computed: false, optional: true, required: false
  private _blockEmail = new CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference(this, "block_email");
  public get blockEmail() {
    return this._blockEmail;
  }
  public putBlockEmail(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail) {
    this._blockEmail.internalValue = value;
  }
  public resetBlockEmail() {
    this._blockEmail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockEmailInput() {
    return this._blockEmail.internalValue;
  }

  // mfa_email - computed: false, optional: true, required: false
  private _mfaEmail = new CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference(this, "mfa_email");
  public get mfaEmail() {
    return this._mfaEmail;
  }
  public putMfaEmail(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail) {
    this._mfaEmail.internalValue = value;
  }
  public resetMfaEmail() {
    this._mfaEmail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaEmailInput() {
    return this._mfaEmail.internalValue;
  }

  // no_action_email - computed: false, optional: true, required: false
  private _noActionEmail = new CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference(this, "no_action_email");
  public get noActionEmail() {
    return this._noActionEmail;
  }
  public putNoActionEmail(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail) {
    this._noActionEmail.internalValue = value;
  }
  public resetNoActionEmail() {
    this._noActionEmail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noActionEmailInput() {
    return this._noActionEmail.internalValue;
  }
}
export interface CognitoRiskConfigurationAccountTakeoverRiskConfiguration {
  /**
  * actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#actions CognitoRiskConfiguration#actions}
  */
  readonly actions: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions;
  /**
  * notify_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify_configuration CognitoRiskConfiguration#notify_configuration}
  */
  readonly notifyConfiguration: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration;
}

export function cognitoRiskConfigurationAccountTakeoverRiskConfigurationToTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsToTerraform(struct!.actions),
    notify_configuration: cognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationToTerraform(struct!.notifyConfiguration),
  }
}

export class CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CognitoRiskConfigurationAccountTakeoverRiskConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._notifyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyConfiguration = this._notifyConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoRiskConfigurationAccountTakeoverRiskConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions.internalValue = undefined;
      this._notifyConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions.internalValue = value.actions;
      this._notifyConfiguration.internalValue = value.notifyConfiguration;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions = new CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // notify_configuration - computed: false, optional: false, required: true
  private _notifyConfiguration = new CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference(this, "notify_configuration");
  public get notifyConfiguration() {
    return this._notifyConfiguration;
  }
  public putNotifyConfiguration(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration) {
    this._notifyConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyConfigurationInput() {
    return this._notifyConfiguration.internalValue;
  }
}
export interface CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}
  */
  readonly eventAction: string;
}

export function cognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsToTerraform(struct?: CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference | CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_action: cdktf.stringToTerraform(struct!.eventAction),
  }
}

export class CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventAction = this._eventAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventAction = value.eventAction;
    }
  }

  // event_action - computed: false, optional: false, required: true
  private _eventAction?: string; 
  public get eventAction() {
    return this.getStringAttribute('event_action');
  }
  public set eventAction(value: string) {
    this._eventAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventActionInput() {
    return this._eventAction;
  }
}
export interface CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_filter CognitoRiskConfiguration#event_filter}
  */
  readonly eventFilter?: string[];
  /**
  * actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#actions CognitoRiskConfiguration#actions}
  */
  readonly actions: CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions;
}

export function cognitoRiskConfigurationCompromisedCredentialsRiskConfigurationToTerraform(struct?: CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference | CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventFilter),
    actions: cognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsToTerraform(struct!.actions),
  }
}

export class CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventFilter = this._eventFilter;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventFilter = undefined;
      this._actions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventFilter = value.eventFilter;
      this._actions.internalValue = value.actions;
    }
  }

  // event_filter - computed: true, optional: true, required: false
  private _eventFilter?: string[]; 
  public get eventFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('event_filter'));
  }
  public set eventFilter(value: string[]) {
    this._eventFilter = value;
  }
  public resetEventFilter() {
    this._eventFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventFilterInput() {
    return this._eventFilter;
  }

  // actions - computed: false, optional: false, required: true
  private _actions = new CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }
}
export interface CognitoRiskConfigurationRiskExceptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#blocked_ip_range_list CognitoRiskConfiguration#blocked_ip_range_list}
  */
  readonly blockedIpRangeList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#skipped_ip_range_list CognitoRiskConfiguration#skipped_ip_range_list}
  */
  readonly skippedIpRangeList?: string[];
}

export function cognitoRiskConfigurationRiskExceptionConfigurationToTerraform(struct?: CognitoRiskConfigurationRiskExceptionConfigurationOutputReference | CognitoRiskConfigurationRiskExceptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocked_ip_range_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockedIpRangeList),
    skipped_ip_range_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.skippedIpRangeList),
  }
}

export class CognitoRiskConfigurationRiskExceptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CognitoRiskConfigurationRiskExceptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockedIpRangeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedIpRangeList = this._blockedIpRangeList;
    }
    if (this._skippedIpRangeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.skippedIpRangeList = this._skippedIpRangeList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoRiskConfigurationRiskExceptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockedIpRangeList = undefined;
      this._skippedIpRangeList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockedIpRangeList = value.blockedIpRangeList;
      this._skippedIpRangeList = value.skippedIpRangeList;
    }
  }

  // blocked_ip_range_list - computed: false, optional: true, required: false
  private _blockedIpRangeList?: string[]; 
  public get blockedIpRangeList() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_ip_range_list'));
  }
  public set blockedIpRangeList(value: string[]) {
    this._blockedIpRangeList = value;
  }
  public resetBlockedIpRangeList() {
    this._blockedIpRangeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedIpRangeListInput() {
    return this._blockedIpRangeList;
  }

  // skipped_ip_range_list - computed: false, optional: true, required: false
  private _skippedIpRangeList?: string[]; 
  public get skippedIpRangeList() {
    return cdktf.Fn.tolist(this.getListAttribute('skipped_ip_range_list'));
  }
  public set skippedIpRangeList(value: string[]) {
    this._skippedIpRangeList = value;
  }
  public resetSkippedIpRangeList() {
    this._skippedIpRangeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skippedIpRangeListInput() {
    return this._skippedIpRangeList;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration aws_cognito_risk_configuration}
*/
export class CognitoRiskConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cognito_risk_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration aws_cognito_risk_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoRiskConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoRiskConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_risk_configuration',
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
    this._clientId = config.clientId;
    this._id = config.id;
    this._userPoolId = config.userPoolId;
    this._accountTakeoverRiskConfiguration.internalValue = config.accountTakeoverRiskConfiguration;
    this._compromisedCredentialsRiskConfiguration.internalValue = config.compromisedCredentialsRiskConfiguration;
    this._riskExceptionConfiguration.internalValue = config.riskExceptionConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
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

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }

  // account_takeover_risk_configuration - computed: false, optional: true, required: false
  private _accountTakeoverRiskConfiguration = new CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference(this, "account_takeover_risk_configuration");
  public get accountTakeoverRiskConfiguration() {
    return this._accountTakeoverRiskConfiguration;
  }
  public putAccountTakeoverRiskConfiguration(value: CognitoRiskConfigurationAccountTakeoverRiskConfiguration) {
    this._accountTakeoverRiskConfiguration.internalValue = value;
  }
  public resetAccountTakeoverRiskConfiguration() {
    this._accountTakeoverRiskConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTakeoverRiskConfigurationInput() {
    return this._accountTakeoverRiskConfiguration.internalValue;
  }

  // compromised_credentials_risk_configuration - computed: false, optional: true, required: false
  private _compromisedCredentialsRiskConfiguration = new CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference(this, "compromised_credentials_risk_configuration");
  public get compromisedCredentialsRiskConfiguration() {
    return this._compromisedCredentialsRiskConfiguration;
  }
  public putCompromisedCredentialsRiskConfiguration(value: CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration) {
    this._compromisedCredentialsRiskConfiguration.internalValue = value;
  }
  public resetCompromisedCredentialsRiskConfiguration() {
    this._compromisedCredentialsRiskConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compromisedCredentialsRiskConfigurationInput() {
    return this._compromisedCredentialsRiskConfiguration.internalValue;
  }

  // risk_exception_configuration - computed: false, optional: true, required: false
  private _riskExceptionConfiguration = new CognitoRiskConfigurationRiskExceptionConfigurationOutputReference(this, "risk_exception_configuration");
  public get riskExceptionConfiguration() {
    return this._riskExceptionConfiguration;
  }
  public putRiskExceptionConfiguration(value: CognitoRiskConfigurationRiskExceptionConfiguration) {
    this._riskExceptionConfiguration.internalValue = value;
  }
  public resetRiskExceptionConfiguration() {
    this._riskExceptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskExceptionConfigurationInput() {
    return this._riskExceptionConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      id: cdktf.stringToTerraform(this._id),
      user_pool_id: cdktf.stringToTerraform(this._userPoolId),
      account_takeover_risk_configuration: cognitoRiskConfigurationAccountTakeoverRiskConfigurationToTerraform(this._accountTakeoverRiskConfiguration.internalValue),
      compromised_credentials_risk_configuration: cognitoRiskConfigurationCompromisedCredentialsRiskConfigurationToTerraform(this._compromisedCredentialsRiskConfiguration.internalValue),
      risk_exception_configuration: cognitoRiskConfigurationRiskExceptionConfigurationToTerraform(this._riskExceptionConfiguration.internalValue),
    };
  }
}
