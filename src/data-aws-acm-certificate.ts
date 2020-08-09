// https://www.terraform.io/docs/providers/aws/r/data_aws_acm_certificate.html
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
      "domain": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "key_types": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "most_recent": {
        "type": "bool",
        "optional": true
      },
      "statuses": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "types": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsAcmCertificateConfig extends TerraformMetaArguments {
  readonly domain: string;
  readonly keyTypes?: string[];
  readonly mostRecent?: boolean;
  readonly statuses?: string[];
  readonly tags?: { [key: string]: string };
  readonly types?: string[];
}

// Resource

export class DataAwsAcmCertificate extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsAcmCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_acm_certificate',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domain = config.domain;
    this._keyTypes = config.keyTypes;
    this._mostRecent = config.mostRecent;
    this._statuses = config.statuses;
    this._tags = config.tags;
    this._types = config.types;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain - computed: false, optional: false, required: true
  private _domain: string;
  public get domain() {
    return this._domain;
  }
  public set domain(value: string) {
    this._domain = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key_types - computed: false, optional: true, required: false
  private _keyTypes?: string[];
  public get keyTypes() {
    return this._keyTypes;
  }
  public set keyTypes(value: string[] | undefined) {
    this._keyTypes = value;
  }

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean;
  public get mostRecent() {
    return this._mostRecent;
  }
  public set mostRecent(value: boolean | undefined) {
    this._mostRecent = value;
  }

  // statuses - computed: false, optional: true, required: false
  private _statuses?: string[];
  public get statuses() {
    return this._statuses;
  }
  public set statuses(value: string[] | undefined) {
    this._statuses = value;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[];
  public get types() {
    return this._types;
  }
  public set types(value: string[] | undefined) {
    this._types = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: this._domain,
      key_types: this._keyTypes,
      most_recent: this._mostRecent,
      statuses: this._statuses,
      tags: this._tags,
      types: this._types,
    };
  }
}
