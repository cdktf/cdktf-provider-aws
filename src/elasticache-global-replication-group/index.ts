// https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticacheGlobalReplicationGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#automatic_failover_enabled ElasticacheGlobalReplicationGroup#automatic_failover_enabled}
  */
  readonly automaticFailoverEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#cache_node_type ElasticacheGlobalReplicationGroup#cache_node_type}
  */
  readonly cacheNodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#engine_version ElasticacheGlobalReplicationGroup#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_description ElasticacheGlobalReplicationGroup#global_replication_group_description}
  */
  readonly globalReplicationGroupDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_id_suffix ElasticacheGlobalReplicationGroup#global_replication_group_id_suffix}
  */
  readonly globalReplicationGroupIdSuffix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#id ElasticacheGlobalReplicationGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#num_node_groups ElasticacheGlobalReplicationGroup#num_node_groups}
  */
  readonly numNodeGroups?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#parameter_group_name ElasticacheGlobalReplicationGroup#parameter_group_name}
  */
  readonly parameterGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#primary_replication_group_id ElasticacheGlobalReplicationGroup#primary_replication_group_id}
  */
  readonly primaryReplicationGroupId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#timeouts ElasticacheGlobalReplicationGroup#timeouts}
  */
  readonly timeouts?: ElasticacheGlobalReplicationGroupTimeouts;
}
export interface ElasticacheGlobalReplicationGroupGlobalNodeGroups {
}

export function elasticacheGlobalReplicationGroupGlobalNodeGroupsToTerraform(struct?: ElasticacheGlobalReplicationGroupGlobalNodeGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticacheGlobalReplicationGroupGlobalNodeGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticacheGlobalReplicationGroupGlobalNodeGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // global_node_group_id - computed: true, optional: false, required: false
  public get globalNodeGroupId() {
    return this.getStringAttribute('global_node_group_id');
  }

  // slots - computed: true, optional: false, required: false
  public get slots() {
    return this.getStringAttribute('slots');
  }
}

export class ElasticacheGlobalReplicationGroupGlobalNodeGroupsList extends cdktf.ComplexList {

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
  public get(index: number): ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference {
    return new ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticacheGlobalReplicationGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#create ElasticacheGlobalReplicationGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#delete ElasticacheGlobalReplicationGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#update ElasticacheGlobalReplicationGroup#update}
  */
  readonly update?: string;
}

export function elasticacheGlobalReplicationGroupTimeoutsToTerraform(struct?: ElasticacheGlobalReplicationGroupTimeoutsOutputReference | ElasticacheGlobalReplicationGroupTimeouts | cdktf.IResolvable): any {
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

export class ElasticacheGlobalReplicationGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticacheGlobalReplicationGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ElasticacheGlobalReplicationGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group aws_elasticache_global_replication_group}
*/
export class ElasticacheGlobalReplicationGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_elasticache_global_replication_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group aws_elasticache_global_replication_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticacheGlobalReplicationGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticacheGlobalReplicationGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticache_global_replication_group',
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
    this._automaticFailoverEnabled = config.automaticFailoverEnabled;
    this._cacheNodeType = config.cacheNodeType;
    this._engineVersion = config.engineVersion;
    this._globalReplicationGroupDescription = config.globalReplicationGroupDescription;
    this._globalReplicationGroupIdSuffix = config.globalReplicationGroupIdSuffix;
    this._id = config.id;
    this._numNodeGroups = config.numNodeGroups;
    this._parameterGroupName = config.parameterGroupName;
    this._primaryReplicationGroupId = config.primaryReplicationGroupId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // at_rest_encryption_enabled - computed: true, optional: false, required: false
  public get atRestEncryptionEnabled() {
    return this.getBooleanAttribute('at_rest_encryption_enabled');
  }

  // auth_token_enabled - computed: true, optional: false, required: false
  public get authTokenEnabled() {
    return this.getBooleanAttribute('auth_token_enabled');
  }

  // automatic_failover_enabled - computed: true, optional: true, required: false
  private _automaticFailoverEnabled?: boolean | cdktf.IResolvable; 
  public get automaticFailoverEnabled() {
    return this.getBooleanAttribute('automatic_failover_enabled');
  }
  public set automaticFailoverEnabled(value: boolean | cdktf.IResolvable) {
    this._automaticFailoverEnabled = value;
  }
  public resetAutomaticFailoverEnabled() {
    this._automaticFailoverEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFailoverEnabledInput() {
    return this._automaticFailoverEnabled;
  }

  // cache_node_type - computed: true, optional: true, required: false
  private _cacheNodeType?: string; 
  public get cacheNodeType() {
    return this.getStringAttribute('cache_node_type');
  }
  public set cacheNodeType(value: string) {
    this._cacheNodeType = value;
  }
  public resetCacheNodeType() {
    this._cacheNodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheNodeTypeInput() {
    return this._cacheNodeType;
  }

  // cluster_enabled - computed: true, optional: false, required: false
  public get clusterEnabled() {
    return this.getBooleanAttribute('cluster_enabled');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
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

  // engine_version_actual - computed: true, optional: false, required: false
  public get engineVersionActual() {
    return this.getStringAttribute('engine_version_actual');
  }

  // global_node_groups - computed: true, optional: false, required: false
  private _globalNodeGroups = new ElasticacheGlobalReplicationGroupGlobalNodeGroupsList(this, "global_node_groups", true);
  public get globalNodeGroups() {
    return this._globalNodeGroups;
  }

  // global_replication_group_description - computed: false, optional: true, required: false
  private _globalReplicationGroupDescription?: string; 
  public get globalReplicationGroupDescription() {
    return this.getStringAttribute('global_replication_group_description');
  }
  public set globalReplicationGroupDescription(value: string) {
    this._globalReplicationGroupDescription = value;
  }
  public resetGlobalReplicationGroupDescription() {
    this._globalReplicationGroupDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalReplicationGroupDescriptionInput() {
    return this._globalReplicationGroupDescription;
  }

  // global_replication_group_id - computed: true, optional: false, required: false
  public get globalReplicationGroupId() {
    return this.getStringAttribute('global_replication_group_id');
  }

  // global_replication_group_id_suffix - computed: false, optional: false, required: true
  private _globalReplicationGroupIdSuffix?: string; 
  public get globalReplicationGroupIdSuffix() {
    return this.getStringAttribute('global_replication_group_id_suffix');
  }
  public set globalReplicationGroupIdSuffix(value: string) {
    this._globalReplicationGroupIdSuffix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalReplicationGroupIdSuffixInput() {
    return this._globalReplicationGroupIdSuffix;
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

  // num_node_groups - computed: true, optional: true, required: false
  private _numNodeGroups?: number; 
  public get numNodeGroups() {
    return this.getNumberAttribute('num_node_groups');
  }
  public set numNodeGroups(value: number) {
    this._numNodeGroups = value;
  }
  public resetNumNodeGroups() {
    this._numNodeGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numNodeGroupsInput() {
    return this._numNodeGroups;
  }

  // parameter_group_name - computed: false, optional: true, required: false
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

  // primary_replication_group_id - computed: false, optional: false, required: true
  private _primaryReplicationGroupId?: string; 
  public get primaryReplicationGroupId() {
    return this.getStringAttribute('primary_replication_group_id');
  }
  public set primaryReplicationGroupId(value: string) {
    this._primaryReplicationGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryReplicationGroupIdInput() {
    return this._primaryReplicationGroupId;
  }

  // transit_encryption_enabled - computed: true, optional: false, required: false
  public get transitEncryptionEnabled() {
    return this.getBooleanAttribute('transit_encryption_enabled');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ElasticacheGlobalReplicationGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ElasticacheGlobalReplicationGroupTimeouts) {
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
      automatic_failover_enabled: cdktf.booleanToTerraform(this._automaticFailoverEnabled),
      cache_node_type: cdktf.stringToTerraform(this._cacheNodeType),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      global_replication_group_description: cdktf.stringToTerraform(this._globalReplicationGroupDescription),
      global_replication_group_id_suffix: cdktf.stringToTerraform(this._globalReplicationGroupIdSuffix),
      id: cdktf.stringToTerraform(this._id),
      num_node_groups: cdktf.numberToTerraform(this._numNodeGroups),
      parameter_group_name: cdktf.stringToTerraform(this._parameterGroupName),
      primary_replication_group_id: cdktf.stringToTerraform(this._primaryReplicationGroupId),
      timeouts: elasticacheGlobalReplicationGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
