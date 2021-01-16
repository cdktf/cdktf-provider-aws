// https://www.terraform.io/docs/providers/aws/r/data_aws_signer_signing_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsSignerSigningJobConfig extends TerraformMetaArguments {
  readonly jobId: string;
}
export class DataAwsSignerSigningJobRevocationRecord extends ComplexComputedList {

  // reason - computed: true, optional: false, required: true
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // revoked_at - computed: true, optional: false, required: true
  public get revokedAt() {
    return this.getStringAttribute('revoked_at');
  }

  // revoked_by - computed: true, optional: false, required: true
  public get revokedBy() {
    return this.getStringAttribute('revoked_by');
  }
}
export class DataAwsSignerSigningJobSignedObjectS3 extends ComplexComputedList {

  // bucket - computed: true, optional: false, required: true
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }
}
export class DataAwsSignerSigningJobSignedObject extends ComplexComputedList {

  // s3 - computed: true, optional: false, required: true
  public get s3() {
    return 'not implemented' as any;
  }
}
export class DataAwsSignerSigningJobSourceS3 extends ComplexComputedList {

  // bucket - computed: true, optional: false, required: true
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }
}
export class DataAwsSignerSigningJobSource extends ComplexComputedList {

  // s3 - computed: true, optional: false, required: true
  public get s3() {
    return 'not implemented' as any;
  }
}

// Resource

export class DataAwsSignerSigningJob extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsSignerSigningJobConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_signer_signing_job',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._jobId = config.jobId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // completed_at - computed: true, optional: false, required: true
  public get completedAt() {
    return this.getStringAttribute('completed_at');
  }

  // created_at - computed: true, optional: false, required: true
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // job_id - computed: false, optional: false, required: true
  private _jobId: string;
  public get jobId() {
    return this._jobId;
  }
  public set jobId(value: string) {
    this._jobId = value;
  }

  // job_invoker - computed: true, optional: false, required: true
  public get jobInvoker() {
    return this.getStringAttribute('job_invoker');
  }

  // job_owner - computed: true, optional: false, required: true
  public get jobOwner() {
    return this.getStringAttribute('job_owner');
  }

  // platform_display_name - computed: true, optional: false, required: true
  public get platformDisplayName() {
    return this.getStringAttribute('platform_display_name');
  }

  // platform_id - computed: true, optional: false, required: true
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }

  // profile_name - computed: true, optional: false, required: true
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // profile_version - computed: true, optional: false, required: true
  public get profileVersion() {
    return this.getStringAttribute('profile_version');
  }

  // requested_by - computed: true, optional: false, required: true
  public get requestedBy() {
    return this.getStringAttribute('requested_by');
  }

  // revocation_record - computed: true, optional: false, required: true
  public revocationRecord(index: string) {
    return new DataAwsSignerSigningJobRevocationRecord(this, 'revocation_record', index);
  }

  // signature_expires_at - computed: true, optional: false, required: true
  public get signatureExpiresAt() {
    return this.getStringAttribute('signature_expires_at');
  }

  // signed_object - computed: true, optional: false, required: true
  public signedObject(index: string) {
    return new DataAwsSignerSigningJobSignedObject(this, 'signed_object', index);
  }

  // source - computed: true, optional: false, required: true
  public source(index: string) {
    return new DataAwsSignerSigningJobSource(this, 'source', index);
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: true
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      job_id: this._jobId,
    };
  }
}
