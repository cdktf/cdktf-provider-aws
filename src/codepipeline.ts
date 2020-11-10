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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
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

  // artifact_store - computed: false, optional: false, required: true
  private _artifactStore: CodepipelineArtifactStore[];
  public get artifactStore() {
    return this.interpolationForAttribute('artifact_store') as any;
  }
  public set artifactStore(value: CodepipelineArtifactStore[]) {
    this._artifactStore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactStoreInput() {
    return this._artifactStore
  }

  // stage - computed: false, optional: false, required: true
  private _stage: CodepipelineStage[];
  public get stage() {
    return this.interpolationForAttribute('stage') as any;
  }
  public set stage(value: CodepipelineStage[]) {
    this._stage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage
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
