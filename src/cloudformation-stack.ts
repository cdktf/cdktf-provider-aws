// https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudformationStackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#capabilities CloudformationStack#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#disable_rollback CloudformationStack#disable_rollback}
  */
  readonly disableRollback?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#iam_role_arn CloudformationStack#iam_role_arn}
  */
  readonly iamRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#name CloudformationStack#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#notification_arns CloudformationStack#notification_arns}
  */
  readonly notificationArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#on_failure CloudformationStack#on_failure}
  */
  readonly onFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#parameters CloudformationStack#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#policy_body CloudformationStack#policy_body}
  */
  readonly policyBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#policy_url CloudformationStack#policy_url}
  */
  readonly policyUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#tags CloudformationStack#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#tags_all CloudformationStack#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#template_body CloudformationStack#template_body}
  */
  readonly templateBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#template_url CloudformationStack#template_url}
  */
  readonly templateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#timeout_in_minutes CloudformationStack#timeout_in_minutes}
  */
  readonly timeoutInMinutes?: number;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#timeouts CloudformationStack#timeouts}
  */
  readonly timeouts?: CloudformationStackTimeouts;
}
export interface CloudformationStackTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#create CloudformationStack#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#delete CloudformationStack#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#update CloudformationStack#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html aws_cloudformation_stack}
*/
export class CloudformationStack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudformation_stack";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html aws_cloudformation_stack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudformationStackConfig
  */
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
    this._tagsAll = config.tagsAll;
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
  private _disableRollback?: boolean | cdktf.IResolvable;
  public get disableRollback() {
    return this.getBooleanAttribute('disable_rollback');
  }
  public set disableRollback(value: boolean | cdktf.IResolvable ) {
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
  private _parameters?: { [key: string]: string } | cdktf.IResolvable
  public get parameters(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('parameters') as any; // Getting the computed value is not yet implemented
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      template_body: cdktf.stringToTerraform(this._templateBody),
      template_url: cdktf.stringToTerraform(this._templateUrl),
      timeout_in_minutes: cdktf.numberToTerraform(this._timeoutInMinutes),
      timeouts: cloudformationStackTimeoutsToTerraform(this._timeouts),
    };
  }
}
