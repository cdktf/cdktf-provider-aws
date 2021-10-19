// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Relational Database Service
*/
export namespace RDS {
  export interface DbClusterSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_cluster_snapshot.html#db_cluster_identifier DbClusterSnapshot#db_cluster_identifier}
    */
    readonly dbClusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_cluster_snapshot.html#db_cluster_snapshot_identifier DbClusterSnapshot#db_cluster_snapshot_identifier}
    */
    readonly dbClusterSnapshotIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_cluster_snapshot.html#tags DbClusterSnapshot#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_cluster_snapshot.html#tags_all DbClusterSnapshot#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_cluster_snapshot.html#timeouts DbClusterSnapshot#timeouts}
    */
    readonly timeouts?: DbClusterSnapshotTimeouts;
  }
  export interface DbClusterSnapshotTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_cluster_snapshot.html#create DbClusterSnapshot#create}
    */
    readonly create?: string;
  }

  function dbClusterSnapshotTimeoutsToTerraform(struct?: DbClusterSnapshotTimeoutsOutputReference | DbClusterSnapshotTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
    }
  }

  export class DbClusterSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
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
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_cluster_snapshot.html aws_db_cluster_snapshot}
  */
  export class DbClusterSnapshot extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_db_cluster_snapshot";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_cluster_snapshot.html aws_db_cluster_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbClusterSnapshotConfig
    */
    public constructor(scope: Construct, id: string, config: DbClusterSnapshotConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_db_cluster_snapshot',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._dbClusterIdentifier = config.dbClusterIdentifier;
      this._dbClusterSnapshotIdentifier = config.dbClusterSnapshotIdentifier;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allocated_storage - computed: true, optional: false, required: false
    public get allocatedStorage() {
      return this.getNumberAttribute('allocated_storage');
    }

    // availability_zones - computed: true, optional: false, required: false
    public get availabilityZones() {
      return this.getListAttribute('availability_zones');
    }

    // db_cluster_identifier - computed: false, optional: false, required: true
    private _dbClusterIdentifier?: string; 
    public get dbClusterIdentifier() {
      return this.getStringAttribute('db_cluster_identifier');
    }
    public set dbClusterIdentifier(value: string) {
      this._dbClusterIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dbClusterIdentifierInput() {
      return this._dbClusterIdentifier
    }

    // db_cluster_snapshot_arn - computed: true, optional: false, required: false
    public get dbClusterSnapshotArn() {
      return this.getStringAttribute('db_cluster_snapshot_arn');
    }

    // db_cluster_snapshot_identifier - computed: false, optional: false, required: true
    private _dbClusterSnapshotIdentifier?: string; 
    public get dbClusterSnapshotIdentifier() {
      return this.getStringAttribute('db_cluster_snapshot_identifier');
    }
    public set dbClusterSnapshotIdentifier(value: string) {
      this._dbClusterSnapshotIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dbClusterSnapshotIdentifierInput() {
      return this._dbClusterSnapshotIdentifier
    }

    // engine - computed: true, optional: false, required: false
    public get engine() {
      return this.getStringAttribute('engine');
    }

    // engine_version - computed: true, optional: false, required: false
    public get engineVersion() {
      return this.getStringAttribute('engine_version');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // license_model - computed: true, optional: false, required: false
    public get licenseModel() {
      return this.getStringAttribute('license_model');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
      return this.getNumberAttribute('port');
    }

    // snapshot_type - computed: true, optional: false, required: false
    public get snapshotType() {
      return this.getStringAttribute('snapshot_type');
    }

    // source_db_cluster_snapshot_arn - computed: true, optional: false, required: false
    public get sourceDbClusterSnapshotArn() {
      return this.getStringAttribute('source_db_cluster_snapshot_arn');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // storage_encrypted - computed: true, optional: false, required: false
    public get storageEncrypted() {
      return this.getBooleanAttribute('storage_encrypted') as any;
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
    private _timeouts?: DbClusterSnapshotTimeouts | undefined; 
    private __timeoutsOutput = new DbClusterSnapshotTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DbClusterSnapshotTimeouts | undefined) {
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
        db_cluster_identifier: cdktf.stringToTerraform(this._dbClusterIdentifier),
        db_cluster_snapshot_identifier: cdktf.stringToTerraform(this._dbClusterSnapshotIdentifier),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: dbClusterSnapshotTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DbEventSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#enabled DbEventSubscription#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#event_categories DbEventSubscription#event_categories}
    */
    readonly eventCategories?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#name DbEventSubscription#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#name_prefix DbEventSubscription#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#sns_topic DbEventSubscription#sns_topic}
    */
    readonly snsTopic: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#source_ids DbEventSubscription#source_ids}
    */
    readonly sourceIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#source_type DbEventSubscription#source_type}
    */
    readonly sourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#tags DbEventSubscription#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#tags_all DbEventSubscription#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#timeouts DbEventSubscription#timeouts}
    */
    readonly timeouts?: DbEventSubscriptionTimeouts;
  }
  export interface DbEventSubscriptionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#create DbEventSubscription#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#delete DbEventSubscription#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#update DbEventSubscription#update}
    */
    readonly update?: string;
  }

  function dbEventSubscriptionTimeoutsToTerraform(struct?: DbEventSubscriptionTimeoutsOutputReference | DbEventSubscriptionTimeouts): any {
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

  export class DbEventSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html aws_db_event_subscription}
  */
  export class DbEventSubscription extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_db_event_subscription";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html aws_db_event_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbEventSubscriptionConfig
    */
    public constructor(scope: Construct, id: string, config: DbEventSubscriptionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_db_event_subscription',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._enabled = config.enabled;
      this._eventCategories = config.eventCategories;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._snsTopic = config.snsTopic;
      this._sourceIds = config.sourceIds;
      this._sourceType = config.sourceType;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // customer_aws_id - computed: true, optional: false, required: false
    public get customerAwsId() {
      return this.getStringAttribute('customer_aws_id');
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

    // event_categories - computed: false, optional: true, required: false
    private _eventCategories?: string[] | undefined; 
    public get eventCategories() {
      return this.getListAttribute('event_categories');
    }
    public set eventCategories(value: string[] | undefined) {
      this._eventCategories = value;
    }
    public resetEventCategories() {
      this._eventCategories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventCategoriesInput() {
      return this._eventCategories
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: true, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // sns_topic - computed: false, optional: false, required: true
    private _snsTopic?: string; 
    public get snsTopic() {
      return this.getStringAttribute('sns_topic');
    }
    public set snsTopic(value: string) {
      this._snsTopic = value;
    }
    // Temporarily expose input value. Use with caution.
    public get snsTopicInput() {
      return this._snsTopic
    }

    // source_ids - computed: false, optional: true, required: false
    private _sourceIds?: string[] | undefined; 
    public get sourceIds() {
      return this.getListAttribute('source_ids');
    }
    public set sourceIds(value: string[] | undefined) {
      this._sourceIds = value;
    }
    public resetSourceIds() {
      this._sourceIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceIdsInput() {
      return this._sourceIds
    }

    // source_type - computed: false, optional: true, required: false
    private _sourceType?: string | undefined; 
    public get sourceType() {
      return this.getStringAttribute('source_type');
    }
    public set sourceType(value: string | undefined) {
      this._sourceType = value;
    }
    public resetSourceType() {
      this._sourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceTypeInput() {
      return this._sourceType
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

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DbEventSubscriptionTimeouts | undefined; 
    private __timeoutsOutput = new DbEventSubscriptionTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DbEventSubscriptionTimeouts | undefined) {
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
        enabled: cdktf.booleanToTerraform(this._enabled),
        event_categories: cdktf.listMapper(cdktf.stringToTerraform)(this._eventCategories),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        sns_topic: cdktf.stringToTerraform(this._snsTopic),
        source_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._sourceIds),
        source_type: cdktf.stringToTerraform(this._sourceType),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: dbEventSubscriptionTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DbInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#allocated_storage DbInstance#allocated_storage}
    */
    readonly allocatedStorage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#allow_major_version_upgrade DbInstance#allow_major_version_upgrade}
    */
    readonly allowMajorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#apply_immediately DbInstance#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#auto_minor_version_upgrade DbInstance#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#availability_zone DbInstance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#backup_retention_period DbInstance#backup_retention_period}
    */
    readonly backupRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#backup_window DbInstance#backup_window}
    */
    readonly backupWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#ca_cert_identifier DbInstance#ca_cert_identifier}
    */
    readonly caCertIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#character_set_name DbInstance#character_set_name}
    */
    readonly characterSetName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#copy_tags_to_snapshot DbInstance#copy_tags_to_snapshot}
    */
    readonly copyTagsToSnapshot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#customer_owned_ip_enabled DbInstance#customer_owned_ip_enabled}
    */
    readonly customerOwnedIpEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#db_subnet_group_name DbInstance#db_subnet_group_name}
    */
    readonly dbSubnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#delete_automated_backups DbInstance#delete_automated_backups}
    */
    readonly deleteAutomatedBackups?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#deletion_protection DbInstance#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#domain DbInstance#domain}
    */
    readonly domain?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#domain_iam_role_name DbInstance#domain_iam_role_name}
    */
    readonly domainIamRoleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#enabled_cloudwatch_logs_exports DbInstance#enabled_cloudwatch_logs_exports}
    */
    readonly enabledCloudwatchLogsExports?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#engine DbInstance#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#engine_version DbInstance#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#final_snapshot_identifier DbInstance#final_snapshot_identifier}
    */
    readonly finalSnapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#iam_database_authentication_enabled DbInstance#iam_database_authentication_enabled}
    */
    readonly iamDatabaseAuthenticationEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#identifier DbInstance#identifier}
    */
    readonly identifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#identifier_prefix DbInstance#identifier_prefix}
    */
    readonly identifierPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#instance_class DbInstance#instance_class}
    */
    readonly instanceClass: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#iops DbInstance#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#kms_key_id DbInstance#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#license_model DbInstance#license_model}
    */
    readonly licenseModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#maintenance_window DbInstance#maintenance_window}
    */
    readonly maintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#max_allocated_storage DbInstance#max_allocated_storage}
    */
    readonly maxAllocatedStorage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#monitoring_interval DbInstance#monitoring_interval}
    */
    readonly monitoringInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#monitoring_role_arn DbInstance#monitoring_role_arn}
    */
    readonly monitoringRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#multi_az DbInstance#multi_az}
    */
    readonly multiAz?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#name DbInstance#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#nchar_character_set_name DbInstance#nchar_character_set_name}
    */
    readonly ncharCharacterSetName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#option_group_name DbInstance#option_group_name}
    */
    readonly optionGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#parameter_group_name DbInstance#parameter_group_name}
    */
    readonly parameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#password DbInstance#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#performance_insights_enabled DbInstance#performance_insights_enabled}
    */
    readonly performanceInsightsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#performance_insights_kms_key_id DbInstance#performance_insights_kms_key_id}
    */
    readonly performanceInsightsKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#performance_insights_retention_period DbInstance#performance_insights_retention_period}
    */
    readonly performanceInsightsRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#port DbInstance#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#publicly_accessible DbInstance#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#replica_mode DbInstance#replica_mode}
    */
    readonly replicaMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#replicate_source_db DbInstance#replicate_source_db}
    */
    readonly replicateSourceDb?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#security_group_names DbInstance#security_group_names}
    */
    readonly securityGroupNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#skip_final_snapshot DbInstance#skip_final_snapshot}
    */
    readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#snapshot_identifier DbInstance#snapshot_identifier}
    */
    readonly snapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#storage_encrypted DbInstance#storage_encrypted}
    */
    readonly storageEncrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#storage_type DbInstance#storage_type}
    */
    readonly storageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#tags DbInstance#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#tags_all DbInstance#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#timezone DbInstance#timezone}
    */
    readonly timezone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#username DbInstance#username}
    */
    readonly username?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#vpc_security_group_ids DbInstance#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * restore_to_point_in_time block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#restore_to_point_in_time DbInstance#restore_to_point_in_time}
    */
    readonly restoreToPointInTime?: DbInstanceRestoreToPointInTime;
    /**
    * s3_import block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#s3_import DbInstance#s3_import}
    */
    readonly s3Import?: DbInstanceS3Import;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#timeouts DbInstance#timeouts}
    */
    readonly timeouts?: DbInstanceTimeouts;
  }
  export interface DbInstanceRestoreToPointInTime {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#restore_time DbInstance#restore_time}
    */
    readonly restoreTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#source_db_instance_identifier DbInstance#source_db_instance_identifier}
    */
    readonly sourceDbInstanceIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#source_dbi_resource_id DbInstance#source_dbi_resource_id}
    */
    readonly sourceDbiResourceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#use_latest_restorable_time DbInstance#use_latest_restorable_time}
    */
    readonly useLatestRestorableTime?: boolean | cdktf.IResolvable;
  }

  function dbInstanceRestoreToPointInTimeToTerraform(struct?: DbInstanceRestoreToPointInTimeOutputReference | DbInstanceRestoreToPointInTime): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      restore_time: cdktf.stringToTerraform(struct!.restoreTime),
      source_db_instance_identifier: cdktf.stringToTerraform(struct!.sourceDbInstanceIdentifier),
      source_dbi_resource_id: cdktf.stringToTerraform(struct!.sourceDbiResourceId),
      use_latest_restorable_time: cdktf.booleanToTerraform(struct!.useLatestRestorableTime),
    }
  }

  export class DbInstanceRestoreToPointInTimeOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // restore_time - computed: false, optional: true, required: false
    private _restoreTime?: string | undefined; 
    public get restoreTime() {
      return this.getStringAttribute('restore_time');
    }
    public set restoreTime(value: string | undefined) {
      this._restoreTime = value;
    }
    public resetRestoreTime() {
      this._restoreTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restoreTimeInput() {
      return this._restoreTime
    }

    // source_db_instance_identifier - computed: false, optional: true, required: false
    private _sourceDbInstanceIdentifier?: string | undefined; 
    public get sourceDbInstanceIdentifier() {
      return this.getStringAttribute('source_db_instance_identifier');
    }
    public set sourceDbInstanceIdentifier(value: string | undefined) {
      this._sourceDbInstanceIdentifier = value;
    }
    public resetSourceDbInstanceIdentifier() {
      this._sourceDbInstanceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceDbInstanceIdentifierInput() {
      return this._sourceDbInstanceIdentifier
    }

    // source_dbi_resource_id - computed: false, optional: true, required: false
    private _sourceDbiResourceId?: string | undefined; 
    public get sourceDbiResourceId() {
      return this.getStringAttribute('source_dbi_resource_id');
    }
    public set sourceDbiResourceId(value: string | undefined) {
      this._sourceDbiResourceId = value;
    }
    public resetSourceDbiResourceId() {
      this._sourceDbiResourceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceDbiResourceIdInput() {
      return this._sourceDbiResourceId
    }

    // use_latest_restorable_time - computed: false, optional: true, required: false
    private _useLatestRestorableTime?: boolean | cdktf.IResolvable | undefined; 
    public get useLatestRestorableTime() {
      return this.getBooleanAttribute('use_latest_restorable_time') as any;
    }
    public set useLatestRestorableTime(value: boolean | cdktf.IResolvable | undefined) {
      this._useLatestRestorableTime = value;
    }
    public resetUseLatestRestorableTime() {
      this._useLatestRestorableTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useLatestRestorableTimeInput() {
      return this._useLatestRestorableTime
    }
  }
  export interface DbInstanceS3Import {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#bucket_name DbInstance#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#bucket_prefix DbInstance#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#ingestion_role DbInstance#ingestion_role}
    */
    readonly ingestionRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#source_engine DbInstance#source_engine}
    */
    readonly sourceEngine: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#source_engine_version DbInstance#source_engine_version}
    */
    readonly sourceEngineVersion: string;
  }

  function dbInstanceS3ImportToTerraform(struct?: DbInstanceS3ImportOutputReference | DbInstanceS3Import): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket_name: cdktf.stringToTerraform(struct!.bucketName),
      bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
      ingestion_role: cdktf.stringToTerraform(struct!.ingestionRole),
      source_engine: cdktf.stringToTerraform(struct!.sourceEngine),
      source_engine_version: cdktf.stringToTerraform(struct!.sourceEngineVersion),
    }
  }

  export class DbInstanceS3ImportOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket_name - computed: false, optional: false, required: true
    private _bucketName?: string; 
    public get bucketName() {
      return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
      this._bucketName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
      return this._bucketName
    }

    // bucket_prefix - computed: false, optional: true, required: false
    private _bucketPrefix?: string | undefined; 
    public get bucketPrefix() {
      return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string | undefined) {
      this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
      this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
      return this._bucketPrefix
    }

    // ingestion_role - computed: false, optional: false, required: true
    private _ingestionRole?: string; 
    public get ingestionRole() {
      return this.getStringAttribute('ingestion_role');
    }
    public set ingestionRole(value: string) {
      this._ingestionRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ingestionRoleInput() {
      return this._ingestionRole
    }

    // source_engine - computed: false, optional: false, required: true
    private _sourceEngine?: string; 
    public get sourceEngine() {
      return this.getStringAttribute('source_engine');
    }
    public set sourceEngine(value: string) {
      this._sourceEngine = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceEngineInput() {
      return this._sourceEngine
    }

    // source_engine_version - computed: false, optional: false, required: true
    private _sourceEngineVersion?: string; 
    public get sourceEngineVersion() {
      return this.getStringAttribute('source_engine_version');
    }
    public set sourceEngineVersion(value: string) {
      this._sourceEngineVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceEngineVersionInput() {
      return this._sourceEngineVersion
    }
  }
  export interface DbInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#create DbInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#delete DbInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#update DbInstance#update}
    */
    readonly update?: string;
  }

  function dbInstanceTimeoutsToTerraform(struct?: DbInstanceTimeoutsOutputReference | DbInstanceTimeouts): any {
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

  export class DbInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html aws_db_instance}
  */
  export class DbInstance extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_db_instance";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html aws_db_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbInstanceConfig
    */
    public constructor(scope: Construct, id: string, config: DbInstanceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_db_instance',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._allocatedStorage = config.allocatedStorage;
      this._allowMajorVersionUpgrade = config.allowMajorVersionUpgrade;
      this._applyImmediately = config.applyImmediately;
      this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
      this._availabilityZone = config.availabilityZone;
      this._backupRetentionPeriod = config.backupRetentionPeriod;
      this._backupWindow = config.backupWindow;
      this._caCertIdentifier = config.caCertIdentifier;
      this._characterSetName = config.characterSetName;
      this._copyTagsToSnapshot = config.copyTagsToSnapshot;
      this._customerOwnedIpEnabled = config.customerOwnedIpEnabled;
      this._dbSubnetGroupName = config.dbSubnetGroupName;
      this._deleteAutomatedBackups = config.deleteAutomatedBackups;
      this._deletionProtection = config.deletionProtection;
      this._domain = config.domain;
      this._domainIamRoleName = config.domainIamRoleName;
      this._enabledCloudwatchLogsExports = config.enabledCloudwatchLogsExports;
      this._engine = config.engine;
      this._engineVersion = config.engineVersion;
      this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
      this._iamDatabaseAuthenticationEnabled = config.iamDatabaseAuthenticationEnabled;
      this._identifier = config.identifier;
      this._identifierPrefix = config.identifierPrefix;
      this._instanceClass = config.instanceClass;
      this._iops = config.iops;
      this._kmsKeyId = config.kmsKeyId;
      this._licenseModel = config.licenseModel;
      this._maintenanceWindow = config.maintenanceWindow;
      this._maxAllocatedStorage = config.maxAllocatedStorage;
      this._monitoringInterval = config.monitoringInterval;
      this._monitoringRoleArn = config.monitoringRoleArn;
      this._multiAz = config.multiAz;
      this._name = config.name;
      this._ncharCharacterSetName = config.ncharCharacterSetName;
      this._optionGroupName = config.optionGroupName;
      this._parameterGroupName = config.parameterGroupName;
      this._password = config.password;
      this._performanceInsightsEnabled = config.performanceInsightsEnabled;
      this._performanceInsightsKmsKeyId = config.performanceInsightsKmsKeyId;
      this._performanceInsightsRetentionPeriod = config.performanceInsightsRetentionPeriod;
      this._port = config.port;
      this._publiclyAccessible = config.publiclyAccessible;
      this._replicaMode = config.replicaMode;
      this._replicateSourceDb = config.replicateSourceDb;
      this._securityGroupNames = config.securityGroupNames;
      this._skipFinalSnapshot = config.skipFinalSnapshot;
      this._snapshotIdentifier = config.snapshotIdentifier;
      this._storageEncrypted = config.storageEncrypted;
      this._storageType = config.storageType;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timezone = config.timezone;
      this._username = config.username;
      this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
      this._restoreToPointInTime = config.restoreToPointInTime;
      this._s3Import = config.s3Import;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // address - computed: true, optional: false, required: false
    public get address() {
      return this.getStringAttribute('address');
    }

    // allocated_storage - computed: true, optional: true, required: false
    private _allocatedStorage?: number | undefined; 
    public get allocatedStorage() {
      return this.getNumberAttribute('allocated_storage');
    }
    public set allocatedStorage(value: number | undefined) {
      this._allocatedStorage = value;
    }
    public resetAllocatedStorage() {
      this._allocatedStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocatedStorageInput() {
      return this._allocatedStorage
    }

    // allow_major_version_upgrade - computed: false, optional: true, required: false
    private _allowMajorVersionUpgrade?: boolean | cdktf.IResolvable | undefined; 
    public get allowMajorVersionUpgrade() {
      return this.getBooleanAttribute('allow_major_version_upgrade') as any;
    }
    public set allowMajorVersionUpgrade(value: boolean | cdktf.IResolvable | undefined) {
      this._allowMajorVersionUpgrade = value;
    }
    public resetAllowMajorVersionUpgrade() {
      this._allowMajorVersionUpgrade = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowMajorVersionUpgradeInput() {
      return this._allowMajorVersionUpgrade
    }

    // apply_immediately - computed: true, optional: true, required: false
    private _applyImmediately?: boolean | cdktf.IResolvable | undefined; 
    public get applyImmediately() {
      return this.getBooleanAttribute('apply_immediately') as any;
    }
    public set applyImmediately(value: boolean | cdktf.IResolvable | undefined) {
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
    private _autoMinorVersionUpgrade?: boolean | cdktf.IResolvable | undefined; 
    public get autoMinorVersionUpgrade() {
      return this.getBooleanAttribute('auto_minor_version_upgrade') as any;
    }
    public set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable | undefined) {
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

    // backup_retention_period - computed: true, optional: true, required: false
    private _backupRetentionPeriod?: number | undefined; 
    public get backupRetentionPeriod() {
      return this.getNumberAttribute('backup_retention_period');
    }
    public set backupRetentionPeriod(value: number | undefined) {
      this._backupRetentionPeriod = value;
    }
    public resetBackupRetentionPeriod() {
      this._backupRetentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backupRetentionPeriodInput() {
      return this._backupRetentionPeriod
    }

    // backup_window - computed: true, optional: true, required: false
    private _backupWindow?: string | undefined; 
    public get backupWindow() {
      return this.getStringAttribute('backup_window');
    }
    public set backupWindow(value: string | undefined) {
      this._backupWindow = value;
    }
    public resetBackupWindow() {
      this._backupWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backupWindowInput() {
      return this._backupWindow
    }

    // ca_cert_identifier - computed: true, optional: true, required: false
    private _caCertIdentifier?: string | undefined; 
    public get caCertIdentifier() {
      return this.getStringAttribute('ca_cert_identifier');
    }
    public set caCertIdentifier(value: string | undefined) {
      this._caCertIdentifier = value;
    }
    public resetCaCertIdentifier() {
      this._caCertIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caCertIdentifierInput() {
      return this._caCertIdentifier
    }

    // character_set_name - computed: true, optional: true, required: false
    private _characterSetName?: string | undefined; 
    public get characterSetName() {
      return this.getStringAttribute('character_set_name');
    }
    public set characterSetName(value: string | undefined) {
      this._characterSetName = value;
    }
    public resetCharacterSetName() {
      this._characterSetName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get characterSetNameInput() {
      return this._characterSetName
    }

    // copy_tags_to_snapshot - computed: false, optional: true, required: false
    private _copyTagsToSnapshot?: boolean | cdktf.IResolvable | undefined; 
    public get copyTagsToSnapshot() {
      return this.getBooleanAttribute('copy_tags_to_snapshot') as any;
    }
    public set copyTagsToSnapshot(value: boolean | cdktf.IResolvable | undefined) {
      this._copyTagsToSnapshot = value;
    }
    public resetCopyTagsToSnapshot() {
      this._copyTagsToSnapshot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyTagsToSnapshotInput() {
      return this._copyTagsToSnapshot
    }

    // customer_owned_ip_enabled - computed: false, optional: true, required: false
    private _customerOwnedIpEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get customerOwnedIpEnabled() {
      return this.getBooleanAttribute('customer_owned_ip_enabled') as any;
    }
    public set customerOwnedIpEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._customerOwnedIpEnabled = value;
    }
    public resetCustomerOwnedIpEnabled() {
      this._customerOwnedIpEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerOwnedIpEnabledInput() {
      return this._customerOwnedIpEnabled
    }

    // db_subnet_group_name - computed: true, optional: true, required: false
    private _dbSubnetGroupName?: string | undefined; 
    public get dbSubnetGroupName() {
      return this.getStringAttribute('db_subnet_group_name');
    }
    public set dbSubnetGroupName(value: string | undefined) {
      this._dbSubnetGroupName = value;
    }
    public resetDbSubnetGroupName() {
      this._dbSubnetGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbSubnetGroupNameInput() {
      return this._dbSubnetGroupName
    }

    // delete_automated_backups - computed: false, optional: true, required: false
    private _deleteAutomatedBackups?: boolean | cdktf.IResolvable | undefined; 
    public get deleteAutomatedBackups() {
      return this.getBooleanAttribute('delete_automated_backups') as any;
    }
    public set deleteAutomatedBackups(value: boolean | cdktf.IResolvable | undefined) {
      this._deleteAutomatedBackups = value;
    }
    public resetDeleteAutomatedBackups() {
      this._deleteAutomatedBackups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteAutomatedBackupsInput() {
      return this._deleteAutomatedBackups
    }

    // deletion_protection - computed: false, optional: true, required: false
    private _deletionProtection?: boolean | cdktf.IResolvable | undefined; 
    public get deletionProtection() {
      return this.getBooleanAttribute('deletion_protection') as any;
    }
    public set deletionProtection(value: boolean | cdktf.IResolvable | undefined) {
      this._deletionProtection = value;
    }
    public resetDeletionProtection() {
      this._deletionProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionInput() {
      return this._deletionProtection
    }

    // domain - computed: false, optional: true, required: false
    private _domain?: string | undefined; 
    public get domain() {
      return this.getStringAttribute('domain');
    }
    public set domain(value: string | undefined) {
      this._domain = value;
    }
    public resetDomain() {
      this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
      return this._domain
    }

    // domain_iam_role_name - computed: false, optional: true, required: false
    private _domainIamRoleName?: string | undefined; 
    public get domainIamRoleName() {
      return this.getStringAttribute('domain_iam_role_name');
    }
    public set domainIamRoleName(value: string | undefined) {
      this._domainIamRoleName = value;
    }
    public resetDomainIamRoleName() {
      this._domainIamRoleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainIamRoleNameInput() {
      return this._domainIamRoleName
    }

    // enabled_cloudwatch_logs_exports - computed: false, optional: true, required: false
    private _enabledCloudwatchLogsExports?: string[] | undefined; 
    public get enabledCloudwatchLogsExports() {
      return this.getListAttribute('enabled_cloudwatch_logs_exports');
    }
    public set enabledCloudwatchLogsExports(value: string[] | undefined) {
      this._enabledCloudwatchLogsExports = value;
    }
    public resetEnabledCloudwatchLogsExports() {
      this._enabledCloudwatchLogsExports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledCloudwatchLogsExportsInput() {
      return this._enabledCloudwatchLogsExports
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }

    // engine - computed: true, optional: true, required: false
    private _engine?: string | undefined; 
    public get engine() {
      return this.getStringAttribute('engine');
    }
    public set engine(value: string | undefined) {
      this._engine = value;
    }
    public resetEngine() {
      this._engine = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineInput() {
      return this._engine
    }

    // engine_version - computed: true, optional: true, required: false
    private _engineVersion?: string | undefined; 
    public get engineVersion() {
      return this.getStringAttribute('engine_version');
    }
    public set engineVersion(value: string | undefined) {
      this._engineVersion = value;
    }
    public resetEngineVersion() {
      this._engineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineVersionInput() {
      return this._engineVersion
    }

    // engine_version_actual - computed: true, optional: false, required: false
    public get engineVersionActual() {
      return this.getStringAttribute('engine_version_actual');
    }

    // final_snapshot_identifier - computed: false, optional: true, required: false
    private _finalSnapshotIdentifier?: string | undefined; 
    public get finalSnapshotIdentifier() {
      return this.getStringAttribute('final_snapshot_identifier');
    }
    public set finalSnapshotIdentifier(value: string | undefined) {
      this._finalSnapshotIdentifier = value;
    }
    public resetFinalSnapshotIdentifier() {
      this._finalSnapshotIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get finalSnapshotIdentifierInput() {
      return this._finalSnapshotIdentifier
    }

    // hosted_zone_id - computed: true, optional: false, required: false
    public get hostedZoneId() {
      return this.getStringAttribute('hosted_zone_id');
    }

    // iam_database_authentication_enabled - computed: false, optional: true, required: false
    private _iamDatabaseAuthenticationEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get iamDatabaseAuthenticationEnabled() {
      return this.getBooleanAttribute('iam_database_authentication_enabled') as any;
    }
    public set iamDatabaseAuthenticationEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._iamDatabaseAuthenticationEnabled = value;
    }
    public resetIamDatabaseAuthenticationEnabled() {
      this._iamDatabaseAuthenticationEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamDatabaseAuthenticationEnabledInput() {
      return this._iamDatabaseAuthenticationEnabled
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // identifier - computed: true, optional: true, required: false
    private _identifier?: string | undefined; 
    public get identifier() {
      return this.getStringAttribute('identifier');
    }
    public set identifier(value: string | undefined) {
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
    private _identifierPrefix?: string | undefined; 
    public get identifierPrefix() {
      return this.getStringAttribute('identifier_prefix');
    }
    public set identifierPrefix(value: string | undefined) {
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
    private _instanceClass?: string; 
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

    // iops - computed: false, optional: true, required: false
    private _iops?: number | undefined; 
    public get iops() {
      return this.getNumberAttribute('iops');
    }
    public set iops(value: number | undefined) {
      this._iops = value;
    }
    public resetIops() {
      this._iops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iopsInput() {
      return this._iops
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // latest_restorable_time - computed: true, optional: false, required: false
    public get latestRestorableTime() {
      return this.getStringAttribute('latest_restorable_time');
    }

    // license_model - computed: true, optional: true, required: false
    private _licenseModel?: string | undefined; 
    public get licenseModel() {
      return this.getStringAttribute('license_model');
    }
    public set licenseModel(value: string | undefined) {
      this._licenseModel = value;
    }
    public resetLicenseModel() {
      this._licenseModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseModelInput() {
      return this._licenseModel
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

    // max_allocated_storage - computed: false, optional: true, required: false
    private _maxAllocatedStorage?: number | undefined; 
    public get maxAllocatedStorage() {
      return this.getNumberAttribute('max_allocated_storage');
    }
    public set maxAllocatedStorage(value: number | undefined) {
      this._maxAllocatedStorage = value;
    }
    public resetMaxAllocatedStorage() {
      this._maxAllocatedStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxAllocatedStorageInput() {
      return this._maxAllocatedStorage
    }

    // monitoring_interval - computed: false, optional: true, required: false
    private _monitoringInterval?: number | undefined; 
    public get monitoringInterval() {
      return this.getNumberAttribute('monitoring_interval');
    }
    public set monitoringInterval(value: number | undefined) {
      this._monitoringInterval = value;
    }
    public resetMonitoringInterval() {
      this._monitoringInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringIntervalInput() {
      return this._monitoringInterval
    }

    // monitoring_role_arn - computed: true, optional: true, required: false
    private _monitoringRoleArn?: string | undefined; 
    public get monitoringRoleArn() {
      return this.getStringAttribute('monitoring_role_arn');
    }
    public set monitoringRoleArn(value: string | undefined) {
      this._monitoringRoleArn = value;
    }
    public resetMonitoringRoleArn() {
      this._monitoringRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringRoleArnInput() {
      return this._monitoringRoleArn
    }

    // multi_az - computed: true, optional: true, required: false
    private _multiAz?: boolean | cdktf.IResolvable | undefined; 
    public get multiAz() {
      return this.getBooleanAttribute('multi_az') as any;
    }
    public set multiAz(value: boolean | cdktf.IResolvable | undefined) {
      this._multiAz = value;
    }
    public resetMultiAz() {
      this._multiAz = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiAzInput() {
      return this._multiAz
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // nchar_character_set_name - computed: true, optional: true, required: false
    private _ncharCharacterSetName?: string | undefined; 
    public get ncharCharacterSetName() {
      return this.getStringAttribute('nchar_character_set_name');
    }
    public set ncharCharacterSetName(value: string | undefined) {
      this._ncharCharacterSetName = value;
    }
    public resetNcharCharacterSetName() {
      this._ncharCharacterSetName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ncharCharacterSetNameInput() {
      return this._ncharCharacterSetName
    }

    // option_group_name - computed: true, optional: true, required: false
    private _optionGroupName?: string | undefined; 
    public get optionGroupName() {
      return this.getStringAttribute('option_group_name');
    }
    public set optionGroupName(value: string | undefined) {
      this._optionGroupName = value;
    }
    public resetOptionGroupName() {
      this._optionGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionGroupNameInput() {
      return this._optionGroupName
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

    // password - computed: false, optional: true, required: false
    private _password?: string | undefined; 
    public get password() {
      return this.getStringAttribute('password');
    }
    public set password(value: string | undefined) {
      this._password = value;
    }
    public resetPassword() {
      this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
      return this._password
    }

    // performance_insights_enabled - computed: false, optional: true, required: false
    private _performanceInsightsEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get performanceInsightsEnabled() {
      return this.getBooleanAttribute('performance_insights_enabled') as any;
    }
    public set performanceInsightsEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._performanceInsightsEnabled = value;
    }
    public resetPerformanceInsightsEnabled() {
      this._performanceInsightsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get performanceInsightsEnabledInput() {
      return this._performanceInsightsEnabled
    }

    // performance_insights_kms_key_id - computed: true, optional: true, required: false
    private _performanceInsightsKmsKeyId?: string | undefined; 
    public get performanceInsightsKmsKeyId() {
      return this.getStringAttribute('performance_insights_kms_key_id');
    }
    public set performanceInsightsKmsKeyId(value: string | undefined) {
      this._performanceInsightsKmsKeyId = value;
    }
    public resetPerformanceInsightsKmsKeyId() {
      this._performanceInsightsKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get performanceInsightsKmsKeyIdInput() {
      return this._performanceInsightsKmsKeyId
    }

    // performance_insights_retention_period - computed: true, optional: true, required: false
    private _performanceInsightsRetentionPeriod?: number | undefined; 
    public get performanceInsightsRetentionPeriod() {
      return this.getNumberAttribute('performance_insights_retention_period');
    }
    public set performanceInsightsRetentionPeriod(value: number | undefined) {
      this._performanceInsightsRetentionPeriod = value;
    }
    public resetPerformanceInsightsRetentionPeriod() {
      this._performanceInsightsRetentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get performanceInsightsRetentionPeriodInput() {
      return this._performanceInsightsRetentionPeriod
    }

    // port - computed: true, optional: true, required: false
    private _port?: number | undefined; 
    public get port() {
      return this.getNumberAttribute('port');
    }
    public set port(value: number | undefined) {
      this._port = value;
    }
    public resetPort() {
      this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
      return this._port
    }

    // publicly_accessible - computed: false, optional: true, required: false
    private _publiclyAccessible?: boolean | cdktf.IResolvable | undefined; 
    public get publiclyAccessible() {
      return this.getBooleanAttribute('publicly_accessible') as any;
    }
    public set publiclyAccessible(value: boolean | cdktf.IResolvable | undefined) {
      this._publiclyAccessible = value;
    }
    public resetPubliclyAccessible() {
      this._publiclyAccessible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publiclyAccessibleInput() {
      return this._publiclyAccessible
    }

    // replica_mode - computed: false, optional: true, required: false
    private _replicaMode?: string | undefined; 
    public get replicaMode() {
      return this.getStringAttribute('replica_mode');
    }
    public set replicaMode(value: string | undefined) {
      this._replicaMode = value;
    }
    public resetReplicaMode() {
      this._replicaMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicaModeInput() {
      return this._replicaMode
    }

    // replicas - computed: true, optional: false, required: false
    public get replicas() {
      return this.getListAttribute('replicas');
    }

    // replicate_source_db - computed: false, optional: true, required: false
    private _replicateSourceDb?: string | undefined; 
    public get replicateSourceDb() {
      return this.getStringAttribute('replicate_source_db');
    }
    public set replicateSourceDb(value: string | undefined) {
      this._replicateSourceDb = value;
    }
    public resetReplicateSourceDb() {
      this._replicateSourceDb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicateSourceDbInput() {
      return this._replicateSourceDb
    }

    // resource_id - computed: true, optional: false, required: false
    public get resourceId() {
      return this.getStringAttribute('resource_id');
    }

    // security_group_names - computed: false, optional: true, required: false
    private _securityGroupNames?: string[] | undefined; 
    public get securityGroupNames() {
      return this.getListAttribute('security_group_names');
    }
    public set securityGroupNames(value: string[] | undefined) {
      this._securityGroupNames = value;
    }
    public resetSecurityGroupNames() {
      this._securityGroupNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupNamesInput() {
      return this._securityGroupNames
    }

    // skip_final_snapshot - computed: false, optional: true, required: false
    private _skipFinalSnapshot?: boolean | cdktf.IResolvable | undefined; 
    public get skipFinalSnapshot() {
      return this.getBooleanAttribute('skip_final_snapshot') as any;
    }
    public set skipFinalSnapshot(value: boolean | cdktf.IResolvable | undefined) {
      this._skipFinalSnapshot = value;
    }
    public resetSkipFinalSnapshot() {
      this._skipFinalSnapshot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skipFinalSnapshotInput() {
      return this._skipFinalSnapshot
    }

    // snapshot_identifier - computed: true, optional: true, required: false
    private _snapshotIdentifier?: string | undefined; 
    public get snapshotIdentifier() {
      return this.getStringAttribute('snapshot_identifier');
    }
    public set snapshotIdentifier(value: string | undefined) {
      this._snapshotIdentifier = value;
    }
    public resetSnapshotIdentifier() {
      this._snapshotIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotIdentifierInput() {
      return this._snapshotIdentifier
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // storage_encrypted - computed: false, optional: true, required: false
    private _storageEncrypted?: boolean | cdktf.IResolvable | undefined; 
    public get storageEncrypted() {
      return this.getBooleanAttribute('storage_encrypted') as any;
    }
    public set storageEncrypted(value: boolean | cdktf.IResolvable | undefined) {
      this._storageEncrypted = value;
    }
    public resetStorageEncrypted() {
      this._storageEncrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageEncryptedInput() {
      return this._storageEncrypted
    }

    // storage_type - computed: true, optional: true, required: false
    private _storageType?: string | undefined; 
    public get storageType() {
      return this.getStringAttribute('storage_type');
    }
    public set storageType(value: string | undefined) {
      this._storageType = value;
    }
    public resetStorageType() {
      this._storageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageTypeInput() {
      return this._storageType
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

    // timezone - computed: true, optional: true, required: false
    private _timezone?: string | undefined; 
    public get timezone() {
      return this.getStringAttribute('timezone');
    }
    public set timezone(value: string | undefined) {
      this._timezone = value;
    }
    public resetTimezone() {
      this._timezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timezoneInput() {
      return this._timezone
    }

    // username - computed: true, optional: true, required: false
    private _username?: string | undefined; 
    public get username() {
      return this.getStringAttribute('username');
    }
    public set username(value: string | undefined) {
      this._username = value;
    }
    public resetUsername() {
      this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
      return this._username
    }

    // vpc_security_group_ids - computed: true, optional: true, required: false
    private _vpcSecurityGroupIds?: string[] | undefined; 
    public get vpcSecurityGroupIds() {
      return this.getListAttribute('vpc_security_group_ids');
    }
    public set vpcSecurityGroupIds(value: string[] | undefined) {
      this._vpcSecurityGroupIds = value;
    }
    public resetVpcSecurityGroupIds() {
      this._vpcSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSecurityGroupIdsInput() {
      return this._vpcSecurityGroupIds
    }

    // restore_to_point_in_time - computed: false, optional: true, required: false
    private _restoreToPointInTime?: DbInstanceRestoreToPointInTime | undefined; 
    private __restoreToPointInTimeOutput = new DbInstanceRestoreToPointInTimeOutputReference(this as any, "restore_to_point_in_time", true);
    public get restoreToPointInTime() {
      return this.__restoreToPointInTimeOutput;
    }
    public putRestoreToPointInTime(value: DbInstanceRestoreToPointInTime | undefined) {
      this._restoreToPointInTime = value;
    }
    public resetRestoreToPointInTime() {
      this._restoreToPointInTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restoreToPointInTimeInput() {
      return this._restoreToPointInTime
    }

    // s3_import - computed: false, optional: true, required: false
    private _s3Import?: DbInstanceS3Import | undefined; 
    private __s3ImportOutput = new DbInstanceS3ImportOutputReference(this as any, "s3_import", true);
    public get s3Import() {
      return this.__s3ImportOutput;
    }
    public putS3Import(value: DbInstanceS3Import | undefined) {
      this._s3Import = value;
    }
    public resetS3Import() {
      this._s3Import = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ImportInput() {
      return this._s3Import
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DbInstanceTimeouts | undefined; 
    private __timeoutsOutput = new DbInstanceTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DbInstanceTimeouts | undefined) {
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
        allocated_storage: cdktf.numberToTerraform(this._allocatedStorage),
        allow_major_version_upgrade: cdktf.booleanToTerraform(this._allowMajorVersionUpgrade),
        apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
        auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
        availability_zone: cdktf.stringToTerraform(this._availabilityZone),
        backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
        backup_window: cdktf.stringToTerraform(this._backupWindow),
        ca_cert_identifier: cdktf.stringToTerraform(this._caCertIdentifier),
        character_set_name: cdktf.stringToTerraform(this._characterSetName),
        copy_tags_to_snapshot: cdktf.booleanToTerraform(this._copyTagsToSnapshot),
        customer_owned_ip_enabled: cdktf.booleanToTerraform(this._customerOwnedIpEnabled),
        db_subnet_group_name: cdktf.stringToTerraform(this._dbSubnetGroupName),
        delete_automated_backups: cdktf.booleanToTerraform(this._deleteAutomatedBackups),
        deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
        domain: cdktf.stringToTerraform(this._domain),
        domain_iam_role_name: cdktf.stringToTerraform(this._domainIamRoleName),
        enabled_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledCloudwatchLogsExports),
        engine: cdktf.stringToTerraform(this._engine),
        engine_version: cdktf.stringToTerraform(this._engineVersion),
        final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
        iam_database_authentication_enabled: cdktf.booleanToTerraform(this._iamDatabaseAuthenticationEnabled),
        identifier: cdktf.stringToTerraform(this._identifier),
        identifier_prefix: cdktf.stringToTerraform(this._identifierPrefix),
        instance_class: cdktf.stringToTerraform(this._instanceClass),
        iops: cdktf.numberToTerraform(this._iops),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        license_model: cdktf.stringToTerraform(this._licenseModel),
        maintenance_window: cdktf.stringToTerraform(this._maintenanceWindow),
        max_allocated_storage: cdktf.numberToTerraform(this._maxAllocatedStorage),
        monitoring_interval: cdktf.numberToTerraform(this._monitoringInterval),
        monitoring_role_arn: cdktf.stringToTerraform(this._monitoringRoleArn),
        multi_az: cdktf.booleanToTerraform(this._multiAz),
        name: cdktf.stringToTerraform(this._name),
        nchar_character_set_name: cdktf.stringToTerraform(this._ncharCharacterSetName),
        option_group_name: cdktf.stringToTerraform(this._optionGroupName),
        parameter_group_name: cdktf.stringToTerraform(this._parameterGroupName),
        password: cdktf.stringToTerraform(this._password),
        performance_insights_enabled: cdktf.booleanToTerraform(this._performanceInsightsEnabled),
        performance_insights_kms_key_id: cdktf.stringToTerraform(this._performanceInsightsKmsKeyId),
        performance_insights_retention_period: cdktf.numberToTerraform(this._performanceInsightsRetentionPeriod),
        port: cdktf.numberToTerraform(this._port),
        publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
        replica_mode: cdktf.stringToTerraform(this._replicaMode),
        replicate_source_db: cdktf.stringToTerraform(this._replicateSourceDb),
        security_group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupNames),
        skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
        snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
        storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
        storage_type: cdktf.stringToTerraform(this._storageType),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timezone: cdktf.stringToTerraform(this._timezone),
        username: cdktf.stringToTerraform(this._username),
        vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
        restore_to_point_in_time: dbInstanceRestoreToPointInTimeToTerraform(this._restoreToPointInTime),
        s3_import: dbInstanceS3ImportToTerraform(this._s3Import),
        timeouts: dbInstanceTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DbInstanceRoleAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_role_association.html#db_instance_identifier DbInstanceRoleAssociation#db_instance_identifier}
    */
    readonly dbInstanceIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_role_association.html#feature_name DbInstanceRoleAssociation#feature_name}
    */
    readonly featureName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_role_association.html#role_arn DbInstanceRoleAssociation#role_arn}
    */
    readonly roleArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_instance_role_association.html aws_db_instance_role_association}
  */
  export class DbInstanceRoleAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_db_instance_role_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_instance_role_association.html aws_db_instance_role_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbInstanceRoleAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: DbInstanceRoleAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_db_instance_role_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._dbInstanceIdentifier = config.dbInstanceIdentifier;
      this._featureName = config.featureName;
      this._roleArn = config.roleArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // db_instance_identifier - computed: false, optional: false, required: true
    private _dbInstanceIdentifier?: string; 
    public get dbInstanceIdentifier() {
      return this.getStringAttribute('db_instance_identifier');
    }
    public set dbInstanceIdentifier(value: string) {
      this._dbInstanceIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dbInstanceIdentifierInput() {
      return this._dbInstanceIdentifier
    }

    // feature_name - computed: false, optional: false, required: true
    private _featureName?: string; 
    public get featureName() {
      return this.getStringAttribute('feature_name');
    }
    public set featureName(value: string) {
      this._featureName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get featureNameInput() {
      return this._featureName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        db_instance_identifier: cdktf.stringToTerraform(this._dbInstanceIdentifier),
        feature_name: cdktf.stringToTerraform(this._featureName),
        role_arn: cdktf.stringToTerraform(this._roleArn),
      };
    }
  }
  export interface DbOptionGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#engine_name DbOptionGroup#engine_name}
    */
    readonly engineName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#major_engine_version DbOptionGroup#major_engine_version}
    */
    readonly majorEngineVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#name DbOptionGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#name_prefix DbOptionGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#option_group_description DbOptionGroup#option_group_description}
    */
    readonly optionGroupDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#tags DbOptionGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#tags_all DbOptionGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * option block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#option DbOptionGroup#option}
    */
    readonly option?: DbOptionGroupOption[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#timeouts DbOptionGroup#timeouts}
    */
    readonly timeouts?: DbOptionGroupTimeouts;
  }
  export interface DbOptionGroupOptionOptionSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#name DbOptionGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#value DbOptionGroup#value}
    */
    readonly value: string;
  }

  function dbOptionGroupOptionOptionSettingsToTerraform(struct?: DbOptionGroupOptionOptionSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface DbOptionGroupOption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#db_security_group_memberships DbOptionGroup#db_security_group_memberships}
    */
    readonly dbSecurityGroupMemberships?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#option_name DbOptionGroup#option_name}
    */
    readonly optionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#port DbOptionGroup#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#version DbOptionGroup#version}
    */
    readonly version?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#vpc_security_group_memberships DbOptionGroup#vpc_security_group_memberships}
    */
    readonly vpcSecurityGroupMemberships?: string[];
    /**
    * option_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#option_settings DbOptionGroup#option_settings}
    */
    readonly optionSettings?: DbOptionGroupOptionOptionSettings[];
  }

  function dbOptionGroupOptionToTerraform(struct?: DbOptionGroupOption): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      db_security_group_memberships: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dbSecurityGroupMemberships),
      option_name: cdktf.stringToTerraform(struct!.optionName),
      port: cdktf.numberToTerraform(struct!.port),
      version: cdktf.stringToTerraform(struct!.version),
      vpc_security_group_memberships: cdktf.listMapper(cdktf.stringToTerraform)(struct!.vpcSecurityGroupMemberships),
      option_settings: cdktf.listMapper(dbOptionGroupOptionOptionSettingsToTerraform)(struct!.optionSettings),
    }
  }

  export interface DbOptionGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#delete DbOptionGroup#delete}
    */
    readonly delete?: string;
  }

  function dbOptionGroupTimeoutsToTerraform(struct?: DbOptionGroupTimeoutsOutputReference | DbOptionGroupTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class DbOptionGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html aws_db_option_group}
  */
  export class DbOptionGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_db_option_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html aws_db_option_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbOptionGroupConfig
    */
    public constructor(scope: Construct, id: string, config: DbOptionGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_db_option_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._engineName = config.engineName;
      this._majorEngineVersion = config.majorEngineVersion;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._optionGroupDescription = config.optionGroupDescription;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._option = config.option;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // engine_name - computed: false, optional: false, required: true
    private _engineName?: string; 
    public get engineName() {
      return this.getStringAttribute('engine_name');
    }
    public set engineName(value: string) {
      this._engineName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get engineNameInput() {
      return this._engineName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // major_engine_version - computed: false, optional: false, required: true
    private _majorEngineVersion?: string; 
    public get majorEngineVersion() {
      return this.getStringAttribute('major_engine_version');
    }
    public set majorEngineVersion(value: string) {
      this._majorEngineVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get majorEngineVersionInput() {
      return this._majorEngineVersion
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: true, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // option_group_description - computed: false, optional: true, required: false
    private _optionGroupDescription?: string | undefined; 
    public get optionGroupDescription() {
      return this.getStringAttribute('option_group_description');
    }
    public set optionGroupDescription(value: string | undefined) {
      this._optionGroupDescription = value;
    }
    public resetOptionGroupDescription() {
      this._optionGroupDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionGroupDescriptionInput() {
      return this._optionGroupDescription
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

    // option - computed: false, optional: true, required: false
    private _option?: DbOptionGroupOption[] | undefined; 
    public get option() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('option') as any;
    }
    public set option(value: DbOptionGroupOption[] | undefined) {
      this._option = value;
    }
    public resetOption() {
      this._option = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionInput() {
      return this._option
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DbOptionGroupTimeouts | undefined; 
    private __timeoutsOutput = new DbOptionGroupTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DbOptionGroupTimeouts | undefined) {
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
        engine_name: cdktf.stringToTerraform(this._engineName),
        major_engine_version: cdktf.stringToTerraform(this._majorEngineVersion),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        option_group_description: cdktf.stringToTerraform(this._optionGroupDescription),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        option: cdktf.listMapper(dbOptionGroupOptionToTerraform)(this._option),
        timeouts: dbOptionGroupTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DbParameterGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_parameter_group.html#description DbParameterGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_parameter_group.html#family DbParameterGroup#family}
    */
    readonly family: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_parameter_group.html#name DbParameterGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_parameter_group.html#name_prefix DbParameterGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_parameter_group.html#tags DbParameterGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_parameter_group.html#tags_all DbParameterGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * parameter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_parameter_group.html#parameter DbParameterGroup#parameter}
    */
    readonly parameter?: DbParameterGroupParameter[];
  }
  export interface DbParameterGroupParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_parameter_group.html#apply_method DbParameterGroup#apply_method}
    */
    readonly applyMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_parameter_group.html#name DbParameterGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_parameter_group.html#value DbParameterGroup#value}
    */
    readonly value: string;
  }

  function dbParameterGroupParameterToTerraform(struct?: DbParameterGroupParameter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      apply_method: cdktf.stringToTerraform(struct!.applyMethod),
      name: cdktf.stringToTerraform(struct!.name),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_parameter_group.html aws_db_parameter_group}
  */
  export class DbParameterGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_db_parameter_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_parameter_group.html aws_db_parameter_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbParameterGroupConfig
    */
    public constructor(scope: Construct, id: string, config: DbParameterGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_db_parameter_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._family = config.family;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._parameter = config.parameter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
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

    // family - computed: false, optional: false, required: true
    private _family?: string; 
    public get family() {
      return this.getStringAttribute('family');
    }
    public set family(value: string) {
      this._family = value;
    }
    // Temporarily expose input value. Use with caution.
    public get familyInput() {
      return this._family
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: true, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
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

    // parameter - computed: false, optional: true, required: false
    private _parameter?: DbParameterGroupParameter[] | undefined; 
    public get parameter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameter') as any;
    }
    public set parameter(value: DbParameterGroupParameter[] | undefined) {
      this._parameter = value;
    }
    public resetParameter() {
      this._parameter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterInput() {
      return this._parameter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        family: cdktf.stringToTerraform(this._family),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        parameter: cdktf.listMapper(dbParameterGroupParameterToTerraform)(this._parameter),
      };
    }
  }
  export interface DbProxyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#debug_logging DbProxy#debug_logging}
    */
    readonly debugLogging?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#engine_family DbProxy#engine_family}
    */
    readonly engineFamily: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#idle_client_timeout DbProxy#idle_client_timeout}
    */
    readonly idleClientTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#name DbProxy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#require_tls DbProxy#require_tls}
    */
    readonly requireTls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#role_arn DbProxy#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#tags DbProxy#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#tags_all DbProxy#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#vpc_security_group_ids DbProxy#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#vpc_subnet_ids DbProxy#vpc_subnet_ids}
    */
    readonly vpcSubnetIds: string[];
    /**
    * auth block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#auth DbProxy#auth}
    */
    readonly auth: DbProxyAuth[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#timeouts DbProxy#timeouts}
    */
    readonly timeouts?: DbProxyTimeouts;
  }
  export interface DbProxyAuth {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#auth_scheme DbProxy#auth_scheme}
    */
    readonly authScheme?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#description DbProxy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#iam_auth DbProxy#iam_auth}
    */
    readonly iamAuth?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#secret_arn DbProxy#secret_arn}
    */
    readonly secretArn?: string;
  }

  function dbProxyAuthToTerraform(struct?: DbProxyAuth): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      auth_scheme: cdktf.stringToTerraform(struct!.authScheme),
      description: cdktf.stringToTerraform(struct!.description),
      iam_auth: cdktf.stringToTerraform(struct!.iamAuth),
      secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    }
  }

  export interface DbProxyTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#create DbProxy#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#delete DbProxy#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#update DbProxy#update}
    */
    readonly update?: string;
  }

  function dbProxyTimeoutsToTerraform(struct?: DbProxyTimeoutsOutputReference | DbProxyTimeouts): any {
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

  export class DbProxyTimeoutsOutputReference extends cdktf.ComplexObject {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html aws_db_proxy}
  */
  export class DbProxy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_db_proxy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html aws_db_proxy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbProxyConfig
    */
    public constructor(scope: Construct, id: string, config: DbProxyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_db_proxy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._debugLogging = config.debugLogging;
      this._engineFamily = config.engineFamily;
      this._idleClientTimeout = config.idleClientTimeout;
      this._name = config.name;
      this._requireTls = config.requireTls;
      this._roleArn = config.roleArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
      this._vpcSubnetIds = config.vpcSubnetIds;
      this._auth = config.auth;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // debug_logging - computed: false, optional: true, required: false
    private _debugLogging?: boolean | cdktf.IResolvable | undefined; 
    public get debugLogging() {
      return this.getBooleanAttribute('debug_logging') as any;
    }
    public set debugLogging(value: boolean | cdktf.IResolvable | undefined) {
      this._debugLogging = value;
    }
    public resetDebugLogging() {
      this._debugLogging = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get debugLoggingInput() {
      return this._debugLogging
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }

    // engine_family - computed: false, optional: false, required: true
    private _engineFamily?: string; 
    public get engineFamily() {
      return this.getStringAttribute('engine_family');
    }
    public set engineFamily(value: string) {
      this._engineFamily = value;
    }
    // Temporarily expose input value. Use with caution.
    public get engineFamilyInput() {
      return this._engineFamily
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // idle_client_timeout - computed: true, optional: true, required: false
    private _idleClientTimeout?: number | undefined; 
    public get idleClientTimeout() {
      return this.getNumberAttribute('idle_client_timeout');
    }
    public set idleClientTimeout(value: number | undefined) {
      this._idleClientTimeout = value;
    }
    public resetIdleClientTimeout() {
      this._idleClientTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleClientTimeoutInput() {
      return this._idleClientTimeout
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

    // require_tls - computed: false, optional: true, required: false
    private _requireTls?: boolean | cdktf.IResolvable | undefined; 
    public get requireTls() {
      return this.getBooleanAttribute('require_tls') as any;
    }
    public set requireTls(value: boolean | cdktf.IResolvable | undefined) {
      this._requireTls = value;
    }
    public resetRequireTls() {
      this._requireTls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireTlsInput() {
      return this._requireTls
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
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

    // vpc_security_group_ids - computed: true, optional: true, required: false
    private _vpcSecurityGroupIds?: string[] | undefined; 
    public get vpcSecurityGroupIds() {
      return this.getListAttribute('vpc_security_group_ids');
    }
    public set vpcSecurityGroupIds(value: string[] | undefined) {
      this._vpcSecurityGroupIds = value;
    }
    public resetVpcSecurityGroupIds() {
      this._vpcSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSecurityGroupIdsInput() {
      return this._vpcSecurityGroupIds
    }

    // vpc_subnet_ids - computed: false, optional: false, required: true
    private _vpcSubnetIds?: string[]; 
    public get vpcSubnetIds() {
      return this.getListAttribute('vpc_subnet_ids');
    }
    public set vpcSubnetIds(value: string[]) {
      this._vpcSubnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSubnetIdsInput() {
      return this._vpcSubnetIds
    }

    // auth - computed: false, optional: false, required: true
    private _auth?: DbProxyAuth[]; 
    public get auth() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('auth') as any;
    }
    public set auth(value: DbProxyAuth[]) {
      this._auth = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authInput() {
      return this._auth
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DbProxyTimeouts | undefined; 
    private __timeoutsOutput = new DbProxyTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DbProxyTimeouts | undefined) {
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
        debug_logging: cdktf.booleanToTerraform(this._debugLogging),
        engine_family: cdktf.stringToTerraform(this._engineFamily),
        idle_client_timeout: cdktf.numberToTerraform(this._idleClientTimeout),
        name: cdktf.stringToTerraform(this._name),
        require_tls: cdktf.booleanToTerraform(this._requireTls),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
        vpc_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSubnetIds),
        auth: cdktf.listMapper(dbProxyAuthToTerraform)(this._auth),
        timeouts: dbProxyTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DbProxyDefaultTargetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#db_proxy_name DbProxyDefaultTargetGroup#db_proxy_name}
    */
    readonly dbProxyName: string;
    /**
    * connection_pool_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#connection_pool_config DbProxyDefaultTargetGroup#connection_pool_config}
    */
    readonly connectionPoolConfig?: DbProxyDefaultTargetGroupConnectionPoolConfig;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#timeouts DbProxyDefaultTargetGroup#timeouts}
    */
    readonly timeouts?: DbProxyDefaultTargetGroupTimeouts;
  }
  export interface DbProxyDefaultTargetGroupConnectionPoolConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#connection_borrow_timeout DbProxyDefaultTargetGroup#connection_borrow_timeout}
    */
    readonly connectionBorrowTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#init_query DbProxyDefaultTargetGroup#init_query}
    */
    readonly initQuery?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#max_connections_percent DbProxyDefaultTargetGroup#max_connections_percent}
    */
    readonly maxConnectionsPercent?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#max_idle_connections_percent DbProxyDefaultTargetGroup#max_idle_connections_percent}
    */
    readonly maxIdleConnectionsPercent?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#session_pinning_filters DbProxyDefaultTargetGroup#session_pinning_filters}
    */
    readonly sessionPinningFilters?: string[];
  }

  function dbProxyDefaultTargetGroupConnectionPoolConfigToTerraform(struct?: DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference | DbProxyDefaultTargetGroupConnectionPoolConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      connection_borrow_timeout: cdktf.numberToTerraform(struct!.connectionBorrowTimeout),
      init_query: cdktf.stringToTerraform(struct!.initQuery),
      max_connections_percent: cdktf.numberToTerraform(struct!.maxConnectionsPercent),
      max_idle_connections_percent: cdktf.numberToTerraform(struct!.maxIdleConnectionsPercent),
      session_pinning_filters: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sessionPinningFilters),
    }
  }

  export class DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // connection_borrow_timeout - computed: false, optional: true, required: false
    private _connectionBorrowTimeout?: number | undefined; 
    public get connectionBorrowTimeout() {
      return this.getNumberAttribute('connection_borrow_timeout');
    }
    public set connectionBorrowTimeout(value: number | undefined) {
      this._connectionBorrowTimeout = value;
    }
    public resetConnectionBorrowTimeout() {
      this._connectionBorrowTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionBorrowTimeoutInput() {
      return this._connectionBorrowTimeout
    }

    // init_query - computed: false, optional: true, required: false
    private _initQuery?: string | undefined; 
    public get initQuery() {
      return this.getStringAttribute('init_query');
    }
    public set initQuery(value: string | undefined) {
      this._initQuery = value;
    }
    public resetInitQuery() {
      this._initQuery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get initQueryInput() {
      return this._initQuery
    }

    // max_connections_percent - computed: false, optional: true, required: false
    private _maxConnectionsPercent?: number | undefined; 
    public get maxConnectionsPercent() {
      return this.getNumberAttribute('max_connections_percent');
    }
    public set maxConnectionsPercent(value: number | undefined) {
      this._maxConnectionsPercent = value;
    }
    public resetMaxConnectionsPercent() {
      this._maxConnectionsPercent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConnectionsPercentInput() {
      return this._maxConnectionsPercent
    }

    // max_idle_connections_percent - computed: false, optional: true, required: false
    private _maxIdleConnectionsPercent?: number | undefined; 
    public get maxIdleConnectionsPercent() {
      return this.getNumberAttribute('max_idle_connections_percent');
    }
    public set maxIdleConnectionsPercent(value: number | undefined) {
      this._maxIdleConnectionsPercent = value;
    }
    public resetMaxIdleConnectionsPercent() {
      this._maxIdleConnectionsPercent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxIdleConnectionsPercentInput() {
      return this._maxIdleConnectionsPercent
    }

    // session_pinning_filters - computed: false, optional: true, required: false
    private _sessionPinningFilters?: string[] | undefined; 
    public get sessionPinningFilters() {
      return this.getListAttribute('session_pinning_filters');
    }
    public set sessionPinningFilters(value: string[] | undefined) {
      this._sessionPinningFilters = value;
    }
    public resetSessionPinningFilters() {
      this._sessionPinningFilters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionPinningFiltersInput() {
      return this._sessionPinningFilters
    }
  }
  export interface DbProxyDefaultTargetGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#create DbProxyDefaultTargetGroup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#update DbProxyDefaultTargetGroup#update}
    */
    readonly update?: string;
  }

  function dbProxyDefaultTargetGroupTimeoutsToTerraform(struct?: DbProxyDefaultTargetGroupTimeoutsOutputReference | DbProxyDefaultTargetGroupTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class DbProxyDefaultTargetGroupTimeoutsOutputReference extends cdktf.ComplexObject {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html aws_db_proxy_default_target_group}
  */
  export class DbProxyDefaultTargetGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_db_proxy_default_target_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html aws_db_proxy_default_target_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbProxyDefaultTargetGroupConfig
    */
    public constructor(scope: Construct, id: string, config: DbProxyDefaultTargetGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_db_proxy_default_target_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._dbProxyName = config.dbProxyName;
      this._connectionPoolConfig = config.connectionPoolConfig;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // db_proxy_name - computed: false, optional: false, required: true
    private _dbProxyName?: string; 
    public get dbProxyName() {
      return this.getStringAttribute('db_proxy_name');
    }
    public set dbProxyName(value: string) {
      this._dbProxyName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dbProxyNameInput() {
      return this._dbProxyName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // connection_pool_config - computed: false, optional: true, required: false
    private _connectionPoolConfig?: DbProxyDefaultTargetGroupConnectionPoolConfig | undefined; 
    private __connectionPoolConfigOutput = new DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference(this as any, "connection_pool_config", true);
    public get connectionPoolConfig() {
      return this.__connectionPoolConfigOutput;
    }
    public putConnectionPoolConfig(value: DbProxyDefaultTargetGroupConnectionPoolConfig | undefined) {
      this._connectionPoolConfig = value;
    }
    public resetConnectionPoolConfig() {
      this._connectionPoolConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionPoolConfigInput() {
      return this._connectionPoolConfig
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DbProxyDefaultTargetGroupTimeouts | undefined; 
    private __timeoutsOutput = new DbProxyDefaultTargetGroupTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DbProxyDefaultTargetGroupTimeouts | undefined) {
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
        db_proxy_name: cdktf.stringToTerraform(this._dbProxyName),
        connection_pool_config: dbProxyDefaultTargetGroupConnectionPoolConfigToTerraform(this._connectionPoolConfig),
        timeouts: dbProxyDefaultTargetGroupTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DbProxyEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#db_proxy_endpoint_name DbProxyEndpoint#db_proxy_endpoint_name}
    */
    readonly dbProxyEndpointName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#db_proxy_name DbProxyEndpoint#db_proxy_name}
    */
    readonly dbProxyName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#tags DbProxyEndpoint#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#tags_all DbProxyEndpoint#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#target_role DbProxyEndpoint#target_role}
    */
    readonly targetRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#vpc_security_group_ids DbProxyEndpoint#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#vpc_subnet_ids DbProxyEndpoint#vpc_subnet_ids}
    */
    readonly vpcSubnetIds: string[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#timeouts DbProxyEndpoint#timeouts}
    */
    readonly timeouts?: DbProxyEndpointTimeouts;
  }
  export interface DbProxyEndpointTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#create DbProxyEndpoint#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#delete DbProxyEndpoint#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#update DbProxyEndpoint#update}
    */
    readonly update?: string;
  }

  function dbProxyEndpointTimeoutsToTerraform(struct?: DbProxyEndpointTimeoutsOutputReference | DbProxyEndpointTimeouts): any {
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

  export class DbProxyEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html aws_db_proxy_endpoint}
  */
  export class DbProxyEndpoint extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_db_proxy_endpoint";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html aws_db_proxy_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbProxyEndpointConfig
    */
    public constructor(scope: Construct, id: string, config: DbProxyEndpointConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_db_proxy_endpoint',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._dbProxyEndpointName = config.dbProxyEndpointName;
      this._dbProxyName = config.dbProxyName;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._targetRole = config.targetRole;
      this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
      this._vpcSubnetIds = config.vpcSubnetIds;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // db_proxy_endpoint_name - computed: false, optional: false, required: true
    private _dbProxyEndpointName?: string; 
    public get dbProxyEndpointName() {
      return this.getStringAttribute('db_proxy_endpoint_name');
    }
    public set dbProxyEndpointName(value: string) {
      this._dbProxyEndpointName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dbProxyEndpointNameInput() {
      return this._dbProxyEndpointName
    }

    // db_proxy_name - computed: false, optional: false, required: true
    private _dbProxyName?: string; 
    public get dbProxyName() {
      return this.getStringAttribute('db_proxy_name');
    }
    public set dbProxyName(value: string) {
      this._dbProxyName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dbProxyNameInput() {
      return this._dbProxyName
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // is_default - computed: true, optional: false, required: false
    public get isDefault() {
      return this.getBooleanAttribute('is_default') as any;
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

    // target_role - computed: false, optional: true, required: false
    private _targetRole?: string | undefined; 
    public get targetRole() {
      return this.getStringAttribute('target_role');
    }
    public set targetRole(value: string | undefined) {
      this._targetRole = value;
    }
    public resetTargetRole() {
      this._targetRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetRoleInput() {
      return this._targetRole
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }

    // vpc_security_group_ids - computed: true, optional: true, required: false
    private _vpcSecurityGroupIds?: string[] | undefined; 
    public get vpcSecurityGroupIds() {
      return this.getListAttribute('vpc_security_group_ids');
    }
    public set vpcSecurityGroupIds(value: string[] | undefined) {
      this._vpcSecurityGroupIds = value;
    }
    public resetVpcSecurityGroupIds() {
      this._vpcSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSecurityGroupIdsInput() {
      return this._vpcSecurityGroupIds
    }

    // vpc_subnet_ids - computed: false, optional: false, required: true
    private _vpcSubnetIds?: string[]; 
    public get vpcSubnetIds() {
      return this.getListAttribute('vpc_subnet_ids');
    }
    public set vpcSubnetIds(value: string[]) {
      this._vpcSubnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSubnetIdsInput() {
      return this._vpcSubnetIds
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DbProxyEndpointTimeouts | undefined; 
    private __timeoutsOutput = new DbProxyEndpointTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DbProxyEndpointTimeouts | undefined) {
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
        db_proxy_endpoint_name: cdktf.stringToTerraform(this._dbProxyEndpointName),
        db_proxy_name: cdktf.stringToTerraform(this._dbProxyName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        target_role: cdktf.stringToTerraform(this._targetRole),
        vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
        vpc_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSubnetIds),
        timeouts: dbProxyEndpointTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DbProxyTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html#db_cluster_identifier DbProxyTarget#db_cluster_identifier}
    */
    readonly dbClusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html#db_instance_identifier DbProxyTarget#db_instance_identifier}
    */
    readonly dbInstanceIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html#db_proxy_name DbProxyTarget#db_proxy_name}
    */
    readonly dbProxyName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html#target_group_name DbProxyTarget#target_group_name}
    */
    readonly targetGroupName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html aws_db_proxy_target}
  */
  export class DbProxyTarget extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_db_proxy_target";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html aws_db_proxy_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbProxyTargetConfig
    */
    public constructor(scope: Construct, id: string, config: DbProxyTargetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_db_proxy_target',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._dbClusterIdentifier = config.dbClusterIdentifier;
      this._dbInstanceIdentifier = config.dbInstanceIdentifier;
      this._dbProxyName = config.dbProxyName;
      this._targetGroupName = config.targetGroupName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // db_cluster_identifier - computed: false, optional: true, required: false
    private _dbClusterIdentifier?: string | undefined; 
    public get dbClusterIdentifier() {
      return this.getStringAttribute('db_cluster_identifier');
    }
    public set dbClusterIdentifier(value: string | undefined) {
      this._dbClusterIdentifier = value;
    }
    public resetDbClusterIdentifier() {
      this._dbClusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbClusterIdentifierInput() {
      return this._dbClusterIdentifier
    }

    // db_instance_identifier - computed: false, optional: true, required: false
    private _dbInstanceIdentifier?: string | undefined; 
    public get dbInstanceIdentifier() {
      return this.getStringAttribute('db_instance_identifier');
    }
    public set dbInstanceIdentifier(value: string | undefined) {
      this._dbInstanceIdentifier = value;
    }
    public resetDbInstanceIdentifier() {
      this._dbInstanceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbInstanceIdentifierInput() {
      return this._dbInstanceIdentifier
    }

    // db_proxy_name - computed: false, optional: false, required: true
    private _dbProxyName?: string; 
    public get dbProxyName() {
      return this.getStringAttribute('db_proxy_name');
    }
    public set dbProxyName(value: string) {
      this._dbProxyName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dbProxyNameInput() {
      return this._dbProxyName
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
      return this.getNumberAttribute('port');
    }

    // rds_resource_id - computed: true, optional: false, required: false
    public get rdsResourceId() {
      return this.getStringAttribute('rds_resource_id');
    }

    // target_arn - computed: true, optional: false, required: false
    public get targetArn() {
      return this.getStringAttribute('target_arn');
    }

    // target_group_name - computed: false, optional: false, required: true
    private _targetGroupName?: string; 
    public get targetGroupName() {
      return this.getStringAttribute('target_group_name');
    }
    public set targetGroupName(value: string) {
      this._targetGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupNameInput() {
      return this._targetGroupName
    }

    // tracked_cluster_id - computed: true, optional: false, required: false
    public get trackedClusterId() {
      return this.getStringAttribute('tracked_cluster_id');
    }

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        db_cluster_identifier: cdktf.stringToTerraform(this._dbClusterIdentifier),
        db_instance_identifier: cdktf.stringToTerraform(this._dbInstanceIdentifier),
        db_proxy_name: cdktf.stringToTerraform(this._dbProxyName),
        target_group_name: cdktf.stringToTerraform(this._targetGroupName),
      };
    }
  }
  export interface DbSecurityGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#description DbSecurityGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#name DbSecurityGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#tags DbSecurityGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#tags_all DbSecurityGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * ingress block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#ingress DbSecurityGroup#ingress}
    */
    readonly ingress: DbSecurityGroupIngress[];
  }
  export interface DbSecurityGroupIngress {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#cidr DbSecurityGroup#cidr}
    */
    readonly cidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#security_group_id DbSecurityGroup#security_group_id}
    */
    readonly securityGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#security_group_name DbSecurityGroup#security_group_name}
    */
    readonly securityGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#security_group_owner_id DbSecurityGroup#security_group_owner_id}
    */
    readonly securityGroupOwnerId?: string;
  }

  function dbSecurityGroupIngressToTerraform(struct?: DbSecurityGroupIngress): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cidr: cdktf.stringToTerraform(struct!.cidr),
      security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
      security_group_name: cdktf.stringToTerraform(struct!.securityGroupName),
      security_group_owner_id: cdktf.stringToTerraform(struct!.securityGroupOwnerId),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html aws_db_security_group}
  */
  export class DbSecurityGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_db_security_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html aws_db_security_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbSecurityGroupConfig
    */
    public constructor(scope: Construct, id: string, config: DbSecurityGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_db_security_group',
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
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._ingress = config.ingress;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
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

    // ingress - computed: false, optional: false, required: true
    private _ingress?: DbSecurityGroupIngress[]; 
    public get ingress() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ingress') as any;
    }
    public set ingress(value: DbSecurityGroupIngress[]) {
      this._ingress = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ingressInput() {
      return this._ingress
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        ingress: cdktf.listMapper(dbSecurityGroupIngressToTerraform)(this._ingress),
      };
    }
  }
  export interface DbSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html#db_instance_identifier DbSnapshot#db_instance_identifier}
    */
    readonly dbInstanceIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html#db_snapshot_identifier DbSnapshot#db_snapshot_identifier}
    */
    readonly dbSnapshotIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html#tags DbSnapshot#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html#tags_all DbSnapshot#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html#timeouts DbSnapshot#timeouts}
    */
    readonly timeouts?: DbSnapshotTimeouts;
  }
  export interface DbSnapshotTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html#read DbSnapshot#read}
    */
    readonly read?: string;
  }

  function dbSnapshotTimeoutsToTerraform(struct?: DbSnapshotTimeoutsOutputReference | DbSnapshotTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      read: cdktf.stringToTerraform(struct!.read),
    }
  }

  export class DbSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // read - computed: false, optional: true, required: false
    private _read?: string | undefined; 
    public get read() {
      return this.getStringAttribute('read');
    }
    public set read(value: string | undefined) {
      this._read = value;
    }
    public resetRead() {
      this._read = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readInput() {
      return this._read
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html aws_db_snapshot}
  */
  export class DbSnapshot extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_db_snapshot";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html aws_db_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbSnapshotConfig
    */
    public constructor(scope: Construct, id: string, config: DbSnapshotConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_db_snapshot',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._dbInstanceIdentifier = config.dbInstanceIdentifier;
      this._dbSnapshotIdentifier = config.dbSnapshotIdentifier;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allocated_storage - computed: true, optional: false, required: false
    public get allocatedStorage() {
      return this.getNumberAttribute('allocated_storage');
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }

    // db_instance_identifier - computed: false, optional: false, required: true
    private _dbInstanceIdentifier?: string; 
    public get dbInstanceIdentifier() {
      return this.getStringAttribute('db_instance_identifier');
    }
    public set dbInstanceIdentifier(value: string) {
      this._dbInstanceIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dbInstanceIdentifierInput() {
      return this._dbInstanceIdentifier
    }

    // db_snapshot_arn - computed: true, optional: false, required: false
    public get dbSnapshotArn() {
      return this.getStringAttribute('db_snapshot_arn');
    }

    // db_snapshot_identifier - computed: false, optional: false, required: true
    private _dbSnapshotIdentifier?: string; 
    public get dbSnapshotIdentifier() {
      return this.getStringAttribute('db_snapshot_identifier');
    }
    public set dbSnapshotIdentifier(value: string) {
      this._dbSnapshotIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dbSnapshotIdentifierInput() {
      return this._dbSnapshotIdentifier
    }

    // encrypted - computed: true, optional: false, required: false
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }

    // engine - computed: true, optional: false, required: false
    public get engine() {
      return this.getStringAttribute('engine');
    }

    // engine_version - computed: true, optional: false, required: false
    public get engineVersion() {
      return this.getStringAttribute('engine_version');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // iops - computed: true, optional: false, required: false
    public get iops() {
      return this.getNumberAttribute('iops');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // license_model - computed: true, optional: false, required: false
    public get licenseModel() {
      return this.getStringAttribute('license_model');
    }

    // option_group_name - computed: true, optional: false, required: false
    public get optionGroupName() {
      return this.getStringAttribute('option_group_name');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
      return this.getNumberAttribute('port');
    }

    // snapshot_type - computed: true, optional: false, required: false
    public get snapshotType() {
      return this.getStringAttribute('snapshot_type');
    }

    // source_db_snapshot_identifier - computed: true, optional: false, required: false
    public get sourceDbSnapshotIdentifier() {
      return this.getStringAttribute('source_db_snapshot_identifier');
    }

    // source_region - computed: true, optional: false, required: false
    public get sourceRegion() {
      return this.getStringAttribute('source_region');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // storage_type - computed: true, optional: false, required: false
    public get storageType() {
      return this.getStringAttribute('storage_type');
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
    private _timeouts?: DbSnapshotTimeouts | undefined; 
    private __timeoutsOutput = new DbSnapshotTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DbSnapshotTimeouts | undefined) {
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
        db_instance_identifier: cdktf.stringToTerraform(this._dbInstanceIdentifier),
        db_snapshot_identifier: cdktf.stringToTerraform(this._dbSnapshotIdentifier),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: dbSnapshotTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DbSubnetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_subnet_group.html#description DbSubnetGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_subnet_group.html#name DbSubnetGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_subnet_group.html#name_prefix DbSubnetGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_subnet_group.html#subnet_ids DbSubnetGroup#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_subnet_group.html#tags DbSubnetGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_subnet_group.html#tags_all DbSubnetGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_subnet_group.html aws_db_subnet_group}
  */
  export class DbSubnetGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_db_subnet_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_subnet_group.html aws_db_subnet_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbSubnetGroupConfig
    */
    public constructor(scope: Construct, id: string, config: DbSubnetGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_db_subnet_group',
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
      this._namePrefix = config.namePrefix;
      this._subnetIds = config.subnetIds;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: true, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface RdsClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#allow_major_version_upgrade RdsCluster#allow_major_version_upgrade}
    */
    readonly allowMajorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#apply_immediately RdsCluster#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#availability_zones RdsCluster#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#backtrack_window RdsCluster#backtrack_window}
    */
    readonly backtrackWindow?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#backup_retention_period RdsCluster#backup_retention_period}
    */
    readonly backupRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#cluster_identifier RdsCluster#cluster_identifier}
    */
    readonly clusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#cluster_identifier_prefix RdsCluster#cluster_identifier_prefix}
    */
    readonly clusterIdentifierPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#cluster_members RdsCluster#cluster_members}
    */
    readonly clusterMembers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#copy_tags_to_snapshot RdsCluster#copy_tags_to_snapshot}
    */
    readonly copyTagsToSnapshot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#database_name RdsCluster#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#db_cluster_parameter_group_name RdsCluster#db_cluster_parameter_group_name}
    */
    readonly dbClusterParameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#db_instance_parameter_group_name RdsCluster#db_instance_parameter_group_name}
    */
    readonly dbInstanceParameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#db_subnet_group_name RdsCluster#db_subnet_group_name}
    */
    readonly dbSubnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#deletion_protection RdsCluster#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#enable_global_write_forwarding RdsCluster#enable_global_write_forwarding}
    */
    readonly enableGlobalWriteForwarding?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#enable_http_endpoint RdsCluster#enable_http_endpoint}
    */
    readonly enableHttpEndpoint?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#enabled_cloudwatch_logs_exports RdsCluster#enabled_cloudwatch_logs_exports}
    */
    readonly enabledCloudwatchLogsExports?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#engine RdsCluster#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#engine_mode RdsCluster#engine_mode}
    */
    readonly engineMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#engine_version RdsCluster#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#final_snapshot_identifier RdsCluster#final_snapshot_identifier}
    */
    readonly finalSnapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#global_cluster_identifier RdsCluster#global_cluster_identifier}
    */
    readonly globalClusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#iam_database_authentication_enabled RdsCluster#iam_database_authentication_enabled}
    */
    readonly iamDatabaseAuthenticationEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#iam_roles RdsCluster#iam_roles}
    */
    readonly iamRoles?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#kms_key_id RdsCluster#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#master_password RdsCluster#master_password}
    */
    readonly masterPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#master_username RdsCluster#master_username}
    */
    readonly masterUsername?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#port RdsCluster#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#preferred_backup_window RdsCluster#preferred_backup_window}
    */
    readonly preferredBackupWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#preferred_maintenance_window RdsCluster#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#replication_source_identifier RdsCluster#replication_source_identifier}
    */
    readonly replicationSourceIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#skip_final_snapshot RdsCluster#skip_final_snapshot}
    */
    readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#snapshot_identifier RdsCluster#snapshot_identifier}
    */
    readonly snapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#source_region RdsCluster#source_region}
    */
    readonly sourceRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#storage_encrypted RdsCluster#storage_encrypted}
    */
    readonly storageEncrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#tags RdsCluster#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#tags_all RdsCluster#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#vpc_security_group_ids RdsCluster#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * restore_to_point_in_time block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#restore_to_point_in_time RdsCluster#restore_to_point_in_time}
    */
    readonly restoreToPointInTime?: RdsClusterRestoreToPointInTime;
    /**
    * s3_import block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#s3_import RdsCluster#s3_import}
    */
    readonly s3Import?: RdsClusterS3Import;
    /**
    * scaling_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#scaling_configuration RdsCluster#scaling_configuration}
    */
    readonly scalingConfiguration?: RdsClusterScalingConfiguration;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#timeouts RdsCluster#timeouts}
    */
    readonly timeouts?: RdsClusterTimeouts;
  }
  export interface RdsClusterRestoreToPointInTime {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#restore_to_time RdsCluster#restore_to_time}
    */
    readonly restoreToTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#restore_type RdsCluster#restore_type}
    */
    readonly restoreType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#source_cluster_identifier RdsCluster#source_cluster_identifier}
    */
    readonly sourceClusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#use_latest_restorable_time RdsCluster#use_latest_restorable_time}
    */
    readonly useLatestRestorableTime?: boolean | cdktf.IResolvable;
  }

  function rdsClusterRestoreToPointInTimeToTerraform(struct?: RdsClusterRestoreToPointInTimeOutputReference | RdsClusterRestoreToPointInTime): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      restore_to_time: cdktf.stringToTerraform(struct!.restoreToTime),
      restore_type: cdktf.stringToTerraform(struct!.restoreType),
      source_cluster_identifier: cdktf.stringToTerraform(struct!.sourceClusterIdentifier),
      use_latest_restorable_time: cdktf.booleanToTerraform(struct!.useLatestRestorableTime),
    }
  }

  export class RdsClusterRestoreToPointInTimeOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // restore_to_time - computed: false, optional: true, required: false
    private _restoreToTime?: string | undefined; 
    public get restoreToTime() {
      return this.getStringAttribute('restore_to_time');
    }
    public set restoreToTime(value: string | undefined) {
      this._restoreToTime = value;
    }
    public resetRestoreToTime() {
      this._restoreToTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restoreToTimeInput() {
      return this._restoreToTime
    }

    // restore_type - computed: false, optional: true, required: false
    private _restoreType?: string | undefined; 
    public get restoreType() {
      return this.getStringAttribute('restore_type');
    }
    public set restoreType(value: string | undefined) {
      this._restoreType = value;
    }
    public resetRestoreType() {
      this._restoreType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restoreTypeInput() {
      return this._restoreType
    }

    // source_cluster_identifier - computed: false, optional: false, required: true
    private _sourceClusterIdentifier?: string; 
    public get sourceClusterIdentifier() {
      return this.getStringAttribute('source_cluster_identifier');
    }
    public set sourceClusterIdentifier(value: string) {
      this._sourceClusterIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceClusterIdentifierInput() {
      return this._sourceClusterIdentifier
    }

    // use_latest_restorable_time - computed: false, optional: true, required: false
    private _useLatestRestorableTime?: boolean | cdktf.IResolvable | undefined; 
    public get useLatestRestorableTime() {
      return this.getBooleanAttribute('use_latest_restorable_time') as any;
    }
    public set useLatestRestorableTime(value: boolean | cdktf.IResolvable | undefined) {
      this._useLatestRestorableTime = value;
    }
    public resetUseLatestRestorableTime() {
      this._useLatestRestorableTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useLatestRestorableTimeInput() {
      return this._useLatestRestorableTime
    }
  }
  export interface RdsClusterS3Import {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#bucket_name RdsCluster#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#bucket_prefix RdsCluster#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#ingestion_role RdsCluster#ingestion_role}
    */
    readonly ingestionRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#source_engine RdsCluster#source_engine}
    */
    readonly sourceEngine: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#source_engine_version RdsCluster#source_engine_version}
    */
    readonly sourceEngineVersion: string;
  }

  function rdsClusterS3ImportToTerraform(struct?: RdsClusterS3ImportOutputReference | RdsClusterS3Import): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket_name: cdktf.stringToTerraform(struct!.bucketName),
      bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
      ingestion_role: cdktf.stringToTerraform(struct!.ingestionRole),
      source_engine: cdktf.stringToTerraform(struct!.sourceEngine),
      source_engine_version: cdktf.stringToTerraform(struct!.sourceEngineVersion),
    }
  }

  export class RdsClusterS3ImportOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket_name - computed: false, optional: false, required: true
    private _bucketName?: string; 
    public get bucketName() {
      return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
      this._bucketName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
      return this._bucketName
    }

    // bucket_prefix - computed: false, optional: true, required: false
    private _bucketPrefix?: string | undefined; 
    public get bucketPrefix() {
      return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string | undefined) {
      this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
      this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
      return this._bucketPrefix
    }

    // ingestion_role - computed: false, optional: false, required: true
    private _ingestionRole?: string; 
    public get ingestionRole() {
      return this.getStringAttribute('ingestion_role');
    }
    public set ingestionRole(value: string) {
      this._ingestionRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ingestionRoleInput() {
      return this._ingestionRole
    }

    // source_engine - computed: false, optional: false, required: true
    private _sourceEngine?: string; 
    public get sourceEngine() {
      return this.getStringAttribute('source_engine');
    }
    public set sourceEngine(value: string) {
      this._sourceEngine = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceEngineInput() {
      return this._sourceEngine
    }

    // source_engine_version - computed: false, optional: false, required: true
    private _sourceEngineVersion?: string; 
    public get sourceEngineVersion() {
      return this.getStringAttribute('source_engine_version');
    }
    public set sourceEngineVersion(value: string) {
      this._sourceEngineVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceEngineVersionInput() {
      return this._sourceEngineVersion
    }
  }
  export interface RdsClusterScalingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#auto_pause RdsCluster#auto_pause}
    */
    readonly autoPause?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#max_capacity RdsCluster#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#min_capacity RdsCluster#min_capacity}
    */
    readonly minCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#seconds_until_auto_pause RdsCluster#seconds_until_auto_pause}
    */
    readonly secondsUntilAutoPause?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#timeout_action RdsCluster#timeout_action}
    */
    readonly timeoutAction?: string;
  }

  function rdsClusterScalingConfigurationToTerraform(struct?: RdsClusterScalingConfigurationOutputReference | RdsClusterScalingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      auto_pause: cdktf.booleanToTerraform(struct!.autoPause),
      max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
      min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
      seconds_until_auto_pause: cdktf.numberToTerraform(struct!.secondsUntilAutoPause),
      timeout_action: cdktf.stringToTerraform(struct!.timeoutAction),
    }
  }

  export class RdsClusterScalingConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // auto_pause - computed: false, optional: true, required: false
    private _autoPause?: boolean | cdktf.IResolvable | undefined; 
    public get autoPause() {
      return this.getBooleanAttribute('auto_pause') as any;
    }
    public set autoPause(value: boolean | cdktf.IResolvable | undefined) {
      this._autoPause = value;
    }
    public resetAutoPause() {
      this._autoPause = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoPauseInput() {
      return this._autoPause
    }

    // max_capacity - computed: false, optional: true, required: false
    private _maxCapacity?: number | undefined; 
    public get maxCapacity() {
      return this.getNumberAttribute('max_capacity');
    }
    public set maxCapacity(value: number | undefined) {
      this._maxCapacity = value;
    }
    public resetMaxCapacity() {
      this._maxCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityInput() {
      return this._maxCapacity
    }

    // min_capacity - computed: false, optional: true, required: false
    private _minCapacity?: number | undefined; 
    public get minCapacity() {
      return this.getNumberAttribute('min_capacity');
    }
    public set minCapacity(value: number | undefined) {
      this._minCapacity = value;
    }
    public resetMinCapacity() {
      this._minCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minCapacityInput() {
      return this._minCapacity
    }

    // seconds_until_auto_pause - computed: false, optional: true, required: false
    private _secondsUntilAutoPause?: number | undefined; 
    public get secondsUntilAutoPause() {
      return this.getNumberAttribute('seconds_until_auto_pause');
    }
    public set secondsUntilAutoPause(value: number | undefined) {
      this._secondsUntilAutoPause = value;
    }
    public resetSecondsUntilAutoPause() {
      this._secondsUntilAutoPause = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondsUntilAutoPauseInput() {
      return this._secondsUntilAutoPause
    }

    // timeout_action - computed: false, optional: true, required: false
    private _timeoutAction?: string | undefined; 
    public get timeoutAction() {
      return this.getStringAttribute('timeout_action');
    }
    public set timeoutAction(value: string | undefined) {
      this._timeoutAction = value;
    }
    public resetTimeoutAction() {
      this._timeoutAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutActionInput() {
      return this._timeoutAction
    }
  }
  export interface RdsClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#create RdsCluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#delete RdsCluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#update RdsCluster#update}
    */
    readonly update?: string;
  }

  function rdsClusterTimeoutsToTerraform(struct?: RdsClusterTimeoutsOutputReference | RdsClusterTimeouts): any {
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

  export class RdsClusterTimeoutsOutputReference extends cdktf.ComplexObject {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html aws_rds_cluster}
  */
  export class RdsCluster extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_rds_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html aws_rds_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterConfig = {}
    */
    public constructor(scope: Construct, id: string, config: RdsClusterConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_rds_cluster',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._allowMajorVersionUpgrade = config.allowMajorVersionUpgrade;
      this._applyImmediately = config.applyImmediately;
      this._availabilityZones = config.availabilityZones;
      this._backtrackWindow = config.backtrackWindow;
      this._backupRetentionPeriod = config.backupRetentionPeriod;
      this._clusterIdentifier = config.clusterIdentifier;
      this._clusterIdentifierPrefix = config.clusterIdentifierPrefix;
      this._clusterMembers = config.clusterMembers;
      this._copyTagsToSnapshot = config.copyTagsToSnapshot;
      this._databaseName = config.databaseName;
      this._dbClusterParameterGroupName = config.dbClusterParameterGroupName;
      this._dbInstanceParameterGroupName = config.dbInstanceParameterGroupName;
      this._dbSubnetGroupName = config.dbSubnetGroupName;
      this._deletionProtection = config.deletionProtection;
      this._enableGlobalWriteForwarding = config.enableGlobalWriteForwarding;
      this._enableHttpEndpoint = config.enableHttpEndpoint;
      this._enabledCloudwatchLogsExports = config.enabledCloudwatchLogsExports;
      this._engine = config.engine;
      this._engineMode = config.engineMode;
      this._engineVersion = config.engineVersion;
      this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
      this._globalClusterIdentifier = config.globalClusterIdentifier;
      this._iamDatabaseAuthenticationEnabled = config.iamDatabaseAuthenticationEnabled;
      this._iamRoles = config.iamRoles;
      this._kmsKeyId = config.kmsKeyId;
      this._masterPassword = config.masterPassword;
      this._masterUsername = config.masterUsername;
      this._port = config.port;
      this._preferredBackupWindow = config.preferredBackupWindow;
      this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
      this._replicationSourceIdentifier = config.replicationSourceIdentifier;
      this._skipFinalSnapshot = config.skipFinalSnapshot;
      this._snapshotIdentifier = config.snapshotIdentifier;
      this._sourceRegion = config.sourceRegion;
      this._storageEncrypted = config.storageEncrypted;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
      this._restoreToPointInTime = config.restoreToPointInTime;
      this._s3Import = config.s3Import;
      this._scalingConfiguration = config.scalingConfiguration;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allow_major_version_upgrade - computed: false, optional: true, required: false
    private _allowMajorVersionUpgrade?: boolean | cdktf.IResolvable | undefined; 
    public get allowMajorVersionUpgrade() {
      return this.getBooleanAttribute('allow_major_version_upgrade') as any;
    }
    public set allowMajorVersionUpgrade(value: boolean | cdktf.IResolvable | undefined) {
      this._allowMajorVersionUpgrade = value;
    }
    public resetAllowMajorVersionUpgrade() {
      this._allowMajorVersionUpgrade = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowMajorVersionUpgradeInput() {
      return this._allowMajorVersionUpgrade
    }

    // apply_immediately - computed: true, optional: true, required: false
    private _applyImmediately?: boolean | cdktf.IResolvable | undefined; 
    public get applyImmediately() {
      return this.getBooleanAttribute('apply_immediately') as any;
    }
    public set applyImmediately(value: boolean | cdktf.IResolvable | undefined) {
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

    // availability_zones - computed: true, optional: true, required: false
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

    // backtrack_window - computed: false, optional: true, required: false
    private _backtrackWindow?: number | undefined; 
    public get backtrackWindow() {
      return this.getNumberAttribute('backtrack_window');
    }
    public set backtrackWindow(value: number | undefined) {
      this._backtrackWindow = value;
    }
    public resetBacktrackWindow() {
      this._backtrackWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backtrackWindowInput() {
      return this._backtrackWindow
    }

    // backup_retention_period - computed: false, optional: true, required: false
    private _backupRetentionPeriod?: number | undefined; 
    public get backupRetentionPeriod() {
      return this.getNumberAttribute('backup_retention_period');
    }
    public set backupRetentionPeriod(value: number | undefined) {
      this._backupRetentionPeriod = value;
    }
    public resetBackupRetentionPeriod() {
      this._backupRetentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backupRetentionPeriodInput() {
      return this._backupRetentionPeriod
    }

    // cluster_identifier - computed: true, optional: true, required: false
    private _clusterIdentifier?: string | undefined; 
    public get clusterIdentifier() {
      return this.getStringAttribute('cluster_identifier');
    }
    public set clusterIdentifier(value: string | undefined) {
      this._clusterIdentifier = value;
    }
    public resetClusterIdentifier() {
      this._clusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdentifierInput() {
      return this._clusterIdentifier
    }

    // cluster_identifier_prefix - computed: true, optional: true, required: false
    private _clusterIdentifierPrefix?: string | undefined; 
    public get clusterIdentifierPrefix() {
      return this.getStringAttribute('cluster_identifier_prefix');
    }
    public set clusterIdentifierPrefix(value: string | undefined) {
      this._clusterIdentifierPrefix = value;
    }
    public resetClusterIdentifierPrefix() {
      this._clusterIdentifierPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdentifierPrefixInput() {
      return this._clusterIdentifierPrefix
    }

    // cluster_members - computed: true, optional: true, required: false
    private _clusterMembers?: string[] | undefined; 
    public get clusterMembers() {
      return this.getListAttribute('cluster_members');
    }
    public set clusterMembers(value: string[] | undefined) {
      this._clusterMembers = value;
    }
    public resetClusterMembers() {
      this._clusterMembers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterMembersInput() {
      return this._clusterMembers
    }

    // cluster_resource_id - computed: true, optional: false, required: false
    public get clusterResourceId() {
      return this.getStringAttribute('cluster_resource_id');
    }

    // copy_tags_to_snapshot - computed: false, optional: true, required: false
    private _copyTagsToSnapshot?: boolean | cdktf.IResolvable | undefined; 
    public get copyTagsToSnapshot() {
      return this.getBooleanAttribute('copy_tags_to_snapshot') as any;
    }
    public set copyTagsToSnapshot(value: boolean | cdktf.IResolvable | undefined) {
      this._copyTagsToSnapshot = value;
    }
    public resetCopyTagsToSnapshot() {
      this._copyTagsToSnapshot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyTagsToSnapshotInput() {
      return this._copyTagsToSnapshot
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string | undefined; 
    public get databaseName() {
      return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string | undefined) {
      this._databaseName = value;
    }
    public resetDatabaseName() {
      this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
      return this._databaseName
    }

    // db_cluster_parameter_group_name - computed: true, optional: true, required: false
    private _dbClusterParameterGroupName?: string | undefined; 
    public get dbClusterParameterGroupName() {
      return this.getStringAttribute('db_cluster_parameter_group_name');
    }
    public set dbClusterParameterGroupName(value: string | undefined) {
      this._dbClusterParameterGroupName = value;
    }
    public resetDbClusterParameterGroupName() {
      this._dbClusterParameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbClusterParameterGroupNameInput() {
      return this._dbClusterParameterGroupName
    }

    // db_instance_parameter_group_name - computed: false, optional: true, required: false
    private _dbInstanceParameterGroupName?: string | undefined; 
    public get dbInstanceParameterGroupName() {
      return this.getStringAttribute('db_instance_parameter_group_name');
    }
    public set dbInstanceParameterGroupName(value: string | undefined) {
      this._dbInstanceParameterGroupName = value;
    }
    public resetDbInstanceParameterGroupName() {
      this._dbInstanceParameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbInstanceParameterGroupNameInput() {
      return this._dbInstanceParameterGroupName
    }

    // db_subnet_group_name - computed: true, optional: true, required: false
    private _dbSubnetGroupName?: string | undefined; 
    public get dbSubnetGroupName() {
      return this.getStringAttribute('db_subnet_group_name');
    }
    public set dbSubnetGroupName(value: string | undefined) {
      this._dbSubnetGroupName = value;
    }
    public resetDbSubnetGroupName() {
      this._dbSubnetGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbSubnetGroupNameInput() {
      return this._dbSubnetGroupName
    }

    // deletion_protection - computed: false, optional: true, required: false
    private _deletionProtection?: boolean | cdktf.IResolvable | undefined; 
    public get deletionProtection() {
      return this.getBooleanAttribute('deletion_protection') as any;
    }
    public set deletionProtection(value: boolean | cdktf.IResolvable | undefined) {
      this._deletionProtection = value;
    }
    public resetDeletionProtection() {
      this._deletionProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionInput() {
      return this._deletionProtection
    }

    // enable_global_write_forwarding - computed: false, optional: true, required: false
    private _enableGlobalWriteForwarding?: boolean | cdktf.IResolvable | undefined; 
    public get enableGlobalWriteForwarding() {
      return this.getBooleanAttribute('enable_global_write_forwarding') as any;
    }
    public set enableGlobalWriteForwarding(value: boolean | cdktf.IResolvable | undefined) {
      this._enableGlobalWriteForwarding = value;
    }
    public resetEnableGlobalWriteForwarding() {
      this._enableGlobalWriteForwarding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableGlobalWriteForwardingInput() {
      return this._enableGlobalWriteForwarding
    }

    // enable_http_endpoint - computed: false, optional: true, required: false
    private _enableHttpEndpoint?: boolean | cdktf.IResolvable | undefined; 
    public get enableHttpEndpoint() {
      return this.getBooleanAttribute('enable_http_endpoint') as any;
    }
    public set enableHttpEndpoint(value: boolean | cdktf.IResolvable | undefined) {
      this._enableHttpEndpoint = value;
    }
    public resetEnableHttpEndpoint() {
      this._enableHttpEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableHttpEndpointInput() {
      return this._enableHttpEndpoint
    }

    // enabled_cloudwatch_logs_exports - computed: false, optional: true, required: false
    private _enabledCloudwatchLogsExports?: string[] | undefined; 
    public get enabledCloudwatchLogsExports() {
      return this.getListAttribute('enabled_cloudwatch_logs_exports');
    }
    public set enabledCloudwatchLogsExports(value: string[] | undefined) {
      this._enabledCloudwatchLogsExports = value;
    }
    public resetEnabledCloudwatchLogsExports() {
      this._enabledCloudwatchLogsExports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledCloudwatchLogsExportsInput() {
      return this._enabledCloudwatchLogsExports
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }

    // engine - computed: false, optional: true, required: false
    private _engine?: string | undefined; 
    public get engine() {
      return this.getStringAttribute('engine');
    }
    public set engine(value: string | undefined) {
      this._engine = value;
    }
    public resetEngine() {
      this._engine = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineInput() {
      return this._engine
    }

    // engine_mode - computed: false, optional: true, required: false
    private _engineMode?: string | undefined; 
    public get engineMode() {
      return this.getStringAttribute('engine_mode');
    }
    public set engineMode(value: string | undefined) {
      this._engineMode = value;
    }
    public resetEngineMode() {
      this._engineMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineModeInput() {
      return this._engineMode
    }

    // engine_version - computed: true, optional: true, required: false
    private _engineVersion?: string | undefined; 
    public get engineVersion() {
      return this.getStringAttribute('engine_version');
    }
    public set engineVersion(value: string | undefined) {
      this._engineVersion = value;
    }
    public resetEngineVersion() {
      this._engineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineVersionInput() {
      return this._engineVersion
    }

    // engine_version_actual - computed: true, optional: false, required: false
    public get engineVersionActual() {
      return this.getStringAttribute('engine_version_actual');
    }

    // final_snapshot_identifier - computed: false, optional: true, required: false
    private _finalSnapshotIdentifier?: string | undefined; 
    public get finalSnapshotIdentifier() {
      return this.getStringAttribute('final_snapshot_identifier');
    }
    public set finalSnapshotIdentifier(value: string | undefined) {
      this._finalSnapshotIdentifier = value;
    }
    public resetFinalSnapshotIdentifier() {
      this._finalSnapshotIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get finalSnapshotIdentifierInput() {
      return this._finalSnapshotIdentifier
    }

    // global_cluster_identifier - computed: false, optional: true, required: false
    private _globalClusterIdentifier?: string | undefined; 
    public get globalClusterIdentifier() {
      return this.getStringAttribute('global_cluster_identifier');
    }
    public set globalClusterIdentifier(value: string | undefined) {
      this._globalClusterIdentifier = value;
    }
    public resetGlobalClusterIdentifier() {
      this._globalClusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get globalClusterIdentifierInput() {
      return this._globalClusterIdentifier
    }

    // hosted_zone_id - computed: true, optional: false, required: false
    public get hostedZoneId() {
      return this.getStringAttribute('hosted_zone_id');
    }

    // iam_database_authentication_enabled - computed: false, optional: true, required: false
    private _iamDatabaseAuthenticationEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get iamDatabaseAuthenticationEnabled() {
      return this.getBooleanAttribute('iam_database_authentication_enabled') as any;
    }
    public set iamDatabaseAuthenticationEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._iamDatabaseAuthenticationEnabled = value;
    }
    public resetIamDatabaseAuthenticationEnabled() {
      this._iamDatabaseAuthenticationEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamDatabaseAuthenticationEnabledInput() {
      return this._iamDatabaseAuthenticationEnabled
    }

    // iam_roles - computed: true, optional: true, required: false
    private _iamRoles?: string[] | undefined; 
    public get iamRoles() {
      return this.getListAttribute('iam_roles');
    }
    public set iamRoles(value: string[] | undefined) {
      this._iamRoles = value;
    }
    public resetIamRoles() {
      this._iamRoles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRolesInput() {
      return this._iamRoles
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // master_password - computed: false, optional: true, required: false
    private _masterPassword?: string | undefined; 
    public get masterPassword() {
      return this.getStringAttribute('master_password');
    }
    public set masterPassword(value: string | undefined) {
      this._masterPassword = value;
    }
    public resetMasterPassword() {
      this._masterPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterPasswordInput() {
      return this._masterPassword
    }

    // master_username - computed: true, optional: true, required: false
    private _masterUsername?: string | undefined; 
    public get masterUsername() {
      return this.getStringAttribute('master_username');
    }
    public set masterUsername(value: string | undefined) {
      this._masterUsername = value;
    }
    public resetMasterUsername() {
      this._masterUsername = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterUsernameInput() {
      return this._masterUsername
    }

    // port - computed: true, optional: true, required: false
    private _port?: number | undefined; 
    public get port() {
      return this.getNumberAttribute('port');
    }
    public set port(value: number | undefined) {
      this._port = value;
    }
    public resetPort() {
      this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
      return this._port
    }

    // preferred_backup_window - computed: true, optional: true, required: false
    private _preferredBackupWindow?: string | undefined; 
    public get preferredBackupWindow() {
      return this.getStringAttribute('preferred_backup_window');
    }
    public set preferredBackupWindow(value: string | undefined) {
      this._preferredBackupWindow = value;
    }
    public resetPreferredBackupWindow() {
      this._preferredBackupWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredBackupWindowInput() {
      return this._preferredBackupWindow
    }

    // preferred_maintenance_window - computed: true, optional: true, required: false
    private _preferredMaintenanceWindow?: string | undefined; 
    public get preferredMaintenanceWindow() {
      return this.getStringAttribute('preferred_maintenance_window');
    }
    public set preferredMaintenanceWindow(value: string | undefined) {
      this._preferredMaintenanceWindow = value;
    }
    public resetPreferredMaintenanceWindow() {
      this._preferredMaintenanceWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredMaintenanceWindowInput() {
      return this._preferredMaintenanceWindow
    }

    // reader_endpoint - computed: true, optional: false, required: false
    public get readerEndpoint() {
      return this.getStringAttribute('reader_endpoint');
    }

    // replication_source_identifier - computed: false, optional: true, required: false
    private _replicationSourceIdentifier?: string | undefined; 
    public get replicationSourceIdentifier() {
      return this.getStringAttribute('replication_source_identifier');
    }
    public set replicationSourceIdentifier(value: string | undefined) {
      this._replicationSourceIdentifier = value;
    }
    public resetReplicationSourceIdentifier() {
      this._replicationSourceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationSourceIdentifierInput() {
      return this._replicationSourceIdentifier
    }

    // skip_final_snapshot - computed: false, optional: true, required: false
    private _skipFinalSnapshot?: boolean | cdktf.IResolvable | undefined; 
    public get skipFinalSnapshot() {
      return this.getBooleanAttribute('skip_final_snapshot') as any;
    }
    public set skipFinalSnapshot(value: boolean | cdktf.IResolvable | undefined) {
      this._skipFinalSnapshot = value;
    }
    public resetSkipFinalSnapshot() {
      this._skipFinalSnapshot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skipFinalSnapshotInput() {
      return this._skipFinalSnapshot
    }

    // snapshot_identifier - computed: false, optional: true, required: false
    private _snapshotIdentifier?: string | undefined; 
    public get snapshotIdentifier() {
      return this.getStringAttribute('snapshot_identifier');
    }
    public set snapshotIdentifier(value: string | undefined) {
      this._snapshotIdentifier = value;
    }
    public resetSnapshotIdentifier() {
      this._snapshotIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotIdentifierInput() {
      return this._snapshotIdentifier
    }

    // source_region - computed: false, optional: true, required: false
    private _sourceRegion?: string | undefined; 
    public get sourceRegion() {
      return this.getStringAttribute('source_region');
    }
    public set sourceRegion(value: string | undefined) {
      this._sourceRegion = value;
    }
    public resetSourceRegion() {
      this._sourceRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceRegionInput() {
      return this._sourceRegion
    }

    // storage_encrypted - computed: true, optional: true, required: false
    private _storageEncrypted?: boolean | cdktf.IResolvable | undefined; 
    public get storageEncrypted() {
      return this.getBooleanAttribute('storage_encrypted') as any;
    }
    public set storageEncrypted(value: boolean | cdktf.IResolvable | undefined) {
      this._storageEncrypted = value;
    }
    public resetStorageEncrypted() {
      this._storageEncrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageEncryptedInput() {
      return this._storageEncrypted
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

    // vpc_security_group_ids - computed: true, optional: true, required: false
    private _vpcSecurityGroupIds?: string[] | undefined; 
    public get vpcSecurityGroupIds() {
      return this.getListAttribute('vpc_security_group_ids');
    }
    public set vpcSecurityGroupIds(value: string[] | undefined) {
      this._vpcSecurityGroupIds = value;
    }
    public resetVpcSecurityGroupIds() {
      this._vpcSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSecurityGroupIdsInput() {
      return this._vpcSecurityGroupIds
    }

    // restore_to_point_in_time - computed: false, optional: true, required: false
    private _restoreToPointInTime?: RdsClusterRestoreToPointInTime | undefined; 
    private __restoreToPointInTimeOutput = new RdsClusterRestoreToPointInTimeOutputReference(this as any, "restore_to_point_in_time", true);
    public get restoreToPointInTime() {
      return this.__restoreToPointInTimeOutput;
    }
    public putRestoreToPointInTime(value: RdsClusterRestoreToPointInTime | undefined) {
      this._restoreToPointInTime = value;
    }
    public resetRestoreToPointInTime() {
      this._restoreToPointInTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restoreToPointInTimeInput() {
      return this._restoreToPointInTime
    }

    // s3_import - computed: false, optional: true, required: false
    private _s3Import?: RdsClusterS3Import | undefined; 
    private __s3ImportOutput = new RdsClusterS3ImportOutputReference(this as any, "s3_import", true);
    public get s3Import() {
      return this.__s3ImportOutput;
    }
    public putS3Import(value: RdsClusterS3Import | undefined) {
      this._s3Import = value;
    }
    public resetS3Import() {
      this._s3Import = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ImportInput() {
      return this._s3Import
    }

    // scaling_configuration - computed: false, optional: true, required: false
    private _scalingConfiguration?: RdsClusterScalingConfiguration | undefined; 
    private __scalingConfigurationOutput = new RdsClusterScalingConfigurationOutputReference(this as any, "scaling_configuration", true);
    public get scalingConfiguration() {
      return this.__scalingConfigurationOutput;
    }
    public putScalingConfiguration(value: RdsClusterScalingConfiguration | undefined) {
      this._scalingConfiguration = value;
    }
    public resetScalingConfiguration() {
      this._scalingConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingConfigurationInput() {
      return this._scalingConfiguration
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: RdsClusterTimeouts | undefined; 
    private __timeoutsOutput = new RdsClusterTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: RdsClusterTimeouts | undefined) {
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
        allow_major_version_upgrade: cdktf.booleanToTerraform(this._allowMajorVersionUpgrade),
        apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
        availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
        backtrack_window: cdktf.numberToTerraform(this._backtrackWindow),
        backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
        cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
        cluster_identifier_prefix: cdktf.stringToTerraform(this._clusterIdentifierPrefix),
        cluster_members: cdktf.listMapper(cdktf.stringToTerraform)(this._clusterMembers),
        copy_tags_to_snapshot: cdktf.booleanToTerraform(this._copyTagsToSnapshot),
        database_name: cdktf.stringToTerraform(this._databaseName),
        db_cluster_parameter_group_name: cdktf.stringToTerraform(this._dbClusterParameterGroupName),
        db_instance_parameter_group_name: cdktf.stringToTerraform(this._dbInstanceParameterGroupName),
        db_subnet_group_name: cdktf.stringToTerraform(this._dbSubnetGroupName),
        deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
        enable_global_write_forwarding: cdktf.booleanToTerraform(this._enableGlobalWriteForwarding),
        enable_http_endpoint: cdktf.booleanToTerraform(this._enableHttpEndpoint),
        enabled_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledCloudwatchLogsExports),
        engine: cdktf.stringToTerraform(this._engine),
        engine_mode: cdktf.stringToTerraform(this._engineMode),
        engine_version: cdktf.stringToTerraform(this._engineVersion),
        final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
        global_cluster_identifier: cdktf.stringToTerraform(this._globalClusterIdentifier),
        iam_database_authentication_enabled: cdktf.booleanToTerraform(this._iamDatabaseAuthenticationEnabled),
        iam_roles: cdktf.listMapper(cdktf.stringToTerraform)(this._iamRoles),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        master_password: cdktf.stringToTerraform(this._masterPassword),
        master_username: cdktf.stringToTerraform(this._masterUsername),
        port: cdktf.numberToTerraform(this._port),
        preferred_backup_window: cdktf.stringToTerraform(this._preferredBackupWindow),
        preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
        replication_source_identifier: cdktf.stringToTerraform(this._replicationSourceIdentifier),
        skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
        snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
        source_region: cdktf.stringToTerraform(this._sourceRegion),
        storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
        restore_to_point_in_time: rdsClusterRestoreToPointInTimeToTerraform(this._restoreToPointInTime),
        s3_import: rdsClusterS3ImportToTerraform(this._s3Import),
        scaling_configuration: rdsClusterScalingConfigurationToTerraform(this._scalingConfiguration),
        timeouts: rdsClusterTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface RdsClusterEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html#cluster_endpoint_identifier RdsClusterEndpoint#cluster_endpoint_identifier}
    */
    readonly clusterEndpointIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html#cluster_identifier RdsClusterEndpoint#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html#custom_endpoint_type RdsClusterEndpoint#custom_endpoint_type}
    */
    readonly customEndpointType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html#excluded_members RdsClusterEndpoint#excluded_members}
    */
    readonly excludedMembers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html#static_members RdsClusterEndpoint#static_members}
    */
    readonly staticMembers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html#tags RdsClusterEndpoint#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html#tags_all RdsClusterEndpoint#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html aws_rds_cluster_endpoint}
  */
  export class RdsClusterEndpoint extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_rds_cluster_endpoint";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html aws_rds_cluster_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterEndpointConfig
    */
    public constructor(scope: Construct, id: string, config: RdsClusterEndpointConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_rds_cluster_endpoint',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterEndpointIdentifier = config.clusterEndpointIdentifier;
      this._clusterIdentifier = config.clusterIdentifier;
      this._customEndpointType = config.customEndpointType;
      this._excludedMembers = config.excludedMembers;
      this._staticMembers = config.staticMembers;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cluster_endpoint_identifier - computed: false, optional: false, required: true
    private _clusterEndpointIdentifier?: string; 
    public get clusterEndpointIdentifier() {
      return this.getStringAttribute('cluster_endpoint_identifier');
    }
    public set clusterEndpointIdentifier(value: string) {
      this._clusterEndpointIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterEndpointIdentifierInput() {
      return this._clusterEndpointIdentifier
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
      return this._clusterIdentifier
    }

    // custom_endpoint_type - computed: false, optional: false, required: true
    private _customEndpointType?: string; 
    public get customEndpointType() {
      return this.getStringAttribute('custom_endpoint_type');
    }
    public set customEndpointType(value: string) {
      this._customEndpointType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get customEndpointTypeInput() {
      return this._customEndpointType
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }

    // excluded_members - computed: false, optional: true, required: false
    private _excludedMembers?: string[] | undefined; 
    public get excludedMembers() {
      return this.getListAttribute('excluded_members');
    }
    public set excludedMembers(value: string[] | undefined) {
      this._excludedMembers = value;
    }
    public resetExcludedMembers() {
      this._excludedMembers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludedMembersInput() {
      return this._excludedMembers
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // static_members - computed: false, optional: true, required: false
    private _staticMembers?: string[] | undefined; 
    public get staticMembers() {
      return this.getListAttribute('static_members');
    }
    public set staticMembers(value: string[] | undefined) {
      this._staticMembers = value;
    }
    public resetStaticMembers() {
      this._staticMembers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get staticMembersInput() {
      return this._staticMembers
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_endpoint_identifier: cdktf.stringToTerraform(this._clusterEndpointIdentifier),
        cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
        custom_endpoint_type: cdktf.stringToTerraform(this._customEndpointType),
        excluded_members: cdktf.listMapper(cdktf.stringToTerraform)(this._excludedMembers),
        static_members: cdktf.listMapper(cdktf.stringToTerraform)(this._staticMembers),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface RdsClusterInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#apply_immediately RdsClusterInstance#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#auto_minor_version_upgrade RdsClusterInstance#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#availability_zone RdsClusterInstance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#ca_cert_identifier RdsClusterInstance#ca_cert_identifier}
    */
    readonly caCertIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#cluster_identifier RdsClusterInstance#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#copy_tags_to_snapshot RdsClusterInstance#copy_tags_to_snapshot}
    */
    readonly copyTagsToSnapshot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#db_parameter_group_name RdsClusterInstance#db_parameter_group_name}
    */
    readonly dbParameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#db_subnet_group_name RdsClusterInstance#db_subnet_group_name}
    */
    readonly dbSubnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#engine RdsClusterInstance#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#engine_version RdsClusterInstance#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#identifier RdsClusterInstance#identifier}
    */
    readonly identifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#identifier_prefix RdsClusterInstance#identifier_prefix}
    */
    readonly identifierPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#instance_class RdsClusterInstance#instance_class}
    */
    readonly instanceClass: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#monitoring_interval RdsClusterInstance#monitoring_interval}
    */
    readonly monitoringInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#monitoring_role_arn RdsClusterInstance#monitoring_role_arn}
    */
    readonly monitoringRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#performance_insights_enabled RdsClusterInstance#performance_insights_enabled}
    */
    readonly performanceInsightsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#performance_insights_kms_key_id RdsClusterInstance#performance_insights_kms_key_id}
    */
    readonly performanceInsightsKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#performance_insights_retention_period RdsClusterInstance#performance_insights_retention_period}
    */
    readonly performanceInsightsRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#preferred_backup_window RdsClusterInstance#preferred_backup_window}
    */
    readonly preferredBackupWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#preferred_maintenance_window RdsClusterInstance#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#promotion_tier RdsClusterInstance#promotion_tier}
    */
    readonly promotionTier?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#publicly_accessible RdsClusterInstance#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#tags RdsClusterInstance#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#tags_all RdsClusterInstance#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#timeouts RdsClusterInstance#timeouts}
    */
    readonly timeouts?: RdsClusterInstanceTimeouts;
  }
  export interface RdsClusterInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#create RdsClusterInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#delete RdsClusterInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#update RdsClusterInstance#update}
    */
    readonly update?: string;
  }

  function rdsClusterInstanceTimeoutsToTerraform(struct?: RdsClusterInstanceTimeoutsOutputReference | RdsClusterInstanceTimeouts): any {
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

  export class RdsClusterInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html aws_rds_cluster_instance}
  */
  export class RdsClusterInstance extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_rds_cluster_instance";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html aws_rds_cluster_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterInstanceConfig
    */
    public constructor(scope: Construct, id: string, config: RdsClusterInstanceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_rds_cluster_instance',
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
      this._copyTagsToSnapshot = config.copyTagsToSnapshot;
      this._dbParameterGroupName = config.dbParameterGroupName;
      this._dbSubnetGroupName = config.dbSubnetGroupName;
      this._engine = config.engine;
      this._engineVersion = config.engineVersion;
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
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // apply_immediately - computed: true, optional: true, required: false
    private _applyImmediately?: boolean | cdktf.IResolvable | undefined; 
    public get applyImmediately() {
      return this.getBooleanAttribute('apply_immediately') as any;
    }
    public set applyImmediately(value: boolean | cdktf.IResolvable | undefined) {
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
    private _autoMinorVersionUpgrade?: boolean | cdktf.IResolvable | undefined; 
    public get autoMinorVersionUpgrade() {
      return this.getBooleanAttribute('auto_minor_version_upgrade') as any;
    }
    public set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable | undefined) {
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

    // ca_cert_identifier - computed: true, optional: true, required: false
    private _caCertIdentifier?: string | undefined; 
    public get caCertIdentifier() {
      return this.getStringAttribute('ca_cert_identifier');
    }
    public set caCertIdentifier(value: string | undefined) {
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
    private _clusterIdentifier?: string; 
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

    // copy_tags_to_snapshot - computed: false, optional: true, required: false
    private _copyTagsToSnapshot?: boolean | cdktf.IResolvable | undefined; 
    public get copyTagsToSnapshot() {
      return this.getBooleanAttribute('copy_tags_to_snapshot') as any;
    }
    public set copyTagsToSnapshot(value: boolean | cdktf.IResolvable | undefined) {
      this._copyTagsToSnapshot = value;
    }
    public resetCopyTagsToSnapshot() {
      this._copyTagsToSnapshot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyTagsToSnapshotInput() {
      return this._copyTagsToSnapshot
    }

    // db_parameter_group_name - computed: true, optional: true, required: false
    private _dbParameterGroupName?: string | undefined; 
    public get dbParameterGroupName() {
      return this.getStringAttribute('db_parameter_group_name');
    }
    public set dbParameterGroupName(value: string | undefined) {
      this._dbParameterGroupName = value;
    }
    public resetDbParameterGroupName() {
      this._dbParameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbParameterGroupNameInput() {
      return this._dbParameterGroupName
    }

    // db_subnet_group_name - computed: true, optional: true, required: false
    private _dbSubnetGroupName?: string | undefined; 
    public get dbSubnetGroupName() {
      return this.getStringAttribute('db_subnet_group_name');
    }
    public set dbSubnetGroupName(value: string | undefined) {
      this._dbSubnetGroupName = value;
    }
    public resetDbSubnetGroupName() {
      this._dbSubnetGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbSubnetGroupNameInput() {
      return this._dbSubnetGroupName
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
    private _engine?: string | undefined; 
    public get engine() {
      return this.getStringAttribute('engine');
    }
    public set engine(value: string | undefined) {
      this._engine = value;
    }
    public resetEngine() {
      this._engine = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineInput() {
      return this._engine
    }

    // engine_version - computed: true, optional: true, required: false
    private _engineVersion?: string | undefined; 
    public get engineVersion() {
      return this.getStringAttribute('engine_version');
    }
    public set engineVersion(value: string | undefined) {
      this._engineVersion = value;
    }
    public resetEngineVersion() {
      this._engineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineVersionInput() {
      return this._engineVersion
    }

    // engine_version_actual - computed: true, optional: false, required: false
    public get engineVersionActual() {
      return this.getStringAttribute('engine_version_actual');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // identifier - computed: true, optional: true, required: false
    private _identifier?: string | undefined; 
    public get identifier() {
      return this.getStringAttribute('identifier');
    }
    public set identifier(value: string | undefined) {
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
    private _identifierPrefix?: string | undefined; 
    public get identifierPrefix() {
      return this.getStringAttribute('identifier_prefix');
    }
    public set identifierPrefix(value: string | undefined) {
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
    private _instanceClass?: string; 
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

    // monitoring_interval - computed: false, optional: true, required: false
    private _monitoringInterval?: number | undefined; 
    public get monitoringInterval() {
      return this.getNumberAttribute('monitoring_interval');
    }
    public set monitoringInterval(value: number | undefined) {
      this._monitoringInterval = value;
    }
    public resetMonitoringInterval() {
      this._monitoringInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringIntervalInput() {
      return this._monitoringInterval
    }

    // monitoring_role_arn - computed: true, optional: true, required: false
    private _monitoringRoleArn?: string | undefined; 
    public get monitoringRoleArn() {
      return this.getStringAttribute('monitoring_role_arn');
    }
    public set monitoringRoleArn(value: string | undefined) {
      this._monitoringRoleArn = value;
    }
    public resetMonitoringRoleArn() {
      this._monitoringRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringRoleArnInput() {
      return this._monitoringRoleArn
    }

    // performance_insights_enabled - computed: true, optional: true, required: false
    private _performanceInsightsEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get performanceInsightsEnabled() {
      return this.getBooleanAttribute('performance_insights_enabled') as any;
    }
    public set performanceInsightsEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._performanceInsightsEnabled = value;
    }
    public resetPerformanceInsightsEnabled() {
      this._performanceInsightsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get performanceInsightsEnabledInput() {
      return this._performanceInsightsEnabled
    }

    // performance_insights_kms_key_id - computed: true, optional: true, required: false
    private _performanceInsightsKmsKeyId?: string | undefined; 
    public get performanceInsightsKmsKeyId() {
      return this.getStringAttribute('performance_insights_kms_key_id');
    }
    public set performanceInsightsKmsKeyId(value: string | undefined) {
      this._performanceInsightsKmsKeyId = value;
    }
    public resetPerformanceInsightsKmsKeyId() {
      this._performanceInsightsKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get performanceInsightsKmsKeyIdInput() {
      return this._performanceInsightsKmsKeyId
    }

    // performance_insights_retention_period - computed: true, optional: true, required: false
    private _performanceInsightsRetentionPeriod?: number | undefined; 
    public get performanceInsightsRetentionPeriod() {
      return this.getNumberAttribute('performance_insights_retention_period');
    }
    public set performanceInsightsRetentionPeriod(value: number | undefined) {
      this._performanceInsightsRetentionPeriod = value;
    }
    public resetPerformanceInsightsRetentionPeriod() {
      this._performanceInsightsRetentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get performanceInsightsRetentionPeriodInput() {
      return this._performanceInsightsRetentionPeriod
    }

    // port - computed: true, optional: false, required: false
    public get port() {
      return this.getNumberAttribute('port');
    }

    // preferred_backup_window - computed: true, optional: true, required: false
    private _preferredBackupWindow?: string | undefined; 
    public get preferredBackupWindow() {
      return this.getStringAttribute('preferred_backup_window');
    }
    public set preferredBackupWindow(value: string | undefined) {
      this._preferredBackupWindow = value;
    }
    public resetPreferredBackupWindow() {
      this._preferredBackupWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredBackupWindowInput() {
      return this._preferredBackupWindow
    }

    // preferred_maintenance_window - computed: true, optional: true, required: false
    private _preferredMaintenanceWindow?: string | undefined; 
    public get preferredMaintenanceWindow() {
      return this.getStringAttribute('preferred_maintenance_window');
    }
    public set preferredMaintenanceWindow(value: string | undefined) {
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
    private _promotionTier?: number | undefined; 
    public get promotionTier() {
      return this.getNumberAttribute('promotion_tier');
    }
    public set promotionTier(value: number | undefined) {
      this._promotionTier = value;
    }
    public resetPromotionTier() {
      this._promotionTier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get promotionTierInput() {
      return this._promotionTier
    }

    // publicly_accessible - computed: false, optional: true, required: false
    private _publiclyAccessible?: boolean | cdktf.IResolvable | undefined; 
    public get publiclyAccessible() {
      return this.getBooleanAttribute('publicly_accessible') as any;
    }
    public set publiclyAccessible(value: boolean | cdktf.IResolvable | undefined) {
      this._publiclyAccessible = value;
    }
    public resetPubliclyAccessible() {
      this._publiclyAccessible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publiclyAccessibleInput() {
      return this._publiclyAccessible
    }

    // storage_encrypted - computed: true, optional: false, required: false
    public get storageEncrypted() {
      return this.getBooleanAttribute('storage_encrypted') as any;
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

    // writer - computed: true, optional: false, required: false
    public get writer() {
      return this.getBooleanAttribute('writer') as any;
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: RdsClusterInstanceTimeouts | undefined; 
    private __timeoutsOutput = new RdsClusterInstanceTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: RdsClusterInstanceTimeouts | undefined) {
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
        copy_tags_to_snapshot: cdktf.booleanToTerraform(this._copyTagsToSnapshot),
        db_parameter_group_name: cdktf.stringToTerraform(this._dbParameterGroupName),
        db_subnet_group_name: cdktf.stringToTerraform(this._dbSubnetGroupName),
        engine: cdktf.stringToTerraform(this._engine),
        engine_version: cdktf.stringToTerraform(this._engineVersion),
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
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: rdsClusterInstanceTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface RdsClusterParameterGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group.html#description RdsClusterParameterGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group.html#family RdsClusterParameterGroup#family}
    */
    readonly family: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group.html#name RdsClusterParameterGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group.html#name_prefix RdsClusterParameterGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group.html#tags RdsClusterParameterGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group.html#tags_all RdsClusterParameterGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * parameter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group.html#parameter RdsClusterParameterGroup#parameter}
    */
    readonly parameter?: RdsClusterParameterGroupParameter[];
  }
  export interface RdsClusterParameterGroupParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group.html#apply_method RdsClusterParameterGroup#apply_method}
    */
    readonly applyMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group.html#name RdsClusterParameterGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group.html#value RdsClusterParameterGroup#value}
    */
    readonly value: string;
  }

  function rdsClusterParameterGroupParameterToTerraform(struct?: RdsClusterParameterGroupParameter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      apply_method: cdktf.stringToTerraform(struct!.applyMethod),
      name: cdktf.stringToTerraform(struct!.name),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group.html aws_rds_cluster_parameter_group}
  */
  export class RdsClusterParameterGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_rds_cluster_parameter_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group.html aws_rds_cluster_parameter_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterParameterGroupConfig
    */
    public constructor(scope: Construct, id: string, config: RdsClusterParameterGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_rds_cluster_parameter_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._family = config.family;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._parameter = config.parameter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
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

    // family - computed: false, optional: false, required: true
    private _family?: string; 
    public get family() {
      return this.getStringAttribute('family');
    }
    public set family(value: string) {
      this._family = value;
    }
    // Temporarily expose input value. Use with caution.
    public get familyInput() {
      return this._family
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: true, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
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

    // parameter - computed: false, optional: true, required: false
    private _parameter?: RdsClusterParameterGroupParameter[] | undefined; 
    public get parameter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameter') as any;
    }
    public set parameter(value: RdsClusterParameterGroupParameter[] | undefined) {
      this._parameter = value;
    }
    public resetParameter() {
      this._parameter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterInput() {
      return this._parameter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        family: cdktf.stringToTerraform(this._family),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        parameter: cdktf.listMapper(rdsClusterParameterGroupParameterToTerraform)(this._parameter),
      };
    }
  }
  export interface RdsClusterRoleAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_role_association.html#db_cluster_identifier RdsClusterRoleAssociation#db_cluster_identifier}
    */
    readonly dbClusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_role_association.html#feature_name RdsClusterRoleAssociation#feature_name}
    */
    readonly featureName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_role_association.html#role_arn RdsClusterRoleAssociation#role_arn}
    */
    readonly roleArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_role_association.html aws_rds_cluster_role_association}
  */
  export class RdsClusterRoleAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_rds_cluster_role_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_role_association.html aws_rds_cluster_role_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterRoleAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: RdsClusterRoleAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_rds_cluster_role_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._dbClusterIdentifier = config.dbClusterIdentifier;
      this._featureName = config.featureName;
      this._roleArn = config.roleArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // db_cluster_identifier - computed: false, optional: false, required: true
    private _dbClusterIdentifier?: string; 
    public get dbClusterIdentifier() {
      return this.getStringAttribute('db_cluster_identifier');
    }
    public set dbClusterIdentifier(value: string) {
      this._dbClusterIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dbClusterIdentifierInput() {
      return this._dbClusterIdentifier
    }

    // feature_name - computed: false, optional: false, required: true
    private _featureName?: string; 
    public get featureName() {
      return this.getStringAttribute('feature_name');
    }
    public set featureName(value: string) {
      this._featureName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get featureNameInput() {
      return this._featureName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        db_cluster_identifier: cdktf.stringToTerraform(this._dbClusterIdentifier),
        feature_name: cdktf.stringToTerraform(this._featureName),
        role_arn: cdktf.stringToTerraform(this._roleArn),
      };
    }
  }
  export interface RdsGlobalClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#database_name RdsGlobalCluster#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#deletion_protection RdsGlobalCluster#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#engine RdsGlobalCluster#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#engine_version RdsGlobalCluster#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#force_destroy RdsGlobalCluster#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#global_cluster_identifier RdsGlobalCluster#global_cluster_identifier}
    */
    readonly globalClusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#source_db_cluster_identifier RdsGlobalCluster#source_db_cluster_identifier}
    */
    readonly sourceDbClusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#storage_encrypted RdsGlobalCluster#storage_encrypted}
    */
    readonly storageEncrypted?: boolean | cdktf.IResolvable;
  }
  export class RdsGlobalClusterGlobalClusterMembers extends cdktf.ComplexComputedList {

    // db_cluster_arn - computed: true, optional: false, required: false
    public get dbClusterArn() {
      return this.getStringAttribute('db_cluster_arn');
    }

    // is_writer - computed: true, optional: false, required: false
    public get isWriter() {
      return this.getBooleanAttribute('is_writer') as any;
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html aws_rds_global_cluster}
  */
  export class RdsGlobalCluster extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_rds_global_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html aws_rds_global_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsGlobalClusterConfig
    */
    public constructor(scope: Construct, id: string, config: RdsGlobalClusterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_rds_global_cluster',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._databaseName = config.databaseName;
      this._deletionProtection = config.deletionProtection;
      this._engine = config.engine;
      this._engineVersion = config.engineVersion;
      this._forceDestroy = config.forceDestroy;
      this._globalClusterIdentifier = config.globalClusterIdentifier;
      this._sourceDbClusterIdentifier = config.sourceDbClusterIdentifier;
      this._storageEncrypted = config.storageEncrypted;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // database_name - computed: false, optional: true, required: false
    private _databaseName?: string | undefined; 
    public get databaseName() {
      return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string | undefined) {
      this._databaseName = value;
    }
    public resetDatabaseName() {
      this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
      return this._databaseName
    }

    // deletion_protection - computed: false, optional: true, required: false
    private _deletionProtection?: boolean | cdktf.IResolvable | undefined; 
    public get deletionProtection() {
      return this.getBooleanAttribute('deletion_protection') as any;
    }
    public set deletionProtection(value: boolean | cdktf.IResolvable | undefined) {
      this._deletionProtection = value;
    }
    public resetDeletionProtection() {
      this._deletionProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionInput() {
      return this._deletionProtection
    }

    // engine - computed: true, optional: true, required: false
    private _engine?: string | undefined; 
    public get engine() {
      return this.getStringAttribute('engine');
    }
    public set engine(value: string | undefined) {
      this._engine = value;
    }
    public resetEngine() {
      this._engine = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineInput() {
      return this._engine
    }

    // engine_version - computed: true, optional: true, required: false
    private _engineVersion?: string | undefined; 
    public get engineVersion() {
      return this.getStringAttribute('engine_version');
    }
    public set engineVersion(value: string | undefined) {
      this._engineVersion = value;
    }
    public resetEngineVersion() {
      this._engineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineVersionInput() {
      return this._engineVersion
    }

    // force_destroy - computed: false, optional: true, required: false
    private _forceDestroy?: boolean | cdktf.IResolvable | undefined; 
    public get forceDestroy() {
      return this.getBooleanAttribute('force_destroy') as any;
    }
    public set forceDestroy(value: boolean | cdktf.IResolvable | undefined) {
      this._forceDestroy = value;
    }
    public resetForceDestroy() {
      this._forceDestroy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceDestroyInput() {
      return this._forceDestroy
    }

    // global_cluster_identifier - computed: false, optional: false, required: true
    private _globalClusterIdentifier?: string; 
    public get globalClusterIdentifier() {
      return this.getStringAttribute('global_cluster_identifier');
    }
    public set globalClusterIdentifier(value: string) {
      this._globalClusterIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get globalClusterIdentifierInput() {
      return this._globalClusterIdentifier
    }

    // global_cluster_members - computed: true, optional: false, required: false
    public globalClusterMembers(index: string) {
      return new RdsGlobalClusterGlobalClusterMembers(this, 'global_cluster_members', index);
    }

    // global_cluster_resource_id - computed: true, optional: false, required: false
    public get globalClusterResourceId() {
      return this.getStringAttribute('global_cluster_resource_id');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // source_db_cluster_identifier - computed: true, optional: true, required: false
    private _sourceDbClusterIdentifier?: string | undefined; 
    public get sourceDbClusterIdentifier() {
      return this.getStringAttribute('source_db_cluster_identifier');
    }
    public set sourceDbClusterIdentifier(value: string | undefined) {
      this._sourceDbClusterIdentifier = value;
    }
    public resetSourceDbClusterIdentifier() {
      this._sourceDbClusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceDbClusterIdentifierInput() {
      return this._sourceDbClusterIdentifier
    }

    // storage_encrypted - computed: true, optional: true, required: false
    private _storageEncrypted?: boolean | cdktf.IResolvable | undefined; 
    public get storageEncrypted() {
      return this.getBooleanAttribute('storage_encrypted') as any;
    }
    public set storageEncrypted(value: boolean | cdktf.IResolvable | undefined) {
      this._storageEncrypted = value;
    }
    public resetStorageEncrypted() {
      this._storageEncrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageEncryptedInput() {
      return this._storageEncrypted
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        database_name: cdktf.stringToTerraform(this._databaseName),
        deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
        engine: cdktf.stringToTerraform(this._engine),
        engine_version: cdktf.stringToTerraform(this._engineVersion),
        force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
        global_cluster_identifier: cdktf.stringToTerraform(this._globalClusterIdentifier),
        source_db_cluster_identifier: cdktf.stringToTerraform(this._sourceDbClusterIdentifier),
        storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
      };
    }
  }
  export interface DataAwsDbClusterSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#db_cluster_identifier DataAwsDbClusterSnapshot#db_cluster_identifier}
    */
    readonly dbClusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#db_cluster_snapshot_identifier DataAwsDbClusterSnapshot#db_cluster_snapshot_identifier}
    */
    readonly dbClusterSnapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#include_public DataAwsDbClusterSnapshot#include_public}
    */
    readonly includePublic?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#include_shared DataAwsDbClusterSnapshot#include_shared}
    */
    readonly includeShared?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#most_recent DataAwsDbClusterSnapshot#most_recent}
    */
    readonly mostRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#snapshot_type DataAwsDbClusterSnapshot#snapshot_type}
    */
    readonly snapshotType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#tags DataAwsDbClusterSnapshot#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html aws_db_cluster_snapshot}
  */
  export class DataAwsDbClusterSnapshot extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_db_cluster_snapshot";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html aws_db_cluster_snapshot} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDbClusterSnapshotConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsDbClusterSnapshotConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_db_cluster_snapshot',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._dbClusterIdentifier = config.dbClusterIdentifier;
      this._dbClusterSnapshotIdentifier = config.dbClusterSnapshotIdentifier;
      this._includePublic = config.includePublic;
      this._includeShared = config.includeShared;
      this._mostRecent = config.mostRecent;
      this._snapshotType = config.snapshotType;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allocated_storage - computed: true, optional: false, required: false
    public get allocatedStorage() {
      return this.getNumberAttribute('allocated_storage');
    }

    // availability_zones - computed: true, optional: false, required: false
    public get availabilityZones() {
      return this.getListAttribute('availability_zones');
    }

    // db_cluster_identifier - computed: false, optional: true, required: false
    private _dbClusterIdentifier?: string | undefined; 
    public get dbClusterIdentifier() {
      return this.getStringAttribute('db_cluster_identifier');
    }
    public set dbClusterIdentifier(value: string | undefined) {
      this._dbClusterIdentifier = value;
    }
    public resetDbClusterIdentifier() {
      this._dbClusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbClusterIdentifierInput() {
      return this._dbClusterIdentifier
    }

    // db_cluster_snapshot_arn - computed: true, optional: false, required: false
    public get dbClusterSnapshotArn() {
      return this.getStringAttribute('db_cluster_snapshot_arn');
    }

    // db_cluster_snapshot_identifier - computed: false, optional: true, required: false
    private _dbClusterSnapshotIdentifier?: string | undefined; 
    public get dbClusterSnapshotIdentifier() {
      return this.getStringAttribute('db_cluster_snapshot_identifier');
    }
    public set dbClusterSnapshotIdentifier(value: string | undefined) {
      this._dbClusterSnapshotIdentifier = value;
    }
    public resetDbClusterSnapshotIdentifier() {
      this._dbClusterSnapshotIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbClusterSnapshotIdentifierInput() {
      return this._dbClusterSnapshotIdentifier
    }

    // engine - computed: true, optional: false, required: false
    public get engine() {
      return this.getStringAttribute('engine');
    }

    // engine_version - computed: true, optional: false, required: false
    public get engineVersion() {
      return this.getStringAttribute('engine_version');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // include_public - computed: false, optional: true, required: false
    private _includePublic?: boolean | cdktf.IResolvable | undefined; 
    public get includePublic() {
      return this.getBooleanAttribute('include_public') as any;
    }
    public set includePublic(value: boolean | cdktf.IResolvable | undefined) {
      this._includePublic = value;
    }
    public resetIncludePublic() {
      this._includePublic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includePublicInput() {
      return this._includePublic
    }

    // include_shared - computed: false, optional: true, required: false
    private _includeShared?: boolean | cdktf.IResolvable | undefined; 
    public get includeShared() {
      return this.getBooleanAttribute('include_shared') as any;
    }
    public set includeShared(value: boolean | cdktf.IResolvable | undefined) {
      this._includeShared = value;
    }
    public resetIncludeShared() {
      this._includeShared = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeSharedInput() {
      return this._includeShared
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // license_model - computed: true, optional: false, required: false
    public get licenseModel() {
      return this.getStringAttribute('license_model');
    }

    // most_recent - computed: false, optional: true, required: false
    private _mostRecent?: boolean | cdktf.IResolvable | undefined; 
    public get mostRecent() {
      return this.getBooleanAttribute('most_recent') as any;
    }
    public set mostRecent(value: boolean | cdktf.IResolvable | undefined) {
      this._mostRecent = value;
    }
    public resetMostRecent() {
      this._mostRecent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mostRecentInput() {
      return this._mostRecent
    }

    // port - computed: true, optional: false, required: false
    public get port() {
      return this.getNumberAttribute('port');
    }

    // snapshot_create_time - computed: true, optional: false, required: false
    public get snapshotCreateTime() {
      return this.getStringAttribute('snapshot_create_time');
    }

    // snapshot_type - computed: false, optional: true, required: false
    private _snapshotType?: string | undefined; 
    public get snapshotType() {
      return this.getStringAttribute('snapshot_type');
    }
    public set snapshotType(value: string | undefined) {
      this._snapshotType = value;
    }
    public resetSnapshotType() {
      this._snapshotType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotTypeInput() {
      return this._snapshotType
    }

    // source_db_cluster_snapshot_arn - computed: true, optional: false, required: false
    public get sourceDbClusterSnapshotArn() {
      return this.getStringAttribute('source_db_cluster_snapshot_arn');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // storage_encrypted - computed: true, optional: false, required: false
    public get storageEncrypted() {
      return this.getBooleanAttribute('storage_encrypted') as any;
    }

    // tags - computed: true, optional: true, required: false
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

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        db_cluster_identifier: cdktf.stringToTerraform(this._dbClusterIdentifier),
        db_cluster_snapshot_identifier: cdktf.stringToTerraform(this._dbClusterSnapshotIdentifier),
        include_public: cdktf.booleanToTerraform(this._includePublic),
        include_shared: cdktf.booleanToTerraform(this._includeShared),
        most_recent: cdktf.booleanToTerraform(this._mostRecent),
        snapshot_type: cdktf.stringToTerraform(this._snapshotType),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsDbEventCategoriesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_event_categories.html#source_type DataAwsDbEventCategories#source_type}
    */
    readonly sourceType?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_event_categories.html aws_db_event_categories}
  */
  export class DataAwsDbEventCategories extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_db_event_categories";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_event_categories.html aws_db_event_categories} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDbEventCategoriesConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsDbEventCategoriesConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_db_event_categories',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._sourceType = config.sourceType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // event_categories - computed: true, optional: false, required: false
    public get eventCategories() {
      return this.getListAttribute('event_categories');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // source_type - computed: false, optional: true, required: false
    private _sourceType?: string | undefined; 
    public get sourceType() {
      return this.getStringAttribute('source_type');
    }
    public set sourceType(value: string | undefined) {
      this._sourceType = value;
    }
    public resetSourceType() {
      this._sourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceTypeInput() {
      return this._sourceType
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        source_type: cdktf.stringToTerraform(this._sourceType),
      };
    }
  }
  export interface DataAwsDbInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_instance.html#db_instance_identifier DataAwsDbInstance#db_instance_identifier}
    */
    readonly dbInstanceIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_instance.html#tags DataAwsDbInstance#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_instance.html aws_db_instance}
  */
  export class DataAwsDbInstance extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_db_instance";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_instance.html aws_db_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDbInstanceConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsDbInstanceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_db_instance',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._dbInstanceIdentifier = config.dbInstanceIdentifier;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // address - computed: true, optional: false, required: false
    public get address() {
      return this.getStringAttribute('address');
    }

    // allocated_storage - computed: true, optional: false, required: false
    public get allocatedStorage() {
      return this.getNumberAttribute('allocated_storage');
    }

    // auto_minor_version_upgrade - computed: true, optional: false, required: false
    public get autoMinorVersionUpgrade() {
      return this.getBooleanAttribute('auto_minor_version_upgrade') as any;
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }

    // backup_retention_period - computed: true, optional: false, required: false
    public get backupRetentionPeriod() {
      return this.getNumberAttribute('backup_retention_period');
    }

    // ca_cert_identifier - computed: true, optional: false, required: false
    public get caCertIdentifier() {
      return this.getStringAttribute('ca_cert_identifier');
    }

    // db_cluster_identifier - computed: true, optional: false, required: false
    public get dbClusterIdentifier() {
      return this.getStringAttribute('db_cluster_identifier');
    }

    // db_instance_arn - computed: true, optional: false, required: false
    public get dbInstanceArn() {
      return this.getStringAttribute('db_instance_arn');
    }

    // db_instance_class - computed: true, optional: false, required: false
    public get dbInstanceClass() {
      return this.getStringAttribute('db_instance_class');
    }

    // db_instance_identifier - computed: false, optional: false, required: true
    private _dbInstanceIdentifier?: string; 
    public get dbInstanceIdentifier() {
      return this.getStringAttribute('db_instance_identifier');
    }
    public set dbInstanceIdentifier(value: string) {
      this._dbInstanceIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dbInstanceIdentifierInput() {
      return this._dbInstanceIdentifier
    }

    // db_instance_port - computed: true, optional: false, required: false
    public get dbInstancePort() {
      return this.getNumberAttribute('db_instance_port');
    }

    // db_name - computed: true, optional: false, required: false
    public get dbName() {
      return this.getStringAttribute('db_name');
    }

    // db_parameter_groups - computed: true, optional: false, required: false
    public get dbParameterGroups() {
      return this.getListAttribute('db_parameter_groups');
    }

    // db_security_groups - computed: true, optional: false, required: false
    public get dbSecurityGroups() {
      return this.getListAttribute('db_security_groups');
    }

    // db_subnet_group - computed: true, optional: false, required: false
    public get dbSubnetGroup() {
      return this.getStringAttribute('db_subnet_group');
    }

    // enabled_cloudwatch_logs_exports - computed: true, optional: false, required: false
    public get enabledCloudwatchLogsExports() {
      return this.getListAttribute('enabled_cloudwatch_logs_exports');
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }

    // engine - computed: true, optional: false, required: false
    public get engine() {
      return this.getStringAttribute('engine');
    }

    // engine_version - computed: true, optional: false, required: false
    public get engineVersion() {
      return this.getStringAttribute('engine_version');
    }

    // hosted_zone_id - computed: true, optional: false, required: false
    public get hostedZoneId() {
      return this.getStringAttribute('hosted_zone_id');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // iops - computed: true, optional: false, required: false
    public get iops() {
      return this.getNumberAttribute('iops');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // license_model - computed: true, optional: false, required: false
    public get licenseModel() {
      return this.getStringAttribute('license_model');
    }

    // master_username - computed: true, optional: false, required: false
    public get masterUsername() {
      return this.getStringAttribute('master_username');
    }

    // monitoring_interval - computed: true, optional: false, required: false
    public get monitoringInterval() {
      return this.getNumberAttribute('monitoring_interval');
    }

    // monitoring_role_arn - computed: true, optional: false, required: false
    public get monitoringRoleArn() {
      return this.getStringAttribute('monitoring_role_arn');
    }

    // multi_az - computed: true, optional: false, required: false
    public get multiAz() {
      return this.getBooleanAttribute('multi_az') as any;
    }

    // option_group_memberships - computed: true, optional: false, required: false
    public get optionGroupMemberships() {
      return this.getListAttribute('option_group_memberships');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
      return this.getNumberAttribute('port');
    }

    // preferred_backup_window - computed: true, optional: false, required: false
    public get preferredBackupWindow() {
      return this.getStringAttribute('preferred_backup_window');
    }

    // preferred_maintenance_window - computed: true, optional: false, required: false
    public get preferredMaintenanceWindow() {
      return this.getStringAttribute('preferred_maintenance_window');
    }

    // publicly_accessible - computed: true, optional: false, required: false
    public get publiclyAccessible() {
      return this.getBooleanAttribute('publicly_accessible') as any;
    }

    // replicate_source_db - computed: true, optional: false, required: false
    public get replicateSourceDb() {
      return this.getStringAttribute('replicate_source_db');
    }

    // resource_id - computed: true, optional: false, required: false
    public get resourceId() {
      return this.getStringAttribute('resource_id');
    }

    // storage_encrypted - computed: true, optional: false, required: false
    public get storageEncrypted() {
      return this.getBooleanAttribute('storage_encrypted') as any;
    }

    // storage_type - computed: true, optional: false, required: false
    public get storageType() {
      return this.getStringAttribute('storage_type');
    }

    // tags - computed: true, optional: true, required: false
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

    // timezone - computed: true, optional: false, required: false
    public get timezone() {
      return this.getStringAttribute('timezone');
    }

    // vpc_security_groups - computed: true, optional: false, required: false
    public get vpcSecurityGroups() {
      return this.getListAttribute('vpc_security_groups');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        db_instance_identifier: cdktf.stringToTerraform(this._dbInstanceIdentifier),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsDbProxyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_proxy.html#name DataAwsDbProxy#name}
    */
    readonly name: string;
  }
  export class DataAwsDbProxyAuth extends cdktf.ComplexComputedList {

    // auth_scheme - computed: true, optional: false, required: false
    public get authScheme() {
      return this.getStringAttribute('auth_scheme');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // iam_auth - computed: true, optional: false, required: false
    public get iamAuth() {
      return this.getStringAttribute('iam_auth');
    }

    // secret_arn - computed: true, optional: false, required: false
    public get secretArn() {
      return this.getStringAttribute('secret_arn');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_proxy.html aws_db_proxy}
  */
  export class DataAwsDbProxy extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_db_proxy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_proxy.html aws_db_proxy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDbProxyConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsDbProxyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_db_proxy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auth - computed: true, optional: false, required: false
    public auth(index: string) {
      return new DataAwsDbProxyAuth(this, 'auth', index);
    }

    // debug_logging - computed: true, optional: false, required: false
    public get debugLogging() {
      return this.getBooleanAttribute('debug_logging') as any;
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }

    // engine_family - computed: true, optional: false, required: false
    public get engineFamily() {
      return this.getStringAttribute('engine_family');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // idle_client_timeout - computed: true, optional: false, required: false
    public get idleClientTimeout() {
      return this.getNumberAttribute('idle_client_timeout');
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

    // require_tls - computed: true, optional: false, required: false
    public get requireTls() {
      return this.getBooleanAttribute('require_tls') as any;
    }

    // role_arn - computed: true, optional: false, required: false
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }

    // vpc_security_group_ids - computed: true, optional: false, required: false
    public get vpcSecurityGroupIds() {
      return this.getListAttribute('vpc_security_group_ids');
    }

    // vpc_subnet_ids - computed: true, optional: false, required: false
    public get vpcSubnetIds() {
      return this.getListAttribute('vpc_subnet_ids');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsDbSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html#db_instance_identifier DataAwsDbSnapshot#db_instance_identifier}
    */
    readonly dbInstanceIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html#db_snapshot_identifier DataAwsDbSnapshot#db_snapshot_identifier}
    */
    readonly dbSnapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html#include_public DataAwsDbSnapshot#include_public}
    */
    readonly includePublic?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html#include_shared DataAwsDbSnapshot#include_shared}
    */
    readonly includeShared?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html#most_recent DataAwsDbSnapshot#most_recent}
    */
    readonly mostRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html#snapshot_type DataAwsDbSnapshot#snapshot_type}
    */
    readonly snapshotType?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html aws_db_snapshot}
  */
  export class DataAwsDbSnapshot extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_db_snapshot";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html aws_db_snapshot} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDbSnapshotConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsDbSnapshotConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_db_snapshot',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._dbInstanceIdentifier = config.dbInstanceIdentifier;
      this._dbSnapshotIdentifier = config.dbSnapshotIdentifier;
      this._includePublic = config.includePublic;
      this._includeShared = config.includeShared;
      this._mostRecent = config.mostRecent;
      this._snapshotType = config.snapshotType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allocated_storage - computed: true, optional: false, required: false
    public get allocatedStorage() {
      return this.getNumberAttribute('allocated_storage');
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }

    // db_instance_identifier - computed: false, optional: true, required: false
    private _dbInstanceIdentifier?: string | undefined; 
    public get dbInstanceIdentifier() {
      return this.getStringAttribute('db_instance_identifier');
    }
    public set dbInstanceIdentifier(value: string | undefined) {
      this._dbInstanceIdentifier = value;
    }
    public resetDbInstanceIdentifier() {
      this._dbInstanceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbInstanceIdentifierInput() {
      return this._dbInstanceIdentifier
    }

    // db_snapshot_arn - computed: true, optional: false, required: false
    public get dbSnapshotArn() {
      return this.getStringAttribute('db_snapshot_arn');
    }

    // db_snapshot_identifier - computed: false, optional: true, required: false
    private _dbSnapshotIdentifier?: string | undefined; 
    public get dbSnapshotIdentifier() {
      return this.getStringAttribute('db_snapshot_identifier');
    }
    public set dbSnapshotIdentifier(value: string | undefined) {
      this._dbSnapshotIdentifier = value;
    }
    public resetDbSnapshotIdentifier() {
      this._dbSnapshotIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbSnapshotIdentifierInput() {
      return this._dbSnapshotIdentifier
    }

    // encrypted - computed: true, optional: false, required: false
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }

    // engine - computed: true, optional: false, required: false
    public get engine() {
      return this.getStringAttribute('engine');
    }

    // engine_version - computed: true, optional: false, required: false
    public get engineVersion() {
      return this.getStringAttribute('engine_version');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // include_public - computed: false, optional: true, required: false
    private _includePublic?: boolean | cdktf.IResolvable | undefined; 
    public get includePublic() {
      return this.getBooleanAttribute('include_public') as any;
    }
    public set includePublic(value: boolean | cdktf.IResolvable | undefined) {
      this._includePublic = value;
    }
    public resetIncludePublic() {
      this._includePublic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includePublicInput() {
      return this._includePublic
    }

    // include_shared - computed: false, optional: true, required: false
    private _includeShared?: boolean | cdktf.IResolvable | undefined; 
    public get includeShared() {
      return this.getBooleanAttribute('include_shared') as any;
    }
    public set includeShared(value: boolean | cdktf.IResolvable | undefined) {
      this._includeShared = value;
    }
    public resetIncludeShared() {
      this._includeShared = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeSharedInput() {
      return this._includeShared
    }

    // iops - computed: true, optional: false, required: false
    public get iops() {
      return this.getNumberAttribute('iops');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // license_model - computed: true, optional: false, required: false
    public get licenseModel() {
      return this.getStringAttribute('license_model');
    }

    // most_recent - computed: false, optional: true, required: false
    private _mostRecent?: boolean | cdktf.IResolvable | undefined; 
    public get mostRecent() {
      return this.getBooleanAttribute('most_recent') as any;
    }
    public set mostRecent(value: boolean | cdktf.IResolvable | undefined) {
      this._mostRecent = value;
    }
    public resetMostRecent() {
      this._mostRecent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mostRecentInput() {
      return this._mostRecent
    }

    // option_group_name - computed: true, optional: false, required: false
    public get optionGroupName() {
      return this.getStringAttribute('option_group_name');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
      return this.getNumberAttribute('port');
    }

    // snapshot_create_time - computed: true, optional: false, required: false
    public get snapshotCreateTime() {
      return this.getStringAttribute('snapshot_create_time');
    }

    // snapshot_type - computed: false, optional: true, required: false
    private _snapshotType?: string | undefined; 
    public get snapshotType() {
      return this.getStringAttribute('snapshot_type');
    }
    public set snapshotType(value: string | undefined) {
      this._snapshotType = value;
    }
    public resetSnapshotType() {
      this._snapshotType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotTypeInput() {
      return this._snapshotType
    }

    // source_db_snapshot_identifier - computed: true, optional: false, required: false
    public get sourceDbSnapshotIdentifier() {
      return this.getStringAttribute('source_db_snapshot_identifier');
    }

    // source_region - computed: true, optional: false, required: false
    public get sourceRegion() {
      return this.getStringAttribute('source_region');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // storage_type - computed: true, optional: false, required: false
    public get storageType() {
      return this.getStringAttribute('storage_type');
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
        db_instance_identifier: cdktf.stringToTerraform(this._dbInstanceIdentifier),
        db_snapshot_identifier: cdktf.stringToTerraform(this._dbSnapshotIdentifier),
        include_public: cdktf.booleanToTerraform(this._includePublic),
        include_shared: cdktf.booleanToTerraform(this._includeShared),
        most_recent: cdktf.booleanToTerraform(this._mostRecent),
        snapshot_type: cdktf.stringToTerraform(this._snapshotType),
      };
    }
  }
  export interface DataAwsDbSubnetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_subnet_group.html#name DataAwsDbSubnetGroup#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_subnet_group.html aws_db_subnet_group}
  */
  export class DataAwsDbSubnetGroup extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_db_subnet_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_subnet_group.html aws_db_subnet_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDbSubnetGroupConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsDbSubnetGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_db_subnet_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
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

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
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
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsRdsCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_certificate.html#latest_valid_till DataAwsRdsCertificate#latest_valid_till}
    */
    readonly latestValidTill?: boolean | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_certificate.html aws_rds_certificate}
  */
  export class DataAwsRdsCertificate extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_rds_certificate";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/rds_certificate.html aws_rds_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRdsCertificateConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsRdsCertificateConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_rds_certificate',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._latestValidTill = config.latestValidTill;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // certificate_type - computed: true, optional: false, required: false
    public get certificateType() {
      return this.getStringAttribute('certificate_type');
    }

    // customer_override - computed: true, optional: false, required: false
    public get customerOverride() {
      return this.getBooleanAttribute('customer_override') as any;
    }

    // customer_override_valid_till - computed: true, optional: false, required: false
    public get customerOverrideValidTill() {
      return this.getStringAttribute('customer_override_valid_till');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // latest_valid_till - computed: false, optional: true, required: false
    private _latestValidTill?: boolean | cdktf.IResolvable | undefined; 
    public get latestValidTill() {
      return this.getBooleanAttribute('latest_valid_till') as any;
    }
    public set latestValidTill(value: boolean | cdktf.IResolvable | undefined) {
      this._latestValidTill = value;
    }
    public resetLatestValidTill() {
      this._latestValidTill = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get latestValidTillInput() {
      return this._latestValidTill
    }

    // thumbprint - computed: true, optional: false, required: false
    public get thumbprint() {
      return this.getStringAttribute('thumbprint');
    }

    // valid_from - computed: true, optional: false, required: false
    public get validFrom() {
      return this.getStringAttribute('valid_from');
    }

    // valid_till - computed: true, optional: false, required: false
    public get validTill() {
      return this.getStringAttribute('valid_till');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        latest_valid_till: cdktf.booleanToTerraform(this._latestValidTill),
      };
    }
  }
  export interface DataAwsRdsClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_cluster.html#cluster_identifier DataAwsRdsCluster#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_cluster.html#tags DataAwsRdsCluster#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_cluster.html aws_rds_cluster}
  */
  export class DataAwsRdsCluster extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_rds_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/rds_cluster.html aws_rds_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRdsClusterConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsRdsClusterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_rds_cluster',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterIdentifier = config.clusterIdentifier;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // availability_zones - computed: true, optional: false, required: false
    public get availabilityZones() {
      return this.getListAttribute('availability_zones');
    }

    // backtrack_window - computed: true, optional: false, required: false
    public get backtrackWindow() {
      return this.getNumberAttribute('backtrack_window');
    }

    // backup_retention_period - computed: true, optional: false, required: false
    public get backupRetentionPeriod() {
      return this.getNumberAttribute('backup_retention_period');
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
      return this._clusterIdentifier
    }

    // cluster_members - computed: true, optional: false, required: false
    public get clusterMembers() {
      return this.getListAttribute('cluster_members');
    }

    // cluster_resource_id - computed: true, optional: false, required: false
    public get clusterResourceId() {
      return this.getStringAttribute('cluster_resource_id');
    }

    // database_name - computed: true, optional: false, required: false
    public get databaseName() {
      return this.getStringAttribute('database_name');
    }

    // db_cluster_parameter_group_name - computed: true, optional: false, required: false
    public get dbClusterParameterGroupName() {
      return this.getStringAttribute('db_cluster_parameter_group_name');
    }

    // db_subnet_group_name - computed: true, optional: false, required: false
    public get dbSubnetGroupName() {
      return this.getStringAttribute('db_subnet_group_name');
    }

    // enabled_cloudwatch_logs_exports - computed: true, optional: false, required: false
    public get enabledCloudwatchLogsExports() {
      return this.getListAttribute('enabled_cloudwatch_logs_exports');
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }

    // engine - computed: true, optional: false, required: false
    public get engine() {
      return this.getStringAttribute('engine');
    }

    // engine_version - computed: true, optional: false, required: false
    public get engineVersion() {
      return this.getStringAttribute('engine_version');
    }

    // final_snapshot_identifier - computed: true, optional: false, required: false
    public get finalSnapshotIdentifier() {
      return this.getStringAttribute('final_snapshot_identifier');
    }

    // hosted_zone_id - computed: true, optional: false, required: false
    public get hostedZoneId() {
      return this.getStringAttribute('hosted_zone_id');
    }

    // iam_database_authentication_enabled - computed: true, optional: false, required: false
    public get iamDatabaseAuthenticationEnabled() {
      return this.getBooleanAttribute('iam_database_authentication_enabled') as any;
    }

    // iam_roles - computed: true, optional: false, required: false
    public get iamRoles() {
      return this.getListAttribute('iam_roles');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // master_username - computed: true, optional: false, required: false
    public get masterUsername() {
      return this.getStringAttribute('master_username');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
      return this.getNumberAttribute('port');
    }

    // preferred_backup_window - computed: true, optional: false, required: false
    public get preferredBackupWindow() {
      return this.getStringAttribute('preferred_backup_window');
    }

    // preferred_maintenance_window - computed: true, optional: false, required: false
    public get preferredMaintenanceWindow() {
      return this.getStringAttribute('preferred_maintenance_window');
    }

    // reader_endpoint - computed: true, optional: false, required: false
    public get readerEndpoint() {
      return this.getStringAttribute('reader_endpoint');
    }

    // replication_source_identifier - computed: true, optional: false, required: false
    public get replicationSourceIdentifier() {
      return this.getStringAttribute('replication_source_identifier');
    }

    // storage_encrypted - computed: true, optional: false, required: false
    public get storageEncrypted() {
      return this.getBooleanAttribute('storage_encrypted') as any;
    }

    // tags - computed: true, optional: true, required: false
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

    // vpc_security_group_ids - computed: true, optional: false, required: false
    public get vpcSecurityGroupIds() {
      return this.getListAttribute('vpc_security_group_ids');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsRdsEngineVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version.html#engine DataAwsRdsEngineVersion#engine}
    */
    readonly engine: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version.html#parameter_group_family DataAwsRdsEngineVersion#parameter_group_family}
    */
    readonly parameterGroupFamily?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version.html#preferred_versions DataAwsRdsEngineVersion#preferred_versions}
    */
    readonly preferredVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version.html#version DataAwsRdsEngineVersion#version}
    */
    readonly version?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version.html aws_rds_engine_version}
  */
  export class DataAwsRdsEngineVersion extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_rds_engine_version";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version.html aws_rds_engine_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRdsEngineVersionConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsRdsEngineVersionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_rds_engine_version',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._engine = config.engine;
      this._parameterGroupFamily = config.parameterGroupFamily;
      this._preferredVersions = config.preferredVersions;
      this._version = config.version;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // default_character_set - computed: true, optional: false, required: false
    public get defaultCharacterSet() {
      return this.getStringAttribute('default_character_set');
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
      return this._engine
    }

    // engine_description - computed: true, optional: false, required: false
    public get engineDescription() {
      return this.getStringAttribute('engine_description');
    }

    // exportable_log_types - computed: true, optional: false, required: false
    public get exportableLogTypes() {
      return this.getListAttribute('exportable_log_types');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // parameter_group_family - computed: true, optional: true, required: false
    private _parameterGroupFamily?: string | undefined; 
    public get parameterGroupFamily() {
      return this.getStringAttribute('parameter_group_family');
    }
    public set parameterGroupFamily(value: string | undefined) {
      this._parameterGroupFamily = value;
    }
    public resetParameterGroupFamily() {
      this._parameterGroupFamily = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterGroupFamilyInput() {
      return this._parameterGroupFamily
    }

    // preferred_versions - computed: false, optional: true, required: false
    private _preferredVersions?: string[] | undefined; 
    public get preferredVersions() {
      return this.getListAttribute('preferred_versions');
    }
    public set preferredVersions(value: string[] | undefined) {
      this._preferredVersions = value;
    }
    public resetPreferredVersions() {
      this._preferredVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredVersionsInput() {
      return this._preferredVersions
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // supported_character_sets - computed: true, optional: false, required: false
    public get supportedCharacterSets() {
      return this.getListAttribute('supported_character_sets');
    }

    // supported_feature_names - computed: true, optional: false, required: false
    public get supportedFeatureNames() {
      return this.getListAttribute('supported_feature_names');
    }

    // supported_modes - computed: true, optional: false, required: false
    public get supportedModes() {
      return this.getListAttribute('supported_modes');
    }

    // supported_timezones - computed: true, optional: false, required: false
    public get supportedTimezones() {
      return this.getListAttribute('supported_timezones');
    }

    // supports_global_databases - computed: true, optional: false, required: false
    public get supportsGlobalDatabases() {
      return this.getBooleanAttribute('supports_global_databases') as any;
    }

    // supports_log_exports_to_cloudwatch - computed: true, optional: false, required: false
    public get supportsLogExportsToCloudwatch() {
      return this.getBooleanAttribute('supports_log_exports_to_cloudwatch') as any;
    }

    // supports_parallel_query - computed: true, optional: false, required: false
    public get supportsParallelQuery() {
      return this.getBooleanAttribute('supports_parallel_query') as any;
    }

    // supports_read_replica - computed: true, optional: false, required: false
    public get supportsReadReplica() {
      return this.getBooleanAttribute('supports_read_replica') as any;
    }

    // valid_upgrade_targets - computed: true, optional: false, required: false
    public get validUpgradeTargets() {
      return this.getListAttribute('valid_upgrade_targets');
    }

    // version - computed: true, optional: true, required: false
    private _version?: string | undefined; 
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string | undefined) {
      this._version = value;
    }
    public resetVersion() {
      this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }

    // version_description - computed: true, optional: false, required: false
    public get versionDescription() {
      return this.getStringAttribute('version_description');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        engine: cdktf.stringToTerraform(this._engine),
        parameter_group_family: cdktf.stringToTerraform(this._parameterGroupFamily),
        preferred_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredVersions),
        version: cdktf.stringToTerraform(this._version),
      };
    }
  }
  export interface DataAwsRdsOrderableDbInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#availability_zone_group DataAwsRdsOrderableDbInstance#availability_zone_group}
    */
    readonly availabilityZoneGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#engine DataAwsRdsOrderableDbInstance#engine}
    */
    readonly engine: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#engine_version DataAwsRdsOrderableDbInstance#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#instance_class DataAwsRdsOrderableDbInstance#instance_class}
    */
    readonly instanceClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#license_model DataAwsRdsOrderableDbInstance#license_model}
    */
    readonly licenseModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#preferred_engine_versions DataAwsRdsOrderableDbInstance#preferred_engine_versions}
    */
    readonly preferredEngineVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#preferred_instance_classes DataAwsRdsOrderableDbInstance#preferred_instance_classes}
    */
    readonly preferredInstanceClasses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#storage_type DataAwsRdsOrderableDbInstance#storage_type}
    */
    readonly storageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_enhanced_monitoring DataAwsRdsOrderableDbInstance#supports_enhanced_monitoring}
    */
    readonly supportsEnhancedMonitoring?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_global_databases DataAwsRdsOrderableDbInstance#supports_global_databases}
    */
    readonly supportsGlobalDatabases?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_iam_database_authentication DataAwsRdsOrderableDbInstance#supports_iam_database_authentication}
    */
    readonly supportsIamDatabaseAuthentication?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_iops DataAwsRdsOrderableDbInstance#supports_iops}
    */
    readonly supportsIops?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_kerberos_authentication DataAwsRdsOrderableDbInstance#supports_kerberos_authentication}
    */
    readonly supportsKerberosAuthentication?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_performance_insights DataAwsRdsOrderableDbInstance#supports_performance_insights}
    */
    readonly supportsPerformanceInsights?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_storage_autoscaling DataAwsRdsOrderableDbInstance#supports_storage_autoscaling}
    */
    readonly supportsStorageAutoscaling?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_storage_encryption DataAwsRdsOrderableDbInstance#supports_storage_encryption}
    */
    readonly supportsStorageEncryption?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#vpc DataAwsRdsOrderableDbInstance#vpc}
    */
    readonly vpc?: boolean | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html aws_rds_orderable_db_instance}
  */
  export class DataAwsRdsOrderableDbInstance extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_rds_orderable_db_instance";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html aws_rds_orderable_db_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRdsOrderableDbInstanceConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsRdsOrderableDbInstanceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_rds_orderable_db_instance',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._availabilityZoneGroup = config.availabilityZoneGroup;
      this._engine = config.engine;
      this._engineVersion = config.engineVersion;
      this._instanceClass = config.instanceClass;
      this._licenseModel = config.licenseModel;
      this._preferredEngineVersions = config.preferredEngineVersions;
      this._preferredInstanceClasses = config.preferredInstanceClasses;
      this._storageType = config.storageType;
      this._supportsEnhancedMonitoring = config.supportsEnhancedMonitoring;
      this._supportsGlobalDatabases = config.supportsGlobalDatabases;
      this._supportsIamDatabaseAuthentication = config.supportsIamDatabaseAuthentication;
      this._supportsIops = config.supportsIops;
      this._supportsKerberosAuthentication = config.supportsKerberosAuthentication;
      this._supportsPerformanceInsights = config.supportsPerformanceInsights;
      this._supportsStorageAutoscaling = config.supportsStorageAutoscaling;
      this._supportsStorageEncryption = config.supportsStorageEncryption;
      this._vpc = config.vpc;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // availability_zone_group - computed: true, optional: true, required: false
    private _availabilityZoneGroup?: string | undefined; 
    public get availabilityZoneGroup() {
      return this.getStringAttribute('availability_zone_group');
    }
    public set availabilityZoneGroup(value: string | undefined) {
      this._availabilityZoneGroup = value;
    }
    public resetAvailabilityZoneGroup() {
      this._availabilityZoneGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneGroupInput() {
      return this._availabilityZoneGroup
    }

    // availability_zones - computed: true, optional: false, required: false
    public get availabilityZones() {
      return this.getListAttribute('availability_zones');
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
      return this._engine
    }

    // engine_version - computed: true, optional: true, required: false
    private _engineVersion?: string | undefined; 
    public get engineVersion() {
      return this.getStringAttribute('engine_version');
    }
    public set engineVersion(value: string | undefined) {
      this._engineVersion = value;
    }
    public resetEngineVersion() {
      this._engineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineVersionInput() {
      return this._engineVersion
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_class - computed: true, optional: true, required: false
    private _instanceClass?: string | undefined; 
    public get instanceClass() {
      return this.getStringAttribute('instance_class');
    }
    public set instanceClass(value: string | undefined) {
      this._instanceClass = value;
    }
    public resetInstanceClass() {
      this._instanceClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceClassInput() {
      return this._instanceClass
    }

    // license_model - computed: true, optional: true, required: false
    private _licenseModel?: string | undefined; 
    public get licenseModel() {
      return this.getStringAttribute('license_model');
    }
    public set licenseModel(value: string | undefined) {
      this._licenseModel = value;
    }
    public resetLicenseModel() {
      this._licenseModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseModelInput() {
      return this._licenseModel
    }

    // max_iops_per_db_instance - computed: true, optional: false, required: false
    public get maxIopsPerDbInstance() {
      return this.getNumberAttribute('max_iops_per_db_instance');
    }

    // max_iops_per_gib - computed: true, optional: false, required: false
    public get maxIopsPerGib() {
      return this.getNumberAttribute('max_iops_per_gib');
    }

    // max_storage_size - computed: true, optional: false, required: false
    public get maxStorageSize() {
      return this.getNumberAttribute('max_storage_size');
    }

    // min_iops_per_db_instance - computed: true, optional: false, required: false
    public get minIopsPerDbInstance() {
      return this.getNumberAttribute('min_iops_per_db_instance');
    }

    // min_iops_per_gib - computed: true, optional: false, required: false
    public get minIopsPerGib() {
      return this.getNumberAttribute('min_iops_per_gib');
    }

    // min_storage_size - computed: true, optional: false, required: false
    public get minStorageSize() {
      return this.getNumberAttribute('min_storage_size');
    }

    // multi_az_capable - computed: true, optional: false, required: false
    public get multiAzCapable() {
      return this.getBooleanAttribute('multi_az_capable') as any;
    }

    // outpost_capable - computed: true, optional: false, required: false
    public get outpostCapable() {
      return this.getBooleanAttribute('outpost_capable') as any;
    }

    // preferred_engine_versions - computed: false, optional: true, required: false
    private _preferredEngineVersions?: string[] | undefined; 
    public get preferredEngineVersions() {
      return this.getListAttribute('preferred_engine_versions');
    }
    public set preferredEngineVersions(value: string[] | undefined) {
      this._preferredEngineVersions = value;
    }
    public resetPreferredEngineVersions() {
      this._preferredEngineVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredEngineVersionsInput() {
      return this._preferredEngineVersions
    }

    // preferred_instance_classes - computed: false, optional: true, required: false
    private _preferredInstanceClasses?: string[] | undefined; 
    public get preferredInstanceClasses() {
      return this.getListAttribute('preferred_instance_classes');
    }
    public set preferredInstanceClasses(value: string[] | undefined) {
      this._preferredInstanceClasses = value;
    }
    public resetPreferredInstanceClasses() {
      this._preferredInstanceClasses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredInstanceClassesInput() {
      return this._preferredInstanceClasses
    }

    // read_replica_capable - computed: true, optional: false, required: false
    public get readReplicaCapable() {
      return this.getBooleanAttribute('read_replica_capable') as any;
    }

    // storage_type - computed: true, optional: true, required: false
    private _storageType?: string | undefined; 
    public get storageType() {
      return this.getStringAttribute('storage_type');
    }
    public set storageType(value: string | undefined) {
      this._storageType = value;
    }
    public resetStorageType() {
      this._storageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageTypeInput() {
      return this._storageType
    }

    // supported_engine_modes - computed: true, optional: false, required: false
    public get supportedEngineModes() {
      return this.getListAttribute('supported_engine_modes');
    }

    // supports_enhanced_monitoring - computed: true, optional: true, required: false
    private _supportsEnhancedMonitoring?: boolean | cdktf.IResolvable | undefined; 
    public get supportsEnhancedMonitoring() {
      return this.getBooleanAttribute('supports_enhanced_monitoring') as any;
    }
    public set supportsEnhancedMonitoring(value: boolean | cdktf.IResolvable | undefined) {
      this._supportsEnhancedMonitoring = value;
    }
    public resetSupportsEnhancedMonitoring() {
      this._supportsEnhancedMonitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportsEnhancedMonitoringInput() {
      return this._supportsEnhancedMonitoring
    }

    // supports_global_databases - computed: true, optional: true, required: false
    private _supportsGlobalDatabases?: boolean | cdktf.IResolvable | undefined; 
    public get supportsGlobalDatabases() {
      return this.getBooleanAttribute('supports_global_databases') as any;
    }
    public set supportsGlobalDatabases(value: boolean | cdktf.IResolvable | undefined) {
      this._supportsGlobalDatabases = value;
    }
    public resetSupportsGlobalDatabases() {
      this._supportsGlobalDatabases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportsGlobalDatabasesInput() {
      return this._supportsGlobalDatabases
    }

    // supports_iam_database_authentication - computed: true, optional: true, required: false
    private _supportsIamDatabaseAuthentication?: boolean | cdktf.IResolvable | undefined; 
    public get supportsIamDatabaseAuthentication() {
      return this.getBooleanAttribute('supports_iam_database_authentication') as any;
    }
    public set supportsIamDatabaseAuthentication(value: boolean | cdktf.IResolvable | undefined) {
      this._supportsIamDatabaseAuthentication = value;
    }
    public resetSupportsIamDatabaseAuthentication() {
      this._supportsIamDatabaseAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportsIamDatabaseAuthenticationInput() {
      return this._supportsIamDatabaseAuthentication
    }

    // supports_iops - computed: true, optional: true, required: false
    private _supportsIops?: boolean | cdktf.IResolvable | undefined; 
    public get supportsIops() {
      return this.getBooleanAttribute('supports_iops') as any;
    }
    public set supportsIops(value: boolean | cdktf.IResolvable | undefined) {
      this._supportsIops = value;
    }
    public resetSupportsIops() {
      this._supportsIops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportsIopsInput() {
      return this._supportsIops
    }

    // supports_kerberos_authentication - computed: true, optional: true, required: false
    private _supportsKerberosAuthentication?: boolean | cdktf.IResolvable | undefined; 
    public get supportsKerberosAuthentication() {
      return this.getBooleanAttribute('supports_kerberos_authentication') as any;
    }
    public set supportsKerberosAuthentication(value: boolean | cdktf.IResolvable | undefined) {
      this._supportsKerberosAuthentication = value;
    }
    public resetSupportsKerberosAuthentication() {
      this._supportsKerberosAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportsKerberosAuthenticationInput() {
      return this._supportsKerberosAuthentication
    }

    // supports_performance_insights - computed: true, optional: true, required: false
    private _supportsPerformanceInsights?: boolean | cdktf.IResolvable | undefined; 
    public get supportsPerformanceInsights() {
      return this.getBooleanAttribute('supports_performance_insights') as any;
    }
    public set supportsPerformanceInsights(value: boolean | cdktf.IResolvable | undefined) {
      this._supportsPerformanceInsights = value;
    }
    public resetSupportsPerformanceInsights() {
      this._supportsPerformanceInsights = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportsPerformanceInsightsInput() {
      return this._supportsPerformanceInsights
    }

    // supports_storage_autoscaling - computed: true, optional: true, required: false
    private _supportsStorageAutoscaling?: boolean | cdktf.IResolvable | undefined; 
    public get supportsStorageAutoscaling() {
      return this.getBooleanAttribute('supports_storage_autoscaling') as any;
    }
    public set supportsStorageAutoscaling(value: boolean | cdktf.IResolvable | undefined) {
      this._supportsStorageAutoscaling = value;
    }
    public resetSupportsStorageAutoscaling() {
      this._supportsStorageAutoscaling = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportsStorageAutoscalingInput() {
      return this._supportsStorageAutoscaling
    }

    // supports_storage_encryption - computed: true, optional: true, required: false
    private _supportsStorageEncryption?: boolean | cdktf.IResolvable | undefined; 
    public get supportsStorageEncryption() {
      return this.getBooleanAttribute('supports_storage_encryption') as any;
    }
    public set supportsStorageEncryption(value: boolean | cdktf.IResolvable | undefined) {
      this._supportsStorageEncryption = value;
    }
    public resetSupportsStorageEncryption() {
      this._supportsStorageEncryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportsStorageEncryptionInput() {
      return this._supportsStorageEncryption
    }

    // vpc - computed: true, optional: true, required: false
    private _vpc?: boolean | cdktf.IResolvable | undefined; 
    public get vpc() {
      return this.getBooleanAttribute('vpc') as any;
    }
    public set vpc(value: boolean | cdktf.IResolvable | undefined) {
      this._vpc = value;
    }
    public resetVpc() {
      this._vpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcInput() {
      return this._vpc
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        availability_zone_group: cdktf.stringToTerraform(this._availabilityZoneGroup),
        engine: cdktf.stringToTerraform(this._engine),
        engine_version: cdktf.stringToTerraform(this._engineVersion),
        instance_class: cdktf.stringToTerraform(this._instanceClass),
        license_model: cdktf.stringToTerraform(this._licenseModel),
        preferred_engine_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredEngineVersions),
        preferred_instance_classes: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredInstanceClasses),
        storage_type: cdktf.stringToTerraform(this._storageType),
        supports_enhanced_monitoring: cdktf.booleanToTerraform(this._supportsEnhancedMonitoring),
        supports_global_databases: cdktf.booleanToTerraform(this._supportsGlobalDatabases),
        supports_iam_database_authentication: cdktf.booleanToTerraform(this._supportsIamDatabaseAuthentication),
        supports_iops: cdktf.booleanToTerraform(this._supportsIops),
        supports_kerberos_authentication: cdktf.booleanToTerraform(this._supportsKerberosAuthentication),
        supports_performance_insights: cdktf.booleanToTerraform(this._supportsPerformanceInsights),
        supports_storage_autoscaling: cdktf.booleanToTerraform(this._supportsStorageAutoscaling),
        supports_storage_encryption: cdktf.booleanToTerraform(this._supportsStorageEncryption),
        vpc: cdktf.booleanToTerraform(this._vpc),
      };
    }
  }
}
