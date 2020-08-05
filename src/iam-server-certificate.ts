// https://www.terraform.io/docs/providers/aws/r/iam_server_certificate.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "certificate_body": {
        "type": "string",
        "required": true
      },
      "certificate_chain": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name_prefix": {
        "type": "string",
        "optional": true
      },
      "path": {
        "type": "string",
        "optional": true
      },
      "private_key": {
        "type": "string",
        "required": true,
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

export interface IamServerCertificateConfig extends TerraformMetaArguments {
  readonly certificateBody: string;
  readonly certificateChain?: string;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly path?: string;
  readonly privateKey: string;
}

// Resource

export class IamServerCertificate extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IamServerCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_server_certificate',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateBody = config.certificateBody;
    this._certificateChain = config.certificateChain;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._path = config.path;
    this._privateKey = config.privateKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: true, required: false
  private _arn?: string;
  public get arn() {
    return this._arn ?? this.getStringAttribute('arn');
  }
  public set arn(value: string | undefined) {
    this._arn = value;
  }

  // certificate_body - computed: false, optional: false, required: true
  private _certificateBody: string;
  public get certificateBody() {
    return this._certificateBody;
  }
  public set certificateBody(value: string) {
    this._certificateBody = value;
  }

  // certificate_chain - computed: false, optional: true, required: false
  private _certificateChain?: string;
  public get certificateChain() {
    return this._certificateChain;
  }
  public set certificateChain(value: string | undefined) {
    this._certificateChain = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this._namePrefix;
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string;
  public get path() {
    return this._path;
  }
  public set path(value: string | undefined) {
    this._path = value;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey: string;
  public get privateKey() {
    return this._privateKey;
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_body: this._certificateBody,
      certificate_chain: this._certificateChain,
      name: this._name,
      name_prefix: this._namePrefix,
      path: this._path,
      private_key: this._privateKey,
    };
  }
}
