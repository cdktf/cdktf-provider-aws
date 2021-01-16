// https://www.terraform.io/docs/providers/aws/r/dms_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmsCertificateConfig extends cdktf.TerraformMetaArguments {
  readonly certificateId: string;
  readonly certificatePem?: string;
  readonly certificateWallet?: string;
}

// Resource

export class DmsCertificate extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DmsCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dms_certificate',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateId = config.certificateId;
    this._certificatePem = config.certificatePem;
    this._certificateWallet = config.certificateWallet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // certificate_id - computed: false, optional: false, required: true
  private _certificateId: string;
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId
  }

  // certificate_pem - computed: false, optional: true, required: false
  private _certificatePem?: string;
  public get certificatePem() {
    return this.getStringAttribute('certificate_pem');
  }
  public set certificatePem(value: string ) {
    this._certificatePem = value;
  }
  public resetCertificatePem() {
    this._certificatePem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePemInput() {
    return this._certificatePem
  }

  // certificate_wallet - computed: false, optional: true, required: false
  private _certificateWallet?: string;
  public get certificateWallet() {
    return this.getStringAttribute('certificate_wallet');
  }
  public set certificateWallet(value: string ) {
    this._certificateWallet = value;
  }
  public resetCertificateWallet() {
    this._certificateWallet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateWalletInput() {
    return this._certificateWallet
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
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      certificate_pem: cdktf.stringToTerraform(this._certificatePem),
      certificate_wallet: cdktf.stringToTerraform(this._certificateWallet),
    };
  }
}
