/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodepipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#execution_mode Codepipeline#execution_mode}
  */
  readonly executionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#id Codepipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#name Codepipeline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#pipeline_type Codepipeline#pipeline_type}
  */
  readonly pipelineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#role_arn Codepipeline#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#tags Codepipeline#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#tags_all Codepipeline#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * artifact_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#artifact_store Codepipeline#artifact_store}
  */
  readonly artifactStore: CodepipelineArtifactStore[] | cdktf.IResolvable;
  /**
  * stage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#stage Codepipeline#stage}
  */
  readonly stage: CodepipelineStage[] | cdktf.IResolvable;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#trigger Codepipeline#trigger}
  */
  readonly trigger?: CodepipelineTrigger[] | cdktf.IResolvable;
  /**
  * variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#variable Codepipeline#variable}
  */
  readonly variable?: CodepipelineVariable[] | cdktf.IResolvable;
}
export interface CodepipelineArtifactStoreEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#id Codepipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#type Codepipeline#type}
  */
  readonly type: string;
}

export function codepipelineArtifactStoreEncryptionKeyToTerraform(struct?: CodepipelineArtifactStoreEncryptionKeyOutputReference | CodepipelineArtifactStoreEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function codepipelineArtifactStoreEncryptionKeyToHclTerraform(struct?: CodepipelineArtifactStoreEncryptionKeyOutputReference | CodepipelineArtifactStoreEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelineArtifactStoreEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodepipelineArtifactStoreEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineArtifactStoreEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CodepipelineArtifactStore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#location Codepipeline#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#region Codepipeline#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#type Codepipeline#type}
  */
  readonly type: string;
  /**
  * encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#encryption_key Codepipeline#encryption_key}
  */
  readonly encryptionKey?: CodepipelineArtifactStoreEncryptionKey;
}

export function codepipelineArtifactStoreToTerraform(struct?: CodepipelineArtifactStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    region: cdktf.stringToTerraform(struct!.region),
    type: cdktf.stringToTerraform(struct!.type),
    encryption_key: codepipelineArtifactStoreEncryptionKeyToTerraform(struct!.encryptionKey),
  }
}


export function codepipelineArtifactStoreToHclTerraform(struct?: CodepipelineArtifactStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key: {
      value: codepipelineArtifactStoreEncryptionKeyToHclTerraform(struct!.encryptionKey),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelineArtifactStoreEncryptionKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelineArtifactStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodepipelineArtifactStore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._encryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineArtifactStore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._region = undefined;
      this._type = undefined;
      this._encryptionKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._region = value.region;
      this._type = value.type;
      this._encryptionKey.internalValue = value.encryptionKey;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey = new CodepipelineArtifactStoreEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
  public putEncryptionKey(value: CodepipelineArtifactStoreEncryptionKey) {
    this._encryptionKey.internalValue = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey.internalValue;
  }
}

export class CodepipelineArtifactStoreList extends cdktf.ComplexList {
  public internalValue? : CodepipelineArtifactStore[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodepipelineArtifactStoreOutputReference {
    return new CodepipelineArtifactStoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelineStageAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#category Codepipeline#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#configuration Codepipeline#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}
  */
  readonly inputArtifacts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#name Codepipeline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#namespace Codepipeline#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#output_artifacts Codepipeline#output_artifacts}
  */
  readonly outputArtifacts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#owner Codepipeline#owner}
  */
  readonly owner: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#provider Codepipeline#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#region Codepipeline#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#role_arn Codepipeline#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#run_order Codepipeline#run_order}
  */
  readonly runOrder?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}
  */
  readonly timeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#version Codepipeline#version}
  */
  readonly version: string;
}

export function codepipelineStageActionToTerraform(struct?: CodepipelineStageAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    input_artifacts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputArtifacts),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    output_artifacts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outputArtifacts),
    owner: cdktf.stringToTerraform(struct!.owner),
    provider: cdktf.stringToTerraform(struct!.provider),
    region: cdktf.stringToTerraform(struct!.region),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    run_order: cdktf.numberToTerraform(struct!.runOrder),
    timeout_in_minutes: cdktf.numberToTerraform(struct!.timeoutInMinutes),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function codepipelineStageActionToHclTerraform(struct?: CodepipelineStageAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    input_artifacts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputArtifacts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_artifacts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.outputArtifacts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_order: {
      value: cdktf.numberToHclTerraform(struct!.runOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelineStageActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodepipelineStageAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._inputArtifacts !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputArtifacts = this._inputArtifacts;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._outputArtifacts !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputArtifacts = this._outputArtifacts;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._runOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOrder = this._runOrder;
    }
    if (this._timeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInMinutes = this._timeoutInMinutes;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineStageAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._configuration = undefined;
      this._inputArtifacts = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._outputArtifacts = undefined;
      this._owner = undefined;
      this._provider = undefined;
      this._region = undefined;
      this._roleArn = undefined;
      this._runOrder = undefined;
      this._timeoutInMinutes = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._configuration = value.configuration;
      this._inputArtifacts = value.inputArtifacts;
      this._name = value.name;
      this._namespace = value.namespace;
      this._outputArtifacts = value.outputArtifacts;
      this._owner = value.owner;
      this._provider = value.provider;
      this._region = value.region;
      this._roleArn = value.roleArn;
      this._runOrder = value.runOrder;
      this._timeoutInMinutes = value.timeoutInMinutes;
      this._version = value.version;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // input_artifacts - computed: false, optional: true, required: false
  private _inputArtifacts?: string[]; 
  public get inputArtifacts() {
    return this.getListAttribute('input_artifacts');
  }
  public set inputArtifacts(value: string[]) {
    this._inputArtifacts = value;
  }
  public resetInputArtifacts() {
    this._inputArtifacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputArtifactsInput() {
    return this._inputArtifacts;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // output_artifacts - computed: false, optional: true, required: false
  private _outputArtifacts?: string[]; 
  public get outputArtifacts() {
    return this.getListAttribute('output_artifacts');
  }
  public set outputArtifacts(value: string[]) {
    this._outputArtifacts = value;
  }
  public resetOutputArtifacts() {
    this._outputArtifacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputArtifactsInput() {
    return this._outputArtifacts;
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // run_order - computed: true, optional: true, required: false
  private _runOrder?: number; 
  public get runOrder() {
    return this.getNumberAttribute('run_order');
  }
  public set runOrder(value: number) {
    this._runOrder = value;
  }
  public resetRunOrder() {
    this._runOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOrderInput() {
    return this._runOrder;
  }

  // timeout_in_minutes - computed: false, optional: true, required: false
  private _timeoutInMinutes?: number; 
  public get timeoutInMinutes() {
    return this.getNumberAttribute('timeout_in_minutes');
  }
  public set timeoutInMinutes(value: number) {
    this._timeoutInMinutes = value;
  }
  public resetTimeoutInMinutes() {
    this._timeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInMinutesInput() {
    return this._timeoutInMinutes;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class CodepipelineStageActionList extends cdktf.ComplexList {
  public internalValue? : CodepipelineStageAction[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodepipelineStageActionOutputReference {
    return new CodepipelineStageActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelineStage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#name Codepipeline#name}
  */
  readonly name: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#action Codepipeline#action}
  */
  readonly action: CodepipelineStageAction[] | cdktf.IResolvable;
}

export function codepipelineStageToTerraform(struct?: CodepipelineStage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    action: cdktf.listMapper(codepipelineStageActionToTerraform, true)(struct!.action),
  }
}


export function codepipelineStageToHclTerraform(struct?: CodepipelineStage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.listMapperHcl(codepipelineStageActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelineStageActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelineStageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodepipelineStage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineStage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._action.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._action.internalValue = value.action;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // action - computed: false, optional: false, required: true
  private _action = new CodepipelineStageActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: CodepipelineStageAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }
}

export class CodepipelineStageList extends cdktf.ComplexList {
  public internalValue? : CodepipelineStage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodepipelineStageOutputReference {
    return new CodepipelineStageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelineTriggerGitConfigurationPullRequestBranches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#excludes Codepipeline#excludes}
  */
  readonly excludes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#includes Codepipeline#includes}
  */
  readonly includes?: string[];
}

export function codepipelineTriggerGitConfigurationPullRequestBranchesToTerraform(struct?: CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference | CodepipelineTriggerGitConfigurationPullRequestBranches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludes),
    includes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includes),
  }
}


export function codepipelineTriggerGitConfigurationPullRequestBranchesToHclTerraform(struct?: CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference | CodepipelineTriggerGitConfigurationPullRequestBranches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excludes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    includes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodepipelineTriggerGitConfigurationPullRequestBranches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._includes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineTriggerGitConfigurationPullRequestBranches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludes = undefined;
      this._includes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludes = value.excludes;
      this._includes = value.includes;
    }
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // includes - computed: false, optional: true, required: false
  private _includes?: string[]; 
  public get includes() {
    return this.getListAttribute('includes');
  }
  public set includes(value: string[]) {
    this._includes = value;
  }
  public resetIncludes() {
    this._includes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes;
  }
}
export interface CodepipelineTriggerGitConfigurationPullRequestFilePaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#excludes Codepipeline#excludes}
  */
  readonly excludes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#includes Codepipeline#includes}
  */
  readonly includes?: string[];
}

export function codepipelineTriggerGitConfigurationPullRequestFilePathsToTerraform(struct?: CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference | CodepipelineTriggerGitConfigurationPullRequestFilePaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludes),
    includes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includes),
  }
}


export function codepipelineTriggerGitConfigurationPullRequestFilePathsToHclTerraform(struct?: CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference | CodepipelineTriggerGitConfigurationPullRequestFilePaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excludes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    includes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodepipelineTriggerGitConfigurationPullRequestFilePaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._includes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineTriggerGitConfigurationPullRequestFilePaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludes = undefined;
      this._includes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludes = value.excludes;
      this._includes = value.includes;
    }
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // includes - computed: false, optional: true, required: false
  private _includes?: string[]; 
  public get includes() {
    return this.getListAttribute('includes');
  }
  public set includes(value: string[]) {
    this._includes = value;
  }
  public resetIncludes() {
    this._includes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes;
  }
}
export interface CodepipelineTriggerGitConfigurationPullRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#events Codepipeline#events}
  */
  readonly events?: string[];
  /**
  * branches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#branches Codepipeline#branches}
  */
  readonly branches?: CodepipelineTriggerGitConfigurationPullRequestBranches;
  /**
  * file_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#file_paths Codepipeline#file_paths}
  */
  readonly filePaths?: CodepipelineTriggerGitConfigurationPullRequestFilePaths;
}

export function codepipelineTriggerGitConfigurationPullRequestToTerraform(struct?: CodepipelineTriggerGitConfigurationPullRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    branches: codepipelineTriggerGitConfigurationPullRequestBranchesToTerraform(struct!.branches),
    file_paths: codepipelineTriggerGitConfigurationPullRequestFilePathsToTerraform(struct!.filePaths),
  }
}


export function codepipelineTriggerGitConfigurationPullRequestToHclTerraform(struct?: CodepipelineTriggerGitConfigurationPullRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    branches: {
      value: codepipelineTriggerGitConfigurationPullRequestBranchesToHclTerraform(struct!.branches),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelineTriggerGitConfigurationPullRequestBranchesList",
    },
    file_paths: {
      value: codepipelineTriggerGitConfigurationPullRequestFilePathsToHclTerraform(struct!.filePaths),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelineTriggerGitConfigurationPullRequestFilePathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelineTriggerGitConfigurationPullRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodepipelineTriggerGitConfigurationPullRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._branches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches?.internalValue;
    }
    if (this._filePaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePaths = this._filePaths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineTriggerGitConfigurationPullRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events = undefined;
      this._branches.internalValue = undefined;
      this._filePaths.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events = value.events;
      this._branches.internalValue = value.branches;
      this._filePaths.internalValue = value.filePaths;
    }
  }

  // events - computed: false, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // branches - computed: false, optional: true, required: false
  private _branches = new CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference(this, "branches");
  public get branches() {
    return this._branches;
  }
  public putBranches(value: CodepipelineTriggerGitConfigurationPullRequestBranches) {
    this._branches.internalValue = value;
  }
  public resetBranches() {
    this._branches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches.internalValue;
  }

  // file_paths - computed: false, optional: true, required: false
  private _filePaths = new CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference(this, "file_paths");
  public get filePaths() {
    return this._filePaths;
  }
  public putFilePaths(value: CodepipelineTriggerGitConfigurationPullRequestFilePaths) {
    this._filePaths.internalValue = value;
  }
  public resetFilePaths() {
    this._filePaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathsInput() {
    return this._filePaths.internalValue;
  }
}

export class CodepipelineTriggerGitConfigurationPullRequestList extends cdktf.ComplexList {
  public internalValue? : CodepipelineTriggerGitConfigurationPullRequest[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodepipelineTriggerGitConfigurationPullRequestOutputReference {
    return new CodepipelineTriggerGitConfigurationPullRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelineTriggerGitConfigurationPushBranches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#excludes Codepipeline#excludes}
  */
  readonly excludes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#includes Codepipeline#includes}
  */
  readonly includes?: string[];
}

export function codepipelineTriggerGitConfigurationPushBranchesToTerraform(struct?: CodepipelineTriggerGitConfigurationPushBranchesOutputReference | CodepipelineTriggerGitConfigurationPushBranches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludes),
    includes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includes),
  }
}


export function codepipelineTriggerGitConfigurationPushBranchesToHclTerraform(struct?: CodepipelineTriggerGitConfigurationPushBranchesOutputReference | CodepipelineTriggerGitConfigurationPushBranches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excludes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    includes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelineTriggerGitConfigurationPushBranchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodepipelineTriggerGitConfigurationPushBranches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._includes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineTriggerGitConfigurationPushBranches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludes = undefined;
      this._includes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludes = value.excludes;
      this._includes = value.includes;
    }
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // includes - computed: false, optional: true, required: false
  private _includes?: string[]; 
  public get includes() {
    return this.getListAttribute('includes');
  }
  public set includes(value: string[]) {
    this._includes = value;
  }
  public resetIncludes() {
    this._includes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes;
  }
}
export interface CodepipelineTriggerGitConfigurationPushFilePaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#excludes Codepipeline#excludes}
  */
  readonly excludes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#includes Codepipeline#includes}
  */
  readonly includes?: string[];
}

export function codepipelineTriggerGitConfigurationPushFilePathsToTerraform(struct?: CodepipelineTriggerGitConfigurationPushFilePathsOutputReference | CodepipelineTriggerGitConfigurationPushFilePaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludes),
    includes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includes),
  }
}


export function codepipelineTriggerGitConfigurationPushFilePathsToHclTerraform(struct?: CodepipelineTriggerGitConfigurationPushFilePathsOutputReference | CodepipelineTriggerGitConfigurationPushFilePaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excludes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    includes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelineTriggerGitConfigurationPushFilePathsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodepipelineTriggerGitConfigurationPushFilePaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._includes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineTriggerGitConfigurationPushFilePaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludes = undefined;
      this._includes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludes = value.excludes;
      this._includes = value.includes;
    }
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // includes - computed: false, optional: true, required: false
  private _includes?: string[]; 
  public get includes() {
    return this.getListAttribute('includes');
  }
  public set includes(value: string[]) {
    this._includes = value;
  }
  public resetIncludes() {
    this._includes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes;
  }
}
export interface CodepipelineTriggerGitConfigurationPushTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#excludes Codepipeline#excludes}
  */
  readonly excludes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#includes Codepipeline#includes}
  */
  readonly includes?: string[];
}

export function codepipelineTriggerGitConfigurationPushTagsToTerraform(struct?: CodepipelineTriggerGitConfigurationPushTagsOutputReference | CodepipelineTriggerGitConfigurationPushTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludes),
    includes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includes),
  }
}


export function codepipelineTriggerGitConfigurationPushTagsToHclTerraform(struct?: CodepipelineTriggerGitConfigurationPushTagsOutputReference | CodepipelineTriggerGitConfigurationPushTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excludes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    includes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelineTriggerGitConfigurationPushTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodepipelineTriggerGitConfigurationPushTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._includes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineTriggerGitConfigurationPushTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludes = undefined;
      this._includes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludes = value.excludes;
      this._includes = value.includes;
    }
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // includes - computed: false, optional: true, required: false
  private _includes?: string[]; 
  public get includes() {
    return this.getListAttribute('includes');
  }
  public set includes(value: string[]) {
    this._includes = value;
  }
  public resetIncludes() {
    this._includes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes;
  }
}
export interface CodepipelineTriggerGitConfigurationPush {
  /**
  * branches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#branches Codepipeline#branches}
  */
  readonly branches?: CodepipelineTriggerGitConfigurationPushBranches;
  /**
  * file_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#file_paths Codepipeline#file_paths}
  */
  readonly filePaths?: CodepipelineTriggerGitConfigurationPushFilePaths;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#tags Codepipeline#tags}
  */
  readonly tags?: CodepipelineTriggerGitConfigurationPushTags;
}

export function codepipelineTriggerGitConfigurationPushToTerraform(struct?: CodepipelineTriggerGitConfigurationPush | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branches: codepipelineTriggerGitConfigurationPushBranchesToTerraform(struct!.branches),
    file_paths: codepipelineTriggerGitConfigurationPushFilePathsToTerraform(struct!.filePaths),
    tags: codepipelineTriggerGitConfigurationPushTagsToTerraform(struct!.tags),
  }
}


export function codepipelineTriggerGitConfigurationPushToHclTerraform(struct?: CodepipelineTriggerGitConfigurationPush | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branches: {
      value: codepipelineTriggerGitConfigurationPushBranchesToHclTerraform(struct!.branches),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelineTriggerGitConfigurationPushBranchesList",
    },
    file_paths: {
      value: codepipelineTriggerGitConfigurationPushFilePathsToHclTerraform(struct!.filePaths),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelineTriggerGitConfigurationPushFilePathsList",
    },
    tags: {
      value: codepipelineTriggerGitConfigurationPushTagsToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelineTriggerGitConfigurationPushTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelineTriggerGitConfigurationPushOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodepipelineTriggerGitConfigurationPush | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches?.internalValue;
    }
    if (this._filePaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePaths = this._filePaths?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineTriggerGitConfigurationPush | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branches.internalValue = undefined;
      this._filePaths.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branches.internalValue = value.branches;
      this._filePaths.internalValue = value.filePaths;
      this._tags.internalValue = value.tags;
    }
  }

  // branches - computed: false, optional: true, required: false
  private _branches = new CodepipelineTriggerGitConfigurationPushBranchesOutputReference(this, "branches");
  public get branches() {
    return this._branches;
  }
  public putBranches(value: CodepipelineTriggerGitConfigurationPushBranches) {
    this._branches.internalValue = value;
  }
  public resetBranches() {
    this._branches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches.internalValue;
  }

  // file_paths - computed: false, optional: true, required: false
  private _filePaths = new CodepipelineTriggerGitConfigurationPushFilePathsOutputReference(this, "file_paths");
  public get filePaths() {
    return this._filePaths;
  }
  public putFilePaths(value: CodepipelineTriggerGitConfigurationPushFilePaths) {
    this._filePaths.internalValue = value;
  }
  public resetFilePaths() {
    this._filePaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathsInput() {
    return this._filePaths.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new CodepipelineTriggerGitConfigurationPushTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: CodepipelineTriggerGitConfigurationPushTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class CodepipelineTriggerGitConfigurationPushList extends cdktf.ComplexList {
  public internalValue? : CodepipelineTriggerGitConfigurationPush[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodepipelineTriggerGitConfigurationPushOutputReference {
    return new CodepipelineTriggerGitConfigurationPushOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelineTriggerGitConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#source_action_name Codepipeline#source_action_name}
  */
  readonly sourceActionName: string;
  /**
  * pull_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#pull_request Codepipeline#pull_request}
  */
  readonly pullRequest?: CodepipelineTriggerGitConfigurationPullRequest[] | cdktf.IResolvable;
  /**
  * push block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#push Codepipeline#push}
  */
  readonly push?: CodepipelineTriggerGitConfigurationPush[] | cdktf.IResolvable;
}

export function codepipelineTriggerGitConfigurationToTerraform(struct?: CodepipelineTriggerGitConfigurationOutputReference | CodepipelineTriggerGitConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_action_name: cdktf.stringToTerraform(struct!.sourceActionName),
    pull_request: cdktf.listMapper(codepipelineTriggerGitConfigurationPullRequestToTerraform, true)(struct!.pullRequest),
    push: cdktf.listMapper(codepipelineTriggerGitConfigurationPushToTerraform, true)(struct!.push),
  }
}


export function codepipelineTriggerGitConfigurationToHclTerraform(struct?: CodepipelineTriggerGitConfigurationOutputReference | CodepipelineTriggerGitConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_action_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceActionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_request: {
      value: cdktf.listMapperHcl(codepipelineTriggerGitConfigurationPullRequestToHclTerraform, true)(struct!.pullRequest),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelineTriggerGitConfigurationPullRequestList",
    },
    push: {
      value: cdktf.listMapperHcl(codepipelineTriggerGitConfigurationPushToHclTerraform, true)(struct!.push),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelineTriggerGitConfigurationPushList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelineTriggerGitConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodepipelineTriggerGitConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceActionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceActionName = this._sourceActionName;
    }
    if (this._pullRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequest = this._pullRequest?.internalValue;
    }
    if (this._push?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.push = this._push?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineTriggerGitConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceActionName = undefined;
      this._pullRequest.internalValue = undefined;
      this._push.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceActionName = value.sourceActionName;
      this._pullRequest.internalValue = value.pullRequest;
      this._push.internalValue = value.push;
    }
  }

  // source_action_name - computed: false, optional: false, required: true
  private _sourceActionName?: string; 
  public get sourceActionName() {
    return this.getStringAttribute('source_action_name');
  }
  public set sourceActionName(value: string) {
    this._sourceActionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceActionNameInput() {
    return this._sourceActionName;
  }

  // pull_request - computed: false, optional: true, required: false
  private _pullRequest = new CodepipelineTriggerGitConfigurationPullRequestList(this, "pull_request", false);
  public get pullRequest() {
    return this._pullRequest;
  }
  public putPullRequest(value: CodepipelineTriggerGitConfigurationPullRequest[] | cdktf.IResolvable) {
    this._pullRequest.internalValue = value;
  }
  public resetPullRequest() {
    this._pullRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestInput() {
    return this._pullRequest.internalValue;
  }

  // push - computed: false, optional: true, required: false
  private _push = new CodepipelineTriggerGitConfigurationPushList(this, "push", false);
  public get push() {
    return this._push;
  }
  public putPush(value: CodepipelineTriggerGitConfigurationPush[] | cdktf.IResolvable) {
    this._push.internalValue = value;
  }
  public resetPush() {
    this._push.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushInput() {
    return this._push.internalValue;
  }
}
export interface CodepipelineTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#provider_type Codepipeline#provider_type}
  */
  readonly providerType: string;
  /**
  * git_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#git_configuration Codepipeline#git_configuration}
  */
  readonly gitConfiguration: CodepipelineTriggerGitConfiguration;
}

export function codepipelineTriggerToTerraform(struct?: CodepipelineTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider_type: cdktf.stringToTerraform(struct!.providerType),
    git_configuration: codepipelineTriggerGitConfigurationToTerraform(struct!.gitConfiguration),
  }
}


export function codepipelineTriggerToHclTerraform(struct?: CodepipelineTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider_type: {
      value: cdktf.stringToHclTerraform(struct!.providerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_configuration: {
      value: codepipelineTriggerGitConfigurationToHclTerraform(struct!.gitConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelineTriggerGitConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelineTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodepipelineTrigger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._providerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerType = this._providerType;
    }
    if (this._gitConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitConfiguration = this._gitConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineTrigger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._providerType = undefined;
      this._gitConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._providerType = value.providerType;
      this._gitConfiguration.internalValue = value.gitConfiguration;
    }
  }

  // provider_type - computed: false, optional: false, required: true
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
  }

  // git_configuration - computed: false, optional: false, required: true
  private _gitConfiguration = new CodepipelineTriggerGitConfigurationOutputReference(this, "git_configuration");
  public get gitConfiguration() {
    return this._gitConfiguration;
  }
  public putGitConfiguration(value: CodepipelineTriggerGitConfiguration) {
    this._gitConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitConfigurationInput() {
    return this._gitConfiguration.internalValue;
  }
}

export class CodepipelineTriggerList extends cdktf.ComplexList {
  public internalValue? : CodepipelineTrigger[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodepipelineTriggerOutputReference {
    return new CodepipelineTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelineVariable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#default_value Codepipeline#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#description Codepipeline#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#name Codepipeline#name}
  */
  readonly name: string;
}

export function codepipelineVariableToTerraform(struct?: CodepipelineVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function codepipelineVariableToHclTerraform(struct?: CodepipelineVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelineVariableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodepipelineVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class CodepipelineVariableList extends cdktf.ComplexList {
  public internalValue? : CodepipelineVariable[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodepipelineVariableOutputReference {
    return new CodepipelineVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline aws_codepipeline}
*/
export class Codepipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_codepipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Codepipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Codepipeline to import
  * @param importFromId The id of the existing Codepipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Codepipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_codepipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline aws_codepipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodepipelineConfig
  */
  public constructor(scope: Construct, id: string, config: CodepipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codepipeline',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.82.2',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._executionMode = config.executionMode;
    this._id = config.id;
    this._name = config.name;
    this._pipelineType = config.pipelineType;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._artifactStore.internalValue = config.artifactStore;
    this._stage.internalValue = config.stage;
    this._trigger.internalValue = config.trigger;
    this._variable.internalValue = config.variable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // execution_mode - computed: false, optional: true, required: false
  private _executionMode?: string; 
  public get executionMode() {
    return this.getStringAttribute('execution_mode');
  }
  public set executionMode(value: string) {
    this._executionMode = value;
  }
  public resetExecutionMode() {
    this._executionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionModeInput() {
    return this._executionMode;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pipeline_type - computed: false, optional: true, required: false
  private _pipelineType?: string; 
  public get pipelineType() {
    return this.getStringAttribute('pipeline_type');
  }
  public set pipelineType(value: string) {
    this._pipelineType = value;
  }
  public resetPipelineType() {
    this._pipelineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineTypeInput() {
    return this._pipelineType;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // artifact_store - computed: false, optional: false, required: true
  private _artifactStore = new CodepipelineArtifactStoreList(this, "artifact_store", true);
  public get artifactStore() {
    return this._artifactStore;
  }
  public putArtifactStore(value: CodepipelineArtifactStore[] | cdktf.IResolvable) {
    this._artifactStore.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactStoreInput() {
    return this._artifactStore.internalValue;
  }

  // stage - computed: false, optional: false, required: true
  private _stage = new CodepipelineStageList(this, "stage", false);
  public get stage() {
    return this._stage;
  }
  public putStage(value: CodepipelineStage[] | cdktf.IResolvable) {
    this._stage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage.internalValue;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger = new CodepipelineTriggerList(this, "trigger", false);
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: CodepipelineTrigger[] | cdktf.IResolvable) {
    this._trigger.internalValue = value;
  }
  public resetTrigger() {
    this._trigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }

  // variable - computed: false, optional: true, required: false
  private _variable = new CodepipelineVariableList(this, "variable", false);
  public get variable() {
    return this._variable;
  }
  public putVariable(value: CodepipelineVariable[] | cdktf.IResolvable) {
    this._variable.internalValue = value;
  }
  public resetVariable() {
    this._variable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      execution_mode: cdktf.stringToTerraform(this._executionMode),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pipeline_type: cdktf.stringToTerraform(this._pipelineType),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      artifact_store: cdktf.listMapper(codepipelineArtifactStoreToTerraform, true)(this._artifactStore.internalValue),
      stage: cdktf.listMapper(codepipelineStageToTerraform, true)(this._stage.internalValue),
      trigger: cdktf.listMapper(codepipelineTriggerToTerraform, true)(this._trigger.internalValue),
      variable: cdktf.listMapper(codepipelineVariableToTerraform, true)(this._variable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      execution_mode: {
        value: cdktf.stringToHclTerraform(this._executionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_type: {
        value: cdktf.stringToHclTerraform(this._pipelineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      artifact_store: {
        value: cdktf.listMapperHcl(codepipelineArtifactStoreToHclTerraform, true)(this._artifactStore.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CodepipelineArtifactStoreList",
      },
      stage: {
        value: cdktf.listMapperHcl(codepipelineStageToHclTerraform, true)(this._stage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodepipelineStageList",
      },
      trigger: {
        value: cdktf.listMapperHcl(codepipelineTriggerToHclTerraform, true)(this._trigger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodepipelineTriggerList",
      },
      variable: {
        value: cdktf.listMapperHcl(codepipelineVariableToHclTerraform, true)(this._variable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodepipelineVariableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
