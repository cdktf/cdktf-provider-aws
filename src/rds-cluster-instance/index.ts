/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsClusterInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#apply_immediately RdsClusterInstance#apply_immediately}
  */
  readonly applyImmediately?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#auto_minor_version_upgrade RdsClusterInstance#auto_minor_version_upgrade}
  */
  readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#availability_zone RdsClusterInstance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#ca_cert_identifier RdsClusterInstance#ca_cert_identifier}
  */
  readonly caCertIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#cluster_identifier RdsClusterInstance#cluster_identifier}
  */
  readonly clusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#copy_tags_to_snapshot RdsClusterInstance#copy_tags_to_snapshot}
  */
  readonly copyTagsToSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#custom_iam_instance_profile RdsClusterInstance#custom_iam_instance_profile}
  */
  readonly customIamInstanceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#db_parameter_group_name RdsClusterInstance#db_parameter_group_name}
  */
  readonly dbParameterGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#db_subnet_group_name RdsClusterInstance#db_subnet_group_name}
  */
  readonly dbSubnetGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#engine RdsClusterInstance#engine}
  */
  readonly engine: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#engine_version RdsClusterInstance#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#force_destroy RdsClusterInstance#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#id RdsClusterInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#identifier RdsClusterInstance#identifier}
  */
  readonly identifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#identifier_prefix RdsClusterInstance#identifier_prefix}
  */
  readonly identifierPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#instance_class RdsClusterInstance#instance_class}
  */
  readonly instanceClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#monitoring_interval RdsClusterInstance#monitoring_interval}
  */
  readonly monitoringInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#monitoring_role_arn RdsClusterInstance#monitoring_role_arn}
  */
  readonly monitoringRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#performance_insights_enabled RdsClusterInstance#performance_insights_enabled}
  */
  readonly performanceInsightsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#performance_insights_kms_key_id RdsClusterInstance#performance_insights_kms_key_id}
  */
  readonly performanceInsightsKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#performance_insights_retention_period RdsClusterInstance#performance_insights_retention_period}
  */
  readonly performanceInsightsRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#preferred_backup_window RdsClusterInstance#preferred_backup_window}
  */
  readonly preferredBackupWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#preferred_maintenance_window RdsClusterInstance#preferred_maintenance_window}
  */
  readonly preferredMaintenanceWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#promotion_tier RdsClusterInstance#promotion_tier}
  */
  readonly promotionTier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#publicly_accessible RdsClusterInstance#publicly_accessible}
  */
  readonly publiclyAccessible?: boolean | cdktf.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#region RdsClusterInstance#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#tags RdsClusterInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#tags_all RdsClusterInstance#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#timeouts RdsClusterInstance#timeouts}
  */
  readonly timeouts?: RdsClusterInstanceTimeouts;
}
export interface RdsClusterInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#create RdsClusterInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#delete RdsClusterInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#update RdsClusterInstance#update}
  */
  readonly update?: string;
}

export function rdsClusterInstanceTimeoutsToTerraform(struct?: RdsClusterInstanceTimeouts | cdktf.IResolvable): any {
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


export function rdsClusterInstanceTimeoutsToHclTerraform(struct?: RdsClusterInstanceTimeouts | cdktf.IResolvable): any {
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

export class RdsClusterInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RdsClusterInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RdsClusterInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance aws_rds_cluster_instance}
*/
export class RdsClusterInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rds_cluster_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RdsClusterInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdsClusterInstance to import
  * @param importFromId The id of the existing RdsClusterInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdsClusterInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_rds_cluster_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_instance aws_rds_cluster_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsClusterInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: RdsClusterInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_cluster_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
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
    this._applyImmediately = config.applyImmediately;
    this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
    this._availabilityZone = config.availabilityZone;
    this._caCertIdentifier = config.caCertIdentifier;
    this._clusterIdentifier = config.clusterIdentifier;
    this._copyTagsToSnapshot = config.copyTagsToSnapshot;
    this._customIamInstanceProfile = config.customIamInstanceProfile;
    this._dbParameterGroupName = config.dbParameterGroupName;
    this._dbSubnetGroupName = config.dbSubnetGroupName;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._identifier = config.identifier;
    this._identifierPrefix = config.identifierPrefix;
    this._instanceClass = config.instanceClass;
    this._monitoringInterval = config.monitoringInterval;
    this._monitoringRoleArn = config.monitoringRoleArn;
    this._performanceInsightsEnabled = config.performanceInsightsEnabled;
    this._performanceInsightsKmsKeyId = config.performanceInsightsKmsKeyId;
    this._performanceInsightsRetentionPeriod = config.performanceInsightsRetentionPeriod;
    this._preferredBackupWindow = config.preferredBackupWindow;
    this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
    this._promotionTier = config.promotionTier;
    this._publiclyAccessible = config.publiclyAccessible;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_immediately - computed: true, optional: true, required: false
  private _applyImmediately?: boolean | cdktf.IResolvable; 
  public get applyImmediately() {
    return this.getBooleanAttribute('apply_immediately');
  }
  public set applyImmediately(value: boolean | cdktf.IResolvable) {
    this._applyImmediately = value;
  }
  public resetApplyImmediately() {
    this._applyImmediately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyImmediatelyInput() {
    return this._applyImmediately;
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

  // ca_cert_identifier - computed: true, optional: true, required: false
  private _caCertIdentifier?: string; 
  public get caCertIdentifier() {
    return this.getStringAttribute('ca_cert_identifier');
  }
  public set caCertIdentifier(value: string) {
    this._caCertIdentifier = value;
  }
  public resetCaCertIdentifier() {
    this._caCertIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertIdentifierInput() {
    return this._caCertIdentifier;
  }

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier;
  }

  // copy_tags_to_snapshot - computed: false, optional: true, required: false
  private _copyTagsToSnapshot?: boolean | cdktf.IResolvable; 
  public get copyTagsToSnapshot() {
    return this.getBooleanAttribute('copy_tags_to_snapshot');
  }
  public set copyTagsToSnapshot(value: boolean | cdktf.IResolvable) {
    this._copyTagsToSnapshot = value;
  }
  public resetCopyTagsToSnapshot() {
    this._copyTagsToSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsToSnapshotInput() {
    return this._copyTagsToSnapshot;
  }

  // custom_iam_instance_profile - computed: false, optional: true, required: false
  private _customIamInstanceProfile?: string; 
  public get customIamInstanceProfile() {
    return this.getStringAttribute('custom_iam_instance_profile');
  }
  public set customIamInstanceProfile(value: string) {
    this._customIamInstanceProfile = value;
  }
  public resetCustomIamInstanceProfile() {
    this._customIamInstanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIamInstanceProfileInput() {
    return this._customIamInstanceProfile;
  }

  // db_parameter_group_name - computed: true, optional: true, required: false
  private _dbParameterGroupName?: string; 
  public get dbParameterGroupName() {
    return this.getStringAttribute('db_parameter_group_name');
  }
  public set dbParameterGroupName(value: string) {
    this._dbParameterGroupName = value;
  }
  public resetDbParameterGroupName() {
    this._dbParameterGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbParameterGroupNameInput() {
    return this._dbParameterGroupName;
  }

  // db_subnet_group_name - computed: true, optional: true, required: false
  private _dbSubnetGroupName?: string; 
  public get dbSubnetGroupName() {
    return this.getStringAttribute('db_subnet_group_name');
  }
  public set dbSubnetGroupName(value: string) {
    this._dbSubnetGroupName = value;
  }
  public resetDbSubnetGroupName() {
    this._dbSubnetGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSubnetGroupNameInput() {
    return this._dbSubnetGroupName;
  }

  // dbi_resource_id - computed: true, optional: false, required: false
  public get dbiResourceId() {
    return this.getStringAttribute('dbi_resource_id');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
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

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // identifier - computed: true, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // identifier_prefix - computed: true, optional: true, required: false
  private _identifierPrefix?: string; 
  public get identifierPrefix() {
    return this.getStringAttribute('identifier_prefix');
  }
  public set identifierPrefix(value: string) {
    this._identifierPrefix = value;
  }
  public resetIdentifierPrefix() {
    this._identifierPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierPrefixInput() {
    return this._identifierPrefix;
  }

  // instance_class - computed: false, optional: false, required: true
  private _instanceClass?: string; 
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string) {
    this._instanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceClassInput() {
    return this._instanceClass;
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // monitoring_interval - computed: false, optional: true, required: false
  private _monitoringInterval?: number; 
  public get monitoringInterval() {
    return this.getNumberAttribute('monitoring_interval');
  }
  public set monitoringInterval(value: number) {
    this._monitoringInterval = value;
  }
  public resetMonitoringInterval() {
    this._monitoringInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringIntervalInput() {
    return this._monitoringInterval;
  }

  // monitoring_role_arn - computed: true, optional: true, required: false
  private _monitoringRoleArn?: string; 
  public get monitoringRoleArn() {
    return this.getStringAttribute('monitoring_role_arn');
  }
  public set monitoringRoleArn(value: string) {
    this._monitoringRoleArn = value;
  }
  public resetMonitoringRoleArn() {
    this._monitoringRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringRoleArnInput() {
    return this._monitoringRoleArn;
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // performance_insights_enabled - computed: true, optional: true, required: false
  private _performanceInsightsEnabled?: boolean | cdktf.IResolvable; 
  public get performanceInsightsEnabled() {
    return this.getBooleanAttribute('performance_insights_enabled');
  }
  public set performanceInsightsEnabled(value: boolean | cdktf.IResolvable) {
    this._performanceInsightsEnabled = value;
  }
  public resetPerformanceInsightsEnabled() {
    this._performanceInsightsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceInsightsEnabledInput() {
    return this._performanceInsightsEnabled;
  }

  // performance_insights_kms_key_id - computed: true, optional: true, required: false
  private _performanceInsightsKmsKeyId?: string; 
  public get performanceInsightsKmsKeyId() {
    return this.getStringAttribute('performance_insights_kms_key_id');
  }
  public set performanceInsightsKmsKeyId(value: string) {
    this._performanceInsightsKmsKeyId = value;
  }
  public resetPerformanceInsightsKmsKeyId() {
    this._performanceInsightsKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceInsightsKmsKeyIdInput() {
    return this._performanceInsightsKmsKeyId;
  }

  // performance_insights_retention_period - computed: true, optional: true, required: false
  private _performanceInsightsRetentionPeriod?: number; 
  public get performanceInsightsRetentionPeriod() {
    return this.getNumberAttribute('performance_insights_retention_period');
  }
  public set performanceInsightsRetentionPeriod(value: number) {
    this._performanceInsightsRetentionPeriod = value;
  }
  public resetPerformanceInsightsRetentionPeriod() {
    this._performanceInsightsRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceInsightsRetentionPeriodInput() {
    return this._performanceInsightsRetentionPeriod;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // preferred_backup_window - computed: true, optional: true, required: false
  private _preferredBackupWindow?: string; 
  public get preferredBackupWindow() {
    return this.getStringAttribute('preferred_backup_window');
  }
  public set preferredBackupWindow(value: string) {
    this._preferredBackupWindow = value;
  }
  public resetPreferredBackupWindow() {
    this._preferredBackupWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredBackupWindowInput() {
    return this._preferredBackupWindow;
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

  // promotion_tier - computed: false, optional: true, required: false
  private _promotionTier?: number; 
  public get promotionTier() {
    return this.getNumberAttribute('promotion_tier');
  }
  public set promotionTier(value: number) {
    this._promotionTier = value;
  }
  public resetPromotionTier() {
    this._promotionTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promotionTierInput() {
    return this._promotionTier;
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

  // storage_encrypted - computed: true, optional: false, required: false
  public get storageEncrypted() {
    return this.getBooleanAttribute('storage_encrypted');
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

  // writer - computed: true, optional: false, required: false
  public get writer() {
    return this.getBooleanAttribute('writer');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RdsClusterInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RdsClusterInstanceTimeouts) {
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
      apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
      auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      ca_cert_identifier: cdktf.stringToTerraform(this._caCertIdentifier),
      cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
      copy_tags_to_snapshot: cdktf.booleanToTerraform(this._copyTagsToSnapshot),
      custom_iam_instance_profile: cdktf.stringToTerraform(this._customIamInstanceProfile),
      db_parameter_group_name: cdktf.stringToTerraform(this._dbParameterGroupName),
      db_subnet_group_name: cdktf.stringToTerraform(this._dbSubnetGroupName),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      identifier_prefix: cdktf.stringToTerraform(this._identifierPrefix),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      monitoring_interval: cdktf.numberToTerraform(this._monitoringInterval),
      monitoring_role_arn: cdktf.stringToTerraform(this._monitoringRoleArn),
      performance_insights_enabled: cdktf.booleanToTerraform(this._performanceInsightsEnabled),
      performance_insights_kms_key_id: cdktf.stringToTerraform(this._performanceInsightsKmsKeyId),
      performance_insights_retention_period: cdktf.numberToTerraform(this._performanceInsightsRetentionPeriod),
      preferred_backup_window: cdktf.stringToTerraform(this._preferredBackupWindow),
      preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
      promotion_tier: cdktf.numberToTerraform(this._promotionTier),
      publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      timeouts: rdsClusterInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_immediately: {
        value: cdktf.booleanToHclTerraform(this._applyImmediately),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_minor_version_upgrade: {
        value: cdktf.booleanToHclTerraform(this._autoMinorVersionUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_cert_identifier: {
        value: cdktf.stringToHclTerraform(this._caCertIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_identifier: {
        value: cdktf.stringToHclTerraform(this._clusterIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      copy_tags_to_snapshot: {
        value: cdktf.booleanToHclTerraform(this._copyTagsToSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_iam_instance_profile: {
        value: cdktf.stringToHclTerraform(this._customIamInstanceProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_parameter_group_name: {
        value: cdktf.stringToHclTerraform(this._dbParameterGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_subnet_group_name: {
        value: cdktf.stringToHclTerraform(this._dbSubnetGroupName),
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
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_destroy: {
        value: cdktf.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier_prefix: {
        value: cdktf.stringToHclTerraform(this._identifierPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_class: {
        value: cdktf.stringToHclTerraform(this._instanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring_interval: {
        value: cdktf.numberToHclTerraform(this._monitoringInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitoring_role_arn: {
        value: cdktf.stringToHclTerraform(this._monitoringRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      performance_insights_enabled: {
        value: cdktf.booleanToHclTerraform(this._performanceInsightsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      performance_insights_kms_key_id: {
        value: cdktf.stringToHclTerraform(this._performanceInsightsKmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      performance_insights_retention_period: {
        value: cdktf.numberToHclTerraform(this._performanceInsightsRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preferred_backup_window: {
        value: cdktf.stringToHclTerraform(this._preferredBackupWindow),
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
      promotion_tier: {
        value: cdktf.numberToHclTerraform(this._promotionTier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      publicly_accessible: {
        value: cdktf.booleanToHclTerraform(this._publiclyAccessible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: rdsClusterInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RdsClusterInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
