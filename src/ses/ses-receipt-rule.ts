// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Email Service
*/
export interface SesReceiptRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#after SesReceiptRule#after}
  */
  readonly after?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#enabled SesReceiptRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#name SesReceiptRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#recipients SesReceiptRule#recipients}
  */
  readonly recipients?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#rule_set_name SesReceiptRule#rule_set_name}
  */
  readonly ruleSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#scan_enabled SesReceiptRule#scan_enabled}
  */
  readonly scanEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#tls_policy SesReceiptRule#tls_policy}
  */
  readonly tlsPolicy?: string;
  /**
  * add_header_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#add_header_action SesReceiptRule#add_header_action}
  */
  readonly addHeaderAction?: SesReceiptRuleAddHeaderAction[];
  /**
  * bounce_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#bounce_action SesReceiptRule#bounce_action}
  */
  readonly bounceAction?: SesReceiptRuleBounceAction[];
  /**
  * lambda_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#lambda_action SesReceiptRule#lambda_action}
  */
  readonly lambdaAction?: SesReceiptRuleLambdaAction[];
  /**
  * s3_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#s3_action SesReceiptRule#s3_action}
  */
  readonly s3Action?: SesReceiptRuleS3Action[];
  /**
  * sns_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#sns_action SesReceiptRule#sns_action}
  */
  readonly snsAction?: SesReceiptRuleSnsAction[];
  /**
  * stop_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#stop_action SesReceiptRule#stop_action}
  */
  readonly stopAction?: SesReceiptRuleStopAction[];
  /**
  * workmail_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#workmail_action SesReceiptRule#workmail_action}
  */
  readonly workmailAction?: SesReceiptRuleWorkmailAction[];
}
export interface SesReceiptRuleAddHeaderAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#header_name SesReceiptRule#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#header_value SesReceiptRule#header_value}
  */
  readonly headerValue: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#position SesReceiptRule#position}
  */
  readonly position: number;
}

export function sesReceiptRuleAddHeaderActionToTerraform(struct?: SesReceiptRuleAddHeaderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#message SesReceiptRule#message}
  */
  readonly message: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#position SesReceiptRule#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#sender SesReceiptRule#sender}
  */
  readonly sender: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#smtp_reply_code SesReceiptRule#smtp_reply_code}
  */
  readonly smtpReplyCode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#status_code SesReceiptRule#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#topic_arn SesReceiptRule#topic_arn}
  */
  readonly topicArn?: string;
}

export function sesReceiptRuleBounceActionToTerraform(struct?: SesReceiptRuleBounceAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#function_arn SesReceiptRule#function_arn}
  */
  readonly functionArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#invocation_type SesReceiptRule#invocation_type}
  */
  readonly invocationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#position SesReceiptRule#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#topic_arn SesReceiptRule#topic_arn}
  */
  readonly topicArn?: string;
}

export function sesReceiptRuleLambdaActionToTerraform(struct?: SesReceiptRuleLambdaAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#bucket_name SesReceiptRule#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#kms_key_arn SesReceiptRule#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#object_key_prefix SesReceiptRule#object_key_prefix}
  */
  readonly objectKeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#position SesReceiptRule#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#topic_arn SesReceiptRule#topic_arn}
  */
  readonly topicArn?: string;
}

export function sesReceiptRuleS3ActionToTerraform(struct?: SesReceiptRuleS3Action): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#encoding SesReceiptRule#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#position SesReceiptRule#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#topic_arn SesReceiptRule#topic_arn}
  */
  readonly topicArn: string;
}

export function sesReceiptRuleSnsActionToTerraform(struct?: SesReceiptRuleSnsAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#position SesReceiptRule#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#scope SesReceiptRule#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#topic_arn SesReceiptRule#topic_arn}
  */
  readonly topicArn?: string;
}

export function sesReceiptRuleStopActionToTerraform(struct?: SesReceiptRuleStopAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#organization_arn SesReceiptRule#organization_arn}
  */
  readonly organizationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#position SesReceiptRule#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#topic_arn SesReceiptRule#topic_arn}
  */
  readonly topicArn?: string;
}

export function sesReceiptRuleWorkmailActionToTerraform(struct?: SesReceiptRuleWorkmailAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html aws_ses_receipt_rule}
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
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html aws_ses_receipt_rule} Resource
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
    return this.getBooleanAttribute('enabled') as any;
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
    return this.getListAttribute('recipients');
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
    return this.getBooleanAttribute('scan_enabled') as any;
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
  private _addHeaderAction?: SesReceiptRuleAddHeaderAction[]; 
  public get addHeaderAction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('add_header_action') as any;
  }
  public set addHeaderAction(value: SesReceiptRuleAddHeaderAction[]) {
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
  private _bounceAction?: SesReceiptRuleBounceAction[]; 
  public get bounceAction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('bounce_action') as any;
  }
  public set bounceAction(value: SesReceiptRuleBounceAction[]) {
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
  private _lambdaAction?: SesReceiptRuleLambdaAction[]; 
  public get lambdaAction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('lambda_action') as any;
  }
  public set lambdaAction(value: SesReceiptRuleLambdaAction[]) {
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
  private _s3Action?: SesReceiptRuleS3Action[]; 
  public get s3Action() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('s3_action') as any;
  }
  public set s3Action(value: SesReceiptRuleS3Action[]) {
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
  private _snsAction?: SesReceiptRuleSnsAction[]; 
  public get snsAction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sns_action') as any;
  }
  public set snsAction(value: SesReceiptRuleSnsAction[]) {
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
  private _stopAction?: SesReceiptRuleStopAction[]; 
  public get stopAction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('stop_action') as any;
  }
  public set stopAction(value: SesReceiptRuleStopAction[]) {
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
  private _workmailAction?: SesReceiptRuleWorkmailAction[]; 
  public get workmailAction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('workmail_action') as any;
  }
  public set workmailAction(value: SesReceiptRuleWorkmailAction[]) {
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
