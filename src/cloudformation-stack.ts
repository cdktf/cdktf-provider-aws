// https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudformationStackConfig extends cdktf.TerraformMetaArguments {
  readonly capabilities?: string[];
  readonly disableRollback?: boolean;
  readonly iamRoleArn?: string;
  readonly name: string;
  readonly notificationArns?: string[];
  readonly onFailure?: string;
  readonly parameters?: { [key: string]: string };
  readonly policyBody?: string;
  readonly policyUrl?: string;
  readonly tags?: { [key: string]: string };
  readonly templateBody?: string;
  readonly templateUrl?: string;
  readonly timeoutInMinutes?: number;
  /** timeouts block */
  readonly timeouts?: CloudformationStackTimeouts;
}
export interface CloudformationStackTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function cloudformationStackTimeoutsToTerraform(struct?: CloudformationStackTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class CloudformationStack extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudformationStackConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudformation_stack',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._capabilities = config.capabilities;
    this._disableRollback = config.disableRollback;
    this._iamRoleArn = config.iamRoleArn;
    this._name = config.name;
    this._notificationArns = config.notificationArns;
    this._onFailure = config.onFailure;
    this._parameters = config.parameters;
    this._policyBody = config.policyBody;
    this._policyUrl = config.policyUrl;
    this._tags = config.tags;
    this._templateBody = config.templateBody;
    this._templateUrl = config.templateUrl;
    this._timeoutInMinutes = config.timeoutInMinutes;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: string[];
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }
  public set capabilities(value: string[] ) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities
  }

  // disable_rollback - computed: false, optional: true, required: false
  private _disableRollback?: boolean;
  public get disableRollback() {
    return this.getBooleanAttribute('disable_rollback');
  }
  public set disableRollback(value: boolean ) {
    this._disableRollback = value;
  }
  public resetDisableRollback() {
    this._disableRollback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRollbackInput() {
    return this._disableRollback
  }

  // iam_role_arn - computed: false, optional: true, required: false
  private _iamRoleArn?: string;
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string ) {
    this._iamRoleArn = value;
  }
  public resetIamRoleArn() {
    this._iamRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn
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

  // notification_arns - computed: false, optional: true, required: false
  private _notificationArns?: string[];
  public get notificationArns() {
    return this.getListAttribute('notification_arns');
  }
  public set notificationArns(value: string[] ) {
    this._notificationArns = value;
  }
  public resetNotificationArns() {
    this._notificationArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationArnsInput() {
    return this._notificationArns
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure?: string;
  public get onFailure() {
    return this.getStringAttribute('on_failure');
  }
  public set onFailure(value: string ) {
    this._onFailure = value;
  }
  public resetOnFailure() {
    this._onFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure
  }

  // outputs - computed: true, optional: false, required: false
  public outputs(key: string): string {
    return new cdktf.StringMap(this, 'outputs').lookup(key);
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }
  public get parameters(): { [key: string]: string } {
    return this.interpolationForAttribute('parameters') as any; // Getting the computed value is not yet implemented
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // policy_body - computed: true, optional: true, required: false
  private _policyBody?: string;
  public get policyBody() {
    return this.getStringAttribute('policy_body');
  }
  public set policyBody(value: string) {
    this._policyBody = value;
  }
  public resetPolicyBody() {
    this._policyBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyBodyInput() {
    return this._policyBody
  }

  // policy_url - computed: false, optional: true, required: false
  private _policyUrl?: string;
  public get policyUrl() {
    return this.getStringAttribute('policy_url');
  }
  public set policyUrl(value: string ) {
    this._policyUrl = value;
  }
  public resetPolicyUrl() {
    this._policyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyUrlInput() {
    return this._policyUrl
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // template_body - computed: true, optional: true, required: false
  private _templateBody?: string;
  public get templateBody() {
    return this.getStringAttribute('template_body');
  }
  public set templateBody(value: string) {
    this._templateBody = value;
  }
  public resetTemplateBody() {
    this._templateBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateBodyInput() {
    return this._templateBody
  }

  // template_url - computed: false, optional: true, required: false
  private _templateUrl?: string;
  public get templateUrl() {
    return this.getStringAttribute('template_url');
  }
  public set templateUrl(value: string ) {
    this._templateUrl = value;
  }
  public resetTemplateUrl() {
    this._templateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateUrlInput() {
    return this._templateUrl
  }

  // timeout_in_minutes - computed: false, optional: true, required: false
  private _timeoutInMinutes?: number;
  public get timeoutInMinutes() {
    return this.getNumberAttribute('timeout_in_minutes');
  }
  public set timeoutInMinutes(value: number ) {
    this._timeoutInMinutes = value;
  }
  public resetTimeoutInMinutes() {
    this._timeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInMinutesInput() {
    return this._timeoutInMinutes
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudformationStackTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CloudformationStackTimeouts ) {
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
      capabilities: cdktf.listMapper(cdktf.stringToTerraform)(this._capabilities),
      disable_rollback: cdktf.booleanToTerraform(this._disableRollback),
      iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
      name: cdktf.stringToTerraform(this._name),
      notification_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._notificationArns),
      on_failure: cdktf.stringToTerraform(this._onFailure),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      policy_body: cdktf.stringToTerraform(this._policyBody),
      policy_url: cdktf.stringToTerraform(this._policyUrl),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      template_body: cdktf.stringToTerraform(this._templateBody),
      template_url: cdktf.stringToTerraform(this._templateUrl),
      timeout_in_minutes: cdktf.numberToTerraform(this._timeoutInMinutes),
      timeouts: cloudformationStackTimeoutsToTerraform(this._timeouts),
    };
  }
}
