// https://www.terraform.io/docs/providers/aws/r/ssm_document.html
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
      "content": {
        "type": "string",
        "required": true
      },
      "created_date": {
        "type": "string",
        "computed": true
      },
      "default_version": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "document_format": {
        "type": "string",
        "optional": true
      },
      "document_type": {
        "type": "string",
        "required": true
      },
      "document_version": {
        "type": "string",
        "computed": true
      },
      "hash": {
        "type": "string",
        "computed": true
      },
      "hash_type": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "latest_version": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "owner": {
        "type": "string",
        "computed": true
      },
      "parameter": {
        "type": [
          "list",
          [
            "object",
            {
              "default_value": "string",
              "description": "string",
              "name": "string",
              "type": "string"
            }
          ]
        ],
        "computed": true
      },
      "permissions": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "platform_types": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "schema_version": {
        "type": "string",
        "computed": true
      },
      "status": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "target_type": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "attachments_source": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "key": {
              "type": "string",
              "required": true
            },
            "name": {
              "type": "string",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface SsmDocumentConfig extends TerraformMetaArguments {
  readonly content: string;
  readonly documentFormat?: string;
  readonly documentType: string;
  readonly name: string;
  readonly permissions?: { [key: string]: string };
  readonly tags?: { [key: string]: string };
  readonly targetType?: string;
  /** attachments_source block */
  readonly attachmentsSource?: SsmDocumentAttachmentsSource[];
}
export class SsmDocumentParameter extends ComplexComputedList {

  // default_value - computed: true, optional: false, required: true
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface SsmDocumentAttachmentsSource {
  readonly key: string;
  readonly name?: string;
  readonly values: string[];
}

// Resource

export class SsmDocument extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SsmDocumentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_document',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._content = config.content;
    this._documentFormat = config.documentFormat;
    this._documentType = config.documentType;
    this._name = config.name;
    this._permissions = config.permissions;
    this._tags = config.tags;
    this._targetType = config.targetType;
    this._attachmentsSource = config.attachmentsSource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // content - computed: false, optional: false, required: true
  private _content: string;
  public get content() {
    return this._content;
  }
  public set content(value: string) {
    this._content = value;
  }

  // created_date - computed: true, optional: false, required: true
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // default_version - computed: true, optional: false, required: true
  public get defaultVersion() {
    return this.getStringAttribute('default_version');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // document_format - computed: false, optional: true, required: false
  private _documentFormat?: string;
  public get documentFormat() {
    return this._documentFormat;
  }
  public set documentFormat(value: string | undefined) {
    this._documentFormat = value;
  }

  // document_type - computed: false, optional: false, required: true
  private _documentType: string;
  public get documentType() {
    return this._documentType;
  }
  public set documentType(value: string) {
    this._documentType = value;
  }

  // document_version - computed: true, optional: false, required: true
  public get documentVersion() {
    return this.getStringAttribute('document_version');
  }

  // hash - computed: true, optional: false, required: true
  public get hash() {
    return this.getStringAttribute('hash');
  }

  // hash_type - computed: true, optional: false, required: true
  public get hashType() {
    return this.getStringAttribute('hash_type');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // latest_version - computed: true, optional: false, required: true
  public get latestVersion() {
    return this.getStringAttribute('latest_version');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // owner - computed: true, optional: false, required: true
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // parameter - computed: true, optional: false, required: true
  public parameter(index: string) {
    return new SsmDocumentParameter(this, 'parameter', index);
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: { [key: string]: string };
  public get permissions() {
    return this._permissions;
  }
  public set permissions(value: { [key: string]: string } | undefined) {
    this._permissions = value;
  }

  // platform_types - computed: true, optional: false, required: true
  public get platformTypes() {
    return this.getListAttribute('platform_types');
  }

  // schema_version - computed: true, optional: false, required: true
  public get schemaVersion() {
    return this.getStringAttribute('schema_version');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string;
  public get targetType() {
    return this._targetType;
  }
  public set targetType(value: string | undefined) {
    this._targetType = value;
  }

  // attachments_source - computed: false, optional: true, required: false
  private _attachmentsSource?: SsmDocumentAttachmentsSource[];
  public get attachmentsSource() {
    return this._attachmentsSource;
  }
  public set attachmentsSource(value: SsmDocumentAttachmentsSource[] | undefined) {
    this._attachmentsSource = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      content: this._content,
      document_format: this._documentFormat,
      document_type: this._documentType,
      name: this._name,
      permissions: this._permissions,
      tags: this._tags,
      target_type: this._targetType,
      attachments_source: this._attachmentsSource,
    };
  }
}
