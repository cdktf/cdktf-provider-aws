/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ssmquicksetup_configuration_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmquicksetupConfigurationManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ssmquicksetup_configuration_manager#description SsmquicksetupConfigurationManager#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ssmquicksetup_configuration_manager#name SsmquicksetupConfigurationManager#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ssmquicksetup_configuration_manager#tags SsmquicksetupConfigurationManager#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * configuration_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ssmquicksetup_configuration_manager#configuration_definition SsmquicksetupConfigurationManager#configuration_definition}
  */
  readonly configurationDefinition?: SsmquicksetupConfigurationManagerConfigurationDefinition[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ssmquicksetup_configuration_manager#timeouts SsmquicksetupConfigurationManager#timeouts}
  */
  readonly timeouts?: SsmquicksetupConfigurationManagerTimeouts;
}
export interface SsmquicksetupConfigurationManagerStatusSummaries {
}

export function ssmquicksetupConfigurationManagerStatusSummariesToTerraform(struct?: SsmquicksetupConfigurationManagerStatusSummaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ssmquicksetupConfigurationManagerStatusSummariesToHclTerraform(struct?: SsmquicksetupConfigurationManagerStatusSummaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SsmquicksetupConfigurationManagerStatusSummariesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SsmquicksetupConfigurationManagerStatusSummaries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmquicksetupConfigurationManagerStatusSummaries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // status_type - computed: true, optional: false, required: false
  public get statusType() {
    return this.getStringAttribute('status_type');
  }
}

export class SsmquicksetupConfigurationManagerStatusSummariesList extends cdktf.ComplexList {

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
  public get(index: number): SsmquicksetupConfigurationManagerStatusSummariesOutputReference {
    return new SsmquicksetupConfigurationManagerStatusSummariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmquicksetupConfigurationManagerConfigurationDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ssmquicksetup_configuration_manager#local_deployment_administration_role_arn SsmquicksetupConfigurationManager#local_deployment_administration_role_arn}
  */
  readonly localDeploymentAdministrationRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ssmquicksetup_configuration_manager#local_deployment_execution_role_name SsmquicksetupConfigurationManager#local_deployment_execution_role_name}
  */
  readonly localDeploymentExecutionRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ssmquicksetup_configuration_manager#parameters SsmquicksetupConfigurationManager#parameters}
  */
  readonly parameters: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ssmquicksetup_configuration_manager#type SsmquicksetupConfigurationManager#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ssmquicksetup_configuration_manager#type_version SsmquicksetupConfigurationManager#type_version}
  */
  readonly typeVersion?: string;
}

export function ssmquicksetupConfigurationManagerConfigurationDefinitionToTerraform(struct?: SsmquicksetupConfigurationManagerConfigurationDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_deployment_administration_role_arn: cdktf.stringToTerraform(struct!.localDeploymentAdministrationRoleArn),
    local_deployment_execution_role_name: cdktf.stringToTerraform(struct!.localDeploymentExecutionRoleName),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    type: cdktf.stringToTerraform(struct!.type),
    type_version: cdktf.stringToTerraform(struct!.typeVersion),
  }
}


export function ssmquicksetupConfigurationManagerConfigurationDefinitionToHclTerraform(struct?: SsmquicksetupConfigurationManagerConfigurationDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_deployment_administration_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.localDeploymentAdministrationRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_deployment_execution_role_name: {
      value: cdktf.stringToHclTerraform(struct!.localDeploymentExecutionRoleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_version: {
      value: cdktf.stringToHclTerraform(struct!.typeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsmquicksetupConfigurationManagerConfigurationDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localDeploymentAdministrationRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDeploymentAdministrationRoleArn = this._localDeploymentAdministrationRoleArn;
    }
    if (this._localDeploymentExecutionRoleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDeploymentExecutionRoleName = this._localDeploymentExecutionRoleName;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeVersion = this._typeVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmquicksetupConfigurationManagerConfigurationDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localDeploymentAdministrationRoleArn = undefined;
      this._localDeploymentExecutionRoleName = undefined;
      this._parameters = undefined;
      this._type = undefined;
      this._typeVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localDeploymentAdministrationRoleArn = value.localDeploymentAdministrationRoleArn;
      this._localDeploymentExecutionRoleName = value.localDeploymentExecutionRoleName;
      this._parameters = value.parameters;
      this._type = value.type;
      this._typeVersion = value.typeVersion;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_deployment_administration_role_arn - computed: false, optional: true, required: false
  private _localDeploymentAdministrationRoleArn?: string; 
  public get localDeploymentAdministrationRoleArn() {
    return this.getStringAttribute('local_deployment_administration_role_arn');
  }
  public set localDeploymentAdministrationRoleArn(value: string) {
    this._localDeploymentAdministrationRoleArn = value;
  }
  public resetLocalDeploymentAdministrationRoleArn() {
    this._localDeploymentAdministrationRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDeploymentAdministrationRoleArnInput() {
    return this._localDeploymentAdministrationRoleArn;
  }

  // local_deployment_execution_role_name - computed: false, optional: true, required: false
  private _localDeploymentExecutionRoleName?: string; 
  public get localDeploymentExecutionRoleName() {
    return this.getStringAttribute('local_deployment_execution_role_name');
  }
  public set localDeploymentExecutionRoleName(value: string) {
    this._localDeploymentExecutionRoleName = value;
  }
  public resetLocalDeploymentExecutionRoleName() {
    this._localDeploymentExecutionRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDeploymentExecutionRoleNameInput() {
    return this._localDeploymentExecutionRoleName;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
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

  // type_version - computed: true, optional: true, required: false
  private _typeVersion?: string; 
  public get typeVersion() {
    return this.getStringAttribute('type_version');
  }
  public set typeVersion(value: string) {
    this._typeVersion = value;
  }
  public resetTypeVersion() {
    this._typeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeVersionInput() {
    return this._typeVersion;
  }
}

export class SsmquicksetupConfigurationManagerConfigurationDefinitionList extends cdktf.ComplexList {
  public internalValue? : SsmquicksetupConfigurationManagerConfigurationDefinition[] | cdktf.IResolvable

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
  public get(index: number): SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference {
    return new SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmquicksetupConfigurationManagerTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ssmquicksetup_configuration_manager#create SsmquicksetupConfigurationManager#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ssmquicksetup_configuration_manager#delete SsmquicksetupConfigurationManager#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ssmquicksetup_configuration_manager#update SsmquicksetupConfigurationManager#update}
  */
  readonly update?: string;
}

export function ssmquicksetupConfigurationManagerTimeoutsToTerraform(struct?: SsmquicksetupConfigurationManagerTimeouts | cdktf.IResolvable): any {
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


export function ssmquicksetupConfigurationManagerTimeoutsToHclTerraform(struct?: SsmquicksetupConfigurationManagerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmquicksetupConfigurationManagerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmquicksetupConfigurationManagerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SsmquicksetupConfigurationManagerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ssmquicksetup_configuration_manager aws_ssmquicksetup_configuration_manager}
*/
export class SsmquicksetupConfigurationManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssmquicksetup_configuration_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsmquicksetupConfigurationManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsmquicksetupConfigurationManager to import
  * @param importFromId The id of the existing SsmquicksetupConfigurationManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ssmquicksetup_configuration_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsmquicksetupConfigurationManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssmquicksetup_configuration_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ssmquicksetup_configuration_manager aws_ssmquicksetup_configuration_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmquicksetupConfigurationManagerConfig
  */
  public constructor(scope: Construct, id: string, config: SsmquicksetupConfigurationManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssmquicksetup_configuration_manager',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.94.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._tags = config.tags;
    this._configurationDefinition.internalValue = config.configurationDefinition;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // manager_arn - computed: true, optional: false, required: false
  public get managerArn() {
    return this.getStringAttribute('manager_arn');
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

  // status_summaries - computed: true, optional: false, required: false
  private _statusSummaries = new SsmquicksetupConfigurationManagerStatusSummariesList(this, "status_summaries", false);
  public get statusSummaries() {
    return this._statusSummaries;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // configuration_definition - computed: false, optional: true, required: false
  private _configurationDefinition = new SsmquicksetupConfigurationManagerConfigurationDefinitionList(this, "configuration_definition", false);
  public get configurationDefinition() {
    return this._configurationDefinition;
  }
  public putConfigurationDefinition(value: SsmquicksetupConfigurationManagerConfigurationDefinition[] | cdktf.IResolvable) {
    this._configurationDefinition.internalValue = value;
  }
  public resetConfigurationDefinition() {
    this._configurationDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationDefinitionInput() {
    return this._configurationDefinition.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SsmquicksetupConfigurationManagerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SsmquicksetupConfigurationManagerTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      configuration_definition: cdktf.listMapper(ssmquicksetupConfigurationManagerConfigurationDefinitionToTerraform, true)(this._configurationDefinition.internalValue),
      timeouts: ssmquicksetupConfigurationManagerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      configuration_definition: {
        value: cdktf.listMapperHcl(ssmquicksetupConfigurationManagerConfigurationDefinitionToHclTerraform, true)(this._configurationDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsmquicksetupConfigurationManagerConfigurationDefinitionList",
      },
      timeouts: {
        value: ssmquicksetupConfigurationManagerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SsmquicksetupConfigurationManagerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
