// https://www.terraform.io/docs/providers/aws/r/efs_file_system.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EfsFileSystemConfig extends cdktf.TerraformMetaArguments {
  readonly creationToken?: string;
  readonly encrypted?: boolean;
  readonly kmsKeyId?: string;
  readonly performanceMode?: string;
  readonly provisionedThroughputInMibps?: number;
  readonly referenceName?: string;
  readonly tags?: { [key: string]: string };
  readonly throughputMode?: string;
  /** lifecycle_policy block */
  readonly lifecyclePolicy?: EfsFileSystemLifecyclePolicy[];
}
export interface EfsFileSystemLifecyclePolicy {
  readonly transitionToIa: string;
}

function efsFileSystemLifecyclePolicyToTerraform(struct?: EfsFileSystemLifecyclePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    transition_to_ia: cdktf.stringToTerraform(struct!.transitionToIa),
  }
}


// Resource

export class EfsFileSystem extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._creationToken = config.creationToken;
    this._encrypted = config.encrypted;
    this._kmsKeyId = config.kmsKeyId;
    this._performanceMode = config.performanceMode;
    this._provisionedThroughputInMibps = config.provisionedThroughputInMibps;
    this._referenceName = config.referenceName;
    this._tags = config.tags;
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

  // creation_token - computed: true, optional: true, required: false
  private _creationToken?: string;
  public get creationToken() {
    return this.getStringAttribute('creation_token');
  }
  public set creationToken(value: string) {
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
  private _encrypted?: boolean;
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean) {
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
    return this._kmsKeyId
  }

  // performance_mode - computed: true, optional: true, required: false
  private _performanceMode?: string;
  public get performanceMode() {
    return this.getStringAttribute('performance_mode');
  }
  public set performanceMode(value: string) {
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
  private _provisionedThroughputInMibps?: number;
  public get provisionedThroughputInMibps() {
    return this.getNumberAttribute('provisioned_throughput_in_mibps');
  }
  public set provisionedThroughputInMibps(value: number ) {
    this._provisionedThroughputInMibps = value;
  }
  public resetProvisionedThroughputInMibps() {
    this._provisionedThroughputInMibps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputInMibpsInput() {
    return this._provisionedThroughputInMibps
  }

  // reference_name - computed: true, optional: true, required: false
  private _referenceName?: string;
  public get referenceName() {
    return this.getStringAttribute('reference_name');
  }
  public set referenceName(value: string) {
    this._referenceName = value;
  }
  public resetReferenceName() {
    this._referenceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceNameInput() {
    return this._referenceName
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

  // throughput_mode - computed: false, optional: true, required: false
  private _throughputMode?: string;
  public get throughputMode() {
    return this.getStringAttribute('throughput_mode');
  }
  public set throughputMode(value: string ) {
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
  private _lifecyclePolicy?: EfsFileSystemLifecyclePolicy[];
  public get lifecyclePolicy() {
    return this.interpolationForAttribute('lifecycle_policy') as any;
  }
  public set lifecyclePolicy(value: EfsFileSystemLifecyclePolicy[] ) {
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
      creation_token: cdktf.stringToTerraform(this._creationToken),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      performance_mode: cdktf.stringToTerraform(this._performanceMode),
      provisioned_throughput_in_mibps: cdktf.numberToTerraform(this._provisionedThroughputInMibps),
      reference_name: cdktf.stringToTerraform(this._referenceName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      throughput_mode: cdktf.stringToTerraform(this._throughputMode),
      lifecycle_policy: cdktf.listMapper(efsFileSystemLifecyclePolicyToTerraform)(this._lifecyclePolicy),
    };
  }
}
