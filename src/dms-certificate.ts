// https://www.terraform.io/docs/providers/aws/r/dms_certificate.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "certificate_arn": {
        "type": "string",
        "computed": true
      },
      "certificate_id": {
        "type": "string",
        "required": true
      },
      "certificate_pem": {
        "type": "string",
        "optional": true,
        "sensitive": true
      },
      "certificate_wallet": {
        "type": "string",
        "optional": true,
        "sensitive": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DmsCertificateConfig extends TerraformMetaArguments {
  readonly certificateId: string;
  readonly certificatePem?: string;
  readonly certificateWallet?: string;
}

// Resource

export class DmsCertificate extends TerraformResource {

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

  // certificate_arn - computed: true, optional: false, required: true
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // certificate_id - computed: false, optional: false, required: true
  private _certificateId: string;
  public get certificateId() {
    return this._certificateId;
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }

  // certificate_pem - computed: false, optional: true, required: false
  private _certificatePem?: string;
  public get certificatePem() {
    return this._certificatePem;
  }
  public set certificatePem(value: string | undefined) {
    this._certificatePem = value;
  }

  // certificate_wallet - computed: false, optional: true, required: false
  private _certificateWallet?: string;
  public get certificateWallet() {
    return this._certificateWallet;
  }
  public set certificateWallet(value: string | undefined) {
    this._certificateWallet = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: this._certificateId,
      certificate_pem: this._certificatePem,
      certificate_wallet: this._certificateWallet,
    };
  }
}
