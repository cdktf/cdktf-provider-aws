// https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface SignerSigningJobConfig extends TerraformMetaArguments {
  readonly ignoreSigningJobFailure?: boolean;
  readonly profileName: string;
  /** destination block */
  readonly destination: SignerSigningJobDestination[];
  /** source block */
  readonly source: SignerSigningJobSource[];
}
export class SignerSigningJobRevocationRecord extends ComplexComputedList {

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
export class SignerSigningJobSignedObjectS3 extends ComplexComputedList {

  // bucket - computed: true, optional: false, required: true
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }
}
export class SignerSigningJobSignedObject extends ComplexComputedList {

  // s3 - computed: true, optional: false, required: true
  public get s3() {
    return 'not implemented' as any;
  }
}
export interface SignerSigningJobDestinationS3 {
  readonly bucket: string;
  readonly prefix?: string;
}
export interface SignerSigningJobDestination {
  /** s3 block */
  readonly s3: SignerSigningJobDestinationS3[];
}
export interface SignerSigningJobSourceS3 {
  readonly bucket: string;
  readonly key: string;
  readonly version: string;
}
export interface SignerSigningJobSource {
  /** s3 block */
  readonly s3: SignerSigningJobSourceS3[];
}

// Resource

export class SignerSigningJob extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SignerSigningJobConfig) {
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
    this._ignoreSigningJobFailure = config.ignoreSigningJobFailure;
    this._profileName = config.profileName;
    this._destination = config.destination;
    this._source = config.source;
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

  // ignore_signing_job_failure - computed: false, optional: true, required: false
  private _ignoreSigningJobFailure?: boolean;
  public get ignoreSigningJobFailure() {
    return this._ignoreSigningJobFailure;
  }
  public set ignoreSigningJobFailure(value: boolean | undefined) {
    this._ignoreSigningJobFailure = value;
  }

  // job_id - computed: true, optional: false, required: true
  public get jobId() {
    return this.getStringAttribute('job_id');
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

  // profile_name - computed: false, optional: false, required: true
  private _profileName: string;
  public get profileName() {
    return this._profileName;
  }
  public set profileName(value: string) {
    this._profileName = value;
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
    return new SignerSigningJobRevocationRecord(this, 'revocation_record', index);
  }

  // signature_expires_at - computed: true, optional: false, required: true
  public get signatureExpiresAt() {
    return this.getStringAttribute('signature_expires_at');
  }

  // signed_object - computed: true, optional: false, required: true
  public signedObject(index: string) {
    return new SignerSigningJobSignedObject(this, 'signed_object', index);
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: true
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // destination - computed: false, optional: false, required: true
  private _destination: SignerSigningJobDestination[];
  public get destination() {
    return this._destination;
  }
  public set destination(value: SignerSigningJobDestination[]) {
    this._destination = value;
  }

  // source - computed: false, optional: false, required: true
  private _source: SignerSigningJobSource[];
  public get source() {
    return this._source;
  }
  public set source(value: SignerSigningJobSource[]) {
    this._source = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ignore_signing_job_failure: this._ignoreSigningJobFailure,
      profile_name: this._profileName,
      destination: this._destination,
      source: this._source,
    };
  }
}
