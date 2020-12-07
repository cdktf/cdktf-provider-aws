// https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DocdbClusterInstanceConfig extends cdktf.TerraformMetaArguments {
  readonly applyImmediately?: boolean;
  readonly autoMinorVersionUpgrade?: boolean;
  readonly availabilityZone?: string;
  readonly caCertIdentifier?: string;
  readonly clusterIdentifier: string;
  readonly engine?: string;
  readonly identifier?: string;
  readonly identifierPrefix?: string;
  readonly instanceClass: string;
  readonly preferredMaintenanceWindow?: string;
  readonly promotionTier?: number;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: DocdbClusterInstanceTimeouts;
}
export interface DocdbClusterInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function docdbClusterInstanceTimeoutsToTerraform(struct?: DocdbClusterInstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DocdbClusterInstance extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DocdbClusterInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_docdb_cluster_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applyImmediately = config.applyImmediately;
    this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
    this._availabilityZone = config.availabilityZone;
    this._caCertIdentifier = config.caCertIdentifier;
    this._clusterIdentifier = config.clusterIdentifier;
    this._engine = config.engine;
    this._identifier = config.identifier;
    this._identifierPrefix = config.identifierPrefix;
    this._instanceClass = config.instanceClass;
    this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
    this._promotionTier = config.promotionTier;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_immediately - computed: true, optional: true, required: false
  private _applyImmediately?: boolean;
  public get applyImmediately() {
    return this.getBooleanAttribute('apply_immediately');
  }
  public set applyImmediately(value: boolean) {
    this._applyImmediately = value;
  }
  public resetApplyImmediately() {
    this._applyImmediately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyImmediatelyInput() {
    return this._applyImmediately
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_minor_version_upgrade - computed: false, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean;
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }
  public set autoMinorVersionUpgrade(value: boolean ) {
    this._autoMinorVersionUpgrade = value;
  }
  public resetAutoMinorVersionUpgrade() {
    this._autoMinorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMinorVersionUpgradeInput() {
    return this._autoMinorVersionUpgrade
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
    return this._availabilityZone
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
    return this._caCertIdentifier
  }

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier: string;
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier
  }

  // db_subnet_group_name - computed: true, optional: false, required: false
  public get dbSubnetGroupName() {
    return this.getStringAttribute('db_subnet_group_name');
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
  public set engine(value: string ) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._identifier
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
    return this._identifierPrefix
  }

  // instance_class - computed: false, optional: false, required: true
  private _instanceClass: string;
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string) {
    this._instanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceClassInput() {
    return this._instanceClass
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // preferred_backup_window - computed: true, optional: false, required: false
  public get preferredBackupWindow() {
    return this.getStringAttribute('preferred_backup_window');
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
    return this._preferredMaintenanceWindow
  }

  // promotion_tier - computed: false, optional: true, required: false
  private _promotionTier?: number;
  public get promotionTier() {
    return this.getNumberAttribute('promotion_tier');
  }
  public set promotionTier(value: number ) {
    this._promotionTier = value;
  }
  public resetPromotionTier() {
    this._promotionTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promotionTierInput() {
    return this._promotionTier
  }

  // publicly_accessible - computed: true, optional: false, required: false
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }

  // storage_encrypted - computed: true, optional: false, required: false
  public get storageEncrypted() {
    return this.getBooleanAttribute('storage_encrypted');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // writer - computed: true, optional: false, required: false
  public get writer() {
    return this.getBooleanAttribute('writer');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DocdbClusterInstanceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DocdbClusterInstanceTimeouts ) {
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
      apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
      auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      ca_cert_identifier: cdktf.stringToTerraform(this._caCertIdentifier),
      cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
      engine: cdktf.stringToTerraform(this._engine),
      identifier: cdktf.stringToTerraform(this._identifier),
      identifier_prefix: cdktf.stringToTerraform(this._identifierPrefix),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
      promotion_tier: cdktf.numberToTerraform(this._promotionTier),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: docdbClusterInstanceTimeoutsToTerraform(this._timeouts),
    };
  }
}
