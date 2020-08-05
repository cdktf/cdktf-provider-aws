// https://www.terraform.io/docs/providers/aws/r/data_aws_iam_server_certificate.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "certificate_body": {
        "type": "string",
        "computed": true
      },
      "certificate_chain": {
        "type": "string",
        "computed": true
      },
      "expiration_date": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "latest": {
        "type": "bool",
        "optional": true
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
        "computed": true
      },
      "path_prefix": {
        "type": "string",
        "optional": true
      },
      "upload_date": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsIamServerCertificateConfig extends TerraformMetaArguments {
  readonly latest?: boolean;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly pathPrefix?: string;
}

// Resource

export class DataAwsIamServerCertificate extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsIamServerCertificateConfig = {}) {
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
    this._latest = config.latest;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._pathPrefix = config.pathPrefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_body - computed: true, optional: false, required: true
  public get certificateBody() {
    return this.getStringAttribute('certificate_body');
  }

  // certificate_chain - computed: true, optional: false, required: true
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }

  // expiration_date - computed: true, optional: false, required: true
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // latest - computed: false, optional: true, required: false
  private _latest?: boolean;
  public get latest() {
    return this._latest;
  }
  public set latest(value: boolean | undefined) {
    this._latest = value;
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

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // path_prefix - computed: false, optional: true, required: false
  private _pathPrefix?: string;
  public get pathPrefix() {
    return this._pathPrefix;
  }
  public set pathPrefix(value: string | undefined) {
    this._pathPrefix = value;
  }

  // upload_date - computed: true, optional: false, required: true
  public get uploadDate() {
    return this.getStringAttribute('upload_date');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      latest: this._latest,
      name: this._name,
      name_prefix: this._namePrefix,
      path_prefix: this._pathPrefix,
    };
  }
}
