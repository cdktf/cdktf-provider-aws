// https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SignerSigningJobConfig extends cdktf.TerraformMetaArguments {
  readonly ignoreSigningJobFailure?: boolean;
  readonly profileName: string;
  /** destination block */
  readonly destination: SignerSigningJobDestination[];
  /** source block */
  readonly source: SignerSigningJobSource[];
}
export class SignerSigningJobRevocationRecord extends cdktf.ComplexComputedList {

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
export class SignerSigningJobSignedObjectS3 extends cdktf.ComplexComputedList {

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export class SignerSigningJobSignedObject extends cdktf.ComplexComputedList {

  // s3 - computed: true, optional: false, required: false
  public get s3() {
    return this.interpolationForAttribute('s3') as any;
  }
}
export interface SignerSigningJobDestinationS3 {
  readonly bucket: string;
  readonly prefix?: string;
}

function signerSigningJobDestinationS3ToTerraform(struct?: SignerSigningJobDestinationS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export interface SignerSigningJobDestination {
  /** s3 block */
  readonly s3: SignerSigningJobDestinationS3[];
}

function signerSigningJobDestinationToTerraform(struct?: SignerSigningJobDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3: cdktf.listMapper(signerSigningJobDestinationS3ToTerraform)(struct!.s3),
  }
}

export interface SignerSigningJobSourceS3 {
  readonly bucket: string;
  readonly key: string;
  readonly version: string;
}

function signerSigningJobSourceS3ToTerraform(struct?: SignerSigningJobSourceS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface SignerSigningJobSource {
  /** s3 block */
  readonly s3: SignerSigningJobSourceS3[];
}

function signerSigningJobSourceToTerraform(struct?: SignerSigningJobSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3: cdktf.listMapper(signerSigningJobSourceS3ToTerraform)(struct!.s3),
  }
}


// Resource

export class SignerSigningJob extends cdktf.TerraformResource {

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

  // ignore_signing_job_failure - computed: false, optional: true, required: false
  private _ignoreSigningJobFailure?: boolean;
  public get ignoreSigningJobFailure() {
    return this.getBooleanAttribute('ignore_signing_job_failure');
  }
  public set ignoreSigningJobFailure(value: boolean ) {
    this._ignoreSigningJobFailure = value;
  }
  public resetIgnoreSigningJobFailure() {
    this._ignoreSigningJobFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSigningJobFailureInput() {
    return this._ignoreSigningJobFailure
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
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

  // profile_name - computed: false, optional: false, required: true
  private _profileName: string;
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName
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
    return new SignerSigningJobRevocationRecord(this, 'revocation_record', index);
  }

  // signature_expires_at - computed: true, optional: false, required: false
  public get signatureExpiresAt() {
    return this.getStringAttribute('signature_expires_at');
  }

  // signed_object - computed: true, optional: false, required: false
  public signedObject(index: string) {
    return new SignerSigningJobSignedObject(this, 'signed_object', index);
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // destination - computed: false, optional: false, required: true
  private _destination: SignerSigningJobDestination[];
  public get destination() {
    return this.interpolationForAttribute('destination') as any;
  }
  public set destination(value: SignerSigningJobDestination[]) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination
  }

  // source - computed: false, optional: false, required: true
  private _source: SignerSigningJobSource[];
  public get source() {
    return this.interpolationForAttribute('source') as any;
  }
  public set source(value: SignerSigningJobSource[]) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ignore_signing_job_failure: cdktf.booleanToTerraform(this._ignoreSigningJobFailure),
      profile_name: cdktf.stringToTerraform(this._profileName),
      destination: cdktf.listMapper(signerSigningJobDestinationToTerraform)(this._destination),
      source: cdktf.listMapper(signerSigningJobSourceToTerraform)(this._source),
    };
  }
}
