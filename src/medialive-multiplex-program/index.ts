/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/medialive_multiplex_program
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MedialiveMultiplexProgramConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/medialive_multiplex_program#multiplex_id MedialiveMultiplexProgram#multiplex_id}
  */
  readonly multiplexId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/medialive_multiplex_program#program_name MedialiveMultiplexProgram#program_name}
  */
  readonly programName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/medialive_multiplex_program#region MedialiveMultiplexProgram#region}
  */
  readonly region?: string;
  /**
  * multiplex_program_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/medialive_multiplex_program#multiplex_program_settings MedialiveMultiplexProgram#multiplex_program_settings}
  */
  readonly multiplexProgramSettings?: MedialiveMultiplexProgramMultiplexProgramSettings[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/medialive_multiplex_program#timeouts MedialiveMultiplexProgram#timeouts}
  */
  readonly timeouts?: MedialiveMultiplexProgramTimeouts;
}
export interface MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/medialive_multiplex_program#provider_name MedialiveMultiplexProgram#provider_name}
  */
  readonly providerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/medialive_multiplex_program#service_name MedialiveMultiplexProgram#service_name}
  */
  readonly serviceName: string;
}

export function medialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorToTerraform(struct?: MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider_name: cdktf.stringToTerraform(struct!.providerName),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function medialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorToHclTerraform(struct?: MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider_name: {
      value: cdktf.stringToHclTerraform(struct!.providerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._providerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerName = this._providerName;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._providerName = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._providerName = value.providerName;
      this._serviceName = value.serviceName;
    }
  }

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}

export class MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList extends cdktf.ComplexList {
  public internalValue? : MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor[] | cdktf.IResolvable

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
  public get(index: number): MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference {
    return new MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/medialive_multiplex_program#maximum_bitrate MedialiveMultiplexProgram#maximum_bitrate}
  */
  readonly maximumBitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/medialive_multiplex_program#minimum_bitrate MedialiveMultiplexProgram#minimum_bitrate}
  */
  readonly minimumBitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/medialive_multiplex_program#priority MedialiveMultiplexProgram#priority}
  */
  readonly priority?: number;
}

export function medialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsToTerraform(struct?: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_bitrate: cdktf.numberToTerraform(struct!.maximumBitrate),
    minimum_bitrate: cdktf.numberToTerraform(struct!.minimumBitrate),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function medialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsToHclTerraform(struct?: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.maximumBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.minimumBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBitrate = this._maximumBitrate;
    }
    if (this._minimumBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumBitrate = this._minimumBitrate;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumBitrate = undefined;
      this._minimumBitrate = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumBitrate = value.maximumBitrate;
      this._minimumBitrate = value.minimumBitrate;
      this._priority = value.priority;
    }
  }

  // maximum_bitrate - computed: true, optional: true, required: false
  private _maximumBitrate?: number; 
  public get maximumBitrate() {
    return this.getNumberAttribute('maximum_bitrate');
  }
  public set maximumBitrate(value: number) {
    this._maximumBitrate = value;
  }
  public resetMaximumBitrate() {
    this._maximumBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBitrateInput() {
    return this._maximumBitrate;
  }

  // minimum_bitrate - computed: true, optional: true, required: false
  private _minimumBitrate?: number; 
  public get minimumBitrate() {
    return this.getNumberAttribute('minimum_bitrate');
  }
  public set minimumBitrate(value: number) {
    this._minimumBitrate = value;
  }
  public resetMinimumBitrate() {
    this._minimumBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumBitrateInput() {
    return this._minimumBitrate;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList extends cdktf.ComplexList {
  public internalValue? : MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings[] | cdktf.IResolvable

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
  public get(index: number): MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference {
    return new MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/medialive_multiplex_program#constant_bitrate MedialiveMultiplexProgram#constant_bitrate}
  */
  readonly constantBitrate?: number;
  /**
  * statmux_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/medialive_multiplex_program#statmux_settings MedialiveMultiplexProgram#statmux_settings}
  */
  readonly statmuxSettings?: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings[] | cdktf.IResolvable;
}

export function medialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsToTerraform(struct?: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant_bitrate: cdktf.numberToTerraform(struct!.constantBitrate),
    statmux_settings: cdktf.listMapper(medialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsToTerraform, true)(struct!.statmuxSettings),
  }
}


export function medialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsToHclTerraform(struct?: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constant_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.constantBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    statmux_settings: {
      value: cdktf.listMapperHcl(medialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsToHclTerraform, true)(struct!.statmuxSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constantBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.constantBitrate = this._constantBitrate;
    }
    if (this._statmuxSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statmuxSettings = this._statmuxSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constantBitrate = undefined;
      this._statmuxSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constantBitrate = value.constantBitrate;
      this._statmuxSettings.internalValue = value.statmuxSettings;
    }
  }

  // constant_bitrate - computed: true, optional: true, required: false
  private _constantBitrate?: number; 
  public get constantBitrate() {
    return this.getNumberAttribute('constant_bitrate');
  }
  public set constantBitrate(value: number) {
    this._constantBitrate = value;
  }
  public resetConstantBitrate() {
    this._constantBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantBitrateInput() {
    return this._constantBitrate;
  }

  // statmux_settings - computed: false, optional: true, required: false
  private _statmuxSettings = new MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList(this, "statmux_settings", false);
  public get statmuxSettings() {
    return this._statmuxSettings;
  }
  public putStatmuxSettings(value: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings[] | cdktf.IResolvable) {
    this._statmuxSettings.internalValue = value;
  }
  public resetStatmuxSettings() {
    this._statmuxSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statmuxSettingsInput() {
    return this._statmuxSettings.internalValue;
  }
}

export class MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList extends cdktf.ComplexList {
  public internalValue? : MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings[] | cdktf.IResolvable

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
  public get(index: number): MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference {
    return new MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveMultiplexProgramMultiplexProgramSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/medialive_multiplex_program#preferred_channel_pipeline MedialiveMultiplexProgram#preferred_channel_pipeline}
  */
  readonly preferredChannelPipeline: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/medialive_multiplex_program#program_number MedialiveMultiplexProgram#program_number}
  */
  readonly programNumber: number;
  /**
  * service_descriptor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/medialive_multiplex_program#service_descriptor MedialiveMultiplexProgram#service_descriptor}
  */
  readonly serviceDescriptor?: MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor[] | cdktf.IResolvable;
  /**
  * video_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/medialive_multiplex_program#video_settings MedialiveMultiplexProgram#video_settings}
  */
  readonly videoSettings?: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings[] | cdktf.IResolvable;
}

export function medialiveMultiplexProgramMultiplexProgramSettingsToTerraform(struct?: MedialiveMultiplexProgramMultiplexProgramSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_channel_pipeline: cdktf.stringToTerraform(struct!.preferredChannelPipeline),
    program_number: cdktf.numberToTerraform(struct!.programNumber),
    service_descriptor: cdktf.listMapper(medialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorToTerraform, true)(struct!.serviceDescriptor),
    video_settings: cdktf.listMapper(medialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsToTerraform, true)(struct!.videoSettings),
  }
}


export function medialiveMultiplexProgramMultiplexProgramSettingsToHclTerraform(struct?: MedialiveMultiplexProgramMultiplexProgramSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_channel_pipeline: {
      value: cdktf.stringToHclTerraform(struct!.preferredChannelPipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    program_number: {
      value: cdktf.numberToHclTerraform(struct!.programNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_descriptor: {
      value: cdktf.listMapperHcl(medialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorToHclTerraform, true)(struct!.serviceDescriptor),
      isBlock: true,
      type: "list",
      storageClassType: "MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList",
    },
    video_settings: {
      value: cdktf.listMapperHcl(medialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsToHclTerraform, true)(struct!.videoSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveMultiplexProgramMultiplexProgramSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredChannelPipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredChannelPipeline = this._preferredChannelPipeline;
    }
    if (this._programNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.programNumber = this._programNumber;
    }
    if (this._serviceDescriptor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDescriptor = this._serviceDescriptor?.internalValue;
    }
    if (this._videoSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoSettings = this._videoSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveMultiplexProgramMultiplexProgramSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredChannelPipeline = undefined;
      this._programNumber = undefined;
      this._serviceDescriptor.internalValue = undefined;
      this._videoSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredChannelPipeline = value.preferredChannelPipeline;
      this._programNumber = value.programNumber;
      this._serviceDescriptor.internalValue = value.serviceDescriptor;
      this._videoSettings.internalValue = value.videoSettings;
    }
  }

  // preferred_channel_pipeline - computed: false, optional: false, required: true
  private _preferredChannelPipeline?: string; 
  public get preferredChannelPipeline() {
    return this.getStringAttribute('preferred_channel_pipeline');
  }
  public set preferredChannelPipeline(value: string) {
    this._preferredChannelPipeline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredChannelPipelineInput() {
    return this._preferredChannelPipeline;
  }

  // program_number - computed: false, optional: false, required: true
  private _programNumber?: number; 
  public get programNumber() {
    return this.getNumberAttribute('program_number');
  }
  public set programNumber(value: number) {
    this._programNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programNumberInput() {
    return this._programNumber;
  }

  // service_descriptor - computed: false, optional: true, required: false
  private _serviceDescriptor = new MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList(this, "service_descriptor", false);
  public get serviceDescriptor() {
    return this._serviceDescriptor;
  }
  public putServiceDescriptor(value: MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor[] | cdktf.IResolvable) {
    this._serviceDescriptor.internalValue = value;
  }
  public resetServiceDescriptor() {
    this._serviceDescriptor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDescriptorInput() {
    return this._serviceDescriptor.internalValue;
  }

  // video_settings - computed: false, optional: true, required: false
  private _videoSettings = new MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList(this, "video_settings", false);
  public get videoSettings() {
    return this._videoSettings;
  }
  public putVideoSettings(value: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings[] | cdktf.IResolvable) {
    this._videoSettings.internalValue = value;
  }
  public resetVideoSettings() {
    this._videoSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsInput() {
    return this._videoSettings.internalValue;
  }
}

export class MedialiveMultiplexProgramMultiplexProgramSettingsList extends cdktf.ComplexList {
  public internalValue? : MedialiveMultiplexProgramMultiplexProgramSettings[] | cdktf.IResolvable

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
  public get(index: number): MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference {
    return new MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveMultiplexProgramTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/medialive_multiplex_program#create MedialiveMultiplexProgram#create}
  */
  readonly create?: string;
}

export function medialiveMultiplexProgramTimeoutsToTerraform(struct?: MedialiveMultiplexProgramTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function medialiveMultiplexProgramTimeoutsToHclTerraform(struct?: MedialiveMultiplexProgramTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MedialiveMultiplexProgramTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MedialiveMultiplexProgramTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveMultiplexProgramTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/medialive_multiplex_program aws_medialive_multiplex_program}
*/
export class MedialiveMultiplexProgram extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_medialive_multiplex_program";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MedialiveMultiplexProgram resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MedialiveMultiplexProgram to import
  * @param importFromId The id of the existing MedialiveMultiplexProgram that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/medialive_multiplex_program#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MedialiveMultiplexProgram to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_medialive_multiplex_program", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/medialive_multiplex_program aws_medialive_multiplex_program} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MedialiveMultiplexProgramConfig
  */
  public constructor(scope: Construct, id: string, config: MedialiveMultiplexProgramConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_medialive_multiplex_program',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.7.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._multiplexId = config.multiplexId;
    this._programName = config.programName;
    this._region = config.region;
    this._multiplexProgramSettings.internalValue = config.multiplexProgramSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multiplex_id - computed: false, optional: false, required: true
  private _multiplexId?: string; 
  public get multiplexId() {
    return this.getStringAttribute('multiplex_id');
  }
  public set multiplexId(value: string) {
    this._multiplexId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplexIdInput() {
    return this._multiplexId;
  }

  // program_name - computed: false, optional: false, required: true
  private _programName?: string; 
  public get programName() {
    return this.getStringAttribute('program_name');
  }
  public set programName(value: string) {
    this._programName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programNameInput() {
    return this._programName;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // multiplex_program_settings - computed: false, optional: true, required: false
  private _multiplexProgramSettings = new MedialiveMultiplexProgramMultiplexProgramSettingsList(this, "multiplex_program_settings", false);
  public get multiplexProgramSettings() {
    return this._multiplexProgramSettings;
  }
  public putMultiplexProgramSettings(value: MedialiveMultiplexProgramMultiplexProgramSettings[] | cdktf.IResolvable) {
    this._multiplexProgramSettings.internalValue = value;
  }
  public resetMultiplexProgramSettings() {
    this._multiplexProgramSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplexProgramSettingsInput() {
    return this._multiplexProgramSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MedialiveMultiplexProgramTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MedialiveMultiplexProgramTimeouts) {
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
      multiplex_id: cdktf.stringToTerraform(this._multiplexId),
      program_name: cdktf.stringToTerraform(this._programName),
      region: cdktf.stringToTerraform(this._region),
      multiplex_program_settings: cdktf.listMapper(medialiveMultiplexProgramMultiplexProgramSettingsToTerraform, true)(this._multiplexProgramSettings.internalValue),
      timeouts: medialiveMultiplexProgramTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      multiplex_id: {
        value: cdktf.stringToHclTerraform(this._multiplexId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      program_name: {
        value: cdktf.stringToHclTerraform(this._programName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multiplex_program_settings: {
        value: cdktf.listMapperHcl(medialiveMultiplexProgramMultiplexProgramSettingsToHclTerraform, true)(this._multiplexProgramSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MedialiveMultiplexProgramMultiplexProgramSettingsList",
      },
      timeouts: {
        value: medialiveMultiplexProgramTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MedialiveMultiplexProgramTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
