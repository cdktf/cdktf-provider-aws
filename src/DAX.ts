// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS DynamoDB Accelerator
*/
export namespace DAX {
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
    readonly serverSideEncryption?: DaxClusterServerSideEncryption;
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

  function daxClusterServerSideEncryptionToTerraform(struct?: DaxClusterServerSideEncryptionOutputReference | DaxClusterServerSideEncryption): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
    }
  }

  export class DaxClusterServerSideEncryptionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
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

  function daxClusterTimeoutsToTerraform(struct?: DaxClusterTimeoutsOutputReference | DaxClusterTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class DaxClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
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
    private _availabilityZones?: string[] | undefined; 
    public get availabilityZones() {
      return this.getListAttribute('availability_zones');
    }
    public set availabilityZones(value: string[] | undefined) {
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
    private _clusterName?: string; 
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
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _iamRoleArn?: string; 
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
    private _maintenanceWindow?: string | undefined; 
    public get maintenanceWindow() {
      return this.getStringAttribute('maintenance_window');
    }
    public set maintenanceWindow(value: string | undefined) {
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
    private _nodeType?: string; 
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
    private _notificationTopicArn?: string | undefined; 
    public get notificationTopicArn() {
      return this.getStringAttribute('notification_topic_arn');
    }
    public set notificationTopicArn(value: string | undefined) {
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
    private _parameterGroupName?: string | undefined; 
    public get parameterGroupName() {
      return this.getStringAttribute('parameter_group_name');
    }
    public set parameterGroupName(value: string | undefined) {
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
    private _replicationFactor?: number; 
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
    private _securityGroupIds?: string[] | undefined; 
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[] | undefined) {
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
    private _subnetGroupName?: string | undefined; 
    public get subnetGroupName() {
      return this.getStringAttribute('subnet_group_name');
    }
    public set subnetGroupName(value: string | undefined) {
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _serverSideEncryption?: DaxClusterServerSideEncryption | undefined; 
    private __serverSideEncryptionOutput = new DaxClusterServerSideEncryptionOutputReference(this as any, "server_side_encryption", true);
    public get serverSideEncryption() {
      return this.__serverSideEncryptionOutput;
    }
    public putServerSideEncryption(value: DaxClusterServerSideEncryption | undefined) {
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
    private _timeouts?: DaxClusterTimeouts | undefined; 
    private __timeoutsOutput = new DaxClusterTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DaxClusterTimeouts | undefined) {
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
        server_side_encryption: daxClusterServerSideEncryptionToTerraform(this._serverSideEncryption),
        timeouts: daxClusterTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DaxParameterGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html#description DaxParameterGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html#name DaxParameterGroup#name}
    */
    readonly name: string;
    /**
    * parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html#parameters DaxParameterGroup#parameters}
    */
    readonly parameters?: DaxParameterGroupParameters[];
  }
  export interface DaxParameterGroupParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html#name DaxParameterGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html#value DaxParameterGroup#value}
    */
    readonly value: string;
  }

  function daxParameterGroupParametersToTerraform(struct?: DaxParameterGroupParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html aws_dax_parameter_group}
  */
  export class DaxParameterGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dax_parameter_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html aws_dax_parameter_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DaxParameterGroupConfig
    */
    public constructor(scope: Construct, id: string, config: DaxParameterGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dax_parameter_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._name = config.name;
      this._parameters = config.parameters;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // parameters - computed: false, optional: true, required: false
    private _parameters?: DaxParameterGroupParameters[] | undefined; 
    public get parameters() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameters') as any;
    }
    public set parameters(value: DaxParameterGroupParameters[] | undefined) {
      this._parameters = value;
    }
    public resetParameters() {
      this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
      return this._parameters
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        parameters: cdktf.listMapper(daxParameterGroupParametersToTerraform)(this._parameters),
      };
    }
  }
  export interface DaxSubnetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_subnet_group.html#description DaxSubnetGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_subnet_group.html#name DaxSubnetGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_subnet_group.html#subnet_ids DaxSubnetGroup#subnet_ids}
    */
    readonly subnetIds: string[];
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dax_subnet_group.html aws_dax_subnet_group}
  */
  export class DaxSubnetGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dax_subnet_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dax_subnet_group.html aws_dax_subnet_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DaxSubnetGroupConfig
    */
    public constructor(scope: Construct, id: string, config: DaxSubnetGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dax_subnet_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._name = config.name;
      this._subnetIds = config.subnetIds;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
      this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      };
    }
  }
}
