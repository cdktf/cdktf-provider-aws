// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Relational Database Service
*/
export interface DbInstanceAutomatedBackupsReplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#kms_key_id DbInstanceAutomatedBackupsReplication#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#pre_signed_url DbInstanceAutomatedBackupsReplication#pre_signed_url}
  */
  readonly preSignedUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#retention_period DbInstanceAutomatedBackupsReplication#retention_period}
  */
  readonly retentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#source_db_instance_arn DbInstanceAutomatedBackupsReplication#source_db_instance_arn}
  */
  readonly sourceDbInstanceArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication aws_db_instance_automated_backups_replication}
*/
export class DbInstanceAutomatedBackupsReplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_db_instance_automated_backups_replication";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication aws_db_instance_automated_backups_replication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbInstanceAutomatedBackupsReplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DbInstanceAutomatedBackupsReplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_db_instance_automated_backups_replication',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.10.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._kmsKeyId = config.kmsKeyId;
    this._preSignedUrl = config.preSignedUrl;
    this._retentionPeriod = config.retentionPeriod;
    this._sourceDbInstanceArn = config.sourceDbInstanceArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
    return this._kmsKeyId;
  }

  // pre_signed_url - computed: false, optional: true, required: false
  private _preSignedUrl?: string; 
  public get preSignedUrl() {
    return this.getStringAttribute('pre_signed_url');
  }
  public set preSignedUrl(value: string) {
    this._preSignedUrl = value;
  }
  public resetPreSignedUrl() {
    this._preSignedUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSignedUrlInput() {
    return this._preSignedUrl;
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: number; 
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }
  public set retentionPeriod(value: number) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }

  // source_db_instance_arn - computed: false, optional: false, required: true
  private _sourceDbInstanceArn?: string; 
  public get sourceDbInstanceArn() {
    return this.getStringAttribute('source_db_instance_arn');
  }
  public set sourceDbInstanceArn(value: string) {
    this._sourceDbInstanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDbInstanceArnInput() {
    return this._sourceDbInstanceArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      pre_signed_url: cdktf.stringToTerraform(this._preSignedUrl),
      retention_period: cdktf.numberToTerraform(this._retentionPeriod),
      source_db_instance_arn: cdktf.stringToTerraform(this._sourceDbInstanceArn),
    };
  }
}
