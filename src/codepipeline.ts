// https://www.terraform.io/docs/providers/aws/r/codepipeline.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CodepipelineConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly roleArn: string;
  readonly tags?: { [key: string]: string };
  /** artifact_store block */
  readonly artifactStore: CodepipelineArtifactStore[];
  /** stage block */
  readonly stage: CodepipelineStage[];
}
export interface CodepipelineArtifactStoreEncryptionKey {
  readonly id: string;
  readonly type: string;
}
export interface CodepipelineArtifactStore {
  readonly location: string;
  readonly region?: string;
  readonly type: string;
  /** encryption_key block */
  readonly encryptionKey?: CodepipelineArtifactStoreEncryptionKey[];
}
export interface CodepipelineStageAction {
  readonly category: string;
  readonly configuration?: { [key: string]: string };
  readonly inputArtifacts?: string[];
  readonly name: string;
  readonly namespace?: string;
  readonly outputArtifacts?: string[];
  readonly owner: string;
  readonly provider: string;
  readonly region?: string;
  readonly roleArn?: string;
  readonly runOrder?: number;
  readonly version: string;
}
export interface CodepipelineStage {
  readonly name: string;
  /** action block */
  readonly action: CodepipelineStageAction[];
}

// Resource

export class Codepipeline extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CodepipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codepipeline',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._artifactStore = config.artifactStore;
    this._stage = config.stage;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // artifact_store - computed: false, optional: false, required: true
  private _artifactStore: CodepipelineArtifactStore[];
  public get artifactStore() {
    return this._artifactStore;
  }
  public set artifactStore(value: CodepipelineArtifactStore[]) {
    this._artifactStore = value;
  }

  // stage - computed: false, optional: false, required: true
  private _stage: CodepipelineStage[];
  public get stage() {
    return this._stage;
  }
  public set stage(value: CodepipelineStage[]) {
    this._stage = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      role_arn: this._roleArn,
      tags: this._tags,
      artifact_store: this._artifactStore,
      stage: this._stage,
    };
  }
}
