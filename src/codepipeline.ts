// https://www.terraform.io/docs/providers/aws/r/codepipeline.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodepipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#name Codepipeline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#role_arn Codepipeline#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#tags Codepipeline#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#tags_all Codepipeline#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * artifact_store block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#artifact_store Codepipeline#artifact_store}
  */
  readonly artifactStore: CodepipelineArtifactStore[];
  /**
  * stage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#stage Codepipeline#stage}
  */
  readonly stage: CodepipelineStage[];
}
export interface CodepipelineArtifactStoreEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#id Codepipeline#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#type Codepipeline#type}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#location Codepipeline#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#region Codepipeline#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#type Codepipeline#type}
  */
  readonly type: string;
  /**
  * encryption_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#encryption_key Codepipeline#encryption_key}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#category Codepipeline#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#configuration Codepipeline#configuration}
  */
  readonly configuration?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#input_artifacts Codepipeline#input_artifacts}
  */
  readonly inputArtifacts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#name Codepipeline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#namespace Codepipeline#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#output_artifacts Codepipeline#output_artifacts}
  */
  readonly outputArtifacts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#owner Codepipeline#owner}
  */
  readonly owner: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#provider Codepipeline#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#region Codepipeline#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#role_arn Codepipeline#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#run_order Codepipeline#run_order}
  */
  readonly runOrder?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#version Codepipeline#version}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#name Codepipeline#name}
  */
  readonly name: string;
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#action Codepipeline#action}
  */
  readonly action: CodepipelineStageAction[];
}

function codepipelineStageToTerraform(struct?: CodepipelineStage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    action: cdktf.listMapper(codepipelineStageActionToTerraform)(struct!.action),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html aws_codepipeline}
*/
export class Codepipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_codepipeline";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html aws_codepipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodepipelineConfig
  */
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
    this._tagsAll = config.tagsAll;
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      artifact_store: cdktf.listMapper(codepipelineArtifactStoreToTerraform)(this._artifactStore),
      stage: cdktf.listMapper(codepipelineStageToTerraform)(this._stage),
    };
  }
}
