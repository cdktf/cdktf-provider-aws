// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudHSM
*/
export namespace CloudHSM {
  export interface CloudhsmV2ClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#hsm_type CloudhsmV2Cluster#hsm_type}
    */
    readonly hsmType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#source_backup_identifier CloudhsmV2Cluster#source_backup_identifier}
    */
    readonly sourceBackupIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#subnet_ids CloudhsmV2Cluster#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#tags CloudhsmV2Cluster#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#tags_all CloudhsmV2Cluster#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#timeouts CloudhsmV2Cluster#timeouts}
    */
    readonly timeouts?: CloudhsmV2ClusterTimeouts;
  }
  export class CloudhsmV2ClusterClusterCertificates extends cdktf.ComplexComputedList {

    // aws_hardware_certificate - computed: true, optional: false, required: false
    public get awsHardwareCertificate() {
      return this.getStringAttribute('aws_hardware_certificate');
    }

    // cluster_certificate - computed: true, optional: false, required: false
    public get clusterCertificate() {
      return this.getStringAttribute('cluster_certificate');
    }

    // cluster_csr - computed: true, optional: false, required: false
    public get clusterCsr() {
      return this.getStringAttribute('cluster_csr');
    }

    // hsm_certificate - computed: true, optional: false, required: false
    public get hsmCertificate() {
      return this.getStringAttribute('hsm_certificate');
    }

    // manufacturer_hardware_certificate - computed: true, optional: false, required: false
    public get manufacturerHardwareCertificate() {
      return this.getStringAttribute('manufacturer_hardware_certificate');
    }
  }
  export interface CloudhsmV2ClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#create CloudhsmV2Cluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#delete CloudhsmV2Cluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#update CloudhsmV2Cluster#update}
    */
    readonly update?: string;
  }

  function cloudhsmV2ClusterTimeoutsToTerraform(struct?: CloudhsmV2ClusterTimeoutsOutputReference | CloudhsmV2ClusterTimeouts): any {
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

  export class CloudhsmV2ClusterTimeoutsOutputReference extends cdktf.ComplexObject {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html aws_cloudhsm_v2_cluster}
  */
  export class CloudhsmV2Cluster extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudhsm_v2_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html aws_cloudhsm_v2_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudhsmV2ClusterConfig
    */
    public constructor(scope: Construct, id: string, config: CloudhsmV2ClusterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudhsm_v2_cluster',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._hsmType = config.hsmType;
      this._sourceBackupIdentifier = config.sourceBackupIdentifier;
      this._subnetIds = config.subnetIds;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cluster_certificates - computed: true, optional: false, required: false
    public clusterCertificates(index: string) {
      return new CloudhsmV2ClusterClusterCertificates(this, 'cluster_certificates', index);
    }

    // cluster_id - computed: true, optional: false, required: false
    public get clusterId() {
      return this.getStringAttribute('cluster_id');
    }

    // cluster_state - computed: true, optional: false, required: false
    public get clusterState() {
      return this.getStringAttribute('cluster_state');
    }

    // hsm_type - computed: false, optional: false, required: true
    private _hsmType?: string; 
    public get hsmType() {
      return this.getStringAttribute('hsm_type');
    }
    public set hsmType(value: string) {
      this._hsmType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get hsmTypeInput() {
      return this._hsmType
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // security_group_id - computed: true, optional: false, required: false
    public get securityGroupId() {
      return this.getStringAttribute('security_group_id');
    }

    // source_backup_identifier - computed: false, optional: true, required: false
    private _sourceBackupIdentifier?: string | undefined; 
    public get sourceBackupIdentifier() {
      return this.getStringAttribute('source_backup_identifier');
    }
    public set sourceBackupIdentifier(value: string | undefined) {
      this._sourceBackupIdentifier = value;
    }
    public resetSourceBackupIdentifier() {
      this._sourceBackupIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceBackupIdentifierInput() {
      return this._sourceBackupIdentifier
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

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: CloudhsmV2ClusterTimeouts | undefined; 
    private __timeoutsOutput = new CloudhsmV2ClusterTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: CloudhsmV2ClusterTimeouts | undefined) {
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
        hsm_type: cdktf.stringToTerraform(this._hsmType),
        source_backup_identifier: cdktf.stringToTerraform(this._sourceBackupIdentifier),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: cloudhsmV2ClusterTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface CloudhsmV2HsmConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html#availability_zone CloudhsmV2Hsm#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html#cluster_id CloudhsmV2Hsm#cluster_id}
    */
    readonly clusterId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html#ip_address CloudhsmV2Hsm#ip_address}
    */
    readonly ipAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html#subnet_id CloudhsmV2Hsm#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html#timeouts CloudhsmV2Hsm#timeouts}
    */
    readonly timeouts?: CloudhsmV2HsmTimeouts;
  }
  export interface CloudhsmV2HsmTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html#create CloudhsmV2Hsm#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html#delete CloudhsmV2Hsm#delete}
    */
    readonly delete?: string;
  }

  function cloudhsmV2HsmTimeoutsToTerraform(struct?: CloudhsmV2HsmTimeoutsOutputReference | CloudhsmV2HsmTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class CloudhsmV2HsmTimeoutsOutputReference extends cdktf.ComplexObject {
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
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html aws_cloudhsm_v2_hsm}
  */
  export class CloudhsmV2Hsm extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudhsm_v2_hsm";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html aws_cloudhsm_v2_hsm} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudhsmV2HsmConfig
    */
    public constructor(scope: Construct, id: string, config: CloudhsmV2HsmConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudhsm_v2_hsm',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._availabilityZone = config.availabilityZone;
      this._clusterId = config.clusterId;
      this._ipAddress = config.ipAddress;
      this._subnetId = config.subnetId;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string | undefined; 
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string | undefined) {
      this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
      this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
      return this._availabilityZone
    }

    // cluster_id - computed: false, optional: false, required: true
    private _clusterId?: string; 
    public get clusterId() {
      return this.getStringAttribute('cluster_id');
    }
    public set clusterId(value: string) {
      this._clusterId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdInput() {
      return this._clusterId
    }

    // hsm_eni_id - computed: true, optional: false, required: false
    public get hsmEniId() {
      return this.getStringAttribute('hsm_eni_id');
    }

    // hsm_id - computed: true, optional: false, required: false
    public get hsmId() {
      return this.getStringAttribute('hsm_id');
    }

    // hsm_state - computed: true, optional: false, required: false
    public get hsmState() {
      return this.getStringAttribute('hsm_state');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ip_address - computed: true, optional: true, required: false
    private _ipAddress?: string | undefined; 
    public get ipAddress() {
      return this.getStringAttribute('ip_address');
    }
    public set ipAddress(value: string | undefined) {
      this._ipAddress = value;
    }
    public resetIpAddress() {
      this._ipAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressInput() {
      return this._ipAddress
    }

    // subnet_id - computed: true, optional: true, required: false
    private _subnetId?: string | undefined; 
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string | undefined) {
      this._subnetId = value;
    }
    public resetSubnetId() {
      this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
      return this._subnetId
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: CloudhsmV2HsmTimeouts | undefined; 
    private __timeoutsOutput = new CloudhsmV2HsmTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: CloudhsmV2HsmTimeouts | undefined) {
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
        availability_zone: cdktf.stringToTerraform(this._availabilityZone),
        cluster_id: cdktf.stringToTerraform(this._clusterId),
        ip_address: cdktf.stringToTerraform(this._ipAddress),
        subnet_id: cdktf.stringToTerraform(this._subnetId),
        timeouts: cloudhsmV2HsmTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DataAwsCloudhsmV2ClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster.html#cluster_id DataAwsCloudhsmV2Cluster#cluster_id}
    */
    readonly clusterId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster.html#cluster_state DataAwsCloudhsmV2Cluster#cluster_state}
    */
    readonly clusterState?: string;
  }
  export class DataAwsCloudhsmV2ClusterClusterCertificates extends cdktf.ComplexComputedList {

    // aws_hardware_certificate - computed: true, optional: false, required: false
    public get awsHardwareCertificate() {
      return this.getStringAttribute('aws_hardware_certificate');
    }

    // cluster_certificate - computed: true, optional: false, required: false
    public get clusterCertificate() {
      return this.getStringAttribute('cluster_certificate');
    }

    // cluster_csr - computed: true, optional: false, required: false
    public get clusterCsr() {
      return this.getStringAttribute('cluster_csr');
    }

    // hsm_certificate - computed: true, optional: false, required: false
    public get hsmCertificate() {
      return this.getStringAttribute('hsm_certificate');
    }

    // manufacturer_hardware_certificate - computed: true, optional: false, required: false
    public get manufacturerHardwareCertificate() {
      return this.getStringAttribute('manufacturer_hardware_certificate');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster.html aws_cloudhsm_v2_cluster}
  */
  export class DataAwsCloudhsmV2Cluster extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudhsm_v2_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster.html aws_cloudhsm_v2_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudhsmV2ClusterConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsCloudhsmV2ClusterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudhsm_v2_cluster',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterId = config.clusterId;
      this._clusterState = config.clusterState;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cluster_certificates - computed: true, optional: false, required: false
    public clusterCertificates(index: string) {
      return new DataAwsCloudhsmV2ClusterClusterCertificates(this, 'cluster_certificates', index);
    }

    // cluster_id - computed: false, optional: false, required: true
    private _clusterId?: string; 
    public get clusterId() {
      return this.getStringAttribute('cluster_id');
    }
    public set clusterId(value: string) {
      this._clusterId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdInput() {
      return this._clusterId
    }

    // cluster_state - computed: true, optional: true, required: false
    private _clusterState?: string | undefined; 
    public get clusterState() {
      return this.getStringAttribute('cluster_state');
    }
    public set clusterState(value: string | undefined) {
      this._clusterState = value;
    }
    public resetClusterState() {
      this._clusterState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterStateInput() {
      return this._clusterState
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // security_group_id - computed: true, optional: false, required: false
    public get securityGroupId() {
      return this.getStringAttribute('security_group_id');
    }

    // subnet_ids - computed: true, optional: false, required: false
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
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
        cluster_id: cdktf.stringToTerraform(this._clusterId),
        cluster_state: cdktf.stringToTerraform(this._clusterState),
      };
    }
  }
}
