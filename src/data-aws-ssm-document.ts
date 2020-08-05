// https://www.terraform.io/docs/providers/aws/r/data_aws_ssm_document.html
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
        "computed": true
      },
      "document_format": {
        "type": "string",
        "optional": true
      },
      "document_type": {
        "type": "string",
        "computed": true
      },
      "document_version": {
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
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsSsmDocumentConfig extends TerraformMetaArguments {
  readonly documentFormat?: string;
  readonly documentVersion?: string;
  readonly name: string;
}

// Resource

export class DataAwsSsmDocument extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsSsmDocumentConfig) {
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
    this._documentFormat = config.documentFormat;
    this._documentVersion = config.documentVersion;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // content - computed: true, optional: false, required: true
  public get content() {
    return this.getStringAttribute('content');
  }

  // document_format - computed: false, optional: true, required: false
  private _documentFormat?: string;
  public get documentFormat() {
    return this._documentFormat;
  }
  public set documentFormat(value: string | undefined) {
    this._documentFormat = value;
  }

  // document_type - computed: true, optional: false, required: true
  public get documentType() {
    return this.getStringAttribute('document_type');
  }

  // document_version - computed: false, optional: true, required: false
  private _documentVersion?: string;
  public get documentVersion() {
    return this._documentVersion;
  }
  public set documentVersion(value: string | undefined) {
    this._documentVersion = value;
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      document_format: this._documentFormat,
      document_version: this._documentVersion,
      name: this._name,
    };
  }
}
