// https://www.terraform.io/docs/providers/aws/r/memorydb_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MemorydbClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#acl_name MemorydbCluster#acl_name}
  */
  readonly aclName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#auto_minor_version_upgrade MemorydbCluster#auto_minor_version_upgrade}
  */
  readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#data_tiering MemorydbCluster#data_tiering}
  */
  readonly dataTiering?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#description MemorydbCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#engine_version MemorydbCluster#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#final_snapshot_name MemorydbCluster#final_snapshot_name}
  */
  readonly finalSnapshotName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#id MemorydbCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#kms_key_arn MemorydbCluster#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#maintenance_window MemorydbCluster#maintenance_window}
  */
  readonly maintenanceWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#name MemorydbCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#name_prefix MemorydbCluster#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#node_type MemorydbCluster#node_type}
  */
  readonly nodeType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#num_replicas_per_shard MemorydbCluster#num_replicas_per_shard}
  */
  readonly numReplicasPerShard?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#num_shards MemorydbCluster#num_shards}
  */
  readonly numShards?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#parameter_group_name MemorydbCluster#parameter_group_name}
  */
  readonly parameterGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#port MemorydbCluster#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#security_group_ids MemorydbCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_arns MemorydbCluster#snapshot_arns}
  */
  readonly snapshotArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_name MemorydbCluster#snapshot_name}
  */
  readonly snapshotName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_retention_limit MemorydbCluster#snapshot_retention_limit}
  */
  readonly snapshotRetentionLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_window MemorydbCluster#snapshot_window}
  */
  readonly snapshotWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#sns_topic_arn MemorydbCluster#sns_topic_arn}
  */
  readonly snsTopicArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#subnet_group_name MemorydbCluster#subnet_group_name}
  */
  readonly subnetGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#tags MemorydbCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#tags_all MemorydbCluster#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#tls_enabled MemorydbCluster#tls_enabled}
  */
  readonly tlsEnabled?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#timeouts MemorydbCluster#timeouts}
  */
  readonly timeouts?: MemorydbClusterTimeouts;
}
export interface MemorydbClusterClusterEndpoint {
}

export function memorydbClusterClusterEndpointToTerraform(struct?: MemorydbClusterClusterEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MemorydbClusterClusterEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MemorydbClusterClusterEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemorydbClusterClusterEndpoint | undefined) {
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

export class MemorydbClusterClusterEndpointList extends cdktf.ComplexList {

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
  public get(index: number): MemorydbClusterClusterEndpointOutputReference {
    return new MemorydbClusterClusterEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemorydbClusterShardsNodesEndpoint {
}

export function memorydbClusterShardsNodesEndpointToTerraform(struct?: MemorydbClusterShardsNodesEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MemorydbClusterShardsNodesEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MemorydbClusterShardsNodesEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemorydbClusterShardsNodesEndpoint | undefined) {
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

export class MemorydbClusterShardsNodesEndpointList extends cdktf.ComplexList {

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
  public get(index: number): MemorydbClusterShardsNodesEndpointOutputReference {
    return new MemorydbClusterShardsNodesEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemorydbClusterShardsNodes {
}

export function memorydbClusterShardsNodesToTerraform(struct?: MemorydbClusterShardsNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MemorydbClusterShardsNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MemorydbClusterShardsNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemorydbClusterShardsNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // endpoint - computed: true, optional: false, required: false
  private _endpoint = new MemorydbClusterShardsNodesEndpointList(this, "endpoint", false);
  public get endpoint() {
    return this._endpoint;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class MemorydbClusterShardsNodesList extends cdktf.ComplexList {

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
  public get(index: number): MemorydbClusterShardsNodesOutputReference {
    return new MemorydbClusterShardsNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemorydbClusterShards {
}

export function memorydbClusterShardsToTerraform(struct?: MemorydbClusterShards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MemorydbClusterShardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MemorydbClusterShards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemorydbClusterShards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new MemorydbClusterShardsNodesList(this, "nodes", true);
  public get nodes() {
    return this._nodes;
  }

  // num_nodes - computed: true, optional: false, required: false
  public get numNodes() {
    return this.getNumberAttribute('num_nodes');
  }

  // slots - computed: true, optional: false, required: false
  public get slots() {
    return this.getStringAttribute('slots');
  }
}

export class MemorydbClusterShardsList extends cdktf.ComplexList {

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
  public get(index: number): MemorydbClusterShardsOutputReference {
    return new MemorydbClusterShardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemorydbClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#create MemorydbCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#delete MemorydbCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#update MemorydbCluster#update}
  */
  readonly update?: string;
}

export function memorydbClusterTimeoutsToTerraform(struct?: MemorydbClusterTimeoutsOutputReference | MemorydbClusterTimeouts | cdktf.IResolvable): any {
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

export class MemorydbClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MemorydbClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MemorydbClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster aws_memorydb_cluster}
*/
export class MemorydbCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_memorydb_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster aws_memorydb_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MemorydbClusterConfig
  */
  public constructor(scope: Construct, id: string, config: MemorydbClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_memorydb_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclName = config.aclName;
    this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
    this._dataTiering = config.dataTiering;
    this._description = config.description;
    this._engineVersion = config.engineVersion;
    this._finalSnapshotName = config.finalSnapshotName;
    this._id = config.id;
    this._kmsKeyArn = config.kmsKeyArn;
    this._maintenanceWindow = config.maintenanceWindow;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._nodeType = config.nodeType;
    this._numReplicasPerShard = config.numReplicasPerShard;
    this._numShards = config.numShards;
    this._parameterGroupName = config.parameterGroupName;
    this._port = config.port;
    this._securityGroupIds = config.securityGroupIds;
    this._snapshotArns = config.snapshotArns;
    this._snapshotName = config.snapshotName;
    this._snapshotRetentionLimit = config.snapshotRetentionLimit;
    this._snapshotWindow = config.snapshotWindow;
    this._snsTopicArn = config.snsTopicArn;
    this._subnetGroupName = config.subnetGroupName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._tlsEnabled = config.tlsEnabled;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_name - computed: false, optional: false, required: true
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_minor_version_upgrade - computed: false, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean | cdktf.IResolvable; 
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }
  public set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable) {
    this._autoMinorVersionUpgrade = value;
  }
  public resetAutoMinorVersionUpgrade() {
    this._autoMinorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMinorVersionUpgradeInput() {
    return this._autoMinorVersionUpgrade;
  }

  // cluster_endpoint - computed: true, optional: false, required: false
  private _clusterEndpoint = new MemorydbClusterClusterEndpointList(this, "cluster_endpoint", false);
  public get clusterEndpoint() {
    return this._clusterEndpoint;
  }

  // data_tiering - computed: false, optional: true, required: false
  private _dataTiering?: boolean | cdktf.IResolvable; 
  public get dataTiering() {
    return this.getBooleanAttribute('data_tiering');
  }
  public set dataTiering(value: boolean | cdktf.IResolvable) {
    this._dataTiering = value;
  }
  public resetDataTiering() {
    this._dataTiering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTieringInput() {
    return this._dataTiering;
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

  // engine_patch_version - computed: true, optional: false, required: false
  public get enginePatchVersion() {
    return this.getStringAttribute('engine_patch_version');
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

  // final_snapshot_name - computed: false, optional: true, required: false
  private _finalSnapshotName?: string; 
  public get finalSnapshotName() {
    return this.getStringAttribute('final_snapshot_name');
  }
  public set finalSnapshotName(value: string) {
    this._finalSnapshotName = value;
  }
  public resetFinalSnapshotName() {
    this._finalSnapshotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalSnapshotNameInput() {
    return this._finalSnapshotName;
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

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // maintenance_window - computed: true, optional: true, required: false
  private _maintenanceWindow?: string; 
  public get maintenanceWindow() {
    return this.getStringAttribute('maintenance_window');
  }
  public set maintenanceWindow(value: string) {
    this._maintenanceWindow = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow;
  }

  // name - computed: true, optional: true, required: false
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

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // num_replicas_per_shard - computed: false, optional: true, required: false
  private _numReplicasPerShard?: number; 
  public get numReplicasPerShard() {
    return this.getNumberAttribute('num_replicas_per_shard');
  }
  public set numReplicasPerShard(value: number) {
    this._numReplicasPerShard = value;
  }
  public resetNumReplicasPerShard() {
    this._numReplicasPerShard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numReplicasPerShardInput() {
    return this._numReplicasPerShard;
  }

  // num_shards - computed: false, optional: true, required: false
  private _numShards?: number; 
  public get numShards() {
    return this.getNumberAttribute('num_shards');
  }
  public set numShards(value: number) {
    this._numShards = value;
  }
  public resetNumShards() {
    this._numShards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numShardsInput() {
    return this._numShards;
  }

  // parameter_group_name - computed: true, optional: true, required: false
  private _parameterGroupName?: string; 
  public get parameterGroupName() {
    return this.getStringAttribute('parameter_group_name');
  }
  public set parameterGroupName(value: string) {
    this._parameterGroupName = value;
  }
  public resetParameterGroupName() {
    this._parameterGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterGroupNameInput() {
    return this._parameterGroupName;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // security_group_ids - computed: false, optional: true, required: false
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

  // shards - computed: true, optional: false, required: false
  private _shards = new MemorydbClusterShardsList(this, "shards", true);
  public get shards() {
    return this._shards;
  }

  // snapshot_arns - computed: false, optional: true, required: false
  private _snapshotArns?: string[]; 
  public get snapshotArns() {
    return this.getListAttribute('snapshot_arns');
  }
  public set snapshotArns(value: string[]) {
    this._snapshotArns = value;
  }
  public resetSnapshotArns() {
    this._snapshotArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotArnsInput() {
    return this._snapshotArns;
  }

  // snapshot_name - computed: false, optional: true, required: false
  private _snapshotName?: string; 
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string) {
    this._snapshotName = value;
  }
  public resetSnapshotName() {
    this._snapshotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName;
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

  // snapshot_window - computed: true, optional: true, required: false
  private _snapshotWindow?: string; 
  public get snapshotWindow() {
    return this.getStringAttribute('snapshot_window');
  }
  public set snapshotWindow(value: string) {
    this._snapshotWindow = value;
  }
  public resetSnapshotWindow() {
    this._snapshotWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotWindowInput() {
    return this._snapshotWindow;
  }

  // sns_topic_arn - computed: false, optional: true, required: false
  private _snsTopicArn?: string; 
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
  public set snsTopicArn(value: string) {
    this._snsTopicArn = value;
  }
  public resetSnsTopicArn() {
    this._snsTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnInput() {
    return this._snsTopicArn;
  }

  // subnet_group_name - computed: true, optional: true, required: false
  private _subnetGroupName?: string; 
  public get subnetGroupName() {
    return this.getStringAttribute('subnet_group_name');
  }
  public set subnetGroupName(value: string) {
    this._subnetGroupName = value;
  }
  public resetSubnetGroupName() {
    this._subnetGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetGroupNameInput() {
    return this._subnetGroupName;
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // tls_enabled - computed: false, optional: true, required: false
  private _tlsEnabled?: boolean | cdktf.IResolvable; 
  public get tlsEnabled() {
    return this.getBooleanAttribute('tls_enabled');
  }
  public set tlsEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsEnabled = value;
  }
  public resetTlsEnabled() {
    this._tlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnabledInput() {
    return this._tlsEnabled;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MemorydbClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MemorydbClusterTimeouts) {
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
      acl_name: cdktf.stringToTerraform(this._aclName),
      auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
      data_tiering: cdktf.booleanToTerraform(this._dataTiering),
      description: cdktf.stringToTerraform(this._description),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      final_snapshot_name: cdktf.stringToTerraform(this._finalSnapshotName),
      id: cdktf.stringToTerraform(this._id),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      maintenance_window: cdktf.stringToTerraform(this._maintenanceWindow),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      node_type: cdktf.stringToTerraform(this._nodeType),
      num_replicas_per_shard: cdktf.numberToTerraform(this._numReplicasPerShard),
      num_shards: cdktf.numberToTerraform(this._numShards),
      parameter_group_name: cdktf.stringToTerraform(this._parameterGroupName),
      port: cdktf.numberToTerraform(this._port),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      snapshot_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._snapshotArns),
      snapshot_name: cdktf.stringToTerraform(this._snapshotName),
      snapshot_retention_limit: cdktf.numberToTerraform(this._snapshotRetentionLimit),
      snapshot_window: cdktf.stringToTerraform(this._snapshotWindow),
      sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
      subnet_group_name: cdktf.stringToTerraform(this._subnetGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      tls_enabled: cdktf.booleanToTerraform(this._tlsEnabled),
      timeouts: memorydbClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
