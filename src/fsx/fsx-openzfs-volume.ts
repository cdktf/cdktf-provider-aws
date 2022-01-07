// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS File System FSx
*/
export interface FsxOpenzfsVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#copy_tags_to_snapshots FsxOpenzfsVolume#copy_tags_to_snapshots}
  */
  readonly copyTagsToSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#data_compression_type FsxOpenzfsVolume#data_compression_type}
  */
  readonly dataCompressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#name FsxOpenzfsVolume#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#parent_volume_id FsxOpenzfsVolume#parent_volume_id}
  */
  readonly parentVolumeId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#read_only FsxOpenzfsVolume#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}
  */
  readonly storageCapacityQuotaGib?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#storage_capacity_reservation_gib FsxOpenzfsVolume#storage_capacity_reservation_gib}
  */
  readonly storageCapacityReservationGib?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#tags FsxOpenzfsVolume#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#tags_all FsxOpenzfsVolume#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#volume_type FsxOpenzfsVolume#volume_type}
  */
  readonly volumeType?: string;
  /**
  * nfs_exports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#nfs_exports FsxOpenzfsVolume#nfs_exports}
  */
  readonly nfsExports?: FsxOpenzfsVolumeNfsExports;
  /**
  * origin_snapshot block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#origin_snapshot FsxOpenzfsVolume#origin_snapshot}
  */
  readonly originSnapshot?: FsxOpenzfsVolumeOriginSnapshot;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#timeouts FsxOpenzfsVolume#timeouts}
  */
  readonly timeouts?: FsxOpenzfsVolumeTimeouts;
  /**
  * user_and_group_quotas block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#user_and_group_quotas FsxOpenzfsVolume#user_and_group_quotas}
  */
  readonly userAndGroupQuotas?: FsxOpenzfsVolumeUserAndGroupQuotas[];
}
export interface FsxOpenzfsVolumeNfsExportsClientConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#clients FsxOpenzfsVolume#clients}
  */
  readonly clients: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#options FsxOpenzfsVolume#options}
  */
  readonly options: string[];
}

export function fsxOpenzfsVolumeNfsExportsClientConfigurationsToTerraform(struct?: FsxOpenzfsVolumeNfsExportsClientConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clients: cdktf.stringToTerraform(struct!.clients),
    options: cdktf.listMapper(cdktf.stringToTerraform)(struct!.options),
  }
}

export interface FsxOpenzfsVolumeNfsExports {
  /**
  * client_configurations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#client_configurations FsxOpenzfsVolume#client_configurations}
  */
  readonly clientConfigurations: FsxOpenzfsVolumeNfsExportsClientConfigurations[];
}

export function fsxOpenzfsVolumeNfsExportsToTerraform(struct?: FsxOpenzfsVolumeNfsExportsOutputReference | FsxOpenzfsVolumeNfsExports): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_configurations: cdktf.listMapper(fsxOpenzfsVolumeNfsExportsClientConfigurationsToTerraform)(struct!.clientConfigurations),
  }
}

export class FsxOpenzfsVolumeNfsExportsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FsxOpenzfsVolumeNfsExports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientConfigurations) {
      hasAnyValues = true;
      internalValueResult.clientConfigurations = this._clientConfigurations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxOpenzfsVolumeNfsExports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientConfigurations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientConfigurations = value.clientConfigurations;
    }
  }

  // client_configurations - computed: false, optional: false, required: true
  private _clientConfigurations?: FsxOpenzfsVolumeNfsExportsClientConfigurations[]; 
  public get clientConfigurations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('client_configurations') as any;
  }
  public set clientConfigurations(value: FsxOpenzfsVolumeNfsExportsClientConfigurations[]) {
    this._clientConfigurations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConfigurationsInput() {
    return this._clientConfigurations;
  }
}
export interface FsxOpenzfsVolumeOriginSnapshot {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#copy_strategy FsxOpenzfsVolume#copy_strategy}
  */
  readonly copyStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#snapshot_arn FsxOpenzfsVolume#snapshot_arn}
  */
  readonly snapshotArn: string;
}

export function fsxOpenzfsVolumeOriginSnapshotToTerraform(struct?: FsxOpenzfsVolumeOriginSnapshotOutputReference | FsxOpenzfsVolumeOriginSnapshot): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    copy_strategy: cdktf.stringToTerraform(struct!.copyStrategy),
    snapshot_arn: cdktf.stringToTerraform(struct!.snapshotArn),
  }
}

export class FsxOpenzfsVolumeOriginSnapshotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FsxOpenzfsVolumeOriginSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyStrategy) {
      hasAnyValues = true;
      internalValueResult.copyStrategy = this._copyStrategy;
    }
    if (this._snapshotArn) {
      hasAnyValues = true;
      internalValueResult.snapshotArn = this._snapshotArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxOpenzfsVolumeOriginSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._copyStrategy = undefined;
      this._snapshotArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._copyStrategy = value.copyStrategy;
      this._snapshotArn = value.snapshotArn;
    }
  }

  // copy_strategy - computed: false, optional: false, required: true
  private _copyStrategy?: string; 
  public get copyStrategy() {
    return this.getStringAttribute('copy_strategy');
  }
  public set copyStrategy(value: string) {
    this._copyStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get copyStrategyInput() {
    return this._copyStrategy;
  }

  // snapshot_arn - computed: false, optional: false, required: true
  private _snapshotArn?: string; 
  public get snapshotArn() {
    return this.getStringAttribute('snapshot_arn');
  }
  public set snapshotArn(value: string) {
    this._snapshotArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotArnInput() {
    return this._snapshotArn;
  }
}
export interface FsxOpenzfsVolumeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#create FsxOpenzfsVolume#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#delete FsxOpenzfsVolume#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#update FsxOpenzfsVolume#update}
  */
  readonly update?: string;
}

export function fsxOpenzfsVolumeTimeoutsToTerraform(struct?: FsxOpenzfsVolumeTimeoutsOutputReference | FsxOpenzfsVolumeTimeouts): any {
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

export class FsxOpenzfsVolumeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FsxOpenzfsVolumeTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxOpenzfsVolumeTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface FsxOpenzfsVolumeUserAndGroupQuotas {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#id FsxOpenzfsVolume#id}
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}
  */
  readonly storageCapacityQuotaGib: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html#type FsxOpenzfsVolume#type}
  */
  readonly type: string;
}

export function fsxOpenzfsVolumeUserAndGroupQuotasToTerraform(struct?: FsxOpenzfsVolumeUserAndGroupQuotas): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    storage_capacity_quota_gib: cdktf.numberToTerraform(struct!.storageCapacityQuotaGib),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html aws_fsx_openzfs_volume}
*/
export class FsxOpenzfsVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_fsx_openzfs_volume";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume.html aws_fsx_openzfs_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FsxOpenzfsVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: FsxOpenzfsVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_fsx_openzfs_volume',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._copyTagsToSnapshots = config.copyTagsToSnapshots;
    this._dataCompressionType = config.dataCompressionType;
    this._name = config.name;
    this._parentVolumeId = config.parentVolumeId;
    this._readOnly = config.readOnly;
    this._storageCapacityQuotaGib = config.storageCapacityQuotaGib;
    this._storageCapacityReservationGib = config.storageCapacityReservationGib;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._volumeType = config.volumeType;
    this._nfsExports.internalValue = config.nfsExports;
    this._originSnapshot.internalValue = config.originSnapshot;
    this._timeouts.internalValue = config.timeouts;
    this._userAndGroupQuotas = config.userAndGroupQuotas;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // copy_tags_to_snapshots - computed: false, optional: true, required: false
  private _copyTagsToSnapshots?: boolean | cdktf.IResolvable; 
  public get copyTagsToSnapshots() {
    return this.getBooleanAttribute('copy_tags_to_snapshots') as any;
  }
  public set copyTagsToSnapshots(value: boolean | cdktf.IResolvable) {
    this._copyTagsToSnapshots = value;
  }
  public resetCopyTagsToSnapshots() {
    this._copyTagsToSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsToSnapshotsInput() {
    return this._copyTagsToSnapshots;
  }

  // data_compression_type - computed: false, optional: true, required: false
  private _dataCompressionType?: string; 
  public get dataCompressionType() {
    return this.getStringAttribute('data_compression_type');
  }
  public set dataCompressionType(value: string) {
    this._dataCompressionType = value;
  }
  public resetDataCompressionType() {
    this._dataCompressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCompressionTypeInput() {
    return this._dataCompressionType;
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
    return this._name;
  }

  // parent_volume_id - computed: false, optional: false, required: true
  private _parentVolumeId?: string; 
  public get parentVolumeId() {
    return this.getStringAttribute('parent_volume_id');
  }
  public set parentVolumeId(value: string) {
    this._parentVolumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentVolumeIdInput() {
    return this._parentVolumeId;
  }

  // read_only - computed: true, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // storage_capacity_quota_gib - computed: true, optional: true, required: false
  private _storageCapacityQuotaGib?: number; 
  public get storageCapacityQuotaGib() {
    return this.getNumberAttribute('storage_capacity_quota_gib');
  }
  public set storageCapacityQuotaGib(value: number) {
    this._storageCapacityQuotaGib = value;
  }
  public resetStorageCapacityQuotaGib() {
    this._storageCapacityQuotaGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacityQuotaGibInput() {
    return this._storageCapacityQuotaGib;
  }

  // storage_capacity_reservation_gib - computed: true, optional: true, required: false
  private _storageCapacityReservationGib?: number; 
  public get storageCapacityReservationGib() {
    return this.getNumberAttribute('storage_capacity_reservation_gib');
  }
  public set storageCapacityReservationGib(value: number) {
    this._storageCapacityReservationGib = value;
  }
  public resetStorageCapacityReservationGib() {
    this._storageCapacityReservationGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacityReservationGibInput() {
    return this._storageCapacityReservationGib;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // volume_type - computed: false, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // nfs_exports - computed: false, optional: true, required: false
  private _nfsExports = new FsxOpenzfsVolumeNfsExportsOutputReference(this as any, "nfs_exports", true);
  public get nfsExports() {
    return this._nfsExports;
  }
  public putNfsExports(value: FsxOpenzfsVolumeNfsExports) {
    this._nfsExports.internalValue = value;
  }
  public resetNfsExports() {
    this._nfsExports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsExportsInput() {
    return this._nfsExports.internalValue;
  }

  // origin_snapshot - computed: false, optional: true, required: false
  private _originSnapshot = new FsxOpenzfsVolumeOriginSnapshotOutputReference(this as any, "origin_snapshot", true);
  public get originSnapshot() {
    return this._originSnapshot;
  }
  public putOriginSnapshot(value: FsxOpenzfsVolumeOriginSnapshot) {
    this._originSnapshot.internalValue = value;
  }
  public resetOriginSnapshot() {
    this._originSnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originSnapshotInput() {
    return this._originSnapshot.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FsxOpenzfsVolumeTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FsxOpenzfsVolumeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_and_group_quotas - computed: false, optional: true, required: false
  private _userAndGroupQuotas?: FsxOpenzfsVolumeUserAndGroupQuotas[]; 
  public get userAndGroupQuotas() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('user_and_group_quotas') as any;
  }
  public set userAndGroupQuotas(value: FsxOpenzfsVolumeUserAndGroupQuotas[]) {
    this._userAndGroupQuotas = value;
  }
  public resetUserAndGroupQuotas() {
    this._userAndGroupQuotas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAndGroupQuotasInput() {
    return this._userAndGroupQuotas;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      copy_tags_to_snapshots: cdktf.booleanToTerraform(this._copyTagsToSnapshots),
      data_compression_type: cdktf.stringToTerraform(this._dataCompressionType),
      name: cdktf.stringToTerraform(this._name),
      parent_volume_id: cdktf.stringToTerraform(this._parentVolumeId),
      read_only: cdktf.booleanToTerraform(this._readOnly),
      storage_capacity_quota_gib: cdktf.numberToTerraform(this._storageCapacityQuotaGib),
      storage_capacity_reservation_gib: cdktf.numberToTerraform(this._storageCapacityReservationGib),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      volume_type: cdktf.stringToTerraform(this._volumeType),
      nfs_exports: fsxOpenzfsVolumeNfsExportsToTerraform(this._nfsExports.internalValue),
      origin_snapshot: fsxOpenzfsVolumeOriginSnapshotToTerraform(this._originSnapshot.internalValue),
      timeouts: fsxOpenzfsVolumeTimeoutsToTerraform(this._timeouts.internalValue),
      user_and_group_quotas: cdktf.listMapper(fsxOpenzfsVolumeUserAndGroupQuotasToTerraform)(this._userAndGroupQuotas),
    };
  }
}
