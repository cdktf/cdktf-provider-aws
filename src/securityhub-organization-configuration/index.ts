/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/securityhub_organization_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityhubOrganizationConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/securityhub_organization_configuration#auto_enable SecurityhubOrganizationConfiguration#auto_enable}
  */
  readonly autoEnable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/securityhub_organization_configuration#auto_enable_standards SecurityhubOrganizationConfiguration#auto_enable_standards}
  */
  readonly autoEnableStandards?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/securityhub_organization_configuration#id SecurityhubOrganizationConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * organization_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/securityhub_organization_configuration#organization_configuration SecurityhubOrganizationConfiguration#organization_configuration}
  */
  readonly organizationConfiguration?: SecurityhubOrganizationConfigurationOrganizationConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/securityhub_organization_configuration#timeouts SecurityhubOrganizationConfiguration#timeouts}
  */
  readonly timeouts?: SecurityhubOrganizationConfigurationTimeouts;
}
export interface SecurityhubOrganizationConfigurationOrganizationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/securityhub_organization_configuration#configuration_type SecurityhubOrganizationConfiguration#configuration_type}
  */
  readonly configurationType: string;
}

export function securityhubOrganizationConfigurationOrganizationConfigurationToTerraform(struct?: SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference | SecurityhubOrganizationConfigurationOrganizationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_type: cdktf.stringToTerraform(struct!.configurationType),
  }
}


export function securityhubOrganizationConfigurationOrganizationConfigurationToHclTerraform(struct?: SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference | SecurityhubOrganizationConfigurationOrganizationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration_type: {
      value: cdktf.stringToHclTerraform(struct!.configurationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityhubOrganizationConfigurationOrganizationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationType = this._configurationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubOrganizationConfigurationOrganizationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configurationType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configurationType = value.configurationType;
    }
  }

  // configuration_type - computed: false, optional: false, required: true
  private _configurationType?: string; 
  public get configurationType() {
    return this.getStringAttribute('configuration_type');
  }
  public set configurationType(value: string) {
    this._configurationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationTypeInput() {
    return this._configurationType;
  }
}
export interface SecurityhubOrganizationConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/securityhub_organization_configuration#create SecurityhubOrganizationConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/securityhub_organization_configuration#delete SecurityhubOrganizationConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/securityhub_organization_configuration#update SecurityhubOrganizationConfiguration#update}
  */
  readonly update?: string;
}

export function securityhubOrganizationConfigurationTimeoutsToTerraform(struct?: SecurityhubOrganizationConfigurationTimeouts | cdktf.IResolvable): any {
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


export function securityhubOrganizationConfigurationTimeoutsToHclTerraform(struct?: SecurityhubOrganizationConfigurationTimeouts | cdktf.IResolvable): any {
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

export class SecurityhubOrganizationConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubOrganizationConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubOrganizationConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/securityhub_organization_configuration aws_securityhub_organization_configuration}
*/
export class SecurityhubOrganizationConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securityhub_organization_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityhubOrganizationConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityhubOrganizationConfiguration to import
  * @param importFromId The id of the existing SecurityhubOrganizationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/securityhub_organization_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityhubOrganizationConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_securityhub_organization_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/securityhub_organization_configuration aws_securityhub_organization_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubOrganizationConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityhubOrganizationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_organization_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.64.0',
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
    this._autoEnableStandards = config.autoEnableStandards;
    this._id = config.id;
    this._organizationConfiguration.internalValue = config.organizationConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_enable - computed: false, optional: false, required: true
  private _autoEnable?: boolean | cdktf.IResolvable; 
  public get autoEnable() {
    return this.getBooleanAttribute('auto_enable');
  }
  public set autoEnable(value: boolean | cdktf.IResolvable) {
    this._autoEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableInput() {
    return this._autoEnable;
  }

  // auto_enable_standards - computed: true, optional: true, required: false
  private _autoEnableStandards?: string; 
  public get autoEnableStandards() {
    return this.getStringAttribute('auto_enable_standards');
  }
  public set autoEnableStandards(value: string) {
    this._autoEnableStandards = value;
  }
  public resetAutoEnableStandards() {
    this._autoEnableStandards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableStandardsInput() {
    return this._autoEnableStandards;
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

  // organization_configuration - computed: false, optional: true, required: false
  private _organizationConfiguration = new SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference(this, "organization_configuration");
  public get organizationConfiguration() {
    return this._organizationConfiguration;
  }
  public putOrganizationConfiguration(value: SecurityhubOrganizationConfigurationOrganizationConfiguration) {
    this._organizationConfiguration.internalValue = value;
  }
  public resetOrganizationConfiguration() {
    this._organizationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationConfigurationInput() {
    return this._organizationConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecurityhubOrganizationConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecurityhubOrganizationConfigurationTimeouts) {
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
      auto_enable: cdktf.booleanToTerraform(this._autoEnable),
      auto_enable_standards: cdktf.stringToTerraform(this._autoEnableStandards),
      id: cdktf.stringToTerraform(this._id),
      organization_configuration: securityhubOrganizationConfigurationOrganizationConfigurationToTerraform(this._organizationConfiguration.internalValue),
      timeouts: securityhubOrganizationConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_enable: {
        value: cdktf.booleanToHclTerraform(this._autoEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_enable_standards: {
        value: cdktf.stringToHclTerraform(this._autoEnableStandards),
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
      organization_configuration: {
        value: securityhubOrganizationConfigurationOrganizationConfigurationToHclTerraform(this._organizationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityhubOrganizationConfigurationOrganizationConfigurationList",
      },
      timeouts: {
        value: securityhubOrganizationConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityhubOrganizationConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
