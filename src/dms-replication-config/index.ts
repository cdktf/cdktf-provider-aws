// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmsReplicationConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#id DmsReplicationConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#replication_config_identifier DmsReplicationConfig#replication_config_identifier}
  */
  readonly replicationConfigIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#replication_settings DmsReplicationConfig#replication_settings}
  */
  readonly replicationSettings?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#replication_type DmsReplicationConfig#replication_type}
  */
  readonly replicationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#resource_identifier DmsReplicationConfig#resource_identifier}
  */
  readonly resourceIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#source_endpoint_arn DmsReplicationConfig#source_endpoint_arn}
  */
  readonly sourceEndpointArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#start_replication DmsReplicationConfig#start_replication}
  */
  readonly startReplication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#supplemental_settings DmsReplicationConfig#supplemental_settings}
  */
  readonly supplementalSettings?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#table_mappings DmsReplicationConfig#table_mappings}
  */
  readonly tableMappings: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#tags DmsReplicationConfig#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#tags_all DmsReplicationConfig#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#target_endpoint_arn DmsReplicationConfig#target_endpoint_arn}
  */
  readonly targetEndpointArn: string;
  /**
  * compute_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#compute_config DmsReplicationConfig#compute_config}
  */
  readonly computeConfig: DmsReplicationConfigComputeConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#timeouts DmsReplicationConfig#timeouts}
  */
  readonly timeouts?: DmsReplicationConfigTimeouts;
}
export interface DmsReplicationConfigComputeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#availability_zone DmsReplicationConfig#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#dns_name_servers DmsReplicationConfig#dns_name_servers}
  */
  readonly dnsNameServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#kms_key_id DmsReplicationConfig#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#max_capacity_units DmsReplicationConfig#max_capacity_units}
  */
  readonly maxCapacityUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#min_capacity_units DmsReplicationConfig#min_capacity_units}
  */
  readonly minCapacityUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#multi_az DmsReplicationConfig#multi_az}
  */
  readonly multiAz?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#preferred_maintenance_window DmsReplicationConfig#preferred_maintenance_window}
  */
  readonly preferredMaintenanceWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#replication_subnet_group_id DmsReplicationConfig#replication_subnet_group_id}
  */
  readonly replicationSubnetGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#vpc_security_group_ids DmsReplicationConfig#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds?: string[];
}

export function dmsReplicationConfigComputeConfigToTerraform(struct?: DmsReplicationConfigComputeConfigOutputReference | DmsReplicationConfigComputeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    dns_name_servers: cdktf.stringToTerraform(struct!.dnsNameServers),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    max_capacity_units: cdktf.numberToTerraform(struct!.maxCapacityUnits),
    min_capacity_units: cdktf.numberToTerraform(struct!.minCapacityUnits),
    multi_az: cdktf.booleanToTerraform(struct!.multiAz),
    preferred_maintenance_window: cdktf.stringToTerraform(struct!.preferredMaintenanceWindow),
    replication_subnet_group_id: cdktf.stringToTerraform(struct!.replicationSubnetGroupId),
    vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpcSecurityGroupIds),
  }
}

export class DmsReplicationConfigComputeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DmsReplicationConfigComputeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._dnsNameServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNameServers = this._dnsNameServers;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._maxCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacityUnits = this._maxCapacityUnits;
    }
    if (this._minCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCapacityUnits = this._minCapacityUnits;
    }
    if (this._multiAz !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiAz = this._multiAz;
    }
    if (this._preferredMaintenanceWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredMaintenanceWindow = this._preferredMaintenanceWindow;
    }
    if (this._replicationSubnetGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationSubnetGroupId = this._replicationSubnetGroupId;
    }
    if (this._vpcSecurityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcSecurityGroupIds = this._vpcSecurityGroupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsReplicationConfigComputeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityZone = undefined;
      this._dnsNameServers = undefined;
      this._kmsKeyId = undefined;
      this._maxCapacityUnits = undefined;
      this._minCapacityUnits = undefined;
      this._multiAz = undefined;
      this._preferredMaintenanceWindow = undefined;
      this._replicationSubnetGroupId = undefined;
      this._vpcSecurityGroupIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityZone = value.availabilityZone;
      this._dnsNameServers = value.dnsNameServers;
      this._kmsKeyId = value.kmsKeyId;
      this._maxCapacityUnits = value.maxCapacityUnits;
      this._minCapacityUnits = value.minCapacityUnits;
      this._multiAz = value.multiAz;
      this._preferredMaintenanceWindow = value.preferredMaintenanceWindow;
      this._replicationSubnetGroupId = value.replicationSubnetGroupId;
      this._vpcSecurityGroupIds = value.vpcSecurityGroupIds;
    }
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // dns_name_servers - computed: false, optional: true, required: false
  private _dnsNameServers?: string; 
  public get dnsNameServers() {
    return this.getStringAttribute('dns_name_servers');
  }
  public set dnsNameServers(value: string) {
    this._dnsNameServers = value;
  }
  public resetDnsNameServers() {
    this._dnsNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameServersInput() {
    return this._dnsNameServers;
  }

  // kms_key_id - computed: true, optional: true, required: false
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

  // max_capacity_units - computed: false, optional: true, required: false
  private _maxCapacityUnits?: number; 
  public get maxCapacityUnits() {
    return this.getNumberAttribute('max_capacity_units');
  }
  public set maxCapacityUnits(value: number) {
    this._maxCapacityUnits = value;
  }
  public resetMaxCapacityUnits() {
    this._maxCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityUnitsInput() {
    return this._maxCapacityUnits;
  }

  // min_capacity_units - computed: false, optional: true, required: false
  private _minCapacityUnits?: number; 
  public get minCapacityUnits() {
    return this.getNumberAttribute('min_capacity_units');
  }
  public set minCapacityUnits(value: number) {
    this._minCapacityUnits = value;
  }
  public resetMinCapacityUnits() {
    this._minCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityUnitsInput() {
    return this._minCapacityUnits;
  }

  // multi_az - computed: true, optional: true, required: false
  private _multiAz?: boolean | cdktf.IResolvable; 
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }
  public set multiAz(value: boolean | cdktf.IResolvable) {
    this._multiAz = value;
  }
  public resetMultiAz() {
    this._multiAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzInput() {
    return this._multiAz;
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

  // replication_subnet_group_id - computed: false, optional: false, required: true
  private _replicationSubnetGroupId?: string; 
  public get replicationSubnetGroupId() {
    return this.getStringAttribute('replication_subnet_group_id');
  }
  public set replicationSubnetGroupId(value: string) {
    this._replicationSubnetGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSubnetGroupIdInput() {
    return this._replicationSubnetGroupId;
  }

  // vpc_security_group_ids - computed: true, optional: true, required: false
  private _vpcSecurityGroupIds?: string[]; 
  public get vpcSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_security_group_ids'));
  }
  public set vpcSecurityGroupIds(value: string[]) {
    this._vpcSecurityGroupIds = value;
  }
  public resetVpcSecurityGroupIds() {
    this._vpcSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSecurityGroupIdsInput() {
    return this._vpcSecurityGroupIds;
  }
}
export interface DmsReplicationConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#create DmsReplicationConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#delete DmsReplicationConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config#update DmsReplicationConfig#update}
  */
  readonly update?: string;
}

export function dmsReplicationConfigTimeoutsToTerraform(struct?: DmsReplicationConfigTimeouts | cdktf.IResolvable): any {
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

export class DmsReplicationConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DmsReplicationConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DmsReplicationConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config aws_dms_replication_config}
*/
export class DmsReplicationConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dms_replication_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/dms_replication_config aws_dms_replication_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsReplicationConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DmsReplicationConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dms_replication_config',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
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
    this._replicationConfigIdentifier = config.replicationConfigIdentifier;
    this._replicationSettings = config.replicationSettings;
    this._replicationType = config.replicationType;
    this._resourceIdentifier = config.resourceIdentifier;
    this._sourceEndpointArn = config.sourceEndpointArn;
    this._startReplication = config.startReplication;
    this._supplementalSettings = config.supplementalSettings;
    this._tableMappings = config.tableMappings;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._targetEndpointArn = config.targetEndpointArn;
    this._computeConfig.internalValue = config.computeConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // replication_config_identifier - computed: false, optional: false, required: true
  private _replicationConfigIdentifier?: string; 
  public get replicationConfigIdentifier() {
    return this.getStringAttribute('replication_config_identifier');
  }
  public set replicationConfigIdentifier(value: string) {
    this._replicationConfigIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationConfigIdentifierInput() {
    return this._replicationConfigIdentifier;
  }

  // replication_settings - computed: true, optional: true, required: false
  private _replicationSettings?: string; 
  public get replicationSettings() {
    return this.getStringAttribute('replication_settings');
  }
  public set replicationSettings(value: string) {
    this._replicationSettings = value;
  }
  public resetReplicationSettings() {
    this._replicationSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSettingsInput() {
    return this._replicationSettings;
  }

  // replication_type - computed: false, optional: false, required: true
  private _replicationType?: string; 
  public get replicationType() {
    return this.getStringAttribute('replication_type');
  }
  public set replicationType(value: string) {
    this._replicationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationTypeInput() {
    return this._replicationType;
  }

  // resource_identifier - computed: true, optional: true, required: false
  private _resourceIdentifier?: string; 
  public get resourceIdentifier() {
    return this.getStringAttribute('resource_identifier');
  }
  public set resourceIdentifier(value: string) {
    this._resourceIdentifier = value;
  }
  public resetResourceIdentifier() {
    this._resourceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdentifierInput() {
    return this._resourceIdentifier;
  }

  // source_endpoint_arn - computed: false, optional: false, required: true
  private _sourceEndpointArn?: string; 
  public get sourceEndpointArn() {
    return this.getStringAttribute('source_endpoint_arn');
  }
  public set sourceEndpointArn(value: string) {
    this._sourceEndpointArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointArnInput() {
    return this._sourceEndpointArn;
  }

  // start_replication - computed: false, optional: true, required: false
  private _startReplication?: boolean | cdktf.IResolvable; 
  public get startReplication() {
    return this.getBooleanAttribute('start_replication');
  }
  public set startReplication(value: boolean | cdktf.IResolvable) {
    this._startReplication = value;
  }
  public resetStartReplication() {
    this._startReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startReplicationInput() {
    return this._startReplication;
  }

  // supplemental_settings - computed: false, optional: true, required: false
  private _supplementalSettings?: string; 
  public get supplementalSettings() {
    return this.getStringAttribute('supplemental_settings');
  }
  public set supplementalSettings(value: string) {
    this._supplementalSettings = value;
  }
  public resetSupplementalSettings() {
    this._supplementalSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalSettingsInput() {
    return this._supplementalSettings;
  }

  // table_mappings - computed: false, optional: false, required: true
  private _tableMappings?: string; 
  public get tableMappings() {
    return this.getStringAttribute('table_mappings');
  }
  public set tableMappings(value: string) {
    this._tableMappings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableMappingsInput() {
    return this._tableMappings;
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

  // target_endpoint_arn - computed: false, optional: false, required: true
  private _targetEndpointArn?: string; 
  public get targetEndpointArn() {
    return this.getStringAttribute('target_endpoint_arn');
  }
  public set targetEndpointArn(value: string) {
    this._targetEndpointArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetEndpointArnInput() {
    return this._targetEndpointArn;
  }

  // compute_config - computed: false, optional: false, required: true
  private _computeConfig = new DmsReplicationConfigComputeConfigOutputReference(this, "compute_config");
  public get computeConfig() {
    return this._computeConfig;
  }
  public putComputeConfig(value: DmsReplicationConfigComputeConfig) {
    this._computeConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeConfigInput() {
    return this._computeConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DmsReplicationConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DmsReplicationConfigTimeouts) {
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
      replication_config_identifier: cdktf.stringToTerraform(this._replicationConfigIdentifier),
      replication_settings: cdktf.stringToTerraform(this._replicationSettings),
      replication_type: cdktf.stringToTerraform(this._replicationType),
      resource_identifier: cdktf.stringToTerraform(this._resourceIdentifier),
      source_endpoint_arn: cdktf.stringToTerraform(this._sourceEndpointArn),
      start_replication: cdktf.booleanToTerraform(this._startReplication),
      supplemental_settings: cdktf.stringToTerraform(this._supplementalSettings),
      table_mappings: cdktf.stringToTerraform(this._tableMappings),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      target_endpoint_arn: cdktf.stringToTerraform(this._targetEndpointArn),
      compute_config: dmsReplicationConfigComputeConfigToTerraform(this._computeConfig.internalValue),
      timeouts: dmsReplicationConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
