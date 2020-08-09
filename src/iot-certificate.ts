// https://www.terraform.io/docs/providers/aws/r/iot_certificate.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "active": {
        "type": "bool",
        "required": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "certificate_pem": {
        "type": "string",
        "computed": true,
        "sensitive": true
      },
      "csr": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "private_key": {
        "type": "string",
        "computed": true,
        "sensitive": true
      },
      "public_key": {
        "type": "string",
        "computed": true,
        "sensitive": true
      }
    }
  }
}
*/
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
    return this._active;
  }
  public set active(value: boolean) {
    this._active = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_pem - computed: true, optional: false, required: true
  public get certificatePem() {
    return this.getStringAttribute('certificate_pem');
  }

  // csr - computed: false, optional: true, required: false
  private _csr?: string;
  public get csr() {
    return this._csr;
  }
  public set csr(value: string | undefined) {
    this._csr = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // private_key - computed: true, optional: false, required: true
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // public_key - computed: true, optional: false, required: true
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      active: this._active,
      csr: this._csr,
    };
  }
}
