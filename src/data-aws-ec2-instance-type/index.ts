/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/ec2_instance_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEc2InstanceTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/ec2_instance_type#id DataAwsEc2InstanceType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/ec2_instance_type#instance_type DataAwsEc2InstanceType#instance_type}
  */
  readonly instanceType: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/ec2_instance_type#timeouts DataAwsEc2InstanceType#timeouts}
  */
  readonly timeouts?: DataAwsEc2InstanceTypeTimeouts;
}
export interface DataAwsEc2InstanceTypeFpgas {
}

export function dataAwsEc2InstanceTypeFpgasToTerraform(struct?: DataAwsEc2InstanceTypeFpgas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsEc2InstanceTypeFpgasToHclTerraform(struct?: DataAwsEc2InstanceTypeFpgas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEc2InstanceTypeFpgasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEc2InstanceTypeFpgas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2InstanceTypeFpgas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // manufacturer - computed: true, optional: false, required: false
  public get manufacturer() {
    return this.getStringAttribute('manufacturer');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsEc2InstanceTypeFpgasList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsEc2InstanceTypeFpgasOutputReference {
    return new DataAwsEc2InstanceTypeFpgasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEc2InstanceTypeGpus {
}

export function dataAwsEc2InstanceTypeGpusToTerraform(struct?: DataAwsEc2InstanceTypeGpus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsEc2InstanceTypeGpusToHclTerraform(struct?: DataAwsEc2InstanceTypeGpus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEc2InstanceTypeGpusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEc2InstanceTypeGpus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2InstanceTypeGpus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // manufacturer - computed: true, optional: false, required: false
  public get manufacturer() {
    return this.getStringAttribute('manufacturer');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsEc2InstanceTypeGpusList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsEc2InstanceTypeGpusOutputReference {
    return new DataAwsEc2InstanceTypeGpusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEc2InstanceTypeInferenceAccelerators {
}

export function dataAwsEc2InstanceTypeInferenceAcceleratorsToTerraform(struct?: DataAwsEc2InstanceTypeInferenceAccelerators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsEc2InstanceTypeInferenceAcceleratorsToHclTerraform(struct?: DataAwsEc2InstanceTypeInferenceAccelerators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEc2InstanceTypeInferenceAccelerators | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2InstanceTypeInferenceAccelerators | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // manufacturer - computed: true, optional: false, required: false
  public get manufacturer() {
    return this.getStringAttribute('manufacturer');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsEc2InstanceTypeInferenceAcceleratorsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference {
    return new DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEc2InstanceTypeInstanceDisks {
}

export function dataAwsEc2InstanceTypeInstanceDisksToTerraform(struct?: DataAwsEc2InstanceTypeInstanceDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsEc2InstanceTypeInstanceDisksToHclTerraform(struct?: DataAwsEc2InstanceTypeInstanceDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEc2InstanceTypeInstanceDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEc2InstanceTypeInstanceDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2InstanceTypeInstanceDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsEc2InstanceTypeInstanceDisksList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsEc2InstanceTypeInstanceDisksOutputReference {
    return new DataAwsEc2InstanceTypeInstanceDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEc2InstanceTypeMediaAccelerators {
}

export function dataAwsEc2InstanceTypeMediaAcceleratorsToTerraform(struct?: DataAwsEc2InstanceTypeMediaAccelerators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsEc2InstanceTypeMediaAcceleratorsToHclTerraform(struct?: DataAwsEc2InstanceTypeMediaAccelerators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEc2InstanceTypeMediaAcceleratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEc2InstanceTypeMediaAccelerators | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2InstanceTypeMediaAccelerators | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // manufacturer - computed: true, optional: false, required: false
  public get manufacturer() {
    return this.getStringAttribute('manufacturer');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsEc2InstanceTypeMediaAcceleratorsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsEc2InstanceTypeMediaAcceleratorsOutputReference {
    return new DataAwsEc2InstanceTypeMediaAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEc2InstanceTypeNetworkCards {
}

export function dataAwsEc2InstanceTypeNetworkCardsToTerraform(struct?: DataAwsEc2InstanceTypeNetworkCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsEc2InstanceTypeNetworkCardsToHclTerraform(struct?: DataAwsEc2InstanceTypeNetworkCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEc2InstanceTypeNetworkCardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEc2InstanceTypeNetworkCards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2InstanceTypeNetworkCards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline_bandwidth - computed: true, optional: false, required: false
  public get baselineBandwidth() {
    return this.getNumberAttribute('baseline_bandwidth');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // maximum_interfaces - computed: true, optional: false, required: false
  public get maximumInterfaces() {
    return this.getNumberAttribute('maximum_interfaces');
  }

  // peak_bandwidth - computed: true, optional: false, required: false
  public get peakBandwidth() {
    return this.getNumberAttribute('peak_bandwidth');
  }

  // performance - computed: true, optional: false, required: false
  public get performance() {
    return this.getStringAttribute('performance');
  }
}

export class DataAwsEc2InstanceTypeNetworkCardsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsEc2InstanceTypeNetworkCardsOutputReference {
    return new DataAwsEc2InstanceTypeNetworkCardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEc2InstanceTypeNeuronDevices {
}

export function dataAwsEc2InstanceTypeNeuronDevicesToTerraform(struct?: DataAwsEc2InstanceTypeNeuronDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsEc2InstanceTypeNeuronDevicesToHclTerraform(struct?: DataAwsEc2InstanceTypeNeuronDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEc2InstanceTypeNeuronDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEc2InstanceTypeNeuronDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2InstanceTypeNeuronDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // core_count - computed: true, optional: false, required: false
  public get coreCount() {
    return this.getNumberAttribute('core_count');
  }

  // core_version - computed: true, optional: false, required: false
  public get coreVersion() {
    return this.getNumberAttribute('core_version');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsEc2InstanceTypeNeuronDevicesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsEc2InstanceTypeNeuronDevicesOutputReference {
    return new DataAwsEc2InstanceTypeNeuronDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEc2InstanceTypeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/ec2_instance_type#read DataAwsEc2InstanceType#read}
  */
  readonly read?: string;
}

export function dataAwsEc2InstanceTypeTimeoutsToTerraform(struct?: DataAwsEc2InstanceTypeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAwsEc2InstanceTypeTimeoutsToHclTerraform(struct?: DataAwsEc2InstanceTypeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsEc2InstanceTypeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsEc2InstanceTypeTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2InstanceTypeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/ec2_instance_type aws_ec2_instance_type}
*/
export class DataAwsEc2InstanceType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_instance_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsEc2InstanceType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsEc2InstanceType to import
  * @param importFromId The id of the existing DataAwsEc2InstanceType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/ec2_instance_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsEc2InstanceType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_instance_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/ec2_instance_type aws_ec2_instance_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEc2InstanceTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsEc2InstanceTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_instance_type',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.99.1',
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
    this._id = config.id;
    this._instanceType = config.instanceType;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_recovery_supported - computed: true, optional: false, required: false
  public get autoRecoverySupported() {
    return this.getBooleanAttribute('auto_recovery_supported');
  }

  // bandwidth_weightings - computed: true, optional: false, required: false
  public get bandwidthWeightings() {
    return cdktf.Fn.tolist(this.getListAttribute('bandwidth_weightings'));
  }

  // bare_metal - computed: true, optional: false, required: false
  public get bareMetal() {
    return this.getBooleanAttribute('bare_metal');
  }

  // boot_modes - computed: true, optional: false, required: false
  public get bootModes() {
    return cdktf.Fn.tolist(this.getListAttribute('boot_modes'));
  }

  // burstable_performance_supported - computed: true, optional: false, required: false
  public get burstablePerformanceSupported() {
    return this.getBooleanAttribute('burstable_performance_supported');
  }

  // current_generation - computed: true, optional: false, required: false
  public get currentGeneration() {
    return this.getBooleanAttribute('current_generation');
  }

  // dedicated_hosts_supported - computed: true, optional: false, required: false
  public get dedicatedHostsSupported() {
    return this.getBooleanAttribute('dedicated_hosts_supported');
  }

  // default_cores - computed: true, optional: false, required: false
  public get defaultCores() {
    return this.getNumberAttribute('default_cores');
  }

  // default_network_card_index - computed: true, optional: false, required: false
  public get defaultNetworkCardIndex() {
    return this.getNumberAttribute('default_network_card_index');
  }

  // default_threads_per_core - computed: true, optional: false, required: false
  public get defaultThreadsPerCore() {
    return this.getNumberAttribute('default_threads_per_core');
  }

  // default_vcpus - computed: true, optional: false, required: false
  public get defaultVcpus() {
    return this.getNumberAttribute('default_vcpus');
  }

  // ebs_encryption_support - computed: true, optional: false, required: false
  public get ebsEncryptionSupport() {
    return this.getStringAttribute('ebs_encryption_support');
  }

  // ebs_nvme_support - computed: true, optional: false, required: false
  public get ebsNvmeSupport() {
    return this.getStringAttribute('ebs_nvme_support');
  }

  // ebs_optimized_support - computed: true, optional: false, required: false
  public get ebsOptimizedSupport() {
    return this.getStringAttribute('ebs_optimized_support');
  }

  // ebs_performance_baseline_bandwidth - computed: true, optional: false, required: false
  public get ebsPerformanceBaselineBandwidth() {
    return this.getNumberAttribute('ebs_performance_baseline_bandwidth');
  }

  // ebs_performance_baseline_iops - computed: true, optional: false, required: false
  public get ebsPerformanceBaselineIops() {
    return this.getNumberAttribute('ebs_performance_baseline_iops');
  }

  // ebs_performance_baseline_throughput - computed: true, optional: false, required: false
  public get ebsPerformanceBaselineThroughput() {
    return this.getNumberAttribute('ebs_performance_baseline_throughput');
  }

  // ebs_performance_maximum_bandwidth - computed: true, optional: false, required: false
  public get ebsPerformanceMaximumBandwidth() {
    return this.getNumberAttribute('ebs_performance_maximum_bandwidth');
  }

  // ebs_performance_maximum_iops - computed: true, optional: false, required: false
  public get ebsPerformanceMaximumIops() {
    return this.getNumberAttribute('ebs_performance_maximum_iops');
  }

  // ebs_performance_maximum_throughput - computed: true, optional: false, required: false
  public get ebsPerformanceMaximumThroughput() {
    return this.getNumberAttribute('ebs_performance_maximum_throughput');
  }

  // efa_maximum_interfaces - computed: true, optional: false, required: false
  public get efaMaximumInterfaces() {
    return this.getNumberAttribute('efa_maximum_interfaces');
  }

  // efa_supported - computed: true, optional: false, required: false
  public get efaSupported() {
    return this.getBooleanAttribute('efa_supported');
  }

  // ena_srd_supported - computed: true, optional: false, required: false
  public get enaSrdSupported() {
    return this.getBooleanAttribute('ena_srd_supported');
  }

  // ena_support - computed: true, optional: false, required: false
  public get enaSupport() {
    return this.getStringAttribute('ena_support');
  }

  // encryption_in_transit_supported - computed: true, optional: false, required: false
  public get encryptionInTransitSupported() {
    return this.getBooleanAttribute('encryption_in_transit_supported');
  }

  // fpgas - computed: true, optional: false, required: false
  private _fpgas = new DataAwsEc2InstanceTypeFpgasList(this, "fpgas", true);
  public get fpgas() {
    return this._fpgas;
  }

  // free_tier_eligible - computed: true, optional: false, required: false
  public get freeTierEligible() {
    return this.getBooleanAttribute('free_tier_eligible');
  }

  // gpus - computed: true, optional: false, required: false
  private _gpus = new DataAwsEc2InstanceTypeGpusList(this, "gpus", true);
  public get gpus() {
    return this._gpus;
  }

  // hibernation_supported - computed: true, optional: false, required: false
  public get hibernationSupported() {
    return this.getBooleanAttribute('hibernation_supported');
  }

  // hypervisor - computed: true, optional: false, required: false
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
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

  // inference_accelerators - computed: true, optional: false, required: false
  private _inferenceAccelerators = new DataAwsEc2InstanceTypeInferenceAcceleratorsList(this, "inference_accelerators", true);
  public get inferenceAccelerators() {
    return this._inferenceAccelerators;
  }

  // instance_disks - computed: true, optional: false, required: false
  private _instanceDisks = new DataAwsEc2InstanceTypeInstanceDisksList(this, "instance_disks", true);
  public get instanceDisks() {
    return this._instanceDisks;
  }

  // instance_storage_supported - computed: true, optional: false, required: false
  public get instanceStorageSupported() {
    return this.getBooleanAttribute('instance_storage_supported');
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // ipv6_supported - computed: true, optional: false, required: false
  public get ipv6Supported() {
    return this.getBooleanAttribute('ipv6_supported');
  }

  // maximum_ipv4_addresses_per_interface - computed: true, optional: false, required: false
  public get maximumIpv4AddressesPerInterface() {
    return this.getNumberAttribute('maximum_ipv4_addresses_per_interface');
  }

  // maximum_ipv6_addresses_per_interface - computed: true, optional: false, required: false
  public get maximumIpv6AddressesPerInterface() {
    return this.getNumberAttribute('maximum_ipv6_addresses_per_interface');
  }

  // maximum_network_cards - computed: true, optional: false, required: false
  public get maximumNetworkCards() {
    return this.getNumberAttribute('maximum_network_cards');
  }

  // maximum_network_interfaces - computed: true, optional: false, required: false
  public get maximumNetworkInterfaces() {
    return this.getNumberAttribute('maximum_network_interfaces');
  }

  // media_accelerators - computed: true, optional: false, required: false
  private _mediaAccelerators = new DataAwsEc2InstanceTypeMediaAcceleratorsList(this, "media_accelerators", true);
  public get mediaAccelerators() {
    return this._mediaAccelerators;
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // network_cards - computed: true, optional: false, required: false
  private _networkCards = new DataAwsEc2InstanceTypeNetworkCardsList(this, "network_cards", true);
  public get networkCards() {
    return this._networkCards;
  }

  // network_performance - computed: true, optional: false, required: false
  public get networkPerformance() {
    return this.getStringAttribute('network_performance');
  }

  // neuron_devices - computed: true, optional: false, required: false
  private _neuronDevices = new DataAwsEc2InstanceTypeNeuronDevicesList(this, "neuron_devices", true);
  public get neuronDevices() {
    return this._neuronDevices;
  }

  // nitro_enclaves_support - computed: true, optional: false, required: false
  public get nitroEnclavesSupport() {
    return this.getStringAttribute('nitro_enclaves_support');
  }

  // nitro_tpm_support - computed: true, optional: false, required: false
  public get nitroTpmSupport() {
    return this.getStringAttribute('nitro_tpm_support');
  }

  // nitro_tpm_supported_versions - computed: true, optional: false, required: false
  public get nitroTpmSupportedVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('nitro_tpm_supported_versions'));
  }

  // phc_support - computed: true, optional: false, required: false
  public get phcSupport() {
    return this.getStringAttribute('phc_support');
  }

  // supported_architectures - computed: true, optional: false, required: false
  public get supportedArchitectures() {
    return this.getListAttribute('supported_architectures');
  }

  // supported_cpu_features - computed: true, optional: false, required: false
  public get supportedCpuFeatures() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_cpu_features'));
  }

  // supported_placement_strategies - computed: true, optional: false, required: false
  public get supportedPlacementStrategies() {
    return this.getListAttribute('supported_placement_strategies');
  }

  // supported_root_device_types - computed: true, optional: false, required: false
  public get supportedRootDeviceTypes() {
    return this.getListAttribute('supported_root_device_types');
  }

  // supported_usages_classes - computed: true, optional: false, required: false
  public get supportedUsagesClasses() {
    return this.getListAttribute('supported_usages_classes');
  }

  // supported_virtualization_types - computed: true, optional: false, required: false
  public get supportedVirtualizationTypes() {
    return this.getListAttribute('supported_virtualization_types');
  }

  // sustained_clock_speed - computed: true, optional: false, required: false
  public get sustainedClockSpeed() {
    return this.getNumberAttribute('sustained_clock_speed');
  }

  // total_fpga_memory - computed: true, optional: false, required: false
  public get totalFpgaMemory() {
    return this.getNumberAttribute('total_fpga_memory');
  }

  // total_gpu_memory - computed: true, optional: false, required: false
  public get totalGpuMemory() {
    return this.getNumberAttribute('total_gpu_memory');
  }

  // total_inference_memory - computed: true, optional: false, required: false
  public get totalInferenceMemory() {
    return this.getNumberAttribute('total_inference_memory');
  }

  // total_instance_storage - computed: true, optional: false, required: false
  public get totalInstanceStorage() {
    return this.getNumberAttribute('total_instance_storage');
  }

  // total_media_memory - computed: true, optional: false, required: false
  public get totalMediaMemory() {
    return this.getNumberAttribute('total_media_memory');
  }

  // total_neuron_device_memory - computed: true, optional: false, required: false
  public get totalNeuronDeviceMemory() {
    return this.getNumberAttribute('total_neuron_device_memory');
  }

  // valid_cores - computed: true, optional: false, required: false
  public get validCores() {
    return this.getNumberListAttribute('valid_cores');
  }

  // valid_threads_per_core - computed: true, optional: false, required: false
  public get validThreadsPerCore() {
    return this.getNumberListAttribute('valid_threads_per_core');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAwsEc2InstanceTypeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAwsEc2InstanceTypeTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      timeouts: dataAwsEc2InstanceTypeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataAwsEc2InstanceTypeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAwsEc2InstanceTypeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
