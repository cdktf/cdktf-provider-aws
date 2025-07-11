/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/elasticache_serverless_cache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsElasticacheServerlessCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/elasticache_serverless_cache#name DataAwsElasticacheServerlessCache#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/elasticache_serverless_cache#region DataAwsElasticacheServerlessCache#region}
  */
  readonly region?: string;
}
export interface DataAwsElasticacheServerlessCacheCacheUsageLimitsDataStorage {
}

export function dataAwsElasticacheServerlessCacheCacheUsageLimitsDataStorageToTerraform(struct?: DataAwsElasticacheServerlessCacheCacheUsageLimitsDataStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsElasticacheServerlessCacheCacheUsageLimitsDataStorageToHclTerraform(struct?: DataAwsElasticacheServerlessCacheCacheUsageLimitsDataStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsElasticacheServerlessCacheCacheUsageLimitsDataStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsElasticacheServerlessCacheCacheUsageLimitsDataStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}
export interface DataAwsElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond {
}

export function dataAwsElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondToTerraform(struct?: DataAwsElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondToHclTerraform(struct?: DataAwsElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
}
export interface DataAwsElasticacheServerlessCacheCacheUsageLimits {
}

export function dataAwsElasticacheServerlessCacheCacheUsageLimitsToTerraform(struct?: DataAwsElasticacheServerlessCacheCacheUsageLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsElasticacheServerlessCacheCacheUsageLimitsToHclTerraform(struct?: DataAwsElasticacheServerlessCacheCacheUsageLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsElasticacheServerlessCacheCacheUsageLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsElasticacheServerlessCacheCacheUsageLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsElasticacheServerlessCacheCacheUsageLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_storage - computed: true, optional: false, required: false
  private _dataStorage = new DataAwsElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference(this, "data_storage");
  public get dataStorage() {
    return this._dataStorage;
  }

  // ecpu_per_second - computed: true, optional: false, required: false
  private _ecpuPerSecond = new DataAwsElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference(this, "ecpu_per_second");
  public get ecpuPerSecond() {
    return this._ecpuPerSecond;
  }
}
export interface DataAwsElasticacheServerlessCacheEndpoint {
}

export function dataAwsElasticacheServerlessCacheEndpointToTerraform(struct?: DataAwsElasticacheServerlessCacheEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsElasticacheServerlessCacheEndpointToHclTerraform(struct?: DataAwsElasticacheServerlessCacheEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsElasticacheServerlessCacheEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsElasticacheServerlessCacheEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsElasticacheServerlessCacheEndpoint | undefined) {
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
export interface DataAwsElasticacheServerlessCacheReaderEndpoint {
}

export function dataAwsElasticacheServerlessCacheReaderEndpointToTerraform(struct?: DataAwsElasticacheServerlessCacheReaderEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsElasticacheServerlessCacheReaderEndpointToHclTerraform(struct?: DataAwsElasticacheServerlessCacheReaderEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsElasticacheServerlessCacheReaderEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsElasticacheServerlessCacheReaderEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsElasticacheServerlessCacheReaderEndpoint | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/elasticache_serverless_cache aws_elasticache_serverless_cache}
*/
export class DataAwsElasticacheServerlessCache extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_elasticache_serverless_cache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsElasticacheServerlessCache resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsElasticacheServerlessCache to import
  * @param importFromId The id of the existing DataAwsElasticacheServerlessCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/elasticache_serverless_cache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsElasticacheServerlessCache to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_elasticache_serverless_cache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/elasticache_serverless_cache aws_elasticache_serverless_cache} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsElasticacheServerlessCacheConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsElasticacheServerlessCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticache_serverless_cache',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.3.0',
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
    this._name = config.name;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cache_usage_limits - computed: true, optional: false, required: false
  private _cacheUsageLimits = new DataAwsElasticacheServerlessCacheCacheUsageLimitsOutputReference(this, "cache_usage_limits");
  public get cacheUsageLimits() {
    return this._cacheUsageLimits;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // daily_snapshot_time - computed: true, optional: false, required: false
  public get dailySnapshotTime() {
    return this.getStringAttribute('daily_snapshot_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // endpoint - computed: true, optional: false, required: false
  private _endpoint = new DataAwsElasticacheServerlessCacheEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // full_engine_version - computed: true, optional: false, required: false
  public get fullEngineVersion() {
    return this.getStringAttribute('full_engine_version');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // major_engine_version - computed: true, optional: false, required: false
  public get majorEngineVersion() {
    return this.getStringAttribute('major_engine_version');
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
  private _readerEndpoint = new DataAwsElasticacheServerlessCacheReaderEndpointOutputReference(this, "reader_endpoint");
  public get readerEndpoint() {
    return this._readerEndpoint;
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

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // snapshot_retention_limit - computed: true, optional: false, required: false
  public get snapshotRetentionLimit() {
    return this.getNumberAttribute('snapshot_retention_limit');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // user_group_id - computed: true, optional: false, required: false
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
