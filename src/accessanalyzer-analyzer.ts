// https://www.terraform.io/docs/providers/aws/r/accessanalyzer_analyzer.html
// generated from terraform resource schema

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
    return this.getStringAttribute('analyzer_name');
  }
  public set analyzerName(value: string) {
    this._analyzerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerNameInput() {
    return this._analyzerName
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string ) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analyzer_name: this._analyzerName,
      tags: this._tags,
      type: this._type,
    };
  }
}
