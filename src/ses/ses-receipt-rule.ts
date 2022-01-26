// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Email Service
*/
export interface SesReceiptRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#after SesReceiptRule#after}
  */
  readonly after?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#enabled SesReceiptRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#name SesReceiptRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#recipients SesReceiptRule#recipients}
  */
  readonly recipients?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#rule_set_name SesReceiptRule#rule_set_name}
  */
  readonly ruleSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scan_enabled SesReceiptRule#scan_enabled}
  */
  readonly scanEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#tls_policy SesReceiptRule#tls_policy}
  */
  readonly tlsPolicy?: string;
  /**
  * add_header_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#add_header_action SesReceiptRule#add_header_action}
  */
  readonly addHeaderAction?: SesReceiptRuleAddHeaderAction[] | cdktf.IResolvable;
  /**
  * bounce_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#bounce_action SesReceiptRule#bounce_action}
  */
  readonly bounceAction?: SesReceiptRuleBounceAction[] | cdktf.IResolvable;
  /**
  * lambda_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#lambda_action SesReceiptRule#lambda_action}
  */
  readonly lambdaAction?: SesReceiptRuleLambdaAction[] | cdktf.IResolvable;
  /**
  * s3_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#s3_action SesReceiptRule#s3_action}
  */
  readonly s3Action?: SesReceiptRuleS3Action[] | cdktf.IResolvable;
  /**
  * sns_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#sns_action SesReceiptRule#sns_action}
  */
  readonly snsAction?: SesReceiptRuleSnsAction[] | cdktf.IResolvable;
  /**
  * stop_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#stop_action SesReceiptRule#stop_action}
  */
  readonly stopAction?: SesReceiptRuleStopAction[] | cdktf.IResolvable;
  /**
  * workmail_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#workmail_action SesReceiptRule#workmail_action}
  */
  readonly workmailAction?: SesReceiptRuleWorkmailAction[] | cdktf.IResolvable;
}
export interface SesReceiptRuleAddHeaderAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_name SesReceiptRule#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_value SesReceiptRule#header_value}
  */
  readonly headerValue: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}
  */
  readonly position: number;
}

export function sesReceiptRuleAddHeaderActionToTerraform(struct?: SesReceiptRuleAddHeaderAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    position: cdktf.numberToTerraform(struct!.position),
  }
}

export interface SesReceiptRuleBounceAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#message SesReceiptRule#message}
  */
  readonly message: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#sender SesReceiptRule#sender}
  */
  readonly sender: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#smtp_reply_code SesReceiptRule#smtp_reply_code}
  */
  readonly smtpReplyCode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#status_code SesReceiptRule#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}
  */
  readonly topicArn?: string;
}

export function sesReceiptRuleBounceActionToTerraform(struct?: SesReceiptRuleBounceAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    position: cdktf.numberToTerraform(struct!.position),
    sender: cdktf.stringToTerraform(struct!.sender),
    smtp_reply_code: cdktf.stringToTerraform(struct!.smtpReplyCode),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}

export interface SesReceiptRuleLambdaAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#function_arn SesReceiptRule#function_arn}
  */
  readonly functionArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#invocation_type SesReceiptRule#invocation_type}
  */
  readonly invocationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}
  */
  readonly topicArn?: string;
}

export function sesReceiptRuleLambdaActionToTerraform(struct?: SesReceiptRuleLambdaAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
    invocation_type: cdktf.stringToTerraform(struct!.invocationType),
    position: cdktf.numberToTerraform(struct!.position),
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}

export interface SesReceiptRuleS3Action {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#bucket_name SesReceiptRule#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#kms_key_arn SesReceiptRule#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#object_key_prefix SesReceiptRule#object_key_prefix}
  */
  readonly objectKeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}
  */
  readonly topicArn?: string;
}

export function sesReceiptRuleS3ActionToTerraform(struct?: SesReceiptRuleS3Action | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    object_key_prefix: cdktf.stringToTerraform(struct!.objectKeyPrefix),
    position: cdktf.numberToTerraform(struct!.position),
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}

export interface SesReceiptRuleSnsAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#encoding SesReceiptRule#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}
  */
  readonly topicArn: string;
}

export function sesReceiptRuleSnsActionToTerraform(struct?: SesReceiptRuleSnsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    position: cdktf.numberToTerraform(struct!.position),
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}

export interface SesReceiptRuleStopAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scope SesReceiptRule#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}
  */
  readonly topicArn?: string;
}

export function sesReceiptRuleStopActionToTerraform(struct?: SesReceiptRuleStopAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    position: cdktf.numberToTerraform(struct!.position),
    scope: cdktf.stringToTerraform(struct!.scope),
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}

export interface SesReceiptRuleWorkmailAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#organization_arn SesReceiptRule#organization_arn}
  */
  readonly organizationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}
  */
  readonly topicArn?: string;
}

export function sesReceiptRuleWorkmailActionToTerraform(struct?: SesReceiptRuleWorkmailAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    organization_arn: cdktf.stringToTerraform(struct!.organizationArn),
    position: cdktf.numberToTerraform(struct!.position),
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule aws_ses_receipt_rule}
*/
export class SesReceiptRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ses_receipt_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule aws_ses_receipt_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SesReceiptRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SesReceiptRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ses_receipt_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._after = config.after;
    this._enabled = config.enabled;
    this._name = config.name;
    this._recipients = config.recipients;
    this._ruleSetName = config.ruleSetName;
    this._scanEnabled = config.scanEnabled;
    this._tlsPolicy = config.tlsPolicy;
    this._addHeaderAction = config.addHeaderAction;
    this._bounceAction = config.bounceAction;
    this._lambdaAction = config.lambdaAction;
    this._s3Action = config.s3Action;
    this._snsAction = config.snsAction;
    this._stopAction = config.stopAction;
    this._workmailAction = config.workmailAction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // after - computed: false, optional: true, required: false
  private _after?: string; 
  public get after() {
    return this.getStringAttribute('after');
  }
  public set after(value: string) {
    this._after = value;
  }
  public resetAfter() {
    this._after = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // recipients - computed: false, optional: true, required: false
  private _recipients?: string[]; 
  public get recipients() {
    return cdktf.Fn.tolist(this.getListAttribute('recipients'));
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  public resetRecipients() {
    this._recipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // rule_set_name - computed: false, optional: false, required: true
  private _ruleSetName?: string; 
  public get ruleSetName() {
    return this.getStringAttribute('rule_set_name');
  }
  public set ruleSetName(value: string) {
    this._ruleSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetNameInput() {
    return this._ruleSetName;
  }

  // scan_enabled - computed: false, optional: true, required: false
  private _scanEnabled?: boolean | cdktf.IResolvable; 
  public get scanEnabled() {
    return this.getBooleanAttribute('scan_enabled');
  }
  public set scanEnabled(value: boolean | cdktf.IResolvable) {
    this._scanEnabled = value;
  }
  public resetScanEnabled() {
    this._scanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanEnabledInput() {
    return this._scanEnabled;
  }

  // tls_policy - computed: true, optional: true, required: false
  private _tlsPolicy?: string; 
  public get tlsPolicy() {
    return this.getStringAttribute('tls_policy');
  }
  public set tlsPolicy(value: string) {
    this._tlsPolicy = value;
  }
  public resetTlsPolicy() {
    this._tlsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPolicyInput() {
    return this._tlsPolicy;
  }

  // add_header_action - computed: false, optional: true, required: false
  private _addHeaderAction?: SesReceiptRuleAddHeaderAction[] | cdktf.IResolvable; 
  public get addHeaderAction() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('add_header_action')));
  }
  public set addHeaderAction(value: SesReceiptRuleAddHeaderAction[] | cdktf.IResolvable) {
    this._addHeaderAction = value;
  }
  public resetAddHeaderAction() {
    this._addHeaderAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHeaderActionInput() {
    return this._addHeaderAction;
  }

  // bounce_action - computed: false, optional: true, required: false
  private _bounceAction?: SesReceiptRuleBounceAction[] | cdktf.IResolvable; 
  public get bounceAction() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('bounce_action')));
  }
  public set bounceAction(value: SesReceiptRuleBounceAction[] | cdktf.IResolvable) {
    this._bounceAction = value;
  }
  public resetBounceAction() {
    this._bounceAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bounceActionInput() {
    return this._bounceAction;
  }

  // lambda_action - computed: false, optional: true, required: false
  private _lambdaAction?: SesReceiptRuleLambdaAction[] | cdktf.IResolvable; 
  public get lambdaAction() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('lambda_action')));
  }
  public set lambdaAction(value: SesReceiptRuleLambdaAction[] | cdktf.IResolvable) {
    this._lambdaAction = value;
  }
  public resetLambdaAction() {
    this._lambdaAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaActionInput() {
    return this._lambdaAction;
  }

  // s3_action - computed: false, optional: true, required: false
  private _s3Action?: SesReceiptRuleS3Action[] | cdktf.IResolvable; 
  public get s3Action() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('s3_action')));
  }
  public set s3Action(value: SesReceiptRuleS3Action[] | cdktf.IResolvable) {
    this._s3Action = value;
  }
  public resetS3Action() {
    this._s3Action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ActionInput() {
    return this._s3Action;
  }

  // sns_action - computed: false, optional: true, required: false
  private _snsAction?: SesReceiptRuleSnsAction[] | cdktf.IResolvable; 
  public get snsAction() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('sns_action')));
  }
  public set snsAction(value: SesReceiptRuleSnsAction[] | cdktf.IResolvable) {
    this._snsAction = value;
  }
  public resetSnsAction() {
    this._snsAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsActionInput() {
    return this._snsAction;
  }

  // stop_action - computed: false, optional: true, required: false
  private _stopAction?: SesReceiptRuleStopAction[] | cdktf.IResolvable; 
  public get stopAction() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('stop_action')));
  }
  public set stopAction(value: SesReceiptRuleStopAction[] | cdktf.IResolvable) {
    this._stopAction = value;
  }
  public resetStopAction() {
    this._stopAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopActionInput() {
    return this._stopAction;
  }

  // workmail_action - computed: false, optional: true, required: false
  private _workmailAction?: SesReceiptRuleWorkmailAction[] | cdktf.IResolvable; 
  public get workmailAction() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('workmail_action')));
  }
  public set workmailAction(value: SesReceiptRuleWorkmailAction[] | cdktf.IResolvable) {
    this._workmailAction = value;
  }
  public resetWorkmailAction() {
    this._workmailAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workmailActionInput() {
    return this._workmailAction;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      after: cdktf.stringToTerraform(this._after),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      recipients: cdktf.listMapper(cdktf.stringToTerraform)(this._recipients),
      rule_set_name: cdktf.stringToTerraform(this._ruleSetName),
      scan_enabled: cdktf.booleanToTerraform(this._scanEnabled),
      tls_policy: cdktf.stringToTerraform(this._tlsPolicy),
      add_header_action: cdktf.listMapper(sesReceiptRuleAddHeaderActionToTerraform)(this._addHeaderAction),
      bounce_action: cdktf.listMapper(sesReceiptRuleBounceActionToTerraform)(this._bounceAction),
      lambda_action: cdktf.listMapper(sesReceiptRuleLambdaActionToTerraform)(this._lambdaAction),
      s3_action: cdktf.listMapper(sesReceiptRuleS3ActionToTerraform)(this._s3Action),
      sns_action: cdktf.listMapper(sesReceiptRuleSnsActionToTerraform)(this._snsAction),
      stop_action: cdktf.listMapper(sesReceiptRuleStopActionToTerraform)(this._stopAction),
      workmail_action: cdktf.listMapper(sesReceiptRuleWorkmailActionToTerraform)(this._workmailAction),
    };
  }
}
