/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/datazone_environment_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatazoneEnvironmentProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/datazone_environment_profile#aws_account_id DatazoneEnvironmentProfile#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/datazone_environment_profile#aws_account_region DatazoneEnvironmentProfile#aws_account_region}
  */
  readonly awsAccountRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/datazone_environment_profile#description DatazoneEnvironmentProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/datazone_environment_profile#domain_identifier DatazoneEnvironmentProfile#domain_identifier}
  */
  readonly domainIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/datazone_environment_profile#environment_blueprint_identifier DatazoneEnvironmentProfile#environment_blueprint_identifier}
  */
  readonly environmentBlueprintIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/datazone_environment_profile#name DatazoneEnvironmentProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/datazone_environment_profile#project_identifier DatazoneEnvironmentProfile#project_identifier}
  */
  readonly projectIdentifier: string;
  /**
  * user_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/datazone_environment_profile#user_parameters DatazoneEnvironmentProfile#user_parameters}
  */
  readonly userParameters?: DatazoneEnvironmentProfileUserParameters[] | cdktf.IResolvable;
}
export interface DatazoneEnvironmentProfileUserParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/datazone_environment_profile#name DatazoneEnvironmentProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/datazone_environment_profile#value DatazoneEnvironmentProfile#value}
  */
  readonly value?: string;
}

export function datazoneEnvironmentProfileUserParametersToTerraform(struct?: DatazoneEnvironmentProfileUserParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function datazoneEnvironmentProfileUserParametersToHclTerraform(struct?: DatazoneEnvironmentProfileUserParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazoneEnvironmentProfileUserParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatazoneEnvironmentProfileUserParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazoneEnvironmentProfileUserParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DatazoneEnvironmentProfileUserParametersList extends cdktf.ComplexList {
  public internalValue? : DatazoneEnvironmentProfileUserParameters[] | cdktf.IResolvable

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
  public get(index: number): DatazoneEnvironmentProfileUserParametersOutputReference {
    return new DatazoneEnvironmentProfileUserParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/datazone_environment_profile aws_datazone_environment_profile}
*/
export class DatazoneEnvironmentProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_datazone_environment_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatazoneEnvironmentProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatazoneEnvironmentProfile to import
  * @param importFromId The id of the existing DatazoneEnvironmentProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/datazone_environment_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatazoneEnvironmentProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_datazone_environment_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/datazone_environment_profile aws_datazone_environment_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatazoneEnvironmentProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DatazoneEnvironmentProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datazone_environment_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.87.0',
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
    this._awsAccountId = config.awsAccountId;
    this._awsAccountRegion = config.awsAccountRegion;
    this._description = config.description;
    this._domainIdentifier = config.domainIdentifier;
    this._environmentBlueprintIdentifier = config.environmentBlueprintIdentifier;
    this._name = config.name;
    this._projectIdentifier = config.projectIdentifier;
    this._userParameters.internalValue = config.userParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // aws_account_region - computed: false, optional: false, required: true
  private _awsAccountRegion?: string; 
  public get awsAccountRegion() {
    return this.getStringAttribute('aws_account_region');
  }
  public set awsAccountRegion(value: string) {
    this._awsAccountRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountRegionInput() {
    return this._awsAccountRegion;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

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

  // domain_identifier - computed: false, optional: false, required: true
  private _domainIdentifier?: string; 
  public get domainIdentifier() {
    return this.getStringAttribute('domain_identifier');
  }
  public set domainIdentifier(value: string) {
    this._domainIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdentifierInput() {
    return this._domainIdentifier;
  }

  // environment_blueprint_identifier - computed: false, optional: false, required: true
  private _environmentBlueprintIdentifier?: string; 
  public get environmentBlueprintIdentifier() {
    return this.getStringAttribute('environment_blueprint_identifier');
  }
  public set environmentBlueprintIdentifier(value: string) {
    this._environmentBlueprintIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentBlueprintIdentifierInput() {
    return this._environmentBlueprintIdentifier;
  }

  // id - computed: true, optional: false, required: false
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

  // project_identifier - computed: false, optional: false, required: true
  private _projectIdentifier?: string; 
  public get projectIdentifier() {
    return this.getStringAttribute('project_identifier');
  }
  public set projectIdentifier(value: string) {
    this._projectIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdentifierInput() {
    return this._projectIdentifier;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user_parameters - computed: false, optional: true, required: false
  private _userParameters = new DatazoneEnvironmentProfileUserParametersList(this, "user_parameters", false);
  public get userParameters() {
    return this._userParameters;
  }
  public putUserParameters(value: DatazoneEnvironmentProfileUserParameters[] | cdktf.IResolvable) {
    this._userParameters.internalValue = value;
  }
  public resetUserParameters() {
    this._userParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userParametersInput() {
    return this._userParameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      aws_account_region: cdktf.stringToTerraform(this._awsAccountRegion),
      description: cdktf.stringToTerraform(this._description),
      domain_identifier: cdktf.stringToTerraform(this._domainIdentifier),
      environment_blueprint_identifier: cdktf.stringToTerraform(this._environmentBlueprintIdentifier),
      name: cdktf.stringToTerraform(this._name),
      project_identifier: cdktf.stringToTerraform(this._projectIdentifier),
      user_parameters: cdktf.listMapper(datazoneEnvironmentProfileUserParametersToTerraform, true)(this._userParameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktf.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_account_region: {
        value: cdktf.stringToHclTerraform(this._awsAccountRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_identifier: {
        value: cdktf.stringToHclTerraform(this._domainIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_blueprint_identifier: {
        value: cdktf.stringToHclTerraform(this._environmentBlueprintIdentifier),
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
      project_identifier: {
        value: cdktf.stringToHclTerraform(this._projectIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_parameters: {
        value: cdktf.listMapperHcl(datazoneEnvironmentProfileUserParametersToHclTerraform, true)(this._userParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatazoneEnvironmentProfileUserParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
