/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/guardduty_organization_configuration_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuarddutyOrganizationConfigurationFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/guardduty_organization_configuration_feature#auto_enable GuarddutyOrganizationConfigurationFeature#auto_enable}
  */
  readonly autoEnable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/guardduty_organization_configuration_feature#detector_id GuarddutyOrganizationConfigurationFeature#detector_id}
  */
  readonly detectorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/guardduty_organization_configuration_feature#id GuarddutyOrganizationConfigurationFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/guardduty_organization_configuration_feature#name GuarddutyOrganizationConfigurationFeature#name}
  */
  readonly name: string;
  /**
  * additional_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/guardduty_organization_configuration_feature#additional_configuration GuarddutyOrganizationConfigurationFeature#additional_configuration}
  */
  readonly additionalConfiguration?: GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration[] | cdktf.IResolvable;
}
export interface GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/guardduty_organization_configuration_feature#auto_enable GuarddutyOrganizationConfigurationFeature#auto_enable}
  */
  readonly autoEnable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/guardduty_organization_configuration_feature#name GuarddutyOrganizationConfigurationFeature#name}
  */
  readonly name: string;
}

export function guarddutyOrganizationConfigurationFeatureAdditionalConfigurationToTerraform(struct?: GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_enable: cdktf.stringToTerraform(struct!.autoEnable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function guarddutyOrganizationConfigurationFeatureAdditionalConfigurationToHclTerraform(struct?: GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_enable: {
      value: cdktf.stringToHclTerraform(struct!.autoEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoEnable = this._autoEnable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoEnable = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoEnable = value.autoEnable;
      this._name = value.name;
    }
  }

  // auto_enable - computed: false, optional: false, required: true
  private _autoEnable?: string; 
  public get autoEnable() {
    return this.getStringAttribute('auto_enable');
  }
  public set autoEnable(value: string) {
    this._autoEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableInput() {
    return this._autoEnable;
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
}

export class GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList extends cdktf.ComplexList {
  public internalValue? : GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration[] | cdktf.IResolvable

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
  public get(index: number): GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference {
    return new GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/guardduty_organization_configuration_feature aws_guardduty_organization_configuration_feature}
*/
export class GuarddutyOrganizationConfigurationFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_guardduty_organization_configuration_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GuarddutyOrganizationConfigurationFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GuarddutyOrganizationConfigurationFeature to import
  * @param importFromId The id of the existing GuarddutyOrganizationConfigurationFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/guardduty_organization_configuration_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GuarddutyOrganizationConfigurationFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_guardduty_organization_configuration_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/guardduty_organization_configuration_feature aws_guardduty_organization_configuration_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuarddutyOrganizationConfigurationFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: GuarddutyOrganizationConfigurationFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_organization_configuration_feature',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.89.0',
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
    this._autoEnable = config.autoEnable;
    this._detectorId = config.detectorId;
    this._id = config.id;
    this._name = config.name;
    this._additionalConfiguration.internalValue = config.additionalConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_enable - computed: false, optional: false, required: true
  private _autoEnable?: string; 
  public get autoEnable() {
    return this.getStringAttribute('auto_enable');
  }
  public set autoEnable(value: string) {
    this._autoEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableInput() {
    return this._autoEnable;
  }

  // detector_id - computed: false, optional: false, required: true
  private _detectorId?: string; 
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorIdInput() {
    return this._detectorId;
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

  // additional_configuration - computed: false, optional: true, required: false
  private _additionalConfiguration = new GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList(this, "additional_configuration", false);
  public get additionalConfiguration() {
    return this._additionalConfiguration;
  }
  public putAdditionalConfiguration(value: GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration[] | cdktf.IResolvable) {
    this._additionalConfiguration.internalValue = value;
  }
  public resetAdditionalConfiguration() {
    this._additionalConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalConfigurationInput() {
    return this._additionalConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_enable: cdktf.stringToTerraform(this._autoEnable),
      detector_id: cdktf.stringToTerraform(this._detectorId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      additional_configuration: cdktf.listMapper(guarddutyOrganizationConfigurationFeatureAdditionalConfigurationToTerraform, true)(this._additionalConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_enable: {
        value: cdktf.stringToHclTerraform(this._autoEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detector_id: {
        value: cdktf.stringToHclTerraform(this._detectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      additional_configuration: {
        value: cdktf.listMapperHcl(guarddutyOrganizationConfigurationFeatureAdditionalConfigurationToHclTerraform, true)(this._additionalConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
