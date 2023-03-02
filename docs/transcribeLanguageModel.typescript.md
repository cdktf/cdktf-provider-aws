# `transcribeLanguageModel` Submodule <a name="`transcribeLanguageModel` Submodule" id="@cdktf/provider-aws.transcribeLanguageModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeLanguageModel <a name="TranscribeLanguageModel" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model aws_transcribe_language_model}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer"></a>

```typescript
import { transcribeLanguageModel } from '@cdktf/provider-aws'

new transcribeLanguageModel.TranscribeLanguageModel(scope: Construct, id: string, config: TranscribeLanguageModelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig">TranscribeLanguageModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig">TranscribeLanguageModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putInputDataConfig">putInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putInputDataConfig` <a name="putInputDataConfig" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putInputDataConfig"></a>

```typescript
public putInputDataConfig(value: TranscribeLanguageModelInputDataConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putInputDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putTimeouts"></a>

```typescript
public putTimeouts(value: TranscribeLanguageModelTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isConstruct"></a>

```typescript
import { transcribeLanguageModel } from '@cdktf/provider-aws'

transcribeLanguageModel.TranscribeLanguageModel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformElement"></a>

```typescript
import { transcribeLanguageModel } from '@cdktf/provider-aws'

transcribeLanguageModel.TranscribeLanguageModel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformResource"></a>

```typescript
import { transcribeLanguageModel } from '@cdktf/provider-aws'

transcribeLanguageModel.TranscribeLanguageModel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference">TranscribeLanguageModelInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference">TranscribeLanguageModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.baseModelNameInput">baseModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.inputDataConfigInput">inputDataConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.modelNameInput">modelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.baseModelName">baseModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `inputDataConfig`<sup>Required</sup> <a name="inputDataConfig" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.inputDataConfig"></a>

```typescript
public readonly inputDataConfig: TranscribeLanguageModelInputDataConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference">TranscribeLanguageModelInputDataConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.timeouts"></a>

```typescript
public readonly timeouts: TranscribeLanguageModelTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference">TranscribeLanguageModelTimeoutsOutputReference</a>

---

##### `baseModelNameInput`<sup>Optional</sup> <a name="baseModelNameInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.baseModelNameInput"></a>

```typescript
public readonly baseModelNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputDataConfigInput`<sup>Optional</sup> <a name="inputDataConfigInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.inputDataConfigInput"></a>

```typescript
public readonly inputDataConfigInput: TranscribeLanguageModelInputDataConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a>

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `modelNameInput`<sup>Optional</sup> <a name="modelNameInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.modelNameInput"></a>

```typescript
public readonly modelNameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: TranscribeLanguageModelTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a> | cdktf.IResolvable

---

##### `baseModelName`<sup>Required</sup> <a name="baseModelName" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.baseModelName"></a>

```typescript
public readonly baseModelName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeLanguageModelConfig <a name="TranscribeLanguageModelConfig" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.Initializer"></a>

```typescript
import { transcribeLanguageModel } from '@cdktf/provider-aws'

const transcribeLanguageModelConfig: transcribeLanguageModel.TranscribeLanguageModelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.baseModelName">baseModelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#base_model_name TranscribeLanguageModel#base_model_name}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.languageCode">languageCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#language_code TranscribeLanguageModel#language_code}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.modelName">modelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#model_name TranscribeLanguageModel#model_name}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#id TranscribeLanguageModel#id}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags TranscribeLanguageModel#tags}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags_all TranscribeLanguageModel#tags_all}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `baseModelName`<sup>Required</sup> <a name="baseModelName" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.baseModelName"></a>

```typescript
public readonly baseModelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#base_model_name TranscribeLanguageModel#base_model_name}.

---

##### `inputDataConfig`<sup>Required</sup> <a name="inputDataConfig" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.inputDataConfig"></a>

```typescript
public readonly inputDataConfig: TranscribeLanguageModelInputDataConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#input_data_config TranscribeLanguageModel#input_data_config}

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#language_code TranscribeLanguageModel#language_code}.

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#model_name TranscribeLanguageModel#model_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#id TranscribeLanguageModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags TranscribeLanguageModel#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags_all TranscribeLanguageModel#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.timeouts"></a>

```typescript
public readonly timeouts: TranscribeLanguageModelTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#timeouts TranscribeLanguageModel#timeouts}

---

### TranscribeLanguageModelInputDataConfig <a name="TranscribeLanguageModelInputDataConfig" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.Initializer"></a>

```typescript
import { transcribeLanguageModel } from '@cdktf/provider-aws'

const transcribeLanguageModelInputDataConfig: transcribeLanguageModel.TranscribeLanguageModelInputDataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#data_access_role_arn TranscribeLanguageModel#data_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.s3Uri">s3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#s3_uri TranscribeLanguageModel#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.tuningDataS3Uri">tuningDataS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tuning_data_s3_uri TranscribeLanguageModel#tuning_data_s3_uri}. |

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.dataAccessRoleArn"></a>

```typescript
public readonly dataAccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#data_access_role_arn TranscribeLanguageModel#data_access_role_arn}.

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#s3_uri TranscribeLanguageModel#s3_uri}.

---

##### `tuningDataS3Uri`<sup>Optional</sup> <a name="tuningDataS3Uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.tuningDataS3Uri"></a>

```typescript
public readonly tuningDataS3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tuning_data_s3_uri TranscribeLanguageModel#tuning_data_s3_uri}.

---

### TranscribeLanguageModelTimeouts <a name="TranscribeLanguageModelTimeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts.Initializer"></a>

```typescript
import { transcribeLanguageModel } from '@cdktf/provider-aws'

const transcribeLanguageModelTimeouts: transcribeLanguageModel.TranscribeLanguageModelTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#create TranscribeLanguageModel#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#create TranscribeLanguageModel#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranscribeLanguageModelInputDataConfigOutputReference <a name="TranscribeLanguageModelInputDataConfigOutputReference" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.Initializer"></a>

```typescript
import { transcribeLanguageModel } from '@cdktf/provider-aws'

new transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.resetTuningDataS3Uri">resetTuningDataS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTuningDataS3Uri` <a name="resetTuningDataS3Uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.resetTuningDataS3Uri"></a>

```typescript
public resetTuningDataS3Uri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.dataAccessRoleArnInput">dataAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.tuningDataS3UriInput">tuningDataS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.tuningDataS3Uri">tuningDataS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataAccessRoleArnInput`<sup>Optional</sup> <a name="dataAccessRoleArnInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.dataAccessRoleArnInput"></a>

```typescript
public readonly dataAccessRoleArnInput: string;
```

- *Type:* string

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.s3UriInput"></a>

```typescript
public readonly s3UriInput: string;
```

- *Type:* string

---

##### `tuningDataS3UriInput`<sup>Optional</sup> <a name="tuningDataS3UriInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.tuningDataS3UriInput"></a>

```typescript
public readonly tuningDataS3UriInput: string;
```

- *Type:* string

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.dataAccessRoleArn"></a>

```typescript
public readonly dataAccessRoleArn: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `tuningDataS3Uri`<sup>Required</sup> <a name="tuningDataS3Uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.tuningDataS3Uri"></a>

```typescript
public readonly tuningDataS3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TranscribeLanguageModelInputDataConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a>

---


### TranscribeLanguageModelTimeoutsOutputReference <a name="TranscribeLanguageModelTimeoutsOutputReference" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.Initializer"></a>

```typescript
import { transcribeLanguageModel } from '@cdktf/provider-aws'

new transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TranscribeLanguageModelTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a> | cdktf.IResolvable

---



