// https://www.terraform.io/docs/providers/aws/r/iam_saml_provider.html
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "saml_metadata_document": {
        "type": "string",
        "required": true
      },
      "valid_until": {
        "type": "string",
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

export interface IamSamlProviderConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly samlMetadataDocument: string;
}

// Resource

export class IamSamlProvider extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IamSamlProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_saml_provider',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._samlMetadataDocument = config.samlMetadataDocument;
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

  // saml_metadata_document - computed: false, optional: false, required: true
  private _samlMetadataDocument: string;
  public get samlMetadataDocument() {
    return this._samlMetadataDocument;
  }
  public set samlMetadataDocument(value: string) {
    this._samlMetadataDocument = value;
  }

  // valid_until - computed: true, optional: false, required: true
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      saml_metadata_document: this._samlMetadataDocument,
    };
  }
}
