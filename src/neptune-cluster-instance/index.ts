/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NeptuneClusterInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#apply_immediately NeptuneClusterInstance#apply_immediately}
  */
  readonly applyImmediately?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#auto_minor_version_upgrade NeptuneClusterInstance#auto_minor_version_upgrade}
  */
  readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#availability_zone NeptuneClusterInstance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#cluster_identifier NeptuneClusterInstance#cluster_identifier}
  */
  readonly clusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#engine NeptuneClusterInstance#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#engine_version NeptuneClusterInstance#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#id NeptuneClusterInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#identifier NeptuneClusterInstance#identifier}
  */
  readonly identifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#identifier_prefix NeptuneClusterInstance#identifier_prefix}
  */
  readonly identifierPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#instance_class NeptuneClusterInstance#instance_class}
  */
  readonly instanceClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#neptune_parameter_group_name NeptuneClusterInstance#neptune_parameter_group_name}
  */
  readonly neptuneParameterGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#neptune_subnet_group_name NeptuneClusterInstance#neptune_subnet_group_name}
  */
  readonly neptuneSubnetGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#port NeptuneClusterInstance#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#preferred_backup_window NeptuneClusterInstance#preferred_backup_window}
  */
  readonly preferredBackupWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#preferred_maintenance_window NeptuneClusterInstance#preferred_maintenance_window}
  */
  readonly preferredMaintenanceWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#promotion_tier NeptuneClusterInstance#promotion_tier}
  */
  readonly promotionTier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#publicly_accessible NeptuneClusterInstance#publicly_accessible}
  */
  readonly publiclyAccessible?: boolean | cdktf.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#region NeptuneClusterInstance#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#skip_final_snapshot NeptuneClusterInstance#skip_final_snapshot}
  */
  readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#tags NeptuneClusterInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#tags_all NeptuneClusterInstance#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#timeouts NeptuneClusterInstance#timeouts}
  */
  readonly timeouts?: NeptuneClusterInstanceTimeouts;
}
export interface NeptuneClusterInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#create NeptuneClusterInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#delete NeptuneClusterInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#update NeptuneClusterInstance#update}
  */
  readonly update?: string;
}

export function neptuneClusterInstanceTimeoutsToTerraform(struct?: NeptuneClusterInstanceTimeouts | cdktf.IResolvable): any {
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


export function neptuneClusterInstanceTimeoutsToHclTerraform(struct?: NeptuneClusterInstanceTimeouts | cdktf.IResolvable): any {
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

export class NeptuneClusterInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NeptuneClusterInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NeptuneClusterInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance aws_neptune_cluster_instance}
*/
export class NeptuneClusterInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_neptune_cluster_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NeptuneClusterInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NeptuneClusterInstance to import
  * @param importFromId The id of the existing NeptuneClusterInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NeptuneClusterInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_neptune_cluster_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/neptune_cluster_instance aws_neptune_cluster_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NeptuneClusterInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: NeptuneClusterInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_neptune_cluster_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.12.0',
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
    this._clusterIdentifier = config.clusterIdentifier;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._id = config.id;
    this._identifier = config.identifier;
    this._identifierPrefix = config.identifierPrefix;
    this._instanceClass = config.instanceClass;
    this._neptuneParameterGroupName = config.neptuneParameterGroupName;
    this._neptuneSubnetGroupName = config.neptuneSubnetGroupName;
    this._port = config.port;
    this._preferredBackupWindow = config.preferredBackupWindow;
    this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
    this._promotionTier = config.promotionTier;
    this._publiclyAccessible = config.publiclyAccessible;
    this._region = config.region;
    this._skipFinalSnapshot = config.skipFinalSnapshot;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

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

  // dbi_resource_id - computed: true, optional: false, required: false
  public get dbiResourceId() {
    return this.getStringAttribute('dbi_resource_id');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // engine - computed: false, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
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

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // neptune_parameter_group_name - computed: true, optional: true, required: false
  private _neptuneParameterGroupName?: string; 
  public get neptuneParameterGroupName() {
    return this.getStringAttribute('neptune_parameter_group_name');
  }
  public set neptuneParameterGroupName(value: string) {
    this._neptuneParameterGroupName = value;
  }
  public resetNeptuneParameterGroupName() {
    this._neptuneParameterGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neptuneParameterGroupNameInput() {
    return this._neptuneParameterGroupName;
  }

  // neptune_subnet_group_name - computed: true, optional: true, required: false
  private _neptuneSubnetGroupName?: string; 
  public get neptuneSubnetGroupName() {
    return this.getStringAttribute('neptune_subnet_group_name');
  }
  public set neptuneSubnetGroupName(value: string) {
    this._neptuneSubnetGroupName = value;
  }
  public resetNeptuneSubnetGroupName() {
    this._neptuneSubnetGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neptuneSubnetGroupNameInput() {
    return this._neptuneSubnetGroupName;
  }

  // port - computed: false, optional: true, required: false
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

  // publicly_accessible - computed: false, optional: true, required: false
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

  // skip_final_snapshot - computed: false, optional: true, required: false
  private _skipFinalSnapshot?: boolean | cdktf.IResolvable; 
  public get skipFinalSnapshot() {
    return this.getBooleanAttribute('skip_final_snapshot');
  }
  public set skipFinalSnapshot(value: boolean | cdktf.IResolvable) {
    this._skipFinalSnapshot = value;
  }
  public resetSkipFinalSnapshot() {
    this._skipFinalSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipFinalSnapshotInput() {
    return this._skipFinalSnapshot;
  }

  // storage_encrypted - computed: true, optional: false, required: false
  public get storageEncrypted() {
    return this.getBooleanAttribute('storage_encrypted');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
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
  private _timeouts = new NeptuneClusterInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NeptuneClusterInstanceTimeouts) {
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
      cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      identifier_prefix: cdktf.stringToTerraform(this._identifierPrefix),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      neptune_parameter_group_name: cdktf.stringToTerraform(this._neptuneParameterGroupName),
      neptune_subnet_group_name: cdktf.stringToTerraform(this._neptuneSubnetGroupName),
      port: cdktf.numberToTerraform(this._port),
      preferred_backup_window: cdktf.stringToTerraform(this._preferredBackupWindow),
      preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
      promotion_tier: cdktf.numberToTerraform(this._promotionTier),
      publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
      region: cdktf.stringToTerraform(this._region),
      skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      timeouts: neptuneClusterInstanceTimeoutsToTerraform(this._timeouts.internalValue),
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
      cluster_identifier: {
        value: cdktf.stringToHclTerraform(this._clusterIdentifier),
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
      neptune_parameter_group_name: {
        value: cdktf.stringToHclTerraform(this._neptuneParameterGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neptune_subnet_group_name: {
        value: cdktf.stringToHclTerraform(this._neptuneSubnetGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
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
      skip_final_snapshot: {
        value: cdktf.booleanToHclTerraform(this._skipFinalSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
        value: neptuneClusterInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NeptuneClusterInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
