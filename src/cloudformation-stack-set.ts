// https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudformationStackSetConfig extends cdktf.TerraformMetaArguments {
  readonly administrationRoleArn: string;
  readonly capabilities?: string[];
  readonly description?: string;
  readonly executionRoleName?: string;
  readonly name: string;
  readonly parameters?: { [key: string]: string };
  readonly tags?: { [key: string]: string };
  readonly templateBody?: string;
  readonly templateUrl?: string;
  /** timeouts block */
  readonly timeouts?: CloudformationStackSetTimeouts;
}
export interface CloudformationStackSetTimeouts {
  readonly update?: string;
}

function cloudformationStackSetTimeoutsToTerraform(struct?: CloudformationStackSetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class CloudformationStackSet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudformationStackSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudformation_stack_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._administrationRoleArn = config.administrationRoleArn;
    this._capabilities = config.capabilities;
    this._description = config.description;
    this._executionRoleName = config.executionRoleName;
    this._name = config.name;
    this._parameters = config.parameters;
    this._tags = config.tags;
    this._templateBody = config.templateBody;
    this._templateUrl = config.templateUrl;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administration_role_arn - computed: false, optional: false, required: true
  private _administrationRoleArn: string;
  public get administrationRoleArn() {
    return this.getStringAttribute('administration_role_arn');
  }
  public set administrationRoleArn(value: string) {
    this._administrationRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get administrationRoleArnInput() {
    return this._administrationRoleArn
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

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

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // execution_role_name - computed: false, optional: true, required: false
  private _executionRoleName?: string;
  public get executionRoleName() {
    return this.getStringAttribute('execution_role_name');
  }
  public set executionRoleName(value: string ) {
    this._executionRoleName = value;
  }
  public resetExecutionRoleName() {
    this._executionRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleNameInput() {
    return this._executionRoleName
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // stack_set_id - computed: true, optional: false, required: false
  public get stackSetId() {
    return this.getStringAttribute('stack_set_id');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudformationStackSetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CloudformationStackSetTimeouts ) {
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
      administration_role_arn: cdktf.stringToTerraform(this._administrationRoleArn),
      capabilities: cdktf.listMapper(cdktf.stringToTerraform)(this._capabilities),
      description: cdktf.stringToTerraform(this._description),
      execution_role_name: cdktf.stringToTerraform(this._executionRoleName),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      template_body: cdktf.stringToTerraform(this._templateBody),
      template_url: cdktf.stringToTerraform(this._templateUrl),
      timeouts: cloudformationStackSetTimeoutsToTerraform(this._timeouts),
    };
  }
}
