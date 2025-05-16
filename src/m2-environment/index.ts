// https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface M2EnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#apply_changes_during_maintenance_window M2Environment#apply_changes_during_maintenance_window}
  */
  readonly applyChangesDuringMaintenanceWindow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#description M2Environment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#engine_type M2Environment#engine_type}
  */
  readonly engineType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#engine_version M2Environment#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#force_update M2Environment#force_update}
  */
  readonly forceUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#instance_type M2Environment#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#kms_key_id M2Environment#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#name M2Environment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#preferred_maintenance_window M2Environment#preferred_maintenance_window}
  */
  readonly preferredMaintenanceWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#publicly_accessible M2Environment#publicly_accessible}
  */
  readonly publiclyAccessible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#security_group_ids M2Environment#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#subnet_ids M2Environment#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#tags M2Environment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * high_availability_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#high_availability_config M2Environment#high_availability_config}
  */
  readonly highAvailabilityConfig?: M2EnvironmentHighAvailabilityConfig[] | cdktf.IResolvable;
  /**
  * storage_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#storage_configuration M2Environment#storage_configuration}
  */
  readonly storageConfiguration?: M2EnvironmentStorageConfiguration[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#timeouts M2Environment#timeouts}
  */
  readonly timeouts?: M2EnvironmentTimeouts;
}
export interface M2EnvironmentHighAvailabilityConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#desired_capacity M2Environment#desired_capacity}
  */
  readonly desiredCapacity: number;
}

export function m2EnvironmentHighAvailabilityConfigToTerraform(struct?: M2EnvironmentHighAvailabilityConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_capacity: cdktf.numberToTerraform(struct!.desiredCapacity),
  }
}


export function m2EnvironmentHighAvailabilityConfigToHclTerraform(struct?: M2EnvironmentHighAvailabilityConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired_capacity: {
      value: cdktf.numberToHclTerraform(struct!.desiredCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class M2EnvironmentHighAvailabilityConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): M2EnvironmentHighAvailabilityConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredCapacity = this._desiredCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: M2EnvironmentHighAvailabilityConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._desiredCapacity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._desiredCapacity = value.desiredCapacity;
    }
  }

  // desired_capacity - computed: false, optional: false, required: true
  private _desiredCapacity?: number; 
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
  }
}

export class M2EnvironmentHighAvailabilityConfigList extends cdktf.ComplexList {
  public internalValue? : M2EnvironmentHighAvailabilityConfig[] | cdktf.IResolvable

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
  public get(index: number): M2EnvironmentHighAvailabilityConfigOutputReference {
    return new M2EnvironmentHighAvailabilityConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface M2EnvironmentStorageConfigurationEfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#file_system_id M2Environment#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#mount_point M2Environment#mount_point}
  */
  readonly mountPoint: string;
}

export function m2EnvironmentStorageConfigurationEfsToTerraform(struct?: M2EnvironmentStorageConfigurationEfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
  }
}


export function m2EnvironmentStorageConfigurationEfsToHclTerraform(struct?: M2EnvironmentStorageConfigurationEfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_id: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_point: {
      value: cdktf.stringToHclTerraform(struct!.mountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class M2EnvironmentStorageConfigurationEfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): M2EnvironmentStorageConfigurationEfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: M2EnvironmentStorageConfigurationEfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemId = undefined;
      this._mountPoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemId = value.fileSystemId;
      this._mountPoint = value.mountPoint;
    }
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // mount_point - computed: false, optional: false, required: true
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }
}

export class M2EnvironmentStorageConfigurationEfsList extends cdktf.ComplexList {
  public internalValue? : M2EnvironmentStorageConfigurationEfs[] | cdktf.IResolvable

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
  public get(index: number): M2EnvironmentStorageConfigurationEfsOutputReference {
    return new M2EnvironmentStorageConfigurationEfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface M2EnvironmentStorageConfigurationFsx {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#file_system_id M2Environment#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#mount_point M2Environment#mount_point}
  */
  readonly mountPoint: string;
}

export function m2EnvironmentStorageConfigurationFsxToTerraform(struct?: M2EnvironmentStorageConfigurationFsx | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
  }
}


export function m2EnvironmentStorageConfigurationFsxToHclTerraform(struct?: M2EnvironmentStorageConfigurationFsx | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_id: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_point: {
      value: cdktf.stringToHclTerraform(struct!.mountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class M2EnvironmentStorageConfigurationFsxOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): M2EnvironmentStorageConfigurationFsx | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: M2EnvironmentStorageConfigurationFsx | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemId = undefined;
      this._mountPoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemId = value.fileSystemId;
      this._mountPoint = value.mountPoint;
    }
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // mount_point - computed: false, optional: false, required: true
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }
}

export class M2EnvironmentStorageConfigurationFsxList extends cdktf.ComplexList {
  public internalValue? : M2EnvironmentStorageConfigurationFsx[] | cdktf.IResolvable

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
  public get(index: number): M2EnvironmentStorageConfigurationFsxOutputReference {
    return new M2EnvironmentStorageConfigurationFsxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface M2EnvironmentStorageConfiguration {
  /**
  * efs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#efs M2Environment#efs}
  */
  readonly efs?: M2EnvironmentStorageConfigurationEfs[] | cdktf.IResolvable;
  /**
  * fsx block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#fsx M2Environment#fsx}
  */
  readonly fsx?: M2EnvironmentStorageConfigurationFsx[] | cdktf.IResolvable;
}

export function m2EnvironmentStorageConfigurationToTerraform(struct?: M2EnvironmentStorageConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    efs: cdktf.listMapper(m2EnvironmentStorageConfigurationEfsToTerraform, true)(struct!.efs),
    fsx: cdktf.listMapper(m2EnvironmentStorageConfigurationFsxToTerraform, true)(struct!.fsx),
  }
}


export function m2EnvironmentStorageConfigurationToHclTerraform(struct?: M2EnvironmentStorageConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    efs: {
      value: cdktf.listMapperHcl(m2EnvironmentStorageConfigurationEfsToHclTerraform, true)(struct!.efs),
      isBlock: true,
      type: "list",
      storageClassType: "M2EnvironmentStorageConfigurationEfsList",
    },
    fsx: {
      value: cdktf.listMapperHcl(m2EnvironmentStorageConfigurationFsxToHclTerraform, true)(struct!.fsx),
      isBlock: true,
      type: "list",
      storageClassType: "M2EnvironmentStorageConfigurationFsxList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class M2EnvironmentStorageConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): M2EnvironmentStorageConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efs = this._efs?.internalValue;
    }
    if (this._fsx?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsx = this._fsx?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: M2EnvironmentStorageConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._efs.internalValue = undefined;
      this._fsx.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._efs.internalValue = value.efs;
      this._fsx.internalValue = value.fsx;
    }
  }

  // efs - computed: false, optional: true, required: false
  private _efs = new M2EnvironmentStorageConfigurationEfsList(this, "efs", false);
  public get efs() {
    return this._efs;
  }
  public putEfs(value: M2EnvironmentStorageConfigurationEfs[] | cdktf.IResolvable) {
    this._efs.internalValue = value;
  }
  public resetEfs() {
    this._efs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsInput() {
    return this._efs.internalValue;
  }

  // fsx - computed: false, optional: true, required: false
  private _fsx = new M2EnvironmentStorageConfigurationFsxList(this, "fsx", false);
  public get fsx() {
    return this._fsx;
  }
  public putFsx(value: M2EnvironmentStorageConfigurationFsx[] | cdktf.IResolvable) {
    this._fsx.internalValue = value;
  }
  public resetFsx() {
    this._fsx.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsxInput() {
    return this._fsx.internalValue;
  }
}

export class M2EnvironmentStorageConfigurationList extends cdktf.ComplexList {
  public internalValue? : M2EnvironmentStorageConfiguration[] | cdktf.IResolvable

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
  public get(index: number): M2EnvironmentStorageConfigurationOutputReference {
    return new M2EnvironmentStorageConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface M2EnvironmentTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#create M2Environment#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#delete M2Environment#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#update M2Environment#update}
  */
  readonly update?: string;
}

export function m2EnvironmentTimeoutsToTerraform(struct?: M2EnvironmentTimeouts | cdktf.IResolvable): any {
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


export function m2EnvironmentTimeoutsToHclTerraform(struct?: M2EnvironmentTimeouts | cdktf.IResolvable): any {
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

export class M2EnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): M2EnvironmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: M2EnvironmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment aws_m2_environment}
*/
export class M2Environment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_m2_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a M2Environment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the M2Environment to import
  * @param importFromId The id of the existing M2Environment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the M2Environment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_m2_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/m2_environment aws_m2_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options M2EnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: M2EnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_m2_environment',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.98.0',
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
    this._applyChangesDuringMaintenanceWindow = config.applyChangesDuringMaintenanceWindow;
    this._description = config.description;
    this._engineType = config.engineType;
    this._engineVersion = config.engineVersion;
    this._forceUpdate = config.forceUpdate;
    this._instanceType = config.instanceType;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
    this._publiclyAccessible = config.publiclyAccessible;
    this._securityGroupIds = config.securityGroupIds;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._highAvailabilityConfig.internalValue = config.highAvailabilityConfig;
    this._storageConfiguration.internalValue = config.storageConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_changes_during_maintenance_window - computed: false, optional: true, required: false
  private _applyChangesDuringMaintenanceWindow?: boolean | cdktf.IResolvable; 
  public get applyChangesDuringMaintenanceWindow() {
    return this.getBooleanAttribute('apply_changes_during_maintenance_window');
  }
  public set applyChangesDuringMaintenanceWindow(value: boolean | cdktf.IResolvable) {
    this._applyChangesDuringMaintenanceWindow = value;
  }
  public resetApplyChangesDuringMaintenanceWindow() {
    this._applyChangesDuringMaintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyChangesDuringMaintenanceWindowInput() {
    return this._applyChangesDuringMaintenanceWindow;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
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

  // engine_type - computed: false, optional: false, required: true
  private _engineType?: string; 
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }
  public set engineType(value: string) {
    this._engineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypeInput() {
    return this._engineType;
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }

  // force_update - computed: false, optional: true, required: false
  private _forceUpdate?: boolean | cdktf.IResolvable; 
  public get forceUpdate() {
    return this.getBooleanAttribute('force_update');
  }
  public set forceUpdate(value: boolean | cdktf.IResolvable) {
    this._forceUpdate = value;
  }
  public resetForceUpdate() {
    this._forceUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateInput() {
    return this._forceUpdate;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // load_balancer_arn - computed: true, optional: false, required: false
  public get loadBalancerArn() {
    return this.getStringAttribute('load_balancer_arn');
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

  // preferred_maintenance_window - computed: true, optional: true, required: false
  private _preferredMaintenanceWindow?: string; 
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }
  public set preferredMaintenanceWindow(value: string) {
    this._preferredMaintenanceWindow = value;
  }
  public resetPreferredMaintenanceWindow() {
    this._preferredMaintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredMaintenanceWindowInput() {
    return this._preferredMaintenanceWindow;
  }

  // publicly_accessible - computed: true, optional: true, required: false
  private _publiclyAccessible?: boolean | cdktf.IResolvable; 
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }
  public set publiclyAccessible(value: boolean | cdktf.IResolvable) {
    this._publiclyAccessible = value;
  }
  public resetPubliclyAccessible() {
    this._publiclyAccessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publiclyAccessibleInput() {
    return this._publiclyAccessible;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
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

  // high_availability_config - computed: false, optional: true, required: false
  private _highAvailabilityConfig = new M2EnvironmentHighAvailabilityConfigList(this, "high_availability_config", false);
  public get highAvailabilityConfig() {
    return this._highAvailabilityConfig;
  }
  public putHighAvailabilityConfig(value: M2EnvironmentHighAvailabilityConfig[] | cdktf.IResolvable) {
    this._highAvailabilityConfig.internalValue = value;
  }
  public resetHighAvailabilityConfig() {
    this._highAvailabilityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityConfigInput() {
    return this._highAvailabilityConfig.internalValue;
  }

  // storage_configuration - computed: false, optional: true, required: false
  private _storageConfiguration = new M2EnvironmentStorageConfigurationList(this, "storage_configuration", false);
  public get storageConfiguration() {
    return this._storageConfiguration;
  }
  public putStorageConfiguration(value: M2EnvironmentStorageConfiguration[] | cdktf.IResolvable) {
    this._storageConfiguration.internalValue = value;
  }
  public resetStorageConfiguration() {
    this._storageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigurationInput() {
    return this._storageConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new M2EnvironmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: M2EnvironmentTimeouts) {
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
      apply_changes_during_maintenance_window: cdktf.booleanToTerraform(this._applyChangesDuringMaintenanceWindow),
      description: cdktf.stringToTerraform(this._description),
      engine_type: cdktf.stringToTerraform(this._engineType),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      force_update: cdktf.booleanToTerraform(this._forceUpdate),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      name: cdktf.stringToTerraform(this._name),
      preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
      publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      high_availability_config: cdktf.listMapper(m2EnvironmentHighAvailabilityConfigToTerraform, true)(this._highAvailabilityConfig.internalValue),
      storage_configuration: cdktf.listMapper(m2EnvironmentStorageConfigurationToTerraform, true)(this._storageConfiguration.internalValue),
      timeouts: m2EnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_changes_during_maintenance_window: {
        value: cdktf.booleanToHclTerraform(this._applyChangesDuringMaintenanceWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_type: {
        value: cdktf.stringToHclTerraform(this._engineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_update: {
        value: cdktf.booleanToHclTerraform(this._forceUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
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
      preferred_maintenance_window: {
        value: cdktf.stringToHclTerraform(this._preferredMaintenanceWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publicly_accessible: {
        value: cdktf.booleanToHclTerraform(this._publiclyAccessible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      high_availability_config: {
        value: cdktf.listMapperHcl(m2EnvironmentHighAvailabilityConfigToHclTerraform, true)(this._highAvailabilityConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "M2EnvironmentHighAvailabilityConfigList",
      },
      storage_configuration: {
        value: cdktf.listMapperHcl(m2EnvironmentStorageConfigurationToHclTerraform, true)(this._storageConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "M2EnvironmentStorageConfigurationList",
      },
      timeouts: {
        value: m2EnvironmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "M2EnvironmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
