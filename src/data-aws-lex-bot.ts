// https://www.terraform.io/docs/providers/aws/r/data_aws_lex_bot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsLexBotConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly version?: string;
}

// Resource

export class DataAwsLexBot extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsLexBotConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lex_bot',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // checksum - computed: true, optional: false, required: true
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // child_directed - computed: true, optional: false, required: true
  public get childDirected() {
    return this.getBooleanAttribute('child_directed');
  }

  // created_date - computed: true, optional: false, required: true
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // detect_sentiment - computed: true, optional: false, required: true
  public get detectSentiment() {
    return this.getBooleanAttribute('detect_sentiment');
  }

  // enable_model_improvements - computed: true, optional: false, required: true
  public get enableModelImprovements() {
    return this.getBooleanAttribute('enable_model_improvements');
  }

  // failure_reason - computed: true, optional: false, required: true
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // idle_session_ttl_in_seconds - computed: true, optional: false, required: true
  public get idleSessionTtlInSeconds() {
    return this.getNumberAttribute('idle_session_ttl_in_seconds');
  }

  // last_updated_date - computed: true, optional: false, required: true
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // locale - computed: true, optional: false, required: true
  public get locale() {
    return this.getStringAttribute('locale');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // nlu_intent_confidence_threshold - computed: true, optional: false, required: true
  public get nluIntentConfidenceThreshold() {
    return this.getNumberAttribute('nlu_intent_confidence_threshold');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: false, optional: true, required: false
  private _version?: string;
  public get version() {
    return this._version;
  }
  public set version(value: string | undefined) {
    this._version = value;
  }

  // voice_id - computed: true, optional: false, required: true
  public get voiceId() {
    return this.getStringAttribute('voice_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      version: this._version,
    };
  }
}
