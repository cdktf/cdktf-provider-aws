// https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SesReceiptRuleConfig extends cdktf.TerraformMetaArguments {
  readonly after?: string;
  readonly enabled?: boolean;
  readonly name: string;
  readonly recipients?: string[];
  readonly ruleSetName: string;
  readonly scanEnabled?: boolean;
  readonly tlsPolicy?: string;
  /** add_header_action block */
  readonly addHeaderAction?: SesReceiptRuleAddHeaderAction[];
  /** bounce_action block */
  readonly bounceAction?: SesReceiptRuleBounceAction[];
  /** lambda_action block */
  readonly lambdaAction?: SesReceiptRuleLambdaAction[];
  /** s3_action block */
  readonly s3Action?: SesReceiptRuleS3Action[];
  /** sns_action block */
  readonly snsAction?: SesReceiptRuleSnsAction[];
  /** stop_action block */
  readonly stopAction?: SesReceiptRuleStopAction[];
  /** workmail_action block */
  readonly workmailAction?: SesReceiptRuleWorkmailAction[];
}
export interface SesReceiptRuleAddHeaderAction {
  readonly headerName: string;
  readonly headerValue: string;
  readonly position: number;
}

function sesReceiptRuleAddHeaderActionToTerraform(struct?: SesReceiptRuleAddHeaderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    position: cdktf.numberToTerraform(struct!.position),
  }
}

export interface SesReceiptRuleBounceAction {
  readonly message: string;
  readonly position: number;
  readonly sender: string;
  readonly smtpReplyCode: string;
  readonly statusCode?: string;
  readonly topicArn?: string;
}

function sesReceiptRuleBounceActionToTerraform(struct?: SesReceiptRuleBounceAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  readonly functionArn: string;
  readonly invocationType?: string;
  readonly position: number;
  readonly topicArn?: string;
}

function sesReceiptRuleLambdaActionToTerraform(struct?: SesReceiptRuleLambdaAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
    invocation_type: cdktf.stringToTerraform(struct!.invocationType),
    position: cdktf.numberToTerraform(struct!.position),
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}

export interface SesReceiptRuleS3Action {
  readonly bucketName: string;
  readonly kmsKeyArn?: string;
  readonly objectKeyPrefix?: string;
  readonly position: number;
  readonly topicArn?: string;
}

function sesReceiptRuleS3ActionToTerraform(struct?: SesReceiptRuleS3Action): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    object_key_prefix: cdktf.stringToTerraform(struct!.objectKeyPrefix),
    position: cdktf.numberToTerraform(struct!.position),
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}

export interface SesReceiptRuleSnsAction {
  readonly position: number;
  readonly topicArn: string;
}

function sesReceiptRuleSnsActionToTerraform(struct?: SesReceiptRuleSnsAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    position: cdktf.numberToTerraform(struct!.position),
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}

export interface SesReceiptRuleStopAction {
  readonly position: number;
  readonly scope: string;
  readonly topicArn?: string;
}

function sesReceiptRuleStopActionToTerraform(struct?: SesReceiptRuleStopAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    position: cdktf.numberToTerraform(struct!.position),
    scope: cdktf.stringToTerraform(struct!.scope),
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}

export interface SesReceiptRuleWorkmailAction {
  readonly organizationArn: string;
  readonly position: number;
  readonly topicArn?: string;
}

function sesReceiptRuleWorkmailActionToTerraform(struct?: SesReceiptRuleWorkmailAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    organization_arn: cdktf.stringToTerraform(struct!.organizationArn),
    position: cdktf.numberToTerraform(struct!.position),
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}


// Resource

export class SesReceiptRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  public set after(value: string ) {
    this._after = value;
  }
  public resetAfter() {
    this._after = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // recipients - computed: false, optional: true, required: false
  private _recipients?: string[];
  public get recipients() {
    return this.getListAttribute('recipients');
  }
  public set recipients(value: string[] ) {
    this._recipients = value;
  }
  public resetRecipients() {
    this._recipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients
  }

  // rule_set_name - computed: false, optional: false, required: true
  private _ruleSetName: string;
  public get ruleSetName() {
    return this.getStringAttribute('rule_set_name');
  }
  public set ruleSetName(value: string) {
    this._ruleSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetNameInput() {
    return this._ruleSetName
  }

  // scan_enabled - computed: true, optional: true, required: false
  private _scanEnabled?: boolean;
  public get scanEnabled() {
    return this.getBooleanAttribute('scan_enabled');
  }
  public set scanEnabled(value: boolean) {
    this._scanEnabled = value;
  }
  public resetScanEnabled() {
    this._scanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanEnabledInput() {
    return this._scanEnabled
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
    return this._tlsPolicy
  }

  // add_header_action - computed: false, optional: true, required: false
  private _addHeaderAction?: SesReceiptRuleAddHeaderAction[];
  public get addHeaderAction() {
    return this.interpolationForAttribute('add_header_action') as any;
  }
  public set addHeaderAction(value: SesReceiptRuleAddHeaderAction[] ) {
    this._addHeaderAction = value;
  }
  public resetAddHeaderAction() {
    this._addHeaderAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHeaderActionInput() {
    return this._addHeaderAction
  }

  // bounce_action - computed: false, optional: true, required: false
  private _bounceAction?: SesReceiptRuleBounceAction[];
  public get bounceAction() {
    return this.interpolationForAttribute('bounce_action') as any;
  }
  public set bounceAction(value: SesReceiptRuleBounceAction[] ) {
    this._bounceAction = value;
  }
  public resetBounceAction() {
    this._bounceAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bounceActionInput() {
    return this._bounceAction
  }

  // lambda_action - computed: false, optional: true, required: false
  private _lambdaAction?: SesReceiptRuleLambdaAction[];
  public get lambdaAction() {
    return this.interpolationForAttribute('lambda_action') as any;
  }
  public set lambdaAction(value: SesReceiptRuleLambdaAction[] ) {
    this._lambdaAction = value;
  }
  public resetLambdaAction() {
    this._lambdaAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaActionInput() {
    return this._lambdaAction
  }

  // s3_action - computed: false, optional: true, required: false
  private _s3Action?: SesReceiptRuleS3Action[];
  public get s3Action() {
    return this.interpolationForAttribute('s3_action') as any;
  }
  public set s3Action(value: SesReceiptRuleS3Action[] ) {
    this._s3Action = value;
  }
  public resetS3Action() {
    this._s3Action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ActionInput() {
    return this._s3Action
  }

  // sns_action - computed: false, optional: true, required: false
  private _snsAction?: SesReceiptRuleSnsAction[];
  public get snsAction() {
    return this.interpolationForAttribute('sns_action') as any;
  }
  public set snsAction(value: SesReceiptRuleSnsAction[] ) {
    this._snsAction = value;
  }
  public resetSnsAction() {
    this._snsAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsActionInput() {
    return this._snsAction
  }

  // stop_action - computed: false, optional: true, required: false
  private _stopAction?: SesReceiptRuleStopAction[];
  public get stopAction() {
    return this.interpolationForAttribute('stop_action') as any;
  }
  public set stopAction(value: SesReceiptRuleStopAction[] ) {
    this._stopAction = value;
  }
  public resetStopAction() {
    this._stopAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopActionInput() {
    return this._stopAction
  }

  // workmail_action - computed: false, optional: true, required: false
  private _workmailAction?: SesReceiptRuleWorkmailAction[];
  public get workmailAction() {
    return this.interpolationForAttribute('workmail_action') as any;
  }
  public set workmailAction(value: SesReceiptRuleWorkmailAction[] ) {
    this._workmailAction = value;
  }
  public resetWorkmailAction() {
    this._workmailAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workmailActionInput() {
    return this._workmailAction
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
