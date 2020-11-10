// https://www.terraform.io/docs/providers/aws/r/iot_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IotCertificateConfig extends TerraformMetaArguments {
  readonly active: boolean;
  readonly csr?: string;
}

// Resource

export class IotCertificate extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IotCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_certificate',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._active = config.active;
    this._csr = config.csr;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: false, required: true
  private _active: boolean;
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_pem - computed: true, optional: false, required: false
  public get certificatePem() {
    return this.getStringAttribute('certificate_pem');
  }

  // csr - computed: false, optional: true, required: false
  private _csr?: string;
  public get csr() {
    return this.getStringAttribute('csr');
  }
  public set csr(value: string ) {
    this._csr = value;
  }
  public resetCsr() {
    this._csr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrInput() {
    return this._csr
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: this._active,
      csr: this._csr,
    };
  }
}
