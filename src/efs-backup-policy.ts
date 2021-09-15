// https://www.terraform.io/docs/providers/aws/r/efs_backup_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  readonly backupPolicy: EfsBackupPolicyBackupPolicy[];
}
export interface EfsBackupPolicyBackupPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_backup_policy.html#status EfsBackupPolicy#status}
  */
  readonly status: string;
}

function efsBackupPolicyBackupPolicyToTerraform(struct?: EfsBackupPolicyBackupPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    status: cdktf.stringToTerraform(struct!.status),
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
  private _fileSystemId: string;
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
  private _backupPolicy: EfsBackupPolicyBackupPolicy[];
  public get backupPolicy() {
    return this.interpolationForAttribute('backup_policy') as any;
  }
  public set backupPolicy(value: EfsBackupPolicyBackupPolicy[]) {
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
      backup_policy: cdktf.listMapper(efsBackupPolicyBackupPolicyToTerraform)(this._backupPolicy),
    };
  }
}
