# `transcribeVocabularyFilter` Submodule <a name="`transcribeVocabularyFilter` Submodule" id="@cdktf/provider-aws.transcribeVocabularyFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeVocabularyFilter <a name="TranscribeVocabularyFilter" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter aws_transcribe_vocabulary_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer"></a>

```typescript
import { transcribeVocabularyFilter } from '@cdktf/provider-aws'

new transcribeVocabularyFilter.TranscribeVocabularyFilter(scope: Construct, id: string, config: TranscribeVocabularyFilterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig">TranscribeVocabularyFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig">TranscribeVocabularyFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetVocabularyFilterFileUri">resetVocabularyFilterFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetWords">resetWords</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetVocabularyFilterFileUri` <a name="resetVocabularyFilterFileUri" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetVocabularyFilterFileUri"></a>

```typescript
public resetVocabularyFilterFileUri(): void
```

##### `resetWords` <a name="resetWords" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetWords"></a>

```typescript
public resetWords(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isConstruct"></a>

```typescript
import { transcribeVocabularyFilter } from '@cdktf/provider-aws'

transcribeVocabularyFilter.TranscribeVocabularyFilter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformElement"></a>

```typescript
import { transcribeVocabularyFilter } from '@cdktf/provider-aws'

transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformResource"></a>

```typescript
import { transcribeVocabularyFilter } from '@cdktf/provider-aws'

transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.downloadUri">downloadUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterFileUriInput">vocabularyFilterFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterNameInput">vocabularyFilterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.wordsInput">wordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterFileUri">vocabularyFilterFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterName">vocabularyFilterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.words">words</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `downloadUri`<sup>Required</sup> <a name="downloadUri" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.downloadUri"></a>

```typescript
public readonly downloadUri: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vocabularyFilterFileUriInput`<sup>Optional</sup> <a name="vocabularyFilterFileUriInput" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterFileUriInput"></a>

```typescript
public readonly vocabularyFilterFileUriInput: string;
```

- *Type:* string

---

##### `vocabularyFilterNameInput`<sup>Optional</sup> <a name="vocabularyFilterNameInput" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterNameInput"></a>

```typescript
public readonly vocabularyFilterNameInput: string;
```

- *Type:* string

---

##### `wordsInput`<sup>Optional</sup> <a name="wordsInput" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.wordsInput"></a>

```typescript
public readonly wordsInput: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vocabularyFilterFileUri`<sup>Required</sup> <a name="vocabularyFilterFileUri" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterFileUri"></a>

```typescript
public readonly vocabularyFilterFileUri: string;
```

- *Type:* string

---

##### `vocabularyFilterName`<sup>Required</sup> <a name="vocabularyFilterName" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterName"></a>

```typescript
public readonly vocabularyFilterName: string;
```

- *Type:* string

---

##### `words`<sup>Required</sup> <a name="words" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.words"></a>

```typescript
public readonly words: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeVocabularyFilterConfig <a name="TranscribeVocabularyFilterConfig" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.Initializer"></a>

```typescript
import { transcribeVocabularyFilter } from '@cdktf/provider-aws'

const transcribeVocabularyFilterConfig: transcribeVocabularyFilter.TranscribeVocabularyFilterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.languageCode">languageCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#language_code TranscribeVocabularyFilter#language_code}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.vocabularyFilterName">vocabularyFilterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#vocabulary_filter_name TranscribeVocabularyFilter#vocabulary_filter_name}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#id TranscribeVocabularyFilter#id}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#tags TranscribeVocabularyFilter#tags}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#tags_all TranscribeVocabularyFilter#tags_all}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.vocabularyFilterFileUri">vocabularyFilterFileUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#vocabulary_filter_file_uri TranscribeVocabularyFilter#vocabulary_filter_file_uri}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.words">words</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#words TranscribeVocabularyFilter#words}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#language_code TranscribeVocabularyFilter#language_code}.

---

##### `vocabularyFilterName`<sup>Required</sup> <a name="vocabularyFilterName" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.vocabularyFilterName"></a>

```typescript
public readonly vocabularyFilterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#vocabulary_filter_name TranscribeVocabularyFilter#vocabulary_filter_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#id TranscribeVocabularyFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#tags TranscribeVocabularyFilter#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#tags_all TranscribeVocabularyFilter#tags_all}.

---

##### `vocabularyFilterFileUri`<sup>Optional</sup> <a name="vocabularyFilterFileUri" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.vocabularyFilterFileUri"></a>

```typescript
public readonly vocabularyFilterFileUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#vocabulary_filter_file_uri TranscribeVocabularyFilter#vocabulary_filter_file_uri}.

---

##### `words`<sup>Optional</sup> <a name="words" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.words"></a>

```typescript
public readonly words: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#words TranscribeVocabularyFilter#words}.

---



