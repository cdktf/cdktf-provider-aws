// https://www.terraform.io/docs/providers/aws/r/accessanalyzer_analyzer.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "analyzer_name": {
        "type": "string",
        "required": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "type": {
        "type": "string",
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

export interface AccessanalyzerAnalyzerConfig extends TerraformMetaArguments {
  readonly analyzerName: string;
  readonly tags?: { [key: string]: string };
  readonly type?: string;
}

// Resource

export class AccessanalyzerAnalyzer extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AccessanalyzerAnalyzerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_accessanalyzer_analyzer',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._analyzerName = config.analyzerName;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analyzer_name - computed: false, optional: false, required: true
  private _analyzerName: string;
  public get analyzerName() {
    return this._analyzerName;
  }
  public set analyzerName(value: string) {
    this._analyzerName = value;
  }

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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this._type;
  }
  public set type(value: string | undefined) {
    this._type = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      analyzer_name: this._analyzerName,
      tags: this._tags,
      type: this._type,
    };
  }
}
