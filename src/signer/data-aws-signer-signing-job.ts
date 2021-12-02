// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Signer
*/
export interface DataAwsSignerSigningJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_job.html#job_id DataAwsSignerSigningJob#job_id}
  */
  readonly jobId: string;
}
export class DataAwsSignerSigningJobRevocationRecord extends cdktf.ComplexComputedList {

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // revoked_at - computed: true, optional: false, required: false
  public get revokedAt() {
    return this.getStringAttribute('revoked_at');
  }

  // revoked_by - computed: true, optional: false, required: false
  public get revokedBy() {
    return this.getStringAttribute('revoked_by');
  }
}
export class DataAwsSignerSigningJobSignedObjectS3 extends cdktf.ComplexComputedList {

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export class DataAwsSignerSigningJobSignedObject extends cdktf.ComplexComputedList {

  // s3 - computed: true, optional: false, required: false
  public get s3() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('s3') as any;
  }
}
export class DataAwsSignerSigningJobSourceS3 extends cdktf.ComplexComputedList {

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export class DataAwsSignerSigningJobSource extends cdktf.ComplexComputedList {

  // s3 - computed: true, optional: false, required: false
  public get s3() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('s3') as any;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_job.html aws_signer_signing_job}
*/
export class DataAwsSignerSigningJob extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_signer_signing_job";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_job.html aws_signer_signing_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSignerSigningJobConfig
  */
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

  // completed_at - computed: true, optional: false, required: false
  public get completedAt() {
    return this.getStringAttribute('completed_at');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_id - computed: false, optional: false, required: true
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // job_invoker - computed: true, optional: false, required: false
  public get jobInvoker() {
    return this.getStringAttribute('job_invoker');
  }

  // job_owner - computed: true, optional: false, required: false
  public get jobOwner() {
    return this.getStringAttribute('job_owner');
  }

  // platform_display_name - computed: true, optional: false, required: false
  public get platformDisplayName() {
    return this.getStringAttribute('platform_display_name');
  }

  // platform_id - computed: true, optional: false, required: false
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // profile_version - computed: true, optional: false, required: false
  public get profileVersion() {
    return this.getStringAttribute('profile_version');
  }

  // requested_by - computed: true, optional: false, required: false
  public get requestedBy() {
    return this.getStringAttribute('requested_by');
  }

  // revocation_record - computed: true, optional: false, required: false
  public revocationRecord(index: string) {
    return new DataAwsSignerSigningJobRevocationRecord(this, 'revocation_record', index);
  }

  // signature_expires_at - computed: true, optional: false, required: false
  public get signatureExpiresAt() {
    return this.getStringAttribute('signature_expires_at');
  }

  // signed_object - computed: true, optional: false, required: false
  public signedObject(index: string) {
    return new DataAwsSignerSigningJobSignedObject(this, 'signed_object', index);
  }

  // source - computed: true, optional: false, required: false
  public source(index: string) {
    return new DataAwsSignerSigningJobSource(this, 'source', index);
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      job_id: cdktf.stringToTerraform(this._jobId),
    };
  }
}
