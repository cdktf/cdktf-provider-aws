// https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticacheServerlessCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#daily_snapshot_time ElasticacheServerlessCache#daily_snapshot_time}
  */
  readonly dailySnapshotTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#description ElasticacheServerlessCache#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#engine ElasticacheServerlessCache#engine}
  */
  readonly engine: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#kms_key_id ElasticacheServerlessCache#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#major_engine_version ElasticacheServerlessCache#major_engine_version}
  */
  readonly majorEngineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#name ElasticacheServerlessCache#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#security_group_ids ElasticacheServerlessCache#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#snapshot_arns_to_restore ElasticacheServerlessCache#snapshot_arns_to_restore}
  */
  readonly snapshotArnsToRestore?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#snapshot_retention_limit ElasticacheServerlessCache#snapshot_retention_limit}
  */
  readonly snapshotRetentionLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#subnet_ids ElasticacheServerlessCache#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#tags ElasticacheServerlessCache#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#user_group_id ElasticacheServerlessCache#user_group_id}
  */
  readonly userGroupId?: string;
  /**
  * cache_usage_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#cache_usage_limits ElasticacheServerlessCache#cache_usage_limits}
  */
  readonly cacheUsageLimits?: ElasticacheServerlessCacheCacheUsageLimits[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#timeouts ElasticacheServerlessCache#timeouts}
  */
  readonly timeouts?: ElasticacheServerlessCacheTimeouts;
}
export interface ElasticacheServerlessCacheEndpoint {
}

export function elasticacheServerlessCacheEndpointToTerraform(struct?: ElasticacheServerlessCacheEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function elasticacheServerlessCacheEndpointToHclTerraform(struct?: ElasticacheServerlessCacheEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ElasticacheServerlessCacheEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticacheServerlessCacheEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticacheServerlessCacheEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class ElasticacheServerlessCacheEndpointList extends cdktf.ComplexList {

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
  public get(index: number): ElasticacheServerlessCacheEndpointOutputReference {
    return new ElasticacheServerlessCacheEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticacheServerlessCacheReaderEndpoint {
}

export function elasticacheServerlessCacheReaderEndpointToTerraform(struct?: ElasticacheServerlessCacheReaderEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function elasticacheServerlessCacheReaderEndpointToHclTerraform(struct?: ElasticacheServerlessCacheReaderEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ElasticacheServerlessCacheReaderEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticacheServerlessCacheReaderEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticacheServerlessCacheReaderEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class ElasticacheServerlessCacheReaderEndpointList extends cdktf.ComplexList {

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
  public get(index: number): ElasticacheServerlessCacheReaderEndpointOutputReference {
    return new ElasticacheServerlessCacheReaderEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticacheServerlessCacheCacheUsageLimitsDataStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}
  */
  readonly maximum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#unit ElasticacheServerlessCache#unit}
  */
  readonly unit: string;
}

export function elasticacheServerlessCacheCacheUsageLimitsDataStorageToTerraform(struct?: ElasticacheServerlessCacheCacheUsageLimitsDataStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum: cdktf.numberToTerraform(struct!.maximum),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function elasticacheServerlessCacheCacheUsageLimitsDataStorageToHclTerraform(struct?: ElasticacheServerlessCacheCacheUsageLimitsDataStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticacheServerlessCacheCacheUsageLimitsDataStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticacheServerlessCacheCacheUsageLimitsDataStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximum = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximum = value.maximum;
      this._unit = value.unit;
    }
  }

  // maximum - computed: false, optional: false, required: true
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class ElasticacheServerlessCacheCacheUsageLimitsDataStorageList extends cdktf.ComplexList {
  public internalValue? : ElasticacheServerlessCacheCacheUsageLimitsDataStorage[] | cdktf.IResolvable

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
  public get(index: number): ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference {
    return new ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}
  */
  readonly maximum: number;
}

export function elasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondToTerraform(struct?: ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum: cdktf.numberToTerraform(struct!.maximum),
  }
}


export function elasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondToHclTerraform(struct?: ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximum = value.maximum;
    }
  }

  // maximum - computed: false, optional: false, required: true
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }
}

export class ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList extends cdktf.ComplexList {
  public internalValue? : ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond[] | cdktf.IResolvable

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
  public get(index: number): ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference {
    return new ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticacheServerlessCacheCacheUsageLimits {
  /**
  * data_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#data_storage ElasticacheServerlessCache#data_storage}
  */
  readonly dataStorage?: ElasticacheServerlessCacheCacheUsageLimitsDataStorage[] | cdktf.IResolvable;
  /**
  * ecpu_per_second block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#ecpu_per_second ElasticacheServerlessCache#ecpu_per_second}
  */
  readonly ecpuPerSecond?: ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond[] | cdktf.IResolvable;
}

export function elasticacheServerlessCacheCacheUsageLimitsToTerraform(struct?: ElasticacheServerlessCacheCacheUsageLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_storage: cdktf.listMapper(elasticacheServerlessCacheCacheUsageLimitsDataStorageToTerraform, true)(struct!.dataStorage),
    ecpu_per_second: cdktf.listMapper(elasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondToTerraform, true)(struct!.ecpuPerSecond),
  }
}


export function elasticacheServerlessCacheCacheUsageLimitsToHclTerraform(struct?: ElasticacheServerlessCacheCacheUsageLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_storage: {
      value: cdktf.listMapperHcl(elasticacheServerlessCacheCacheUsageLimitsDataStorageToHclTerraform, true)(struct!.dataStorage),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticacheServerlessCacheCacheUsageLimitsDataStorageList",
    },
    ecpu_per_second: {
      value: cdktf.listMapperHcl(elasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondToHclTerraform, true)(struct!.ecpuPerSecond),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticacheServerlessCacheCacheUsageLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticacheServerlessCacheCacheUsageLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStorage = this._dataStorage?.internalValue;
    }
    if (this._ecpuPerSecond?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecpuPerSecond = this._ecpuPerSecond?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticacheServerlessCacheCacheUsageLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataStorage.internalValue = undefined;
      this._ecpuPerSecond.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataStorage.internalValue = value.dataStorage;
      this._ecpuPerSecond.internalValue = value.ecpuPerSecond;
    }
  }

  // data_storage - computed: false, optional: true, required: false
  private _dataStorage = new ElasticacheServerlessCacheCacheUsageLimitsDataStorageList(this, "data_storage", false);
  public get dataStorage() {
    return this._dataStorage;
  }
  public putDataStorage(value: ElasticacheServerlessCacheCacheUsageLimitsDataStorage[] | cdktf.IResolvable) {
    this._dataStorage.internalValue = value;
  }
  public resetDataStorage() {
    this._dataStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageInput() {
    return this._dataStorage.internalValue;
  }

  // ecpu_per_second - computed: false, optional: true, required: false
  private _ecpuPerSecond = new ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList(this, "ecpu_per_second", false);
  public get ecpuPerSecond() {
    return this._ecpuPerSecond;
  }
  public putEcpuPerSecond(value: ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond[] | cdktf.IResolvable) {
    this._ecpuPerSecond.internalValue = value;
  }
  public resetEcpuPerSecond() {
    this._ecpuPerSecond.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecpuPerSecondInput() {
    return this._ecpuPerSecond.internalValue;
  }
}

export class ElasticacheServerlessCacheCacheUsageLimitsList extends cdktf.ComplexList {
  public internalValue? : ElasticacheServerlessCacheCacheUsageLimits[] | cdktf.IResolvable

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
  public get(index: number): ElasticacheServerlessCacheCacheUsageLimitsOutputReference {
    return new ElasticacheServerlessCacheCacheUsageLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticacheServerlessCacheTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#create ElasticacheServerlessCache#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#delete ElasticacheServerlessCache#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#update ElasticacheServerlessCache#update}
  */
  readonly update?: string;
}

export function elasticacheServerlessCacheTimeoutsToTerraform(struct?: ElasticacheServerlessCacheTimeouts | cdktf.IResolvable): any {
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


export function elasticacheServerlessCacheTimeoutsToHclTerraform(struct?: ElasticacheServerlessCacheTimeouts | cdktf.IResolvable): any {
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

export class ElasticacheServerlessCacheTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticacheServerlessCacheTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ElasticacheServerlessCacheTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache aws_elasticache_serverless_cache}
*/
export class ElasticacheServerlessCache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_elasticache_serverless_cache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticacheServerlessCache resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticacheServerlessCache to import
  * @param importFromId The id of the existing ElasticacheServerlessCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticacheServerlessCache to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_elasticache_serverless_cache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/elasticache_serverless_cache aws_elasticache_serverless_cache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticacheServerlessCacheConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticacheServerlessCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticache_serverless_cache',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.37.0',
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
    this._dailySnapshotTime = config.dailySnapshotTime;
    this._description = config.description;
    this._engine = config.engine;
    this._kmsKeyId = config.kmsKeyId;
    this._majorEngineVersion = config.majorEngineVersion;
    this._name = config.name;
    this._securityGroupIds = config.securityGroupIds;
    this._snapshotArnsToRestore = config.snapshotArnsToRestore;
    this._snapshotRetentionLimit = config.snapshotRetentionLimit;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._userGroupId = config.userGroupId;
    this._cacheUsageLimits.internalValue = config.cacheUsageLimits;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // daily_snapshot_time - computed: true, optional: true, required: false
  private _dailySnapshotTime?: string; 
  public get dailySnapshotTime() {
    return this.getStringAttribute('daily_snapshot_time');
  }
  public set dailySnapshotTime(value: string) {
    this._dailySnapshotTime = value;
  }
  public resetDailySnapshotTime() {
    this._dailySnapshotTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailySnapshotTimeInput() {
    return this._dailySnapshotTime;
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

  // endpoint - computed: true, optional: false, required: false
  private _endpoint = new ElasticacheServerlessCacheEndpointList(this, "endpoint", false);
  public get endpoint() {
    return this._endpoint;
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // full_engine_version - computed: true, optional: false, required: false
  public get fullEngineVersion() {
    return this.getStringAttribute('full_engine_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // major_engine_version - computed: true, optional: true, required: false
  private _majorEngineVersion?: string; 
  public get majorEngineVersion() {
    return this.getStringAttribute('major_engine_version');
  }
  public set majorEngineVersion(value: string) {
    this._majorEngineVersion = value;
  }
  public resetMajorEngineVersion() {
    this._majorEngineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get majorEngineVersionInput() {
    return this._majorEngineVersion;
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

  // reader_endpoint - computed: true, optional: false, required: false
  private _readerEndpoint = new ElasticacheServerlessCacheReaderEndpointList(this, "reader_endpoint", false);
  public get readerEndpoint() {
    return this._readerEndpoint;
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

  // snapshot_arns_to_restore - computed: false, optional: true, required: false
  private _snapshotArnsToRestore?: string[]; 
  public get snapshotArnsToRestore() {
    return this.getListAttribute('snapshot_arns_to_restore');
  }
  public set snapshotArnsToRestore(value: string[]) {
    this._snapshotArnsToRestore = value;
  }
  public resetSnapshotArnsToRestore() {
    this._snapshotArnsToRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotArnsToRestoreInput() {
    return this._snapshotArnsToRestore;
  }

  // snapshot_retention_limit - computed: true, optional: true, required: false
  private _snapshotRetentionLimit?: number; 
  public get snapshotRetentionLimit() {
    return this.getNumberAttribute('snapshot_retention_limit');
  }
  public set snapshotRetentionLimit(value: number) {
    this._snapshotRetentionLimit = value;
  }
  public resetSnapshotRetentionLimit() {
    this._snapshotRetentionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotRetentionLimitInput() {
    return this._snapshotRetentionLimit;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // user_group_id - computed: false, optional: true, required: false
  private _userGroupId?: string; 
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }
  public set userGroupId(value: string) {
    this._userGroupId = value;
  }
  public resetUserGroupId() {
    this._userGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdInput() {
    return this._userGroupId;
  }

  // cache_usage_limits - computed: false, optional: true, required: false
  private _cacheUsageLimits = new ElasticacheServerlessCacheCacheUsageLimitsList(this, "cache_usage_limits", false);
  public get cacheUsageLimits() {
    return this._cacheUsageLimits;
  }
  public putCacheUsageLimits(value: ElasticacheServerlessCacheCacheUsageLimits[] | cdktf.IResolvable) {
    this._cacheUsageLimits.internalValue = value;
  }
  public resetCacheUsageLimits() {
    this._cacheUsageLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheUsageLimitsInput() {
    return this._cacheUsageLimits.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ElasticacheServerlessCacheTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ElasticacheServerlessCacheTimeouts) {
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
      daily_snapshot_time: cdktf.stringToTerraform(this._dailySnapshotTime),
      description: cdktf.stringToTerraform(this._description),
      engine: cdktf.stringToTerraform(this._engine),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      major_engine_version: cdktf.stringToTerraform(this._majorEngineVersion),
      name: cdktf.stringToTerraform(this._name),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      snapshot_arns_to_restore: cdktf.listMapper(cdktf.stringToTerraform, false)(this._snapshotArnsToRestore),
      snapshot_retention_limit: cdktf.numberToTerraform(this._snapshotRetentionLimit),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_group_id: cdktf.stringToTerraform(this._userGroupId),
      cache_usage_limits: cdktf.listMapper(elasticacheServerlessCacheCacheUsageLimitsToTerraform, true)(this._cacheUsageLimits.internalValue),
      timeouts: elasticacheServerlessCacheTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      daily_snapshot_time: {
        value: cdktf.stringToHclTerraform(this._dailySnapshotTime),
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
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
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
      major_engine_version: {
        value: cdktf.stringToHclTerraform(this._majorEngineVersion),
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
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      snapshot_arns_to_restore: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._snapshotArnsToRestore),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      snapshot_retention_limit: {
        value: cdktf.numberToHclTerraform(this._snapshotRetentionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      user_group_id: {
        value: cdktf.stringToHclTerraform(this._userGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_usage_limits: {
        value: cdktf.listMapperHcl(elasticacheServerlessCacheCacheUsageLimitsToHclTerraform, true)(this._cacheUsageLimits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticacheServerlessCacheCacheUsageLimitsList",
      },
      timeouts: {
        value: elasticacheServerlessCacheTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ElasticacheServerlessCacheTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
