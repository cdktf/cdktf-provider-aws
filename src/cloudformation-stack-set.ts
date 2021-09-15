// https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudformationStackSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#administration_role_arn CloudformationStackSet#administration_role_arn}
  */
  readonly administrationRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#capabilities CloudformationStackSet#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#description CloudformationStackSet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#execution_role_name CloudformationStackSet#execution_role_name}
  */
  readonly executionRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#name CloudformationStackSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#parameters CloudformationStackSet#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#permission_model CloudformationStackSet#permission_model}
  */
  readonly permissionModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#tags CloudformationStackSet#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#tags_all CloudformationStackSet#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#template_body CloudformationStackSet#template_body}
  */
  readonly templateBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#template_url CloudformationStackSet#template_url}
  */
  readonly templateUrl?: string;
  /**
  * auto_deployment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#auto_deployment CloudformationStackSet#auto_deployment}
  */
  readonly autoDeployment?: CloudformationStackSetAutoDeployment[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#timeouts CloudformationStackSet#timeouts}
  */
  readonly timeouts?: CloudformationStackSetTimeouts;
}
export interface CloudformationStackSetAutoDeployment {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#enabled CloudformationStackSet#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#retain_stacks_on_account_removal CloudformationStackSet#retain_stacks_on_account_removal}
  */
  readonly retainStacksOnAccountRemoval?: boolean | cdktf.IResolvable;
}

function cloudformationStackSetAutoDeploymentToTerraform(struct?: CloudformationStackSetAutoDeployment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retain_stacks_on_account_removal: cdktf.booleanToTerraform(struct!.retainStacksOnAccountRemoval),
  }
}

export interface CloudformationStackSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#update CloudformationStackSet#update}
  */
  readonly update?: string;
}

function cloudformationStackSetTimeoutsToTerraform(struct?: CloudformationStackSetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html aws_cloudformation_stack_set}
*/
export class CloudformationStackSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudformation_stack_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html aws_cloudformation_stack_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudformationStackSetConfig
  */
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
    this._permissionModel = config.permissionModel;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._templateBody = config.templateBody;
    this._templateUrl = config.templateUrl;
    this._autoDeployment = config.autoDeployment;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administration_role_arn - computed: false, optional: true, required: false
  private _administrationRoleArn?: string;
  public get administrationRoleArn() {
    return this.getStringAttribute('administration_role_arn');
  }
  public set administrationRoleArn(value: string ) {
    this._administrationRoleArn = value;
  }
  public resetAdministrationRoleArn() {
    this._administrationRoleArn = undefined;
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

  // execution_role_name - computed: true, optional: true, required: false
  private _executionRoleName?: string;
  public get executionRoleName() {
    return this.getStringAttribute('execution_role_name');
  }
  public set executionRoleName(value: string) {
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
  private _parameters?: { [key: string]: string } | cdktf.IResolvable;
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // permission_model - computed: false, optional: true, required: false
  private _permissionModel?: string;
  public get permissionModel() {
    return this.getStringAttribute('permission_model');
  }
  public set permissionModel(value: string ) {
    this._permissionModel = value;
  }
  public resetPermissionModel() {
    this._permissionModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionModelInput() {
    return this._permissionModel
  }

  // stack_set_id - computed: true, optional: false, required: false
  public get stackSetId() {
    return this.getStringAttribute('stack_set_id');
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

  // auto_deployment - computed: false, optional: true, required: false
  private _autoDeployment?: CloudformationStackSetAutoDeployment[];
  public get autoDeployment() {
    return this.interpolationForAttribute('auto_deployment') as any;
  }
  public set autoDeployment(value: CloudformationStackSetAutoDeployment[] ) {
    this._autoDeployment = value;
  }
  public resetAutoDeployment() {
    this._autoDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeploymentInput() {
    return this._autoDeployment
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
      permission_model: cdktf.stringToTerraform(this._permissionModel),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      template_body: cdktf.stringToTerraform(this._templateBody),
      template_url: cdktf.stringToTerraform(this._templateUrl),
      auto_deployment: cdktf.listMapper(cloudformationStackSetAutoDeploymentToTerraform)(this._autoDeployment),
      timeouts: cloudformationStackSetTimeoutsToTerraform(this._timeouts),
    };
  }
}
