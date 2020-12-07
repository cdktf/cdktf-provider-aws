// https://www.terraform.io/docs/providers/aws/r/data_aws_acmpca_certificate_authority.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsAcmpcaCertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
  readonly arn: string;
  readonly tags?: { [key: string]: string };
  /** revocation_configuration block */
  readonly revocationConfiguration?: DataAwsAcmpcaCertificateAuthorityRevocationConfiguration[];
}
export interface DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration {
}

function dataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct?: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface DataAwsAcmpcaCertificateAuthorityRevocationConfiguration {
  /** crl_configuration block */
  readonly crlConfiguration?: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration[];
}

function dataAwsAcmpcaCertificateAuthorityRevocationConfigurationToTerraform(struct?: DataAwsAcmpcaCertificateAuthorityRevocationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    crl_configuration: cdktf.listMapper(dataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform)(struct!.crlConfiguration),
  }
}


// Resource

export class DataAwsAcmpcaCertificateAuthority extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsAcmpcaCertificateAuthorityConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_acmpca_certificate_authority',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._arn = config.arn;
    this._tags = config.tags;
    this._revocationConfiguration = config.revocationConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: false, optional: false, required: true
  private _arn: string;
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // certificate_chain - computed: true, optional: false, required: false
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }

  // certificate_signing_request - computed: true, optional: false, required: false
  public get certificateSigningRequest() {
    return this.getStringAttribute('certificate_signing_request');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // revocation_configuration - computed: false, optional: true, required: false
  private _revocationConfiguration?: DataAwsAcmpcaCertificateAuthorityRevocationConfiguration[];
  public get revocationConfiguration() {
    return this.interpolationForAttribute('revocation_configuration') as any;
  }
  public set revocationConfiguration(value: DataAwsAcmpcaCertificateAuthorityRevocationConfiguration[] ) {
    this._revocationConfiguration = value;
  }
  public resetRevocationConfiguration() {
    this._revocationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationConfigurationInput() {
    return this._revocationConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      revocation_configuration: cdktf.listMapper(dataAwsAcmpcaCertificateAuthorityRevocationConfigurationToTerraform)(this._revocationConfiguration),
    };
  }
}
