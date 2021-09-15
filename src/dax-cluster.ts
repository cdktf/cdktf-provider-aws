// https://www.terraform.io/docs/providers/aws/r/dax_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DaxClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#availability_zones DaxCluster#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#cluster_name DaxCluster#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#description DaxCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#iam_role_arn DaxCluster#iam_role_arn}
  */
  readonly iamRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#maintenance_window DaxCluster#maintenance_window}
  */
  readonly maintenanceWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#node_type DaxCluster#node_type}
  */
  readonly nodeType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#notification_topic_arn DaxCluster#notification_topic_arn}
  */
  readonly notificationTopicArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#parameter_group_name DaxCluster#parameter_group_name}
  */
  readonly parameterGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#replication_factor DaxCluster#replication_factor}
  */
  readonly replicationFactor: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#security_group_ids DaxCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#subnet_group_name DaxCluster#subnet_group_name}
  */
  readonly subnetGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#tags DaxCluster#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#tags_all DaxCluster#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * server_side_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#server_side_encryption DaxCluster#server_side_encryption}
  */
  readonly serverSideEncryption?: DaxClusterServerSideEncryption[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#timeouts DaxCluster#timeouts}
  */
  readonly timeouts?: DaxClusterTimeouts;
}
export class DaxClusterNodes extends cdktf.ComplexComputedList {

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DaxClusterServerSideEncryption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#enabled DaxCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

function daxClusterServerSideEncryptionToTerraform(struct?: DaxClusterServerSideEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface DaxClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#create DaxCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#delete DaxCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#update DaxCluster#update}
  */
  readonly update?: string;
}

function daxClusterTimeoutsToTerraform(struct?: DaxClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html aws_dax_cluster}
*/
export class DaxCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_dax_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html aws_dax_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DaxClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DaxClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dax_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZones = config.availabilityZones;
    this._clusterName = config.clusterName;
    this._description = config.description;
    this._iamRoleArn = config.iamRoleArn;
    this._maintenanceWindow = config.maintenanceWindow;
    this._nodeType = config.nodeType;
    this._notificationTopicArn = config.notificationTopicArn;
    this._parameterGroupName = config.parameterGroupName;
    this._replicationFactor = config.replicationFactor;
    this._securityGroupIds = config.securityGroupIds;
    this._subnetGroupName = config.subnetGroupName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._serverSideEncryption = config.serverSideEncryption;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[];
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[] ) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones
  }

  // cluster_address - computed: true, optional: false, required: false
  public get clusterAddress() {
    return this.getStringAttribute('cluster_address');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName: string;
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName
  }

  // configuration_endpoint - computed: true, optional: false, required: false
  public get configurationEndpoint() {
    return this.getStringAttribute('configuration_endpoint');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // iam_role_arn - computed: false, optional: false, required: true
  private _iamRoleArn: string;
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._maintenanceWindow
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType: string;
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType
  }

  // nodes - computed: true, optional: false, required: false
  public nodes(index: string) {
    return new DaxClusterNodes(this, 'nodes', index);
  }

  // notification_topic_arn - computed: false, optional: true, required: false
  private _notificationTopicArn?: string;
  public get notificationTopicArn() {
    return this.getStringAttribute('notification_topic_arn');
  }
  public set notificationTopicArn(value: string ) {
    this._notificationTopicArn = value;
  }
  public resetNotificationTopicArn() {
    this._notificationTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTopicArnInput() {
    return this._notificationTopicArn
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
    return this._parameterGroupName
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // replication_factor - computed: false, optional: false, required: true
  private _replicationFactor: number;
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[];
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds
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
    return this._subnetGroupName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption?: DaxClusterServerSideEncryption[];
  public get serverSideEncryption() {
    return this.interpolationForAttribute('server_side_encryption') as any;
  }
  public set serverSideEncryption(value: DaxClusterServerSideEncryption[] ) {
    this._serverSideEncryption = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DaxClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DaxClusterTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      description: cdktf.stringToTerraform(this._description),
      iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
      maintenance_window: cdktf.stringToTerraform(this._maintenanceWindow),
      node_type: cdktf.stringToTerraform(this._nodeType),
      notification_topic_arn: cdktf.stringToTerraform(this._notificationTopicArn),
      parameter_group_name: cdktf.stringToTerraform(this._parameterGroupName),
      replication_factor: cdktf.numberToTerraform(this._replicationFactor),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
      subnet_group_name: cdktf.stringToTerraform(this._subnetGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      server_side_encryption: cdktf.listMapper(daxClusterServerSideEncryptionToTerraform)(this._serverSideEncryption),
      timeouts: daxClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
