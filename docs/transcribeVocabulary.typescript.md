# `transcribeVocabulary` Submodule <a name="`transcribeVocabulary` Submodule" id="@cdktf/provider-aws.transcribeVocabulary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeVocabulary <a name="TranscribeVocabulary" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary aws_transcribe_vocabulary}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer"></a>

```typescript
import { transcribeVocabulary } from '@cdktf/provider-aws'

new transcribeVocabulary.TranscribeVocabulary(scope: Construct, id: string, config: TranscribeVocabularyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig">TranscribeVocabularyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig">TranscribeVocabularyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetPhrases">resetPhrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetVocabularyFileUri">resetVocabularyFileUri</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.putTimeouts"></a>

```typescript
public putTimeouts(value: TranscribeVocabularyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPhrases` <a name="resetPhrases" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetPhrases"></a>

```typescript
public resetPhrases(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVocabularyFileUri` <a name="resetVocabularyFileUri" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetVocabularyFileUri"></a>

```typescript
public resetVocabularyFileUri(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.isConstruct"></a>

```typescript
import { transcribeVocabulary } from '@cdktf/provider-aws'

transcribeVocabulary.TranscribeVocabulary.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.isTerraformElement"></a>

```typescript
import { transcribeVocabulary } from '@cdktf/provider-aws'

transcribeVocabulary.TranscribeVocabulary.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.isTerraformResource"></a>

```typescript
import { transcribeVocabulary } from '@cdktf/provider-aws'

transcribeVocabulary.TranscribeVocabulary.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.downloadUri">downloadUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference">TranscribeVocabularyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.phrasesInput">phrasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUriInput">vocabularyFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyNameInput">vocabularyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.phrases">phrases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUri">vocabularyFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyName">vocabularyName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `downloadUri`<sup>Required</sup> <a name="downloadUri" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.downloadUri"></a>

```typescript
public readonly downloadUri: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.timeouts"></a>

```typescript
public readonly timeouts: TranscribeVocabularyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference">TranscribeVocabularyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `phrasesInput`<sup>Optional</sup> <a name="phrasesInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.phrasesInput"></a>

```typescript
public readonly phrasesInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: TranscribeVocabularyTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a> | cdktf.IResolvable

---

##### `vocabularyFileUriInput`<sup>Optional</sup> <a name="vocabularyFileUriInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUriInput"></a>

```typescript
public readonly vocabularyFileUriInput: string;
```

- *Type:* string

---

##### `vocabularyNameInput`<sup>Optional</sup> <a name="vocabularyNameInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyNameInput"></a>

```typescript
public readonly vocabularyNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `phrases`<sup>Required</sup> <a name="phrases" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.phrases"></a>

```typescript
public readonly phrases: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vocabularyFileUri`<sup>Required</sup> <a name="vocabularyFileUri" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUri"></a>

```typescript
public readonly vocabularyFileUri: string;
```

- *Type:* string

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyName"></a>

```typescript
public readonly vocabularyName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeVocabularyConfig <a name="TranscribeVocabularyConfig" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.Initializer"></a>

```typescript
import { transcribeVocabulary } from '@cdktf/provider-aws'

const transcribeVocabularyConfig: transcribeVocabulary.TranscribeVocabularyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.languageCode">languageCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#language_code TranscribeVocabulary#language_code}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyName">vocabularyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#vocabulary_name TranscribeVocabulary#vocabulary_name}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#id TranscribeVocabulary#id}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.phrases">phrases</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#phrases TranscribeVocabulary#phrases}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#tags TranscribeVocabulary#tags}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#tags_all TranscribeVocabulary#tags_all}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyFileUri">vocabularyFileUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#vocabulary_file_uri TranscribeVocabulary#vocabulary_file_uri}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#language_code TranscribeVocabulary#language_code}.

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyName"></a>

```typescript
public readonly vocabularyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#vocabulary_name TranscribeVocabulary#vocabulary_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#id TranscribeVocabulary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `phrases`<sup>Optional</sup> <a name="phrases" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.phrases"></a>

```typescript
public readonly phrases: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#phrases TranscribeVocabulary#phrases}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#tags TranscribeVocabulary#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#tags_all TranscribeVocabulary#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: TranscribeVocabularyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#timeouts TranscribeVocabulary#timeouts}

---

##### `vocabularyFileUri`<sup>Optional</sup> <a name="vocabularyFileUri" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyFileUri"></a>

```typescript
public readonly vocabularyFileUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#vocabulary_file_uri TranscribeVocabulary#vocabulary_file_uri}.

---

### TranscribeVocabularyTimeouts <a name="TranscribeVocabularyTimeouts" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts.Initializer"></a>

```typescript
import { transcribeVocabulary } from '@cdktf/provider-aws'

const transcribeVocabularyTimeouts: transcribeVocabulary.TranscribeVocabularyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#create TranscribeVocabulary#create}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#delete TranscribeVocabulary#delete}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#update TranscribeVocabulary#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#create TranscribeVocabulary#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#delete TranscribeVocabulary#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#update TranscribeVocabulary#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranscribeVocabularyTimeoutsOutputReference <a name="TranscribeVocabularyTimeoutsOutputReference" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.Initializer"></a>

```typescript
import { transcribeVocabulary } from '@cdktf/provider-aws'

new transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TranscribeVocabularyTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a> | cdktf.IResolvable

---



