// https://www.terraform.io/docs/providers/aws/r/codepipeline.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodepipelineConfig extends cdktf.TerraformMetaArguments {
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

function codepipelineArtifactStoreEncryptionKeyToTerraform(struct?: CodepipelineArtifactStoreEncryptionKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface CodepipelineArtifactStore {
  readonly location: string;
  readonly region?: string;
  readonly type: string;
  /** encryption_key block */
  readonly encryptionKey?: CodepipelineArtifactStoreEncryptionKey[];
}

function codepipelineArtifactStoreToTerraform(struct?: CodepipelineArtifactStore): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    region: cdktf.stringToTerraform(struct!.region),
    type: cdktf.stringToTerraform(struct!.type),
    encryption_key: cdktf.listMapper(codepipelineArtifactStoreEncryptionKeyToTerraform)(struct!.encryptionKey),
  }
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

function codepipelineStageActionToTerraform(struct?: CodepipelineStageAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    configuration: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.configuration),
    input_artifacts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.inputArtifacts),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    output_artifacts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.outputArtifacts),
    owner: cdktf.stringToTerraform(struct!.owner),
    provider: cdktf.stringToTerraform(struct!.provider),
    region: cdktf.stringToTerraform(struct!.region),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    run_order: cdktf.numberToTerraform(struct!.runOrder),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface CodepipelineStage {
  readonly name: string;
  /** action block */
  readonly action: CodepipelineStageAction[];
}

function codepipelineStageToTerraform(struct?: CodepipelineStage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    action: cdktf.listMapper(codepipelineStageActionToTerraform)(struct!.action),
  }
}


// Resource

export class Codepipeline extends cdktf.TerraformResource {

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
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      artifact_store: cdktf.listMapper(codepipelineArtifactStoreToTerraform)(this._artifactStore),
      stage: cdktf.listMapper(codepipelineStageToTerraform)(this._stage),
    };
  }
}
