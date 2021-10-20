// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EFS
*/
export namespace EFS {
  export interface EfsAccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#file_system_id EfsAccessPoint#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#tags EfsAccessPoint#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#tags_all EfsAccessPoint#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * posix_user block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#posix_user EfsAccessPoint#posix_user}
    */
    readonly posixUser?: EfsAccessPointPosixUser;
    /**
    * root_directory block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#root_directory EfsAccessPoint#root_directory}
    */
    readonly rootDirectory?: EfsAccessPointRootDirectory;
  }
  export interface EfsAccessPointPosixUser {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#gid EfsAccessPoint#gid}
    */
    readonly gid: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#secondary_gids EfsAccessPoint#secondary_gids}
    */
    readonly secondaryGids?: number[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#uid EfsAccessPoint#uid}
    */
    readonly uid: number;
  }

  function efsAccessPointPosixUserToTerraform(struct?: EfsAccessPointPosixUserOutputReference | EfsAccessPointPosixUser): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      gid: cdktf.numberToTerraform(struct!.gid),
      secondary_gids: cdktf.listMapper(cdktf.numberToTerraform)(struct!.secondaryGids),
      uid: cdktf.numberToTerraform(struct!.uid),
    }
  }

  export class EfsAccessPointPosixUserOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // gid - computed: false, optional: false, required: true
    private _gid?: number; 
    public get gid() {
      return this.getNumberAttribute('gid');
    }
    public set gid(value: number) {
      this._gid = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gidInput() {
      return this._gid
    }

    // secondary_gids - computed: false, optional: true, required: false
    private _secondaryGids?: number[] | undefined; 
    public get secondaryGids() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('secondary_gids') as any;
    }
    public set secondaryGids(value: number[] | undefined) {
      this._secondaryGids = value;
    }
    public resetSecondaryGids() {
      this._secondaryGids = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondaryGidsInput() {
      return this._secondaryGids
    }

    // uid - computed: false, optional: false, required: true
    private _uid?: number; 
    public get uid() {
      return this.getNumberAttribute('uid');
    }
    public set uid(value: number) {
      this._uid = value;
    }
    // Temporarily expose input value. Use with caution.
    public get uidInput() {
      return this._uid
    }
  }
  export interface EfsAccessPointRootDirectoryCreationInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#owner_gid EfsAccessPoint#owner_gid}
    */
    readonly ownerGid: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#owner_uid EfsAccessPoint#owner_uid}
    */
    readonly ownerUid: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#permissions EfsAccessPoint#permissions}
    */
    readonly permissions: string;
  }

  function efsAccessPointRootDirectoryCreationInfoToTerraform(struct?: EfsAccessPointRootDirectoryCreationInfoOutputReference | EfsAccessPointRootDirectoryCreationInfo): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      owner_gid: cdktf.numberToTerraform(struct!.ownerGid),
      owner_uid: cdktf.numberToTerraform(struct!.ownerUid),
      permissions: cdktf.stringToTerraform(struct!.permissions),
    }
  }

  export class EfsAccessPointRootDirectoryCreationInfoOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // owner_gid - computed: false, optional: false, required: true
    private _ownerGid?: number; 
    public get ownerGid() {
      return this.getNumberAttribute('owner_gid');
    }
    public set ownerGid(value: number) {
      this._ownerGid = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerGidInput() {
      return this._ownerGid
    }

    // owner_uid - computed: false, optional: false, required: true
    private _ownerUid?: number; 
    public get ownerUid() {
      return this.getNumberAttribute('owner_uid');
    }
    public set ownerUid(value: number) {
      this._ownerUid = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerUidInput() {
      return this._ownerUid
    }

    // permissions - computed: false, optional: false, required: true
    private _permissions?: string; 
    public get permissions() {
      return this.getStringAttribute('permissions');
    }
    public set permissions(value: string) {
      this._permissions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsInput() {
      return this._permissions
    }
  }
  export interface EfsAccessPointRootDirectory {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#path EfsAccessPoint#path}
    */
    readonly path?: string;
    /**
    * creation_info block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#creation_info EfsAccessPoint#creation_info}
    */
    readonly creationInfo?: EfsAccessPointRootDirectoryCreationInfo;
  }

  function efsAccessPointRootDirectoryToTerraform(struct?: EfsAccessPointRootDirectoryOutputReference | EfsAccessPointRootDirectory): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      path: cdktf.stringToTerraform(struct!.path),
      creation_info: efsAccessPointRootDirectoryCreationInfoToTerraform(struct!.creationInfo),
    }
  }

  export class EfsAccessPointRootDirectoryOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // path - computed: true, optional: true, required: false
    private _path?: string | undefined; 
    public get path() {
      return this.getStringAttribute('path');
    }
    public set path(value: string | undefined) {
      this._path = value;
    }
    public resetPath() {
      this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
      return this._path
    }

    // creation_info - computed: false, optional: true, required: false
    private _creationInfo?: EfsAccessPointRootDirectoryCreationInfo | undefined; 
    private __creationInfoOutput = new EfsAccessPointRootDirectoryCreationInfoOutputReference(this as any, "creation_info", true);
    public get creationInfo() {
      return this.__creationInfoOutput;
    }
    public putCreationInfo(value: EfsAccessPointRootDirectoryCreationInfo | undefined) {
      this._creationInfo = value;
    }
    public resetCreationInfo() {
      this._creationInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get creationInfoInput() {
      return this._creationInfo
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html aws_efs_access_point}
  */
  export class EfsAccessPoint extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_efs_access_point";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html aws_efs_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EfsAccessPointConfig
    */
    public constructor(scope: Construct, id: string, config: EfsAccessPointConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_efs_access_point',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._fileSystemId = config.fileSystemId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._posixUser = config.posixUser;
      this._rootDirectory = config.rootDirectory;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // file_system_arn - computed: true, optional: false, required: false
    public get fileSystemArn() {
      return this.getStringAttribute('file_system_arn');
    }

    // file_system_id - computed: false, optional: false, required: true
    private _fileSystemId?: string; 
    public get fileSystemId() {
      return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
      this._fileSystemId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
      return this._fileSystemId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
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

    // posix_user - computed: false, optional: true, required: false
    private _posixUser?: EfsAccessPointPosixUser | undefined; 
    private __posixUserOutput = new EfsAccessPointPosixUserOutputReference(this as any, "posix_user", true);
    public get posixUser() {
      return this.__posixUserOutput;
    }
    public putPosixUser(value: EfsAccessPointPosixUser | undefined) {
      this._posixUser = value;
    }
    public resetPosixUser() {
      this._posixUser = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get posixUserInput() {
      return this._posixUser
    }

    // root_directory - computed: false, optional: true, required: false
    private _rootDirectory?: EfsAccessPointRootDirectory | undefined; 
    private __rootDirectoryOutput = new EfsAccessPointRootDirectoryOutputReference(this as any, "root_directory", true);
    public get rootDirectory() {
      return this.__rootDirectoryOutput;
    }
    public putRootDirectory(value: EfsAccessPointRootDirectory | undefined) {
      this._rootDirectory = value;
    }
    public resetRootDirectory() {
      this._rootDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootDirectoryInput() {
      return this._rootDirectory
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        file_system_id: cdktf.stringToTerraform(this._fileSystemId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        posix_user: efsAccessPointPosixUserToTerraform(this._posixUser),
        root_directory: efsAccessPointRootDirectoryToTerraform(this._rootDirectory),
      };
    }
  }
  export interface EfsBackupPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_backup_policy.html#file_system_id EfsBackupPolicy#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * backup_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_backup_policy.html#backup_policy EfsBackupPolicy#backup_policy}
    */
    readonly backupPolicy: EfsBackupPolicyBackupPolicy;
  }
  export interface EfsBackupPolicyBackupPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_backup_policy.html#status EfsBackupPolicy#status}
    */
    readonly status: string;
  }

  function efsBackupPolicyBackupPolicyToTerraform(struct?: EfsBackupPolicyBackupPolicyOutputReference | EfsBackupPolicyBackupPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      status: cdktf.stringToTerraform(struct!.status),
    }
  }

  export class EfsBackupPolicyBackupPolicyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // status - computed: false, optional: false, required: true
    private _status?: string; 
    public get status() {
      return this.getStringAttribute('status');
    }
    public set status(value: string) {
      this._status = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
      return this._status
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_backup_policy.html aws_efs_backup_policy}
  */
  export class EfsBackupPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_efs_backup_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_backup_policy.html aws_efs_backup_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EfsBackupPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: EfsBackupPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_efs_backup_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._fileSystemId = config.fileSystemId;
      this._backupPolicy = config.backupPolicy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // file_system_id - computed: false, optional: false, required: true
    private _fileSystemId?: string; 
    public get fileSystemId() {
      return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
      this._fileSystemId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
      return this._fileSystemId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // backup_policy - computed: false, optional: false, required: true
    private _backupPolicy?: EfsBackupPolicyBackupPolicy; 
    private __backupPolicyOutput = new EfsBackupPolicyBackupPolicyOutputReference(this as any, "backup_policy", true);
    public get backupPolicy() {
      return this.__backupPolicyOutput;
    }
    public putBackupPolicy(value: EfsBackupPolicyBackupPolicy) {
      this._backupPolicy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get backupPolicyInput() {
      return this._backupPolicy
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        file_system_id: cdktf.stringToTerraform(this._fileSystemId),
        backup_policy: efsBackupPolicyBackupPolicyToTerraform(this._backupPolicy),
      };
    }
  }
  export interface EfsFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#availability_zone_name EfsFileSystem#availability_zone_name}
    */
    readonly availabilityZoneName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#creation_token EfsFileSystem#creation_token}
    */
    readonly creationToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#encrypted EfsFileSystem#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#kms_key_id EfsFileSystem#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#performance_mode EfsFileSystem#performance_mode}
    */
    readonly performanceMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}
    */
    readonly provisionedThroughputInMibps?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#tags EfsFileSystem#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#tags_all EfsFileSystem#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#throughput_mode EfsFileSystem#throughput_mode}
    */
    readonly throughputMode?: string;
    /**
    * lifecycle_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#lifecycle_policy EfsFileSystem#lifecycle_policy}
    */
    readonly lifecyclePolicy?: EfsFileSystemLifecyclePolicy[];
  }
  export class EfsFileSystemSizeInBytes extends cdktf.ComplexComputedList {

    // value - computed: true, optional: false, required: false
    public get value() {
      return this.getNumberAttribute('value');
    }

    // value_in_ia - computed: true, optional: false, required: false
    public get valueInIa() {
      return this.getNumberAttribute('value_in_ia');
    }

    // value_in_standard - computed: true, optional: false, required: false
    public get valueInStandard() {
      return this.getNumberAttribute('value_in_standard');
    }
  }
  export interface EfsFileSystemLifecyclePolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#transition_to_ia EfsFileSystem#transition_to_ia}
    */
    readonly transitionToIa?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#transition_to_primary_storage_class EfsFileSystem#transition_to_primary_storage_class}
    */
    readonly transitionToPrimaryStorageClass?: string;
  }

  function efsFileSystemLifecyclePolicyToTerraform(struct?: EfsFileSystemLifecyclePolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      transition_to_ia: cdktf.stringToTerraform(struct!.transitionToIa),
      transition_to_primary_storage_class: cdktf.stringToTerraform(struct!.transitionToPrimaryStorageClass),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html aws_efs_file_system}
  */
  export class EfsFileSystem extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_efs_file_system";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html aws_efs_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EfsFileSystemConfig = {}
    */
    public constructor(scope: Construct, id: string, config: EfsFileSystemConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_efs_file_system',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._availabilityZoneName = config.availabilityZoneName;
      this._creationToken = config.creationToken;
      this._encrypted = config.encrypted;
      this._kmsKeyId = config.kmsKeyId;
      this._performanceMode = config.performanceMode;
      this._provisionedThroughputInMibps = config.provisionedThroughputInMibps;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._throughputMode = config.throughputMode;
      this._lifecyclePolicy = config.lifecyclePolicy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // availability_zone_id - computed: true, optional: false, required: false
    public get availabilityZoneId() {
      return this.getStringAttribute('availability_zone_id');
    }

    // availability_zone_name - computed: true, optional: true, required: false
    private _availabilityZoneName?: string | undefined; 
    public get availabilityZoneName() {
      return this.getStringAttribute('availability_zone_name');
    }
    public set availabilityZoneName(value: string | undefined) {
      this._availabilityZoneName = value;
    }
    public resetAvailabilityZoneName() {
      this._availabilityZoneName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneNameInput() {
      return this._availabilityZoneName
    }

    // creation_token - computed: true, optional: true, required: false
    private _creationToken?: string | undefined; 
    public get creationToken() {
      return this.getStringAttribute('creation_token');
    }
    public set creationToken(value: string | undefined) {
      this._creationToken = value;
    }
    public resetCreationToken() {
      this._creationToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get creationTokenInput() {
      return this._creationToken
    }

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
      return this.getStringAttribute('dns_name');
    }

    // encrypted - computed: true, optional: true, required: false
    private _encrypted?: boolean | cdktf.IResolvable | undefined; 
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }
    public set encrypted(value: boolean | cdktf.IResolvable | undefined) {
      this._encrypted = value;
    }
    public resetEncrypted() {
      this._encrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptedInput() {
      return this._encrypted
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

    // number_of_mount_targets - computed: true, optional: false, required: false
    public get numberOfMountTargets() {
      return this.getNumberAttribute('number_of_mount_targets');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // performance_mode - computed: true, optional: true, required: false
    private _performanceMode?: string | undefined; 
    public get performanceMode() {
      return this.getStringAttribute('performance_mode');
    }
    public set performanceMode(value: string | undefined) {
      this._performanceMode = value;
    }
    public resetPerformanceMode() {
      this._performanceMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get performanceModeInput() {
      return this._performanceMode
    }

    // provisioned_throughput_in_mibps - computed: false, optional: true, required: false
    private _provisionedThroughputInMibps?: number | undefined; 
    public get provisionedThroughputInMibps() {
      return this.getNumberAttribute('provisioned_throughput_in_mibps');
    }
    public set provisionedThroughputInMibps(value: number | undefined) {
      this._provisionedThroughputInMibps = value;
    }
    public resetProvisionedThroughputInMibps() {
      this._provisionedThroughputInMibps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedThroughputInMibpsInput() {
      return this._provisionedThroughputInMibps
    }

    // size_in_bytes - computed: true, optional: false, required: false
    public sizeInBytes(index: string) {
      return new EfsFileSystemSizeInBytes(this, 'size_in_bytes', index);
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

    // throughput_mode - computed: false, optional: true, required: false
    private _throughputMode?: string | undefined; 
    public get throughputMode() {
      return this.getStringAttribute('throughput_mode');
    }
    public set throughputMode(value: string | undefined) {
      this._throughputMode = value;
    }
    public resetThroughputMode() {
      this._throughputMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throughputModeInput() {
      return this._throughputMode
    }

    // lifecycle_policy - computed: false, optional: true, required: false
    private _lifecyclePolicy?: EfsFileSystemLifecyclePolicy[] | undefined; 
    public get lifecyclePolicy() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('lifecycle_policy') as any;
    }
    public set lifecyclePolicy(value: EfsFileSystemLifecyclePolicy[] | undefined) {
      this._lifecyclePolicy = value;
    }
    public resetLifecyclePolicy() {
      this._lifecyclePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecyclePolicyInput() {
      return this._lifecyclePolicy
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        availability_zone_name: cdktf.stringToTerraform(this._availabilityZoneName),
        creation_token: cdktf.stringToTerraform(this._creationToken),
        encrypted: cdktf.booleanToTerraform(this._encrypted),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        performance_mode: cdktf.stringToTerraform(this._performanceMode),
        provisioned_throughput_in_mibps: cdktf.numberToTerraform(this._provisionedThroughputInMibps),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        throughput_mode: cdktf.stringToTerraform(this._throughputMode),
        lifecycle_policy: cdktf.listMapper(efsFileSystemLifecyclePolicyToTerraform)(this._lifecyclePolicy),
      };
    }
  }
  export interface EfsFileSystemPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system_policy.html#bypass_policy_lockout_safety_check EfsFileSystemPolicy#bypass_policy_lockout_safety_check}
    */
    readonly bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system_policy.html#file_system_id EfsFileSystemPolicy#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system_policy.html#policy EfsFileSystemPolicy#policy}
    */
    readonly policy: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system_policy.html aws_efs_file_system_policy}
  */
  export class EfsFileSystemPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_efs_file_system_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system_policy.html aws_efs_file_system_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EfsFileSystemPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: EfsFileSystemPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_efs_file_system_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bypassPolicyLockoutSafetyCheck = config.bypassPolicyLockoutSafetyCheck;
      this._fileSystemId = config.fileSystemId;
      this._policy = config.policy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // bypass_policy_lockout_safety_check - computed: false, optional: true, required: false
    private _bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable | undefined; 
    public get bypassPolicyLockoutSafetyCheck() {
      return this.getBooleanAttribute('bypass_policy_lockout_safety_check') as any;
    }
    public set bypassPolicyLockoutSafetyCheck(value: boolean | cdktf.IResolvable | undefined) {
      this._bypassPolicyLockoutSafetyCheck = value;
    }
    public resetBypassPolicyLockoutSafetyCheck() {
      this._bypassPolicyLockoutSafetyCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bypassPolicyLockoutSafetyCheckInput() {
      return this._bypassPolicyLockoutSafetyCheck
    }

    // file_system_id - computed: false, optional: false, required: true
    private _fileSystemId?: string; 
    public get fileSystemId() {
      return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
      this._fileSystemId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
      return this._fileSystemId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
      this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bypass_policy_lockout_safety_check: cdktf.booleanToTerraform(this._bypassPolicyLockoutSafetyCheck),
        file_system_id: cdktf.stringToTerraform(this._fileSystemId),
        policy: cdktf.stringToTerraform(this._policy),
      };
    }
  }
  export interface EfsMountTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_mount_target.html#file_system_id EfsMountTarget#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_mount_target.html#ip_address EfsMountTarget#ip_address}
    */
    readonly ipAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_mount_target.html#security_groups EfsMountTarget#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_mount_target.html#subnet_id EfsMountTarget#subnet_id}
    */
    readonly subnetId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_mount_target.html aws_efs_mount_target}
  */
  export class EfsMountTarget extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_efs_mount_target";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_mount_target.html aws_efs_mount_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EfsMountTargetConfig
    */
    public constructor(scope: Construct, id: string, config: EfsMountTargetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_efs_mount_target',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._fileSystemId = config.fileSystemId;
      this._ipAddress = config.ipAddress;
      this._securityGroups = config.securityGroups;
      this._subnetId = config.subnetId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // availability_zone_id - computed: true, optional: false, required: false
    public get availabilityZoneId() {
      return this.getStringAttribute('availability_zone_id');
    }

    // availability_zone_name - computed: true, optional: false, required: false
    public get availabilityZoneName() {
      return this.getStringAttribute('availability_zone_name');
    }

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
      return this.getStringAttribute('dns_name');
    }

    // file_system_arn - computed: true, optional: false, required: false
    public get fileSystemArn() {
      return this.getStringAttribute('file_system_arn');
    }

    // file_system_id - computed: false, optional: false, required: true
    private _fileSystemId?: string; 
    public get fileSystemId() {
      return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
      this._fileSystemId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
      return this._fileSystemId
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

    // mount_target_dns_name - computed: true, optional: false, required: false
    public get mountTargetDnsName() {
      return this.getStringAttribute('mount_target_dns_name');
    }

    // network_interface_id - computed: true, optional: false, required: false
    public get networkInterfaceId() {
      return this.getStringAttribute('network_interface_id');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // security_groups - computed: true, optional: true, required: false
    private _securityGroups?: string[] | undefined; 
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[] | undefined) {
      this._securityGroups = value;
    }
    public resetSecurityGroups() {
      this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
      return this._securityGroups
    }

    // subnet_id - computed: false, optional: false, required: true
    private _subnetId?: string; 
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
      this._subnetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
      return this._subnetId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        file_system_id: cdktf.stringToTerraform(this._fileSystemId),
        ip_address: cdktf.stringToTerraform(this._ipAddress),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
        subnet_id: cdktf.stringToTerraform(this._subnetId),
      };
    }
  }
  export interface DataAwsEfsAccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_access_point.html#access_point_id DataAwsEfsAccessPoint#access_point_id}
    */
    readonly accessPointId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_access_point.html#tags DataAwsEfsAccessPoint#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsEfsAccessPointPosixUser extends cdktf.ComplexComputedList {

    // gid - computed: true, optional: false, required: false
    public get gid() {
      return this.getNumberAttribute('gid');
    }

    // secondary_gids - computed: true, optional: false, required: false
    public get secondaryGids() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('secondary_gids') as any;
    }

    // uid - computed: true, optional: false, required: false
    public get uid() {
      return this.getNumberAttribute('uid');
    }
  }
  export class DataAwsEfsAccessPointRootDirectoryCreationInfo extends cdktf.ComplexComputedList {

    // owner_gid - computed: true, optional: false, required: false
    public get ownerGid() {
      return this.getNumberAttribute('owner_gid');
    }

    // owner_uid - computed: true, optional: false, required: false
    public get ownerUid() {
      return this.getNumberAttribute('owner_uid');
    }

    // permissions - computed: true, optional: false, required: false
    public get permissions() {
      return this.getStringAttribute('permissions');
    }
  }
  export class DataAwsEfsAccessPointRootDirectory extends cdktf.ComplexComputedList {

    // creation_info - computed: true, optional: false, required: false
    public get creationInfo() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('creation_info') as any;
    }

    // path - computed: true, optional: false, required: false
    public get path() {
      return this.getStringAttribute('path');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/efs_access_point.html aws_efs_access_point}
  */
  export class DataAwsEfsAccessPoint extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_efs_access_point";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/efs_access_point.html aws_efs_access_point} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEfsAccessPointConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEfsAccessPointConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_efs_access_point',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accessPointId = config.accessPointId;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_point_id - computed: false, optional: false, required: true
    private _accessPointId?: string; 
    public get accessPointId() {
      return this.getStringAttribute('access_point_id');
    }
    public set accessPointId(value: string) {
      this._accessPointId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accessPointIdInput() {
      return this._accessPointId
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // file_system_arn - computed: true, optional: false, required: false
    public get fileSystemArn() {
      return this.getStringAttribute('file_system_arn');
    }

    // file_system_id - computed: true, optional: false, required: false
    public get fileSystemId() {
      return this.getStringAttribute('file_system_id');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // posix_user - computed: true, optional: false, required: false
    public posixUser(index: string) {
      return new DataAwsEfsAccessPointPosixUser(this, 'posix_user', index);
    }

    // root_directory - computed: true, optional: false, required: false
    public rootDirectory(index: string) {
      return new DataAwsEfsAccessPointRootDirectory(this, 'root_directory', index);
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        access_point_id: cdktf.stringToTerraform(this._accessPointId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsEfsAccessPointsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_access_points.html#file_system_id DataAwsEfsAccessPoints#file_system_id}
    */
    readonly fileSystemId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/efs_access_points.html aws_efs_access_points}
  */
  export class DataAwsEfsAccessPoints extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_efs_access_points";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/efs_access_points.html aws_efs_access_points} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEfsAccessPointsConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEfsAccessPointsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_efs_access_points',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._fileSystemId = config.fileSystemId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arns - computed: true, optional: false, required: false
    public get arns() {
      return this.getListAttribute('arns');
    }

    // file_system_id - computed: false, optional: false, required: true
    private _fileSystemId?: string; 
    public get fileSystemId() {
      return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
      this._fileSystemId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
      return this._fileSystemId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ids - computed: true, optional: false, required: false
    public get ids() {
      return this.getListAttribute('ids');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        file_system_id: cdktf.stringToTerraform(this._fileSystemId),
      };
    }
  }
  export interface DataAwsEfsFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system.html#creation_token DataAwsEfsFileSystem#creation_token}
    */
    readonly creationToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system.html#file_system_id DataAwsEfsFileSystem#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system.html#tags DataAwsEfsFileSystem#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsEfsFileSystemLifecyclePolicy extends cdktf.ComplexComputedList {

    // transition_to_ia - computed: true, optional: false, required: false
    public get transitionToIa() {
      return this.getStringAttribute('transition_to_ia');
    }

    // transition_to_primary_storage_class - computed: true, optional: false, required: false
    public get transitionToPrimaryStorageClass() {
      return this.getStringAttribute('transition_to_primary_storage_class');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system.html aws_efs_file_system}
  */
  export class DataAwsEfsFileSystem extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_efs_file_system";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system.html aws_efs_file_system} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEfsFileSystemConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEfsFileSystemConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_efs_file_system',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._creationToken = config.creationToken;
      this._fileSystemId = config.fileSystemId;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // availability_zone_id - computed: true, optional: false, required: false
    public get availabilityZoneId() {
      return this.getStringAttribute('availability_zone_id');
    }

    // availability_zone_name - computed: true, optional: false, required: false
    public get availabilityZoneName() {
      return this.getStringAttribute('availability_zone_name');
    }

    // creation_token - computed: true, optional: true, required: false
    private _creationToken?: string | undefined; 
    public get creationToken() {
      return this.getStringAttribute('creation_token');
    }
    public set creationToken(value: string | undefined) {
      this._creationToken = value;
    }
    public resetCreationToken() {
      this._creationToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get creationTokenInput() {
      return this._creationToken
    }

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
      return this.getStringAttribute('dns_name');
    }

    // encrypted - computed: true, optional: false, required: false
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }

    // file_system_id - computed: true, optional: true, required: false
    private _fileSystemId?: string | undefined; 
    public get fileSystemId() {
      return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string | undefined) {
      this._fileSystemId = value;
    }
    public resetFileSystemId() {
      this._fileSystemId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
      return this._fileSystemId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // lifecycle_policy - computed: true, optional: false, required: false
    public lifecyclePolicy(index: string) {
      return new DataAwsEfsFileSystemLifecyclePolicy(this, 'lifecycle_policy', index);
    }

    // performance_mode - computed: true, optional: false, required: false
    public get performanceMode() {
      return this.getStringAttribute('performance_mode');
    }

    // provisioned_throughput_in_mibps - computed: true, optional: false, required: false
    public get provisionedThroughputInMibps() {
      return this.getNumberAttribute('provisioned_throughput_in_mibps');
    }

    // size_in_bytes - computed: true, optional: false, required: false
    public get sizeInBytes() {
      return this.getNumberAttribute('size_in_bytes');
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

    // throughput_mode - computed: true, optional: false, required: false
    public get throughputMode() {
      return this.getStringAttribute('throughput_mode');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        creation_token: cdktf.stringToTerraform(this._creationToken),
        file_system_id: cdktf.stringToTerraform(this._fileSystemId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsEfsMountTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target.html#access_point_id DataAwsEfsMountTarget#access_point_id}
    */
    readonly accessPointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target.html#file_system_id DataAwsEfsMountTarget#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target.html#mount_target_id DataAwsEfsMountTarget#mount_target_id}
    */
    readonly mountTargetId?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target.html aws_efs_mount_target}
  */
  export class DataAwsEfsMountTarget extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_efs_mount_target";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target.html aws_efs_mount_target} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEfsMountTargetConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEfsMountTargetConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_efs_mount_target',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accessPointId = config.accessPointId;
      this._fileSystemId = config.fileSystemId;
      this._mountTargetId = config.mountTargetId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_point_id - computed: false, optional: true, required: false
    private _accessPointId?: string | undefined; 
    public get accessPointId() {
      return this.getStringAttribute('access_point_id');
    }
    public set accessPointId(value: string | undefined) {
      this._accessPointId = value;
    }
    public resetAccessPointId() {
      this._accessPointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessPointIdInput() {
      return this._accessPointId
    }

    // availability_zone_id - computed: true, optional: false, required: false
    public get availabilityZoneId() {
      return this.getStringAttribute('availability_zone_id');
    }

    // availability_zone_name - computed: true, optional: false, required: false
    public get availabilityZoneName() {
      return this.getStringAttribute('availability_zone_name');
    }

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
      return this.getStringAttribute('dns_name');
    }

    // file_system_arn - computed: true, optional: false, required: false
    public get fileSystemArn() {
      return this.getStringAttribute('file_system_arn');
    }

    // file_system_id - computed: true, optional: true, required: false
    private _fileSystemId?: string | undefined; 
    public get fileSystemId() {
      return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string | undefined) {
      this._fileSystemId = value;
    }
    public resetFileSystemId() {
      this._fileSystemId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
      return this._fileSystemId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ip_address - computed: true, optional: false, required: false
    public get ipAddress() {
      return this.getStringAttribute('ip_address');
    }

    // mount_target_dns_name - computed: true, optional: false, required: false
    public get mountTargetDnsName() {
      return this.getStringAttribute('mount_target_dns_name');
    }

    // mount_target_id - computed: true, optional: true, required: false
    private _mountTargetId?: string | undefined; 
    public get mountTargetId() {
      return this.getStringAttribute('mount_target_id');
    }
    public set mountTargetId(value: string | undefined) {
      this._mountTargetId = value;
    }
    public resetMountTargetId() {
      this._mountTargetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountTargetIdInput() {
      return this._mountTargetId
    }

    // network_interface_id - computed: true, optional: false, required: false
    public get networkInterfaceId() {
      return this.getStringAttribute('network_interface_id');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // security_groups - computed: true, optional: false, required: false
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }

    // subnet_id - computed: true, optional: false, required: false
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        access_point_id: cdktf.stringToTerraform(this._accessPointId),
        file_system_id: cdktf.stringToTerraform(this._fileSystemId),
        mount_target_id: cdktf.stringToTerraform(this._mountTargetId),
      };
    }
  }
}
