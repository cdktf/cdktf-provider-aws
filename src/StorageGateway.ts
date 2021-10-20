// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Storage Gateway
*/
export namespace StorageGateway {
  export interface StoragegatewayCacheConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cache.html#disk_id StoragegatewayCache#disk_id}
    */
    readonly diskId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cache.html#gateway_arn StoragegatewayCache#gateway_arn}
    */
    readonly gatewayArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cache.html aws_storagegateway_cache}
  */
  export class StoragegatewayCache extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_storagegateway_cache";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cache.html aws_storagegateway_cache} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayCacheConfig
    */
    public constructor(scope: Construct, id: string, config: StoragegatewayCacheConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_storagegateway_cache',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._diskId = config.diskId;
      this._gatewayArn = config.gatewayArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // disk_id - computed: false, optional: false, required: true
    private _diskId?: string; 
    public get diskId() {
      return this.getStringAttribute('disk_id');
    }
    public set diskId(value: string) {
      this._diskId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get diskIdInput() {
      return this._diskId
    }

    // gateway_arn - computed: false, optional: false, required: true
    private _gatewayArn?: string; 
    public get gatewayArn() {
      return this.getStringAttribute('gateway_arn');
    }
    public set gatewayArn(value: string) {
      this._gatewayArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayArnInput() {
      return this._gatewayArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        disk_id: cdktf.stringToTerraform(this._diskId),
        gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
      };
    }
  }
  export interface StoragegatewayCachedIscsiVolumeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html#gateway_arn StoragegatewayCachedIscsiVolume#gateway_arn}
    */
    readonly gatewayArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html#kms_encrypted StoragegatewayCachedIscsiVolume#kms_encrypted}
    */
    readonly kmsEncrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html#kms_key StoragegatewayCachedIscsiVolume#kms_key}
    */
    readonly kmsKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html#network_interface_id StoragegatewayCachedIscsiVolume#network_interface_id}
    */
    readonly networkInterfaceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html#snapshot_id StoragegatewayCachedIscsiVolume#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html#source_volume_arn StoragegatewayCachedIscsiVolume#source_volume_arn}
    */
    readonly sourceVolumeArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html#tags StoragegatewayCachedIscsiVolume#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html#tags_all StoragegatewayCachedIscsiVolume#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html#target_name StoragegatewayCachedIscsiVolume#target_name}
    */
    readonly targetName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html#volume_size_in_bytes StoragegatewayCachedIscsiVolume#volume_size_in_bytes}
    */
    readonly volumeSizeInBytes: number;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html aws_storagegateway_cached_iscsi_volume}
  */
  export class StoragegatewayCachedIscsiVolume extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_storagegateway_cached_iscsi_volume";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html aws_storagegateway_cached_iscsi_volume} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayCachedIscsiVolumeConfig
    */
    public constructor(scope: Construct, id: string, config: StoragegatewayCachedIscsiVolumeConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_storagegateway_cached_iscsi_volume',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._gatewayArn = config.gatewayArn;
      this._kmsEncrypted = config.kmsEncrypted;
      this._kmsKey = config.kmsKey;
      this._networkInterfaceId = config.networkInterfaceId;
      this._snapshotId = config.snapshotId;
      this._sourceVolumeArn = config.sourceVolumeArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._targetName = config.targetName;
      this._volumeSizeInBytes = config.volumeSizeInBytes;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // chap_enabled - computed: true, optional: false, required: false
    public get chapEnabled() {
      return this.getBooleanAttribute('chap_enabled') as any;
    }

    // gateway_arn - computed: false, optional: false, required: true
    private _gatewayArn?: string; 
    public get gatewayArn() {
      return this.getStringAttribute('gateway_arn');
    }
    public set gatewayArn(value: string) {
      this._gatewayArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayArnInput() {
      return this._gatewayArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_encrypted - computed: false, optional: true, required: false
    private _kmsEncrypted?: boolean | cdktf.IResolvable | undefined; 
    public get kmsEncrypted() {
      return this.getBooleanAttribute('kms_encrypted') as any;
    }
    public set kmsEncrypted(value: boolean | cdktf.IResolvable | undefined) {
      this._kmsEncrypted = value;
    }
    public resetKmsEncrypted() {
      this._kmsEncrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsEncryptedInput() {
      return this._kmsEncrypted
    }

    // kms_key - computed: false, optional: true, required: false
    private _kmsKey?: string | undefined; 
    public get kmsKey() {
      return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string | undefined) {
      this._kmsKey = value;
    }
    public resetKmsKey() {
      this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyInput() {
      return this._kmsKey
    }

    // lun_number - computed: true, optional: false, required: false
    public get lunNumber() {
      return this.getNumberAttribute('lun_number');
    }

    // network_interface_id - computed: false, optional: false, required: true
    private _networkInterfaceId?: string; 
    public get networkInterfaceId() {
      return this.getStringAttribute('network_interface_id');
    }
    public set networkInterfaceId(value: string) {
      this._networkInterfaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceIdInput() {
      return this._networkInterfaceId
    }

    // network_interface_port - computed: true, optional: false, required: false
    public get networkInterfacePort() {
      return this.getNumberAttribute('network_interface_port');
    }

    // snapshot_id - computed: false, optional: true, required: false
    private _snapshotId?: string | undefined; 
    public get snapshotId() {
      return this.getStringAttribute('snapshot_id');
    }
    public set snapshotId(value: string | undefined) {
      this._snapshotId = value;
    }
    public resetSnapshotId() {
      this._snapshotId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotIdInput() {
      return this._snapshotId
    }

    // source_volume_arn - computed: false, optional: true, required: false
    private _sourceVolumeArn?: string | undefined; 
    public get sourceVolumeArn() {
      return this.getStringAttribute('source_volume_arn');
    }
    public set sourceVolumeArn(value: string | undefined) {
      this._sourceVolumeArn = value;
    }
    public resetSourceVolumeArn() {
      this._sourceVolumeArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceVolumeArnInput() {
      return this._sourceVolumeArn
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

    // target_arn - computed: true, optional: false, required: false
    public get targetArn() {
      return this.getStringAttribute('target_arn');
    }

    // target_name - computed: false, optional: false, required: true
    private _targetName?: string; 
    public get targetName() {
      return this.getStringAttribute('target_name');
    }
    public set targetName(value: string) {
      this._targetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetNameInput() {
      return this._targetName
    }

    // volume_arn - computed: true, optional: false, required: false
    public get volumeArn() {
      return this.getStringAttribute('volume_arn');
    }

    // volume_id - computed: true, optional: false, required: false
    public get volumeId() {
      return this.getStringAttribute('volume_id');
    }

    // volume_size_in_bytes - computed: false, optional: false, required: true
    private _volumeSizeInBytes?: number; 
    public get volumeSizeInBytes() {
      return this.getNumberAttribute('volume_size_in_bytes');
    }
    public set volumeSizeInBytes(value: number) {
      this._volumeSizeInBytes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeSizeInBytesInput() {
      return this._volumeSizeInBytes
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
        kms_encrypted: cdktf.booleanToTerraform(this._kmsEncrypted),
        kms_key: cdktf.stringToTerraform(this._kmsKey),
        network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
        snapshot_id: cdktf.stringToTerraform(this._snapshotId),
        source_volume_arn: cdktf.stringToTerraform(this._sourceVolumeArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        target_name: cdktf.stringToTerraform(this._targetName),
        volume_size_in_bytes: cdktf.numberToTerraform(this._volumeSizeInBytes),
      };
    }
  }
  export interface StoragegatewayFileSystemAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#audit_destination_arn StoragegatewayFileSystemAssociation#audit_destination_arn}
    */
    readonly auditDestinationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#gateway_arn StoragegatewayFileSystemAssociation#gateway_arn}
    */
    readonly gatewayArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#location_arn StoragegatewayFileSystemAssociation#location_arn}
    */
    readonly locationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#password StoragegatewayFileSystemAssociation#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#tags StoragegatewayFileSystemAssociation#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#tags_all StoragegatewayFileSystemAssociation#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#username StoragegatewayFileSystemAssociation#username}
    */
    readonly username: string;
    /**
    * cache_attributes block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#cache_attributes StoragegatewayFileSystemAssociation#cache_attributes}
    */
    readonly cacheAttributes?: StoragegatewayFileSystemAssociationCacheAttributes;
  }
  export interface StoragegatewayFileSystemAssociationCacheAttributes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#cache_stale_timeout_in_seconds StoragegatewayFileSystemAssociation#cache_stale_timeout_in_seconds}
    */
    readonly cacheStaleTimeoutInSeconds?: number;
  }

  function storagegatewayFileSystemAssociationCacheAttributesToTerraform(struct?: StoragegatewayFileSystemAssociationCacheAttributesOutputReference | StoragegatewayFileSystemAssociationCacheAttributes): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cache_stale_timeout_in_seconds: cdktf.numberToTerraform(struct!.cacheStaleTimeoutInSeconds),
    }
  }

  export class StoragegatewayFileSystemAssociationCacheAttributesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cache_stale_timeout_in_seconds - computed: false, optional: true, required: false
    private _cacheStaleTimeoutInSeconds?: number | undefined; 
    public get cacheStaleTimeoutInSeconds() {
      return this.getNumberAttribute('cache_stale_timeout_in_seconds');
    }
    public set cacheStaleTimeoutInSeconds(value: number | undefined) {
      this._cacheStaleTimeoutInSeconds = value;
    }
    public resetCacheStaleTimeoutInSeconds() {
      this._cacheStaleTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheStaleTimeoutInSecondsInput() {
      return this._cacheStaleTimeoutInSeconds
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html aws_storagegateway_file_system_association}
  */
  export class StoragegatewayFileSystemAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_storagegateway_file_system_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html aws_storagegateway_file_system_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayFileSystemAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: StoragegatewayFileSystemAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_storagegateway_file_system_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._auditDestinationArn = config.auditDestinationArn;
      this._gatewayArn = config.gatewayArn;
      this._locationArn = config.locationArn;
      this._password = config.password;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._username = config.username;
      this._cacheAttributes = config.cacheAttributes;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // audit_destination_arn - computed: false, optional: true, required: false
    private _auditDestinationArn?: string | undefined; 
    public get auditDestinationArn() {
      return this.getStringAttribute('audit_destination_arn');
    }
    public set auditDestinationArn(value: string | undefined) {
      this._auditDestinationArn = value;
    }
    public resetAuditDestinationArn() {
      this._auditDestinationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get auditDestinationArnInput() {
      return this._auditDestinationArn
    }

    // gateway_arn - computed: false, optional: false, required: true
    private _gatewayArn?: string; 
    public get gatewayArn() {
      return this.getStringAttribute('gateway_arn');
    }
    public set gatewayArn(value: string) {
      this._gatewayArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayArnInput() {
      return this._gatewayArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // location_arn - computed: false, optional: false, required: true
    private _locationArn?: string; 
    public get locationArn() {
      return this.getStringAttribute('location_arn');
    }
    public set locationArn(value: string) {
      this._locationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get locationArnInput() {
      return this._locationArn
    }

    // password - computed: false, optional: false, required: true
    private _password?: string; 
    public get password() {
      return this.getStringAttribute('password');
    }
    public set password(value: string) {
      this._password = value;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
      return this._password
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

    // username - computed: false, optional: false, required: true
    private _username?: string; 
    public get username() {
      return this.getStringAttribute('username');
    }
    public set username(value: string) {
      this._username = value;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
      return this._username
    }

    // cache_attributes - computed: false, optional: true, required: false
    private _cacheAttributes?: StoragegatewayFileSystemAssociationCacheAttributes | undefined; 
    private __cacheAttributesOutput = new StoragegatewayFileSystemAssociationCacheAttributesOutputReference(this as any, "cache_attributes", true);
    public get cacheAttributes() {
      return this.__cacheAttributesOutput;
    }
    public putCacheAttributes(value: StoragegatewayFileSystemAssociationCacheAttributes | undefined) {
      this._cacheAttributes = value;
    }
    public resetCacheAttributes() {
      this._cacheAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheAttributesInput() {
      return this._cacheAttributes
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        audit_destination_arn: cdktf.stringToTerraform(this._auditDestinationArn),
        gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
        location_arn: cdktf.stringToTerraform(this._locationArn),
        password: cdktf.stringToTerraform(this._password),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        username: cdktf.stringToTerraform(this._username),
        cache_attributes: storagegatewayFileSystemAssociationCacheAttributesToTerraform(this._cacheAttributes),
      };
    }
  }
  export interface StoragegatewayGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#activation_key StoragegatewayGateway#activation_key}
    */
    readonly activationKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#average_download_rate_limit_in_bits_per_sec StoragegatewayGateway#average_download_rate_limit_in_bits_per_sec}
    */
    readonly averageDownloadRateLimitInBitsPerSec?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#average_upload_rate_limit_in_bits_per_sec StoragegatewayGateway#average_upload_rate_limit_in_bits_per_sec}
    */
    readonly averageUploadRateLimitInBitsPerSec?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#cloudwatch_log_group_arn StoragegatewayGateway#cloudwatch_log_group_arn}
    */
    readonly cloudwatchLogGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#gateway_ip_address StoragegatewayGateway#gateway_ip_address}
    */
    readonly gatewayIpAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#gateway_name StoragegatewayGateway#gateway_name}
    */
    readonly gatewayName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#gateway_timezone StoragegatewayGateway#gateway_timezone}
    */
    readonly gatewayTimezone: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#gateway_type StoragegatewayGateway#gateway_type}
    */
    readonly gatewayType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#gateway_vpc_endpoint StoragegatewayGateway#gateway_vpc_endpoint}
    */
    readonly gatewayVpcEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#medium_changer_type StoragegatewayGateway#medium_changer_type}
    */
    readonly mediumChangerType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#smb_file_share_visibility StoragegatewayGateway#smb_file_share_visibility}
    */
    readonly smbFileShareVisibility?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#smb_guest_password StoragegatewayGateway#smb_guest_password}
    */
    readonly smbGuestPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#smb_security_strategy StoragegatewayGateway#smb_security_strategy}
    */
    readonly smbSecurityStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#tags StoragegatewayGateway#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#tags_all StoragegatewayGateway#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#tape_drive_type StoragegatewayGateway#tape_drive_type}
    */
    readonly tapeDriveType?: string;
    /**
    * smb_active_directory_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#smb_active_directory_settings StoragegatewayGateway#smb_active_directory_settings}
    */
    readonly smbActiveDirectorySettings?: StoragegatewayGatewaySmbActiveDirectorySettings;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#timeouts StoragegatewayGateway#timeouts}
    */
    readonly timeouts?: StoragegatewayGatewayTimeouts;
  }
  export class StoragegatewayGatewayGatewayNetworkInterface extends cdktf.ComplexComputedList {

    // ipv4_address - computed: true, optional: false, required: false
    public get ipv4Address() {
      return this.getStringAttribute('ipv4_address');
    }
  }
  export interface StoragegatewayGatewaySmbActiveDirectorySettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#domain_controllers StoragegatewayGateway#domain_controllers}
    */
    readonly domainControllers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#domain_name StoragegatewayGateway#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#organizational_unit StoragegatewayGateway#organizational_unit}
    */
    readonly organizationalUnit?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#password StoragegatewayGateway#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#timeout_in_seconds StoragegatewayGateway#timeout_in_seconds}
    */
    readonly timeoutInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#username StoragegatewayGateway#username}
    */
    readonly username: string;
  }

  function storagegatewayGatewaySmbActiveDirectorySettingsToTerraform(struct?: StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference | StoragegatewayGatewaySmbActiveDirectorySettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      domain_controllers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.domainControllers),
      domain_name: cdktf.stringToTerraform(struct!.domainName),
      organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
      password: cdktf.stringToTerraform(struct!.password),
      timeout_in_seconds: cdktf.numberToTerraform(struct!.timeoutInSeconds),
      username: cdktf.stringToTerraform(struct!.username),
    }
  }

  export class StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // domain_controllers - computed: false, optional: true, required: false
    private _domainControllers?: string[] | undefined; 
    public get domainControllers() {
      return this.getListAttribute('domain_controllers');
    }
    public set domainControllers(value: string[] | undefined) {
      this._domainControllers = value;
    }
    public resetDomainControllers() {
      this._domainControllers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainControllersInput() {
      return this._domainControllers
    }

    // domain_name - computed: false, optional: false, required: true
    private _domainName?: string; 
    public get domainName() {
      return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
      this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
      return this._domainName
    }

    // organizational_unit - computed: false, optional: true, required: false
    private _organizationalUnit?: string | undefined; 
    public get organizationalUnit() {
      return this.getStringAttribute('organizational_unit');
    }
    public set organizationalUnit(value: string | undefined) {
      this._organizationalUnit = value;
    }
    public resetOrganizationalUnit() {
      this._organizationalUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationalUnitInput() {
      return this._organizationalUnit
    }

    // password - computed: false, optional: false, required: true
    private _password?: string; 
    public get password() {
      return this.getStringAttribute('password');
    }
    public set password(value: string) {
      this._password = value;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
      return this._password
    }

    // timeout_in_seconds - computed: false, optional: true, required: false
    private _timeoutInSeconds?: number | undefined; 
    public get timeoutInSeconds() {
      return this.getNumberAttribute('timeout_in_seconds');
    }
    public set timeoutInSeconds(value: number | undefined) {
      this._timeoutInSeconds = value;
    }
    public resetTimeoutInSeconds() {
      this._timeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInSecondsInput() {
      return this._timeoutInSeconds
    }

    // username - computed: false, optional: false, required: true
    private _username?: string; 
    public get username() {
      return this.getStringAttribute('username');
    }
    public set username(value: string) {
      this._username = value;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
      return this._username
    }
  }
  export interface StoragegatewayGatewayTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#create StoragegatewayGateway#create}
    */
    readonly create?: string;
  }

  function storagegatewayGatewayTimeoutsToTerraform(struct?: StoragegatewayGatewayTimeoutsOutputReference | StoragegatewayGatewayTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
    }
  }

  export class StoragegatewayGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html aws_storagegateway_gateway}
  */
  export class StoragegatewayGateway extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_storagegateway_gateway";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html aws_storagegateway_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayGatewayConfig
    */
    public constructor(scope: Construct, id: string, config: StoragegatewayGatewayConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_storagegateway_gateway',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._activationKey = config.activationKey;
      this._averageDownloadRateLimitInBitsPerSec = config.averageDownloadRateLimitInBitsPerSec;
      this._averageUploadRateLimitInBitsPerSec = config.averageUploadRateLimitInBitsPerSec;
      this._cloudwatchLogGroupArn = config.cloudwatchLogGroupArn;
      this._gatewayIpAddress = config.gatewayIpAddress;
      this._gatewayName = config.gatewayName;
      this._gatewayTimezone = config.gatewayTimezone;
      this._gatewayType = config.gatewayType;
      this._gatewayVpcEndpoint = config.gatewayVpcEndpoint;
      this._mediumChangerType = config.mediumChangerType;
      this._smbFileShareVisibility = config.smbFileShareVisibility;
      this._smbGuestPassword = config.smbGuestPassword;
      this._smbSecurityStrategy = config.smbSecurityStrategy;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._tapeDriveType = config.tapeDriveType;
      this._smbActiveDirectorySettings = config.smbActiveDirectorySettings;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // activation_key - computed: true, optional: true, required: false
    private _activationKey?: string | undefined; 
    public get activationKey() {
      return this.getStringAttribute('activation_key');
    }
    public set activationKey(value: string | undefined) {
      this._activationKey = value;
    }
    public resetActivationKey() {
      this._activationKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activationKeyInput() {
      return this._activationKey
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // average_download_rate_limit_in_bits_per_sec - computed: false, optional: true, required: false
    private _averageDownloadRateLimitInBitsPerSec?: number | undefined; 
    public get averageDownloadRateLimitInBitsPerSec() {
      return this.getNumberAttribute('average_download_rate_limit_in_bits_per_sec');
    }
    public set averageDownloadRateLimitInBitsPerSec(value: number | undefined) {
      this._averageDownloadRateLimitInBitsPerSec = value;
    }
    public resetAverageDownloadRateLimitInBitsPerSec() {
      this._averageDownloadRateLimitInBitsPerSec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get averageDownloadRateLimitInBitsPerSecInput() {
      return this._averageDownloadRateLimitInBitsPerSec
    }

    // average_upload_rate_limit_in_bits_per_sec - computed: false, optional: true, required: false
    private _averageUploadRateLimitInBitsPerSec?: number | undefined; 
    public get averageUploadRateLimitInBitsPerSec() {
      return this.getNumberAttribute('average_upload_rate_limit_in_bits_per_sec');
    }
    public set averageUploadRateLimitInBitsPerSec(value: number | undefined) {
      this._averageUploadRateLimitInBitsPerSec = value;
    }
    public resetAverageUploadRateLimitInBitsPerSec() {
      this._averageUploadRateLimitInBitsPerSec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get averageUploadRateLimitInBitsPerSecInput() {
      return this._averageUploadRateLimitInBitsPerSec
    }

    // cloudwatch_log_group_arn - computed: false, optional: true, required: false
    private _cloudwatchLogGroupArn?: string | undefined; 
    public get cloudwatchLogGroupArn() {
      return this.getStringAttribute('cloudwatch_log_group_arn');
    }
    public set cloudwatchLogGroupArn(value: string | undefined) {
      this._cloudwatchLogGroupArn = value;
    }
    public resetCloudwatchLogGroupArn() {
      this._cloudwatchLogGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogGroupArnInput() {
      return this._cloudwatchLogGroupArn
    }

    // ec2_instance_id - computed: true, optional: false, required: false
    public get ec2InstanceId() {
      return this.getStringAttribute('ec2_instance_id');
    }

    // endpoint_type - computed: true, optional: false, required: false
    public get endpointType() {
      return this.getStringAttribute('endpoint_type');
    }

    // gateway_id - computed: true, optional: false, required: false
    public get gatewayId() {
      return this.getStringAttribute('gateway_id');
    }

    // gateway_ip_address - computed: true, optional: true, required: false
    private _gatewayIpAddress?: string | undefined; 
    public get gatewayIpAddress() {
      return this.getStringAttribute('gateway_ip_address');
    }
    public set gatewayIpAddress(value: string | undefined) {
      this._gatewayIpAddress = value;
    }
    public resetGatewayIpAddress() {
      this._gatewayIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayIpAddressInput() {
      return this._gatewayIpAddress
    }

    // gateway_name - computed: false, optional: false, required: true
    private _gatewayName?: string; 
    public get gatewayName() {
      return this.getStringAttribute('gateway_name');
    }
    public set gatewayName(value: string) {
      this._gatewayName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayNameInput() {
      return this._gatewayName
    }

    // gateway_network_interface - computed: true, optional: false, required: false
    public gatewayNetworkInterface(index: string) {
      return new StoragegatewayGatewayGatewayNetworkInterface(this, 'gateway_network_interface', index);
    }

    // gateway_timezone - computed: false, optional: false, required: true
    private _gatewayTimezone?: string; 
    public get gatewayTimezone() {
      return this.getStringAttribute('gateway_timezone');
    }
    public set gatewayTimezone(value: string) {
      this._gatewayTimezone = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayTimezoneInput() {
      return this._gatewayTimezone
    }

    // gateway_type - computed: false, optional: true, required: false
    private _gatewayType?: string | undefined; 
    public get gatewayType() {
      return this.getStringAttribute('gateway_type');
    }
    public set gatewayType(value: string | undefined) {
      this._gatewayType = value;
    }
    public resetGatewayType() {
      this._gatewayType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayTypeInput() {
      return this._gatewayType
    }

    // gateway_vpc_endpoint - computed: false, optional: true, required: false
    private _gatewayVpcEndpoint?: string | undefined; 
    public get gatewayVpcEndpoint() {
      return this.getStringAttribute('gateway_vpc_endpoint');
    }
    public set gatewayVpcEndpoint(value: string | undefined) {
      this._gatewayVpcEndpoint = value;
    }
    public resetGatewayVpcEndpoint() {
      this._gatewayVpcEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayVpcEndpointInput() {
      return this._gatewayVpcEndpoint
    }

    // host_environment - computed: true, optional: false, required: false
    public get hostEnvironment() {
      return this.getStringAttribute('host_environment');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // medium_changer_type - computed: false, optional: true, required: false
    private _mediumChangerType?: string | undefined; 
    public get mediumChangerType() {
      return this.getStringAttribute('medium_changer_type');
    }
    public set mediumChangerType(value: string | undefined) {
      this._mediumChangerType = value;
    }
    public resetMediumChangerType() {
      this._mediumChangerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediumChangerTypeInput() {
      return this._mediumChangerType
    }

    // smb_file_share_visibility - computed: false, optional: true, required: false
    private _smbFileShareVisibility?: boolean | cdktf.IResolvable | undefined; 
    public get smbFileShareVisibility() {
      return this.getBooleanAttribute('smb_file_share_visibility') as any;
    }
    public set smbFileShareVisibility(value: boolean | cdktf.IResolvable | undefined) {
      this._smbFileShareVisibility = value;
    }
    public resetSmbFileShareVisibility() {
      this._smbFileShareVisibility = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smbFileShareVisibilityInput() {
      return this._smbFileShareVisibility
    }

    // smb_guest_password - computed: false, optional: true, required: false
    private _smbGuestPassword?: string | undefined; 
    public get smbGuestPassword() {
      return this.getStringAttribute('smb_guest_password');
    }
    public set smbGuestPassword(value: string | undefined) {
      this._smbGuestPassword = value;
    }
    public resetSmbGuestPassword() {
      this._smbGuestPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smbGuestPasswordInput() {
      return this._smbGuestPassword
    }

    // smb_security_strategy - computed: true, optional: true, required: false
    private _smbSecurityStrategy?: string | undefined; 
    public get smbSecurityStrategy() {
      return this.getStringAttribute('smb_security_strategy');
    }
    public set smbSecurityStrategy(value: string | undefined) {
      this._smbSecurityStrategy = value;
    }
    public resetSmbSecurityStrategy() {
      this._smbSecurityStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smbSecurityStrategyInput() {
      return this._smbSecurityStrategy
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

    // tape_drive_type - computed: false, optional: true, required: false
    private _tapeDriveType?: string | undefined; 
    public get tapeDriveType() {
      return this.getStringAttribute('tape_drive_type');
    }
    public set tapeDriveType(value: string | undefined) {
      this._tapeDriveType = value;
    }
    public resetTapeDriveType() {
      this._tapeDriveType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tapeDriveTypeInput() {
      return this._tapeDriveType
    }

    // smb_active_directory_settings - computed: false, optional: true, required: false
    private _smbActiveDirectorySettings?: StoragegatewayGatewaySmbActiveDirectorySettings | undefined; 
    private __smbActiveDirectorySettingsOutput = new StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference(this as any, "smb_active_directory_settings", true);
    public get smbActiveDirectorySettings() {
      return this.__smbActiveDirectorySettingsOutput;
    }
    public putSmbActiveDirectorySettings(value: StoragegatewayGatewaySmbActiveDirectorySettings | undefined) {
      this._smbActiveDirectorySettings = value;
    }
    public resetSmbActiveDirectorySettings() {
      this._smbActiveDirectorySettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smbActiveDirectorySettingsInput() {
      return this._smbActiveDirectorySettings
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: StoragegatewayGatewayTimeouts | undefined; 
    private __timeoutsOutput = new StoragegatewayGatewayTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: StoragegatewayGatewayTimeouts | undefined) {
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
        activation_key: cdktf.stringToTerraform(this._activationKey),
        average_download_rate_limit_in_bits_per_sec: cdktf.numberToTerraform(this._averageDownloadRateLimitInBitsPerSec),
        average_upload_rate_limit_in_bits_per_sec: cdktf.numberToTerraform(this._averageUploadRateLimitInBitsPerSec),
        cloudwatch_log_group_arn: cdktf.stringToTerraform(this._cloudwatchLogGroupArn),
        gateway_ip_address: cdktf.stringToTerraform(this._gatewayIpAddress),
        gateway_name: cdktf.stringToTerraform(this._gatewayName),
        gateway_timezone: cdktf.stringToTerraform(this._gatewayTimezone),
        gateway_type: cdktf.stringToTerraform(this._gatewayType),
        gateway_vpc_endpoint: cdktf.stringToTerraform(this._gatewayVpcEndpoint),
        medium_changer_type: cdktf.stringToTerraform(this._mediumChangerType),
        smb_file_share_visibility: cdktf.booleanToTerraform(this._smbFileShareVisibility),
        smb_guest_password: cdktf.stringToTerraform(this._smbGuestPassword),
        smb_security_strategy: cdktf.stringToTerraform(this._smbSecurityStrategy),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        tape_drive_type: cdktf.stringToTerraform(this._tapeDriveType),
        smb_active_directory_settings: storagegatewayGatewaySmbActiveDirectorySettingsToTerraform(this._smbActiveDirectorySettings),
        timeouts: storagegatewayGatewayTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface StoragegatewayNfsFileShareConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#client_list StoragegatewayNfsFileShare#client_list}
    */
    readonly clientList: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#default_storage_class StoragegatewayNfsFileShare#default_storage_class}
    */
    readonly defaultStorageClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#file_share_name StoragegatewayNfsFileShare#file_share_name}
    */
    readonly fileShareName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#gateway_arn StoragegatewayNfsFileShare#gateway_arn}
    */
    readonly gatewayArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#guess_mime_type_enabled StoragegatewayNfsFileShare#guess_mime_type_enabled}
    */
    readonly guessMimeTypeEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#kms_encrypted StoragegatewayNfsFileShare#kms_encrypted}
    */
    readonly kmsEncrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#kms_key_arn StoragegatewayNfsFileShare#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#location_arn StoragegatewayNfsFileShare#location_arn}
    */
    readonly locationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#notification_policy StoragegatewayNfsFileShare#notification_policy}
    */
    readonly notificationPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#object_acl StoragegatewayNfsFileShare#object_acl}
    */
    readonly objectAcl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#read_only StoragegatewayNfsFileShare#read_only}
    */
    readonly readOnly?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#requester_pays StoragegatewayNfsFileShare#requester_pays}
    */
    readonly requesterPays?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#role_arn StoragegatewayNfsFileShare#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#squash StoragegatewayNfsFileShare#squash}
    */
    readonly squash?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#tags StoragegatewayNfsFileShare#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#tags_all StoragegatewayNfsFileShare#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * cache_attributes block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#cache_attributes StoragegatewayNfsFileShare#cache_attributes}
    */
    readonly cacheAttributes?: StoragegatewayNfsFileShareCacheAttributes;
    /**
    * nfs_file_share_defaults block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#nfs_file_share_defaults StoragegatewayNfsFileShare#nfs_file_share_defaults}
    */
    readonly nfsFileShareDefaults?: StoragegatewayNfsFileShareNfsFileShareDefaults;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#timeouts StoragegatewayNfsFileShare#timeouts}
    */
    readonly timeouts?: StoragegatewayNfsFileShareTimeouts;
  }
  export interface StoragegatewayNfsFileShareCacheAttributes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#cache_stale_timeout_in_seconds StoragegatewayNfsFileShare#cache_stale_timeout_in_seconds}
    */
    readonly cacheStaleTimeoutInSeconds?: number;
  }

  function storagegatewayNfsFileShareCacheAttributesToTerraform(struct?: StoragegatewayNfsFileShareCacheAttributesOutputReference | StoragegatewayNfsFileShareCacheAttributes): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cache_stale_timeout_in_seconds: cdktf.numberToTerraform(struct!.cacheStaleTimeoutInSeconds),
    }
  }

  export class StoragegatewayNfsFileShareCacheAttributesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cache_stale_timeout_in_seconds - computed: false, optional: true, required: false
    private _cacheStaleTimeoutInSeconds?: number | undefined; 
    public get cacheStaleTimeoutInSeconds() {
      return this.getNumberAttribute('cache_stale_timeout_in_seconds');
    }
    public set cacheStaleTimeoutInSeconds(value: number | undefined) {
      this._cacheStaleTimeoutInSeconds = value;
    }
    public resetCacheStaleTimeoutInSeconds() {
      this._cacheStaleTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheStaleTimeoutInSecondsInput() {
      return this._cacheStaleTimeoutInSeconds
    }
  }
  export interface StoragegatewayNfsFileShareNfsFileShareDefaults {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#directory_mode StoragegatewayNfsFileShare#directory_mode}
    */
    readonly directoryMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#file_mode StoragegatewayNfsFileShare#file_mode}
    */
    readonly fileMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#group_id StoragegatewayNfsFileShare#group_id}
    */
    readonly groupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#owner_id StoragegatewayNfsFileShare#owner_id}
    */
    readonly ownerId?: string;
  }

  function storagegatewayNfsFileShareNfsFileShareDefaultsToTerraform(struct?: StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference | StoragegatewayNfsFileShareNfsFileShareDefaults): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      directory_mode: cdktf.stringToTerraform(struct!.directoryMode),
      file_mode: cdktf.stringToTerraform(struct!.fileMode),
      group_id: cdktf.stringToTerraform(struct!.groupId),
      owner_id: cdktf.stringToTerraform(struct!.ownerId),
    }
  }

  export class StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // directory_mode - computed: false, optional: true, required: false
    private _directoryMode?: string | undefined; 
    public get directoryMode() {
      return this.getStringAttribute('directory_mode');
    }
    public set directoryMode(value: string | undefined) {
      this._directoryMode = value;
    }
    public resetDirectoryMode() {
      this._directoryMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryModeInput() {
      return this._directoryMode
    }

    // file_mode - computed: false, optional: true, required: false
    private _fileMode?: string | undefined; 
    public get fileMode() {
      return this.getStringAttribute('file_mode');
    }
    public set fileMode(value: string | undefined) {
      this._fileMode = value;
    }
    public resetFileMode() {
      this._fileMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileModeInput() {
      return this._fileMode
    }

    // group_id - computed: false, optional: true, required: false
    private _groupId?: string | undefined; 
    public get groupId() {
      return this.getStringAttribute('group_id');
    }
    public set groupId(value: string | undefined) {
      this._groupId = value;
    }
    public resetGroupId() {
      this._groupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupIdInput() {
      return this._groupId
    }

    // owner_id - computed: false, optional: true, required: false
    private _ownerId?: string | undefined; 
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }
    public set ownerId(value: string | undefined) {
      this._ownerId = value;
    }
    public resetOwnerId() {
      this._ownerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerIdInput() {
      return this._ownerId
    }
  }
  export interface StoragegatewayNfsFileShareTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#create StoragegatewayNfsFileShare#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#delete StoragegatewayNfsFileShare#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#update StoragegatewayNfsFileShare#update}
    */
    readonly update?: string;
  }

  function storagegatewayNfsFileShareTimeoutsToTerraform(struct?: StoragegatewayNfsFileShareTimeoutsOutputReference | StoragegatewayNfsFileShareTimeouts): any {
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

  export class StoragegatewayNfsFileShareTimeoutsOutputReference extends cdktf.ComplexObject {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html aws_storagegateway_nfs_file_share}
  */
  export class StoragegatewayNfsFileShare extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_storagegateway_nfs_file_share";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html aws_storagegateway_nfs_file_share} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayNfsFileShareConfig
    */
    public constructor(scope: Construct, id: string, config: StoragegatewayNfsFileShareConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_storagegateway_nfs_file_share',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clientList = config.clientList;
      this._defaultStorageClass = config.defaultStorageClass;
      this._fileShareName = config.fileShareName;
      this._gatewayArn = config.gatewayArn;
      this._guessMimeTypeEnabled = config.guessMimeTypeEnabled;
      this._kmsEncrypted = config.kmsEncrypted;
      this._kmsKeyArn = config.kmsKeyArn;
      this._locationArn = config.locationArn;
      this._notificationPolicy = config.notificationPolicy;
      this._objectAcl = config.objectAcl;
      this._readOnly = config.readOnly;
      this._requesterPays = config.requesterPays;
      this._roleArn = config.roleArn;
      this._squash = config.squash;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._cacheAttributes = config.cacheAttributes;
      this._nfsFileShareDefaults = config.nfsFileShareDefaults;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // client_list - computed: false, optional: false, required: true
    private _clientList?: string[]; 
    public get clientList() {
      return this.getListAttribute('client_list');
    }
    public set clientList(value: string[]) {
      this._clientList = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientListInput() {
      return this._clientList
    }

    // default_storage_class - computed: false, optional: true, required: false
    private _defaultStorageClass?: string | undefined; 
    public get defaultStorageClass() {
      return this.getStringAttribute('default_storage_class');
    }
    public set defaultStorageClass(value: string | undefined) {
      this._defaultStorageClass = value;
    }
    public resetDefaultStorageClass() {
      this._defaultStorageClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultStorageClassInput() {
      return this._defaultStorageClass
    }

    // file_share_name - computed: true, optional: true, required: false
    private _fileShareName?: string | undefined; 
    public get fileShareName() {
      return this.getStringAttribute('file_share_name');
    }
    public set fileShareName(value: string | undefined) {
      this._fileShareName = value;
    }
    public resetFileShareName() {
      this._fileShareName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileShareNameInput() {
      return this._fileShareName
    }

    // fileshare_id - computed: true, optional: false, required: false
    public get fileshareId() {
      return this.getStringAttribute('fileshare_id');
    }

    // gateway_arn - computed: false, optional: false, required: true
    private _gatewayArn?: string; 
    public get gatewayArn() {
      return this.getStringAttribute('gateway_arn');
    }
    public set gatewayArn(value: string) {
      this._gatewayArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayArnInput() {
      return this._gatewayArn
    }

    // guess_mime_type_enabled - computed: false, optional: true, required: false
    private _guessMimeTypeEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get guessMimeTypeEnabled() {
      return this.getBooleanAttribute('guess_mime_type_enabled') as any;
    }
    public set guessMimeTypeEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._guessMimeTypeEnabled = value;
    }
    public resetGuessMimeTypeEnabled() {
      this._guessMimeTypeEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get guessMimeTypeEnabledInput() {
      return this._guessMimeTypeEnabled
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_encrypted - computed: false, optional: true, required: false
    private _kmsEncrypted?: boolean | cdktf.IResolvable | undefined; 
    public get kmsEncrypted() {
      return this.getBooleanAttribute('kms_encrypted') as any;
    }
    public set kmsEncrypted(value: boolean | cdktf.IResolvable | undefined) {
      this._kmsEncrypted = value;
    }
    public resetKmsEncrypted() {
      this._kmsEncrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsEncryptedInput() {
      return this._kmsEncrypted
    }

    // kms_key_arn - computed: false, optional: true, required: false
    private _kmsKeyArn?: string | undefined; 
    public get kmsKeyArn() {
      return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string | undefined) {
      this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
      this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
      return this._kmsKeyArn
    }

    // location_arn - computed: false, optional: false, required: true
    private _locationArn?: string; 
    public get locationArn() {
      return this.getStringAttribute('location_arn');
    }
    public set locationArn(value: string) {
      this._locationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get locationArnInput() {
      return this._locationArn
    }

    // notification_policy - computed: false, optional: true, required: false
    private _notificationPolicy?: string | undefined; 
    public get notificationPolicy() {
      return this.getStringAttribute('notification_policy');
    }
    public set notificationPolicy(value: string | undefined) {
      this._notificationPolicy = value;
    }
    public resetNotificationPolicy() {
      this._notificationPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationPolicyInput() {
      return this._notificationPolicy
    }

    // object_acl - computed: false, optional: true, required: false
    private _objectAcl?: string | undefined; 
    public get objectAcl() {
      return this.getStringAttribute('object_acl');
    }
    public set objectAcl(value: string | undefined) {
      this._objectAcl = value;
    }
    public resetObjectAcl() {
      this._objectAcl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectAclInput() {
      return this._objectAcl
    }

    // path - computed: true, optional: false, required: false
    public get path() {
      return this.getStringAttribute('path');
    }

    // read_only - computed: false, optional: true, required: false
    private _readOnly?: boolean | cdktf.IResolvable | undefined; 
    public get readOnly() {
      return this.getBooleanAttribute('read_only') as any;
    }
    public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
      this._readOnly = value;
    }
    public resetReadOnly() {
      this._readOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readOnlyInput() {
      return this._readOnly
    }

    // requester_pays - computed: false, optional: true, required: false
    private _requesterPays?: boolean | cdktf.IResolvable | undefined; 
    public get requesterPays() {
      return this.getBooleanAttribute('requester_pays') as any;
    }
    public set requesterPays(value: boolean | cdktf.IResolvable | undefined) {
      this._requesterPays = value;
    }
    public resetRequesterPays() {
      this._requesterPays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requesterPaysInput() {
      return this._requesterPays
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

    // squash - computed: false, optional: true, required: false
    private _squash?: string | undefined; 
    public get squash() {
      return this.getStringAttribute('squash');
    }
    public set squash(value: string | undefined) {
      this._squash = value;
    }
    public resetSquash() {
      this._squash = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get squashInput() {
      return this._squash
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

    // cache_attributes - computed: false, optional: true, required: false
    private _cacheAttributes?: StoragegatewayNfsFileShareCacheAttributes | undefined; 
    private __cacheAttributesOutput = new StoragegatewayNfsFileShareCacheAttributesOutputReference(this as any, "cache_attributes", true);
    public get cacheAttributes() {
      return this.__cacheAttributesOutput;
    }
    public putCacheAttributes(value: StoragegatewayNfsFileShareCacheAttributes | undefined) {
      this._cacheAttributes = value;
    }
    public resetCacheAttributes() {
      this._cacheAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheAttributesInput() {
      return this._cacheAttributes
    }

    // nfs_file_share_defaults - computed: false, optional: true, required: false
    private _nfsFileShareDefaults?: StoragegatewayNfsFileShareNfsFileShareDefaults | undefined; 
    private __nfsFileShareDefaultsOutput = new StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference(this as any, "nfs_file_share_defaults", true);
    public get nfsFileShareDefaults() {
      return this.__nfsFileShareDefaultsOutput;
    }
    public putNfsFileShareDefaults(value: StoragegatewayNfsFileShareNfsFileShareDefaults | undefined) {
      this._nfsFileShareDefaults = value;
    }
    public resetNfsFileShareDefaults() {
      this._nfsFileShareDefaults = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nfsFileShareDefaultsInput() {
      return this._nfsFileShareDefaults
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: StoragegatewayNfsFileShareTimeouts | undefined; 
    private __timeoutsOutput = new StoragegatewayNfsFileShareTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: StoragegatewayNfsFileShareTimeouts | undefined) {
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
        client_list: cdktf.listMapper(cdktf.stringToTerraform)(this._clientList),
        default_storage_class: cdktf.stringToTerraform(this._defaultStorageClass),
        file_share_name: cdktf.stringToTerraform(this._fileShareName),
        gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
        guess_mime_type_enabled: cdktf.booleanToTerraform(this._guessMimeTypeEnabled),
        kms_encrypted: cdktf.booleanToTerraform(this._kmsEncrypted),
        kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
        location_arn: cdktf.stringToTerraform(this._locationArn),
        notification_policy: cdktf.stringToTerraform(this._notificationPolicy),
        object_acl: cdktf.stringToTerraform(this._objectAcl),
        read_only: cdktf.booleanToTerraform(this._readOnly),
        requester_pays: cdktf.booleanToTerraform(this._requesterPays),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        squash: cdktf.stringToTerraform(this._squash),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        cache_attributes: storagegatewayNfsFileShareCacheAttributesToTerraform(this._cacheAttributes),
        nfs_file_share_defaults: storagegatewayNfsFileShareNfsFileShareDefaultsToTerraform(this._nfsFileShareDefaults),
        timeouts: storagegatewayNfsFileShareTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface StoragegatewaySmbFileShareConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}
    */
    readonly accessBasedEnumeration?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#admin_user_list StoragegatewaySmbFileShare#admin_user_list}
    */
    readonly adminUserList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}
    */
    readonly auditDestinationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#authentication StoragegatewaySmbFileShare#authentication}
    */
    readonly authentication?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#bucket_region StoragegatewaySmbFileShare#bucket_region}
    */
    readonly bucketRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}
    */
    readonly caseSensitivity?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#default_storage_class StoragegatewaySmbFileShare#default_storage_class}
    */
    readonly defaultStorageClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#file_share_name StoragegatewaySmbFileShare#file_share_name}
    */
    readonly fileShareName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#gateway_arn StoragegatewaySmbFileShare#gateway_arn}
    */
    readonly gatewayArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}
    */
    readonly guessMimeTypeEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}
    */
    readonly invalidUserList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}
    */
    readonly kmsEncrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#kms_key_arn StoragegatewaySmbFileShare#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#location_arn StoragegatewaySmbFileShare#location_arn}
    */
    readonly locationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#notification_policy StoragegatewaySmbFileShare#notification_policy}
    */
    readonly notificationPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#object_acl StoragegatewaySmbFileShare#object_acl}
    */
    readonly objectAcl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#oplocks_enabled StoragegatewaySmbFileShare#oplocks_enabled}
    */
    readonly oplocksEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#read_only StoragegatewaySmbFileShare#read_only}
    */
    readonly readOnly?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#requester_pays StoragegatewaySmbFileShare#requester_pays}
    */
    readonly requesterPays?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#role_arn StoragegatewaySmbFileShare#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#smb_acl_enabled StoragegatewaySmbFileShare#smb_acl_enabled}
    */
    readonly smbAclEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#tags StoragegatewaySmbFileShare#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#tags_all StoragegatewaySmbFileShare#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#valid_user_list StoragegatewaySmbFileShare#valid_user_list}
    */
    readonly validUserList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#vpc_endpoint_dns_name StoragegatewaySmbFileShare#vpc_endpoint_dns_name}
    */
    readonly vpcEndpointDnsName?: string;
    /**
    * cache_attributes block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#cache_attributes StoragegatewaySmbFileShare#cache_attributes}
    */
    readonly cacheAttributes?: StoragegatewaySmbFileShareCacheAttributes;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#timeouts StoragegatewaySmbFileShare#timeouts}
    */
    readonly timeouts?: StoragegatewaySmbFileShareTimeouts;
  }
  export interface StoragegatewaySmbFileShareCacheAttributes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#cache_stale_timeout_in_seconds StoragegatewaySmbFileShare#cache_stale_timeout_in_seconds}
    */
    readonly cacheStaleTimeoutInSeconds?: number;
  }

  function storagegatewaySmbFileShareCacheAttributesToTerraform(struct?: StoragegatewaySmbFileShareCacheAttributesOutputReference | StoragegatewaySmbFileShareCacheAttributes): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cache_stale_timeout_in_seconds: cdktf.numberToTerraform(struct!.cacheStaleTimeoutInSeconds),
    }
  }

  export class StoragegatewaySmbFileShareCacheAttributesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cache_stale_timeout_in_seconds - computed: false, optional: true, required: false
    private _cacheStaleTimeoutInSeconds?: number | undefined; 
    public get cacheStaleTimeoutInSeconds() {
      return this.getNumberAttribute('cache_stale_timeout_in_seconds');
    }
    public set cacheStaleTimeoutInSeconds(value: number | undefined) {
      this._cacheStaleTimeoutInSeconds = value;
    }
    public resetCacheStaleTimeoutInSeconds() {
      this._cacheStaleTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheStaleTimeoutInSecondsInput() {
      return this._cacheStaleTimeoutInSeconds
    }
  }
  export interface StoragegatewaySmbFileShareTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#create StoragegatewaySmbFileShare#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#delete StoragegatewaySmbFileShare#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#update StoragegatewaySmbFileShare#update}
    */
    readonly update?: string;
  }

  function storagegatewaySmbFileShareTimeoutsToTerraform(struct?: StoragegatewaySmbFileShareTimeoutsOutputReference | StoragegatewaySmbFileShareTimeouts): any {
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

  export class StoragegatewaySmbFileShareTimeoutsOutputReference extends cdktf.ComplexObject {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html aws_storagegateway_smb_file_share}
  */
  export class StoragegatewaySmbFileShare extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_storagegateway_smb_file_share";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html aws_storagegateway_smb_file_share} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewaySmbFileShareConfig
    */
    public constructor(scope: Construct, id: string, config: StoragegatewaySmbFileShareConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_storagegateway_smb_file_share',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accessBasedEnumeration = config.accessBasedEnumeration;
      this._adminUserList = config.adminUserList;
      this._auditDestinationArn = config.auditDestinationArn;
      this._authentication = config.authentication;
      this._bucketRegion = config.bucketRegion;
      this._caseSensitivity = config.caseSensitivity;
      this._defaultStorageClass = config.defaultStorageClass;
      this._fileShareName = config.fileShareName;
      this._gatewayArn = config.gatewayArn;
      this._guessMimeTypeEnabled = config.guessMimeTypeEnabled;
      this._invalidUserList = config.invalidUserList;
      this._kmsEncrypted = config.kmsEncrypted;
      this._kmsKeyArn = config.kmsKeyArn;
      this._locationArn = config.locationArn;
      this._notificationPolicy = config.notificationPolicy;
      this._objectAcl = config.objectAcl;
      this._oplocksEnabled = config.oplocksEnabled;
      this._readOnly = config.readOnly;
      this._requesterPays = config.requesterPays;
      this._roleArn = config.roleArn;
      this._smbAclEnabled = config.smbAclEnabled;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._validUserList = config.validUserList;
      this._vpcEndpointDnsName = config.vpcEndpointDnsName;
      this._cacheAttributes = config.cacheAttributes;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_based_enumeration - computed: false, optional: true, required: false
    private _accessBasedEnumeration?: boolean | cdktf.IResolvable | undefined; 
    public get accessBasedEnumeration() {
      return this.getBooleanAttribute('access_based_enumeration') as any;
    }
    public set accessBasedEnumeration(value: boolean | cdktf.IResolvable | undefined) {
      this._accessBasedEnumeration = value;
    }
    public resetAccessBasedEnumeration() {
      this._accessBasedEnumeration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessBasedEnumerationInput() {
      return this._accessBasedEnumeration
    }

    // admin_user_list - computed: false, optional: true, required: false
    private _adminUserList?: string[] | undefined; 
    public get adminUserList() {
      return this.getListAttribute('admin_user_list');
    }
    public set adminUserList(value: string[] | undefined) {
      this._adminUserList = value;
    }
    public resetAdminUserList() {
      this._adminUserList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adminUserListInput() {
      return this._adminUserList
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // audit_destination_arn - computed: false, optional: true, required: false
    private _auditDestinationArn?: string | undefined; 
    public get auditDestinationArn() {
      return this.getStringAttribute('audit_destination_arn');
    }
    public set auditDestinationArn(value: string | undefined) {
      this._auditDestinationArn = value;
    }
    public resetAuditDestinationArn() {
      this._auditDestinationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get auditDestinationArnInput() {
      return this._auditDestinationArn
    }

    // authentication - computed: false, optional: true, required: false
    private _authentication?: string | undefined; 
    public get authentication() {
      return this.getStringAttribute('authentication');
    }
    public set authentication(value: string | undefined) {
      this._authentication = value;
    }
    public resetAuthentication() {
      this._authentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationInput() {
      return this._authentication
    }

    // bucket_region - computed: false, optional: true, required: false
    private _bucketRegion?: string | undefined; 
    public get bucketRegion() {
      return this.getStringAttribute('bucket_region');
    }
    public set bucketRegion(value: string | undefined) {
      this._bucketRegion = value;
    }
    public resetBucketRegion() {
      this._bucketRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketRegionInput() {
      return this._bucketRegion
    }

    // case_sensitivity - computed: false, optional: true, required: false
    private _caseSensitivity?: string | undefined; 
    public get caseSensitivity() {
      return this.getStringAttribute('case_sensitivity');
    }
    public set caseSensitivity(value: string | undefined) {
      this._caseSensitivity = value;
    }
    public resetCaseSensitivity() {
      this._caseSensitivity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caseSensitivityInput() {
      return this._caseSensitivity
    }

    // default_storage_class - computed: false, optional: true, required: false
    private _defaultStorageClass?: string | undefined; 
    public get defaultStorageClass() {
      return this.getStringAttribute('default_storage_class');
    }
    public set defaultStorageClass(value: string | undefined) {
      this._defaultStorageClass = value;
    }
    public resetDefaultStorageClass() {
      this._defaultStorageClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultStorageClassInput() {
      return this._defaultStorageClass
    }

    // file_share_name - computed: true, optional: true, required: false
    private _fileShareName?: string | undefined; 
    public get fileShareName() {
      return this.getStringAttribute('file_share_name');
    }
    public set fileShareName(value: string | undefined) {
      this._fileShareName = value;
    }
    public resetFileShareName() {
      this._fileShareName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileShareNameInput() {
      return this._fileShareName
    }

    // fileshare_id - computed: true, optional: false, required: false
    public get fileshareId() {
      return this.getStringAttribute('fileshare_id');
    }

    // gateway_arn - computed: false, optional: false, required: true
    private _gatewayArn?: string; 
    public get gatewayArn() {
      return this.getStringAttribute('gateway_arn');
    }
    public set gatewayArn(value: string) {
      this._gatewayArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayArnInput() {
      return this._gatewayArn
    }

    // guess_mime_type_enabled - computed: false, optional: true, required: false
    private _guessMimeTypeEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get guessMimeTypeEnabled() {
      return this.getBooleanAttribute('guess_mime_type_enabled') as any;
    }
    public set guessMimeTypeEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._guessMimeTypeEnabled = value;
    }
    public resetGuessMimeTypeEnabled() {
      this._guessMimeTypeEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get guessMimeTypeEnabledInput() {
      return this._guessMimeTypeEnabled
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // invalid_user_list - computed: false, optional: true, required: false
    private _invalidUserList?: string[] | undefined; 
    public get invalidUserList() {
      return this.getListAttribute('invalid_user_list');
    }
    public set invalidUserList(value: string[] | undefined) {
      this._invalidUserList = value;
    }
    public resetInvalidUserList() {
      this._invalidUserList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invalidUserListInput() {
      return this._invalidUserList
    }

    // kms_encrypted - computed: false, optional: true, required: false
    private _kmsEncrypted?: boolean | cdktf.IResolvable | undefined; 
    public get kmsEncrypted() {
      return this.getBooleanAttribute('kms_encrypted') as any;
    }
    public set kmsEncrypted(value: boolean | cdktf.IResolvable | undefined) {
      this._kmsEncrypted = value;
    }
    public resetKmsEncrypted() {
      this._kmsEncrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsEncryptedInput() {
      return this._kmsEncrypted
    }

    // kms_key_arn - computed: false, optional: true, required: false
    private _kmsKeyArn?: string | undefined; 
    public get kmsKeyArn() {
      return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string | undefined) {
      this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
      this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
      return this._kmsKeyArn
    }

    // location_arn - computed: false, optional: false, required: true
    private _locationArn?: string; 
    public get locationArn() {
      return this.getStringAttribute('location_arn');
    }
    public set locationArn(value: string) {
      this._locationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get locationArnInput() {
      return this._locationArn
    }

    // notification_policy - computed: false, optional: true, required: false
    private _notificationPolicy?: string | undefined; 
    public get notificationPolicy() {
      return this.getStringAttribute('notification_policy');
    }
    public set notificationPolicy(value: string | undefined) {
      this._notificationPolicy = value;
    }
    public resetNotificationPolicy() {
      this._notificationPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationPolicyInput() {
      return this._notificationPolicy
    }

    // object_acl - computed: false, optional: true, required: false
    private _objectAcl?: string | undefined; 
    public get objectAcl() {
      return this.getStringAttribute('object_acl');
    }
    public set objectAcl(value: string | undefined) {
      this._objectAcl = value;
    }
    public resetObjectAcl() {
      this._objectAcl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectAclInput() {
      return this._objectAcl
    }

    // oplocks_enabled - computed: true, optional: true, required: false
    private _oplocksEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get oplocksEnabled() {
      return this.getBooleanAttribute('oplocks_enabled') as any;
    }
    public set oplocksEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._oplocksEnabled = value;
    }
    public resetOplocksEnabled() {
      this._oplocksEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oplocksEnabledInput() {
      return this._oplocksEnabled
    }

    // path - computed: true, optional: false, required: false
    public get path() {
      return this.getStringAttribute('path');
    }

    // read_only - computed: false, optional: true, required: false
    private _readOnly?: boolean | cdktf.IResolvable | undefined; 
    public get readOnly() {
      return this.getBooleanAttribute('read_only') as any;
    }
    public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
      this._readOnly = value;
    }
    public resetReadOnly() {
      this._readOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readOnlyInput() {
      return this._readOnly
    }

    // requester_pays - computed: false, optional: true, required: false
    private _requesterPays?: boolean | cdktf.IResolvable | undefined; 
    public get requesterPays() {
      return this.getBooleanAttribute('requester_pays') as any;
    }
    public set requesterPays(value: boolean | cdktf.IResolvable | undefined) {
      this._requesterPays = value;
    }
    public resetRequesterPays() {
      this._requesterPays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requesterPaysInput() {
      return this._requesterPays
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

    // smb_acl_enabled - computed: false, optional: true, required: false
    private _smbAclEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get smbAclEnabled() {
      return this.getBooleanAttribute('smb_acl_enabled') as any;
    }
    public set smbAclEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._smbAclEnabled = value;
    }
    public resetSmbAclEnabled() {
      this._smbAclEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smbAclEnabledInput() {
      return this._smbAclEnabled
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

    // valid_user_list - computed: false, optional: true, required: false
    private _validUserList?: string[] | undefined; 
    public get validUserList() {
      return this.getListAttribute('valid_user_list');
    }
    public set validUserList(value: string[] | undefined) {
      this._validUserList = value;
    }
    public resetValidUserList() {
      this._validUserList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validUserListInput() {
      return this._validUserList
    }

    // vpc_endpoint_dns_name - computed: false, optional: true, required: false
    private _vpcEndpointDnsName?: string | undefined; 
    public get vpcEndpointDnsName() {
      return this.getStringAttribute('vpc_endpoint_dns_name');
    }
    public set vpcEndpointDnsName(value: string | undefined) {
      this._vpcEndpointDnsName = value;
    }
    public resetVpcEndpointDnsName() {
      this._vpcEndpointDnsName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEndpointDnsNameInput() {
      return this._vpcEndpointDnsName
    }

    // cache_attributes - computed: false, optional: true, required: false
    private _cacheAttributes?: StoragegatewaySmbFileShareCacheAttributes | undefined; 
    private __cacheAttributesOutput = new StoragegatewaySmbFileShareCacheAttributesOutputReference(this as any, "cache_attributes", true);
    public get cacheAttributes() {
      return this.__cacheAttributesOutput;
    }
    public putCacheAttributes(value: StoragegatewaySmbFileShareCacheAttributes | undefined) {
      this._cacheAttributes = value;
    }
    public resetCacheAttributes() {
      this._cacheAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheAttributesInput() {
      return this._cacheAttributes
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: StoragegatewaySmbFileShareTimeouts | undefined; 
    private __timeoutsOutput = new StoragegatewaySmbFileShareTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: StoragegatewaySmbFileShareTimeouts | undefined) {
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
        access_based_enumeration: cdktf.booleanToTerraform(this._accessBasedEnumeration),
        admin_user_list: cdktf.listMapper(cdktf.stringToTerraform)(this._adminUserList),
        audit_destination_arn: cdktf.stringToTerraform(this._auditDestinationArn),
        authentication: cdktf.stringToTerraform(this._authentication),
        bucket_region: cdktf.stringToTerraform(this._bucketRegion),
        case_sensitivity: cdktf.stringToTerraform(this._caseSensitivity),
        default_storage_class: cdktf.stringToTerraform(this._defaultStorageClass),
        file_share_name: cdktf.stringToTerraform(this._fileShareName),
        gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
        guess_mime_type_enabled: cdktf.booleanToTerraform(this._guessMimeTypeEnabled),
        invalid_user_list: cdktf.listMapper(cdktf.stringToTerraform)(this._invalidUserList),
        kms_encrypted: cdktf.booleanToTerraform(this._kmsEncrypted),
        kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
        location_arn: cdktf.stringToTerraform(this._locationArn),
        notification_policy: cdktf.stringToTerraform(this._notificationPolicy),
        object_acl: cdktf.stringToTerraform(this._objectAcl),
        oplocks_enabled: cdktf.booleanToTerraform(this._oplocksEnabled),
        read_only: cdktf.booleanToTerraform(this._readOnly),
        requester_pays: cdktf.booleanToTerraform(this._requesterPays),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        smb_acl_enabled: cdktf.booleanToTerraform(this._smbAclEnabled),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        valid_user_list: cdktf.listMapper(cdktf.stringToTerraform)(this._validUserList),
        vpc_endpoint_dns_name: cdktf.stringToTerraform(this._vpcEndpointDnsName),
        cache_attributes: storagegatewaySmbFileShareCacheAttributesToTerraform(this._cacheAttributes),
        timeouts: storagegatewaySmbFileShareTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface StoragegatewayStoredIscsiVolumeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#disk_id StoragegatewayStoredIscsiVolume#disk_id}
    */
    readonly diskId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#gateway_arn StoragegatewayStoredIscsiVolume#gateway_arn}
    */
    readonly gatewayArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#kms_encrypted StoragegatewayStoredIscsiVolume#kms_encrypted}
    */
    readonly kmsEncrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#kms_key StoragegatewayStoredIscsiVolume#kms_key}
    */
    readonly kmsKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#network_interface_id StoragegatewayStoredIscsiVolume#network_interface_id}
    */
    readonly networkInterfaceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#preserve_existing_data StoragegatewayStoredIscsiVolume#preserve_existing_data}
    */
    readonly preserveExistingData: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#snapshot_id StoragegatewayStoredIscsiVolume#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#tags StoragegatewayStoredIscsiVolume#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#tags_all StoragegatewayStoredIscsiVolume#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#target_name StoragegatewayStoredIscsiVolume#target_name}
    */
    readonly targetName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html aws_storagegateway_stored_iscsi_volume}
  */
  export class StoragegatewayStoredIscsiVolume extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_storagegateway_stored_iscsi_volume";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html aws_storagegateway_stored_iscsi_volume} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayStoredIscsiVolumeConfig
    */
    public constructor(scope: Construct, id: string, config: StoragegatewayStoredIscsiVolumeConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_storagegateway_stored_iscsi_volume',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._diskId = config.diskId;
      this._gatewayArn = config.gatewayArn;
      this._kmsEncrypted = config.kmsEncrypted;
      this._kmsKey = config.kmsKey;
      this._networkInterfaceId = config.networkInterfaceId;
      this._preserveExistingData = config.preserveExistingData;
      this._snapshotId = config.snapshotId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._targetName = config.targetName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // chap_enabled - computed: true, optional: false, required: false
    public get chapEnabled() {
      return this.getBooleanAttribute('chap_enabled') as any;
    }

    // disk_id - computed: false, optional: false, required: true
    private _diskId?: string; 
    public get diskId() {
      return this.getStringAttribute('disk_id');
    }
    public set diskId(value: string) {
      this._diskId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get diskIdInput() {
      return this._diskId
    }

    // gateway_arn - computed: false, optional: false, required: true
    private _gatewayArn?: string; 
    public get gatewayArn() {
      return this.getStringAttribute('gateway_arn');
    }
    public set gatewayArn(value: string) {
      this._gatewayArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayArnInput() {
      return this._gatewayArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_encrypted - computed: false, optional: true, required: false
    private _kmsEncrypted?: boolean | cdktf.IResolvable | undefined; 
    public get kmsEncrypted() {
      return this.getBooleanAttribute('kms_encrypted') as any;
    }
    public set kmsEncrypted(value: boolean | cdktf.IResolvable | undefined) {
      this._kmsEncrypted = value;
    }
    public resetKmsEncrypted() {
      this._kmsEncrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsEncryptedInput() {
      return this._kmsEncrypted
    }

    // kms_key - computed: false, optional: true, required: false
    private _kmsKey?: string | undefined; 
    public get kmsKey() {
      return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string | undefined) {
      this._kmsKey = value;
    }
    public resetKmsKey() {
      this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyInput() {
      return this._kmsKey
    }

    // lun_number - computed: true, optional: false, required: false
    public get lunNumber() {
      return this.getNumberAttribute('lun_number');
    }

    // network_interface_id - computed: false, optional: false, required: true
    private _networkInterfaceId?: string; 
    public get networkInterfaceId() {
      return this.getStringAttribute('network_interface_id');
    }
    public set networkInterfaceId(value: string) {
      this._networkInterfaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceIdInput() {
      return this._networkInterfaceId
    }

    // network_interface_port - computed: true, optional: false, required: false
    public get networkInterfacePort() {
      return this.getNumberAttribute('network_interface_port');
    }

    // preserve_existing_data - computed: false, optional: false, required: true
    private _preserveExistingData?: boolean | cdktf.IResolvable; 
    public get preserveExistingData() {
      return this.getBooleanAttribute('preserve_existing_data') as any;
    }
    public set preserveExistingData(value: boolean | cdktf.IResolvable) {
      this._preserveExistingData = value;
    }
    // Temporarily expose input value. Use with caution.
    public get preserveExistingDataInput() {
      return this._preserveExistingData
    }

    // snapshot_id - computed: false, optional: true, required: false
    private _snapshotId?: string | undefined; 
    public get snapshotId() {
      return this.getStringAttribute('snapshot_id');
    }
    public set snapshotId(value: string | undefined) {
      this._snapshotId = value;
    }
    public resetSnapshotId() {
      this._snapshotId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotIdInput() {
      return this._snapshotId
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

    // target_arn - computed: true, optional: false, required: false
    public get targetArn() {
      return this.getStringAttribute('target_arn');
    }

    // target_name - computed: false, optional: false, required: true
    private _targetName?: string; 
    public get targetName() {
      return this.getStringAttribute('target_name');
    }
    public set targetName(value: string) {
      this._targetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetNameInput() {
      return this._targetName
    }

    // volume_attachment_status - computed: true, optional: false, required: false
    public get volumeAttachmentStatus() {
      return this.getStringAttribute('volume_attachment_status');
    }

    // volume_id - computed: true, optional: false, required: false
    public get volumeId() {
      return this.getStringAttribute('volume_id');
    }

    // volume_size_in_bytes - computed: true, optional: false, required: false
    public get volumeSizeInBytes() {
      return this.getNumberAttribute('volume_size_in_bytes');
    }

    // volume_status - computed: true, optional: false, required: false
    public get volumeStatus() {
      return this.getStringAttribute('volume_status');
    }

    // volume_type - computed: true, optional: false, required: false
    public get volumeType() {
      return this.getStringAttribute('volume_type');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        disk_id: cdktf.stringToTerraform(this._diskId),
        gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
        kms_encrypted: cdktf.booleanToTerraform(this._kmsEncrypted),
        kms_key: cdktf.stringToTerraform(this._kmsKey),
        network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
        preserve_existing_data: cdktf.booleanToTerraform(this._preserveExistingData),
        snapshot_id: cdktf.stringToTerraform(this._snapshotId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        target_name: cdktf.stringToTerraform(this._targetName),
      };
    }
  }
  export interface StoragegatewayTapePoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html#pool_name StoragegatewayTapePool#pool_name}
    */
    readonly poolName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html#retention_lock_time_in_days StoragegatewayTapePool#retention_lock_time_in_days}
    */
    readonly retentionLockTimeInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html#retention_lock_type StoragegatewayTapePool#retention_lock_type}
    */
    readonly retentionLockType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html#storage_class StoragegatewayTapePool#storage_class}
    */
    readonly storageClass: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html#tags StoragegatewayTapePool#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html#tags_all StoragegatewayTapePool#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html aws_storagegateway_tape_pool}
  */
  export class StoragegatewayTapePool extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_storagegateway_tape_pool";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html aws_storagegateway_tape_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayTapePoolConfig
    */
    public constructor(scope: Construct, id: string, config: StoragegatewayTapePoolConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_storagegateway_tape_pool',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._poolName = config.poolName;
      this._retentionLockTimeInDays = config.retentionLockTimeInDays;
      this._retentionLockType = config.retentionLockType;
      this._storageClass = config.storageClass;
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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // pool_name - computed: false, optional: false, required: true
    private _poolName?: string; 
    public get poolName() {
      return this.getStringAttribute('pool_name');
    }
    public set poolName(value: string) {
      this._poolName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get poolNameInput() {
      return this._poolName
    }

    // retention_lock_time_in_days - computed: false, optional: true, required: false
    private _retentionLockTimeInDays?: number | undefined; 
    public get retentionLockTimeInDays() {
      return this.getNumberAttribute('retention_lock_time_in_days');
    }
    public set retentionLockTimeInDays(value: number | undefined) {
      this._retentionLockTimeInDays = value;
    }
    public resetRetentionLockTimeInDays() {
      this._retentionLockTimeInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionLockTimeInDaysInput() {
      return this._retentionLockTimeInDays
    }

    // retention_lock_type - computed: false, optional: true, required: false
    private _retentionLockType?: string | undefined; 
    public get retentionLockType() {
      return this.getStringAttribute('retention_lock_type');
    }
    public set retentionLockType(value: string | undefined) {
      this._retentionLockType = value;
    }
    public resetRetentionLockType() {
      this._retentionLockType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionLockTypeInput() {
      return this._retentionLockType
    }

    // storage_class - computed: false, optional: false, required: true
    private _storageClass?: string; 
    public get storageClass() {
      return this.getStringAttribute('storage_class');
    }
    public set storageClass(value: string) {
      this._storageClass = value;
    }
    // Temporarily expose input value. Use with caution.
    public get storageClassInput() {
      return this._storageClass
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
        pool_name: cdktf.stringToTerraform(this._poolName),
        retention_lock_time_in_days: cdktf.numberToTerraform(this._retentionLockTimeInDays),
        retention_lock_type: cdktf.stringToTerraform(this._retentionLockType),
        storage_class: cdktf.stringToTerraform(this._storageClass),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface StoragegatewayUploadBufferConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer.html#disk_id StoragegatewayUploadBuffer#disk_id}
    */
    readonly diskId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer.html#disk_path StoragegatewayUploadBuffer#disk_path}
    */
    readonly diskPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer.html#gateway_arn StoragegatewayUploadBuffer#gateway_arn}
    */
    readonly gatewayArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer.html aws_storagegateway_upload_buffer}
  */
  export class StoragegatewayUploadBuffer extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_storagegateway_upload_buffer";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer.html aws_storagegateway_upload_buffer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayUploadBufferConfig
    */
    public constructor(scope: Construct, id: string, config: StoragegatewayUploadBufferConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_storagegateway_upload_buffer',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._diskId = config.diskId;
      this._diskPath = config.diskPath;
      this._gatewayArn = config.gatewayArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // disk_id - computed: true, optional: true, required: false
    private _diskId?: string | undefined; 
    public get diskId() {
      return this.getStringAttribute('disk_id');
    }
    public set diskId(value: string | undefined) {
      this._diskId = value;
    }
    public resetDiskId() {
      this._diskId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get diskIdInput() {
      return this._diskId
    }

    // disk_path - computed: true, optional: true, required: false
    private _diskPath?: string | undefined; 
    public get diskPath() {
      return this.getStringAttribute('disk_path');
    }
    public set diskPath(value: string | undefined) {
      this._diskPath = value;
    }
    public resetDiskPath() {
      this._diskPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get diskPathInput() {
      return this._diskPath
    }

    // gateway_arn - computed: false, optional: false, required: true
    private _gatewayArn?: string; 
    public get gatewayArn() {
      return this.getStringAttribute('gateway_arn');
    }
    public set gatewayArn(value: string) {
      this._gatewayArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayArnInput() {
      return this._gatewayArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        disk_id: cdktf.stringToTerraform(this._diskId),
        disk_path: cdktf.stringToTerraform(this._diskPath),
        gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
      };
    }
  }
  export interface StoragegatewayWorkingStorageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_working_storage.html#disk_id StoragegatewayWorkingStorage#disk_id}
    */
    readonly diskId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_working_storage.html#gateway_arn StoragegatewayWorkingStorage#gateway_arn}
    */
    readonly gatewayArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_working_storage.html aws_storagegateway_working_storage}
  */
  export class StoragegatewayWorkingStorage extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_storagegateway_working_storage";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_working_storage.html aws_storagegateway_working_storage} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayWorkingStorageConfig
    */
    public constructor(scope: Construct, id: string, config: StoragegatewayWorkingStorageConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_storagegateway_working_storage',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._diskId = config.diskId;
      this._gatewayArn = config.gatewayArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // disk_id - computed: false, optional: false, required: true
    private _diskId?: string; 
    public get diskId() {
      return this.getStringAttribute('disk_id');
    }
    public set diskId(value: string) {
      this._diskId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get diskIdInput() {
      return this._diskId
    }

    // gateway_arn - computed: false, optional: false, required: true
    private _gatewayArn?: string; 
    public get gatewayArn() {
      return this.getStringAttribute('gateway_arn');
    }
    public set gatewayArn(value: string) {
      this._gatewayArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayArnInput() {
      return this._gatewayArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        disk_id: cdktf.stringToTerraform(this._diskId),
        gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
      };
    }
  }
  export interface DataAwsStoragegatewayLocalDiskConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk.html#disk_node DataAwsStoragegatewayLocalDisk#disk_node}
    */
    readonly diskNode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk.html#disk_path DataAwsStoragegatewayLocalDisk#disk_path}
    */
    readonly diskPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk.html#gateway_arn DataAwsStoragegatewayLocalDisk#gateway_arn}
    */
    readonly gatewayArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk.html aws_storagegateway_local_disk}
  */
  export class DataAwsStoragegatewayLocalDisk extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_storagegateway_local_disk";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk.html aws_storagegateway_local_disk} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsStoragegatewayLocalDiskConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsStoragegatewayLocalDiskConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_storagegateway_local_disk',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._diskNode = config.diskNode;
      this._diskPath = config.diskPath;
      this._gatewayArn = config.gatewayArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // disk_id - computed: true, optional: false, required: false
    public get diskId() {
      return this.getStringAttribute('disk_id');
    }

    // disk_node - computed: true, optional: true, required: false
    private _diskNode?: string | undefined; 
    public get diskNode() {
      return this.getStringAttribute('disk_node');
    }
    public set diskNode(value: string | undefined) {
      this._diskNode = value;
    }
    public resetDiskNode() {
      this._diskNode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get diskNodeInput() {
      return this._diskNode
    }

    // disk_path - computed: true, optional: true, required: false
    private _diskPath?: string | undefined; 
    public get diskPath() {
      return this.getStringAttribute('disk_path');
    }
    public set diskPath(value: string | undefined) {
      this._diskPath = value;
    }
    public resetDiskPath() {
      this._diskPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get diskPathInput() {
      return this._diskPath
    }

    // gateway_arn - computed: false, optional: false, required: true
    private _gatewayArn?: string; 
    public get gatewayArn() {
      return this.getStringAttribute('gateway_arn');
    }
    public set gatewayArn(value: string) {
      this._gatewayArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayArnInput() {
      return this._gatewayArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        disk_node: cdktf.stringToTerraform(this._diskNode),
        disk_path: cdktf.stringToTerraform(this._diskPath),
        gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
      };
    }
  }
}
