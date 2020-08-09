// https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html
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
      "catalog_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "location_uri": {
        "type": "string",
        "optional": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "parameters": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GlueCatalogDatabaseConfig extends TerraformMetaArguments {
  readonly catalogId?: string;
  readonly description?: string;
  readonly locationUri?: string;
  readonly name: string;
  readonly parameters?: { [key: string]: string };
}

// Resource

export class GlueCatalogDatabase extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GlueCatalogDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_catalog_database',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._catalogId = config.catalogId;
    this._description = config.description;
    this._locationUri = config.locationUri;
    this._name = config.name;
    this._parameters = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string;
  public get catalogId() {
    return this._catalogId ?? this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string | undefined) {
    this._catalogId = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location_uri - computed: false, optional: true, required: false
  private _locationUri?: string;
  public get locationUri() {
    return this._locationUri;
  }
  public set locationUri(value: string | undefined) {
    this._locationUri = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this._parameters;
  }
  public set parameters(value: { [key: string]: string } | undefined) {
    this._parameters = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: this._catalogId,
      description: this._description,
      location_uri: this._locationUri,
      name: this._name,
      parameters: this._parameters,
    };
  }
}
