// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS IoT
*/
export interface IotIndexingConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * thing_group_indexing_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_group_indexing_configuration IotIndexingConfiguration#thing_group_indexing_configuration}
  */
  readonly thingGroupIndexingConfiguration?: IotIndexingConfigurationThingGroupIndexingConfiguration;
  /**
  * thing_indexing_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_indexing_configuration IotIndexingConfiguration#thing_indexing_configuration}
  */
  readonly thingIndexingConfiguration?: IotIndexingConfigurationThingIndexingConfiguration;
}
export interface IotIndexingConfigurationThingGroupIndexingConfigurationCustomField {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#name IotIndexingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#type IotIndexingConfiguration#type}
  */
  readonly type?: string;
}

export function iotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldToTerraform(struct?: IotIndexingConfigurationThingGroupIndexingConfigurationCustomField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IotIndexingConfigurationThingGroupIndexingConfigurationManagedField {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#name IotIndexingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#type IotIndexingConfiguration#type}
  */
  readonly type?: string;
}

export function iotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldToTerraform(struct?: IotIndexingConfigurationThingGroupIndexingConfigurationManagedField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IotIndexingConfigurationThingGroupIndexingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_group_indexing_mode IotIndexingConfiguration#thing_group_indexing_mode}
  */
  readonly thingGroupIndexingMode: string;
  /**
  * custom_field block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#custom_field IotIndexingConfiguration#custom_field}
  */
  readonly customField?: IotIndexingConfigurationThingGroupIndexingConfigurationCustomField[] | cdktf.IResolvable;
  /**
  * managed_field block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#managed_field IotIndexingConfiguration#managed_field}
  */
  readonly managedField?: IotIndexingConfigurationThingGroupIndexingConfigurationManagedField[] | cdktf.IResolvable;
}

export function iotIndexingConfigurationThingGroupIndexingConfigurationToTerraform(struct?: IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference | IotIndexingConfigurationThingGroupIndexingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    thing_group_indexing_mode: cdktf.stringToTerraform(struct!.thingGroupIndexingMode),
    custom_field: cdktf.listMapper(iotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldToTerraform)(struct!.customField),
    managed_field: cdktf.listMapper(iotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldToTerraform)(struct!.managedField),
  }
}

export class IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotIndexingConfigurationThingGroupIndexingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._thingGroupIndexingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.thingGroupIndexingMode = this._thingGroupIndexingMode;
    }
    if (this._customField !== undefined) {
      hasAnyValues = true;
      internalValueResult.customField = this._customField;
    }
    if (this._managedField !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedField = this._managedField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotIndexingConfigurationThingGroupIndexingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._thingGroupIndexingMode = undefined;
      this._customField = undefined;
      this._managedField = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._thingGroupIndexingMode = value.thingGroupIndexingMode;
      this._customField = value.customField;
      this._managedField = value.managedField;
    }
  }

  // thing_group_indexing_mode - computed: false, optional: false, required: true
  private _thingGroupIndexingMode?: string; 
  public get thingGroupIndexingMode() {
    return this.getStringAttribute('thing_group_indexing_mode');
  }
  public set thingGroupIndexingMode(value: string) {
    this._thingGroupIndexingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thingGroupIndexingModeInput() {
    return this._thingGroupIndexingMode;
  }

  // custom_field - computed: false, optional: true, required: false
  private _customField?: IotIndexingConfigurationThingGroupIndexingConfigurationCustomField[] | cdktf.IResolvable; 
  public get customField() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('custom_field')));
  }
  public set customField(value: IotIndexingConfigurationThingGroupIndexingConfigurationCustomField[] | cdktf.IResolvable) {
    this._customField = value;
  }
  public resetCustomField() {
    this._customField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldInput() {
    return this._customField;
  }

  // managed_field - computed: false, optional: true, required: false
  private _managedField?: IotIndexingConfigurationThingGroupIndexingConfigurationManagedField[] | cdktf.IResolvable; 
  public get managedField() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('managed_field')));
  }
  public set managedField(value: IotIndexingConfigurationThingGroupIndexingConfigurationManagedField[] | cdktf.IResolvable) {
    this._managedField = value;
  }
  public resetManagedField() {
    this._managedField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFieldInput() {
    return this._managedField;
  }
}
export interface IotIndexingConfigurationThingIndexingConfigurationCustomField {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#name IotIndexingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#type IotIndexingConfiguration#type}
  */
  readonly type?: string;
}

export function iotIndexingConfigurationThingIndexingConfigurationCustomFieldToTerraform(struct?: IotIndexingConfigurationThingIndexingConfigurationCustomField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IotIndexingConfigurationThingIndexingConfigurationManagedField {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#name IotIndexingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#type IotIndexingConfiguration#type}
  */
  readonly type?: string;
}

export function iotIndexingConfigurationThingIndexingConfigurationManagedFieldToTerraform(struct?: IotIndexingConfigurationThingIndexingConfigurationManagedField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IotIndexingConfigurationThingIndexingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#device_defender_indexing_mode IotIndexingConfiguration#device_defender_indexing_mode}
  */
  readonly deviceDefenderIndexingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#named_shadow_indexing_mode IotIndexingConfiguration#named_shadow_indexing_mode}
  */
  readonly namedShadowIndexingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_connectivity_indexing_mode IotIndexingConfiguration#thing_connectivity_indexing_mode}
  */
  readonly thingConnectivityIndexingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_indexing_mode IotIndexingConfiguration#thing_indexing_mode}
  */
  readonly thingIndexingMode: string;
  /**
  * custom_field block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#custom_field IotIndexingConfiguration#custom_field}
  */
  readonly customField?: IotIndexingConfigurationThingIndexingConfigurationCustomField[] | cdktf.IResolvable;
  /**
  * managed_field block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#managed_field IotIndexingConfiguration#managed_field}
  */
  readonly managedField?: IotIndexingConfigurationThingIndexingConfigurationManagedField[] | cdktf.IResolvable;
}

export function iotIndexingConfigurationThingIndexingConfigurationToTerraform(struct?: IotIndexingConfigurationThingIndexingConfigurationOutputReference | IotIndexingConfigurationThingIndexingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_defender_indexing_mode: cdktf.stringToTerraform(struct!.deviceDefenderIndexingMode),
    named_shadow_indexing_mode: cdktf.stringToTerraform(struct!.namedShadowIndexingMode),
    thing_connectivity_indexing_mode: cdktf.stringToTerraform(struct!.thingConnectivityIndexingMode),
    thing_indexing_mode: cdktf.stringToTerraform(struct!.thingIndexingMode),
    custom_field: cdktf.listMapper(iotIndexingConfigurationThingIndexingConfigurationCustomFieldToTerraform)(struct!.customField),
    managed_field: cdktf.listMapper(iotIndexingConfigurationThingIndexingConfigurationManagedFieldToTerraform)(struct!.managedField),
  }
}

export class IotIndexingConfigurationThingIndexingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotIndexingConfigurationThingIndexingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceDefenderIndexingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDefenderIndexingMode = this._deviceDefenderIndexingMode;
    }
    if (this._namedShadowIndexingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedShadowIndexingMode = this._namedShadowIndexingMode;
    }
    if (this._thingConnectivityIndexingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.thingConnectivityIndexingMode = this._thingConnectivityIndexingMode;
    }
    if (this._thingIndexingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.thingIndexingMode = this._thingIndexingMode;
    }
    if (this._customField !== undefined) {
      hasAnyValues = true;
      internalValueResult.customField = this._customField;
    }
    if (this._managedField !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedField = this._managedField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotIndexingConfigurationThingIndexingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deviceDefenderIndexingMode = undefined;
      this._namedShadowIndexingMode = undefined;
      this._thingConnectivityIndexingMode = undefined;
      this._thingIndexingMode = undefined;
      this._customField = undefined;
      this._managedField = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deviceDefenderIndexingMode = value.deviceDefenderIndexingMode;
      this._namedShadowIndexingMode = value.namedShadowIndexingMode;
      this._thingConnectivityIndexingMode = value.thingConnectivityIndexingMode;
      this._thingIndexingMode = value.thingIndexingMode;
      this._customField = value.customField;
      this._managedField = value.managedField;
    }
  }

  // device_defender_indexing_mode - computed: false, optional: true, required: false
  private _deviceDefenderIndexingMode?: string; 
  public get deviceDefenderIndexingMode() {
    return this.getStringAttribute('device_defender_indexing_mode');
  }
  public set deviceDefenderIndexingMode(value: string) {
    this._deviceDefenderIndexingMode = value;
  }
  public resetDeviceDefenderIndexingMode() {
    this._deviceDefenderIndexingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDefenderIndexingModeInput() {
    return this._deviceDefenderIndexingMode;
  }

  // named_shadow_indexing_mode - computed: false, optional: true, required: false
  private _namedShadowIndexingMode?: string; 
  public get namedShadowIndexingMode() {
    return this.getStringAttribute('named_shadow_indexing_mode');
  }
  public set namedShadowIndexingMode(value: string) {
    this._namedShadowIndexingMode = value;
  }
  public resetNamedShadowIndexingMode() {
    this._namedShadowIndexingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedShadowIndexingModeInput() {
    return this._namedShadowIndexingMode;
  }

  // thing_connectivity_indexing_mode - computed: false, optional: true, required: false
  private _thingConnectivityIndexingMode?: string; 
  public get thingConnectivityIndexingMode() {
    return this.getStringAttribute('thing_connectivity_indexing_mode');
  }
  public set thingConnectivityIndexingMode(value: string) {
    this._thingConnectivityIndexingMode = value;
  }
  public resetThingConnectivityIndexingMode() {
    this._thingConnectivityIndexingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thingConnectivityIndexingModeInput() {
    return this._thingConnectivityIndexingMode;
  }

  // thing_indexing_mode - computed: false, optional: false, required: true
  private _thingIndexingMode?: string; 
  public get thingIndexingMode() {
    return this.getStringAttribute('thing_indexing_mode');
  }
  public set thingIndexingMode(value: string) {
    this._thingIndexingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thingIndexingModeInput() {
    return this._thingIndexingMode;
  }

  // custom_field - computed: false, optional: true, required: false
  private _customField?: IotIndexingConfigurationThingIndexingConfigurationCustomField[] | cdktf.IResolvable; 
  public get customField() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('custom_field')));
  }
  public set customField(value: IotIndexingConfigurationThingIndexingConfigurationCustomField[] | cdktf.IResolvable) {
    this._customField = value;
  }
  public resetCustomField() {
    this._customField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldInput() {
    return this._customField;
  }

  // managed_field - computed: false, optional: true, required: false
  private _managedField?: IotIndexingConfigurationThingIndexingConfigurationManagedField[] | cdktf.IResolvable; 
  public get managedField() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('managed_field')));
  }
  public set managedField(value: IotIndexingConfigurationThingIndexingConfigurationManagedField[] | cdktf.IResolvable) {
    this._managedField = value;
  }
  public resetManagedField() {
    this._managedField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFieldInput() {
    return this._managedField;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration aws_iot_indexing_configuration}
*/
export class IotIndexingConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iot_indexing_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration aws_iot_indexing_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotIndexingConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IotIndexingConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_indexing_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.15.1',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._thingGroupIndexingConfiguration.internalValue = config.thingGroupIndexingConfiguration;
    this._thingIndexingConfiguration.internalValue = config.thingIndexingConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // thing_group_indexing_configuration - computed: false, optional: true, required: false
  private _thingGroupIndexingConfiguration = new IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference(this, "thing_group_indexing_configuration");
  public get thingGroupIndexingConfiguration() {
    return this._thingGroupIndexingConfiguration;
  }
  public putThingGroupIndexingConfiguration(value: IotIndexingConfigurationThingGroupIndexingConfiguration) {
    this._thingGroupIndexingConfiguration.internalValue = value;
  }
  public resetThingGroupIndexingConfiguration() {
    this._thingGroupIndexingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thingGroupIndexingConfigurationInput() {
    return this._thingGroupIndexingConfiguration.internalValue;
  }

  // thing_indexing_configuration - computed: false, optional: true, required: false
  private _thingIndexingConfiguration = new IotIndexingConfigurationThingIndexingConfigurationOutputReference(this, "thing_indexing_configuration");
  public get thingIndexingConfiguration() {
    return this._thingIndexingConfiguration;
  }
  public putThingIndexingConfiguration(value: IotIndexingConfigurationThingIndexingConfiguration) {
    this._thingIndexingConfiguration.internalValue = value;
  }
  public resetThingIndexingConfiguration() {
    this._thingIndexingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thingIndexingConfigurationInput() {
    return this._thingIndexingConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      thing_group_indexing_configuration: iotIndexingConfigurationThingGroupIndexingConfigurationToTerraform(this._thingGroupIndexingConfiguration.internalValue),
      thing_indexing_configuration: iotIndexingConfigurationThingIndexingConfigurationToTerraform(this._thingIndexingConfiguration.internalValue),
    };
  }
}
