// https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbSnapshotCopyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#copy_tags DbSnapshotCopy#copy_tags}
  */
  readonly copyTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#destination_region DbSnapshotCopy#destination_region}
  */
  readonly destinationRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#id DbSnapshotCopy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#kms_key_id DbSnapshotCopy#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#option_group_name DbSnapshotCopy#option_group_name}
  */
  readonly optionGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#presigned_url DbSnapshotCopy#presigned_url}
  */
  readonly presignedUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#source_db_snapshot_identifier DbSnapshotCopy#source_db_snapshot_identifier}
  */
  readonly sourceDbSnapshotIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#tags DbSnapshotCopy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#tags_all DbSnapshotCopy#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#target_custom_availability_zone DbSnapshotCopy#target_custom_availability_zone}
  */
  readonly targetCustomAvailabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#target_db_snapshot_identifier DbSnapshotCopy#target_db_snapshot_identifier}
  */
  readonly targetDbSnapshotIdentifier: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#timeouts DbSnapshotCopy#timeouts}
  */
  readonly timeouts?: DbSnapshotCopyTimeouts;
}
export interface DbSnapshotCopyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#create DbSnapshotCopy#create}
  */
  readonly create?: string;
}

export function dbSnapshotCopyTimeoutsToTerraform(struct?: DbSnapshotCopyTimeoutsOutputReference | DbSnapshotCopyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class DbSnapshotCopyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbSnapshotCopyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbSnapshotCopyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy aws_db_snapshot_copy}
*/
export class DbSnapshotCopy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_db_snapshot_copy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy aws_db_snapshot_copy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbSnapshotCopyConfig
  */
  public constructor(scope: Construct, id: string, config: DbSnapshotCopyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_db_snapshot_copy',
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
    this._copyTags = config.copyTags;
    this._destinationRegion = config.destinationRegion;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._optionGroupName = config.optionGroupName;
    this._presignedUrl = config.presignedUrl;
    this._sourceDbSnapshotIdentifier = config.sourceDbSnapshotIdentifier;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._targetCustomAvailabilityZone = config.targetCustomAvailabilityZone;
    this._targetDbSnapshotIdentifier = config.targetDbSnapshotIdentifier;
    this._timeouts.internalValue = config.timeouts;
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

  // copy_tags - computed: false, optional: true, required: false
  private _copyTags?: boolean | cdktf.IResolvable; 
  public get copyTags() {
    return this.getBooleanAttribute('copy_tags');
  }
  public set copyTags(value: boolean | cdktf.IResolvable) {
    this._copyTags = value;
  }
  public resetCopyTags() {
    this._copyTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsInput() {
    return this._copyTags;
  }

  // db_snapshot_arn - computed: true, optional: false, required: false
  public get dbSnapshotArn() {
    return this.getStringAttribute('db_snapshot_arn');
  }

  // destination_region - computed: false, optional: true, required: false
  private _destinationRegion?: string; 
  public get destinationRegion() {
    return this.getStringAttribute('destination_region');
  }
  public set destinationRegion(value: string) {
    this._destinationRegion = value;
  }
  public resetDestinationRegion() {
    this._destinationRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRegionInput() {
    return this._destinationRegion;
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
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

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // kms_key_id - computed: false, optional: true, required: false
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

  // license_model - computed: true, optional: false, required: false
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }

  // option_group_name - computed: true, optional: true, required: false
  private _optionGroupName?: string; 
  public get optionGroupName() {
    return this.getStringAttribute('option_group_name');
  }
  public set optionGroupName(value: string) {
    this._optionGroupName = value;
  }
  public resetOptionGroupName() {
    this._optionGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionGroupNameInput() {
    return this._optionGroupName;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // presigned_url - computed: false, optional: true, required: false
  private _presignedUrl?: string; 
  public get presignedUrl() {
    return this.getStringAttribute('presigned_url');
  }
  public set presignedUrl(value: string) {
    this._presignedUrl = value;
  }
  public resetPresignedUrl() {
    this._presignedUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presignedUrlInput() {
    return this._presignedUrl;
  }

  // snapshot_type - computed: true, optional: false, required: false
  public get snapshotType() {
    return this.getStringAttribute('snapshot_type');
  }

  // source_db_snapshot_identifier - computed: false, optional: false, required: true
  private _sourceDbSnapshotIdentifier?: string; 
  public get sourceDbSnapshotIdentifier() {
    return this.getStringAttribute('source_db_snapshot_identifier');
  }
  public set sourceDbSnapshotIdentifier(value: string) {
    this._sourceDbSnapshotIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDbSnapshotIdentifierInput() {
    return this._sourceDbSnapshotIdentifier;
  }

  // source_region - computed: true, optional: false, required: false
  public get sourceRegion() {
    return this.getStringAttribute('source_region');
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

  // target_custom_availability_zone - computed: false, optional: true, required: false
  private _targetCustomAvailabilityZone?: string; 
  public get targetCustomAvailabilityZone() {
    return this.getStringAttribute('target_custom_availability_zone');
  }
  public set targetCustomAvailabilityZone(value: string) {
    this._targetCustomAvailabilityZone = value;
  }
  public resetTargetCustomAvailabilityZone() {
    this._targetCustomAvailabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCustomAvailabilityZoneInput() {
    return this._targetCustomAvailabilityZone;
  }

  // target_db_snapshot_identifier - computed: false, optional: false, required: true
  private _targetDbSnapshotIdentifier?: string; 
  public get targetDbSnapshotIdentifier() {
    return this.getStringAttribute('target_db_snapshot_identifier');
  }
  public set targetDbSnapshotIdentifier(value: string) {
    this._targetDbSnapshotIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDbSnapshotIdentifierInput() {
    return this._targetDbSnapshotIdentifier;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DbSnapshotCopyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DbSnapshotCopyTimeouts) {
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
      copy_tags: cdktf.booleanToTerraform(this._copyTags),
      destination_region: cdktf.stringToTerraform(this._destinationRegion),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      option_group_name: cdktf.stringToTerraform(this._optionGroupName),
      presigned_url: cdktf.stringToTerraform(this._presignedUrl),
      source_db_snapshot_identifier: cdktf.stringToTerraform(this._sourceDbSnapshotIdentifier),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      target_custom_availability_zone: cdktf.stringToTerraform(this._targetCustomAvailabilityZone),
      target_db_snapshot_identifier: cdktf.stringToTerraform(this._targetDbSnapshotIdentifier),
      timeouts: dbSnapshotCopyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
