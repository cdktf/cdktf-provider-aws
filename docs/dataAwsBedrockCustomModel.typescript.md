# `dataAwsBedrockCustomModel` Submodule <a name="`dataAwsBedrockCustomModel` Submodule" id="@cdktf/provider-aws.dataAwsBedrockCustomModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBedrockCustomModel <a name="DataAwsBedrockCustomModel" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/bedrock_custom_model aws_bedrock_custom_model}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.Initializer"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

new dataAwsBedrockCustomModel.DataAwsBedrockCustomModel(scope: Construct, id: string, config: DataAwsBedrockCustomModelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig">DataAwsBedrockCustomModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig">DataAwsBedrockCustomModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsBedrockCustomModel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.isConstruct"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.isTerraformElement"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.isTerraformDataSource"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.generateConfigForImport"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsBedrockCustomModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsBedrockCustomModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsBedrockCustomModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/bedrock_custom_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsBedrockCustomModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.baseModelArn">baseModelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.hyperparameters">hyperparameters</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.jobArn">jobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.jobName">jobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.jobTags">jobTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelArn">modelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelKmsKeyArn">modelKmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelTags">modelTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.outputDataConfig">outputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList">DataAwsBedrockCustomModelOutputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.trainingDataConfig">trainingDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList">DataAwsBedrockCustomModelTrainingDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.trainingMetrics">trainingMetrics</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList">DataAwsBedrockCustomModelTrainingMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.validationDataConfig">validationDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList">DataAwsBedrockCustomModelValidationDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.validationMetrics">validationMetrics</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList">DataAwsBedrockCustomModelValidationMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelIdInput">modelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `baseModelArn`<sup>Required</sup> <a name="baseModelArn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.baseModelArn"></a>

```typescript
public readonly baseModelArn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `hyperparameters`<sup>Required</sup> <a name="hyperparameters" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.hyperparameters"></a>

```typescript
public readonly hyperparameters: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jobArn`<sup>Required</sup> <a name="jobArn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.jobArn"></a>

```typescript
public readonly jobArn: string;
```

- *Type:* string

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

---

##### `jobTags`<sup>Required</sup> <a name="jobTags" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.jobTags"></a>

```typescript
public readonly jobTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelArn"></a>

```typescript
public readonly modelArn: string;
```

- *Type:* string

---

##### `modelKmsKeyArn`<sup>Required</sup> <a name="modelKmsKeyArn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelKmsKeyArn"></a>

```typescript
public readonly modelKmsKeyArn: string;
```

- *Type:* string

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

##### `modelTags`<sup>Required</sup> <a name="modelTags" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelTags"></a>

```typescript
public readonly modelTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `outputDataConfig`<sup>Required</sup> <a name="outputDataConfig" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.outputDataConfig"></a>

```typescript
public readonly outputDataConfig: DataAwsBedrockCustomModelOutputDataConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList">DataAwsBedrockCustomModelOutputDataConfigList</a>

---

##### `trainingDataConfig`<sup>Required</sup> <a name="trainingDataConfig" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.trainingDataConfig"></a>

```typescript
public readonly trainingDataConfig: DataAwsBedrockCustomModelTrainingDataConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList">DataAwsBedrockCustomModelTrainingDataConfigList</a>

---

##### `trainingMetrics`<sup>Required</sup> <a name="trainingMetrics" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.trainingMetrics"></a>

```typescript
public readonly trainingMetrics: DataAwsBedrockCustomModelTrainingMetricsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList">DataAwsBedrockCustomModelTrainingMetricsList</a>

---

##### `validationDataConfig`<sup>Required</sup> <a name="validationDataConfig" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.validationDataConfig"></a>

```typescript
public readonly validationDataConfig: DataAwsBedrockCustomModelValidationDataConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList">DataAwsBedrockCustomModelValidationDataConfigList</a>

---

##### `validationMetrics`<sup>Required</sup> <a name="validationMetrics" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.validationMetrics"></a>

```typescript
public readonly validationMetrics: DataAwsBedrockCustomModelValidationMetricsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList">DataAwsBedrockCustomModelValidationMetricsList</a>

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelIdInput"></a>

```typescript
public readonly modelIdInput: string;
```

- *Type:* string

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBedrockCustomModelConfig <a name="DataAwsBedrockCustomModelConfig" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.Initializer"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

const dataAwsBedrockCustomModelConfig: dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.modelId">modelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/bedrock_custom_model#model_id DataAwsBedrockCustomModel#model_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/bedrock_custom_model#model_id DataAwsBedrockCustomModel#model_id}.

---

### DataAwsBedrockCustomModelOutputDataConfig <a name="DataAwsBedrockCustomModelOutputDataConfig" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfig.Initializer"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

const dataAwsBedrockCustomModelOutputDataConfig: dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfig = { ... }
```


### DataAwsBedrockCustomModelTrainingDataConfig <a name="DataAwsBedrockCustomModelTrainingDataConfig" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfig.Initializer"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

const dataAwsBedrockCustomModelTrainingDataConfig: dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfig = { ... }
```


### DataAwsBedrockCustomModelTrainingMetrics <a name="DataAwsBedrockCustomModelTrainingMetrics" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetrics.Initializer"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

const dataAwsBedrockCustomModelTrainingMetrics: dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetrics = { ... }
```


### DataAwsBedrockCustomModelValidationDataConfig <a name="DataAwsBedrockCustomModelValidationDataConfig" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfig.Initializer"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

const dataAwsBedrockCustomModelValidationDataConfig: dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfig = { ... }
```


### DataAwsBedrockCustomModelValidationDataConfigValidator <a name="DataAwsBedrockCustomModelValidationDataConfigValidator" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidator.Initializer"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

const dataAwsBedrockCustomModelValidationDataConfigValidator: dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidator = { ... }
```


### DataAwsBedrockCustomModelValidationMetrics <a name="DataAwsBedrockCustomModelValidationMetrics" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetrics.Initializer"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

const dataAwsBedrockCustomModelValidationMetrics: dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetrics = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsBedrockCustomModelOutputDataConfigList <a name="DataAwsBedrockCustomModelOutputDataConfigList" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.Initializer"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

new dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.get"></a>

```typescript
public get(index: number): DataAwsBedrockCustomModelOutputDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBedrockCustomModelOutputDataConfigOutputReference <a name="DataAwsBedrockCustomModelOutputDataConfigOutputReference" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

new dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfig">DataAwsBedrockCustomModelOutputDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBedrockCustomModelOutputDataConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfig">DataAwsBedrockCustomModelOutputDataConfig</a>

---


### DataAwsBedrockCustomModelTrainingDataConfigList <a name="DataAwsBedrockCustomModelTrainingDataConfigList" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.Initializer"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

new dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.get"></a>

```typescript
public get(index: number): DataAwsBedrockCustomModelTrainingDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBedrockCustomModelTrainingDataConfigOutputReference <a name="DataAwsBedrockCustomModelTrainingDataConfigOutputReference" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

new dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfig">DataAwsBedrockCustomModelTrainingDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBedrockCustomModelTrainingDataConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfig">DataAwsBedrockCustomModelTrainingDataConfig</a>

---


### DataAwsBedrockCustomModelTrainingMetricsList <a name="DataAwsBedrockCustomModelTrainingMetricsList" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.Initializer"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

new dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.get"></a>

```typescript
public get(index: number): DataAwsBedrockCustomModelTrainingMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBedrockCustomModelTrainingMetricsOutputReference <a name="DataAwsBedrockCustomModelTrainingMetricsOutputReference" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.Initializer"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

new dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.property.trainingLoss">trainingLoss</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetrics">DataAwsBedrockCustomModelTrainingMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `trainingLoss`<sup>Required</sup> <a name="trainingLoss" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.property.trainingLoss"></a>

```typescript
public readonly trainingLoss: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBedrockCustomModelTrainingMetrics;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetrics">DataAwsBedrockCustomModelTrainingMetrics</a>

---


### DataAwsBedrockCustomModelValidationDataConfigList <a name="DataAwsBedrockCustomModelValidationDataConfigList" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.Initializer"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

new dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.get"></a>

```typescript
public get(index: number): DataAwsBedrockCustomModelValidationDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBedrockCustomModelValidationDataConfigOutputReference <a name="DataAwsBedrockCustomModelValidationDataConfigOutputReference" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

new dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.property.validator">validator</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList">DataAwsBedrockCustomModelValidationDataConfigValidatorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfig">DataAwsBedrockCustomModelValidationDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `validator`<sup>Required</sup> <a name="validator" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.property.validator"></a>

```typescript
public readonly validator: DataAwsBedrockCustomModelValidationDataConfigValidatorList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList">DataAwsBedrockCustomModelValidationDataConfigValidatorList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBedrockCustomModelValidationDataConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfig">DataAwsBedrockCustomModelValidationDataConfig</a>

---


### DataAwsBedrockCustomModelValidationDataConfigValidatorList <a name="DataAwsBedrockCustomModelValidationDataConfigValidatorList" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.Initializer"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

new dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.get"></a>

```typescript
public get(index: number): DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference <a name="DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

new dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidator">DataAwsBedrockCustomModelValidationDataConfigValidator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBedrockCustomModelValidationDataConfigValidator;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidator">DataAwsBedrockCustomModelValidationDataConfigValidator</a>

---


### DataAwsBedrockCustomModelValidationMetricsList <a name="DataAwsBedrockCustomModelValidationMetricsList" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.Initializer"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

new dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.get"></a>

```typescript
public get(index: number): DataAwsBedrockCustomModelValidationMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBedrockCustomModelValidationMetricsOutputReference <a name="DataAwsBedrockCustomModelValidationMetricsOutputReference" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.Initializer"></a>

```typescript
import { dataAwsBedrockCustomModel } from '@cdktf/provider-aws'

new dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.property.validationLoss">validationLoss</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetrics">DataAwsBedrockCustomModelValidationMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `validationLoss`<sup>Required</sup> <a name="validationLoss" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.property.validationLoss"></a>

```typescript
public readonly validationLoss: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBedrockCustomModelValidationMetrics;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetrics">DataAwsBedrockCustomModelValidationMetrics</a>

---



