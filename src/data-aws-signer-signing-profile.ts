// https://www.terraform.io/docs/providers/aws/r/data_aws_signer_signing_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsSignerSigningProfileConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsSignerSigningProfileRevocationRecord extends ComplexComputedList {

  // revocation_effective_from - computed: true, optional: false, required: true
  public get revocationEffectiveFrom() {
    return this.getStringAttribute('revocation_effective_from');
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
export class DataAwsSignerSigningProfileSignatureValidityPeriod extends ComplexComputedList {

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getNumberAttribute('value');
  }
}

// Resource

export class DataAwsSignerSigningProfile extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsSignerSigningProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_signer_signing_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // platform_display_name - computed: true, optional: false, required: true
  public get platformDisplayName() {
    return this.getStringAttribute('platform_display_name');
  }

  // platform_id - computed: true, optional: false, required: true
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }

  // revocation_record - computed: true, optional: false, required: true
  public revocationRecord(index: string) {
    return new DataAwsSignerSigningProfileRevocationRecord(this, 'revocation_record', index);
  }

  // signature_validity_period - computed: true, optional: false, required: true
  public signatureValidityPeriod(index: string) {
    return new DataAwsSignerSigningProfileSignatureValidityPeriod(this, 'signature_validity_period', index);
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // version_arn - computed: true, optional: false, required: true
  public get versionArn() {
    return this.getStringAttribute('version_arn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      tags: this._tags,
    };
  }
}
