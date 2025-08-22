/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/elasticache_replication_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsElasticacheReplicationGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/elasticache_replication_group#id DataAwsElasticacheReplicationGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/elasticache_replication_group#region DataAwsElasticacheReplicationGroup#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/elasticache_replication_group#replication_group_id DataAwsElasticacheReplicationGroup#replication_group_id}
  */
  readonly replicationGroupId: string;
}
export interface DataAwsElasticacheReplicationGroupLogDeliveryConfiguration {
}

export function dataAwsElasticacheReplicationGroupLogDeliveryConfigurationToTerraform(struct?: DataAwsElasticacheReplicationGroupLogDeliveryConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsElasticacheReplicationGroupLogDeliveryConfigurationToHclTerraform(struct?: DataAwsElasticacheReplicationGroupLogDeliveryConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsElasticacheReplicationGroupLogDeliveryConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsElasticacheReplicationGroupLogDeliveryConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // destination_type - computed: true, optional: false, required: false
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }

  // log_format - computed: true, optional: false, required: false
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }

  // log_type - computed: true, optional: false, required: false
  public get logType() {
    return this.getStringAttribute('log_type');
  }
}

export class DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference {
    return new DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/elasticache_replication_group aws_elasticache_replication_group}
*/
export class DataAwsElasticacheReplicationGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_elasticache_replication_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsElasticacheReplicationGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsElasticacheReplicationGroup to import
  * @param importFromId The id of the existing DataAwsElasticacheReplicationGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/elasticache_replication_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsElasticacheReplicationGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_elasticache_replication_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/elasticache_replication_group aws_elasticache_replication_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsElasticacheReplicationGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsElasticacheReplicationGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticache_replication_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.10.0',
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
    this._id = config.id;
    this._region = config.region;
    this._replicationGroupId = config.replicationGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auth_token_enabled - computed: true, optional: false, required: false
  public get authTokenEnabled() {
    return this.getBooleanAttribute('auth_token_enabled');
  }

  // automatic_failover_enabled - computed: true, optional: false, required: false
  public get automaticFailoverEnabled() {
    return this.getBooleanAttribute('automatic_failover_enabled');
  }

  // cluster_mode - computed: true, optional: false, required: false
  public get clusterMode() {
    return this.getStringAttribute('cluster_mode');
  }

  // configuration_endpoint_address - computed: true, optional: false, required: false
  public get configurationEndpointAddress() {
    return this.getStringAttribute('configuration_endpoint_address');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // log_delivery_configuration - computed: true, optional: false, required: false
  private _logDeliveryConfiguration = new DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList(this, "log_delivery_configuration", true);
  public get logDeliveryConfiguration() {
    return this._logDeliveryConfiguration;
  }

  // member_clusters - computed: true, optional: false, required: false
  public get memberClusters() {
    return cdktf.Fn.tolist(this.getListAttribute('member_clusters'));
  }

  // multi_az_enabled - computed: true, optional: false, required: false
  public get multiAzEnabled() {
    return this.getBooleanAttribute('multi_az_enabled');
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // num_cache_clusters - computed: true, optional: false, required: false
  public get numCacheClusters() {
    return this.getNumberAttribute('num_cache_clusters');
  }

  // num_node_groups - computed: true, optional: false, required: false
  public get numNodeGroups() {
    return this.getNumberAttribute('num_node_groups');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // primary_endpoint_address - computed: true, optional: false, required: false
  public get primaryEndpointAddress() {
    return this.getStringAttribute('primary_endpoint_address');
  }

  // reader_endpoint_address - computed: true, optional: false, required: false
  public get readerEndpointAddress() {
    return this.getStringAttribute('reader_endpoint_address');
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

  // replicas_per_node_group - computed: true, optional: false, required: false
  public get replicasPerNodeGroup() {
    return this.getNumberAttribute('replicas_per_node_group');
  }

  // replication_group_id - computed: false, optional: false, required: true
  private _replicationGroupId?: string; 
  public get replicationGroupId() {
    return this.getStringAttribute('replication_group_id');
  }
  public set replicationGroupId(value: string) {
    this._replicationGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationGroupIdInput() {
    return this._replicationGroupId;
  }

  // snapshot_retention_limit - computed: true, optional: false, required: false
  public get snapshotRetentionLimit() {
    return this.getNumberAttribute('snapshot_retention_limit');
  }

  // snapshot_window - computed: true, optional: false, required: false
  public get snapshotWindow() {
    return this.getStringAttribute('snapshot_window');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      replication_group_id: cdktf.stringToTerraform(this._replicationGroupId),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_group_id: {
        value: cdktf.stringToHclTerraform(this._replicationGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
