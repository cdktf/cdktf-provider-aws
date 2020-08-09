// https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "additional_artifacts": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "additional_schema_elements": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "compression": {
        "type": "string",
        "required": true
      },
      "format": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "report_name": {
        "type": "string",
        "required": true
      },
      "s3_bucket": {
        "type": "string",
        "required": true
      },
      "s3_prefix": {
        "type": "string",
        "optional": true
      },
      "s3_region": {
        "type": "string",
        "required": true
      },
      "time_unit": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CurReportDefinitionConfig extends TerraformMetaArguments {
  readonly additionalArtifacts?: string[];
  readonly additionalSchemaElements: string[];
  readonly compression: string;
  readonly format: string;
  readonly reportName: string;
  readonly s3Bucket: string;
  readonly s3Prefix?: string;
  readonly s3Region: string;
  readonly timeUnit: string;
}

// Resource

export class CurReportDefinition extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CurReportDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cur_report_definition',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._additionalArtifacts = config.additionalArtifacts;
    this._additionalSchemaElements = config.additionalSchemaElements;
    this._compression = config.compression;
    this._format = config.format;
    this._reportName = config.reportName;
    this._s3Bucket = config.s3Bucket;
    this._s3Prefix = config.s3Prefix;
    this._s3Region = config.s3Region;
    this._timeUnit = config.timeUnit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_artifacts - computed: false, optional: true, required: false
  private _additionalArtifacts?: string[];
  public get additionalArtifacts() {
    return this._additionalArtifacts;
  }
  public set additionalArtifacts(value: string[] | undefined) {
    this._additionalArtifacts = value;
  }

  // additional_schema_elements - computed: false, optional: false, required: true
  private _additionalSchemaElements: string[];
  public get additionalSchemaElements() {
    return this._additionalSchemaElements;
  }
  public set additionalSchemaElements(value: string[]) {
    this._additionalSchemaElements = value;
  }

  // compression - computed: false, optional: false, required: true
  private _compression: string;
  public get compression() {
    return this._compression;
  }
  public set compression(value: string) {
    this._compression = value;
  }

  // format - computed: false, optional: false, required: true
  private _format: string;
  public get format() {
    return this._format;
  }
  public set format(value: string) {
    this._format = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // report_name - computed: false, optional: false, required: true
  private _reportName: string;
  public get reportName() {
    return this._reportName;
  }
  public set reportName(value: string) {
    this._reportName = value;
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket: string;
  public get s3Bucket() {
    return this._s3Bucket;
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }

  // s3_prefix - computed: false, optional: true, required: false
  private _s3Prefix?: string;
  public get s3Prefix() {
    return this._s3Prefix;
  }
  public set s3Prefix(value: string | undefined) {
    this._s3Prefix = value;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region: string;
  public get s3Region() {
    return this._s3Region;
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }

  // time_unit - computed: false, optional: false, required: true
  private _timeUnit: string;
  public get timeUnit() {
    return this._timeUnit;
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_artifacts: this._additionalArtifacts,
      additional_schema_elements: this._additionalSchemaElements,
      compression: this._compression,
      format: this._format,
      report_name: this._reportName,
      s3_bucket: this._s3Bucket,
      s3_prefix: this._s3Prefix,
      s3_region: this._s3Region,
      time_unit: this._timeUnit,
    };
  }
}
